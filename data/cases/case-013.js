(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-013",
    globalId: "CP-C013",
    registryId: "CP-P4-C002",
    displayNumber: "Case 13",
    title: "Fever, cough and increasing weakness",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 4, title: "Sepsis Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c013-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c013-stem-patient",
          text: "Mr Kieran D'Souza, a 58-year-old man, has presented with fever, cough and increasing weakness over two days. His partner, Anika, is present."
        },
        {
          id: "c013-stem-start",
          text: "Kieran is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c013-task-assess",
          text: "Assess Kieran and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c013-task-interpret",
          text: "Interpret the initial and repeat findings and discuss your next steps.",
          timing: "3 minutes"
        },
        {
          id: "c013-task-explain",
          text: "Explain your assessment and management plan to Kieran and Anika.",
          timing: "1 minute"
        },
        {
          id: "c013-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c013-run-assessment",
          heading: "Assessment and first treatment",
          turns: [
            {
              id: "c013-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-start", text: "You may begin." }]
            },
            {
              id: "c013-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c013-run-first-action", text: "The doctor performs hand hygiene, applies appropriate respiratory precautions and approaches Kieran." }]
            },
            {
              id: "c013-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-intro", text: "Hello Kieran, I am Ushana, one of the emergency doctors. Can you confirm your full name and tell me what is troubling you most?" }]
            },
            {
              id: "c013-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c013-run-opening", text: "Kieran D'Souza. I cannot catch my breath, and I feel too weak to sit up." }]
            },
            {
              id: "c013-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-consent", text: "I will assess and treat you while we speak. Is it okay for Anika to help with the history?" }]
            },
            {
              id: "c013-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c013-run-consent-answer", text: "Yes." }]
            },
            {
              id: "c013-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-primary", text: "I assess airway, breathing, circulation and conscious state. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check temperature, glucose, perfusion and urine output. Examine the chest, heart, abdomen, skin and calves. Please provide the findings." }]
            },
            {
              id: "c013-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c013-run-primary-findings", text: "Kieran's airway is patent. Respiratory rate is 34 breaths per minute, oxygen saturation is 88% on room air and there are coarse crackles with bronchial breathing at the right base. Pulse is 132 beats per minute and regular, blood pressure is 82/46 mmHg, temperature is 39.1 degrees Celsius and capillary refill time is five seconds. His knees are mottled, GCS is 14 and blood glucose is 8.1 mmol/L. He weighs 78 kilograms. There is no raised jugular venous pressure, peripheral oedema, calf asymmetry, rash or abdominal tenderness." }]
            },
            {
              id: "c013-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-recognition", text: "This is shock with a likely respiratory infection. Activate the adult sepsis pathway and call the senior emergency doctor and intensive-care team. Give oxygen, targeting 92% to 96%. Obtain two large-bore intravenous lines and insert a urinary catheter, if not contraindicated, for hourly urine output." }]
            },
            {
              id: "c013-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-investigations", text: "Take two blood-culture sets, a blood gas with lactate, full blood count, renal and liver function and coagulation studies. Send sputum and respiratory viral testing without delaying treatment. Arrange ECG, portable chest X-ray and bedside cardiac and lung ultrasound." }]
            },
            {
              id: "c013-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-treatment", text: "Record the recognition time and give empiric intravenous antibiotics for severe community-acquired pneumonia now. Take cultures first only if this causes no delay. Give 500 millilitres of Hartmann's solution and reassess circulation, lungs and fluid responsiveness." }]
            },
            {
              id: "c013-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c013-run-treatment-action", text: "Oxygen, monitoring and intravenous access are established. Cultures are taken, antibiotics are administered and a measured fluid bolus is given while the senior and intensive-care teams are called." }]
            }
          ]
        },
        {
          id: "c013-run-response",
          heading: "Source, treatment response and escalation",
          turns: [
            {
              id: "c013-turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-history", text: "Anika, when did this begin, and how did his breathing and cough change today?" }]
            },
            {
              id: "c013-turn-history-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-history-answer", text: "Fever and cough began two days ago. Today he produced rusty sputum, had sharp right-sided pain when breathing and became much weaker. I had influenza last week." }]
            },
            {
              id: "c013-turn-source-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-source-history", text: "Any choking, coughing blood, vomiting, diarrhoea, urinary symptoms, rash or wound? Any recent antibiotic or hospital stay?" }]
            },
            {
              id: "c013-turn-source-history-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-source-history-answer", text: "No. He has not taken antibiotics or been in hospital recently." }]
            },
            {
              id: "c013-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-background", text: "Any heart, lung, kidney or immune problem? What medicines and allergies? Has he passed urine today?" }]
            },
            {
              id: "c013-turn-background-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-background-answer", text: "Only high blood pressure treated with irbesartan, and no allergies. He passed a little dark urine this morning and none since." }]
            },
            {
              id: "c013-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c013-run-results", text: "Lactate is 6.0 mmol/L, pH 7.28 and bicarbonate 17 mmol/L. White cell count is 19.4, platelets 92 and creatinine 168 micromol/L from a baseline of 82. Chest X-ray shows dense right lower-lobe consolidation. Bedside ultrasound shows a hyperdynamic left ventricle with no pericardial effusion. After the first 500 millilitres of Hartmann's, blood pressure is 88/50, pulse 126 and refill four seconds. A passive leg raise produces a temporary improvement in pulse pressure, and the lungs are unchanged." }]
            },
            {
              id: "c013-turn-second-fluid",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-second-fluid", text: "This is pneumonia causing septic shock with acute kidney injury. Begin peripheral noradrenaline now at the local-protocol starting rate of 5 micrograms per minute because hypotension persists. As he remains fluid responsive without overload, give a second 500-millilitre Hartmann's bolus concurrently and reassess. Start empiric oseltamivir while PCR is pending, adjusted for renal function." }]
            },
            {
              id: "c013-turn-second-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c013-run-second-treatment-action", text: "Peripheral noradrenaline and the second measured fluid bolus commence. The first oseltamivir dose is prescribed and given." }]
            },
            {
              id: "c013-turn-repeat-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c013-run-repeat-findings", text: "After a total of one litre of Hartmann's, blood pressure is 86/48 mmHg, mean arterial pressure is 61, pulse is 124 and refill remains four seconds. Urine output is 10 millilitres. Passive leg raise no longer changes pulse pressure. Oxygen saturation is 93% on oxygen, and repeat lung ultrasound now shows increasing bilateral B-lines." }]
            },
            {
              id: "c013-turn-vasopressor",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-vasopressor", text: "Stop further rapid boluses because fluid responsiveness has been lost and B-lines are increasing. Continue noradrenaline through monitored proximal peripheral access while central access is arranged, and titrate from the local-protocol starting rate to a mean arterial pressure of at least 65 mmHg and clinical perfusion. Intensive care will manage vasopressor and organ support. Repeat lactate within two hours." }]
            },
            {
              id: "c013-turn-partner-question",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-partner-question", text: "Why are you not just giving him more fluid until the pressure comes up?" }]
            },
            {
              id: "c013-turn-partner-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-partner-answer", text: "We checked after each measured bolus. He is no longer responding and fluid is starting to collect in his lungs. Noradrenaline supports his circulation while antibiotics treat the infection." }]
            },
            {
              id: "c013-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-time", text: "Please explain the diagnosis and ongoing management plan." }]
            }
          ]
        },
        {
          id: "c013-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c013-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-explanation", text: "Kieran, the X-ray shows right-sided pneumonia. It has triggered sepsis, and your circulation is not delivering enough blood to your organs. This is septic shock. Anika, I will keep explaining each step while we treat him." }]
            },
            {
              id: "c013-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-plan", text: "Kieran, you have received oxygen, antibiotics, oseltamivir and measured fluid. Noradrenaline is supporting your circulation because more fluid may harm your lungs. Intensive care will monitor your breathing, pressure, urine, kidneys and lactate and provide further support if needed." }]
            },
            {
              id: "c013-turn-review",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-review", text: "Cultures and viral testing may identify the cause. Treatment will be reviewed when results return, and we will look for a drainable complication if he does not improve." }]
            },
            {
              id: "c013-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-handover-prompt", text: "Please finish with a concise handover to the intensive-care clinician." }]
            },
            {
              id: "c013-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c013-run-handover", text: "Kieran D'Souza is 58 with severe right lower-lobe pneumonia and septic shock. Initial pressure was 82/46, saturation 88% and lactate 6.0, with acute kidney injury and oliguria. Cultures, pneumonia antibiotics, oseltamivir, oxygen and two measured 500-millilitre Hartmann's boluses have been given. MAP remains 61; he is no longer fluid responsive and B-lines are increasing. Noradrenaline is running at 5 micrograms per minute through monitored peripheral access while central access is arranged. Repeat lactate and intensive-care organ support are planned." }]
            },
            {
              id: "c013-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Sepsis Clinical Care Standard",
        date: "2022 standard, current citation July 2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis"
      },
      {
        organisation: "Queensland Health",
        title: "Adult Sepsis Pathway, Low MRSA Non-Tropical",
        date: "Version 2.00, March 2025",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0033/1383963/SW1283-v2.pdf"
      },
      {
        organisation: "Clinical Excellence Commission",
        title: "Adult Sepsis Pathway",
        date: "Current NSW pathway accessed July 2026",
        url: "https://cec.health.nsw.gov.au/__data/assets/pdf_file/0005/291803/Adult-Sepsis-Pathway.PDF"
      },
      {
        organisation: "Centers for Disease Control and Prevention",
        title: "Influenza Antiviral Medications: Summary for Clinicians",
        date: "Updated March 2026",
        url: "https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html"
      }
    ]
  });

  var caseThirteen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-013"; });
  function buildHint13(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return {
      id: id,
      target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 },
      citationIds: citationIds,
      where: where,
      popUp: popUp,
      say: [say],
      pause: pause,
      recap: recap,
      reorient: reorient
    };
  }
  caseThirteen.masteryFocus = {
    case: "Assess fever, cough and increasing weakness, treat immediate threats, then use the repeat findings to adjust management safely.",
    clinical: "In any acutely unwell patient, separate source, organ dysfunction and treatment response, then let each reassessment change the next action.",
    tasks: [
      "Assess and manage",
      "Interpret findings and next steps",
      "Explain assessment and plan",
      "Concise clinical handover"
    ],
    transfer: "After another patient with sepsis receives fluid, the blood pressure remains low and new bilateral B-lines appear. Which repeat findings would decide your next circulation step?",
    transferAnswer: "Persistent hypotension plus new B-lines suggests that more fluid may now worsen pulmonary congestion. Repeat perfusion and fluid-responsiveness assessment; if the patient is no longer fluid responsive, stop rapid boluses and start or titrate vasopressor support with critical-care input.",
    transferChecks: [
      "Passive-leg-raise or dynamic fluid response",
      "Lung findings, oxygenation and breathing",
      "Perfusion, lactate and urine-output trend",
      "Blood-pressure response and vasopressor need"
    ],
    transferCitationIds: ["qld-sepsis-2025", "acsqhc-sepsis-2022"]
  };
  caseThirteen.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-sepsis-2022", title: "Sepsis Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "2022 standard, current July 2026", url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis" },
    { id: "qld-sepsis-2025", title: "Adult Sepsis Pathway, Low MRSA Non-Tropical", organisation: "Queensland Health", date: "Version 2.00, March 2025", url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0033/1383963/SW1283-v2.pdf" },
    { id: "anzcor-oxygen-2021", title: "Guideline 9.2.10: The Use of Oxygen in Emergencies", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Approved April 2021; current July 2026", url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseThirteen.reasoningCompass = {
    stem: {
      title: "Keep the four tasks in sight",
      steps: [
        { time: "0 to 30 seconds", text: "Fix the setting and the three-minute assessment task. Fever, cough and weakness require stability checks before a long history." },
        { time: "30 to 60 seconds", text: "Prepare one sequence: ABCDE, monitoring, likely source, organ perfusion, treatment and reassessment." },
        { time: "1 to 2 minutes", text: "Set the task change points: assess and manage to minute 3, interpret repeat findings to minute 6, explain to minute 7, hand over in the final minute." }
      ],
      anchor: "Assess and manage 0 to 3 | Interpret and adjust 3 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Treat and think at the same time",
      steps: [
        { time: "0 to 3 minutes", text: "Obtain ABCDE findings, start immediate support for any abnormal physiology, call for help and begin time-critical treatment for the leading source." },
        { time: "3 to 6 minutes", text: "Clarify the source and background, interpret organ injury, then use the response after each treatment to decide what should continue, stop or change." },
        { time: "6 to 8 minutes", text: "At the prompt, explain the diagnosis and changing treatment, then hand over severity, treatment given, response and the next critical action." }
      ],
      anchor: "If breathing, circulation or conscious state worsens, interrupt the task, repeat ABCDE and escalate; then return to the question or action you paused."
    }
  };
  caseThirteen.hints = [
    buildHint13("c013-hint-01", "stem", "c013-stem-role", "emergency department", ["amc-spec-2026", "amc-tips-2024"], "Reading the setting", "Emergency department. What changes first?", "You can assess and treat in parallel. I would prepare monitoring, intravenous access and senior help before trying to complete every question.", "The setting gives you resources, not a diagnosis.", "This may be an unstable adult emergency.", "Read the presenting symptoms and decide what must be checked immediately."),
    buildHint13("c013-hint-02", "stem", "c013-stem-patient", "58-year-old man", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age and context", "Does 58 point to one cause?", "Age raises the chance of serious infection and cardiopulmonary disease, but the current physiology will decide urgency.", "Age alone cannot settle the cause.", "Kieran is 58; stability is still unknown.", "Read the symptom cluster and duration."),
    buildHint13("c013-hint-03", "stem", "c013-stem-patient", "fever, cough and increasing weakness over two days", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Reading the symptom cluster", "This sounds infectious. Is that enough?", "It suggests an infection, probably respiratory, but increasing weakness may mean hypoxia or poor organ perfusion. I need observations before naming the severity or source.", "A likely source does not tell you how sick he is.", "Infection is plausible; organ function is unknown.", "Check whether he can speak, breathe and perfuse safely."),
    buildHint13("c013-hint-04", "stem", "c013-stem-patient", "His partner, Anika, is present", ["acsqhc-communication-2026", "amc-tips-2024"], "Using collateral history", "Should I speak only to Kieran?", "Start with Kieran and ask permission to involve Anika. She can supply timing and functional change while treatment continues.", "Presence is not consent.", "Anika may help without displacing Kieran.", "Confirm consent and use her for the timeline when needed."),
    buildHint13("c013-hint-05", "stem", "c013-stem-start", "findings and investigation results when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning requests", "What will I only receive if I ask?", "The station is telling you to request a structured examination and purposeful tests. Ask for ABCDE findings first, then investigations that answer source, organ injury and treatment response.", "The findings arrive through your requests.", "Your requests control the information flow.", "Prepare the first complete assessment request."),
    buildHint13("c013-hint-06", "stem", "c013-task-assess", "Assess Kieran and discuss your management", ["amc-spec-2026", "amc-tips-2024", "acsqhc-deterioration-2026"], "Anchoring task one", "Does assess mean history first?", "Not in an emergency presentation. Assess means ABCDE, observations, focused examination and immediate treatment while you gather a short history.", "Danger can interrupt the clock.", "Task one is assessment plus action, not a history recital.", "Use the first three minutes for stability and first treatment."),
    buildHint13("c013-hint-07", "stem", "c013-task-interpret", "initial and repeat findings", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task two", "Why does the task say repeat?", "Because the response to treatment is part of the diagnosis and management. Compare perfusion, lungs and urine after each intervention, then let the repeat evidence change the plan.", "A treatment trial needs a measured response.", "Minutes 3 to 6 test adjustment, not memory.", "Look for what improved, what did not and what new harm appeared."),
    buildHint13("c013-hint-task-explain", "stem", "c013-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task three", "What changes at minute six?", "Stop interpreting and speak to Kieran and Anika for one minute. Explain the leading diagnosis, what it is doing to his organs, treatment already given and what happens next.", "The audience and language change at this task.", "Minute 6 to 7 is explanation, not further investigation listing.", "Keep the final minute for handover."),
    buildHint13("c013-hint-08", "stem", "c013-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which facts must I include?", "Give identity, working diagnosis, severity, organ injury, treatment already given, response and the immediate next action. Choose the essentials and speak clearly.", "Keep the history to the facts that explain current risk.", "Explanation and handover are separate required tasks.", "Keep a running note of the few facts the next clinician needs."),
    buildHint13("c013-hint-09", "run", "c013-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is my first move?", "Approach safely, identify yourself and begin assessment. The first task is already running.", "Start with the patient, not a speech to the examiner.", "You have three minutes for assessment and first management.", "Use infection precautions and hear Kieran's immediate problem."),
    buildHint13("c013-hint-10", "run", "c013-run-first-action", "respiratory precautions", ["acsqhc-deterioration-2026"], "Protecting the room", "Why precautions before the diagnosis?", "Fever and cough can transmit respiratory infection. Basic precautions protect Kieran, Anika and staff without delaying urgent care.", "Safety actions can occur together.", "The source is not confirmed.", "Approach and assess while precautions are in place."),
    buildHint13("c013-hint-11", "run", "c013-run-intro", "what is troubling you most", ["amc-tips-2024", "acsqhc-communication-2026"], "Opening the assessment", "Why ask one broad question in an emergency?", "It quickly shows speech, breathlessness, attention and the patient's priority. You are observing airway, breathing and conscious state while listening.", "The opening question is part of ABCDE.", "Assessment has begun before the formal request.", "Let the first answer decide how quickly to interrupt."),
    buildHint13("c013-hint-12", "run", "c013-run-opening", "too weak to sit up", ["acsqhc-deterioration-2026", "anzcor-oxygen-2021"], "Hearing functional collapse", "Can I continue the history?", "Not yet. Breathlessness plus inability to sit up signals major physiological stress. Obtain ABCDE findings and start treatment now, then return to focused questions.", "Function can reveal severity before numbers do.", "Kieran may be unstable.", "Ask permission to involve Anika, then request the full primary assessment."),
    buildHint13("c013-hint-13", "run", "c013-run-consent", "Is it okay for Anika to help", ["acsqhc-communication-2026"], "Including Anika", "Why ask when time is short?", "A brief consent protects Kieran's control and lets Anika supply details while he is breathless.", "Urgency does not erase consent when he can decide.", "Kieran remains the patient; Anika is collateral support.", "Move straight to ABCDE."),
    buildHint13("c013-hint-14", "run", "c013-run-primary", "airway, breathing, circulation and conscious state", ["acsqhc-deterioration-2026", "anzcor-oxygen-2021"], "Requesting the primary survey", "Do I need every system now?", "Start with what can kill quickly. Add monitoring, perfusion, urine output and a focused source examination because they show both severity and likely origin.", "This is assessment with simultaneous action.", "Breathing, circulation and organ perfusion need numbers.", "Take the findings in order and act on each threat."),
    buildHint13("c013-hint-15", "run", "c013-run-primary-findings", "oxygen saturation is 88% on room air", ["anzcor-oxygen-2021", "acsqhc-deterioration-2026"], "Reading oxygenation", "Eighty-eight percent. What now?", "This is clinically important hypoxaemia. Give oxygen, monitor continuously and assess whether pneumonia, oedema or another chest process is limiting gas exchange.", "Treat the low oxygen before finishing the diagnostic discussion.", "Breathing is failing.", "Continue through circulation and conscious state, then escalate the whole picture."),
    buildHint13("c013-hint-16", "run", "c013-run-primary-findings", "blood pressure is 82/46 mmHg", ["acsqhc-deterioration-2026"], "Reading circulation", "Could fever alone explain this pressure?", "Severe hypotension with tachycardia shows inadequate circulation. Fever may be the cause, but shock is the immediate problem.", "Name the physiological failure before its cause.", "Kieran has hypoxia and shock.", "Keep reading for refill, skin, conscious state and urine effects."),
    buildHint13("c013-hint-17", "run", "c013-run-primary-findings", "His knees are mottled, GCS is 14", ["acsqhc-sepsis-2022", "qld-sepsis-2025"], "Combining the findings", "Is there enough evidence to name the problem now?", "Yes. Suspected infection plus hypotension, mottling and altered conscious state supports sepsis with shock. Right-base bronchial breathing makes severe pneumonia the leading source, while other sources still need a focused check.", "This conclusion comes from infection plus organ dysfunction, not fever alone.", "The leading problem is pneumonia causing septic shock.", "Activate the pathway and begin time-critical treatment."),
    buildHint13("c013-hint-18", "run", "c013-run-recognition", "Activate the adult sepsis pathway", ["acsqhc-sepsis-2022", "qld-sepsis-2025", "anzcor-oxygen-2021"], "Interrupting for danger", "Does this abandon the three-minute task?", "This is part of the assessment. Call senior and intensive-care help, give oxygen, obtain access and monitor urine output while continuing focused assessment.", "Emergency treatment interrupts the routine sequence because it is needed now.", "Shock is recognised and support is mobilised.", "Obtain cultures and organ-injury tests without delaying antibiotics."),
    buildHint13("c013-hint-19", "run", "c013-run-investigations", "blood gas with lactate", ["acsqhc-sepsis-2022", "qld-sepsis-2025"], "Choosing early tests", "What does lactate add?", "It helps assess tissue stress and provides a value to follow, but it does not identify the source. Cultures seek the organism; blood tests assess organ injury; imaging examines the chest.", "Each test should answer a different question.", "Source, severity and response are being assessed together.", "Take cultures promptly, but protect the antibiotic time."),
    buildHint13("c013-hint-20", "run", "c013-run-treatment", "antibiotics for severe community-acquired pneumonia now", ["acsqhc-sepsis-2022", "qld-sepsis-2025"], "Starting causal treatment", "Should I wait for the X-ray?", "The respiratory findings and shock justify empiric treatment now. Cultures come first only when they cause no delay, and the regimen follows local severe-pneumonia guidance.", "Uncertainty about the organism is not a reason to delay treatment.", "Support and source treatment have started.", "Give a measured fluid bolus, then reassess rather than assuming more is better."),
    buildHint13("c013-hint-21", "run", "c013-run-treatment", "500 millilitres of Hartmann's solution and reassess", ["qld-sepsis-2025", "acsqhc-sepsis-2022"], "Using fluid as a monitored treatment", "Why not give all the fluid at once?", "A measured bolus lets you see whether circulation improves and whether lung congestion appears. The useful dose is determined by repeated examination, not habit.", "Fluid is a treatment with benefit and harm.", "Kieran needs circulation support, but his lungs are already diseased.", "After the bolus, compare pressure, refill, lungs and fluid responsiveness."),
    buildHint13("c013-hint-22", "run", "c013-run-history", "how did his breathing and cough change today", ["acsqhc-sepsis-2022", "amc-tips-2024"], "Returning to the history", "Have I lost the history task?", "You haven't. Immediate care is underway, so return to the question you paused: onset and change today. Anika can answer while Kieran receives treatment.", "Return to the exact question you paused.", "ABCDE and first treatment are complete.", "Clarify respiratory source features and rapid deterioration."),
    buildHint13("c013-hint-23", "run", "c013-run-history-answer", "rusty sputum", ["acsqhc-sepsis-2022"], "Refining the source", "Does rusty sputum prove a bacterium?", "It supports lower respiratory infection with the pleuritic pain and focal chest signs, but it does not identify the organism. Influenza exposure keeps viral infection and bacterial coinfection relevant.", "Specific-looking sputum is still not microbiology.", "Pneumonia remains the leading source.", "Check competing sources and recent healthcare exposure."),
    buildHint13("c013-hint-24", "run", "c013-run-source-history", "urinary symptoms, rash or wound", ["acsqhc-sepsis-2022", "qld-sepsis-2025"], "Checking other sources", "Why ask beyond the chest?", "Shock can have more than one possible source. A brief source screen tests the respiratory conclusion without delaying treatment.", "Leading does not mean exclusive.", "The chest evidence is strongest so far.", "Check medication, allergy, comorbidity and urine output next."),
    buildHint13("c013-hint-25", "run", "c013-run-background-answer", "none since", ["acsqhc-sepsis-2022", "qld-sepsis-2025"], "Hearing oliguria", "Is dark urine just dehydration?", "It may reflect reduced renal perfusion. Very little urine plus shock raises concern for acute kidney injury and gives you an important response measure.", "Urine output is an organ sign, not a minor history detail.", "There is likely kidney involvement before the blood result arrives.", "Interpret lactate, creatinine and treatment response together."),
    buildHint13("c013-hint-26", "run", "c013-run-results", "Lactate is 6.0 mmol/L", ["acsqhc-sepsis-2022", "qld-sepsis-2025"], "Confirming severity", "What does six mean here?", "With hypotension, delayed refill and oliguria, this high lactate supports severe circulatory failure. The acidosis and creatinine show that organs are being affected.", "Read lactate beside circulation and organ findings.", "Shock has biochemical and clinical evidence.", "Now confirm the source and read the first treatment response."),
    buildHint13("c013-hint-27", "run", "c013-run-results", "dense right lower-lobe consolidation", ["acsqhc-sepsis-2022", "qld-sepsis-2025"], "Confirming the source", "Does the X-ray settle everything?", "It confirms a strong pneumonia source. The hyperdynamic heart and absent effusion also make primary pump failure or tamponade less likely at this point.", "Imaging supports the cause; it does not replace reassessment.", "Severe right lower-lobe pneumonia is driving the working diagnosis.", "Compare the circulation after the first bolus."),
    buildHint13("c013-hint-28", "run", "c013-run-results", "temporary improvement in pulse pressure", ["qld-sepsis-2025", "acsqhc-sepsis-2022"], "Reading fluid responsiveness", "Was the first bolus useful?", "Yes, briefly. The passive leg raise and unchanged lungs suggest another measured bolus may still improve forward flow, but the benefit must be checked again.", "A positive response is permission to reassess after one more step, not permission for unlimited fluid.", "He remains shocked and appears temporarily fluid responsive.", "Support pressure concurrently and repeat the same bedside checks."),
    buildHint13("c013-hint-29", "run", "c013-run-second-fluid", "Begin peripheral noradrenaline now", ["qld-sepsis-2025", "acsqhc-sepsis-2022"], "Adding vasopressor support", "Why start noradrenaline while giving more fluid?", "Hypotension persists despite initial treatment. Noradrenaline supports vascular tone while one further measured bolus tests the remaining fluid response; both require close monitoring.", "Fluid and vasopressor support can overlap when each addresses a current problem.", "He needs immediate pressure support and another careful reassessment.", "Watch perfusion, urine output and lungs after the second bolus."),
    buildHint13("c013-hint-30", "run", "c013-run-repeat-findings", "Passive leg raise no longer changes pulse pressure", ["qld-sepsis-2025", "acsqhc-sepsis-2022"], "Recognising a changed response", "The pressure is still low. More fluid?", "Not automatically. He no longer shows fluid responsiveness, urine remains low and new B-lines suggest fluid is accumulating in the lungs.", "The repeat findings have changed the treatment decision.", "Further rapid boluses now carry more harm than likely benefit.", "Stop rapid fluid and titrate vasopressor support with intensive care."),
    buildHint13("c013-hint-31", "run", "c013-run-vasopressor", "Stop further rapid boluses", ["qld-sepsis-2025", "acsqhc-sepsis-2022"], "Acting on reassessment", "Am I under-resuscitating him?", "You gave measured fluid while it helped and stopped when the benefit disappeared and lung congestion emerged. Continue noradrenaline and organ support, then follow perfusion and lactate.", "The resuscitation plan changes with his response.", "The current problem needs vasopressor support, not another rapid bolus.", "Explain this change clearly when Anika asks."),
    buildHint13("c013-hint-32", "run", "c013-run-partner-question", "Why are you not just giving him more fluid", ["acsqhc-communication-2026", "qld-sepsis-2025"], "Answering the concern", "How do I explain a changing plan without sounding uncertain?", "Say what you measured: the first response was temporary, the later response disappeared and lung fluid increased. Changing treatment is a response to new evidence, not indecision.", "Use the patient's findings, not technical defence.", "Anika needs the reason fluid has stopped.", "Link the change to lung safety and the role of noradrenaline."),
    buildHint13("c013-hint-33", "run", "c013-run-partner-answer", "Noradrenaline supports his circulation", ["acsqhc-communication-2026", "acsqhc-sepsis-2022"], "Keeping the explanation causal", "What is the simplest logic?", "Infection needs antibiotics. Low vascular tone needs noradrenaline. Fluid was used only while it improved circulation without worsening the lungs.", "One treatment does not solve every part of shock.", "The management now matches cause, circulation and response.", "At the examiner prompt, switch fully to explanation."),
    buildHint13("c013-hint-34", "run", "c013-run-time", "Please explain the diagnosis", ["amc-spec-2026", "amc-tips-2024"], "Turning to Kieran and Anika", "I was still interpreting. What now?", "That part is complete. Explain the source, what sepsis and shock mean, what has been done and why the plan changed.", "The prompt has changed your audience.", "Assessment and interpretation are complete.", "Speak to Kieran and Anika in everyday language."),
    buildHint13("c013-hint-35", "run", "c013-run-explanation", "circulation is not delivering enough blood to your organs", ["acsqhc-sepsis-2022", "acsqhc-communication-2026"], "Explaining shock", "How much mechanism is useful?", "This one sentence is enough: pneumonia triggered a body-wide response, pressure and flow fell, and the kidneys and brain began receiving too little blood.", "Explain the consequence before the terminology.", "They now know why this is more than a chest infection.", "Describe current treatment and intensive-care monitoring."),
    buildHint13("c013-hint-36", "run", "c013-run-plan", "more fluid may harm your lungs", ["qld-sepsis-2025", "acsqhc-communication-2026"], "Explaining the adjusted plan", "Will this frighten them?", "It is clearer to explain that support is continuing, but with a different tool. Noradrenaline now supports circulation because extra rapid fluid may worsen breathing.", "Honest change can still sound controlled.", "Treatment is active and individually reassessed.", "Mention what will be monitored and what may happen next."),
    buildHint13("c013-hint-37", "run", "c013-run-review", "if he does not improve", ["acsqhc-sepsis-2022"], "Planning beyond the first hour", "What if the first diagnosis is incomplete?", "Cultures may narrow treatment, and failure to improve should trigger a search for resistant infection, another source or a complication that needs drainage.", "A working diagnosis remains reviewable.", "Immediate care is established; cause-directed review continues.", "Prepare the required handover, not another explanation."),
    buildHint13("c013-hint-38", "run", "c013-run-handover-prompt", "concise handover", ["acsqhc-communication-2026", "amc-spec-2026"], "Switching to handover", "What can I omit?", "Omit the full narrative. Keep the severe pneumonia, septic shock, organ injury, treatment doses, loss of fluid responsiveness, current noradrenaline and the next intensive-care actions.", "Concise means clinically selective.", "The final required task is one minute.", "Hand over current risk and unfinished work."),
    buildHint13("c013-hint-run-handover", "run", "c013-run-handover", "he is no longer fluid responsive and B-lines are increasing", ["acsqhc-communication-2026", "qld-sepsis-2025"], "Transferring the decisive change", "Why include both findings?", "Together they explain why rapid fluid stopped and noradrenaline now carries the circulation plan. The receiving team hears the treatment response, not only the starting diagnosis.", "A handover must preserve what changed.", "Severity, treatment, response and next support have been transferred.", "Finish the handover and wait for the examiner."),
    buildHint13("c013-hint-39", "run", "c013-run-end", "The station is complete", ["amc-tips-2024"], "Letting the station finish", "Should I keep correcting my answer?", "The station has ended. Take one breath and let this case finish before reading the next role and tasks.", "Leave this emergency here.", "Case 13 is complete.", "Begin the next case from its own first line." )
  ];
  caseThirteen.hints.forEach(function (hint, index) { hint.id = "c013-hint-" + String(index + 1).padStart(2, "0"); });
  caseThirteen.essentialHintIds = [
    "c013-hint-03", "c013-hint-06", "c013-hint-07", "c013-hint-08",
    "c013-hint-09", "c013-hint-13", "c013-hint-18", "c013-hint-19",
    "c013-hint-21", "c013-hint-23", "c013-hint-31", "c013-hint-32",
    "c013-hint-33", "c013-hint-35", "c013-hint-39", "c013-hint-41"
  ];
  var clockByHint13 = {
    "c013-hint-06": "Minutes 0 to 3: assess, treat immediate threats and start source treatment.",
    "c013-hint-23": "First treatment is running. Return to the brief source history without losing reassessment.",
    "c013-hint-31": "Before minute 6: compare the repeat circulation and lung findings with the first response.",
    "c013-hint-35": "Minute 6: leave interpretation and explain the current diagnosis and plan.",
    "c013-hint-39": "Final minute: hand over severity, response and the next action.",
    "c013-hint-41": "Time is complete. One breath, then begin the next stem from its first line."
  };
  var deeperByHint13 = {
    "c013-hint-29": ["A passive leg raise briefly shifts venous blood towards the heart. A temporary pulse-pressure improvement suggests that another measured fluid step may still help."],
    "c013-hint-31": ["New B-lines mean more lung water. Loss of fluid responsiveness plus rising lung water is the point to stop rapid boluses and rely on vasopressor support."],
    "c013-hint-36": ["Infection can reduce vascular tone and disturb the small vessels: lower effective flow → reduced kidney and brain perfusion → oliguria and confusion."]
  };
  caseThirteen.hints.forEach(function (hint) {
    if (clockByHint13[hint.id]) hint.clock = clockByHint13[hint.id];
    if (deeperByHint13[hint.id]) hint.deeper = deeperByHint13[hint.id];
  });
})();
