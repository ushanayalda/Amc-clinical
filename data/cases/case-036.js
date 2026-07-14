(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-036",
    globalId: "CP-C036",
    registryId: "CP-P12-C001",
    displayNumber: "Case 36",
    title: "Drowsiness and slow breathing",
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
})();
