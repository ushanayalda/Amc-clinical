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

    const audibleWords = turns
      .filter((turn) => turn.kind !== "action")
      .flatMap((turn) => turn.lines)
      .map((line) => line.text)
      .join(" ")
      .trim()
      .split(/\s+/).length;
    assert.ok(audibleWords >= 750 && audibleWords <= 1300, `${item.id} is not realistic for an 8-minute run`);
    if (["case-012", "case-013", "case-014"].includes(item.id)) {
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

test("every case keeps the station stem clinically neutral", () => {
  cases.forEach((item) => {
    const stemAndTasks = JSON.stringify(item.stem);
    assert.doesNotMatch(
      stemAndTasks,
      /\burgent\b|\bimmediate\b|\bsepsis\b|\bseptic shock\b|\bneutropeni(?:a|c)\b|resuscitation|ambulance|vasopressor|noradrenaline|lactate|obtain (?:an? )?ECG|give oxygen|start oxygen|high-concentration oxygen|oxygen plan|emergency medicines|no imaging has been performed|not required to physically perform|sudden severe chest pain extending into (?:his|her|the) upper back/i,
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
