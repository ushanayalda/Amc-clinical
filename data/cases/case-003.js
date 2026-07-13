(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-003",
    registryId: "CP-P1-C003",
    displayNumber: "Case 3",
    title: "Sharp chest discomfort after dinner",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 1, title: "Dangerous Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History Taking"
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
          text: "Ms Priya Nair, a 42-year-old woman, has attended because of right-sided chest discomfort and mild breathlessness that began after dinner last night. She thinks it may be reflux."
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
          text: "Address the patient's concern and explain your management plan.",
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
        date: "Approved April 2021; accessed July 2026",
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

  var caseThree = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-003"; });
  caseThree.sources = [
    {
      "id": "healthdirect-chest-2025",
      "title": "Chest pain",
      "organisation": "Healthdirect Australia",
      "date": "Last reviewed September 2025",
      "url": "https://www.healthdirect.gov.au/chest-pain"
    },
    {
      "id": "healthdirect-breath-2025",
      "title": "Shortness of breath",
      "organisation": "Healthdirect Australia",
      "date": "Last reviewed June 2025",
      "url": "https://www.healthdirect.gov.au/shortness-of-breath"
    },
    {
      "id": "racgp-pe-2022",
      "title": "Pulmonary embolus: Assessment and management in primary care",
      "organisation": "Royal Australian College of General Practitioners",
      "date": "September 2022",
      "url": "https://www1.racgp.org.au/ajgp/2022/september/pulmonary-embolus"
    },
    {
      "id": "thanz-vte-2019",
      "title": "Guidelines for the diagnosis and management of venous thromboembolism",
      "organisation": "Thrombosis and Haemostasis Society of Australia and New Zealand",
      "date": "2019",
      "url": "https://www.mja.com.au/journal/2019/210/5/new-guidelines-thrombosis-and-haemostasis-society-australia-and-new-zealand"
    },
    {
      "id": "anzcor-oxygen-2021",
      "title": "Guideline 9.2.10: The Use of Oxygen in Emergencies",
      "organisation": "Australian and New Zealand Committee on Resuscitation",
      "date": "Approved April 2021; accessed July 2026",
      "url": "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
    },
    {
      "id": "amc-spec-2026",
      "title": "Clinical Examination Specifications V8.3",
      "organisation": "Australian Medical Council",
      "date": "June 2026",
      "url": "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf"
    },
    {
      "id": "amc-tips-2024",
      "title": "Tips from Examiners V1.1",
      "organisation": "Australian Medical Council",
      "date": "October 2024",
      "url": "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf"
    },
    {
      "id": "ahrq-teach-back-2024",
      "title": "Use the Teach-Back Method",
      "organisation": "Agency for Healthcare Research and Quality",
      "date": "Reviewed April 2024",
      "url": "https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html"
    },
    {
      "id": "acsqhc-handover-2026",
      "title": "Communicating for Safety Standard",
      "organisation": "Australian Commission on Safety and Quality in Health Care",
      "date": "Updated April 2026",
      "url": "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard"
    }
  ];
  caseThree.reasoningCompass = {
    "stem": {
      "title": "Keep your place while reading",
      "steps": [
        {
          "time": "0 to 30 seconds",
          "text": "Confirm the GP setting, the missing observations and the first four-minute task. Start the history, but plan to obtain observations early."
        },
        {
          "time": "30 to 60 seconds",
          "text": "Right-sided discomfort, mild breathlessness and a meal-time link do not establish a cause. Clarify onset, breathing-related pain, current symptoms and stability."
        },
        {
          "time": "1 to 2 minutes",
          "text": "Keep the task changes clear: focused history until minute 4, diagnosis and important alternatives until minute 6, then concern and management until minute 8."
        }
      ],
      "anchor": "Focused history 0 to 4 | Diagnosis and differentials 4 to 6 | Concern and management 6 to 8"
    },
    "run": {
      "title": "Keep your place during the run",
      "steps": [
        {
          "time": "0 to 1 minute",
          "text": "Hear the first story and obtain observations in parallel. Begin emergency care and monitored transfer immediately if the observations are abnormal."
        },
        {
          "time": "1 to 4 minutes",
          "text": "Clarify the symptom pattern, functional breathlessness, discriminating risks, important alternatives and treatment-safety information."
        },
        {
          "time": "4 to 8 minutes",
          "text": "Stop the history at the prompt. Use the brief safety findings, explain the leading concern and important alternatives, then answer her concern and give the management plan."
        }
      ],
      "anchor": "If oxygenation, circulation or conscious state worsens, stop routine questions, reassess ABCDE and escalate emergency support."
    }
  };
  caseThree.hints = [
    {
      "id": "c003-hint-01",
      "target": {
        "surface": "stem",
        "itemId": "c003-stem-role",
        "quote": "suburban medical clinic",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024",
        "healthdirect-chest-2025"
      ],
      "where": "Reading the setting",
      "popUp": "GP clinic. Can I keep this as a routine history?",
      "say": [
        "Start as a focused consultation, but the setting does not make chest symptoms low risk. A clinic can obtain observations and begin emergency care; serious heart or lung disease may still require monitored transfer and hospital imaging."
      ],
      "pause": "The setting changes what is available, not how serious the problem may be.",
      "recap": "This begins in primary care, with no stability information yet.",
      "reorient": "Read the symptoms and decide which observations you will request early."
    },
    {
      "id": "c003-hint-02",
      "target": {
        "surface": "stem",
        "itemId": "c003-stem-patient",
        "quote": "42-year-old woman",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-tips-2024"
      ],
      "where": "Reading Priya's age",
      "popUp": "Forty-two. Does that make a dangerous cause unlikely?",
      "say": [
        "At 42, some vascular causes are less common, but age does not explain her chest discomfort and breathlessness. I still need the symptom details and observations."
      ],
      "pause": "Do not decide from age or sex.",
      "recap": "Priya is relatively young, but the cause is still unknown.",
      "reorient": "Look at the site of the discomfort and the symptom beside it."
    },
    {
      "id": "c003-hint-03",
      "target": {
        "surface": "stem",
        "itemId": "c003-stem-patient",
        "quote": "right-sided chest discomfort",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-tips-2024"
      ],
      "where": "Reading the chest symptom",
      "popUp": "Right side. Is that reassuring?",
      "say": [
        "No. Right-sided pain is less typical for coronary pain, but it can come from the chest wall, pleura, lung, pulmonary circulation or upper abdomen. The side helps choose questions; it does not establish safety."
      ],
      "pause": "Do not dismiss chest pain because it is on the right.",
      "recap": "The location broadens the possible structures, but explains nothing yet.",
      "reorient": "Ask what the discomfort feels like and what changes it."
    },
    {
      "id": "c003-hint-04",
      "target": {
        "surface": "stem",
        "itemId": "c003-stem-patient",
        "quote": "mild breathlessness",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-breath-2025",
        "healthdirect-chest-2025"
      ],
      "where": "Reading the paired symptom",
      "popUp": "She calls the breathlessness mild. Can I trust that as the severity?",
      "say": [
        "It tells you how it feels to Priya, not whether her oxygen, respiratory rate or circulation are normal. Chest discomfort with new breathlessness needs an early stability check."
      ],
      "pause": "A patient can speak normally and still have abnormal observations.",
      "recap": "There are now two linked symptoms: chest discomfort and breathlessness.",
      "reorient": "Find out whether they began together and obtain observations early."
    },
    {
      "id": "c003-hint-05",
      "target": {
        "surface": "stem",
        "itemId": "c003-stem-patient",
        "quote": "after dinner last night",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-tips-2024"
      ],
      "where": "Reading the timing",
      "popUp": "After dinner. Is reflux already the best explanation?",
      "say": [
        "Reflux is possible. But after dinner tells you when the symptom began, not what caused it. Serious chest conditions can begin after a meal by coincidence."
      ],
      "pause": "Do not diagnose reflux just because the symptoms began after dinner.",
      "recap": "The meal link supports a question about reflux, not a conclusion.",
      "reorient": "Clarify the exact onset, quality, breathing link and current symptoms."
    },
    {
      "id": "c003-hint-06",
      "target": {
        "surface": "stem",
        "itemId": "c003-stem-patient",
        "quote": "thinks it may be reflux",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-tips-2024"
      ],
      "where": "Reading Priya's concern",
      "popUp": "Should I correct her now?",
      "say": [
        "Not yet. Acknowledge why dinner made her think of reflux, then test that explanation with questions about burning, acid taste, regurgitation, position and antacid response. Explain later if the findings point elsewhere."
      ],
      "pause": "Her explanation deserves an answer, but it is not the diagnosis.",
      "recap": "Reflux remains possible. The chest and breathing symptoms still need assessment.",
      "reorient": "Begin by asking what happened from the beginning, then separate the serious causes."
    },
    {
      "id": "c003-hint-07",
      "target": {
        "surface": "stem",
        "itemId": "c003-stem-start",
        "quote": "No observations or investigation results",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-breath-2025",
        "amc-tips-2024"
      ],
      "where": "Reading what is missing",
      "popUp": "No observations. Is that just missing paperwork?",
      "say": [
        "No. Without pulse, blood pressure, respiratory rate, oxygen saturation and temperature, you do not know whether this is a stable consultation. Ask staff to obtain them while you begin the history."
      ],
      "pause": "Do not assume her observations are normal because they were not provided.",
      "recap": "We still do not know whether she is stable.",
      "reorient": "Plan a brief opening story and parallel observations."
    },
    {
      "id": "c003-hint-08",
      "target": {
        "surface": "stem",
        "itemId": "c003-task-history",
        "quote": "focused history",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Reading task 1",
      "popUp": "Focused history. What do I need in four minutes?",
      "say": [
        "Use four blocks: exact onset and progression; associated symptoms that change urgency; relevant risks and treatment constraints; then current function."
      ],
      "pause": "This is not a full review of every system.",
      "recap": "The history must establish urgency, the leading cause and treatment safety.",
      "reorient": "Rehearse your opening question and the request for observations.",
      "clock": "Minute 0 to minute 4. Stop when the examiner gives the time prompt."
    },
    {
      "id": "c003-hint-09",
      "target": {
        "surface": "stem",
        "itemId": "c003-task-diagnosis",
        "quote": "most likely diagnosis and important differential diagnoses",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Reading task 2",
      "popUp": "How many diagnoses should I explain?",
      "say": [
        "Give one leading working diagnosis with the findings that support it. Then discuss the important alternatives and the findings that make each more or less likely. Do not recite every cause of chest pain."
      ],
      "pause": "For each important alternative, say which finding supports it or makes it less likely.",
      "recap": "Task 2 needs a lead, uncertainty and important alternatives.",
      "reorient": "At minute 4, stop the history and begin the explanation.",
      "clock": "Minute 4 to minute 6."
    },
    {
      "id": "c003-hint-10",
      "target": {
        "surface": "stem",
        "itemId": "c003-task-management",
        "quote": "patient's concern and explain your management plan",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024",
        "acsqhc-handover-2026"
      ],
      "where": "Reading task 3",
      "popUp": "Concern and management. Which comes first?",
      "say": [
        "Answer Priya's reflux concern before listing the plan. Then explain the management required by the findings, including urgent transfer if her condition requires it."
      ],
      "pause": "Do not leave her reflux concern unanswered.",
      "recap": "The final task has two parts: her concern and the plan.",
      "reorient": "Keep the last two minutes for those two parts and a brief understanding check.",
      "clock": "Minute 6 to minute 8."
    },
    {
      "id": "c003-hint-11",
      "target": {
        "surface": "run",
        "itemId": "c003-run-consent-answer",
        "quote": "probably reflux",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-tips-2024"
      ],
      "where": "Full Run: opening",
      "popUp": "She nearly cancelled because of reflux. What do I say?",
      "say": [
        "Acknowledge that the meal timing made reflux seem plausible. Do not agree or dismiss it yet. Tell her you will first clarify the chest and breathing symptoms because some causes need quicker treatment."
      ],
      "pause": "Acknowledge why she thought of reflux without agreeing that reflux is the cause.",
      "recap": "Priya expects reassurance about reflux.",
      "reorient": "Ask her to describe what happened from the beginning."
    },
    {
      "id": "c003-hint-12",
      "target": {
        "surface": "run",
        "itemId": "c003-run-story",
        "quote": "suddenly felt a sharp pain",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "healthdirect-breath-2025"
      ],
      "where": "Full Run: first story",
      "popUp": "Sudden and sharp. Does that identify the cause?",
      "say": [
        "No. Sudden onset raises urgency, and sharp pain points away from a classic pressure pattern, but several heart, lung, pleural and chest-wall problems can begin this way."
      ],
      "pause": "Do not diagnose from those two words. Check the breathing link and observations.",
      "recap": "This is an acute right-sided chest symptom.",
      "reorient": "Find out whether breathing changes the pain and whether breathlessness began with it."
    },
    {
      "id": "c003-hint-13",
      "target": {
        "surface": "run",
        "itemId": "c003-run-story",
        "quote": "catches when I take a deep breath",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-spec-2026"
      ],
      "where": "Full Run: pain pattern",
      "popUp": "What produces that sharp catch?",
      "say": [
        "This is pleuritic pain. The outer lining, called the parietal pleura, is pain-sensitive; the lung tissue and inner pleural layer are not. A deep breath moves an irritated outer lining or chest-wall area and can produce a sharp catch, but the pattern does not identify the cause by itself."
      ],
      "logic": [
        "Deep breath expands the chest",
        "an irritated pleural or chest-wall area moves",
        "sharp pain is triggered"
      ],
      "pause": "Pleuritic describes how the pain behaves; it does not identify the cause.",
      "recap": "The symptom now points toward pleura, lung circulation, pneumothorax, infection or chest wall.",
      "reorient": "Check the breathlessness and obtain observations immediately."
    },
    {
      "id": "c003-hint-14",
      "target": {
        "surface": "run",
        "itemId": "c003-run-story",
        "quote": "a little short of breath since then",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-breath-2025",
        "healthdirect-chest-2025"
      ],
      "where": "Full Run: paired symptoms",
      "popUp": "Does 'a little' make this less urgent?",
      "say": [
        "Not until you see her observations and function. Breathlessness beginning with pleuritic pain makes isolated reflux or a simple muscle strain less convincing."
      ],
      "pause": "Her description cannot replace oxygen saturation and respiratory rate.",
      "recap": "The pain and breathlessness began together.",
      "reorient": "Obtain observations while the history continues."
    },
    {
      "id": "c003-hint-15",
      "target": {
        "surface": "run",
        "itemId": "c003-run-early-observations",
        "quote": "please record her pulse",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-breath-2025",
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Full Run: parallel assessment",
      "popUp": "Why request observations before finishing the history?",
      "say": [
        "If the observations show low oxygen or instability, you must act before finishing the history. Staff can measure pulse, pressure, respiratory rate, oxygen saturation and temperature while you ask the next focused question."
      ],
      "pause": "History and safety assessment can happen together.",
      "recap": "We know the symptom pattern is concerning, but not yet how unwell she is.",
      "reorient": "Use the actual numbers to decide the next action."
    },
    {
      "id": "c003-hint-16",
      "target": {
        "surface": "run",
        "itemId": "c003-run-early-observation-findings",
        "quote": "oxygen saturation is 91% on room air",
        "occurrence": 1
      },
      "citationIds": [
        "anzcor-oxygen-2021",
        "healthdirect-breath-2025"
      ],
      "where": "Full Run: interpreting observations",
      "popUp": "The pain is moderate. Do these numbers still make this urgent?",
      "say": [
        "Yes. An oxygen saturation of 91% is abnormal. With a pulse of 112 and respiratory rate of 24, she needs oxygen, monitoring and ambulance transfer now. Her blood pressure has not fallen, so there is no current haemodynamic collapse; you still need to assess her perfusion."
      ],
      "pause": "Reflux or isolated muscle pain should not lower oxygen saturation.",
      "recap": "Priya is hypoxaemic and tachycardic, without current hypotension.",
      "reorient": "Give titrated oxygen, monitor her and arrange monitored transfer now."
    },
    {
      "id": "c003-hint-17",
      "target": {
        "surface": "run",
        "itemId": "c003-run-early-oxygen",
        "quote": "Call Triple Zero for an ambulance",
        "occurrence": 1
      },
      "citationIds": [
        "anzcor-oxygen-2021",
        "healthdirect-chest-2025",
        "healthdirect-breath-2025"
      ],
      "where": "Full Run: immediate action",
      "popUp": "Why ambulance before the diagnosis is confirmed?",
      "say": [
        "A saturation below 92% warrants oxygen from trained staff, guided by pulse oximetry. The ambulance provides monitoring and treatment during transfer, and the clinic cannot provide definitive imaging if she deteriorates."
      ],
      "pause": "Her low oxygen is enough reason for monitored transfer before the cause is confirmed.",
      "recap": "Oxygen, monitoring, emergency equipment and ambulance transfer are underway.",
      "reorient": "Continue only a focused history while she remains stable."
    },
    {
      "id": "c003-hint-18",
      "target": {
        "surface": "run",
        "itemId": "c003-run-early-concern",
        "quote": "Could I drive myself?",
        "occurrence": 1
      },
      "citationIds": [
        "anzcor-oxygen-2021",
        "healthdirect-chest-2025"
      ],
      "where": "Full Run: addressing self-transport",
      "popUp": "Can she drive herself if the pain is only five out of ten?",
      "say": [
        "No. A pain score of five does not explain an oxygen saturation of 91% or a pulse of 112. She needs monitored transfer because she could deteriorate while still looking relatively well."
      ],
      "pause": "Do not let the pain score override the observations.",
      "recap": "Her blood pressure has not fallen, but she is hypoxaemic and tachycardic.",
      "reorient": "Say clearly why driving is unsafe, then return to the focused history."
    },
    {
      "id": "c003-hint-19",
      "target": {
        "surface": "run",
        "itemId": "c003-run-current-answer",
        "quote": "worse when I breathe in",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "healthdirect-breath-2025"
      ],
      "where": "Full Run: current pain",
      "popUp": "The pain is still pleuritic. What does that add?",
      "say": [
        "It confirms that the breathing link is persistent rather than a single vague description. Use the pain score to guide analgesia. Use the breathing link and abnormal observations to assess the cause and urgency."
      ],
      "pause": "A moderate pain score does not explain the low oxygen.",
      "recap": "The pain is ongoing, moderate and consistently worse with inspiration.",
      "reorient": "Clarify radiation and whether it was maximal immediately."
    },
    {
      "id": "c003-hint-20",
      "target": {
        "surface": "run",
        "itemId": "c003-run-radiation-answer",
        "quote": "came on over a few minutes",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-spec-2026"
      ],
      "where": "Full Run: onset and radiation",
      "popUp": "No radiation and not instantly maximal. What changes?",
      "say": [
        "That makes a classic aortic-dissection pattern less typical. It does not explain the pleuritic pain, breathlessness or low oxygen, so serious heart and lung causes still need assessment."
      ],
      "pause": "Aortic dissection is less likely from this pattern, but it is not completely excluded.",
      "recap": "The pain was acute but built over a few minutes and did not radiate.",
      "reorient": "Measure the effect of breathlessness on function."
    },
    {
      "id": "c003-hint-21",
      "target": {
        "surface": "run",
        "itemId": "c003-run-breathlessness-answer",
        "quote": "unusually puffed walking from the car park",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-breath-2025",
        "amc-spec-2026"
      ],
      "where": "Full Run: functional severity",
      "popUp": "She can speak. Why ask about walking?",
      "say": [
        "Speaking tells you she is not in immediate respiratory collapse. Becoming unusually breathless on a short walk shows a real loss of function and gives more useful severity information than the word mild."
      ],
      "pause": "Use function and observations together.",
      "recap": "Breathlessness began with the pain and limits ordinary walking.",
      "reorient": "Check haemoptysis, palpitations, syncope, infection and cardiac-associated symptoms."
    },
    {
      "id": "c003-hint-22",
      "target": {
        "surface": "run",
        "itemId": "c003-run-associated-answer",
        "quote": "No blood, fainting, sweating, nausea, fever or cough",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "healthdirect-breath-2025",
        "amc-spec-2026"
      ],
      "where": "Full Run: associated symptoms",
      "popUp": "Many danger symptoms are absent. Is that reassuring enough?",
      "say": [
        "No haemoptysis does not exclude a serious lung-circulation problem. No syncope or hypotension argues against current collapse. No fever or cough makes pneumonia less supported, while the fast heartbeat matches the measured tachycardia."
      ],
      "pause": "No single absent symptom explains away the hypoxaemia.",
      "recap": "There is no current hypotension, syncope, fever or cough, but the hypoxaemia remains unexplained.",
      "reorient": "Test the reflux explanation directly."
    },
    {
      "id": "c003-hint-23",
      "target": {
        "surface": "run",
        "itemId": "c003-run-reflux-answer",
        "quote": "antacid last night and it made no difference",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-chest-2025",
        "amc-tips-2024"
      ],
      "where": "Full Run: testing reflux",
      "popUp": "Does antacid failure prove this is not reflux?",
      "say": [
        "No. Antacid response is not a diagnostic test. The absence of burning or acid taste makes reflux less supported, and reflux does not explain her low oxygen or fast pulse."
      ],
      "pause": "The meal timing no longer explains the whole presentation.",
      "recap": "Reflux is less convincing, but the serious cause is still not confirmed.",
      "reorient": "Ask about calf pain or swelling before moving to travel and hormone risks."
    },
    {
      "id": "c003-hint-24",
      "target": {
        "surface": "run",
        "itemId": "c003-run-leg-answer",
        "quote": "right calf has ached for two days",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019",
        "amc-spec-2026"
      ],
      "where": "Full Run: connecting the leg and chest",
      "popUp": "Could the leg and chest findings be one problem?",
      "say": [
        "They may be. A clot could form in a deep leg vein, travel through the right side of the heart and lodge in a pulmonary artery. Air still reaches the air sacs, but less blood flows past them to collect oxygen. A peripheral blockage can also irritate the pain-sensitive outer lining. That connects the calf symptoms with low oxygen, breathlessness and pleuritic pain. Pulmonary embolism is now the leading diagnosis."
      ],
      "logic": [
        "Deep leg-vein clot",
        "travels through the right side of the heart",
        "lodges in a pulmonary artery",
        "ventilated lung receives less blood flow",
        "oxygen transfer falls and breathing speeds up",
        "nearby outer pleura may become irritated, causing pleuritic pain"
      ],
      "pause": "Calf symptoms strengthen the concern; they do not confirm the diagnosis.",
      "recap": "Pulmonary embolism now explains the main findings better than reflux.",
      "reorient": "Clarify the travel, oestrogen exposure and other clot risks."
    },
    {
      "id": "c003-hint-25",
      "target": {
        "surface": "run",
        "itemId": "c003-run-travel-answer",
        "quote": "flight was about eight hours",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019",
        "amc-spec-2026"
      ],
      "where": "Full Run: recent travel",
      "popUp": "Did the flight cause the clot?",
      "say": [
        "It does not prove the diagnosis. During prolonged sitting, the calf muscles pump less and venous blood moves more slowly. Slower flow makes a leg-vein clot more likely. The timing supports the concern because the unilateral calf symptoms followed the journey."
      ],
      "logic": [
        "Less calf-muscle movement",
        "slower venous flow",
        "a leg-vein clot becomes more likely"
      ],
      "pause": "The flight supports the concern, but it is not proof and it is not Priya's fault.",
      "recap": "The flight supports a possible leg-vein source.",
      "reorient": "Ask about oestrogen, pregnancy, recent birth, previous clots and cancer."
    },
    {
      "id": "c003-hint-26",
      "target": {
        "surface": "run",
        "itemId": "c003-run-hormones-answer",
        "quote": "combined pill for endometriosis",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019"
      ],
      "where": "Full Run: oestrogen exposure",
      "popUp": "How does the combined pill connect?",
      "say": [
        "The combined pill contains oestrogen. It increases several clotting factors and reduces some natural anticoagulant activity, so a venous clot becomes more likely. Together with recent prolonged travel and unilateral calf symptoms, it makes a deep-vein clot more plausible. It does not prove that the pill caused this."
      ],
      "pause": "Record oestrogen as a risk factor without blaming Priya.",
      "recap": "The flight and combined pill make a leg-vein clot more plausible alongside the calf findings.",
      "reorient": "Check previous clots, family history, active cancer and treatment-safety information."
    },
    {
      "id": "c003-hint-27",
      "target": {
        "surface": "run",
        "itemId": "c003-run-history-risks-answer",
        "quote": "No.",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019"
      ],
      "where": "Full Run: previous clot and cancer risk",
      "popUp": "No previous clot, family history or cancer. Does that weaken the diagnosis too much?",
      "say": [
        "No. A first clot can occur without cancer, family history or a previous event. Her current symptoms, low oxygen, fast pulse and calf findings still require urgent assessment."
      ],
      "pause": "Do not reduce the urgency because those background risks are absent.",
      "recap": "The current presentation remains strongly concerning despite no previous or family history.",
      "reorient": "Check the important competing chest causes and bleeding safety."
    },
    {
      "id": "c003-hint-28",
      "target": {
        "surface": "run",
        "itemId": "c003-run-other-dangers",
        "quote": "chest procedure or previous collapsed lung",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "racgp-pe-2022",
        "healthdirect-chest-2025"
      ],
      "where": "Full Run: dangerous alternatives",
      "popUp": "Why keep asking alternatives after the leading diagnosis appears?",
      "say": [
        "Another emergency can look similar. Ask whether the pain is exertional or pressure-like, and about chest injury, recent procedures or previous pneumothorax. These answers may change what needs urgent treatment."
      ],
      "pause": "Keep checking the important alternatives even though pulmonary embolism now leads.",
      "recap": "Pneumothorax, pneumonia, cardiac and aortic causes still need appropriate exclusion.",
      "reorient": "Finish with medicines, allergies, bleeding, anticoagulant use and renal disease."
    },
    {
      "id": "c003-hint-29",
      "target": {
        "surface": "run",
        "itemId": "c003-run-medicines-answer",
        "quote": "no allergies and none of those problems",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019"
      ],
      "where": "Full Run: treatment safety",
      "popUp": "Why ask bleeding and kidney questions before hospital confirms it?",
      "say": [
        "Because anticoagulation and contrast imaging may be considered soon. Active bleeding, current anticoagulants, pregnancy, major renal disease and allergy information can change what is safe and which test or medicine is chosen."
      ],
      "pause": "Treatment-safety history belongs in the focused history.",
      "recap": "Priya reports no active bleeding, anticoagulant use, major renal disease or allergy.",
      "reorient": "Respect the four-minute prompt and change task."
    },
    {
      "id": "c003-hint-30",
      "target": {
        "surface": "run",
        "itemId": "c003-run-time",
        "quote": "Four minutes have elapsed",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Full Run: changing task",
      "popUp": "I still have optional questions. What now?",
      "say": [
        "Stop asking history questions and begin Task 2 now. The ambulance is already coming and safety monitoring continues in parallel. If the examiner supplies brief heart, lung and leg findings, use them in your explanation; do not spend the next two minutes performing a full examination."
      ],
      "pause": "The time prompt changes the task.",
      "recap": "There is enough information to formulate and explain the leading diagnosis.",
      "reorient": "Begin with the leading diagnosis and why it fits. Do not return to missed history questions.",
      "clock": "Minute 4 to minute 6: diagnosis and important differentials."
    },
    {
      "id": "c003-hint-31",
      "target": {
        "surface": "run",
        "itemId": "c003-run-exam-findings",
        "quote": "chest is clear with equal air entry",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "amc-spec-2026"
      ],
      "where": "Full Run: focused findings",
      "popUp": "If the chest is clear, how can the oxygen be low?",
      "say": [
        "Air can still enter both lungs normally because the obstruction is in a pulmonary blood vessel, not an airway. That is why pulmonary embolism may produce hypoxaemia with a clear chest. The swollen tender calf makes a leg-vein clot more likely."
      ],
      "pause": "A clear chest does not exclude a problem in the lung circulation.",
      "recap": "Her blood pressure has not fallen; clear equal air entry reduces a large pneumothorax; unilateral calf signs strengthen the leading diagnosis.",
      "reorient": "Explain the leg-to-lung mechanism in plain language."
    },
    {
      "id": "c003-hint-32",
      "target": {
        "surface": "run",
        "itemId": "c003-run-diagnosis",
        "quote": "leading diagnosis is a pulmonary embolism",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019",
        "amc-spec-2026"
      ],
      "where": "Full Run: explaining the diagnosis",
      "popUp": "What does Priya need to understand first?",
      "say": [
        "Say that this is the leading concern, not a confirmed result. A clot may have formed in a deep vein in her right leg, broken off and travelled to a lung artery, reducing blood flow through part of the lung."
      ],
      "logic": [
        "Leg-vein clot",
        "travels through the right heart",
        "blocks a lung artery",
        "blood flow and oxygen transfer fall"
      ],
      "pause": "Keep the spoken explanation simpler than the internal physiology.",
      "recap": "The mechanism connects the calf, pleuritic pain, breathlessness, fast pulse and low oxygen.",
      "reorient": "Explain why the important alternatives are less supported but not impossible."
    },
    {
      "id": "c003-hint-33",
      "target": {
        "surface": "run",
        "itemId": "c003-run-differentials",
        "quote": "Reflux does not explain the low oxygen or swollen calf",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "amc-spec-2026",
        "healthdirect-chest-2025"
      ],
      "where": "Full Run: comparing alternatives",
      "popUp": "How do I discuss differentials without dumping a list?",
      "say": [
        "Compare each alternative with the actual findings. Equal air entry reduces a large pneumothorax; no fever or cough reduces pneumonia; the pain pattern is less typical for coronary or aortic disease, but hospital still needs an ECG and assessment. Reflux cannot account for the hypoxaemia and unilateral calf signs."
      ],
      "pause": "Say what supports or weakens each important alternative.",
      "recap": "Pulmonary embolism fits the whole presentation best, but confirmation is still required.",
      "reorient": "Answer Priya's question about certainty directly."
    },
    {
      "id": "c003-hint-34",
      "target": {
        "surface": "run",
        "itemId": "c003-run-uncertainty",
        "quote": "cannot confirm it in the clinic",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019",
        "amc-spec-2026"
      ],
      "where": "Full Run: explaining uncertainty",
      "popUp": "If I cannot confirm it, should I sound less concerned?",
      "say": [
        "Say clearly what is most likely and what still needs proof. Pulmonary embolism is the leading diagnosis, but hospital testing must confirm it. Her low oxygen, fast pulse and calf findings make waiting for a routine outpatient test unsafe."
      ],
      "pause": "Do not call it confirmed, and do not make urgent transfer sound optional.",
      "recap": "Pulmonary embolism is not confirmed, but monitored hospital assessment cannot wait.",
      "reorient": "Move to immediate management and hospital testing.",
      "clock": "Finish the diagnostic explanation by minute 6."
    },
    {
      "id": "c003-hint-35",
      "target": {
        "surface": "run",
        "itemId": "c003-run-plan",
        "quote": "Clinic tests will not delay the ambulance",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "anzcor-oxygen-2021"
      ],
      "where": "Full Run: immediate management",
      "popUp": "Should I organise clinic tests while waiting?",
      "say": [
        "Only if they do not delay transfer or distract from monitoring. Keep her resting, continue titrated oxygen, repeat observations and reassess ABCDE. If blood pressure falls, hypoxaemia worsens, she faints or conscious state changes, escalate emergency support immediately."
      ],
      "pause": "Do not delay the ambulance for tests that can be completed safely in hospital.",
      "recap": "Immediate care is rest, oxygen, monitoring, repeated observations and ambulance transfer.",
      "reorient": "Explain how hospital will choose the diagnostic test."
    },
    {
      "id": "c003-hint-36",
      "target": {
        "surface": "run",
        "itemId": "c003-run-hospital-tests",
        "quote": "D-dimer is mainly useful when the initial probability is low",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019"
      ],
      "where": "Full Run: choosing investigations",
      "popUp": "Do I need a D-dimer before CT?",
      "say": [
        "Use PERC only when the clinician's starting probability is below 15% and every criterion is negative. It cannot rule Priya out because her pulse, oxygen level, oestrogen use and unilateral leg swelling are abnormal.",
        "If pulmonary embolism is unlikely, a negative D-dimer can exclude it; a positive result cannot confirm it. Priya's calf signs and tachycardia place her in the PE-likely Wells group, so she needs imaging. The flight and pill still matter clinically, although they are not separate Wells points."
      ],
      "pause": "Do not use PERC or a negative D-dimer to delay definitive assessment here.",
      "recap": "CT pulmonary angiography is usually appropriate here. Pregnancy, renal function and contrast issues may change the imaging choice.",
      "reorient": "Explain why anticoagulation timing depends on delay and bleeding risk."
    },
    {
      "id": "c003-hint-37",
      "target": {
        "surface": "run",
        "itemId": "c003-run-anticoagulation",
        "quote": "Whether it starts before or after imaging",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019"
      ],
      "where": "Full Run: anticoagulation and pill review",
      "popUp": "Why not automatically give an anticoagulant in the clinic?",
      "say": [
        "Anticoagulants help stop the clot growing and reduce new clots; they do not remove the obstruction immediately. If imaging is delayed, the receiving team may start treatment after checking bleeding risk, pregnancy and kidney function. This discussion must not delay transfer."
      ],
      "pause": "Check bleeding, pregnancy, kidney function, current anticoagulants and the expected imaging delay.",
      "recap": "Anticoagulation is likely, but its timing and agent require a safe clinical decision.",
      "reorient": "Advise no further combined pill pending urgent medical review and arrange a non-oestrogen alternative for endometriosis."
    },
    {
      "id": "c003-hint-38",
      "target": {
        "surface": "run",
        "itemId": "c003-run-reassurance",
        "quote": "Did I cause this by flying",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "thanz-vte-2019"
      ],
      "where": "Full Run: fear and blame",
      "popUp": "She is frightened and blaming herself. Which part do I answer first?",
      "say": [
        "Answer the blame directly: no, she did not cause this. Long travel and the combined pill can increase risk, but many people with either factor never develop a clot. Then return to what helps now: monitoring has started and hospital can confirm the diagnosis and begin treatment."
      ],
      "pause": "Do not say 'do not worry' or promise the outcome.",
      "recap": "Risk factors may have contributed, but this is not Priya's fault.",
      "reorient": "Check that she understood the concern, uncertainty and immediate plan."
    },
    {
      "id": "c003-hint-39",
      "target": {
        "surface": "run",
        "itemId": "c003-run-understanding",
        "quote": "what you understand about the concern and the plan",
        "occurrence": 1
      },
      "citationIds": [
        "amc-tips-2024",
        "ahrq-teach-back-2024",
        "acsqhc-handover-2026"
      ],
      "where": "Full Run: checking understanding",
      "popUp": "Why use teach-back in an urgent consultation?",
      "say": [
        "Pain, breathlessness and fear make information harder to retain. Ask Priya to explain the concern and next steps in her own words, then correct only what is missing or misunderstood."
      ],
      "pause": "Do not rely on 'Do you understand?'",
      "recap": "She should understand that the diagnosis is not confirmed, ambulance transfer is necessary and hospital testing is urgent.",
      "reorient": "Finish the required management first. Give a brief handover only if time remains and the examiner permits.",
      "clock": "Do not sacrifice the required concern and management for an unrequested handover."
    },
    {
      "id": "c003-hint-40",
      "target": {
        "surface": "run",
        "itemId": "c003-run-handover",
        "quote": "Suspected pulmonary embolism",
        "occurrence": 1
      },
      "citationIds": [
        "racgp-pe-2022",
        "amc-tips-2024",
        "acsqhc-handover-2026"
      ],
      "where": "Full Run: optional real-care handover",
      "popUp": "If the examiner permits time, what must the receiving team hear first?",
      "say": [
        "Handover is clinically useful, but the station did not request it. Complete the three stated tasks first. If the examiner permits time, start with identity, urgency and the working diagnosis. Give the key symptoms, observations, unilateral calf findings, clot risks, relevant bleeding and renal information, treatment underway and the need for definitive imaging."
      ],
      "pause": "Do not sacrifice a requested task or imply that pulmonary embolism is confirmed.",
      "recap": "The receiving team has her current observations, the evidence for pulmonary embolism, treatment already given and the next urgent step.",
      "reorient": "Finish the handover, then wait for the examiner to end the station.",
      "clock": "Use only the time remaining after the required concern and management."
    },
    {
      "id": "c003-hint-41",
      "target": {
        "surface": "run",
        "itemId": "c003-run-end",
        "quote": "The station is complete",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Moving to the next station",
      "popUp": "Should I keep reviewing what I missed?",
      "say": [
        "No. The station has ended. Take one breath, then begin the next stem from the first line."
      ],
      "pause": "Do not carry Case 3 into the next reading time.",
      "recap": "Case 3 is finished.",
      "reorient": "Read the next role, setting, presenting problem and tasks."
    }
  ];
  var caseThreeJourneyRefinements = {
    "c003-hint-01": {
      "say": [
        "Start as a focused consultation, but the setting does not make chest symptoms low risk."
      ],
      "deeper": [
        "A clinic can obtain observations and begin emergency care; serious heart or lung disease may still require monitored transfer and hospital imaging."
      ]
    },
    "c003-hint-02": {
      "pause": "Age and sex adjust likelihood; they do not decide the cause."
    },
    "c003-hint-03": {
      "say": [
        "Right-sided pain is less typical for coronary ischaemia, but it still needs a full chest-symptom assessment."
      ],
      "pause": "Right-sided pain does not establish safety.",
      "deeper": [
        "Right-sided pain is less typical for coronary pain, but it can come from the chest wall, pleura, lung, pulmonary circulation or upper abdomen.",
        "The side helps choose questions; it does not establish safety."
      ]
    },
    "c003-hint-05": {
      "pause": "Meal timing keeps reflux possible; it does not diagnose it."
    },
    "c003-hint-06": {
      "recap": "Reflux remains possible.",
      "deeper": [
        "Reflux remains possible. The chest and breathing symptoms still need assessment."
      ]
    },
    "c003-hint-07": {
      "say": [
        "Her stability is unknown until pulse, blood pressure, respiratory rate, oxygen saturation and temperature are obtained."
      ],
      "pause": "Ask staff to obtain observations while the history begins.",
      "deeper": [
        "Without pulse, blood pressure, respiratory rate, oxygen saturation and temperature, you do not know whether this is a stable consultation.",
        "Ask staff to obtain them while you begin the history."
      ]
    },
    "c003-hint-09": {
      "say": [
        "Give one leading diagnosis and support it with this patient's findings. Then compare only the important alternatives."
      ],
      "pause": "For each important alternative, give the finding that supports or weakens it.",
      "deeper": [
        "Give one leading working diagnosis with the findings that support it. Then discuss the important alternatives and the findings that make each more or less likely. Do not recite every cause of chest pain.",
        "For each important alternative, say which finding supports it or makes it less likely."
      ]
    },
    "c003-hint-10": {
      "pause": "Answer her reflux concern before giving the plan."
    },
    "c003-hint-11": {
      "say": [
        "Acknowledge why the meal timing suggested reflux. Then explain that you need to clarify the chest and breathing symptoms because some causes need quicker treatment."
      ],
      "deeper": [
        "Acknowledge that the meal timing made reflux seem plausible. Do not agree or dismiss it yet. Tell her you will first clarify the chest and breathing symptoms because some causes need quicker treatment."
      ]
    },
    "c003-hint-12": {
      "say": [
        "Sudden sharp pain raises urgency, but several heart, lung, pleural and chest-wall problems can begin this way."
      ],
      "pause": "The breathing link and observations come next.",
      "deeper": [
        "Sudden onset raises urgency, and sharp pain points away from a classic pressure pattern, but several heart, lung, pleural and chest-wall problems can begin this way."
      ]
    },
    "c003-hint-13": {
      "say": [
        "Pain that catches with inspiration is pleuritic. It suggests irritation of a pain-sensitive pleura or chest-wall structure."
      ],
      "logic": [],
      "deeper": [
        "A deep breath moves an irritated outer lining or chest-wall area and can produce a sharp catch, but the pattern does not identify the cause by itself.",
        "Deep breath expands the chest → an irritated pleural or chest-wall area moves → sharp pain is triggered"
      ]
    },
    "c003-hint-16": {
      "say": [
        "Yes. An oxygen saturation of 91% is abnormal. With a pulse of 112 and respiratory rate of 24, she needs oxygen, monitoring and ambulance transfer now."
      ],
      "deeper": [
        "Her blood pressure has not fallen, so there is no current haemodynamic collapse; you still need to assess her perfusion."
      ]
    },
    "c003-hint-17": {
      "clock": "Transfer is moving. Continue the focused history while monitoring."
    },
    "c003-hint-18": {
      "say": [
        "She should not drive. A pain score of five does not explain an oxygen saturation of 91% or a pulse of 112."
      ],
      "pause": "Let the observations, not the pain score, set urgency.",
      "deeper": [
        "A pain score of five does not explain an oxygen saturation of 91% or a pulse of 112.",
        "She needs monitored transfer because she could deteriorate while still looking relatively well."
      ]
    },
    "c003-hint-20": {
      "pause": "Aortic dissection is less likely from this pattern.",
      "deeper": [
        "Aortic dissection is less likely from this pattern, but it is not completely excluded."
      ]
    },
    "c003-hint-23": {
      "say": [
        "Antacid response is not a diagnostic test, and reflux does not explain low oxygen or tachycardia."
      ],
      "deeper": [
        "Antacid response is not a diagnostic test.",
        "The absence of burning or acid taste makes reflux less supported, and reflux does not explain her low oxygen or fast pulse."
      ]
    },
    "c003-hint-24": {
      "say": [
        "They may be. A clot could form in a deep leg vein, travel through the right side of the heart and lodge in a pulmonary artery."
      ],
      "logic": [],
      "deeper": [
        "Air still reaches the air sacs, but less blood flows past them to collect oxygen.",
        "A peripheral blockage can also irritate the pain-sensitive outer lining.",
        "That connects the calf symptoms with low oxygen, breathlessness and pleuritic pain.",
        "Pulmonary embolism is now the leading diagnosis.",
        "Deep leg-vein clot → travels through the right side of the heart → lodges in a pulmonary artery → ventilated lung receives less blood flow → oxygen transfer falls and breathing speeds up → nearby outer pleura may become irritated, causing pleuritic pain"
      ]
    },
    "c003-hint-25": {
      "say": [
        "It does not prove the diagnosis. During prolonged sitting, the calf muscles pump less and venous blood moves more slowly. Slower flow makes a leg-vein clot more likely."
      ],
      "pause": "The flight supports the concern.",
      "deeper": [
        "The timing supports the concern because the unilateral calf symptoms followed the journey.",
        "The flight supports the concern, but it is not proof and it is not Priya's fault."
      ]
    },
    "c003-hint-26": {
      "say": [
        "The combined pill contains oestrogen. It increases several clotting factors and reduces some natural anticoagulant activity, so a venous clot becomes more likely."
      ],
      "deeper": [
        "Together with recent prolonged travel and unilateral calf symptoms, it makes a deep-vein clot more plausible.",
        "It does not prove that the pill caused this."
      ]
    },
    "c003-hint-27": {
      "say": [
        "A first clot can occur without cancer, family history or a previous event."
      ],
      "pause": "The current findings still set the urgency.",
      "deeper": [
        "A first clot can occur without cancer, family history or a previous event.",
        "Her current symptoms, low oxygen, fast pulse and calf findings still require urgent assessment."
      ]
    },
    "c003-hint-30": {
      "say": [
        "Stop asking history questions and begin Task 2 now. The ambulance is already coming and safety monitoring continues in parallel."
      ],
      "reorient": "Begin with the leading diagnosis and why it fits.",
      "deeper": [
        "If the examiner supplies brief heart, lung and leg findings, use them in your explanation; do not spend the next two minutes performing a full examination.",
        "Begin with the leading diagnosis and why it fits. Do not return to missed history questions."
      ]
    },
    "c003-hint-31": {
      "say": [
        "Air can enter normally because the obstruction is in a pulmonary blood vessel, not an airway."
      ],
      "recap": "Equal air entry reduces a large pneumothorax; the calf signs support pulmonary embolism.",
      "deeper": [
        "Air can still enter both lungs normally because the obstruction is in a pulmonary blood vessel, not an airway.",
        "That is why pulmonary embolism may produce hypoxaemia with a clear chest.",
        "The swollen tender calf makes a leg-vein clot more likely."
      ]
    },
    "c003-hint-32": {
      "say": [
        "Tell Priya this is the leading concern, not a confirmed result. A leg clot may have travelled to a lung artery."
      ],
      "logic": [],
      "deeper": [
        "A clot may have formed in a deep vein in her right leg, broken off and travelled to a lung artery, reducing blood flow through part of the lung.",
        "Leg-vein clot → travels through the right heart → blocks a lung artery → blood flow and oxygen transfer fall"
      ]
    },
    "c003-hint-33": {
      "say": [
        "Compare each alternative with the actual findings."
      ],
      "deeper": [
        "Equal air entry reduces a large pneumothorax; no fever or cough reduces pneumonia; the pain pattern is less typical for coronary or aortic disease, but hospital still needs an ECG and assessment.",
        "Reflux cannot account for the hypoxaemia and unilateral calf signs."
      ]
    },
    "c003-hint-34": {
      "say": [
        "Say clearly what is most likely and what still needs proof. Pulmonary embolism is the leading diagnosis, but hospital testing must confirm it."
      ],
      "pause": "Call it the leading diagnosis and keep transfer urgent.",
      "deeper": [
        "Her low oxygen, fast pulse and calf findings make waiting for a routine outpatient test unsafe."
      ]
    },
    "c003-hint-35": {
      "say": [
        "Only if they do not delay transfer or distract from monitoring. Keep her resting, continue titrated oxygen, repeat observations and reassess ABCDE."
      ],
      "deeper": [
        "If blood pressure falls, hypoxaemia worsens, she faints or conscious state changes, escalate emergency support immediately."
      ]
    },
    "c003-hint-36": {
      "say": [
        "Priya is already too high risk for PERC or D-dimer to delay definitive imaging."
      ],
      "recap": "CT pulmonary angiography is usually appropriate here.",
      "deeper": [
        "If pulmonary embolism is unlikely, a negative D-dimer can exclude it; a positive result cannot confirm it.",
        "Priya's calf signs and tachycardia place her in the PE-likely Wells group, so she needs imaging.",
        "The flight and pill still matter clinically, although they are not separate Wells points.",
        "CT pulmonary angiography is usually appropriate here. Pregnancy, renal function and contrast issues may change the imaging choice."
      ]
    },
    "c003-hint-37": {
      "say": [
        "Anticoagulants help stop the clot growing and reduce new clots; they do not remove the obstruction immediately."
      ],
      "deeper": [
        "If imaging is delayed, the receiving team may start treatment after checking bleeding risk, pregnancy and kidney function.",
        "This discussion must not delay transfer."
      ]
    },
    "c003-hint-38": {
      "say": [
        "Tell her clearly that this is not her fault. Travel and the combined pill may increase risk, but neither means she caused it."
      ],
      "pause": "Acknowledge her fear without promising the outcome.",
      "deeper": [
        "Then return to what helps now: monitoring has started and hospital can confirm the diagnosis and begin treatment."
      ]
    },
    "c003-hint-39": {
      "pause": "Use teach-back instead of asking only, 'Do you understand?'",
      "recap": "She should understand the concern, uncertainty and need for urgent transfer.",
      "reorient": "Finish the required management first.",
      "clock": "Finish concern and management before any optional handover.",
      "deeper": [
        "She should understand that the diagnosis is not confirmed, ambulance transfer is necessary and hospital testing is urgent.",
        "Finish the required management first. Give a brief handover only if time remains and the examiner permits."
      ]
    },
    "c003-hint-40": {
      "say": [
        "Complete the three requested tasks first. Give a handover only if the examiner permits time."
      ],
      "pause": "Keep the diagnosis provisional and the requested tasks complete.",
      "recap": "If handover occurs, give current observations, supporting evidence, treatment and the next step.",
      "deeper": [
        "Handover is clinically useful, but the station did not request it.",
        "Complete the three stated tasks first.",
        "If the examiner permits time, start with identity, urgency and the working diagnosis.",
        "Give the key symptoms, observations, unilateral calf findings, clot risks, relevant bleeding and renal information, treatment underway and the need for definitive imaging.",
        "The receiving team has her current observations, the evidence for pulmonary embolism, treatment already given and the next urgent step."
      ]
    },
    "c003-hint-41": {
      "say": [
        "The station has ended. Take one breath, then begin the next stem from its first line."
      ],
      "pause": "Start the next stem fresh.",
      "clock": "Station ended. One breath, then the next stem.",
      "deeper": [
        "The station has ended.",
        "Take one breath, then begin the next stem from the first line."
      ]
    }
  };

  caseThree.hints = caseThree.hints.map(function (hint) {
    return Object.assign({}, hint, caseThreeJourneyRefinements[hint.id] || {});
  });
  var caseThreeDeeper = {
    "c003-hint-13": ["A deep breath moves irritated pleura or chest wall and can trigger a sharp catch. That mechanism explains the quality but does not identify the cause by itself."],
    "c003-hint-16": ["A normal-range blood pressure means there is no current haemodynamic collapse; hypoxaemia still makes the presentation unsafe for routine clinic care."],
    "c003-hint-24": ["Deep-vein clot → travels through the right heart → blocks pulmonary blood flow → oxygen transfer falls; nearby pleural irritation can create sharp inspiratory pain."],
    "c003-hint-33": ["Equal air entry lowers a large pneumothorax; no fever or cough lowers pneumonia; reflux cannot explain hypoxaemia with a unilateral calf finding."],
    "c003-hint-36": ["Use pre-test probability first. A negative D-dimer can exclude PE only when probability is low enough; a positive result does not confirm PE, and higher probability usually moves directly to imaging."],
    "c003-hint-37": ["If imaging is delayed, the receiving team may begin anticoagulation after checking bleeding risk, pregnancy and kidney function; this discussion must not delay transfer."]
  };
  caseThree.hints.forEach(function (hint) {
    if (caseThreeDeeper[hint.id]) hint.deeper = caseThreeDeeper[hint.id];
    else delete hint.deeper;
  });
  caseThree.essentialHintIds = [
    "c003-hint-03",
    "c003-hint-08",
    "c003-hint-09",
    "c003-hint-10",
    "c003-hint-13",
    "c003-hint-16",
    "c003-hint-17",
    "c003-hint-24",
    "c003-hint-30",
    "c003-hint-32",
    "c003-hint-33",
    "c003-hint-35",
    "c003-hint-36",
    "c003-hint-37",
    "c003-hint-38",
    "c003-hint-41"
  ];

  caseThree.masteryFocus = {
    case: "Move from a plausible reflux explanation to the safest diagnosis and plan as each chest, breathing and circulation clue appears.",
    clinical: "Revise an early explanation when physiology does not fit, while keeping important alternatives and the patient's concern in view.",
    tasks: [
      "Focused history",
      "Explain diagnosis and differentials",
      "Address concern and management"
    ],
    transfer: "If Priya had the same pleuritic pain and hypoxaemia but no calf findings, recent travel or oestrogen exposure, what would you reconsider and what would still require urgent transfer?",
    transferAnswer: "Removing the calf and exposure clues lowers the probability of PE, but it does not remove it. Reconsider pneumothorax, pneumonia, pericardial or coronary disease, yet pleuritic pain with hypoxaemia still requires oxygen, monitoring and urgent transfer while probability-based testing separates them.",
    transferChecks: [
      "Oxygenation, respiratory effort and circulation",
      "Breath sounds, fever and cardiac findings",
      "Formal PE probability assessment",
      "Urgent transfer still follows the hypoxaemia"
    ],
    transferCitationIds: ["racgp-pe-2022", "thanz-vte-2019"]
  };
})();
