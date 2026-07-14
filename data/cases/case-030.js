(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-030",
    globalId: "CP-C030",
    registryId: "CP-P10-C001",
    displayNumber: "Case 30",
    title: "Lower abdominal pain and light bleeding",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
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

  var caseThirty = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-030"; });
  function buildHint30(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirty.masteryFocus = {
    case: "Use the combination of lower abdominal pain and vaginal bleeding to consider pregnancy-related and non-pregnancy emergencies, establish current perfusion, and let disclosed evidence set urgency.",
    clinical: "In any reproductive-age patient with pain or bleeding, establish pregnancy status and haemodynamic state early, then distinguish visible loss from possible concealed loss.",
    tasks: ["Focused pain history", "Assess and interpret", "Explain assessment and plan", "Concise gynaecology handover"],
    transfer: "If Samira were comfortable and haemodynamically stable, with no significant free fluid, a small unruptured tubal pregnancy and reliable follow-up, how would the management pathway change?",
    transferAnswer: "Immediate haemorrhage surgery would no longer be automatic. Senior gynaecology would confirm eligibility and discuss expectant, medical or surgical options using symptoms, ultrasound, beta-hCG, contraindications, preferences and follow-up reliability. Methotrexate requires stability, no rupture and dependable serial review.",
    transferChecks: ["Confirm haemodynamic stability", "Exclude significant rupture", "Assess treatment eligibility", "Ensure reliable follow-up"],
    transferCitationIds: ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"]
  };
  caseThirty.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "nba-critical-bleeding-2025", title: "Patient blood management guideline for adults with critical bleeding", organisation: "National Blood Authority", date: "Version 2.0, September 2025", url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding" },
    { id: "ranzcog-ectopic-2025", title: "Miscarriage, Recurrent Miscarriage and Ectopic Pregnancy (C-Gyn 38)", organisation: "Royal Australian and New Zealand College of Obstetricians and Gynaecologists", date: "March 2025", url: "https://ranzcog.edu.au/wp-content/uploads/Miscarriage-Ectopic-Pregnancy.pdf" },
    { id: "qh-early-pregnancy-2025", title: "Early pregnancy loss", organisation: "Queensland Health", date: "Amended August 2025", url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0033/139947/g-epl.pdf" }
  ];
  caseThirty.reasoningCompass = {
    stem: {
      title: "Assess pregnancy status and circulation together",
      steps: [
        { time: "0 to 30 seconds", text: "Lower abdominal pain plus vaginal bleeding requires pregnancy possibility, bleeding severity and other abdominal or pelvic causes to be considered together." },
        { time: "30 to 60 seconds", text: "Plan a short timeline, associated symptoms and reproductive history beside early ABC, observations, perfusion and abdominal findings." },
        { time: "1 to 2 minutes", text: "Fix the task times: history to minute 2, assessment to minute 5, explanation to minute 7, handover in the final minute." }
      ],
      anchor: "History 0 to 2 | Assess 2 to 5 | Explain 5 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Do not use visible vaginal loss to judge total bleeding",
      steps: [
        { time: "0 to 2 minutes", text: "Clarify pain, bleeding, associated symptoms, pregnancy possibility and relevant reproductive history while current perfusion is checked." },
        { time: "2 to 5 minutes", text: "Interpret physiology, the focused examination, pregnancy status and requested evidence together. Let the current findings choose the next action." },
        { time: "5 to 8 minutes", text: "Explain the current assessment, urgency and next action, then hand over the symptom pattern, trend, decisive evidence and care already started." }
      ],
      anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the current task, respond, say where you paused and then return."
    }
  };
  caseThirty.hints = [
    buildHint30("c030-hint-01", "stem", "c030-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can happen beside the history?", "Observations, perfusion assessment, bedside testing and senior help can begin while you ask short questions if Samira appears unwell.", "Safety and history can run together.", "The setting supports rapid escalation.", "Read the two presenting symptoms as one pattern."),
    buildHint30("c030-hint-02", "stem", "c030-stem-patient", "31-year-old woman", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Keeping pregnancy possible", "What must I establish early at this age?", "Pregnancy status matters even when contraception is used or bleeding resembles a period. It changes the differential, tests, medicines and urgency.", "Do not infer pregnancy status from contraception or assumptions.", "Pregnancy-related and non-pregnancy causes are still possible.", "Now connect pain with the amount of visible bleeding."),
    buildHint30("c030-hint-03", "stem", "c030-stem-patient", "lower abdominal pain and light vaginal bleeding", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading pain and bleeding together", "Does light bleeding mean low risk?", "No. Visible vaginal loss does not measure possible internal loss. Ask laterality, onset, shoulder-tip pain, faintness, bleeding amount, last normal period and pregnancy possibility.", "Judge circulation independently from the pad.", "The symptom pair needs early pregnancy and perfusion assessment.", "Check what findings must be requested."),
    buildHint30("c030-hint-04", "stem", "c030-stem-context", "when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning information requests", "What categories will determine safety?", "Request current physiology and perfusion, a focused abdominal and pelvic assessment, pregnancy status, relevant bedside findings and tests that prepare urgent care.", "Ask for categories that change the next action.", "The stem gives no observations or examination yet.", "Anchor each task before starting."),
    buildHint30("c030-hint-05", "stem", "c030-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "Which questions belong in two minutes?", "Clarify pain, bleeding, shoulder symptoms, faintness and fever; last normal period and cycle; contraception; previous pregnancies, pelvic infection, fertility treatment and surgery; medicines, allergies and last meal.", "Ask only what changes risk or immediate care.", "Task one is symptom severity, pregnancy context and treatment readiness.", "At minute 2, move to assessment even if minor details remain."),
    buildHint30("c030-hint-06", "stem", "c030-task-assess", "Assess Samira and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "What turns findings into interpretation?", "Link ABC, perfusion, abdomen, pregnancy status and bedside evidence. State whether there is concealed loss, how stable she is and which action follows.", "Do not report observations without their meaning.", "Minutes 2 to 5 decide physiology and urgency.", "At minute 5, change from analysis to explanation."),
    buildHint30("c030-hint-07", "stem", "c030-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What must Samira hear?", "Explain what the current evidence suggests, why it matters now, what actions are underway, what happens next and what remains uncertain. Address her concerns without making promises.", "Use plain language and separate current danger from later outcomes.", "Minutes 5 to 7 belong to Samira.", "Keep the final minute for the senior handover."),
    buildHint30("c030-hint-08", "stem", "c030-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final task", "Which facts need the final minute?", "Give symptom timing, pregnancy context, perfusion trend, focused examination and bedside evidence, treatment and immediate destination.", "Transfer current risk and action, not every normal detail.", "The last minute has a fixed structure.", "Keep a running summary as findings arrive."),
    buildHint30("c030-hint-09", "run", "c030-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is the first useful move?", "Approach Samira, observe her colour and distress, identify yourself and begin the symptom history while arranging observations if needed.", "The first task has started.", "You have two minutes for focused history.", "Confirm identity and consent."),
    buildHint30("c030-hint-10", "run", "c030-run-consent", "I have an IUD, so I cannot be pregnant", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025", "acsqhc-communication-2026"], "Handling a reassuring belief", "How do I respond without arguing?", "Acknowledge that an IUD makes pregnancy uncommon, then explain that no method is perfect and a quick pregnancy check is still important for safe assessment.", "Correct the assumption respectfully.", "Pregnancy remains possible until tested.", "Clarify pain, bleeding and signs of concealed loss."),
    buildHint30("c030-hint-11", "run", "c030-run-symptom-question", "shoulder-tip pain, dizziness, fainting", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Asking high-yield associated symptoms", "Why group these questions?", "They test whether pain and bleeding may involve the peritoneum or circulation. They matter more now than a long review of minor symptoms.", "The questions are linked to severity and location.", "Visible bleeding alone cannot show total loss.", "Use Samira's answer to update urgency."),
    buildHint30("c030-hint-12", "run", "c030-run-symptom-answer", "right shoulder tip hurts and I nearly fainted", ["ranzcog-ectopic-2025", "acsqhc-deterioration-2026"], "Hearing two danger clues", "What links the shoulder and near-faint?", "Shoulder-tip pain can follow diaphragmatic irritation, while near-syncope can reflect reduced cerebral perfusion. With unilateral lower pain and bleeding, current circulation must be checked immediately.", "Do not keep taking history before observations.", "The pattern now suggests possible concealed intra-abdominal disease.", "Request ABC, perfusion, abdomen and pregnancy status."),
    buildHint30("c030-hint-13", "run", "c030-run-primary-findings", "pulse 118, blood pressure 92/58", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Recognising impaired circulation", "Which findings make this unstable?", "Tachycardia, low pressure, pallor, cool skin and delayed refill show poor perfusion. The light pad does not explain away this physiology.", "The circulation findings outweigh the visible loss.", "Samira is haemodynamically compromised.", "Now place the positive pregnancy test beside the pain pattern."),
    buildHint30("c030-hint-15", "run", "c030-run-primary-findings", "Right-sided lower abdominal tenderness and guarding", ["ranzcog-ectopic-2025"], "Using the abdominal findings", "What does unilateral guarding add?", "It supports a right-sided pelvic or lower abdominal process with peritoneal irritation. It strengthens urgency but does not distinguish every surgical or gynaecological cause alone.", "Local signs support the pattern without replacing imaging or operative assessment.", "Pain, pregnancy, poor perfusion and peritoneal irritation now align.", "State the leading emergency and activate the right teams."),
    buildHint30("c030-hint-14", "run", "c030-run-primary-findings", "pregnancy test is positive", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Updating pregnancy status", "What changes immediately?", "Pregnancy is now established. With unilateral pain, shoulder-tip pain, near-syncope and poor perfusion, a pregnancy-related internal bleeding emergency becomes the leading concern.", "A positive test changes the reasoning; it does not yet locate the pregnancy.", "Pregnancy and circulatory compromise are now linked until proved otherwise.", "Escalate before waiting for formal imaging."),
    buildHint30("c030-hint-16", "run", "c030-run-escalation", "presumed ruptured ectopic pregnancy", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Naming the working diagnosis", "Why can this be treated as presumed rupture now?", "The positive pregnancy test, unilateral pain, shoulder-tip pain, near-syncope, guarding and shock provide enough evidence to act before formal confirmation.", "A time-critical working diagnosis can guide treatment while evidence continues.", "Presumed ruptured ectopic pregnancy is causing concern for major concealed bleeding.", "Move to resuscitation and prepare haemorrhage control."),
    buildHint30("c030-hint-17", "run", "c030-run-resuscitation", "two 14 to 16 gauge intravenous cannulas", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Preparing for blood-led care", "Why two large lines now?", "They allow rapid blood sampling and warmed blood components while monitoring, warming, analgesia and urine assessment continue.", "Access prepares treatment; it should not delay theatre.", "Major-haemorrhage care is active.", "Send tests that guide replacement and operative preparation."),
    buildHint30("c030-hint-18", "run", "c030-run-blood-plan", "emergency O RhD-negative red cells", ["nba-critical-bleeding-2025", "ranzcog-ectopic-2025"], "Treating before full compatibility", "Why start emergency blood?", "Her shock suggests life-threatening loss, so waiting for full crossmatch risks further organ injury. Move to group-specific blood as soon as safe and monitor coagulation, calcium and temperature.", "The urgency comes from physiology, not the first haemoglobin.", "Blood-led resuscitation is underway.", "Continue short history only while treatment proceeds safely."),
    buildHint30("c030-hint-19", "run", "c030-run-gyn-answer", "last period was seven weeks ago", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Confirming gestational timing", "What does seven weeks add?", "Amenorrhoea gives a plausible early gestation, while a copper IUD does not exclude pregnancy. Previous uncomplicated birth and no known pelvic risk do not remove the current evidence.", "Absence of classic risk factors does not exclude the diagnosis.", "The pregnancy timing is consistent with the acute presentation.", "Complete immediate background and consent-sensitive assessment."),
    buildHint30("c030-hint-20", "run", "c030-run-intimate-consent", "A chaperone will be present", ["acsqhc-communication-2026", "ranzcog-ectopic-2025"], "Making intimate examination safe", "Can urgency replace consent?", "Not while Samira has capacity and the examination will not delay surgery. Explain purpose, chaperone, each step and her right to stop.", "Consent and dignity remain part of emergency care.", "The examination is optional if it would delay haemorrhage control.", "Use the findings only for the question they answer."),
    buildHint30("c030-hint-21", "run", "c030-run-intimate-findings", "scant vaginal blood", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Separating visible and concealed loss", "Does scant blood reduce the concern?", "No. A closed cervix with scant vaginal blood shows little external loss and no visible tissue, but it cannot exclude large intraperitoneal bleeding.", "The pad and speculum do not measure internal loss.", "The shock remains unexplained by visible bleeding.", "Use bedside ultrasound only if it does not delay theatre."),
    buildHint30("c030-hint-22", "run", "c030-run-ultrasound-request", "without delaying theatre", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Keeping ultrasound conditional", "What is bedside ultrasound meant to answer?", "It can rapidly look for an intrauterine pregnancy and free fluid, strengthening location and bleeding assessment. It must not become a reason to postpone haemorrhage control in an unstable patient.", "Imaging serves the treatment decision.", "The teams are already preparing definitive care.", "Read uterine and free-fluid findings separately."),
    buildHint30("c030-hint-23", "run", "c030-run-ultrasound-results", "large-volume pelvic and upper-abdominal free fluid", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Confirming concealed fluid", "What does fluid in both regions mean here?", "In a shocked pregnant patient with no intrauterine pregnancy seen, large free fluid is presumed blood until proved otherwise. Upper-abdominal extension explains the shoulder-tip pain.", "The anatomy now matches the symptoms and physiology.", "Major internal bleeding is demonstrated.", "Use the repeat observations to judge response."),
    buildHint30("c030-hint-24", "run", "c030-run-ultrasound-results", "lactate 4.3 mmol/L", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Reading persistent shock", "What does the repeat cluster show?", "Acidaemia, raised lactate, persistent tachycardia and falling pressure despite emergency blood mean bleeding has not been controlled.", "Persistent shock means the bleeding is still uncontrolled.", "Samira remains in haemorrhagic shock.", "Proceed directly to operative haemostasis."),
    buildHint30("c030-hint-25", "run", "c030-run-definitive-plan", "Do not wait for serial beta-hCG or formal imaging", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025", "nba-critical-bleeding-2025"], "Stopping further diagnostic delay", "Why are more tests unsafe now?", "Pregnancy, large free fluid and persistent shock already establish the need to stop bleeding. Serial hormones and formal imaging are for stable diagnostic uncertainty, not active haemorrhage.", "Enough evidence exists to act.", "Blood-led resuscitation continues directly to theatre.", "Explain the diagnosis and urgency in plain language."),
    buildHint30("c030-hint-26", "run", "c030-run-explanation", "Light vaginal loss does not show how much blood is inside", ["acsqhc-communication-2026", "ranzcog-ectopic-2025"], "Explaining the apparent mismatch", "What may be hardest for Samira to understand?", "Her visible bleeding looked small, but the ultrasound and circulation show serious internal loss. Explain this before describing surgery so the urgency makes sense.", "Connect evidence to action.", "Samira understands why treatment is immediate.", "Address the IUD and fertility without blame or promises."),
    buildHint30("c030-hint-27", "run", "c030-run-concern-response", "Many people conceive naturally with one healthy tube", ["acsqhc-communication-2026", "ranzcog-ectopic-2025"], "Discussing fertility honestly", "Can I reassure her fertility is guaranteed?", "No. Explain that the surgeon preserves healthy tissue where safe and many people conceive with one tube, but future fertility depends on the remaining tube and other factors.", "Offer realistic hope without certainty.", "Samira knows this is not her fault and fertility support will follow.", "Place RhD prevention after immediate haemorrhage care."),
    buildHint30("c030-hint-28", "run", "c030-run-rhd-plan", "RhD immunoglobulin", ["ranzcog-ectopic-2025", "qh-early-pregnancy-2025"], "Remembering blood-group prevention", "Why is this not the first priority?", "Give anti-D after immediate bleeding control when an eligible RhD-negative unsensitised patient needs it. It reduces future sensitisation, but it does not treat the current haemorrhage.", "Immediate resuscitation and haemostasis come first.", "The post-treatment plan is complete enough for this station.", "Use teach-back to confirm why delay is unsafe."),
    buildHint30("c030-hint-29", "run", "c030-run-teachback-answer", "I need blood and surgery now", ["acsqhc-communication-2026", "ranzcog-ectopic-2025"], "Checking the key decision", "What has Samira understood?", "She can state the concealed bleeding, falling pressure and need for immediate blood and surgery, including why another scan or medicine would delay control.", "Teach-back confirms explanation, not compliance.", "The immediate plan is understood.", "Prepare the final gynaecology handover."),
    buildHint30("c030-hint-30", "run", "c030-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final structure", "What order prevents drift?", "Lead with pregnancy context and symptoms, then perfusion trend, abdomen and bedside evidence, blood treatment and the direct theatre plan.", "Select only facts that affect current risk or action.", "The final task is transfer of care.", "Finish with what must happen now."),
    buildHint30("c030-hint-31", "run", "c030-run-handover", "immediate operative haemostasis", ["acsqhc-communication-2026", "ranzcog-ectopic-2025", "nba-critical-bleeding-2025"], "Closing with the immediate operative plan", "Why finish here rather than with fertility?", "The receiving team needs the active shock, pregnancy and free-fluid evidence, current resuscitation and immediate operative destination. Fertility discussion follows survival.", "End with the immediate operative plan.", "Risk, evidence, treatment and destination have transferred.", "Stop when the examiner ends the station."),
    buildHint30("c030-hint-32", "run", "c030-run-end", "The station is complete", ["amc-tips-2024"], "Finishing the case", "Should I add a formal ultrasound request?", "No. The examiner has ended the station, and further imaging would contradict the established immediate plan.", "Finish on the instruction.", "Case 30 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirty.essentialHintIds = [
    "c030-hint-03", "c030-hint-05", "c030-hint-06", "c030-hint-07", "c030-hint-08", "c030-hint-10",
    "c030-hint-12", "c030-hint-13", "c030-hint-14", "c030-hint-16", "c030-hint-21", "c030-hint-23",
    "c030-hint-25", "c030-hint-26", "c030-hint-31", "c030-hint-32"
  ];
  var clockByHint30 = {
    "c030-hint-05": "Minutes 0 to 2: pain and bleeding, shoulder or fainting symptoms, pregnancy context, reproductive history, medicines and last meal.",
    "c030-hint-06": "Minutes 2 to 5: request current physiology, focused abdomen and pelvic evidence, pregnancy status and findings that establish concealed loss.",
    "c030-hint-16": "The emergency pattern is now strong enough to act. Resuscitation and specialist preparation replace further routine history.",
    "c030-hint-24": "Persistent shock resets the plan. Continue blood-led care directly to haemorrhage control without another diagnostic delay.",
    "c030-hint-26": "Minutes 5 to 7: explain pregnancy location concern, internal bleeding, blood replacement and emergency surgery.",
    "c030-hint-30": "Final minute: transfer symptoms, pregnancy context, perfusion trend, bedside evidence, current blood treatment and theatre destination."
  };
  var deeperByHint30 = {
    "c030-hint-03": ["Blood may collect inside the peritoneal cavity while only a small amount passes vaginally. That is why circulation and examination matter independently of visible loss."],
    "c030-hint-12": ["Blood contacting the diaphragm can irritate the phrenic nerve. Shared cervical spinal segments allow that signal to be perceived at the shoulder tip."],
    "c030-hint-18": ["Emergency O RhD-negative red cells minimise immediate incompatibility risk. Group-specific components replace them once the patient's type is known."],
    "c030-hint-23": ["Free fluid around the liver or spleen implies that intraperitoneal fluid has extended beyond the pelvis, supporting a large volume rather than a small local collection."],
    "c030-hint-24": ["Lactate rises when oxygen delivery is insufficient for tissue demand. It supports the perfusion assessment but does not quantify blood loss by itself."],
    "c030-hint-28": ["RhD immunoglobulin clears fetal RhD-positive cells before the maternal immune system forms durable antibodies that could affect a later pregnancy."]
  };
  caseThirty.hints.forEach(function (hint) {
    if (clockByHint30[hint.id]) hint.clock = clockByHint30[hint.id];
    if (deeperByHint30[hint.id]) hint.deeper = deeperByHint30[hint.id];
  });
})();
