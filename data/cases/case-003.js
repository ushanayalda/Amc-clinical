(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-003",
    registryId: "CP-P1-C003",
    displayNumber: "Case 3",
    title: "Sharp chest discomfort after dinner",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 1, title: "Dangerous Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History taking"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c003-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c003-stem-patient",
          text: "Ms Priya Nair, a 42-year-old woman, was booked for an urgent same-day consultation because of right-sided chest discomfort and mild breathlessness that began after dinner last night. She thinks it may be reflux."
        },
        {
          id: "c003-stem-start",
          text: "No observations or investigation results are available at the start of the consultation."
        }
      ],
      tasks: [
        {
          id: "c003-task-history",
          text: "Take a focused history.",
          timing: "4 minutes"
        },
        {
          id: "c003-task-diagnosis",
          text: "Explain your most likely diagnosis and important differential diagnoses to the patient.",
          timing: "2 minutes"
        },
        {
          id: "c003-task-management",
          text: "Address the patient's concern and explain your immediate management.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c003-run-opening",
          heading: "Opening and first story",
          turns: [
            {
              id: "c003-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c003-run-start", text: "You may begin." }]
            },
            {
              id: "c003-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-intro", text: "Hello, I am Ushana, one of the doctors here. Please confirm your full name and date of birth." }]
            },
            {
              id: "c003-turn-id",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-id", text: "Priya Nair, 22 August 1983." }]
            },
            {
              id: "c003-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-consent", text: "Thank you, Priya. Is it okay if I ask focused questions about the discomfort and your breathing?" }]
            },
            {
              id: "c003-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-consent-answer", text: "Yes. I nearly cancelled because it is probably reflux." }]
            },
            {
              id: "c003-turn-open",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-open", text: "Tell me what happened from the beginning." }]
            },
            {
              id: "c003-turn-story",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-story", text: "Just after dinner, I suddenly felt a sharp pain low on the right side of my chest. It catches when I take a deep breath. I have also felt a little short of breath since then." }]
            },
            {
              id: "c003-turn-early-observations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-early-observations", text: "While we talk, please record her pulse, blood pressure, respiratory rate, oxygen saturation and temperature, and attach continuous monitoring." }]
            },
            {
              id: "c003-turn-early-observation-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c003-run-early-observation-findings", text: "Pulse is 112 beats per minute and regular, blood pressure is 124/76 mmHg, respiratory rate is 24 breaths per minute, oxygen saturation is 91% on room air, and temperature is 36.8 degrees Celsius." }]
            },
            {
              id: "c003-turn-early-oxygen",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-early-oxygen", text: "Her saturation is below 92%, so please give oxygen, titrate it to an appropriate target and continue monitoring. Call Triple Zero for an ambulance and bring the emergency equipment while I continue the focused history." }]
            },
            {
              id: "c003-turn-early-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c003-run-early-action", text: "A staff member calls Triple Zero. Monitoring and oxygen are continued, and emergency equipment is brought to the room." }]
            },
            {
              id: "c003-turn-early-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-early-concern", text: "An ambulance? The pain is only five out of ten. Could I drive myself?" }]
            },
            {
              id: "c003-turn-early-concern-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-early-concern-answer", text: "Your oxygen is low and your pulse is fast. An ambulance can monitor and treat you if you worsen. Driving yourself is not safe. I will explain the possible causes as we assess you." }]
            }
          ]
        },
        {
          id: "c003-run-symptoms",
          heading: "Focused symptom pattern",
          turns: [
            {
              id: "c003-turn-current",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-current", text: "Is the pain still present, and how severe is it from zero to ten?" }]
            },
            {
              id: "c003-turn-current-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-current-answer", text: "Yes. About five out of ten, worse when I breathe in." }]
            },
            {
              id: "c003-turn-radiation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-radiation", text: "Does it spread into your back, jaw, shoulder or either arm? Was it at its worst immediately?" }]
            },
            {
              id: "c003-turn-radiation-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-radiation-answer", text: "It does not spread. It came on over a few minutes rather than being at its worst instantly." }]
            },
            {
              id: "c003-turn-breathlessness",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-breathlessness", text: "Did the breathlessness start suddenly? Is it worsening, and can you walk normally?" }]
            },
            {
              id: "c003-turn-breathlessness-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-breathlessness-answer", text: "It started with the pain. I can speak, but I became unusually puffed walking from the car park." }]
            },
            {
              id: "c003-turn-associated",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-associated", text: "Any coughing blood, palpitations, fainting, sweating, nausea, fever or cough?" }]
            },
            {
              id: "c003-turn-associated-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-associated-answer", text: "My heart has felt fast. No blood, fainting, sweating, nausea, fever or cough." }]
            },
            {
              id: "c003-turn-reflux",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-reflux", text: "Any heartburn or acid taste? Did an antacid help?" }]
            },
            {
              id: "c003-turn-reflux-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-reflux-answer", text: "No acid taste or burning. I took an antacid last night and it made no difference." }]
            }
          ]
        },
        {
          id: "c003-run-vte-risk",
          heading: "Clot risk and dangerous alternatives",
          turns: [
            {
              id: "c003-turn-leg",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-leg", text: "Have you noticed pain, swelling, redness or warmth in either calf?" }]
            },
            {
              id: "c003-turn-leg-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-leg-answer", text: "My right calf has ached for two days and looks a little swollen. I thought it was from travelling." }]
            },
            {
              id: "c003-turn-travel",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-travel", text: "Tell me about the travel. Any recent surgery, injury, hospital stay or bed rest?" }]
            },
            {
              id: "c003-turn-travel-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-travel-answer", text: "I returned from Singapore five days ago. The flight was about eight hours. No surgery, injury, hospital stay or bed rest." }]
            },
            {
              id: "c003-turn-hormones",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-hormones", text: "Do you take the combined contraceptive pill or hormone therapy? Could you be pregnant, or have you given birth recently?" }]
            },
            {
              id: "c003-turn-hormones-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-hormones-answer", text: "I take the combined pill for endometriosis. I am not pregnant and have not recently given birth." }]
            },
            {
              id: "c003-turn-history-risks",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-history-risks", text: "Have you or a close relative had a clot? Any active cancer?" }]
            },
            {
              id: "c003-turn-history-risks-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-history-risks-answer", text: "No." }]
            },
            {
              id: "c003-turn-other-dangers",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-other-dangers", text: "Any exertional chest pressure, chest injury, recent chest procedure or previous collapsed lung?" }]
            },
            {
              id: "c003-turn-other-dangers-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-other-dangers-answer", text: "No." }]
            },
            {
              id: "c003-turn-medicines",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-medicines", text: "Apart from the pill, what medicines do you take? Any allergies, active bleeding, blood thinners or major kidney disease?" }]
            },
            {
              id: "c003-turn-medicines-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-medicines-answer", text: "No regular medicines apart from the pill, no allergies and none of those problems." }]
            },
            {
              id: "c003-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c003-run-time", text: "Four minutes have elapsed. Please proceed to the next task." }]
            }
          ]
        },
        {
          id: "c003-run-assessment",
          heading: "Immediate assessment",
          turns: [
            {
              id: "c003-turn-exam-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-exam-consent", text: "With your permission, I will check your observations, heart, lungs and legs while the ambulance is coming." }]
            },
            {
              id: "c003-turn-exam-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-exam-consent-answer", text: "Yes." }]
            },
            {
              id: "c003-turn-exam-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-exam-request", text: "I reassess airway, breathing, circulation, conscious state and perfusion, then examine the heart, lungs and both legs." }]
            },
            {
              id: "c003-turn-exam-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c003-run-exam-findings", text: "She remains alert and mildly breathless, with stable blood pressure. Heart sounds are normal. The chest is clear with equal air entry. The right calf is visibly swollen and tender compared with the left." }]
            }
          ]
        },
        {
          id: "c003-run-explanation",
          heading: "Diagnosis and differentials",
          turns: [
            {
              id: "c003-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-diagnosis", text: "My leading diagnosis is a pulmonary embolism. This means a clot may have formed in a deep vein, probably in your right leg, and travelled to a blood vessel in your lung." }]
            },
            {
              id: "c003-turn-evidence",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-evidence", text: "The sharp pain with breathing, sudden breathlessness, fast pulse, low oxygen level, swollen calf, recent flight and combined pill all support that concern." }]
            },
            {
              id: "c003-turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-differentials", text: "Clear equal air entry makes a large collapsed lung less likely, and no fever or cough makes pneumonia less likely. Heart and aortic causes can present atypically, so hospital assessment and an ECG are still required. Reflux does not explain the low oxygen or swollen calf." }]
            },
            {
              id: "c003-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-patient-question", text: "Are you certain it is a clot?" }]
            },
            {
              id: "c003-turn-uncertainty",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-uncertainty", text: "No. I cannot confirm it in the clinic. Your risk is high enough that you need hospital assessment now rather than an outpatient test." }]
            }
          ]
        },
        {
          id: "c003-run-management",
          heading: "Immediate management and handover",
          turns: [
            {
              id: "c003-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-plan", text: "I will keep you resting and monitored, continue oxygen and repeat your observations. Clinic tests will not delay the ambulance." }]
            },
            {
              id: "c003-turn-hospital-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-hospital-tests", text: "Hospital will assess the clot probability and usually arrange CT pulmonary angiography. A D-dimer is mainly useful when the initial probability is low." }]
            },
            {
              id: "c003-turn-anticoagulation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-anticoagulation", text: "Treatment usually includes an anticoagulant. Whether it starts before or after imaging depends on the expected delay and bleeding risk. I will discuss that with the receiving emergency clinician without delaying transfer." }]
            },
            {
              id: "c003-turn-pill",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-pill", text: "The hospital team will review your combined pill today and arrange an alternative if needed." }]
            },
            {
              id: "c003-turn-reassurance",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-reassurance", text: "I am frightened. Did I cause this by flying?" }]
            },
            {
              id: "c003-turn-reassurance-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-reassurance-answer", text: "You did not cause this. Travel and the combined pill can increase risk, but they do not make a clot inevitable. Your findings need urgent testing." }]
            },
            {
              id: "c003-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c003-run-understanding", text: "Before the ambulance arrives, can you tell me what you understand about the concern and the plan?" }]
            },
            {
              id: "c003-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c003-run-understanding-answer", text: "You are worried about a clot reaching my lung. It is not confirmed, but I need an ambulance and hospital tests now." }]
            },
            {
              id: "c003-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c003-run-handover", text: "Priya Nair, 42, has sudden pleuritic chest pain and breathlessness after an eight-hour flight, with combined-pill use and a swollen tender right calf. Pulse is 112, blood pressure 124/76, respiratory rate 24 and oxygen saturation 91% on room air. Her chest is clear with equal air entry. Suspected pulmonary embolism. She is monitored and receiving oxygen, with no reported active bleeding, anticoagulant use or major renal disease. She needs emergency assessment and definitive imaging." }]
            },
            {
              id: "c003-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c003-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Royal Australian College of General Practitioners",
        title: "Pulmonary embolus: Assessment and management in primary care",
        date: "September 2022",
        url: "https://www1.racgp.org.au/ajgp/2022/september/pulmonary-embolus"
      },
      {
        organisation: "Thrombosis and Haemostasis Society of Australia and New Zealand",
        title: "New guidelines from the Thrombosis and Haemostasis Society of Australia and New Zealand for the diagnosis and management of venous thromboembolism",
        date: "2019",
        url: "https://www.mja.com.au/journal/2019/210/5/new-guidelines-thrombosis-and-haemostasis-society-australia-and-new-zealand"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.10: The use of oxygen in emergencies",
        date: "Current source accessed July 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
      },
      {
        organisation: "Healthdirect Australia",
        title: "Pulmonary embolism",
        date: "Reviewed May 2025",
        url: "https://www.healthdirect.gov.au/pulmonary-embolism"
      }
    ]
  });
})();
