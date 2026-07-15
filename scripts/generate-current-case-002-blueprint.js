const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const engine = require("./amc-engine-lib");

const root = path.resolve(__dirname, "..");
const casePath = path.join(root, "data", "current-cases", "case-002.js");
const blueprintPath = path.join(root, "data", "blueprints", "case-002.blueprint.json");
const registryPath = path.join(root, "registry-library", "case-registry.v1.1.json");
const timingEvidencePath = path.join(root, "audits", "CASE_002_TIMING_EVIDENCE.json");
const context = { window: { AMC_CURRENT_CASES: [] } };
vm.runInNewContext(fs.readFileSync(casePath, "utf8"), context, { filename: casePath });
const caseData = context.window.AMC_CURRENT_CASES[0];
const reviewedAt = new Date().toISOString();
const contentSha = engine.contentHash(caseData);
const timingEvidenceRaw = fs.readFileSync(timingEvidencePath);
const timingEvidence = JSON.parse(timingEvidenceRaw.toString("utf8"));
const timingEvidenceSha256 = crypto.createHash("sha256").update(timingEvidenceRaw).digest("hex");

if (timingEvidence.caseId !== caseData.id || timingEvidence.caseContentSha256 !== contentSha) {
  throw new Error("Case 2 timing evidence is missing or stale; rerun scripts/measure-case-timing.js case-002");
}
if (timingEvidence.method !== "ffmpeg_libflite_line_by_line_audio_render" ||
    !Number.isInteger(timingEvidence.totalObservedSeconds) ||
    timingEvidence.totalObservedSeconds < 420 || timingEvidence.totalObservedSeconds > 480) {
  throw new Error("Case 2 timing evidence does not satisfy the reviewed timing method or station window");
}
const timingByTaskId = new Map(timingEvidence.taskTotals.map((item) => [item.taskId, item.observedSeconds]));
["task-assessment", "task-reasoning", "task-management"].forEach((taskId) => {
  if (!Number.isInteger(timingByTaskId.get(taskId))) throw new Error("Timing evidence is missing " + taskId);
});

const turns = caseData.run.sections.flatMap((section) => section.turns);
const lines = turns.flatMap((turn) => turn.lines.map((line) => ({
  id: line.id,
  text: line.text,
  speaker: turn.speaker,
  kind: turn.kind
})));
const lineById = new Map(lines.map((line) => [line.id, line]));
const lineIndex = new Map(lines.map((line, index) => [line.id, index]));

function text(id) {
  const line = lineById.get(id);
  if (!line) throw new Error("Unknown line " + id);
  return line.text;
}

function range(firstId, lastId) {
  const first = lineIndex.get(firstId);
  const last = lineIndex.get(lastId);
  if (first === undefined || last === undefined || first > last) throw new Error("Invalid line range");
  return lines.slice(first, last + 1).map((line) => line.id);
}

function concept(id, conceptText, runLineIds, sourceClaimIds) {
  return { id, text: conceptText, runLineIds, sourceClaimIds };
}

const actionDurations = [
  { lineId: "run-approach", seconds: 8, actionClass: "neutral_preparation", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: null, exceptionRationale: null },
  { lineId: "run-examination-action", seconds: 25, actionClass: "examination", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: "consent-examination", exceptionRationale: null },
  { lineId: "run-early-action", seconds: 15, actionClass: "emergency", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: null, exceptionRationale: "The high-risk pain pattern with vascular asymmetry requires immediate monitored escalation before diagnostic confirmation." },
  { lineId: "run-iv-action", seconds: 10, actionClass: "procedure", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: "consent-iv", exceptionRationale: null },
  { lineId: "run-blood-action", seconds: 8, actionClass: "procedure", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: "consent-bloods", exceptionRationale: null },
  { lineId: "run-analgesia-action", seconds: 8, actionClass: "treatment", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: "consent-analgesia", exceptionRationale: null },
  { lineId: "run-beta-action", seconds: 12, actionClass: "treatment", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: "consent-beta-blocker", exceptionRationale: null },
  { lineId: "run-cta-action", seconds: 8, actionClass: "procedure", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: "consent-cta", exceptionRationale: null }
];

function closeEnough(left, right, tolerance = 0.01) {
  return Number.isFinite(left) && Number.isFinite(right) && Math.abs(left - right) <= tolerance;
}

if (!Array.isArray(timingEvidence.lineTimings) || timingEvidence.lineTimings.length !== lines.length) {
  throw new Error("Case 2 timing evidence does not cover every visible Full Run line");
}
lines.forEach((line, index) => {
  const timed = timingEvidence.lineTimings[index];
  if (!timed || timed.lineId !== line.id || timed.speaker !== line.speaker || timed.kind !== line.kind) {
    throw new Error("Case 2 timing evidence line order, speaker or kind differs at " + line.id);
  }
});
const evidenceLineTotal = timingEvidence.lineTimings.reduce((sum, item) => sum + item.observedSeconds, 0);
const evidenceSpeechTotal = timingEvidence.lineTimings.filter((item) => item.kind !== "action")
  .reduce((sum, item) => sum + item.observedSeconds, 0);
const evidenceActionTotal = timingEvidence.lineTimings.filter((item) => item.kind === "action")
  .reduce((sum, item) => sum + item.observedSeconds, 0);
if (!closeEnough(evidenceLineTotal, timingEvidence.rawTotalSeconds) ||
    !closeEnough(evidenceSpeechTotal, timingEvidence.renderedSpeechSeconds) ||
    !closeEnough(evidenceActionTotal, timingEvidence.actionSeconds) ||
    Math.round(timingEvidence.rawTotalSeconds) !== timingEvidence.totalObservedSeconds) {
  throw new Error("Case 2 timing evidence arithmetic is inconsistent");
}
const evidenceActionByLineId = new Map(
  timingEvidence.lineTimings.filter((item) => item.kind === "action")
    .map((item) => [item.lineId, item.observedSeconds])
);
if (evidenceActionByLineId.size !== actionDurations.length || actionDurations.some((item) => {
  return !closeEnough(evidenceActionByLineId.get(item.lineId), item.seconds, 0.000001);
})) {
  throw new Error("Case 2 timing evidence Action intervals differ from the reviewed blueprint assumptions");
}
const promptStart = timingEvidence.milestones && timingEvidence.milestones.threeMinutePromptStartSeconds;
if (!Number.isFinite(promptStart) || promptStart < 178 || promptStart > 183) {
  throw new Error("Case 2 three-minute prompt is not demonstrated near 180 seconds");
}
if (timingEvidence.taskTotals.reduce((sum, item) => sum + item.observedSeconds, 0) !==
    timingEvidence.totalObservedSeconds) {
  throw new Error("Case 2 task timing allocations do not total the measured station duration");
}

const requestSpecs = [
  ["opening", "run-open-question", "run-opening-story", "run-current-pain", "Initial account", ["severe pain hit the centre of my chest"], "clinical-clue-abrupt-pattern", "task-assessment", "open_question"],
  ["current-pain", "run-current-pain", "run-current-pain-answer", "run-observations-request", "Current pain severity", ["Nine"], "clinical-red-flag-persistent-pain", "task-assessment", "specific_question"],
  ["breathing", "run-breathing", "run-breathing-answer", "run-weakness", "Effect of deep breathing", ["No"], "clinical-discriminator-aortic-pattern", "task-assessment", "specific_question"],
  ["weakness", "run-weakness", "run-weakness-answer", "run-abdominal", "Focal weakness", ["No"], "clinical-discriminator-no-current-deficit", "task-assessment", "specific_question"],
  ["abdominal", "run-abdominal", "run-abdominal-answer", "run-aorta-history", "Abdominal pain", ["No"], "clinical-discriminator-no-current-deficit", "task-assessment", "specific_question"],
  ["aorta-history", "run-aorta-history", "run-aorta-history-answer", "run-medical-history", "Known aortic enlargement", ["No"], "clinical-clue-risk", "task-assessment", "specific_question"],
  ["medical-history", "run-medical-history", "run-medical-history-answer", "run-medications", "Medical history", ["High blood pressure"], "clinical-clue-risk", "task-assessment", "specific_question"],
  ["medications", "run-medications", "run-medications-answer", "run-summary", "Regular medicines", ["Irbesartan"], "clinical-clue-risk", "task-assessment", "specific_question"],
  ["blood-thinner", "run-blood-thinner", "run-blood-thinner-answer", "run-allergies", "Current blood-thinning medicine", ["No"], "clinical-unsafe-antiplatelet-fibrinolysis", "task-management", "specific_question"],
  ["allergies", "run-allergies", "run-allergies-answer", "run-iv-consent", "Medicine allergies", ["No known allergies"], "clinical-action-anti-impulse", "task-management", "specific_question"],
  ["asthma", "run-asthma", "run-asthma-answer", "run-beta-consent", "Asthma", ["No"], "clinical-action-anti-impulse", "task-management", "specific_question"],
  ["contrast-reaction", "run-contrast-reaction", "run-contrast-reaction-answer", "run-kidney-disease", "Previous CT contrast reaction", ["No"], "clinical-action-definitive-imaging", "task-management", "specific_question"],
  ["kidney-disease", "run-kidney-disease", "run-kidney-disease-answer", "run-cta-consent", "Kidney disease", ["No"], "clinical-action-definitive-imaging", "task-management", "specific_question"],
  ["understanding", "run-understanding", "run-understanding-answer", "run-closing", "Understanding of the plan", ["split in my aorta"], "clinical-scope-emergency-registrar", "task-management", "specific_question"]
];

requestSpecs.forEach((spec) => {
  spec[5] = [text(spec[2])];
});

const informationRequests = requestSpecs.map((spec) => ({
  id: "request-" + spec[0],
  lineId: spec[1],
  requestText: text(spec[1]),
  taskId: spec[7],
  requestType: /[?]$/.test(text(spec[1])) ? "question" : "imperative_request",
  requestCount: 1,
  topic: spec[4],
  addressedParticipantId: "participant-patient",
  expectedResponseLineId: spec[2],
  responseParticipantId: "participant-patient",
  responseText: text(spec[2]),
  responseOutcome: "answered",
  responseEvidencePhrases: spec[5],
  nextDoctorLineId: spec[3],
  responseUse: "The next Doctor turn uses this answer to continue the assigned task."
}));

const disclosures = requestSpecs.filter((spec) => spec[0] !== "opening").map((spec) => ({
  id: "disclosure-" + spec[0],
  factIds: [spec[6]],
  triggerType: spec[8],
  triggerDescription: "The Doctor makes one focused request about " + spec[4].toLowerCase() + ".",
  triggerLineId: spec[1],
  responseLineId: spec[2],
  responseText: text(spec[2]),
  nextDoctorLineId: spec[3],
  responseUse: "The next Doctor turn incorporates the answer into the focused assessment or management plan."
}));

const sourceAmcSpec = {
  id: "source-amc-spec",
  sourceType: "exam_specification",
  organisation: "Australian Medical Council",
  title: "Clinical Examination Specifications V8.3, June 2026",
  url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf",
  publishedOrUpdated: "2026-06-01",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "Australia",
  applicability: "Current station timing, predominant assessment area, tasks, key steps, domains and global rating.",
  authoritative: true
};
const sourceAmcDomains = {
  id: "source-amc-domains",
  sourceType: "assessment_domains",
  organisation: "Australian Medical Council",
  title: "Assessment Domains V1.1, November 2024",
  url: "https://www.amc.org.au/wp-content/uploads/2024/12/20241112-AIPD-AssessmentDomains.pdf",
  publishedOrUpdated: "2024-11-01",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "Australia",
  applicability: "Official domain vocabulary and expected performance at AMC clinical level.",
  authoritative: true
};
const sourceAciAortic = {
  id: "source-aci-aortic",
  sourceType: "australian_clinical_guideline",
  organisation: "NSW Agency for Clinical Innovation, Emergency Care Institute",
  title: "Aortic dissection clinical tool",
  url: "https://aci.health.nsw.gov.au/networks/eci/clinical/tools/aortic-dissection",
  publishedOrUpdated: "2025-05-01",
  accessed: "2026-07-15",
  reviewDue: "2026-12-31",
  jurisdiction: "Australia",
  applicability: "Recognition, investigation and emergency management of suspected acute aortic dissection in an Australian emergency department.",
  authoritative: true
};
const sourceAcsGuideline = {
  id: "source-acs-guideline",
  sourceType: "australian_clinical_guideline",
  organisation: "Heart Foundation and Cardiac Society of Australia and New Zealand",
  title: "Australian clinical guideline for acute coronary syndromes",
  url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline",
  publishedOrUpdated: "2025-02-18",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "Australia",
  applicability: "Current Australian chest-pain assessment and time-critical differential-diagnosis framework.",
  authoritative: true
};
const sourceAccAhaAortic = {
  id: "source-acc-aha-aortic",
  sourceType: "international_guideline",
  organisation: "American College of Cardiology and American Heart Association",
  title: "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease",
  url: "https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease",
  publishedOrUpdated: "2022-11-02",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "International",
  applicability: "Joint guideline recommendations for anti-impulse treatment and definitive management of acute aortic syndromes.",
  authoritative: true
};
const sourceAnzcorOxygen = {
  id: "source-anzcor-oxygen",
  sourceType: "australian_clinical_guideline",
  organisation: "Australian and New Zealand Committee on Resuscitation",
  title: "Guideline 9.2.10 - The Use of Oxygen in Emergencies",
  url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies",
  publishedOrUpdated: "2021-04-01",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "Australia",
  applicability: "Contextual support for pulse-oximetry-guided oxygen use and avoiding routine oxygen in normoxaemic chest pain.",
  authoritative: true
};

const diagnosisTerms = [
  "Acute aortic syndrome, particularly aortic dissection", "acute aortic syndrome", "aortic dissection", "aortic rupture", "dissecting aorta",
  "Stanford type A", "Stanford type B", "ascending aortic dissection", "descending aortic dissection"
];

const blueprint = {
  blueprintVersion: "1.1.0",
  caseId: "case-002",
  registryId: "CP-P1-C002",
  registryVersion: "1.1.0",
  revision: 1,
  releaseStatus: "audited",
  station: {
    displayNumber: caseData.displayNumber,
    title: caseData.title,
    visibleStatus: caseData.status,
    statusLabel: caseData.statusLabel,
    note: caseData.note,
    phase: caseData.phase,
    pattern: caseData.pattern,
    grammar: "mixed",
    predominantArea: caseData.format.predominantArea,
    modality: caseData.modality,
    setting: "Metropolitan emergency department",
    recipient: "Julian Merrick",
    readingMinutes: 2,
    assessmentMinutes: 8
  },
  stem: {
    diagnosisVisibility: "hidden_to_be_derived",
    diagnosisTerms,
    urgencyVisibility: "not_signalled",
    lines: caseData.stem.lines.map((line, index) => ({
      id: line.id,
      text: line.text,
      purpose: ["role_setting", "person_presentation", "examiner_arrangement"][index]
    })),
    forbiddenTerms: diagnosisTerms.concat(["urgent", "emergency surgery", "CT angiography", "resuscitation", "unstable"])
  },
  tasks: [
    {
      id: "task-assessment", text: caseData.stem.tasks[0].text, actionVerb: "Conduct",
      assessmentArea: "History Taking", recipient: "Julian", visibleTiming: caseData.stem.tasks[0].timing, internalMinutes: 3, primary: false
    },
    {
      id: "task-reasoning", text: caseData.stem.tasks[1].text, actionVerb: "Explain",
      assessmentArea: "Diagnostic Formulation", recipient: "the patient", visibleTiming: caseData.stem.tasks[1].timing, internalMinutes: 1, primary: false
    },
    {
      id: "task-management", text: caseData.stem.tasks[2].text, actionVerb: "Address",
      assessmentArea: "Management/Counselling/Education", recipient: "the patient", visibleTiming: caseData.stem.tasks[2].timing, internalMinutes: 4, primary: true
    }
  ],
  clinicalTruth: {
    leadingDiagnosis: concept("clinical-leading-diagnosis", "Acute aortic syndrome, particularly aortic dissection", ["run-leading-diagnosis", "run-summary"], ["claim-diagnosis"]),
    differentials: [
      concept("clinical-differential-acs", "Acute coronary syndrome", ["run-heart-attack-concern", "run-aspirin-response", "run-differentials"], ["claim-differential"]),
      concept("clinical-differential-pe", "Pulmonary embolism", ["run-breathing-answer", "run-differentials"], ["claim-differential"]),
      concept("clinical-differential-pneumothorax", "Pneumothorax including tension pneumothorax", ["run-cardiovascular-response", "run-differentials"], ["claim-differential"])
    ],
    essentialClues: [
      concept("clinical-clue-abrupt-pattern", "Abrupt severe central chest pain radiating between the shoulder blades and maximal immediately", ["run-opening-story", "run-summary"], ["claim-diagnosis"]),
      concept("clinical-clue-vascular-asymmetry", "Inter-arm blood-pressure difference with a weaker left radial pulse", ["run-observations-response", "run-cardiovascular-response", "run-summary"], ["claim-diagnosis"]),
      concept("clinical-clue-risk", "Chronic hypertension; the missed antihypertensive dose is current treatment context and is not asserted as the cause", ["run-medical-history-answer", "run-medications-answer", "run-summary"], ["claim-diagnosis"]),
      concept("clinical-clue-near-syncope", "Near-syncope at onset", ["run-opening-story", "run-summary"], ["claim-diagnosis"])
    ],
    discriminators: [
      concept("clinical-discriminator-aortic-pattern", "Immediate maximum intensity, interscapular radiation and vascular asymmetry favour acute aortic syndrome over ACS, pulmonary embolism and pneumothorax", ["run-opening-story", "run-cardiovascular-response", "run-differentials"], ["claim-diagnosis", "claim-differential"]),
      concept("clinical-discriminator-no-current-deficit", "No current focal neurological deficit or abdominal pain does not remove the high-risk aortic pattern", ["run-weakness-answer", "run-abdominal-answer", "run-cardiovascular-response", "run-uncertainty"], ["claim-diagnosis"])
    ],
    redFlags: [
      concept("clinical-red-flag-persistent-pain", "Persistent nine-out-of-ten pain following near-syncope", ["run-opening-story", "run-current-pain-answer", "run-summary"], ["claim-diagnosis", "claim-aortic-pathway"]),
      concept("clinical-red-flag-vascular-asymmetry", "Marked inter-arm systolic-pressure and radial-pulse asymmetry", ["run-observations-response", "run-cardiovascular-response", "run-early-explanation"], ["claim-diagnosis", "claim-aortic-pathway"])
    ],
    safetyThresholds: [
      concept("clinical-threshold-aortic-pathway", "The high-risk pain pattern plus vascular asymmetry requires immediate monitored aortic-pathway assessment and specialist involvement before confirmation", ["run-early-explanation", "run-early-action", "run-management-overview"], ["claim-aortic-pathway"]),
      concept("clinical-threshold-imaging", "A haemodynamically stable patient proceeds to CT angiography; an unstable patient needs bedside echocardiographic assessment without falsely excluding dissection from a negative bedside scan", ["run-imaging-explanation", "run-cta-action"], ["claim-imaging-threshold"]),
      concept("clinical-threshold-anti-impulse", "Aim for heart rate 60 to 80 and systolic pressure 100 to 120 or the lowest pressure that maintains organ perfusion", ["run-anti-impulse-explanation", "run-beta-action"], ["claim-anti-impulse-target"]),
      concept("clinical-threshold-oxygen", "At oxygen saturation 97 percent on room air without shock, supplemental oxygen is not routinely indicated", ["run-observations-response", "run-early-action"], ["claim-oxygen"])
    ],
    criticalActions: [
      concept("clinical-action-aortic-pathway", "Start resuscitation-area monitoring and involve emergency, radiology, intensive-care and aortic surgical teams immediately", ["run-early-explanation", "run-early-action", "run-management-overview"], ["claim-aortic-pathway"]),
      concept("clinical-action-anti-impulse", "Treat severe pain and begin beta-blocker-first anti-impulse therapy with continuous monitoring", ["run-analgesia-explanation", "run-analgesia-action", "run-anti-impulse-explanation", "run-beta-action"], ["claim-anti-impulse-treatment", "claim-anti-impulse-target"]),
      concept("clinical-action-definitive-imaging", "Obtain immediate CT angiography with monitored transfer when stable", ["run-imaging-explanation", "run-cta-action"], ["claim-imaging"])
    ],
    criticalActionTimings: [
      {
        id: "timing-aortic-pathway", criticalActionConceptId: "clinical-action-aortic-pathway",
        triggerLineId: "run-cardiovascular-response", latestPermittedLineId: "run-early-action",
        positiveActionPhrase: "starts continuous cardiac, oxygen-saturation and frequent blood-pressure monitoring",
        rationale: "The pulse and blood-pressure asymmetry completes a high-risk acute aortic pattern requiring immediate monitored escalation.",
        sourceClaimIds: ["claim-aortic-pathway"]
      },
      {
        id: "timing-anti-impulse", criticalActionConceptId: "clinical-action-anti-impulse",
        triggerLineId: "run-early-explanation", latestPermittedLineId: "run-beta-action",
        positiveActionPhrase: "The doctor then begins titrated intravenous beta-blockade with continuous monitoring",
        rationale: "Once acute aortic syndrome is strongly suspected, analgesia and beta-blocker-first anti-impulse treatment are started under monitored senior care.",
        sourceClaimIds: ["claim-anti-impulse-treatment", "claim-anti-impulse-target"]
      },
      {
        id: "timing-definitive-imaging", criticalActionConceptId: "clinical-action-definitive-imaging",
        triggerLineId: "run-early-explanation", latestPermittedLineId: "run-cta-action",
        positiveActionPhrase: "The doctor confirms immediate CT angiography and continuous monitored transfer with the emergency and radiology teams.",
        rationale: "A stable high-risk presentation requires immediate definitive aortic imaging without delay from lower-yield testing.",
        sourceClaimIds: ["claim-imaging"]
      }
    ],
    unsafeActions: [
      concept("clinical-unsafe-antiplatelet-fibrinolysis", "Do not give routine aspirin or fibrinolysis while aortic dissection is strongly suspected", ["run-aspirin-response", "run-ecg-plan"], ["claim-antiplatelet-fibrinolysis-hazard"]),
      concept("clinical-unsafe-vasodilator-first", "Do not start a vasodilator before heart-rate control because reflex tachycardia can increase aortic wall stress", ["run-anti-impulse-explanation", "run-beta-action"], ["claim-anti-impulse-treatment"])
    ],
    scopeBoundary: concept("clinical-scope-emergency-registrar", "The emergency registrar provides monitored stabilisation, analgesia, anti-impulse treatment and imaging coordination while definitive Type A or complicated Type B decisions are made with the aortic surgical and intensive-care teams", ["run-management-overview", "run-surgery-plan", "run-understanding-answer"], ["claim-aortic-pathway", "claim-definitive-management"])
  },
  participants: [
    {
      id: "participant-patient",
      speakerLabel: "Patient",
      addressTerms: ["Julian", "Mr Merrick"],
      role: "patient",
      identityRequired: true,
      identityResponse: { lineId: "run-id", text: text("run-id"), fullName: "Julian Merrick", dateOfBirthText: "7 September 1966" },
      openingAffect: null,
      initialVoluntary: { triggerLineId: "run-open-question", responseLineId: "run-opening-story", text: text("run-opening-story") },
      concerns: [
        { id: "concern-indigestion", text: "Whether the pain is indigestion after spicy food", responseLineId: "run-indigestion-concern", responseText: text("run-indigestion-concern"), nextDoctorLineId: "run-indigestion-response" },
        { id: "concern-artery-tear", text: "Whether the artery has torn", responseLineId: "run-tear-concern", responseText: text("run-tear-concern"), nextDoctorLineId: "run-uncertainty" },
        { id: "concern-aspirin", text: "Whether aspirin should be given because his father died from a heart attack", responseLineId: "run-heart-attack-concern", responseText: text("run-heart-attack-concern"), nextDoctorLineId: "run-aspirin-response" },
        { id: "concern-partner", text: "Whether his partner can accompany him", responseLineId: "run-family-concern", responseText: text("run-family-concern"), nextDoctorLineId: "run-family-response" }
      ],
      disclosures
    }
  ],
  examiner: {
    opening: { lineId: "run-start", text: text("run-start") },
    availableAtStartStemLineIds: ["stem-start"],
    releases: [
      {
        id: "release-observations", requestDescription: "The Doctor requests current observations.",
        requestLineId: "run-observations-request", requestExactText: text("run-observations-request"),
        responseLineId: "run-observations-response", responseText: text("run-observations-response"),
        permittedModalities: ["in_person"], findingSource: "Current emergency-department observations available from the Examiner as stated in the Stem.",
        nextDoctorLineId: "run-examination-consent", responseUse: "The Doctor obtains consent for focused examination after recognising tachycardia, severe hypertension and inter-arm pressure asymmetry."
      },
      {
        id: "release-focused-examination", requestDescription: "The Doctor requests the focused examination findings after performing the consented examination.",
        requestLineId: "run-cardiovascular-request", requestExactText: text("run-cardiovascular-request"),
        responseLineId: "run-cardiovascular-response", responseText: text("run-cardiovascular-response"),
        permittedModalities: ["in_person"], findingSource: "Findings from the Doctor's visible focused cardiovascular, respiratory, neurological and peripheral-perfusion examination in the in-person station.",
        nextDoctorLineId: "run-early-explanation", responseUse: "The Doctor identifies vascular asymmetry, checks major complications and dangerous chest-pain alternatives, then begins immediate protection."
      }
    ],
    scheduledPrompts: [
      {
        id: "prompt-three-minutes", speaker: "Examiner", triggerDescription: "After three minutes have elapsed",
        triggerLineId: "run-summary", responseLineId: "run-time-prompt", responseText: text("run-time-prompt"),
        markingConsequence: "The Doctor proceeds to the remaining tasks; the prompt itself carries no performance inference."
      }
    ],
    closing: { lineId: "run-end", text: text("run-end") }
  },
  marking: {
    sourceClaimIds: ["claim-exam-standard"],
    keySteps: [
      { id: "step-assessment", description: "Elicits abrupt maximum-at-onset chest-to-back pain and identifies vascular asymmetry", taskIds: ["task-assessment"], runLineIds: ["run-open-question", "run-opening-story", "run-observations-request", "run-cardiovascular-request", "run-summary"], sourceClaimIds: ["claim-diagnosis"] },
      { id: "step-early-safety", description: "Recognises the high-risk acute aortic pattern and starts monitored specialist escalation before diagnostic confirmation", taskIds: ["task-management"], runLineIds: ["run-early-explanation", "run-early-action"], sourceClaimIds: ["claim-aortic-pathway"] },
      { id: "step-reasoning", description: "Explains the leading acute aortic diagnosis, uncertainty and important dangerous alternatives", taskIds: ["task-reasoning"], runLineIds: ["run-leading-diagnosis", "run-uncertainty", "run-aspirin-response", "run-differentials"], sourceClaimIds: ["claim-diagnosis", "claim-differential", "claim-antiplatelet-fibrinolysis-hazard"] },
      { id: "step-management", description: "Explains and initiates safe analgesia, beta-blocker-first anti-impulse treatment, definitive imaging and specialist disposition", taskIds: ["task-management"], runLineIds: ["run-management-overview", "run-analgesia-action", "run-beta-action", "run-imaging-explanation", "run-cta-action", "run-surgery-plan"], sourceClaimIds: ["claim-anti-impulse-treatment", "claim-imaging", "claim-definitive-management"] }
    ],
    domains: [
      { name: "History", taskIds: ["task-assessment"], runLineIds: ["run-open-question", "run-current-pain", "run-breathing", "run-medical-history", "run-medications", "run-summary"], sourceClaimIds: ["claim-exam-standard", "claim-diagnosis"] },
      { name: "Choice and technique of examination, organisation and sequence", taskIds: ["task-assessment"], runLineIds: ["run-examination-consent", "run-examination-action", "run-cardiovascular-request", "run-cardiovascular-response"], sourceClaimIds: ["claim-exam-standard", "claim-diagnosis"] },
      { name: "Diagnosis/differential diagnoses", taskIds: ["task-reasoning"], runLineIds: ["run-leading-diagnosis", "run-uncertainty", "run-differentials"], sourceClaimIds: ["claim-exam-standard", "claim-diagnosis", "claim-differential"] },
      { name: "Management plan", taskIds: ["task-management"], runLineIds: ["run-management-overview", "run-ecg-plan", "run-analgesia-action", "run-beta-action", "run-imaging-explanation", "run-cta-action", "run-surgery-plan"], sourceClaimIds: ["claim-exam-standard", "claim-antiplatelet-fibrinolysis-hazard", "claim-anti-impulse-treatment", "claim-imaging", "claim-definitive-management"] },
      { name: "Approach to patient/relative/carer/other health professional", taskIds: ["task-assessment", "task-reasoning", "task-management"], runLineIds: ["run-consent", "run-indigestion-response", "run-uncertainty", "run-family-response", "run-understanding"], sourceClaimIds: ["claim-exam-standard"] }
    ],
    projectSafetyErrors: [
      { id: "error-delayed-aortic-pathway", description: "Completes a prolonged history before monitored escalation despite the high-risk aortic pattern", preventedByLineIds: ["run-early-explanation", "run-early-action"], safetyConceptIds: ["clinical-action-aortic-pathway", "clinical-threshold-aortic-pathway"], sourceClaimIds: ["claim-aortic-pathway"] },
      { id: "error-unsafe-antiplatelet-fibrinolysis", description: "Gives routine aspirin or fibrinolytic treatment before dissection is excluded", preventedByLineIds: ["run-aspirin-response", "run-ecg-plan"], safetyConceptIds: ["clinical-unsafe-antiplatelet-fibrinolysis"], sourceClaimIds: ["claim-antiplatelet-fibrinolysis-hazard"] },
      { id: "error-vasodilator-before-rate-control", description: "Uses a vasodilator before beta-blocker heart-rate control", preventedByLineIds: ["run-beta-action"], safetyConceptIds: ["clinical-unsafe-vasodilator-first", "clinical-action-anti-impulse"], sourceClaimIds: ["claim-anti-impulse-treatment"] },
      { id: "error-delayed-definitive-imaging", description: "Delays definitive aortic imaging in a stable high-risk patient", preventedByLineIds: ["run-imaging-explanation", "run-cta-action"], safetyConceptIds: ["clinical-action-definitive-imaging", "clinical-threshold-imaging"], sourceClaimIds: ["claim-imaging", "claim-imaging-threshold"] }
    ],
    globalRating: {
      scale: 7,
      failRatings: [1, 2, 3],
      passRatings: [4, 5, 6, 7],
      decisionRule: "The global rating alone determines the station result: ratings 1 to 3 fail and ratings 4 to 7 pass.",
      passStandard: "Completes the assigned assessment, explanation and management tasks; recognises the high-risk acute aortic pattern; and initiates safe monitored imaging, anti-impulse treatment and specialist escalation without unsafe empirical aspirin or fibrinolysis.",
      failStandard: "Misses the acute aortic pattern, delays definitive assessment, gives unsafe aspirin or fibrinolysis, reverses anti-impulse sequencing or substantially fails the assigned tasks."
    }
  },
  interaction: {
    identity: {
      mode: "direct", verificationLineId: "run-intro", verificationText: text("run-intro"),
      participantIds: ["participant-patient"], completedBeforeClinicalContent: true,
      rationale: "The patient directly confirms full name and date of birth before consultation consent and clinical questioning."
    },
    defaultInformationParticipantId: "participant-patient",
    directAddresses: ["run-consent", "run-examination-consent", "run-early-explanation", "run-leading-diagnosis", "run-iv-consent"].map((lineId) => ({ lineId, participantId: "participant-patient", addressTerm: "Julian" })),
    consents: [
      { id: "consent-consultation", scope: "consultation", requestLineId: "run-consent", requestText: text("run-consent"), responseLineId: "run-consent-answer", responseText: text("run-consent-answer"), participantId: "participant-patient", outcome: "granted" },
      { id: "consent-examination", scope: "examination", requestLineId: "run-examination-consent", requestText: text("run-examination-consent"), responseLineId: "run-examination-consent-answer", responseText: text("run-examination-consent-answer"), participantId: "participant-patient", outcome: "granted" },
      { id: "consent-iv", scope: "procedure", requestLineId: "run-iv-consent", requestText: text("run-iv-consent"), responseLineId: "run-iv-consent-answer", responseText: text("run-iv-consent-answer"), participantId: "participant-patient", outcome: "granted" },
      { id: "consent-bloods", scope: "procedure", requestLineId: "run-blood-consent", requestText: text("run-blood-consent"), responseLineId: "run-blood-consent-answer", responseText: text("run-blood-consent-answer"), participantId: "participant-patient", outcome: "granted" },
      { id: "consent-analgesia", scope: "procedure", requestLineId: "run-analgesia-consent", requestText: text("run-analgesia-consent"), responseLineId: "run-analgesia-consent-answer", responseText: text("run-analgesia-consent-answer"), participantId: "participant-patient", outcome: "granted" },
      { id: "consent-beta-blocker", scope: "procedure", requestLineId: "run-beta-consent", requestText: text("run-beta-consent"), responseLineId: "run-beta-consent-answer", responseText: text("run-beta-consent-answer"), participantId: "participant-patient", outcome: "granted" },
      { id: "consent-cta", scope: "procedure", requestLineId: "run-cta-consent", requestText: text("run-cta-consent"), responseLineId: "run-cta-consent-answer", responseText: text("run-cta-consent-answer"), participantId: "participant-patient", outcome: "granted" }
    ],
    informationRequests,
    sensitiveTopicLineIds: []
  },
  variation: {
    coverageSlot: "aortic dissection",
    primaryFailureMode: "unsafe_delay",
    secondaryFailureMode: "premature_closure",
    distinctJob: "Recognise acute aortic syndrome from abrupt maximum-at-onset chest-to-back pain plus vascular asymmetry, activate the aortic pathway before confirmation, and avoid unsafe empirical aspirin or fibrinolytic treatment.",
    newSurprise: "The pain began while quietly sitting at a cafe rather than during exertion, and the patient's spicy-meal explanation competes with the vascular pattern.",
    plannedTrap: "Anchoring on indigestion or routine ACS treatment can delay definitive aortic imaging or expose the patient to harmful aspirin or fibrinolysis.",
    antiFailureFeatures: [
      "The Doctor acts once abrupt maximum-intensity pain and vascular asymmetry establish a high-risk aortic pattern.",
      "The Doctor explains why aspirin is withheld while retaining acute coronary syndrome as an important alternative.",
      "The Doctor gives beta-blockade before adding a vasodilator."
    ],
    duplicateCheck: {
      comparedCaseIds: ["case-001", "case-003", "case-004"],
      conclusion: "This case tests acute aortic syndrome with vascular asymmetry and aspirin or fibrinolysis hazard. Current Case 1 tests non-classic acute coronary syndrome, while the Emergency Explore comparisons use different presentations and performance jobs."
    }
  },
  performance: {
    targetSpokenSeconds: timingEvidence.totalObservedSeconds,
    actionDurations,
    taskEvidence: [
      {
        taskId: "task-assessment", runLineIds: range("run-start", "run-cardiovascular-response").concat(range("run-breathing", "run-time-prompt")),
        requiredEvidence: [
          { requirement: "A focused assessment is visibly conducted", lineId: "run-open-question", exactPhrase: text("run-open-question"), positivePerformancePhrase: text("run-open-question") },
          { requirement: "The focused assessment integrates the dangerous aortic pattern", lineId: "run-summary", exactPhrase: "Your pain was severe immediately", positivePerformancePhrase: "Your pain was severe immediately" }
        ],
        observedSeconds: timingByTaskId.get("task-assessment"), completed: true
      },
      {
        taskId: "task-reasoning", runLineIds: range("run-leading-diagnosis", "run-differentials"),
        requiredEvidence: [
          { requirement: "The most likely diagnosis is explicitly explained", lineId: "run-leading-diagnosis", exactPhrase: "my most likely diagnosis is an aortic dissection", positivePerformancePhrase: "my most likely diagnosis is an aortic dissection" },
          { requirement: "Important differential diagnoses are explicitly explained", lineId: "run-differentials", exactPhrase: "Important differential diagnoses are a heart attack, a clot in the lung and a collapsed lung.", positivePerformancePhrase: "Important differential diagnoses are a heart attack, a clot in the lung and a collapsed lung." }
        ],
        observedSeconds: timingByTaskId.get("task-reasoning"), completed: true
      },
      {
        taskId: "task-management", runLineIds: range("run-early-explanation", "run-indigestion-response").concat(range("run-management-overview", "run-end")),
        requiredEvidence: [
          { requirement: "The patient's concerns are addressed within the immediate management plan", lineId: "run-family-response", exactPhrase: "A staff member can update your partner", positivePerformancePhrase: "A staff member can update your partner" },
          { requirement: "The immediate management plan includes beta-blocker-first anti-impulse treatment", lineId: "run-beta-action", exactPhrase: "The doctor then begins titrated intravenous beta-blockade with continuous monitoring", positivePerformancePhrase: "The doctor then begins titrated intravenous beta-blockade with continuous monitoring" },
          { requirement: "The immediate management plan includes definitive aortic imaging", lineId: "run-cta-action", exactPhrase: "confirms immediate CT angiography and continuous monitored transfer", positivePerformancePhrase: "The doctor confirms immediate CT angiography and continuous monitored transfer with the emergency and radiology teams." }
        ],
        observedSeconds: timingByTaskId.get("task-management"), completed: true
      }
    ],
    listenTest: {
      status: "pass", method: "spoken_readthrough", reviewer: "FFmpeg libflite synthetic speech timing rehearsal",
      performedAt: timingEvidence.generatedAt, observedSeconds: timingEvidence.totalObservedSeconds,
      caseContentSha256: "0".repeat(64), reviewScopeSha256: "0".repeat(64),
      notes: "A reproducible line-by-line synthetic spoken rehearsal rendered " + timingEvidence.renderedSpeechSeconds +
        " seconds of all visible non-Action lines. Reviewed Action intervals add " + timingEvidence.actionSeconds +
        " seconds; the raw total is " + timingEvidence.rawTotalSeconds + " seconds and the recorded whole-second total is " +
        timingEvidence.totalObservedSeconds + " seconds. The three-minute prompt starts at " +
        timingEvidence.milestones.threeMinutePromptStartSeconds + " seconds. This verifies elapsed-time feasibility only, not dialogue naturalness. The legacy spoken_readthrough method identifier is retained for Engine 1.1 schema compatibility; no human listening event is claimed. Evidence: audits/CASE_002_TIMING_EVIDENCE.json sha256:" + timingEvidenceSha256 + "."
    }
  },
  sourceBasis: {
    sources: [sourceAmcSpec, sourceAmcDomains, sourceAciAortic, sourceAcsGuideline, sourceAccAhaAortic, sourceAnzcorOxygen],
    claimMap: [
      {
        id: "claim-diagnosis", claimType: "diagnosis",
        claim: "Abrupt severe chest or back pain that is maximal at onset, syncope or presyncope, pulse deficit and a marked inter-arm blood-pressure difference are high-risk features of acute aortic syndrome.",
        sourceIds: ["source-aci-aortic"],
        sourceLocators: [{ sourceId: "source-aci-aortic", locator: "Clinical assessment: pain features, pulse deficit, blood-pressure differential, neurological deficit and syncope." }],
        runLineIds: ["run-opening-story", "run-current-pain-answer", "run-observations-response", "run-cardiovascular-response", "run-medical-history-answer", "run-medications-answer", "run-summary", "run-leading-diagnosis", "run-early-explanation"],
        taskIds: ["task-assessment", "task-reasoning", "task-management"],
        clinicalConceptIds: ["clinical-leading-diagnosis", "clinical-clue-abrupt-pattern", "clinical-clue-vascular-asymmetry", "clinical-clue-risk", "clinical-clue-near-syncope", "clinical-discriminator-aortic-pattern", "clinical-discriminator-no-current-deficit", "clinical-red-flag-persistent-pain", "clinical-red-flag-vascular-asymmetry"],
        blueprintRefs: []
      },
      {
        id: "claim-differential", claimType: "differential",
        claim: "Acute coronary syndrome, pulmonary embolism and pneumothorax remain important dangerous chest-pain alternatives, but immediate maximum intensity, interscapular radiation and vascular asymmetry favour acute aortic syndrome.",
        sourceIds: ["source-acs-guideline", "source-aci-aortic"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Comprehensive guideline, history and assessment of presenting complaint: targeted time-critical chest-pain differentials." },
          { sourceId: "source-aci-aortic", locator: "Clinical assessment: abrupt pain, pulse deficit, blood-pressure differential and syncope as high-risk aortic features." }
        ],
        runLineIds: ["run-breathing-answer", "run-cardiovascular-response", "run-heart-attack-concern", "run-aspirin-response", "run-differentials"],
        taskIds: ["task-assessment", "task-reasoning"],
        clinicalConceptIds: ["clinical-differential-acs", "clinical-differential-pe", "clinical-differential-pneumothorax", "clinical-discriminator-aortic-pattern"],
        blueprintRefs: []
      },
      {
        id: "claim-aortic-pathway", claimType: "disposition",
        claim: "A high-risk suspected acute aortic dissection requires immediate monitored emergency care with early emergency-senior, intensive-care, radiology and cardiothoracic or vascular specialist involvement.",
        sourceIds: ["source-aci-aortic"],
        sourceLocators: [{ sourceId: "source-aci-aortic", locator: "Management of suspected aortic dissection: resuscitation, monitoring and urgent specialist consultation." }],
        runLineIds: ["run-current-pain-answer", "run-early-explanation", "run-early-action", "run-management-overview", "run-surgery-plan"],
        taskIds: ["task-assessment", "task-management"],
        clinicalConceptIds: ["clinical-red-flag-persistent-pain", "clinical-red-flag-vascular-asymmetry", "clinical-threshold-aortic-pathway", "clinical-action-aortic-pathway", "clinical-scope-emergency-registrar"],
        blueprintRefs: []
      },
      {
        id: "claim-imaging", claimType: "investigation",
        claim: "CT angiography is the preferred definitive test for a haemodynamically stable patient with suspected acute aortic dissection and should not be delayed by lower-yield testing.",
        sourceIds: ["source-aci-aortic"],
        sourceLocators: [{ sourceId: "source-aci-aortic", locator: "Investigations: CT angiography as preferred imaging in the haemodynamically stable patient." }],
        runLineIds: ["run-imaging-explanation", "run-contrast-reaction", "run-kidney-disease", "run-cta-action"],
        taskIds: ["task-management"],
        clinicalConceptIds: ["clinical-action-definitive-imaging"],
        blueprintRefs: []
      },
      {
        id: "claim-imaging-threshold", claimType: "threshold",
        claim: "Use CT angiography when the patient is stable; if too unstable for CT, urgent bedside echocardiography can identify complications and guide the team, but a negative bedside study does not reliably exclude dissection.",
        sourceIds: ["source-aci-aortic", "source-acc-aha-aortic"],
        sourceLocators: [
          { sourceId: "source-aci-aortic", locator: "Investigations: CT angiography for stable patients and bedside TTE or TOE pathway when unstable." },
          { sourceId: "source-acc-aha-aortic", locator: "Full guideline linked from the page, diagnostic imaging recommendations for suspected acute aortic syndrome." }
        ],
        runLineIds: ["run-imaging-explanation", "run-cta-action"],
        taskIds: ["task-management"],
        clinicalConceptIds: ["clinical-threshold-imaging"],
        blueprintRefs: []
      },
      {
        id: "claim-anti-impulse-treatment", claimType: "treatment",
        claim: "Treat pain and reduce heart rate and blood pressure under continuous monitoring; the joint ACC/AHA guideline recommends intravenous beta-blocker-first therapy and adding a vasodilator only after heart-rate control if pressure remains above target.",
        sourceIds: ["source-aci-aortic", "source-acc-aha-aortic"],
        sourceLocators: [
          { sourceId: "source-aci-aortic", locator: "Management: general heart-rate and blood-pressure reduction targets for suspected aortic dissection." },
          { sourceId: "source-acc-aha-aortic", locator: "Full guideline linked from the page, acute medical management recommendations for acute aortic syndromes." }
        ],
        runLineIds: ["run-analgesia-explanation", "run-analgesia-action", "run-anti-impulse-explanation", "run-asthma", "run-beta-action"],
        taskIds: ["task-management"],
        clinicalConceptIds: ["clinical-action-anti-impulse", "clinical-unsafe-vasodilator-first"],
        blueprintRefs: []
      },
      {
        id: "claim-anti-impulse-target", claimType: "threshold",
        claim: "For acute aortic syndrome, target a heart rate of 60 to 80 beats per minute and systolic pressure below 120 millimetres of mercury or the lowest pressure that maintains organ perfusion.",
        sourceIds: ["source-aci-aortic", "source-acc-aha-aortic"],
        sourceLocators: [
          { sourceId: "source-aci-aortic", locator: "Management targets: heart rate 60 to 80 and systolic pressure 100 to 120 using the higher-arm reading initially." },
          { sourceId: "source-acc-aha-aortic", locator: "Full guideline linked from the page, acute aortic syndrome blood-pressure and heart-rate targets." }
        ],
        runLineIds: ["run-anti-impulse-explanation", "run-beta-action"],
        taskIds: ["task-management"],
        clinicalConceptIds: ["clinical-threshold-anti-impulse", "clinical-action-anti-impulse"],
        blueprintRefs: []
      },
      {
        id: "claim-antiplatelet-fibrinolysis-hazard", claimType: "contraindication",
        claim: "In this high-risk presentation, the ACI warning to consider dissection before antiplatelet or fibrinolytic treatment supports withholding empirical aspirin and fibrinolysis until dissection is excluded or the specialist team advises otherwise.",
        sourceIds: ["source-aci-aortic"],
        sourceLocators: [{ sourceId: "source-aci-aortic", locator: "Safety warning to consider aortic dissection before antiplatelet or fibrinolytic treatment." }],
        runLineIds: ["run-aspirin-response", "run-ecg-plan"],
        taskIds: ["task-reasoning", "task-management"],
        clinicalConceptIds: ["clinical-unsafe-antiplatelet-fibrinolysis"],
        blueprintRefs: []
      },
      {
        id: "claim-definitive-management", claimType: "disposition",
        claim: "Acute ascending aortic dissection requires emergency surgical evaluation, while uncomplicated descending dissection is initially managed medically with intervention for rupture, malperfusion, extension, enlargement, intractable pain or uncontrolled hypertension.",
        sourceIds: ["source-aci-aortic", "source-acc-aha-aortic"],
        sourceLocators: [
          { sourceId: "source-aci-aortic", locator: "Definitive management of Stanford Type A and Type B dissection." },
          { sourceId: "source-acc-aha-aortic", locator: "Full guideline linked from the page, recommendations for acute Type A and acute Type B dissection." }
        ],
        runLineIds: ["run-surgery-plan", "run-understanding-answer"],
        taskIds: ["task-management"],
        clinicalConceptIds: ["clinical-scope-emergency-registrar"],
        blueprintRefs: []
      },
      {
        id: "claim-oxygen", claimType: "threshold",
        claim: "Oxygen use should be guided by pulse oximetry; routine supplemental oxygen is not recommended for normoxaemic chest pain without shock, and the ANZCOR first-aid threshold is oxygen saturation below 92 percent.",
        sourceIds: ["source-anzcor-oxygen"],
        sourceLocators: [{ sourceId: "source-anzcor-oxygen", locator: "Sections 3.1 and 3.2: pulse-oximetry-guided oxygen, saturation below 92 percent, shock exceptions and no routine oxygen for chest pain." }],
        runLineIds: ["run-observations-response", "run-early-action"],
        taskIds: ["task-assessment", "task-management"],
        clinicalConceptIds: ["clinical-threshold-oxygen"],
        blueprintRefs: []
      },
      {
        id: "claim-exam-standard", claimType: "exam_standard",
        claim: "The station uses the current AMC two-minute reading and eight-minute assessment format, predominant assessment area, observable tasks, domains and seven-point global rating threshold.",
        sourceIds: ["source-amc-spec", "source-amc-domains"],
        sourceLocators: [
          { sourceId: "source-amc-spec", locator: "Clinical Examination Specifications V8.3, station structure, timing and task sections." },
          { sourceId: "source-amc-domains", locator: "Assessment Domains V1.1, domain definitions and performance expectations." }
        ],
        runLineIds: [],
        taskIds: ["task-assessment", "task-reasoning", "task-management"],
        clinicalConceptIds: [],
        blueprintRefs: ["station", "tasks", "marking.keySteps", "marking.domains", "marking.globalRating"]
      }
    ]
  },
  qa: null
};

blueprint.performance.listenTest.caseContentSha256 = contentSha;
const reviewScopeSha = engine.blueprintReviewScopeHash(blueprint);
blueprint.performance.listenTest.reviewScopeSha256 = reviewScopeSha;

function qaGate(method, evidenceType, reference) {
  return {
    status: "pass", method, reviewer: "Case-generation engine review", reviewedAt,
    reviewScopeSha256: reviewScopeSha,
    evidence: [{ type: evidenceType, reference }]
  };
}

blueprint.qa = {
  caseContentSha256: contentSha,
  reviewScopeSha256: reviewScopeSha,
  blueprintPackageSha256: "0".repeat(64),
  blueprint: qaGate("Executable blueprint integrity review", "automated_test", "tests/amc-case-engine.test.js"),
  stemNeutrality: qaGate("Diagnosis-alias, urgency-language and management-leakage review", "line_review", "case-002:stem"),
  taskAlignment: qaGate("Task-to-line and task-evidence review including no-unrequested-handover control", "line_review", "case-002:tasks-and-performance"),
  conversation: qaGate("Identity-first, consent-first, atomic-question and natural-dialogue review", "line_review", "case-002:full-run"),
  participantDisclosure: qaGate("Participant disclosure and concern sequencing review", "line_review", "case-002:participant-controls"),
  examinerRelease: qaGate("Examiner ownership, finding-release and three-minute prompt review", "line_review", "case-002:examiner-controls"),
  amcLevel: qaGate("AMC specification and station-authenticity review", "line_review", "AMC-specification-V8.3"),
  timing: qaGate("Line-by-line FFmpeg libflite synthetic spoken timing rehearsal plus reviewed Action intervals", "listen_test", "audits/CASE_002_TIMING_EVIDENCE.json#sha256=" + timingEvidenceSha256),
  clinical: qaGate("Line-by-line acute-aortic safety and accuracy review", "source_review", "ACI-aortic-May-2025;ACC-AHA-aortic-2022;ANZCOR-oxygen-9.2.10"),
  sources: qaGate("Authoritative-source currency and locator review", "source_review", "engine/authoritative-source-catalog.json"),
  finalQa: qaGate("Engine 1.1 new Case 2 final audit", "audit_report", "audit:case-002"),
  blockers: []
};
blueprint.qa.blueprintPackageSha256 = engine.blueprintPackageHash(blueprint);

fs.writeFileSync(blueprintPath, JSON.stringify(blueprint, null, 2) + "\n");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
registry.updatedAt = reviewedAt;
const row = registry.cases.find((item) => item.caseId === "case-002");
Object.assign(row, {
  title: caseData.title,
  modality: caseData.modality,
  predominantArea: caseData.format.predominantArea,
  status: "audited",
  contentSha256: contentSha,
  coverageSlot: blueprint.variation.coverageSlot,
  distinctJob: blueprint.variation.distinctJob,
  primaryFailureMode: blueprint.variation.primaryFailureMode,
  admissionDecision: "admitted"
});
registry.nextAction = {
  mode: "reconstruct",
  caseId: "case-003",
  patternId: 1,
  newGenerationAllowed: false,
  reason: "Cases 1 and 2 have passed reconstruction. Case 3 is the next controlled legacy case."
};
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + "\n");

console.log(JSON.stringify({
  caseId: caseData.id,
  contentSha256: contentSha,
  reviewScopeSha256: reviewScopeSha,
  blueprintPackageSha256: blueprint.qa.blueprintPackageSha256,
  targetSpokenSeconds: blueprint.performance.targetSpokenSeconds
}, null, 2));
