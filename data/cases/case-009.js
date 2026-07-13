(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-009",
    globalId: "CP-C009",
    registryId: "CP-P3-C001",
    displayNumber: "Case 9",
    title: "Sudden facial droop, arm weakness and speech difficulty",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
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
})();
