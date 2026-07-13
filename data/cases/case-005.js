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
        title: "Acute management of anaphylaxis",
        date: "2024",
        url: "https://allergy.org.au/hp/papers/acute-management-of-anaphylaxis-guidelines"
      }
    ]
  });

  var caseFive = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-005"; });

  caseFive.masteryFocus = {
    case: "Assess a worsening asthma presentation, treat while assessing, and use each reassessment to decide whether breathing support must escalate.",
    clinical: "In any breathing emergency, interpret speech, air movement, oxygenation and conscious state together, then reassess after every treatment."
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
      title: "Acute management of anaphylaxis",
      organisation: "Australasian Society of Clinical Immunology and Allergy",
      date: "2024; accessed July 2026",
      url: "https://allergy.org.au/hp/papers/acute-management-of-anaphylaxis-guidelines"
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
      title: "Keep your place while reading",
      steps: [
        { time: "0 to 30 seconds", text: "Recognise a breathing emergency with incomplete speech and failed reliever use. Plan help, monitoring, ABC assessment and treatment together." },
        { time: "30 to 60 seconds", text: "Use speech, work of breathing, air entry, oxygenation, circulation and conscious state to decide severity. Do not grade severity from any single sign." },
        { time: "1 to 2 minutes", text: "Set the task changes: assess and manage until minute 5, explain to Sophie until minute 7, then give severity, alternatives and further care in the final minute." }
      ],
      anchor: "Assessment and treatment 0 to 5 | Patient explanation 5 to 7 | Severity, alternatives and escalation 7 to 8"
    },
    run: {
      title: "Keep your place during the run",
      steps: [
        { time: "0 to 2 minutes", text: "Call senior help, assess ABC, classify severity and begin oxygen, bronchodilators and systemic corticosteroid without waiting for tests." },
        { time: "2 to 5 minutes", text: "Take the focused history during treatment and reassess repeatedly. Worsening speech, air movement, oxygenation or conscious state interrupts every other task and triggers airway escalation." },
        { time: "5 to 8 minutes", text: "At the prompt, explain the attack and the concern about intubation, then state severity, alternatives, investigations, intensive-care treatment and disposition." }
      ],
      anchor: "If speech, air entry, oxygenation or alertness worsens, stop the history, repeat ABC and escalate airway support."
    }
  };

  function c005Hint(number, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return {
      id: "c005-hint-" + String(number).padStart(2, "0"),
      target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 },
      citationIds: citationIds,
      where: where,
      popUp: popUp,
      say: Array.isArray(say) ? say : [say],
      pause: pause,
      recap: recap,
      reorient: reorient
    };
  }

  caseFive.hints = [
    c005Hint(1, "stem", "c005-stem-role", "metropolitan emergency department", ["healthdirect-breath-2025", "amc-spec-2026"], "Reading the setting", "Emergency department. What should be ready?", "Acutely breathless patients may deteriorate while you assess them. Use monitoring, senior support, resuscitation equipment and treatment in parallel.", "This is not a routine respiratory history.", "The setting allows immediate escalation.", "Read how unwell Sophie appears before deciding the cause."),
    c005Hint(2, "stem", "c005-stem-patient", "27-year-old woman with asthma", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading her background", "Known asthma. Is the diagnosis settled?", "It makes an asthma flare likely, but another breathing emergency can occur in someone who has asthma. Confirm the current pattern and actively look for findings that do not fit.", "Past history guides the first thought; it does not replace assessment.", "Sophie has asthma, but the present cause and severity remain unconfirmed.", "Read the change from her usual breathing."),
    c005Hint(3, "stem", "c005-stem-patient", "worsening breathlessness and wheeze", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading the symptom pattern", "Wheeze means asthma, yes?", "Often, but wheeze is simply sound made as air moves through narrowed airways. Anaphylaxis, cardiac disease or an inhaled obstruction can also wheeze. Symmetry, associated features and treatment response will separate them.", "Name the finding before naming its cause.", "Breathlessness and wheeze are worsening together.", "Look at duration and response to reliever treatment."),
    c005Hint(4, "stem", "c005-stem-patient", "despite repeated use of her reliever inhaler", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading treatment failure", "She has already used the reliever. Does that mean it cannot be asthma?", "No. Brief or absent relief can mean the airway narrowing is severe, delivery was poor or inflammation is continuing. It raises urgency rather than excluding the familiar illness.", "Do not keep repeating home treatment without assessing severity.", "Symptoms have progressed over six hours despite reliever use.", "Check speech, respiratory effort, air entry, oxygenation and alertness immediately."),
    c005Hint(5, "stem", "c005-stem-start", "awake and able to answer questions", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading what is known", "She is awake. Does that make the breathing problem mild?", "No. It means conversation is possible, but severity still depends on speech length, respiratory effort, air entry, oxygenation and fatigue. Ask short questions while the breathing assessment begins.", "Consciousness alone does not grade breathing severity.", "Sophie can answer, but her respiratory severity is still unknown.", "Request observations and examine speech, effort and air entry early."),
    c005Hint(6, "stem", "c005-task-assess", "Assess and manage the patient", ["amc-spec-2026", "amc-tips-2024"], "Reading task 1", "Assessment first, treatment later?", "No. In the first five minutes, call help, assess ABC, start treatment, take only treatment-linked history and reassess. Any deterioration interrupts the history.", "The two verbs run together.", "Task 1 is immediate assessment, treatment and response.", "Keep most of the station time for this task."),
    c005Hint(7, "stem", "c005-task-explain", "assessment and management plan to the patient", ["amc-spec-2026", "amc-tips-2024"], "Reading task 2", "What does Sophie need in two minutes?", "Tell her what the findings mean, what treatment is continuing, why intensive monitoring may be needed and what would make breathing support escalate. Use short sentences because she is breathless.", "Explain the decisions that affect her now.", "Minutes 5 to 7 belong to Sophie and her concerns.", "Hold the evidence that shows severity and treatment response."),
    c005Hint(8, "stem", "c005-task-examiner", "severity, important alternative diagnoses and further management", ["amc-spec-2026", "amc-tips-2024"], "Reading task 3", "How is the final minute different?", "State the severity explicitly, compare serious alternatives with the findings, then give investigations, escalation and disposition. This is clinical synthesis, not another conversation with Sophie.", "Change audience and task at the prompt.", "The last minute completes the medical plan.", "Prepare one sentence for severity, one for alternatives and one for further care."),
    c005Hint(9, "run", "c005-run-start", "You may begin", ["amc-tips-2024"], "Starting the station", "What is the first move?", "Call for senior help and approach with monitoring and airway equipment being prepared. The stem already shows severe breathlessness.", "Do not spend the first minute repeating the stem.", "This is an active breathing emergency.", "Bring support before collecting detail."),
    c005Hint(10, "run", "c005-run-first-action", "calls for senior emergency and resuscitation support", ["healthdirect-breath-2025", "amc-tips-2024"], "Calling early help", "Could this be excessive for a young patient?", "No. Age does not protect against respiratory failure. Early help matters because a tiring patient may need rapid airway intervention by the most experienced available team.", "Escalate from current function, not age.", "Support and airway equipment are being prepared.", "Use a brief introduction and assess her speech."),
    c005Hint(11, "run", "c005-run-name", "Cannot... breathe", ["healthdirect-breath-2025", "amc-tips-2024"], "Hearing her speech", "She answered her name. Can I proceed with history?", "Only in fragments and during treatment. Her broken speech is already a functional sign of severe respiratory distress.", "Do not ask long compound questions now.", "She is conscious but has little breath for speech.", "Assess ABC and request the observations and bilateral chest findings."),
    c005Hint(12, "run", "c005-run-primary", "bilateral air entry", ["healthdirect-breath-2025", "amc-tips-2024"], "Assessing breathing", "Why does air entry matter as much as wheeze?", "Wheeze needs moving air. Very little air movement may produce little sound even when airway narrowing is worse. Compare both sides and combine this with speech, effort, oxygenation and alertness.", "Loudness alone cannot grade severity.", "The airway is patent for now; ventilation may still be failing.", "Ask for the full respiratory and circulation findings."),
    c005Hint(13, "run", "c005-run-primary-findings", "markedly reduced air entry on both sides", ["nac-acute-asthma-2025", "nac-severity-2025"], "Interpreting severity", "Widespread wheeze, poor air entry and short speech. What does this establish?", "This is life-threatening acute asthma. Bronchial muscle contraction, airway-wall inflammation and mucus narrow many airways. Narrowing greatly increases resistance, especially during exhalation, so air becomes trapped, breathing work rises and oxygen falls.", "Treat the current severity, not the familiar diagnosis in her history.", "Bilateral airway narrowing is causing hypoxaemia and severe respiratory effort.", "Start oxygen and inhaled bronchodilators immediately, then reassess."),
    c005Hint(14, "run", "c005-run-severity", "oxygen saturation of 92% to 96%", ["nac-immediate-treatment-2025", "nac-acute-asthma-2025"], "Starting treatment", "Why oxygen, salbutamol and ipratropium together?", "Oxygen corrects hypoxaemia. Salbutamol relaxes bronchial smooth muscle, while ipratropium adds bronchodilation in severe attacks. Continuous delivery is used here because airflow is very poor.", "Treatment starts before blood tests or imaging.", "Life-threatening acute asthma is now being treated.", "Monitor continuously and check the response after each treatment."),
    c005Hint(15, "run", "c005-run-allergy", "serious medicine allergies", ["nac-immediate-treatment-2025", "amc-tips-2024"], "Checking treatment safety", "Why ask this while she is so breathless?", "Keep it to one essential question before systemic medicine when the answer is not known. Do not expand into a full allergy history while breathing treatment is underway.", "Urgent history should change immediate care.", "Bronchodilators and oxygen have started.", "Give systemic corticosteroid early and obtain access without delaying treatment."),
    c005Hint(16, "run", "c005-run-access-steroid", "do not delay treatment for tests", ["nac-immediate-treatment-2025", "nac-acute-asthma-2025"], "Adding steroid and tests", "What does the steroid do if it is not immediate?", "It reduces airway inflammation and lowers relapse risk, but it takes time. Blood gas and electrolytes help assess failure and treatment effects; neither should interrupt bronchodilation or airway preparation.", "Separate immediate relief from treatment that changes the next hours.", "Oxygen and bronchodilators address the immediate physiology; steroid is now added.", "Explain the situation briefly, then ask focused questions during treatment."),
    c005Hint(17, "run", "c005-run-brief-explanation", "your oxygen is low", ["nac-acute-asthma-2025", "amc-tips-2024"], "Explaining during treatment", "How much should I explain now?", "One cause, one current danger and one treatment sentence are enough. Sophie needs to know the team is acting; she does not need a lecture while she is struggling for breath.", "Communication must fit her breathing capacity.", "She knows why the mask, oxygen and steroid are being used.", "Continue treatment and collect only the history that changes risk or alternatives."),
    c005Hint(18, "run", "c005-run-onset-answer", "Twelve puffs... with spacer", ["nac-acute-asthma-2025", "anzcor-asthma-2023"], "Reading reliever use", "Twelve puffs sounds like enough. Why did it fail?", "The dose tells you she recognised worsening symptoms and used a spacer. Relief lasting only minutes suggests severe ongoing narrowing, not that further supervised bronchodilation is pointless.", "Home response helps judge severity and trajectory.", "Dust exposure preceded six hours of worsening symptoms.", "Ask about previous intensive care, intubation, admission and recent steroid use."),
    c005Hint(19, "run", "c005-run-risk-answer", "Hospital last year", ["nac-acute-asthma-2025", "nac-severity-2025"], "Reading previous severity", "No previous intubation. Can I relax?", "No. Previous intensive care or intubation would raise risk greatly, but their absence does not reduce the current life-threatening findings. Last year's admission shows significant prior disease.", "Current physiology decides current urgency.", "She has a previous admission but no prior ventilation.", "Check regular anti-inflammatory treatment and recent interruption."),
    c005Hint(20, "run", "c005-run-preventer-answer", "Ran out... five days ago", ["nac-acute-asthma-2025", "nac-immediate-treatment-2025"], "Connecting preventer interruption", "Did running out cause everything?", "It may have removed anti-inflammatory protection before the dust exposure, but avoid blame and avoid certainty. Acute care still depends on current severity, followed later by access, technique and prevention review.", "A contributing factor is not a moral failure.", "Recent preventer interruption may have increased vulnerability.", "Exclude anaphylaxis and other immediate alternatives while treatment continues."),
    c005Hint(21, "run", "c005-run-anaphylaxis", "hives, swelling, throat tightness", ["ascia-anaphylaxis-2024", "nac-acute-asthma-2025"], "Checking anaphylaxis", "Why ask when asthma seems clear?", "Because wheeze after an exposure can be part of anaphylaxis, and adrenaline would then be urgent. Skin, throat, gastrointestinal and circulatory features help distinguish it, though skin findings may be absent.", "Ask alternatives that would change treatment now.", "There is no reported allergy pattern so far.", "Check unilateral chest signs, clot symptoms, infection, choking and heart failure features."),
    c005Hint(22, "run", "c005-run-alternatives", "sudden one-sided chest pain", ["nac-acute-asthma-2025", "healthdirect-breath-2025"], "Testing dangerous alternatives", "Is this too many questions?", "This is a compressed discriminator set. Sudden unilateral pain suggests pneumothorax; haemoptysis and calf symptoms raise clot concern; fever supports infection; choking suggests obstruction; orthopnoea and oedema suggest heart failure.", "Each question has a reason and a treatment consequence.", "The current pattern remains bilateral airway narrowing.", "Check medicines and exposures that may trigger or complicate breathing symptoms."),
    c005Hint(23, "run", "c005-run-medicines", "beta-blocker medicine", ["nac-acute-asthma-2025", "amc-tips-2024"], "Checking contributors", "Why beta blockers and anti-inflammatory medicines?", "They can provoke or worsen bronchospasm in susceptible people. Smoking and vaping add airway irritation, while possible pregnancy affects investigations and later treatment planning but not urgent resuscitation.", "Keep background questions linked to decisions.", "No alternative trigger or major treatment constraint has emerged.", "Reassess now; the patient can change while you ask."),
    c005Hint(24, "run", "c005-run-deterioration", "wheeze is now much quieter", ["nac-severity-2025", "nac-acute-asthma-2025"], "Recognising deterioration", "Quieter wheeze and a slower respiratory rate. Is treatment working?", "No. She is drowsy, speaks one word and has barely audible air entry. Too little air is moving to create wheeze, and the slower rate reflects exhausted respiratory muscles. This is impending respiratory arrest.", "Apparent calm can be ventilatory failure.", "The focused history is interrupted by life-threatening deterioration.", "Repeat ABC and call intensive care and senior anaesthesia immediately."),
    c005Hint(25, "run", "c005-run-interpret-deterioration", "prepare for a difficult high-risk intubation", ["nac-acute-asthma-2025", "nac-severity-2025"], "Escalating the airway", "Should I wait for magnesium or the blood gas first?", "No. Continue maximal bronchodilation while the experienced airway team prepares. Severe airflow obstruction makes ventilation after intubation difficult, so this is not a casual or delayed procedure.", "Airway preparation and ongoing asthma treatment happen together.", "Sophie is exhausting with minimal airflow.", "Add intravenous magnesium and obtain a blood gas without delaying airway care."),
    c005Hint(26, "run", "c005-run-magnesium", "intravenous magnesium sulfate", ["nac-immediate-treatment-2025", "nac-acute-asthma-2025"], "Adding magnesium", "What role does magnesium have here?", "It is an additional bronchodilator for severe acute asthma that has not responded adequately to initial treatment. It supports, but does not replace, inhaled bronchodilators, oxygen, corticosteroid or airway preparation.", "Add-on treatment must not distract from respiratory failure.", "Initial therapy has failed and expert airway help is present.", "Use the urgent blood gas to assess ventilation."),
    c005Hint(27, "run", "c005-run-gas", "carbon dioxide 7.1 kilopascals", ["nac-severity-2025", "nac-acute-asthma-2025"], "Reading the blood gas", "Why is raised carbon dioxide especially worrying?", "Early in an attack, rapid breathing usually lowers carbon dioxide. A rise now means Sophie can no longer ventilate enough to remove it. Acidaemia confirms that failure is affecting the body.", "Do not interpret this as simple anxiety or treatment effect.", "The gas confirms hypercapnic ventilatory failure.", "Decide whether non-invasive support is safe or whether intubation is required."),
    c005Hint(28, "run", "c005-run-gas-interpretation", "Non-invasive ventilation is unsuitable", ["nac-acute-asthma-2025", "nac-severity-2025"], "Choosing ventilatory support", "Could a mask avoid intubation?", "Not safely while consciousness, airway protection and ventilation are impaired. Sedating Sophie to tolerate a mask would remove further protection. Intubation should proceed unless improvement becomes immediate and sustained.", "Choose support for the patient's function, not preference for a less invasive device.", "She has objective ventilatory failure and impaired alertness.", "Watch the response while the senior airway team remains ready."),
    c005Hint(29, "run", "c005-run-response", "air entry remains reduced", ["nac-severity-2025", "nac-acute-asthma-2025"], "Reading partial improvement", "Saturation is 94% and she is more alert. Is the crisis over?", "No. Oxygen has improved, but reduced air entry and short phrases show substantial obstruction remains. The improvement may allow intubation to be deferred only with continuous critical-care observation.", "One better number does not cancel the remaining respiratory signs.", "Sophie has partially responded but is still critically unwell.", "At the prompt, explain the danger and ongoing plan to her."),
    c005Hint(30, "run", "c005-run-time", "Five minutes have elapsed", ["amc-spec-2026", "amc-tips-2024"], "Changing tasks", "Do I stop emergency care to explain?", "Treatment and monitoring continue. You stop adding history and use the next two minutes to explain the assessment, exhaustion, current response and possible airway support.", "A task change does not stop resuscitation.", "Immediate assessment and escalation are established.", "Turn to Sophie with short, concrete sentences."),
    c005Hint(31, "run", "c005-run-explanation", "became tired from the effort of breathing", ["nac-acute-asthma-2025", "amc-tips-2024"], "Explaining exhaustion", "How do I explain respiratory failure without frightening her?", "Say that very narrow airways made each breath hard, her muscles tired and carbon dioxide rose. Then state that oxygen has improved but continuous treatment and intensive monitoring are still necessary.", "Honesty can be calm and specific.", "Sophie understands why the situation is life threatening.", "Answer her question about the quieter wheeze directly."),
    c005Hint(32, "run", "c005-run-quiet-answer", "too little air was moving to make a wheeze", ["nac-severity-2025", "nac-acute-asthma-2025"], "Correcting a misleading sign", "This is the key confusion. How can I make it memorable?", "Sound requires airflow. Narrow airways with some flow create wheeze; near-silent airways may mean there is hardly any flow left. Pair the sound with speech, air entry, alertness and carbon dioxide every time.", "Quieter is only better when air movement and the patient improve too.", "The quieter chest represented exhaustion, not recovery.", "Address whether a breathing tube may still be needed."),
    c005Hint(33, "run", "c005-run-tube-answer", "If you keep improving, we may avoid it", ["nac-acute-asthma-2025", "amc-tips-2024"], "Discussing possible intubation", "Can I reassure her that she will avoid a tube?", "No. Give the conditional truth. Sustained improvement may avoid it; worsening fatigue, oxygenation or carbon dioxide makes intubation the safer support. Tell her the experienced teams are ready.", "Do not promise an outcome that depends on the next reassessment.", "Sophie knows both possibilities and why the decision may change.", "Check that she understands intensive-care treatment is still required."),
    c005Hint(34, "run", "c005-run-confirm-plan-answer", "Yes", ["amc-tips-2024"], "Confirming understanding", "Does one word count as understanding?", "Here it confirms the immediate decision without making her spend breath. In a less acute setting, you could ask her to explain the plan back in her own words.", "Match communication demands to respiratory capacity.", "She accepts ongoing intensive-care treatment.", "Change audience when the examiner gives the final-minute prompt."),
    c005Hint(35, "run", "c005-run-examiner-prompt", "One minute remains", ["amc-spec-2026", "amc-tips-2024"], "Changing to clinical synthesis", "What comes first in the final minute?", "State severity first. Then name immediate alternatives and the findings that make them less likely, followed by further treatment, investigations, escalation and intensive-care admission.", "Do not repeat the patient explanation.", "The patient concern task is complete.", "Begin with life-threatening acute asthma and ventilatory failure."),
    c005Hint(36, "run", "c005-run-examiner-plan", "exhaustion and hypercapnic respiratory failure", ["nac-severity-2025", "nac-acute-asthma-2025"], "Stating severity", "Why name both exhaustion and hypercapnia?", "Exhaustion is the clinical process; raised carbon dioxide and acidaemia are objective consequences of failed ventilation. Together they justify intensive-care and airway escalation.", "Severity language should explain the action it triggers.", "This is not merely a severe wheeze; ventilation has failed.", "Briefly compare the dangerous alternatives."),
    c005Hint(37, "run", "c005-run-examiner-plan", "Immediate alternatives include anaphylaxis", ["ascia-anaphylaxis-2024", "nac-acute-asthma-2025"], "Presenting alternatives", "Do I need to discuss every breathlessness diagnosis?", "No. Prioritise alternatives that could change immediate treatment: anaphylaxis, pneumothorax, pulmonary embolism, pneumonia, foreign body and acute heart failure. Then connect the absent discriminating findings.", "A useful differential is short and decision-linked.", "Bilateral wheeze, trigger and history support the leading diagnosis.", "State continued treatment and targeted tests."),
    c005Hint(38, "run", "c005-run-examiner-plan", "Continue bronchodilators", ["nac-immediate-treatment-2025", "nac-acute-asthma-2025"], "Continuing treatment", "What should continue after partial improvement?", "Oxygen, frequent or continuous bronchodilators, systemic corticosteroid, magnesium already given, ECG and electrolyte monitoring, and repeated gases. Treatment response decides the airway plan.", "Do not step down because one saturation improved.", "Severe obstruction and recent ventilatory failure remain.", "Add imaging only after immediate treatment and stabilisation."),
    c005Hint(39, "run", "c005-run-examiner-plan", "portable chest X-ray after immediate treatment", ["nac-acute-asthma-2025", "nac-severity-2025"], "Using investigations", "Why not order a routine chest X-ray at arrival?", "It does not diagnose uncomplicated asthma and must not delay treatment. Here, severe or atypical deterioration makes it useful after stabilisation to look for pneumothorax, consolidation or cardiac failure.", "Order tests for a specific unresolved question.", "Blood gas has already shown ventilatory failure.", "Clarify that adrenaline is reserved for anaphylaxis features."),
    c005Hint(40, "run", "c005-run-examiner-plan", "Adrenaline is not routine asthma treatment", ["ascia-anaphylaxis-2024", "nac-acute-asthma-2025"], "Separating asthma from anaphylaxis treatment", "Could adrenaline help any life-threatening wheeze?", "Not routinely in acute asthma. It becomes urgent when the pattern is anaphylaxis, especially airway swelling or circulatory compromise after an allergen exposure.", "Use the treatment that matches the physiology and clinical pattern.", "No allergy features emerged in this station.", "Finish with intensive-care disposition and the condition for intubation."),
    c005Hint(41, "run", "c005-run-examiner-plan", "intubation by an experienced clinician", ["nac-acute-asthma-2025", "nac-severity-2025"], "Closing the escalation plan", "What is the final disposition sentence?", "She requires intensive-care admission. Intubation remains necessary unless improvement is immediate and sustained, because exhaustion and carbon dioxide retention can recur quickly.", "End with the level of care and the decision condition.", "Assessment, alternatives and escalation are now complete.", "Stop when the examiner closes the station."),
    c005Hint(42, "run", "c005-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I add prevention advice now?", "No. It was not the remaining task and the station has ended. Let this case go: read airflow, speech, alertness and carbon dioxide together; treat and reassess.", "Do not force leftover content into a closed station.", "This station is finished.", "Take one breath and begin the next stem without carrying this emergency into it.")
  ];
})();
