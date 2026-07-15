(function () {
  "use strict";

  window.AMC_CURRENT_CASES = window.AMC_CURRENT_CASES || [];
  window.AMC_CURRENT_CASES.push({
    id: "case-001",
    globalId: "CP-C001",
    registryId: "CP-P1-C001",
    displayNumber: "Case 1",
    title: "Jaw discomfort while carrying groceries",
    status: "audited",
    statusLabel: "Exam case audited",
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 1, title: "Dangerous Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History Taking"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    reasoningAvailable: false,
    stem: {
      lines: [
        {
          id: "stem-role",
          text: "You are a general practitioner working in a community medical clinic."
        },
        {
          id: "stem-patient",
          text: "Ms Mirella Quinn, a 62-year-old woman, has attended after becoming short of breath and nauseated while carrying groceries from her car. She also noticed an ache in her lower jaw."
        },
        {
          id: "stem-start",
          text: "No observations or investigation results are available at the start of the consultation."
        }
      ],
      tasks: [
        {
          id: "task-history",
          text: "Take a focused history.",
          timing: "4 minutes"
        },
        {
          id: "task-reasoning",
          text: "Explain your most likely diagnosis and important differential diagnoses to the patient.",
          timing: "2 minutes"
        },
        {
          id: "task-management",
          text: "Address the patient's concerns and explain your management plan.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "run-opening",
          heading: "Opening, identity and consent",
          turns: [
            {
              id: "turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "run-start", text: "You may begin." }]
            },
            {
              id: "turn-approach",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-approach", text: "The doctor performs hand hygiene, checks that the room is private and approaches the seated patient." }]
            },
            {
              id: "turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-intro", text: "Hello, I am Ushana, one of the doctors here. Could you confirm your full name and date of birth?" }]
            },
            {
              id: "turn-id",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-id", text: "Mirella Quinn, 22 April 1964." }]
            },
            {
              id: "turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-consent", text: "Mirella, may I ask about what happened?" }]
            },
            {
              id: "turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-consent-answer", text: "Yes." }]
            }
          ]
        },
        {
          id: "run-history",
          heading: "Focused history and early safety response",
          turns: [
            {
              id: "turn-open-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-open-question", text: "Tell me what happened from the beginning." }]
            },
            {
              id: "turn-opening-story",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-opening-story", text: "About 25 minutes ago, while carrying groceries, I became breathless and sick, with a dull ache across my lower jaw. It has not settled." }]
            },
            {
              id: "turn-current",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-current", text: "Are you still feeling unwell now?" }]
            },
            {
              id: "turn-current-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-current-answer", text: "Yes, I am still breathless and nauseated." }]
            },
            {
              id: "turn-chest",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-chest", text: "Have you noticed any discomfort in your chest?" }]
            },
            {
              id: "turn-chest-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-chest-answer", text: "The middle feels heavy, but I did not think of it as pain." }]
            },
            {
              id: "turn-persistence",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-persistence", text: "Is the heaviness still present?" }]
            },
            {
              id: "turn-persistence-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-persistence-answer", text: "Yes, it is still there." }]
            },
            {
              id: "turn-character",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-character", text: "What does the heaviness feel like?" }]
            },
            {
              id: "turn-character-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-character-answer", text: "Like a tight band sitting behind my breastbone." }]
            },
            {
              id: "turn-onset",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-onset", text: "Did it reach its worst point instantly?" }]
            },
            {
              id: "turn-onset-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-onset-answer", text: "No. It built up over two or three minutes." }]
            },
            {
              id: "turn-rest",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-rest", text: "What happened after you stopped carrying the bags?" }]
            },
            {
              id: "turn-rest-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-rest-answer", text: "The jaw ache eased, but the heaviness and breathlessness continued." }]
            },
            {
              id: "turn-associated",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-associated", text: "What other symptoms came with it?" }]
            },
            {
              id: "turn-associated-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-associated-answer", text: "I became clammy and light-headed." }]
            },
            {
              id: "turn-early-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-early-escalation", text: "Mirella, this could be reduced blood flow to your heart. I am calling an ambulance while I continue the assessment." }]
            },
            {
              id: "turn-early-escalation-response",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-early-escalation-response", text: "An ambulance? I do not have real chest pain." }]
            },
            {
              id: "turn-early-escalation-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-early-escalation-explanation", text: "Heart trouble may feel like pressure or jaw discomfort, with breathlessness, nausea or sweating. Your symptoms need urgent hospital assessment." }]
            },
            {
              id: "turn-early-escalation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-early-escalation-action", text: "The doctor directs a clinic colleague to call Triple Zero, keeps Mirella seated, begins continuous cardiac monitoring, keeps the defibrillator available and asks another staff member to record vital signs and obtain a 12-lead ECG without delaying transfer." }]
            },
            {
              id: "turn-previous",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-previous", text: "Have you experienced anything similar before?" }]
            },
            {
              id: "turn-previous-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-previous-answer", text: "Last week, carrying laundry upstairs caused a milder episode that settled with rest." }]
            },
            {
              id: "turn-pleuritic",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-pleuritic", text: "Does taking a deep breath change the heaviness?" }]
            },
            {
              id: "turn-pleuritic-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-pleuritic-answer", text: "No, breathing does not change it." }]
            },
            {
              id: "turn-leg",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-leg", text: "Have you recently noticed swelling in one leg?" }]
            },
            {
              id: "turn-leg-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-leg-answer", text: "No, neither leg has been swollen." }]
            },
            {
              id: "turn-immobility",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-immobility", text: "Have you recently been immobile for a long period?" }]
            },
            {
              id: "turn-immobility-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-immobility-answer", text: "No, I have been moving around normally." }]
            },
            {
              id: "turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-history", text: "What medical conditions do you have?" }]
            },
            {
              id: "turn-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-history-answer", text: "Type 2 diabetes, high blood pressure and high cholesterol." }]
            },
            {
              id: "turn-medications",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-medications", text: "What regular medicines do you take?" }]
            },
            {
              id: "turn-medications-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-medications-answer", text: "Metformin, empagliflozin, telmisartan and atorvastatin." }]
            },
            {
              id: "turn-allergy",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-allergy", text: "Have you ever had a severe allergic reaction to aspirin?" }]
            },
            {
              id: "turn-allergy-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-allergy-answer", text: "No, I have never had a severe reaction to aspirin." }]
            },
            {
              id: "turn-bleeding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-bleeding", text: "Are you bleeding anywhere now?" }]
            },
            {
              id: "turn-bleeding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-bleeding-answer", text: "No, I am not bleeding." }]
            },
            {
              id: "turn-anticoagulant",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-anticoagulant", text: "Do you take any blood-thinning medicine?" }]
            },
            {
              id: "turn-anticoagulant-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-anticoagulant-answer", text: "No, I do not take a blood-thinning medicine." }]
            },
            {
              id: "turn-aspirin-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-aspirin-explanation", text: "You are not bleeding, have no severe aspirin allergy and do not take a blood-thinning medicine. Aspirin can reduce further clotting, so I recommend 300 milligrams to chew." }]
            },
            {
              id: "turn-aspirin",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-aspirin", text: "Mirella, may I give you the aspirin now?" }]
            },
            {
              id: "turn-aspirin-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-aspirin-consent", text: "Yes." }]
            },
            {
              id: "turn-aspirin-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-aspirin-action", text: "The doctor gives Mirella aspirin 300 milligrams to chew and documents the dose and time." }]
            },
            {
              id: "turn-smoking",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-smoking", text: "Have you ever smoked?" }]
            },
            {
              id: "turn-smoking-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-smoking-answer", text: "I stopped eight years ago. Before that I smoked for about twenty years." }]
            },
            {
              id: "turn-family",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-family", text: "Has a close relative had heart disease?" }]
            },
            {
              id: "turn-family-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-family-answer", text: "My mother had a heart attack at 61." }]
            },
            {
              id: "turn-summary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-summary", text: "You have ongoing central heaviness, jaw discomfort, breathlessness, nausea and clamminess after exertion, with a similar episode last week and several heart risk factors. I remain concerned about reduced heart blood flow." }]
            },
            {
              id: "turn-time-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "run-time-prompt", text: "Four minutes have passed. Please proceed to the remaining tasks." }]
            }
          ]
        },
        {
          id: "run-reasoning",
          heading: "Diagnosis and important alternatives",
          turns: [
            {
              id: "turn-likely-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-likely-diagnosis", text: "Mirella, my main concern is acute coronary syndrome. This means part of the heart may not be receiving enough blood. It can present as pressure, breathlessness, nausea or jaw discomfort without severe chest pain." }]
            },
            {
              id: "turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-patient-question", text: "Does that mean I am definitely having a heart attack?" }]
            },
            {
              id: "turn-uncertainty",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-uncertainty", text: "It is not definite yet. A heart tracing and repeated blood tests are needed, but the pattern is concerning enough that we should treat it as possible acute coronary syndrome now." }]
            },
            {
              id: "turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-differentials", text: "Important differential diagnoses are a clot in the lung, a problem with the aorta and a collapsed lung. Your symptoms are less typical for these because the discomfort was not instantly severe or affected by breathing, and you have no clear clot history. Reflux is possible but would not safely explain the whole pattern." }]
            }
          ]
        },
        {
          id: "run-management",
          heading: "Concerns and management",
          turns: [
            {
              id: "turn-management-overview",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-management-overview", text: "The ambulance is already on the way and you have had aspirin. You should remain seated and monitored, and you should not eat, drink or walk around while we wait." }]
            },
            {
              id: "turn-ecg-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-ecg-plan", text: "We are recording your vital signs and a 12-lead heart tracing now because the tracing should be obtained within ten minutes. This must not delay the ambulance, and one normal tracing would not safely exclude a heart problem." }]
            },
            {
              id: "turn-gtn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-gtn-plan", text: "Because the heaviness is continuing, I will give glyceryl trinitrate under your tongue once I have checked your blood pressure, ECG and recent medicines for contraindications." }]
            },
            {
              id: "turn-hospital-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-hospital-plan", text: "In hospital, the team will repeat the heart tracing and perform serial high-sensitivity troponin blood tests. Further treatment and cardiology review will depend on those results and how your symptoms change." }]
            },
            {
              id: "turn-oxygen",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-oxygen", text: "We will monitor your oxygen level. If it is 90 percent or higher, oxygen is not routinely needed. We would give oxygen if it falls below 90 percent or if there are signs of heart failure or shock." }]
            },
            {
              id: "turn-patient-transport",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-patient-transport", text: "My daughter is outside. Could she take me straight to hospital instead?" }]
            },
            {
              id: "turn-address-transport",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-address-transport", text: "No. Your symptoms are ongoing and could worsen suddenly. The ambulance allows monitoring and treatment during transport, so travelling by private car would not be safe." }]
            },
            {
              id: "turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-understanding", text: "What do you understand about why hospital assessment is needed?" }]
            },
            {
              id: "turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-understanding-answer", text: "You think this could be my heart even though the pain is not severe. I need to go by ambulance and have heart tests at hospital." }]
            },
            {
              id: "turn-closing",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-closing", text: "That is correct. I will stay with you, continue monitoring and explain any change while we wait." }]
            },
            {
              id: "turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Medical Council",
        title: "Clinical Examination Specifications V8.3",
        date: "June 2026",
        url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf"
      },
      {
        organisation: "Heart Foundation and Cardiac Society of Australia and New Zealand",
        title: "Australian clinical guideline for acute coronary syndromes",
        date: "2025",
        url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 14.1: Acute Coronary Syndromes - Presentation",
        date: "Approved December 2024",
        url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-1-acute-coronary-syndromes-presentation"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 14.2: Acute Coronary Syndromes - Initial Medical Therapy",
        date: "Approved December 2024",
        url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-2-acute-coronary-syndromes-initial-medical-therapy"
      }
    ]
  });
})();
