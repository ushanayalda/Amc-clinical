(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-016",
    globalId: "CP-C016",
    registryId: "CP-P5-C002",
    displayNumber: "Case 16",
    title: "Breathlessness, nausea and marked fatigue",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 5, title: "Shock Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c016-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c016-stem-patient",
          text: "Ms Zara Bellamy, a 32-year-old woman, has presented with worsening breathlessness, nausea and marked fatigue after a flu-like illness. Her partner, Rory, is present."
        },
        {
          id: "c016-stem-start",
          text: "Zara is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c016-task-assess",
          text: "Assess Zara and discuss your initial management.",
          timing: "3 minutes"
        },
        {
          id: "c016-task-interpret",
          text: "Interpret the findings and investigation results and discuss your next steps.",
          timing: "3 minutes"
        },
        {
          id: "c016-task-explain",
          text: "Explain your assessment and management plan to Zara and Rory.",
          timing: "1 minute"
        },
        {
          id: "c016-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c016-run-assessment",
          heading: "Assessment and initial management",
          turns: [
            {
              id: "c016-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-start", text: "You may begin." }]
            },
            {
              id: "c016-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c016-run-first-action", text: "The doctor performs hand hygiene and approaches Zara." }]
            },
            {
              id: "c016-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-intro", text: "Hello Zara, I am Ushana, one of the emergency doctors. Can you confirm your full name and tell me what is troubling you most?" }]
            },
            {
              id: "c016-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-opening", text: "Zara Bellamy. I can hardly breathe when I lie back. I feel sick and completely exhausted." }]
            },
            {
              id: "c016-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-consent", text: "I will assess and treat you while we talk. Is it okay for Rory to stay and help with the history?" }]
            },
            {
              id: "c016-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-consent-answer", text: "Yes, please." }]
            },
            {
              id: "c016-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-primary", text: "I assess airway, breathing, circulation and conscious state. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring, apply defibrillator pads, and check glucose, temperature, perfusion and urine output. Examine the lungs, heart, jugular venous pressure and legs. Please provide the findings." }]
            },
            {
              id: "c016-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c016-run-primary-findings", text: "Zara's airway is patent. Respiratory rate is 30 breaths per minute, oxygen saturation is 91% on room air and there are fine crackles with bilateral B-lines. Pulse is 128 and regular, blood pressure is 78/48 mmHg and capillary refill is five seconds. Her hands are cool and mottled, and jugular venous pressure is raised. Temperature is 37.3 degrees Celsius, GCS is 15 and glucose is 6.4 mmol/L. There is no murmur, calf asymmetry or peripheral oedema." }]
            },
            {
              id: "c016-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-recognition", text: "Zara has shock with pulmonary and systemic venous congestion. Call the senior emergency doctor, cardiology and intensive care now. Give oxygen, targeting 92% to 96%, obtain two large-bore intravenous lines, insert a urinary catheter if there is no contraindication and prepare arterial monitoring. I will not give a large fluid bolus because the raised jugular venous pressure and B-lines indicate congestion." }]
            },
            {
              id: "c016-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-investigations", text: "Obtain a 12-lead ECG, serial troponin, NT-proBNP, blood gas with lactate, full blood count, electrolytes, renal and liver function, C-reactive protein, coagulation studies and beta-hCG. Arrange portable chest X-ray and immediate bedside cardiac and lung ultrasound. Take cultures if infection remains suspected." }]
            },
            {
              id: "c016-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c016-run-treatment-action", text: "Oxygen, monitoring, intravenous access and urinary catheterisation are established while senior, cardiology and intensive-care teams attend." }]
            }
          ]
        },
        {
          id: "c016-run-interpretation",
          heading: "Cause, circulation support and escalation",
          turns: [
            {
              id: "c016-turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-history", text: "When did the illness and breathlessness begin? Any chest pain, palpitations, fainting, fever, cough or coughing blood?" }]
            },
            {
              id: "c016-turn-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-history-answer", text: "Five days ago I had fever, aches and a sore throat. The fever settled, but for about a day and a half I have become breathless and weak. My chest feels heavy and my heart races. I nearly fainted this morning. No coughing blood or sharp pain." }]
            },
            {
              id: "c016-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-background", text: "Any heart or autoimmune condition, recent pregnancy, long travel, leg swelling, new medicine, supplement, recreational drug or toxin exposure? What medicines and allergies do you have?" }]
            },
            {
              id: "c016-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-background-answer", text: "No medical conditions, pregnancy or regular medicines. No drugs, travel or swollen leg, and no allergies." }]
            },
            {
              id: "c016-turn-fluid-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-fluid-history", text: "Rory, has Zara been able to walk, sleep flat, eat, drink and pass urine?" }]
            },
            {
              id: "c016-turn-fluid-history-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c016-run-fluid-history-answer", text: "Yesterday she stopped halfway to the bathroom. She slept sitting up, has barely eaten, and last passed a small amount of dark urine early this morning." }]
            },
            {
              id: "c016-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c016-run-results", text: "ECG shows sinus tachycardia with diffuse ST-T abnormalities and no diagnostic ST-elevation pattern. Troponin is markedly elevated and NT-proBNP is 7800 ng/L. Lactate is 5.4 mmol/L, pH 7.29, creatinine 132 micromol/L and ALT 186 units/L. White cell count is 12.2, C-reactive protein 54 mg/L and beta-hCG is negative. Chest X-ray shows bilateral pulmonary oedema. Bedside echocardiography shows severe global left-ventricular systolic dysfunction with an estimated ejection fraction of 15%, moderate right-ventricular dysfunction, a plethoric inferior vena cava and no pericardial effusion." }]
            },
            {
              id: "c016-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-interpretation", text: "This is cold, congested cardiogenic shock from severe new biventricular dysfunction. Fulminant myocarditis is strongly suspected, but the recent illness does not prove a viral cause. We must exclude acute coronary syndrome and consider pulmonary embolism, sepsis, toxin-related injury and other cardiomyopathies. The ultrasound makes tamponade unlikely." }]
            },
            {
              id: "c016-turn-support",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-support", text: "Commence noradrenaline through monitored proximal peripheral access at the local-protocol starting rate while central access is arranged, titrating with intensive care to a mean arterial pressure of at least 65 mmHg and clinical perfusion. Avoid further fluid, nitrates, routine diuretics and beta-blockade while she is profoundly hypotensive. Reassess lungs, perfusion, rhythm, urine output and lactate." }]
            },
            {
              id: "c016-turn-support-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c016-run-support-action", text: "Protocol-led noradrenaline commences through monitored proximal peripheral access as definitive vascular access is prepared." }]
            },
            {
              id: "c016-turn-repeat-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c016-run-repeat-findings", text: "With noradrenaline titrated by the intensive-care clinician, mean arterial pressure is 66 mmHg. Zara remains cool and breathless, urine output is 5 millilitres over the preceding hour and repeat lactate is 6.1 mmol/L. Frequent ventricular ectopic beats appear."
              }]
            },
            {
              id: "c016-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-escalation", text: "Perfusion remains inadequate. Cardiology and intensive care should add an inotrope under continuous haemodynamic and rhythm monitoring, selected and titrated by the local cardiogenic-shock protocol. Activate transfer to a tertiary shock centre now. If circulation remains refractory, the shock team should institute temporary mechanical circulatory support without delay, with device choice guided by her biventricular failure and local expertise." }]
            },
            {
              id: "c016-turn-diagnosis-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-diagnosis-plan", text: "Coronary imaging must exclude an acute coronary cause. Once stable enough, cardiac magnetic resonance can identify myocardial inflammation. Because this is a high-risk presentation, the tertiary team should arrange early endomyocardial biopsy to establish the subtype and guide any specific therapy, rather than starting empirical immunosuppression solely from the preceding illness." }]
            },
            {
              id: "c016-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-time", text: "Please explain your assessment and management plan to Zara and Rory." }]
            }
          ]
        },
        {
          id: "c016-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c016-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-explanation", text: "Zara and Rory, her heart is pumping very weakly, so blood is not reaching her organs properly and fluid is backing up into her lungs. Medicines are supporting her blood pressure and heart while specialist teams prepare further support." }]
            },
            {
              id: "c016-turn-cause-question",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c016-run-cause-question", text: "Did the flu infection damage her heart?" }]
            },
            {
              id: "c016-turn-cause-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-cause-answer", text: "Inflammation of the heart muscle, called myocarditis, is a serious possibility, but the earlier illness alone cannot tell us the cause. We first support her circulation and exclude a blocked coronary artery and other causes. Heart imaging and a small heart-muscle biopsy can then confirm the diagnosis and subtype." }]
            },
            {
              id: "c016-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-plan", text: "She needs intensive-care monitoring because dangerous rhythms and further deterioration can occur. The tertiary team can provide temporary mechanical support if medicines are not enough. We will keep you informed while these steps occur." }]
            },
            {
              id: "c016-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-handover-prompt", text: "Please finish with a concise handover to the intensive-care clinician." }]
            },
            {
              id: "c016-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c016-run-handover", text: "Zara Bellamy is 32 with cold, congested cardiogenic shock and suspected fulminant myocarditis. Initial pressure was 78/48, pulse 128, saturation 91%, refill five seconds and lactate 5.4. She has raised JVP, B-lines and pulmonary oedema. Echo shows global LVEF 15% with moderate RV dysfunction and no effusion. Troponin and NT-proBNP are markedly raised, with early kidney and liver injury. Oxygen, monitoring and intravenous access are established without a large fluid bolus. Noradrenaline has achieved MAP 66, but lactate is 6.1 with oliguria and ventricular ectopy. She needs protocol-led inotropy, tertiary transfer, coronary exclusion, early biopsy and readiness for temporary mechanical support." }]
            },
            {
              id: "c016-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Cardiogenic shock",
        date: "Current guideline accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0016/219022/cpg-cardiogenic-shock.pdf"
      },
      {
        organisation: "Agency for Clinical Innovation, NSW",
        title: "Adult ECAT protocol: Shortness of breath from cardiac disease",
        date: "Current NSW protocol accessed July 2026",
        url: "https://aci.health.nsw.gov.au/ecat/adult/shortness-of-breath-cardiac-disease"
      },
      {
        organisation: "European Society of Cardiology",
        title: "2025 ESC Guidelines for the management of myocarditis and pericarditis",
        date: "Published August 2025, current citation July 2026",
        url: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis/"
      },
      {
        organisation: "European Society of Cardiology",
        title: "2025 ESC Guidelines for the management of myocarditis and pericarditis, full guideline",
        date: "European Heart Journal 2025",
        url: "https://academic.oup.com/eurheartj/article/46/40/3952/8234483"
      },
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Recognising and Responding to Acute Deterioration Standard",
        date: "Current standard accessed July 2026",
        url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard"
      }
    ]
  });

  var caseSixteen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-016"; });
  function buildHint16(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseSixteen.masteryFocus = {
    case: "Assess worsening breathlessness and fatigue after a viral illness, interpret bedside physiology and investigations together, and change support according to repeated response.",
    clinical: "Match fluid and circulatory support to the mechanism, then reassess organ perfusion after every intervention."
  };
  caseSixteen.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "qas-cardiogenic-shock-2026", title: "Clinical practice guideline: Cardiogenic shock", organisation: "Queensland Ambulance Service", date: "Current July 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0016/219022/cpg-cardiogenic-shock.pdf" },
    { id: "aci-cardiac-sob-2026", title: "Adult ECAT protocol: Shortness of breath from cardiac disease", organisation: "Agency for Clinical Innovation, NSW", date: "Current July 2026", url: "https://aci.health.nsw.gov.au/ecat/adult/shortness-of-breath-cardiac-disease" },
    { id: "esc-myocarditis-2025", title: "2025 Guidelines for the management of myocarditis and pericarditis", organisation: "European Society of Cardiology", date: "August 2025", url: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis/" },
    { id: "anzcor-oxygen-2021", title: "Guideline 9.2.10: The Use of Oxygen in Emergencies", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Approved April 2021; current July 2026", url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseSixteen.reasoningCompass = {
    stem: {
      title: "Keep cause and physiology separate at first",
      steps: [
        { time: "0 to 30 seconds", text: "Fix the ED setting and worsening breathlessness after a flu-like illness. Plan immediate ABCDE and monitoring before following the viral link." },
        { time: "30 to 60 seconds", text: "Prepare to distinguish poor oxygenation, poor perfusion and congestion, then ask about chest symptoms, rhythm, syncope, function, pregnancy, drugs and thromboembolic risk." },
        { time: "1 to 2 minutes", text: "Hold the switches: assess and manage to minute 3, interpret and escalate to minute 6, explain to minute 7, hand over to minute 8." }
      ],
      anchor: "Assess and manage 0 to 3 | Interpret and escalate 3 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Read breathing, circulation and response together",
      steps: [
        { time: "0 to 3 minutes", text: "Obtain ABCDE findings, begin treatment supported by the current physiology, involve senior help, obtain access and choose fluid only after assessing volume and congestion." },
        { time: "3 to 6 minutes", text: "Use history, ECG, biomarkers and bedside ultrasound to identify the mechanism and important alternatives. Choose support from the findings and reassess perfusion." },
        { time: "6 to 8 minutes", text: "At the prompt, explain the working diagnosis, uncertainty, current support and destination, then hand over the trajectory, response and unresolved tests." }
      ],
      anchor: "If breathing, circulation, rhythm or conscious state worsens, interrupt the task, repeat ABCDE and escalate support; then return to the unfinished task verb."
    }
  };
  caseSixteen.hints = [
    buildHint16("c016-hint-01", "stem", "c016-stem-role", "emergency department", ["amc-spec-2026", "amc-tips-2024"], "Reading the setting", "What should be ready immediately?", "Monitoring, oxygen, intravenous access, defibrillator capability and senior support can be organised while you assess. This is not a history-only station.", "The ED setting enables parallel care.", "Zara may need resuscitation before the cause is certain.", "Read the symptoms without committing to the flu explanation."),
    buildHint16("c016-hint-02", "stem", "c016-stem-patient", "32-year-old woman", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age", "Thirty-two. Does that make serious cardiac disease unlikely?", "It makes some causes less common, not impossible. Acute pump failure, pulmonary embolism, pregnancy-related disease, toxins and sepsis can all occur at this age.", "Age changes prevalence, not the need to assess physiology.", "Zara is young with unexplained worsening symptoms.", "Read the symptom combination and context."),
    buildHint16("c016-hint-03", "stem", "c016-stem-patient", "worsening breathlessness, nausea and marked fatigue", ["acsqhc-deterioration-2026"], "Reading the symptom cluster", "Could this still be a simple viral illness?", "Possibly, but worsening breathlessness and marked fatigue may signal impaired oxygen delivery. Nausea can accompany systemic or cardiac illness and does not localise the cause.", "A common symptom can sit beside dangerous physiology.", "The cause is not established.", "Ask what happens lying flat, walking and at rest, then obtain observations."),
    buildHint16("c016-hint-04", "stem", "c016-stem-patient", "after a flu-like illness", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Handling the tempting link", "Did the infection inflame her heart?", "It is a possibility, not yet a conclusion. Keep the chronology, but first establish whether the lungs, circulation or rhythm are failing and exclude other acute causes.", "Temporal association is not proof of cause.", "A preceding illness may become relevant later.", "Use current findings before naming the diagnosis."),
    buildHint16("c016-hint-05", "stem", "c016-stem-patient", "Her partner, Rory, is present", ["acsqhc-communication-2026"], "Using collateral history", "When will Rory help?", "After Zara consents, he can describe functional decline, sleep position, intake and urine output while she is breathless.", "Keep Zara central in the conversation.", "Rory may supply objective change over time.", "Plan to use him after the immediate assessment."),
    buildHint16("c016-hint-06", "stem", "c016-stem-start", "findings and investigation results when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning requests", "What should I request in the first minute?", "ABCDE observations, perfusion, jugular venous pressure, heart, lungs and legs. Then request ECG, gas, cardiac markers, organ function, pregnancy test, chest imaging and bedside ultrasound.", "Ask tests to answer shock type, cause and organ injury.", "No diagnostic result will arrive unless requested.", "Start with findings that change immediate treatment."),
    buildHint16("c016-hint-07", "stem", "c016-task-assess", "Assess Zara and discuss your initial management", ["amc-spec-2026", "amc-tips-2024", "acsqhc-deterioration-2026"], "Anchoring task one", "What must fit into three minutes?", "ABCDE, monitoring, oxygen when needed, access, senior escalation and an initial fluid decision. A short history runs beside those actions.", "Initial management starts before the exact cause is known.", "Task one is about stabilisation and classification.", "Look for whether congestion makes a routine fluid bolus unsafe."),
    buildHint16("c016-hint-task-interpret", "stem", "c016-task-interpret", "Interpret the findings and investigation results and discuss your next steps", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task two", "What changes after minute three?", "Combine the physiology, ECG, biomarkers and bedside ultrasound, state the leading shock type and causes, then escalate according to the treatment response.", "Interpretation means synthesis followed by action.", "Minutes 3 to 6 are for cause, response and next support.", "Do not spend them repeating the initial survey."),
    buildHint16("c016-hint-task-explain", "stem", "c016-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task three", "How should minute six change?", "Stop technical discussion and speak to Zara and Rory. Explain the pump and lung problem, current support, uncertainty about the cause and why tertiary care is needed.", "One minute means clear causes and actions, not every result.", "Minute 6 to 7 belongs to explanation.", "Reserve the final minute for handover."),
    buildHint16("c016-hint-08", "stem", "c016-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "What will the senior clinician need?", "Shock type, initial observations, congestion findings, echo, organ injury, response to noradrenaline, rhythm change and the next escalation and diagnostic steps.", "Trajectory matters more than a long symptom list.", "The final minute transfers current risk.", "Keep the few changing numbers available."),
    buildHint16("c016-hint-09", "run", "c016-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is my first move?", "Approach, identify yourself and hear the immediate problem while observing speech and breathing. Be ready to interrupt for ABCDE.", "The first task is already running.", "Three minutes cover assessment and first management.", "Let her first sentence guide urgency."),
    buildHint16("c016-hint-10", "run", "c016-run-intro", "what is troubling you most", ["acsqhc-communication-2026", "amc-tips-2024"], "Opening the assessment", "Why a broad question now?", "It quickly shows her priority, work of breathing and ability to speak. You can then move directly to observations.", "A brief patient opening is clinical information.", "Zara is awake, but stability is unknown.", "Listen for positional breathlessness and functional collapse."),
    buildHint16("c016-hint-11", "run", "c016-run-opening", "hardly breathe when I lie back", ["aci-cardiac-sob-2026", "acsqhc-deterioration-2026"], "Hearing orthopnoea", "Why does lying flat matter?", "When left-heart filling pressure is high, lying flat shifts more blood toward the chest and can worsen lung congestion. This makes cardiac failure important, but observations must confirm severity.", "The symptom suggests congestion; it does not yet name the cause.", "Breathlessness is positional and severe.", "Confirm consent for Rory, then request ABCDE and congestion findings."),
    buildHint16("c016-hint-12", "run", "c016-run-consent", "Is it okay for Rory to stay", ["acsqhc-communication-2026"], "Including Rory", "Why ask during instability?", "A brief consent preserves privacy and lets Rory supply functional details while treatment continues.", "Urgency does not remove choice when Zara can decide.", "Rory can assist without replacing her voice.", "Move to the primary assessment now."),
    buildHint16("c016-hint-13", "run", "c016-run-primary", "apply defibrillator pads", ["acsqhc-deterioration-2026", "aci-cardiac-sob-2026"], "Preparing for rhythm risk", "Is this excessive before an arrhythmia appears?", "Shock with suspected cardiac disease can deteriorate abruptly. Pads and continuous monitoring prepare treatment without waiting for a malignant rhythm.", "Preparation is not a diagnosis.", "Breathing, circulation and rhythm all need immediate surveillance.", "Read oxygenation, perfusion and congestion together."),
    buildHint16("c016-hint-14", "run", "c016-run-primary-findings", "fine crackles with bilateral B-lines", ["aci-cardiac-sob-2026", "anzcor-oxygen-2021"], "Reading the lungs", "What do crackles and B-lines mean here?", "They suggest fluid in the lung interstitium. With low oxygen, this needs oxygen and makes a large empiric fluid bolus potentially harmful.", "Treat hypoxaemia while identifying why fluid has accumulated.", "There is pulmonary congestion.", "Continue through pressure, skin and jugular venous pressure."),
    buildHint16("c016-hint-15", "run", "c016-run-primary-findings", "blood pressure is 78/48 mmHg", ["acsqhc-deterioration-2026"], "Reading perfusion", "Could the low pressure be dehydration after illness?", "Possibly in isolation, but severe hypotension beside bilateral lung congestion already makes a routine large fluid bolus unsafe until the circulation is classified.", "Shock type matters before fluid is chosen.", "Zara has severe hypotension with pulmonary congestion.", "Keep reading for refill, skin and jugular venous pressure, then call senior cardiac and intensive-care help."),
    buildHint16("c016-hint-16", "run", "c016-run-recognition", "shock with pulmonary and systemic venous congestion", ["qas-cardiogenic-shock-2026", "aci-cardiac-sob-2026"], "Naming the leading diagnosis", "Do the findings now earn it?", "Yes. Hypotension, cold delayed perfusion and congestion support cold, congested cardiogenic shock until another cause is found. This is pump failure physiology, not proof of its cause.", "Name the shock type separately from the underlying diagnosis.", "Cardiogenic shock is now the leading physiological diagnosis.", "Escalate, oxygenate, obtain access and avoid a large fluid bolus."),
    buildHint16("c016-hint-17", "run", "c016-run-recognition", "will not give a large fluid bolus", ["qas-cardiogenic-shock-2026", "aci-cardiac-sob-2026"], "Avoiding reflex fluid", "Low pressure usually means fluid. Why not now?", "Her veins and lungs are already congested. More fluid can raise lung pressure further without improving a failing pump.", "Hypotension does not always mean an empty circulation.", "She needs pressure and pump support, not routine volume loading.", "Obtain ECG, biomarkers and immediate bedside ultrasound."),
    buildHint16("c016-hint-18", "run", "c016-run-investigations", "immediate bedside cardiac and lung ultrasound", ["qas-cardiogenic-shock-2026", "aci-cardiac-sob-2026"], "Choosing decisive tests", "Why ultrasound now?", "It can rapidly show ventricular function, right-heart strain, pericardial fluid and congestion. ECG and biomarkers then test coronary injury, myocardial stress and important alternatives.", "Use rapid tests to classify shock while support continues.", "The pump-failure physiology is established; the cause is not.", "Return to the short history while teams and tests assemble."),
    buildHint16("c016-hint-19", "run", "c016-run-history", "chest pain, palpitations, fainting", ["aci-cardiac-sob-2026", "amc-tips-2024"], "Returning after emergency actions", "Have I missed the history task?", "No. Immediate support is underway, so return to discriminating symptoms: ischaemia, arrhythmia, syncope, infection and thromboembolism.", "After interruption, return to the unfinished task.", "ABCDE and first management are complete.", "Clarify chronology and red flags without slowing the investigations."),
    buildHint16("c016-hint-20", "run", "c016-run-history-answer", "Five days ago I had fever", ["esc-myocarditis-2025"], "Reading chronology", "Does the preceding fever prove myocarditis?", "No. A recent infection makes myocardial inflammation plausible, but acute coronary disease, pulmonary embolism, sepsis, toxins and other cardiomyopathies still need active exclusion.", "Sequence supports a hypothesis; it does not prove causation.", "The viral link is relevant but unconfirmed.", "Use chest symptoms, rhythm, risk factors and imaging to discriminate."),
    buildHint16("c016-hint-21", "run", "c016-run-history-answer", "heart races", ["aci-cardiac-sob-2026", "esc-myocarditis-2025"], "Hearing rhythm symptoms", "Is the fast heart rate just compensation?", "It may be sinus tachycardia from shock, but myocarditis can also provoke dangerous arrhythmias. Continuous rhythm monitoring and ECG are essential.", "A symptom can have more than one mechanism.", "Shock and rhythm risk coexist.", "Check pregnancy, drugs, travel, leg symptoms and other causes."),
    buildHint16("c016-hint-22", "run", "c016-run-background", "recent pregnancy, long travel, leg swelling", ["aci-cardiac-sob-2026", "amc-tips-2024"], "Testing alternatives", "Why ask so broadly?", "Recent pregnancy suggests peripartum cardiomyopathy; travel and unilateral leg swelling test pulmonary embolism; drugs and toxins test reversible myocardial injury.", "Each question should challenge the leading explanation.", "Pump failure remains likely, but its cause is unsettled.", "Use Rory to establish functional decline and organ perfusion."),
    buildHint16("c016-hint-23", "run", "c016-run-fluid-history-answer", "slept sitting up, has barely eaten, and last passed a small amount of dark urine early this morning", ["aci-cardiac-sob-2026", "acsqhc-deterioration-2026"], "Using function as severity", "What does yesterday's function add?", "Stopping halfway to the bathroom and sleeping upright show rapid functional decline and congestion. Minimal urine suggests poor renal perfusion despite venous fullness.", "Congestion and low organ flow can occur together.", "This is not simple post-viral fatigue.", "Interpret ECG, organ markers and echocardiography together."),
    buildHint16("c016-hint-24", "run", "c016-run-results", "Troponin is markedly elevated", ["qas-cardiogenic-shock-2026", "aci-cardiac-sob-2026"], "Reading ECG and troponin", "No ST elevation. Is coronary disease excluded?", "No. A non-diagnostic ECG does not exclude an acute coronary cause, and markedly raised troponin shows myocardial injury rather than its cause.", "Injury marker is not a diagnosis.", "The heart is injured, but the mechanism still needs definition.", "Use the global echo pattern and later coronary imaging."),
    buildHint16("c016-hint-25", "run", "c016-run-results", "ejection fraction of 15%", ["qas-cardiogenic-shock-2026", "esc-myocarditis-2025"], "Reading pump function", "What does fifteen percent explain?", "Severe global left-ventricular failure explains low forward flow and lung congestion; right-ventricular dysfunction adds systemic venous congestion. No effusion makes tamponade unlikely.", "The echo explains physiology, not the final aetiology.", "There is severe new biventricular pump failure.", "Name the leading cause carefully and preserve alternatives."),
    buildHint16("c016-hint-26", "run", "c016-run-interpretation", "Fulminant myocarditis is strongly suspected", ["esc-myocarditis-2025", "qas-cardiogenic-shock-2026"], "Naming the suspected cause", "Why suspected rather than confirmed?", "Rapid severe global dysfunction after a flu-like illness fits fulminant myocarditis, but coronary occlusion and other causes can mimic it. Support cannot wait for final aetiology.", "Hold diagnostic confidence and treatment urgency separately.", "Cardiogenic shock is established; fulminant myocarditis leads the cause list.", "Start vasopressor support and reassess organ perfusion."),
    buildHint16("c016-hint-27", "run", "c016-run-support", "mean arterial pressure of at least 65 mmHg and clinical perfusion", ["qas-cardiogenic-shock-2026"], "Supporting pressure", "Is reaching 65 the finish?", "No. The pressure is a minimum guide. Warmth, refill, conscious state, urine, lactate and rhythm show whether organs are actually receiving enough flow.", "Treat perfusion, not a number alone.", "Noradrenaline supports pressure while congestion limits fluid.", "Read the repeat organ and rhythm findings."),
    buildHint16("c016-hint-28", "run", "c016-run-repeat-findings", "repeat lactate is 6.1 mmol/L", ["qas-cardiogenic-shock-2026", "acsqhc-deterioration-2026"], "Recognising failed perfusion", "MAP is 66. Why escalate?", "She remains cool and oliguric, and lactate has risen. Pressure improved, but organ perfusion did not.", "A better monitor number can coexist with worse shock.", "Vasopressor alone is insufficient.", "Keep reading for rhythm, then escalate pump support and tertiary transfer."),
    buildHint16("c016-hint-rhythm", "run", "c016-run-repeat-findings", "Frequent ventricular ectopic beats appear", ["qas-cardiogenic-shock-2026", "esc-myocarditis-2025"], "Recognising rhythm instability", "Does ectopy change urgency?", "Yes. New ventricular ectopy in severe pump failure adds risk of a dangerous rhythm and makes continuous monitoring, specialist-guided inotropy and advanced support more urgent.", "Treat circulation while watching what treatment does to rhythm.", "Poor perfusion now coexists with electrical instability.", "Escalate to the shock team and tertiary centre."),
    buildHint16("c016-hint-29", "run", "c016-run-escalation", "temporary mechanical circulatory support", ["qas-cardiogenic-shock-2026", "esc-myocarditis-2025"], "Escalating beyond medicines", "When does a device enter the plan?", "When perfusion remains refractory despite appropriate pressure and pump support. The shock team chooses a device from ventricular involvement, oxygenation and local expertise.", "State the trigger and team decision, not a memorised device for everyone.", "She needs a tertiary centre capable of advanced support.", "Continue cause confirmation without delaying transfer."),
    buildHint16("c016-hint-30", "run", "c016-run-diagnosis-plan", "Coronary imaging must exclude an acute coronary cause", ["esc-myocarditis-2025", "aci-cardiac-sob-2026"], "Protecting against premature closure", "Why investigate coronary disease in a 32-year-old?", "Because shock and myocardial injury are high stakes, and age does not exclude coronary pathology. MRI can support inflammation, while early biopsy in this severe presentation may identify a subtype that changes treatment.", "Do not let a convincing viral story close the diagnosis.", "Support, exclusion and confirmation proceed in that order.", "At the prompt, switch to explanation for Zara and Rory."),
    buildHint16("c016-hint-31", "run", "c016-run-time", "Please explain your assessment", ["amc-spec-2026", "amc-tips-2024"], "Recovering at the task switch", "What if I have more investigation detail?", "Stop. The required verb is explain. Give the pump problem, organ-flow consequence, current support, diagnostic uncertainty and tertiary plan in everyday language.", "Do not continue an examiner-facing list.", "Assessment and next steps are complete.", "Speak directly to Zara and Rory."),
    buildHint16("c016-hint-32", "run", "c016-run-explanation", "fluid is backing up into her lungs", ["acsqhc-communication-2026", "aci-cardiac-sob-2026"], "Explaining the physiology", "How do I explain both low pressure and lung fluid?", "The heart is too weak to move blood forward, so organs receive too little while pressure builds behind the left heart and pushes fluid into the lungs.", "One causal sentence is enough.", "They understand why more routine fluid may worsen breathing.", "Explain the support being given and the need for specialist care."),
    buildHint16("c016-hint-33", "run", "c016-run-cause-question", "Did the flu infection damage her heart", ["acsqhc-communication-2026", "esc-myocarditis-2025"], "Answering cause uncertainty", "Can I simply say yes?", "No. Acknowledge that heart-muscle inflammation is a serious possibility, then say the timing alone cannot prove it and other treatable causes must be excluded.", "Uncertainty should be specific, not vague.", "Rory wants a cause, but the immediate priority is support.", "Explain how coronary imaging, MRI and biopsy answer different questions."),
    buildHint16("c016-hint-34", "run", "c016-run-cause-answer", "small heart-muscle biopsy", ["esc-myocarditis-2025", "acsqhc-communication-2026"], "Explaining confirmation", "Will biopsy sound frightening?", "Describe its purpose rather than procedure detail: in a severe presentation, a small tissue sample can identify the inflammation subtype and guide specific treatment.", "Do not promise that one test always gives the answer.", "The cause remains suspected, not confirmed.", "Explain intensive-care monitoring and possible mechanical support next."),
    buildHint16("c016-hint-35", "run", "c016-run-plan", "dangerous rhythms and further deterioration", ["esc-myocarditis-2025", "acsqhc-communication-2026"], "Explaining risk honestly", "How do I avoid panic?", "Pair the risk with the active response: continuous monitoring, specialist teams, medicines and access to temporary support if needed.", "Honesty is steadier when linked to a plan.", "Zara needs intensive and tertiary care.", "Switch to the required handover."),
    buildHint16("c016-hint-36", "run", "c016-run-handover-prompt", "concise handover", ["acsqhc-communication-2026", "amc-spec-2026"], "Changing audience", "What is the shortest safe structure?", "Identity and working diagnosis, initial shock and congestion, echo and organ injury, treatment and response, current rhythm risk, then tertiary support and diagnostic needs.", "Do not repeat the patient explanation.", "The final minute transfers trajectory and unfinished actions.", "Lead with cold, congested cardiogenic shock."),
    buildHint16("c016-hint-37", "run", "c016-run-handover", "lactate is 6.1 with oliguria and ventricular ectopy", ["acsqhc-communication-2026", "qas-cardiogenic-shock-2026"], "Closing with the failed response", "Why include these after MAP 66?", "They show that pressure support has not restored organ flow and justify inotropy, tertiary transfer and readiness for mechanical support.", "The handover must transmit the current problem, not just treatment given.", "The receiving team has the reason for immediate escalation.", "Stop and wait for the examiner to end the station."),
    buildHint16("c016-hint-38", "run", "c016-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I keep solving the cause?", "No. The station has ended. Take one breath and begin the next case from its own symptoms, physiology and task verbs.", "Do not carry myocarditis into the next patient.", "Case 16 is complete.", "Read the next stem from the first line." )
  ];
  caseSixteen.hints.forEach(function (hint, index) { hint.id = "c016-hint-" + String(index + 1).padStart(2, "0"); });
})();
