(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-021",
    globalId: "CP-C021",
    registryId: "CP-P7-C001",
    displayNumber: "Case 21",
    title: "Vomiting, abdominal pain and unusual breathing",
    status: "reasoning_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 7, title: "Metabolic Collapse" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c021-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c021-stem-patient",
          text: "Ms Liora Mbeki, a 24-year-old woman, has presented with vomiting and abdominal pain since yesterday. She says her breathing feels different."
        },
        {
          id: "c021-stem-start",
          text: "Liora is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c021-task-assess",
          text: "Obtain a focused history and assess Liora's current condition.",
          timing: "3 minutes"
        },
        {
          id: "c021-task-interpret",
          text: "Interpret the findings and investigation results and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c021-task-explain",
          text: "Explain your assessment and management plan to Liora.",
          timing: "1 minute"
        },
        {
          id: "c021-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c021-run-assessment",
          heading: "Focused assessment and recognition",
          turns: [
            {
              id: "c021-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-start", text: "You may begin." }]
            },
            {
              id: "c021-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c021-run-first-action", text: "The doctor performs hand hygiene and approaches Liora." }]
            },
            {
              id: "c021-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-intro", text: "Hello Liora, I am Ushana, an emergency doctor. Can you confirm your full name? I need to assess and treat you. Is that okay?" }]
            },
            {
              id: "c021-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-consent", text: "Liora Mbeki. Yes. I thought this was a stomach bug, but I cannot stop vomiting." }]
            },
            {
              id: "c021-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check bedside glucose and blood ketones now and obtain intravenous access. Please provide the findings." }]
            },
            {
              id: "c021-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c021-run-primary-findings", text: "Airway is patent. Respiratory rate is 30 with deep breaths, oxygen saturation 98% on room air and lungs are clear. Pulse is 118, blood pressure 98/62 and capillary refill three seconds. Liora is dry, tired but orientated. Temperature is 37.7 degrees Celsius. Glucose is 26.4 mmol/L and blood ketones are 6.2 mmol/L. There is generalised abdominal tenderness without guarding." }]
            },
            {
              id: "c021-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-recognition", text: "This is probable diabetic ketoacidosis with dehydration. Call the senior emergency doctor and diabetes team. Start an adult DKA pathway. Give the first litre of isotonic crystalloid over one hour, adjusted to her response and contraindications. Reassess circulation, lungs and urine output." }]
            },
            {
              id: "c021-turn-history-symptoms",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-history-symptoms", text: "While that starts, when did you become unwell? Any diarrhoea, fever, cough, urinary symptoms, localised pain, confusion, chest pain, pregnancy possibility or sick contacts?" }]
            },
            {
              id: "c021-turn-history-symptoms-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-history-symptoms-answer", text: "I developed a sore throat and runny nose three days ago. Yesterday I became thirsty, passed urine constantly, then started vomiting with crampy pain everywhere. No diarrhoea, urinary symptoms, cough or chest pain. I am not pregnant." }]
            },
            {
              id: "c021-turn-history-diabetes",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-history-diabetes", text: "Tell me about your diabetes and usual insulin. What doses have you taken during this illness? Have you checked glucose or ketones? Any previous ketoacidosis, medication allergies, alcohol or other drugs?" }]
            },
            {
              id: "c021-turn-history-diabetes-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-history-diabetes-answer", text: "I have had type 1 diabetes since I was twelve. I take glargine eighteen units at night and aspart with meals. I skipped glargine last night because I was not eating, and missed most meal doses. My meter just said high. I had ketoacidosis once as a teenager. No allergies, alcohol or drugs." }]
            }
          ]
        },
        {
          id: "c021-run-investigation",
          heading: "Confirmation, treatment and monitoring",
          turns: [
            {
              id: "c021-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-investigations", text: "Send laboratory glucose, electrolytes, urea and creatinine, magnesium, phosphate, full blood count, venous gas and lactate. Obtain an ECG, urinalysis, blood cultures, respiratory viral PCR, chest X-ray and serum pregnancy test. Please provide the results." }]
            },
            {
              id: "c021-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c021-run-results", text: "Venous pH is 7.12, bicarbonate 8 mmol/L, sodium 132, chloride 101, potassium 5.4, urea 12 and creatinine 118 micromol/L. Lactate is 2.0 mmol/L. White cell count is 13.1. Pregnancy test is negative. ECG shows sinus tachycardia without acute ischaemia. Chest X-ray is clear, urinalysis does not suggest infection and respiratory viral PCR is pending." }]
            },
            {
              id: "c021-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-interpretation", text: "The ketonaemia and high-anion-gap metabolic acidosis confirm DKA. Omitted insulin during a likely viral illness is the leading trigger, with no bacterial focus identified currently. Start fixed-rate intravenous insulin at 0.1 units per kilogram per hour under the local protocol, without an insulin bolus. Continue her usual basal glargine. Review the viral PCR and cultures and treat any identified source without delaying DKA care." }]
            },
            {
              id: "c021-turn-potassium",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-potassium", text: "Although potassium is currently raised, total body potassium is depleted and will fall with insulin. Replace potassium in subsequent fluid according to repeat results, renal function, urine output and the local pathway. If potassium falls below 3.5, stop insulin temporarily, replace potassium and obtain senior review." }]
            },
            {
              id: "c021-turn-monitoring",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-monitoring", text: "Record glucose and ketones hourly, and repeat venous pH, bicarbonate and potassium at one hour, two hours and then at least two-hourly. Aim for ketones to fall by at least 0.5 mmol/L per hour or bicarbonate to rise by at least 3 mmol/L per hour. Check fluid balance and neurological state." }]
            },
            {
              id: "c021-turn-dextrose",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-dextrose", text: "When glucose falls below 14 mmol/L, add intravenous glucose and consider reducing insulin to 0.05 units per kilogram per hour under the local protocol. Insulin must continue until ketonaemia and acidosis resolve. Do not give bicarbonate or phosphate routinely." }]
            },
            {
              id: "c021-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c021-run-response", text: "After two hours, Liora is more alert. Pulse is 100, blood pressure 108/70, glucose 18 mmol/L, ketones 4.9 mmol/L, pH 7.20, bicarbonate 12 mmol/L and potassium 4.3 mmol/L. Urine output is adequate." }]
            },
            {
              id: "c021-turn-response-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-response-interpret", text: "She is responding appropriately. Continue protocolised fluids, insulin, potassium replacement and review of the precipitating illness. Persistent or localising abdominal pain after the acidosis improves would need separate investigation rather than being assumed to be DKA." }]
            },
            {
              id: "c021-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-patient-question", text: "Did skipping one long-acting dose really cause all this? When can the insulin drip stop?" }]
            },
            {
              id: "c021-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-patient-answer", text: "The infection increased your insulin needs, and missing basal insulin allowed acids called ketones to build up. The drip continues until the ketones are below 0.6 and the blood acidity has corrected, not merely until the glucose improves. We overlap injected insulin before stopping it." }]
            }
          ]
        },
        {
          id: "c021-run-communication",
          heading: "Explanation, resolution and handover",
          turns: [
            {
              id: "c021-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-explanation-prompt", text: "Please explain your assessment and management plan to Liora." }]
            },
            {
              id: "c021-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-explanation", text: "Liora, you have diabetic ketoacidosis. Without enough insulin, your body broke down fat and produced acidic ketones. That caused the vomiting, abdominal pain, dehydration and deep breathing. We are replacing fluid, giving insulin safely, monitoring potassium and checking the minor illness that contributed." }]
            },
            {
              id: "c021-turn-resolution-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-resolution-plan", text: "You will remain in a closely monitored area with the diabetes team. Once ketones are below 0.6, pH is above 7.3 and you can eat and drink, we will return to injected insulin with appropriate overlap. Before discharge, we will review sick-day rules: never stop basal insulin, check ketones, maintain fluids and seek early help." }]
            },
            {
              id: "c021-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c021-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c021-run-handover", text: "Liora Mbeki is 24 with type 1 diabetes, three days of coryzal symptoms and one day of vomiting, generalised abdominal pain, polyuria and deep breathing after missing basal glargine. Initial glucose was 26.4, ketones 6.2, venous pH 7.12, bicarbonate 8 and potassium 5.4. Chest X-ray is clear and no bacterial focus is identified currently. DKA protocol, isotonic fluid, fixed-rate insulin, continued glargine and potassium-guided replacement are underway. At two hours, perfusion, ketones and acidosis are improving. Continue biochemical targets, fluid balance and precipitant review with diabetes and senior input." }]
            },
            {
              id: "c021-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Diabetic emergency - Hyperglycaemia",
        date: "September 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219046/CPG_Diabetic-emergency_hyperglycaemia.pdf"
      },
      {
        organisation: "American Diabetes Association, European Association for the Study of Diabetes, Joint British Diabetes Societies and partner organisations",
        title: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report",
        date: "2024",
        url: "https://doi.org/10.2337/dci24-0032"
      },
      {
        organisation: "Joint British Diabetes Societies for Inpatient Care",
        title: "The Management of Diabetic Ketoacidosis in Adults",
        date: "Revised March 2023",
        url: "https://abcd.care/sites/default/files/site_uploads/JBDS_Guidelines_Current/JBDS_02_DKA_Guideline_with_QR_code_March_2023.pdf"
      }
    ]
  });

  var caseTwentyOne = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-021"; });
  function buildHint21(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentyOne.masteryFocus = {
    case: "Join vomiting, abdominal pain and changed breathing without closing early, obtain the evidence that separates the leading possibilities, then sequence action and reassessment from the findings disclosed.",
    clinical: "When several symptoms seem unrelated, use breathing, circulation and bedside glucose to test for one physiological process, then follow a measurable treatment endpoint rather than one improved number.",
    tasks: ["Focused assessment", "Interpret and manage", "Explain assessment and plan", "Concise clinical handover"],
    transfer: "If Liora's glucose fell to 11 mmol/L after treatment but ketones remained 2.8 mmol/L and pH 7.22, should the insulin infusion stop?",
    transferAnswer: "No. The glucose has improved before the ketoacidosis has resolved. Add intravenous glucose, continue protocolised insulin and potassium-guided fluid, and follow ketones, bicarbonate or pH until biochemical resolution before overlapping subcutaneous insulin.",
    transferChecks: ["Ketone trend", "pH and bicarbonate", "Potassium and urine output", "Subcutaneous insulin overlap"],
    transferCitationIds: ["jbds-dka-2023", "consensus-hyperglycaemia-2024"]
  };
  caseTwentyOne.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "qas-hyperglycaemia-2024", title: "Clinical practice guideline: Diabetic emergency - Hyperglycaemia", organisation: "Queensland Ambulance Service", date: "September 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219046/CPG_Diabetic-emergency_hyperglycaemia.pdf" },
    { id: "consensus-hyperglycaemia-2024", title: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report", organisation: "ADA, EASD, JBDS and partner organisations", date: "2024", url: "https://doi.org/10.2337/dci24-0032" },
    { id: "jbds-dka-2023", title: "The Management of Diabetic Ketoacidosis in Adults", organisation: "Joint British Diabetes Societies for Inpatient Care", date: "Revised March 2023", url: "https://abcd.care/sites/default/files/site_uploads/JBDS_Guidelines_Current/JBDS_02_DKA_Guideline_with_QR_code_March_2023.pdf" }
  ];
  caseTwentyOne.reasoningCompass = {
    stem: { title: "Let the breathing change set the first check", steps: [
      { time: "0 to 30 seconds", text: "Vomiting and abdominal pain could be gastrointestinal, but unusual breathing asks you to check airway, breathing, circulation and bedside glucose before settling on that explanation." },
      { time: "30 to 60 seconds", text: "Plan short questions about fluid loss, infection, pregnancy, long-term conditions and regular medicines while observations and relevant bedside tests are obtained." },
      { time: "1 to 2 minutes", text: "Set four stops: assess to minute 3, interpret and manage to minute 6, explain to minute 7, hand over to minute 8." }
    ], anchor: "Assess 0 to 3 | Interpret and manage 3 to 6 | Explain 6 to 7 | Handover 7 to 8" },
    run: { title: "Keep assessment, decisions and explanation in separate blocks", steps: [
      { time: "0 to 3 minutes", text: "Assess airway, breathing, circulation and consciousness while taking only the history that changes current risk. Request bedside tests that answer the physiology in front of you." },
      { time: "3 to 6 minutes", text: "Interpret each disclosed finding, act when the pattern is strong enough and state how you will judge whether treatment is working." },
      { time: "6 to 8 minutes", text: "Explain the current assessment, immediate plan and remaining uncertainty to Liora, then hand over the important evidence, actions and response." }
    ], anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the task, respond, state where you paused and then return." }
  };
  caseTwentyOne.hints = [
    buildHint21("c021-hint-01", "stem", "c021-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can happen while I ask questions?", "Monitoring, bedside tests, intravenous access and treatment can begin together if Liora is unwell.", "Do not make urgent care wait for a complete history.", "The setting supports simultaneous assessment and treatment.", "Read the symptom combination before choosing the first checks."),
    buildHint21("c021-hint-02", "stem", "c021-stem-patient", "24-year-old woman", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age", "Does being young make this low risk?", "No. Young people can still deteriorate quickly from fluid loss, metabolic disturbance or acute abdominal disease.", "Use physiology, not age, to judge severity.", "Liora is young, but her current condition is unknown.", "Now connect the three symptoms."),
    buildHint21("c021-hint-03", "stem", "c021-stem-patient", "vomiting and abdominal pain", ["consensus-hyperglycaemia-2024", "amc-tips-2024"], "Reading the symptoms", "Is this necessarily a stomach problem?", "It may be, but vomiting and diffuse abdominal pain can also follow a metabolic disturbance. The breathing description is the clue that prevents early closure.", "Keep gastrointestinal, metabolic, pregnancy-related and surgical causes in consideration.", "The symptom source is not established.", "Look at exactly what feels different about her breathing."),
    buildHint21("c021-hint-04", "stem", "c021-stem-patient", "breathing feels different", ["consensus-hyperglycaemia-2024", "acsqhc-deterioration-2026"], "Using the breathing clue", "What should this phrase make me check?", "Ask whether breaths are deep or difficult, then assess respiratory rate, oxygenation, lungs, glucose and ketones. Deep clear-lung breathing can be compensation for acidosis.", "Do not call it anxiety or lung disease before examining her.", "Breathing may reveal the physiology behind the abdominal symptoms.", "Use alertness only as permission to ask brief questions."),
    buildHint21("c021-hint-05", "stem", "c021-stem-start", "awake and able to answer questions", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Using current alertness", "Can the history come first because she is awake?", "She can consent and answer while ABCDE, glucose, ketones and access are obtained. Alertness does not establish adequate circulation.", "Conversation is one finding, not a stability decision.", "Assessment and focused questions can proceed together.", "Fix the four task times before the run."),
    buildHint21("c021-hint-06", "stem", "c021-task-assess", "focused history and assess Liora's current condition", ["amc-spec-2026", "amc-tips-2024"], "Setting task one", "What belongs in the first three minutes?", "ABCDE, bedside glucose and ketones, current dehydration, then short questions about onset, fluid loss, infection, pregnancy, long-term conditions and regular medicines.", "Focused means every question changes severity, trigger or treatment.", "Minutes 0 to 3 combine assessment and history.", "End this block by stating the current physiological problem."),
    buildHint21("c021-hint-07", "stem", "c021-task-interpret", "Interpret the findings", ["amc-spec-2026", "amc-tips-2024"], "Setting task two", "What makes interpretation complete?", "State what the findings mean, what remains uncertain, which action follows and how you will judge the response.", "Do not read results without linking them to decisions.", "Minutes 3 to 6 are interpretation and management.", "Keep minute 6 for Liora."),
    buildHint21("c021-hint-08", "stem", "c021-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting task three", "What changes at minute six?", "Turn to Liora. Explain the leading assessment, how the available findings support it, what has been done, what happens next and what remains uncertain.", "This minute is an explanation, not another examiner discussion.", "Minute 6 to 7 belongs to Liora.", "Reserve the final minute for transfer of care."),
    buildHint21("c021-hint-09", "stem", "c021-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting the final task", "Which facts must survive the final minute?", "Identity and presentation, decisive history and findings, working assessment, treatment and response, then the next required action.", "Concise means selected and ordered.", "Minute 7 to 8 transfers current risk and action.", "Begin the encounter with visible assessment."),
    buildHint21("c021-hint-10", "run", "c021-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting", "What is the first move?", "Approach Liora, identify yourself and begin observing breathing, colour and engagement as you obtain consent.", "The assessment clock has started.", "You have three minutes for assessment and focused history.", "Perform hand hygiene and approach her."),
    buildHint21("c021-hint-11", "run", "c021-run-intro", "assess and treat you", ["acsqhc-communication-2026", "acsqhc-deterioration-2026"], "Explaining parallel care", "Why say treat while assessing?", "It prepares Liora for monitoring and access while preserving direct consent and communication.", "Urgency does not remove explanation when she can participate.", "Consent and simultaneous care are established.", "Listen to her first concern without accepting its explanation."),
    buildHint21("c021-hint-12", "run", "c021-run-consent", "thought this was a stomach bug", ["amc-tips-2024", "consensus-hyperglycaemia-2024"], "Hearing her explanation", "Do I correct her now?", "Not yet. Acknowledge it, then test both gastrointestinal and metabolic possibilities with ABCDE, glucose and ketones.", "Her concern deserves an answer after evidence is available.", "Vomiting is severe; the cause remains uncertain.", "Request the decisive early findings."),
    buildHint21("c021-hint-13", "run", "c021-run-primary-request", "bedside glucose and blood ketones now", ["consensus-hyperglycaemia-2024", "qas-hyperglycaemia-2024"], "Choosing bedside tests", "Why check these before laboratory results?", "They can reveal a hyperglycaemic ketotic emergency within minutes and immediately change fluids, monitoring and escalation.", "Fast tests guide action but do not replace venous pH and electrolytes.", "ABCDE, glucose, ketones and access are requested together.", "Read breathing and circulation before naming the condition."),
    buildHint21("c021-hint-14", "run", "c021-run-primary-findings", "deep breaths", ["consensus-hyperglycaemia-2024"], "Interpreting deep breathing", "Why are deep breaths important with clear lungs?", "They can be respiratory compensation for metabolic acidosis. Normal oxygen saturation does not remove that possibility.", "Do not treat the breathing pattern as hypoxia when oxygenation is normal.", "Breathing is increased without a clear lung cause.", "Now join it with perfusion, hydration, glucose and ketones."),
    buildHint21("c021-hint-15", "run", "c021-run-primary-findings", "Glucose is 26.4 mmol/L", ["consensus-hyperglycaemia-2024", "acsqhc-deterioration-2026"], "Joining the bedside findings", "What does glucose add to ketones 6.2 and dehydration?", "Marked hyperglycaemia and ketonaemia, with deep breathing and dehydration, make a ketotic hyperglycaemic emergency highly likely. Blood pressure, pulse and refill show circulation is affected.", "The bedside pattern supports urgent treatment before formal confirmation.", "A metabolic emergency with dehydration is now probable.", "Escalate and begin protocolised fluid while confirmation follows."),
    buildHint21("c021-hint-16", "run", "c021-run-recognition", "probable diabetic ketoacidosis", ["consensus-hyperglycaemia-2024", "jbds-dka-2023"], "Naming the working diagnosis", "Is it safe to name it now?", "Yes. Hyperglycaemia, substantial ketonaemia, deep breathing and dehydration support probable DKA; venous pH and bicarbonate will confirm acidosis.", "Probable is accurate until the gas returns.", "Senior help, the DKA pathway and initial fluid are underway.", "Use treatment time to clarify the trigger."),
    buildHint21("c021-hint-17", "run", "c021-run-history-symptoms", "when did you become unwell", ["consensus-hyperglycaemia-2024", "amc-tips-2024"], "Finding the trigger", "Why ask this compact group now?", "It separates infection, pregnancy, surgical pain and other stressors while treatment continues. Localised or persistent pain would need its own assessment.", "Do not assume all abdominal pain comes from acidosis.", "Probable DKA is being treated; the precipitant is still uncertain.", "Listen for the sequence of illness, thirst, urine and vomiting."),
    buildHint21("c021-hint-18", "run", "c021-run-history-symptoms-answer", "thirsty, passed urine constantly", ["consensus-hyperglycaemia-2024"], "Connecting osmotic loss", "How do thirst and frequent urine fit?", "Glucose in urine pulls water with it, causing polyuria, thirst and dehydration. Vomiting then worsens the fluid deficit.", "The symptom sequence supports the metabolic process.", "A minor respiratory illness may be part of the trigger.", "Check relevant long-term conditions and whether any regular treatment was reduced or stopped."),
    buildHint21("c021-hint-19", "run", "c021-run-history-diabetes", "usual insulin", ["jbds-dka-2023", "consensus-hyperglycaemia-2024"], "Making the diabetes history useful", "What single detail may explain rapid ketosis?", "Whether basal insulin was continued. Illness often increases insulin need even when food intake falls.", "Meal intake and basal insulin are different decisions.", "The trigger may include illness and insufficient insulin.", "Hear the exact doses and missed timing."),
    buildHint21("c021-hint-20", "run", "c021-run-history-diabetes-answer", "skipped glargine last night", ["jbds-dka-2023", "consensus-hyperglycaemia-2024"], "Identifying insufficient basal insulin", "Can one missed dose matter?", "Yes. In type 1 diabetes, loss of basal insulin permits rapid fat breakdown and ketone production, especially during illness.", "Not eating is not a reason to stop basal insulin.", "Likely viral illness plus omitted insulin now explains the presentation.", "Confirm acidosis and electrolyte status before starting insulin infusion."),
    buildHint21("c021-hint-21", "run", "c021-run-investigations", "venous gas and lactate", ["consensus-hyperglycaemia-2024", "jbds-dka-2023"], "Requesting purposeful tests", "What must the gas and electrolytes answer?", "They confirm acidosis, show potassium and renal function, identify another source of acidosis and create a baseline for safe fluid and insulin treatment.", "Cultures and imaging search for a trigger without delaying DKA care.", "Bedside evidence is strong; formal severity and safety data are pending.", "Read pH, bicarbonate and potassium together."),
    buildHint21("c021-hint-22", "run", "c021-run-results", "Venous pH is 7.12", ["consensus-hyperglycaemia-2024", "jbds-dka-2023"], "Confirming acidosis", "What is now confirmed?", "Ketonaemia plus pH 7.12 and bicarbonate 8 confirms ketoacidosis. Lactate 2.0 makes lactic acidosis a minor contributor rather than the main explanation.", "The diagnosis is earned from ketones and metabolic acidosis, not glucose alone.", "DKA is confirmed.", "Now interpret the apparently high potassium correctly."),
    buildHint21("c021-hint-23", "run", "c021-run-results", "potassium 5.4", ["jbds-dka-2023", "consensus-hyperglycaemia-2024"], "Reading potassium", "Does 5.4 mean the body has excess potassium?", "Not necessarily. Acidosis and insulin deficiency shift potassium out of cells while urinary loss depletes total body stores.", "Expect potassium to fall once insulin and fluid work.", "Serum potassium is raised, but total body potassium is likely depleted.", "Start insulin only with a replacement and monitoring plan."),
    buildHint21("c021-hint-24", "run", "c021-run-interpretation", "fixed-rate intravenous insulin", ["jbds-dka-2023", "consensus-hyperglycaemia-2024"], "Starting insulin safely", "What is insulin treating here?", "It stops ketone production. Continuing basal glargine supports transition later; no insulin bolus is needed.", "The aim is resolution of ketonaemia and acidosis, not simply a lower glucose.", "Fluid and fixed-rate insulin now treat the core process.", "Anticipate potassium fall from the first hour."),
    buildHint21("c021-hint-25", "run", "c021-run-potassium", "total body potassium is depleted", ["jbds-dka-2023", "consensus-hyperglycaemia-2024"], "Preventing potassium harm", "Why can treatment uncover dangerous hypokalaemia?", "Insulin moves potassium into cells while fluid improves renal excretion. Replacement follows repeat potassium, renal function and urine output.", "If potassium is below 3.5, correct it before continuing insulin.", "Potassium management changes throughout treatment.", "Use repeated targets rather than one fixed prescription."),
    buildHint21("c021-hint-26", "run", "c021-run-monitoring", "ketones to fall", ["jbds-dka-2023", "consensus-hyperglycaemia-2024"], "Measuring response", "Which trend tells me insulin is doing its main job?", "A ketone fall of at least 0.5 mmol/L per hour or bicarbonate rise of at least 3 mmol/L per hour shows the ketoacidosis is resolving.", "Glucose alone is not the endpoint.", "Hourly and two-hourly checks test effectiveness and safety.", "Add glucose when needed without stopping ketone clearance."),
    buildHint21("c021-hint-27", "run", "c021-run-dextrose", "glucose falls below 14 mmol/L", ["jbds-dka-2023", "consensus-hyperglycaemia-2024"], "Adding intravenous glucose", "Why add glucose while giving insulin?", "It prevents hypoglycaemia and allows insulin to continue suppressing ketone production until acidosis resolves.", "A lower glucose does not mean the infusion is finished.", "Insulin continues against ketones; glucose protects against treatment-induced hypoglycaemia.", "Compare the two-hour results with the response targets."),
    buildHint21("c021-hint-28", "run", "c021-run-response", "ketones 4.9 mmol/L", ["jbds-dka-2023", "acsqhc-deterioration-2026"], "Checking the two-hour trend", "Is this response adequate?", "Ketones fell 1.3 over two hours, bicarbonate rose from 8 to 12, perfusion improved and potassium remains safe. These changes meet the expected direction and rate.", "Improvement supports continuation, not early cessation.", "Liora is responding to fluid and insulin.", "Keep a separate plan for pain that persists after acidosis improves."),
    buildHint21("c021-hint-29", "run", "c021-run-response-interpret", "Persistent or localising abdominal pain", ["consensus-hyperglycaemia-2024", "amc-tips-2024"], "Avoiding a second missed diagnosis", "When should abdominal pain be reconsidered?", "If it localises or persists after biochemical improvement, reassess for a separate abdominal cause rather than continuing to attribute it to DKA.", "A unifying diagnosis does not excuse a discordant trend.", "Current diffuse pain can fit DKA, but it remains under review.", "Answer Liora's concern about the missed dose and stopping point."),
    buildHint21("c021-hint-30", "run", "c021-run-patient-answer", "not merely until the glucose improves", ["jbds-dka-2023", "acsqhc-communication-2026"], "Explaining the endpoint", "What misunderstanding needs correcting?", "The dangerous process is acid ketone production. The infusion continues until ketones and acidity resolve, with overlap before injected insulin takes over.", "Make the stopping rule explicit.", "Liora now understands why one missed basal dose mattered and why treatment continues.", "At the prompt, give the full explanation in plain language."),
    buildHint21("c021-hint-31", "run", "c021-run-explanation-prompt", "explain your assessment", ["amc-spec-2026", "acsqhc-communication-2026"], "Switching audience", "What belongs in this minute?", "Name DKA, connect insufficient insulin to ketones and symptoms, state current treatment and response, then explain the safe transition and prevention plan.", "Stop adding examiner-facing detail.", "Minute 6 to 7 belongs to Liora.", "Use the same causal sequence she experienced."),
    buildHint21("c021-hint-32", "run", "c021-run-resolution-plan", "never stop basal insulin", ["jbds-dka-2023", "acsqhc-communication-2026"], "Preventing recurrence", "What should remain memorable after discharge?", "During illness, continue basal insulin, check glucose and ketones, maintain fluid if possible and seek early advice when vomiting or ketones persist.", "Prevention starts after recovery, not during active instability.", "Resolution criteria and sick-day actions are clear.", "Use the last minute to transfer severity, trigger, treatment and trend."),
    buildHint21("c021-hint-33", "run", "c021-run-handover-prompt", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps it concise?", "Identity and diabetes, trigger and missed insulin, initial physiology and diagnostic values, treatment, two-hour response, then the next targets.", "Do not repeat every negative investigation.", "One minute remains to transfer current risk and action.", "Finish with what must be monitored next."),
    buildHint21("c021-hint-34", "run", "c021-run-end", "station is complete", ["amc-tips-2024"], "Finishing", "Should I add another management point?", "No. The examiner has ended the station. Stop, reset and begin the next stem from its own words.", "Do not spend time repairing a completed answer.", "Case 21 is complete.", "Take one breath and start the next case at line one.")
  ];
  caseTwentyOne.essentialHintIds = ["c021-hint-04", "c021-hint-06", "c021-hint-07", "c021-hint-08", "c021-hint-09", "c021-hint-14", "c021-hint-15", "c021-hint-20", "c021-hint-22", "c021-hint-24", "c021-hint-26", "c021-hint-28", "c021-hint-31", "c021-hint-33", "c021-hint-34"];
  var clockByHint21 = {
    "c021-hint-06": "Minutes 0 to 3: ABCDE, bedside glucose and ketones, dehydration, then only questions about triggers, long-term conditions and medicine changes.",
    "c021-hint-15": "The bedside pattern requires treatment now. Use the remaining assessment time to clarify trigger and insulin exposure while fluid starts.",
    "c021-hint-24": "Before minute 6: fluid is running, acidosis is confirmed and insulin starts with potassium monitoring.",
    "c021-hint-28": "Check the response before switching tasks. The trends are improving, so continue the pathway and state the unresolved issues.",
    "c021-hint-31": "Minute 6: turn to Liora and explain cause, treatment, response and stopping criteria.",
    "c021-hint-33": "Final minute: hand over initial severity, trigger, treatment, biochemical trend and next target."
  };
  var deeperByHint21 = {
    "c021-hint-14": ["Hydrogen ions stimulate respiratory compensation. Deeper, faster breathing lowers carbon dioxide, which partially limits the fall in pH while the metabolic cause is treated."],
    "c021-hint-23": ["Insulin deficiency and acidaemia move potassium from cells into blood. Osmotic diuresis removes potassium from the body, so serum and total-body potassium can point in opposite directions."],
    "c021-hint-27": ["Glucose can normalise before ketogenesis stops. Intravenous glucose provides substrate while continued insulin closes the ketone-producing pathway."]
  };
  caseTwentyOne.hints.forEach(function (hint) { if (clockByHint21[hint.id]) hint.clock = clockByHint21[hint.id]; if (deeperByHint21[hint.id]) hint.deeper = deeperByHint21[hint.id]; });
})();
