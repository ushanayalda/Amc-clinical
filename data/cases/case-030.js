(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-030",
    globalId: "CP-C030",
    registryId: "CP-P10-C001",
    displayNumber: "Case 30",
    title: "Lower abdominal pain and light bleeding",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 10, title: "Obstetric Catastrophe" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c030-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c030-stem-patient",
          text: "Ms Samira Haddad, a 31-year-old woman, has presented with lower abdominal pain and light vaginal bleeding."
        },
        {
          id: "c030-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c030-task-history",
          text: "Take a focused history from Samira.",
          timing: "2 minutes"
        },
        {
          id: "c030-task-assess",
          text: "Assess Samira and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c030-task-explain",
          text: "Explain your assessment and management plan to Samira.",
          timing: "2 minutes"
        },
        {
          id: "c030-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c030-run-history",
          heading: "Focused history and pregnancy risk",
          turns: [
            {
              id: "c030-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c030-run-start", text: "You may begin." }]
            },
            {
              id: "c030-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c030-run-first-action", text: "The doctor performs hand hygiene and approaches Samira." }]
            },
            {
              id: "c030-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your name. May I ask about the pain and bleeding?" }]
            },
            {
              id: "c030-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c030-run-consent", text: "Samira Haddad. Yes. I am worried, but I have an IUD, so I cannot be pregnant." }]
            },
            {
              id: "c030-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-symptom-question", text: "When did the pain begin, where is it worst and has it spread? How much bleeding, and any clots, tissue, shoulder-tip pain, dizziness, fainting, vomiting or fever?" }]
            },
            {
              id: "c030-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c030-run-symptom-answer", text: "Sharp right-sided pain began last night and became severe this morning. One pad is lightly stained, without clots or tissue. My right shoulder tip hurts and I nearly fainted standing. I feel sick but have no fever." }]
            }
          ]
        },
        {
          id: "c030-run-assessment",
          heading: "Assessment, haemorrhage response and definitive care",
          turns: [
            {
              id: "c030-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-primary-request", text: "I review ABC, conscious state, observations, glucose, perfusion, abdomen and the bedside pregnancy test. Please provide findings." }]
            },
            {
              id: "c030-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c030-run-primary-findings", text: "Airway is patent. Samira is alert, pale and distressed. Respiratory rate is 24, oxygen saturation 98% on room air, pulse 118, blood pressure 92/58, temperature 36.5 degrees Celsius and glucose 5.7 mmol/L. She is cool with three-second capillary refill. Right-sided lower abdominal tenderness and guarding predominate. The pregnancy test is positive." }]
            },
            {
              id: "c030-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-escalation", text: "Pregnancy with pain, shoulder-tip pain, near-syncope and poor perfusion means presumed ruptured ectopic pregnancy. Move Samira to resuscitation; call senior gynaecology, anaesthesia, theatre and critical care now. Activate major haemorrhage and alert the blood bank." }]
            },
            {
              id: "c030-turn-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-resuscitation", text: "Continue ABC assessment and cardiac, blood pressure and oxygen-saturation monitoring. Insert two 14 to 16 gauge intravenous cannulas, keep her warm and nil by mouth, and monitor urine output. Give oxygen if hypoxaemic, intravenous analgesia and antiemetic." }]
            },
            {
              id: "c030-turn-blood-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-blood-plan", text: "Send FBC, U&E, LFTs, coagulation, VBG with lactate, beta-hCG, blood group, antibody screen and crossmatch. Begin warmed emergency O RhD-negative red cells, then group-specific blood with balanced components under the major-haemorrhage protocol. Use small crystalloid volumes only as a bridge; monitor calcium, coagulation and temperature." }]
            },
            {
              id: "c030-turn-gyn-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-gyn-question", text: "While treatment starts, when was your last normal period? Are cycles regular? Which IUD and when inserted? Any previous pregnancies, ectopic pregnancy, pelvic infection, fertility treatment or gynaecological surgery?" }]
            },
            {
              id: "c030-turn-gyn-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c030-run-gyn-answer", text: "My last period was seven weeks ago. They are regular, but I blamed the IUD. It is a copper device inserted three years ago. I had one uncomplicated birth and none of those problems." }]
            },
            {
              id: "c030-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-background-question", text: "Any medical conditions, medicines or allergies? When did you last eat?" }]
            },
            {
              id: "c030-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c030-run-background-answer", text: "I am well, take no medicines and have no allergies. I ate at seven o'clock." }]
            },
            {
              id: "c030-turn-intimate-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-intimate-consent", text: "Samira, if it does not delay surgery, I recommend a speculum examination to check the bleeding and cervix. A chaperone will be present, I will explain each step and stop whenever you ask. Do you consent?" }]
            },
            {
              id: "c030-turn-intimate-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c030-run-intimate-answer", text: "Yes, with a chaperone." }]
            },
            {
              id: "c030-turn-intimate-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-intimate-request", text: "I perform the speculum examination during resuscitation. Please provide findings." }]
            },
            {
              id: "c030-turn-intimate-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c030-run-intimate-findings", text: "There is scant vaginal blood. The cervical os is closed, with no tissue or active cervical bleeding." }]
            },
            {
              id: "c030-turn-ultrasound-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-ultrasound-request", text: "A credentialed clinician performs bedside ultrasound for free fluid and an intrauterine pregnancy without delaying theatre. Please provide results and repeat observations." }]
            },
            {
              id: "c030-turn-ultrasound-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c030-run-ultrasound-results", text: "Ultrasound shows an empty uterus and large-volume pelvic and upper-abdominal free fluid. Haemoglobin is 104 g/L, platelets 230 x 10^9/L, venous pH 7.29, lactate 4.3 mmol/L and beta-hCG 4200 IU/L. Despite emergency red cells, pulse is 126 and blood pressure 84/50." }]
            },
            {
              id: "c030-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-definitive-plan", text: "This is presumed ruptured ectopic pregnancy with haemorrhagic shock. Continue blood-led resuscitation directly to theatre. Do not wait for serial beta-hCG or formal imaging. Gynaecology should control bleeding by laparoscopy if feasible or laparotomy if instability requires, usually removing the ruptured tube. Methotrexate is inappropriate with instability and rupture." }]
            }
          ]
        },
        {
          id: "c030-run-communication",
          heading: "Explanation, concern, teach-back and handover",
          turns: [
            {
              id: "c030-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c030-run-explanation-prompt", text: "Please explain your assessment and plan to Samira." }]
            },
            {
              id: "c030-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-explanation", text: "Samira, the test shows you are pregnant. The findings suggest a pregnancy in a fallopian tube has ruptured, causing serious internal bleeding. Light vaginal loss does not show how much blood is inside. We are replacing blood while the gynaecology and anaesthetic teams prepare emergency surgery." }]
            },
            {
              id: "c030-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c030-run-concern", text: "How could this happen with an IUD? If you remove a tube, will I never have another baby?" }]
            },
            {
              id: "c030-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-concern-response", text: "An IUD makes pregnancy very unlikely, but no method is perfect. This is not your fault. This pregnancy cannot safely continue. The surgeon will explain the operation, risks and consent, preserving healthy tissue where safe. Many people conceive naturally with one healthy tube; we can discuss your fertility after recovery and offer pregnancy-loss support." }]
            },
            {
              id: "c030-turn-rhd-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-rhd-plan", text: "After treatment, we will review the IUD, pregnancy hormone and histology. If you are RhD negative and not already sensitised, we will offer 250 International Units of RhD immunoglobulin as soon as possible and within 72 hours of surgery." }]
            },
            {
              id: "c030-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c030-run-teachback", text: "Can you tell me why waiting for another scan or trying methotrexate would be unsafe?" }]
            },
            {
              id: "c030-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c030-run-teachback-answer", text: "I am bleeding internally and my blood pressure is falling. I need blood and surgery now; another scan or medicine would delay stopping the bleeding." }]
            },
            {
              id: "c030-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c030-run-handover-prompt", text: "Please finish with a concise handover to the gynaecology team." }]
            },
            {
              id: "c030-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c030-run-handover", text: "Samira Haddad is 31, seven weeks amenorrhoeic despite a copper IUD, with acute right lower pain, light vaginal bleeding, shoulder-tip pain and near-syncope. Pregnancy test is positive. She is pale and cool; pulse rose from 118 to 126 and blood pressure fell from 92/58 to 84/50 despite emergency red cells. She has guarding, a closed cervical os with scant blood, and no tissue. Bedside ultrasound shows an empty uterus and large pelvic and upper-abdominal free fluid. Haemoglobin is 104, pH 7.29 and lactate 4.3. Presumed ruptured ectopic pregnancy is causing haemorrhagic shock. Major-haemorrhage resuscitation is active through two large-bore lines. Gynaecology, anaesthesia, theatre and blood bank are alerted for immediate operative haemostasis, without waiting for serial beta-hCG or formal imaging. Methotrexate is inappropriate." }]
            },
            {
              id: "c030-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c030-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Royal Australian and New Zealand College of Obstetricians and Gynaecologists",
        title: "Miscarriage, Recurrent Miscarriage and Ectopic Pregnancy (C-Gyn 38)",
        date: "March 2025",
        url: "https://ranzcog.edu.au/wp-content/uploads/Miscarriage-Ectopic-Pregnancy.pdf"
      },
      {
        organisation: "Queensland Health",
        title: "Early pregnancy loss",
        date: "Amended August 2025",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0033/139947/g-epl.pdf"
      }
    ]
  });
})();
