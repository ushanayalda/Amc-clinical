const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const crypto = require("node:crypto");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data/cases/case-001.js"), "utf8"), context);

const viewModel = require("../assets/js/case-views.js");
const caseData = context.window.AMC_CASES[0];

test("Case 1 is one canonical review checkpoint", () => {
  assert.equal(context.window.AMC_CASES.length, 1);
  assert.equal(caseData.id, "case-001");
  assert.equal(caseData.status, "review");
  assert.equal(caseData.modality, "in_person");
  assert.ok(caseData.stem.lines.length > 0);
  assert.ok(caseData.run.sections.length > 0);
  assert.equal(caseData.reasoning, undefined, "annotated case text must not be duplicated");
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
