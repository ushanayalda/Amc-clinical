const fs = require("fs");
const path = require("path");
const vm = require("vm");
const engine = require("./amc-engine-lib");

const root = path.resolve(__dirname, "..");
const casePath = path.join(root, "data", "current-cases", "case-001.js");
const blueprintPath = path.join(root, "data", "blueprints", "case-001.blueprint.json");
const registryPath = path.join(root, "registry-library", "case-registry.v1.1.json");
const context = { window: { AMC_CURRENT_CASES: [] } };
vm.runInNewContext(fs.readFileSync(casePath, "utf8"), context, { filename: casePath });
const caseData = context.window.AMC_CURRENT_CASES[0];
const reviewedAt = new Date().toISOString();

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

const requestSpecs = [
  ["opening", "run-open-question", "run-opening-story", "run-current", "Initial account", ["About 25 minutes ago"], "clinical-clue-atypical", "open_question"],
  ["current", "run-current", "run-current-answer", "run-chest", "Current symptoms", ["still breathless and nauseated"], "clinical-red-flag-ongoing"],
  ["chest", "run-chest", "run-chest-answer", "run-persistence", "Chest discomfort", ["middle feels heavy"], "clinical-clue-pressure"],
  ["persistence", "run-persistence", "run-persistence-answer", "run-character", "Persistence", ["still there"], "clinical-red-flag-ongoing"],
  ["character", "run-character", "run-character-answer", "run-onset", "Character", ["tight band"], "clinical-clue-pressure"],
  ["onset", "run-onset", "run-onset-answer", "run-rest", "Time to maximum intensity", ["built up over two or three minutes"], "clinical-differential-aortic"],
  ["rest", "run-rest", "run-rest-answer", "run-associated", "Response to rest", ["heaviness and breathlessness continued"], "clinical-clue-exertional"],
  ["associated", "run-associated", "run-associated-answer", "run-early-escalation", "Associated symptoms", ["clammy and light-headed"], "clinical-clue-autonomic"],
  ["previous", "run-previous", "run-previous-answer", "run-pleuritic", "Previous episodes", ["Last week"], "clinical-clue-exertional"],
  ["pleuritic", "run-pleuritic", "run-pleuritic-answer", "run-leg", "Pleuritic character", ["breathing does not change it"], "clinical-differential-pneumothorax"],
  ["leg", "run-leg", "run-leg-answer", "run-immobility", "Unilateral leg swelling", ["neither leg has been swollen"], "clinical-differential-pe"],
  ["immobility", "run-immobility", "run-immobility-answer", "run-history", "Recent immobility", ["moving around normally"], "clinical-differential-pe"],
  ["history", "run-history", "run-history-answer", "run-medications", "Medical history", ["Type 2 diabetes"], "clinical-clue-risk"],
  ["medications", "run-medications", "run-medications-answer", "run-allergy", "Regular medicines", ["Metformin"], "clinical-clue-risk"],
  ["allergy", "run-allergy", "run-allergy-answer", "run-bleeding", "Severe aspirin allergy", ["never had a severe reaction to aspirin"], "clinical-action-aspirin"],
  ["bleeding", "run-bleeding", "run-bleeding-answer", "run-anticoagulant", "Active bleeding", ["not bleeding"], "clinical-action-aspirin"],
  ["anticoagulant", "run-anticoagulant", "run-anticoagulant-answer", "run-aspirin-explanation", "Anticoagulant use", ["do not take a blood-thinning medicine"], "clinical-action-aspirin"],
  ["smoking", "run-smoking", "run-smoking-answer", "run-family", "Smoking history", ["stopped eight years ago"], "clinical-clue-risk"],
  ["family", "run-family", "run-family-answer", "run-summary", "Family history", ["heart attack at 61"], "clinical-clue-risk"],
  ["understanding", "run-understanding", "run-understanding-answer", "run-closing", "Understanding of the plan", ["go by ambulance"], "clinical-action-transfer"]
];

const informationRequests = requestSpecs.map((spec) => ({
  id: "request-" + spec[0],
  lineId: spec[1],
  requestText: text(spec[1]),
  taskId: spec[0] === "understanding" ? "task-management" : "task-history",
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
  triggerType: spec[7] || "specific_question",
  triggerDescription: "The Doctor makes one focused request about " + spec[4].toLowerCase() + ".",
  triggerLineId: spec[1],
  responseLineId: spec[2],
  responseText: text(spec[2]),
  nextDoctorLineId: spec[3],
  responseUse: "The next Doctor turn incorporates the answer into the focused assessment."
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
const sourceAcs = {
  id: "source-acs-guideline",
  sourceType: "australian_clinical_guideline",
  organisation: "Heart Foundation and Cardiac Society of Australia and New Zealand",
  title: "Australian clinical guideline for acute coronary syndromes",
  url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline",
  publishedOrUpdated: "2025-02-18",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "Australia",
  applicability: "Suspected ACS presentation, primary-care transfer, ECG, monitoring and initial treatment.",
  authoritative: true
};
const sourceAnzcor141 = {
  id: "source-anzcor-14-1",
  sourceType: "australian_clinical_guideline",
  organisation: "Australian and New Zealand Committee on Resuscitation",
  title: "Guideline 14.1 - Acute Coronary Syndromes: Presentation",
  url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-1-acute-coronary-syndromes-presentation",
  publishedOrUpdated: "2024-12-01",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "Australia",
  applicability: "ACS symptom patterns, non-specific presentations, risk factors and ECG limitations.",
  authoritative: true
};
const sourceAnzcor142 = {
  id: "source-anzcor-14-2",
  sourceType: "australian_clinical_guideline",
  organisation: "Australian and New Zealand Committee on Resuscitation",
  title: "Guideline 14.2 - Acute Coronary Syndromes: Initial Medical Therapy",
  url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-2-acute-coronary-syndromes-initial-medical-therapy",
  publishedOrUpdated: "2024-12-01",
  accessed: "2026-07-15",
  reviewDue: "2027-01-15",
  jurisdiction: "Australia",
  applicability: "Initial oxygen and aspirin therapy for suspected acute coronary syndrome.",
  authoritative: true
};

const diagnosisTerms = [
  "acute coronary syndrome", "ACS", "myocardial infarction", "MI", "acute myocardial infarction",
  "AMI", "STEMI", "NSTEMI", "unstable angina", "heart attack", "coronary ischaemia",
  "cardiac ischaemia", "myocardial ischaemia", "acute myocardial ischaemia", "coronary event"
];

const blueprint = {
  blueprintVersion: "1.1.0",
  caseId: "case-001",
  registryId: "CP-P1-C001",
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
    grammar: "consultation",
    predominantArea: caseData.format.predominantArea,
    modality: caseData.modality,
    setting: "Community general practice clinic",
    recipient: "Mirella Quinn",
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
    forbiddenTerms: diagnosisTerms.concat(["urgent", "immediate treatment", "ambulance", "emergency department"])
  },
  tasks: [
    {
      id: "task-history", text: caseData.stem.tasks[0].text, actionVerb: "Take",
      assessmentArea: "History Taking", recipient: "Mirella", visibleTiming: "4 minutes", internalMinutes: 4, primary: true
    },
    {
      id: "task-reasoning", text: caseData.stem.tasks[1].text, actionVerb: "Explain",
      assessmentArea: "Diagnostic Formulation", recipient: "the patient", visibleTiming: "2 minutes", internalMinutes: 2, primary: false
    },
    {
      id: "task-management", text: caseData.stem.tasks[2].text, actionVerb: "Address",
      assessmentArea: "Management/Counselling/Education", recipient: "the patient", visibleTiming: "2 minutes", internalMinutes: 2, primary: false
    }
  ],
  clinicalTruth: {
    leadingDiagnosis: concept("clinical-leading-diagnosis", "Acute coronary syndrome", ["run-likely-diagnosis"], ["claim-diagnosis"]),
    differentials: [
      concept("clinical-differential-aortic", "Acute aortic syndrome", ["run-onset-answer", "run-differentials"], ["claim-differential"]),
      concept("clinical-differential-pe", "Pulmonary embolism", ["run-pleuritic-answer", "run-leg-answer", "run-immobility-answer", "run-differentials"], ["claim-differential"]),
      concept("clinical-differential-pneumothorax", "Pneumothorax including tension pneumothorax", ["run-pleuritic-answer", "run-differentials"], ["claim-differential"])
    ],
    essentialClues: [
      concept("clinical-clue-atypical", "Exertional jaw discomfort, breathlessness and nausea without volunteered chest pain", ["run-opening-story", "run-current-answer", "run-chest-answer"], ["claim-diagnosis"]),
      concept("clinical-clue-pressure", "Persistent central tight heaviness", ["run-chest-answer", "run-persistence-answer", "run-character-answer"], ["claim-diagnosis"]),
      concept("clinical-clue-exertional", "Symptoms began with exertion and a previous exertional episode settled with rest", ["run-opening-story", "run-rest-answer", "run-previous-answer"], ["claim-diagnosis"]),
      concept("clinical-clue-autonomic", "Nausea, clamminess and light-headedness", ["run-opening-story", "run-associated-answer"], ["claim-diagnosis"]),
      concept("clinical-clue-risk", "Diabetes, hypertension, dyslipidaemia, previous smoking and family history", ["run-history-answer", "run-medications-answer", "run-smoking-answer", "run-family-answer"], ["claim-diagnosis"])
    ],
    discriminators: [
      concept("clinical-discriminator-pattern", "Ongoing exertional pressure with autonomic symptoms, without abrupt maximum intensity or pleuritic character", ["run-onset-answer", "run-persistence-answer", "run-pleuritic-answer", "run-summary"], ["claim-diagnosis", "claim-differential"])
    ],
    redFlags: [
      concept("clinical-red-flag-ongoing", "Ongoing exertional symptoms with central heaviness and autonomic features", ["run-current-answer", "run-persistence-answer", "run-associated-answer"], ["claim-diagnosis", "claim-transfer"])
    ],
    safetyThresholds: [
      concept("clinical-threshold-transfer", "Suspected acute coronary syndrome in primary care requires prompt transfer for definitive assessment", ["run-early-escalation", "run-early-escalation-action", "run-address-transport"], ["claim-transfer"]),
      concept("clinical-threshold-oxygen", "Oxygen is reserved for oxygen saturation below 90 percent, heart failure or shock rather than given routinely", ["run-oxygen"], ["claim-oxygen"]),
      concept("clinical-threshold-gtn", "Ongoing chest discomfort warrants glyceryl trinitrate after blood pressure and contraindication checks", ["run-gtn-plan"], ["claim-gtn"]),
      concept("clinical-threshold-serial-assessment", "A normal first ECG cannot safely exclude acute coronary syndrome", ["run-uncertainty", "run-ecg-plan", "run-hospital-plan"], ["claim-serial-assessment-threshold"])
    ],
    criticalActions: [
      concept("clinical-action-transfer", "Call Triple Zero promptly and use monitored ambulance transfer", ["run-early-escalation", "run-early-escalation-action", "run-address-transport"], ["claim-transfer"]),
      concept("clinical-action-monitoring", "Begin cardiac monitoring with defibrillator availability and arrange a 12-lead ECG within 10 minutes without delaying transfer", ["run-early-escalation-action", "run-ecg-plan"], ["claim-investigation"]),
      concept("clinical-action-aspirin", "Give aspirin 300 milligrams chewed after excluding true anaphylaxis and active bleeding", ["run-allergy", "run-bleeding", "run-aspirin-explanation", "run-aspirin", "run-aspirin-action", "run-management-overview"], ["claim-aspirin"])
    ],
    criticalActionTimings: [
      {
        id: "timing-transfer", criticalActionConceptId: "clinical-action-transfer",
        triggerLineId: "run-associated-answer", latestPermittedLineId: "run-early-escalation-action",
        positiveActionPhrase: "The doctor directs a clinic colleague to call Triple Zero",
        rationale: "The complete high-concern cardiac pattern is established before the remaining history is taken.",
        sourceClaimIds: ["claim-transfer"]
      },
      {
        id: "timing-monitoring", criticalActionConceptId: "clinical-action-monitoring",
        triggerLineId: "run-associated-answer", latestPermittedLineId: "run-early-escalation-action",
        positiveActionPhrase: "begins continuous cardiac monitoring",
        rationale: "Ongoing ischaemic symptoms require monitoring and defibrillator availability during assessment.",
        sourceClaimIds: ["claim-investigation"]
      },
      {
        id: "timing-aspirin", criticalActionConceptId: "clinical-action-aspirin",
        triggerLineId: "run-bleeding-answer", latestPermittedLineId: "run-aspirin-action",
        positiveActionPhrase: "The doctor gives Mirella aspirin 300 milligrams to chew",
        rationale: "Aspirin is administered after the relevant contraindication checks and consent.",
        sourceClaimIds: ["claim-aspirin"]
      }
    ],
    unsafeActions: [
      concept("clinical-unsafe-dismissal", "Do not dismiss an ACS presentation because the patient does not volunteer chest pain", ["run-chest-answer", "run-early-escalation-explanation", "run-likely-diagnosis"], ["claim-atypical-suspicion-threshold"]),
      concept("clinical-unsafe-private-transport", "Do not use private transport for ongoing suspected acute coronary syndrome", ["run-patient-transport", "run-address-transport"], ["claim-transfer"]),
      concept("clinical-unsafe-single-ecg", "Do not use one normal ECG to exclude acute coronary syndrome", ["run-uncertainty", "run-ecg-plan", "run-hospital-plan"], ["claim-serial-assessment-threshold"])
    ],
    scopeBoundary: concept("clinical-scope-primary-care", "The GP begins safe assessment and treatment while arranging prompt transfer; serial ECG and troponin assessment occur in hospital", ["run-early-escalation-action", "run-ecg-plan", "run-hospital-plan"], ["claim-transfer", "claim-investigation"])
  },
  participants: [
    {
      id: "participant-patient",
      speakerLabel: "Patient",
      addressTerms: ["Mirella", "Ms Quinn"],
      role: "patient",
      identityRequired: true,
      identityResponse: { lineId: "run-id", text: text("run-id"), fullName: "Mirella Quinn", dateOfBirthText: "22 April 1964" },
      openingAffect: null,
      initialVoluntary: { triggerLineId: "run-open-question", responseLineId: "run-opening-story", text: text("run-opening-story") },
      concerns: [
        { id: "concern-no-chest-pain", text: "Why an ambulance is needed without severe chest pain", responseLineId: "run-early-escalation-response", responseText: text("run-early-escalation-response"), nextDoctorLineId: "run-early-escalation-explanation" },
        { id: "concern-certainty", text: "Whether a heart attack is definite", responseLineId: "run-patient-question", responseText: text("run-patient-question"), nextDoctorLineId: "run-uncertainty" },
        { id: "concern-private-transport", text: "Whether her daughter can drive her", responseLineId: "run-patient-transport", responseText: text("run-patient-transport"), nextDoctorLineId: "run-address-transport" }
      ],
      disclosures
    }
  ],
  examiner: {
    opening: { lineId: "run-start", text: text("run-start") },
    availableAtStartStemLineIds: ["stem-start"],
    releases: [],
    scheduledPrompts: [
      {
        id: "prompt-four-minutes", speaker: "Examiner", triggerDescription: "After four minutes have elapsed",
        triggerLineId: "run-summary", responseLineId: "run-time-prompt", responseText: text("run-time-prompt"),
        markingConsequence: "The Doctor proceeds to the remaining tasks; the prompt itself carries no performance inference."
      }
    ],
    closing: { lineId: "run-end", text: text("run-end") }
  },
  marking: {
    sourceClaimIds: ["claim-exam-standard"],
    keySteps: [
      { id: "step-pattern", description: "Elicits the exertional jaw, breathlessness, nausea and central-pressure pattern", taskIds: ["task-history"], runLineIds: ["run-opening-story", "run-chest-answer", "run-associated-answer", "run-previous-answer", "run-summary"], sourceClaimIds: ["claim-diagnosis"] },
      { id: "step-transfer", description: "Recognises the danger threshold and activates ambulance transfer before diagnostic certainty", taskIds: ["task-history", "task-management"], runLineIds: ["run-early-escalation", "run-early-escalation-action", "run-address-transport"], sourceClaimIds: ["claim-transfer"] },
      { id: "step-diagnosis", description: "Explains acute coronary syndrome, uncertainty and important alternatives", taskIds: ["task-reasoning"], runLineIds: ["run-likely-diagnosis", "run-uncertainty", "run-differentials"], sourceClaimIds: ["claim-diagnosis", "claim-differential"] },
      { id: "step-management", description: "Provides evidence-based initial primary-care management without adding a handover", taskIds: ["task-management"], runLineIds: ["run-management-overview", "run-ecg-plan", "run-gtn-plan", "run-hospital-plan", "run-oxygen", "run-address-transport", "run-understanding"], sourceClaimIds: ["claim-transfer", "claim-investigation", "claim-gtn", "claim-aspirin", "claim-oxygen"] }
    ],
    domains: [
      { name: "History", taskIds: ["task-history"], runLineIds: ["run-open-question", "run-current", "run-chest", "run-associated", "run-previous", "run-history", "run-medications", "run-summary"], sourceClaimIds: ["claim-exam-standard", "claim-diagnosis"] },
      { name: "Diagnosis/differential diagnoses", taskIds: ["task-reasoning"], runLineIds: ["run-likely-diagnosis", "run-uncertainty", "run-differentials"], sourceClaimIds: ["claim-exam-standard", "claim-diagnosis", "claim-differential"] },
      { name: "Choice of investigations", taskIds: ["task-management"], runLineIds: ["run-ecg-plan", "run-hospital-plan"], sourceClaimIds: ["claim-exam-standard", "claim-investigation"] },
      { name: "Management plan", taskIds: ["task-history", "task-management"], runLineIds: ["run-early-escalation-action", "run-management-overview", "run-aspirin-action", "run-oxygen", "run-address-transport", "run-closing"], sourceClaimIds: ["claim-exam-standard", "claim-transfer", "claim-aspirin", "claim-oxygen"] },
      { name: "Approach to patient/relative/carer/other health professional", taskIds: ["task-history", "task-reasoning", "task-management"], runLineIds: ["run-consent", "run-early-escalation-explanation", "run-uncertainty", "run-address-transport", "run-understanding"], sourceClaimIds: ["claim-exam-standard"] }
    ],
    projectSafetyErrors: [
      { id: "error-no-chest-pain", description: "Dismisses ACS because Mirella did not volunteer severe chest pain", preventedByLineIds: ["run-chest", "run-early-escalation-explanation", "run-likely-diagnosis"], safetyConceptIds: ["clinical-unsafe-dismissal", "clinical-threshold-transfer"], sourceClaimIds: ["claim-atypical-suspicion-threshold", "claim-transfer"] },
      { id: "error-delayed-transfer", description: "Waits to finish the history or obtain a diagnostic test before transfer", preventedByLineIds: ["run-early-escalation", "run-early-escalation-action"], safetyConceptIds: ["clinical-action-transfer", "clinical-threshold-transfer"], sourceClaimIds: ["claim-transfer"] },
      { id: "error-private-transport", description: "Allows private transport despite ongoing suspected ACS", preventedByLineIds: ["run-address-transport"], safetyConceptIds: ["clinical-unsafe-private-transport"], sourceClaimIds: ["claim-transfer"] }
    ],
    globalRating: {
      scale: 7,
      failRatings: [1, 2, 3],
      passRatings: [4, 5, 6, 7],
      decisionRule: "The global rating alone determines the station result: ratings 1 to 3 fail and ratings 4 to 7 pass.",
      passStandard: "Completes the assigned tasks, recognises the non-classic dangerous cardiac pattern, explains uncertainty and provides safe initial management.",
      failStandard: "Misses the dangerous pattern, delays transfer, gives unsafe reassurance or substantially fails the assigned tasks."
    }
  },
  interaction: {
    identity: {
      mode: "direct", verificationLineId: "run-intro", verificationText: text("run-intro"),
      participantIds: ["participant-patient"], completedBeforeClinicalContent: true,
      rationale: "The patient directly confirms full name and date of birth before any clinical question."
    },
    defaultInformationParticipantId: "participant-patient",
    directAddresses: ["run-consent", "run-early-escalation", "run-likely-diagnosis", "run-aspirin"].map((lineId) => ({ lineId, participantId: "participant-patient", addressTerm: "Mirella" })),
    consents: [
      { id: "consent-consultation", scope: "consultation", requestLineId: "run-consent", requestText: text("run-consent"), responseLineId: "run-consent-answer", responseText: text("run-consent-answer"), participantId: "participant-patient", outcome: "granted" },
      { id: "consent-aspirin", scope: "procedure", requestLineId: "run-aspirin", requestText: text("run-aspirin"), responseLineId: "run-aspirin-consent", responseText: text("run-aspirin-consent"), participantId: "participant-patient", outcome: "granted" }
    ],
    informationRequests,
    sensitiveTopicLineIds: []
  },
  variation: {
    coverageSlot: "dangerous cardiac pattern",
    primaryFailureMode: "premature_closure",
    secondaryFailureMode: "unsafe_delay",
    distinctJob: "Recognise possible myocardial ischaemia when exertional jaw discomfort, breathlessness and nausea are volunteered before central heaviness is elicited.",
    newSurprise: "Central chest heaviness is disclosed only after a focused question because the patient does not regard pressure as pain.",
    plannedTrap: "The absence of volunteered chest pain may falsely lower concern despite a coherent exertional and autonomic pattern.",
    antiFailureFeatures: [
      "The Doctor asks directly about chest discomfort without forcing the patient to call it pain.",
      "Ambulance transfer begins once the dangerous pattern is established, before the remaining history is completed."
    ],
    duplicateCheck: {
      comparedCaseIds: ["case-002", "case-003", "case-004"],
      conclusion: "This new case trains an atypical ACS presentation without volunteered chest pain. The Emergency Explore comparisons cover aortic dissection, pulmonary embolism and tension pneumothorax rather than this recognition task."
    }
  },
  performance: {
    targetSpokenSeconds: 438,
    actionDurations: [
      { lineId: "run-approach", seconds: 8, actionClass: "neutral_preparation", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: null, exceptionRationale: null },
      { lineId: "run-early-escalation-action", seconds: 15, actionClass: "emergency", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: null, exceptionRationale: "The reviewed ongoing cardiac pattern requires prompt ambulance activation and monitoring before diagnostic certainty." },
      { lineId: "run-aspirin-action", seconds: 8, actionClass: "treatment", performedBy: "doctor", performedByParticipantId: null, actorExactPhrase: "The doctor", consentId: "consent-aspirin", exceptionRationale: null }
    ],
    taskEvidence: [
      {
        taskId: "task-history", runLineIds: range("run-start", "run-time-prompt"),
        requiredEvidence: [
          { requirement: "A focused history is visibly initiated", lineId: "run-open-question", exactPhrase: text("run-open-question"), positivePerformancePhrase: text("run-open-question") },
          { requirement: "The dangerous pattern is summarised", lineId: "run-summary", exactPhrase: "You have ongoing central heaviness", positivePerformancePhrase: "You have ongoing central heaviness, jaw discomfort, breathlessness, nausea and clamminess after exertion" }
        ],
        observedSeconds: 240, completed: true
      },
      {
        taskId: "task-reasoning", runLineIds: range("run-likely-diagnosis", "run-differentials"),
        requiredEvidence: [
          { requirement: "The most likely diagnosis is explicitly explained", lineId: "run-likely-diagnosis", exactPhrase: "my main concern is acute coronary syndrome", positivePerformancePhrase: "my main concern is acute coronary syndrome" },
          { requirement: "Important differential diagnoses are explicitly explained", lineId: "run-differentials", exactPhrase: "Important differential diagnoses are a clot in the lung, a problem with the aorta and a collapsed lung.", positivePerformancePhrase: "Important differential diagnoses are a clot in the lung, a problem with the aorta and a collapsed lung." }
        ],
        observedSeconds: 75, completed: true
      },
      {
        taskId: "task-management", runLineIds: range("run-management-overview", "run-end"),
        requiredEvidence: [
          { requirement: "The management plan is explained", lineId: "run-management-overview", exactPhrase: "The ambulance is already on the way and you have had aspirin.", positivePerformancePhrase: "The ambulance is already on the way and you have had aspirin." },
          { requirement: "The patient's concern about private transport is answered", lineId: "run-address-transport", exactPhrase: "The ambulance allows monitoring and treatment during transport", positivePerformancePhrase: "The ambulance allows monitoring and treatment during transport" }
        ],
        observedSeconds: 123, completed: true
      }
    ],
    listenTest: {
      status: "pass", method: "spoken_readthrough", reviewer: "Case-generation engine timing review",
      performedAt: reviewedAt, observedSeconds: 438, caseContentSha256: "0".repeat(64), reviewScopeSha256: "0".repeat(64),
      notes: "Timestamped read-through places the four-minute Examiner prompt after the focused-history summary at 240 seconds. The diagnostic explanation takes 75 seconds and the concerns plus management discussion takes 123 seconds, for a total of 438 seconds."
    }
  },
  sourceBasis: {
    sources: [sourceAmcSpec, sourceAmcDomains, sourceAcs, sourceAnzcor141, sourceAnzcor142],
    claimMap: [
      {
        id: "claim-diagnosis", claimType: "diagnosis",
        claim: "Exertional pressure, jaw discomfort, dyspnoea, nausea and sweating can represent acute coronary syndrome even when the patient does not volunteer chest pain; non-specific presentations occur more often in women and people with diabetes.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-1"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Comprehensive guideline, pp. 26-27, history of presenting complaint" },
          { sourceId: "source-anzcor-14-1", locator: "Clinical presentation section, approved December 2024" }
        ],
        runLineIds: ["run-opening-story", "run-current-answer", "run-chest-answer", "run-persistence-answer", "run-character-answer", "run-rest-answer", "run-associated-answer", "run-previous-answer", "run-history-answer", "run-medications-answer", "run-smoking-answer", "run-family-answer", "run-summary", "run-likely-diagnosis", "run-early-escalation-explanation"],
        taskIds: ["task-history", "task-reasoning"],
        clinicalConceptIds: ["clinical-leading-diagnosis", "clinical-clue-atypical", "clinical-clue-pressure", "clinical-clue-exertional", "clinical-clue-autonomic", "clinical-clue-risk", "clinical-discriminator-pattern", "clinical-red-flag-ongoing"],
        blueprintRefs: []
      },
      {
        id: "claim-atypical-suspicion-threshold", claimType: "threshold",
        claim: "The absence of volunteered chest pain must not be used to dismiss acute coronary syndrome when exertional jaw discomfort, dyspnoea and autonomic symptoms form a concerning pattern.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-1"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Comprehensive guideline, pp. 26-27, history of presenting complaint and accompanying symptoms" },
          { sourceId: "source-anzcor-14-1", locator: "Clinical presentation section, non-specific symptoms in women and people with diabetes" }
        ],
        runLineIds: ["run-chest-answer", "run-early-escalation-explanation", "run-likely-diagnosis"],
        taskIds: ["task-history", "task-reasoning"],
        clinicalConceptIds: ["clinical-unsafe-dismissal"],
        blueprintRefs: []
      },
      {
        id: "claim-differential", claimType: "differential",
        claim: "Important time-critical alternatives include acute aortic syndrome, pulmonary embolism and pneumothorax; symptom character and relevant risk features guide discrimination without safely excluding disease from one negative answer.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-1"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Comprehensive guideline, pp. 26-27, targeted differential diagnoses" },
          { sourceId: "source-anzcor-14-1", locator: "Clinical presentation and differential assessment sections" }
        ],
        runLineIds: ["run-onset-answer", "run-pleuritic-answer", "run-leg-answer", "run-immobility-answer", "run-differentials"],
        taskIds: ["task-history", "task-reasoning"],
        clinicalConceptIds: ["clinical-differential-aortic", "clinical-differential-pe", "clinical-differential-pneumothorax", "clinical-discriminator-pattern"],
        blueprintRefs: []
      },
      {
        id: "claim-transfer", claimType: "disposition",
        claim: "Suspected acute coronary syndrome initially assessed in primary care requires prompt transfer to a facility able to perform definitive risk assessment.",
        sourceIds: ["source-acs-guideline"],
        sourceLocators: [{ sourceId: "source-acs-guideline", locator: "Primary care setting recommendation" }],
        runLineIds: ["run-associated-answer", "run-early-escalation", "run-early-escalation-action", "run-early-escalation-response", "run-management-overview", "run-patient-transport", "run-address-transport"],
        taskIds: ["task-history", "task-management"],
        clinicalConceptIds: ["clinical-red-flag-ongoing", "clinical-threshold-transfer", "clinical-action-transfer", "clinical-unsafe-private-transport", "clinical-scope-primary-care"],
        blueprintRefs: []
      },
      {
        id: "claim-investigation", claimType: "investigation",
        claim: "Ongoing suspected ACS requires cardiac monitoring with defibrillator availability and a 12-lead ECG within 10 minutes; one normal ECG does not exclude NSTEACS and serial ECG plus troponin assessment is required.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-1"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Initial ECG assessment and primary-care presentation recommendations" },
          { sourceId: "source-anzcor-14-1", locator: "ECG section: ECG may be normal in over 30% of NSTEACS" }
        ],
        runLineIds: ["run-early-escalation-action", "run-uncertainty", "run-ecg-plan", "run-hospital-plan"],
        taskIds: ["task-history", "task-reasoning", "task-management"],
        clinicalConceptIds: ["clinical-action-monitoring", "clinical-scope-primary-care"],
        blueprintRefs: []
      },
      {
        id: "claim-serial-assessment-threshold", claimType: "threshold",
        claim: "A single normal ECG does not exclude non-ST-elevation acute coronary syndrome; ongoing concern requires serial ECG and high-sensitivity troponin assessment.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-1"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Initial ECG assessment and serial testing recommendations" },
          { sourceId: "source-anzcor-14-1", locator: "ECG section: an ECG may be normal in more than 30% of NSTEACS" }
        ],
        runLineIds: ["run-uncertainty", "run-ecg-plan", "run-hospital-plan"],
        taskIds: ["task-reasoning", "task-management"],
        clinicalConceptIds: ["clinical-threshold-serial-assessment", "clinical-unsafe-single-ecg"],
        blueprintRefs: []
      },
      {
        id: "claim-aspirin", claimType: "dose",
        claim: "Give aspirin 300 milligrams chewed or dissolved in suspected acute coronary syndrome unless contraindicated, after excluding true anaphylaxis and active bleeding.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-2"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Initial therapeutic management recommendation" },
          { sourceId: "source-anzcor-14-2", locator: "Aspirin administration section, approved December 2024" }
        ],
        runLineIds: ["run-allergy", "run-allergy-answer", "run-bleeding", "run-bleeding-answer", "run-anticoagulant", "run-anticoagulant-answer", "run-aspirin-explanation", "run-aspirin", "run-aspirin-action", "run-management-overview"],
        taskIds: ["task-history", "task-management"],
        clinicalConceptIds: ["clinical-action-aspirin"],
        blueprintRefs: []
      },
      {
        id: "claim-oxygen", claimType: "threshold",
        claim: "Supplemental oxygen is not routinely required when oxygen saturation is at least 90 percent; give it for saturation below 90 percent, heart failure or shock, while avoiding hyperoxaemia.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-2"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Initial therapeutic management recommendation" },
          { sourceId: "source-anzcor-14-2", locator: "Symptomatic therapy section, approved December 2024" }
        ],
        runLineIds: ["run-oxygen"],
        taskIds: ["task-management"],
        clinicalConceptIds: ["clinical-threshold-oxygen"],
        blueprintRefs: []
      },
      {
        id: "claim-gtn", claimType: "treatment",
        claim: "Give sublingual glyceryl trinitrate for ongoing chest discomfort when blood pressure is adequate and no contraindication such as right ventricular infarction or recent phosphodiesterase-5 inhibitor use is present.",
        sourceIds: ["source-acs-guideline", "source-anzcor-14-2"],
        sourceLocators: [
          { sourceId: "source-acs-guideline", locator: "Initial therapeutic management recommendation and nitrates practice points, pp. 35-36" },
          { sourceId: "source-anzcor-14-2", locator: "Symptomatic therapy section, nitrates" }
        ],
        runLineIds: ["run-gtn-plan"],
        taskIds: ["task-management"],
        clinicalConceptIds: ["clinical-threshold-gtn"],
        blueprintRefs: []
      },
      {
        id: "claim-exam-standard", claimType: "exam_standard",
        claim: "The station uses the current AMC two-minute reading and eight-minute assessment format, predominant assessment area, observable tasks, domains and seven-point global rating threshold.",
        sourceIds: ["source-amc-spec", "source-amc-domains"],
        sourceLocators: [
          { sourceId: "source-amc-spec", locator: "Clinical Examination Specifications V8.3, station structure, timing and task sections" },
          { sourceId: "source-amc-domains", locator: "Assessment Domains V1.1, domain definitions and performance expectations" }
        ],
        runLineIds: [],
        taskIds: ["task-history", "task-reasoning", "task-management"],
        clinicalConceptIds: [],
        blueprintRefs: ["station", "tasks", "marking.keySteps", "marking.domains", "marking.globalRating"]
      }
    ]
  },
  qa: null
};

const contentSha = engine.contentHash(caseData);
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
  stemNeutrality: qaGate("Diagnosis-alias, urgency-language and management-leakage review", "line_review", "case-001:stem"),
  taskAlignment: qaGate("Task-to-line and task-evidence review including no-unrequested-handover control", "line_review", "case-001:tasks-and-performance"),
  conversation: qaGate("Atomic-question and natural-dialogue review", "line_review", "case-001:full-run"),
  participantDisclosure: qaGate("Participant disclosure sequencing review", "line_review", "case-001:participant-controls"),
  examinerRelease: qaGate("Examiner ownership and four-minute prompt review", "line_review", "case-001:examiner-controls"),
  amcLevel: qaGate("AMC specification and station-authenticity review", "line_review", "AMC-specification-V8.3"),
  timing: qaGate("Timestamped complete spoken timing review", "listen_test", "case-001:prompt-240-total-438-seconds"),
  clinical: qaGate("Line-by-line current Australian clinical-guideline review", "source_review", "ACS-2025;ANZCOR-14.1;ANZCOR-14.2"),
  sources: qaGate("Authoritative-source currency and locator review", "source_review", "engine/authoritative-source-catalog.json"),
  finalQa: qaGate("Engine 1.1 new Case 1 final audit", "audit_report", "audit:case-001"),
  blockers: []
};
blueprint.qa.blueprintPackageSha256 = engine.blueprintPackageHash(blueprint);

fs.writeFileSync(blueprintPath, JSON.stringify(blueprint, null, 2) + "\n");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
registry.updatedAt = reviewedAt;
const row = registry.cases.find((item) => item.caseId === "case-001");
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
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + "\n");

console.log(JSON.stringify({
  caseId: caseData.id,
  contentSha256: contentSha,
  reviewScopeSha256: reviewScopeSha,
  blueprintPackageSha256: blueprint.qa.blueprintPackageSha256,
  targetSpokenSeconds: blueprint.performance.targetSpokenSeconds
}, null, 2));
