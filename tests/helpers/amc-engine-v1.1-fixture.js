"use strict";

const registryTemplate = require("../../registry-library/case-registry.v1.1.json");
const { QA_FIELDS, blueprintPackageHash, blueprintReviewScopeHash, contentHash } = require("../../scripts/amc-engine-lib.js");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function line(id, text) {
  return { id, text };
}

function turn(id, speaker, kind, lineId, text) {
  return { id, speaker, kind, lines: [line(lineId, text)] };
}

function concept(id, text, runLineIds, sourceClaimIds) {
  return { id, text, runLineIds, sourceClaimIds };
}

function gate(name) {
  let evidenceType = "automated_test";
  if (/clinical|source/i.test(name)) evidenceType = "source_review";
  else if (/timing/i.test(name)) evidenceType = "listen_test";
  else if (/conversation|disclosure|Examiner|AMC level/i.test(name)) evidenceType = "line_review";
  else if (/final QA/i.test(name)) evidenceType = "audit_report";
  return {
    status: "pass",
    method: "Executable " + name + " review",
    reviewer: "Engine fixture reviewer",
    reviewedAt: "2026-07-14T21:30:00+10:00",
    reviewScopeSha256: null,
    evidence: [{ type: evidenceType, reference: "fixture:" + name.replace(/\s+/g, "-").toLowerCase() }]
  };
}

function makeValidTriplet() {
  const turns = [
    turn("c000-turn-start", "Examiner", "spoken", "c000-run-start", "You may begin."),
    turn("c000-turn-approach", "Action", "action", "c000-run-approach", "The doctor performs hand hygiene, checks that the room is private and approaches the seated patient."),
    turn("c000-turn-identity-question", "Doctor", "spoken", "c000-run-identity-question", "Hello, I am Dr Lee, one of the doctors here. Could you confirm your full name and date of birth?"),
    turn("c000-turn-identity-response", "Patient", "spoken", "c000-run-identity-response", "My name is Daniel Morgan, and my date of birth is 14 May 1966."),
    turn("c000-turn-consent-question", "Doctor", "spoken", "c000-run-consent-question", "Thank you, Daniel. Is it okay if I ask focused questions about the chest discomfort?"),
    turn("c000-turn-consent-response", "Patient", "spoken", "c000-run-consent-response", "Yes, that is fine."),
    turn("c000-turn-opening-question", "Doctor", "spoken", "c000-run-opening-question", "What brought you in today?"),
    turn("c000-turn-opening-response", "Patient", "spoken", "c000-run-opening-response", "I was walking back to my office after lunch when a heavy pressure developed across the centre of my chest. I stopped and sat down, but it did not settle. It frightened me because it felt deeper than indigestion and I became sweaty while a colleague drove me here."),
    turn("c000-turn-onset-question", "Doctor", "spoken", "c000-run-onset-question", "When did it begin?"),
    turn("c000-turn-onset-response", "Patient", "spoken", "c000-run-onset-response", "It began about forty minutes ago and reached its current level within several minutes. It has remained present continuously since then. I have not had an identical episode before, although over the past month I twice noticed a much milder tight feeling while hurrying uphill that stopped after resting."),
    turn("c000-turn-character-question", "Doctor", "spoken", "c000-run-character-question", "What does the discomfort feel like?"),
    turn("c000-turn-character-response", "Patient", "spoken", "c000-run-character-response", "It feels like a broad, heavy pressure rather than a sharp point. Taking a deep breath, moving my shoulders and pressing on my chest do not change it. It is about seven out of ten now. Sitting still has not removed it, and antacid tablets from the office did nothing."),
    turn("c000-turn-radiation-question", "Doctor", "spoken", "c000-run-radiation-question", "Does it spread anywhere?"),
    turn("c000-turn-radiation-response", "Patient", "spoken", "c000-run-radiation-response", "The pressure spreads into my left shoulder and down the inside of my left arm. I also feel an ache near my lower jaw. It does not tear through to my back. There is no one-sided pain under my ribs, and I have not coughed up blood."),
    turn("c000-turn-associated-question", "Doctor", "spoken", "c000-run-associated-question", "What else have you noticed with it?"),
    turn("c000-turn-associated-response", "Patient", "spoken", "c000-run-associated-response", "I became clammy and slightly nauseated, and I am more short of breath than usual. I have not fainted. There is no fever, cough or recent illness. My legs are not swollen or painful. I have not had recent surgery, a long flight or prolonged bed rest."),
    turn("c000-turn-background-question", "Doctor", "spoken", "c000-run-background-question", "What medical conditions do you have?"),
    turn("c000-turn-background-response", "Patient", "spoken", "c000-run-background-response", "My general practitioner treats high blood pressure and high cholesterol. I was told my blood sugar was close to the diabetic range last year. I smoke about ten cigarettes each day. My father had a heart attack at fifty-four. I have no known bleeding disorder, stomach ulcer or previous stroke."),
    turn("c000-turn-medicine-question", "Doctor", "spoken", "c000-run-medicine-question", "Which medicines do you take?"),
    turn("c000-turn-medicine-response", "Patient", "spoken", "c000-run-medicine-response", "I take perindopril and atorvastatin each morning, although I sometimes miss the atorvastatin. I do not take warfarin, apixaban or another blood thinner. I have not used sildenafil or a similar medicine. I have no known medicine allergy and have never had a serious reaction to aspirin."),
    turn("c000-turn-summary", "Doctor", "spoken", "c000-run-summary", "You developed persistent central pressure while walking, with left arm and jaw discomfort, sweating, nausea and breathlessness. Your cardiovascular risk factors increase my concern. The absence of tearing back pain, pleuritic pain, fever and obvious clot risk makes some alternatives less likely, but I will keep assessing for them."),
    turn("c000-turn-observations-request", "Doctor", "spoken", "c000-run-observations-request", "Please provide the current observations and examination findings."),
    turn("c000-turn-observations-response", "Examiner", "finding", "c000-run-observations-response", "Daniel is alert and looks pale and clammy. His pulse is 104 and regular, blood pressure is 148 over 88 in both arms, respiratory rate is 22, oxygen saturation is 96 percent on room air and temperature is 36.7 degrees Celsius. Heart sounds are normal, both lungs are clear, peripheral pulses are equal and there is no calf swelling."),
    turn("c000-turn-explanation", "Doctor", "spoken", "c000-run-explanation", "Daniel, this pattern is most concerning for reduced blood flow to the heart and may represent an acute coronary syndrome. Reflux is possible after food, but it does not explain the full pattern. Aortic disease and a lung clot are important alternatives, although your current features make them less likely. I recommend immediate assessment and treatment while we confirm the cause."),
    turn("c000-turn-concern-question", "Doctor", "spoken", "c000-run-concern-question", "What worries you most about this?"),
    turn("c000-turn-concern-response", "Patient", "spoken", "c000-run-concern-response", "I am worried that this could be a heart attack because my father was young when his happened. I also feel embarrassed that I blamed lunch and did not call an ambulance. I want to know whether I have caused harm by waiting and whether I will be able to return to work."),
    turn("c000-turn-concern-answer", "Doctor", "spoken", "c000-run-concern-answer", "You did the right thing by seeking help, and this is not your fault. We cannot yet tell whether heart muscle has been damaged, so I will arrange an ECG, repeated blood tests and monitored transfer for urgent care. We will treat symptoms safely, watch for changes and explain each result. Work can wait until the diagnosis and recovery plan are clear."),
    turn("c000-turn-end", "Examiner", "spoken", "c000-run-end", "Thank you. The station is complete.")
  ];

  const caseData = {
    id: "case-000",
    globalId: "CP-C000",
    registryId: "CP-P1-C000",
    displayNumber: "Case 0",
    title: "Chest discomfort after lunch",
    status: "audited",
    statusLabel: "Exam case audited",
    note: "Original synthetic practice station used only to prove the production contract. It is not official AMC material.",
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 1, title: "Dangerous Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History Taking"
    },
    stem: {
      lines: [
        line("c000-stem-role", "You are a doctor working in a suburban general practice clinic."),
        line("c000-stem-person", "Mr Daniel Morgan, a 60-year-old man, has attended with chest discomfort after lunch."),
        line("c000-stem-examiner", "The examiner will provide observations and examination findings when requested.")
      ],
      tasks: [
        { id: "task-history", text: "Take a focused history.", timing: "6 minutes" },
        { id: "task-explain", text: "Explain your assessment and proposed management to Daniel.", timing: "1 minute" },
        { id: "task-concern", text: "Address Daniel's concerns.", timing: "1 minute" }
      ]
    },
    run: {
      sections: [{ id: "c000-run-consultation", heading: "Complete consultation", turns }]
    }
  };

  const diagnosisIds = [
    "clinical-leading-diagnosis",
    "clinical-differential-aortic",
    "clinical-differential-pe",
    "clinical-clue-pressure",
    "clinical-clue-radiation",
    "clinical-discriminator-pattern"
  ];
  const safetyIds = [
    "clinical-red-flag-persistent",
    "clinical-threshold-transfer",
    "clinical-action-assessment",
    "clinical-unsafe-dismissal",
    "clinical-scope"
  ];

  const blueprint = {
    blueprintVersion: "1.1.0",
    caseId: "case-000",
    registryId: "CP-P1-C000",
    registryVersion: "1.1.0",
    revision: 1,
    releaseStatus: "audited",
    station: {
      displayNumber: caseData.displayNumber,
      title: caseData.title,
      visibleStatus: caseData.status,
      statusLabel: caseData.statusLabel,
      note: caseData.note,
      phase: clone(caseData.phase),
      pattern: clone(caseData.pattern),
      grammar: "consultation",
      predominantArea: "History Taking",
      modality: "in_person",
      setting: "Suburban general practice clinic",
      recipient: "Daniel Morgan",
      readingMinutes: 2,
      assessmentMinutes: 8
    },
    stem: {
      diagnosisVisibility: "hidden_to_be_derived",
      diagnosisTerms: ["Acute coronary syndrome", "ACS", "myocardial infarction", "MI", "acute myocardial infarction", "AMI", "STEMI", "NSTEMI", "unstable angina", "heart attack", "coronary ischaemia", "cardiac ischaemia", "myocardial ischaemia", "acute myocardial ischaemia", "coronary event"],
      urgencyVisibility: "not_signalled",
      lines: [
        { id: "c000-stem-role", text: caseData.stem.lines[0].text, purpose: "role_setting" },
        { id: "c000-stem-person", text: caseData.stem.lines[1].text, purpose: "person_presentation" },
        { id: "c000-stem-examiner", text: caseData.stem.lines[2].text, purpose: "examiner_arrangement" }
      ],
      forbiddenTerms: ["acute coronary syndrome", "ACS", "myocardial infarction", "MI", "acute myocardial infarction", "AMI", "STEMI", "NSTEMI", "unstable angina", "heart attack", "coronary ischaemia", "cardiac ischaemia", "myocardial ischaemia", "acute myocardial ischaemia", "coronary event", "urgent", "immediate treatment"]
    },
    tasks: [
      { id: "task-history", text: caseData.stem.tasks[0].text, actionVerb: "Take", assessmentArea: "History Taking", recipient: "Daniel", visibleTiming: "6 minutes", internalMinutes: 6, primary: true },
      { id: "task-explain", text: caseData.stem.tasks[1].text, actionVerb: "Explain", assessmentArea: "Management/Counselling/Education", recipient: "Daniel", visibleTiming: "1 minute", internalMinutes: 1, primary: false },
      { id: "task-concern", text: caseData.stem.tasks[2].text, actionVerb: "Address", assessmentArea: "Management/Counselling/Education", recipient: "Daniel", visibleTiming: "1 minute", internalMinutes: 1, primary: false }
    ],
    clinicalTruth: {
      leadingDiagnosis: concept("clinical-leading-diagnosis", "Acute coronary syndrome", ["c000-run-explanation"], ["claim-diagnosis"]),
      differentials: [
        concept("clinical-differential-aortic", "Acute aortic syndrome", ["c000-run-radiation-response", "c000-run-explanation"], ["claim-diagnosis"]),
        concept("clinical-differential-pe", "Pulmonary embolism", ["c000-run-associated-response", "c000-run-explanation"], ["claim-diagnosis"])
      ],
      essentialClues: [
        concept("clinical-clue-pressure", "Persistent central pressure on exertion", ["c000-run-opening-response", "c000-run-character-response"], ["claim-diagnosis"]),
        concept("clinical-clue-radiation", "Left arm and jaw radiation with autonomic symptoms", ["c000-run-radiation-response", "c000-run-associated-response"], ["claim-diagnosis"])
      ],
      discriminators: [
        concept("clinical-discriminator-pattern", "Pattern is non-pleuritic, non-positional and not reproducible", ["c000-run-character-response"], ["claim-diagnosis"])
      ],
      redFlags: [
        concept("clinical-red-flag-persistent", "Ongoing pain with autonomic symptoms", ["c000-run-opening-response", "c000-run-associated-response"], ["claim-safety"])
      ],
      safetyThresholds: [
        concept("clinical-threshold-transfer", "Persistent suspected cardiac ischaemia requires monitored emergency assessment", ["c000-run-explanation", "c000-run-concern-answer"], ["claim-safety"])
      ],
      criticalActions: [
        concept("clinical-action-assessment", "Arrange ECG, serial biomarkers and monitored transfer", ["c000-run-concern-answer"], ["claim-safety"])
      ],
      criticalActionTimings: [{
        id: "timing-action-assessment",
        criticalActionConceptId: "clinical-action-assessment",
        triggerLineId: "c000-run-opening-response",
        latestPermittedLineId: "c000-run-concern-answer",
        positiveActionPhrase: "so I will arrange an ECG",
        rationale: "The reviewed high-risk pattern requires the safe action to be stated no later than the defined management answer.",
        sourceClaimIds: ["claim-safety"]
      }],
      unsafeActions: [
        concept("clinical-unsafe-dismissal", "Do not dismiss the presentation as indigestion before excluding dangerous causes", ["c000-run-explanation"], ["claim-safety"])
      ],
      scopeBoundary: concept("clinical-scope", "The station requires recognition, explanation and safe initial disposition rather than definitive cardiology treatment", ["c000-run-explanation", "c000-run-concern-answer"], ["claim-safety"])
    },
    participants: [{
      id: "participant-patient",
      speakerLabel: "Patient",
      addressTerms: ["Daniel", "Mr Morgan"],
      role: "patient",
      identityRequired: true,
      identityResponse: {
        lineId: "c000-run-identity-response",
        text: turns[3].lines[0].text,
        fullName: "Daniel Morgan",
        dateOfBirthText: "14 May 1966"
      },
      openingAffect: { text: "Pale and clammy", evidenceLineId: "c000-run-observations-response" },
      initialVoluntary: {
        triggerLineId: "c000-run-opening-question",
        responseLineId: "c000-run-opening-response",
        text: turns[7].lines[0].text
      },
      concerns: [{
        id: "concern-heart-damage",
        text: "Possible heart attack, harm from waiting and return to work",
        responseLineId: "c000-run-concern-response",
        responseText: turns[25].lines[0].text,
        nextDoctorLineId: "c000-run-concern-answer"
      }],
      disclosures: [
        ["onset", ["clinical-clue-pressure"], "c000-run-onset-question", "c000-run-onset-response", "c000-run-character-question", turns[9].lines[0].text],
        ["character", ["clinical-clue-pressure", "clinical-discriminator-pattern"], "c000-run-character-question", "c000-run-character-response", "c000-run-radiation-question", turns[11].lines[0].text],
        ["radiation", ["clinical-clue-radiation", "clinical-differential-aortic"], "c000-run-radiation-question", "c000-run-radiation-response", "c000-run-associated-question", turns[13].lines[0].text],
        ["associated", ["clinical-clue-radiation", "clinical-red-flag-persistent", "clinical-differential-pe"], "c000-run-associated-question", "c000-run-associated-response", "c000-run-background-question", turns[15].lines[0].text],
        ["background", ["clinical-red-flag-persistent"], "c000-run-background-question", "c000-run-background-response", "c000-run-medicine-question", turns[17].lines[0].text],
        ["medicine", ["clinical-action-assessment"], "c000-run-medicine-question", "c000-run-medicine-response", "c000-run-summary", turns[19].lines[0].text]
      ].map(function (item) {
        return {
          id: "disclosure-" + item[0],
          factIds: item[1],
          triggerType: "specific_question",
          triggerDescription: "The Doctor asks one focused question about " + item[0] + ".",
          triggerLineId: item[2],
          responseLineId: item[3],
          responseText: item[5],
          nextDoctorLineId: item[4],
          responseUse: "The next Doctor line uses this answer to advance the focused assessment."
        };
      })
    }],
    examiner: {
      opening: { lineId: "c000-run-start", text: turns[0].lines[0].text },
      availableAtStartStemLineIds: ["c000-stem-examiner"],
      releases: [{
        id: "release-observations",
        requestDescription: "The Doctor requests current observations and examination findings.",
        requestLineId: "c000-run-observations-request",
        requestExactText: turns[21].lines[0].text,
        responseLineId: "c000-run-observations-response",
        responseText: turns[22].lines[0].text,
        permittedModalities: ["in_person"],
        findingSource: "The Examiner supplies standardised station observations and examination findings after the Doctor requests them.",
        nextDoctorLineId: "c000-run-explanation",
        responseUse: "The Doctor integrates the findings into the explanation and disposition."
      }],
      scheduledPrompts: [],
      closing: { lineId: "c000-run-end", text: turns[27].lines[0].text }
    },
    marking: {
      sourceClaimIds: ["claim-exam-standard"],
      keySteps: [
        { id: "step-focused-history", description: "Elicits and discriminates the dangerous chest-pain pattern", taskIds: ["task-history"], runLineIds: ["c000-run-opening-question", "c000-run-onset-question", "c000-run-character-question", "c000-run-radiation-question", "c000-run-associated-question", "c000-run-summary"], sourceClaimIds: ["claim-diagnosis"] },
        { id: "step-safe-plan", description: "Recognises the leading concern and explains safe assessment and disposition", taskIds: ["task-explain", "task-concern"], runLineIds: ["c000-run-explanation", "c000-run-concern-answer"], sourceClaimIds: ["claim-safety"] }
      ],
      domains: [
        { name: "History", taskIds: ["task-history"], runLineIds: ["c000-run-opening-question", "c000-run-onset-question", "c000-run-character-question", "c000-run-radiation-question", "c000-run-associated-question", "c000-run-summary"], sourceClaimIds: ["claim-exam-standard", "claim-diagnosis"] },
        { name: "Diagnosis/differential diagnoses", taskIds: ["task-explain"], runLineIds: ["c000-run-explanation"], sourceClaimIds: ["claim-exam-standard", "claim-diagnosis"] },
        { name: "Management plan", taskIds: ["task-explain", "task-concern"], runLineIds: ["c000-run-explanation", "c000-run-concern-answer"], sourceClaimIds: ["claim-exam-standard", "claim-safety"] },
        { name: "Approach to patient/relative/carer/other health professional", taskIds: ["task-history", "task-concern"], runLineIds: ["c000-run-consent-question", "c000-run-concern-question", "c000-run-concern-answer"], sourceClaimIds: ["claim-exam-standard"] }
      ],
      projectSafetyErrors: [{
        id: "error-dismissal",
        description: "Dismisses persistent cardiac-pattern discomfort as indigestion",
        preventedByLineIds: ["c000-run-explanation", "c000-run-concern-answer"],
        safetyConceptIds: ["clinical-threshold-transfer", "clinical-action-assessment", "clinical-unsafe-dismissal"],
        sourceClaimIds: ["claim-safety"]
      }],
      globalRating: {
        scale: 7,
        failRatings: [1, 2, 3],
        passRatings: [4, 5, 6, 7],
        decisionRule: "The global rating alone determines the station result: ratings 1 to 3 fail and ratings 4 to 7 pass.",
        passStandard: "Completes focused discrimination, recognises the dangerous pattern and gives a safe patient-centred plan.",
        failStandard: "Misses or dismisses the dangerous pattern, gives unsafe reassurance or substantially fails the assigned tasks."
      }
    },
    interaction: {
      identity: {
        mode: "direct",
        verificationLineId: "c000-run-identity-question",
        verificationText: turns[2].lines[0].text,
        participantIds: ["participant-patient"],
        completedBeforeClinicalContent: true,
        rationale: "The patient can directly confirm full name and date of birth before clinical questions."
      },
      defaultInformationParticipantId: "participant-patient",
      directAddresses: [
        { lineId: "c000-run-consent-question", participantId: "participant-patient", addressTerm: "Daniel" },
        { lineId: "c000-run-explanation", participantId: "participant-patient", addressTerm: "Daniel" }
      ],
      consents: [{
        id: "consent-consultation",
        scope: "consultation",
        requestLineId: "c000-run-consent-question",
        requestText: turns[4].lines[0].text,
        responseLineId: "c000-run-consent-response",
        responseText: turns[5].lines[0].text,
        participantId: "participant-patient",
        outcome: "granted"
      }],
      informationRequests: [
        ["opening", "c000-run-opening-question", "Initial account", "c000-run-opening-response", "c000-run-onset-question"],
        ["onset", "c000-run-onset-question", "Onset and time course", "c000-run-onset-response", "c000-run-character-question"],
        ["character", "c000-run-character-question", "Character and modifiers", "c000-run-character-response", "c000-run-radiation-question"],
        ["radiation", "c000-run-radiation-question", "Radiation", "c000-run-radiation-response", "c000-run-associated-question"],
        ["associated", "c000-run-associated-question", "Associated features", "c000-run-associated-response", "c000-run-background-question"],
        ["background", "c000-run-background-question", "Medical and cardiovascular background", "c000-run-background-response", "c000-run-medicine-question"],
        ["medicine", "c000-run-medicine-question", "Medicines and contraindications", "c000-run-medicine-response", "c000-run-summary"],
        ["concern", "c000-run-concern-question", "Patient concern", "c000-run-concern-response", "c000-run-concern-answer"]
      ].map(function (item) {
        return {
          id: "request-" + item[0],
          lineId: item[1],
          requestText: turns.find(function (entry) { return entry.lines[0].id === item[1]; }).lines[0].text,
          taskId: item[0] === "concern" ? "task-concern" : "task-history",
          requestType: "question",
          requestCount: 1,
          topic: item[2],
          addressedParticipantId: "participant-patient",
          expectedResponseLineId: item[3],
          responseParticipantId: "participant-patient",
          responseText: turns.find(function (entry) { return entry.lines[0].id === item[3]; }).lines[0].text,
          responseOutcome: "answered",
          responseEvidencePhrases: {
            opening: ["heavy pressure"],
            onset: ["forty minutes ago"],
            character: ["broad, heavy pressure"],
            radiation: ["left shoulder"],
            associated: ["clammy and slightly nauseated"],
            background: ["high blood pressure"],
            medicine: ["perindopril and atorvastatin"],
            concern: ["worried that this could be a heart attack"]
          }[item[0]],
          nextDoctorLineId: item[4],
          responseUse: "The defined next Doctor line uses the response and continues the assigned task."
        };
      }),
      sensitiveTopicLineIds: []
    },
    variation: {
      coverageSlot: "dangerous cardiac pattern",
      primaryFailureMode: "premature_closure",
      secondaryFailureMode: "unsafe_delay",
      distinctJob: "Recognise a cardiac pattern despite a meal-related patient explanation.",
      newSurprise: "Earlier exertional episodes emerge only after focused chronology.",
      plannedTrap: "Attributing persistent pressure to lunch before testing dangerous alternatives.",
      antiFailureFeatures: ["Separate the patient's attribution from the clinical pattern and use discriminating questions."],
      duplicateCheck: {
        comparedCaseIds: [],
        conclusion: "This fixture tests engine controls and is not production curriculum content."
      }
    },
    performance: {
      targetSpokenSeconds: 450,
      actionDurations: [{
        lineId: "c000-run-approach",
        seconds: 10,
        actionClass: "neutral_preparation",
        performedBy: "doctor",
        performedByParticipantId: null,
        actorExactPhrase: "The doctor",
        consentId: null,
        exceptionRationale: null
      }],
      taskEvidence: [
        {
          taskId: "task-history",
          runLineIds: turns.slice(0, 23).map(function (item) { return item.lines[0].id; }),
          requiredEvidence: [{ requirement: "A focused chest-discomfort history is visibly performed", lineId: "c000-run-opening-question", exactPhrase: "What brought you in today?", positivePerformancePhrase: "What brought you in today?" }],
          observedSeconds: 350,
          completed: true
        },
        {
          taskId: "task-explain",
          runLineIds: ["c000-run-explanation"],
          requiredEvidence: [{ requirement: "The leading diagnosis and immediate management are visibly explained", lineId: "c000-run-explanation", exactPhrase: "acute coronary syndrome", positivePerformancePhrase: "I recommend immediate assessment and treatment" }],
          observedSeconds: 44,
          completed: true
        },
        {
          taskId: "task-concern",
          runLineIds: turns.slice(24).map(function (item) { return item.lines[0].id; }),
          requiredEvidence: [{ requirement: "The patient's stated concern is visibly answered", lineId: "c000-run-concern-answer", exactPhrase: "this is not your fault", positivePerformancePhrase: "so I will arrange an ECG" }],
          observedSeconds: 56,
          completed: true
        }
      ],
      listenTest: {
        status: "pass",
        method: "spoken_readthrough",
        reviewer: "Engine fixture reviewer",
        performedAt: "2026-07-14T21:30:00+10:00",
        observedSeconds: 450,
        caseContentSha256: null,
        reviewScopeSha256: null,
        notes: "The full station was read aloud once at a natural consultation pace with action pauses."
      }
    },
    sourceBasis: {
      sources: [
        {
          id: "source-amc-spec",
          sourceType: "exam_specification",
          organisation: "Australian Medical Council",
          title: "Clinical Examination Specifications V8.3, June 2026",
          url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf",
          publishedOrUpdated: "2026-06-01",
          accessed: "2026-07-14",
          reviewDue: "2027-01-14",
          jurisdiction: "Australia",
          applicability: "Station timing, observable tasks, expected level, key steps and marking domains.",
          authoritative: true
        },
        {
          id: "source-amc-domains",
          sourceType: "assessment_domains",
          organisation: "Australian Medical Council",
          title: "Assessment Domains V1.1, November 2024",
          url: "https://www.amc.org.au/wp-content/uploads/2024/12/20241112-AIPD-AssessmentDomains.pdf",
          publishedOrUpdated: "2024-11-01",
          accessed: "2026-07-14",
          reviewDue: "2027-01-14",
          jurisdiction: "Australia",
          applicability: "Official domain vocabulary and domain-specific performance expectations.",
          authoritative: true
        },
        {
          id: "source-acs-guideline",
          sourceType: "australian_clinical_guideline",
          organisation: "Heart Foundation and Cardiac Society of Australia and New Zealand",
          title: "Australian clinical guideline for acute coronary syndromes",
          url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline",
          publishedOrUpdated: "2025-02-18",
          accessed: "2026-07-14",
          reviewDue: "2027-01-14",
          jurisdiction: "Australia",
          applicability: "Diagnostic pattern, urgent assessment, initial investigations and disposition.",
          authoritative: true
        }
      ],
      claimMap: [
        {
          id: "claim-diagnosis",
          claimType: "diagnosis",
          claim: "Persistent exertional central pressure with radiation and autonomic symptoms requires assessment for acute coronary syndrome.",
          sourceIds: ["source-acs-guideline"],
          sourceLocators: [{ sourceId: "source-acs-guideline", locator: "Diagnosis and initial assessment recommendations" }],
          runLineIds: ["c000-run-opening-response", "c000-run-character-response", "c000-run-radiation-response", "c000-run-associated-response", "c000-run-summary", "c000-run-explanation"],
          taskIds: ["task-history", "task-explain"],
          clinicalConceptIds: diagnosisIds,
          blueprintRefs: []
        },
        {
          id: "claim-safety",
          claimType: "disposition",
          claim: "Ongoing suspected acute coronary syndrome requires immediate monitored assessment, ECG and biomarker testing.",
          sourceIds: ["source-acs-guideline"],
          sourceLocators: [{ sourceId: "source-acs-guideline", locator: "Immediate management and transfer recommendations" }],
          runLineIds: ["c000-run-opening-response", "c000-run-associated-response", "c000-run-explanation", "c000-run-concern-answer"],
          taskIds: ["task-history", "task-explain", "task-concern"],
          clinicalConceptIds: safetyIds,
          blueprintRefs: []
        },
        {
          id: "claim-exam-standard",
          claimType: "exam_standard",
          claim: "The station uses the current AMC format, official assessment-domain vocabulary and seven-point global rating threshold.",
          sourceIds: ["source-amc-spec", "source-amc-domains"],
          sourceLocators: [
            { sourceId: "source-amc-spec", locator: "Clinical Examination Specifications V8.3, station timing and scoring sections" },
            { sourceId: "source-amc-domains", locator: "Assessment Domains V1.1, domain definitions" }
          ],
          runLineIds: [],
          taskIds: ["task-history", "task-explain", "task-concern"],
          clinicalConceptIds: [],
          blueprintRefs: ["station", "tasks", "marking.keySteps", "marking.domains", "marking.globalRating"]
        }
      ]
    },
    qa: {
      caseContentSha256: null,
      reviewScopeSha256: null,
      blueprintPackageSha256: null,
      blueprint: gate("blueprint integrity"),
      stemNeutrality: gate("Stem neutrality"),
      taskAlignment: gate("task alignment"),
      conversation: gate("natural conversation"),
      participantDisclosure: gate("participant disclosure"),
      examinerRelease: gate("Examiner release"),
      amcLevel: gate("AMC level"),
      timing: gate("timing"),
      clinical: gate("clinical accuracy"),
      sources: gate("source currency"),
      finalQa: gate("final QA"),
      blockers: []
    }
  };

  const hash = contentHash(caseData);
  blueprint.qa.caseContentSha256 = hash;
  blueprint.performance.listenTest.caseContentSha256 = hash;

  const registry = clone(registryTemplate);
  registry.updatedAt = "2026-07-14T21:30:00+10:00";
  registry.productionMode = "paused";
  registry.patterns[0].status = "complete_audited";
  registry.patterns[0].generationStatus = "generation_blocked";
  registry.patterns[0].initialCore = 1;
  registry.cases = [{
    caseId: caseData.id,
    globalId: caseData.globalId,
    registryId: caseData.registryId,
    phaseId: 1,
    patternId: 1,
    title: caseData.title,
    modality: caseData.modality,
    predominantArea: caseData.format.predominantArea,
    status: "audited",
    contentSha256: hash,
    coverageSlot: "dangerous cardiac pattern",
    distinctJob: blueprint.variation.distinctJob,
    primaryFailureMode: "premature_closure",
    admissionDecision: "admitted"
  }];
  registry.nextAction = {
    mode: "none",
    caseId: null,
    patternId: null,
    newGenerationAllowed: false,
    reason: "This is a closed executable engine fixture."
  };

  blueprint.qa.reviewScopeSha256 = blueprintReviewScopeHash(blueprint);
  QA_FIELDS.forEach(function (field) {
    blueprint.qa[field].reviewScopeSha256 = blueprint.qa.reviewScopeSha256;
  });
  blueprint.performance.listenTest.reviewScopeSha256 = blueprint.qa.reviewScopeSha256;
  blueprint.qa.blueprintPackageSha256 = blueprintPackageHash(blueprint);

  return { caseData, blueprint, registry };
}

module.exports = { clone, makeValidTriplet };
