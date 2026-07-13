(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-004",
    registryId: "CP-P1-C004",
    displayNumber: "Case 4",
    title: "Breathlessness after a motorcycle collision",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 1, title: "Dangerous Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c004-stem-role",
          text: "You are a doctor working in a metropolitan emergency department."
        },
        {
          id: "c004-stem-patient",
          text: "Mr Aiden Okafor, a 34-year-old man, was involved in a motorcycle collision about 20 minutes ago. He is awake and reports right-sided chest pain and breathlessness."
        },
        {
          id: "c004-stem-simulation",
          text: "State your assessments and actions to the examiner. Findings will be provided when requested."
        }
      ],
      tasks: [
        {
          id: "c004-task-assess",
          text: "Assess the patient and outline your management.",
          timing: "5 minutes"
        },
        {
          id: "c004-task-explain",
          text: "Explain your working diagnosis and further management to the examiner.",
          timing: "2 minutes"
        },
        {
          id: "c004-task-handover",
          text: "Give a concise clinical handover to the examiner.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c004-run-recognition",
          heading: "Immediate assessment and recognition",
          turns: [
            {
              id: "c004-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c004-run-start", text: "You may begin." }]
            },
            {
              id: "c004-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c004-run-first-action", text: "The doctor performs hand hygiene, applies appropriate protective equipment, calls for the trauma and resuscitation teams, and approaches the patient while spinal motion restriction is maintained." }]
            },
            {
              id: "c004-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-intro", text: "Hello, I am Ushana, one of the emergency doctors. We are treating your breathing now. Can you tell me your name?" }]
            },
            {
              id: "c004-turn-id",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c004-run-id", text: "Aiden Okafor. I cannot get enough air." }]
            },
            {
              id: "c004-turn-abc",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-abc", text: "Aiden is speaking, so his airway is patent for now. Maintain spinal motion restriction, check for airway obstruction and keep suction ready. Check immediately for catastrophic external bleeding. Continue high-concentration oxygen, attach continuous monitoring and cycle his blood pressure frequently. I expose the chest and compare movement, palpation, percussion and breath sounds. Please provide the findings." }]
            },
            {
              id: "c004-turn-abc-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c004-run-abc-findings", text: "There is no catastrophic external bleeding. His airway is patent, but he speaks only two or three words at a time. Respiratory rate is 36 breaths per minute and oxygen saturation is 86% despite high-concentration oxygen. The right chest moves very little, is hyperresonant and has absent breath sounds. Pulse is 138 beats per minute, blood pressure is 78/46 mmHg and capillary refill time is four seconds. He is alert, anxious and clammy. There is bruising and surgical emphysema over the right lateral chest." }]
            },
            {
              id: "c004-turn-diagnosis-action",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-diagnosis-action", text: "This is a clinical tension pneumothorax causing obstructive shock. I will decompress the right chest immediately. I will not wait for a chest X-ray, CT scan or formal ultrasound. Please bring the purpose-designed decompression device and intercostal catheter equipment now." }]
            },
            {
              id: "c004-turn-explain-emergency",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-explain-emergency", text: "Aiden, air is trapped under pressure around your right lung. It is compressing the lung and affecting your circulation. I need to release that pressure now, before any scan, and then place a chest tube. Is that okay?" }]
            },
            {
              id: "c004-turn-emergency-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c004-run-emergency-consent", text: "Yes, please." }]
            },
            {
              id: "c004-turn-decompression",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-decompression", text: "Using aseptic technique, I will insert a long purpose-designed decompression catheter at the site specified by local emergency protocol. I will secure the catheter and assess the response at once." }]
            },
            {
              id: "c004-turn-decompression-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c004-run-decompression-action", text: "The right chest is decompressed. A rush of air is heard. The patient takes deeper breaths and can speak in longer phrases." }]
            },
            {
              id: "c004-turn-reassess",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-reassess", text: "I reassess his airway, respiratory effort, bilateral air entry, oxygen saturation, pulse, blood pressure, perfusion and conscious state. Please provide the repeat findings." }]
            },
            {
              id: "c004-turn-reassess-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c004-run-reassess-findings", text: "Respiratory rate is 25 breaths per minute, oxygen saturation is 96% on oxygen, pulse is 112 beats per minute and blood pressure is 106/68 mmHg. Air entry has returned on the right but remains reduced. He is less distressed and remains alert." }]
            }
          ]
        },
        {
          id: "c004-run-definitive",
          heading: "Definitive treatment and continuing trauma care",
          turns: [
            {
              id: "c004-turn-access",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-access", text: "Continue high-flow oxygen and monitoring. Insert two large-bore intravenous lines and send trauma bloods, including blood gas, lactate, coagulation studies and group and crossmatch. Give titrated intravenous analgesia, keep him warm and fasting, and continue looking for other haemorrhage and injuries." }]
            },
            {
              id: "c004-turn-drain-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-drain-plan", text: "The decompression catheter is temporary. With senior support, I will insert a definitive right intercostal catheter in the triangle of safety using aseptic technique. Because he is conscious, I will give local anaesthetic before blunt dissection and finger confirmation of pleural entry. Life-saving drainage must not be delayed if he deteriorates. I will connect the catheter to an underwater-seal drain, secure it and confirm function." }]
            },
            {
              id: "c004-turn-drain-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c004-run-drain-action", text: "The intercostal catheter is inserted and connected to an underwater-seal drain. Air bubbles through the chamber and the patient's breathing continues to improve." }]
            },
            {
              id: "c004-turn-pain",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c004-run-pain", text: "I can breathe better. My right side still hurts." }]
            },
            {
              id: "c004-turn-pain-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-pain-answer", text: "The pressure has improved, but the chest injury and tube can still be painful. I will keep treating the pain and checking your breathing and circulation closely." }]
            },
            {
              id: "c004-turn-dob",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-dob", text: "Now that you can speak more easily, please confirm your date of birth." }]
            },
            {
              id: "c004-turn-dob-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c004-run-dob-answer", text: "19 September 1991." }]
            },
            {
              id: "c004-turn-complete-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-complete-primary", text: "I complete the primary survey by checking for bleeding from the chest, abdomen, pelvis, long bones and externally. I assess Glasgow Coma Scale, pupils and blood glucose, then fully expose him while maintaining spinal alignment and preventing hypothermia." }]
            },
            {
              id: "c004-turn-complete-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c004-run-complete-primary-findings", text: "There is no major external haemorrhage. The abdomen is soft and not distended, the pelvis is stable and there is no long-bone deformity. Glasgow Coma Scale is 15, pupils are equal and reactive, and blood glucose is 6.2 mmol/L." }]
            },
            {
              id: "c004-turn-mechanism",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-mechanism", text: "Now that your breathing and blood pressure have improved, tell me briefly how the collision happened and where you were struck." }]
            },
            {
              id: "c004-turn-mechanism-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c004-run-mechanism-answer", text: "A car turned across me. I hit the side of it and landed hard on my right chest. I was wearing a helmet. I did not black out." }]
            },
            {
              id: "c004-turn-other-injuries",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-other-injuries", text: "Any neck or back pain, headache, weakness, abdominal pain, pelvic pain or bleeding anywhere?" }]
            },
            {
              id: "c004-turn-other-injuries-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c004-run-other-injuries-answer", text: "Only my right chest and shoulder hurt. No bleeding that I know of." }]
            },
            {
              id: "c004-turn-ample",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-ample", text: "Do you have allergies or medical conditions? What medicines do you take, including blood thinners, and when did you last eat or drink?" }]
            },
            {
              id: "c004-turn-ample-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c004-run-ample-answer", text: "No allergies or medical problems. I take no medicines. I ate lunch about three hours ago." }]
            },
            {
              id: "c004-turn-secondary-survey",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-secondary-survey", text: "I complete a head-to-toe secondary survey, including the chest, abdomen, pelvis, spine, limbs and a repeated neurological examination, while maintaining spinal precautions until the spine is assessed. Please provide the relevant findings." }]
            },
            {
              id: "c004-turn-secondary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c004-run-secondary-findings", text: "There is right lateral chest bruising and tenderness without an open wound or flail segment. The trachea is central. The abdomen is soft, the pelvis is stable, there is no external haemorrhage and no focal neurological deficit. The right shoulder is tender without deformity." }]
            },
            {
              id: "c004-turn-imaging",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-imaging", text: "Now that he is more stable and the drain is secured, I will perform eFAST if trained and immediately available. Arrange a portable chest X-ray to check lung expansion and tube position. Further trauma imaging, including CT, requires haemodynamic stability. None of these tests should precede emergency decompression." }]
            },
            {
              id: "c004-turn-efast",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c004-run-efast", text: "eFAST after decompression shows no pericardial or intra-abdominal free fluid and no large pleural fluid collection." }]
            },
            {
              id: "c004-turn-xray",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c004-run-xray", text: "The portable chest X-ray shows the right intercostal catheter in position, near-complete right lung re-expansion and a small residual pneumothorax. There is no large haemothorax." }]
            },
            {
              id: "c004-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c004-run-time", text: "Five minutes have elapsed. Please explain your working diagnosis and further management to the examiner." }]
            }
          ]
        },
        {
          id: "c004-run-examiner-explanation",
          heading: "Diagnosis and further management",
          turns: [
            {
              id: "c004-turn-working-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-working-diagnosis", text: "My working diagnosis is a right tension pneumothorax after blunt chest trauma, causing severe hypoxaemia and obstructive shock. The decisive findings were rapid deterioration, unilateral loss of chest movement and breath sounds, hypotension and improvement after immediate decompression. A normal tracheal position does not exclude it." }]
            },
            {
              id: "c004-turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-differentials", text: "I would continue assessing for concurrent massive haemothorax, pulmonary contusion, cardiac tamponade, flail chest, major haemorrhage and other traumatic injuries. His initial response is reassuring, but catheter blockage or recurrent tension could cause sudden deterioration." }]
            },
            {
              id: "c004-turn-further-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c004-run-further-plan", text: "I will continue repeated ABCDE assessment, oxygen titrated to maintain saturation at 94% or higher, analgesia, drain observation, serial observations and repeat blood gas and lactate. If he deteriorates, I will reassess both sides and check the catheter and drain for displacement, insufficient length, kinking or blockage, then decompress again at another approved site if required. In critical instability, especially with positive-pressure ventilation, a trained clinician may perform finger thoracostomy under local protocol. I will investigate associated injuries and arrange CT only while he remains stable. He requires monitored trauma and surgical admission, with escalation for persistent air leak, bleeding or failure of lung expansion." }]
            },
            {
              id: "c004-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c004-run-handover-prompt", text: "Please give your concise handover." }]
            },
            {
              id: "c004-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c004-run-handover", text: "Aiden Okafor, 34, had a motorcycle collision about 25 minutes ago with direct right-chest impact. He developed severe breathlessness, absent right breath sounds, oxygen saturation 86% despite oxygen, pulse 138 and blood pressure 78/46. I diagnosed a right tension pneumothorax clinically and decompressed immediately without waiting for imaging. His saturation improved to 96% and blood pressure to 106/68. A right intercostal catheter is functioning, with near-complete re-expansion on X-ray. Continue monitored trauma care, analgesia, repeated assessment and evaluation for associated injuries." }]
            },
            {
              id: "c004-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c004-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Health",
        title: "Primary Clinical Care Manual, 12th edition: Chest injuries",
        date: "2025",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0022/1447051/PCCM_full.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Chest injuries",
        date: "January 2019, reviewed January 2022",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0020/219134/cpg_chest-injuries.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice procedure: Emergency chest decompression, cannula",
        date: "March 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0027/219249/CPP_Emergency-chest-decompression-Cannula.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice procedure: Emergency chest decompression, tube thoracostomy",
        date: "March 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219252/CPP_Emergency-chest-decompression-Tube-thoracostomy.pdf"
      }
    ]
  });

  var caseFour = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-004"; });

  caseFour.masteryFocus = {
    case: "Recognise when chest-trauma findings require immediate treatment, then finish the trauma survey and handover.",
    clinical: "When a patient is unstable, treat the reversible threat, reassess the response, then return to the unfinished task."
  };

  caseFour.sources = [
    {
      id: "qld-pccm-chest-2025",
      title: "Primary Clinical Care Manual, 12th edition: Chest injuries",
      organisation: "Queensland Health",
      date: "2025",
      url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0022/1447051/PCCM_full.pdf"
    },
    {
      id: "qas-chest-2022",
      title: "Clinical practice guideline: Chest injuries",
      organisation: "Queensland Ambulance Service",
      date: "Reviewed January 2022; accessed July 2026",
      url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0020/219134/cpg_chest-injuries.pdf"
    },
    {
      id: "qas-decompression-2026",
      title: "Clinical practice procedure: Emergency chest decompression, cannula",
      organisation: "Queensland Ambulance Service",
      date: "March 2026",
      url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0027/219249/CPP_Emergency-chest-decompression-Cannula.pdf"
    },
    {
      id: "qas-thoracostomy-2026",
      title: "Clinical practice procedure: Emergency chest decompression, tube thoracostomy",
      organisation: "Queensland Ambulance Service",
      date: "March 2026",
      url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219252/CPP_Emergency-chest-decompression-Tube-thoracostomy.pdf"
    },
    {
      id: "anzcor-oxygen-2021",
      title: "Guideline 9.2.10: The Use of Oxygen in Emergencies",
      organisation: "Australian and New Zealand Committee on Resuscitation",
      date: "Approved April 2021; accessed July 2026",
      url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
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
    },
    {
      id: "acsqhc-handover-2026",
      title: "Communicating for Safety Standard",
      organisation: "Australian Commission on Safety and Quality in Health Care",
      date: "Updated April 2026",
      url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard"
    }
  ];

  caseFour.reasoningCompass = {
    stem: {
      title: "Keep your place while reading",
      steps: [
        { time: "0 to 30 seconds", text: "Identify major trauma with chest pain and breathlessness. Plan an immediate trauma assessment, not a seated history." },
        { time: "30 to 60 seconds", text: "Prepare to say each assessment and action aloud, ask for findings and treat any life threat as soon as it appears." },
        { time: "1 to 2 minutes", text: "Set the task changes: assess and manage until minute 5, explain diagnosis and further care until minute 7, then hand over for the final minute." }
      ],
      anchor: "Assessment and treatment 0 to 5 | Diagnosis and further care 5 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Keep your place during the run",
      steps: [
        { time: "0 to 2 minutes", text: "Call the trauma team, assess ABCDE and treat each immediately reversible threat as soon as the clinical findings establish it." },
        { time: "2 to 5 minutes", text: "Reassess after treatment, provide definitive drainage, finish the primary survey, then obtain the brief history and secondary survey." },
        { time: "5 to 8 minutes", text: "Stop at the prompt. Explain the working diagnosis, concurrent injuries and further care, then give a concise handover." }
      ],
      anchor: "Danger interrupts the clock. After treatment, reassess ABCDE and resume the unfinished task."
    }
  };

  function c004Hint(number, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return {
      id: "c004-hint-" + String(number).padStart(2, "0"),
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

  caseFour.hints = [
    c004Hint(1, "stem", "c004-stem-role", "metropolitan emergency department", ["amc-spec-2026", "qld-pccm-chest-2025"], "Reading the setting", "Emergency department. What changes first?", "You have people, monitoring and procedures nearby. Use them early. A severely injured patient is assessed and treated at the same time.", "This is not a history-first station.", "The setting supports immediate trauma care.", "Look at the mechanism and current symptoms."),
    c004Hint(2, "stem", "c004-stem-patient", "motorcycle collision about 20 minutes ago", ["qld-pccm-chest-2025", "qas-chest-2022"], "Reading the mechanism", "Recent motorcycle collision. Should I focus only on the chest?", "No. A direct chest injury may be obvious, but rapid deceleration can injure several regions. Start with the threat that can kill now, then complete the trauma survey.", "One painful area does not exclude other injuries.", "This is recent high-energy trauma.", "Check whether he is stable before asking for collision details."),
    c004Hint(3, "stem", "c004-stem-patient", "He is awake", ["qld-pccm-chest-2025", "amc-tips-2024"], "Reading his conscious state", "Awake. Is that reassuring enough?", "It is useful, but it does not tell you whether oxygenation or circulation is failing. Patients can remain alert during early shock.", "Awake is one finding, not a stability assessment.", "His breathing and circulation are still unknown.", "Read the symptoms together."),
    c004Hint(4, "stem", "c004-stem-patient", "right-sided chest pain and breathlessness", ["qld-pccm-chest-2025", "qas-chest-2022"], "Reading the symptom pair", "Chest pain plus breathlessness after impact. What should I consider?", "Think of chest wall injury, pleural or lung injury, bleeding into the chest and cardiac injury. The urgent distinction comes from bilateral chest examination and circulation, not from the pain score.", "Do not wait for a detailed pain history before assessing breathing.", "Trauma has produced both pain and impaired breathing.", "Plan ABCDE with direct comparison of both sides of the chest."),
    c004Hint(5, "stem", "c004-stem-simulation", "State your assessments and actions", ["amc-spec-2026", "amc-tips-2024"], "Reading the station method", "Do I perform silently?", "No. Say what you assess, what support you call, what treatment you start and when you reassess. Then request the findings you need.", "Only requested findings can guide the next action.", "The examiner supplies findings after you ask.", "Use short action statements and keep moving through ABCDE."),
    c004Hint(6, "stem", "c004-task-assess", "Assess the patient and outline your management", ["amc-spec-2026", "qld-pccm-chest-2025"], "Reading task 1", "What belongs in the first five minutes?", "Immediate help, ABCDE, treatment of each life threat, response to treatment, completion of the primary survey and only then the brief trauma history and secondary survey.", "Management is part of the assessment task.", "Task 1 controls most of the station.", "Reserve the first five minutes for assessment, treatment and reassessment."),
    c004Hint(7, "stem", "c004-task-explain", "working diagnosis and further management", ["amc-spec-2026", "amc-tips-2024"], "Reading task 2", "Is this another assessment?", "No. At minute 5, stop collecting detail. Name the working diagnosis, show which findings established it, mention injuries that may coexist and state what happens next.", "Follow the new task verb when the prompt changes.", "Two minutes are reserved for synthesis and ongoing care.", "Prepare a short explanation built from findings and treatment response."),
    c004Hint(8, "stem", "c004-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-handover-2026"], "Reading task 3", "Which facts must I include?", "Give identity and mechanism, the immediate problem, decisive observations, treatment and response, then the current state and required next care.", "A handover is selective, not a replay of the station.", "The final minute transfers responsibility safely.", "Hold the changing observations so you can compare before and after treatment."),
    c004Hint(9, "run", "c004-run-start", "You may begin", ["amc-tips-2024"], "Starting the station", "Where do I begin?", "Begin with help and immediate assessment. The stem already gives recent trauma and breathlessness, so there is no reason to delay at the doorway.", "The clock starts with action.", "You need support and ABCDE.", "Call the trauma and resuscitation teams."),
    c004Hint(10, "run", "c004-run-first-action", "calls for the trauma and resuscitation teams", ["qld-pccm-chest-2025", "qas-chest-2022"], "Calling for help", "Am I escalating too early?", "No. Severe breathlessness after major trauma may need simultaneous airway, chest, circulation and procedural support. Early help lets treatment occur without abandoning spinal care or the rest of the survey.", "Calling for help is part of treatment.", "The team is assembling while you approach.", "Introduce yourself briefly and assess whether he can speak."),
    c004Hint(11, "run", "c004-run-intro", "We are treating your breathing now", ["qld-pccm-chest-2025", "amc-tips-2024"], "Speaking during the emergency", "Do I need a full introduction first?", "Keep it brief and truthful. Tell Aiden what is happening, obtain identity if he can answer and continue treatment. Communication can run beside resuscitation.", "Do not make a breathless patient produce long answers.", "He is being treated while you establish contact.", "Use his speech as part of the airway and breathing assessment."),
    c004Hint(12, "run", "c004-run-abc", "compare movement, palpation, percussion and breath sounds", ["qld-pccm-chest-2025", "qas-chest-2022"], "Comparing the chest", "Why compare both sides so deliberately?", "Traumatic chest threats often create asymmetry. Movement, percussion and air entry together can distinguish a poorly ventilated side while circulation shows whether pressure or bleeding is impairing blood flow.", "Do not examine one side in isolation.", "Airway is patent for now; breathing and circulation remain urgent.", "Ask for the chest and shock findings together."),
    c004Hint(13, "run", "c004-run-abc-findings", "absent breath sounds", ["qld-pccm-chest-2025", "qas-chest-2022", "qas-decompression-2026"], "Interpreting the findings", "One silent, hyperresonant side with shock. What connects this?", "This is a right tension pneumothorax. Trauma has allowed air into the pleural space and pressure is rising. The right lung cannot expand, then pressure impairs venous return to the heart. Severe hypoxaemia, hypotension and poor perfusion show obstructive shock.", "The diagnosis is clinical because he is unstable.", "Unilateral ventilation loss and shock now have one urgent explanation.", "Decompress the right chest immediately, before imaging."),
    c004Hint(14, "run", "c004-run-diagnosis-action", "I will not wait for a chest X-ray", ["qld-pccm-chest-2025", "qas-decompression-2026"], "Choosing treatment before imaging", "Could I confirm it first?", "Not safely. Imaging delays release of the pressure that is impairing breathing and circulation. In an unstable patient with the clinical pattern, decompression is both treatment and a test of the response.", "A scan cannot come before a time-critical reversible threat.", "The right chest needs immediate decompression.", "Request the approved device and definitive drain equipment."),
    c004Hint(15, "run", "c004-run-explain-emergency", "release that pressure now", ["qld-pccm-chest-2025", "amc-tips-2024"], "Explaining urgent treatment", "Can consent be meaningful in a crisis?", "Yes. Use one clear causal sentence, state why delay is dangerous, name the immediate procedure and ask permission while the team prepares. If capacity were lost and delay threatened life, emergency treatment would proceed according to law and local policy.", "Urgency shortens the explanation; it does not remove respect.", "Aiden is conscious and agrees to immediate care.", "Decompress, secure the device and reassess at once."),
    c004Hint(16, "run", "c004-run-decompression", "site specified by local emergency protocol", ["qas-decompression-2026", "qas-thoracostomy-2026"], "Choosing the procedure site", "Why not memorise one universal site?", "Approved devices, patient anatomy and local protocols differ. The transferable rule is trained technique, a sufficiently long purpose-designed device, an approved site, secure fixation and immediate reassessment.", "Do not improvise equipment or technique.", "Emergency decompression is underway.", "Look for a clinical response, then confirm that it lasts."),
    c004Hint(17, "run", "c004-run-decompression-action", "A rush of air is heard", ["qas-decompression-2026", "qas-chest-2022"], "Reading the immediate response", "The rush of air sounds successful. Am I finished?", "No. Deeper breaths and longer speech support effective pressure release, but the catheter can fail or dislodge. Improvement must be confirmed through ABC reassessment.", "A procedure result is not a substitute for patient response.", "Pressure has been released and Aiden looks better.", "Repeat breathing, oxygenation, circulation and conscious state now."),
    c004Hint(18, "run", "c004-run-reassess", "reassess his airway", ["qld-pccm-chest-2025", "qas-decompression-2026"], "Reassessing after treatment", "Why go back to airway again?", "Because emergency care is a loop. Treatment can succeed, fail or create a new problem. Repeating ABCDE shows whether the immediate threat changed and where to continue.", "Never assume the intervention ended the danger.", "The first emergency interruption is complete.", "Compare the new observations with the original ones."),
    c004Hint(19, "run", "c004-run-reassess-findings", "blood pressure is 106/68 mmHg", ["qld-pccm-chest-2025", "qas-chest-2022"], "Reading the response", "The pressure and oxygen improved. What does that tell me?", "The rapid improvement after decompression strongly supports the working diagnosis and shows restored ventilation and venous return. Reduced right air entry remains, so the temporary catheter is not definitive treatment.", "Improvement allows the survey to continue; it does not permit discharge from resuscitation.", "Aiden is more stable after pressure release.", "Secure definitive pleural drainage and keep searching for other injuries."),
    c004Hint(20, "run", "c004-run-access", "continue looking for other haemorrhage and injuries", ["qld-pccm-chest-2025", "qas-chest-2022"], "Continuing trauma care", "The main threat improved. Why keep searching?", "Trauma diagnoses can coexist. Hypotension may recur from bleeding, chest injury or device failure. Intravenous access, trauma bloods, warmth, analgesia and repeated examination prepare for what the first finding may have hidden.", "Do not let one successful treatment end the trauma assessment.", "Breathing and blood pressure improved, but the collision remains a whole-body event.", "Replace temporary decompression with a definitive drain."),
    c004Hint(21, "run", "c004-run-drain-plan", "definitive right intercostal catheter", ["qld-pccm-chest-2025", "qas-thoracostomy-2026"], "Moving to definitive drainage", "Why is another tube needed?", "The first catheter releases pressure quickly but may not drain reliably for ongoing care. An intercostal catheter provides continuous pleural drainage, with analgesia and aseptic technique when circumstances allow.", "Temporary rescue and definitive treatment are different steps.", "The immediate pressure is relieved.", "Insert, connect, secure and confirm the drain's function."),
    c004Hint(22, "run", "c004-run-drain-action", "breathing continues to improve", ["qas-thoracostomy-2026", "qas-chest-2022"], "Checking the drain", "Bubbling and better breathing. Can I move on now?", "Yes, after confirming the patient remains stable and the drain is secure. Keep observing for air leak, blockage, bleeding and renewed respiratory distress.", "The patient matters more than the appearance of the drain chamber.", "Definitive drainage is functioning.", "Treat pain, then complete the interrupted primary survey."),
    c004Hint(23, "run", "c004-run-pain", "My right side still hurts", ["qld-pccm-chest-2025", "amc-tips-2024"], "Responding to pain", "Does persistent pain mean treatment failed?", "Not necessarily. Chest trauma and a new drain are painful even when pressure and breathing improve. Treat pain while checking that ventilation and circulation remain better.", "Do not dismiss pain, and do not confuse it with recurrent tension without reassessment.", "Breathing is better; chest pain still needs care.", "Provide titrated analgesia and return to the survey."),
    c004Hint(24, "run", "c004-run-complete-primary", "complete the primary survey", ["qld-pccm-chest-2025", "qas-chest-2022"], "Returning after the emergency", "Where was I before decompression?", "You were in ABCDE. The chest threat interrupted the sequence at breathing and circulation. Now continue through bleeding, disability and exposure while maintaining spinal alignment and warmth.", "Return to the unfinished assessment rather than starting again.", "The reversible chest threat has been treated and reassessed.", "Complete the rest of the primary survey."),
    c004Hint(25, "run", "c004-run-complete-primary-findings", "no major external haemorrhage", ["qld-pccm-chest-2025", "qas-chest-2022"], "Using reassuring findings", "Do these normal findings clear the trauma?", "They reduce concern for obvious major bleeding or current neurological compromise, but occult chest, abdominal, pelvic or spinal injury can remain. Continue repeated observations and the secondary survey.", "Negative findings narrow concern; they do not finish trauma care.", "No second immediate life threat is identified in the primary survey.", "Obtain the brief mechanism and safety history."),
    c004Hint(26, "run", "c004-run-mechanism", "Now that your breathing and blood pressure have improved", ["qld-pccm-chest-2025", "amc-tips-2024"], "Timing the history", "Why ask about the collision only now?", "Because mechanism helps predict hidden injury but does not outrank unstable breathing and circulation. Once Aiden can speak and the immediate threat is controlled, a brief mechanism becomes useful.", "History follows stabilisation in a critically injured patient.", "ABCDE is improved and the team can ask focused questions.", "Clarify impact, landing, protective equipment and loss of consciousness."),
    c004Hint(27, "run", "c004-run-other-injuries", "neck or back pain", ["qld-pccm-chest-2025", "qas-chest-2022"], "Screening other regions", "He mainly reports chest pain. Why ask broadly?", "Pain, fear and hypoxia can hide another injury. A short regional screen directs the secondary survey without turning into a long review of systems.", "Symptoms guide examination but cannot clear an injured region alone.", "Direct right-chest impact is established.", "Ask about head, spine, abdomen, pelvis, limbs and bleeding."),
    c004Hint(28, "run", "c004-run-ample", "including blood thinners", ["qld-pccm-chest-2025", "amc-tips-2024"], "Taking the trauma safety history", "Which background details matter now?", "Allergy, medicines, previous illness, last intake and event details affect bleeding risk, analgesia, procedures, anaesthesia and imaging. Blood thinners deserve an explicit question after trauma.", "Keep this brief and treatment-linked.", "No other symptom has yet changed the immediate plan.", "Collect the information needed for safe ongoing trauma care."),
    c004Hint(29, "run", "c004-run-secondary-survey", "head-to-toe secondary survey", ["qld-pccm-chest-2025", "qas-chest-2022"], "Beginning the secondary survey", "Is the secondary survey optional after a clear diagnosis?", "No. It is the systematic search for injuries missed during resuscitation. It follows control of immediate threats and continues alongside repeated ABCDE checks.", "A clear chest diagnosis does not make the collision single-system.", "The primary survey is stable enough to continue.", "Examine each region and repeat the neurological assessment."),
    c004Hint(30, "run", "c004-run-secondary-findings", "The trachea is central", ["qld-pccm-chest-2025", "qas-chest-2022"], "Interpreting the tracheal position", "Does a central trachea contradict the diagnosis?", "No. Tracheal deviation is a late and inconsistent sign. The earlier combination of unilateral ventilation loss, shock and response to decompression was decisive.", "Do not wait for every classic sign before treating an unstable patient.", "The secondary survey has not found another immediate threat.", "Use imaging now only because Aiden is more stable and the drain is secured."),
    c004Hint(31, "run", "c004-run-imaging", "None of these tests should precede emergency decompression", ["qld-pccm-chest-2025", "qas-decompression-2026"], "Ordering trauma imaging", "When does imaging become appropriate?", "After the time-critical threat has been treated and haemodynamic stability permits it. eFAST can answer focused bedside questions; chest X-ray checks expansion and tube position; CT searches more widely only in a stable patient.", "Choose a test for a question, and do not let it delay necessary treatment.", "Aiden is now stable enough for bedside imaging.", "Interpret each result within its limits."),
    c004Hint(32, "run", "c004-run-efast", "no pericardial or intra-abdominal free fluid", ["qld-pccm-chest-2025", "qas-chest-2022"], "Reading eFAST", "Does a negative eFAST clear internal injury?", "No. It reduces concern for fluid visible in the examined spaces at that moment. It does not exclude all bleeding, bowel injury, lung contusion or later change.", "Bedside ultrasound answers selected questions, not the whole trauma survey.", "No large fluid collection is seen after stabilisation.", "Check lung expansion and drain position on the portable chest X-ray."),
    c004Hint(33, "run", "c004-run-xray", "near-complete right lung re-expansion", ["qld-pccm-chest-2025", "qas-thoracostomy-2026"], "Reading the chest X-ray", "The lung is nearly expanded. What still matters?", "Confirm the catheter position, observe the small residual pneumothorax and continue clinical and drain monitoring. Imaging supports the current response but cannot predict blockage or recurrent pressure.", "A good image does not replace serial assessment.", "The definitive drain is positioned and the lung has largely re-expanded.", "At the time prompt, move from treatment detail to synthesis."),
    c004Hint(34, "run", "c004-run-time", "Five minutes have elapsed", ["amc-spec-2026", "amc-tips-2024"], "Changing tasks", "I still have more trauma details. Should I continue?", "Stop. The examiner has changed the task. Briefly state what you diagnosed, why, what else may coexist and what further care is required.", "The prompt is a clean return point after the emergency work.", "Assessment and immediate management are complete for this station.", "Use the next two minutes for diagnosis and further management."),
    c004Hint(35, "run", "c004-run-working-diagnosis", "improvement after immediate decompression", ["qld-pccm-chest-2025", "qas-decompression-2026"], "Explaining the diagnosis", "Which findings deserve emphasis?", "Link mechanism, unilateral ventilation loss, severe hypoxaemia, hypotension and the rapid response to decompression. That sequence explains both the diagnosis and why treatment came before imaging.", "Use the evidence that changed management, not every observation.", "Right tension pneumothorax caused obstructive shock.", "Then name dangerous injuries that may be present at the same time."),
    c004Hint(36, "run", "c004-run-differentials", "concurrent massive haemothorax", ["qld-pccm-chest-2025", "qas-chest-2022"], "Keeping concurrent injuries in view", "Why list alternatives after treatment worked?", "Because trauma can produce more than one cause of respiratory or circulatory failure. Haemothorax, contusion, tamponade, flail chest and bleeding remain active checks, not discarded possibilities.", "A working diagnosis explains the emergency; it does not clear the rest of the trauma.", "The immediate cause is treated, with recurrence still possible.", "State repeated ABCDE, drain checks and monitored admission."),
    c004Hint(37, "run", "c004-run-further-plan", "check the catheter and drain", ["qas-decompression-2026", "qas-thoracostomy-2026"], "Planning for deterioration", "If he worsens, do I assume a new diagnosis?", "First reassess both sides and the device. Displacement, insufficient length, kinking or blockage can recreate the same physiology. At the same time, search for bleeding and other traumatic causes.", "Return to ABCDE before chasing a distant explanation.", "Recurrent tension and other injuries remain possible.", "State the immediate device checks and repeat decompression if clinically required."),
    c004Hint(38, "run", "c004-run-further-plan", "especially with positive-pressure ventilation", ["qas-thoracostomy-2026", "qld-pccm-chest-2025"], "Anticipating ventilation risk", "Why mention positive-pressure ventilation?", "Pushing air into the lungs can rapidly increase pleural pressure if air is trapped. A deteriorating ventilated trauma patient therefore needs immediate bilateral chest reassessment and expert decompression under local protocol.", "Airway support can change chest physiology quickly.", "The drain is working now, but failure must be recognised early.", "Keep invasive rescue procedures with trained clinicians and local protocols."),
    c004Hint(39, "run", "c004-run-further-plan", "monitored trauma and surgical admission", ["qld-pccm-chest-2025", "qas-chest-2022"], "Choosing disposition", "He looks better. Could observation in the emergency department be enough?", "No. He has had obstructive shock, invasive pleural treatment and major trauma. He needs continued monitoring, drain care, serial assessment and specialist evaluation for associated injury.", "Response to treatment does not erase the severity of the event.", "Aiden is improved but remains high risk.", "Finish the explanation, then prepare the one-minute handover."),
    c004Hint(40, "run", "c004-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-handover-2026"], "Changing to handover", "How do I fit this into one minute?", "Give only what the receiving team needs to continue safely: who he is, what happened, the life threat, decisive observations, intervention, response, current device and next care.", "Do not restart the case from the greeting.", "The final task is transfer of responsibility.", "Begin with identity, mechanism and the immediate problem."),
    c004Hint(41, "run", "c004-run-handover", "motorcycle collision about 25 minutes ago", ["acsqhc-handover-2026", "amc-tips-2024"], "Opening the handover", "Why include the time and impact?", "They establish recent high-energy trauma and explain the chest injury while alerting the team to associated injuries that may still emerge.", "Context should be brief and clinically useful.", "Identity and mechanism are established.", "State the severe initial findings next."),
    c004Hint(42, "run", "c004-run-handover", "decompressed immediately without waiting for imaging", ["acsqhc-handover-2026", "qas-decompression-2026"], "Reporting treatment", "What makes the intervention clear?", "Name what you diagnosed, what you did and why it could not wait. Then give the before-and-after observations so the receiving team can judge the response.", "A handover needs treatment response, not only treatment name.", "Immediate decompression was clinically indicated.", "Report current oxygenation, blood pressure and definitive drainage."),
    c004Hint(43, "run", "c004-run-handover", "Continue monitored trauma care", ["acsqhc-handover-2026", "qld-pccm-chest-2025"], "Closing the handover", "How should I finish?", "End with explicit ongoing needs: monitor, reassess, treat pain, observe the drain and evaluate associated injuries. That tells the next team what cannot be dropped.", "A handover ends with required action.", "The receiving team has the problem, response and current state.", "Stop after the requested next care."),
    c004Hint(44, "run", "c004-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I add one more point?", "No. Stop when the examiner closes the station. Let this case go: unstable trauma, treat the reversible threat, reassess, resume, hand over.", "Do not carry unfinished sentences into the next case.", "This station is finished.", "Take one breath and read the next stem from its first word.")
  ];
})();
