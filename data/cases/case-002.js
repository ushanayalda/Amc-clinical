(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-002",
    registryId: "CP-P1-C002",
    displayNumber: "Case 2",
    title: "Sudden chest and back pain",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 1, title: "Dangerous Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Emergency medicine"
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
        date: "Current source accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219018/cpg_acute-aortic-dissection.pdf"
      },
      {
        organisation: "Healthdirect Australia",
        title: "Aortic dissection",
        date: "Current source accessed July 2026",
        url: "https://www.healthdirect.gov.au/aortic-dissection"
      }
    ]
  });
})();
