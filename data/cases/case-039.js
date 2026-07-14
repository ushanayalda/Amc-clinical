(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-039",
    globalId: "CP-C039",
    registryId: "CP-P12-C004",
    displayNumber: "Case 39",
    title: "Agitation, sweating and shaking",
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
          id: "c039-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c039-stem-patient",
          text: "Ms Asha Delaney, a 32-year-old woman, has presented with agitation, sweating and shaking after a recent medicine change."
        },
        {
          id: "c039-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c039-task-history",
          text: "Take a focused history from Asha.",
          timing: "2 minutes"
        },
        {
          id: "c039-task-assess",
          text: "Assess Asha and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c039-task-manage",
          text: "Initiate management and explain your assessment and plan to Asha.",
          timing: "3 minutes"
        },
        {
          id: "c039-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c039-run-history",
          heading: "Focused medicine history and diagnostic examination",
          turns: [
            {
              id: "c039-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c039-run-start", text: "You may begin." }]
            },
            {
              id: "c039-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c039-run-first-action", text: "The doctor performs hand hygiene and approaches Asha, who is pacing beside the trolley." }]
            },
            {
              id: "c039-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-introduction", text: "Hello, I am Ushana, an emergency doctor. Please confirm your name. When did the shaking, sweating and restlessness begin, and what else have you noticed?" }]
            },
            {
              id: "c039-turn-symptoms",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c039-run-symptoms", text: "Asha Delaney. It began this afternoon. I cannot keep still. My legs jerk, I am soaked in sweat and have diarrhoea. I feel hot and frightened, with no cough, rash or painful urination." }]
            },
            {
              id: "c039-turn-medicine-questions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-medicine-questions", text: "List every prescribed, over-the-counter, herbal and recreational substance, including recent changes. What did you take today and when? Any extra dose, antipsychotic, anaesthetic, stimulant or illicit drug?" }]
            },
            {
              id: "c039-turn-medicine-answers",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c039-run-medicine-answers", text: "I take sertraline 100 milligrams each morning. Yesterday a clinic added tramadol 50 milligrams for my back. I took four doses in 24 hours, last at midday. I took only prescribed amounts, with no herbs, cold medicine or recreational drug." }]
            },
            {
              id: "c039-turn-background-questions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-background-questions", text: "Any infection, head injury, thyroid problem, seizure, pregnancy, allergy or similar episode? Any muscle pain, chest pain, breathlessness, vomiting or reduced urine?" }]
            },
            {
              id: "c039-turn-background-answers",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c039-run-background-answers", text: "No. I was well before today, am not pregnant, have no allergies and have never felt this way. My thighs ache and my heart races, but I have no chest pain, breathlessness, vomiting or urine problem." }]
            },
            {
              id: "c039-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-primary-request", text: "I assess airway, breathing, circulation and mental state, obtain observations and glucose, and examine pupils, skin moisture, bowel sounds, muscle tone, reflexes, ocular movements and spontaneous or inducible clonus, especially in the legs." }]
            },
            {
              id: "c039-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c039-run-primary-findings", text: "Asha is alert but markedly agitated. Airway is patent, respiratory rate 26, oxygen saturation 98% on room air, pulse 132, blood pressure 158/94, temperature 38.8 degrees Celsius and glucose 5.4 mmol/L. She is diaphoretic with dilated reactive pupils, hyperactive bowel sounds, tremor, marked lower-limb hyperreflexia, ocular clonus and sustained ankle clonus. There is no lead-pipe rigidity." }]
            },
            {
              id: "c039-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-interpretation", text: "Serotonergic exposure with agitation, sweating, hyperreflexia and clonus meets Hunter criteria for serotonin toxicity. Rapid onset and clonus favour this over neuroleptic malignant syndrome; moist skin and active bowel sounds oppose an anticholinergic syndrome. Consider infection and metabolic causes." }]
            }
          ]
        },
        {
          id: "c039-run-management",
          heading: "Sedation, cooling and prevention of complications",
          turns: [
            {
              id: "c039-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-escalation", text: "Stop sertraline, tramadol and other serotonergic agents. Call senior emergency and critical-care clinicians and Poisons Information Centre on 13 11 26. Establish intravenous access and ECG, saturation, blood-pressure and continuous core-temperature monitoring." }]
            },
            {
              id: "c039-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-investigations", text: "Obtain ECG, venous gas with lactate, electrolytes, renal and liver function, creatine kinase, glucose, full blood count, coagulation and urine myoglobin. Add cultures if infection remains plausible. Drug concentrations do not confirm serotonin toxicity." }]
            },
            {
              id: "c039-turn-initial-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-initial-treatment", text: "Give intravenous crystalloid and titrated intravenous diazepam, starting with 5 milligrams and repeating to reduce agitation and clonus while protecting breathing. Remove excess clothing and cool with mist, fans and ice packs. Avoid restraint because muscle activity increases heat and acidosis." }]
            },
            {
              id: "c039-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c039-run-treatment-action", text: "Serotonergic medicines are withheld. Monitoring, intravenous fluid, titrated diazepam and active cooling begin without physically restraining Asha." }]
            },
            {
              id: "c039-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c039-run-deterioration", text: "Twenty minutes later Asha remains very agitated with sustained clonus and increasing generalised rigidity. Core temperature is 39.4 degrees Celsius, pulse 142 and blood pressure 166/98. Venous pH is 7.29, lactate 4.2 mmol/L and creatine kinase 680 U/L. ECG shows sinus tachycardia without QRS or QT abnormality." }]
            },
            {
              id: "c039-turn-severe-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-severe-management", text: "This is severe toxicity. Continue aggressive cooling and titrate benzodiazepine. If temperature and rigidity do not fall promptly, anaesthesia should intubate, sedate and use non-depolarising paralysis. Antipyretics do not help because heat comes from muscle activity, not a raised hypothalamic set-point." }]
            },
            {
              id: "c039-turn-antagonist",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-antagonist", text: "Discuss a serotonin antagonist with the toxicologist. If advised and enteral administration is safe, give cyproheptadine 12 milligrams, then 2 milligrams every two hours to response, maximum 32 milligrams in 24 hours. Supportive care remains primary." }]
            },
            {
              id: "c039-turn-response",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c039-run-response", text: "After additional diazepam, cooling and cyproheptadine, Asha is calm and follows instructions. Temperature is 38.2 degrees Celsius, pulse 108 and blood pressure 132/78. Clonus is now inducible rather than sustained, urine output is preserved and repeat pH is 7.38." }]
            },
            {
              id: "c039-turn-ongoing-care",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-ongoing-care", text: "Continue temperature, neurological and cardiorespiratory monitoring, hydration and serial renal function, electrolytes and creatine kinase. Watch for recurrent hyperthermia, seizures, rhabdomyolysis, kidney injury, acidosis and coagulopathy. Admit under critical care until severe features resolve." }]
            }
          ]
        },
        {
          id: "c039-run-communication",
          heading: "Explanation, medicine safety and handover",
          turns: [
            {
              id: "c039-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c039-run-explanation-prompt", text: "Please explain the assessment and plan to Asha." }]
            },
            {
              id: "c039-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-explanation", text: "Asha, sertraline and tramadol both increased serotonin activity, causing agitation, sweating, diarrhoea, overactive reflexes and rhythmic ankle movements. We stopped both, calmed the muscles, cooled you and gave fluids. You are improving but still need close monitoring." }]
            },
            {
              id: "c039-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c039-run-concern", text: "Did I do something wrong? Why can I not just take paracetamol for the temperature?" }]
            },
            {
              id: "c039-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-concern-response", text: "You took prescribed doses, so this appears to be an unintended interaction, not your fault. Paracetamol lowers fever when the brain resets temperature during infection. Here constant muscle activity generated heat, so sedation and active cooling treat the cause." }]
            },
            {
              id: "c039-turn-disposition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-disposition", text: "Do not restart sertraline or tramadol until toxicology and your clinician review alternatives. Before discharge, pharmacy and your GP will reconcile your medicines, record the interaction and provide a written plan. Seek help for recurrent agitation, sweating, shaking, diarrhoea or fever." }]
            },
            {
              id: "c039-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c039-run-teachback", text: "Please tell me what caused this reaction and what you will do before taking either medicine again." }]
            },
            {
              id: "c039-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c039-run-teachback-answer", text: "Sertraline and tramadol together caused too much serotonin activity. I will not restart either until the team reviews them, and I will check all new medicines for interactions." }]
            },
            {
              id: "c039-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c039-run-handover-prompt", text: "Please finish with a concise handover to the critical-care clinician." }]
            },
            {
              id: "c039-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c039-run-handover", text: "Ms Asha Delaney is 32 and developed agitation, diaphoresis, diarrhoea and tremor after tramadol was added to sertraline 100 milligrams. Temperature was 38.8 with tachycardia, hyperreflexia, ocular and sustained ankle clonus, meeting Hunter criteria. Despite fluid, diazepam and cooling, temperature reached 39.4 with rigidity, acidosis and CK 680. Stopping serotonergic agents, further diazepam, cooling and toxicologist-advised cyproheptadine improved temperature to 38.2 and clonus. Continue core-temperature, neurological and cardiorespiratory monitoring, hydration, renal function, CK, electrolytes and coagulation. Intubate and use non-depolarising paralysis for recurrent severe hyperthermia or rigidity." }]
            },
            {
              id: "c039-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c039-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Austin Health Clinical Toxicology Service",
        title: "Serotonin (5HT) Toxicity",
        date: "Version 3; published March 2023; review date March 2026; remained online when accessed July 2026",
        url: "https://www.austin.org.au/Assets/Files/Serotonin%20Toxicity%20Guidelines.March2024.pdf"
      },
      {
        organisation: "The Royal Children's Hospital Melbourne",
        title: "Clinical Practice Guideline: Serotonin toxicity",
        date: "July 2021",
        url: "https://www.rch.org.au/clinicalguide/guideline_index/Serotonin_toxicity/"
      },
      {
        organisation: "Australian Prescriber",
        title: "Opioids and antidepressants: which combinations to avoid",
        date: "April 2021",
        url: "https://australianprescriber.tg.org.au/articles/opioids-and-antidepressants-which-combinations-to-avoid.html"
      },
      {
        organisation: "Austin Health",
        title: "Victorian Poisons Centre",
        date: "Current service information, accessed July 2026",
        url: "https://www.austin.org.au/poisons"
      }
    ]
  });

  var caseThirtyNine = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-039"; });
  function buildHint39(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtyNine.masteryFocus = {
    case: "Reconstruct every recent medicine and its timing, then read the disclosed mental-state, autonomic and neuromuscular findings together before choosing the next action.",
    clinical: "In any acute toxidrome, a medicine list suggests possibilities but the examination pattern distinguishes them; treat agitation, muscle activity and rising temperature as linked physiology and reassess the whole pattern.",
    tasks: ["Focused medicine history", "Assess and interpret", "Manage and explain", "Concise senior handover"],
    transfer: "If Asha had fever and generalised lead-pipe rigidity after a dopamine-blocking medicine, but normal reflexes and no clonus, would the same diagnosis and antagonist still fit?",
    transferAnswer: "No. That pattern should reopen neuroleptic malignant syndrome and other causes rather than being forced into serotonin toxicity. Stop the suspected medicine, provide intensive supportive care, cooling and complication monitoring, and seek toxicology and critical-care advice. Cyproheptadine is not an automatic treatment when the serotonergic examination pattern is absent.",
    transferChecks: ["Clonus and reflex pattern", "Type and timing of medicine exposure", "Rigidity quality and onset", "Supportive care while the diagnosis is reconsidered"],
    transferCitationIds: ["austin-serotonin-2024", "rch-serotonin-2021"]
  };
  caseThirtyNine.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-medication-2026", title: "Medication Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/medication-safety-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "austin-serotonin-2024", title: "Serotonin (5HT) Toxicity", organisation: "Austin Health Clinical Toxicology Service", date: "Version 3; published March 2023; review date March 2026; remained online when accessed July 2026", url: "https://www.austin.org.au/Assets/Files/Serotonin%20Toxicity%20Guidelines.March2024.pdf" },
    { id: "rch-serotonin-2021", title: "Clinical Practice Guideline: Serotonin toxicity", organisation: "Royal Children's Hospital Melbourne", date: "July 2021", url: "https://www.rch.org.au/clinicalguide/guideline_index/Serotonin_toxicity/" },
    { id: "australian-prescriber-interactions-2021", title: "Opioids and antidepressants: which combinations to avoid", organisation: "Australian Prescriber", date: "April 2021", url: "https://australianprescriber.tg.org.au/articles/opioids-and-antidepressants-which-combinations-to-avoid.html" },
    { id: "vic-poisons-2026", title: "Victorian Poisons Centre", organisation: "Austin Health", date: "Current July 2026", url: "https://www.austin.org.au/poisons" }
  ];
  caseThirtyNine.reasoningCompass = {
    stem: {
      title: "Build the medicine timeline, then examine the pattern",
      steps: [
        { time: "0 to 30 seconds", text: "Agitation, sweating and shaking after a medicine change can have toxic, infectious, endocrine or metabolic causes. Do not select one from symptoms alone." },
        { time: "30 to 60 seconds", text: "Plan exact questions about every prescribed, non-prescribed and recreational substance, recent additions, doses and times while arranging ABCD, temperature, glucose and focused neurological examination." },
        { time: "1 to 2 minutes", text: "Set the task times: medicine history to minute 2, assessment and interpretation to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess and interpret 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Let each new finding narrow the problem",
      steps: [
        { time: "0 to 2 minutes", text: "Reconstruct every medicine and substance with its timing, then request focused findings rather than relying on the presenting symptoms alone." },
        { time: "2 to 7 minutes", text: "Interpret each new finding in order, treat any immediate threat and repeat the same measures to judge the response." },
        { time: "7 to 8 minutes", text: "Explain the current assessment, actions and response, then hand over the exposure timeline, important findings and ongoing monitoring." }
      ],
      anchor: "If ABCD becomes unsafe, stop the current task, stabilise Asha, then return to the point that was interrupted."
    }
  };
  caseThirtyNine.hints = [
    buildHint39("c039-hint-01", "stem", "c039-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can start while history is taken?", "Temperature, ABCD, glucose, monitoring, access and senior toxicology support can begin while Asha lists medicines and timing.", "Do not wait for a complete list if physiology is unsafe.", "The setting can assess and cool a deteriorating patient.", "Read the symptom cluster without naming its cause."),
    buildHint39("c039-hint-02", "stem", "c039-stem-patient", "recent medicine change", ["acsqhc-medication-2026", "amc-tips-2024"], "Reading the medicine link", "Does timing prove an interaction?", "No. It makes the exact old and new medicines, doses and times high priority. The examination must still distinguish toxic patterns and other causes.", "The medicine change is a clue; the examination still has to show what it caused.", "A recent change is relevant but not yet identified.", "Use the history task to reconstruct every substance."),
    buildHint39("c039-hint-03", "stem", "c039-stem-context", "provide findings", ["amc-spec-2026", "amc-tips-2024"], "Using examiner findings", "What should I actively request?", "Ask for ABCD, observations, glucose, mental state, pupils, skin, bowel activity, tone, reflexes, eye movements and clonus, plus signs of infection or another toxidrome.", "A focused neurological pattern is part of the diagnosis.", "The stem has not yet disclosed severity or examination.", "Anchor the four tasks."),
    buildHint39("c039-hint-04", "stem", "c039-task-history", "focused history from Asha", ["amc-spec-2026", "acsqhc-medication-2026"], "Anchoring task one", "What fits in two minutes?", "Ask onset and progression, mental, gastrointestinal and muscle symptoms, every medicine and substance, recent changes, exact doses and times, overdose possibility, infection, pregnancy and relevant comorbidity.", "Use a complete substance list, not only prescribed medicines.", "Minutes 0 to 2 establish exposure and competing causes.", "Stop for ABCD if temperature, consciousness or breathing worsens."),
    buildHint39("c039-hint-05", "stem", "c039-task-assess", "Assess Asha and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "What needs to be read together?", "Interpret the disclosed mental state, body responses and neurological findings together, then compare their timing with the main alternatives. Fever or agitation alone cannot decide the cause.", "The combined examination is more useful than any one symptom.", "Minutes 2 to 4 cover examination and interpretation.", "Let the findings determine what needs immediate treatment."),
    buildHint39("c039-hint-06", "stem", "c039-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-deterioration-2026", "acsqhc-communication-2026"], "Anchoring task three", "How do I keep the management in a clear order?", "Stop medicines that may be contributing, treat the unsafe findings, watch for complications, reassess the response and explain the current assessment to Asha without blame.", "Let the findings determine which treatment is needed.", "Minutes 4 to 7 include treatment, reassessment and explanation.", "Reserve the final minute for handover."),
    buildHint39("c039-hint-07", "stem", "c039-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories matter?", "Give recent medicine changes and timing, symptom onset, diagnostic examination findings, physiological severity, interventions, response, complications and current monitoring.", "The medication timeline and examination pattern belong together.", "Minute 7 to 8 transfers current risk.", "Start by asking symptoms and every substance directly."),
    buildHint39("c039-hint-08", "run", "c039-run-first-action", "pacing beside the trolley", ["austin-serotonin-2024", "acsqhc-deterioration-2026"], "Observing before questioning", "What can pacing tell me?", "It confirms marked motor restlessness but not its cause. Observe behaviour, breathing, sweating and movement while approaching calmly.", "Do not use physical restraint as the opening move.", "Asha is mobile and agitated.", "Establish onset and associated symptoms."),
    buildHint39("c039-hint-09", "run", "c039-run-symptoms", "legs jerk", ["austin-serotonin-2024", "rch-serotonin-2021"], "Reading the symptom cluster", "Which details will need examination?", "Jerking, sweating, diarrhoea, heat and agitation suggest autonomic and neuromuscular overactivity. Reflexes, tone and clonus can make the pattern more specific.", "Symptoms point to the examination you need next.", "No clear infectious focus is reported, but infection remains possible.", "Reconstruct every medicine and timing."),
    buildHint39("c039-hint-10", "run", "c039-run-medicine-questions", "recent changes", ["acsqhc-medication-2026", "vic-poisons-2026"], "Taking a full substance history", "Why ask about prescribed and non-prescribed substances together?", "Problems can arise from an interaction at prescribed doses, an overdose or an unreported medicine or substance. Exact names, doses and times help connect an exposure to the symptom onset.", "Ask about every dose and substance, not only overdose.", "The symptoms are active; the exposure remains undefined.", "Use the answer to identify medicines whose effects may overlap."),
    buildHint39("c039-hint-11", "run", "c039-run-medicine-answers", "tramadol 50 milligrams", ["australian-prescriber-interactions-2021", "austin-serotonin-2024"], "Finding the interaction", "What does tramadol add to sertraline?", "Both can increase serotonergic activity. Four tramadol doses in 24 hours with regular sertraline fit the rapid symptom onset even without deliberate overdose.", "Therapeutic prescribing does not exclude a serious interaction.", "A relevant combined exposure is now established.", "Check other causes and complications before declaring the syndrome."),
    buildHint39("c039-hint-12", "run", "c039-run-background-answers", "thighs ache", ["austin-serotonin-2024", "rch-serotonin-2021"], "Screening complications and alternatives", "Why ask muscle pain and urine?", "Sustained muscle activity can cause rhabdomyolysis and kidney injury. Infection, thyroid disease, head injury and pregnancy would redirect parts of the assessment.", "Look beyond the presenting discomfort to organ effects.", "No supported alternative cause has emerged yet.", "Request the focused pattern examination."),
    buildHint39("c039-hint-13", "run", "c039-run-primary-request", "inducible clonus", ["austin-serotonin-2024", "rch-serotonin-2021"], "Requesting discriminating signs", "Why is clonus named explicitly?", "Clonus and hyperreflexia, especially in the legs, are central discriminators for serotonin toxicity. Skin moisture and bowel sounds help compare anticholinergic patterns; rigidity quality helps compare other syndromes.", "Ask for the signs that separate look-alikes.", "Exposure is plausible but examination confirmation is pending.", "Read mental, autonomic and neuromuscular findings together."),
    buildHint39("c039-hint-14", "run", "c039-run-primary-findings", "sustained ankle clonus", ["austin-serotonin-2024", "rch-serotonin-2021"], "Recognising the diagnostic pattern", "What makes this more than anxiety or fever?", "Agitation with diaphoresis, hyperreflexia, ocular clonus and sustained ankle clonus after serotonergic exposure meets a specific toxic pattern. Temperature and tachycardia show physiological severity.", "Pause. The examination now supplies the decisive evidence.", "A serotonergic exposure and clonus-based syndrome align.", "State the diagnosis and compare the closest alternatives."),
    buildHint39("c039-hint-15", "run", "c039-run-interpretation", "meets Hunter criteria", ["austin-serotonin-2024", "rch-serotonin-2021"], "Applying criteria only after examination", "Why does rapid onset matter?", "The medicine interaction, onset within a day, agitation, sweating, hyperreflexia and clonus fit serotonin toxicity. Lead-pipe rigidity without clonus and a slower course would suggest a different syndrome.", "Use criteria as a pattern check, not a substitute for examination.", "The working diagnosis is now supported.", "Stop serotonergic medicines and establish continuous monitoring."),
    buildHint39("c039-hint-16", "run", "c039-run-escalation", "Stop sertraline, tramadol", ["austin-serotonin-2024", "acsqhc-medication-2026"], "Removing ongoing exposure", "Is stopping the medicines enough?", "It prevents further dosing but does not immediately reverse what is already active. Temperature, agitation, clonus and complications still need direct supportive treatment.", "Stop further exposure while treating the effects already present.", "Senior, critical-care and toxicology support are being called.", "Order tests for complications rather than a confirming drug level."),
    buildHint39("c039-hint-17", "run", "c039-run-investigations", "Drug concentrations do not confirm", ["austin-serotonin-2024", "rch-serotonin-2021"], "Selecting investigations", "What are the tests looking for?", "ECG, gas, renal function, electrolytes, CK, coagulation and urine assess acidosis, rhabdomyolysis, kidney injury and coagulopathy. The diagnosis remains clinical.", "The tests look for complications and other causes; the diagnosis still comes from the clinical pattern.", "The current illness is being monitored for organ effects.", "Control muscle activity and heat now."),
    buildHint39("c039-hint-18", "run", "c039-run-initial-treatment", "titrated intravenous diazepam", ["austin-serotonin-2024", "rch-serotonin-2021"], "Treating the heat source", "Why does sedation help temperature?", "Benzodiazepine reduces agitation and muscle activity, which lowers heat production. Fluid supports circulation and kidneys; external cooling removes heat.", "Treat movement, temperature and hydration together.", "Serotonergic medicines are stopped and monitoring is active.", "Avoid restraint because it increases muscular work."),
    buildHint39("c039-hint-19", "run", "c039-run-treatment-action", "without physically restraining", ["austin-serotonin-2024", "acsqhc-deterioration-2026"], "Avoiding a harmful control strategy", "Why can restraint worsen toxicity?", "Struggling against restraint increases muscle contraction, heat, lactate and acidosis. Sedation and a low-stimulation environment are safer ways to control agitation.", "Sedation reduces the harmful muscle activity that restraint would worsen.", "Initial supportive treatment is underway.", "Reassess core temperature, clonus, rigidity, circulation and acid-base state."),
    buildHint39("c039-hint-20", "run", "c039-run-deterioration", "temperature is 39.4", ["austin-serotonin-2024", "rch-serotonin-2021", "acsqhc-deterioration-2026"], "Recognising severe progression", "What makes this severe now?", "Rising core temperature, persistent agitation, sustained clonus, generalised rigidity and acidosis show uncontrolled muscle activity with increasing organ risk.", "Pause. Her temperature and muscle activity are still worsening despite initial treatment.", "Severe toxicity is developing despite first-line support.", "Escalate cooling and sedation, with airway and paralysis readiness."),
    buildHint39("c039-hint-21", "run", "c039-run-severe-management", "Antipyretics do not help", ["austin-serotonin-2024", "rch-serotonin-2021"], "Matching treatment to heat mechanism", "Why is paracetamol not the answer?", "The brain has not raised a fever set-point. Continuous muscle activity is generating heat, so sedation, cooling and, if needed, intubation with non-depolarising paralysis address the source.", "Treat heat production rather than the thermometer alone.", "The airway team should act if temperature and rigidity do not fall promptly.", "Discuss an antagonist as an adjunct, not a replacement for support."),
    buildHint39("c039-hint-22", "run", "c039-run-antagonist", "Supportive care remains primary", ["austin-serotonin-2024", "rch-serotonin-2021"], "Placing cyproheptadine correctly", "Why not rely on the antagonist?", "Evidence and administration limitations make it an adjunct considered with toxicology. Sedation, cooling, fluid and airway management remain the actions that control immediate physiology.", "Supportive care remains the immediate priority even if an antagonist is considered.", "Severe toxicity is receiving multi-part treatment.", "Use the next trend to judge whether control has been achieved."),
    buildHint39("c039-hint-23", "run", "c039-run-response", "Clonus is now inducible", ["austin-serotonin-2024", "rch-serotonin-2021"], "Checking whether treatment is working", "What shows real improvement?", "Asha is calm and follows instructions, temperature and pulse fall, sustained clonus becomes inducible, urine remains preserved and pH normalises. The neurological signs, temperature, circulation and acid-base state are all improving.", "Several findings are improving together, but the recent severe features still matter.", "Treatment has controlled the immediate escalation.", "Continue monitoring for recurrence and delayed complications."),
    buildHint39("c039-hint-24", "run", "c039-run-ongoing-care", "serial renal function", ["austin-serotonin-2024", "rch-serotonin-2021"], "Monitoring beyond visible calm", "Why continue CK and renal checks?", "Earlier hyperthermia and rigidity can continue to produce muscle breakdown, electrolyte change and kidney injury after behaviour improves.", "Clinical calm does not erase recent organ stress.", "Critical-care admission remains appropriate.", "Turn to Asha and explain the interaction without blame."),
    buildHint39("c039-hint-25", "run", "c039-run-explanation-prompt", "explain the assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Changing audience", "What should Asha hear first?", "Explain that two prescribed medicines increased the same chemical activity, linking that to her symptoms, then state what was stopped, how the muscles and heat were treated and why monitoring continues.", "Use a causal chain, not a list of criteria.", "Asha is improving but still needs close care.", "Answer blame and paracetamol directly."),
    buildHint39("c039-hint-26", "run", "c039-run-explanation", "overactive reflexes and rhythmic ankle movements", ["acsqhc-communication-2026", "austin-serotonin-2024"], "Translating the examination", "Why mention reflexes and ankle movement?", "They show why the diagnosis is more than a medicine guess and help Asha understand the focused examination. Keep the explanation brief and link it to treatment.", "One or two specific signs build trust.", "The medicine interaction and current improvement have been explained.", "Now address why prescribed doses can still interact."),
    buildHint39("c039-hint-27", "run", "c039-run-concern", "Did I do something wrong", ["acsqhc-communication-2026", "acsqhc-medication-2026"], "Removing blame", "What is the accurate answer?", "She reports taking the prescribed doses. Describe this as an unintended interaction, document it and review the prescribing system rather than suggesting personal fault.", "Medication safety includes system learning.", "Asha also asks why a familiar fever medicine is not enough.", "Explain the source of heat in plain language."),
    buildHint39("c039-hint-28", "run", "c039-run-concern-response", "muscle activity generated heat", ["austin-serotonin-2024", "acsqhc-communication-2026"], "Making the mechanism memorable", "Why will this distinction matter in another patient?", "It separates infection-style fever from toxic heat production. When muscle activity creates heat, reducing movement and actively cooling are more effective than resetting a thermostat that was never raised.", "The treatment follows the source of the heat.", "Asha understands the interaction and why cooling and sedation were used.", "Give a medicine-restart and recurrence plan, then check understanding."),
    buildHint39("c039-hint-29", "run", "c039-run-teachback-answer", "will not restart either", ["acsqhc-communication-2026", "acsqhc-medication-2026"], "Confirming medicine safety", "What has Asha retained?", "She understands the interaction, will wait for clinical review before restarting and will check future medicines for interactions. Reinforce written documentation and follow-up.", "Teach-back confirms action, not memorised terminology.", "The explanation and prevention plan are complete.", "Move to the final critical-care handover."),
    buildHint39("c039-hint-30", "run", "c039-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "Which sequence shows diagnosis and severity?", "Give the two medicines and timing, onset, clonus-based examination, initial temperature and circulation, worsening rigidity, temperature, pH and CK, treatments, response and current complication monitoring.", "End with the threshold for airway and paralysis if severe features recur.", "The final minute transfers exposure, pattern, trend and current risk.", "Keep the current response distinct from the earlier peak severity."),
    buildHint39("c039-hint-31", "run", "c039-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I add another differential now?", "No. The examiner has ended the station and the diagnostic pattern, alternatives and escalation conditions were already handed over.", "Finish on the instruction.", "Case 39 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtyNine.essentialHintIds = [
    "c039-hint-02", "c039-hint-04", "c039-hint-05", "c039-hint-06", "c039-hint-07",
    "c039-hint-11", "c039-hint-13", "c039-hint-14", "c039-hint-15", "c039-hint-18",
    "c039-hint-20", "c039-hint-21", "c039-hint-23", "c039-hint-30", "c039-hint-31"
  ];
  var clockByHint39 = {
    "c039-hint-04": "Minutes 0 to 2: reconstruct every medicine and substance, recent change, exact dose and time while checking current physiology.",
    "c039-hint-14": "By minute 4: the exposure and focused examination now form a supported pattern. Act on it.",
    "c039-hint-20": "Rising temperature, rigidity and acidosis interrupt all planned communication. Escalate sedation, cooling and airway readiness now.",
    "c039-hint-25": "By minute 7: explain the interaction, treatment mechanism, improvement and continued monitoring without blame.",
    "c039-hint-30": "Final minute: transfer exposure, diagnostic signs, peak severity, treatment response and recurrence threshold."
  };
  var deeperByHint39 = {
    "c039-hint-11": ["Sertraline reduces serotonin reuptake. Tramadol also has serotonergic activity in addition to opioid effects, so combined use can raise synaptic serotonin enough to produce toxicity even at prescribed doses."],
    "c039-hint-13": ["Excess serotonin in spinal motor pathways increases reflex activity and produces clonus. This makes lower-limb hyperreflexia and clonus more discriminating than agitation or fever alone."],
    "c039-hint-21": ["In infectious fever, the hypothalamic set-point rises and antipyretics can lower it. Here muscle contraction generates heat despite a normal set-point, so reducing muscle activity and removing heat are central."],
    "c039-hint-22": ["Cyproheptadine blocks serotonin receptors but is available enterally and does not replace rapid control of hyperthermia, agitation or ventilation. Its use therefore depends on severity, route safety and toxicology advice."],
    "c039-hint-24": ["Sustained contraction consumes ATP and injures muscle membranes, releasing CK, potassium and myoglobin. Myoglobin and dehydration can then contribute to acute kidney injury."]
  };
  caseThirtyNine.hints.forEach(function (hint) {
    if (clockByHint39[hint.id]) hint.clock = clockByHint39[hint.id];
    if (deeperByHint39[hint.id]) hint.deeper = deeperByHint39[hint.id];
  });
})();
