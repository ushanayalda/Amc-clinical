(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-023",
    globalId: "CP-C023",
    registryId: "CP-P7-C003",
    displayNumber: "Case 23",
    title: "Weak legs and a skipping heartbeat",
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
          id: "c023-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c023-stem-patient",
          text: "Mr Eamon Kaurangi, a 61-year-old man, has presented with increasing weakness and an intermittent sensation that his heart is skipping beats since yesterday."
        },
        {
          id: "c023-stem-start",
          text: "Eamon is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c023-task-history",
          text: "Take a focused history from Eamon.",
          timing: "2 minutes"
        },
        {
          id: "c023-task-assess",
          text: "Assess Eamon, interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c023-task-explain",
          text: "Explain your assessment and ongoing plan to Eamon.",
          timing: "2 minutes"
        },
        {
          id: "c023-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c023-run-assessment",
          heading: "Focused history and immediate assessment",
          turns: [
            {
              id: "c023-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-start", text: "You may begin." }]
            },
            {
              id: "c023-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c023-run-first-action", text: "The doctor performs hand hygiene and approaches Eamon." }]
            },
            {
              id: "c023-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-intro", text: "Hello Eamon, I am Ushana, one of the emergency doctors. Can you confirm your full name? May I assess you while we talk?" }]
            },
            {
              id: "c023-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-intro-answer", text: "Eamon Kaurangi. Yes. My legs feel heavy and my heart keeps missing a beat." }]
            },
            {
              id: "c023-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach continuous cardiac and oxygen-saturation monitoring, obtain intravenous access, check glucose and record a 12-lead ECG. Examine his heart, lungs, hydration, abdomen and limb power. Please provide the findings." }]
            },
            {
              id: "c023-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c023-run-primary-findings", text: "Airway is patent. Respiratory rate is 18, oxygen saturation 97% on room air and lungs are clear. Pulse is 48 and regular, blood pressure 102/64 and capillary refill three seconds. Eamon is alert, afebrile and clinically dry. Glucose is 5.6 mmol/L. Limb power is mildly reduced but symmetrical, without a focal deficit. The ECG shows sinus bradycardia, very tall peaked T waves, small P waves and QRS widening to 150 milliseconds." }]
            },
            {
              id: "c023-turn-point-of-care-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-point-of-care-request", text: "These ECG changes may reflect hyperkalaemia. Obtain a venous blood gas. Send a non-haemolysed sample for electrolytes, renal function, calcium, magnesium and full blood count. Do not delay treatment for the laboratory result. Please provide the blood gas." }]
            },
            {
              id: "c023-turn-point-of-care-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c023-run-point-of-care-result", text: "Venous potassium is 7.2 mmol/L, pH 7.29, bicarbonate 18 mmol/L, glucose 5.5 mmol/L and lactate 1.7 mmol/L." }]
            },
            {
              id: "c023-turn-calcium",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-calcium", text: "Call the senior emergency doctor, nephrology and critical care. Under the local severe-hyperkalaemia protocol, give 6.6 mmol of intravenous calcium gluconate, equivalent to 30 millilitres of 10%, over 2 to 3 minutes through secure access with continuous monitoring. Calcium protects the heart but does not lower potassium. Repeat the ECG within 5 to 10 minutes and repeat calcium at 10 minutes if the toxic changes persist." }]
            },
            {
              id: "c023-turn-calcium-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c023-run-calcium-action", text: "Intravenous calcium gluconate is commenced under continuous cardiac monitoring while further treatment is prepared." }]
            },
            {
              id: "c023-turn-shift-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-shift-treatment", text: "Now give 10 units of short-acting insulin with 25 grams of intravenous glucose, plus nebulised salbutamol 10 to 20 milligrams as an adjunct, not alone. His starting glucose is below 7, so commence 10% glucose at 50 millilitres per hour for five hours. Check glucose half-hourly, then hourly for six hours, and treat any hypoglycaemia." }]
            },
            {
              id: "c023-turn-symptom-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-symptom-history", text: "While treatment starts, when did the weakness and heartbeat sensation begin? Any fainting, chest discomfort, breathlessness, numbness or paralysis? Have you had fever, vomiting, diarrhoea, poor intake or passed less urine?" }]
            },
            {
              id: "c023-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-symptom-answer", text: "The weakness began yesterday and is worse today. I have not fainted and have no chest pain or breathlessness. I have felt sick, vomited twice and barely eaten or drunk. I am passing much less urine." }]
            },
            {
              id: "c023-turn-trigger-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-trigger-history", text: "Any urinary burning, fever or flank pain? What kidney and heart conditions do you have? Please list every regular and recently started medicine, including anti-inflammatory tablets, potassium supplements and salt substitutes." }]
            },
            {
              id: "c023-turn-trigger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-trigger-answer", text: "I have stage 3 kidney disease and heart failure. Five days ago my GP gave me trimethoprim for burning urine. I take ramipril, spironolactone, furosemide and carvedilol. I kept taking them despite vomiting. No ibuprofen, supplements or salt substitute. I have no allergies." }]
            }
          ]
        },
        {
          id: "c023-run-treatment",
          heading: "Potassium lowering and definitive management",
          turns: [
            {
              id: "c023-turn-contributors",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-contributors", text: "Withhold trimethoprim, ramipril and spironolactone. Also hold carvedilol while he is bradycardic, and review furosemide against renal function and volume status. Give cautious isotonic crystalloid with repeated assessment because he appears depleted but has heart failure. Obtain urinalysis and urine culture and choose a renally adjusted antibiotic according to the local infection guideline." }]
            },
            {
              id: "c023-turn-formal-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c023-run-formal-results", text: "The laboratory sample is not haemolysed. Potassium is 7.3 mmol/L, creatinine 318 micromol/L compared with a baseline of 145, urea 29 mmol/L and bicarbonate 17 mmol/L. Urinalysis is positive for leucocytes and nitrites. Ten minutes after calcium, QRS duration is 110 milliseconds and P waves are visible." }]
            },
            {
              id: "c023-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-definitive-plan", text: "This confirms severe hyperkalaemia with ECG toxicity and acute kidney injury, likely from dehydration, infection and potassium-raising medicines. Continue monitored high-dependency care. Recheck potassium at one, two, four, six and 24 hours, with repeat ECGs, renal function, acid-base status, fluid balance and urine output. The shift into cells is temporary. Discuss a locally available potassium binder with nephrology and prepare urgent dialysis if potassium or ECG toxicity persists, rebounds, or oliguria and acidosis worsen." }]
            },
            {
              id: "c023-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-patient-question", text: "Did my usual tablets cause this? Should I never take them again?" }]
            },
            {
              id: "c023-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-patient-answer", text: "The combination became unsafe while your kidneys were working poorly. Trimethoprim, ramipril and spironolactone can each raise potassium. We will stop them now, but that does not mean every medicine is permanently unsuitable. Your kidney and heart teams will decide what can restart after recovery, with a clear illness plan and early blood tests." }]
            }
          ]
        },
        {
          id: "c023-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c023-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-explanation-prompt", text: "Please explain your assessment and plan to Eamon." }]
            },
            {
              id: "c023-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-explanation", text: "Eamon, potassium is a body salt that helps nerves, muscles and the heart work. Your level is high enough to slow and disturb the heart rhythm. We have given calcium to protect your heart and insulin with glucose and salbutamol to move potassium out of the blood temporarily. We are treating the kidney problem and urine infection, checking you closely and arranging kidney treatment to remove potassium if it does not fall safely." }]
            },
            {
              id: "c023-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-understanding", text: "Can you tell me why you need monitoring even though the ECG has improved?" }]
            },
            {
              id: "c023-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-understanding-answer", text: "The first treatments may only work for a while, so the potassium and heartbeat can become abnormal again." }]
            },
            {
              id: "c023-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c023-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c023-run-handover", text: "Eamon Kaurangi is 61 with stage 3 chronic kidney disease and heart failure, presenting with weakness, palpitations, vomiting, poor intake and oliguria after starting trimethoprim while continuing ramipril and spironolactone. Pulse was 48 with peaked T waves, small P waves and QRS 150 milliseconds. Potassium was 7.2 and confirmed non-haemolysed at 7.3; creatinine is 318 from 145, with acidosis and probable urinary infection. Calcium gluconate narrowed the QRS to 110. Insulin with glucose and salbutamol have been given, glucose monitoring and cautious fluids are underway, and contributing drugs are withheld. He needs continuous monitoring, serial potassium and ECGs, infection treatment and urgent nephrology review for potassium removal, including dialysis if refractory or recurrent." }]
            },
            {
              id: "c023-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 11.10: Resuscitation in Special Circumstances, Electrolyte Disorders",
        date: "Current July 2026",
        url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-10-resuscitation-in-special-circumstances"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Hyperkalaemia",
        date: "January 2020, listed in the June 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0025/219049/cpg_hyperkalaemia.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Drug Therapy Protocol: Calcium gluconate",
        date: "October 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219325/DTP_Calcium-gluconate.pdf"
      },
      {
        organisation: "UK Kidney Association",
        title: "Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults",
        date: "October 2023",
        url: "https://guidelines.ukkidney.org/hyperkalaemia/"
      }
    ]
  });

  var caseTwentyThree = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-023"; });
  function buildHint23(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentyThree.masteryFocus = {
    case: "Connect weakness and a skipping heartbeat rather than assessing them separately, obtain early physiological and rhythm evidence, then distinguish immediate stabilisation from treatment of the cause and repeated risk checks.",
    clinical: "When weakness and rhythm symptoms arrive together, obtain an ECG early, separate membrane protection from electrolyte lowering, and reassess for rebound after an initially successful treatment.",
    tasks: ["Focused history", "Assess interpret and manage", "Explain ongoing plan", "Concise clinical handover"],
    transfer: "If Eamon's ECG normalised after calcium but potassium remained 6.9 mmol/L two hours later with worsening oliguria, could you regard the emergency as resolved?",
    transferAnswer: "No. Calcium only protects the myocardium temporarily and the intracellular shift can wear off. Continue monitoring, repeat potassium-lowering measures as indicated, treat hypoglycaemia risk, and escalate urgent nephrology-led potassium removal, including dialysis when refractory hyperkalaemia and worsening oliguria persist.",
    transferChecks: ["Repeat ECG and potassium", "Time since calcium and shift treatment", "Urine output and acidosis", "Definitive potassium removal"],
    transferCitationIds: ["ukka-hyperkalaemia-2023", "anzcor-electrolytes-2026"]
  };
  caseTwentyThree.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "anzcor-electrolytes-2026", title: "Guideline 11.10: Resuscitation in Special Circumstances, Electrolyte Disorders", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Current July 2026", url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-10-resuscitation-in-special-circumstances" },
    { id: "qas-hyperkalaemia-2020", title: "Clinical Practice Guideline: Hyperkalaemia", organisation: "Queensland Ambulance Service", date: "January 2020, listed June 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0025/219049/cpg_hyperkalaemia.pdf" },
    { id: "qas-calcium-2024", title: "Drug Therapy Protocol: Calcium gluconate", organisation: "Queensland Ambulance Service", date: "October 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219325/DTP_Calcium-gluconate.pdf" },
    { id: "ukka-hyperkalaemia-2023", title: "Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults", organisation: "UK Kidney Association", date: "October 2023", url: "https://guidelines.ukkidney.org/hyperkalaemia/" }
  ];
  caseTwentyThree.reasoningCompass = {
    stem: { title: "Treat weakness plus rhythm symptoms as one problem until separated", steps: [
      { time: "0 to 30 seconds", text: "Weakness and a skipping heartbeat may share a cardiac, metabolic, medicine or electrolyte cause. Plan monitoring and an early ECG while you clarify the pattern." },
      { time: "30 to 60 seconds", text: "Ask about fainting, chest symptoms, gastrointestinal loss, urine output, kidney and heart disease, and every recent or regular medicine while ABCDE is assessed." },
      { time: "1 to 2 minutes", text: "Set the stops: history to minute 2, assessment and management to minute 5, explanation to minute 7, handover to minute 8." }
    ], anchor: "History 0 to 2 | Assess and manage 2 to 5 | Explain 5 to 7 | Handover 7 to 8" },
    run: { title: "Link each finding to its immediate consequence", steps: [
      { time: "0 to 2 minutes", text: "Begin monitoring and a focused assessment while asking only about symptoms, fluid balance, long-term conditions and medicines that could change immediate care." },
      { time: "2 to 5 minutes", text: "Interpret the disclosed examination, tracing and bedside results together. Act on any immediate danger, then state what still needs confirmation or correction." },
      { time: "5 to 8 minutes", text: "Explain what is known, what has been done and what needs continued treatment, then hand over the evidence, response and next action." }
    ], anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the task, respond, state where you paused and then return." }
  };
  caseTwentyThree.hints = [
    buildHint23("c023-hint-01", "stem", "c023-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What should be ready early?", "Continuous cardiac monitoring, ECG, bedside glucose, intravenous access and rapid electrolyte testing can begin while the history starts.", "Rhythm symptoms deserve an early tracing even if he is talking.", "Assessment and testing can occur together.", "Read whether weakness is focal or generalised."),
    buildHint23("c023-hint-02", "stem", "c023-stem-patient", "61-year-old man", ["amc-tips-2024", "anzcor-electrolytes-2026"], "Using age", "Does age point to one diagnosis?", "No. It increases the likelihood of heart, kidney and medicine contributors, but current rhythm, perfusion and neurological pattern must decide urgency.", "Age sets context, not the answer.", "Several organ systems could connect the symptoms.", "Look at the distribution and timing of weakness."),
    buildHint23("c023-hint-03", "stem", "c023-stem-patient", "increasing weakness", ["anzcor-electrolytes-2026", "amc-tips-2024"], "Reading weakness", "What must I separate quickly?", "Focal weakness suggests a neurological lesion; symmetrical or ascending weakness suggests metabolic, electrolyte, neuromuscular or toxic causes. Check power and conscious state while monitoring the heart.", "Do not treat weakness as a vague symptom.", "The distribution will guide the next branch.", "Connect it with the heartbeat sensation."),
    buildHint23("c023-hint-04", "stem", "c023-stem-patient", "heart is skipping beats", ["anzcor-electrolytes-2026", "acsqhc-deterioration-2026"], "Using the rhythm symptom", "What does this phrase require now?", "Check pulse, perfusion and ECG. A rhythm or conduction abnormality may be part of the same physiological problem causing weakness.", "A subjective skipped beat is not yet a defined rhythm.", "Cardiac and metabolic assessment should proceed together.", "Use alertness to take only a short focused history."),
    buildHint23("c023-hint-05", "stem", "c023-stem-start", "awake and able to answer questions", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Using alertness", "Can I finish history before the ECG?", "No. He can answer while monitoring, pulse, glucose and ECG are obtained. Dangerous conduction change can coexist with normal conversation.", "Alert is not the same as electrically stable.", "History and cardiac assessment can run together.", "Fix the task times before starting."),
    buildHint23("c023-hint-06", "stem", "c023-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Setting task one", "What fits into two minutes?", "Onset and progression, syncope or chest symptoms, focal versus general weakness, vomiting and intake, urine output, kidney and heart disease, and a complete medicine change history.", "Ask what changes immediate treatment.", "Minutes 0 to 2 are focused history with monitoring already active.", "Move to assessment even if one background detail remains."),
    buildHint23("c023-hint-07", "stem", "c023-task-assess", "Assess Eamon, interpret", ["amc-spec-2026", "amc-tips-2024"], "Setting task two", "What belongs in minutes 2 to 5?", "Current physiology, focused examination, rhythm and purposeful investigations, then what the findings mean, which action follows and how response will be checked.", "Assessment, interpretation and management form one timed block.", "Three minutes cover recognition, immediate action and reassessment.", "At minute 5, turn to Eamon."),
    buildHint23("c023-hint-08", "stem", "c023-task-explain", "Explain your assessment and ongoing plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting task three", "What must Eamon understand?", "Explain the leading assessment, how it links his symptoms, what each treatment is intended to do, what remains temporary or uncertain and why monitoring continues.", "Avoid a drug list without purpose.", "Minutes 5 to 7 belong to Eamon.", "Keep the final minute for handover."),
    buildHint23("c023-hint-09", "stem", "c023-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting the final task", "Which trend matters most?", "Presenting symptoms and contributors, decisive findings, treatment given, response, remaining risk and the next escalation point.", "The response matters as much as the first result.", "Minute 7 to 8 transfers current risk and next action.", "Begin with visible safety actions."),
    buildHint23("c023-hint-10", "run", "c023-run-start", "You may begin", ["amc-tips-2024", "amc-spec-2026"], "Starting", "What is the first move?", "Approach Eamon, observe breathing and movement, confirm identity and consent, then start monitoring as you ask the opening question.", "The two-minute history clock has started.", "Assessment is already running beside the history.", "Perform hand hygiene and approach him."),
    buildHint23("c023-hint-11", "run", "c023-run-intro-answer", "legs feel heavy", ["amc-tips-2024", "anzcor-electrolytes-2026"], "Hearing the first answer", "Which finding should I obtain before more detail?", "Pulse and ECG. Symmetrical leg heaviness with rhythm symptoms may reflect a systemic disturbance affecting skeletal and cardiac muscle.", "Do not spend the first minute on a long neurological review.", "Weakness and heartbeat symptoms remain connected until evidence separates them.", "Request ABCDE, glucose and ECG now."),
    buildHint23("c023-hint-12", "run", "c023-run-primary-request", "continuous cardiac", ["anzcor-electrolytes-2026", "acsqhc-deterioration-2026"], "Making monitoring immediate", "Why continuous rather than one pulse check?", "Electrolyte and conduction problems can change quickly. Continuous rhythm monitoring detects worsening while access and tests are obtained.", "A single normal moment would not be enough.", "Cardiac rhythm and perfusion are being assessed continuously.", "Read the pulse, ECG and pattern of weakness together."),
    buildHint23("c023-hint-13", "run", "c023-run-primary-findings", "Pulse is 48", ["acsqhc-deterioration-2026", "anzcor-electrolytes-2026"], "Reading perfusion", "What does 48 mean beside pressure 102 and refill three seconds?", "Bradycardia with delayed refill suggests reduced cardiac output even before marked hypotension. Dryness raises concern for reduced renal perfusion.", "Do not let alertness cancel the circulation findings.", "Eamon is currently compromised but responsive.", "Now interpret the ECG morphology."),
    buildHint23("c023-hint-14", "run", "c023-run-primary-findings", "very tall peaked T waves", ["anzcor-electrolytes-2026", "qas-hyperkalaemia-2020"], "Reading the ECG", "What does the combination of peaked T waves, small P waves and widening QRS suggest?", "It is a toxic conduction pattern from a severe electrolyte disturbance and requires immediate rapid potassium testing and treatment readiness.", "Do not wait for the rhythm to become pulseless.", "The ECG is dangerous and the limb weakness is symmetrical.", "Obtain a rapid gas while sending a non-haemolysed formal sample."),
    buildHint23("c023-hint-15", "run", "c023-run-point-of-care-request", "may reflect hyperkalaemia", ["anzcor-electrolytes-2026", "ukka-hyperkalaemia-2023"], "Naming the working cause", "Is the ECG enough to act?", "Toxic ECG changes strongly support hyperkalaemia. A rapid venous potassium can confirm the direction, but calcium should not be delayed when the pattern and clinical state are compelling.", "The formal sample still checks haemolysis and renal function.", "Severe hyperkalaemia is now the working diagnosis.", "Use the gas to confirm severity and look for acidosis."),
    buildHint23("c023-hint-16", "run", "c023-run-point-of-care-result", "potassium is 7.2", ["anzcor-electrolytes-2026", "ukka-hyperkalaemia-2023"], "Confirming severity", "What changes with 7.2 and ECG toxicity?", "This is life-threatening hyperkalaemia. Acidosis may worsen the extracellular shift, and immediate myocardial protection is required.", "Do not wait for the central laboratory result before protecting the heart.", "Severe hyperkalaemia with toxic ECG change is established.", "Call senior, kidney and critical-care support and give calcium."),
    buildHint23("c023-hint-17", "run", "c023-run-calcium", "Calcium protects the heart", ["anzcor-electrolytes-2026", "qas-calcium-2024", "ukka-hyperkalaemia-2023"], "Protecting the myocardium", "What does calcium actually accomplish?", "It stabilises cardiac cell excitability and can narrow toxic conduction changes within minutes. It does not remove potassium from blood.", "Protection is temporary and must be followed by potassium-lowering treatment.", "Calcium is given with continuous ECG monitoring.", "Repeat the ECG and repeat calcium if toxicity persists."),
    buildHint23("c023-hint-18", "run", "c023-run-shift-treatment", "insulin with 25 grams", ["ukka-hyperkalaemia-2023", "anzcor-electrolytes-2026"], "Moving potassium into cells", "Why pair insulin with glucose?", "Insulin activates cellular potassium uptake; glucose reduces hypoglycaemia risk. Nebulised salbutamol adds another intracellular shift but is not reliable alone.", "These measures redistribute potassium; they do not remove it.", "Myocardial protection and temporary lowering are both underway.", "Because his glucose is low-normal, use the extended glucose and monitoring plan."),
    buildHint23("c023-hint-19", "run", "c023-run-symptom-history", "passed less urine", ["ukka-hyperkalaemia-2023", "amc-tips-2024"], "Finding reduced excretion", "Why ask urine output now?", "Oliguria suggests impaired kidney potassium removal and helps decide fluid, drug dosing and dialysis urgency.", "Continue only questions that explain accumulation or change treatment.", "Emergency therapy is active; the cause and removal pathway remain to be defined.", "Hear the fluid loss and urine sequence."),
    buildHint23("c023-hint-20", "run", "c023-run-symptom-answer", "vomited twice and barely eaten or drunk", ["ukka-hyperkalaemia-2023", "acsqhc-deterioration-2026"], "Connecting volume and kidneys", "How can poor intake raise potassium?", "Volume depletion can reduce kidney perfusion and filtration, limiting potassium excretion. Oliguria supports that concern.", "Heart failure means fluid still needs cautious reassessment.", "Acute kidney injury is plausible before results return.", "Ask about kidney disease and potassium-raising medicines."),
    buildHint23("c023-hint-21", "run", "c023-run-trigger-history", "recently started medicine", ["ukka-hyperkalaemia-2023", "amc-tips-2024"], "Building the medicine interaction", "Why insist on recent and regular medicines?", "A new drug may reduce potassium excretion, while chronic renin-angiotensin and mineralocorticoid blockade can add to the effect during kidney injury.", "The interaction matters more than blaming one tablet.", "Multiple contributors may be acting together.", "Listen for exact drug names and illness timing."),
    buildHint23("c023-hint-22", "run", "c023-run-trigger-answer", "trimethoprim", ["ukka-hyperkalaemia-2023"], "Identifying contributors", "Why does this combination matter?", "Trimethoprim can reduce renal potassium secretion. Ramipril and spironolactone also raise potassium risk, especially during dehydration and acute kidney dysfunction.", "Usual medicines can become unsafe in a changed physiological state.", "The likely contributors are now visible.", "Withhold them and treat fluid status and infection carefully."),
    buildHint23("c023-hint-23", "run", "c023-run-contributors", "cautious isotonic crystalloid", ["acsqhc-deterioration-2026", "ukka-hyperkalaemia-2023"], "Balancing fluid treatment", "Why cautious if he is dry?", "Volume may improve renal perfusion, but heart failure increases overload risk. Reassess lungs, perfusion and urine after small amounts.", "Caution is active reassessment, not therapeutic delay.", "Contributors are withheld and the urinary trigger is addressed.", "Use formal results and ECG response to decide whether current treatment is enough."),
    buildHint23("c023-hint-24", "run", "c023-run-formal-results", "not haemolysed", ["ukka-hyperkalaemia-2023", "anzcor-electrolytes-2026"], "Confirming a true result", "Why does non-haemolysed matter?", "Cell rupture in a sample can falsely raise potassium. Here the repeat confirms a true severe level, while creatinine rise and acidosis establish acute kidney injury.", "The clinical and laboratory evidence now agree.", "Severe hyperkalaemia is real and renal clearance is impaired.", "Now interpret the ECG response to calcium separately from potassium removal."),
    buildHint23("c023-hint-25", "run", "c023-run-formal-results", "QRS duration is 110", ["anzcor-electrolytes-2026", "ukka-hyperkalaemia-2023"], "Reading calcium response", "Does a narrower QRS mean the potassium is fixed?", "No. It shows improved myocardial protection. Potassium may remain dangerously high and the calcium effect can wear off.", "An improved ECG is not biochemical resolution.", "The heart is better protected for now; potassium still needs removal and repeated checks.", "State the serial monitoring and dialysis threshold."),
    buildHint23("c023-hint-26", "run", "c023-run-definitive-plan", "shift into cells is temporary", ["ukka-hyperkalaemia-2023", "anzcor-electrolytes-2026"], "Planning beyond the first hour", "What prevents rebound from being missed?", "Repeat potassium and ECGs, follow kidney function, acid-base status and urine output, and arrange a potassium-removal strategy with nephrology.", "Temporary movement can reverse as insulin and salbutamol effects fade.", "High-dependency monitoring and definitive planning are required.", "Escalate dialysis if potassium, ECG toxicity, oliguria or acidosis fail to improve."),
    buildHint23("c023-hint-27", "run", "c023-run-patient-question", "Should I never take them again", ["acsqhc-communication-2026", "ukka-hyperkalaemia-2023"], "Answering medicine fear", "Can I promise permanent discontinuation?", "No. Explain that the combination became unsafe during acute kidney dysfunction and that each heart or kidney medicine must be reconsidered after recovery with early blood testing.", "Avoid making a lifelong decision during an acute interaction.", "Eamon needs a safe hold-and-review plan.", "Separate today's medicine holds from later specialist decisions."),
    buildHint23("c023-hint-28", "run", "c023-run-patient-answer", "does not mean every medicine is permanently unsuitable", ["acsqhc-communication-2026", "ukka-hyperkalaemia-2023"], "Giving a balanced answer", "What restores confidence?", "Name what is stopped now, why the physiology changed, who will decide on restart, and how illness advice and early blood tests reduce recurrence.", "Specific follow-up is more useful than a blanket warning.", "The medicine concern has been answered without overclaiming.", "At the prompt, explain the whole event and ongoing risk."),
    buildHint23("c023-hint-29", "run", "c023-run-explanation-prompt", "explain your assessment", ["amc-spec-2026", "acsqhc-communication-2026"], "Switching audience", "What belongs in two minutes?", "Explain potassium's role, the heart risk, calcium protection, temporary shifting, treatment of kidneys and infection, repeat monitoring and possible dialysis.", "Use purpose, not a list of drug names.", "Minutes 5 to 7 belong to Eamon.", "Check that he understands why improvement is not the endpoint."),
    buildHint23("c023-hint-30", "run", "c023-run-understanding-answer", "may only work for a while", ["acsqhc-communication-2026", "ukka-hyperkalaemia-2023"], "Using teach-back", "What has Eamon understood correctly?", "He understands that early treatment is temporary and that potassium and rhythm can become dangerous again. Correct only what is missing.", "Teach-back checks the explanation rather than testing the patient.", "Ongoing monitoring now has a clear reason.", "Use the final minute for a trend-based handover."),
    buildHint23("c023-hint-31", "run", "c023-run-handover-prompt", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps this safe?", "Symptoms and contributors, initial pulse and toxic ECG, potassium and kidney injury, calcium and ECG response, shifting treatment, glucose plan, then serial checks and dialysis threshold.", "State what improved and what remains dangerous.", "The final minute transfers current risk and action.", "Finish with nephrology and definitive potassium removal."),
    buildHint23("c023-hint-32", "run", "c023-run-handover", "dialysis if refractory", ["ukka-hyperkalaemia-2023", "acsqhc-communication-2026"], "Closing with the contingency", "Why include dialysis now?", "Because oliguria and severe kidney injury may prevent adequate potassium removal, and temporary shifting may rebound. The senior needs the escalation threshold before deterioration recurs.", "A handover transfers the backup plan as well as completed treatment.", "Severity, response, contributors and definitive pathway are transferred.", "Stop when the examiner ends the station."),
    buildHint23("c023-hint-33", "run", "c023-run-end", "station is complete", ["amc-tips-2024"], "Finishing", "Should I add a dietary list?", "No. The station has ended. Stop, reset and begin the next case from its own stem.", "Do not dilute a complete handover with an afterthought.", "Case 23 is complete.", "Take one breath, then start the next stem at line one.")
  ];
  caseTwentyThree.essentialHintIds = ["c023-hint-04", "c023-hint-06", "c023-hint-07", "c023-hint-08", "c023-hint-09", "c023-hint-14", "c023-hint-16", "c023-hint-17", "c023-hint-18", "c023-hint-25", "c023-hint-26", "c023-hint-29", "c023-hint-31", "c023-hint-33"];
  var clockByHint23 = {
    "c023-hint-06": "Minutes 0 to 2: monitor and obtain ECG while asking only about weakness, syncope, fluid loss, urine, kidney disease and medicines.",
    "c023-hint-14": "Toxic ECG change interrupts the history. Obtain rapid potassium and prepare immediate myocardial protection.",
    "c023-hint-18": "Before minute 5: calcium protection and potassium shifting are underway. Clarify contributors while monitoring continues.",
    "c023-hint-25": "Do not mistake ECG improvement for completion. State the repeat potassium and definitive removal plan before switching tasks.",
    "c023-hint-29": "Minute 5: turn to Eamon and explain temporary protection, temporary shifting and durable removal.",
    "c023-hint-31": "Final minute: hand over initial toxicity, treatment response, persistent risks and dialysis threshold."
  };
  var deeperByHint23 = {
    "c023-hint-14": ["Rising extracellular potassium changes the resting membrane potential. Repolarisation first becomes rapid and peaked, then atrial activity fades and ventricular conduction widens as sodium channels become unavailable."],
    "c023-hint-17": ["Calcium raises the threshold potential and restores the gap between resting and activation potentials. This improves electrical stability without changing the serum potassium concentration."],
    "c023-hint-18": ["Insulin stimulates the sodium-potassium ATPase and moves potassium into cells. Salbutamol acts through beta-2 receptors on the same cellular pump, so the effects are additive but temporary."]
  };
  caseTwentyThree.hints.forEach(function (hint) { if (clockByHint23[hint.id]) hint.clock = clockByHint23[hint.id]; if (deeperByHint23[hint.id]) hint.deeper = deeperByHint23[hint.id]; });
})();
