const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(__dirname, "..");
const audioRoot = path.join(root, "audio");
const manifestPath = path.join(root, "data", "audio-manifest.js");
const previewDataPath = path.join(audioRoot, "audio-preview-data.json");
const model = "gpt-4o-mini-tts";
const voiceMap = {
  male: "cedar",
  female: "marin",
  default: "cedar"
};
const hardInstruction = "Speak exactly the input text. Do not add, remove, explain, or paraphrase words.";
const validVoiceOverrides = new Set(["cedar", "marin"]);
const textExtensions = new Set([".js", ".json", ".md", ".txt"]);
const excludedDirs = new Set([".git", "node_modules", "dist", "audio", "outputs"]);

function parseArgs(argv) {
  const options = {
    dryRun: false,
    force: false,
    cases: [],
    voice: ""
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--case") {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error("--case requires a case id.");
      }
      options.cases.push(value);
      index += 1;
    } else if (arg === "--voice") {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error("--voice requires a voice name.");
      }
      if (!validVoiceOverrides.has(value)) {
        throw new Error("--voice must be cedar or marin.");
      }
      options.voice = value;
      index += 1;
    } else {
      throw new Error(`Unknown flag: ${arg}`);
    }
  }

  return options;
}

function isInside(parent, child) {
  const relative = path.relative(parent, child);
  return Boolean(relative) && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function relativeToRoot(filePath) {
  return path.relative(root, filePath).replace(/\\/g, "/");
}

function walkFiles(startDir, files) {
  if (!fs.existsSync(startDir)) return files;

  fs.readdirSync(startDir, { withFileTypes: true }).forEach((entry) => {
    const entryPath = path.join(startDir, entry.name);
    if (entry.isDirectory()) {
      if (!excludedDirs.has(entry.name)) {
        walkFiles(entryPath, files);
      }
      return;
    }

    if (textExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath);
    }
  });

  return files;
}

function getSourceFiles() {
  const files = walkFiles(root, []);
  const attachmentRoot = path.join(os.homedir(), ".codex", "attachments");

  if (fs.existsSync(attachmentRoot)) {
    fs.readdirSync(attachmentRoot, { withFileTypes: true }).forEach((entry) => {
      const pastedText = path.join(attachmentRoot, entry.name, "pasted-text.txt");
      if (entry.isDirectory() && fs.existsSync(pastedText)) {
        files.push(pastedText);
      }
    });
  }

  return files;
}

function findBalancedObject(text, startIndex) {
  const openIndex = text.indexOf("{", startIndex);
  if (openIndex === -1) return "";

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = openIndex; index < text.length; index += 1) {
    const char = text[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
    } else if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return text.slice(openIndex, index + 1);
      }
    }
  }

  return "";
}

function isVoiceBlock(value) {
  return Boolean(value && typeof value.case_id === "string" && Array.isArray(value.audio_lines));
}

function extractBlocksFromFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const blocks = [];
  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".json" || text.trim().startsWith("{")) {
    try {
      const parsed = JSON.parse(text);
      if (isVoiceBlock(parsed)) {
        blocks.push({ data: parsed, source: filePath, mtimeMs: stat.mtimeMs });
      }
    } catch (error) {
      return blocks;
    }
  }

  let searchIndex = 0;
  const marker = "VOICE_JSON_FOR_AUDIO_GENERATION";
  while (searchIndex < text.length) {
    const markerIndex = text.indexOf(marker, searchIndex);
    if (markerIndex === -1) break;

    const jsonText = findBalancedObject(text, markerIndex + marker.length);
    if (jsonText) {
      try {
        const parsed = JSON.parse(jsonText);
        if (isVoiceBlock(parsed)) {
          blocks.push({ data: parsed, source: filePath, mtimeMs: stat.mtimeMs });
        }
      } catch (error) {
        // Ignore non-JSON examples near the marker.
      }
    }

    searchIndex = markerIndex + marker.length;
  }

  return blocks;
}

function sourceRank(filePath) {
  return filePath.startsWith(root) ? 0 : 1;
}

function discoverVoiceBlocks() {
  const blocks = [];
  getSourceFiles().forEach((filePath) => {
    extractBlocksFromFile(filePath).forEach((block) => blocks.push(block));
  });

  blocks.sort((a, b) => {
    const rankDifference = sourceRank(a.source) - sourceRank(b.source);
    if (rankDifference) return rankDifference;
    return b.mtimeMs - a.mtimeMs;
  });

  const byCaseId = new Map();
  const duplicates = [];

  blocks.forEach((block) => {
    const caseId = block.data.case_id;
    if (byCaseId.has(caseId)) {
      duplicates.push({ case_id: caseId, ignored_source: block.source, used_source: byCaseId.get(caseId).source });
      return;
    }
    byCaseId.set(caseId, block);
  });

  return { blocks: Array.from(byCaseId.values()), duplicates };
}

function hasMarkdown(value) {
  return /```|\*\*|__|\[[^\]]+\]\([^)]+\)/.test(value) || /^\s{0,3}#{1,6}\s/m.test(value);
}

function outputPathFor(caseId, fileName) {
  return path.resolve(audioRoot, caseId, fileName);
}

function validateBlock(block) {
  const data = block.data;
  const warnings = [];
  const errors = [];
  const seenFileNames = new Set();
  const seenTriggers = new Set();

  if (!data.case_id) errors.push("case_id is missing.");
  if (!data.patient_voice_profile || typeof data.patient_voice_profile !== "object") {
    errors.push("patient_voice_profile is missing.");
  } else if (!data.patient_voice_profile.sex) {
    warnings.push("patient_voice_profile.sex is missing. Defaulting to cedar.");
  }

  if (!Array.isArray(data.audio_lines)) {
    errors.push("audio_lines must be an array.");
  }

  const caseDir = path.resolve(audioRoot, data.case_id || "");
  if (!isInside(audioRoot, caseDir)) {
    errors.push("case_id resolves outside the audio folder.");
  }

  (data.audio_lines || []).forEach((line, index) => {
    const label = `audio_lines[${index}]`;
    ["file_name", "trigger", "spoken_text", "voice_direction"].forEach((field) => {
      if (!line[field]) errors.push(`${label}.${field} is missing.`);
    });

    if (line.spoken_text && !String(line.spoken_text).trim()) {
      errors.push(`${label}.spoken_text is empty.`);
    }
    if (line.spoken_text && /You:|Examiner:/.test(line.spoken_text)) {
      errors.push(`${label}.spoken_text contains non-patient speaker text.`);
    }
    if (line.spoken_text && hasMarkdown(line.spoken_text)) {
      errors.push(`${label}.spoken_text appears to contain markdown.`);
    }
    if (line.file_name && !String(line.file_name).endsWith(".mp3")) {
      errors.push(`${label}.file_name must end with .mp3.`);
    }
    if (line.file_name) {
      const outputPath = outputPathFor(data.case_id || "", line.file_name);
      if (!isInside(audioRoot, outputPath)) {
        errors.push(`${label}.file_name resolves outside the audio folder.`);
      }
      if (seenFileNames.has(line.file_name)) {
        errors.push(`${label}.file_name duplicates another line.`);
      }
      seenFileNames.add(line.file_name);
    }
    if (line.trigger) {
      const duplicateAllowed = Boolean(line.allow_duplicate_trigger || line.duplicate_trigger_intended || data.allow_duplicate_triggers);
      if (seenTriggers.has(line.trigger) && !duplicateAllowed) {
        errors.push(`${label}.trigger duplicates another line.`);
      }
      seenTriggers.add(line.trigger);
    }
  });

  return { warnings, errors };
}

function selectVoice(profile, overrideVoice) {
  if (overrideVoice) {
    return {
      voice: overrideVoice,
      reason: `Manual test override: ${overrideVoice}.`,
      warnings: []
    };
  }

  const sex = profile && profile.sex ? String(profile.sex).trim().toLowerCase() : "";
  if (sex === "male" || sex === "female") {
    return {
      voice: voiceMap[sex],
      reason: `Selected ${voiceMap[sex]} from patient_voice_profile.sex=${sex}.`,
      warnings: []
    };
  }

  return {
    voice: voiceMap.default,
    reason: "Selected cedar because patient_voice_profile.sex is missing or unclear.",
    warnings: ["patient_voice_profile.sex is missing or unclear. Defaulting to cedar."]
  };
}

function buildInstructions(profile, line) {
  return [
    profile && profile.accent,
    profile && profile.emotional_state,
    profile && profile.energy_level,
    profile && profile.speech_pace,
    profile && profile.clinical_condition_effect_on_voice,
    profile && profile.overall_voice_instruction,
    line && line.voice_direction ? `Line direction: ${line.voice_direction}` : "",
    hardInstruction
  ].filter(Boolean).join("\n");
}

async function requestSpeech({ apiKey, voice, line, profile }) {
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      voice,
      input: line.spoken_text,
      instructions: buildInstructions(profile, line),
      response_format: "mp3"
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI speech request failed (${response.status}): ${body.slice(0, 500)}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

function makeReport({ block, selectedVoice, voiceReason, warnings, generated, skipped, failed }) {
  return {
    case_id: block.data.case_id,
    model,
    selected_voice: selectedVoice,
    voice_selection_reason: voiceReason,
    generated_files: generated,
    skipped_files: skipped,
    failed_files: failed,
    total_audio_lines: block.data.audio_lines.length,
    warnings,
    timestamp: new Date().toISOString()
  };
}

function writeJson(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2) + "\n");
}

function writeReport(report) {
  writeJson(path.join(audioRoot, report.case_id, "generation-report.json"), report);
}

function writeAudioManifest(reportsByCase) {
  const manifest = {};

  reportsByCase.forEach((report) => {
    const files = report.generated_files.concat(report.skipped_files)
      .filter((entry) => entry.path && fs.existsSync(path.join(root, entry.path)));
    manifest[report.case_id] = files.map((entry) => entry.path.replace(/\\/g, "/"));
  });

  const content = `(function () {\n  window.AMC_AUDIO_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n})();\n`;
  ensureDir(path.dirname(manifestPath));
  fs.writeFileSync(manifestPath, content);
}

function writePreviewData(reportsByCase, blocksByCase) {
  const cases = reportsByCase.map((report) => {
    const block = blocksByCase.get(report.case_id);
    const available = new Set(report.generated_files.concat(report.skipped_files).map((entry) => entry.file_name));
    return {
      case_id: report.case_id,
      selected_voice: report.selected_voice,
      clips: block.data.audio_lines.filter((line) => available.has(line.file_name)).map((line) => ({
        trigger: line.trigger,
        spoken_text: line.spoken_text,
        voice_direction: line.voice_direction,
        selected_voice: report.selected_voice,
        audio_src: `audio/${report.case_id}/${line.file_name}`
      }))
    };
  });

  writeJson(previewDataPath, {
    disclosure: "Patient voices are AI-generated for clinical rehearsal.",
    generated_at: new Date().toISOString(),
    cases
  });
}

async function processBlock(block, options, apiKey) {
  const validation = validateBlock(block);
  const voiceSelection = selectVoice(block.data.patient_voice_profile, options.voice);
  const warnings = validation.warnings.concat(voiceSelection.warnings);
  const generated = [];
  const skipped = [];
  const failed = [];

  if (validation.errors.length) {
    return {
      report: makeReport({
        block,
        selectedVoice: voiceSelection.voice,
        voiceReason: voiceSelection.reason,
        warnings,
        generated,
        skipped,
        failed: validation.errors.map((error) => ({ error }))
      }),
      valid: false
    };
  }

  for (const line of block.data.audio_lines) {
    const outputPath = outputPathFor(block.data.case_id, line.file_name);
    const relativePath = relativeToRoot(outputPath);
    const entry = { file_name: line.file_name, trigger: line.trigger, path: relativePath };

    if (fs.existsSync(outputPath) && !options.force) {
      skipped.push(Object.assign({ reason: "exists" }, entry));
      continue;
    }

    if (options.dryRun) {
      generated.push(Object.assign({ reason: "planned" }, entry));
      continue;
    }

    try {
      ensureDir(path.dirname(outputPath));
      const audioBuffer = await requestSpeech({
        apiKey,
        voice: voiceSelection.voice,
        line,
        profile: block.data.patient_voice_profile
      });
      fs.writeFileSync(outputPath, audioBuffer);
      generated.push(entry);
    } catch (error) {
      failed.push(Object.assign({ error: error.message }, entry));
    }
  }

  return {
    report: makeReport({
      block,
      selectedVoice: voiceSelection.voice,
      voiceReason: voiceSelection.reason,
      warnings,
      generated,
      skipped,
      failed
    }),
    valid: failed.length === 0
  };
}

function printReport(report, dryRun) {
  const mode = dryRun ? "Dry run" : "Generated";
  console.log(`\n${mode}: ${report.case_id}`);
  console.log(`Voice: ${report.selected_voice}`);
  if (report.warnings.length) {
    report.warnings.forEach((warning) => console.warn(`Warning: ${warning}`));
  }
  console.log(`Lines: ${report.total_audio_lines}`);
  console.log(`Created/planned: ${report.generated_files.length}`);
  report.generated_files.forEach((entry) => console.log(`  + ${entry.path}`));
  console.log(`Skipped: ${report.skipped_files.length}`);
  report.skipped_files.forEach((entry) => console.log(`  = ${entry.path}`));
  console.log(`Failed: ${report.failed_files.length}`);
  report.failed_files.forEach((entry) => console.error(`  ! ${entry.file_name || ""} ${entry.error}`.trim()));
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const discovery = discoverVoiceBlocks();
  const requestedCases = new Set(options.cases);
  const blocks = discovery.blocks.filter((block) => !requestedCases.size || requestedCases.has(block.data.case_id));
  const missingCases = options.cases.filter((caseId) => !discovery.blocks.some((block) => block.data.case_id === caseId));

  discovery.duplicates.forEach((duplicate) => {
    console.warn(`Warning: duplicate ${duplicate.case_id} voice block ignored from ${duplicate.ignored_source}`);
  });

  if (!blocks.length) {
    throw new Error("No VOICE_JSON_FOR_AUDIO_GENERATION blocks found for the requested case selection.");
  }

  if (missingCases.length) {
    throw new Error(`No VOICE_JSON_FOR_AUDIO_GENERATION block found for: ${missingCases.join(", ")}`);
  }

  let apiKey = "";
  if (!options.dryRun) {
    const hasFilesToGenerate = blocks.some((block) => block.data.audio_lines.some((line) => {
      const outputPath = outputPathFor(block.data.case_id, line.file_name);
      return options.force || !fs.existsSync(outputPath);
    }));

    if (hasFilesToGenerate) {
      apiKey = process.env.OPENAI_API_KEY || "";
      if (!apiKey) {
        throw new Error("OPENAI_API_KEY is missing from the local environment.");
      }
    }
  }

  const reports = [];
  const blocksByCase = new Map();
  let ok = true;

  for (const block of blocks) {
    blocksByCase.set(block.data.case_id, block);
    const result = await processBlock(block, options, apiKey);
    reports.push(result.report);
    printReport(result.report, options.dryRun);
    if (!result.valid) ok = false;
    if (!options.dryRun) {
      writeReport(result.report);
    }
  }

  if (!options.dryRun) {
    writeAudioManifest(reports);
    writePreviewData(reports, blocksByCase);
  }

  if (!ok) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
