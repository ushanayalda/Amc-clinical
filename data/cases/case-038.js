(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-038",
    globalId: "CP-C038",
    registryId: "CP-P12-C003",
    displayNumber: "Case 38",
    title: "Confusion beside an empty medicine packet",
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
          id: "c038-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c038-stem-patient",
          text: "Mr Soren Bellamy, a 46-year-old man, has been brought to hospital after being found confused beside an empty medicine packet at home."
        },
        {
          id: "c038-stem-context",
          text: "His sister, Mara, is present. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c038-task-history",
          text: "Assess Soren and obtain a focused history from Mara.",
          timing: "2 minutes"
        },
        {
          id: "c038-task-interpret",
          text: "Interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c038-task-manage",
          text: "Initiate management and explain your assessment and plan to Mara.",
          timing: "3 minutes"
        },
        {
          id: "c038-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c038-run-assessment",
          heading: "Focused history and recognition of cardiotoxicity",
          turns: [
            {
              id: "c038-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c038-run-start", text: "You may begin." }]
            },
            {
              id: "c038-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c038-run-first-action", text: "The doctor performs hand hygiene, applies personal protective equipment and approaches Soren and Mara." }]
            },
            {
              id: "c038-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-introduction", text: "Hello Soren, I am Ushana, an emergency doctor. Can you tell me your name and what happened? Mara, please confirm his identity and when he was last well." }]
            },
            {
              id: "c038-turn-patient-response",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c038-run-patient-response", text: "Soren mutters, 'My mouth is dry. I only wanted the pain to stop,' then loses track of the question." }]
            },
            {
              id: "c038-turn-opening-history",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c038-run-opening-history", text: "Mara says Soren was normal 70 minutes ago. She found him confused 20 minutes ago beside an empty amitriptyline packet labelled 50 milligrams. It had contained 50 tablets when dispensed last week. The exact number taken is unknown." }]
            },
            {
              id: "c038-turn-focused-questions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-focused-questions", text: "Was there a note, vomiting, collapse or seizure? Any alcohol, paracetamol, other medicine or recreational drug nearby? Why was amitriptyline prescribed? What conditions, regular medicines, allergies or previous self-harm should I know about?" }]
            },
            {
              id: "c038-turn-focused-answers",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c038-run-focused-answers", text: "Mara reports no note, vomiting or witnessed seizure and saw no other packets or alcohol. Amitriptyline was prescribed for neuropathic back pain. Soren also takes perindopril, has depression, no known allergies and no previous self-harm. Mara cannot exclude another ingestion." }]
            },
            {
              id: "c038-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-primary-request", text: "Call the senior emergency team and Poisons Information Centre on 13 11 26. I assess airway, breathing, circulation and disability, obtain observations and glucose, and request continuous cardiac monitoring, intravenous access, a 12-lead ECG and venous gas." }]
            },
            {
              id: "c038-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c038-run-primary-findings", text: "Soren is agitated and confused with GCS 11, dilated pupils, warm dry skin and a distended bladder. Airway is patent, respiratory rate 20, oxygen saturation 96% on room air, pulse 132, blood pressure 92/56, temperature 37.5 degrees Celsius and glucose 5.6 mmol/L. He weighs 80 kilograms." }]
            },
            {
              id: "c038-turn-ecg-findings",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c038-run-ecg-findings", text: "ECG shows sinus tachycardia, QRS duration 132 milliseconds and a terminal R wave in aVR. Venous pH is 7.31, sodium 140 mmol/L and potassium 3.8 mmol/L." }]
            },
            {
              id: "c038-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-interpretation", text: "This is tricyclic antidepressant poisoning with anticholinergic effects and cardiac sodium-channel blockade. The widened QRS, acidaemia, altered consciousness and hypotension predict seizures and ventricular arrhythmia. Treatment cannot wait for a drug level." }]
            }
          ]
        },
        {
          id: "c038-run-treatment",
          heading: "Alkalinisation, seizure control and circulation support",
          turns: [
            {
              id: "c038-turn-initial-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-initial-treatment", text: "Give 100 millimoles, or 100 millilitres, of 8.4% sodium bicarbonate by slow intravenous push through a separate line. Repeat the ECG and venous gas in two to three minutes. Aim for pH 7.45 to 7.55, QRS narrowing and improved blood pressure while monitoring sodium and potassium." }]
            },
            {
              id: "c038-turn-monitoring-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-monitoring-plan", text: "Apply continuous ECG, saturation and frequent blood-pressure monitoring. Establish two intravenous lines, keep airway and intubation equipment ready, give oxygen if hypoxaemic and avoid acidosis. Send full blood count, electrolytes, renal and liver function, glucose, paracetamol concentration and repeat gases." }]
            },
            {
              id: "c038-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c038-run-treatment-action", text: "The team gives sodium bicarbonate, attaches continuous monitoring, obtains two intravenous lines and prepares for airway intervention." }]
            },
            {
              id: "c038-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c038-run-deterioration", text: "Soren has a generalised seizure. Blood pressure falls to 74/40 and broad-complex ventricular ectopy appears. QRS duration is now 168 milliseconds. He becomes unresponsive after the seizure." }]
            },
            {
              id: "c038-turn-seizure-airway",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-seizure-airway", text: "Give diazepam 5 milligrams intravenously for the seizure and another 80 millimoles of 8.4% sodium bicarbonate. Do not use phenytoin. An airway-skilled clinician should intubate now and mechanically ventilate, targeting carbon dioxide 30 to 35 mmHg to maintain alkalinisation. Recheck pH every 15 minutes initially." }]
            },
            {
              id: "c038-turn-airway-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c038-run-airway-action", text: "Diazepam stops the seizure. Sodium bicarbonate is given before Soren is intubated and ventilated with continuous waveform capnography." }]
            },
            {
              id: "c038-turn-circulation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-circulation", text: "Give crystalloid in measured aliquots up to 20 millilitres per kilogram while reassessing lungs and perfusion. If hypotension persists after fluid, alkalinisation and rhythm treatment, start noradrenaline titrated to perfusion. Insert a urinary catheter and monitor temperature and urine output." }]
            },
            {
              id: "c038-turn-response",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c038-run-response", text: "After the second bicarbonate dose and ventilation, pH is 7.50, sodium 146 mmol/L, potassium 3.4 mmol/L and QRS 110 milliseconds. Ectopy resolves, but blood pressure remains 82/48 despite crystalloid." }]
            },
            {
              id: "c038-turn-vasopressor",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-vasopressor", text: "Start noradrenaline and replace potassium cautiously with serial gases and ECGs. Do not exceed a cumulative 5 millimoles per kilogram of bicarbonate or allow pH above 7.55 or sodium above 155. If arrhythmia recurs at target pH, discuss lignocaine with the toxicologist. Avoid beta-blockers and amiodarone." }]
            },
            {
              id: "c038-turn-decontamination",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-decontamination", text: "Because the ingestion was recent and the airway is protected, give activated charcoal 50 grams through the gastric tube after toxicology advice, with a further 50 grams four hours later if advised. Do not induce vomiting. Tricyclic concentrations do not guide acute treatment." }]
            }
          ]
        },
        {
          id: "c038-run-communication",
          heading: "Family explanation, disposition and handover",
          turns: [
            {
              id: "c038-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c038-run-explanation-prompt", text: "Please explain the assessment and plan to Mara." }]
            },
            {
              id: "c038-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-explanation", text: "Mara, the packet and Soren's examination suggest amitriptyline poisoning. It has affected electrical conduction in his heart and caused a seizure and low blood pressure. We have given sodium bicarbonate, which narrowed the abnormal electrical signal, supported his breathing and started medicine for his blood pressure." }]
            },
            {
              id: "c038-turn-concern",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c038-run-concern", text: "Mara asks, 'Will he recover, and why did you not give a normal heart-rhythm drug?'" }]
            },
            {
              id: "c038-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-concern-response", text: "He remains critically unwell, so I cannot promise the outcome, but the QRS narrowing is encouraging. Some usual rhythm medicines, including amiodarone and beta-blockers, can worsen this poisoning. Bicarbonate and controlled ventilation address the sodium-channel effect; toxicology guides any additional rhythm treatment." }]
            },
            {
              id: "c038-turn-disposition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c038-run-disposition", text: "Soren needs intensive-care admission with continuous ECG, serial gases, electrolytes and organ support. When awake and medically stable, he will receive a confidential psychosocial and mental-health assessment. We will involve you with his consent and secure medicines at home." }]
            },
            {
              id: "c038-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c038-run-handover-prompt", text: "Please finish with a concise handover to the intensive-care clinician." }]
            },
            {
              id: "c038-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c038-run-handover", text: "Mr Soren Bellamy is 46 and 80 kilograms, found confused within 70 minutes of last being well beside an empty amitriptyline 50-milligram packet. He developed GCS 11, anticholinergic signs, hypotension, QRS 132 milliseconds and pH 7.31, then seizure, QRS 168 and ventricular ectopy. He received bicarbonate 100 then 80 millimoles, diazepam 5 milligrams, intubation and ventilation, crystalloid and activated charcoal. QRS is now 110 and pH 7.50; ectopy resolved, but blood pressure 82/48 requires noradrenaline. Continue alkalinisation targets, serial ECG, gases, sodium and potassium, and intensive-care toxicology management. Avoid phenytoin, beta-blockers and amiodarone. Mental-health assessment follows recovery." }]
            },
            {
              id: "c038-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c038-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Austin Health Clinical Toxicology Service",
        title: "Tricyclic Antidepressants (TCAs)",
        date: "Version 5, published August 2025; review August 2028",
        url: "https://www.austin.org.au/Assets/Files/Tricyclic%20Guideline_V5_8_2025.pdf"
      },
      {
        organisation: "Austin Health Clinical Toxicology Service",
        title: "Serum alkalinisation for cardiac sodium channel blockade",
        date: "Version 1, published August 2025; review August 2028",
        url: "https://www.austin.org.au/Assets/Files/Serum%20alkalinisation_V1_8_2025.pdf"
      },
      {
        organisation: "Austin Health",
        title: "Victorian Poisons Centre",
        date: "Current service information, accessed July 2026",
        url: "https://www.austin.org.au/poisons"
      }
    ]
  });

  var caseThirtyEight = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-038"; });
  function buildHint38(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtyEight.masteryFocus = {
    case: "Use the last-known-well time, packet evidence, mental state and rapid physiology to set urgency, then let each disclosed electrical and circulation finding determine the next escalation.",
    clinical: "In any poisoning with altered consciousness, connect toxidrome clues to organ-threatening physiology; treat the dangerous channel effect and acid-base state rather than waiting for a drug concentration or defaulting to familiar rhythm medicines.",
    tasks: ["Assess and collateral history", "Interpret key findings", "Manage and explain", "Concise senior handover"],
    transfer: "If Soren had the same packet history but remained alert, normotensive and seizure-free with a normal QRS, would bicarbonate and intubation still be automatic?",
    transferAnswer: "No. Continue close monitoring, serial ECG assessment and toxicology consultation because deterioration can occur, but reserve bicarbonate for evidence such as QRS widening, ventricular dysrhythmia, hypotension or clinically important acidaemia. Intubation depends on airway, ventilation, consciousness and severe toxicity, not the packet alone. Early activated charcoal may be considered only when toxicology advises and the airway is safe.",
    transferChecks: ["Consciousness and airway protection", "Blood pressure and perfusion", "QRS and ventricular rhythm", "Acid-base state and toxicology advice"],
    transferCitationIds: ["austin-tca-2025", "austin-alkalinisation-2025"]
  };
  caseThirtyEight.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-medication-2026", title: "Medication Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/medication-safety-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "austin-tca-2025", title: "Tricyclic Antidepressants (TCAs)", organisation: "Austin Health Clinical Toxicology Service", date: "Version 5, August 2025", url: "https://www.austin.org.au/Assets/Files/Tricyclic%20Guideline_V5_8_2025.pdf" },
    { id: "austin-alkalinisation-2025", title: "Serum alkalinisation for cardiac sodium channel blockade", organisation: "Austin Health Clinical Toxicology Service", date: "Version 1, August 2025", url: "https://www.austin.org.au/Assets/Files/Serum%20alkalinisation_V1_8_2025.pdf" },
    { id: "vic-poisons-2026", title: "Victorian Poisons Centre", organisation: "Austin Health", date: "Current July 2026", url: "https://www.austin.org.au/poisons" }
  ];
  caseThirtyEight.reasoningCompass = {
    stem: {
      title: "Treat the packet as evidence, not a conclusion",
      steps: [
        { time: "0 to 30 seconds", text: "Confusion beside an empty packet raises poisoning risk, but immediate priorities remain airway, breathing, circulation, glucose, injury and last known well." },
        { time: "30 to 60 seconds", text: "Use Mara for product, strength, possible amount, timing, co-ingestants, witnessed collapse or seizure, medical history and intent while Soren is assessed." },
        { time: "1 to 2 minutes", text: "Set the task times: assessment and collateral history to minute 2, interpretation to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "Assess and history 0 to 2 | Interpret 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Follow Soren's condition, not the packet alone",
      steps: [
        { time: "0 to 2 minutes", text: "Assess ABCD and glucose, establish the scene timeline and request monitoring and tests selected from what has been disclosed." },
        { time: "2 to 7 minutes", text: "Interpret each new finding in order, treat any immediate threat and repeat the same measures to judge the response." },
        { time: "7 to 8 minutes", text: "Explain what is known, what has been treated and what still needs support, then hand over the exposure timeline, treatment totals and response." }
      ],
      anchor: "If ABCD becomes unsafe, stop the current task, stabilise Soren, then return to the point that was interrupted."
    }
  };
  caseThirtyEight.hints = [
    buildHint38("c038-hint-01", "stem", "c038-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can happen immediately?", "ABCD, glucose, monitoring, access and senior toxicology support can begin while Mara provides collateral history.", "Do not wait for Soren to become coherent.", "The setting can resuscitate while the exposure is reconstructed.", "Read the scene clue without treating it as proof."),
    buildHint38("c038-hint-02", "stem", "c038-stem-patient", "confused beside an empty medicine packet", ["amc-tips-2024", "vic-poisons-2026"], "Reading the scene", "What does the packet establish?", "It establishes a possible exposure and a need to identify the product, amount and timing. It does not establish what was swallowed or explain current physiology by itself.", "Hold evidence and uncertainty together.", "Soren has altered mental state with a possible medicine exposure.", "Use Mara for last known well while ABCD proceeds."),
    buildHint38("c038-hint-03", "stem", "c038-stem-context", "sister, Mara, is present", ["acsqhc-communication-2026", "amc-tips-2024"], "Using collateral history", "Which facts matter before a full background?", "Ask last known well, packet label and strength, how full it was, other substances, collapse, seizure, vomiting and current medicines or illness.", "Keep exact times and uncertainty explicit.", "Mara may hold the only reliable exposure history.", "Anchor the four tasks."),
    buildHint38("c038-hint-04", "stem", "c038-task-history", "Assess Soren and obtain a focused history", ["amc-spec-2026", "vic-poisons-2026"], "Anchoring task one", "How do assessment and history fit together?", "Assess ABCD, consciousness, glucose, pupils, skin and injury while Mara gives product, amount, time, co-ingestants, witnessed events, medical history and intent clues.", "Physiology leads; collateral detail runs beside it.", "Minutes 0 to 2 establish severity and exposure evidence.", "Interrupt history for any immediate danger finding."),
    buildHint38("c038-hint-05", "stem", "c038-task-interpret", "Interpret the information", ["amc-spec-2026", "vic-poisons-2026"], "Anchoring task two", "What should the interpretation connect?", "Connect the disclosed mental state and autonomic signs with circulation, electrical findings and acid-base state. State dangerous alternatives until the pattern is supported.", "Name organ-threatening physiology before a precise toxin.", "Minutes 2 to 4 turn findings into the next action.", "Use repeated measures to judge response."),
    buildHint38("c038-hint-06", "stem", "c038-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-medication-2026", "acsqhc-communication-2026"], "Anchoring task three", "How do I keep the management in a clear order?", "Support ABCD first. Once the findings support a specific treatment, give it, define what improvement should look like and explain the current concern and actions to Mara.", "Treat the findings in front of you rather than waiting for a confirmatory concentration.", "Minutes 4 to 7 include treatment, reassessment and explanation.", "Reserve the final minute for handover."),
    buildHint38("c038-hint-07", "stem", "c038-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories must be transferred?", "Give last known well, packet evidence and uncertainty, initial consciousness and physiology, interventions and totals, response, current organ support, targets and pending safety assessment.", "The trend and limits matter more than an exhaustive differential.", "Minute 7 to 8 belongs to the receiving clinician.", "Begin with responsiveness and collateral timing."),
    buildHint38("c038-hint-08", "run", "c038-run-first-action", "personal protective equipment", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Approaching safely", "What do I assess while applying PPE?", "Observe Soren's responsiveness, breathing, colour and behaviour while moving directly to ABCD and collateral history.", "Safety preparation should be brief and purposeful.", "You are at the bedside with Mara.", "Ask Soren once, then use Mara if he cannot answer reliably."),
    buildHint38("c038-hint-09", "run", "c038-run-patient-response", "loses track of the question", ["vic-poisons-2026", "acsqhc-deterioration-2026"], "Recognising unreliable history", "Can I continue interviewing him?", "His confusion makes dose, time and intent unreliable. Keep him included where possible, but use Mara and objective findings for immediate decisions.", "Do not force a coherent account from an altered patient.", "Dry mouth is one clue; altered consciousness is the safety issue.", "Establish last known well and identify the packet."),
    buildHint38("c038-hint-10", "run", "c038-run-opening-history", "amitriptyline packet", ["austin-tca-2025", "vic-poisons-2026"], "Identifying a high-risk product", "What can I safely conclude now?", "Amitriptyline exposure within a short window is plausible and potentially severe, but the exact amount is unknown. Treat the packet and clinical state as enough for urgent monitoring, not as a measured dose.", "Unknown amount does not mean low risk.", "A high-risk product and recent timeline are now disclosed.", "Ask about co-ingestants and relevant background while ABCD continues."),
    buildHint38("c038-hint-11", "run", "c038-run-focused-answers", "cannot exclude another ingestion", ["vic-poisons-2026", "acsqhc-medication-2026"], "Keeping co-ingestion open", "How should uncertainty change testing?", "Screen important common co-ingestants and avoid assuming one empty packet explains everything. Depression and access to medicine also matter for later safety assessment.", "Document uncertainty rather than filling the gap.", "Amitriptyline is strongly suspected but not necessarily alone.", "Request primary physiology, glucose, monitoring and rapid electrical assessment."),
    buildHint38("c038-hint-12", "run", "c038-run-primary-request", "continuous cardiac monitoring", ["austin-tca-2025", "austin-alkalinisation-2025"], "Requesting decision-critical monitoring", "Why ask for an ECG and gas immediately?", "This exposure can alter cardiac conduction quickly, and acidaemia can worsen that effect. Continuous monitoring detects change while a 12-lead tracing and gas quantify it.", "Do not wait for a drug concentration.", "ABCD, glucose, access and toxicology help are active.", "Read the examination pattern before the electrical findings."),
    buildHint38("c038-hint-13", "run", "c038-run-primary-findings", "warm dry skin", ["austin-tca-2025"], "Recognising the autonomic pattern", "What links pupils, skin, bladder and confusion?", "Dilated pupils, warm dry skin, urinary retention, agitation and tachycardia form an anticholinergic pattern. Hypotension and reduced consciousness suggest more than isolated peripheral effects.", "Use the pattern to support, not replace, organ assessment.", "A compatible toxidrome and impaired circulation are present.", "Now read QRS, rhythm and pH."),
    buildHint38("c038-hint-14", "run", "c038-run-ecg-findings", "QRS duration 132 milliseconds", ["austin-tca-2025", "austin-alkalinisation-2025"], "Reading cardiac toxicity", "Why is QRS width central here?", "Widening and a terminal R wave in aVR support cardiac sodium-channel blockade. With hypotension, acidaemia and altered consciousness, seizure and ventricular arrhythmia risk is high.", "Pause. Electrical toxicity is now disclosed.", "The packet, toxidrome and ECG now align.", "State the diagnosis and treat without waiting for a level."),
    buildHint38("c038-hint-15", "run", "c038-run-interpretation", "cardiac sodium-channel blockade", ["austin-tca-2025", "austin-alkalinisation-2025"], "Naming the mechanism that changes treatment", "What is certain enough to act on?", "Tricyclic poisoning is strongly supported, and QRS widening with hypotension and acidaemia shows clinically important channel blockade. These findings justify immediate alkalinisation.", "Treat the demonstrated electrical effect.", "Seizure and ventricular arrhythmia are major risks.", "Give bicarbonate and repeat the same measurements quickly."),
    buildHint38("c038-hint-16", "run", "c038-run-initial-treatment", "pH 7.45 to 7.55", ["austin-alkalinisation-2025", "austin-tca-2025"], "Using bicarbonate with targets", "What are the treatment endpoints?", "Repeat boluses are guided by QRS narrowing, blood-pressure improvement and controlled alkalinaemia while sodium and potassium are monitored.", "Bicarbonate is a titrated intervention, not an unlimited dose.", "The first dose addresses channel blockade and acidaemia together.", "Keep airway equipment and continuous monitoring ready."),
    buildHint38("c038-hint-17", "run", "c038-run-monitoring-plan", "avoid acidosis", ["austin-tca-2025", "austin-alkalinisation-2025"], "Protecting against worsening blockade", "Why is pH so important?", "Acidaemia increases the active drug fraction and worsens sodium-channel binding. Oxygenation and ventilation therefore support the electrical treatment, not just the airway.", "Prevent hypoventilation while repeating ECG and gas.", "Two lines and airway readiness are established.", "Watch for seizure, hypotension or rhythm deterioration."),
    buildHint38("c038-hint-18", "run", "c038-run-deterioration", "QRS duration is now 168", ["austin-tca-2025", "austin-alkalinisation-2025", "acsqhc-deterioration-2026"], "Recognising rapidly worsening toxicity", "What has changed despite the first dose?", "A seizure, severe hypotension, ventricular ectopy and further QRS widening show escalating cerebral and cardiac toxicity. Repeat bicarbonate and secure ventilation now.", "Pause. This is immediate resuscitation.", "The first intervention was insufficient and physiology is deteriorating.", "Treat seizure with a benzodiazepine and avoid phenytoin."),
    buildHint38("c038-hint-19", "run", "c038-run-seizure-airway", "Do not use phenytoin", ["austin-tca-2025", "austin-alkalinisation-2025"], "Choosing seizure treatment safely", "Why avoid a familiar anticonvulsant?", "Phenytoin can add sodium-channel blockade and worsen cardiac toxicity. Diazepam treats seizure while bicarbonate and controlled ventilation address the poisoning mechanism.", "Do not treat one organ in a way that worsens another.", "Soren now needs an airway-skilled intubation.", "Use ventilation to maintain oxygenation and the target pH environment."),
    buildHint38("c038-hint-20", "run", "c038-run-airway-action", "continuous waveform capnography", ["austin-alkalinisation-2025", "acsqhc-deterioration-2026"], "Controlling ventilation", "Why is capnography essential here?", "It shows ongoing carbon dioxide clearance and helps avoid hypoventilation-driven acidaemia after intubation. Serial blood gases confirm the pH target.", "Ventilation is now part of toxin treatment.", "The seizure has stopped and airway control is established.", "Support circulation while reassessing QRS and pH."),
    buildHint38("c038-hint-21", "run", "c038-run-circulation", "noradrenaline", ["austin-tca-2025", "austin-alkalinisation-2025"], "Supporting persistent hypotension", "Why not give unlimited fluid?", "Measured crystalloid addresses possible preload loss, but tricyclic toxicity also impairs vascular tone and myocardium. Persistent hypotension after fluid and alkalinisation needs a titrated vasopressor.", "Reassess lungs and perfusion after each aliquot.", "Airway, seizure and electrical treatment are active.", "Read whether QRS, pH and pressure improve together."),
    buildHint38("c038-hint-22", "run", "c038-run-response", "QRS 110 milliseconds", ["austin-alkalinisation-2025", "austin-tca-2025"], "Separating partial responses", "What has improved and what remains unsafe?", "QRS narrowing and resolved ectopy show an electrical response at pH 7.50. Blood pressure remains low, so circulation still needs support.", "Do not let one successful endpoint hide another failing system.", "Alkalinisation has improved conduction; shock persists.", "Start noradrenaline and keep within pH, sodium and dose limits."),
    buildHint38("c038-hint-23", "run", "c038-run-vasopressor", "pH above 7.55", ["austin-alkalinisation-2025"], "Respecting treatment limits", "Why stop escalating bicarbonate past the target?", "Excess alkalinaemia, hypernatraemia and hypokalaemia create new arrhythmia risk. Once target pH is reached, persistent hypotension needs vasopressor support rather than unlimited bicarbonate.", "Monitor sodium, potassium, pH and cumulative dose together.", "Electrical findings improved but haemodynamic support continues.", "Use toxicology advice for any recurrent arrhythmia."),
    buildHint38("c038-hint-24", "run", "c038-run-decontamination", "airway is protected", ["austin-tca-2025", "vic-poisons-2026"], "Making charcoal conditional", "Why is charcoal considered now?", "The ingestion is recent and the intubated airway is protected, reducing aspiration risk. Toxicology advice is still needed because decontamination never outranks resuscitation.", "Charcoal follows stabilisation and airway protection.", "Treatment now addresses absorption, conduction and perfusion.", "Turn to Mara when prompted and explain the organ effects plainly."),
    buildHint38("c038-hint-25", "run", "c038-run-explanation-prompt", "explain the assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Changing audience", "What should Mara hear first?", "Say that the medicine has affected electrical conduction in Soren's heart, his brain and blood pressure, then explain what has improved and why intensive care is still needed.", "Use organ effects before treatment detail.", "Soren remains critically unwell but has an encouraging electrical response.", "Address why usual rhythm medicines may be unsafe."),
    buildHint38("c038-hint-26", "run", "c038-run-explanation", "narrowed the abnormal electrical signal", ["acsqhc-communication-2026", "austin-alkalinisation-2025"], "Making mechanism understandable", "How much detail is useful?", "Explain that bicarbonate changed the blood environment and reduced the medicine's interference with the heart's electrical channels. Then name breathing and blood-pressure support.", "One clear link is enough for the family explanation.", "Mara has heard the current problem and actions.", "Give prognosis from the response without a guarantee."),
    buildHint38("c038-hint-27", "run", "c038-run-concern", "normal heart-rhythm drug", ["acsqhc-communication-2026", "austin-tca-2025"], "Answering the treatment concern", "Why not default to a familiar antiarrhythmic?", "Some usual agents can worsen conduction, hypotension or channel blockade in this poisoning. The treatment must match the toxin mechanism, with toxicology guidance for any additional rhythm medicine.", "Familiar does not mean safe in every mechanism.", "The QRS response is encouraging but pressure remains supported.", "Explain uncertainty and the intensive-care plan."),
    buildHint38("c038-hint-28", "run", "c038-run-concern-response", "cannot promise the outcome", ["acsqhc-communication-2026", "austin-tca-2025"], "Balancing honesty and hope", "What evidence can I offer?", "The narrowed QRS and resolved ectopy are encouraging, but seizure, shock and ventilation show ongoing critical illness. State both without predicting more than the evidence allows.", "Reassurance can be specific without becoming a guarantee.", "Mara understands why treatment differs from routine rhythm care.", "Add the later mental-health pathway only after medical stabilisation."),
    buildHint38("c038-hint-29", "run", "c038-run-disposition", "When awake and medically stable", ["acsqhc-communication-2026", "acsqhc-medication-2026"], "Sequencing ongoing care", "Why not assess intent through Mara now and close it?", "Collateral information is useful, but Soren needs his own confidential psychosocial assessment when he can participate. Intensive medical support remains the current priority.", "Medical stabilisation and later safety assessment are both required.", "The longer plan is defined without distracting from current shock.", "Move to the final intensive-care handover."),
    buildHint38("c038-hint-30", "run", "c038-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "Which sequence shows severity and response?", "Give last known well and packet uncertainty, initial toxidrome, QRS, pH and pressure, deterioration, cumulative bicarbonate and seizure treatment, airway and fluid support, current QRS and pH, persistent hypotension and targets.", "End with current vasopressor and monitoring limits.", "The final minute transfers a mechanism-specific resuscitation.", "Keep future psychosocial assessment after current organ support."),
    buildHint38("c038-hint-31", "run", "c038-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I add another rhythm medicine?", "No. The examiner has ended the station, and additional rhythm treatment was correctly left to toxicology if instability recurs at target pH.", "Finish on the instruction.", "Case 38 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtyEight.essentialHintIds = [
    "c038-hint-02", "c038-hint-04", "c038-hint-05", "c038-hint-06", "c038-hint-07",
    "c038-hint-10", "c038-hint-14", "c038-hint-15", "c038-hint-16", "c038-hint-18",
    "c038-hint-19", "c038-hint-22", "c038-hint-23", "c038-hint-30", "c038-hint-31"
  ];
  var clockByHint38 = {
    "c038-hint-04": "Minutes 0 to 2: assess ABCD and glucose while Mara provides last known well, packet details and co-ingestant uncertainty.",
    "c038-hint-14": "Before minute 4: electrical and circulation findings now define urgency. Treat rather than extend the history.",
    "c038-hint-18": "Seizure, widening QRS and hypotension interrupt every planned task. Resuscitate and repeat the mechanism-specific intervention now.",
    "c038-hint-25": "By minute 7: explain the heart, brain and blood-pressure effects, response and remaining critical risk.",
    "c038-hint-30": "Final minute: transfer the exposure timeline, electrical trend, cumulative treatment, organ support and safety limits."
  };
  var deeperByHint38 = {
    "c038-hint-14": ["Tricyclic molecules bind fast sodium channels in the His-Purkinje system and myocardium. Conduction slows, widening the QRS and creating a substrate for ventricular arrhythmia."],
    "c038-hint-16": ["A sodium load competes at the channel, while alkalinaemia increases protein binding and reduces the free active drug fraction. QRS and blood pressure show whether that combined effect is working."],
    "c038-hint-17": ["Acidaemia increases ionised free tricyclic drug and strengthens channel binding. Hypoventilation therefore worsens cardiac toxicity through carbon dioxide retention and falling pH."],
    "c038-hint-19": ["Phenytoin also affects sodium channels, so it can compound the central cardiac mechanism. A benzodiazepine controls seizure through GABA signalling without adding that blockade."],
    "c038-hint-23": ["Bicarbonate treatment can lower potassium through intracellular shift and raise sodium substantially. Both extremes can create new electrical instability, which is why ceilings and serial measurement matter."]
  };
  caseThirtyEight.hints.forEach(function (hint) {
    if (clockByHint38[hint.id]) hint.clock = clockByHint38[hint.id];
    if (deeperByHint38[hint.id]) hint.deeper = deeperByHint38[hint.id];
  });
})();
