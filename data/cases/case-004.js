(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-004",
    registryId: "CP-P1-C004",
    displayNumber: "Case 4",
    title: "Breathlessness after a motorcycle collision",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
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
})();
