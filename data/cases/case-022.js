(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-022",
    globalId: "CP-C022",
    registryId: "CP-P7-C002",
    displayNumber: "Case 22",
    title: "Thirst, frequent urination and increasing confusion",
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
          id: "c022-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c022-stem-patient",
          text: "Mr Tane Whaitiri, a 76-year-old man with type 2 diabetes, has been brought in by his daughter, Aroha. He has been very thirsty, passing urine frequently and increasingly confused over four days."
        },
        {
          id: "c022-stem-start",
          text: "Tane is able to answer brief questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c022-task-history",
          text: "Assess Tane and obtain a focused history from Tane and Aroha.",
          timing: "3 minutes"
        },
        {
          id: "c022-task-interpret",
          text: "Interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c022-task-explain",
          text: "Explain your assessment and plan to Tane and Aroha.",
          timing: "1 minute"
        },
        {
          id: "c022-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c022-run-assessment",
          heading: "Initial assessment and focused history",
          turns: [
            {
              id: "c022-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-start", text: "You may begin." }]
            },
            {
              id: "c022-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c022-run-first-action", text: "The doctor performs hand hygiene and approaches Tane and Aroha." }]
            },
            {
              id: "c022-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-intro", text: "Hello Tane, I am Ushana, one of the emergency doctors. Can you tell me your full name and where you are? Is it okay for Aroha to stay and help answer questions?" }]
            },
            {
              id: "c022-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c022-run-consent", text: "Tane Whaitiri. I am at the hospital. Yes, please let her stay. I cannot think properly." }]
            },
            {
              id: "c022-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check capillary glucose and ketones, temperature and capillary refill. Examine hydration, the heart, lungs, abdomen and legs, and screen for a focal neurological deficit. Please provide the findings." }]
            },
            {
              id: "c022-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c022-run-primary-findings", text: "Airway is patent. Respiratory rate is 24, oxygen saturation 92% on room air and there are right basal crackles. Pulse is 112 and regular, blood pressure 96/62 mmHg and capillary refill four seconds. Tane has dry mucous membranes and reduced skin turgor. He is confused about the date but obeys commands, with no focal neurological deficit. Temperature is 38.3 degrees Celsius. The glucose meter reads above its measurable range and blood ketones are 0.8 mmol/L." }]
            },
            {
              id: "c022-turn-initial-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-initial-management", text: "This may be a severe hyperglycaemic emergency with marked dehydration and infection. Call the senior emergency doctor and request critical-care and diabetes-team review. Give oxygen to a target saturation of 92 to 96%, insert two intravenous cannulas, start strict fluid balance and measure urine output. Take blood before antibiotics if this causes no delay." }]
            },
            {
              id: "c022-turn-history-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-history-question", text: "Aroha, when was Tane last himself? How much has he been drinking and urinating? Any reduced intake, vomiting, abdominal pain, deep breathing, fever, cough, painful urine, chest symptoms, weakness or seizure?" }]
            },
            {
              id: "c022-turn-history-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c022-run-history-answer", text: "Four days ago he became constantly thirsty and was up every hour to pass urine. He has barely eaten. Yesterday he became muddled. He has had fever and a cough with yellow phlegm, but no vomiting, abdominal pain, painful urine, chest pain or seizure." }]
            },
            {
              id: "c022-turn-diabetes-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-diabetes-question", text: "How is his diabetes usually treated? Has he missed doses or taken steroids? What other conditions, medicines and allergies does he have? Any previous similar episode?" }]
            },
            {
              id: "c022-turn-diabetes-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c022-run-diabetes-answer", text: "He takes metformin and gliclazide, but missed them for three days because he felt unwell. He also takes amlodipine and atorvastatin. No steroids, allergies or previous episode. He lives independently and is normally sharp." }]
            }
          ]
        },
        {
          id: "c022-run-interpretation",
          heading: "Investigation, controlled correction and treatment of the cause",
          turns: [
            {
              id: "c022-turn-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-tests", text: "Send venous gas with lactate, laboratory glucose, electrolytes, urea, creatinine, calculated osmolality, full blood count, inflammatory markers, magnesium and phosphate. Take blood cultures, urine studies and a chest X-ray, and obtain an ECG. Repeat glucose, sodium, potassium, urea and calculated osmolality hourly initially." }]
            },
            {
              id: "c022-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c022-run-results", text: "Venous pH is 7.36, bicarbonate 19 mmol/L and lactate 2.4 mmol/L. Glucose is 48 mmol/L, sodium 151, potassium 4.8, urea 29 and creatinine 220 micromol/L. Calculated osmolality is 379 mOsm/kg. White cell count is 18.4 and C-reactive protein 176. ECG shows sinus tachycardia. Chest X-ray shows right lower-lobe consolidation." }]
            },
            {
              id: "c022-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-interpretation-text", text: "The profound hyperglycaemia, osmolality and dehydration, with little ketonaemia and no major acidosis, indicate hyperosmolar hyperglycaemic state. Pneumonia is the likely trigger, with acute kidney injury. Start intravenous 0.9% sodium chloride first under the HHS protocol. Because Tane is older and has acute kidney injury, begin with a 250-millilitre bolus and reassess perfusion, lungs and urine output before repeating it. Continue controlled replacement guided by those findings and the hourly osmolality trend." }]
            },
            {
              id: "c022-turn-control",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-control", text: "Aim for osmolality to fall by 3 to 8 mOsm/kg per hour, glucose by no more than about 5 mmol/L per hour and sodium by no more than 10 mmol/L in 24 hours. A modest sodium rise while glucose falls is expected if osmolality is falling. With potassium 4.8 and acute kidney injury, do not add potassium automatically. Repeat it and confirm urine output; once it is below 5, add a renal-adjusted amount under the local protocol, commonly 20 to 30 mmol per litre. Omit it above 5.5, and if it falls below 3.5 obtain urgent senior replacement and delay insulin until corrected." }]
            },
            {
              id: "c022-turn-insulin",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-insulin", text: "Do not start insulin immediately because fluids alone should lower glucose and osmolality. When glucose stops falling adequately with fluid, and potassium is safe, start fixed-rate intravenous insulin at 0.05 units per kilogram per hour under senior protocol. Add glucose infusion when blood glucose falls below 14 mmol/L while continuing controlled saline and insulin." }]
            },
            {
              id: "c022-turn-trigger",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-trigger", text: "Give prompt intravenous antibiotics for community-acquired pneumonia according to local guidance, after cultures without delaying treatment. Provide renal-adjusted low-molecular-weight heparin thromboprophylaxis unless contraindicated. Monitor neurological state, fluid overload, glucose, electrolytes and osmolality in a high-acuity area. Hold metformin and gliclazide during the acute illness." }]
            },
            {
              id: "c022-turn-question",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c022-run-question", text: "His sugar is extremely high. Why are you waiting to give insulin?" }]
            },
            {
              id: "c022-turn-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-answer", text: "His blood has become very concentrated over several days. Fluid is the first treatment and will lower the glucose. Insulin too early can make glucose and osmolality fall too quickly, which may cause dangerous shifts in fluid and salts. We will add insulin once the fluid response shows it is needed." }]
            }
          ]
        },
        {
          id: "c022-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c022-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-explanation-prompt", text: "Please explain your assessment and plan to Tane and Aroha." }]
            },
            {
              id: "c022-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-explanation", text: "Tane and Aroha, pneumonia has pushed his glucose very high. He has lost a large amount of water in his urine, making the blood concentrated and affecting his kidneys and thinking. We will replace fluid gradually, treat the pneumonia and monitor him closely. Insulin will be added at the safe point." }]
            },
            {
              id: "c022-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c022-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c022-run-handover", text: "Tane Whaitiri is 76 with type 2 diabetes, four days of polyuria and polydipsia, then confusion, fever and productive cough. He is dehydrated, febrile and mildly hypoxaemic, with glucose 48, osmolality 379, sodium 151, minimal ketonaemia, pH 7.36 and acute kidney injury. This is HHS triggered by right lower-lobe pneumonia. Monitoring, oxygen, intravenous access and controlled 0.9% saline have started. Cultures and antibiotics are underway. I have requested senior, critical-care and diabetes review, with hourly osmolality and electrolyte-guided fluid, potassium and delayed low-dose insulin management." }]
            },
            {
              id: "c022-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-end", text: "Thank you. The station is complete." }]
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
        title: "Management of Hyperosmolar Hyperglycaemic State (HHS) in Adults: An updated guideline",
        date: "March 2023",
        url: "https://doi.org/10.1111/dme.15005"
      }
    ]
  });

  var caseTwentyTwo = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-022"; });
  function buildHint22(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentyTwo.masteryFocus = {
    case: "Treat thirst, frequent urination and confusion as a potentially serious physiological change, use collateral history and decisive findings to define the process, then manage it at a rate guided by repeated response.",
    clinical: "In a slowly developed metabolic emergency, the safest treatment rate is part of the treatment itself: follow physiology and concentration trends, and do not chase one striking laboratory value.",
    tasks: ["Assess and focused history", "Interpret and manage", "Explain assessment and plan", "Concise clinical handover"],
    transfer: "If Tane instead had ketones 5.5 mmol/L, pH 7.18 and bicarbonate 10 mmol/L with the same osmolality, how would your insulin plan change?",
    transferAnswer: "This would be a mixed DKA and HHS presentation rather than isolated HHS. Continue careful fluid and osmolality monitoring, but start fixed-rate insulin at the DKA dose once potassium is safe, because substantial ketonaemia and acidosis require prompt suppression of ketone production.",
    transferChecks: ["Degree of ketonaemia", "pH and bicarbonate", "Potassium before insulin", "Osmolality correction rate"],
    transferCitationIds: ["consensus-hyperglycaemia-2024", "jbds-hhs-2023"]
  };
  caseTwentyTwo.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "qas-hyperglycaemia-2024", title: "Clinical practice guideline: Diabetic emergency - Hyperglycaemia", organisation: "Queensland Ambulance Service", date: "September 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219046/CPG_Diabetic-emergency_hyperglycaemia.pdf" },
    { id: "consensus-hyperglycaemia-2024", title: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report", organisation: "ADA, EASD, JBDS and partner organisations", date: "2024", url: "https://doi.org/10.2337/dci24-0032" },
    { id: "jbds-hhs-2023", title: "Management of Hyperosmolar Hyperglycaemic State in Adults: An updated guideline", organisation: "Joint British Diabetes Societies for Inpatient Care", date: "March 2023", url: "https://doi.org/10.1111/dme.15005" }
  ];
  caseTwentyTwo.reasoningCompass = {
    stem: { title: "Start with water loss, brain function and the trigger", steps: [
      { time: "0 to 30 seconds", text: "Thirst and frequent urination suggest major water loss. Increasing confusion makes current physiology urgent, even though Tane can still answer briefly." },
      { time: "30 to 60 seconds", text: "Plan ABCDE, glucose, ketones, hydration and neurological screening, then use Aroha for the timeline, infection clues, medicines and usual function." },
      { time: "1 to 2 minutes", text: "Set the stops: assess and history to minute 3, interpret and manage to minute 6, explain to minute 7, hand over to minute 8." }
    ], anchor: "Assess and history 0 to 3 | Interpret and manage 3 to 6 | Explain 6 to 7 | Handover 7 to 8" },
    run: { title: "Use repeat observations to set the treatment pace", steps: [
      { time: "0 to 3 minutes", text: "Assess breathing, circulation, hydration and consciousness while obtaining the shortest useful history. Begin support when the disclosed findings require it." },
      { time: "3 to 6 minutes", text: "Use the available tests to define the disturbance, choose treatment at a safe pace and name the measurements that will guide the next step." },
      { time: "6 to 8 minutes", text: "Explain the current problem and why treatment needs close adjustment, then hand over severity, likely trigger, actions and monitoring." }
    ], anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the task, respond, state where you paused and then return." }
  };
  caseTwentyTwo.hints = [
    buildHint22("c022-hint-01", "stem", "c022-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can begin immediately?", "ABCDE, monitoring, bedside glucose and ketones, intravenous access and senior help can begin while Aroha supplies a short history.", "Do not wait for Tane to complete a long account.", "The setting supports simultaneous assessment and treatment.", "Read the symptom sequence for the main physiological loss."),
    buildHint22("c022-hint-02", "stem", "c022-stem-patient", "76-year-old man with type 2 diabetes", ["consensus-hyperglycaemia-2024", "amc-tips-2024"], "Using age and diabetes", "What do these details change before any result?", "They make metabolic disturbance, intercurrent illness, medicine effects and reduced cardiac or renal reserve important considerations, but they do not establish which process is present.", "Risk is high; the exact explanation still needs evidence.", "Tane may tolerate physiological change less well than a younger adult.", "Follow the thirst and urine clues."),
    buildHint22("c022-hint-03", "stem", "c022-stem-patient", "very thirsty, passing urine frequently", ["consensus-hyperglycaemia-2024"], "Reading water loss", "How can frequent urine lead to dehydration?", "If glucose is markedly raised, glucose in urine pulls water with it. Over several days, urine loss can exceed intake and progressively concentrate the blood.", "Frequent urine does not mean hydration is adequate.", "The history suggests substantial water loss, but the cause still needs testing.", "Now ask what the confusion adds."),
    buildHint22("c022-hint-04", "stem", "c022-stem-patient", "increasingly confused over four days", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Using confusion", "Is this just tiredness from illness?", "No assumption is safe. Confusion may reflect metabolic disturbance, poor perfusion, infection, hypoxia or another neurological process. Check all of them.", "Altered thinking makes the assessment urgent even if onset was gradual.", "The brain is now affected; the cause remains to be demonstrated.", "Use Aroha while preserving Tane's voice and consent."),
    buildHint22("c022-hint-05", "stem", "c022-stem-start", "answer brief questions", ["acsqhc-communication-2026", "acsqhc-deterioration-2026"], "Planning communication", "Who should provide the history?", "Ask Tane directly where possible, assess his ability to decide, and use Aroha with permission for timing, medicines and usual cognition.", "Brief answers do not justify delaying physiology checks.", "Tane can participate, but collateral information will matter.", "Fix the four task times now."),
    buildHint22("c022-hint-06", "stem", "c022-task-history", "Assess Tane and obtain a focused history", ["amc-spec-2026", "amc-tips-2024"], "Setting task one", "What fits into the first three minutes?", "ABCDE, hydration, glucose, ketones and neurology, then duration of thirst and urine loss, intake, infection symptoms, diabetes medicines and usual function.", "Assessment and history are one combined task here.", "Minutes 0 to 3 establish severity, loss and likely trigger.", "State the immediate physiological problem before moving on."),
    buildHint22("c022-hint-07", "stem", "c022-task-interpret", "Interpret the information", ["amc-spec-2026", "amc-tips-2024"], "Setting task two", "What makes interpretation useful?", "Group the findings into severity, leading explanation, likely contributor and immediate management, then state how repeated observations and results will guide the next step.", "Interpretation connects evidence to action.", "Minutes 3 to 6 cover interpretation and management.", "Stop at minute 6 and explain."),
    buildHint22("c022-hint-08", "stem", "c022-task-explain", "Explain your assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting task three", "What is the central structure?", "Explain what you think is happening, how it accounts for the current symptoms, what is being done now and what monitoring or uncertainty remains.", "Use cause, effect and sequence.", "Minute 6 to 7 belongs to Tane and Aroha.", "Keep one minute for the senior handover."),
    buildHint22("c022-hint-09", "stem", "c022-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting the final task", "Which facts lead the handover?", "Baseline function and timeline, current physiological effect, decisive findings, treatment and response, then the immediate next action and monitoring need.", "Leave out negatives that do not change care.", "Minute 7 to 8 transfers current risk and limits.", "Start the run with Tane, not the test list."),
    buildHint22("c022-hint-10", "run", "c022-run-start", "You may begin", ["amc-tips-2024", "amc-spec-2026"], "Starting", "What is my first visible move?", "Perform hand hygiene, approach Tane and Aroha, observe breathing and engagement, then establish identity and permission for collateral history.", "The assessment is already underway.", "You have three minutes for assessment and focused history.", "Address Tane first."),
    buildHint22("c022-hint-11", "run", "c022-run-consent", "cannot think properly", ["acsqhc-deterioration-2026", "acsqhc-communication-2026"], "Hearing altered thinking", "What changes now?", "Move directly to ABCDE, glucose, ketones, oxygenation, temperature, hydration and neurological screening. Aroha can supply the timeline while this happens.", "Do not continue a conversational history before checking danger.", "Tane consents to Aroha staying and confirms cognitive change.", "Request the full primary findings."),
    buildHint22("c022-hint-12", "run", "c022-run-primary-request", "screen for a focal neurological deficit", ["acsqhc-deterioration-2026", "jbds-hhs-2023"], "Keeping confusion broad", "Why include lungs and neurology in a glucose presentation?", "Hypoxia, infection, stroke and other causes can coexist. The examination also identifies whether fluid must be cautious because of lung congestion.", "A metabolic explanation must not erase other threats.", "Glucose and ketones are checked within a complete assessment.", "Read oxygenation, perfusion, hydration and cognition together."),
    buildHint22("c022-hint-13", "run", "c022-run-primary-findings", "right basal crackles", ["acsqhc-deterioration-2026", "jbds-hhs-2023"], "Reading breathing", "What do 92% and crackles change?", "They support a respiratory process and warn that fluid needs repeated lung reassessment rather than unmonitored large volumes.", "Treat hypoxaemia and investigate infection while correcting dehydration.", "A chest trigger and limited fluid tolerance are possible.", "Now judge circulation and water loss."),
    buildHint22("c022-hint-14", "run", "c022-run-primary-findings", "capillary refill four seconds", ["acsqhc-deterioration-2026", "jbds-hhs-2023"], "Reading circulation", "Does the modest hypotension matter?", "Tachycardia, delayed refill, dry tissues and confusion show impaired perfusion and marked dehydration despite a pressure still near 100 systolic.", "Use the whole circulation assessment.", "Tane has significant dehydration with organ effects.", "Join this with fever, extreme glucose and low ketones without naming the final pattern yet."),
    buildHint22("c022-hint-15", "run", "c022-run-primary-findings", "blood ketones are 0.8 mmol/L", ["consensus-hyperglycaemia-2024", "jbds-hhs-2023"], "Using the bedside pattern", "What does very high glucose with little ketonaemia suggest?", "It suggests a severe non-ketotic hyperglycaemic process, but osmolality, pH and bicarbonate are needed to define it and check for a mixed state.", "Do not diagnose from a meter reading alone.", "A severe hyperglycaemic emergency is likely; formal characterisation is pending.", "Escalate, support oxygenation and obtain access before a detailed history."),
    buildHint22("c022-hint-16", "run", "c022-run-initial-management", "measure urine output", ["jbds-hhs-2023", "acsqhc-deterioration-2026"], "Tracking circulation and kidneys", "Why measure urine from the start?", "Urine output helps show renal perfusion and fluid response. Together with lungs and circulation, it will guide how much fluid Tane can safely receive.", "One fluid prescription cannot replace repeated reassessment.", "Senior, critical-care and diabetes support are requested.", "Use Aroha to clarify the timeline and infection symptoms while treatment starts."),
    buildHint22("c022-hint-17", "run", "c022-run-history-question", "when was Tane last himself", ["amc-tips-2024", "jbds-hhs-2023"], "Building the timeline", "Why start with normal function?", "It distinguishes acute cognitive change and shows the gradual progression from osmotic symptoms to reduced intake and confusion.", "The time course helps distinguish a slowly developing concentration problem from a faster acid-producing process.", "Treatment is active; the history now tests loss, trigger and alternatives.", "Use the answer to test infection, ketosis and other causes of confusion."),
    buildHint22("c022-hint-18", "run", "c022-run-history-answer", "fever and a cough with yellow phlegm", ["consensus-hyperglycaemia-2024", "acsqhc-deterioration-2026"], "Identifying the likely trigger", "How can pneumonia produce this metabolic decline?", "Infection raises counter-regulatory hormones, increasing glucose and insulin need. Fever and poor intake then worsen dehydration.", "Treat the trigger alongside the metabolic emergency.", "Pneumonia is now plausible; vomiting and abdominal pain are absent.", "Check diabetes treatment, recent steroids and usual cognition."),
    buildHint22("c022-hint-19", "run", "c022-run-diabetes-answer", "missed them for three days", ["consensus-hyperglycaemia-2024", "jbds-hhs-2023"], "Using medicine history", "Did missing tablets alone cause this?", "It contributed, but infection, reduced intake and progressive water loss are also important. His independent baseline confirms the confusion is acute.", "Avoid reducing a multi-factor process to one missed medicine.", "Infection and omitted diabetes treatment probably combined.", "Request tests that define osmolality, acid-base state, kidneys and infection."),
    buildHint22("c022-hint-20", "run", "c022-run-tests", "calculated osmolality, full blood count", ["jbds-hhs-2023", "consensus-hyperglycaemia-2024"], "Choosing the decisive measure", "Why calculate and repeat osmolality?", "It reflects how concentrated the extracellular fluid is and guides the safe correction rate linked to neurological risk.", "Glucose and sodium must be interpreted together.", "The test set defines the metabolic pattern, organ effect and trigger.", "Read pH and ketones before naming it."),
    buildHint22("c022-hint-21", "run", "c022-run-results", "pH is 7.36", ["consensus-hyperglycaemia-2024", "jbds-hhs-2023"], "Separating the hyperglycaemic emergencies", "What do normal pH and low ketones tell me?", "There is no major ketoacidosis. That separates this from classic DKA despite the severe hyperglycaemia.", "Bicarbonate 19 may reflect illness or kidney impairment without defining DKA.", "A predominantly hyperosmolar process is supported.", "Now quantify concentration and organ effects."),
    buildHint22("c022-hint-22", "run", "c022-run-results", "Calculated osmolality is 379", ["jbds-hhs-2023", "consensus-hyperglycaemia-2024"], "Confirming severe hyperosmolality", "What joins 379, glucose 48 and confusion?", "Profound hyperosmolality explains neurological dysfunction and indicates a high-risk hyperosmolar state. Sodium 151 and acute kidney injury support major water deficit.", "The striking glucose matters through its effect on water and osmolality.", "The metabolic pattern and severity are now defined.", "Use the chest X-ray to identify the trigger."),
    buildHint22("c022-hint-23", "run", "c022-run-results", "right lower-lobe consolidation", ["acsqhc-deterioration-2026", "consensus-hyperglycaemia-2024"], "Confirming the trigger", "What has the imaging added?", "It supports pneumonia as the precipitating infection and explains fever, cough, crackles and hypoxaemia.", "The trigger is treated without waiting for full metabolic correction.", "Hyperosmolality, dehydration, kidney injury and pneumonia are all established.", "Start controlled saline and state why the first volume is small."),
    buildHint22("c022-hint-24", "run", "c022-run-interpretation-text", "hyperosmolar hyperglycaemic state", ["jbds-hhs-2023", "consensus-hyperglycaemia-2024"], "Naming the diagnosis", "Is there enough evidence now?", "Yes. Severe hyperglycaemia, osmolality 379, dehydration and cognitive change, with little ketonaemia and no major acidosis, establish HHS.", "The diagnosis now determines a slow correction strategy.", "HHS triggered by pneumonia with kidney injury is established.", "Let repeated osmolality and lung findings set each fluid step."),
    buildHint22("c022-hint-25", "run", "c022-run-control", "osmolality to fall by 3 to 8", ["jbds-hhs-2023", "consensus-hyperglycaemia-2024"], "Controlling correction", "Why place limits on improvement?", "A rapid fall in osmolality can drive water shifts into cells and increase neurological harm. Glucose, sodium and osmolality must change in a coordinated, monitored way.", "Faster numerical improvement is not safer improvement.", "Correction has explicit hourly limits.", "Potassium follows renal function and urine output, not a routine bag order."),
    buildHint22("c022-hint-26", "run", "c022-run-insulin", "Do not start insulin immediately", ["jbds-hhs-2023", "consensus-hyperglycaemia-2024"], "Delaying insulin deliberately", "Why is waiting active treatment?", "Saline restores circulation and lowers glucose and osmolality. Early insulin can produce an excessive fall before intravascular volume is restored.", "Delay is protocolised and monitored, not inaction.", "Fluid response comes first; insulin follows only if glucose stops falling adequately and potassium is safe.", "Treat pneumonia and prevent other complications meanwhile."),
    buildHint22("c022-hint-27", "run", "c022-run-trigger", "prompt intravenous antibiotics", ["acsqhc-deterioration-2026", "consensus-hyperglycaemia-2024"], "Treating the precipitant", "What else must run beside fluid correction?", "Give appropriate antibiotics without delay, monitor for overload and neurological change, hold unsafe oral diabetes medicines and provide indicated thromboprophylaxis.", "Metabolic treatment fails if the precipitant is neglected.", "Cause treatment and controlled correction are proceeding together.", "Answer Aroha's concern about the insulin sequence."),
    buildHint22("c022-hint-28", "run", "c022-run-question", "Why are you waiting to give insulin", ["acsqhc-communication-2026", "jbds-hhs-2023"], "Hearing the concern", "How do I make this reassuring without sounding passive?", "Explain that fluid is already treating the immediate problem and that insulin is added at the point it helps without causing an unsafe concentration shift.", "Name what is being done now before explaining what waits.", "Aroha needs the reason for the sequence.", "Connect concentrated blood, fluid first and monitored insulin timing."),
    buildHint22("c022-hint-29", "run", "c022-run-answer", "Fluid is the first treatment", ["jbds-hhs-2023", "acsqhc-communication-2026"], "Explaining the sequence", "What should she remember?", "The main early deficit is water. Fluid improves circulation and begins lowering glucose; insulin follows if fluid alone is insufficient.", "Use one causal explanation rather than several thresholds.", "The family understands why treatment is gradual.", "At the examiner prompt, give the whole assessment and plan."),
    buildHint22("c022-hint-30", "run", "c022-run-explanation-prompt", "explain your assessment", ["amc-spec-2026", "acsqhc-communication-2026"], "Switching audience", "What belongs in this minute?", "Explain the pneumonia trigger, glucose-driven water loss, concentrated blood, brain and kidney effects, gradual fluid, antibiotics, close monitoring and later insulin.", "Stop speaking in laboratory shorthand.", "Minute 6 to 7 belongs to Tane and Aroha.", "Then transfer the same priorities to the senior clinician."),
    buildHint22("c022-hint-31", "run", "c022-run-explanation", "affecting his kidneys and thinking", ["acsqhc-communication-2026", "jbds-hhs-2023"], "Linking symptoms to physiology", "Why mention the organs affected?", "It explains why confusion and kidney injury are part of the emergency and why correction needs high-acuity monitoring.", "Seriousness becomes understandable when effects are connected.", "Cause, impact and treatment are explained in plain language.", "Use the final minute for current values, treatment and safe limits."),
    buildHint22("c022-hint-32", "run", "c022-run-handover-prompt", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps this useful?", "Baseline and timeline, current physiology, defining glucose and osmolality with acid-base state, pneumonia and kidney injury, then fluid strategy, antibiotics and monitoring limits.", "The senior needs the correction plan as well as the diagnosis.", "The final minute transfers severity, trigger and controlled treatment.", "Finish with who is involved and what is being measured hourly."),
    buildHint22("c022-hint-33", "run", "c022-run-end", "station is complete", ["amc-tips-2024"], "Finishing", "Should I add another complication?", "No. The station has ended. Stop, reset and let the next stem provide its own priorities.", "Do not carry this diagnosis into the next case.", "Case 22 is complete.", "Take one breath, then begin the next stem from line one.")
  ];
  caseTwentyTwo.essentialHintIds = ["c022-hint-04", "c022-hint-06", "c022-hint-07", "c022-hint-08", "c022-hint-09", "c022-hint-14", "c022-hint-15", "c022-hint-22", "c022-hint-24", "c022-hint-25", "c022-hint-26", "c022-hint-30", "c022-hint-32", "c022-hint-33"];
  var clockByHint22 = {
    "c022-hint-06": "Minutes 0 to 3: ABCDE, cognition, glucose, ketones and hydration, then only the timeline, trigger and medicine questions.",
    "c022-hint-14": "Poor perfusion and confusion interrupt a conversational history. Begin support, then use Aroha for brief decisive information.",
    "c022-hint-24": "Before minute 6: HHS, pneumonia and kidney injury are established. State the controlled fluid and monitoring plan now.",
    "c022-hint-25": "Check the hourly correction limits before adding another treatment. Rate is part of safety.",
    "c022-hint-30": "Minute 6: turn to Tane and Aroha and explain why fluid and antibiotics come before insulin.",
    "c022-hint-32": "Final minute: transfer baseline, severity, trigger, kidney effect, treatment and correction limits."
  };
  var deeperByHint22 = {
    "c022-hint-03": ["When blood glucose exceeds renal reabsorptive capacity, glucose remains in urine and acts osmotically. Water and electrolytes follow, so frequent urination can produce profound net dehydration."],
    "c022-hint-25": ["Extracellular hyperosmolality draws water out of cells. If osmolality falls too quickly, water moves back into cells rapidly, including brain cells."],
    "c022-hint-26": ["Insulin moves glucose and water into cells and can reduce circulating volume further. Initial saline partly restores that volume and often lowers glucose without insulin."]
  };
  caseTwentyTwo.hints.forEach(function (hint) { if (clockByHint22[hint.id]) hint.clock = clockByHint22[hint.id]; if (deeperByHint22[hint.id]) hint.deeper = deeperByHint22[hint.id]; });
})();
