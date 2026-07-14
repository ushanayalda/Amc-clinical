(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-038",
    globalId: "CP-C038",
    registryId: "CP-P12-C003",
    displayNumber: "Case 38",
    title: "Confusion beside an empty medicine packet",
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
})();
