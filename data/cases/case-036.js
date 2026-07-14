(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-036",
    globalId: "CP-C036",
    registryId: "CP-P12-C001",
    displayNumber: "Case 36",
    title: "Drowsiness and slow breathing",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 12, title: "Toxicological Emergency" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c036-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c036-stem-patient",
          text: "Mr Callum Varga, a 29-year-old man, has been brought to the emergency department after being found unusually drowsy at home."
        },
        {
          id: "c036-stem-context",
          text: "A pre-hospital clinician is present. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c036-task-assess",
          text: "Assess Callum and obtain a focused history.",
          timing: "2 minutes"
        },
        {
          id: "c036-task-interpret",
          text: "Interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c036-task-manage",
          text: "Initiate management and explain your assessment and plan to Callum.",
          timing: "3 minutes"
        },
        {
          id: "c036-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c036-run-assessment",
          heading: "Immediate assessment and ventilation",
          turns: [
            {
              id: "c036-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c036-run-start", text: "You may begin." }]
            },
            {
              id: "c036-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c036-run-first-action", text: "The doctor performs hand hygiene, applies personal protective equipment and approaches Callum's trolley." }]
            },
            {
              id: "c036-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-introduction", text: "Hello Callum, I am Ushana, an emergency doctor. Can you open your eyes and tell me your name? Officer, please confirm his identity, what you found and any treatment given." }]
            },
            {
              id: "c036-turn-initial-response",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c036-run-initial-response", text: "Callum groans but does not open his eyes." }]
            },
            {
              id: "c036-turn-ambulance-history",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c036-run-ambulance-history", text: "His housemate found Callum difficult to wake beside an open beer can and called an ambulance. A packet labelled modified-release oxycodone 20 milligrams was nearby. Paramedics provided oxygen but no naloxone. No trauma or seizure was witnessed." }]
            },
            {
              id: "c036-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-primary-request", text: "Activate the emergency response. I assess airway, breathing, circulation and disability, obtain full observations, pupils, temperature and glucose, and look for injury, patches, injection sites and pressure damage." }]
            },
            {
              id: "c036-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c036-run-primary-findings", text: "Callum has a snoring airway, shallow respirations at 6 per minute and oxygen saturation 82% on room air. Pulse is 56, blood pressure 98/60, temperature 35.8 degrees Celsius and glucose 5.4 mmol/L. GCS is 7, pupils are 2 millimetres and reactive, and no focal injury or opioid patch is found." }]
            },
            {
              id: "c036-turn-ventilation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-ventilation", text: "Open and suction the airway, insert an appropriate airway adjunct and start two-person bag-mask ventilation with 100% oxygen. Attach capnography, ECG, saturation and frequent blood-pressure monitoring. Ventilation comes before naloxone. If he loses a pulse, start standard advanced life support without delay." }]
            },
            {
              id: "c036-turn-ventilation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c036-run-ventilation-action", text: "The team opens the airway and provides effective two-person bag-mask ventilation with oxygen while monitoring is attached." }]
            },
            {
              id: "c036-turn-ventilation-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c036-run-ventilation-response", text: "With assisted ventilation, oxygen saturation rises to 98% and end-tidal carbon dioxide falls from 68 to 48 mmHg. Pulse is 68. Callum remains deeply drowsy with spontaneous breaths at 6 per minute." }]
            },
            {
              id: "c036-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-interpretation", text: "Reduced consciousness, hypoventilation and small pupils beside oxycodone strongly suggest opioid toxicity. Other causes and co-ingestants remain possible. Establish intravenous access and continue ventilation while naloxone is prepared." }]
            },
            {
              id: "c036-turn-naloxone",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-naloxone", text: "Under the hospital toxicology protocol, give naloxone 100 micrograms intravenously every two minutes, titrated until he breathes adequately and protects his airway. The target is ventilation, not wakefulness. Small increments reduce withdrawal, vomiting and agitation in a person who may be opioid dependent." }]
            },
            {
              id: "c036-turn-naloxone-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c036-run-naloxone-response", text: "After a cumulative 300 micrograms of intravenous naloxone, Callum opens his eyes to voice, maintains his airway and breathes 12 times per minute. Oxygen saturation is 98% and end-tidal carbon dioxide is 42 mmHg." }]
            }
          ]
        },
        {
          id: "c036-run-risk",
          heading: "Risk assessment, recurrence and monitored care",
          turns: [
            {
              id: "c036-turn-history-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-history-consent", text: "Callum, you were not breathing enough, so we supported your breathing and gave an antidote. What did you take, how much and when? Was it immediate or modified release? Any alcohol, sedative, paracetamol, illicit drug or intention to harm yourself?" }]
            },
            {
              id: "c036-turn-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c036-run-history-answer", text: "I take one modified-release oxycodone 20-milligram tablet twice daily for back pain. At about six I took four together because the pain was awful, then drank two beers. I took nothing else. I was trying to sleep, not die." }]
            },
            {
              id: "c036-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-background", text: "Any lung, liver or kidney disease, previous overdose, drug dependence, allergy or other medicine? How long were you on the floor, and is one area painful or numb?" }]
            },
            {
              id: "c036-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c036-run-background-answer", text: "No medical problem apart from my back. I have taken oxycodone for six months and feel sick if I miss it. No previous overdose or allergy. I do not know how long I was down, and my right shoulder is sore." }]
            },
            {
              id: "c036-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-investigations", text: "Call the Poisons Information Centre or clinical toxicologist. Send venous gas, electrolytes, renal and liver function, creatine kinase, paracetamol concentration and ethanol, and obtain a 12-lead ECG. Assess the sore shoulder and aspiration risk. A routine urine drug screen will not guide immediate care." }]
            },
            {
              id: "c036-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c036-run-results", text: "ECG shows sinus rhythm with normal QRS and QTc. Initial venous pH was 7.23 with carbon dioxide 72 mmHg and improves with ventilation. Paracetamol is undetectable. Creatinine is normal and creatine kinase is 680 U/L. Chest examination has no focal crackles." }]
            },
            {
              id: "c036-turn-recurrence",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c036-run-recurrence", text: "Forty minutes later Callum becomes difficult to rouse. Respiratory rate falls to 7, end-tidal carbon dioxide rises to 61 mmHg and oxygen saturation falls to 91%." }]
            },
            {
              id: "c036-turn-recurrence-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-recurrence-plan", text: "Resume airway support and bag-mask ventilation immediately, then repeat titrated intravenous naloxone to adequate breathing. Modified-release oxycodone outlasts naloxone. With recurrent depression, commence a naloxone infusion under toxicology guidance, based on the effective bolus and titrated to ventilation." }]
            },
            {
              id: "c036-turn-disposition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-disposition", text: "Admit Callum to a continuously monitored high-acuity area. Continue respiratory, capnography, neurological and pressure-area assessment, repeat renal function and creatine kinase, and watch for aspiration. He is not safe for discharge after a temporary response." }]
            }
          ]
        },
        {
          id: "c036-run-communication",
          heading: "Explanation, prevention, teach-back and handover",
          turns: [
            {
              id: "c036-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c036-run-concern", text: "I feel better now. Why can I not go home, and will you take away my pain medicine?" }]
            },
            {
              id: "c036-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-explanation", text: "The oxycodone slowed your brain's breathing drive. Naloxone works for a shorter time than modified-release oxycodone, and your breathing has already slowed again. Monitoring and an infusion keep you safe. We will treat pain and involve the pain and alcohol-and-drug teams without judging you or stopping treatment abruptly." }]
            },
            {
              id: "c036-turn-prevention",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-prevention", text: "Before discharge, we will make a safer dosing plan, avoid mixing opioids with alcohol or sedatives, arrange take-home naloxone for you and your housemate, and explain calling 000, opening the airway and starting CPR if breathing is not normal." }]
            },
            {
              id: "c036-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c036-run-teachback", text: "Please tell me why you need monitoring and what your housemate should do if this happens again." }]
            },
            {
              id: "c036-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c036-run-teachback-answer", text: "The long-acting tablets can slow my breathing again after naloxone wears off. My housemate should call 000, check breathing, start CPR if it is not normal and give take-home naloxone when available." }]
            },
            {
              id: "c036-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c036-run-handover-prompt", text: "Please finish with a concise handover to the intensive care clinician." }]
            },
            {
              id: "c036-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c036-run-handover", text: "Callum Varga is 29 with six months of prescribed modified-release oxycodone use. He reports taking 80 milligrams with two beers for pain, denying self-harm. He presented GCS 7, respirations 6, saturation 82%, carbon dioxide 72 mmHg and small reactive pupils. Airway opening and bag-mask ventilation corrected hypoxaemia before naloxone. A cumulative 300 micrograms intravenously restored ventilation without precipitating withdrawal. Forty minutes later respiratory depression recurred, consistent with long-acting opioid toxicity. Ventilation and titrated naloxone resumed, and toxicology recommends a naloxone infusion. ECG and renal function are normal; paracetamol is undetectable and creatine kinase is 680. Admit for continuous capnography and cardiorespiratory monitoring, aspiration and pressure-injury surveillance, and pain and dependence review." }]
            },
            {
              id: "c036-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c036-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.5.2: First Aid Management of Suspected Opioid Overdose",
        date: "Approved July 2025",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-5-2-first-aid-management-of-opioid-overdose"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Drug Therapy Protocol: Naloxone",
        date: "September 2024, review due September 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0024/219363/DTP_Naloxone.pdf"
      },
      {
        organisation: "NSW Agency for Clinical Innovation",
        title: "Adult ECAT protocol: Unconscious person",
        date: "Updated March 2024",
        url: "https://aci.health.nsw.gov.au/ecat/adult/unconscious-person"
      }
    ]
  });

  var caseThirtySix = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-036"; });
  function buildHint36(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtySix.masteryFocus = {
    case: "Use consciousness, respiratory rate and effective ventilation to set the first priority, then combine bedside clues, exposure timing and repeated response to decide what support must continue.",
    clinical: "In any reduced-consciousness presentation, ventilation comes before a cause-specific intervention or diagnostic certainty; after improvement, compare the likely duration of the cause with the duration of the response before deciding safety.",
    tasks: ["Assess and focused history", "Interpret key findings", "Manage and explain", "Concise senior handover"],
    transfer: "If Callum had no pulse when found, where would naloxone fit in the initial response?",
    transferAnswer: "Begin standard cardiopulmonary resuscitation immediately with effective ventilation, chest compressions and rhythm-based advanced life support. Naloxone may be given when opioid exposure is suspected, but it must not delay CPR, ventilation, defibrillation or other standard cardiac-arrest care.",
    transferChecks: ["Presence of a pulse", "Quality of breathing and ventilation", "Immediate CPR and rhythm actions", "Naloxone without delaying standard resuscitation"],
    transferCitationIds: ["anzcor-opioid-2025", "aci-unconscious-2024"]
  };
  caseThirtySix.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "anzcor-opioid-2025", title: "Guideline 9.5.2: First Aid Management of Suspected Opioid Overdose", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Approved July 2025", url: "https://www.anzcor.org/home/first-aid/guideline-9-5-2-first-aid-management-of-opioid-overdose" },
    { id: "qas-naloxone-2024", title: "Drug Therapy Protocol: Naloxone", organisation: "Queensland Ambulance Service", date: "September 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0024/219363/DTP_Naloxone.pdf" },
    { id: "aci-unconscious-2024", title: "Adult ECAT protocol: Unconscious person", organisation: "NSW Agency for Clinical Innovation", date: "Updated March 2024", url: "https://aci.health.nsw.gov.au/ecat/adult/unconscious-person" },
    { id: "vic-poisons-2026", title: "Victorian Poisons Centre", organisation: "Austin Health", date: "Current July 2026", url: "https://www.austin.org.au/poisons" }
  ];
  caseThirtySix.reasoningCompass = {
    stem: {
      title: "Check breathing before explaining drowsiness",
      steps: [
        { time: "0 to 30 seconds", text: "Unusual drowsiness can come from many causes. First determine whether Callum can protect his airway and ventilate, then check circulation, glucose and injury." },
        { time: "30 to 60 seconds", text: "Use the pre-hospital clinician for last known well, scene evidence, observed events and treatment while ABCD assessment proceeds." },
        { time: "1 to 2 minutes", text: "Set the task times: assessment and focused history to minute 2, interpretation to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "Assess and history 0 to 2 | Interpret 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Keep physiology ahead of explanation",
      steps: [
        { time: "0 to 2 minutes", text: "Assess ABCD and glucose, correct any immediate threat and gather the scene history in parallel." },
        { time: "2 to 7 minutes", text: "Interpret only the findings that have been disclosed, choose the next supported action and reassess its effect before moving on." },
        { time: "7 to 8 minutes", text: "Explain the current assessment, uncertainty and plan, then hand over the initial state, changes and current support." }
      ],
      anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the task, respond, state where you paused and return only when it is safe."
    }
  };
  caseThirtySix.hints = [
    buildHint36("c036-hint-01", "stem", "c036-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can begin immediately?", "Airway opening, ventilation, glucose, monitoring, access and senior help can occur while the scene history is obtained.", "Do not wait for Callum to wake before supporting physiology.", "This is a resuscitation-capable setting.", "Read the presenting change without assuming its cause."),
    buildHint36("c036-hint-02", "stem", "c036-stem-patient", "unusually drowsy", ["aci-unconscious-2024", "amc-tips-2024"], "Reading reduced consciousness", "What is the first unanswered safety question?", "Whether he is protecting his airway and breathing effectively. Drowsiness is a state, not a diagnosis.", "Hold airway, breathing, glucose and injury ahead of cause.", "Callum's level of consciousness has changed; physiology is unknown.", "Use the pre-hospital clinician while you assess him."),
    buildHint36("c036-hint-03", "stem", "c036-stem-context", "pre-hospital clinician is present", ["acsqhc-communication-2026", "aci-unconscious-2024"], "Using collateral history", "Which facts should I request first?", "Ask last known well, scene findings, witnessed trauma or seizure, substances or packets nearby, observations and treatment already given.", "Collateral information can arrive while ABCD continues.", "Callum may not be able to give a history.", "Anchor the four requested tasks."),
    buildHint36("c036-hint-04", "stem", "c036-task-assess", "Assess Callum and obtain a focused history", ["amc-spec-2026", "aci-unconscious-2024"], "Anchoring task one", "How do I combine both in two minutes?", "Assess airway, breathing, circulation, consciousness, pupils, glucose, temperature and injury while asking the clinician for timing, scene evidence and treatment.", "Assessment leads; collateral history runs beside it.", "Minutes 0 to 2 establish immediate physiology and exposure clues.", "Treat inadequate breathing within this task."),
    buildHint36("c036-hint-05", "stem", "c036-task-interpret", "Interpret the information", ["amc-spec-2026", "aci-unconscious-2024"], "Anchoring task two", "What makes an interpretation useful?", "State the physiological problem first, then the most supported cause and the dangerous alternatives still possible. Use response to treatment as evidence, not proof by itself.", "Diagnosis never precedes airway and ventilation.", "Minutes 2 to 4 connect findings to the next action.", "Keep formulation and duration in view once a substance is disclosed."),
    buildHint36("c036-hint-06", "stem", "c036-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-deterioration-2026", "acsqhc-communication-2026"], "Anchoring task three", "What must happen before explanation?", "Correct the immediate airway, breathing or circulation problem, use a cause-specific intervention only when the disclosed evidence supports it, monitor the response and then explain the current assessment and plan.", "A brief explanation can follow stabilisation.", "Minutes 4 to 7 cover support, reassessment and Callum's understanding.", "Reserve the final minute for handover."),
    buildHint36("c036-hint-07", "stem", "c036-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories must the senior hear?", "Give scene evidence, initial airway, breathing and consciousness, interventions, response over time, supported cause, key investigations and current support.", "Current breathing risk belongs at the end.", "Minute 7 to 8 transfers the treatment timeline.", "Begin with responsiveness and airway."),
    buildHint36("c036-hint-08", "run", "c036-run-first-action", "personal protective equipment", ["aci-unconscious-2024", "amc-tips-2024"], "Approaching safely", "Does PPE delay resuscitation?", "No. Apply appropriate protection promptly while moving directly to responsiveness and airway assessment.", "Personal safety and urgent care can occur together.", "You are at the trolley.", "Test responsiveness and obtain collateral information."),
    buildHint36("c036-hint-09", "run", "c036-run-initial-response", "does not open his eyes", ["aci-unconscious-2024", "acsqhc-deterioration-2026"], "Confirming impaired consciousness", "Can history continue through him?", "Not reliably. Move to ABCD, glucose and collateral history. His groan suggests some response but does not establish airway protection.", "Do not spend time repeating questions to a deeply drowsy person.", "Callum cannot currently provide a history.", "Use the ambulance account while assessing him."),
    buildHint36("c036-hint-10", "run", "c036-run-ambulance-history", "modified-release oxycodone", ["anzcor-opioid-2025", "aci-unconscious-2024"], "Using scene evidence provisionally", "Has the packet proved the cause?", "It makes opioid exposure plausible and the modified-release label may matter later, but trauma, metabolic causes and co-ingestants still need assessment.", "A packet guides suspicion; physiology guides immediate care.", "One important exposure clue is present.", "Request the full primary findings now."),
    buildHint36("c036-hint-11", "run", "c036-run-primary-request", "look for injury", ["aci-unconscious-2024"], "Keeping alternatives open", "Why examine beyond pupils and breathing?", "Reduced consciousness may follow trauma, hypoglycaemia, infection, neurological disease or mixed ingestion. Temperature, skin, patches, injection sites and pressure areas can redirect care.", "A likely toxidrome does not cancel ABCD or exposure.", "Glucose and full observations are being obtained.", "Read respiratory rate, depth and oxygenation together."),
    buildHint36("c036-hint-12", "run", "c036-run-primary-findings", "respirations at 6 per minute", ["anzcor-opioid-2025", "aci-unconscious-2024", "acsqhc-deterioration-2026"], "Recognising ventilatory failure", "What is the immediate problem?", "A snoring airway, six shallow breaths, saturation 82% and GCS 7 show inadequate airway patency and ventilation. Small pupils support an exposure pattern but do not change the first action.", "Pause. Ventilate before reaching for an antidote.", "Callum has life-threatening respiratory depression with a pulse.", "Open the airway and provide effective bag-mask ventilation."),
    buildHint36("c036-hint-13", "run", "c036-run-ventilation", "Ventilation comes before naloxone", ["anzcor-opioid-2025", "aci-unconscious-2024"], "Ordering the response", "Why not give naloxone first?", "Airway opening and assisted ventilation correct hypoxaemia and carbon dioxide retention immediately. Drug preparation and effect take time.", "The target is oxygenation and ventilation now.", "Monitoring and resuscitation equipment are being attached.", "Use capnography and clinical response to confirm effective ventilation."),
    buildHint36("c036-hint-14", "run", "c036-run-ventilation-response", "end-tidal carbon dioxide falls", ["aci-unconscious-2024", "anzcor-opioid-2025"], "Confirming effective ventilation", "What has improved and what has not?", "Oxygenation, carbon dioxide clearance and pulse improve with bag-mask support. Callum remains deeply drowsy and breathes only six times, so independent ventilation is still inadequate.", "Assisted success is not spontaneous recovery.", "Ventilation works while support is applied.", "Now state the most supported working cause while continuing to consider co-ingestants."),
    buildHint36("c036-hint-15", "run", "c036-run-interpretation", "strongly suggest opioid toxicity", ["anzcor-opioid-2025", "aci-unconscious-2024"], "Naming the working cause", "What makes this supported rather than assumed?", "Reduced consciousness, marked hypoventilation, small pupils and oxycodone scene evidence agree. The improvement with ventilation confirms physiology, not the drug, so other causes remain possible.", "Working diagnosis guides treatment while assessment continues.", "Callum remains ventilation-dependent.", "Use titrated naloxone with adequate breathing as the endpoint."),
    buildHint36("c036-hint-16", "run", "c036-run-naloxone", "target is ventilation, not wakefulness", ["qas-naloxone-2024", "anzcor-opioid-2025"], "Choosing the antidote endpoint", "Why not wake him completely?", "Small intravenous increments aim to restore airway protection and breathing while reducing abrupt withdrawal, vomiting and agitation. Continue ventilation between doses.", "Treat the dangerous effect, not the appearance of sleep.", "A supported opioid cause makes naloxone appropriate.", "Reassess respiratory rate, airway, saturation and carbon dioxide after each increment."),
    buildHint36("c036-hint-17", "run", "c036-run-naloxone-response", "breathes 12 times per minute", ["qas-naloxone-2024", "anzcor-opioid-2025"], "Reading the target response", "Is this enough?", "He now opens to voice, protects his airway and maintains adequate breathing with normalising carbon dioxide. That meets the immediate target, but monitoring must continue.", "Record the cumulative effective dose.", "Three hundred micrograms restored independent ventilation.", "Now obtain the exact product, dose, time, co-ingestants and intent."),
    buildHint36("c036-hint-18", "run", "c036-run-history-consent", "modified release", ["anzcor-opioid-2025", "vic-poisons-2026"], "Making the product history actionable", "Why ask formulation after he improves?", "Modified-release tablets can outlast naloxone and make recurrent respiratory depression more likely. Dose, time, alcohol, sedatives and intent determine monitoring and further assessment.", "The exposure history now changes disposition.", "Callum can answer after breathing has been restored.", "Listen for total dose and whether self-harm was intended."),
    buildHint36("c036-hint-19", "run", "c036-run-history-answer", "four together", ["anzcor-opioid-2025", "vic-poisons-2026"], "Quantifying exposure", "What changes with 80 milligrams and beer?", "A large modified-release dose with alcohol supports prolonged respiratory risk. His stated pain-related intent matters, but safety assessment should not rely on one answer alone.", "Separate toxicity risk from intent assessment.", "The likely exposure and timing are now confirmed.", "Ask dependence, comorbidity and time on the floor."),
    buildHint36("c036-hint-20", "run", "c036-run-background-answer", "feel sick if I miss it", ["anzcor-opioid-2025", "acsqhc-communication-2026"], "Recognising dependence without judgement", "Why does this affect naloxone strategy?", "Physical dependence increases the risk of abrupt withdrawal with excessive naloxone. It also means pain and ongoing prescribing need planned review rather than sudden abandonment.", "Dependence is a clinical fact, not a moral judgement.", "A prolonged exposure and pressure injury risk remain.", "Order tests that address co-ingestion, hypoventilation and time down."),
    buildHint36("c036-hint-21", "run", "c036-run-investigations", "routine urine drug screen will not guide", ["vic-poisons-2026", "aci-unconscious-2024"], "Selecting useful investigations", "What will change care now?", "Gas and carbon dioxide show ventilatory effect; ECG and paracetamol test screen important co-ingestion; renal function and CK assess prolonged immobility. A routine urine screen rarely changes immediate treatment.", "Test the risks and decisions, not every possible substance.", "Monitoring continues after temporary improvement.", "Read the gas trend and then watch for recurrence."),
    buildHint36("c036-hint-22", "run", "c036-run-results", "carbon dioxide 72", ["aci-unconscious-2024", "anzcor-opioid-2025"], "Confirming hypoventilation", "What does the gas add?", "High carbon dioxide with acidaemia confirms substantial alveolar hypoventilation. Improvement with ventilation supports the effectiveness of respiratory support.", "The gas quantifies a problem already visible clinically.", "No ECG or paracetamol co-ingestion signal is found; CK is mildly raised.", "Do not let the improved moment shorten observation."),
    buildHint36("c036-hint-23", "run", "c036-run-recurrence", "Respiratory rate falls to 7", ["anzcor-opioid-2025", "qas-naloxone-2024"], "Recognising renarcotisation", "What has the recurrence proved?", "The opioid effect has outlasted the naloxone. Falling rate, rising carbon dioxide and desaturation require immediate airway support and another titrated dose.", "Pause. Return to ventilation now.", "Temporary reversal has worn off during a long-acting exposure.", "Restart support, then plan a controlled infusion."),
    buildHint36("c036-hint-24", "run", "c036-run-recurrence-plan", "naloxone infusion", ["qas-naloxone-2024", "vic-poisons-2026"], "Matching treatment duration to exposure", "Why move from boluses to infusion?", "Recurrent depression after an effective bolus shows that repeated temporary rescue is insufficient. A toxicology-guided infusion maintains ventilation while the modified-release drug clears.", "Titrate the infusion to breathing, not full alertness.", "Callum needs sustained reversal and continuous monitoring.", "Choose disposition from recurrence, not from the earlier response."),
    buildHint36("c036-hint-25", "run", "c036-run-disposition", "not safe for discharge", ["anzcor-opioid-2025", "acsqhc-deterioration-2026"], "Setting disposition from the risk curve", "Why is high-acuity admission necessary?", "He has already redeveloped respiratory depression, requires an infusion and remains at risk of aspiration, pressure injury and further recurrence.", "A temporary response is not a discharge test.", "Continuous respiratory and neurological monitoring are required.", "Now answer why he cannot leave and address pain without judgement."),
    buildHint36("c036-hint-26", "run", "c036-run-concern", "Why can I not go home", ["acsqhc-communication-2026", "anzcor-opioid-2025"], "Answering the immediate concern", "What evidence makes the answer concrete?", "Tell Callum that his breathing slowed again after the first antidote effect wore off. That observed recurrence, not a general rule, explains the need for monitoring.", "Use his own clinical course to explain the plan.", "He also fears losing pain treatment.", "Separate immediate safety from a collaborative longer-term medicine review."),
    buildHint36("c036-hint-27", "run", "c036-run-explanation", "without judging you", ["acsqhc-communication-2026", "anzcor-opioid-2025"], "Preserving engagement", "Why say this explicitly?", "Non-judgemental language makes accurate disclosure and safer follow-up more likely. Explain that pain and dependence will be managed, while the dangerous dose and alcohol combination must change.", "Safety planning does not require blame.", "Callum understands why monitoring and infusion continue.", "Add practical overdose prevention before discharge."),
    buildHint36("c036-hint-28", "run", "c036-run-prevention", "take-home naloxone", ["anzcor-opioid-2025", "acsqhc-communication-2026"], "Planning for another emergency", "What should the housemate know?", "Call 000, open the airway, check breathing, begin CPR if breathing is not normal and use take-home naloxone when available. Naloxone does not replace emergency care.", "Prevention includes the person likely to witness recurrence.", "Dose planning, alcohol avoidance and pain review are part of discharge preparation.", "Use teach-back to check the sequence."),
    buildHint36("c036-hint-29", "run", "c036-run-teachback-answer", "naloxone wears off", ["acsqhc-communication-2026", "anzcor-opioid-2025"], "Confirming understanding", "What has Callum understood?", "He can explain the duration mismatch and the emergency response his housemate should use. Correct only any missing airway or ambulance step.", "Teach-back checks the plan, not the person.", "The prevention explanation is complete.", "Move to the final handover."),
    buildHint36("c036-hint-30", "run", "c036-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order shows the current risk?", "Give exposure and intent, initial respiratory state, ventilation before naloxone, cumulative effective dose, confirmed dose and formulation, recurrence, infusion plan, key tests and monitoring needs.", "End with current respiratory support and destination.", "The last minute transfers a recurrent breathing risk.", "Do not bury the recurrence inside the history."),
    buildHint36("c036-hint-31", "run", "c036-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I add another toxicology test?", "No. The station is complete and the active risks, tests and destination have been handed over.", "Finish on the instruction.", "Case 36 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtySix.essentialHintIds = [
    "c036-hint-02", "c036-hint-04", "c036-hint-05", "c036-hint-06", "c036-hint-07",
    "c036-hint-12", "c036-hint-13", "c036-hint-15", "c036-hint-16", "c036-hint-17",
    "c036-hint-19", "c036-hint-23", "c036-hint-24", "c036-hint-30", "c036-hint-31"
  ];
  var clockByHint36 = {
    "c036-hint-04": "Minutes 0 to 2: assess ABCD and glucose while the pre-hospital clinician provides the scene timeline.",
    "c036-hint-12": "Inadequate ventilation interrupts every planned task. Open the airway and ventilate now.",
    "c036-hint-23": "Recurrence resets the safety priority: ventilate, repeat titrated reversal and arrange sustained support.",
    "c036-hint-26": "By minute 7: explain the observed recurrence, monitoring need and collaborative pain plan.",
    "c036-hint-30": "Final minute: transfer initial physiology, intervention dose, recurrence, infusion and current monitoring."
  };
  var deeperByHint36 = {
    "c036-hint-12": ["Opioid receptor activation suppresses brainstem responsiveness to carbon dioxide. Respiratory rate and tidal volume fall, causing carbon dioxide retention, acidaemia and then hypoxaemia."],
    "c036-hint-13": ["Naloxone can reverse receptor effects, but ventilation supplies oxygen and removes carbon dioxide immediately while the antidote is prepared and circulates."],
    "c036-hint-16": ["Naloxone competitively displaces opioid at the receptor. Large abrupt doses can also remove analgesia and precipitate sympathetic withdrawal, vomiting and agitation in a dependent person."],
    "c036-hint-23": ["Naloxone is cleared more quickly than many modified-release opioids. As naloxone concentration falls, unprocessed opioid can occupy receptors again and respiratory depression returns."],
    "c036-hint-24": ["An infusion extends receptor antagonism across the absorption and elimination period. The effective bolus provides a practical starting point, then breathing and carbon dioxide guide titration."]
  };
  caseThirtySix.hints.forEach(function (hint) {
    if (clockByHint36[hint.id]) hint.clock = clockByHint36[hint.id];
    if (deeperByHint36[hint.id]) hint.deeper = deeperByHint36[hint.id];
  });
})();
