(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-002",
    registryId: "CP-P1-C002",
    displayNumber: "Case 2",
    title: "Sudden chest and back pain",
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
          id: "c002-stem-role",
          text: "You are a doctor working in a metropolitan emergency department."
        },
        {
          id: "c002-stem-patient",
          text: "Mr Rafael Vella, a 66-year-old man, presents with chest pain that began about 25 minutes ago while he was moving boxes in his garage."
        },
        {
          id: "c002-stem-start",
          text: "He is awake and able to speak. No treatment has been given."
        }
      ],
      tasks: [
        {
          id: "c002-task-assess",
          text: "Assess the patient and outline your management.",
          timing: "5 minutes"
        },
        {
          id: "c002-task-explain",
          text: "Explain your working diagnosis and management plan to the patient.",
          timing: "2 minutes"
        },
        {
          id: "c002-task-handover",
          text: "Give a concise clinical handover to the examiner.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c002-run-opening",
          heading: "Immediate assessment",
          turns: [
            {
              id: "c002-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c002-run-start", text: "You may begin." }]
            },
            {
              id: "c002-turn-first-look",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c002-run-first-look", text: "The doctor performs hand hygiene, approaches the patient, calls for senior emergency help and asks for continuous monitoring and resuscitation equipment." }]
            },
            {
              id: "c002-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-intro", text: "Hello, I am Ushana, one of the emergency doctors. I can see you are in pain. Could I confirm your full name and date of birth while we assess you?" }]
            },
            {
              id: "c002-turn-id",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-id", text: "Rafael Vella, 3 February 1960." }]
            },
            {
              id: "c002-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-consent", text: "Thank you, Rafael. I will ask short questions while the team checks you and starts treatment. Is that okay?" }]
            },
            {
              id: "c002-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-consent-answer", text: "Yes. Please do something for the pain." }]
            },
            {
              id: "c002-turn-abc",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-abc", text: "I assess his airway, breathing, circulation, conscious state and perfusion. Please provide his initial observations." }]
            },
            {
              id: "c002-turn-abc-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c002-run-abc-findings", text: "His airway is patent. Respiratory rate is 22 breaths per minute with equal air entry. Oxygen saturation is 97% on room air. Pulse is 104 beats per minute and regular. Right arm blood pressure is 186/104 mmHg. He is alert, pale and distressed by pain, with warm peripheries and a capillary refill time of two seconds." }]
            },
            {
              id: "c002-turn-initial-actions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-initial-actions", text: "Please keep him resting and fasting, attach continuous monitoring, obtain two large-bore intravenous lines, give titrated intravenous opioid analgesia, and send full blood count, renal function, coagulation studies, troponin and a group and crossmatch. These must not delay imaging." }]
            },
            {
              id: "c002-turn-oxygen",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-oxygen", text: "His oxygen saturation is adequate, so I will monitor it without giving routine oxygen at present." }]
            },
            {
              id: "c002-turn-early-vascular-check",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-early-vascular-check", text: "Please record the left-arm blood pressure, compare both radial pulses and perform a rapid neurological screen now." }]
            },
            {
              id: "c002-turn-early-vascular-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c002-run-early-vascular-findings", text: "Left-arm blood pressure is 154/92 mmHg and the left radial pulse is weaker. There is no current focal neurological deficit." }]
            },
            {
              id: "c002-turn-early-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-early-escalation", text: "The abrupt pain and vascular asymmetry raise serious concern for acute aortic syndrome. Please activate the acute aortic pathway and contact the emergency consultant, cardiothoracic aortic surgeon and intensive care team now." }]
            }
          ]
        },
        {
          id: "c002-run-history",
          heading: "Focused history during resuscitation",
          turns: [
            {
              id: "c002-turn-story",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-story", text: "Rafael, tell me exactly what you felt when this began." }]
            },
            {
              id: "c002-turn-story-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-story-answer", text: "It hit me all at once. A terrible sharp pain in the middle of my chest, then straight through between my shoulder blades. It was at its worst immediately." }]
            },
            {
              id: "c002-turn-current-pain",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-current-pain", text: "Is it still there, and how severe is it now from zero to ten?" }]
            },
            {
              id: "c002-turn-current-pain-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-current-pain-answer", text: "Yes. Nine out of ten. I thought I had torn a muscle lifting the box." }]
            },
            {
              id: "c002-turn-associated",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-associated", text: "Did you faint, feel short of breath, sweaty or sick?" }]
            },
            {
              id: "c002-turn-associated-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-associated-answer", text: "I nearly fainted and I am sweaty. I am not very short of breath and I have not vomited." }]
            },
            {
              id: "c002-turn-neuro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-neuro", text: "Any new weakness, numbness, trouble speaking, vision change, or pain or coldness in either arm or leg?" }]
            },
            {
              id: "c002-turn-neuro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-neuro-answer", text: "No." }]
            },
            {
              id: "c002-turn-cardiac-pattern",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-cardiac-pattern", text: "Does the pain spread into your jaw or either arm? Have you had pressure like this with exertion before?" }]
            },
            {
              id: "c002-turn-cardiac-pattern-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-cardiac-pattern-answer", text: "No. Nothing like this before, and no jaw or arm pain." }]
            },
            {
              id: "c002-turn-pe-pneumothorax",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-pe-pneumothorax", text: "Is it worse with breathing? Any coughing blood, recent leg swelling, surgery or previous blood clot?" }]
            },
            {
              id: "c002-turn-pe-pneumothorax-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-pe-pneumothorax-answer", text: "No to all of those." }]
            },
            {
              id: "c002-turn-risks",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-risks", text: "Do you have high blood pressure or a known aortic or heart-valve problem?" }]
            },
            {
              id: "c002-turn-risks-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-risks-answer", text: "I have high blood pressure. No known aortic or valve problem." }]
            },
            {
              id: "c002-turn-medicines",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-medicines", text: "What medicines do you take? Any allergies, blood thinners or aspirin today?" }]
            },
            {
              id: "c002-turn-medicines-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-medicines-answer", text: "Perindopril, but I miss it sometimes. No allergies, and I have not taken aspirin." }]
            }
          ]
        },
        {
          id: "c002-run-focused-exam",
          heading: "Focused examination and diagnostic update",
          turns: [
            {
              id: "c002-turn-exam-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-exam-request", text: "I will complete the neurological and peripheral vascular examination, assess limb perfusion, and listen to the heart and lungs." }]
            },
            {
              id: "c002-turn-exam-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c002-run-exam-findings", text: "Lower-limb pulses are palpable and equal, with normal limb perfusion. There is no focal neurological deficit or new murmur. The chest is clear with equal air entry." }]
            },
            {
              id: "c002-turn-ecg",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-ecg", text: "Please obtain a 12-lead ECG now, without delaying urgent aortic imaging or specialist involvement." }]
            },
            {
              id: "c002-turn-ecg-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c002-run-ecg-result", text: "The ECG shows sinus tachycardia with no acute ischaemic changes." }]
            },
            {
              id: "c002-turn-update-team",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-update-team", text: "Please confirm that the cardiothoracic aortic surgeon, intensive care, anaesthetics and radiology have been contacted, and alert theatre according to the acute aortic pathway." }]
            }
          ]
        },
        {
          id: "c002-run-management",
          heading: "Immediate management",
          turns: [
            {
              id: "c002-turn-withhold-acs",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-withhold-acs", text: "I will not commence empirical aspirin, anticoagulation or fibrinolysis while acute aortic dissection is strongly suspected. Fibrinolysis is contraindicated, and antithrombotic treatment requires urgent senior review because it may worsen bleeding or complicate surgery." }]
            },
            {
              id: "c002-turn-analgesia",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-analgesia", text: "After checking contraindications, I will start an intravenous beta-blocker under senior supervision, targeting a heart rate of 60 to 80. If the higher-arm systolic pressure remains elevated, I will add a titratable vasodilator, targeting 100 to 120 mmHg or the lowest pressure that preserves organ perfusion, with frequent neurological and blood-pressure checks." }]
            },
            {
              id: "c002-turn-imaging",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-imaging", text: "He is stable enough for immediate CT angiography of the aorta. If CTA becomes unsafe or impractical, urgent bedside echocardiography may identify complications and support surgical decisions, but a negative bedside study would not exclude dissection." }]
            },
            {
              id: "c002-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c002-run-time", text: "Five minutes have elapsed. Please explain your working diagnosis and plan to the patient." }]
            }
          ]
        },
        {
          id: "c002-run-explanation",
          heading: "Patient explanation",
          turns: [
            {
              id: "c002-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-explanation", text: "Rafael, I am concerned there may be a tear in the wall of the aorta, the main artery carrying blood from your heart. The sudden severe pain and different blood pressures and pulses in your arms make this more likely than a pulled muscle." }]
            },
            {
              id: "c002-turn-patient-fear",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-patient-fear", text: "A tear? Am I going to die?" }]
            },
            {
              id: "c002-turn-uncertainty",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-uncertainty", text: "I cannot confirm it until we obtain the urgent scan, but it can become life-threatening quickly. You are awake and your circulation is holding at present. The team is treating your pain, controlling the strain on the aorta and preparing the scan and specialist care now." }]
            },
            {
              id: "c002-turn-aspirin-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-aspirin-question", text: "Should I take an aspirin in case it is my heart?" }]
            },
            {
              id: "c002-turn-aspirin-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-aspirin-answer", text: "No. Aspirin helps in some heart attacks, but it could be harmful if there is bleeding within or around the aorta. We will withhold it unless senior assessment shows it is safe." }]
            },
            {
              id: "c002-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c002-run-understanding", text: "Can you tell me what you understand about the concern and what will happen next?" }]
            },
            {
              id: "c002-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c002-run-understanding-answer", text: "You think there may be a tear in the main artery. I need the scan and specialist treatment now, and I should not take aspirin." }]
            }
          ]
        },
        {
          id: "c002-run-handover",
          heading: "Clinical handover",
          turns: [
            {
              id: "c002-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c002-run-handover-prompt", text: "Please give your handover." }]
            },
            {
              id: "c002-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c002-run-handover", text: "Rafael Vella, 66, has about 35 minutes of abrupt maximal chest pain radiating between the shoulder blades, with near-syncope. He has hypertension. Pulse is 104, right-arm blood pressure 186/104 and left-arm pressure 154/92, with a weaker left radial pulse. ECG shows sinus tachycardia without ischaemic change. Suspected acute aortic syndrome. He is monitored and fasting, with two intravenous lines, bloods and crossmatch sent, titrated analgesia and anti-impulse treatment commencing. Empirical antithrombotic treatment has been withheld. Urgent CT angiography, cardiothoracic aortic review and intensive-care involvement are arranged, with theatre alerted." }]
            },
            {
              id: "c002-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c002-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "NSW Agency for Clinical Innovation, Emergency Care Institute",
        title: "Aortic dissection clinical tool",
        date: "Revised May 2025",
        url: "https://aci.health.nsw.gov.au/networks/eci/clinical/tools/aortic-dissection"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Acute aortic dissection",
        date: "Published January 2018; review date January 2021; accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219018/cpg_acute-aortic-dissection.pdf"
      },
      {
        organisation: "Healthdirect Australia",
        title: "Aortic dissection",
        date: "Last reviewed December 2023; accessed July 2026",
        url: "https://www.healthdirect.gov.au/aortic-dissection"
      }
    ]
  });

  var caseTwo = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-002"; });
  caseTwo.sources = [
    {
      "id": "aci-aortic-2025",
      "title": "Aortic dissection clinical tool",
      "organisation": "NSW Agency for Clinical Innovation, Emergency Care Institute",
      "date": "Revised May 2025",
      "url": "https://aci.health.nsw.gov.au/networks/eci/clinical/tools/aortic-dissection"
    },
    {
      "id": "healthdirect-aortic-2023",
      "title": "Aortic dissection",
      "organisation": "Healthdirect Australia",
      "date": "Last reviewed December 2023",
      "url": "https://www.healthdirect.gov.au/aortic-dissection"
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
      "id": "acc-aha-aortic-2022",
      "title": "Guideline for the Diagnosis and Management of Aortic Disease",
      "organisation": "American College of Cardiology and American Heart Association",
      "date": "2022",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9860464/"
    },
    {
      "id": "anzcor-oxygen-2021",
      "title": "Guideline 9.2.10: The Use of Oxygen in Emergencies",
      "organisation": "Australian and New Zealand Committee on Resuscitation",
      "date": "Approved April 2021",
      "url": "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies/"
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
  caseTwo.reasoningCompass = {
    "stem": {
      "title": "Keep your place while reading",
      "steps": [
        {
          "time": "0 to 30 seconds",
          "text": "Confirm the emergency-department setting and the first task. This is assessment and management, not a history-only station."
        },
        {
          "time": "30 to 60 seconds",
          "text": "Chest pain while moving boxes could be exertional or muscular. The stem does not give severity, onset pattern, radiation or whether the pain is still present. Keep those as your first questions."
        },
        {
          "time": "1 to 2 minutes",
          "text": "Keep the task changes clear: assess and manage until minute 5, explain until minute 7, then hand over. Rehearse how you will begin."
        }
      ],
      "anchor": "Assess and manage 0 to 5 | Explain 5 to 7 | Hand over 7 to 8"
    },
    "run": {
      "title": "Keep your place during the run",
      "steps": [
        {
          "time": "0 to 2 minutes",
          "text": "Senior help, ABCDE, monitoring, IV access, analgesia and both-arm vascular checks. Begin anti-impulse treatment once the findings strongly point to an aortic emergency."
        },
        {
          "time": "2 to 5 minutes",
          "text": "Brief history, focused vascular, neurological, cardiac, respiratory and abdominal assessment, and ECG while treatment and CTA preparation continue."
        },
        {
          "time": "5 to 8 minutes",
          "text": "Explain the concern and plan to minute 7. Then give the one-minute clinical handover."
        }
      ],
      "anchor": "If blood pressure falls or organ perfusion worsens: stop routine questions, reassess ABCDE and follow immediate specialist direction."
    }
  };
  caseTwo.hints = [
    {
      "id": "c002-hint-01",
      "target": {
        "surface": "stem",
        "itemId": "c002-stem-role",
        "quote": "metropolitan emergency department",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Reading the stem",
      "popUp": "Emergency department. History first, or action first?",
      "say": [
        "I would not take a full history first. While I ask a few urgent questions, the team can assess ABCDE, attach monitoring, call for senior help and start pain relief."
      ],
      "pause": "Do not delay treatment while taking the history.",
      "recap": "This setting provides resuscitation, urgent imaging and specialist care.",
      "reorient": "Read the pain details that are given, and notice what you still need to ask."
    },
    {
      "id": "c002-hint-02",
      "target": {
        "surface": "stem",
        "itemId": "c002-stem-patient",
        "quote": "66-year-old man",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Reading the stem",
      "popUp": "Does his age make this cardiac?",
      "say": [
        "At 66, I would consider serious heart and aortic causes early. His age makes them more likely, but it does not explain today’s pain."
      ],
      "pause": "Do not decide from age alone.",
      "recap": "A heart problem, an aortic emergency, pulmonary embolism and pneumothorax need early consideration.",
      "reorient": "Look closely at how the pain started."
    },
    {
      "id": "c002-hint-03",
      "target": {
        "surface": "stem",
        "itemId": "c002-stem-patient",
        "quote": "chest pain",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Reading the stem",
      "popUp": "Chest pain. Which causes need immediate attention?",
      "say": [
        "Chest pain may come from the heart, aorta, lungs, oesophagus or chest wall. The stem has not told me how it started, how severe it is, whether it travels or whether it is still present. Those details decide urgency."
      ],
      "pause": "Do not add severity or a pain pattern that the stem has not given.",
      "recap": "I need to check urgently for acute coronary syndrome, an aortic emergency, pulmonary embolism and pneumothorax while also considering reflux and muscle pain.",
      "reorient": "Clarify whether the pain was sudden or gradual, its severity, quality, exact site, radiation and whether it is ongoing."
    },
    {
      "id": "c002-hint-04",
      "target": {
        "surface": "stem",
        "itemId": "c002-stem-patient",
        "quote": "began about 25 minutes ago",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Reading the stem",
      "popUp": "Twenty-five minutes ago. What does that tell me?",
      "say": [
        "It gives me a time anchor, but not the pattern. I still need to know whether the pain was maximal immediately or built up, and whether it has continued for the full 25 minutes."
      ],
      "pause": "Start time is not the same as onset pattern or duration.",
      "recap": "This is recent chest pain with unknown severity, radiation and current status.",
      "reorient": "Ask what he was doing at the first moment of pain."
    },
    {
      "id": "c002-hint-05",
      "target": {
        "surface": "stem",
        "itemId": "c002-stem-patient",
        "quote": "while he was moving boxes",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023"
      ],
      "where": "Reading the stem",
      "popUp": "Could this simply be a muscle injury?",
      "say": [
        "Moving boxes can strain a muscle. It also involves exertion and straining, so it does not settle the cause. I would ask whether movement or palpation reproduces the pain, then check for cardiac, aortic and pulmonary features."
      ],
      "pause": "The activity supports more than one explanation.",
      "recap": "Muscle strain is possible, but serious causes still need assessment.",
      "reorient": "Check what the stem tells you about his current stability."
    },
    {
      "id": "c002-hint-06",
      "target": {
        "surface": "stem",
        "itemId": "c002-stem-start",
        "quote": "awake and able to speak",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025"
      ],
      "where": "Reading the stem",
      "popUp": "He is awake and speaking. Is the immediate risk lower?",
      "say": [
        "He is speaking, so his airway is open and he is conscious. I still do not know his blood pressure, perfusion or whether blood flow to an arm or the brain is reduced."
      ],
      "pause": "Being awake and talking does not mean he is stable.",
      "recap": "He can answer brief questions while urgent assessment begins.",
      "reorient": "Obtain observations, compare both arms and check neurological and limb perfusion."
    },
    {
      "id": "c002-hint-07",
      "target": {
        "surface": "stem",
        "itemId": "c002-stem-start",
        "quote": "No treatment has been given",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Reading the stem",
      "popUp": "What should begin before the diagnosis is confirmed?",
      "say": [
        "Start monitoring, call senior help, perform ABCDE, give titrated analgesia and obtain IV access. Do not give routine aspirin while an aortic emergency remains a serious possibility."
      ],
      "pause": "Emergency care can start while the diagnosis is being clarified.",
      "recap": "He still needs pain relief, monitoring and urgent assessment.",
      "reorient": "Read the first task as assessment and management together."
    },
    {
      "id": "c002-hint-08",
      "target": {
        "surface": "stem",
        "itemId": "c002-task-assess",
        "quote": "Assess the patient and outline your management",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Reading task 1: assess and manage",
      "popUp": "Is this mainly a history task?",
      "say": [
        "No. In five minutes, I need to check stability, ask a short emergency history, examine for vascular and neurological complications, start treatment, arrange urgent imaging and involve the relevant specialists."
      ],
      "pause": "Do not spend all five minutes taking a history.",
      "recap": "The first task requires assessment and management in parallel.",
      "reorient": "Begin with senior help, ABCDE, monitoring and analgesia.",
      "clock": "Minute 1: ABCDE and initial treatment. Minutes 1 to 4: brief history, focused examination and ECG while treatment continues. Minute 4 to 5: imaging and definitive specialist plan. If he deteriorates, return to ABCDE."
    },
    {
      "id": "c002-hint-09",
      "target": {
        "surface": "stem",
        "itemId": "c002-task-explain",
        "quote": "working diagnosis and management plan",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-aortic-2023",
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Reading task 2: explain",
      "popUp": "How certain should I sound?",
      "say": [
        "A working diagnosis is the main concern before confirmation. Tell Rafael what you suspect, which findings support it, why it is urgent, what the scan will determine and what the team is already doing."
      ],
      "pause": "Until imaging confirms it, say, “I am concerned about...”",
      "recap": "He needs a plain explanation of the concern, uncertainty and immediate plan.",
      "reorient": "At minute 5, stop speaking to the team and explain the concern directly to Rafael.",
      "clock": "Minute 5 to minute 7."
    },
    {
      "id": "c002-hint-10",
      "target": {
        "surface": "stem",
        "itemId": "c002-task-handover",
        "quote": "concise clinical handover",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024",
        "acsqhc-handover-2026"
      ],
      "where": "Reading task 3: handover",
      "popUp": "What fits into one minute?",
      "say": [
        "Give his identity, exact onset, the findings that make this urgent, current observations, working diagnosis, treatment completed, medicines withheld, CTA status and the teams contacted."
      ],
      "pause": "Include information that changes urgent care.",
      "recap": "The handover is not a repeat of the whole consultation.",
      "reorient": "While assessing him, keep track of onset, both-arm findings, treatment given, CTA status and the teams called.",
      "clock": "Begin the handover at minute 7."
    },
    {
      "id": "c002-hint-11",
      "target": {
        "surface": "run",
        "itemId": "c002-run-first-look",
        "quote": "calls for senior emergency help",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate assessment",
      "popUp": "Is calling for help premature before the diagnosis is confirmed?",
      "say": [
        "No. Recent chest pain in a 66-year-old needs prompt assessment because serious heart, aortic and lung causes can deteriorate. Calling for senior help prepares the room while you clarify the pain and check ABCDE; it does not commit you to a diagnosis."
      ],
      "pause": "Calling early does not mean you have decided on a diagnosis.",
      "recap": "Monitoring, resuscitation equipment and experienced help are being arranged.",
      "reorient": "Confirm identity and begin a brief assessment while observing his current condition."
    },
    {
      "id": "c002-hint-12",
      "target": {
        "surface": "run",
        "itemId": "c002-run-consent",
        "quote": "while the team checks you and starts treatment",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Full Run: immediate assessment",
      "popUp": "How do I take a history during resuscitation?",
      "say": [
        "Use short questions that change immediate care. The team can record observations, attach monitoring and obtain IV access while you clarify onset, pain pattern, signs of complications and what medicines he has taken."
      ],
      "pause": "Questions, examination and treatment can happen together.",
      "recap": "Rafael has agreed to a brief parallel assessment.",
      "reorient": "Ask for airway, breathing, circulation, conscious state and perfusion findings."
    },
    {
      "id": "c002-hint-13",
      "target": {
        "surface": "run",
        "itemId": "c002-run-abc-findings",
        "quote": "Right arm blood pressure is 186/104 mmHg",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate assessment",
      "popUp": "High pressure and a fast pulse. What does that change?",
      "say": [
        "Severe pain activates the sympathetic system, which raises heart rate and blood pressure. That increases the force on the aortic wall. Warm peripheries and a two-second capillary refill suggest that he is not in global shock now. They do not exclude reduced blood flow to the brain, kidneys, bowel or a limb."
      ],
      "pause": "He is hypertensive and tachycardic, but not currently in shock.",
      "recap": "Treat the pain, control heart rate and pressure carefully, and keep checking brain, kidney, bowel and limb perfusion.",
      "reorient": "Begin analgesia, IV access and preparation for possible urgent surgery."
    },
    {
      "id": "c002-hint-14",
      "target": {
        "surface": "run",
        "itemId": "c002-run-initial-actions",
        "quote": "give titrated intravenous opioid analgesia",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate assessment",
      "popUp": "Is analgesia only for comfort?",
      "say": [
        "No. Severe pain sustains sympathetic activation. Titrated opioid analgesia improves comfort and helps reduce the drive that raises heart rate and blood pressure. Fasting, two large IV lines and crossmatch also prepare for anaesthesia, major bleeding or urgent surgery."
      ],
      "pause": "Reassess breathing, conscious state, pain and blood pressure after each dose.",
      "recap": "Monitoring, analgesia, vascular access and operative preparation are underway.",
      "reorient": "Send FBC, electrolytes and renal function, LFTs, coagulation studies, troponin, lactate and crossmatch, but do not wait for the results before CTA."
    },
    {
      "id": "c002-hint-15",
      "target": {
        "surface": "run",
        "itemId": "c002-run-oxygen",
        "quote": "without giving routine oxygen",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "anzcor-oxygen-2021"
      ],
      "where": "Full Run: immediate assessment",
      "popUp": "Severe chest pain usually gets oxygen, does it not?",
      "say": [
        "His oxygen saturation is 97% on room air, so routine oxygen is not indicated. Keep monitoring and give oxygen if hypoxaemia develops."
      ],
      "pause": "Continue saturation monitoring.",
      "recap": "There is no current hypoxaemia.",
      "reorient": "Compare both arms and check neurological function."
    },
    {
      "id": "c002-hint-16",
      "target": {
        "surface": "run",
        "itemId": "c002-run-early-vascular-check",
        "quote": "compare both radial pulses",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate assessment",
      "popUp": "Why check both arms and perform a neurological screen so early?",
      "say": [
        "Branches from the aortic arch supply the arms and brain. If an acute aortic process reduces flow into one branch, an arm pressure or pulse may fall, or a neurological deficit may appear."
      ],
      "logic": [
        "Aortic branch affected",
        "reduced downstream flow",
        "pressure, pulse or neurological change"
      ],
      "pause": "This checks whether an aortic branch has reduced blood flow to an arm or the brain.",
      "recap": "The right-arm pressure is high; the left arm has not yet been compared.",
      "reorient": "Compare the actual pressures, pulses and neurological findings."
    },
    {
      "id": "c002-hint-17",
      "target": {
        "surface": "run",
        "itemId": "c002-run-early-vascular-findings",
        "quote": "the left radial pulse is weaker",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate assessment",
      "popUp": "How much does the arm difference matter?",
      "say": [
        "A 32 mmHg systolic difference with a weaker left radial pulse raises concern about reduced arterial flow. Chronic arterial disease can also cause unequal pulses, so this finding does not confirm an aortic emergency. With recent chest pain, it is enough to escalate the assessment while you clarify the onset, severity and radiation immediately."
      ],
      "pause": "A pulse difference changes the urgency; it does not supply the missing pain history.",
      "recap": "A serious aortic cause is now high on the list, but the pain pattern has not yet been established. No neurological deficit has been detected at present.",
      "reorient": "Ask one short question: did it begin suddenly, was it at its worst immediately, and did it travel to the back? Continue monitoring, analgesia and senior escalation in parallel."
    },
    {
      "id": "c002-hint-18",
      "target": {
        "surface": "run",
        "itemId": "c002-run-story-answer",
        "quote": "It hit me all at once",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused history",
      "popUp": "Why does immediate maximum pain matter so much?",
      "say": [
        "In a typical dissection, blood suddenly enters and separates layers of the aortic wall. The pain is therefore often severe from the first moment. Rafael does not need to use the word “tearing” for the pattern to matter."
      ],
      "logic": [
        "Inner-wall injury",
        "blood enters the wall",
        "wall layers separate suddenly",
        "severe pain at onset"
      ],
      "pause": "Abrupt maximal onset matters more than the adjective used.",
      "recap": "The abrupt maximal onset and arm asymmetry now strongly support acute aortic syndrome.",
      "reorient": "Do not use the back-pain location to decide whether this is Type A or Type B."
    },
    {
      "id": "c002-hint-19",
      "target": {
        "surface": "run",
        "itemId": "c002-run-story-answer",
        "quote": "between my shoulder blades",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused history",
      "popUp": "Does this identify the descending aorta?",
      "say": [
        "Interscapular pain can occur when the descending thoracic aorta is involved because it lies toward the back of the chest. Pain location varies, so it cannot determine the Stanford type or full extent."
      ],
      "pause": "Do not classify the disease from pain location.",
      "recap": "The pain location fits, but only CTA can show which parts of the aorta are involved.",
      "reorient": "Check whether the severe pain is continuing and treat it."
    },
    {
      "id": "c002-hint-20",
      "target": {
        "surface": "run",
        "itemId": "c002-run-current-pain-answer",
        "quote": "I thought I had torn a muscle",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023"
      ],
      "where": "Full Run: focused history",
      "popUp": "The lifting still sounds muscular. Why is that explanation no longer convincing?",
      "say": [
        "A muscle strain may be linked to movement, palpation or a particular muscle action. It does not explain abrupt maximal chest-to-back pain, a 32 mmHg arm-pressure difference and a weaker pulse."
      ],
      "pause": "Lifting does not explain the 32 mmHg arm-pressure difference or weaker left pulse.",
      "recap": "Muscle injury is now much less likely than acute aortic syndrome.",
      "reorient": "Ask about faintness, sweating, breathing and vomiting."
    },
    {
      "id": "c002-hint-21",
      "target": {
        "surface": "run",
        "itemId": "c002-run-associated-answer",
        "quote": "I nearly fainted",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused history",
      "popUp": "Why is near-syncope dangerous here?",
      "say": [
        "It may reflect a brief fall in blood flow to the brain. In acute aortic syndrome, possible causes include tamponade, severe aortic regurgitation, coronary involvement, rupture or branch-vessel malperfusion. Sweating may also come from severe pain and sympathetic activation."
      ],
      "pause": "Recheck circulation and neurological state if anything changes.",
      "recap": "No complication is established yet. Near-syncope means tamponade, severe aortic regurgitation, rupture and reduced organ blood flow still need active checking.",
      "reorient": "Ask about weakness, numbness, speech or vision change, leg weakness, abdominal pain, reduced urine output and a cold or painful limb."
    },
    {
      "id": "c002-hint-22",
      "target": {
        "surface": "run",
        "itemId": "c002-run-neuro",
        "quote": "Any new weakness, numbness, trouble speaking, vision change",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused history",
      "popUp": "How can an aortic problem cause neurological or limb symptoms?",
      "say": [
        "The dissection can extend into arteries supplying the brain, spinal cord, kidneys, bowel or limbs. Reduced flow can cause stroke, leg weakness, abdominal pain, reduced urine output or a cold painful limb."
      ],
      "pause": "A normal first screen describes the present moment only.",
      "recap": "The weaker left pulse already suggests reduced flow to that arm. Brain, spinal-cord and lower-limb symptoms still need checking.",
      "reorient": "Repeat pulses, limb perfusion and neurological checks. Ask about new abdominal pain and reduced urine output, and monitor the abdomen, urine output, lactate, renal function and liver function."
    },
    {
      "id": "c002-hint-23",
      "target": {
        "surface": "run",
        "itemId": "c002-run-pe-pneumothorax-answer",
        "quote": "No to all of those",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused history",
      "popUp": "Which alternatives are now less likely?",
      "say": [
        "Pulmonary embolism is less likely without pleuritic pain, significant breathlessness, hypoxaemia or clot risk. Pneumothorax is less likely with equal air entry and adequate oxygen saturation. The absence of jaw or arm pain makes acute coronary syndrome less typical, but does not exclude it."
      ],
      "pause": "These answers make pulmonary embolism and pneumothorax less likely, but they do not rule them out.",
      "recap": "Acute aortic syndrome explains the onset, back pain and vascular asymmetry better than the main alternatives.",
      "reorient": "Check aortic risk factors and medicine safety."
    },
    {
      "id": "c002-hint-24",
      "target": {
        "surface": "run",
        "itemId": "c002-run-risks-answer",
        "quote": "I have high blood pressure",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023"
      ],
      "where": "Full Run: focused history",
      "popUp": "Does hypertension confirm the diagnosis?",
      "say": [
        "Long-standing hypertension repeatedly exposes the aortic wall to higher pressure, making it more vulnerable over time. It does not confirm today’s diagnosis; the abrupt pain and arm asymmetry are what make this urgent."
      ],
      "pause": "Hypertension supports the concern without diagnosing the event.",
      "recap": "His age, sex and hypertension make acute aortic disease more plausible.",
      "reorient": "Ask when he last took perindopril, confirm allergies, and ask whether he has taken aspirin or an anticoagulant."
    },
    {
      "id": "c002-hint-25",
      "target": {
        "surface": "run",
        "itemId": "c002-run-medicines-answer",
        "quote": "Perindopril, but I miss it sometimes",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused history",
      "popUp": "How does this affect immediate care?",
      "say": [
        "Intermittent treatment may mean his blood pressure has often been uncontrolled. Ask when he last took perindopril. A fuller adherence discussion can wait until the emergency is controlled. He reports taking no aspirin, but the answer has not established whether he uses an anticoagulant, so clarify that now."
      ],
      "pause": "In this emergency, the immediate question is what he has taken today.",
      "recap": "Controlled IV treatment is required with continuous monitoring.",
      "reorient": "Examine for neurological, limb, valve and pulmonary complications."
    },
    {
      "id": "c002-hint-26",
      "target": {
        "surface": "run",
        "itemId": "c002-run-exam-findings",
        "quote": "no focal neurological deficit or new murmur",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused examination",
      "popUp": "Do these normal findings make dissection unlikely?",
      "say": [
        "No. The normal neurological examination and absence of a new murmur are useful current findings; neither rules out dissection. Equal warm legs mean no obvious lower-limb ischaemia, and a clear chest means no obvious pneumothorax, pulmonary oedema or large haemothorax. Repeat the examination, and use echocardiography to assess for acute aortic regurgitation or tamponade."
      ],
      "pause": "Document the current findings and continue repeat examinations.",
      "recap": "There is arm vascular asymmetry. No focal neurological deficit, lower-limb ischaemia, new murmur or pulmonary complication is clinically apparent now.",
      "reorient": "Use the ECG to assess coronary involvement without delaying CTA."
    },
    {
      "id": "c002-hint-27",
      "target": {
        "surface": "run",
        "itemId": "c002-run-ecg-result",
        "quote": "no acute ischaemic changes",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused examination",
      "popUp": "Does a normal ECG rule out acute aortic syndrome or coronary involvement?",
      "say": [
        "No. Acute aortic syndrome may have a normal ECG. It can also cause ischaemic changes if a Type A dissection obstructs a coronary artery. Troponin may rise from coronary involvement or other myocardial injury; it does not by itself establish primary acute coronary syndrome."
      ],
      "pause": "If ECG changes or troponin elevation appear, do not automatically switch to routine acute-coronary-syndrome treatment. Do not let either result delay CTA.",
      "recap": "There is no current ECG evidence of myocardial ischaemia.",
      "reorient": "Confirm that imaging and the specialist teams are ready."
    },
    {
      "id": "c002-hint-28",
      "target": {
        "surface": "run",
        "itemId": "c002-run-update-team",
        "quote": "alert theatre",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: focused examination",
      "popUp": "Why alert theatre before the scan has shown the type?",
      "say": [
        "Type A means the ascending aorta is involved and requires emergency surgical assessment and immediate operative treatment. Type B means the ascending aorta is not involved; it may still involve the arch. Uncomplicated Type B begins with intensive medical treatment. Rupture, malperfusion, extension, enlargement, continuing severe pain or uncontrolled hypertension makes it complicated and requires urgent intervention."
      ],
      "pause": "CTA will determine the type and complications.",
      "recap": "Because this could be Type A, cardiothoracic surgery, anaesthetics, ICU and theatre should be preparing now.",
      "reorient": "Do not give aspirin, anticoagulation or fibrinolysis while dissection is strongly suspected."
    },
    {
      "id": "c002-hint-29",
      "target": {
        "surface": "run",
        "itemId": "c002-run-withhold-acs",
        "quote": "aspirin, anticoagulation or fibrinolysis",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate management",
      "popUp": "Why withhold them when chest pain could still be coronary?",
      "say": [
        "These medicines reduce clotting or dissolve clot. If blood is separating or escaping through the aortic wall, they may worsen haemorrhage and complicate urgent surgery. Do not begin empirical acute-coronary-syndrome aspirin or anticoagulation while acute aortic syndrome is strongly suspected and urgent senior review is underway. Fibrinolysis is contraindicated. Existing anticoagulation or another compelling indication needs an individual specialist decision."
      ],
      "pause": "Do not treat this as uncomplicated acute coronary syndrome.",
      "recap": "Routine acute-coronary-syndrome antithrombotic treatment should not be started while acute aortic syndrome is strongly suspected.",
      "reorient": "Reduce pain, heart rate and the force applied to the aortic wall."
    },
    {
      "id": "c002-hint-30",
      "target": {
        "surface": "run",
        "itemId": "c002-run-analgesia",
        "quote": "start an intravenous beta-blocker",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate management",
      "popUp": "What does anti-impulse treatment actually reduce?",
      "say": [
        "Each systolic contraction raises pressure rapidly inside the aorta. An IV beta-blocker reduces heart rate and contractility, so the pressure rises less forcefully with each beat. Analgesia also reduces the pain-driven sympathetic response."
      ],
      "logic": [
        "Lower heart rate + lower contractility",
        "less force applied to the injured aortic wall"
      ],
      "pause": "Check particularly for acute aortic regurgitation, heart block and bradycardia. If an IV beta-blocker is contraindicated or not tolerated, an IV non-dihydropyridine calcium-channel blocker can be used for heart-rate control under senior direction.",
      "recap": "The target heart rate is 60 to 80 if perfusion remains adequate.",
      "reorient": "Reassess heart rate before adding a vasodilator."
    },
    {
      "id": "c002-hint-31",
      "target": {
        "surface": "run",
        "itemId": "c002-run-analgesia",
        "quote": "add a titratable vasodilator",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate management",
      "popUp": "Why does the vasodilator come after the beta-blocker?",
      "say": [
        "A vasodilator can lower pressure but trigger reflex tachycardia and stronger contraction. That may increase force on the aortic wall. Control heart rate and contractility first, then add a titratable vasodilator if the higher-arm pressure remains elevated."
      ],
      "pause": "Aim for systolic pressure around 100 to 120, or the lowest pressure that preserves organ perfusion.",
      "recap": "The order is analgesia, beta-blockade, reassessment, then vasodilator if needed.",
      "reorient": "If blood pressure falls or perfusion worsens, stop further dose escalation and reassess immediately. Hold or reduce antihypertensive treatment if hypotension or treatment-related hypoperfusion is present. Do not automatically stop anti-impulse treatment solely because malperfusion appears while he remains hypertensive. Titrate to the lowest pressure that still perfuses the brain and organs under immediate specialist direction."
    },
    {
      "id": "c002-hint-32",
      "target": {
        "surface": "run",
        "itemId": "c002-run-imaging",
        "quote": "CT angiography of the aorta",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate management",
      "popUp": "What must CTA answer?",
      "say": [
        "CTA should assess the whole aorta and its important branches. It shows the true and false channels, where the disease begins and ends, whether the ascending aorta is involved, branch obstruction, end-organ malperfusion, haemopericardium and rupture."
      ],
      "pause": "CTA must show whether the ascending aorta or major branches are involved, and whether there is rupture or reduced organ blood flow.",
      "recap": "His current blood pressure and perfusion allow immediate CTA.",
      "reorient": "If he becomes too unstable to leave resus, do not send him to CT. Use bedside echocardiography while urgent specialist treatment continues."
    },
    {
      "id": "c002-hint-33",
      "target": {
        "surface": "run",
        "itemId": "c002-run-imaging",
        "quote": "a negative bedside study would not exclude dissection",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: immediate management",
      "popUp": "Which echocardiogram helps, and what can it miss?",
      "say": [
        "Bedside transthoracic echo can quickly show tamponade, acute aortic regurgitation, ventricular dysfunction or sometimes a proximal flap. It cannot show the whole aorta reliably. Transoesophageal echo is the preferred bedside diagnostic alternative when CT is unsafe and it is available."
      ],
      "pause": "A negative transthoracic study cannot exclude dissection.",
      "recap": "CTA remains preferred while he is stable.",
      "reorient": "Change tasks when the examiner gives the time prompt."
    },
    {
      "id": "c002-hint-34",
      "target": {
        "surface": "run",
        "itemId": "c002-run-time",
        "quote": "Five minutes have elapsed",
        "occurrence": 1
      },
      "citationIds": [
        "amc-spec-2026",
        "amc-tips-2024"
      ],
      "where": "Full Run: task change at minute 5",
      "popUp": "I still have more medical details. What do I do now?",
      "say": [
        "Stop the assessment and speak directly to Rafael. State the working diagnosis, why it fits, why it is urgent, what is happening now and what the scan will determine."
      ],
      "pause": "Do not continue listing investigations.",
      "recap": "Analgesia, heart-rate and pressure control, CTA preparation and specialist calls are already underway.",
      "reorient": "Explain the aorta and the suspected tear in plain language.",
      "clock": "Minute 5 to minute 7."
    },
    {
      "id": "c002-hint-35",
      "target": {
        "surface": "run",
        "itemId": "c002-run-explanation",
        "quote": "tear in the wall of the aorta",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "healthdirect-aortic-2023",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: explaining to Rafael",
      "popUp": "What is physically happening?",
      "say": [
        "The aortic wall has layers. In a typical dissection, blood enters through an injury in the inner layer and separates the middle layer, creating a false channel. It may extend along the wall, reduce flow into branch arteries, reach the aortic valve or coronary arteries, collect around the heart or rupture through the outer wall."
      ],
      "logic": [
        "Inner-wall injury",
        "blood enters the middle layer",
        "false channel",
        "extension, branch obstruction or rupture"
      ],
      "pause": "Keep the spoken explanation simpler than this internal anatomy.",
      "recap": "The mechanism explains the abrupt pain and unequal arm circulation. CTA is still required for confirmation.",
      "reorient": "Connect the unequal pressures and pulses to reduced flow into one arm."
    },
    {
      "id": "c002-hint-36",
      "target": {
        "surface": "run",
        "itemId": "c002-run-patient-fear",
        "quote": "Am I going to die?",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-aortic-2023"
      ],
      "where": "Full Run: explaining to Rafael",
      "popUp": "How honest should I be?",
      "say": [
        "Tell him it can be life-threatening and that you cannot predict the outcome yet. Then give the current facts: he is awake, there is no sign of shock at this moment, treatment has started, and the scan and specialist teams are being arranged now."
      ],
      "pause": "Do not promise an outcome or quote mortality figures.",
      "recap": "Rafael has heard the seriousness, the uncertainty and the action already underway.",
      "reorient": "Tell him he is not in shock, so immediate CTA can proceed, but he still needs continuous monitoring because his condition can change quickly."
    },
    {
      "id": "c002-hint-37",
      "target": {
        "surface": "run",
        "itemId": "c002-run-aspirin-question",
        "quote": "Should I take an aspirin",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "acc-aha-aortic-2022"
      ],
      "where": "Full Run: explaining to Rafael",
      "popUp": "How do I explain why usual heart-attack advice does not apply?",
      "say": [
        "Say no clearly. Aspirin helps when a coronary clot is causing a heart attack. Here, the concern is blood tracking within the aortic wall and possible urgent surgery, so aspirin could increase bleeding and operative risk."
      ],
      "pause": "Give the answer before the explanation.",
      "recap": "Rafael knows why aspirin is being withheld.",
      "reorient": "Check that he understood the concern and immediate plan."
    },
    {
      "id": "c002-hint-38",
      "target": {
        "surface": "run",
        "itemId": "c002-run-understanding",
        "quote": "what you understand",
        "occurrence": 1
      },
      "citationIds": [
        "healthdirect-aortic-2023",
        "ahrq-teach-back-2024"
      ],
      "where": "Full Run: explaining to Rafael",
      "popUp": "Why use teach-back during an emergency?",
      "say": [
        "Pain and fear make information harder to retain. Ask Rafael to explain the concern and next steps in his own words. Correct only what is missing or misunderstood."
      ],
      "pause": "Do not rely on “Do you understand?”",
      "recap": "He has understood the suspected tear, urgent scan, specialist treatment and aspirin restriction.",
      "reorient": "Prepare the one-minute handover.",
      "clock": "The explanation should finish by minute 7."
    },
    {
      "id": "c002-hint-39",
      "target": {
        "surface": "run",
        "itemId": "c002-run-handover",
        "quote": "Suspected acute aortic syndrome",
        "occurrence": 1
      },
      "citationIds": [
        "aci-aortic-2025",
        "amc-spec-2026",
        "amc-tips-2024",
        "acsqhc-handover-2026"
      ],
      "where": "Full Run: clinical handover",
      "popUp": "What must the receiving team hear first?",
      "say": [
        "Start with identity, urgency and the working diagnosis. Then give abrupt maximal onset, chest-to-back radiation, near-syncope, both-arm pressures, the weaker pulse, ECG, treatment completed, antithrombotics withheld, CTA status and the teams contacted. If time permits, add: “No focal neurological deficit; both legs remain warm with equal palpable pulses.” State a medicine as given only if it has actually been administered."
      ],
      "pause": "The onset is now about 35 minutes ago, not 25, because assessment time has passed.",
      "recap": "The handover gives the urgent concern, key findings, treatment already given and next step.",
      "reorient": "Finish with his current condition and the next urgent action.",
      "clock": "One minute. Do not restart the history."
    },
    {
      "id": "c002-hint-40",
      "target": {
        "surface": "run",
        "itemId": "c002-run-end",
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
      "pause": "Do not review Case 2 during the next reading time.",
      "recap": "Case 2 is finished.",
      "reorient": "Read the next role, setting, presenting problem and tasks."
    }
  ];

  var caseTwoJourneyRefinements = {
    "c002-hint-01": {
      "say": [
        "Begin treatment and a brief emergency assessment together. The team can monitor, call senior help and start analgesia while you ask urgent questions."
      ]
    },
    "c002-hint-02": {
      "pause": "Age changes likelihood; the symptom pattern decides the action."
    },
    "c002-hint-03": {
      "say": [
        "Chest pain may come from the heart, aorta, lungs, oesophagus or chest wall."
      ],
      "pause": "Use only the severity and pattern the stem provides.",
      "recap": "I need to check urgently for cardiac, aortic and pulmonary emergencies.",
      "reorient": "Clarify whether the pain was sudden or gradual.",
      "deeper": [
        "The stem has not told me how it started, how severe it is, whether it travels or whether it is still present.",
        "Those details decide urgency.",
        "I need to check urgently for acute coronary syndrome, an aortic emergency, pulmonary embolism and pneumothorax while also considering reflux and muscle pain.",
        "Clarify whether the pain was sudden or gradual, its severity, quality, exact site, radiation and whether it is ongoing."
      ]
    },
    "c002-hint-04": {
      "say": [
        "Twenty-five minutes gives a time anchor, but you still need the onset pattern and whether the pain continues."
      ],
      "deeper": [
        "It gives me a time anchor, but not the pattern.",
        "I still need to know whether the pain was maximal immediately or built up, and whether it has continued for the full 25 minutes."
      ]
    },
    "c002-hint-05": {
      "say": [
        "Moving boxes can strain a muscle. It also involves exertion and straining, so it does not settle the cause."
      ],
      "deeper": [
        "I would ask whether movement or palpation reproduces the pain, then check for cardiac, aortic and pulmonary features."
      ]
    },
    "c002-hint-08": {
      "say": [
        "This is assessment and management in parallel: stability, a brief emergency history, focused examination, treatment, imaging and specialist help."
      ],
      "pause": "Keep assessment and treatment moving together.",
      "clock": "0-1: ABCDE. 1-4: focused assessment. 4-5: imaging and specialist plan.",
      "deeper": [
        "In five minutes, I need to check stability, ask a short emergency history, examine for vascular and neurological complications, start treatment, arrange urgent imaging and involve the relevant specialists."
      ]
    },
    "c002-hint-09": {
      "popUp": "Working diagnosis. How do I commit without pretending certainty?",
      "say": [
        "Name the diagnosis that best fits the findings available at that point. Give the two or three findings supporting it, then explain what you are doing now and what still needs confirmation."
      ],
      "pause": "Be clear about the leading concern and honest about what is not yet known.",
      "recap": "Task 2 is diagnosis, supporting evidence, immediate plan and uncertainty.",
      "reorient": "At minute 5, turn from assessment to Rafael and explain in plain language.",
      "clock": "Minutes 5 to 7: explain the working diagnosis and management plan.",
      "deeper": []
    },
    "c002-hint-10": {
      "popUp": "One minute. What does the next clinician actually need?",
      "say": [
        "Give Rafael's identity, what brought him in, the most important findings available by then, your working diagnosis, treatment already given, his response and the next urgent action."
      ],
      "pause": "Choose the facts that change immediate care.",
      "recap": "The handover carries the current problem, what has been done and what must happen next.",
      "reorient": "During the assessment, keep a brief note of key findings, actions and response.",
      "clock": "Minute 7 to 8: concise handover."
    },
    "c002-hint-11": {
      "say": [
        "Calling early is appropriate. It prepares monitoring, equipment and experienced help while you clarify the cause."
      ],
      "deeper": [
        "Recent chest pain in a 66-year-old needs prompt assessment because serious heart, aortic and lung causes can deteriorate.",
        "Calling for senior help prepares the room while you clarify the pain and check ABCDE; it does not commit you to a diagnosis."
      ]
    },
    "c002-hint-13": {
      "say": [
        "Severe pain activates the sympathetic system, which raises heart rate and blood pressure. That increases the force on the aortic wall."
      ],
      "deeper": [
        "Warm peripheries and a two-second capillary refill suggest that he is not in global shock now.",
        "They do not exclude reduced blood flow to the brain, kidneys, bowel or a limb."
      ]
    },
    "c002-hint-14": {
      "say": [
        "Analgesia improves comfort and reduces the sympathetic drive raising heart rate and blood pressure."
      ],
      "reorient": "Send essential bloods, but keep CTA moving.",
      "deeper": [
        "Severe pain sustains sympathetic activation.",
        "Titrated opioid analgesia improves comfort and helps reduce the drive that raises heart rate and blood pressure.",
        "Fasting, two large IV lines and crossmatch also prepare for anaesthesia, major bleeding or urgent surgery."
      ]
    },
    "c002-hint-16": {
      "say": [
        "The aortic arch supplies the arms and brain. Reduced branch flow can lower an arm pulse or pressure or cause a neurological deficit."
      ],
      "pause": "This checks blood flow to the arms and brain.",
      "recap": "The left arm has not yet been compared.",
      "deeper": [
        "Branches from the aortic arch supply the arms and brain.",
        "If an acute aortic process reduces flow into one branch, an arm pressure or pulse may fall, or a neurological deficit may appear."
      ]
    },
    "c002-hint-17": {
      "say": [
        "A 32 mmHg systolic difference with a weaker left radial pulse raises concern about reduced arterial flow. Chronic arterial disease can also cause unequal pulses, so this finding does not confirm an aortic emergency."
      ],
      "recap": "A serious aortic cause is now high on the list.",
      "reorient": "Clarify abrupt onset and back radiation while escalation continues.",
      "clock": "Escalate now, then return to onset and complications.",
      "deeper": [
        "With recent chest pain, it is enough to escalate the assessment while you clarify the onset, severity and radiation immediately.",
        "A serious aortic cause is now high on the list, but the pain pattern has not yet been established. No neurological deficit has been detected at present."
      ]
    },
    "c002-hint-18": {
      "say": [
        "In a typical dissection, blood suddenly enters and separates layers of the aortic wall. The pain is therefore often severe from the first moment."
      ],
      "logic": [],
      "reorient": "Let CTA, not pain location, define Type A or Type B.",
      "deeper": [
        "Rafael does not need to use the word “tearing” for the pattern to matter.",
        "Inner-wall injury → blood enters the wall → wall layers separate suddenly → severe pain at onset"
      ]
    },
    "c002-hint-19": {
      "pause": "Let imaging define the anatomy.",
      "recap": "The pain location fits.",
      "deeper": [
        "The pain location fits, but only CTA can show which parts of the aorta are involved."
      ]
    },
    "c002-hint-21": {
      "say": [
        "It may reflect a brief fall in blood flow to the brain. In acute aortic syndrome, possible causes include tamponade, severe aortic regurgitation, coronary involvement, rupture or branch-vessel malperfusion."
      ],
      "recap": "No complication is established yet.",
      "reorient": "Check brain, spinal cord, abdominal-organ and limb perfusion.",
      "deeper": [
        "Sweating may also come from severe pain and sympathetic activation.",
        "No complication is established yet. Near-syncope means tamponade, severe aortic regurgitation, rupture and reduced organ blood flow still need active checking."
      ]
    },
    "c002-hint-22": {
      "recap": "The weaker left pulse already suggests reduced flow to that arm.",
      "reorient": "Repeat pulses, limb perfusion and neurological checks.",
      "deeper": [
        "The weaker left pulse already suggests reduced flow to that arm. Brain, spinal-cord and lower-limb symptoms still need checking.",
        "Repeat pulses, limb perfusion and neurological checks. Ask about new abdominal pain and reduced urine output, and monitor the abdomen, urine output, lactate, renal function and liver function."
      ]
    },
    "c002-hint-23": {
      "say": [
        "Pulmonary embolism is less likely without pleuritic pain, significant breathlessness, hypoxaemia or clot risk. Pneumothorax is less likely with equal air entry and adequate oxygen saturation."
      ],
      "pause": "These answers make pulmonary embolism and pneumothorax less likely.",
      "recap": "Acute aortic syndrome now fits the onset, back pain and arm asymmetry best.",
      "deeper": [
        "The absence of jaw or arm pain makes acute coronary syndrome less typical, but does not exclude it.",
        "These answers make pulmonary embolism and pneumothorax less likely, but they do not rule them out.",
        "Acute aortic syndrome explains the onset, back pain and vascular asymmetry better than the main alternatives."
      ]
    },
    "c002-hint-24": {
      "reorient": "Ask when he last took perindopril.",
      "deeper": [
        "Ask when he last took perindopril, confirm allergies, and ask whether he has taken aspirin or an anticoagulant."
      ]
    },
    "c002-hint-25": {
      "say": [
        "Intermittent treatment may mean his blood pressure has often been uncontrolled. Ask when he last took perindopril. A fuller adherence discussion can wait until the emergency is controlled."
      ],
      "deeper": [
        "He reports taking no aspirin, but the answer has not established whether he uses an anticoagulant, so clarify that now."
      ]
    },
    "c002-hint-26": {
      "say": [
        "Normal neurological findings and no new murmur describe this moment; they do not exclude dissection."
      ],
      "recap": "There is arm vascular asymmetry.",
      "deeper": [
        "The normal neurological examination and absence of a new murmur are useful current findings; neither rules out dissection.",
        "Equal warm legs mean no obvious lower-limb ischaemia, and a clear chest means no obvious pneumothorax, pulmonary oedema or large haemothorax.",
        "Repeat the examination, and use echocardiography to assess for acute aortic regurgitation or tamponade.",
        "There is arm vascular asymmetry. No focal neurological deficit, lower-limb ischaemia, new murmur or pulmonary complication is clinically apparent now."
      ]
    },
    "c002-hint-27": {
      "say": [
        "A normal ECG does not exclude acute aortic syndrome or coronary involvement."
      ],
      "pause": "Reconsider coronary involvement, but keep CTA moving and avoid routine ACS treatment.",
      "deeper": [
        "Acute aortic syndrome may have a normal ECG.",
        "It can also cause ischaemic changes if a Type A dissection obstructs a coronary artery.",
        "Troponin may rise from coronary involvement or other myocardial injury; it does not by itself establish primary acute coronary syndrome.",
        "If ECG changes or troponin elevation appear, do not automatically switch to routine acute-coronary-syndrome treatment. Do not let either result delay CTA."
      ]
    },
    "c002-hint-28": {
      "say": [
        "Type A means the ascending aorta is involved and requires emergency surgical assessment and immediate operative treatment. Type B means the ascending aorta is not involved; it may still involve the arch."
      ],
      "recap": "Possible Type A disease means surgical teams should prepare now.",
      "reorient": "Withhold aspirin, anticoagulation and fibrinolysis while dissection is strongly suspected.",
      "deeper": [
        "Uncomplicated Type B begins with intensive medical treatment.",
        "Rupture, malperfusion, extension, enlargement, continuing severe pain or uncontrolled hypertension makes it complicated and requires urgent intervention.",
        "Because this could be Type A, cardiothoracic surgery, anaesthetics, ICU and theatre should be preparing now."
      ]
    },
    "c002-hint-29": {
      "say": [
        "These medicines reduce clotting or dissolve clot. If blood is separating or escaping through the aortic wall, they may worsen haemorrhage and complicate urgent surgery."
      ],
      "pause": "Treat this as suspected aortic disease, not uncomplicated acute coronary syndrome.",
      "deeper": [
        "Do not begin empirical acute-coronary-syndrome aspirin or anticoagulation while acute aortic syndrome is strongly suspected and urgent senior review is underway.",
        "Fibrinolysis is contraindicated.",
        "Existing anticoagulation or another compelling indication needs an individual specialist decision."
      ]
    },
    "c002-hint-30": {
      "logic": [],
      "pause": "Check particularly for acute aortic regurgitation, heart block and bradycardia.",
      "deeper": [
        "Check particularly for acute aortic regurgitation, heart block and bradycardia. If an IV beta-blocker is contraindicated or not tolerated, an IV non-dihydropyridine calcium-channel blocker can be used for heart-rate control under senior direction.",
        "Lower heart rate + lower contractility → less force applied to the injured aortic wall"
      ]
    },
    "c002-hint-31": {
      "say": [
        "A vasodilator can lower pressure but trigger reflex tachycardia and stronger contraction. That may increase force on the aortic wall."
      ],
      "pause": "Aim for systolic pressure around 100 to 120.",
      "reorient": "If blood pressure falls or perfusion worsens, stop further dose escalation and reassess immediately.",
      "deeper": [
        "Control heart rate and contractility first, then add a titratable vasodilator if the higher-arm pressure remains elevated.",
        "Aim for systolic pressure around 100 to 120, or the lowest pressure that preserves organ perfusion.",
        "If blood pressure falls or perfusion worsens, stop further dose escalation and reassess immediately. Hold or reduce antihypertensive treatment if hypotension or treatment-related hypoperfusion is present. Do not automatically stop anti-impulse treatment solely because malperfusion appears while he remains hypertensive. Titrate to the lowest pressure that still perfuses the brain and organs under immediate specialist direction."
      ]
    },
    "c002-hint-32": {
      "say": [
        "CTA should assess the whole aorta and its important branches."
      ],
      "pause": "CTA must show whether the ascending aorta or major branches are involved.",
      "reorient": "If he becomes too unstable to leave resus, do not send him to CT.",
      "deeper": [
        "It shows the true and false channels, where the disease begins and ends, whether the ascending aorta is involved, branch obstruction, end-organ malperfusion, haemopericardium and rupture.",
        "CTA must show whether the ascending aorta or major branches are involved, and whether there is rupture or reduced organ blood flow.",
        "If he becomes too unstable to leave resus, do not send him to CT. Use bedside echocardiography while urgent specialist treatment continues."
      ]
    },
    "c002-hint-33": {
      "say": [
        "Bedside transthoracic echo can quickly show tamponade, acute aortic regurgitation, ventricular dysfunction or sometimes a proximal flap. It cannot show the whole aorta reliably."
      ],
      "deeper": [
        "Transoesophageal echo is the preferred bedside diagnostic alternative when CT is unsafe and it is available."
      ]
    },
    "c002-hint-34": {
      "pause": "The investigation list is finished; speak to Rafael now."
    },
    "c002-hint-35": {
      "say": [
        "The aortic wall has layers. In a typical dissection, blood enters through an injury in the inner layer and separates the middle layer, creating a false channel."
      ],
      "logic": [],
      "recap": "The mechanism explains the abrupt pain and unequal arm circulation.",
      "deeper": [
        "It may extend along the wall, reduce flow into branch arteries, reach the aortic valve or coronary arteries, collect around the heart or rupture through the outer wall.",
        "The mechanism explains the abrupt pain and unequal arm circulation. CTA is still required for confirmation.",
        "Inner-wall injury → blood enters the middle layer → false channel → extension, branch obstruction or rupture"
      ]
    },
    "c002-hint-36": {
      "say": [
        "Tell him it can be life-threatening and that you cannot predict the outcome yet."
      ],
      "pause": "Be honest about uncertainty without predicting the outcome.",
      "reorient": "Explain why CTA and continuous monitoring still cannot wait.",
      "deeper": [
        "Then give the current facts: he is awake, there is no sign of shock at this moment, treatment has started, and the scan and specialist teams are being arranged now.",
        "Tell him he is not in shock, so immediate CTA can proceed, but he still needs continuous monitoring because his condition can change quickly."
      ]
    },
    "c002-hint-37": {
      "say": [
        "Advise him not to take aspirin. It helps a coronary clot but could worsen bleeding or complicate urgent aortic surgery."
      ],
      "deeper": [
        "Here, the concern is blood tracking within the aortic wall and possible urgent surgery, so aspirin could increase bleeding and operative risk."
      ]
    },
    "c002-hint-38": {
      "pause": "Use teach-back instead of asking only, 'Do you understand?'"
    },
    "c002-hint-39": {
      "say": [
        "Start with identity, urgency and suspected acute aortic syndrome; then give the onset, vascular findings, treatment and CTA status."
      ],
      "pause": "The onset is now about 35 minutes ago.",
      "clock": "Final minute: handover only.",
      "deeper": [
        "Start with identity, urgency and the working diagnosis.",
        "Then give abrupt maximal onset, chest-to-back radiation, near-syncope, both-arm pressures, the weaker pulse, ECG, treatment completed, antithrombotics withheld, CTA status and the teams contacted.",
        "If time permits, add: “No focal neurological deficit; both legs remain warm with equal palpable pulses.”",
        "State a medicine as given only if it has actually been administered.",
        "The onset is now about 35 minutes ago, not 25, because assessment time has passed."
      ]
    },
    "c002-hint-40": {
      "say": [
        "The station has ended. Take one breath, then begin the next stem from its first line."
      ],
      "pause": "Begin the next stem fresh.",
      "clock": "Station ended. One breath, then the next stem.",
      "deeper": [
        "The station has ended.",
        "Take one breath, then begin the next stem from the first line."
      ]
    }
  };

  caseTwo.hints = caseTwo.hints.map(function (hint) {
    return Object.assign({}, hint, caseTwoJourneyRefinements[hint.id] || {});
  });
  var caseTwoDeeper = {
    "c002-hint-05": ["Reproduction by movement or palpation supports a chest-wall source, but it does not remove the need to check cardiac, aortic and pulmonary features."],
    "c002-hint-13": ["Warm skin and a near-normal refill argue against global shock now; they do not exclude reduced blood flow to the brain, kidneys, bowel or one limb."],
    "c002-hint-16": ["Aortic-arch branches supply the arms and brain. Reduced flow into one branch can lower an arm pulse or pressure or cause a focal neurological deficit."],
    "c002-hint-18": ["Inner-wall injury → blood enters and separates the wall layers → sudden severe pain and possible branch-vessel compromise."],
    "c002-hint-25": ["The answer has not established whether he uses an anticoagulant. Clarify this now because it changes bleeding risk and urgent treatment decisions."],
    "c002-hint-29": ["While acute aortic syndrome is strongly suspected, routine aspirin, anticoagulation or fibrinolysis can worsen bleeding or complicate urgent surgery."],
    "c002-hint-31": ["Control heart rate and contractility before adding a vasodilator; otherwise reflex tachycardia can increase force on the injured wall. Titrate to the lowest pressure that still preserves organ perfusion."]
  };
  caseTwo.hints.forEach(function (hint) {
    if (caseTwoDeeper[hint.id]) hint.deeper = caseTwoDeeper[hint.id];
    else delete hint.deeper;
  });
  caseTwo.essentialHintIds = [
    "c002-hint-01",
    "c002-hint-03",
    "c002-hint-08",
    "c002-hint-09",
    "c002-hint-10",
    "c002-hint-13",
    "c002-hint-17",
    "c002-hint-18",
    "c002-hint-29",
    "c002-hint-30",
    "c002-hint-31",
    "c002-hint-32",
    "c002-hint-34",
    "c002-hint-36",
    "c002-hint-39",
    "c002-hint-40"
  ];

  caseTwo.masteryFocus = {
    case: "Recognise a time-critical chest-pain pattern, control the first actions and explain uncertainty without losing the task clock.",
    clinical: "Use onset, mechanism and examination differences to separate dangerous look-alikes while treatment and transfer continue.",
    tasks: [
      "Assess and outline management",
      "Explain diagnosis and management",
      "Concise clinical handover"
    ],
    transfer: "If the same abrupt chest-to-back pain came with equal arm pressures but a new focal neurological deficit, how would your assessment and immediate plan change?",
    transferAnswer: "Equal arm pressures do not rule out dissection. A new focal neurological deficit increases concern for carotid or branch-vessel involvement, so keep acute aortic syndrome central, avoid thrombolysis or antithrombotic treatment until it is excluded, and arrange immediate specialist transfer and aortic imaging: CT angiography if stable, bedside echocardiographic imaging if too unstable.",
    transferChecks: [
      "Abrupt maximal pain remains present",
      "Full neurological and limb-perfusion examination",
      "Imaging chosen from haemodynamic stability",
      "ACS or stroke treatment withheld until dissection is excluded"
    ],
    transferCitationIds: ["aci-aortic-2025"]
  };

})();
