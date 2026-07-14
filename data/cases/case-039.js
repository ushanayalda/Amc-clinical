(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-039",
    globalId: "CP-C039",
    registryId: "CP-P12-C004",
    displayNumber: "Case 39",
    title: "Agitation, sweating and shaking",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
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
        date: "Version 3, published March 2023; review March 2026; current online guideline accessed July 2026",
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
})();
