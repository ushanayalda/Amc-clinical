"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const blueprintSchema = require("../engine/amc-case-blueprint.schema.json");
const registrySchema = require("../engine/case-registry.schema.json");
const template = require("../engine/amc-case-blueprint.template.json");
const engineStatus = require("../engine/ENGINE_STATUS.json");
const machineRegistry = require("../registry-library/case-registry.v1.1.json");
const {
  ENGINE_VERSION,
  QA_FIELDS,
  auditCase,
  auditCollection,
  blueprintPackageHash,
  blueprintReviewScopeHash,
  clinicalContentFingerprint,
  contentHash,
  hasCompoundQuestion,
  loadBlueprint,
  runAudit,
  validateBlueprint,
  validateRegistry,
  validateVisibleCase
} = require("../scripts/amc-engine-lib.js");
const { clone, makeValidTriplet } = require("./helpers/amc-engine-v1.1-fixture.js");

const root = path.resolve(__dirname, "..");

function issueCodes(report) {
  return new Set(report.issues.map(function (issue) { return issue.code; }));
}

function refreshHashes(triplet) {
  const hash = contentHash(triplet.caseData);
  triplet.blueprint.qa.caseContentSha256 = hash;
  triplet.blueprint.performance.listenTest.caseContentSha256 = hash;
  triplet.registry.cases[0].contentSha256 = hash;
  refreshReviewBindings(triplet.blueprint);
  return hash;
}

function refreshReviewBindings(blueprint) {
  blueprint.qa.reviewScopeSha256 = blueprintReviewScopeHash(blueprint);
  QA_FIELDS.forEach(function (field) {
    blueprint.qa[field].reviewScopeSha256 = blueprint.qa.reviewScopeSha256;
  });
  blueprint.performance.listenTest.reviewScopeSha256 = blueprint.qa.reviewScopeSha256;
  blueprint.qa.blueprintPackageSha256 = blueprintPackageHash(blueprint);
  return blueprint.qa.reviewScopeSha256;
}

function findLine(caseData, id) {
  for (const section of caseData.run.sections) {
    for (const turn of section.turns) {
      const found = turn.lines.find(function (line) { return line.id === id; });
      if (found) return found;
    }
  }
  return null;
}

test("v1.1 schemas are strict and publish the new controlled contract", function () {
  assert.equal(blueprintSchema.properties.blueprintVersion.const, "1.1.0");
  assert.equal(blueprintSchema.additionalProperties, false);
  assert.equal(blueprintSchema.properties.participants.items.additionalProperties, false);
  assert.equal(blueprintSchema.properties.qa.additionalProperties, false);
  assert.equal(registrySchema.properties.registryVersion.const, "1.1.0");
  assert.equal(registrySchema.additionalProperties, false);
  assert.ok(blueprintSchema.properties.interaction.required.includes("directAddresses"));
  assert.ok(blueprintSchema.properties.performance.properties.actionDurations.items.required.includes("actorExactPhrase"));
  assert.ok(blueprintSchema.properties.clinicalTruth.properties.criticalActionTimings.items.required.includes("positiveActionPhrase"));
  assert.ok(blueprintSchema.properties.performance.properties.taskEvidence.items.properties.requiredEvidence.items.required
    .includes("positivePerformancePhrase"));
  template.performance.taskEvidence.forEach(function (taskEvidence) {
    taskEvidence.requiredEvidence.forEach(function (evidence) {
      assert.equal(typeof evidence.positivePerformancePhrase, "string");
      assert.ok(evidence.positivePerformancePhrase.trim().length > 0);
    });
  });
  assert.deepEqual(
    blueprintSchema.properties.qa.required.slice().sort(),
    ["caseContentSha256", "reviewScopeSha256", "blueprintPackageSha256"].concat(QA_FIELDS, ["blockers"]).sort()
  );
});

test("the machine registry is structurally and semantically coherent", function () {
  const result = validateRegistry(machineRegistry, { root });
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.blockers, []);
  assert.equal(result.registryReady, true);
  assert.equal(machineRegistry.phases.length, 4);
  assert.equal(machineRegistry.patterns.length, 40);
  assert.equal(machineRegistry.cases.length, 42);
  assert.equal(machineRegistry.nextAction.mode, "reconstruct");
  assert.equal(machineRegistry.nextAction.newGenerationAllowed, false);
  assert.equal(engineStatus.engineVersion, ENGINE_VERSION);
  assert.equal(engineStatus.engineStatus, "audited_for_reconstruction");
  assert.equal(engineStatus.finalQa, "pass");
  assert.equal(engineStatus.registry.status, "READY");
  assert.equal(engineStatus.registry.nextAction.caseId, "case-002");
  assert.equal(engineStatus.registry.newGenerationAllowed, false);
  assert.deepEqual(
    [engineStatus.existingCaseCollection.total, engineStatus.existingCaseCollection.audited,
      engineStatus.existingCaseCollection.hold, engineStatus.existingCaseCollection.status],
    [42, 1, 41, "HOLD"]
  );
  assert.equal(engineStatus.existingCaseCollection.expectedReleaseGateExitCode, 2);
  assert.equal(engineStatus.existingCaseCollection.legacyCaseSetSha256,
    "fd244a5be2bcf6512b2d69962de143f9958ea68c0160ce57acc7c478a083c92a");
  assert.equal(engineStatus.publication.performed, false);
  assert.equal(engineStatus.publication.authorised, false);
});

test("the authoring template cannot self-release through pass labels", function () {
  const blueprint = clone(template);
  blueprint.releaseStatus = "audited";
  QA_FIELDS.forEach(function (field) {
    blueprint.qa[field] = {
      status: "pass",
      method: "Automated label",
      reviewer: "Label writer",
      reviewedAt: "2026-07-14T21:30:00+10:00",
      evidence: ["Pass was selected."]
    };
  });
  blueprint.qa.blockers = [];
  blueprint.qa.caseContentSha256 = "a".repeat(64);
  blueprint.performance.taskEvidence.forEach(function (item) { item.completed = true; });
  blueprint.performance.listenTest = {
    status: "pass",
    method: "spoken_readthrough",
    reviewer: "Label writer",
    performedAt: "2026-07-14T21:30:00+10:00",
    observedSeconds: 450,
    caseContentSha256: "a".repeat(64),
    notes: "A duration was entered."
  };
  const result = validateBlueprint(blueprint);
  assert.equal(result.blueprintReady, false);
  assert.ok(result.blockers.some(function (message) { return /unresolved authoring field/.test(message); }));
  assert.ok(result.blockers.some(function (message) { return /example\.org/.test(message); }));
});

test("one concrete case, blueprint and registry triplet reaches AUDITED", function () {
  const triplet = makeValidTriplet();
  assert.deepEqual(validateBlueprint(triplet.blueprint), {
    errors: [],
    blockers: [],
    blueprintReady: true,
    ready: true
  });
  assert.equal(validateRegistry(triplet.registry).registryReady, true);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.equal(report.status, "AUDITED");
  assert.deepEqual(report.issues, []);
});

test("Case 1 binds the four-minute prompt and early ACS treatments to the reviewed sequence", function () {
  const blueprint = loadBlueprint(root, "case-001");
  assert.equal(blueprint.performance.listenTest.observedSeconds, 461);
  assert.deepEqual(blueprint.performance.taskEvidence.map(function (item) {
    return item.observedSeconds;
  }), [240, 120, 101]);
  assert.match(blueprint.performance.listenTest.notes, /prompt immediately after run-summary at 240 seconds/);
  assert.match(blueprint.performance.listenTest.notes, /final Examiner line at 461 seconds/);
  assert.equal(JSON.stringify(blueprint).includes("run-handover"), false);
  assert.equal(blueprint.examiner.scheduledPrompts[0].triggerLineId, "run-summary");

  const timingById = new Map(blueprint.clinicalTruth.criticalActionTimings.map(function (item) {
    return [item.id, item];
  }));
  assert.equal(timingById.get("timing-ecg-monitoring").latestPermittedLineId, "run-early-escalation-action");
  assert.equal(timingById.get("timing-aspirin").triggerLineId, "run-associated-answer");
  assert.equal(timingById.get("timing-gtn").latestPermittedLineId, "run-gtn-action");
  assert.ok(blueprint.interaction.consents.some(function (item) { return item.id === "consent-gtn"; }));
});

test("unknown root and nested properties are rejected", function () {
  const mutations = [
    function (blueprint) { blueprint.unknown = true; },
    function (blueprint) { blueprint.participants[0].unknown = true; },
    function (blueprint) { blueprint.sourceBasis.claimMap[0].unknown = true; },
    function (blueprint) { blueprint.qa.finalQa.unknown = true; },
    function (blueprint) { blueprint.interaction.informationRequests[0].unknown = true; }
  ];
  mutations.forEach(function (mutate) {
    const blueprint = makeValidTriplet().blueprint;
    mutate(blueprint);
    const result = validateBlueprint(blueprint);
    assert.equal(result.blueprintReady, false);
    assert.ok(result.errors.some(function (message) { return /additional properties/.test(message); }));
  });
  const registry = makeValidTriplet().registry;
  registry.cases[0].unknown = true;
  assert.ok(validateRegistry(registry).errors.some(function (message) { return /additional properties/.test(message); }));
});

test("malformed arrays and null entries fail safely without throwing", function () {
  const blueprintMutations = [
    function (value) { value.sourceBasis.claimMap = [null]; },
    function (value) { value.participants = [null]; },
    function (value) { value.interaction.informationRequests = [null]; },
    function (value) { value.qa.finalQa = null; }
  ];
  assert.doesNotThrow(function () { validateBlueprint(null); });
  blueprintMutations.forEach(function (mutate) {
    const blueprint = makeValidTriplet().blueprint;
    mutate(blueprint);
    let result;
    assert.doesNotThrow(function () { result = validateBlueprint(blueprint); });
    assert.equal(result.blueprintReady, false);
    assert.ok(result.errors.length > 0);
  });
  const registry = makeValidTriplet().registry;
  registry.cases = [null];
  assert.doesNotThrow(function () { validateRegistry(registry); });
  const triplet = makeValidTriplet();
  triplet.caseData.run.sections = [null];
  assert.doesNotThrow(function () { auditCase(triplet.caseData, triplet.blueprint, triplet.registry); });
});

test("the visible Stem and Full Run have their own strict structural contract", function () {
  const triplet = makeValidTriplet();
  assert.deepEqual(validateVisibleCase(triplet.caseData), { errors: [], valid: true });
  triplet.caseData.run.sections[0].turns[0].unexpected = true;
  const invalid = validateVisibleCase(triplet.caseData);
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.some(function (message) { return /additional properties/.test(message); }));
});

test("compound request detector blocks bundled questions and lists", function () {
  [
    "Do you smoke or drink alcohol?",
    "Are you taking warfarin, apixaban or aspirin?",
    "Could you describe when it began, what it feels like and whether it spreads?",
    "When did it begin and what happened next?",
    "Describe the pain and whether it spreads.",
    "List every prescribed, over-the-counter, herbal and recreational substance.",
    "What happened? What did you do?",
    "Could you confirm your name and tell me what brought you in?",
    "Any smoking, alcohol and recreational drugs?",
    "Tell me about the pain. Describe any breathlessness.",
    "What brought you in today? Talk me through everything that changed afterwards.",
    "What brought you in today? Take me through everything that changed afterwards.",
    "What brought you in today? Let me know what happened afterwards.",
    "I'd like you to tell me when it began and whether it spreads.",
    "What medications and allergies do you have?",
    "What happened? Describe the discomfort.",
    "I need you to describe what brought you in and when it started.",
    "Did it begin suddenly then spread to your arm?",
    "Is it worse with exertion but better with rest?",
    "Did you fall before hitting your head?",
    "Did it begin suddenly while spreading to your arm?",
    "Do you smoke/drink alcohol?",
    "Do you smoke, drink alcohol?",
    "When did it begin. What happened next?",
    "When did it begin — what happened next?",
    "When did it begin: what happened next?",
    "What brought you in today. Any breathlessness?",
    "Have you had fever. Any cough?",
    "Have you had fever nor cough?",
    "Have you had fever with cough?"
  ].forEach(function (value) {
    assert.equal(hasCompoundQuestion(value), true, value);
  });
  [
    "What brought you in today?",
    "When did it begin?",
    "Have you taken aspirin?",
    "Could you confirm your full name and date of birth?",
    "Is it okay if I ask about this?"
  ].forEach(function (value) {
    assert.equal(hasCompoundQuestion(value), false, value);
  });
});

test("the screenshot failure is explicitly blocked", function () {
  const triplet = makeValidTriplet();
  findLine(triplet.caseData, "c000-run-identity-question").text =
    "Hello, I am Dr Lee. Please confirm your name. When did the shaking begin, and what else have you noticed?";
  findLine(triplet.caseData, "c000-run-identity-response").text =
    "Asha Delaney. It began this afternoon. I am sweating, shaking and frightened.";
  const report = auditCase(triplet.caseData, null, triplet.registry);
  const codes = issueCodes(report);
  assert.equal(report.status, "HOLD");
  assert.ok(codes.has("missing_blueprint"));
  assert.ok(codes.has("identity_mixed_with_clinical_content"));
  assert.ok(codes.has("identity_response_contains_history"));
  assert.ok(codes.has("compound_question_in_turn"));
});

test("exam-neutral Stem gate blocks diagnosis and urgency disclosure", function () {
  const phrases = [
    "acute myocardial infarction",
    "urgent",
    "immediate treatment",
    "emergency transfer",
    "resuscitation",
    "life-threatening",
    "critically ill",
    "unstable",
    "time-critical",
    "high-risk",
    "requires treatment",
    "call an ambulance",
    "activate emergency",
    "requires prompt assessment",
    "sent directly for rapid review",
    "triage category 2",
    "acutely unwell",
    "deteriorating",
    "priority appointment",
    "must be assessed without delay",
    "sent for same-day emergency department assessment",
    "needs assessment as soon as possible",
    "should be transferred to the emergency department now"
    ,"He is awaiting an ambulance"
    ,"The GP requested paramedic transport"
    ,"The patient was placed in resus"
    ,"He has been accepted for emergency admission"
    ,"He was instructed to present to hospital"
    ,"The GP asked him to go to hospital"
    ,"He was brought directly to the emergency department"
    ,"The patient is being conveyed to hospital"
    ,"Paramedics are on their way"
    ,"He has been prioritised for rapid assessment"
  ];
  phrases.forEach(function (phrase) {
    const triplet = makeValidTriplet();
    triplet.caseData.stem.lines[1].text += " This is " + phrase + ".";
    triplet.blueprint.stem.lines[1].text = triplet.caseData.stem.lines[1].text;
    if (!triplet.blueprint.stem.forbiddenTerms.includes(phrase)) {
      triplet.blueprint.stem.forbiddenTerms.push(phrase);
    }
    refreshHashes(triplet);
    const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
    const codes = issueCodes(report);
    assert.equal(report.status, "HOLD", phrase);
    assert.ok(codes.has("stem_signals_urgency") || codes.has("stem_contains_forbidden_term"), phrase);
  });
});

test("a diagnosis may be provided when it is the legitimate task context", function () {
  const triplet = makeValidTriplet();
  const text = "Mr Daniel Morgan, a 60-year-old man with acute coronary syndrome, has attended to discuss his assessment.";
  triplet.caseData.stem.lines[1].text = text;
  triplet.blueprint.stem.lines[1].text = text;
  triplet.blueprint.stem.diagnosisVisibility = "provided_as_task_context";
  triplet.blueprint.stem.forbiddenTerms = triplet.blueprint.stem.forbiddenTerms.filter(function (term) {
    return term.toLowerCase() !== "acute coronary syndrome";
  });
  refreshHashes(triplet);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.equal(issueCodes(report).has("stem_contains_forbidden_term"), false);
  assert.equal(issueCodes(report).has("provided_diagnosis_missing"), false);
});

test("hidden diagnosis aliases and contradictory diagnosis tasks are blocked", function () {
  const alias = makeValidTriplet();
  alias.caseData.stem.lines[1].text += " The working diagnosis is myocardial infarction.";
  alias.blueprint.stem.lines[1].text = alias.caseData.stem.lines[1].text;
  refreshHashes(alias);
  assert.ok(issueCodes(auditCase(alias.caseData, alias.blueprint, alias.registry)).has("stem_contains_forbidden_term"));

  const conflict = makeValidTriplet();
  const text = "Mr Daniel Morgan, a 60-year-old man with acute coronary syndrome, has attended to discuss his assessment.";
  conflict.caseData.stem.lines[1].text = text;
  conflict.blueprint.stem.lines[1].text = text;
  conflict.blueprint.stem.diagnosisVisibility = "provided_as_task_context";
  conflict.blueprint.stem.forbiddenTerms = conflict.blueprint.stem.forbiddenTerms.filter(function (term) {
    return term.toLowerCase() !== "acute coronary syndrome";
  });
  conflict.caseData.stem.tasks[0].text = "Formulate the most likely diagnosis.";
  conflict.blueprint.tasks[0].text = conflict.caseData.stem.tasks[0].text;
  refreshHashes(conflict);
  assert.ok(issueCodes(auditCase(conflict.caseData, conflict.blueprint, conflict.registry)).has("provided_diagnosis_task_conflict"));

  [
    "Determine the cause of Daniel's symptoms.",
    "State the most likely condition.",
    "Decide what is causing the presentation.",
    "Interpret the information to determine the diagnosis.",
    "Work out the cause of his presentation.",
    "Establish the most likely aetiology."
  ].forEach(function (taskText) {
    const derived = makeValidTriplet();
    derived.caseData.stem.lines[1].text = text;
    derived.blueprint.stem.lines[1].text = text;
    derived.blueprint.stem.diagnosisVisibility = "provided_as_task_context";
    derived.blueprint.stem.forbiddenTerms = derived.blueprint.stem.forbiddenTerms.filter(function (term) {
      return term.toLowerCase() !== "acute coronary syndrome";
    });
    derived.caseData.stem.tasks[0].text = taskText;
    derived.blueprint.tasks[0].text = taskText;
    refreshHashes(derived);
    assert.ok(issueCodes(auditCase(derived.caseData, derived.blueprint, derived.registry))
      .has("provided_diagnosis_task_conflict"), taskText);
  });
});

test("a neutral management task is allowed without disclosing urgency", function () {
  const triplet = makeValidTriplet();
  triplet.caseData.stem.tasks[1].text = "Discuss your management with Daniel.";
  triplet.blueprint.tasks[1].text = "Discuss your management with Daniel.";
  triplet.blueprint.tasks[1].actionVerb = "Discuss";
  refreshHashes(triplet);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.equal(issueCodes(report).has("stem_signals_urgency"), false);
});

test("task wording cannot disclose the required urgent disposition", function () {
  const triplet = makeValidTriplet();
  const text = "Arrange emergency department assessment and discuss your plan with Daniel.";
  triplet.caseData.stem.tasks[1].text = text;
  triplet.blueprint.tasks[1].text = text;
  refreshHashes(triplet);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.ok(issueCodes(report).has("stem_signals_urgency"));
  assert.equal(report.status, "HOLD");
});

test("visible task timing is optional while the internal clock still totals eight minutes", function () {
  const triplet = makeValidTriplet();
  triplet.caseData.stem.tasks.forEach(function (task) { delete task.timing; });
  triplet.blueprint.tasks.forEach(function (task) { task.visibleTiming = null; });
  refreshHashes(triplet);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.equal(report.status, "AUDITED");
  assert.equal(issueCodes(report).has("task_timing"), false);
});

test("timing instructions cannot be hidden inside Stem or task prose", function () {
  const taskTiming = makeValidTriplet();
  taskTiming.caseData.stem.tasks[0].text = "Take a focused history. You have 7 minutes.";
  delete taskTiming.caseData.stem.tasks[0].timing;
  taskTiming.blueprint.tasks[0].text = taskTiming.caseData.stem.tasks[0].text;
  taskTiming.blueprint.tasks[0].visibleTiming = null;
  refreshHashes(taskTiming);
  const taskResult = validateBlueprint(taskTiming.blueprint);
  assert.ok(taskResult.errors.some(function (message) { return /uncontrolled timing instruction/.test(message); }));
  assert.ok(issueCodes(auditCase(taskTiming.caseData, taskTiming.blueprint, taskTiming.registry))
    .has("uncontrolled_task_timing"));

  const stemTiming = makeValidTriplet();
  stemTiming.caseData.stem.lines[1].text += " You have 7 minutes to assess him.";
  stemTiming.blueprint.stem.lines[1].text = stemTiming.caseData.stem.lines[1].text;
  refreshHashes(stemTiming);
  assert.ok(validateBlueprint(stemTiming.blueprint).errors.some(function (message) {
    return /Stem line contains an uncontrolled timing instruction/.test(message);
  }));

  const chronology = makeValidTriplet();
  chronology.caseData.stem.lines[1].text += " The discomfort began 25 minutes ago.";
  chronology.blueprint.stem.lines[1].text = chronology.caseData.stem.lines[1].text;
  refreshHashes(chronology);
  assert.equal(auditCase(chronology.caseData, chronology.blueprint, chronology.registry).status, "AUDITED");
});

test("examiner opening and closing speech are optional when the station does not use them", function () {
  const triplet = makeValidTriplet();
  const turns = triplet.caseData.run.sections[0].turns;
  turns.splice(turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-start"; }), 1);
  turns.splice(turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-end"; }), 1);
  triplet.blueprint.examiner.opening = null;
  triplet.blueprint.examiner.closing = null;
  triplet.blueprint.performance.taskEvidence.forEach(function (mapping) {
    mapping.runLineIds = mapping.runLineIds.filter(function (id) {
      return id !== "c000-run-start" && id !== "c000-run-end";
    });
  });
  refreshHashes(triplet);
  assert.equal(auditCase(triplet.caseData, triplet.blueprint, triplet.registry).status, "AUDITED");
});

test("Examiner opening and closing controls are administrative and bound to station boundaries", function () {
  const clinicalOpening = makeValidTriplet();
  const openingText = "Daniel is pale, clammy and hypotensive with a systolic pressure of 70. You may begin.";
  findLine(clinicalOpening.caseData, "c000-run-start").text = openingText;
  clinicalOpening.blueprint.examiner.opening.text = openingText;
  refreshHashes(clinicalOpening);
  assert.ok(issueCodes(auditCase(clinicalOpening.caseData, clinicalOpening.blueprint, clinicalOpening.registry))
    .has("examiner_opening_discloses_clinical_content"));

  [
    "Time is up. The patient has died.",
    "That is the end of the station. The ECG shows ST elevation.",
    "Stop now. The correct diagnosis was acute coronary syndrome."
  ].forEach(function (closingText) {
    const clinicalClosing = makeValidTriplet();
    findLine(clinicalClosing.caseData, "c000-run-end").text = closingText;
    clinicalClosing.blueprint.examiner.closing.text = closingText;
    refreshHashes(clinicalClosing);
    assert.ok(issueCodes(auditCase(clinicalClosing.caseData, clinicalClosing.blueprint, clinicalClosing.registry))
      .has("examiner_closing_discloses_clinical_content"), closingText);
  });

  const afterClosing = makeValidTriplet();
  afterClosing.caseData.run.sections[0].turns.push(
    turnFixture("c000-turn-after-end", "Action", "action", "c000-run-after-end", "After the station ends, the patient collapses and dies.")
  );
  afterClosing.blueprint.performance.actionDurations.push({
    lineId: "c000-run-after-end", seconds: 1, actionClass: "emergency", performedBy: "participant",
    performedByParticipantId: "participant-patient", actorExactPhrase: "the patient", consentId: null,
    exceptionRationale: "This deliberately invalid after-station event tests the closing boundary."
  });
  afterClosing.blueprint.performance.taskEvidence[2].runLineIds.push("c000-run-after-end");
  afterClosing.blueprint.performance.taskEvidence[2].observedSeconds += 1;
  afterClosing.blueprint.performance.taskEvidence[0].observedSeconds -= 1;
  refreshHashes(afterClosing);
  assert.ok(issueCodes(auditCase(afterClosing.caseData, afterClosing.blueprint, afterClosing.registry))
    .has("examiner_closing_not_last_event"));

  const beforeOpening = makeValidTriplet();
  beforeOpening.caseData.run.sections[0].turns.unshift(
    turnFixture("c000-turn-before-start", "Action", "action", "c000-run-before-start", "The doctor performs hand hygiene.")
  );
  beforeOpening.blueprint.performance.actionDurations.push({
    lineId: "c000-run-before-start", seconds: 5, actionClass: "neutral_preparation", performedBy: "doctor",
    performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: null, exceptionRationale: null
  });
  beforeOpening.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-before-start");
  beforeOpening.blueprint.performance.taskEvidence[0].observedSeconds += 5;
  beforeOpening.blueprint.performance.taskEvidence[2].observedSeconds -= 5;
  refreshHashes(beforeOpening);
  assert.ok(issueCodes(auditCase(beforeOpening.caseData, beforeOpening.blueprint, beforeOpening.registry))
    .has("examiner_opening_not_first_event"));
});

test("participant affect and Examiner lines require exclusive visible evidence", function () {
  const unevidencedAffect = makeValidTriplet();
  unevidencedAffect.blueprint.participants[0].openingAffect = {
    text: "Pacing beside the trolley and visibly distressed",
    evidenceLineId: null
  };
  assert.ok(validateBlueprint(unevidencedAffect.blueprint).errors.some(function (message) {
    return /openingAffect.*evidenceLineId|must match a schema/.test(message);
  }));
  assert.equal(auditCase(unevidencedAffect.caseData, unevidencedAffect.blueprint, unevidencedAffect.registry).status, "HOLD");

  const missingAffect = makeValidTriplet();
  missingAffect.blueprint.participants[0].openingAffect.evidenceLineId = "missing-affect-line";
  assert.ok(issueCodes(auditCase(missingAffect.caseData, missingAffect.blueprint, missingAffect.registry))
    .has("opening_affect_evidence_missing"));

  const duplicateExaminer = makeValidTriplet();
  duplicateExaminer.blueprint.examiner.scheduledPrompts.push({
    id: "prompt-duplicate-opening",
    speaker: "Examiner",
    triggerDescription: "At the start of the station",
    triggerLineId: null,
    responseLineId: "c000-run-start",
    responseText: "You may begin.",
    markingConsequence: "No additional consequence."
  });
  const codes = issueCodes(auditCase(duplicateExaminer.caseData, duplicateExaminer.blueprint, duplicateExaminer.registry));
  assert.ok(codes.has("duplicate_examiner_line_control"));
});

test("opening affect must agree with the visible evidence line", function () {
  ["Cheerful and laughing", "Unconscious and unresponsive", "Violent and carrying a knife"].forEach(function (text) {
    const triplet = makeValidTriplet();
    triplet.blueprint.participants[0].openingAffect.text = text;
    refreshReviewBindings(triplet.blueprint);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("opening_affect_evidence_mismatch"), text);
  });
});

test("identity is completed separately before clinical history", function () {
  const mixed = makeValidTriplet();
  findLine(mixed.caseData, "c000-run-identity-question").text += " When did the pain begin?";
  refreshHashes(mixed);
  assert.ok(issueCodes(auditCase(mixed.caseData, mixed.blueprint, mixed.registry))
    .has("identity_mixed_with_clinical_content"));

  const reply = makeValidTriplet();
  const replyText = "Daniel Morgan, 14 May 1966. The pain began while I was walking and I feel sweaty.";
  findLine(reply.caseData, "c000-run-identity-response").text = replyText;
  reply.blueprint.participants[0].identityResponse.text = replyText;
  refreshHashes(reply);
  assert.ok(issueCodes(auditCase(reply.caseData, reply.blueprint, reply.registry))
    .has("identity_response_contains_history"));
});

test("direct identity cannot complete without an exact participant response", function () {
  const missing = makeValidTriplet().blueprint;
  missing.interaction.identity.participantIds = [];
  missing.participants[0].identityRequired = false;
  missing.participants[0].identityResponse = null;
  const result = validateBlueprint(missing);
  assert.ok(result.errors.some(function (message) { return /requires at least one responding participant/.test(message); }));

  const unresponsive = makeValidTriplet().blueprint;
  unresponsive.participants[0].identityRequired = false;
  unresponsive.participants[0].identityResponse = null;
  assert.ok(validateBlueprint(unresponsive).errors.some(function (message) {
    return /requires an exact identity response/.test(message);
  }));
});

test("identity cannot conceal a clinical request or a clinical action", function () {
  [
    "Could you confirm your full name and tell me about your allergies?",
    "Could you confirm your full name and which operations you have had?",
    "Could you confirm your full name and whether you drink alcohol?"
  ].forEach(function (text) {
    const bundled = makeValidTriplet();
    findLine(bundled.caseData, "c000-run-identity-question").text = text;
    bundled.blueprint.interaction.identity.verificationText = text;
    refreshHashes(bundled);
    const codes = issueCodes(auditCase(bundled.caseData, bundled.blueprint, bundled.registry));
    assert.ok(codes.has("identity_mixed_with_clinical_content"), text);
  });

  const action = makeValidTriplet();
  findLine(action.caseData, "c000-run-approach").text = "The doctor administers aspirin and attaches cardiac monitoring.";
  refreshHashes(action);
  assert.ok(issueCodes(auditCase(action.caseData, action.blueprint, action.registry))
    .has("clinical_action_before_identity"));
});

test("identity validation uses exact controlled text, not an arbitrary word limit", function () {
  const triplet = makeValidTriplet();
  const text = "My complete legal name is Daniel James Morgan, and my recorded date of birth is 14 May 1966.";
  findLine(triplet.caseData, "c000-run-identity-response").text = text;
  triplet.blueprint.participants[0].identityResponse.text = text;
  triplet.blueprint.participants[0].identityResponse.fullName = "Daniel James Morgan";
  triplet.blueprint.participants[0].identityResponse.dateOfBirthText = "14 May 1966";
  refreshHashes(triplet);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.equal(report.status, "AUDITED");
});

test("identity and pre-clinical preparation use positive administrative grammars", function () {
  [
    "Could you confirm your full name and describe the sensation beneath your sternum?",
    "Could you confirm your full name and recount the episode that led here?"
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-identity-question").text = text;
    triplet.blueprint.interaction.identity.verificationText = text;
    refreshHashes(triplet);
    const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
    assert.ok(issueCodes(report).has("identity_mixed_with_clinical_content"), text);
    assert.equal(report.status, "HOLD");
  });

  const numericReply = makeValidTriplet();
  const numericText = "My name is Daniel Morgan, and my date of birth is 14 May 1966. 80/40. 140. 86%.";
  findLine(numericReply.caseData, "c000-run-identity-response").text = numericText;
  numericReply.blueprint.participants[0].identityResponse.text = numericText;
  refreshHashes(numericReply);
  assert.ok(validateBlueprint(numericReply.blueprint).errors.some(function (message) {
    return /identityResponse must contain only/.test(message);
  }));

  const poisonedControl = makeValidTriplet();
  poisonedControl.blueprint.participants[0].identityResponse.fullName = "Daniel Morgan crushing chest pain";
  poisonedControl.blueprint.participants[0].identityResponse.text =
    "My name is Daniel Morgan crushing chest pain, and my date of birth is 14 May 1966.";
  findLine(poisonedControl.caseData, "c000-run-identity-response").text =
    poisonedControl.blueprint.participants[0].identityResponse.text;
  refreshHashes(poisonedControl);
  assert.equal(validateBlueprint(poisonedControl.blueprint).blueprintReady, false);

  [
    "The doctor performs hand hygiene and checks 80/40.",
    "The doctor checks the seated patient."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-approach").text = text;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("clinical_action_before_identity"), text);
  });
});

test("identity name, date and mode evidence cannot contradict the station", function () {
  const wrongName = makeValidTriplet();
  const wrongNameText = "My name is John Smith, and my date of birth is 14 May 1966.";
  findLine(wrongName.caseData, "c000-run-identity-response").text = wrongNameText;
  Object.assign(wrongName.blueprint.participants[0].identityResponse, {
    text: wrongNameText,
    fullName: "John Smith"
  });
  refreshHashes(wrongName);
  assert.equal(auditCase(wrongName.caseData, wrongName.blueprint, wrongName.registry).status, "HOLD");

  ["31 February 1966", "1 January 2090"].forEach(function (dateText) {
    const badDate = makeValidTriplet();
    const responseText = "My name is Daniel Morgan, and my date of birth is " + dateText + ".";
    findLine(badDate.caseData, "c000-run-identity-response").text = responseText;
    badDate.blueprint.participants[0].identityResponse.text = responseText;
    badDate.blueprint.participants[0].identityResponse.dateOfBirthText = dateText;
    refreshHashes(badDate);
    assert.equal(auditCase(badDate.caseData, badDate.blueprint, badDate.registry).status, "HOLD", dateText);
  });

  const fakeRecord = makeValidTriplet();
  Object.assign(fakeRecord.blueprint.interaction.identity, {
    mode: "record_or_wristband",
    verificationLineId: "c000-run-approach",
    verificationText: findLine(fakeRecord.caseData, "c000-run-approach").text,
    participantIds: [],
    rationale: "Identity is said to be checked from a record."
  });
  assert.ok(validateBlueprint(fakeRecord.blueprint).errors.some(function (message) {
    return /positive record, wristband or identifier-check evidence/.test(message);
  }));

  const fakeImpossible = makeValidTriplet();
  Object.assign(fakeImpossible.blueprint.interaction.identity, {
    mode: "not_possible_with_reason",
    verificationLineId: "c000-run-approach",
    verificationText: findLine(fakeImpossible.caseData, "c000-run-approach").text,
    participantIds: [],
    rationale: "The patient cannot provide identity because they are unconscious."
  });
  assert.ok(validateBlueprint(fakeImpossible.blueprint).errors.some(function (message) {
    return /positive visible evidence/.test(message);
  }));
});

test("a declared inability to identify an unconscious patient cannot coexist with normal patient dialogue", function () {
  const triplet = makeValidTriplet();
  const turns = triplet.caseData.run.sections[0].turns;
  ["c000-run-identity-question", "c000-run-identity-response"].forEach(function (lineId) {
    const index = turns.findIndex(function (turn) { return turn.lines[0].id === lineId; });
    turns.splice(index, 1);
    triplet.blueprint.performance.taskEvidence.forEach(function (mapping) {
      mapping.runLineIds = mapping.runLineIds.filter(function (id) { return id !== lineId; });
    });
  });
  const evidence = "The patient is unconscious and unable to confirm their name or date of birth; no wristband is present.";
  findLine(triplet.caseData, "c000-run-approach").text = evidence;
  Object.assign(triplet.blueprint.interaction.identity, {
    mode: "not_possible_with_reason",
    verificationLineId: "c000-run-approach",
    verificationText: evidence,
    participantIds: [],
    rationale: "The patient is unconscious and has no identifier available."
  });
  triplet.blueprint.participants[0].identityRequired = false;
  triplet.blueprint.participants[0].identityResponse = null;
  refreshHashes(triplet);
  assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
    .has("identity_incapacity_contradicts_dialogue"));

  [
    "I cannot confirm the patient's identity because there is no wristband.",
    "I cannot confirm the patient's identity because there is no record.",
    "I cannot confirm the patient's identity because the identifiers are unknown."
  ].forEach(function (text) {
    const speaking = makeValidTriplet();
    const speakingTurns = speaking.caseData.run.sections[0].turns;
    ["c000-run-identity-question", "c000-run-identity-response"].forEach(function (lineId) {
      const index = speakingTurns.findIndex(function (turn) { return turn.lines[0].id === lineId; });
      speakingTurns.splice(index, 1);
      speaking.blueprint.performance.taskEvidence.forEach(function (mapping) {
        mapping.runLineIds = mapping.runLineIds.filter(function (id) { return id !== lineId; });
      });
    });
    findLine(speaking.caseData, "c000-run-approach").text = text;
    Object.assign(speaking.blueprint.interaction.identity, {
      mode: "not_possible_with_reason",
      verificationLineId: "c000-run-approach",
      verificationText: text,
      participantIds: [],
      rationale: "The visible identifiers are absent, but the participant remains able to speak."
    });
    speaking.blueprint.participants[0].identityRequired = false;
    speaking.blueprint.participants[0].identityResponse = null;
    refreshHashes(speaking);
    assert.ok(issueCodes(auditCase(speaking.caseData, speaking.blueprint, speaking.registry))
      .has("identity_not_possible_without_patient_reason"), text);
  });
});

test("no clinical exchange can occur before identity confirmation is complete", function () {
  const statement = makeValidTriplet();
  const turns = statement.caseData.run.sections[0].turns;
  const identityIndex = turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-identity-question"; });
  turns.splice(identityIndex, 0,
    turnFixture("c000-turn-preidentity-clinical", "Doctor", "spoken", "c000-run-preidentity-clinical", "I understand you have ongoing chest pressure."));
  statement.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-preidentity-clinical");
  refreshHashes(statement);
  const statementCodes = issueCodes(auditCase(statement.caseData, statement.blueprint, statement.registry));
  assert.ok(statementCodes.has("clinical_content_before_identity"));

  const exchange = makeValidTriplet();
  const exchangeTurns = exchange.caseData.run.sections[0].turns;
  const onsetQuestion = exchangeTurns.splice(exchangeTurns.findIndex(function (turn) {
    return turn.lines[0].id === "c000-run-onset-question";
  }), 1)[0];
  const onsetResponse = exchangeTurns.splice(exchangeTurns.findIndex(function (turn) {
    return turn.lines[0].id === "c000-run-onset-response";
  }), 1)[0];
  const replyIndex = exchangeTurns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-identity-response"; });
  exchangeTurns.splice(replyIndex, 0, onsetQuestion, onsetResponse);
  refreshHashes(exchange);
  const exchangeCodes = issueCodes(auditCase(exchange.caseData, exchange.blueprint, exchange.registry));
  assert.ok(exchangeCodes.has("identity_response_not_immediate"));
  assert.ok(exchangeCodes.has("information_request_before_identity"));
  assert.ok(exchangeCodes.has("participant_content_before_identity"));

  const examinerDisclosure = makeValidTriplet();
  const examinerTurns = examinerDisclosure.caseData.run.sections[0].turns;
  examinerTurns.splice(1, 0,
    turnFixture("c000-turn-preidentity-examiner", "Examiner", "spoken", "c000-run-preidentity-examiner",
      "Daniel is cyanosed, mottled and has audible stridor."));
  examinerDisclosure.blueprint.examiner.scheduledPrompts.push({
    id: "prompt-preidentity-clinical",
    speaker: "Examiner",
    triggerDescription: "Immediately after the administrative opening",
    triggerLineId: "c000-run-start",
    responseLineId: "c000-run-preidentity-examiner",
    responseText: "Daniel is cyanosed, mottled and has audible stridor.",
    markingConsequence: "This deliberately invalid prompt tests the identity boundary."
  });
  examinerDisclosure.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-preidentity-examiner");
  refreshHashes(examinerDisclosure);
  assert.ok(issueCodes(auditCase(examinerDisclosure.caseData, examinerDisclosure.blueprint,
    examinerDisclosure.registry)).has("clinical_content_before_identity"));
});

test("pre-identity Doctor speech and record checks require positive administrative evidence", function () {
  [
    "I will give you aspirin now.",
    "I am calling an ambulance.",
    "Lie down while I obtain an ECG.",
    "I have diagnosed a heart attack.",
    "I will insert a cannula now."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    const turns = triplet.caseData.run.sections[0].turns;
    const identityIndex = turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-identity-question"; });
    turns.splice(identityIndex, 0,
      turnFixture("c000-turn-preidentity-extra", "Doctor", "spoken", "c000-run-preidentity-extra", text));
    triplet.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-preidentity-extra");
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("clinical_content_before_identity"), text);
  });

  [
    "The doctor does not check the identity wristband against the record.",
    "The wristband identifiers do not match the record.",
    "The doctor checks the patient's name and date of birth on the wristband, but it belongs to someone else.",
    "The doctor checks the wristband and finds the wrong patient.",
    "The doctor checks the record; the identifiers conflict.",
    "The doctor checks the wristband, which has another person's details."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-approach").text = text;
    Object.assign(triplet.blueprint.interaction.identity, {
      mode: "record_or_wristband",
      verificationLineId: "c000-run-approach",
      verificationText: text,
      participantIds: [],
      rationale: "Identifiers must be positively checked against a record or wristband."
    });
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("identity_record_check_missing"), text);
  });
});

test("consultation consent cannot be bundled with history", function () {
  const triplet = makeValidTriplet();
  const text = "Is it okay if I ask about your chest discomfort and you tell me when it began?";
  findLine(triplet.caseData, "c000-run-consent-question").text = text;
  triplet.blueprint.interaction.consents[0].requestText = text;
  refreshHashes(triplet);
  const codes = issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry));
  assert.ok(codes.has("consent_bundled_with_information_request"));
});

test("consultation consent requires a permission question and an affirmative answer", function () {
  [
    "I will ask you questions now.",
    "You must answer my questions.",
    "I am going to take a focused history.",
    "We are proceeding with this consultation.",
    "Answer my questions."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-consent-question").text = text;
    triplet.blueprint.interaction.consents[0].requestText = text;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("consent_request_not_permission"), text);
  });

  [
    "No, I do not consent.",
    "No. Do not ask me anything.",
    "I refuse.",
    "I am not comfortable with that.",
    "Yes, provided you avoid asking about the chest discomfort."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-consent-response").text = text;
    triplet.blueprint.interaction.consents[0].responseText = text;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("consent_not_granted"), text);
  });
});

test("physical examination and procedure actions require their own prior consent", function () {
  [
    "The doctor palpates Daniel's abdomen.",
    "The doctor auscultates Daniel's chest.",
    "The doctor performs a rectal examination."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    const turns = triplet.caseData.run.sections[0].turns;
    const openingIndex = turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-opening-question"; });
    turns.splice(openingIndex, 0,
      turnFixture("c000-turn-unconsented-exam", "Action", "action", "c000-run-unconsented-exam", text));
    triplet.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-unconsented-exam");
    triplet.blueprint.performance.actionDurations.push({
      lineId: "c000-run-unconsented-exam", seconds: 5, actionClass: "examination",
      performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor",
      consentId: "consent-examination-missing", exceptionRationale: null
    });
    triplet.blueprint.performance.taskEvidence[0].observedSeconds -= 5;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("examination_action_without_consent"), text);
  });

  const procedure = makeValidTriplet();
  const procedureTurns = procedure.caseData.run.sections[0].turns;
  const procedureOpeningIndex = procedureTurns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-opening-question"; });
  procedureTurns.splice(procedureOpeningIndex, 0,
    turnFixture("c000-turn-unconsented-procedure", "Action", "action", "c000-run-unconsented-procedure", "The doctor inserts a cannula."));
  procedure.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-unconsented-procedure");
  procedure.blueprint.performance.actionDurations.push({
    lineId: "c000-run-unconsented-procedure", seconds: 5, actionClass: "procedure",
    performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor",
    consentId: "consent-procedure-missing", exceptionRationale: null
  });
  procedure.blueprint.performance.taskEvidence[0].observedSeconds -= 5;
  refreshHashes(procedure);
  assert.ok(issueCodes(auditCase(procedure.caseData, procedure.blueprint, procedure.registry))
    .has("procedure_action_without_consent"));

  [
    "I am now palpating your abdomen.",
    "I am examining your chest now.",
    "I am inserting a cannula now.",
    "I am performing a rectal examination now."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    const turns = triplet.caseData.run.sections[0].turns;
    const openingIndex = turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-opening-question"; });
    turns.splice(openingIndex, 0,
      turnFixture("c000-turn-spoken-action", "Doctor", "spoken", "c000-run-spoken-action", text));
    triplet.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-spoken-action");
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("spoken_clinical_action"), text);
  });

  [
    "The doctor checks Daniel's radial pulse.",
    "The doctor obtains a venous blood sample.",
    "The doctor gains intravenous access.",
    "The doctor connects an intravenous infusion.",
    "The doctor swabs and sutures the wound."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    const turns = triplet.caseData.run.sections[0].turns;
    const openingIndex = turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-opening-question"; });
    turns.splice(openingIndex, 0,
      turnFixture("c000-turn-misclassified-action", "Action", "action", "c000-run-misclassified-action", text));
    triplet.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-misclassified-action");
    triplet.blueprint.performance.actionDurations.push({
      lineId: "c000-run-misclassified-action", seconds: 5, actionClass: "neutral_preparation",
      performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: null, exceptionRationale: null
    });
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("action_class_text_mismatch"), text);
  });

  [
    "Blood is drawn for testing.",
    "A cannula is inserted into Daniel's arm.",
    "An intravenous infusion is connected.",
    "The wound is swabbed and sutured.",
    "The doctor feels Daniel's abdomen deeply for tenderness and guarding.",
    "The doctor listens to Daniel's chest with a stethoscope.",
    "The doctor tests Daniel's leg strength against resistance.",
    "The doctor gives Daniel 300 milligrams of aspirin to chew.",
    "The doctor applies oxygen through nasal prongs."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    const turns = triplet.caseData.run.sections[0].turns;
    const openingIndex = turns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-opening-question"; });
    turns.splice(openingIndex, 0,
      turnFixture("c000-turn-false-scene", "Action", "action", "c000-run-false-scene", text));
    triplet.blueprint.performance.taskEvidence[0].runLineIds.push("c000-run-false-scene");
    triplet.blueprint.performance.actionDurations.push({
      lineId: "c000-run-false-scene", seconds: 5, actionClass: "participant_observation",
      performedBy: "participant", performedByParticipantId: "participant-patient",
      actorExactPhrase: "Daniel", consentId: null, exceptionRationale: null
    });
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("action_class_text_mismatch"), text);
  });
});

test("mapped requests must be substantive and answered with sealed evidence", function () {
  ["Really?", "What?", "Why?", "Okay?", "Yes?"].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-onset-question").text = text;
    const request = triplet.blueprint.interaction.informationRequests.find(function (item) { return item.id === "request-onset"; });
    request.requestText = text;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("information_request_grammar_unrecognised"), text);
  });
  ["Explain.", "Describe.", "List.", "Confirm.", "Tell me.", "Go over."].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-onset-question").text = text;
    const request = triplet.blueprint.interaction.informationRequests.find(function (item) { return item.id === "request-onset"; });
    request.requestText = text;
    request.requestType = "imperative_request";
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("information_request_grammar_unrecognised"), text);
  });

  const irrelevant = makeValidTriplet();
  const irrelevantText = "My favourite colour is blue and I enjoy gardening on weekends.";
  findLine(irrelevant.caseData, "c000-run-onset-response").text = irrelevantText;
  const irrelevantRequest = irrelevant.blueprint.interaction.informationRequests.find(function (item) { return item.id === "request-onset"; });
  irrelevantRequest.responseText = irrelevantText;
  const irrelevantDisclosure = irrelevant.blueprint.participants[0].disclosures.find(function (item) { return item.id === "disclosure-onset"; });
  irrelevantDisclosure.responseText = irrelevantText;
  refreshHashes(irrelevant);
  assert.ok(issueCodes(auditCase(irrelevant.caseData, irrelevant.blueprint, irrelevant.registry))
    .has("information_response_evidence_missing"));

  [
    "I do not understand the question.",
    "That is private and I will not answer.",
    "I refuse to answer.",
    "I'd rather keep that private.",
    "I'd prefer not to answer.",
    "I won't tell you.",
    "None of your business."
  ].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-onset-response").text = text;
    const request = triplet.blueprint.interaction.informationRequests.find(function (item) { return item.id === "request-onset"; });
    request.responseText = text;
    request.responseEvidencePhrases = [text];
    triplet.blueprint.participants[0].disclosures.find(function (item) { return item.id === "disclosure-onset"; }).responseText = text;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("information_response_outcome_contradiction"), text);
  });

  const overdisclosed = makeValidTriplet();
  const overdisclosedText = "I developed heavy pressure forty minutes ago while walking after lunch. It spreads to my left shoulder, arm and jaw. I became sweaty, nauseated and breathless. I have high blood pressure, high cholesterol, raised blood sugar, smoke ten cigarettes daily, take perindopril and atorvastatin, use no blood thinner or sildenafil, have no aspirin allergy, and my father had a heart attack at fifty-four.";
  findLine(overdisclosed.caseData, "c000-run-opening-response").text = overdisclosedText;
  const openingRequest = overdisclosed.blueprint.interaction.informationRequests.find(function (item) {
    return item.id === "request-opening";
  });
  openingRequest.responseText = overdisclosedText;
  overdisclosed.blueprint.participants[0].initialVoluntary.text = overdisclosedText;
  refreshHashes(overdisclosed);
  assert.ok(issueCodes(auditCase(overdisclosed.caseData, overdisclosed.blueprint, overdisclosed.registry))
    .has("information_response_overdisclosure_risk"));
});

test("Action actors and low-risk classes consume the complete visible event", function () {
  function actionTriplet(text, actionClass, performedBy, participantId, actorExactPhrase) {
    const triplet = makeValidTriplet();
    const turns = triplet.caseData.run.sections[0].turns;
    const approachIndex = turns.findIndex(function (item) { return item.lines[0].id === "c000-run-approach"; });
    const approach = turns.splice(approachIndex, 1)[0];
    approach.lines[0].text = text;
    const consentIndex = turns.findIndex(function (item) { return item.lines[0].id === "c000-run-consent-response"; });
    turns.splice(consentIndex + 1, 0, approach);
    Object.assign(triplet.blueprint.performance.actionDurations[0], {
      actionClass,
      performedBy,
      performedByParticipantId: participantId,
      actorExactPhrase,
      consentId: null,
      exceptionRationale: null
    });
    refreshHashes(triplet);
    return triplet;
  }

  const validParticipant = actionTriplet("Daniel is pacing.", "participant_observation",
    "participant", "participant-patient", "Daniel");
  assert.equal(auditCase(validParticipant.caseData, validParticipant.blueprint, validParticipant.registry).status, "AUDITED");

  const validEquipment = actionTriplet("The monitor displays sinus rhythm at 104 beats per minute.",
    "equipment_event", "equipment", null, "The monitor");
  assert.equal(auditCase(validEquipment.caseData, validEquipment.blueprint, validEquipment.registry).status, "AUDITED");

  [
    ["Sarah is pacing.", "participant_observation", "participant", "participant-patient", "Sarah"],
    ["Daniel is sitting while oxygen flows through nasal prongs.", "participant_observation", "participant", "participant-patient", "Daniel"],
    ["Daniel is sitting with a glyceryl trinitrate tablet under his tongue.", "participant_observation", "participant", "participant-patient", "Daniel"],
    ["A venous blood sample is collected.", "participant_observation", "participant", "participant-patient", "Daniel"],
    ["The monitor displays sinus rhythm while oxygen flows through nasal prongs.", "equipment_event", "equipment", null, "The monitor"],
    ["The monitor displays sinus rhythm as morphine runs.", "equipment_event", "equipment", null, "The monitor"]
  ].forEach(function (item) {
    const triplet = actionTriplet.apply(null, item);
    const codes = issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry));
    assert.ok(codes.has("action_actor_control_mismatch") || codes.has("action_actor_text_mismatch") ||
      codes.has("action_class_text_mismatch"), item[0]);
  });
});

test("inherently sensitive questions cannot be omitted from the consent map", function () {
  ["Have you been sexually assaulted?", "Are you experiencing domestic violence?", "Have you had thoughts of self-harm?"].forEach(function (text) {
    const triplet = makeValidTriplet();
    findLine(triplet.caseData, "c000-run-onset-question").text = text;
    triplet.blueprint.interaction.informationRequests.find(function (item) { return item.id === "request-onset"; }).requestText = text;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("sensitive_history_not_declared"), text);
  });
});

test("implicit information requests remain atomic", function () {
  const triplet = makeValidTriplet();
  const text = "I need you to describe what brought you in and when it started.";
  findLine(triplet.caseData, "c000-run-opening-question").text = text;
  triplet.blueprint.interaction.informationRequests[0].requestText = text;
  triplet.blueprint.interaction.informationRequests[0].requestType = "imperative_request";
  refreshHashes(triplet);
  const codes = issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry));
  assert.ok(codes.has("compound_question_in_turn"));
  assert.ok(codes.has("question_plan_is_not_single_question"));
});

test("natural request forms, Unicode questions and explicit addressees remain atomic", function () {
  [
    "I need to know when it began and whether it spreads.",
    "I need your medicines and your allergies.",
    "I wonder when it began and whether it spreads.",
    "Help me understand when it began and where it goes.",
    "Describe the onset plus the radiation.",
    "Outline the medicines as well as the allergies.",
    "Describe the onset in addition to the radiation.",
    "Describe the onset alongside the radiation.",
    "Describe onset & radiation.",
    "Describe the onset followed by the radiation.",
    "Did it start suddenly and spread to your arm?",
    "Does it worsen with exertion and improve with rest?",
    "Have you vomited and felt sweaty?",
    "Do you smoke and drink alcohol?",
    "Did you fall and hit your head?",
    "When did it begin and where does it go？"
  ].forEach(function (text) {
    assert.equal(hasCompoundQuestion(text), true, text);
  });

  const addressee = makeValidTriplet();
  addressee.blueprint.participants.push({
    id: "participant-relative",
    speakerLabel: "Relative",
    addressTerms: ["Sarah"],
    role: "relative",
    identityRequired: false,
    identityResponse: null,
    openingAffect: null,
    initialVoluntary: null,
    concerns: [],
    disclosures: []
  });
  const line = findLine(addressee.caseData, "c000-run-opening-question");
  line.text = "This next question is for Sarah. What brought you in today?";
  const request = addressee.blueprint.interaction.informationRequests.find(function (item) {
    return item.lineId === line.id;
  });
  request.requestText = line.text;
  addressee.blueprint.participants[0].initialVoluntary.triggerLineId = line.id;
  refreshHashes(addressee);
  assert.ok(issueCodes(auditCase(addressee.caseData, addressee.blueprint, addressee.registry))
    .has("information_request_addressee_mismatch"));
});

test("a mapped information response must belong to the declared participant", function () {
  const triplet = makeValidTriplet();
  const turn = triplet.caseData.run.sections[0].turns.find(function (item) {
    return item.lines[0].id === "c000-run-onset-response";
  });
  turn.speaker = "Doctor";
  refreshHashes(triplet);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.ok(issueCodes(report).has("information_response_mismatch"));
  assert.equal(report.status, "HOLD");
});

test("direct participant addresses are exact, identity-bound and mapped", function () {
  const wrongName = makeValidTriplet();
  findLine(wrongName.caseData, "c000-run-explanation").text =
    findLine(wrongName.caseData, "c000-run-explanation").text.replace(/^Daniel,/, "Michael,");
  refreshHashes(wrongName);
  const wrongNameCodes = issueCodes(auditCase(wrongName.caseData, wrongName.blueprint, wrongName.registry));
  assert.ok(wrongNameCodes.has("direct_address_text_mismatch"));
  assert.ok(wrongNameCodes.has("unknown_direct_address"));

  const poisonedIdentity = makeValidTriplet();
  poisonedIdentity.blueprint.participants[0].addressTerms = ["Sarah"];
  poisonedIdentity.blueprint.interaction.directAddresses.forEach(function (address) { address.addressTerm = "Sarah"; });
  refreshReviewBindings(poisonedIdentity.blueprint);
  assert.ok(validateBlueprint(poisonedIdentity.blueprint).errors.some(function (message) {
    return /address term .* does not match the controlled identity name/.test(message);
  }));

  const multiword = makeValidTriplet();
  const onsetText = "Mr Morgan, when did it begin?";
  findLine(multiword.caseData, "c000-run-onset-question").text = onsetText;
  multiword.blueprint.interaction.informationRequests.find(function (request) {
    return request.id === "request-onset";
  }).requestText = onsetText;
  multiword.blueprint.interaction.directAddresses.push({
    lineId: "c000-run-onset-question",
    participantId: "participant-patient",
    addressTerm: "Mr Morgan"
  });
  refreshHashes(multiword);
  assert.equal(auditCase(multiword.caseData, multiword.blueprint, multiword.registry).status, "AUDITED");
});

test("visible metadata is bound exactly to blueprint and registry", function () {
  const mutations = [
    ["registry_global_id_mismatch", function (item) { item.caseData.globalId = "CP-C099"; }],
    ["blueprint_display_number_mismatch", function (item) { item.caseData.displayNumber = "Case 99"; }],
    ["registry_title_mismatch", function (item) { item.caseData.title = "Different title"; }],
    ["blueprint_status_label_mismatch", function (item) { item.caseData.statusLabel = "Official full-mark script"; }],
    ["blueprint_note_mismatch", function (item) { item.caseData.note = "Different learner-facing note."; }],
    ["registry_modality_mismatch", function (item) { item.caseData.modality = "online"; }],
    ["registry_phase_mismatch", function (item) { item.caseData.phase.id = 2; }],
    ["registry_phase_title_mismatch", function (item) { item.caseData.phase.title = "Different phase"; }],
    ["registry_pattern_mismatch", function (item) { item.caseData.pattern.id = 2; }],
    ["registry_pattern_title_mismatch", function (item) { item.caseData.pattern.title = "Different pattern"; }],
    ["registry_area_mismatch", function (item) { item.caseData.format.predominantArea = "Diagnostic Formulation"; }]
  ];
  mutations.forEach(function (entry) {
    const triplet = makeValidTriplet();
    entry[1](triplet);
    refreshHashes(triplet);
    const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
    assert.ok(issueCodes(report).has(entry[0]), entry[0]);
    assert.equal(report.status, "HOLD");
  });
});

test("display identity and curriculum admission are cross-bound", function () {
  const display = makeValidTriplet();
  display.caseData.displayNumber = "Case 87";
  display.blueprint.station.displayNumber = "Case 87";
  refreshHashes(display);
  assert.ok(validateBlueprint(display.blueprint).errors.some(function (message) {
    return /displayNumber must be derived/.test(message);
  }));
  assert.ok(issueCodes(auditCase(display.caseData, display.blueprint, display.registry))
    .has("display_number_identity_mismatch"));

  const admission = makeValidTriplet();
  admission.registry.cases[0].distinctJob = "A different curriculum job.";
  admission.registry.cases[0].coverageSlot = "aortic dissection";
  admission.registry.cases[0].primaryFailureMode = "unsafe_delay";
  const admissionCodes = issueCodes(auditCase(admission.caseData, admission.blueprint, admission.registry));
  assert.ok(admissionCodes.has("registry_distinct_job_mismatch"));
  assert.ok(admissionCodes.has("registry_coverage_slot_mismatch"));
  assert.ok(admissionCodes.has("registry_failure_mode_mismatch"));

  const duplicate = makeValidTriplet();
  duplicate.blueprint.variation.duplicateCheck.comparedCaseIds = ["case-999"];
  duplicate.blueprint.qa.blueprintPackageSha256 = blueprintPackageHash(duplicate.blueprint);
  assert.ok(issueCodes(auditCase(duplicate.caseData, duplicate.blueprint, duplicate.registry))
    .has("duplicate_comparison_case_missing"));
});

test("Stem lines and tasks are exact controlled content", function () {
  const stem = makeValidTriplet();
  stem.caseData.stem.lines[1].text = "A changed but plausible Stem sentence.";
  refreshHashes(stem);
  assert.ok(issueCodes(auditCase(stem.caseData, stem.blueprint, stem.registry)).has("blueprint_stem_mismatch"));

  const task = makeValidTriplet();
  task.caseData.stem.tasks[0].text = "Take a comprehensive history.";
  refreshHashes(task);
  assert.ok(issueCodes(auditCase(task.caseData, task.blueprint, task.registry)).has("blueprint_task_mismatch"));
});

test("arbitrary declared participant labels and multiple role-players are supported", function () {
  const triplet = makeValidTriplet();
  const turns = triplet.caseData.run.sections[0].turns;
  const summaryIndex = turns.findIndex(function (item) { return item.lines[0].id === "c000-run-summary"; });
  turns.splice(summaryIndex, 0,
    turnFixture("c000-turn-interpreter-request", "Doctor", "spoken", "c000-run-interpreter-request", "Interpreter, could you repeat Daniel's last answer in plain English?"),
    turnFixture("c000-turn-interpreter-response", "Interpreter", "spoken", "c000-run-interpreter-response", "Daniel says he takes his blood pressure and cholesterol tablets, uses no blood thinner or sildenafil, and has no known aspirin allergy."));
  triplet.blueprint.participants[0].disclosures.find(function (item) { return item.id === "disclosure-medicine"; })
    .nextDoctorLineId = "c000-run-interpreter-request";
  triplet.blueprint.interaction.informationRequests.find(function (item) { return item.id === "request-medicine"; })
    .nextDoctorLineId = "c000-run-interpreter-request";
  triplet.blueprint.participants.push({
    id: "participant-interpreter",
    speakerLabel: "Interpreter",
    addressTerms: ["interpreter"],
    role: "interpreter",
    identityRequired: false,
    identityResponse: null,
    openingAffect: null,
    initialVoluntary: null,
    concerns: [],
    disclosures: [{
      id: "disclosure-interpreted-medicine",
      factIds: ["clinical-action-assessment"],
      triggerType: "specific_question",
      triggerDescription: "The Doctor asks the interpreter to restate the medicine answer.",
      triggerLineId: "c000-run-interpreter-request",
      responseLineId: "c000-run-interpreter-response",
      responseText: findLine(triplet.caseData, "c000-run-interpreter-response").text,
      nextDoctorLineId: "c000-run-summary",
      responseUse: "The Doctor summarises the medicine safety information."
    }]
  });
  triplet.blueprint.interaction.informationRequests.push({
    id: "request-interpreter",
    lineId: "c000-run-interpreter-request",
    requestText: findLine(triplet.caseData, "c000-run-interpreter-request").text,
    taskId: "task-history",
    requestType: "question",
    requestCount: 1,
    topic: "Interpreted medicine answer",
    addressedParticipantId: "participant-interpreter",
    expectedResponseLineId: "c000-run-interpreter-response",
    responseParticipantId: "participant-interpreter",
    responseText: findLine(triplet.caseData, "c000-run-interpreter-response").text,
    responseOutcome: "answered",
    responseEvidencePhrases: ["blood pressure and cholesterol tablets"],
    nextDoctorLineId: "c000-run-summary",
    responseUse: "The Doctor uses the interpreted medicine answer in the summary."
  });
  triplet.blueprint.interaction.directAddresses.push({
    lineId: "c000-run-interpreter-request",
    participantId: "participant-interpreter",
    addressTerm: "interpreter"
  });
  triplet.blueprint.performance.taskEvidence[0].runLineIds.push(
    "c000-run-interpreter-request",
    "c000-run-interpreter-response"
  );
  refreshHashes(triplet);
  assert.equal(auditCase(triplet.caseData, triplet.blueprint, triplet.registry).status, "AUDITED");

  triplet.blueprint.participants.pop();
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  assert.ok(issueCodes(report).has("undeclared_run_speaker"));
  assert.equal(report.status, "HOLD");
});

test("the blueprint also supports participant-free model and equipment stations", function () {
  const blueprint = makeValidTriplet().blueprint;
  blueprint.station.grammar = "examination";
  blueprint.station.modality = "model_equipment";
  blueprint.station.predominantArea = "Examination";
  blueprint.tasks[0].text = "Perform a focused examination using the model provided.";
  blueprint.tasks[0].actionVerb = "Perform";
  blueprint.tasks[0].assessmentArea = "Examination";
  blueprint.participants = [];
  blueprint.interaction.identity = {
    mode: "not_applicable",
    verificationLineId: null,
    verificationText: null,
    participantIds: [],
    completedBeforeClinicalContent: true,
    rationale: "The model station uses the supplied identity record before examination begins."
  };
  blueprint.interaction.consents = [];
  blueprint.interaction.defaultInformationParticipantId = null;
  blueprint.interaction.directAddresses = [];
  blueprint.interaction.informationRequests = [];
  blueprint.interaction.sensitiveTopicLineIds = [];
  blueprint.marking.domains = [
    { name: "Choice and technique of examination, organisation and sequence", taskIds: ["task-history"], runLineIds: ["c000-run-opening-question"], sourceClaimIds: ["claim-exam-standard"] },
    { name: "Accuracy of examination", taskIds: ["task-history"], runLineIds: ["c000-run-summary"], sourceClaimIds: ["claim-exam-standard"] },
    { name: "Commentary to examiner", taskIds: ["task-explain"], runLineIds: ["c000-run-explanation"], sourceClaimIds: ["claim-exam-standard"] }
  ];
  refreshReviewBindings(blueprint);
  assert.equal(validateBlueprint(blueprint).blueprintReady, true);
});

test("station modality must agree with the visible consultation", function () {
  ["telephone", "video", "online"].forEach(function (modality) {
    const triplet = makeValidTriplet();
    triplet.caseData.modality = modality;
    triplet.blueprint.station.modality = modality;
    triplet.registry.cases[0].modality = modality;
    refreshHashes(triplet);
    const codes = issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry));
    assert.ok(codes.has("modality_action_contradiction"), modality);
    assert.ok(codes.has("examiner_release_modality_mismatch"), modality);
  });

  const thirdParty = makeValidTriplet();
  thirdParty.caseData.modality = "third_party";
  thirdParty.blueprint.station.modality = "third_party";
  thirdParty.registry.cases[0].modality = "third_party";
  refreshHashes(thirdParty);
  assert.ok(issueCodes(auditCase(thirdParty.caseData, thirdParty.blueprint, thirdParty.registry))
    .has("third_party_modality_without_informant"));

  const model = makeValidTriplet();
  model.caseData.modality = "model_equipment";
  model.blueprint.station.modality = "model_equipment";
  model.registry.cases[0].modality = "model_equipment";
  refreshHashes(model);
  assert.ok(issueCodes(auditCase(model.caseData, model.blueprint, model.registry))
    .has("model_modality_with_direct_participant"));

  const impossibleRemoteFinding = makeValidTriplet();
  impossibleRemoteFinding.caseData.modality = "telephone";
  impossibleRemoteFinding.blueprint.station.modality = "telephone";
  impossibleRemoteFinding.registry.cases[0].modality = "telephone";
  const release = impossibleRemoteFinding.blueprint.examiner.releases[0];
  release.permittedModalities = ["telephone"];
  const responseText = "You directly auscultate both lungs and palpate both calves.";
  findLine(impossibleRemoteFinding.caseData, release.responseLineId).text = responseText;
  release.responseText = responseText;
  impossibleRemoteFinding.blueprint.participants[0].openingAffect = null;
  refreshHashes(impossibleRemoteFinding);
  assert.ok(issueCodes(auditCase(impossibleRemoteFinding.caseData, impossibleRemoteFinding.blueprint,
    impossibleRemoteFinding.registry)).has("examiner_remote_physical_action"));

  const remoteExamination = makeValidTriplet();
  remoteExamination.caseData.modality = "telephone";
  remoteExamination.blueprint.station.modality = "telephone";
  remoteExamination.registry.cases[0].modality = "telephone";
  findLine(remoteExamination.caseData, "c000-run-approach").text = "The doctor performs hand hygiene.";
  remoteExamination.blueprint.examiner.releases[0].permittedModalities = ["telephone"];
  const remoteTurns = remoteExamination.caseData.run.sections[0].turns;
  const remoteOpeningIndex = remoteTurns.findIndex(function (turn) { return turn.lines[0].id === "c000-run-opening-question"; });
  remoteTurns.splice(remoteOpeningIndex, 0,
    turnFixture("c000-turn-exam-consent-request", "Doctor", "spoken", "c000-run-exam-consent-request", "Is it okay if I check your radial pulse?"),
    turnFixture("c000-turn-exam-consent-response", "Patient", "spoken", "c000-run-exam-consent-response", "Yes, that is fine."),
    turnFixture("c000-turn-remote-pulse", "Action", "action", "c000-run-remote-pulse", "The doctor checks Daniel's radial pulse."));
  remoteExamination.blueprint.interaction.consents.push({
    id: "consent-examination",
    scope: "examination",
    requestLineId: "c000-run-exam-consent-request",
    requestText: "Is it okay if I check your radial pulse?",
    responseLineId: "c000-run-exam-consent-response",
    responseText: "Yes, that is fine.",
    participantId: "participant-patient",
    outcome: "granted"
  });
  remoteExamination.blueprint.performance.taskEvidence[0].runLineIds.push(
    "c000-run-exam-consent-request", "c000-run-exam-consent-response", "c000-run-remote-pulse"
  );
  remoteExamination.blueprint.performance.actionDurations.push({
    lineId: "c000-run-remote-pulse", seconds: 5, actionClass: "examination",
    performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor",
    consentId: "consent-examination", exceptionRationale: null
  });
  refreshHashes(remoteExamination);
  assert.ok(issueCodes(auditCase(remoteExamination.caseData, remoteExamination.blueprint,
    remoteExamination.registry)).has("remote_doctor_action_contradiction"));
});

function turnFixture(id, speaker, kind, lineId, text) {
  return { id, speaker, kind, lines: [{ id: lineId, text }] };
}

test("clinical concepts, claims, sources and run lines are bidirectionally linked", function () {
  const triplet = makeValidTriplet();
  triplet.blueprint.sourceBasis.claimMap[0].runLineIds.push("missing-run-line");
  triplet.blueprint.sourceBasis.claimMap[0].clinicalConceptIds.pop();
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  const codes = issueCodes(report);
  assert.ok(codes.has("source_claim_line_missing"));
  assert.ok(codes.has("clinical_claim_reverse_link_missing"));
  assert.equal(report.status, "HOLD");

  const overdue = makeValidTriplet().blueprint;
  overdue.sourceBasis.sources[1].reviewDue = "2020-01-01";
  assert.ok(validateBlueprint(overdue).blockers.some(function (message) { return /past its source review due date/.test(message); }));

  const noExamSpec = makeValidTriplet().blueprint;
  noExamSpec.sourceBasis.sources = noExamSpec.sourceBasis.sources.filter(function (source) {
    return source.sourceType !== "exam_specification";
  });
  assert.ok(validateBlueprint(noExamSpec).blockers.some(function (message) { return /AMC exam specification/.test(message); }));
});

test("source authority and claim applicability cannot be self-labelled", function () {
  const fake = makeValidTriplet().blueprint;
  fake.sourceBasis.sources[0].organisation = "Imaginary Coaching Company";
  fake.sourceBasis.sources[0].url = "https://coaching.invalid/spec.pdf";
  const fakeResult = validateBlueprint(fake);
  assert.ok(fakeResult.blockers.some(function (message) { return /AMC exam specification/.test(message); }));
  assert.ok(fakeResult.errors.some(function (message) { return /non-verifiable source host/.test(message); }));

  const misapplied = makeValidTriplet().blueprint;
  misapplied.sourceBasis.claimMap.filter(function (claim) { return claim.claimType !== "exam_standard"; }).forEach(function (claim) {
    claim.sourceIds = ["source-amc-spec"];
    claim.sourceLocators = [{ sourceId: "source-amc-spec", locator: "Unrelated examination format section" }];
  });
  assert.ok(validateBlueprint(misapplied).errors.some(function (message) {
    return /without an applicable Australian clinical source/.test(message);
  }));

  const future = makeValidTriplet().blueprint;
  future.sourceBasis.sources[2].accessed = "2099-01-01";
  future.sourceBasis.sources[2].reviewDue = "2100-01-01";
  assert.ok(validateBlueprint(future).errors.some(function (message) { return /future/.test(message); }));

  ["https://www.example.com/guideline", "https://invented-guideline.org/guideline", "https://en.wikipedia.org/wiki/Chest_pain"]
    .forEach(function (url) {
      const invented = makeValidTriplet().blueprint;
      invented.sourceBasis.sources[2].organisation = "Anonymous Editor";
      invented.sourceBasis.sources[2].title = "Chest pain notes";
      invented.sourceBasis.sources[2].url = url;
      invented.qa.blueprintPackageSha256 = blueprintPackageHash(invented);
      const result = validateBlueprint(invented);
      assert.equal(result.blueprintReady, false, url);
      assert.ok(result.errors.some(function (message) {
        return /non-verifiable source host|reviewed authority catalogue/.test(message);
      }), url);
  });
});

test("source metadata, claim scope and review evidence fail closed", function () {
  ["claim", "locator", "evidence"].forEach(function (field) {
    const blueprint = makeValidTriplet().blueprint;
    if (field === "claim") blueprint.sourceBasis.claimMap[0].claim = "\u200B";
    if (field === "locator") blueprint.sourceBasis.claimMap[0].sourceLocators[0].locator = "\u200B";
    if (field === "evidence") blueprint.qa.clinical.evidence[0].reference = "\u200B";
    const result = validateBlueprint(blueprint);
    assert.equal(result.blueprintReady, false, field);
    assert.ok(result.errors.some(function (message) { return /blank or invisible-only/.test(message); }) ||
      result.blockers.some(function (message) { return /blank evidence/.test(message); }), field);
  });

  const relabelled = makeValidTriplet().blueprint;
  relabelled.sourceBasis.sources[2].title = "Australian insulin dosing guideline";
  relabelled.sourceBasis.sources[2].publishedOrUpdated = "2024-01-01";
  assert.ok(validateBlueprint(relabelled).errors.some(function (message) {
    return /metadata does not match/.test(message);
  }));

  const mixed = makeValidTriplet().blueprint;
  const claim = mixed.sourceBasis.claimMap.find(function (item) { return item.id === "claim-diagnosis"; });
  claim.sourceIds.push("source-amc-spec");
  claim.sourceLocators.push({ sourceId: "source-amc-spec", locator: "Station format section" });
  assert.ok(validateBlueprint(mixed).errors.some(function (message) {
    return /outside that source's reviewed claim scope/.test(message);
  }));

  const chronology = makeValidTriplet().blueprint;
  chronology.sourceBasis.sources[2].publishedOrUpdated = "2026-07-15";
  assert.ok(validateBlueprint(chronology).errors.some(function (message) {
    return /follows its accessed date/.test(message);
  }));

  const staleReview = makeValidTriplet().blueprint;
  staleReview.sourceBasis.claimMap[0].claim += " Materially changed after review.";
  staleReview.qa.blueprintPackageSha256 = blueprintPackageHash(staleReview);
  assert.ok(validateBlueprint(staleReview).blockers.some(function (message) {
    return /reviewScopeSha256 does not match/.test(message);
  }));
});

test("source, review and control changes invalidate the reviewed blueprint package", function () {
  const triplet = makeValidTriplet();
  triplet.blueprint.sourceBasis.sources[2].url = "https://en.wikipedia.org/wiki/Chest_pain";
  const stale = validateBlueprint(triplet.blueprint);
  assert.ok(stale.blockers.some(function (message) { return /reviewed blueprint package/.test(message); }));
  assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
    .has("blueprint_package_hash_mismatch"));
});

test("old review records cannot be reused after reviewed content changes", function () {
  const triplet = makeValidTriplet();
  const oldScope = triplet.blueprint.qa.clinical.reviewScopeSha256;
  triplet.blueprint.sourceBasis.claimMap[0].claim = "A changed diagnosis claim that requires a fresh clinical review.";
  triplet.blueprint.qa.reviewScopeSha256 = blueprintReviewScopeHash(triplet.blueprint);
  triplet.blueprint.qa.blueprintPackageSha256 = blueprintPackageHash(triplet.blueprint);
  assert.notEqual(triplet.blueprint.qa.reviewScopeSha256, oldScope);
  const result = validateBlueprint(triplet.blueprint);
  assert.equal(result.blueprintReady, false);
  assert.ok(result.blockers.some(function (message) {
    return /QA gate clinical is not bound to the current review scope|listen-through is not bound/.test(message);
  }));
});

test("duplicate blueprint locations fail closed", function () {
  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), "amc-blueprint-duplicate-"));
  try {
    const dataDirectory = path.join(temporaryRoot, "data", "blueprints");
    const engineDirectory = path.join(temporaryRoot, "engine", "blueprints");
    fs.mkdirSync(dataDirectory, { recursive: true });
    fs.mkdirSync(engineDirectory, { recursive: true });
    fs.writeFileSync(path.join(dataDirectory, "case-000.blueprint.json"), "{}\n");
    fs.writeFileSync(path.join(engineDirectory, "case-000.blueprint.json"), "{}\n");
    const loaded = loadBlueprint(temporaryRoot, "case-000");
    assert.match(loaded.__loadError, /duplicate canonical blueprint paths/);
    assert.equal(auditCase(makeValidTriplet().caseData, loaded, makeValidTriplet().registry).status, "HOLD");
  } finally {
    fs.rmSync(temporaryRoot, { recursive: true, force: true });
  }
});

test("visible root extensions and speaker-kind contradictions are rejected", function () {
  const extra = makeValidTriplet();
  extra.caseData.unreviewedDangerousContent = { doctorInstruction: "Send home without assessment" };
  assert.equal(validateVisibleCase(extra.caseData).valid, false);
  assert.equal(auditCase(extra.caseData, extra.blueprint, extra.registry).status, "HOLD");

  const wrongKind = makeValidTriplet();
  const responseTurn = wrongKind.caseData.run.sections[0].turns.find(function (turn) {
    return turn.lines[0].id === "c000-run-opening-response";
  });
  responseTurn.kind = "finding";
  refreshHashes(wrongKind);
  assert.ok(issueCodes(auditCase(wrongKind.caseData, wrongKind.blueprint, wrongKind.registry))
    .has("speaker_kind_mismatch"));
});

test("a handover is allowed only when a visible station task requests it", function () {
  function convertDoctorTurnToHandover(triplet) {
    const turn = triplet.caseData.run.sections[0].turns.find(function (item) {
      return item.lines[0].id === "c000-run-opening-question";
    });
    turn.kind = "handover";
    refreshHashes(triplet);
  }

  const invented = makeValidTriplet();
  convertDoctorTurnToHandover(invented);
  assert.ok(issueCodes(auditCase(invented.caseData, invented.blueprint, invented.registry))
    .has("handover_not_requested_by_task"));

  const requested = makeValidTriplet();
  requested.caseData.stem.tasks[0].text = "Take a focused history and hand over the case.";
  requested.blueprint.tasks[0].text = requested.caseData.stem.tasks[0].text;
  convertDoctorTurnToHandover(requested);
  assert.equal(issueCodes(auditCase(requested.caseData, requested.blueprint, requested.registry))
    .has("handover_not_requested_by_task"), false);
});

test("task controls, learner metadata and urgency language remain exact and neutral", function () {
  const wrongVerb = makeValidTriplet();
  wrongVerb.blueprint.tasks[0].actionVerb = "Explain";
  refreshReviewBindings(wrongVerb.blueprint);
  assert.ok(validateBlueprint(wrongVerb.blueprint).errors.some(function (message) { return /actionVerb/.test(message); }));

  const wrongRecipient = makeValidTriplet();
  wrongRecipient.blueprint.tasks[0].recipient = "Asha";
  refreshReviewBindings(wrongRecipient.blueprint);
  assert.ok(validateBlueprint(wrongRecipient.blueprint).errors.some(function (message) { return /recipient/.test(message); }));

  [
    "He must go straight to hospital.",
    "He needs to go to hospital.",
    "He has been sent to the emergency department.",
    "Your task is to get him to hospital now.",
    "He requires hospital care now.",
    "He was placed on the fast track for assessment."
  ].forEach(function (sentence) {
    const urgent = makeValidTriplet();
    urgent.caseData.stem.lines[1].text = sentence;
    urgent.blueprint.stem.lines[1].text = sentence;
    refreshHashes(urgent);
    assert.ok(issueCodes(auditCase(urgent.caseData, urgent.blueprint, urgent.registry)).has("stem_signals_urgency"), sentence);
  });

  const official = makeValidTriplet();
  official.caseData.note = "Official leaked AMC examination station.";
  official.blueprint.station.note = official.caseData.note;
  refreshHashes(official);
  assert.equal(auditCase(official.caseData, official.blueprint, official.registry).status, "HOLD");

  const disclaimer = makeValidTriplet();
  assert.equal(auditCase(disclaimer.caseData, disclaimer.blueprint, disclaimer.registry).status, "AUDITED");

  const directedTreatment = makeValidTriplet();
  directedTreatment.caseData.stem.tasks[1].text = "Administer aspirin and arrange an ECG.";
  directedTreatment.blueprint.tasks[1].text = directedTreatment.caseData.stem.tasks[1].text;
  directedTreatment.blueprint.tasks[1].actionVerb = "Administer";
  refreshHashes(directedTreatment);
  assert.ok(issueCodes(auditCase(directedTreatment.caseData, directedTreatment.blueprint,
    directedTreatment.registry)).has("stem_directs_treatment"));

  [
    { text: "Assess Daniel's gait.", verb: "Assess" },
    { text: "Explain Daniel's renal function.", verb: "Explain" },
    { text: "Discuss Daniel's vaccination history.", verb: "Discuss" }
  ].forEach(function (replacement) {
    const unperformed = makeValidTriplet();
    unperformed.caseData.stem.tasks[1].text = replacement.text;
    unperformed.blueprint.tasks[1].text = replacement.text;
    unperformed.blueprint.tasks[1].actionVerb = replacement.verb;
    refreshHashes(unperformed);
    assert.ok(issueCodes(auditCase(unperformed.caseData, unperformed.blueprint, unperformed.registry))
      .has("task_semantic_evidence_mismatch"), replacement.text);
  });
});

test("task completion requires all specific subjects and exact reviewed evidence", function () {
  [
    { text: "Assess Daniel's muscle power.", verb: "Assess" },
    { text: "Explain Daniel's kidney tests.", verb: "Explain" },
    { text: "Assess Daniel's vision changes.", verb: "Assess" },
    { text: "Interpret Daniel's ECG.", verb: "Interpret" },
    { text: "Review Daniel's CT.", verb: "Review" },
    { text: "Interpret Daniel's ABG.", verb: "Interpret" },
    { text: "Review Daniel's MRI.", verb: "Review" },
    { text: "Discuss cardiovascular risk and vaccination history with Daniel.", verb: "Discuss" }
  ].forEach(function (replacement) {
    const triplet = makeValidTriplet();
    triplet.caseData.stem.tasks[2].text = replacement.text;
    triplet.blueprint.tasks[2].text = replacement.text;
    triplet.blueprint.tasks[2].actionVerb = replacement.verb;
    refreshHashes(triplet);
    assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
      .has("task_semantic_control_mismatch"), replacement.text);
  });

  const missingPhrase = makeValidTriplet();
  missingPhrase.blueprint.performance.taskEvidence[2].requiredEvidence[0].exactPhrase = "a phrase absent from the answer";
  refreshReviewBindings(missingPhrase.blueprint);
  assert.ok(issueCodes(auditCase(missingPhrase.caseData, missingPhrase.blueprint, missingPhrase.registry))
    .has("task_required_evidence_phrase_missing"));

  [
    "Daniel, I will not explain whether this is acute coronary syndrome or reflux. I refuse to give you an assessment or arrange an ECG.",
    "Daniel, I am not going to explain whether this is acute coronary syndrome or reflux. I will not arrange an ECG.",
    "Daniel, I decline to explain whether this is acute coronary syndrome or reflux. I will not arrange an ECG.",
    "Daniel, I am unable to explain whether this is acute coronary syndrome or reflux. I will not arrange an ECG.",
    "Daniel, I will avoid explaining whether this is acute coronary syndrome or reflux. I will not arrange an ECG."
  ].forEach(function (text) {
    const negated = makeValidTriplet();
    findLine(negated.caseData, "c000-run-explanation").text = text;
    refreshHashes(negated);
    assert.ok(issueCodes(auditCase(negated.caseData, negated.blueprint, negated.registry))
      .has("task_positive_performance_phrase_missing"), text);
  });

  [
    "Daniel, I am omitting any explanation of my assessment of acute coronary syndrome or proposed management.",
    "Daniel, I am not explaining my assessment of acute coronary syndrome or proposed management.",
    "Daniel, I am skipping any explanation of my assessment of acute coronary syndrome or proposed management.",
    "Daniel, I have no intention of explaining my assessment of acute coronary syndrome or proposed management.",
    "Daniel, I am failing to explain my assessment of acute coronary syndrome or proposed management.",
    "Daniel, I am suppressing any explanation of my assessment of acute coronary syndrome or proposed management.",
    "Daniel, I won't cover my assessment of acute coronary syndrome or proposed management. Instead, I will discuss parking, weather, appointment times, paperwork, tea, the waiting room, bus routes, phone numbers, reception, staff rosters, opening hours and administrative forms. I am deliberately giving you no useful diagnosis, differential, investigation, treatment, disposition, safety advice, or answer about the cause of your symptoms today.",
    "Daniel, I will skip explaining my assessment of acute coronary syndrome and proposed management. Instead, I will talk about parking, weather, appointments, paperwork, tea, the waiting room, bus routes, phone numbers, reception, opening hours and forms. This does not give you a useful diagnosis, differential, investigation, treatment, disposition, safety advice, or answer about the cause of your symptoms today."
  ].forEach(function (text) {
    const nonPerformance = makeValidTriplet();
    findLine(nonPerformance.caseData, "c000-run-explanation").text = text;
    refreshHashes(nonPerformance);
    assert.ok(issueCodes(auditCase(nonPerformance.caseData, nonPerformance.blueprint, nonPerformance.registry))
      .has("task_positive_performance_phrase_missing"), text);
  });

  [
    "I am omitting any explanation of",
    "I am not explaining",
    "I am skipping any explanation of",
    "I have no intention of explaining",
    "I am failing to explain",
    "I am suppressing any explanation of"
  ].forEach(function (prefix) {
    const embeddedNegation = makeValidTriplet();
    findLine(embeddedNegation.caseData, "c000-run-explanation").text =
      "Daniel, " + prefix + " whether this is acute coronary syndrome or reflux, aortic disease, or a lung clot. " +
      "I am not saying that I recommend immediate assessment and treatment. I am keeping my assessment, immediate treatment plan, and safe disposition from you. The cause, alternatives, and next steps will remain unexplained despite your ongoing symptoms, concerns, and questions during this consultation today.";
    refreshHashes(embeddedNegation);
    assert.ok(issueCodes(auditCase(embeddedNegation.caseData, embeddedNegation.blueprint, embeddedNegation.registry))
      .has("task_positive_performance_phrase_missing"), prefix);
  });

  const plainLanguage = makeValidTriplet();
  findLine(plainLanguage.caseData, "c000-run-explanation").text =
    "Daniel, I am omitting jargon while explaining why this may be acute coronary syndrome. Reflux is possible after food, but it does not explain the full pattern. Aortic disease and a lung clot remain important alternatives. I recommend immediate assessment and treatment while we confirm the cause. I will explain each finding, what it means, and what happens next as clearly as possible.";
  refreshHashes(plainLanguage);
  assert.equal(auditCase(plainLanguage.caseData, plainLanguage.blueprint, plainLanguage.registry).status, "AUDITED");
});

test("critical actions must occur inside their source-reviewed deadline", function () {
  const triplet = makeValidTriplet();
  triplet.blueprint.clinicalTruth.criticalActionTimings[0].latestPermittedLineId = "c000-run-explanation";
  refreshReviewBindings(triplet.blueprint);
  assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
    .has("critical_action_outside_deadline"));

  const generic = makeValidTriplet();
  generic.blueprint.clinicalTruth.criticalActions[0].runLineIds = ["c000-run-concern-question"];
  generic.blueprint.clinicalTruth.criticalActionTimings[0].latestPermittedLineId = "c000-run-concern-question";
  const safetyClaim = generic.blueprint.sourceBasis.claimMap.find(function (claim) { return claim.id === "claim-safety"; });
  safetyClaim.runLineIds.push("c000-run-concern-question");
  refreshReviewBindings(generic.blueprint);
  assert.ok(issueCodes(auditCase(generic.caseData, generic.blueprint, generic.registry))
    .has("critical_action_outside_deadline"));

  const withheld = makeValidTriplet();
  findLine(withheld.caseData, "c000-run-concern-answer").text =
    "You did the right thing, and this is not your fault. I am not going to arrange an ECG, serial biomarkers, or monitored transfer. I am withholding treatment despite the ongoing cardiac pattern.";
  refreshHashes(withheld);
  const withheldCodes = issueCodes(auditCase(withheld.caseData, withheld.blueprint, withheld.registry));
  assert.ok(withheldCodes.has("task_positive_performance_phrase_missing"));
  assert.ok(withheldCodes.has("critical_action_outside_deadline"));
});

test("diagnosis aliases use clinical boundaries and supplied diagnoses cannot be re-derived", function () {
  ["A.C.S.", "A\u200BC\u200BS", "acute-coronary syndrome", "acute coronary-ischaemia"].forEach(function (alias) {
    const punctuated = makeValidTriplet();
    punctuated.caseData.stem.lines[1].text += " The referral note states " + alias + ".";
    punctuated.blueprint.stem.lines[1].text = punctuated.caseData.stem.lines[1].text;
    refreshHashes(punctuated);
    assert.ok(issueCodes(auditCase(punctuated.caseData, punctuated.blueprint, punctuated.registry))
      .has("stem_contains_forbidden_term"), alias);
  });

  const boundary = makeValidTriplet();
  boundary.blueprint.stem.diagnosisTerms.push("PE");
  boundary.blueprint.stem.forbiddenTerms.push("PE");
  boundary.caseData.stem.lines[1].text += " The person is seated comfortably.";
  boundary.blueprint.stem.lines[1].text = boundary.caseData.stem.lines[1].text;
  refreshHashes(boundary);
  assert.equal(auditCase(boundary.caseData, boundary.blueprint, boundary.registry).status, "AUDITED");

  const provided = makeValidTriplet();
  provided.blueprint.stem.diagnosisVisibility = "provided_as_task_context";
  provided.blueprint.stem.forbiddenTerms = provided.blueprint.stem.forbiddenTerms.filter(function (term) {
    return !provided.blueprint.stem.diagnosisTerms.includes(term);
  });
  provided.caseData.stem.lines[1].text += " Acute coronary syndrome has been diagnosed.";
  provided.blueprint.stem.lines[1].text = provided.caseData.stem.lines[1].text;
  provided.caseData.stem.tasks[1].text = "Choose the most likely diagnosis.";
  provided.blueprint.tasks[1].text = provided.caseData.stem.tasks[1].text;
  provided.blueprint.tasks[1].actionVerb = "Choose";
  refreshHashes(provided);
  assert.ok(issueCodes(auditCase(provided.caseData, provided.blueprint, provided.registry))
    .has("provided_diagnosis_task_conflict"));
});

test("marking uses official AMC domain language and the seven-point global threshold", function () {
  const valid = makeValidTriplet().blueprint;
  assert.equal(validateBlueprint(valid).blueprintReady, true);

  const inventedDomain = makeValidTriplet().blueprint;
  inventedDomain.marking.domains[0] = {
    name: "Clinical assessment",
    basis: "official",
    extensionRationale: null
  };
  assert.ok(validateBlueprint(inventedDomain).errors.some(function (message) {
    return /must be equal to one of the allowed values/.test(message);
  }));

  const falseThreshold = makeValidTriplet().blueprint;
  falseThreshold.marking.globalRating.passRatings = [5, 6, 7];
  assert.ok(validateBlueprint(falseThreshold).errors.some(function (message) {
    return /constant/.test(message);
  }));

  const proseThreshold = makeValidTriplet().blueprint;
  proseThreshold.marking.globalRating.passStandard = "Only ratings 6 and 7 pass this station.";
  assert.ok(validateBlueprint(proseThreshold).errors.some(function (message) {
    return /without restating or contradicting rating thresholds/.test(message);
  }));

  const noExamClaim = makeValidTriplet().blueprint;
  noExamClaim.marking.sourceClaimIds = ["claim-diagnosis"];
  assert.ok(validateBlueprint(noExamClaim).errors.some(function (message) {
    return /must cite an AMC-sourced exam_standard claim/.test(message);
  }));
});

test("project safety controls require aligned clinical evidence", function () {
  const triplet = makeValidTriplet();
  triplet.blueprint.marking.projectSafetyErrors[0].sourceClaimIds = ["claim-exam-standard"];
  triplet.blueprint.qa.blueprintPackageSha256 = blueprintPackageHash(triplet.blueprint);
  assert.ok(validateBlueprint(triplet.blueprint).errors.some(function (message) {
    return /must cite at least one applicable clinical claim/.test(message);
  }));
  assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
    .has("project_safety_error_claim_mismatch"));
});

test("predominant marking, clinical claim types and substantive evidence cannot be self-linked", function () {
  const noHistoryDomain = makeValidTriplet();
  noHistoryDomain.blueprint.marking.domains = noHistoryDomain.blueprint.marking.domains.filter(function (domain) {
    return domain.name !== "History";
  });
  refreshReviewBindings(noHistoryDomain.blueprint);
  assert.ok(validateBlueprint(noHistoryDomain.blueprint).errors.some(function (message) {
    return /predominant assessment area/.test(message);
  }));

  const examOnlyDiagnosis = makeValidTriplet();
  const leading = examOnlyDiagnosis.blueprint.clinicalTruth.leadingDiagnosis;
  const diagnosisClaim = examOnlyDiagnosis.blueprint.sourceBasis.claimMap.find(function (claim) { return claim.id === "claim-diagnosis"; });
  const examClaim = examOnlyDiagnosis.blueprint.sourceBasis.claimMap.find(function (claim) { return claim.id === "claim-exam-standard"; });
  diagnosisClaim.clinicalConceptIds = diagnosisClaim.clinicalConceptIds.filter(function (id) { return id !== leading.id; });
  leading.sourceClaimIds = [examClaim.id];
  examClaim.clinicalConceptIds.push(leading.id);
  examClaim.runLineIds.push("c000-run-explanation");
  refreshReviewBindings(examOnlyDiagnosis.blueprint);
  assert.ok(validateBlueprint(examOnlyDiagnosis.blueprint).errors.some(function (message) {
    return /leading diagnosis must cite an applicable clinical claim type/.test(message);
  }));

  const administrativeDiagnosis = makeValidTriplet();
  administrativeDiagnosis.blueprint.clinicalTruth.leadingDiagnosis.runLineIds = ["c000-run-identity-response"];
  const claim = administrativeDiagnosis.blueprint.sourceBasis.claimMap.find(function (item) { return item.id === "claim-diagnosis"; });
  claim.runLineIds.push("c000-run-identity-response");
  refreshHashes(administrativeDiagnosis);
  assert.ok(issueCodes(auditCase(administrativeDiagnosis.caseData, administrativeDiagnosis.blueprint,
    administrativeDiagnosis.registry)).has("clinical_concept_without_substantive_evidence"));

  const emptySafety = makeValidTriplet();
  const openingId = "c000-run-opening-question";
  const safetyError = emptySafety.blueprint.marking.projectSafetyErrors[0];
  safetyError.preventedByLineIds = [openingId];
  safetyError.safetyConceptIds.forEach(function (conceptId) {
    const concept = [
      ...emptySafety.blueprint.clinicalTruth.safetyThresholds,
      ...emptySafety.blueprint.clinicalTruth.criticalActions,
      ...emptySafety.blueprint.clinicalTruth.unsafeActions
    ].find(function (item) { return item.id === conceptId; });
    if (concept && !concept.runLineIds.includes(openingId)) concept.runLineIds.push(openingId);
  });
  const safetyClaim = emptySafety.blueprint.sourceBasis.claimMap.find(function (item) { return item.id === "claim-safety"; });
  if (!safetyClaim.runLineIds.includes(openingId)) safetyClaim.runLineIds.push(openingId);
  refreshHashes(emptySafety);
  assert.ok(issueCodes(auditCase(emptySafety.caseData, emptySafety.blueprint, emptySafety.registry))
    .has("project_safety_error_claim_mismatch"));
});

test("neutral preparation cannot consume the station clock", function () {
  const triplet = makeValidTriplet();
  triplet.blueprint.performance.actionDurations[0].seconds = 120;
  refreshReviewBindings(triplet.blueprint);
  assert.ok(issueCodes(auditCase(triplet.caseData, triplet.blueprint, triplet.registry))
    .has("neutral_pre_identity_action_too_long"));
});

test("marking and information controls must align with the mapped task evidence", function () {
  const duplicate = makeValidTriplet().blueprint;
  const clonedRequest = clone(duplicate.interaction.informationRequests[0]);
  clonedRequest.id = "request-duplicate-opening";
  duplicate.interaction.informationRequests.push(clonedRequest);
  assert.ok(validateBlueprint(duplicate).errors.some(function (message) {
    return /information request lineId values must be unique/.test(message);
  }));

  const ignored = makeValidTriplet().blueprint;
  ignored.interaction.informationRequests[0].responseUse = "The Doctor ignores this answer and changes topic.";
  assert.ok(validateBlueprint(ignored).errors.some(function (message) { return /describes non-use/.test(message); }));

  const requestTask = makeValidTriplet();
  requestTask.blueprint.interaction.informationRequests[0].taskId = "task-explain";
  const requestCodes = issueCodes(auditCase(requestTask.caseData, requestTask.blueprint, requestTask.registry));
  assert.ok(requestCodes.has("information_request_task_mismatch"));

  const domainTask = makeValidTriplet();
  domainTask.blueprint.marking.domains[0].taskIds = ["task-explain"];
  const domainCodes = issueCodes(auditCase(domainTask.caseData, domainTask.blueprint, domainTask.registry));
  assert.ok(domainCodes.has("marking_domain_task_mismatch"));
});

test("claim, marking, safety and per-task evidence cannot be relabelled into a pass", function () {
  const claimTask = makeValidTriplet();
  claimTask.blueprint.sourceBasis.claimMap.find(function (claim) { return claim.id === "claim-safety"; })
    .taskIds = ["task-explain", "task-concern"];
  assert.ok(issueCodes(auditCase(claimTask.caseData, claimTask.blueprint, claimTask.registry))
    .has("source_claim_task_mismatch"));

  const responseTask = makeValidTriplet();
  const responseId = "c000-run-opening-response";
  responseTask.blueprint.performance.taskEvidence[0].runLineIds =
    responseTask.blueprint.performance.taskEvidence[0].runLineIds.filter(function (id) { return id !== responseId; });
  responseTask.blueprint.performance.taskEvidence[1].runLineIds.push(responseId);
  assert.ok(issueCodes(auditCase(responseTask.caseData, responseTask.blueprint, responseTask.registry))
    .has("information_response_task_mismatch"));

  const nextTask = makeValidTriplet();
  const nextId = "c000-run-summary";
  nextTask.blueprint.performance.taskEvidence[0].runLineIds =
    nextTask.blueprint.performance.taskEvidence[0].runLineIds.filter(function (id) { return id !== nextId; });
  nextTask.blueprint.performance.taskEvidence[1].runLineIds.push(nextId);
  assert.ok(issueCodes(auditCase(nextTask.caseData, nextTask.blueprint, nextTask.registry))
    .has("information_next_doctor_task_mismatch"));

  const handHygieneStep = makeValidTriplet();
  handHygieneStep.blueprint.marking.keySteps[0].runLineIds = ["c000-run-approach"];
  handHygieneStep.blueprint.marking.keySteps[0].sourceClaimIds = ["claim-exam-standard"];
  const handCodes = issueCodes(auditCase(handHygieneStep.caseData, handHygieneStep.blueprint, handHygieneStep.registry));
  assert.ok(handCodes.has("marking_step_without_candidate_evidence"));
  assert.ok(handCodes.has("marking_step_claim_mismatch"));

  const collapsedDomains = makeValidTriplet();
  collapsedDomains.blueprint.marking.domains.forEach(function (domain) {
    domain.taskIds = ["task-history"];
    domain.runLineIds = ["c000-run-approach"];
  });
  const domainCodes = issueCodes(auditCase(collapsedDomains.caseData, collapsedDomains.blueprint, collapsedDomains.registry));
  assert.ok(domainCodes.has("duplicate_marking_domain_evidence"));
  assert.ok(domainCodes.has("marking_domain_without_candidate_evidence"));

  const unknownSafety = makeValidTriplet().blueprint;
  unknownSafety.marking.projectSafetyErrors[0].safetyConceptIds = ["clinical-made-up"];
  assert.ok(validateBlueprint(unknownSafety).errors.some(function (message) {
    return /unknown or non-safety/.test(message);
  }));

  const wrongSafetyCategory = makeValidTriplet().blueprint;
  wrongSafetyCategory.marking.projectSafetyErrors[0].safetyConceptIds = ["clinical-leading-diagnosis"];
  assert.ok(validateBlueprint(wrongSafetyCategory).errors.some(function (message) {
    return /unknown or non-safety/.test(message);
  }));

  const manufacturedSafety = makeValidTriplet();
  manufacturedSafety.blueprint.marking.projectSafetyErrors[0].preventedByLineIds = ["c000-run-approach"];
  manufacturedSafety.blueprint.marking.projectSafetyErrors[0].safetyConceptIds = ["clinical-action-assessment"];
  manufacturedSafety.blueprint.clinicalTruth.criticalActions[0].runLineIds.push("c000-run-approach");
  const safetyClaim = manufacturedSafety.blueprint.sourceBasis.claimMap.find(function (claim) { return claim.id === "claim-safety"; });
  safetyClaim.runLineIds.push("c000-run-approach");
  const safetyCodes = issueCodes(auditCase(manufacturedSafety.caseData, manufacturedSafety.blueprint, manufacturedSafety.registry));
  assert.ok(safetyCodes.has("project_safety_error_claim_mismatch"));

  const impossibleAction = makeValidTriplet();
  impossibleAction.blueprint.performance.actionDurations[0].seconds = 120;
  impossibleAction.blueprint.performance.taskEvidence[0].observedSeconds = 100;
  impossibleAction.blueprint.performance.taskEvidence[1].observedSeconds = 294;
  assert.ok(issueCodes(auditCase(impossibleAction.caseData, impossibleAction.blueprint, impossibleAction.registry))
    .has("task_action_duration_exceeds_observed"));
});

test("QA pass labels require evidence appropriate to the gate", function () {
  const blueprint = makeValidTriplet().blueprint;
  blueprint.qa.clinical.evidence = [{ type: "automated_test", reference: "test:shape-only" }];
  assert.ok(validateBlueprint(blueprint).blockers.some(function (message) {
    return /QA gate clinical lacks the required structured evidence type/.test(message);
  }));
});

test("QA labels cannot overrule a behavioural failure", function () {
  const triplet = makeValidTriplet();
  findLine(triplet.caseData, "c000-run-onset-question").text = "When did it begin and what happened next?";
  refreshHashes(triplet);
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  const codes = issueCodes(report);
  assert.ok(codes.has("compound_question_in_turn"));
  assert.ok(codes.has("question_plan_is_not_single_question"));
  assert.ok(codes.has("false_audited_status"));
  assert.equal(report.status, "HOLD");
});

test("any visible text change invalidates all release hashes", function () {
  const triplet = makeValidTriplet();
  findLine(triplet.caseData, "c000-run-explanation").text += " A changed sentence.";
  const report = auditCase(triplet.caseData, triplet.blueprint, triplet.registry);
  const codes = issueCodes(report);
  assert.ok(codes.has("qa_content_hash_mismatch"));
  assert.ok(codes.has("listen_content_hash_mismatch"));
  assert.ok(codes.has("registry_content_hash_mismatch"));
  assert.equal(report.status, "HOLD");

  const metadata = makeValidTriplet();
  metadata.caseData.statusLabel = "Official AMC full-mark script";
  const metadataCodes = issueCodes(auditCase(metadata.caseData, metadata.blueprint, metadata.registry));
  assert.ok(metadataCodes.has("blueprint_status_label_mismatch"));
  assert.ok(metadataCodes.has("qa_content_hash_mismatch"));
});

test("listen duration and task mapping are executable checks", function () {
  const timing = makeValidTriplet();
  timing.blueprint.performance.listenTest.observedSeconds = 50;
  timing.blueprint.performance.taskEvidence[0].observedSeconds = 30;
  timing.blueprint.performance.taskEvidence[1].observedSeconds = 10;
  timing.blueprint.performance.taskEvidence[2].observedSeconds = 10;
  const timingReport = auditCase(timing.caseData, timing.blueprint, timing.registry);
  const timingCodes = issueCodes(timingReport);
  assert.ok(timingCodes.has("listen_duration_outside_station_window"));
  assert.ok(timingCodes.has("listen_duration_outside_target"));
  assert.ok(timingCodes.has("implausible_listen_pace"));

  const allocation = makeValidTriplet();
  allocation.blueprint.performance.taskEvidence[0].observedSeconds = 200;
  allocation.blueprint.performance.taskEvidence[1].observedSeconds = 150;
  allocation.blueprint.performance.taskEvidence[2].observedSeconds = 100;
  const allocationCodes = issueCodes(auditCase(allocation.caseData, allocation.blueprint, allocation.registry));
  assert.ok(allocationCodes.has("task_time_allocation_mismatch"));

  const visible = makeValidTriplet().blueprint;
  visible.tasks.forEach(function (task) { task.visibleTiming = "8 minutes"; });
  const visibleResult = validateBlueprint(visible);
  assert.ok(visibleResult.errors.some(function (message) { return /cannot total more than eight minutes/.test(message); }));
  assert.ok(visibleResult.errors.some(function (message) { return /visible timing must match/.test(message); }));

  const mapping = makeValidTriplet();
  mapping.blueprint.performance.taskEvidence[0].runLineIds =
    mapping.blueprint.performance.taskEvidence[0].runLineIds.filter(function (id) { return id !== "c000-run-onset-question"; });
  const mappingReport = auditCase(mapping.caseData, mapping.blueprint, mapping.registry);
  assert.ok(issueCodes(mappingReport).has("run_line_not_mapped_to_task"));
});

test("registry semantics reject duplicate, contradictory and falsely audited state", function () {
  const duplicate = makeValidTriplet().registry;
  duplicate.phases[1].id = duplicate.phases[0].id;
  assert.ok(validateRegistry(duplicate).errors.some(function (message) { return /phase IDs/.test(message); }));

  const mismatched = makeValidTriplet().registry;
  mismatched.cases[0].registryId = "CP-P2-C000";
  assert.ok(validateRegistry(mismatched).errors.some(function (message) { return /wrong pattern/.test(message); }));

  const wrongLocalNumber = makeValidTriplet().registry;
  wrongLocalNumber.cases[0].registryId = "CP-P1-C999";
  assert.ok(validateRegistry(wrongLocalNumber).errors.some(function (message) { return /wrong within-pattern case number/.test(message); }));

  const noHash = makeValidTriplet().registry;
  noHash.cases[0].contentSha256 = null;
  assert.ok(validateRegistry(noHash).errors.some(function (message) { return /audited without a content hash/.test(message); }));

  const expansion = makeValidTriplet().registry;
  expansion.patterns[0].initialCore = 6;
  expansion.patterns[0].maximumWithoutExpansion = 5;
  assert.ok(validateRegistry(expansion).errors.some(function (message) { return /exceeds/.test(message); }));

  const authority = makeValidTriplet().registry;
  authority.productionMode = "reconstruction";
  authority.nextAction = { mode: "reconstruct", caseId: "case-000", patternId: 1, newGenerationAllowed: true, reason: "Contradictory authority." };
  assert.ok(validateRegistry(authority).blockers.some(function (message) { return /generation must remain disabled/.test(message); }));

  const missingLogic = makeValidTriplet().registry;
  missingLogic.productionMode = "generation";
  missingLogic.nextAction = { mode: "generate", caseId: "case-043", patternId: 14, newGenerationAllowed: true, reason: "Attempt to generate from missing logic." };
  assert.ok(validateRegistry(missingLogic).errors.some(function (message) { return /generation_ready pattern/.test(message); }));

  const pausedReconstruction = makeValidTriplet().registry;
  pausedReconstruction.nextAction = { mode: "reconstruct", caseId: "case-000", patternId: 1, newGenerationAllowed: false, reason: "Contradictory paused action." };
  assert.ok(validateRegistry(pausedReconstruction).errors.some(function (message) { return /paused production/.test(message); }));

  const missingProvenance = makeValidTriplet().registry;
  missingProvenance.patternLogicSources = missingProvenance.patternLogicSources.filter(function (item) { return item.patternId !== 1; });
  assert.ok(validateRegistry(missingProvenance).errors.some(function (message) { return /lacks a controlled logic-source record/.test(message); }));
});

test("registry provenance, reconstruction order and generation authority fail closed", function () {
  const missingSource = clone(machineRegistry);
  missingSource.patternLogicSources[0].sourceRefs[0].path = "registry-library/not-present.md#missing";
  assert.ok(validateRegistry(missingSource, { root }).errors.some(function (message) {
    return /missing source file/.test(message);
  }));

  const missingFragment = clone(machineRegistry);
  missingFragment.patternLogicSources[0].sourceRefs[0].path =
    "registry-library/AMC-Clinical-Pathway-Consolidated-Master-Registry-v1.md#not-a-real-heading";
  assert.ok(validateRegistry(missingFragment, { root }).errors.some(function (message) {
    return /missing source fragment/.test(message);
  }));

  const skipped = clone(machineRegistry);
  skipped.nextAction.caseId = "case-042";
  skipped.nextAction.patternId = 13;
  assert.ok(validateRegistry(skipped, { root }).errors.some(function (message) {
    return /next sequential pending case case-002/.test(message);
  }));

  const overCap = clone(machineRegistry);
  overCap.patterns[11].maximumWithoutExpansion = 4;
  assert.ok(validateRegistry(overCap).errors.some(function (message) {
    return /case count exceeds maximumWithoutExpansion/.test(message);
  }));

  const prematureGeneration = clone(machineRegistry);
  const pattern14 = prematureGeneration.patterns.find(function (pattern) { return pattern.id === 14; });
  pattern14.status = "active_generation";
  pattern14.generationStatus = "generation_ready";
  pattern14.logicProvenance = "designed_and_source_reviewed";
  pattern14.dominantCapability = "Test a deliberately reviewed comparison capability.";
  pattern14.coreCoverage = ["reviewed comparison slot"];
  prematureGeneration.patternLogicSources.push({
    patternId: 14,
    basis: "designed_pattern_logic",
    sourceRefs: clone(prematureGeneration.patternLogicSources[0].sourceRefs)
  });
  prematureGeneration.productionMode = "generation";
  prematureGeneration.nextAction = {
    mode: "generate",
    caseId: "case-043",
    patternId: 14,
    newGenerationAllowed: true,
    reason: "Adversarial attempt to bypass unfinished reconstruction."
  };
  assert.ok(validateRegistry(prematureGeneration, { root }).errors.some(function (message) {
    return /generation cannot begin while legacy reconstruction remains pending/.test(message);
  }));

  const wrongGeneratedId = makeValidTriplet().registry;
  const fixturePattern14 = wrongGeneratedId.patterns.find(function (pattern) { return pattern.id === 14; });
  fixturePattern14.status = "active_generation";
  fixturePattern14.generationStatus = "generation_ready";
  fixturePattern14.logicProvenance = "designed_and_source_reviewed";
  fixturePattern14.dominantCapability = "Test a deliberately reviewed comparison capability.";
  fixturePattern14.coreCoverage = ["reviewed comparison slot"];
  wrongGeneratedId.patternLogicSources.push({
    patternId: 14,
    basis: "designed_pattern_logic",
    sourceRefs: clone(wrongGeneratedId.patternLogicSources[0].sourceRefs)
  });
  wrongGeneratedId.productionMode = "generation";
  wrongGeneratedId.nextAction = {
    mode: "generate",
    caseId: "case-999",
    patternId: 14,
    newGenerationAllowed: true,
    reason: "Adversarial non-sequential case ID."
  };
  assert.ok(validateRegistry(wrongGeneratedId, { root }).errors.some(function (message) {
    return /next sequential case ID/.test(message);
  }));
});

test("the pinned legacy registry cannot be skipped, remapped, retired or expanded silently", function () {
  const missingFirst = clone(machineRegistry);
  missingFirst.cases = missingFirst.cases.filter(function (item) { return item.caseId !== "case-001"; });
  missingFirst.cases.find(function (item) { return item.caseId === "case-002"; }).registryId = "CP-P1-C001";
  missingFirst.nextAction.caseId = "case-002";
  assert.equal(validateRegistry(missingFirst, { root }).registryReady, false);
  assert.ok(validateRegistry(missingFirst, { root }).errors.some(function (message) {
    return /exactly the 42 pinned|legacy identity/.test(message);
  }));

  const laterAuthorised = clone(machineRegistry);
  const case42 = laterAuthorised.cases.find(function (item) { return item.caseId === "case-042"; });
  const pattern13 = laterAuthorised.patterns.find(function (item) { return item.id === 13; });
  case42.status = "reconstruction_authorized";
  case42.coverageSlot = pattern13.coreCoverage[0];
  case42.distinctJob = "Reconstruct the later case before the earlier legacy queue.";
  case42.primaryFailureMode = "station_mismatch";
  case42.admissionDecision = "admitted";
  laterAuthorised.nextAction = {
    mode: "reconstruct",
    caseId: "case-042",
    patternId: 13,
    newGenerationAllowed: false,
    reason: "Adversarial queue bypass."
  };
  assert.ok(validateRegistry(laterAuthorised, { root }).errors.some(function (message) {
    return /next sequential pending case case-002|only the next sequential pending case case-002/.test(message);
  }));

  const removed = clone(machineRegistry);
  removed.cases = removed.cases.filter(function (item) { return item.caseId !== "case-042"; });
  assert.ok(validateRegistry(removed, { root }).errors.some(function (message) {
    return /exactly the 42 pinned|legacy identity/.test(message);
  }));

  const added = clone(machineRegistry);
  const extra = clone(added.cases[41]);
  Object.assign(extra, {
    caseId: "case-043",
    globalId: "CP-C043",
    registryId: "CP-P13-C003",
    title: "Unauthorized extra reconstruction case"
  });
  added.cases.push(extra);
  assert.ok(validateRegistry(added, { root }).errors.some(function (message) {
    return /exactly the 42 pinned|cannot be added/.test(message);
  }));

  const remapped = clone(machineRegistry);
  remapped.cases[0].patternId = 2;
  remapped.cases[0].registryId = "CP-P2-C001";
  assert.ok(validateRegistry(remapped, { root }).errors.some(function (message) {
    return /legacy identity does not match/.test(message);
  }));

  [
    function (registry) { registry.patterns[0].initialCore = 2; },
    function (registry) { registry.patterns[0].maximumWithoutExpansion = 4; },
    function (registry) { registry.patterns[0].coreCoverage[0] += " changed"; }
  ].forEach(function (mutate) {
    const registry = clone(machineRegistry);
    mutate(registry);
    assert.ok(validateRegistry(registry, { root }).errors.some(function (message) {
      return /pinned capacity or logic baseline/.test(message);
    }));
  });

  const retired = clone(machineRegistry);
  Object.assign(retired.cases[0], {
    status: "retired",
    admissionDecision: "rejected",
    retirementReason: "Fabricated retirement",
    mergedIntoCaseId: null
  });
  assert.ok(validateRegistry(retired, { root }).errors.some(function (message) {
    return /retirement is not authorised/.test(message);
  }));

  const contradictory = clone(machineRegistry);
  contradictory.cases[0].retirementReason = "Actually retired";
  contradictory.cases[0].mergedIntoCaseId = "case-002";
  assert.ok(validateRegistry(contradictory, { root }).errors.some(function (message) {
    return /non-retired state cannot contain retirement or merge data|must be null/.test(message);
  }));

  const changedPolicy = clone(machineRegistry);
  changedPolicy.generationPolicy.reserveRule = "Any new case may be added without review.";
  assert.ok(validateRegistry(changedPolicy, { root }).errors.some(function (message) {
    return /pinned reconstruction baseline/.test(message);
  }));

  const changedPhase = clone(machineRegistry);
  changedPhase.phases[0].purpose = "This phase teaches gardening.";
  changedPhase.patterns.filter(function (pattern) { return pattern.phaseId === 1; }).forEach(function (pattern) {
    pattern.objective = changedPhase.phases[0].purpose;
  });
  assert.ok(validateRegistry(changedPhase, { root }).errors.some(function (message) {
    return /pinned reconstruction baseline/.test(message);
  }));

  const changedReserve = clone(machineRegistry);
  changedReserve.patterns[0].reserves = ["completely fabricated reserve"];
  changedReserve.patterns[0].expansionRule = "Any new case may be added.";
  assert.ok(validateRegistry(changedReserve, { root }).errors.some(function (message) {
    return /pinned reconstruction baseline/.test(message);
  }));

  const futureRegistry = clone(machineRegistry);
  futureRegistry.updatedAt = "2099-01-01T00:00:00+11:00";
  assert.ok(validateRegistry(futureRegistry, { root }).errors.some(function (message) {
    return /updatedAt cannot be in the future/.test(message);
  }));
});

test("production readiness requires provenance and current case-audit evidence", function () {
  const rootless = validateRegistry(machineRegistry);
  assert.equal(rootless.structuralReady, true);
  assert.equal(rootless.provenanceReady, false);
  assert.equal(rootless.registryReady, false);
  assert.equal(rootless.actionReady, false);

  const fabricatedAudit = clone(machineRegistry);
  const pattern1 = fabricatedAudit.patterns[0];
  Object.assign(fabricatedAudit.cases[0], {
    status: "audited",
    contentSha256: "a".repeat(64),
    coverageSlot: pattern1.coreCoverage[0],
    distinctJob: "Fabricated registry-only audit.",
    primaryFailureMode: "premature_closure",
    admissionDecision: "admitted"
  });
  fabricatedAudit.nextAction = {
    mode: "reconstruct",
    caseId: "case-002",
    patternId: 1,
    newGenerationAllowed: false,
    reason: "Attempt to advance without a current case audit."
  };
  const result = validateRegistry(fabricatedAudit, { root });
  assert.equal(result.registryReady, true);
  assert.equal(result.actionReady, false);
  assert.ok(result.actionBlockers.some(function (message) {
    return /case-001 is declared audited without a matching current AUDITED case report/.test(message);
  }));

  const spoofed = validateRegistry(fabricatedAudit, {
    root,
    caseReports: [{
      caseId: "case-001",
      status: "AUDITED",
      contentSha256: "a".repeat(64),
      issues: []
    }]
  });
  assert.equal(spoofed.actionReady, false);
  assert.ok(spoofed.actionBlockers.some(function (message) {
    return /case-001 is declared audited without a matching current AUDITED case report/.test(message);
  }));

  const copiedLogic = clone(machineRegistry);
  const pattern14 = copiedLogic.patterns.find(function (pattern) { return pattern.id === 14; });
  pattern14.status = "active_generation";
  pattern14.generationStatus = "generation_ready";
  pattern14.logicProvenance = "designed_and_source_reviewed";
  pattern14.dominantCapability = "Copied rather than designed logic.";
  pattern14.coreCoverage = ["copied slot"];
  copiedLogic.patternLogicSources.push({
    patternId: 14,
    basis: "designed_pattern_logic",
    sourceRefs: clone(copiedLogic.patternLogicSources[0].sourceRefs)
  });
  assert.ok(validateRegistry(copiedLogic, { root }).errors.some(function (message) {
    return /dedicated controlled pattern-design record/.test(message);
  }));
});

test("an individual production case cannot audit against an unverified rootless registry", function () {
  const triplet = makeValidTriplet();
  triplet.caseData.id = "case-001";
  triplet.caseData.globalId = "CP-C001";
  triplet.caseData.registryId = "CP-P1-C001";
  triplet.caseData.displayNumber = "Case 1";
  triplet.blueprint.caseId = "case-001";
  triplet.blueprint.registryId = "CP-P1-C001";
  triplet.blueprint.station.displayNumber = "Case 1";
  const productionRegistry = clone(machineRegistry);
  const row = productionRegistry.cases[0];
  Object.assign(row, {
    title: triplet.caseData.title,
    modality: triplet.caseData.modality,
    predominantArea: triplet.caseData.format.predominantArea,
    status: "audited",
    coverageSlot: triplet.blueprint.variation.coverageSlot,
    distinctJob: triplet.blueprint.variation.distinctJob,
    primaryFailureMode: triplet.blueprint.variation.primaryFailureMode,
    admissionDecision: "admitted"
  });
  productionRegistry.nextAction = {
    mode: "reconstruct",
    caseId: "case-002",
    patternId: 1,
    newGenerationAllowed: false,
    reason: "Continue sequential reconstruction."
  };
  const hash = contentHash(triplet.caseData);
  row.contentSha256 = hash;
  triplet.blueprint.qa.caseContentSha256 = hash;
  triplet.blueprint.performance.listenTest.caseContentSha256 = hash;
  refreshReviewBindings(triplet.blueprint);
  assert.equal(validateRegistry(productionRegistry).registryReady, false);
  const report = auditCase(triplet.caseData, triplet.blueprint, productionRegistry);
  assert.equal(report.status, "HOLD");
  assert.ok(issueCodes(report).has("registry_not_ready"));
});

test("registry provenance rejects a source symlink that escapes the repository realpath", function () {
  const fakeRoot = fs.mkdtempSync(path.join(os.tmpdir(), "amc-registry-root-"));
  const externalRoot = fs.mkdtempSync(path.join(os.tmpdir(), "amc-registry-external-"));
  try {
    fs.mkdirSync(path.join(fakeRoot, "engine"), { recursive: true });
    fs.mkdirSync(path.join(fakeRoot, "registry-library"), { recursive: true });
    fs.mkdirSync(path.join(fakeRoot, "data", "cases"), { recursive: true });
    fs.copyFileSync(path.join(root, "engine", "legacy-case-manifest.v1.1.json"),
      path.join(fakeRoot, "engine", "legacy-case-manifest.v1.1.json"));
    ["case-001.js", "case-041.js", "case-042.js"].forEach(function (file) {
      fs.copyFileSync(path.join(root, "data", "cases", file), path.join(fakeRoot, "data", "cases", file));
    });
    const narrativeName = "AMC-Clinical-Pathway-Consolidated-Master-Registry-v1.md";
    const externalNarrative = path.join(externalRoot, narrativeName);
    fs.copyFileSync(path.join(root, "registry-library", narrativeName), externalNarrative);
    fs.symlinkSync(externalNarrative, path.join(fakeRoot, "registry-library", narrativeName));
    const result = validateRegistry(machineRegistry, { root: fakeRoot });
    assert.ok(result.errors.some(function (message) {
      return /outside the repository after realpath resolution/.test(message);
    }));
    assert.equal(result.provenanceReady, false);
  } finally {
    fs.rmSync(fakeRoot, { recursive: true, force: true });
    fs.rmSync(externalRoot, { recursive: true, force: true });
  }
});

test("registry duplicate jobs are normalized across Unicode and invisible characters", function () {
  const registry = makeValidTriplet().registry;
  const second = clone(registry.cases[0]);
  second.caseId = "case-900";
  second.globalId = "CP-C900";
  second.registryId = "CP-P1-C002";
  second.distinctJob = Array.from(second.distinctJob).map(function (character) {
    const code = character.charCodeAt(0);
    return code >= 33 && code <= 126 ? String.fromCharCode(code + 0xFEE0) : character;
  }).join("") + "\u200B";
  registry.cases.push(second);
  assert.ok(validateRegistry(registry).errors.some(function (message) {
    return /duplicates an admitted distinct job/.test(message);
  }));
});

test("collection release blocks duplicate visible identities", function () {
  const triplet = makeValidTriplet();
  const cases = [triplet.caseData, clone(triplet.caseData)];
  const reports = cases.map(function (caseData) {
    return auditCase(caseData, triplet.blueprint, triplet.registry);
  });
  const collection = auditCollection(cases, reports, triplet.registry, validateRegistry(triplet.registry));
  assert.equal(collection.releaseReady, false);
  assert.deepEqual(collection.duplicateVisibleCaseIds, ["case-000"]);
  assert.deepEqual(collection.duplicateVisibleGlobalIds, ["CP-C000"]);
  assert.deepEqual(collection.duplicateVisibleRegistryIds, ["CP-P1-C000"]);
});

test("clinical fingerprints detect renamed copies while allowing material variation", function () {
  const original = makeValidTriplet();
  const renamedCase = JSON.parse(JSON.stringify(original.caseData)
    .replaceAll("Daniel Morgan", "Aisha Patel")
    .replaceAll("Daniel", "Aisha")
    .replaceAll("Morgan", "Patel"));
  renamedCase.id = "case-900";
  renamedCase.globalId = "CP-C900";
  renamedCase.registryId = "CP-P1-C900";
  renamedCase.displayNumber = "Case 900";
  const renamedBlueprint = JSON.parse(JSON.stringify(original.blueprint)
    .replaceAll("Daniel Morgan", "Aisha Patel")
    .replaceAll("Daniel", "Aisha")
    .replaceAll("Morgan", "Patel"));
  renamedBlueprint.caseId = "case-900";
  renamedBlueprint.registryId = "CP-P1-C900";
  renamedBlueprint.station.displayNumber = "Case 900";

  const firstFingerprint = clinicalContentFingerprint(original.caseData, original.blueprint);
  const copiedFingerprint = clinicalContentFingerprint(renamedCase, renamedBlueprint);
  assert.equal(copiedFingerprint, firstFingerprint);

  const variedCase = clone(renamedCase);
  variedCase.stem.tasks[0].text = "Assess a new focal neurological deficit.";
  assert.notEqual(clinicalContentFingerprint(variedCase, renamedBlueprint), firstFingerprint);

  const hiddenOnly = clone(original.blueprint);
  hiddenOnly.clinicalTruth.leadingDiagnosis.text = "A different hidden label with the same visible case";
  assert.equal(clinicalContentFingerprint(original.caseData, hiddenOnly), firstFingerprint);

  const collection = auditCollection(
    [original.caseData, renamedCase],
    [
      { caseId: original.caseData.id, status: "AUDITED", clinicalContentFingerprint: firstFingerprint },
      { caseId: renamedCase.id, status: "AUDITED", clinicalContentFingerprint: copiedFingerprint }
    ],
    null,
    { structuralReady: false, provenanceReady: false, registryReady: false, actionReady: false, errors: [], blockers: [], actionBlockers: [] }
  );
  assert.equal(collection.duplicateClinicalFingerprints.length, 1);
  assert.deepEqual(collection.duplicateClinicalFingerprints[0].caseIds, ["case-000", "case-900"]);
  assert.equal(collection.releaseReady, false);
});

test("near-identical audited clinical scripts are blocked after cosmetic one-word changes", function () {
  const base = Array.from({ length: 128 }, function (_, index) { return "token-" + index; });
  const changed = base.slice();
  changed[0] = "one-cosmetic-change";
  const reports = [
    { caseId: "case-900", status: "AUDITED", clinicalContentFingerprint: "a".repeat(64), clinicalContentShingles: base },
    { caseId: "case-901", status: "AUDITED", clinicalContentFingerprint: "b".repeat(64), clinicalContentShingles: changed }
  ];
  const collection = auditCollection([], reports, { cases: [] }, { registryReady: true });
  assert.equal(collection.nearDuplicateClinicalPairs.length, 1);
  assert.equal(collection.releaseReady, false);
});

test("the current 42-case collection is honestly HOLD and the CLI fails closed", function () {
  const report = runAudit(root);
  assert.equal(report.engineVersion, "1.1.0");
  assert.equal(report.collectionStatus, "HOLD");
  assert.equal(report.collection.totalCases, 42);
  assert.equal(report.collection.auditedCases, 1);
  assert.equal(report.collection.holdCases, 41);
  assert.equal(report.issueTotals.missing_blueprint, 41);
  assert.ok(report.issueTotals.compound_question_in_turn >= 150);
  assert.ok(report.issueTotals.multiple_questions_in_turn >= 100);
  assert.equal(report.collection.registryReady, true);

  const cli = spawnSync(process.execPath, ["scripts/audit-amc-cases.js", "--json"], {
    cwd: root,
    encoding: "utf8"
  });
  assert.equal(cli.status, 2);
  const cliReport = JSON.parse(cli.stdout);
  assert.equal(cliReport.collectionStatus, "HOLD");
  assert.equal(cliReport.collection.holdCases, 41);

  const reportOnlyJson = spawnSync(process.execPath, ["scripts/audit-amc-cases.js", "--report-only", "--json"], {
    cwd: root,
    encoding: "utf8"
  });
  assert.equal(reportOnlyJson.status, 0);
  assert.equal(JSON.parse(reportOnlyJson.stdout).collectionStatus, "HOLD");
});
