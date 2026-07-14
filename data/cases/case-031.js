(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-031",
    globalId: "CP-C031",
    registryId: "CP-P10-C002",
    displayNumber: "Case 31",
    title: "Headache and upper abdominal discomfort",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 10, title: "Obstetric Catastrophe" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c031-stem-role",
          text: "You are a doctor working in the maternity assessment unit."
        },
        {
          id: "c031-stem-patient",
          text: "Ms Rhea Menon, a 34-year-old woman who is 36 weeks and 2 days pregnant, has presented with headache and upper abdominal discomfort."
        },
        {
          id: "c031-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c031-task-history",
          text: "Take a focused history from Rhea.",
          timing: "2 minutes"
        },
        {
          id: "c031-task-assess",
          text: "Request a focused assessment and relevant findings, and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c031-task-explain",
          text: "Explain your assessment and concerns to Rhea.",
          timing: "2 minutes"
        },
        {
          id: "c031-task-management",
          text: "Outline your management and provide a concise clinical handover to the senior clinician.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c031-run-history",
          heading: "Focused history and requested assessment",
          turns: [
            {
              id: "c031-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-start", text: "You may begin." }]
            },
            {
              id: "c031-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-first-action", text: "The doctor performs hand hygiene and approaches Rhea." }]
            },
            {
              id: "c031-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-intro", text: "Hello, I am Ushana, a maternity doctor. Confirm your name. May I assess you?" }]
            },
            {
              id: "c031-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-consent", text: "Rhea Menon. Yes. My head is pounding and my upper abdomen hurts." }]
            },
            {
              id: "c031-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-symptom-question", text: "When did the headache start and is it worsening? Any visual change, nausea or confusion? Where is the pain?" }]
            },
            {
              id: "c031-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-symptom-answer", text: "Six hours ago; now nine out of ten despite paracetamol. My vision is blurred with flashing spots. I feel sick and hurt under my right ribs and upper middle. No confusion." }]
            },
            {
              id: "c031-turn-pregnancy-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-pregnancy-question", text: "I ask the nurse to record observations now. Any swelling? Is your baby moving normally? Any bleeding, fluid loss or contractions? Was your blood pressure abnormal?" }]
            },
            {
              id: "c031-turn-pregnancy-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-pregnancy-answer", text: "My face, hands and ankles became puffy over two days. The baby moves less. No bleeding, fluid or contractions. Yesterday my blood pressure was raised, and I was asked to return." }]
            },
            {
              id: "c031-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-background-question", text: "First pregnancy? Any seizures, migraine, hypertension, asthma, cardiac, kidney or liver disease? Medicines or allergies?" }]
            },
            {
              id: "c031-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-background-answer", text: "This is my first pregnancy. I have none of those conditions. I take pregnancy vitamins and have no allergies." }]
            },
            {
              id: "c031-turn-assessment-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-assessment-request", text: "I request ABC, conscious state, observations, correct-cuff blood pressure and glucose, neurological examination with reflexes and clonus, oedema, abdominal and obstetric examination, fetal heart and urine dip." }]
            },
            {
              id: "c031-turn-assessment-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-assessment-findings", text: "Airway is patent and Rhea is alert. Respiratory rate is 18, saturation 98%, pulse 96, blood pressure 172/114, temperature 36.8 and glucose 5.6. She has oedema, hyperreflexia, three-beat clonus and right upper quadrant and epigastric tenderness. There is no focal deficit. Fetal heart is 148 and urine has three-plus protein." }]
            },
            {
              id: "c031-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-interpretation", text: "This is severe pre-eclampsia with cerebral irritation. I call senior obstetrics, anaesthesia and midwifery and obtain two large-bore intravenous lines. Confirm no asthma, bradycardia, heart block or heart failure, then start magnesium sulfate 4 grams intravenously over 20 minutes and labetalol 20 mg intravenously. Recheck blood pressure within 10 to 15 minutes; do not wait for blood results." }]
            },
            {
              id: "c031-turn-early-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-early-treatment-action", text: "Both intravenous lines are patent. Magnesium loading and acute blood-pressure treatment begin while the team sends investigations." }]
            },
            {
              id: "c031-turn-investigation-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-investigation-request", text: "Send full blood count with platelets, blood film, electrolytes, creatinine, liver tests, coagulation, group and hold, and urine protein-to-creatinine ratio. Do not delay treatment." }]
            },
            {
              id: "c031-turn-investigation-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c031-run-investigation-results", text: "Platelets are 82 x 10^9/L, AST 118 units/L, ALT 126 units/L and creatinine 75 micromol/L. Urine protein-to-creatinine ratio is 180 mg/mmol. Haemoglobin and coagulation are currently normal." }]
            },
            {
              id: "c031-turn-aura",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-aura", text: "The flashing is getting brighter. I feel very strange." }]
            },
            {
              id: "c031-turn-seizure",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-seizure", text: "Rhea becomes unresponsive and develops a generalised tonic-clonic seizure." }]
            }
          ]
        },
        {
          id: "c031-run-resuscitation",
          heading: "Maternal-first seizure response and stabilisation",
          turns: [
            {
              id: "c031-turn-seizure-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-seizure-response", text: "This is eclampsia. Call the obstetric emergency response, anaesthesia, neonatal team and theatre. Note the time, place Rhea left lateral and protect her. Do not restrain her or put anything in her mouth. Assess ABC, suction and support the airway, give oxygen for hypoxaemia, check glucose, monitor and confirm both intravenous lines are patent." }]
            },
            {
              id: "c031-turn-response-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-response-action", text: "The team protects Rhea in the left lateral position, applies monitoring, supports her airway, checks glucose and confirms both intravenous lines." }]
            },
            {
              id: "c031-turn-postictal-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-postictal-findings", text: "The seizure stops after 70 seconds. Rhea is postictal; jaw support relieves snoring. Respiratory rate is 20, saturation improves from 93% to 98% with oxygen, pulse 118, blood pressure 178/116 and glucose 5.8." }]
            },
            {
              id: "c031-turn-magnesium",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-magnesium", text: "Complete the magnesium 4-gram loading dose, then infuse 1 gram per hour. Continue until 24 hours after birth or the last seizure, whichever is later. Follow the repeat-dose protocol if another seizure occurs." }]
            },
            {
              id: "c031-turn-blood-pressure",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-blood-pressure", text: "Her pressure is 178/116 after the first dose. Give further labetalol 20 to 40 mg at 10 to 15 minute intervals under protocol, to a maximum cumulative 80 mg, targeting below 160/110 without abrupt hypotension." }]
            },
            {
              id: "c031-turn-fluid-monitoring",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-fluid-monitoring", text: "Do not give a routine fluid load. Record all input and hourly urine; watch for pulmonary oedema. Check blood pressure, pulse, saturation and respiratory rate every 30 minutes, and reflexes and urine hourly. If magnesium toxicity is suspected, stop the infusion and check the level. For confirmed toxicity, give calcium gluconate 10%, 10 mL diluted in 100 mL saline intravenously over 10 minutes. Catheterise when safe and confirm consent when capacity returns." }]
            },
            {
              id: "c031-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-treatment-action", text: "Once the seizure has stopped and ABC support is established, continuous CTG starts while magnesium, antihypertensive treatment and maternal monitoring continue." }]
            },
            {
              id: "c031-turn-stabilised-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-stabilised-findings", text: "Rhea is alert. Blood pressure is 148/96, respiratory rate 18, saturation 98% and patellar reflexes remain present. There is no further seizure." }]
            },
            {
              id: "c031-turn-fetal-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-fetal-request", text: "Review the continuous CTG and obtain senior obstetric assessment of presentation, cervix and birth plan. Ultrasound must not delay indicated birth." }]
            },
            {
              id: "c031-turn-fetal-findings",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c031-run-fetal-findings", text: "CTG baseline is 150 with moderate variability and no decelerations. The fetus is cephalic and cervix two centimetres dilated." }]
            }
          ]
        },
        {
          id: "c031-run-communication",
          heading: "Explanation, consent, teach-back and handover",
          turns: [
            {
              id: "c031-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-explanation-prompt", text: "Please explain your assessment and concerns to Rhea." }]
            },
            {
              id: "c031-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-explanation", text: "Rhea, severe pre-eclampsia caused high blood pressure and a seizure, called eclampsia. It can affect your brain, liver, kidneys, blood cells and placenta. While you could not consent, we gave necessary treatment. Now you are awake, I will explain ongoing care and seek consent." }]
            },
            {
              id: "c031-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-concern", text: "Will my baby be all right? Is magnesium dangerous, and do I need a caesarean immediately?" }]
            },
            {
              id: "c031-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-concern-response", text: "The tracing is reassuring. Magnesium reduces further seizures; we monitor closely and have an antidote. Birth is recommended after stabilisation. Caesarean is not automatic; the route depends on your condition, the tracing, cervix and obstetric factors." }]
            },
            {
              id: "c031-turn-consent-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-consent-plan", text: "Do you consent to ongoing magnesium, blood-pressure treatment, monitoring and catheter care while the obstetrician discusses birth with you?" }]
            },
            {
              id: "c031-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-consent-answer", text: "Yes. Please continue and explain the birth plan to me and my partner." }]
            },
            {
              id: "c031-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-teachback", text: "Please tell me what happened, why magnesium continues and how the birth route is decided." }]
            },
            {
              id: "c031-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-teachback-answer", text: "Pre-eclampsia caused a seizure. Magnesium helps prevent another. I need birth after stabilisation, with induction or caesarean based on our condition." }]
            },
            {
              id: "c031-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-handover-prompt", text: "Please finish with a concise handover to the senior obstetrician." }]
            },
            {
              id: "c031-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c031-run-handover", text: "Rhea Menon is 34, primigravida at 36 weeks and 2 days. She has headache, visual disturbance, upper abdominal pain, oedema and reduced movements. Blood pressure was 172/114 with clonus and proteinuria; platelets are 82, AST 118 and ALT 126. Two intravenous lines, magnesium and labetalol started, then a 70-second seizure occurred. Maternal-first care is complete. Magnesium continues at 1 gram per hour; pressure is 148/96. She is alert without recurrence. CTG is reassuring, fetus cephalic and cervix two centimetres. Birth follows stabilisation; route is based on maternal, fetal and obstetric assessment, not automatic caesarean." }]
            },
            {
              id: "c031-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Society of Obstetric Medicine of Australia and New Zealand",
        title: "SOMANZ Hypertension in Pregnancy Guideline 2023",
        date: "2023",
        url: "https://somanz.org/content/uploads/2024/01/SOMANZ_Hypertension_in_Pregnancy_Guideline_2023.pdf"
      },
      {
        organisation: "Society of Obstetric Medicine of Australia and New Zealand",
        title: "Flowchart 6.6 Management of eclampsia",
        date: "2023",
        url: "https://somanz.org/content/uploads/2024/01/Flowchart-6.6-Management-of-eclampsia.pdf"
      },
      {
        organisation: "Society of Obstetric Medicine of Australia and New Zealand",
        title: "Flowchart 6.2 Management of acute hypertension",
        date: "2023",
        url: "https://somanz.org/content/uploads/2024/01/Flowchart-6.2-Management-of-acute-hypertension.pdf"
      }
    ]
  });

  var caseThirtyOne = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-031"; });
  function buildHint31(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtyOne.masteryFocus = {
    case: "Use late-pregnancy headache and upper abdominal discomfort to prioritise maternal and obstetric danger, establish maternal physiology and fetal wellbeing, then act on each disclosed change.",
    clinical: "In any pregnant patient who may be deteriorating, stabilise the mother first, reassess after every change, and make birth decisions from maternal, fetal and obstetric evidence together.",
    tasks: ["Focused pregnancy history", "Request and interpret findings", "Explain assessment and concerns", "Manage and hand over"],
    transfer: "If Rhea had active asthma with wheeze and a pulse of 52 when severe hypertension required urgent treatment, how would the blood-pressure plan change?",
    transferAnswer: "Avoid labetalol because bronchospasm and bradycardia risk make it unsuitable. Use another protocol-supported rapid agent, such as immediate-release oral nifedipine or intravenous hydralazine, with repeat blood-pressure checks and senior obstetric and anaesthetic oversight. Seizure prevention and the need for birth after stabilisation remain separate decisions.",
    transferChecks: ["Identify labetalol contraindications", "Choose a protocol alternative", "Repeat blood pressure promptly", "Keep seizure and birth plans separate"],
    transferCitationIds: ["somanz-hip-2023", "somanz-hypertension-2023"]
  };
  caseThirtyOne.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "somanz-hip-2023", title: "SOMANZ Hypertension in Pregnancy Guideline 2023", organisation: "Society of Obstetric Medicine of Australia and New Zealand", date: "2023", url: "https://somanz.org/content/uploads/2024/01/SOMANZ_Hypertension_in_Pregnancy_Guideline_2023.pdf" },
    { id: "somanz-eclampsia-2023", title: "Flowchart 6.6 Management of eclampsia", organisation: "Society of Obstetric Medicine of Australia and New Zealand", date: "2023", url: "https://somanz.org/content/uploads/2024/01/Flowchart-6.6-Management-of-eclampsia.pdf" },
    { id: "somanz-hypertension-2023", title: "Flowchart 6.2 Management of acute hypertension", organisation: "Society of Obstetric Medicine of Australia and New Zealand", date: "2023", url: "https://somanz.org/content/uploads/2024/01/Flowchart-6.2-Management-of-acute-hypertension.pdf" }
  ];
  caseThirtyOne.reasoningCompass = {
    stem: {
      title: "Start with maternal danger",
      steps: [
        { time: "0 to 30 seconds", text: "At 36 weeks, headache and upper abdominal discomfort require maternal neurological, cardiovascular, hepatic and obstetric causes to be considered together." },
        { time: "30 to 60 seconds", text: "Plan symptom progression, visual and neurological features, fetal movement and pregnancy warnings beside early maternal observations and focused examination." },
        { time: "1 to 2 minutes", text: "Fix the task times: history to minute 2, assessment to minute 4, explanation to minute 6, management and handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess 2 to 4 | Explain 4 to 6 | Manage and hand over 6 to 8"
    },
    run: {
      title: "Keep maternal physiology first",
      steps: [
        { time: "0 to 2 minutes", text: "Clarify the headache, upper abdominal discomfort, associated symptoms and pregnancy warnings while maternal observations are obtained." },
        { time: "2 to 4 minutes", text: "Interpret maternal physiology, the focused examination, requested evidence and fetal status together. Let any change in physiology reset the priorities." },
        { time: "4 to 8 minutes", text: "Explain the current assessment and next decisions, check understanding and consent, then hand over the maternal trend, fetal status and care already started." }
      ],
      anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the current task, respond, say where you paused and then return."
    }
  };
  caseThirtyOne.hints = [
    buildHint31("c031-hint-01", "stem", "c031-stem-role", "maternity assessment unit", ["amc-spec-2026", "somanz-hip-2023"], "Reading the setting", "What can begin while I ask questions?", "Maternal observations, fetal wellbeing checks and senior midwifery or obstetric support can begin together if the symptoms suggest danger.", "Do not treat this as a routine headache history.", "The setting supports parallel maternal and fetal assessment.", "Read gestation before interpreting the symptoms."),
    buildHint31("c031-hint-02", "stem", "c031-stem-patient", "36 weeks and 2 days pregnant", ["somanz-hip-2023"], "Using gestation in the differential", "How does late pregnancy change the differential?", "Pregnancy-specific complications become important, while ordinary neurological, hepatic and gastrointestinal causes still remain. Maternal stability comes before any birth decision.", "Gestation changes priorities, not the need for broad safety.", "This is a late-pregnancy presentation.", "Now connect the head and upper abdomen."),
    buildHint31("c031-hint-03", "stem", "c031-stem-patient", "headache and upper abdominal discomfort", ["somanz-hip-2023", "acsqhc-deterioration-2026"], "Reading the symptom pair", "Why not assess each symptom separately?", "Together in late pregnancy they can signal a systemic maternal process. Ask severity and progression, visual or neurological symptoms, exact abdominal site, nausea, swelling and fetal movement.", "The combination carries more weight than either symptom alone.", "A maternal obstetric danger must be excluded early.", "Check what findings will only appear when requested."),
    buildHint31("c031-hint-04", "stem", "c031-stem-context", "when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning requested findings", "Which categories will define urgency?", "Request maternal ABC and observations, neurological and abdominal findings, pregnancy and fetal assessment, urine evidence and blood tests for organ involvement.", "Ask for categories that change action.", "The stem has not provided current physiology.", "Anchor the four task blocks before starting."),
    buildHint31("c031-hint-05", "stem", "c031-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "Which questions fit two minutes?", "Clarify headache, vision, confusion, nausea and upper abdominal pain; swelling and fetal movement; bleeding, fluid or contractions; previous blood pressure; pregnancy, neurological and medical history, medicines and allergies.", "Ask short clusters linked to maternal or fetal risk.", "Task one is symptom severity, pregnancy warnings and treatment constraints.", "At minute 2, move to requested assessment."),
    buildHint31("c031-hint-06", "stem", "c031-task-assess", "Request a focused assessment", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "How should I order the findings?", "Start with maternal physiology and consciousness, then focused neurological, abdominal, obstetric, fetal, urine and organ-function evidence. Interpret the pattern rather than reciting it.", "Maternal safety leads the order.", "Minutes 2 to 4 establish severity and organ effect.", "At minute 4, stop examiner-facing analysis and address Rhea."),
    buildHint31("c031-hint-07", "stem", "c031-task-explain", "Explain your assessment and concerns", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What belongs in these two minutes?", "Explain the current maternal concern, what it may affect, what has already been done and what remains to decide for ongoing care and birth. Check understanding and consent.", "Use current evidence without giving a lecture.", "Minutes 4 to 6 belong to Rhea.", "Keep the last two minutes for management and handover."),
    buildHint31("c031-hint-08", "stem", "c031-task-management", "Outline your management and provide a concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final block", "How do I prevent management from consuming the handover?", "Use one minute for immediate priorities, monitoring and decision points, then one minute for identity, gestation, maternal trend, fetal status, treatment response and the next senior decision.", "Decide the switch time before you begin: one minute for management, one minute for handover.", "Minutes 6 to 8 contain two different tasks.", "Keep a running summary as the case changes."),
    buildHint31("c031-hint-09", "run", "c031-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is the first useful move?", "Approach Rhea, observe her consciousness and distress, identify yourself and begin the symptom history while observations are arranged.", "The first task is already running.", "You have two minutes for focused history.", "Confirm identity and permission to assess."),
    buildHint31("c031-hint-10", "run", "c031-run-consent", "My head is pounding", ["somanz-hip-2023"], "Hearing severity", "What needs clarifying before calling it a migraine?", "Ask onset, progression, response to analgesia, visual symptoms, confusion, focal symptoms and seizure. In late pregnancy, severe or worsening headache needs prompt observations.", "Do not let a common label delay maternal assessment.", "Rhea is alert but describes severe symptoms.", "Use the symptom answer to identify neurological and hepatic warnings."),
    buildHint31("c031-hint-11", "run", "c031-run-symptom-answer", "blurred with flashing spots", ["somanz-hip-2023"], "Recognising cerebral warning symptoms", "Why do visual symptoms matter?", "Severe persistent headache with visual disturbance suggests cerebral irritation and increased seizure risk in a late-pregnancy systemic disorder. Obtain blood pressure and neurological findings immediately.", "This is more than pain severity alone.", "Neurological warning features are present.", "Now place the right upper abdominal pain."),
    buildHint31("c031-hint-12", "run", "c031-run-symptom-answer", "under my right ribs", ["somanz-hip-2023"], "Using the pain location", "What can right upper abdominal pain mean here?", "It can reflect liver involvement or capsular stretch in a pregnancy-related systemic process, though biliary and other abdominal causes remain. It becomes more concerning beside headache and visual disturbance.", "Join the clues without declaring the diagnosis yet.", "Neurological and upper abdominal warning features now coexist.", "Ask fetal movement, swelling and recent blood pressure."),
    buildHint31("c031-hint-13", "run", "c031-run-pregnancy-answer", "baby moves less", ["somanz-hip-2023"], "Adding fetal wellbeing", "Does reduced movement change the maternal priority?", "It adds fetal concern. Stabilise Rhea first while fetal assessment proceeds in parallel.", "Maternal stabilisation still leads.", "There are now maternal and fetal warning features.", "Use the recent raised blood pressure to sharpen urgency."),
    buildHint31("c031-hint-14", "run", "c031-run-pregnancy-answer", "blood pressure was raised", ["somanz-hip-2023"], "Using yesterday's warning", "Why not treat it as an old result?", "A recent raised pressure plus worsening headache, visual disturbance, oedema and upper abdominal pain suggests progression. Obtain a correct-cuff current measurement now.", "Trend and symptoms matter more than one isolated label.", "A hypertensive pregnancy complication is now a major concern.", "Complete the background for treatment contraindications."),
    buildHint31("c031-hint-15", "run", "c031-run-assessment-request", "reflexes and clonus", ["somanz-hip-2023"], "Requesting focused neurological findings", "Why ask for reflexes and clonus?", "They test for neuromuscular irritability when cerebral symptoms are present. Also check consciousness and focal deficits so another neurological cause is not missed.", "Focused checks should still test important alternatives.", "The assessment covers maternal physiology, nervous system, organs and fetus.", "Interpret the pressure, neurological signs, urine and pain together."),
    buildHint31("c031-hint-16", "run", "c031-run-assessment-findings", "blood pressure 172/114", ["somanz-hypertension-2023", "somanz-hip-2023"], "Recognising severe hypertension", "Can treatment wait for blood tests?", "No. This pressure with severe headache, visual disturbance, clonus, proteinuria and upper abdominal tenderness carries immediate cerebral and maternal risk.", "The clinical pattern is already enough for urgent action.", "Severe hypertension with neurological irritation and proteinuria is established.", "State the diagnosis and start seizure prevention and pressure treatment."),
    buildHint31("c031-hint-17", "run", "c031-run-interpretation", "severe pre-eclampsia with cerebral irritation", ["somanz-hip-2023", "somanz-hypertension-2023"], "Naming and treating the syndrome", "Why start two medicines for one condition?", "Magnesium reduces seizure risk; labetalol lowers severe blood pressure to reduce cerebral and cardiovascular complications. They address different immediate dangers.", "Do not wait for laboratory confirmation of organ injury.", "Severe pre-eclampsia is the working diagnosis and treatment has begun.", "Send organ tests while monitoring response."),
    buildHint31("c031-hint-18", "run", "c031-run-investigation-results", "Platelets are 82", ["somanz-hip-2023"], "Reading platelet and liver injury", "What does this result cluster add?", "Thrombocytopenia and raised transaminases show haematological and hepatic involvement. Normal coagulation and haemoglobin now do not remove the need for close trend and birth planning.", "Organ injury is present even with normal creatinine.", "The disease is severe and multisystem.", "Listen to the new visual warning rather than continuing interpretation."),
    buildHint31("c031-hint-19", "run", "c031-run-aura", "flashing is getting brighter", ["somanz-hip-2023", "acsqhc-deterioration-2026"], "Hearing imminent deterioration", "What happens to the planned sequence?", "Stop. Worsening visual symptoms and feeling strange may precede a seizure. Ensure help, safe positioning, airway equipment and magnesium delivery are ready.", "A new warning interrupts laboratory discussion.", "Cerebral irritation is worsening despite treatment starting.", "Respond immediately if consciousness changes."),
    buildHint31("c031-hint-20", "run", "c031-run-seizure", "generalised tonic-clonic seizure", ["somanz-eclampsia-2023", "acsqhc-deterioration-2026"], "Recognising the emergency", "What leads during the seizure?", "Maternal safety and ABC. Call the emergency teams, time the seizure, protect from injury, position left lateral, support the airway, check glucose and continue appropriate magnesium treatment.", "Do not restrain her or place anything in her mouth.", "The case has become a maternal seizure emergency.", "Return to a simple ABC sequence."),
    buildHint31("c031-hint-21", "run", "c031-run-seizure-response", "This is eclampsia", ["somanz-eclampsia-2023"], "Naming eclampsia", "Why is this the leading explanation?", "A new generalised seizure in a patient with severe pre-eclampsia and cerebral symptoms is eclampsia unless another cause becomes evident. Immediate care still includes glucose and neurological reassessment.", "The diagnosis guides treatment without abandoning basic seizure safety.", "Maternal-first seizure care is active.", "Use the postictal findings to identify airway and pressure problems."),
    buildHint31("c031-hint-22", "run", "c031-run-postictal-findings", "jaw support relieves snoring", ["somanz-eclampsia-2023", "acsqhc-deterioration-2026"], "Reading postictal airway obstruction", "What does snoring mean here?", "Reduced pharyngeal tone is partially obstructing the airway. Jaw support improves patency, while suction, oxygen for hypoxaemia and repeated consciousness assessment continue.", "A seizure ending does not end airway care.", "The airway responds to simple support and saturation improves.", "Complete magnesium and control the persistent severe pressure."),
    buildHint31("c031-hint-23", "run", "c031-run-magnesium", "1 gram per hour", ["somanz-eclampsia-2023", "somanz-hip-2023"], "Continuing magnesium", "Why continue after the seizure stops?", "The risk of recurrence remains through birth and the early postpartum period. Complete the loading dose, continue maintenance and follow the repeat-dose protocol for another seizure.", "Magnesium prevents recurrence; it is not the antihypertensive.", "Seizure treatment and prevention continue.", "Treat the severe pressure on its own schedule."),
    buildHint31("c031-hint-24", "run", "c031-run-blood-pressure", "targeting below 160/110", ["somanz-hypertension-2023"], "Controlling pressure safely", "Why not force a normal pressure immediately?", "The immediate aim is to move below the severe range while avoiding abrupt maternal hypotension that could reduce organ and placental perfusion. Recheck at protocol intervals and titrate.", "Treat the dangerous range, then continue controlled monitoring.", "Pressure treatment continues independently from magnesium.", "Now protect against fluid and magnesium complications."),
    buildHint31("c031-hint-25", "run", "c031-run-fluid-monitoring", "Do not give a routine fluid load", ["somanz-hip-2023", "somanz-eclampsia-2023"], "Avoiding pulmonary oedema", "Why not give fluid after a seizure?", "Endothelial leak and reduced oncotic pressure increase pulmonary-oedema risk. Record input and urine carefully rather than treating every abnormality with fluid.", "Fluid decisions follow perfusion and output, not habit.", "Magnesium safety is monitored through respiration, reflexes and urine.", "Start fetal assessment after maternal ABC is stable."),
    buildHint31("c031-hint-26", "run", "c031-run-stabilised-findings", "Blood pressure is 148/96", ["somanz-hip-2023", "somanz-hypertension-2023"], "Recognising initial stabilisation", "What has improved, and what remains?", "She is alert, oxygenating, below the severe pressure range and has no recurrent seizure. The underlying disease and birth indication remain, so monitoring and magnesium continue.", "Improvement allows planning; it does not end the emergency.", "Maternal physiology is currently stabilised.", "Review fetal status and obstetric factors without delaying indicated birth."),
    buildHint31("c031-hint-27", "run", "c031-run-fetal-findings", "moderate variability and no decelerations", ["somanz-hip-2023"], "Using a reassuring tracing", "Does this remove the need for birth?", "No. It means the fetus is not showing current hypoxic compromise, allowing the route of birth to be based on the whole maternal, fetal and obstetric picture rather than an automatic emergency caesarean.", "Fetal reassurance changes route and pace, not the maternal indication.", "The fetus is cephalic, tracing reassuring and cervix two centimetres.", "Explain what happened before discussing birth route."),
    buildHint31("c031-hint-28", "run", "c031-run-explanation", "severe pre-eclampsia caused high blood pressure and a seizure", ["acsqhc-communication-2026", "somanz-hip-2023"], "Explaining after capacity returns", "What should Rhea hear first?", "Name the condition and seizure, explain possible organ and placental effects, say necessary emergency treatment was given while she lacked capacity, and now seek consent for ongoing care.", "Restore involvement as soon as capacity returns.", "Rhea understands the event and why treatment continues.", "Answer magnesium and caesarean concerns separately."),
    buildHint31("c031-hint-29", "run", "c031-run-concern-response", "Caesarean is not automatic", ["acsqhc-communication-2026", "somanz-hip-2023"], "Explaining the birth route", "How do I avoid promising induction or caesarean?", "Say that birth is recommended after stabilisation, while route depends on maternal condition, fetal tracing, presentation, cervix and obstetric factors. A reassuring tracing allows considered planning.", "The indication for birth and the route of birth are separate questions.", "Rhea knows magnesium has monitoring and an antidote.", "Seek explicit consent for ongoing treatment and monitoring."),
    buildHint31("c031-hint-30", "run", "c031-run-consent-answer", "Please continue", ["acsqhc-communication-2026"], "Confirming restored autonomy", "What does this consent cover?", "Rhea agrees to ongoing magnesium, blood-pressure treatment, monitoring and catheter care while the obstetrician discusses birth. Continue explaining as decisions develop and include her partner with permission.", "Emergency treatment and ongoing consent are different stages.", "Ongoing care now has Rhea's consent.", "Use teach-back to test the central plan."),
    buildHint31("c031-hint-31", "run", "c031-run-teachback-answer", "Magnesium helps prevent another", ["acsqhc-communication-2026", "somanz-eclampsia-2023"], "Checking understanding", "What has Rhea understood?", "Rhea can explain the seizure, magnesium's purpose and that birth follows stabilisation, with the route based on both maternal and fetal factors.", "Do not add new information once the core is clear.", "Rhea has understood the core plan.", "Switch to the final handover."),
    buildHint31("c031-hint-32", "run", "c031-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the handover order", "Which blocks fit the final minute?", "Identity and gestation; warning symptoms and severe findings; organ results and seizure; treatments and response; fetal and cervical findings; then the birth decision still required.", "Select the trend and next decision.", "The final task is transfer of care.", "Finish with current maternal and fetal status."),
    buildHint31("c031-hint-33", "run", "c031-run-handover", "Birth follows stabilisation", ["acsqhc-communication-2026", "somanz-hip-2023", "somanz-eclampsia-2023"], "Closing with the decision", "Why end with route not automatic caesarean?", "It tells the senior that maternal treatment has worked enough for obstetric planning, the fetus is currently reassuring and birth is indicated, but the route still needs senior assessment.", "The handover ends with what remains to decide.", "Maternal trend, fetal status and next decision have transferred.", "Stop when the examiner closes the station."),
    buildHint31("c031-hint-34", "run", "c031-run-end", "The station is complete", ["amc-tips-2024"], "Finishing the case", "Should I prescribe postpartum tablets now?", "No. The examiner has ended the station, and later treatment depends on birth, postpartum observations and senior review.", "Finish on the instruction.", "Case 31 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtyOne.essentialHintIds = [
    "c031-hint-03", "c031-hint-05", "c031-hint-06", "c031-hint-07", "c031-hint-08", "c031-hint-11",
    "c031-hint-14", "c031-hint-16", "c031-hint-17", "c031-hint-18", "c031-hint-20", "c031-hint-21",
    "c031-hint-26", "c031-hint-28", "c031-hint-33", "c031-hint-34"
  ];
  var clockByHint31 = {
    "c031-hint-05": "Minutes 0 to 2: neurological and upper abdominal symptoms, swelling, fetal movement, pregnancy warnings, relevant history and treatment constraints.",
    "c031-hint-06": "Minutes 2 to 4: maternal physiology first, then focused neurological, abdominal, obstetric, fetal, urine and organ evidence.",
    "c031-hint-17": "Immediate treatment begins now. Do not spend the remaining assessment block waiting for blood results.",
    "c031-hint-20": "The seizure resets the clock. Stop every other task and return to maternal ABC and seizure safety.",
    "c031-hint-28": "Minutes 4 to 6: explain the condition, seizure, treatment already given, ongoing monitoring and birth need.",
    "c031-hint-32": "Minutes 6 to 8: one minute for management priorities, then one minute for maternal, fetal and birth-plan handover."
  };
  var deeperByHint31 = {
    "c031-hint-11": ["Cerebral endothelial dysfunction and altered autoregulation can cause vasogenic oedema and cortical irritation, producing headache, visual symptoms and seizure risk."],
    "c031-hint-12": ["Hepatic sinusoidal obstruction and swelling can stretch the liver capsule, producing right upper quadrant or epigastric pain before severe laboratory abnormalities are known."],
    "c031-hint-17": ["Magnesium reduces neuronal excitability and seizure risk. Labetalol lowers vascular resistance and pressure; neither medicine substitutes for the other."],
    "c031-hint-18": ["Platelet consumption and hepatic microvascular injury can occur as part of severe pre-eclampsia. Trends matter because haemolysis or coagulation abnormalities may emerge later."],
    "c031-hint-25": ["Endothelial dysfunction allows fluid to move into the lungs more easily, while reduced oncotic pressure makes that shift harder to contain. Routine fluid loading can therefore worsen pulmonary oedema."],
    "c031-hint-27": ["A reassuring CTG describes fetal status at that moment. It does not reverse the maternal disease or remove the recommendation for birth after stabilisation."]
  };
  caseThirtyOne.hints.forEach(function (hint) {
    if (clockByHint31[hint.id]) hint.clock = clockByHint31[hint.id];
    if (deeperByHint31[hint.id]) hint.deeper = deeperByHint31[hint.id];
  });
})();
