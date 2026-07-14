(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-035",
    globalId: "CP-C035",
    registryId: "CP-P11-C003",
    displayNumber: "Case 35",
    title: "A child after a convulsion",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 11, title: "Paediatric Acute Deterioration" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c035-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c035-stem-patient",
          text: "Master Levon Sarkis, a 6-year-old boy, has been brought to hospital after a convulsion at home."
        },
        {
          id: "c035-stem-context",
          text: "His mother, Anya, is present. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c035-task-assess",
          text: "Assess Levon and obtain a focused history from Anya.",
          timing: "2 minutes"
        },
        {
          id: "c035-task-interpret",
          text: "Interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c035-task-manage",
          text: "Initiate management and explain your assessment and plan to Anya.",
          timing: "3 minutes"
        },
        {
          id: "c035-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c035-run-assessment",
          heading: "Concurrent assessment, seizure timing and first-line treatment",
          turns: [
            {
              id: "c035-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-start", text: "You may begin." }]
            },
            {
              id: "c035-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c035-run-first-action", text: "The doctor performs hand hygiene and approaches Levon and Anya at the trolley." }]
            },
            {
              id: "c035-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-introduction", text: "Hello, I am Ushana, an emergency doctor. Anya, please confirm Levon's name. When did the convulsion begin, and has it stopped at all? I will assess and treat him while we speak." }]
            },
            {
              id: "c035-turn-opening-history",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-opening-history", text: "I am Anya Sarkis. This is Levon Sarkis. It began ten minutes ago. Both arms and legs are still jerking. He has not woken or stopped." }]
            },
            {
              id: "c035-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-primary-request", text: "Start the seizure timer and call senior paediatrics and the resuscitation team. I assess airway, breathing, circulation and disability, and request observations, bedside glucose, weight and intravenous access. Anya, what seizure medicine has he received at home or in the ambulance?" }]
            },
            {
              id: "c035-turn-medication-history",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-medication-history", text: "He has epilepsy and a seizure plan. At five minutes I gave 7.5 milligrams of buccal midazolam exactly as the plan says. Nobody has given anything else. He weighs 25 kilograms." }]
            },
            {
              id: "c035-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c035-run-primary-findings", text: "Levon is unresponsive with continuing symmetrical tonic-clonic movements. Secretions are pooling, but air entry is present bilaterally. Respiratory rate is 18 and becoming shallow, oxygen saturation 91% on room air, pulse 148, blood pressure 104/66, temperature 36.8 degrees Celsius and glucose 5.2 mmol/L. He weighs 25 kilograms. A peripheral intravenous cannula is secured." }]
            },
            {
              id: "c035-turn-airway-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-airway-management", text: "Place him on his side, protect his head, open the airway and suction. Do not restrain him or put anything in his mouth. Give high-concentration oxygen, attach ECG, saturation and blood-pressure monitoring, and prepare bag-mask ventilation with paediatric airway equipment." }]
            },
            {
              id: "c035-turn-first-line-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-first-line-treatment", text: "The home midazolam counts as dose one, and five minutes have passed. Give intravenous midazolam 0.15 milligrams per kilogram: 3.75 milligrams. This is dose two and the final benzodiazepine. Prepare levetiracetam and use intraosseous access if the intravenous line fails." }]
            },
            {
              id: "c035-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c035-run-treatment-action", text: "The team positions Levon, suctions his airway, provides oxygen and monitoring, and gives 3.75 mg intravenous midazolam while preparing second-line medication." }]
            }
          ]
        },
        {
          id: "c035-run-escalation",
          heading: "Second-line treatment, ventilation and cause assessment",
          turns: [
            {
              id: "c035-turn-persistent-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c035-run-persistent-findings", text: "Five minutes after the hospital midazolam, the convulsion continues. Levon's breathing is shallow, oxygen saturation is 87% despite oxygen, and his chest movement is reduced. Pulse is 142 and blood pressure is 98/62." }]
            },
            {
              id: "c035-turn-respiratory-support",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-respiratory-support", text: "Do not give a third benzodiazepine. Begin two-person bag-mask ventilation with 100% oxygen and capnography if available. Call the airway-skilled senior and paediatric critical care team. Prepare for intubation if ventilation remains inadequate or the seizure continues after second-line treatment." }]
            },
            {
              id: "c035-turn-second-line",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-second-line", text: "Give levetiracetam 60 milligrams per kilogram: 1.5 grams intravenously over five minutes. Use intraosseous access if the intravenous line is lost. If this fails, proceed to senior-led anaesthetic treatment and intubation, and arrange EEG because paralysis can hide electrical seizure activity." }]
            },
            {
              id: "c035-turn-ventilation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c035-run-ventilation-action", text: "Two clinicians provide effective bag-mask ventilation. Oxygen saturation rises to 98%. Levetiracetam 1.5 g is infused over five minutes as the airway and critical care teams arrive." }]
            },
            {
              id: "c035-turn-trigger-questions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-trigger-questions", text: "Anya, when was epilepsy diagnosed and what does he take? Any missed or vomited doses, fever, headache, stiff neck, rash, illness, head injury, possible ingestion, sleep loss or focal movement? Is this like his previous seizures?" }]
            },
            {
              id: "c035-turn-trigger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-trigger-answer", text: "He was diagnosed 18 months ago and takes levetiracetam morning and night. He vomited yesterday evening and this morning, so neither dose stayed down. No fever, headache, stiff neck, rash, injury or possible medicine access. He slept badly. His usual seizures look the same but stop within two minutes." }]
            },
            {
              id: "c035-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-investigations", text: "Send venous gas, electrolytes, calcium, magnesium, renal function and full blood count because second-line treatment was required and he has vomited. Investigate infection or toxic exposure if supported clinically. Do not delay treatment for tests, imaging or lumbar puncture." }]
            },
            {
              id: "c035-turn-resolution-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c035-run-resolution-findings", text: "The convulsion stops during the levetiracetam infusion. Levon breathes spontaneously at 20 breaths per minute, oxygen saturation is 98% with supplemental oxygen, pulse 118 and blood pressure 106/68. He remains drowsy but localises to touch. Electrolytes, calcium, magnesium and venous pH are within reference ranges." }]
            },
            {
              id: "c035-turn-postictal-care",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-postictal-care", text: "Keep him lateral with airway and cardiorespiratory monitoring. Titrate oxygen when stable, repeat neurological and glucose assessments, document all times and watch for recurrence. Missed levetiracetam is likely, but reassess for infection, injury, toxin or focal pathology." }]
            }
          ]
        },
        {
          id: "c035-run-communication",
          heading: "Recovery, explanation, teach-back and handover",
          turns: [
            {
              id: "c035-turn-recovery",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-recovery", text: "Mum? I feel tired. My head hurts a little." }]
            },
            {
              id: "c035-turn-child-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-child-response", text: "Hello Levon. You are in hospital and Mum is beside you. The shaking has stopped. Rest on your side while we check you. Tell us if your headache worsens or one side feels different." }]
            },
            {
              id: "c035-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-explanation-prompt", text: "Please explain your assessment and plan to Anya." }]
            },
            {
              id: "c035-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-explanation", text: "Anya, Levon's seizure required two benzodiazepine doses and then levetiracetam. You gave the correct first dose and told us its time, preventing an unsafe extra dose. His breathing became shallow, so we supported it. He is now breathing himself and responding." }]
            },
            {
              id: "c035-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-concern", text: "Did my midazolam make his breathing worse? Could this have damaged his brain?" }]
            },
            {
              id: "c035-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-concern-response", text: "Midazolam can slow breathing, especially after repeated doses, but a continuing seizure is also dangerous. Your dose was appropriate, and we treated the breathing problem. It is too early to promise the outcome, but stopping the seizure and supporting breathing protect him. His response is encouraging." }]
            },
            {
              id: "c035-turn-disposition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-disposition", text: "He will be admitted under paediatrics with neurology input and monitored until recovered. We will plan levetiracetam during vomiting. Brain imaging is reserved for concerns such as trauma, focal findings or failure to recover. His written seizure plan will be updated before discharge." }]
            },
            {
              id: "c035-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-teachback", text: "Please tell me when you would give home midazolam and what you would tell ambulance or hospital staff." }]
            },
            {
              id: "c035-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-teachback-answer", text: "I follow his plan at five minutes, note the time and call for help. I keep him on his side, put nothing in his mouth, and tell staff the dose and route so they count it." }]
            },
            {
              id: "c035-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-handover-prompt", text: "Please finish with a concise handover to the senior paediatric clinician." }]
            },
            {
              id: "c035-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c035-run-handover", text: "Master Levon Sarkis is 6, weighs 25 kilograms and has epilepsy treated with levetiracetam. A generalised convulsion followed two vomited levetiracetam doses. His mother gave buccal midazolam 7.5 milligrams at five minutes. At ten minutes, glucose was 5.2 and intravenous midazolam 3.75 milligrams was the second and final benzodiazepine. At fifteen minutes seizure and hypoventilation persisted; bag-mask ventilation restored saturation and intravenous levetiracetam 1.5 grams stopped the convulsion. He now breathes spontaneously, is drowsy but localising, and metabolic tests are normal. Continue airway and neurological monitoring, admit under paediatrics with neurology input, and escalate for recurrence or respiratory compromise." }]
            },
            {
              id: "c035-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "The Royal Children's Hospital Melbourne",
        title: "Clinical Practice Guideline: Seizures acute management",
        date: "June 2025",
        url: "https://www.rch.org.au/clinicalguide/guideline_index/Seizures_acute_management/"
      },
      {
        organisation: "Children's Health Queensland",
        title: "Status epilepticus - Emergency management in children",
        date: "Version 5.0, approved May 2023; review due May 2027",
        url: "https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/status-epilepticus"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 12.2 - Paediatric Advanced Life Support",
        date: "April 2026",
        url: "https://www.anzcor.org/home/paediatric-advanced-life-support/guideline-12-2-paediatric-advanced-life-support-pals"
      }
    ]
  });

  var caseThirtyFive = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-035"; });
  function buildHint35(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtyFive.masteryFocus = {
    case: "Establish whether the convulsion is ongoing, build an exact time-and-treatment record, assess breathing and glucose, and use each disclosed response to choose the next safe step.",
    clinical: "In any time-critical seizure, the clock, prior treatment, airway and glucose determine the next action; count all routes and locations as one treatment sequence, then reassess cause after control is underway.",
    tasks: ["Assess and focused history", "Interpret key findings", "Manage and explain", "Concise senior handover"],
    transfer: "If Levon's convulsion had stopped after Anya's home midazolam before arrival and he was breathing adequately but remained drowsy, what would you do differently?",
    transferAnswer: "Do not give another benzodiazepine automatically. Continue lateral positioning, airway and cardiorespiratory monitoring, check glucose and perform repeated neurological assessment while clarifying duration, dose, trigger and recovery. Treat a supported cause and prepare for recurrence, but reserve the next anticonvulsant step for renewed or persistent seizure activity.",
    transferChecks: ["Whether motor activity has truly stopped", "Breathing and airway protection", "Exact benzodiazepine dose and time", "Recovery trend and supported trigger"],
    transferCitationIds: ["rch-seizure-2025", "qld-status-2023", "anzcor-pals-2026"]
  };
  caseThirtyFive.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "rch-seizure-2025", title: "Clinical Practice Guideline: Seizures acute management", organisation: "Royal Children's Hospital Melbourne", date: "June 2025", url: "https://www.rch.org.au/clinicalguide/guideline_index/Seizures_acute_management/" },
    { id: "qld-status-2023", title: "Status epilepticus: Emergency management in children", organisation: "Children's Health Queensland", date: "Version 5.0, May 2023", url: "https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/status-epilepticus" },
    { id: "anzcor-pals-2026", title: "Guideline 12.2: Paediatric Advanced Life Support", organisation: "Australian and New Zealand Committee on Resuscitation", date: "April 2026", url: "https://www.anzcor.org/home/paediatric-advanced-life-support/guideline-12-2-paediatric-advanced-life-support-pals" }
  ];
  caseThirtyFive.reasoningCompass = {
    stem: {
      title: "Find the seizure clock before the cause",
      steps: [
        { time: "0 to 30 seconds", text: "A child after a convulsion may still be seizing, recovering or hypoventilating. First establish whether movement continues, when it began and what treatment was already given." },
        { time: "30 to 60 seconds", text: "Plan concurrent ABCD, glucose, oxygenation, access and seizure timing while asking Anya for the exact medicine, dose, route and time." },
        { time: "1 to 2 minutes", text: "Set the task times: assessment and focused history to minute 2, interpretation to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "Assess and history 0 to 2 | Interpret 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Count every dose and protect ventilation",
      steps: [
        { time: "0 to 2 minutes", text: "Start the timer, assess ABCD and glucose, and count all treatment already given. Act on the next indicated step while preparing what may follow." },
        { time: "2 to 7 minutes", text: "If the problem persists, support physiology and progress through the disclosed treatment sequence. Clarify the trigger while immediate care runs." },
        { time: "7 to 8 minutes", text: "Explain the sequence and current response, then hand over exact times, cumulative interventions, likely trigger and current neurological state." }
      ],
      anchor: "If breathing worsens, support ventilation immediately, then return to the seizure step already due."
    }
  };
  caseThirtyFive.hints = [
    buildHint35("c035-hint-01", "stem", "c035-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can start before the history is complete?", "Airway support, oxygen, glucose, monitoring, access, seizure timing and senior help can begin together.", "Do not make cause-finding the first task.", "This setting can resuscitate while Anya gives brief facts.", "Read whether the stem says the convulsion has stopped."),
    buildHint35("c035-hint-02", "stem", "c035-stem-patient", "after a convulsion", ["rch-seizure-2025", "amc-tips-2024"], "Reading the wording", "Does after mean it has finished?", "No. The wording reports what happened at home, not Levon's current motor activity, breathing or consciousness. Establish those immediately.", "Do not infer recovery from the stem tense.", "A convulsion occurred; current status is unknown.", "Use Anya and the examiner findings to locate him on the treatment timeline."),
    buildHint35("c035-hint-03", "stem", "c035-stem-context", "mother, Anya, is present", ["acsqhc-communication-2026", "rch-seizure-2025"], "Using the witness", "Which detail from Anya changes treatment fastest?", "Exact onset, whether activity ever stopped, and any medicine dose, route and time determine the next step. Ask these before a broad epilepsy history.", "A witness can supply the seizure clock when the child cannot.", "The current state and prior treatment remain unknown.", "Anchor the four requested tasks."),
    buildHint35("c035-hint-04", "stem", "c035-task-assess", "Assess Levon and obtain a focused history", ["amc-spec-2026", "rch-seizure-2025"], "Anchoring task one", "How do both fit into two minutes?", "Assess airway, breathing, circulation, consciousness and glucose while asking onset, continuity, treatment already given, epilepsy medicines, missed doses and acute triggers.", "Assessment and history are concurrent, not sequential.", "Minutes 0 to 2 establish current physiology and the treatment clock.", "If seizure continues, treatment begins within this task."),
    buildHint35("c035-hint-05", "stem", "c035-task-interpret", "Interpret the information", ["amc-spec-2026", "rch-seizure-2025"], "Anchoring task two", "What should I say, not just list?", "State whether the event is ongoing, whether breathing is adequate, what treatment has already been given and which action the disclosed timeline now supports.", "Interpretation converts findings into the next action.", "Minutes 2 to 4 are not a pause in treatment.", "Keep cause provisional until the immediate threat is controlled."),
    buildHint35("c035-hint-06", "stem", "c035-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-deterioration-2026", "acsqhc-communication-2026"], "Anchoring task three", "What must be visible by minute seven?", "Support airway, breathing and circulation first, sequence interventions from the disclosed evidence, reassess and briefly explain to Anya what the findings mean.", "Do not use explanation time to repeat the entire history.", "Minutes 4 to 7 cover control, support, reassessment and explanation.", "Protect the final handover minute."),
    buildHint35("c035-hint-07", "stem", "c035-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories must remain exact?", "Give identity and weight, event onset and duration, all pre-arrival and in-hospital interventions, physiological changes, response, likely trigger and current state.", "The treatment sequence is a safety-critical part of this handover.", "Minute 7 to 8 transfers the whole timeline.", "Begin by asking whether the convulsion is still occurring."),
    buildHint35("c035-hint-08", "run", "c035-run-introduction", "When did the convulsion begin", ["rch-seizure-2025", "qld-status-2023"], "Opening with the clock", "Why ask time before the full history?", "Duration defines the treatment pathway. Assessment and treatment proceed while Anya answers because Levon cannot wait for a conventional interview.", "Start the clinical timer now.", "Identity and onset are being established together.", "Listen for whether there has been any recovery."),
    buildHint35("c035-hint-09", "run", "c035-run-opening-history", "began ten minutes ago", ["rch-seizure-2025", "qld-status-2023"], "Recognising ongoing status", "What does ten minutes without stopping mean?", "This is ongoing convulsive status epilepticus and requires immediate treatment. Call help and assess ABCD and glucose while confirming treatment already given.", "Pause the usual history sequence.", "Levon is actively seizing at ten minutes.", "Ask for the home or ambulance medicine before giving another dose."),
    buildHint35("c035-hint-10", "run", "c035-run-primary-request", "Start the seizure timer", ["rch-seizure-2025", "qld-status-2023"], "Making time visible", "Why time something already ten minutes old?", "The ongoing timer governs reassessment after each drug and prevents both premature repetition and dangerous delay. Glucose and breathing are checked in parallel.", "Record the known onset and every treatment time.", "Senior help, ABCD, glucose and access are underway.", "Use Anya's medication history to locate the next dose."),
    buildHint35("c035-hint-11", "run", "c035-run-medication-history", "At five minutes I gave", ["rch-seizure-2025", "qld-status-2023"], "Counting prehospital treatment", "Does a home dose count in hospital?", "Yes. Correct buccal midazolam at five minutes is benzodiazepine dose one. Route and location do not reset the sequence.", "Hold one fact: one dose has already been given.", "Levon weighs 25 kilograms and is still seizing after dose one.", "Read breathing and access before selecting dose two."),
    buildHint35("c035-hint-12", "run", "c035-run-primary-findings", "becoming shallow", ["anzcor-pals-2026", "rch-seizure-2025"], "Reading breathing during seizure", "Is oxygen saturation 91 the only concern?", "No. Pooling secretions, shallow breathing and reduced consciousness show threatened ventilation. Position, suction, oxygen and bag-mask readiness are needed alongside seizure treatment.", "Airway support cannot wait for the convulsion to stop.", "Glucose is normal; ventilation is becoming inadequate.", "Protect the airway before and during dose two."),
    buildHint35("c035-hint-13", "run", "c035-run-airway-management", "Do not restrain him", ["anzcor-pals-2026", "rch-seizure-2025"], "Preventing avoidable harm", "What helps while movement continues?", "Lateral positioning, head protection, airway opening, suction and oxygen reduce immediate harm. Restraint or objects in the mouth add injury without stopping the seizure.", "Support, do not fight, the movement.", "The airway is being protected and ventilation equipment is ready.", "Give the indicated second benzodiazepine only once."),
    buildHint35("c035-hint-14", "run", "c035-run-first-line-treatment", "final benzodiazepine", ["rch-seizure-2025", "qld-status-2023"], "Setting a firm medication boundary", "Why call this final?", "Repeated benzodiazepines increase respiratory depression without reliably ending a resistant seizure. Dose two is appropriate now; prepare second-line levetiracetam at the same time.", "Count the home dose and stop at two total.", "Intravenous access is present and dose two is due.", "Reassess seizure and breathing at five minutes."),
    buildHint35("c035-hint-15", "run", "c035-run-persistent-findings", "oxygen saturation is 87%", ["anzcor-pals-2026", "qld-status-2023"], "Recognising failed first-line control", "What are the two problems now?", "The seizure persists after two doses, and ventilation is failing despite oxygen. Both require action now: bag-mask ventilation and second-line anticonvulsant treatment.", "Pause. Do not choose between breathing and seizure control.", "First-line treatment has failed and hypoventilation is worsening.", "Ventilate, call airway help and avoid a third benzodiazepine."),
    buildHint35("c035-hint-16", "run", "c035-run-respiratory-support", "Do not give a third benzodiazepine", ["qld-status-2023", "anzcor-pals-2026"], "Avoiding the familiar wrong move", "Why not repeat the fastest drug again?", "Two doses have already failed and breathing is shallow. A third adds respiratory risk while delaying the treatment step now indicated.", "The sequence matters more than familiarity.", "Two-person bag-mask ventilation is the immediate respiratory support.", "Give second-line levetiracetam without waiting for intubation."),
    buildHint35("c035-hint-17", "run", "c035-run-second-line", "levetiracetam 60 milligrams per kilogram", ["rch-seizure-2025", "qld-status-2023"], "Moving to second-line treatment", "Why give the full loading dose now?", "Persistent convulsion after two benzodiazepine doses needs a rapid weight-based second-line load. Preparing it earlier prevents another five-minute delay.", "Treatment continues through IV or IO access.", "Ventilation is supported while the seizure drug is infused.", "Prepare anaesthetic treatment and EEG if this step fails."),
    buildHint35("c035-hint-18", "run", "c035-run-ventilation-action", "Oxygen saturation rises to 98%", ["anzcor-pals-2026", "qld-status-2023"], "Separating respiratory response from seizure response", "Does 98% mean the emergency is over?", "It shows effective assisted ventilation, not seizure control. Continue the levetiracetam and monitor capnography, movement and circulation.", "One improved system does not close the other problem.", "Oxygenation has recovered with bag-mask support; seizure activity continues.", "Use treatment time to ask only cause-changing questions."),
    buildHint35("c035-hint-19", "run", "c035-run-trigger-questions", "missed or vomited doses", ["rch-seizure-2025", "amc-tips-2024"], "Looking for a reversible trigger", "Why ask now rather than at the beginning?", "Immediate treatment is already running. The focused trigger history can now guide ongoing medicine replacement and identify infection, injury, toxin or focal concern.", "Cause assessment follows, but does not delay, seizure control.", "Breathing and second-line treatment are supported.", "Compare this event with his usual seizures."),
    buildHint35("c035-hint-20", "run", "c035-run-trigger-answer", "neither dose stayed down", ["rch-seizure-2025", "qld-status-2023"], "Using the likely trigger carefully", "Have we found the cause?", "Two vomited maintenance doses make reduced levetiracetam exposure plausible, and sleep loss may contribute. Keep infection, injury, toxin and focal pathology available until recovery and examination support narrowing.", "Likely is not proven.", "A medication interruption fits, but the prolonged course still needs reassessment.", "Order targeted tests without delaying current treatment."),
    buildHint35("c035-hint-21", "run", "c035-run-investigations", "Do not delay treatment", ["rch-seizure-2025", "qld-status-2023"], "Keeping tests in their place", "Which tests matter here?", "Because second-line treatment was needed and vomiting occurred, check gas, electrolytes, calcium, magnesium, renal function and blood count. Add infection or toxicology tests only if the history or examination supports them.", "Tests look for a trigger; they do not control the seizure.", "Treatment is ahead of investigation.", "Read whether the convulsion stops and how breathing recovers."),
    buildHint35("c035-hint-22", "run", "c035-run-resolution-findings", "convulsion stops", ["rch-seizure-2025", "anzcor-pals-2026"], "Confirming control", "Is drowsiness expected or dangerous?", "Postictal drowsiness is possible, but continue airway, breathing, glucose and neurological checks. Localising to touch and spontaneous breathing are encouraging trends, not permission to stop monitoring.", "Recovery must be progressive and symmetrical.", "Levetiracetam stopped the convulsion and ventilation has recovered.", "Continue lateral monitoring and keep alternative causes in view."),
    buildHint35("c035-hint-23", "run", "c035-run-postictal-care", "document all times", ["rch-seizure-2025", "acsqhc-communication-2026"], "Closing the treatment loop", "Why are the times still important after control?", "They show response intervals, cumulative sedative exposure and when recurrence would change management. They also make the handover safe.", "Do not discard the clock when movement stops.", "Levon is in monitored postictal recovery.", "Use his first words and examination to check the recovery trend."),
    buildHint35("c035-hint-24", "run", "c035-run-recovery", "My head hurts a little", ["rch-seizure-2025", "amc-tips-2024"], "Listening after recovery begins", "Is a headache automatically a new emergency?", "A mild headache can follow a convulsion, but worsening pain, focal findings, trauma, fever or failure to recover would change the investigation plan.", "Reassess rather than dismiss or overreact.", "Levon is speaking and breathing independently.", "Orient him calmly, then explain the sequence to Anya."),
    buildHint35("c035-hint-25", "run", "c035-run-explanation-prompt", "explain your assessment and plan", ["acsqhc-communication-2026", "amc-spec-2026"], "Changing audience", "What does Anya most need clarified?", "Explain that the seizure persisted, two correctly counted benzodiazepine doses were followed by levetiracetam, and breathing support was needed. Then state the current recovery and admission plan.", "Use the timeline, not a lecture on epilepsy.", "The immediate emergency is controlled.", "Explicitly validate her correct home action."),
    buildHint35("c035-hint-26", "run", "c035-run-explanation", "preventing an unsafe extra dose", ["acsqhc-communication-2026", "rch-seizure-2025"], "Validating accurate medication history", "Why is this reassurance clinically useful?", "It reduces blame and reinforces that dose and time must always be reported. Her information directly prevented a third benzodiazepine.", "Name what she did correctly.", "Anya can see how her action fitted the hospital sequence.", "Answer the breathing and brain-injury concerns honestly."),
    buildHint35("c035-hint-27", "run", "c035-run-concern-response", "too early to promise", ["acsqhc-communication-2026", "anzcor-pals-2026"], "Discussing outcome without false certainty", "How can I reassure safely?", "Acknowledge that both prolonged seizure and repeated sedatives can impair breathing, then point to prompt ventilation, seizure control and improving response. Avoid a guarantee.", "Honest uncertainty can still include encouraging evidence.", "The cause is likely missed medicine during vomiting, with ongoing review.", "Give the admission and prevention plan next."),
    buildHint35("c035-hint-28", "run", "c035-run-disposition", "written seizure plan", ["rch-seizure-2025", "acsqhc-communication-2026"], "Turning the event into prevention", "What should change before discharge?", "Plan maintenance dosing during vomiting, review rescue instructions, confirm when to call for help and update the written plan with neurology input.", "Prevention is specific to the failure point in this event.", "Levon requires admission until recovery is secure.", "Use teach-back to confirm home rescue dosing and reporting."),
    buildHint35("c035-hint-29", "run", "c035-run-teachback-answer", "note the time", ["acsqhc-communication-2026", "rch-seizure-2025"], "Confirming the safety sequence", "What has Anya retained?", "She knows when to give rescue medicine, how to position him, what not to put in his mouth and why staff need the exact dose, route and time.", "Correct only missing or unsafe details.", "Home emergency understanding is established.", "Move to the final handover timeline."),
    buildHint35("c035-hint-30", "run", "c035-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "How do I avoid losing a dose?", "Present a time sequence: onset, home dose, hospital dose, ventilation failure, second-line load, seizure stop, likely trigger and current recovery. State that two benzodiazepines were the total.", "Exact sequence prevents repeat dosing errors.", "The final minute transfers treatment and current risk.", "Finish with monitoring and escalation conditions."),
    buildHint35("c035-hint-31", "run", "c035-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I add an imaging request?", "No. The examiner has ended the station and imaging was correctly left conditional on recovery and focal concerns.", "Finish on the instruction.", "Case 35 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtyFive.essentialHintIds = [
    "c035-hint-02", "c035-hint-04", "c035-hint-05", "c035-hint-06", "c035-hint-07",
    "c035-hint-09", "c035-hint-11", "c035-hint-12", "c035-hint-14", "c035-hint-15",
    "c035-hint-16", "c035-hint-17", "c035-hint-22", "c035-hint-30", "c035-hint-31"
  ];
  var clockByHint35 = {
    "c035-hint-04": "Minutes 0 to 2: assess ABCD and glucose while obtaining onset, continuity and every medicine dose and time.",
    "c035-hint-09": "Ongoing convulsion at ten minutes interrupts routine history. Treat on the seizure clock now.",
    "c035-hint-15": "Five minutes after dose two: persistent seizure plus hypoventilation means ventilate and move to second-line treatment.",
    "c035-hint-25": "By minute 7: explain the dose sequence, breathing support, current recovery and admission.",
    "c035-hint-30": "Final minute: hand over every treatment time, respiratory response, seizure control and current neurological state."
  };
  var deeperByHint35 = {
    "c035-hint-11": ["Buccal midazolam reaches systemic circulation outside hospital and acts at the same GABA-A receptor as an intravenous dose. Counting by route rather than total exposure risks cumulative respiratory depression."],
    "c035-hint-14": ["Benzodiazepines enhance inhibitory GABA signalling. Additional doses after two adequate treatments add sedation and ventilatory depression while a resistant seizure needs a different mechanism of action."],
    "c035-hint-17": ["After two adequate benzodiazepine doses, another benzodiazepine adds respiratory risk without advancing treatment. Give the complete weight-based second-line load promptly because splitting or underdosing it can leave the seizure active and delay the next reassessment."],
    "c035-hint-22": ["Motor cessation can precede full cortical recovery. Progressive return of spontaneous breathing, purposeful response and symmetrical neurological function supports a postictal course, while failure to improve requires renewed assessment."],
    "c035-hint-24": ["Headache may reflect muscular exertion and postictal recovery, but a worsening or focal pattern can point toward trauma, infection or intracranial pathology and changes the imaging threshold."]
  };
  caseThirtyFive.hints.forEach(function (hint) {
    if (clockByHint35[hint.id]) hint.clock = clockByHint35[hint.id];
    if (deeperByHint35[hint.id]) hint.deeper = deeperByHint35[hint.id];
  });
})();
