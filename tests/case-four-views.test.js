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
const caseTwo = context.window.AMC_CASES[1];
const caseThree = context.window.AMC_CASES[2];

test("Case 1 remains the protected canonical four-view case", () => {
  assert.equal(context.window.AMC_CASES.length, caseFiles.length);
  assert.equal(caseData.id, "case-001");
  assert.equal(caseData.status, "review");
  assert.equal(caseData.modality, "in_person");
  assert.ok(caseData.stem.lines.length > 0);
  assert.ok(caseData.run.sections.length > 0);
  assert.equal(caseData.reasoning, undefined, "annotated case text must not be duplicated");
});

test("cases without completed reasoning remain canonical exam-only sources", () => {
  const expectedIds = caseFiles.map((file) => file.replace(/[.]js$/, ""));
  assert.deepEqual(Array.from(cases, (item) => item.id), expectedIds);
  cases.slice(3).forEach((item) => {
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

test("case selection exposes completed reasoning and falls back for exam-only cases", () => {
  assert.equal(viewModel.selectCase(cases, "case-002").id, "case-002");
  assert.equal(viewModel.selectCase(cases, "case-003").id, "case-003");
  assert.equal(viewModel.selectCase(cases, "missing-case"), null);
  assert.equal(viewModel.selectCase(cases, "").id, "case-001");
  assert.equal(viewModel.viewForCase(caseTwo, "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase(caseThree, "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase(cases[3], "#reasoning-full-run").id, "exam-full-run");
  assert.equal(viewModel.viewForCase(caseData, "#reasoning-full-run").id, "reasoning-full-run");
});

test("Case 2 publishes the approved 40-Hint reasoning journey", () => {
  assert.equal(caseTwo.id, "case-002");
  assert.equal(caseTwo.reasoningAvailable, true);
  assert.equal(caseTwo.status, "reasoning_complete");
  assert.equal(caseTwo.statusLabel, "Exam and reasoning complete");
  assert.equal(caseTwo.format.predominantArea, "Management/Counselling/Education");
  assert.equal(caseTwo.reasoningCompass.stem.steps.length, 3);
  assert.equal(caseTwo.reasoningCompass.run.steps.length, 3);
  assert.equal(caseTwo.hints.length, 40);
  assert.equal(caseTwo.sources.length, 8);
  assert.deepEqual(viewModel.validateCase(caseTwo), []);
});

test("Case 2 reasoning preserves the approved Stem and Full Run", () => {
  const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.equal(digest(caseTwo.stem), "18657f3620eca6ce1bb2a06fe0811dc1b340de7ee73e4a6f79fa6e88df53751d");
  assert.equal(digest(caseTwo.run), "9b976818df6b4f1a28202aa73a52a38f4914481a6370a907ccabcbd36d58d6a9");

  ["stem", "run"].forEach((surface) => {
    viewModel.itemsForSurface(caseTwo, surface).forEach((item) => {
      const reconstructed = viewModel.segmentsForItem(caseTwo, surface, item.id, item.text)
        .filter((segment) => segment.type === "text")
        .map((segment) => segment.text)
        .join("");
      assert.equal(reconstructed, item.text, `${surface}/${item.id} changed when annotated`);
    });
  });
});

test("Case 2 Hints resolve exactly, remain ordered and reveal the diagnosis after the pain pattern is elicited", () => {
  const sourceIds = new Set(caseTwo.sources.map((source) => source.id));
  const surfaceText = {
    stem: viewModel.plainSurfaceText(caseTwo, "stem"),
    run: viewModel.plainSurfaceText(caseTwo, "run")
  };
  const previous = { stem: -1, run: -1 };

  caseTwo.hints.forEach((hint, index) => {
    const item = viewModel.itemMap(caseTwo, hint.target.surface)[hint.target.itemId];
    assert.ok(item, `missing Case 2 target for ${hint.id}`);
    assert.equal(viewModel.countOccurrences(item.text, hint.target.quote), 1, `ambiguous quote in ${hint.id}`);
    const position = surfaceText[hint.target.surface].indexOf(hint.target.quote);
    assert.ok(position > previous[hint.target.surface], `out-of-order anchor in ${hint.id}`);
    previous[hint.target.surface] = position;
    assert.ok(hint.citationIds.length >= 1, `uncited Hint ${hint.id}`);
    hint.citationIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), `unknown source ${sourceId}`));

    const body = [hint.popUp].concat(hint.say, hint.logic || [], hint.pause, hint.recap, hint.reorient, hint.clock || "").join(" ");
    const namesDiagnosis = /acute aortic syndrome|aortic dissection/i.test(body);
    if (index < 17) assert.equal(namesDiagnosis, false, `diagnosis leaked in ${hint.id}`);
    if (index === 17) assert.equal(namesDiagnosis, true, "Hint 18 must name the leading diagnosis after the pain history");
  });

  assert.doesNotMatch(JSON.stringify(caseTwo.reasoningCompass.stem), /sudden severe|upper back/i);
  assert.doesNotMatch(JSON.stringify(caseTwo.hints.slice(10, 17)), /\bsudden\b|chest-to-back|between my shoulder blades/i);
  assert.doesNotMatch(JSON.stringify(caseTwo.hints.find((hint) => hint.id === "c002-hint-20")), /near-syncope/i);
  assert.match(JSON.stringify(caseTwo.hints.find((hint) => hint.id === "c002-hint-25")), /has not established whether he uses an anticoagulant/i);

  const learnerText = JSON.stringify(caseTwo.hints);
  assert.doesNotMatch(learnerText, /speed up your safety|heart (?:near|at) the front|stay open|stays open|diagnostic weight|route to danger|on the board/i);
  assert.doesNotMatch(learnerText, /\bADHD\b|\blearner\b|\bcandidate\b|—/i);
});

test("Case 3 publishes the audited 41-Hint reasoning journey", () => {
  assert.equal(caseThree.id, "case-003");
  assert.equal(caseThree.reasoningAvailable, true);
  assert.equal(caseThree.status, "reasoning_complete");
  assert.equal(caseThree.statusLabel, "Exam and reasoning complete");
  assert.equal(caseThree.format.predominantArea, "History taking");
  assert.equal(caseThree.reasoningCompass.stem.steps.length, 3);
  assert.equal(caseThree.reasoningCompass.run.steps.length, 3);
  assert.equal(caseThree.hints.length, 41);
  assert.equal(caseThree.sources.length, 9);
  assert.deepEqual(Array.from(caseThree.hints, (hint) => hint.id), Array.from({ length: 41 }, (_, index) => `c003-hint-${String(index + 1).padStart(2, "0")}`));
  assert.deepEqual(viewModel.validateCase(caseThree), []);
});

test("Case 3 reasoning preserves the approved Stem and Full Run", () => {
  const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.equal(digest(caseThree.stem), "628cd9b24075030fa0b146fe890c5b9514acacc0bbbedfaa5c55c4e37f7db634");
  assert.equal(digest(caseThree.run), "95f1c861b3fa40e37be2de87d17616ce21321d7c4813824cf048e76aa1296f67");

  ["stem", "run"].forEach((surface) => {
    viewModel.itemsForSurface(caseThree, surface).forEach((item) => {
      const reconstructed = viewModel.segmentsForItem(caseThree, surface, item.id, item.text)
        .filter((segment) => segment.type === "text")
        .map((segment) => segment.text)
        .join("");
      assert.equal(reconstructed, item.text, `${surface}/${item.id} changed when annotated`);
    });
  });
});

test("Case 3 Hints resolve exactly and reveal pulmonary embolism only after the calf clue", () => {
  const sourceIds = new Set(caseThree.sources.map((source) => source.id));
  const itemOrder = {
    stem: new Map(viewModel.itemsForSurface(caseThree, "stem").map((item, index) => [item.id, index])),
    run: new Map(viewModel.itemsForSurface(caseThree, "run").map((item, index) => [item.id, index]))
  };
  const previous = {
    stem: { item: -1, quote: -1 },
    run: { item: -1, quote: -1 }
  };

  caseThree.hints.forEach((hint, index) => {
    const item = viewModel.itemMap(caseThree, hint.target.surface)[hint.target.itemId];
    assert.ok(item, `missing Case 3 target for ${hint.id}`);
    assert.equal(viewModel.countOccurrences(item.text, hint.target.quote), 1, `ambiguous quote in ${hint.id}`);
    assert.equal(hint.target.occurrence, 1, `unsupported occurrence in ${hint.id}`);
    const current = {
      item: itemOrder[hint.target.surface].get(item.id),
      quote: item.text.indexOf(hint.target.quote)
    };
    const prior = previous[hint.target.surface];
    assert.ok(current.item > prior.item || (current.item === prior.item && current.quote > prior.quote), `out-of-order anchor in ${hint.id}`);
    previous[hint.target.surface] = current;
    assert.ok(hint.citationIds.length >= 1, `uncited Hint ${hint.id}`);
    hint.citationIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), `unknown source ${sourceId}`));

    const body = [hint.popUp].concat(hint.say, hint.logic || [], hint.pause, hint.recap, hint.reorient, hint.clock || "").join(" ");
    const namesDiagnosis = /pulmonary embolism|pulmonary embolus|\bPE\b/i.test(body);
    if (index < 23) assert.equal(namesDiagnosis, false, `diagnosis leaked in ${hint.id}`);
    if (index === 23) assert.equal(namesDiagnosis, true, "Hint 24 must name the leading diagnosis after the unilateral calf clue");
  });

  const revealHint = caseThree.hints[23];
  assert.equal(revealHint.id, "c003-hint-24");
  assert.equal(revealHint.target.itemId, "c003-run-leg-answer");
  assert.equal(revealHint.target.quote, "right calf has ached for two days");

  const earlyCitations = caseThree.hints.slice(0, 23).flatMap((hint) => hint.citationIds);
  assert.equal(earlyCitations.includes("racgp-pe-2022"), false, "a source title reveals PE before Hint 24");
  assert.equal(earlyCitations.includes("thanz-vte-2019"), false, "a source title reveals VTE before Hint 24");

  const finalHint = caseThree.hints.at(-1);
  assert.equal(finalHint.target.surface, "run");
  assert.equal(finalHint.target.itemId, "c003-run-end");
  assert.equal(finalHint.target.quote, "The station is complete");
});

test("Case 3 reasoning uses only clues already disclosed by the Full Run", () => {
  const hintText = (start, end) => JSON.stringify(caseThree.hints.slice(start, end));

  assert.doesNotMatch(hintText(10, 15), /91%|112|24 breaths|hypoxaemi|tachycard/i);
  assert.doesNotMatch(hintText(10, 23), /right calf has ached|looks a little swollen|eight hours|combined pill for endometriosis/i);
  assert.doesNotMatch(JSON.stringify(caseThree.hints[23]), /eight hours|combined pill for endometriosis/i);
  assert.doesNotMatch(JSON.stringify(caseThree.hints[24]), /combined pill for endometriosis/i);
  assert.match(JSON.stringify(caseThree.hints[15]), /91%|112/);
  assert.match(JSON.stringify(caseThree.hints[23]), /right calf has ached|pulmonary embolism/i);
  assert.match(JSON.stringify(caseThree.hints[24]), /eight hours|prolonged sitting/i);
  assert.match(JSON.stringify(caseThree.hints[25]), /combined pill for endometriosis|oestrogen/i);
});

test("Case 3 sources and consultant-companion language pass the release guardrails", () => {
  caseThree.sources.forEach((source) => {
    assert.match(source.url, /^https:\/\//, `${source.id} does not use HTTPS`);
  });

  const oxygenHints = caseThree.hints.filter((hint) => ["c003-hint-16", "c003-hint-17", "c003-hint-35"].includes(hint.id));
  assert.ok(oxygenHints.every((hint) => hint.citationIds.includes("anzcor-oxygen-2021")));
  const investigationHint = caseThree.hints.find((hint) => hint.id === "c003-hint-36");
  const anticoagulationHint = caseThree.hints.find((hint) => hint.id === "c003-hint-37");
  const teachBackHint = caseThree.hints.find((hint) => hint.id === "c003-hint-39");
  const handoverHint = caseThree.hints.find((hint) => hint.id === "c003-hint-40");
  const stationEndHint = caseThree.hints.find((hint) => hint.id === "c003-hint-41");
  assert.ok(investigationHint.citationIds.some((id) => ["racgp-pe-2022", "thanz-vte-2019"].includes(id)));
  assert.ok(anticoagulationHint.citationIds.some((id) => ["racgp-pe-2022", "thanz-vte-2019"].includes(id)));
  assert.ok(teachBackHint.citationIds.includes("ahrq-teach-back-2024"));
  assert.ok(handoverHint.citationIds.includes("acsqhc-handover-2026"));
  assert.ok(stationEndHint.citationIds.includes("amc-tips-2024"));
  assert.match(caseThree.clinicalSources.find((source) => /oxygen in emergencies/i.test(source.title)).date, /Approved April 2021/);

  const learnerText = JSON.stringify({
    compass: caseThree.reasoningCompass,
    hints: caseThree.hints
  });
  assert.doesNotMatch(learnerText, /speed up your safety|heart (?:near|at) the front|stay open|stays open|diagnostic weight|route to danger|on the board/i);
  assert.doesNotMatch(learnerText, /reflux owns|physiology outranks|danger threshold|clot-risk stack|clues click|one mechanism unifies|probability shifter/i);
  assert.doesNotMatch(learnerText, /\bmap\b|\blane\b|\bADHD\b|\blearner\b|\bcandidate\b|—/i);
});

test("Case 3 publication metadata uses one cache-safe release marker", () => {
  const releaseMarker = "case3-reasoning-v1";
  const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const version = JSON.parse(fs.readFileSync(path.join(root, "version.json"), "utf8"));
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/pages.yml"), "utf8");
  const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
  const refresh = fs.readFileSync(path.join(root, ".pages-refresh"), "utf8");

  assert.match(indexSource, new RegExp(`name="x-build-id" content="${releaseMarker}"`));
  assert.match(indexSource, new RegExp(`window[.]__BUILD_ID__ = "${releaseMarker}"`));
  assert.equal((indexSource.match(new RegExp(`[?]v=${releaseMarker}`, "g")) || []).length, caseFiles.length + 3);
  assert.doesNotMatch(indexSource, /case2-reasoning-v1/);
  assert.equal(version.buildId, releaseMarker);
  assert.equal(version.checkpoint, "case-003-reasoning-published");
  assert.deepEqual(version.caseIds, caseFiles.map((file) => file.replace(/[.]js$/, "")));
  assert.match(workflow, /grep -q "case3-reasoning-v1" index[.]html/);
  assert.match(readme, /Cases 1, 2 and 3 contain completed Reasoning layers/);
  assert.match(refresh, /Checkpoint: case-003-reasoning-v1/);
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

    const audibleWords = turns
      .filter((turn) => turn.kind !== "action")
      .flatMap((turn) => turn.lines)
      .map((line) => line.text)
      .join(" ")
      .trim()
      .split(/\s+/).length;
    assert.ok(audibleWords >= 750 && audibleWords <= 1300, `${item.id} is not realistic for an 8-minute run`);
    if (["case-012", "case-013", "case-014", "case-015", "case-016", "case-017"].includes(item.id)) {
      assert.ok(audibleWords <= 1050, `${item.id} is too dense for an 8-minute run`);
    }
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

test("Case 6 gives intramuscular adrenaline before asthma treatment", () => {
  const case6 = cases.find((item) => item.id === "case-006");
  assert.ok(case6, "Case 6 is missing");

  const text = case6.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const adrenalineIndex = text.indexOf("Give adrenaline 0.5 milligrams");
  const salbutamolIndex = text.indexOf("give salbutamol for persistent wheeze");

  assert.ok(adrenalineIndex >= 0, "Case 6 lacks immediate adrenaline");
  assert.ok(salbutamolIndex > adrenalineIndex, "Case 6 gives salbutamol before adrenaline");
  assert.match(text, /It can occur without a rash/);
  assert.match(text, /do not let her stand or walk/i);
  assert.match(text, /second intramuscular adrenaline dose of 0.5 milligrams/);
  assert.match(text, /at least four hours after the last adrenaline dose/);
});

test("Case 7 updates from infection to acute heart failure", () => {
  const case7 = cases.find((item) => item.id === "case-007");
  assert.ok(case7, "Case 7 is missing");

  const text = case7.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");

  assert.match(text, /Call Triple Zero for an ambulance now/);
  assert.match(text, /difficulty lying flat, rapid weight gain, swollen legs and crackles in both lungs/);
  assert.match(text, /acute worsening of heart failure, also called pulmonary oedema/);
  assert.match(text, /Antibiotics would not remove the fluid or correct the low oxygen/);
  assert.match(text, /This must not delay the ambulance/);
});

test("Case 8 gives necessary oxygen safely and treats hypercapnic respiratory failure", () => {
  const case8 = cases.find((item) => item.id === "case-008");
  assert.ok(case8, "Case 8 is missing");

  const text = case8.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const oxygenIndex = text.indexOf("Do not remove oxygen");
  const gasIndex = text.indexOf("acute-on-chronic hypercapnic respiratory failure");
  const nivIndex = text.indexOf("commence bilevel non-invasive ventilation now");

  assert.ok(oxygenIndex >= 0, "Case 8 does not explicitly prevent oxygen withholding");
  assert.match(text, /oxygen saturation target of 88% to 92%/);
  assert.match(text, /The very high PaO2 reflects excessive administered oxygen, not recovery/);
  assert.ok(gasIndex > oxygenIndex, "Case 8 does not interpret the blood gas after correcting oxygen");
  assert.match(text, /air-driven nebuliser, with controlled oxygen supplied separately/);
  assert.ok(nivIndex > gasIndex, "Case 8 escalates to NIV before identifying respiratory acidosis");
  assert.match(text, /pneumonia, pneumothorax, pulmonary embolism, heart failure and acute coronary syndrome/);
  assert.match(text, /Repeat arterial blood gas shows pH 7.29/);
  assert.match(text, /never refuse oxygen in an emergency/i);
});

test("Case 9 activates the stroke pathway without losing the time anchor", () => {
  const case9 = cases.find((item) => item.id === "case-009");
  assert.ok(case9, "Case 9 is missing");

  const text = case9.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const timeIndex = text.indexOf("last completely normal");
  const glucoseIndex = text.indexOf("capillary blood glucose now");
  const ambulanceIndex = text.indexOf("Call Triple Zero for an emergency ambulance now");

  assert.ok(timeIndex >= 0, "Case 9 misses the exact last-known-well question");
  assert.ok(glucoseIndex > timeIndex, "Case 9 does not include immediate glucose in the stroke screen");
  assert.ok(ambulanceIndex > glucoseIndex, "Case 9 activates transfer before the rapid stroke assessment");
  assert.match(text, /Do not wait for further clinic tests/);
  assert.match(text, /nil by mouth until swallowing is assessed/);
  assert.match(text, /Do not give routine oxygen because her saturation is adequate/);
  assert.match(text, /not give aspirin before brain imaging excludes haemorrhage/);
  assert.match(text, /will not rapidly lower her blood pressure in the clinic/);
  assert.match(text, /Even if symptoms improve or disappear, you still need emergency assessment/);
  assert.match(text, /last known well at 10:30 last night and symptoms were discovered at 7:20 this morning/);
  assert.match(text, /we do not know the exact onset. That does not mean there is no treatment/);
  assert.match(text, /last known well at 22:30.*discovered at 07:20/);
});

test("Case 10 treats hypoglycaemia before deciding whether the deficit is a stroke", () => {
  const case10 = cases.find((item) => item.id === "case-010");
  assert.ok(case10, "Case 10 is missing");

  const text = case10.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const glucoseCheckIndex = text.indexOf("check capillary blood glucose immediately");
  const glucoseResultIndex = text.indexOf("Capillary blood glucose is 2.1 mmol/L");
  const treatmentIndex = text.indexOf("Give glucose 10%, 15 grams");
  const onsetIndex = text.indexOf("what exact time was Min-jae last completely normal");
  const repeatExamIndex = text.indexOf("neurological examination normalised completely");

  assert.ok(glucoseCheckIndex >= 0, "Case 10 omits glucose from the first assessment");
  assert.ok(glucoseResultIndex > glucoseCheckIndex, "Case 10 treats before confirming the available glucose result");
  assert.ok(treatmentIndex > glucoseResultIndex, "Case 10 delays treatment sequencing");
  assert.ok(onsetIndex > treatmentIndex, "Case 10 does not obtain last-known-well concurrently with correction");
  assert.match(text, /Do not give food, drink or glucose by mouth/);
  assert.match(text, /repeat glucose 10%, 10 grams, which is 100 millilitres/);
  assert.match(text, /reassess every 5 minutes until it is at least 4 mmol\/L/);
  assert.match(text, /glucagon 1 milligram intramuscularly/);
  assert.ok(repeatExamIndex > treatmentIndex, "Case 10 does not repeat the neurological examination after glucose");
  assert.match(text, /does not automatically exclude a simultaneous stroke/);
  assert.match(text, /blood glucose has fallen to 3.1 mmol\/L/);
  assert.match(text, /recheck his glucose and symptoms in 10 to 15 minutes/);
  assert.match(text, /discuss octreotide/);
  assert.match(text, /hold gliclazide/);
  assert.match(text, /monitored hospital care/);
});

test("Case 11 confirms haemorrhage before reversal and protects a deteriorating airway", () => {
  const case11 = cases.find((item) => item.id === "case-011");
  assert.ok(case11, "Case 11 is missing");

  const text = case11.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const glucoseIndex = text.indexOf("check capillary blood glucose now");
  const imagingIndex = text.indexOf("Arrange non-contrast CT brain now");
  const haemorrhageIndex = text.indexOf("scan confirms a left basal-ganglia intracerebral haemorrhage");
  const reversalIndex = text.indexOf("give four-factor prothrombin complex concentrate");
  const airwayIndex = text.indexOf("She can no longer protect her airway");
  const repeatImagingIndex = text.indexOf("obtain repeat brain imaging");

  assert.ok(glucoseIndex >= 0 && imagingIndex > glucoseIndex, "Case 11 omits glucose before the imaging pathway");
  assert.ok(haemorrhageIndex > imagingIndex, "Case 11 labels haemorrhage before imaging");
  assert.ok(reversalIndex > haemorrhageIndex, "Case 11 reverses warfarin before confirming haemorrhage");
  assert.match(text, /Give no aspirin, anticoagulant or thrombolysis until imaging identifies the stroke type/);
  assert.match(text, /Beriplex, 50 international units per kilogram/);
  assert.match(text, /intravenous vitamin K 5 to 10 milligrams/);
  assert.match(text, /repeat the INR in 20 minutes/);
  assert.match(text, /systolic pressure of 130 to 140 mmHg within one hour/);
  assert.ok(airwayIndex >= 0 && repeatImagingIndex > airwayIndex, "Case 11 does not reimage after neurological deterioration");
  assert.match(text, /Routine removal of a deep basal-ganglia bleed is not automatically beneficial/);
});

test("Case 12 recognises organ dysfunction before hypotension and pursues urinary source control", () => {
  const case12 = cases.find((item) => item.id === "case-012");
  assert.ok(case12, "Case 12 is missing");

  const text = case12.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const recognitionIndex = text.indexOf("normal-range blood pressure does not exclude organ dysfunction");
  const cultureIndex = text.indexOf("Take two blood-culture sets");
  const antibioticIndex = text.indexOf("give empiric intravenous antibiotics");
  const firstFluidIndex = text.indexOf("Give 500 millilitres of Hartmann's solution");
  const repeatFluidIndex = text.indexOf("give a further 250 to 500 millilitres with reassessment");
  const urologyIndex = text.indexOf("Call urology now");

  assert.ok(recognitionIndex >= 0, "Case 12 waits for hypotension before recognising organ dysfunction");
  assert.ok(cultureIndex > recognitionIndex && antibioticIndex > cultureIndex, "Case 12 sequences cultures and antibiotics incorrectly");
  assert.match(text, /Take cultures first only if this causes no delay/);
  assert.match(text, /within 60 minutes/);
  assert.ok(firstFluidIndex > antibioticIndex && repeatFluidIndex > firstFluidIndex, "Case 12 does not reassess before further fluid");
  assert.match(text, /lactate is 4.3 mmol\/L/);
  assert.match(text, /creatinine 190 micromol\/L from a baseline of 110/);
  assert.match(text, /moderate right hydronephrosis/);
  assert.ok(urologyIndex > repeatFluidIndex, "Case 12 misses source-control escalation");
  assert.match(text, /request intensive-care review now because organ dysfunction persists/);
  assert.match(text, /must not delay drainage/);
  assert.match(text, /Antibiotics alone may not control infection behind an obstruction/);
});

test("Case 13 starts noradrenaline while dynamically indicated fluid continues", () => {
  const case13 = cases.find((item) => item.id === "case-013");
  assert.ok(case13, "Case 13 is missing");

  const text = case13.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const firstFluidIndex = text.indexOf("Give 500 millilitres of Hartmann's solution");
  const noradrenalineIndex = text.indexOf("Begin peripheral noradrenaline now");
  const secondFluidIndex = text.indexOf("give a second 500-millilitre Hartmann's bolus");
  const noResponseIndex = text.indexOf("After a total of one litre of Hartmann's");

  assert.ok(firstFluidIndex >= 0 && noradrenalineIndex > firstFluidIndex, "Case 13 omits initial measured fluid reassessment");
  assert.ok(secondFluidIndex > noradrenalineIndex && noResponseIndex > secondFluidIndex, "Case 13 does not combine early vasopressor with a dynamically indicated second bolus");
  assert.match(text, /Passive leg raise no longer changes pulse pressure/);
  assert.match(text, /increasing bilateral B-lines/);
  assert.match(text, /Stop further rapid boluses because fluid responsiveness has been lost/);
  assert.match(text, /mean arterial pressure of at least 65 mmHg/);
  assert.match(text, /5 micrograms per minute/);
  assert.match(text, /Intensive care will manage vasopressor and organ support/);
  assert.match(text, /Start empiric oseltamivir while PCR is pending, adjusted for renal function/);
  assert.match(case13.clinicalSources.map((source) => source.url).join("\n"), /cdc[.]gov\/flu\/hcp\/antivirals/);
});

test("Case 14 treats suspected neutropenic sepsis despite a modest clinic temperature", () => {
  const case14 = cases.find((item) => item.id === "case-014");
  assert.ok(case14, "Case 14 is missing");

  const text = case14.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const recognitionIndex = text.indexOf("make neutropenic sepsis possible");
  const transferIndex = text.indexOf("Call Triple Zero for a monitored ambulance");
  const neutrophilResultIndex = text.indexOf("neutrophils 0.1");
  const antibioticIndex = text.indexOf("piperacillin-tazobactam 4.5 grams intravenously");
  const piccDisclosureIndex = text.indexOf("I have a PICC in my right arm");
  const piccExamIndex = text.indexOf("I would also inspect the PICC site");
  const resultRequestIndex = text.indexOf("Check whether today's chemotherapy blood result is available");

  assert.ok(recognitionIndex >= 0 && transferIndex > recognitionIndex, "Case 14 does not recognise and transfer suspected neutropenic sepsis");
  assert.ok(neutrophilResultIndex > transferIndex, "Case 14 waits for the neutrophil result before arranging transfer");
  assert.ok(antibioticIndex > neutrophilResultIndex, "Case 14 omits protocol-based antipseudomonal treatment");
  assert.match(text, /Paracetamol can lower the measured temperature/);
  assert.match(text, /I will not wait for a clinic blood count/);
  assert.match(text, /within 30 minutes of presentation or clinical recognition, whichever was earlier/);
  assert.ok(piccDisclosureIndex >= 0 && piccExamIndex > piccDisclosureIndex, "Case 14 examines a PICC before learning it exists");
  assert.ok(resultRequestIndex > transferIndex && neutrophilResultIndex > resultRequestIndex, "Case 14 supplies results before they are requested");
  assert.match(text, /Blood cultures should come from a peripheral vein and each PICC lumen, without delaying antibiotics/);
  assert.match(text, /Confirm directly with the ambulance and receiving emergency clinician that the first dose will start within that 30-minute window/);
  assert.match(text, /If they cannot meet it, arrange immediate pre-transfer piperacillin-tazobactam/);
  assert.match(text, /Avoid rectal examination, rectal medicines and intramuscular injections/);
  assert.match(text, /not home observation or a private car/);
  assert.match(case14.clinicalSources.map((source) => source.url).join("\n"), /eviq[.]org[.]au\/p\/123/);
});

test("Case 15 recognises concealed pelvic haemorrhage before hypotension and does not wait for CT", () => {
  const case15 = cases.find((item) => item.id === "case-015");
  assert.ok(case15, "Case 15 is missing");

  const text = case15.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const recognitionIndex = text.indexOf("normal blood pressure does not exclude significant blood loss");
  const binderIndex = text.indexOf("pelvic binder centred over the greater trochanters");
  const bloodIndex = text.indexOf("Give warmed red cells, plasma and platelets");
  const deteriorationIndex = text.indexOf("blood pressure is 82/48");
  const noCtIndex = text.indexOf("Do not send him to CT while unstable");
  const intimateConsentIndex = text.indexOf("may I briefly inspect your groin and perineal area");
  const intimateFindingIndex = text.indexOf("no perineal bruising or blood at the urethral opening");

  assert.ok(recognitionIndex >= 0, "Case 15 waits for hypotension before recognising blood loss");
  assert.ok(binderIndex > recognitionIndex && bloodIndex > binderIndex, "Case 15 does not sequence pelvic stabilisation and blood support safely");
  assert.ok(deteriorationIndex > bloodIndex && noCtIndex > deteriorationIndex, "Case 15 does not respond to decompensation with direct haemorrhage control");
  assert.ok(intimateConsentIndex >= 0 && intimateFindingIndex > intimateConsentIndex, "Case 15 performs an intimate examination without spoken consent");
  assert.match(text, /a chaperone/);
  assert.match(text, /negative eFAST does not assess retroperitoneal bleeding/);
  assert.match(text, /Haemoglobin is 142 g\/L/);
  assert.match(text, /initial haemoglobin may remain normal during acute blood loss/);
  assert.match(text, /Avoid large crystalloid volumes/);
  assert.match(text, /tranexamic acid according to the local trauma protocol/);
  assert.match(text, /preperitoneal pelvic packing and mechanical stabilisation.*angiographic embolisation/);
  assert.match(text, /Reserve laparotomy for a separate intraperitoneal indication/);
  assert.match(case15.clinicalSources.map((source) => source.url).join("\n"), /blood[.]gov[.]au\/patient-blood-management-guideline-adults-critical-bleeding/);
});

test("Case 16 identifies cold congested pump failure and avoids automatic fluid loading", () => {
  const case16 = cases.find((item) => item.id === "case-016");
  assert.ok(case16, "Case 16 is missing");

  const text = case16.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const noFluidIndex = text.indexOf("I will not give a large fluid bolus");
  const diagnosisIndex = text.indexOf("cold, congested cardiogenic shock");
  const noradrenalineIndex = text.indexOf("Commence noradrenaline");
  const inotropeIndex = text.indexOf("add an inotrope");

  assert.ok(noFluidIndex >= 0 && diagnosisIndex > noFluidIndex, "Case 16 does not identify congestion before avoiding fluid");
  assert.ok(noradrenalineIndex > diagnosisIndex && inotropeIndex > noradrenalineIndex, "Case 16 does not support pressure before protocol-led inotropy");
  assert.match(text, /recent illness does not prove a viral cause/);
  assert.match(text, /Avoid further fluid, nitrates, routine diuretics and beta-blockade while she is profoundly hypotensive/);
  assert.match(text, /temporary mechanical circulatory support/);
  assert.match(text, /early endomyocardial biopsy/);
  assert.match(text, /urine output is 5 millilitres over the preceding hour/);
  assert.match(case16.clinicalSources.map((source) => source.url).join("\n"), /escardio[.]org\/guidelines/);
});

test("Case 17 distinguishes neurogenic from spinal shock while continuing the trauma search", () => {
  const case17 = cases.find((item) => item.id === "case-017");
  assert.ok(case17, "Case 17 is missing");

  const text = case17.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const exclusionIndex = text.indexOf("does not exclude bleeding or another traumatic cause");
  const measuredFluidIndex = text.indexOf("measured 250-millilitre bolus");
  const distinctionIndex = text.indexOf("They are different problems and can occur together");
  const noradrenalineIndex = text.indexOf("Start noradrenaline");
  const airwayIndex = text.indexOf("respiratory function is deteriorating");
  const intimateConsentIndex = text.indexOf("It is an intimate examination and a chaperone will be present");
  const sacralExamIndex = text.indexOf("With a chaperone, I assess sacral sensation");

  assert.ok(exclusionIndex >= 0 && measuredFluidIndex > exclusionIndex, "Case 17 assumes neurogenic shock before evaluating trauma causes");
  assert.ok(distinctionIndex > measuredFluidIndex, "Case 17 does not distinguish spinal shock from neurogenic shock");
  assert.ok(noradrenalineIndex > distinctionIndex && airwayIndex > noradrenalineIndex, "Case 17 misses haemodynamic or respiratory escalation");
  assert.ok(intimateConsentIndex >= 0 && sacralExamIndex > intimateConsentIndex, "Case 17 performs the sacral examination without spoken consent");
  assert.match(text, /normal first haemoglobin does not exclude recent blood loss/);
  assert.match(text, /lower MAP boundary with spinal and intensive care, usually 75 to 80/);
  assert.match(text, /avoid augmentation beyond 90 to 95/);
  assert.match(text, /Individualise the target and its three-to-seven-day duration because the evidence is weak/);
  assert.match(text, /controlled manner while maintaining cervical alignment/);
  assert.match(text, /urgent reduction, decompression and stabilisation, ideally within 24 hours when medically feasible/);
  assert.match(text, /without MRI delay/);
  assert.match(case17.clinicalSources.map((source) => source.url).join("\n"), /21925682231202348/);
});

test("every case keeps the station stem clinically neutral", () => {
  cases.forEach((item) => {
    const stemAndTasks = JSON.stringify(item.stem);
    assert.doesNotMatch(
      stemAndTasks,
      /\burgent\b|\bimmediate\b|\bsame-day\b|\bshock\b|\bsepsis\b|\bneutropeni(?:a|c)\b|\bhaemorrhag(?:e|ic)\b|\bcardiogenic\b|\bneurogenic\b|\bmyocarditis\b|resuscitation|ambulance|vasopressor|noradrenaline|lactate|major haemorrhage|pelvic binder|blood components?|transfus(?:e|ion)|mechanical circulatory support|spinal motion restriction|intensive-care clinician|receiving emergency clinician|trauma surgeon|oxygen saturation (?:was|is) [0-9]|at triage|while waiting for assessment|become drowsy|obtain (?:an? )?ECG|give oxygen|start oxygen|high-concentration oxygen|oxygen plan|emergency medicines|no imaging has been performed|not required to physically perform|sudden severe chest pain extending into (?:his|her|the) upper back/i,
      `${item.id} stem or tasks disclose the diagnosis or management priority`
    );
  });
});

test("patient first names are varied across the current case set", () => {
  const firstNames = cases.map((item) => {
    const stemText = item.stem.lines.map((line) => line.text).join(" ");
    const match = stemText.match(/\b(?:Mr|Mrs|Ms) ([A-Za-z]+(?:-[A-Za-z]+)?)/);
    assert.ok(match, `${item.id} has no identifiable patient name in the stem`);
    return match[1].toLowerCase();
  });
  assert.equal(new Set(firstNames).size, firstNames.length, "a patient first name is repeated");
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
  assert.equal(digest(caseData.stem), "6bfb9fcda2a004205ddf0076b19802c2592b143129f8381ec30cadaf25058875");
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

  const presentation = caseData.hints.find((hint) => hint.id === "hint-urgent-booking");
  assert.equal(presentation.say[0], "No. The booking itself does not tell me the severity or the cause.");
  assert.equal(presentation.pause, "Do not add urgency or reassurance that the stem has not provided.");
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
