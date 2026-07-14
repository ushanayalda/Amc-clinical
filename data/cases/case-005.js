(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-005",
    globalId: "CP-C005",
    registryId: "CP-P2-C001",
    displayNumber: "Case 5",
    title: "Worsening breathlessness despite reliever use",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 2, title: "Acute Shortness of Breath" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c005-stem-role",
          text: "You are a doctor working in a metropolitan emergency department."
        },
        {
          id: "c005-stem-patient",
          text: "Ms Sophie Nguyen, a 27-year-old woman with asthma, presents with worsening breathlessness and wheeze over six hours despite repeated use of her reliever inhaler."
        },
        {
          id: "c005-stem-start",
          text: "She is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        },
        {
          id: "c005-stem-simulation",
          text: "State your assessments and actions to the examiner. Findings will be provided when requested."
        }
      ],
      tasks: [
        {
          id: "c005-task-assess",
          text: "Assess and manage the patient.",
          timing: "5 minutes"
        },
        {
          id: "c005-task-explain",
          text: "Explain your assessment and management plan to the patient.",
          timing: "2 minutes"
        },
        {
          id: "c005-task-examiner",
          text: "State the severity, important alternative diagnoses and further management to the examiner.",
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
        title: "Acute management of anaphylaxis guidelines",
        date: "Updated July 2026",
        url: "https://www.allergy.org.au/hp/anaphylaxis/acute-management-guidelines"
      }
    ]
  });

  var caseFive = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-005"; });

  caseFive.masteryFocus = {
    case: "Recognise life-threatening asthma from Sophie's function and physiology, treat while assessing, and recognise that a quieter chest can mean exhaustion rather than recovery.",
    clinical: "Across breathing emergencies, sound means little without airflow. Read speech, air entry, effort, oxygenation and alertness together, then judge every apparent improvement against the whole patient.",
    tasks: [
      "Assess and manage",
      "Explain assessment and management",
      "State severity, alternatives and management"
    ],
    transfer: "If Sophie's wheeze became quieter but her speech, air entry and alertness all improved, how would you decide whether this was recovery rather than exhaustion?",
    transferAnswer: "A quieter wheeze supports recovery only when the rest of the patient is improving with it. Longer speech, stronger air entry, less work of breathing, improving alertness and objective improvement in oxygenation or peak flow distinguish recovery from a dangerously quiet, tiring chest.",
    transferChecks: [
      "Speech and conscious state",
      "Air entry and work of breathing",
      "Respiratory rate and oxygenation trend",
      "Peak flow or blood gas when appropriate"
    ],
    transferCitationIds: ["nac-severity-2025", "nac-acute-asthma-2025"]
  };

  caseFive.sources = [
    {
      id: "healthdirect-breath-2025",
      title: "Shortness of breath",
      organisation: "Healthdirect Australia",
      date: "Last reviewed June 2025",
      url: "https://www.healthdirect.gov.au/shortness-of-breath"
    },
    {
      id: "nac-acute-asthma-2025",
      title: "Managing acute asthma in adults and adolescents in the emergency department",
      organisation: "National Asthma Council Australia",
      date: "Australian Asthma Handbook version 3.0, 2025",
      url: "https://www.asthmahandbook.org.au/acute-asthma/adults-and-adolescents/managing-acute-asthma-in-adults-and-adolescents-in-the-ed"
    },
    {
      id: "nac-immediate-treatment-2025",
      title: "Immediate treatment for acute asthma in adults and adolescents",
      organisation: "National Asthma Council Australia",
      date: "Australian Asthma Handbook version 3.0, 2025",
      url: "https://www.asthmahandbook.org.au/pdf/6063"
    },
    {
      id: "nac-severity-2025",
      title: "Secondary severity assessment for acute asthma in adults and adolescents",
      organisation: "National Asthma Council Australia",
      date: "Australian Asthma Handbook version 3.0, 2025",
      url: "https://www.asthmahandbook.org.au/pdf/6069"
    },
    {
      id: "anzcor-asthma-2023",
      title: "Guideline 9.2.5: First Aid for Asthma",
      organisation: "Australian and New Zealand Committee on Resuscitation",
      date: "Approved July 2023; accessed July 2026",
      url: "https://www.anzcor.org/home/first-aid/guideline-9-2-5-first-aid-for-asthma"
    },
    {
      id: "ascia-anaphylaxis-2024",
      title: "Acute management of anaphylaxis guidelines",
      organisation: "Australasian Society of Clinical Immunology and Allergy",
      date: "Updated July 2026",
      url: "https://www.allergy.org.au/hp/anaphylaxis/acute-management-guidelines"
    },
    {
      id: "amc-spec-2026",
      title: "Clinical Examination Specifications V8.3",
      organisation: "Australian Medical Council",
      date: "June 2026",
      url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf"
    },
    {
      id: "amc-tips-2024",
      title: "Tips from Examiners V1.1",
      organisation: "Australian Medical Council",
      date: "October 2024",
      url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf"
    }
  ];

  caseFive.reasoningCompass = {
    stem: {
      title: "Keep the three task verbs",
      steps: [
        { time: "First pass", text: "Read only what the stem gives you. Do not borrow findings from a remembered asthma case." },
        { time: "Second pass", text: "Separate the three jobs: assess and manage, explain to Sophie, then speak to the examiner." },
        { time: "Before starting", text: "Give the first job five minutes, the explanation two minutes and the examiner summary one minute. Danger can interrupt any plan." }
      ],
      anchor: "Assessment and treatment 0 to 5 | Patient explanation 5 to 7 | Severity, alternatives and escalation 7 to 8"
    },
    run: {
      title: "Return to the unfinished task",
      steps: [
        { time: "0 to 5 minutes", text: "Assess and manage together. Reassess after each change and let danger interrupt the history." },
        { time: "5 to 7 minutes", text: "Explain the findings, current treatment and possible escalation to Sophie in short sentences." },
        { time: "7 to 8 minutes", text: "State severity, important alternatives, further management and disposition to the examiner." }
      ],
      anchor: "After any interruption, return to the task that the examiner actually asked you to complete."
    }
  };

  function c005Hint(id, surface, itemId, quote, citationIds, where, popUp, say, options) {
    var hint = {
      id: "c005-v2-" + id,
      target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 },
      citationIds: citationIds,
      where: where,
      popUp: popUp,
      say: Array.isArray(say) ? say : [say]
    };
    Object.keys(options || {}).forEach(function (key) { hint[key] = options[key]; });
    return hint;
  }

  caseFive.hints = [
    c005Hint("worsening-pattern", "stem", "c005-stem-patient", "worsening breathlessness and wheeze", ["nac-acute-asthma-2025", "healthdirect-breath-2025"], "Current symptoms", "Breathlessness and wheeze are getting worse.", "Now the airways are the likely source of the breathlessness. Wheeze means air is moving through narrowed airways; it does not tell me why. Asthma is likely, but allergy or obstruction can also wheeze. Keep the cause provisional until the next clues arrive.", {
      deeper: ["Airway narrowing makes exhalation especially difficult. Air becomes trapped, the next breath starts before the lungs have emptied, and the work of breathing rises."]
    }),
    c005Hint("six-hours", "stem", "c005-stem-patient", "over six hours", ["nac-acute-asthma-2025"], "Time course", "Six hours and still progressing.", "This has not behaved like a brief episode that settled. I want to know whether her reliever helped, for how long and how much she used."),
    c005Hint("reliever-failure", "stem", "c005-stem-patient", "despite repeated use of her reliever inhaler", ["nac-acute-asthma-2025", "anzcor-asthma-2023"], "Reliever response", "The reliever has not given lasting relief.", "Repeated reliever use without lasting relief makes this urgent. The obstruction may be severe, the inhaler may not be reaching enough airway, inflammation may still be building, or this may not be asthma alone. First decide how unwell she is."),
    c005Hint("awake", "stem", "c005-stem-start", "awake and able to answer questions", ["nac-severity-2025"], "What is known so far", "Awake helps. It does not grade severity.", "She can engage, which helps communication. I still need to hear how many words she can manage in one breath and assess effort, air entry, oxygenation and alertness together."),
    c005Hint("task-assess", "stem", "c005-task-assess", "Assess and manage the patient", ["amc-spec-2026", "amc-tips-2024"], "Task one", "Assess and manage belong together.", "Five minutes. Assess ABC and severity while treatment starts, then reassess. Take only history that changes immediate care. If danger interrupts, stabilise Sophie and then return to this unfinished task.", {
      clock: "0 to 5 minutes: assess, treat and reassess."
    }),
    c005Hint("task-explain", "stem", "c005-task-explain", "assessment and management plan to the patient", ["amc-spec-2026", "amc-tips-2024"], "Task two", "Then turn the medicine into an explanation.", "Two minutes with Sophie: what I found, what it means, what we are doing now and what might make the plan escalate. Short sentences; her breathing sets the pace.", {
      clock: "5 to 7 minutes: explain the assessment and plan."
    }),
    c005Hint("task-examiner", "stem", "c005-task-examiner", "severity, important alternative diagnoses and further management to the examiner", ["amc-spec-2026", "amc-tips-2024"], "Task three", "The final minute changes audience.", "To the examiner: severity first, then dangerous alternatives linked to evidence, followed by further treatment, investigations, escalation and disposition. This is a summary, not a repeat of the patient explanation.", {
      clock: "7 to 8 minutes: severity, alternatives and further management."
    }),
    c005Hint("speech", "run", "c005-run-name", "Cannot... breathe", ["nac-severity-2025", "nac-acute-asthma-2025"], "Sophie's first words", "Only fragments. That is already a severity sign.", "She has enough airflow to speak, but not enough reserve for a normal conversation. Shorten every question and assess while treatment starts; a long history would spend breath she needs."),
    c005Hint("poor-air-entry", "run", "c005-run-primary-findings", "markedly reduced air entry on both sides", ["nac-acute-asthma-2025", "nac-severity-2025"], "First findings", "The chest is noisy, but the air entry is poor.", "These are life-threatening features: two-to-three-word speech, accessory-muscle use, oxygen saturation 89% and markedly reduced bilateral air entry. With her asthma history and bilateral wheeze, acute asthma is the working diagnosis. Treat it now while checking alternatives that would change immediate treatment.", {
      deeper: ["Smooth-muscle contraction, airway-wall swelling and mucus narrow many bronchi. Resistance rises sharply, especially during exhalation, so air becomes trapped, breathing work rises and oxygen falls."]
    }),
    c005Hint("oxygen-bronchodilators", "run", "c005-run-severity", "reassess after each treatment", ["nac-immediate-treatment-2025", "nac-acute-asthma-2025"], "Immediate treatment", "She is hypoxaemic and moving very little air. Treat both now.", "Titrate oxygen to 92% to 96%. Salbutamol relaxes bronchial smooth muscle; ipratropium adds bronchodilation in severe attacks. Keep treating and reassessing without waiting for tests."),
    c005Hint("steroid-tests", "run", "c005-run-access-steroid", "do not delay treatment for tests", ["nac-immediate-treatment-2025", "nac-acute-asthma-2025"], "Steroid and tests", "The steroid matters, but it will not open the airways immediately.", "Bronchodilators act on airway narrowing now. The corticosteroid treats airway inflammation, so the benefit comes later. Blood gas and electrolytes answer safety questions, but neither should interrupt bronchodilation or airway preparation."),
    c005Hint("brief-relief", "run", "c005-run-onset-answer", "Helped for minutes.", ["nac-acute-asthma-2025", "anzcor-asthma-2023"], "Home reliever response", "The reliever helped, but only for minutes.", "A few minutes of relief tells me the airways can respond, but the benefit has not held. Continue supervised bronchodilators. Now ask about previous intensive-care treatment, intubation, recent steroids and regular preventer use because they change risk."),
    c005Hint("previous-admission", "run", "c005-run-risk-answer", "no breathing tube", ["nac-acute-asthma-2025", "nac-severity-2025"], "Previous severity", "No previous intensive care or breathing tube is useful history, but it does not make today safer.", "A previous intensive-care admission or intubation would increase future risk. She has neither, but her current speech, air entry, oxygenation and alertness still make this an emergency."),
    c005Hint("preventer-gap", "run", "c005-run-preventer-answer", "Ran out... five days ago", ["nac-acute-asthma-2025", "nac-immediate-treatment-2025"], "Missed preventer", "Running out of preventer may have contributed. No blame.", "Five days without inhaled anti-inflammatory treatment may have reduced her protection before the dust exposure. It helps explain why this happened, but it does not change the immediate treatment. Sort out access and prevention after she is safe."),
    c005Hint("anaphylaxis", "run", "c005-run-anaphylaxis", "vomiting or faintness", ["ascia-anaphylaxis-2024", "nac-acute-asthma-2025"], "Anaphylaxis check", "Asthma leads, but anaphylaxis would change the first medicine.", "Sudden wheeze after a likely food, medicine or insect allergen can be anaphylaxis, even without hives. If that exposure fits, adrenaline comes before further asthma treatment. This brief question set checks for the alternative that changes the first drug."),
    c005Hint("danger-differentials", "run", "c005-run-alternatives", "or ankle swelling", ["nac-acute-asthma-2025", "healthdirect-breath-2025"], "Dangerous alternatives", "This is a short danger check, not a giant differential.", "One-sided pain raises pneumothorax; haemoptysis or calf symptoms raise pulmonary embolism; fever suggests infection; choking suggests obstruction; orthopnoea or oedema suggests heart failure. Each question can change immediate management."),
    c005Hint("quiet-deterioration", "run", "c005-run-deterioration", "pulse is 134 beats per minute", ["nac-severity-2025", "nac-acute-asthma-2025"], "Deterioration", "The wheeze is quieter, but Sophie looks worse.", "She is drowsy, speaking one word, with barely audible air entry and persistent hypoxaemia. Less wheeze now means too little air is moving to make sound. The slower respiratory rate is exhaustion, not recovery. This is impending respiratory arrest.", {
      clock: "Danger interrupts the history: repeat ABC and escalate now.",
      deeper: ["Wheeze is vibration created by moving air. As airflow approaches zero, the chest can become quieter even while obstruction and fatigue are worsening."]
    }),
    c005Hint("airway-preparation", "run", "c005-run-interpret-deterioration", "prepare for a difficult high-risk intubation", ["nac-acute-asthma-2025", "nac-severity-2025"], "Airway escalation", "Do not wait for the gas to confirm what Sophie is showing.", "Minimal airflow, falling alertness and exhaustion already justify expert airway preparation. Continue maximal asthma treatment while intensive care and senior anaesthesia prepare; severe obstruction also makes ventilation after intubation difficult."),
    c005Hint("magnesium", "run", "c005-run-magnesium", "intravenous magnesium sulfate", ["nac-immediate-treatment-2025", "nac-acute-asthma-2025"], "Magnesium", "Magnesium is an add-on, not the rescue plan by itself.", "It can add bronchodilation when severe asthma responds poorly to initial treatment. It never replaces oxygen, inhaled bronchodilators, corticosteroid or airway preparation."),
    c005Hint("carbon-dioxide", "run", "c005-run-gas", "carbon dioxide 7.1 kilopascals", ["nac-severity-2025", "nac-acute-asthma-2025"], "Blood gas", "The carbon dioxide is high. In this setting, that is dangerous.", "Early in acute asthma, fast breathing often lowers carbon dioxide. A value of 7.1 kilopascals with pH 7.31 means Sophie is no longer ventilating enough to clear it. With her drowsiness, this confirms hypercapnic ventilatory failure.", {
      deeper: ["Severe narrowing reduces effective alveolar ventilation: less fresh gas reaches functioning alveoli, carbon dioxide clearance falls, carbon dioxide accumulates and pH drops."]
    }),
    c005Hint("niv", "run", "c005-run-gas-interpretation", "immediate and sustained", ["nac-acute-asthma-2025", "nac-severity-2025"], "Breathing support", "A mask is less invasive, but not safer here.", "Sophie is drowsy, cannot protect her airway reliably and is failing to ventilate. Sedation to make her tolerate a mask would weaken that airway protection further. Intubation remains safer unless improvement becomes immediate and sustained."),
    c005Hint("partial-response", "run", "c005-run-response", "speak only short phrases", ["nac-severity-2025", "nac-acute-asthma-2025"], "Reassessment", "One number improved. Sophie has not fully recovered.", "Oxygen saturation is 94% and alertness improved, but air entry remains reduced and speech is still short. This is a partial response. Intubation may be deferred only while improvement continues under critical-care observation.", {
      clock: "After the interruption, reassess the whole patient before changing tasks."
    }),
    c005Hint("five-minute-switch", "run", "c005-run-time", "immediate plan to the patient", ["amc-spec-2026", "amc-tips-2024"], "Task change", "Five minutes. Keep the treatment running and move to Sophie's explanation.", "Stop adding history. Explain what happened, what has improved, what remains dangerous and why a breathing tube may still be needed while treatment and monitoring continue.", {
      clock: "5 to 7 minutes: explain the assessment and immediate plan."
    }),
    c005Hint("explain-exhaustion", "run", "c005-run-explanation", "became tired from the effort of breathing", ["nac-acute-asthma-2025", "amc-tips-2024"], "Explaining exhaustion", "Explain the mechanism without giving Sophie a lecture.", "Her airways became so narrow that every breath required more work. Her breathing muscles tired and carbon dioxide accumulated."),
    c005Hint("quiet-mechanism", "run", "c005-run-quiet-answer", "too little air was moving to make a wheeze", ["nac-severity-2025", "nac-acute-asthma-2025"], "Quiet chest", "Remember this one: wheeze needs airflow.", "Narrow airways with some flow can whistle; almost no flow may sound quiet. A quieter chest is improvement only when speech, air entry, effort, alertness and gas exchange improve with it.", {
      logic: ["less airflow", "less sound", "possible exhaustion"]
    }),
    c005Hint("conditional-intubation", "run", "c005-run-tube-answer", "explain each step", ["nac-acute-asthma-2025", "amc-tips-2024"], "Breathing-tube discussion", "I cannot promise that she will or will not need intubation.", "Continued improvement may let us defer intubation. If drowsiness returns, air entry worsens, or oxygen and carbon dioxide deteriorate, intubation becomes safer than waiting. Tell Sophie that the experienced teams are ready and will keep explaining what is happening."),
    c005Hint("one-minute-switch", "run", "c005-run-examiner-prompt", "further escalation plan", ["amc-spec-2026", "amc-tips-2024"], "Examiner task", "One minute. Give the examiner the summary that was requested.", "Severity and respiratory failure first. Then the alternatives that would change treatment, the evidence for and against them, followed by ongoing treatment, targeted investigations, the airway threshold and intensive-care disposition.", {
      clock: "7 to 8 minutes: severity, alternatives and further management."
    }),
    c005Hint("earn-diagnosis", "run", "c005-run-examiner-plan", "Current bilateral wheeze, trigger and history support asthma", ["nac-acute-asthma-2025", "ascia-anaphylaxis-2024"], "Why asthma now leads", "Now I can explain why asthma leads.", "The bilateral pattern, dust trigger, established history and partial bronchodilator response fit asthma. Link each serious alternative to the features you checked rather than reciting an unexplained list."),
    c005Hint("chest-xray", "run", "c005-run-examiner-plan", "without delaying bronchodilation or airway management", ["nac-acute-asthma-2025", "nac-severity-2025"], "Why order the X-ray", "The chest X-ray is looking for a complication or another cause.", "It is not needed to prove asthma. It can look for pneumothorax, consolidation or heart failure, and it comes only after immediate treatment is underway."),
    c005Hint("station-end", "run", "c005-run-end", "The station is complete", ["amc-tips-2024", "nac-severity-2025"], "End of station", "Stop. Leave Sophie's case here.", "Take one point with you: a quieter chest is reassuring only when airflow and the patient improve together. Begin the next stem from its own evidence.", {
      clock: "Station closed: one breath, then release this case."
    })
  ];

  caseFive.essentialHintIds = [
    "c005-v2-worsening-pattern",
    "c005-v2-reliever-failure",
    "c005-v2-task-assess",
    "c005-v2-task-explain",
    "c005-v2-task-examiner",
    "c005-v2-poor-air-entry",
    "c005-v2-oxygen-bronchodilators",
    "c005-v2-quiet-deterioration",
    "c005-v2-airway-preparation",
    "c005-v2-carbon-dioxide",
    "c005-v2-niv",
    "c005-v2-partial-response",
    "c005-v2-five-minute-switch",
    "c005-v2-quiet-mechanism",
    "c005-v2-one-minute-switch",
    "c005-v2-station-end"
  ];
})();
