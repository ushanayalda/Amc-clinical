const childProcess = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const engine = require("./amc-engine-lib");

const root = path.resolve(__dirname, "..");
const caseId = process.argv[2];

if (!/^case-[0-9]{3}$/.test(caseId || "")) {
  throw new Error("Usage: node scripts/measure-case-timing.js case-NNN");
}

const casePath = path.join(root, "data", "current-cases", caseId + ".js");
const blueprintPath = path.join(root, "data", "blueprints", caseId + ".blueprint.json");
const evidencePath = path.join(
  root,
  "audits",
  caseId.replace("case-", "CASE_") + "_TIMING_EVIDENCE.json"
);

const context = { window: { AMC_CURRENT_CASES: [] } };
vm.runInNewContext(fs.readFileSync(casePath, "utf8"), context, { filename: casePath });
const caseData = context.window.AMC_CURRENT_CASES[0];
const blueprint = JSON.parse(fs.readFileSync(blueprintPath, "utf8"));

if (!caseData || caseData.id !== caseId || blueprint.caseId !== caseId) {
  throw new Error("Case, blueprint and requested identifier do not match");
}

const ffmpegVersionResult = childProcess.spawnSync("ffmpeg", ["-version"], { encoding: "utf8" });
if (ffmpegVersionResult.status !== 0) {
  throw new Error("FFmpeg is required for the timing rehearsal");
}
const ffmpegVersion = ffmpegVersionResult.stdout.split(/\r?\n/)[0].trim();
const filtersResult = childProcess.spawnSync("ffmpeg", ["-hide_banner", "-filters"], { encoding: "utf8" });
if (filtersResult.status !== 0 || !/^\s*\.\.\.\s+flite\s/m.test(filtersResult.stdout)) {
  throw new Error("This FFmpeg build does not include the libflite source filter");
}

const voiceBySpeaker = {
  Doctor: "slt",
  Patient: "rms",
  Examiner: "awb"
};
const sampleRate = 16000;
const bytesPerSample = 2;
const bytesPerSecond = sampleRate * bytesPerSample;
const lines = engine.flattenLines(caseData);
const lineTaskIds = new Map();

blueprint.performance.taskEvidence.forEach((task) => {
  task.runLineIds.forEach((lineId) => {
    if (lineTaskIds.has(lineId)) throw new Error("Line mapped to more than one task: " + lineId);
    lineTaskIds.set(lineId, task.taskId);
  });
});

lines.forEach((line) => {
  if (!lineTaskIds.has(line.id)) throw new Error("Line is not mapped to a task: " + line.id);
});

const actionSecondsByLine = new Map(
  blueprint.performance.actionDurations.map((item) => [item.lineId, item.seconds])
);
const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), caseId + "-timing-"));
const lineTimings = [];
let elapsedSeconds = 0;

try {
  lines.forEach((line, index) => {
    const startSeconds = elapsedSeconds;
    let renderedSeconds;
    let voice = null;
    let evidenceType;

    if (line.kind === "action") {
      renderedSeconds = actionSecondsByLine.get(line.id);
      if (!Number.isInteger(renderedSeconds)) {
        throw new Error("Action duration is missing for " + line.id);
      }
      evidenceType = "reviewed_action_interval";
    } else {
      voice = voiceBySpeaker[line.speaker];
      if (!voice) throw new Error("No synthetic voice is assigned to speaker " + line.speaker);
      const textPath = path.join(temporaryDirectory, String(index).padStart(3, "0") + ".txt");
      fs.writeFileSync(textPath, line.text + "\n");
      const render = childProcess.spawnSync(
        "ffmpeg",
        [
          "-v", "error",
          "-f", "lavfi",
          "-i", "flite=textfile=" + textPath + ":voice=" + voice,
          "-f", "s16le",
          "-acodec", "pcm_s16le",
          "-ac", "1",
          "-ar", String(sampleRate),
          "pipe:1"
        ],
        { encoding: null, maxBuffer: 64 * 1024 * 1024 }
      );
      if (render.status !== 0) {
        throw new Error("FFmpeg failed for " + line.id + ": " + String(render.stderr || "").trim());
      }
      renderedSeconds = render.stdout.length / bytesPerSecond;
      evidenceType = "rendered_pcm_audio";
    }

    elapsedSeconds += renderedSeconds;
    lineTimings.push({
      lineId: line.id,
      taskId: lineTaskIds.get(line.id),
      speaker: line.speaker,
      kind: line.kind,
      evidenceType,
      voice,
      spokenWords: line.kind === "action" ? 0 : engine.wordCount(line.text),
      observedSeconds: Number(renderedSeconds.toFixed(6)),
      elapsedStartSeconds: Number(startSeconds.toFixed(6)),
      elapsedEndSeconds: Number(elapsedSeconds.toFixed(6))
    });
  });
} finally {
  fs.rmSync(temporaryDirectory, { recursive: true, force: true });
}

const taskRaw = blueprint.performance.taskEvidence.map((task) => {
  const timings = lineTimings.filter((line) => line.taskId === task.taskId);
  const speechSeconds = timings
    .filter((line) => line.kind !== "action")
    .reduce((sum, line) => sum + line.observedSeconds, 0);
  const actionSeconds = timings
    .filter((line) => line.kind === "action")
    .reduce((sum, line) => sum + line.observedSeconds, 0);
  return {
    taskId: task.taskId,
    spokenWords: timings.reduce((sum, line) => sum + line.spokenWords, 0),
    speechSeconds,
    actionSeconds,
    rawTotalSeconds: speechSeconds + actionSeconds
  };
});

const totalObservedSeconds = Math.round(elapsedSeconds);
const taskFloors = taskRaw.map((task) => Math.floor(task.rawTotalSeconds));
let remainder = totalObservedSeconds - taskFloors.reduce((sum, value) => sum + value, 0);
const fractionalOrder = taskRaw
  .map((task, index) => ({ index, fraction: task.rawTotalSeconds - taskFloors[index] }))
  .sort((a, b) => b.fraction - a.fraction || a.index - b.index);
for (let index = 0; index < remainder; index += 1) {
  taskFloors[fractionalOrder[index].index] += 1;
}

const taskTotals = taskRaw.map((task, index) => ({
  taskId: task.taskId,
  spokenWords: task.spokenWords,
  speechSeconds: Number(task.speechSeconds.toFixed(3)),
  actionSeconds: Number(task.actionSeconds.toFixed(3)),
  rawTotalSeconds: Number(task.rawTotalSeconds.toFixed(3)),
  observedSeconds: taskFloors[index]
}));
const spokenWords = lineTimings.reduce((sum, line) => sum + line.spokenWords, 0);
const renderedSpeechSeconds = lineTimings
  .filter((line) => line.kind !== "action")
  .reduce((sum, line) => sum + line.observedSeconds, 0);
const actionSeconds = lineTimings
  .filter((line) => line.kind === "action")
  .reduce((sum, line) => sum + line.observedSeconds, 0);
const prompt = lineTimings.find((line) => line.lineId === "run-time-prompt");

const evidence = {
  evidenceVersion: "1.0.0",
  caseId,
  caseContentSha256: engine.contentHash(caseData),
  generatedAt: new Date().toISOString(),
  method: "ffmpeg_libflite_line_by_line_audio_render",
  ffmpegVersion,
  audioFormat: {
    codec: "pcm_s16le",
    sampleRate,
    channels: 1,
    bytesPerSample
  },
  voiceBySpeaker,
  boundaryModel: "Each visible non-Action line is rendered separately. Libflite's own leading and trailing silence supplies the turn boundary; no extra pause is added.",
  actionModel: "Action intervals are the explicitly reviewed integer durations in the hidden blueprint and are reported separately from rendered speech.",
  limitation: "Synthetic speech verifies reproducible elapsed-time feasibility only. It does not replace the separate natural-dialogue and clinical-quality reviews.",
  spokenWords,
  renderedSpeechSeconds: Number(renderedSpeechSeconds.toFixed(3)),
  actionSeconds: Number(actionSeconds.toFixed(3)),
  rawTotalSeconds: Number(elapsedSeconds.toFixed(3)),
  totalObservedSeconds,
  impliedRenderedWordsPerMinute: Number((spokenWords / renderedSpeechSeconds * 60).toFixed(1)),
  milestones: {
    threeMinutePromptStartSeconds: prompt ? Number(prompt.elapsedStartSeconds.toFixed(3)) : null,
    threeMinutePromptEndSeconds: prompt ? Number(prompt.elapsedEndSeconds.toFixed(3)) : null
  },
  taskTotals,
  lineTimings
};

fs.writeFileSync(evidencePath, JSON.stringify(evidence, null, 2) + "\n");
console.log(JSON.stringify({
  evidencePath: path.relative(root, evidencePath),
  caseContentSha256: evidence.caseContentSha256,
  spokenWords,
  renderedSpeechSeconds: evidence.renderedSpeechSeconds,
  actionSeconds: evidence.actionSeconds,
  rawTotalSeconds: evidence.rawTotalSeconds,
  totalObservedSeconds,
  threeMinutePromptStartSeconds: evidence.milestones.threeMinutePromptStartSeconds,
  taskTotals
}, null, 2));
