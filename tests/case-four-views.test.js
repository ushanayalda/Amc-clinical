const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const crypto = require("node:crypto");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
const caseFiles = fs.readdirSync(path.join(root, "data", "cases"))
  .filter((file) => /^case-[0-9]+[.]js$/.test(file))
  .sort();
caseFiles.forEach((file) => {
  vm.runInContext(fs.readFileSync(path.join(root, "data/cases", file), "utf8"), context);
});

const viewModel = require("../assets/js/case-views.js");
const cases = context.window.AMC_CASES;
const caseData = context.window.AMC_CASES[0];

test("Case 1 remains the protected canonical four-view case", () => {
  assert.equal(context.window.AMC_CASES.length, caseFiles.length);
  assert.equal(caseData.id, "case-001");
  assert.equal(caseData.status, "review");
  assert.equal(caseData.modality, "in_person");
  assert.ok(caseData.stem.lines.length > 0);
  assert.ok(caseData.run.sections.length > 0);
  assert.equal(caseData.reasoning, undefined, "annotated case text must not be duplicated");
});

test("new cases are canonical exam-only sources for the separate reasoning branch", () => {
  const expectedIds = caseFiles.map((file) => file.replace(/[.]js$/, ""));
  assert.deepEqual(Array.from(cases, (item) => item.id), expectedIds);
  cases.slice(1).forEach((item) => {
    assert.equal(item.reasoningAvailable, false, `${item.id} must remain exam-only in this branch`);
    assert.equal(item.reasoningCompass, undefined, `${item.id} contains a reasoning compass`);
    assert.equal(item.hints, undefined, `${item.id} contains Hints`);
    assert.equal(item.sources, undefined, `${item.id} contains learner-facing reasoning sources`);
    assert.ok(item.stem.lines.length > 0);
    assert.ok(item.stem.tasks.length > 0);
    assert.ok(item.run.sections.length > 0);
    assert.deepEqual(viewModel.validateCase(item), []);
  });
});

test("case selection rejects stale IDs and reasoning hashes fall back to Exam", () => {
  assert.equal(viewModel.selectCase(cases, "case-002").id, "case-002");
  assert.equal(viewModel.selectCase(cases, "missing-case"), null);
  assert.equal(viewModel.selectCase(cases, "").id, "case-001");
  assert.equal(viewModel.viewForCase(cases[1], "#reasoning-full-run").id, "exam-full-run");
  assert.equal(viewModel.viewForCase(caseData, "#reasoning-full-run").id, "reasoning-full-run");
});

test("malformed generated cases fail validation without throwing", () => {
  assert.doesNotThrow(() => viewModel.validateCase({ id: "broken" }));
  assert.ok(viewModel.validateCase({ id: "broken" }).length > 0);
  assert.deepEqual(viewModel.itemsForSurface({}, "stem"), []);
  assert.deepEqual(viewModel.itemsForSurface({}, "run"), []);
});

test("shared UI chrome uses learner-facing language and hides branch workflow", () => {
  const appSource = fs.readFileSync(path.join(root, "assets/js/app.js"), "utf8");
  assert.doesNotMatch(appSource, /Candidate information/);
  assert.doesNotMatch(appSource, /The Reasoning version is produced separately/);
  assert.match(appSource, /Your station information/);
  assert.match(appSource, /Open the first available case/);
});

test("every canonical case is loaded by the source shell and discovered by the build", () => {
  const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const buildSource = fs.readFileSync(path.join(root, "scripts/build-pages.js"), "utf8");
  caseFiles.forEach((file) => {
    assert.match(indexSource, new RegExp("data/cases/" + file.replace(/[.]/g, "[.]")));
  });
  assert.match(buildSource, /readdirSync\(path[.]join\(root, "data", "cases"\)\)/);
});

test("new case files contain complete station voices without learner-facing reasoning text", () => {
  cases.slice(1).forEach((item) => {
    const turns = item.run.sections.flatMap((section) => section.turns);
    const speakers = new Set(turns.map((turn) => turn.speaker));
    ["Doctor", "Patient", "Examiner", "Action"].forEach((speaker) => {
      assert.ok(speakers.has(speaker), `${item.id} is missing ${speaker}`);
    });
    assert.equal(turns[0].speaker, "Examiner");
    assert.equal(turns.at(-1).speaker, "Examiner");
    const learnerText = JSON.stringify({ stem: item.stem, run: item.run });
    assert.doesNotMatch(learnerText, /\bHint\b|reasoning layer|thinking partner|ADHD/i);
    assert.doesNotMatch(learnerText, /\bcandidate\b/i);
    assert.doesNotMatch(learnerText, /—/);

    const spokenWords = turns
      .filter((turn) => turn.kind === "spoken" || turn.kind === "handover")
      .flatMap((turn) => turn.lines)
      .map((line) => line.text)
      .join(" ")
      .trim()
      .split(/\s+/).length;
    assert.ok(spokenWords >= 750 && spokenWords <= 1050, `${item.id} is not realistic for an 8-minute run`);
  });
});

test("Case 4 treats clinical tension pneumothorax before imaging", () => {
  const case4 = cases.find((item) => item.id === "case-004");
  assert.ok(case4, "Case 4 is missing");

  const turns = case4.run.sections.flatMap((section) => section.turns);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const decompressionIndex = text.indexOf("I will decompress the right chest immediately");
  const imagingIndex = text.indexOf("Arrange a portable chest X-ray");

  assert.ok(decompressionIndex >= 0, "Case 4 lacks immediate decompression");
  assert.ok(imagingIndex > decompressionIndex, "Case 4 places imaging before decompression");
  assert.match(text, /I will not wait for a chest X-ray, CT scan or formal ultrasound/);
  assert.match(text, /The decompression catheter is temporary/);
  assert.match(text, /definitive right intercostal catheter/);
});

test("Case 5 recognises quietening breath sounds as deterioration", () => {
  const case5 = cases.find((item) => item.id === "case-005");
  assert.ok(case5, "Case 5 is missing");

  const text = case5.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");

  assert.match(text, /life-threatening acute asthma/);
  assert.match(text, /quieter wheeze and slower respiratory rate are not improvement/);
  assert.match(text, /maximum of 10 millimoles/);
  assert.match(text, /raised carbon dioxide and acidaemia confirm ventilatory failure/);
  assert.match(text, /Adrenaline is not routine asthma treatment but must be given promptly if anaphylaxis emerges/);
});

test("all four views resolve and legacy case links have safe redirects", () => {
  assert.deepEqual(viewModel.validViews, [
    "exam-stem",
    "exam-full-run",
    "reasoning-stem",
    "reasoning-full-run"
  ]);
  viewModel.validViews.forEach((view) => assert.equal(viewModel.resolveView("#" + view), view));
  assert.equal(viewModel.resolveView("#station-stem"), "exam-stem");
  assert.equal(viewModel.resolveView("#speak-aloud"), "exam-full-run");
  assert.equal(viewModel.resolveView("#hints"), "reasoning-stem");
});

test("the canonical content contract passes", () => {
  assert.deepEqual(viewModel.validateCase(caseData), []);
});

test("Reasoning text is byte-equivalent to Exam text after markers are removed", () => {
  ["stem", "run"].forEach((surface) => {
    viewModel.itemsForSurface(caseData, surface).forEach((item) => {
      const reconstructed = viewModel.segmentsForItem(caseData, surface, item.id, item.text)
        .filter((segment) => segment.type === "text")
        .map((segment) => segment.text)
        .join("");
      assert.equal(reconstructed, item.text, `${surface}/${item.id} changed when annotated`);
    });
  });
});

test("the approved Stem and Full Run remain byte-for-byte unchanged", () => {
  const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.equal(digest(caseData.stem), "6e0c8b46fd899310ba2e348d75dc19f981b6a0b86a3698cf2e5148c264241e96");
  assert.equal(digest(caseData.run), "cd353fbe9e257718c54ff615b8f0d5bf5128d30bb0e89684589844696e2ac5b9");
});

test("every Hint resolves to an exact phrase and a current source link", () => {
  const sourceIds = new Set(caseData.sources.map((source) => source.id));
  assert.ok(caseData.hints.length >= 35, "Case 1 needs a start-to-finish reasoning journey");

  caseData.hints.forEach((hint) => {
    const item = viewModel.itemMap(caseData, hint.target.surface)[hint.target.itemId];
    assert.ok(item, `missing target for ${hint.id}`);
    assert.ok(viewModel.occurrenceIndex(item.text, hint.target.quote, hint.target.occurrence) >= 0, `missing quote for ${hint.id}`);
    ["where", "popUp", "pause", "recap", "reorient"].forEach((field) => {
      assert.ok(hint[field] && hint[field].trim(), `missing ${field} in ${hint.id}`);
    });
    assert.ok(Array.isArray(hint.say) && hint.say.length >= 1, `missing natural speech in ${hint.id}`);
    assert.equal(hint.layers, undefined, `legacy academic layers remain active in ${hint.id}`);
    assert.equal(hint.lead, undefined, `legacy information lead remains active in ${hint.id}`);
    assert.equal(hint.journeyPoint, undefined, `old journey template remains active in ${hint.id}`);
    assert.equal(hint.pal, undefined, `old thinking-partner paragraph remains active in ${hint.id}`);
    assert.equal(hint.hold, undefined, `old hold card remains active in ${hint.id}`);
    assert.equal(hint.next, undefined, `old next-move card remains active in ${hint.id}`);
    assert.ok(hint.citationIds.length >= 1, `uncited Hint ${hint.id}`);
    hint.citationIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), `unknown source ${sourceId}`));
  });
});

test("Hints cover stem, tasks, dialogue, findings, investigations and handover", () => {
  const targets = new Set(caseData.hints.map((hint) => hint.target.itemId));
  [
    "stem-patient",
    "stem-role",
    "stem-start",
    "task-history",
    "task-reasoning",
    "task-management",
    "run-opening-story",
    "run-time-prompt",
    "run-exam-request",
    "run-exam-findings",
    "run-ecg-plan",
    "run-ecg-result",
    "run-aspirin",
    "run-oxygen",
    "run-handover",
    "run-end"
  ].forEach((id) => assert.ok(targets.has(id), `missing mastery target ${id}`));
});

test("the task compass anchors reading, time recovery and task switching", () => {
  assert.equal(caseData.reasoningCompass.stem.steps.length, 3);
  assert.equal(caseData.reasoningCompass.run.steps.length, 3);
  assert.match(caseData.reasoningCompass.stem.anchor, /History 0 to 4/);
  assert.match(caseData.reasoningCompass.run.anchor, /If danger interrupts/);

  const timeHint = caseData.hints.find((hint) => hint.id === "hint-time-prompt");
  assert.match(timeHint.popUp, /still have history questions/i);
  assert.match(timeHint.say.join(" "), /start the explanation now/i);
  assert.match(timeHint.pause, /change tasks/i);
  assert.match(timeHint.reorient, /State the diagnosis/);
});

test("mechanism Hints explain without turning patterns into rigid rules", () => {
  const radiation = caseData.hints.find((hint) => hint.id === "hint-radiation");
  const autonomic = caseData.hints.find((hint) => hint.id === "hint-autonomic");
  assert.match(radiation.say.join(" "), /overlapping areas of the spinal cord/i);
  assert.match(radiation.say.join(" "), /pulmonary embolus often causes pleural irritation/i);
  assert.match(radiation.say.join(" "), /Aortic dissection causes pain from the aortic wall/);
  assert.match(autonomic.say.join(" "), /Sympathetic activation/);
  assert.match(autonomic.say.join(" "), /cannot identify which wall/);
  assert.match(autonomic.say.join(" "), /not explained simply/);
});

test("the learner-facing Hint model is conversational rather than academic", () => {
  const hintsText = caseData.hints.map((hint) => [hint.popUp].concat(hint.say, hint.pause, hint.recap, hint.reorient).join(" ")).join("\n");
  [
    "Pathophysiology",
    "Examiner logic",
    "Clinical weight",
    "Mechanism:",
    "raises the starting chance",
    "earns the heart and circulation first place",
    "adds or removes weight",
    "action follows the whole pattern",
    "you are choosing where to look first",
    "heart near the front",
    "stay open",
    "speed up the safety check",
    "not your mouth",
    "quick route to danger",
    "clues, not passwords",
    "owns the story",
    "history lane",
    "heart lane",
    "safety threshold",
    "task map",
    "old case closed"
  ].forEach((term) => {
    assert.doesNotMatch(hintsText, new RegExp(term, "i"));
  });

  const age = caseData.hints.find((hint) => hint.id === "hint-age");
  assert.equal(age.say[0], "At 60, I would consider a heart-related cause early.");
  assert.equal(age.pause, "Consider the heart early, but do not decide yet.");

  const urgent = caseData.hints.find((hint) => hint.id === "hint-urgent-booking");
  assert.equal(urgent.say[0], "This was booked urgently, so I would first check whether he is unwell now.");
  assert.equal(urgent.pause, "Check his current stability first. There is no need to rush the conversation.");
});

test("the Stem journey does not leak the case diagnosis", () => {
  const stemHints = caseData.hints.filter((hint) => hint.target.surface === "stem");
  const text = stemHints.map((hint) => [hint.popUp].concat(hint.say, hint.pause, hint.recap, hint.reorient).join(" ")).join("\n");
  assert.doesNotMatch(text, /acute coronary syndrome|\bACS\b|heart attack/i);
});

test("the model run contains all station voices and observable event types", () => {
  const turns = caseData.run.sections.flatMap((section) => section.turns);
  const speakers = new Set(turns.map((turn) => turn.speaker));
  const kinds = new Set(turns.map((turn) => turn.kind));
  ["Doctor", "Patient", "Examiner", "Action"].forEach((speaker) => assert.ok(speakers.has(speaker)));
  ["spoken", "action", "finding", "investigation", "handover"].forEach((kind) => assert.ok(kinds.has(kind)));
  assert.equal(turns[0].speaker, "Examiner");
  assert.equal(turns.at(-1).speaker, "Examiner");
});

test("current national ACS and official AMC sources are present", () => {
  const urls = caseData.sources.map((source) => source.url).join("\n");
  assert.match(urls, /ACS-Guideline[.]pdf/);
  assert.match(urls, /Clinical-Exam-Spec-V8-3[.]pdf/);
  assert.match(urls, /anzcor[.]org/);
  assert.match(urls, /pubmed[.]ncbi[.]nlm[.]nih[.]gov\/25880519/);
  assert.match(urls, /pubmed[.]ncbi[.]nlm[.]nih[.]gov\/19962467/);
  assert.match(JSON.stringify(caseData), /oxygen saturation is 96%/);
  assert.match(JSON.stringify(caseData), /aspirin 300 milligrams/);
  assert.match(JSON.stringify(caseData), /within 10 minutes/);
});

test("one reusable popover controls every Hint", () => {
  const appSource = fs.readFileSync(path.join(root, "assets/js/app.js"), "utf8");
  assert.match(appSource, /var popover = null/);
  assert.match(appSource, /if \(activeMarker && activeMarker !== marker\)/);
  assert.match(appSource, /event[.]key === "Escape"/);
  assert.match(appSource, /closeHint\(true\)/);
  assert.match(appSource, /aria-haspopup/);
  assert.match(appSource, /element\("details", "hint-sources"\)/);
  assert.doesNotMatch(appSource, /hint[.]layers/);
  assert.doesNotMatch(appSource, /Thinking together|Hold onto this|Next move|A thought may pop up/);
  assert.doesNotMatch(appSource, /journey-card/);
});
