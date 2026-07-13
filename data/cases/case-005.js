(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-005",
    globalId: "CP-C005",
    registryId: "CP-P2-C001",
    displayNumber: "Case 5",
    title: "Worsening breathlessness despite reliever use",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 2, title: "Acute Shortness of Breath" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Emergency medicine"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c005-stem-role",
          text: "You are a doctor working in the resuscitation area of a metropolitan emergency department."
        },
        {
          id: "c005-stem-patient",
          text: "Ms Sophie Nguyen, a 27-year-old woman with asthma, has been brought directly from triage because of worsening breathlessness and wheeze over six hours despite repeated use of her reliever inhaler."
        },
        {
          id: "c005-stem-start",
          text: "She is sitting upright and can answer briefly. No treatment has been given in the emergency department."
        },
        {
          id: "c005-stem-simulation",
          text: "State your assessments and actions to the examiner. Findings will be provided when requested."
        }
      ],
      tasks: [
        {
          id: "c005-task-assess",
          text: "Assess the patient and initiate immediate management.",
          timing: "5 minutes"
        },
        {
          id: "c005-task-explain",
          text: "Explain your assessment and immediate plan to the patient.",
          timing: "2 minutes"
        },
        {
          id: "c005-task-examiner",
          text: "State the severity, important alternative diagnoses and further escalation plan to the examiner.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c005-run-opening",
          heading: "Immediate assessment and treatment",
          turns: [
            {
              id: "c005-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c005-run-start", text: "You may begin." }]
            },
            {
              id: "c005-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c005-run-first-action", text: "The doctor performs hand hygiene, calls for senior emergency and resuscitation support, asks for the airway trolley and approaches the patient while a nurse attaches monitoring." }]
            },
            {
              id: "c005-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-intro", text: "Hello, I am Ushana, one of the emergency doctors. We are treating your breathing now. Tell me your name if you can." }]
            },
            {
              id: "c005-turn-name",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-name", text: "Sophie... Nguyen. Cannot... breathe." }]
            },
            {
              id: "c005-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-primary", text: "She can speak, so her airway is patent for now. Sit her upright. I assess her respiratory effort, speech, chest movement and bilateral air entry, then circulation, conscious state and temperature. Attach continuous oxygen-saturation and cardiac monitoring, cycle her blood pressure and provide the findings." }]
            },
            {
              id: "c005-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c005-run-primary-findings", text: "Sophie is alert but frightened and speaks two or three words at a time. She is using accessory muscles. Respiratory rate is 34 breaths per minute, oxygen saturation is 89% on room air, pulse is 126 beats per minute, blood pressure is 136/82 mmHg and temperature is 37.2 degrees Celsius. Chest movement is symmetrical, with widespread wheeze and markedly reduced air entry on both sides. There is no stridor, facial swelling, rash, focal crackles or unilateral loss of breath sounds. She cannot perform peak flow safely." }]
            },
            {
              id: "c005-turn-severity",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-severity", text: "This is life-threatening acute asthma because she is hypoxaemic, cannot complete sentences and has very poor air entry. Start oxygen and titrate it to an oxygen saturation of 92% to 96%. Begin continuous oxygen-driven nebulisation with salbutamol 10 milligrams and add ipratropium 500 micrograms. Continue cardiac and oxygen-saturation monitoring and reassess after each treatment." }]
            },
            {
              id: "c005-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c005-run-treatment-action", text: "Oxygen and continuous nebulised bronchodilator treatment begin while the resuscitation team remains at the bedside." }]
            },
            {
              id: "c005-turn-allergy",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-allergy", text: "Sophie, do you have any serious medicine allergies?" }]
            },
            {
              id: "c005-turn-allergy-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-allergy-answer", text: "No." }]
            },
            {
              id: "c005-turn-access-steroid",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-access-steroid", text: "Insert intravenous access. If she can swallow safely, give oral prednisolone 50 milligrams now. If she cannot, give an intravenous corticosteroid according to local protocol. Send electrolytes, glucose, full blood count and a blood gas, but do not delay treatment for tests." }]
            },
            {
              id: "c005-turn-brief-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-brief-explanation", text: "Sophie, your asthma is severely narrowing the airways and your oxygen is low. The mask is delivering medicines to open the airways. We are also giving oxygen and a steroid, and the senior team is here with us." }]
            },
            {
              id: "c005-turn-acknowledge",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-acknowledge", text: "Okay." }]
            }
          ]
        },
        {
          id: "c005-run-focused-history",
          heading: "Focused history during treatment",
          turns: [
            {
              id: "c005-turn-onset",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-onset", text: "While treatment continues, when did this begin, and how much reliever have you used?" }]
            },
            {
              id: "c005-turn-onset-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-onset-answer", text: "Dusty storeroom... six hours ago. Twelve puffs... with spacer. Helped for minutes." }]
            },
            {
              id: "c005-turn-risk-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-risk-history", text: "Have you ever needed intensive care or a breathing tube for asthma? Any hospital treatment or steroid tablets recently?" }]
            },
            {
              id: "c005-turn-risk-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-risk-answer", text: "Hospital last year. Not intensive care... no breathing tube. No recent steroids." }]
            },
            {
              id: "c005-turn-preventer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-preventer", text: "Which regular inhaler do you use, and have you missed any doses?" }]
            },
            {
              id: "c005-turn-preventer-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-preventer-answer", text: "Budesonide-formoterol... morning and night. Ran out... five days ago." }]
            },
            {
              id: "c005-turn-anaphylaxis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-anaphylaxis", text: "Did this follow food, a medicine or an insect sting? Any hives, swelling, throat tightness, vomiting or faintness?" }]
            },
            {
              id: "c005-turn-anaphylaxis-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-anaphylaxis-answer", text: "No." }]
            },
            {
              id: "c005-turn-alternatives",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-alternatives", text: "Any sudden one-sided chest pain, coughing blood, calf pain or swelling, fever, choking, needing extra pillows, or ankle swelling?" }]
            },
            {
              id: "c005-turn-alternatives-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-alternatives-answer", text: "No. Tight... all across." }]
            },
            {
              id: "c005-turn-medicines",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-medicines", text: "Any aspirin or anti-inflammatory painkiller reaction, beta-blocker medicine, smoking or vaping? Could you be pregnant?" }]
            },
            {
              id: "c005-turn-medicines-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-medicines-answer", text: "No to all of those." }]
            }
          ]
        },
        {
          id: "c005-run-deterioration",
          heading: "Deterioration and escalation",
          turns: [
            {
              id: "c005-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c005-run-deterioration", text: "Four minutes have elapsed. Despite the initial treatment, Sophie is becoming drowsy and can speak only one word at a time. Her wheeze is now much quieter, air entry is barely audible, respiratory rate is 26 breaths per minute, oxygen saturation is 90% despite oxygen, and pulse is 134 beats per minute." }]
            },
            {
              id: "c005-turn-interpret-deterioration",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-interpret-deterioration", text: "The quieter wheeze and slower respiratory rate are not improvement. She has minimal airflow and is exhausting. Call intensive care and the senior anaesthetist immediately, and prepare for a difficult high-risk intubation by the most experienced available clinician. Continue oxygen-driven salbutamol and repeat ipratropium every 20 minutes during the first hour." }]
            },
            {
              id: "c005-turn-magnesium",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-magnesium", text: "Give intravenous magnesium sulfate 0.2 millimoles per kilogram, to a maximum of 10 millimoles, diluted and infused over 20 minutes. Repeat the ABC assessment and obtain an urgent blood gas without delaying airway preparation." }]
            },
            {
              id: "c005-turn-gas",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c005-run-gas", text: "Arterial blood gas shows pH 7.31, carbon dioxide 7.1 kilopascals and persistent hypoxaemia." }]
            },
            {
              id: "c005-turn-gas-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-gas-interpretation", text: "The raised carbon dioxide and acidaemia confirm ventilatory failure. Non-invasive ventilation is unsuitable while her consciousness, airway protection and ventilation are impaired. I will not sedate her to make it work. The senior airway team should proceed to intubation unless her response to the current treatment is immediate and sustained." }]
            },
            {
              id: "c005-turn-response",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c005-run-response", text: "With continuous treatment and the critical-care teams present, Sophie becomes more alert. Oxygen saturation rises to 94%, but air entry remains reduced and she can speak only short phrases." }]
            },
            {
              id: "c005-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c005-run-time", text: "Five minutes have elapsed. Please explain your assessment and immediate plan to the patient." }]
            }
          ]
        },
        {
          id: "c005-run-patient-explanation",
          heading: "Patient explanation",
          turns: [
            {
              id: "c005-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-explanation", text: "Sophie, this is a life-threatening asthma attack. The airways in both lungs are extremely narrow, and you became tired from the effort of breathing. Your oxygen has improved a little, but you still need continuous treatment and intensive-care monitoring." }]
            },
            {
              id: "c005-turn-quiet-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-quiet-question", text: "The wheeze became quieter. Was that not better?" }]
            },
            {
              id: "c005-turn-quiet-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-quiet-answer", text: "Not in this situation. It became quiet because too little air was moving to make a wheeze. Your drowsiness and carbon dioxide level also showed exhaustion. That is why we escalated immediately." }]
            },
            {
              id: "c005-turn-tube-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-tube-question", text: "Will I need a breathing tube?" }]
            },
            {
              id: "c005-turn-tube-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-tube-answer", text: "The intensive-care and anaesthetic teams are ready. If you keep improving, we may avoid it. If you become more tired or your oxygen and carbon dioxide worsen, a breathing tube will be the safest way to support you. We will stay with you and explain each step." }]
            },
            {
              id: "c005-turn-confirm-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-confirm-plan", text: "Are you clear that you still need intensive-care treatment now?" }]
            },
            {
              id: "c005-turn-confirm-plan-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c005-run-confirm-plan-answer", text: "Yes." }]
            },
            {
              id: "c005-turn-examiner-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c005-run-examiner-prompt", text: "One minute remains. State the severity, important alternative diagnoses and further escalation plan." }]
            }
          ]
        },
        {
          id: "c005-run-examiner-plan",
          heading: "Examiner summary",
          turns: [
            {
              id: "c005-turn-examiner-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c005-run-examiner-plan", text: "This is life-threatening acute asthma with exhaustion and hypercapnic respiratory failure. Immediate alternatives include anaphylaxis, pneumothorax, pulmonary embolism, pneumonia, foreign-body obstruction and acute heart failure. Current bilateral wheeze, trigger and history support asthma, without focal chest signs, allergy features or circulatory collapse, but I will reassess continuously. Continue bronchodilators, titrated oxygen, systemic corticosteroid and magnesium, with ECG, electrolytes, glucose and repeat blood gases. Obtain a portable chest X-ray after immediate treatment and stabilisation to assess for pneumothorax, consolidation or cardiac failure, without delaying bronchodilation or airway management. Adrenaline is not routine asthma treatment but must be given promptly if anaphylaxis emerges. She needs intensive-care admission and intubation by an experienced clinician unless improvement is immediate and sustained." }]
            },
            {
              id: "c005-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c005-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "National Asthma Council Australia",
        title: "Australian Asthma Handbook: Managing acute asthma in adults and adolescents in the emergency department",
        date: "Version 3.0, 2025",
        url: "https://www.asthmahandbook.org.au/acute-asthma/adults-and-adolescents/managing-acute-asthma-in-adults-and-adolescents-in-the-ed"
      },
      {
        organisation: "National Asthma Council Australia",
        title: "Immediate treatment for acute asthma in adults and adolescents",
        date: "Version 3.0, 2025",
        url: "https://www.asthmahandbook.org.au/pdf/6063"
      },
      {
        organisation: "National Asthma Council Australia",
        title: "Secondary severity assessment for acute asthma in adults and adolescents",
        date: "Version 3.0, 2025",
        url: "https://www.asthmahandbook.org.au/pdf/6069"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.5: First aid for asthma",
        date: "Approved July 2023",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-5-first-aid-for-asthma"
      },
      {
        organisation: "Australasian Society of Clinical Immunology and Allergy",
        title: "Acute management of anaphylaxis",
        date: "2024",
        url: "https://allergy.org.au/hp/papers/acute-management-of-anaphylaxis-guidelines"
      }
    ]
  });
})();
