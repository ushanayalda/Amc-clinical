(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-009",
    globalId: "CP-C009",
    registryId: "CP-P3-C001",
    displayNumber: "Case 9",
    title: "Sudden facial droop, arm weakness and speech difficulty",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 3, title: "Sudden Neurological Deficit" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c009-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c009-stem-patient",
          text: "Mrs Helen Price, a 67-year-old woman, attends with her husband after he noticed difficulty speaking and weakness of her right arm when she woke this morning. Her husband, Mark, is present."
        },
        {
          id: "c009-stem-start",
          text: "Helen is awake. No treatment has been given. State your assessments and actions. The examiner will provide findings when requested."
        }
      ],
      tasks: [
        {
          id: "c009-task-assess",
          text: "Assess the patient and outline your management.",
          timing: "4 minutes"
        },
        {
          id: "c009-task-history",
          text: "Obtain the essential collateral history from her husband.",
          timing: "2 minutes"
        },
        {
          id: "c009-task-explain",
          text: "Explain your likely diagnosis, key concerns and management plan to the patient and her husband.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c009-run-recognition",
          heading: "Rapid recognition and emergency activation",
          turns: [
            {
              id: "c009-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c009-run-start", text: "You may begin." }]
            },
            {
              id: "c009-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c009-run-first-action", text: "The doctor performs hand hygiene, asks the nurse to bring the emergency equipment and approaches the patient." }]
            },
            {
              id: "c009-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-intro", text: "Hello, I am Ushana, one of the doctors here. Helen, I will speak directly to you and use short questions. Please tell me your full name and what feels wrong." }]
            },
            {
              id: "c009-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c009-run-opening", text: "Helen... Price. My arm... will not work." }]
            },
            {
              id: "c009-turn-collateral-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-collateral-consent", text: "Helen, because speaking is difficult, is it okay if Mark answers urgent questions while I continue speaking directly to you?" }]
            },
            {
              id: "c009-turn-collateral-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c009-run-collateral-consent-answer", text: "Yes." }]
            },
            {
              id: "c009-turn-time-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-time-question", text: "Mark, what exact time was Helen last completely normal? What exact time did you first notice these symptoms?" }]
            },
            {
              id: "c009-turn-time-answer",
              speaker: "Husband",
              kind: "spoken",
              lines: [{ id: "c009-run-time-answer", text: "She was definitely normal when we went to bed at 10:30 last night. At 7:20 this morning she called out after waking, and her words were wrong and her arm was weak. It is 8:02 now." }]
            },
            {
              id: "c009-turn-rapid-assessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-rapid-assessment", text: "I assess airway, breathing, circulation and conscious state. Record oxygen saturation, respiratory rate, pulse, blood pressure, temperature and capillary blood glucose now. For a rapid stroke screen, Helen, please smile, lift both arms and repeat, Today is Monday. Please provide all findings." }]
            },
            {
              id: "c009-turn-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c009-run-findings", text: "Her airway is patent. She is alert but has difficulty finding words and her speech is slurred. There is right lower facial droop. The right arm falls to the bed, while the left remains elevated. Respiratory rate is 18 breaths per minute, oxygen saturation is 96% on room air, pulse is 112 beats per minute and irregular, blood pressure is 182/104 mmHg, temperature is 36.7 degrees Celsius and capillary glucose is 6.2 mmol/L." }]
            },
            {
              id: "c009-turn-ambulance-order",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-ambulance-order", text: "This is a suspected acute stroke. She was last known well at 10:30 last night and symptoms were discovered at 7:20 this morning. Call Triple Zero for an emergency ambulance now and give both times. Ask the ambulance crew to activate the stroke pathway and pre-notify the most appropriate acute stroke service. Do not wait for further clinic tests." }]
            },
            {
              id: "c009-turn-ambulance-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c009-run-ambulance-action", text: "The nurse calls Triple Zero and reports a suspected acute stroke while the doctor continues the assessment." }]
            },
            {
              id: "c009-turn-transfer-question",
              speaker: "Husband",
              kind: "spoken",
              lines: [{ id: "c009-run-transfer-question", text: "The hospital is only ten minutes away. Would it be quicker if I drive her?" }]
            },
            {
              id: "c009-turn-transfer-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-transfer-answer", text: "The ambulance is safer and can alert the stroke team before arrival, which reduces treatment delay. Helen needs monitoring during transfer because her breathing, blood pressure or consciousness could change." }]
            },
            {
              id: "c009-turn-supportive-care",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-supportive-care", text: "Keep Helen resting with her head supported and do not let her walk. Keep her nil by mouth until swallowing is assessed. Continue cardiac, oxygen-saturation and blood-pressure monitoring. Do not give routine oxygen because her saturation is adequate. Establish intravenous access only if this will not delay the ambulance. Record all times and changes." }]
            }
          ]
        },
        {
          id: "c009-run-focused",
          heading: "Focused collateral history and neurological assessment",
          turns: [
            {
              id: "c009-turn-onset-character",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-onset-character", text: "Mark, when you found Helen, were the speech and weakness already fully present, or did you see them develop? Was there severe headache, seizure, collapse, head injury, vomiting or loss of consciousness?" }]
            },
            {
              id: "c009-turn-onset-character-answer",
              speaker: "Husband",
              kind: "spoken",
              lines: [{ id: "c009-run-onset-character-answer", text: "The symptoms were already there when she woke, so I did not see them begin. No headache, shaking, fall, vomiting or blackout." }]
            },
            {
              id: "c009-turn-symptom-screen",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-symptom-screen", text: "Helen, I will ask yes-or-no questions. Any new vision loss, numbness, leg weakness, dizziness, chest pain or palpitations?" }]
            },
            {
              id: "c009-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c009-run-symptom-answer", text: "Leg... weak. No pain." }]
            },
            {
              id: "c009-turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-history", text: "Has she had a stroke, transient ischaemic attack, seizure or migraine before? Does she have atrial fibrillation, diabetes or bleeding problems? What medicines does she take, especially aspirin, clopidogrel, warfarin, apixaban or other blood thinners? Any recent surgery, major bleeding or head injury?" }]
            },
            {
              id: "c009-turn-history-answer",
              speaker: "Husband",
              kind: "spoken",
              lines: [{ id: "c009-run-history-answer", text: "No previous stroke, seizure or migraine. She has high blood pressure and cholesterol and takes perindopril and atorvastatin. No blood thinners, recent surgery, bleeding or injury. She is normally independent." }]
            },
            {
              id: "c009-turn-neuro-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-neuro-request", text: "Without delaying transfer, I assess pupils, gaze and visual fields, facial movement, language, speech, limb power, sensation, coordination and neglect. Please provide the findings." }]
            },
            {
              id: "c009-turn-neuro-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c009-run-neuro-findings", text: "Pupils, gaze and visual fields are normal. There is right lower facial weakness, expressive language difficulty and dysarthria. Right arm power is 2 out of 5 and right leg power is 4 out of 5, with reduced right-sided sensation. The left side is normal. There is no neck stiffness." }]
            },
            {
              id: "c009-turn-clinical-summary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-clinical-summary", text: "The new right face, arm and leg deficits with language disturbance indicate a likely left cerebral stroke. Normal glucose makes hypoglycaemia unlikely. Intracranial bleeding cannot be distinguished from an ischaemic stroke without urgent imaging. Seizure and migraine are less likely from this history but remain alternatives." }]
            },
            {
              id: "c009-turn-medication-safety",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-medication-safety", text: "I will not give aspirin before brain imaging excludes haemorrhage. I will not rapidly lower her blood pressure in the clinic unless a stroke specialist identifies a specific indication. Both decisions belong within the urgent stroke pathway." }]
            },
            {
              id: "c009-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c009-run-time", text: "The ambulance is approaching. Please explain your likely diagnosis, immediate concerns and hospital plan to Helen and Mark." }]
            }
          ]
        },
        {
          id: "c009-run-explanation",
          heading: "Explanation and transfer",
          turns: [
            {
              id: "c009-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-diagnosis", text: "Helen and Mark, the sudden speech difficulty and right-sided weakness mean Helen is very likely having a stroke. A stroke happens when blood flow to part of the brain is blocked or when a blood vessel bleeds. We cannot safely tell which type it is in the clinic." }]
            },
            {
              id: "c009-turn-improvement-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c009-run-improvement-question", text: "Arm... little better. Stay here?" }]
            },
            {
              id: "c009-turn-improvement-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-improvement-answer", text: "Even if symptoms improve or disappear, you still need emergency assessment. A brief stroke-like episode can return or be followed by a larger stroke. We will not cancel the ambulance." }]
            },
            {
              id: "c009-turn-hospital-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-hospital-plan", text: "Because you woke with the symptoms, we do not know the exact onset. That does not mean there is no treatment. The stroke team will arrange urgent brain and vessel imaging, and may use perfusion imaging to assess threatened brain tissue. If the scans and safety checks are suitable, treatment may dissolve a clot or remove it through a catheter." }]
            },
            {
              id: "c009-turn-aspirin-question",
              speaker: "Husband",
              kind: "spoken",
              lines: [{ id: "c009-run-aspirin-question", text: "Should I give her one of my aspirin tablets while we wait?" }]
            },
            {
              id: "c009-turn-aspirin-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-aspirin-answer", text: "No. Aspirin helps some clot-related strokes only after bleeding has been excluded. Giving it now could worsen a brain haemorrhage. Please also give her nothing to eat, drink or swallow until the hospital checks that swallowing is safe." }]
            },
            {
              id: "c009-turn-prognosis-question",
              speaker: "Husband",
              kind: "spoken",
              lines: [{ id: "c009-run-prognosis-question", text: "Is she going to be permanently disabled?" }]
            },
            {
              id: "c009-turn-prognosis-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-prognosis-answer", text: "I cannot predict that before the scans and response to treatment. She is awake, we recognised the symptoms early and transfer is already underway. Those are helpful factors. The priority is reaching the stroke team without delay." }]
            },
            {
              id: "c009-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c009-run-understanding", text: "Mark, please tell me the two exact times you will give the ambulance team, and why an unknown onset does not mean treatment is impossible." }]
            },
            {
              id: "c009-turn-understanding-answer",
              speaker: "Husband",
              kind: "spoken",
              lines: [{ id: "c009-run-understanding-answer", text: "She was last definitely normal at 10:30 last night, and I discovered the symptoms at 7:20 this morning. The scans will show whether treatment is still suitable." }]
            },
            {
              id: "c009-turn-ambulance",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c009-run-ambulance", text: "The ambulance crew enters the treatment room while monitoring continues." }]
            },
            {
              id: "c009-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c009-run-handover", text: "Helen Price, 67, was last known well at 22:30 and woke with expressive language difficulty, dysarthria and right face, arm and leg weakness, discovered at 07:20. Current time is 08:08. She is alert with a patent airway. Oxygen saturation is 96% on room air, pulse 112 and irregular, suggesting possible atrial fibrillation, blood pressure 182/104, temperature 36.7 and glucose 6.2. Right arm power is 2 out of 5 and right leg power 4 out of 5, with reduced right-sided sensation. No headache, seizure, trauma, anticoagulant use, recent surgery or bleeding. Suspected left hemispheric wake-up stroke. She is nil by mouth, monitored and has received no oxygen, aspirin or acute blood-pressure treatment. Please activate stroke pre-notification and assess urgently with brain, vessel and appropriate perfusion imaging." }]
            },
            {
              id: "c009-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c009-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Stroke Foundation",
        title: "Australian and New Zealand Living Clinical Guidelines for Stroke Management",
        date: "Living guideline current July 2026",
        url: "https://informme.org.au/guidelines/living-clinical-guidelines-for-stroke-management"
      },
      {
        organisation: "Stroke Foundation",
        title: "Guideline updates for intravenous thrombolysis and head position",
        date: "NHMRC-approved updates, April 2026",
        url: "https://informme.org.au/news-and-events/latest-news/2026/05/guideline-updates-for-intravenous-thrombolysis-and-head-position"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.2: Stroke",
        date: "Approved April 2021, current citation 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-2-stroke"
      },
      {
        organisation: "Stroke Foundation",
        title: "Treatment for stroke",
        date: "Current source accessed July 2026",
        url: "https://strokefoundation.org.au/about-stroke/learn/treatment-for-stroke"
      },
      {
        organisation: "Ambulance Victoria",
        title: "Clinical Practice Guidelines for Ambulance and MICA Paramedics",
        date: "April 2026",
        url: "https://www.ambulance.vic.gov.au/sites/default/files/2026-04/ALS-MICA-CPG-April-2026.pdf"
      }
    ]
  });

  var caseNine = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-009"; });
  caseNine.masteryFocus = {
    case: "Recognise a wake-up neurological emergency, preserve both time points and transfer without delaying for clinic tests.",
    clinical: "For any sudden focal deficit, stabilise, check glucose, record both time points and use urgent imaging before subtype-specific treatment.",
    tasks: [
      "Assess and outline management",
      "Essential collateral history",
      "Explain diagnosis, concerns and management"
    ],
    transfer: "If Helen's right arm recovered completely while the ambulance approached but her aphasia remained, what would change in your transfer and imaging plan?",
    transferAnswer: "Persistent aphasia means she still has a disabling focal deficit; the recovered arm does not convert this into a resolved event. Stroke transfer and urgent brain and vessel imaging remain unchanged, with both time points, glucose and the evolving examination handed over clearly.",
    transferChecks: [
      "Which deficit persists now",
      "Last-known-well and discovery times",
      "Repeat glucose and neurological examination",
      "No subtype-specific treatment before imaging"
    ],
    transferCitationIds: ["c009-stroke-guideline"]
  };
  caseNine.sources = [
    { id: "c009-av-cpg", title: "Clinical Practice Guidelines for Ambulance and MICA Paramedics", organisation: "Ambulance Victoria", date: "April 2026", url: "https://www.ambulance.vic.gov.au/sites/default/files/2026-04/ALS-MICA-CPG-April-2026.pdf" },
    { id: "c009-stroke-guideline", title: "Australian and New Zealand Living Clinical Guidelines for Stroke Management", organisation: "Stroke Foundation", date: "Living guideline accessed July 2026", url: "https://informme.org.au/guidelines/living-clinical-guidelines-for-stroke-management" },
    { id: "c009-stroke-treatment", title: "Treatment for stroke", organisation: "Stroke Foundation", date: "Accessed July 2026", url: "https://strokefoundation.org.au/about-stroke/learn/treatment-for-stroke" },
    { id: "c009-anzcor-stroke", title: "Guideline 9.2.2: Stroke", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Approved April 2021; accessed July 2026", url: "https://www.anzcor.org/home/first-aid/guideline-9-2-2-stroke" },
    { id: "c009-amc-spec", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "c009-amc-tips", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "c009-communication", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Accessed July 2026", url: "https://www.safetyandquality.gov.au/standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseNine.reasoningCompass = {
    stem: {
      title: "Hold the time and the three tasks",
      steps: [
        { time: "0 to 30 seconds", text: "Recognise sudden focal neurological symptoms in a GP clinic. Plan ABCDE, glucose, a rapid neurological screen and emergency transfer." },
        { time: "30 to 60 seconds", text: "There are two times to obtain: when Helen was last completely normal and when the symptoms were first discovered." },
        { time: "1 to 2 minutes", text: "Set the task change points: assessment and management until minute 4, essential collateral until minute 6, then explanation to Helen and Mark." }
      ],
      anchor: "Assess and manage 0 to 4 | Essential collateral 4 to 6 | Explain 6 to 8"
    },
    run: {
      title: "Transfer first, questions continue",
      steps: [
        { time: "0 to 4 minutes", text: "Speak to Helen directly, obtain both time points, assess ABCDE, glucose and focal neurology, then call an emergency ambulance without waiting for clinic tests." },
        { time: "4 to 6 minutes", text: "Use Mark for onset, baseline, medicines, bleeding risks and important alternatives while monitoring and transfer continue." },
        { time: "6 to 8 minutes", text: "At the prompt, explain the likely diagnosis, why the type is unknown, why transfer remains necessary even if symptoms change and what imaging may permit." }
      ],
      anchor: "If airway, breathing or conscious state worsens, interrupt the current task, stabilise, then return to the part you paused."
    }
  };

  function c009Hint(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient, clock) {
    var hint = { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
    if (clock) hint.clock = clock;
    return hint;
  }
  caseNine.hints = [
    c009Hint("c009-hint-01", "stem", "c009-stem-role", "suburban medical clinic", ["c009-amc-spec", "c009-amc-tips", "c009-av-cpg"], "Reading the setting", "GP clinic. What can I do here without delaying transfer?", "You can recognise the emergency, check glucose, obtain observations, protect the patient and call an ambulance. Definitive brain and vessel imaging belongs at an appropriate acute neurological service.", "The clinic is the place to start safe care, not to complete the diagnosis.", "Helen is in primary care with a potentially time-critical neurological problem.", "Read the symptoms before naming the cause."),
    c009Hint("c009-hint-02", "stem", "c009-stem-patient", "67-year-old woman", ["c009-av-cpg", "c009-amc-tips"], "Reading Helen's age", "Does age settle what this is?", "Age increases vascular risk, but it cannot distinguish a blocked vessel, bleeding, low glucose, seizure or another mimic. The sudden focal symptoms and timing matter more now.", "Use age as context, not a conclusion.", "Helen is 67 with no examination or glucose yet.", "Place the speech problem and arm weakness together."),
    c009Hint("c009-hint-03", "stem", "c009-stem-patient", "difficulty speaking and weakness of her right arm", ["c009-av-cpg", "c009-amc-tips"], "Reading the symptom combination", "Speech and one arm. Why is that more concerning than either alone?", "Two sudden focal functions suggest one brain region may be affected. You still need face, leg, vision, sensation, glucose and onset information before deciding the cause.", "Localisation tells you where to examine; it does not identify the underlying pathology.", "There is a sudden focal neurological syndrome affecting language or speech and the right arm.", "Notice that the symptoms were found on waking."),
    c009Hint("c009-hint-04", "stem", "c009-stem-patient", "when she woke this morning", ["c009-av-cpg", "c009-amc-tips"], "Reading the timing clue", "Do I record waking time as onset?", "No. Ask when she was last definitely normal and when the symptoms were discovered. Both times matter because actual onset occurred somewhere between them.", "Do not invent a precise onset for a wake-up presentation.", "The onset is currently unknown.", "Use Mark for exact times while continuing to speak to Helen."),
    c009Hint("c009-hint-05", "stem", "c009-stem-start", "No treatment has been given", ["c009-amc-spec", "c009-av-cpg"], "Reading the starting condition", "What must happen before a long history?", "Assess ABCDE, conscious state, observations, capillary glucose and a rapid focal screen. If the findings remain concerning, activate emergency transfer immediately while focused history continues.", "Assessment and transfer can run beside collateral questions.", "Helen is awake but untreated, and stability has not been established.", "Anchor the first four-minute task."),
    c009Hint("c009-hint-06", "stem", "c009-task-assess", "Assess the patient and outline your management", ["c009-amc-spec", "c009-amc-tips"], "Anchoring task one", "How do I fit assessment and management into four minutes?", "Use one sequence: ABCDE and glucose, rapid face-arm-speech findings, both time points, ambulance activation, monitoring, nil by mouth and a focused neurological examination that does not delay transfer.", "Do not spend four minutes examining before calling for transfer.", "Task one is action-linked assessment.", "Reserve minute 4 to 6 for essential collateral only.", "0 to 4 minutes"),
    c009Hint("c009-hint-07", "stem", "c009-task-history", "essential collateral history", ["c009-amc-spec", "c009-amc-tips"], "Anchoring task two", "What makes collateral essential rather than complete?", "Use four buckets: exact timing; events that may point to another cause; medicines or recent events that affect treatment; and Helen's usual function.", "Mark helps because Helen's speech is impaired, but Helen remains part of the conversation.", "Collateral fills treatment-critical gaps; it is not a full medical history.", "Keep the final two minutes for explanation.", "4 to 6 minutes"),
    c009Hint("c009-hint-08", "stem", "c009-task-explain", "key concerns and management plan", ["c009-amc-spec", "c009-amc-tips", "c009-communication"], "Anchoring task three", "What are the key concerns?", "Explain that the symptoms are likely from an acute brain event, that imaging must distinguish blockage from bleeding, that an unknown onset does not remove all treatment options and that ambulance transfer cannot wait.", "Do not promise a treatment before imaging and safety checks.", "The last two minutes must answer both Helen and Mark.", "Begin with direct communication despite Helen's speech difficulty.", "6 to 8 minutes"),
    c009Hint("c009-hint-09", "run", "c009-run-start", "You may begin", ["c009-amc-spec", "c009-amc-tips"], "Starting the run", "What do I protect first?", "Helen's physiology, the exact times and her voice. Ask brief questions directly while the nurse prepares emergency equipment.", "Do not talk only to Mark because Helen has aphasia or dysarthria.", "The first task is assess and manage.", "Approach Helen and listen to how she speaks."),
    c009Hint("c009-hint-10", "run", "c009-run-intro", "use short questions", ["c009-communication", "c009-av-cpg"], "Adapting communication", "Does short mean childish?", "No. Use one idea at a time, allow extra response time, offer yes-or-no choices when useful and keep eye contact with Helen. Mark can support facts with her consent.", "Communication difficulty does not remove autonomy.", "Helen remains the patient and first point of address.", "Hear what her first answer reveals."),
    c009Hint("c009-hint-11", "run", "c009-run-opening", "My arm... will not work", ["c009-av-cpg"], "Hearing the first answer", "The speech is broken and the arm is weak. Act now?", "Yes. Continue a rapid assessment while obtaining consent for collateral. Sudden impaired speech with unilateral weakness needs emergency recognition, glucose and time documentation.", "Do not wait for a polished history before moving.", "Helen has objective communication difficulty and right arm dysfunction.", "Ask permission to use Mark without excluding her."),
    c009Hint("c009-hint-12", "run", "c009-run-collateral-consent", "while I continue speaking directly to you", ["c009-communication"], "Using collateral respectfully", "Why say this explicitly?", "It tells Helen that Mark will help with urgent facts, not replace her. Keep checking her comprehension and address her directly even when Mark answers.", "Consent is brief and proportionate in an emergency.", "Collateral is authorised and Helen remains included.", "Get the two exact times first."),
    c009Hint("c009-hint-13", "run", "c009-run-time-question", "last completely normal", ["c009-av-cpg", "c009-amc-tips"], "Establishing time", "Why not ask only when Mark noticed it?", "Treatment decisions need both the last time Helen was definitely normal and the discovery time. For a wake-up presentation, these are different and neither should be silently converted into onset.", "Record exact clock times, not 'this morning'.", "You are defining the treatment timeline without guessing.", "Listen carefully to Mark's two answers."),
    c009Hint("c009-hint-14", "run", "c009-run-time-answer", "It is 8:02 now", ["c009-av-cpg"], "Interpreting the timeline", "Seven-twenty discovery. Does that make treatment too late?", "No. Actual onset is unknown. Modern decisions may use brain, vessel and perfusion imaging rather than waking time alone. Transfer remains urgent because imaging determines whether reperfusion is suitable.", "Unknown onset is not the same as no treatment option.", "Last known well is 22:30; symptoms were discovered at 07:20.", "Complete ABCDE, glucose and a rapid focal screen."),
    c009Hint("c009-hint-15", "run", "c009-run-rapid-assessment", "capillary blood glucose now", ["c009-av-cpg"], "Checking a reversible mimic", "Why check glucose during the neurological screen?", "Low glucose can produce confusion, speech change and focal weakness. It is rapid and treatable, so check it without delaying emergency activation when the focal findings persist.", "A glucose result belongs beside the neurological findings.", "You are testing physiology and a reversible cause at the same time.", "Use all the findings together."),
    c009Hint("c009-hint-16", "run", "c009-run-findings", "capillary glucose is 6.2 mmol/L", ["c009-av-cpg", "c009-stroke-guideline"], "Reading the examination", "Face, arm, speech and leg findings. What do they support now?", "Sudden right face and limb weakness with language difficulty localises to the left cerebral hemisphere and strongly supports acute stroke. Glucose is normal, so hypoglycaemia does not explain it.", "You still cannot distinguish ischaemia from haemorrhage clinically.", "This is a suspected left hemispheric acute stroke with an unknown onset.", "Call Triple Zero now and give both times."),
    c009Hint("c009-hint-17", "run", "c009-run-ambulance-order", "suspected acute stroke", ["c009-stroke-guideline", "c009-anzcor-stroke", "c009-av-cpg"], "Activating the pathway", "Should I finish the examination before calling?", "Call now. Pre-notification gives the receiving stroke service time to prepare imaging and treatment. The nurse can call while you continue monitoring and focused assessment.", "Clinic tests must not delay transfer.", "The stroke pathway is active with last-known-well and discovery times recorded.", "Address Mark's suggestion of driving."),
    c009Hint("c009-hint-18", "run", "c009-run-transfer-question", "Would it be quicker if I drive her", ["c009-anzcor-stroke", "c009-av-cpg", "c009-communication"], "Explaining ambulance transfer", "The hospital is close. Why not agree?", "Ambulance staff can monitor deterioration, treat airway or circulation problems and pre-notify the stroke team. A private car provides none of that and may create delay at arrival.", "Distance alone does not determine the safest transfer.", "Emergency ambulance transfer remains necessary.", "Continue supportive care while it approaches."),
    c009Hint("c009-hint-19", "run", "c009-run-supportive-care", "nil by mouth until swallowing is assessed", ["c009-stroke-guideline"], "Preventing early harm", "Why no food, drink or tablets if she is awake?", "Stroke can impair swallowing without obvious coughing. Oral intake can enter the airway, so keep her nil by mouth until a trained swallowing assessment is completed.", "Do not give aspirin or routine medicines by mouth while the stroke type and swallow are unknown.", "Helen is resting, monitored and protected from aspiration.", "Use the ambulance wait for essential collateral."),
    c009Hint("c009-hint-20", "run", "c009-run-onset-character", "severe headache, seizure, collapse, head injury", ["c009-stroke-guideline"], "Sorting important alternatives", "Why ask these after activating transfer?", "They may suggest haemorrhage, seizure with postictal weakness or trauma and can alter immediate preparation. They should refine care, not postpone the stroke pathway.", "Emergency action came first; these checks continue beside it.", "No alternative has yet displaced acute stroke.", "Ask Helen directly about other focal symptoms."),
    c009Hint("c009-hint-21", "run", "c009-run-symptom-answer", "Leg... weak", ["c009-stroke-guideline"], "Extending the focal examination", "Right leg too. What does that add?", "Face, arm and leg involvement on one side makes a central brain lesion more coherent than an isolated peripheral nerve problem. Language difficulty supports the dominant left hemisphere.", "Localise before reciting differentials.", "Helen has a left hemispheric syndrome affecting several right-sided functions.", "Now obtain treatment-safety history and baseline function."),
    c009Hint("c009-hint-22", "run", "c009-run-history", "warfarin, apixaban or other blood thinners", ["c009-stroke-guideline"], "Checking treatment safety", "Why name anticoagulants precisely?", "The exact drug and last dose affect bleeding risk, reversal and reperfusion decisions. Recent surgery, major bleeding and head injury matter for the same reason.", "'Blood thinner' is not enough for a safe handover.", "Helen takes no antithrombotic medicine and was normally independent.", "Complete a focused neurological examination without delaying transfer."),
    c009Hint("c009-hint-23", "run", "c009-run-neuro-findings", "expressive language difficulty and dysarthria", ["c009-stroke-guideline"], "Separating language from articulation", "Why name both?", "Expressive language difficulty means trouble producing words from the dominant cortex. Dysarthria means the speech muscles are not articulating clearly. They can coexist, and both should be described rather than called simply 'slurred speech'.", "Specific findings make later change measurable.", "The examination confirms a left hemispheric focal deficit.", "Summarise the leading diagnosis and what remains unknown."),
    c009Hint("c009-hint-24", "run", "c009-run-clinical-summary", "cannot be distinguished from an ischaemic stroke without urgent imaging", ["c009-stroke-guideline", "c009-stroke-treatment"], "Holding diagnostic uncertainty", "Can the examination tell clot from bleed?", "No. Sudden focal deficits can result from arterial blockage or intracranial bleeding. Non-contrast brain imaging identifies haemorrhage; vessel and perfusion imaging may guide reperfusion decisions.", "Be certain about urgency and honest about stroke type.", "Acute stroke is likely; ischaemia versus haemorrhage remains unresolved.", "Avoid treatment that depends on knowing the type."),
    c009Hint("c009-hint-25", "run", "c009-run-medication-safety", "not give aspirin before brain imaging excludes haemorrhage", ["c009-stroke-guideline"], "Avoiding premature treatment", "Why not aspirin for a likely clot?", "Because a brain haemorrhage can look identical at the bedside, and aspirin could worsen bleeding. Likewise, rapid blood-pressure reduction can reduce brain perfusion unless a specialist indication and target are established.", "Do not treat the assumed subtype before imaging.", "Monitoring and transfer continue without aspirin or reflex blood-pressure treatment.", "Respond to the examiner's task switch."),
    c009Hint("c009-hint-26", "run", "c009-run-time", "Please explain your likely diagnosis", ["c009-amc-spec", "c009-amc-tips"], "Changing tasks", "More history is available. Should I keep asking?", "The examiner has moved you to explanation. State likely stroke, the unresolved type, the immediate risks and the hospital plan in plain language.", "A task prompt is a clear stopping point.", "Assessment, essential collateral and transfer activation are complete enough.", "Turn back to Helen and Mark.", "6 to 8 minutes"),
    c009Hint("c009-hint-27", "run", "c009-run-diagnosis", "blood flow to part of the brain is blocked or when a blood vessel bleeds", ["c009-stroke-guideline", "c009-communication"], "Explaining stroke", "What is the simplest accurate explanation?", "A stroke means part of the brain is suddenly injured because an artery is blocked or a blood vessel bleeds. Her right-sided weakness points to the left side of the brain, but a scan must show which type.", "Do not call it a clot before imaging.", "Helen likely has an acute left hemispheric stroke of uncertain type.", "Answer what happens if the arm improves."),
    c009Hint("c009-hint-28", "run", "c009-run-improvement-question", "little better", ["c009-stroke-guideline", "c009-anzcor-stroke"], "Responding to improvement", "If symptoms improve, can transfer stop?", "No. Improvement may represent fluctuating stroke or a transient ischaemic attack, and either can precede further injury. The same urgent assessment remains necessary.", "A better arm does not erase the earlier focal deficit.", "Transfer continues even if Helen improves.", "Explain why unknown onset still leaves treatment possibilities."),
    c009Hint("c009-hint-29", "run", "c009-run-hospital-plan", "brain and vessel imaging", ["c009-stroke-guideline", "c009-stroke-treatment"], "Explaining hospital assessment", "What will each scan answer?", "Brain imaging checks for bleeding and established injury. Vessel imaging looks for an arterial blockage. Perfusion imaging can show tissue that is threatened but may still be saved, especially when onset time is unknown.", "Eligibility depends on imaging, timing, anatomy and safety checks.", "Wake-up onset does not automatically exclude thrombolysis or thrombectomy.", "Address the aspirin question clearly."),
    c009Hint("c009-hint-30", "run", "c009-run-aspirin-question", "one of my aspirin tablets", ["c009-stroke-guideline", "c009-communication"], "Correcting unsafe help", "How direct should I be?", "Say no first, then why: aspirin can help some ischaemic strokes only after bleeding is excluded. It could enlarge a haemorrhage, and Helen should swallow nothing until her swallow is assessed.", "Clear refusal is kinder than a vague warning here.", "No aspirin and nothing by mouth before imaging and swallow assessment.", "Answer prognosis without pretending certainty."),
    c009Hint("c009-hint-31", "run", "c009-run-prognosis-question", "permanently disabled", ["c009-stroke-guideline", "c009-communication"], "Discussing prognosis", "What can I honestly reassure them about?", "You cannot predict recovery before imaging and treatment response. You can say what is known: Helen is awake, the problem was recognised, transfer is underway and the specialist team will assess treatment quickly.", "Do not promise recovery or present disability as inevitable.", "The outcome is uncertain; timely specialist care is the useful action now.", "Check that Mark retained both times and the reason for imaging."),
    c009Hint("c009-hint-32", "run", "c009-run-understanding", "two exact times", ["c009-communication", "c009-stroke-guideline"], "Checking understanding", "Why check the times back rather than the diagnosis?", "The last-known-well and discovery times can alter treatment decisions and are easy to confuse under stress. Teach-back protects a critical transfer detail and confirms that unknown onset does not mean no treatment.", "Do not ask only, 'Do you understand?'", "Mark can now carry the two times accurately into transfer.", "Complete the requested explanation first. Consider a brief ambulance handover only if time remains and the examiner permits."),
    c009Hint("c009-hint-33", "run", "c009-run-handover", "appropriate perfusion imaging", ["c009-stroke-guideline", "c009-av-cpg", "c009-communication"], "Optional real-care handover", "If permitted, what belongs first?", "The station did not request a handover. After completing the explanation, use any permitted time to state suspected stroke and both times, then give current airway and conscious state, focal findings, glucose, observations, anticoagulant and bleeding history, baseline function, treatments withheld and the required imaging.", "Do not sacrifice the requested explanation. Keep last-known-well separate from discovery time.", "The ambulance team has the information needed for pre-notification and imaging decisions.", "Finish and wait for the examiner."),
    c009Hint("c009-hint-34", "run", "c009-run-end", "The station is complete", ["c009-amc-spec", "c009-amc-tips"], "Leaving the station", "Should I replay the case now?", "The case is complete. Take one breath, then read the next role, symptoms and tasks without assuming another stroke.", "The next sudden neurological presentation may be a mimic.", "Case 9 is finished.", "Let the next stem show you what is happening.")
  ];

  caseNine.essentialHintIds = [
    "c009-hint-03", "c009-hint-06", "c009-hint-07", "c009-hint-08",
    "c009-hint-13", "c009-hint-14", "c009-hint-15", "c009-hint-16",
    "c009-hint-17", "c009-hint-18", "c009-hint-19", "c009-hint-25",
    "c009-hint-26", "c009-hint-27", "c009-hint-30", "c009-hint-34"
  ];

  var c009Journey = {
    "c009-hint-07": {
      deeper: ["If an answer matters, clarify last-known-well and discovery times, symptom order, seizure or trauma, baseline function, anticoagulants, and recent bleeding, surgery or procedures."]
    },
    "c009-hint-13": { clock: "Early in task 1: record last-known-well and discovery time separately." },
    "c009-hint-17": { clock: "Danger sets the pace: activate transfer while assessment continues." },
    "c009-hint-21": {
      say: ["Face, arm and leg involvement on the right, together with language difficulty, makes a left-sided central brain lesion coherent."],
      deeper: ["Motor and sensory pathways from the left hemisphere control the right side of the body. Language is usually represented in the dominant left hemisphere, so these findings localise together."]
    },
    "c009-hint-23": {
      say: ["Describe both findings: Helen has difficulty producing language and difficulty articulating speech."],
      deeper: ["Expressive language difficulty reflects impaired word production in the dominant cortex. Dysarthria reflects impaired control of the muscles that articulate speech; the two can coexist."]
    },
    "c009-hint-26": { clock: "6 to 8 minutes: explain the likely diagnosis, concern and hospital plan." },
    "c009-hint-28": { clock: "Symptoms may fluctuate, but the transfer clock does not stop." },
    "c009-hint-34": { clock: "Station closed: one breath, then leave this case here." }
  };

  caseNine.hints.forEach(function (hint) {
    var journey = c009Journey[hint.id];
    if (!journey) return;
    if (journey.clock) hint.clock = journey.clock;
    if (journey.say) hint.say = journey.say;
    if (journey.deeper) hint.deeper = journey.deeper;
  });
})();
