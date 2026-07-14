(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-042",
    globalId: "CP-C042",
    registryId: "CP-P13-C002",
    displayNumber: "Case 42",
    title: "A repeat prescription for chest tightness",
    status: "exam_complete",
    statusLabel: "Exam Stem and Full Run complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 2, title: "Dangerous Mimics" },
    pattern: { id: 13, title: "Stable Chest Pain versus Unstable Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Diagnostic Formulation"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c042-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c042-stem-patient",
          text: "Mr Miro Bennett, a 67-year-old man with a history of angina, has attended requesting a repeat prescription for his glyceryl trinitrate spray."
        },
        {
          id: "c042-stem-context",
          text: "The examiner will provide examination findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c042-task-history",
          text: "Take a focused history from Miro.",
          timing: "3 minutes"
        },
        {
          id: "c042-task-assess",
          text: "Request a focused examination and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c042-task-plan",
          text: "Explain your assessment and management plan to Miro.",
          timing: "2 minutes"
        },
        {
          id: "c042-task-handover",
          text: "Provide a concise clinical handover.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c042-run-history",
          heading: "Focused history and comparison with baseline",
          turns: [
            {
              id: "c042-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c042-run-start", text: "You may begin." }]
            },
            {
              id: "c042-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c042-run-first-action", text: "The doctor performs hand hygiene and sits facing Miro." }]
            },
            {
              id: "c042-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-introduction", text: "Hello, I am Ushana, one of the doctors here. Could I confirm your full name and date of birth?" }]
            },
            {
              id: "c042-turn-identity",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-identity", text: "Miro Bennett, 3 November 1958." }]
            },
            {
              id: "c042-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-consent", text: "Thank you, Miro. Before renewing it, may I ask about your chest symptoms?" }]
            },
            {
              id: "c042-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-consent-answer", text: "Yes. The spray is nearly empty because I have used it much more lately." }]
            },
            {
              id: "c042-turn-current-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-current-question", text: "Do you have chest discomfort, breathlessness, sweating, nausea or faintness now?" }]
            },
            {
              id: "c042-turn-current-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-current-answer", text: "No. I feel normal now." }]
            },
            {
              id: "c042-turn-baseline-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-baseline-question", text: "Tell me what your angina was like before, then what has changed." }]
            },
            {
              id: "c042-turn-baseline-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-baseline-answer", text: "For three years, central pressure came only with hills or heavy gardening, every month or two. It settled within three minutes of rest, and I rarely used the spray." }]
            },
            {
              id: "c042-turn-change-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-change-question", text: "During the recent episodes, what brought the pressure on, how often has it happened, how long did it last, and how many spray doses did you use?" }]
            },
            {
              id: "c042-turn-change-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-change-answer", text: "Five times in eight days, twice on flat ground and once to the letterbox. They lasted eight to twelve minutes and needed one or two sprays. That was new." }]
            },
            {
              id: "c042-turn-rest-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-rest-question", text: "Has it happened while you were resting or asleep? Tell me about the most recent episode." }]
            },
            {
              id: "c042-turn-rest-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-rest-answer", text: "Last night, watching television. It was stronger, moved to my left shoulder and made me breathless and clammy. It lasted twelve minutes and faded after two sprays. Nothing since." }]
            },
            {
              id: "c042-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-escalation", text: "Miro, the symptoms are more frequent, longer, triggered by less activity and present at rest. This may be acute coronary syndrome. Please remain seated while my colleague calls Triple Zero." }]
            },
            {
              id: "c042-turn-escalation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c042-run-escalation-action", text: "A staff member calls Triple Zero. Miro remains in the clinical area while the emergency equipment and defibrillator are brought nearby." }]
            },
            {
              id: "c042-turn-escalation-response",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-escalation-response", text: "An ambulance? I only came for a spray and feel fine now." }]
            },
            {
              id: "c042-turn-escalation-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-escalation-explanation", text: "Reduced heart blood flow can come and go. Being pain-free does not make this a routine prescription." }]
            },
            {
              id: "c042-turn-alternatives-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-alternatives-question", text: "Did pain reach maximum intensity immediately, tear into your back or worsen with breathing? Any coughing blood, swollen leg, new weakness or fainting?" }]
            },
            {
              id: "c042-turn-alternatives-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-alternatives-answer", text: "No. None of those." }]
            },
            {
              id: "c042-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-background-question", text: "How was angina diagnosed? Other conditions? Do you smoke?" }]
            },
            {
              id: "c042-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-background-answer", text: "A cardiologist found coronary disease three years ago. I have hypertension, high cholesterol and type 2 diabetes. I stopped smoking eight years ago. No heart attack, stent or stroke." }]
            },
            {
              id: "c042-turn-medicine-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-medicine-question", text: "Which medicines? Any missed doses, allergy, bleeding, black bowel motions or recent erection medicine?" }]
            },
            {
              id: "c042-turn-medicine-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-medicine-answer", text: "Aspirin, atorvastatin, metoprolol, perindopril, metformin and the spray. I have not taken today's tablets. No allergy, bleeding or erection medicine." }]
            },
            {
              id: "c042-turn-aspirin",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-aspirin", text: "You have no aspirin contraindication and have not taken today's dose. Please chew 300 milligrams now." }]
            },
            {
              id: "c042-turn-aspirin-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c042-run-aspirin-action", text: "Aspirin 300 milligrams is given orally while the assessment continues." }]
            },
            {
              id: "c042-turn-time-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c042-run-time-prompt", text: "Three minutes have elapsed. Please proceed to the next task." }]
            }
          ]
        },
        {
          id: "c042-run-assessment",
          heading: "Focused examination and first ECG",
          turns: [
            {
              id: "c042-turn-assessment-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-assessment-consent", text: "Miro, may I check your observations and examine your heart, lungs and circulation?" }]
            },
            {
              id: "c042-turn-assessment-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-assessment-consent-answer", text: "Yes." }]
            },
            {
              id: "c042-turn-examination-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-examination-request", text: "I assess ABC, conscious state and perfusion, obtain full observations, examine the heart and lungs and look for heart failure, pulse asymmetry, chest tenderness and unilateral calf swelling." }]
            },
            {
              id: "c042-turn-examination-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c042-run-examination-findings", text: "Miro is alert and pain-free. Pulse is 72, bilateral blood pressure 136/78, respiratory rate 16, oxygen saturation 97% on room air and temperature 36.6 degrees Celsius. Heart and chest examinations are normal, with no heart failure, pulse deficit, chest tenderness or calf swelling." }]
            },
            {
              id: "c042-turn-ecg-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-ecg-request", text: "I request a 12-lead ECG within ten minutes without delaying transfer, and compare the previous tracing." }]
            },
            {
              id: "c042-turn-ecg-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c042-run-ecg-result", text: "Sinus rhythm at 70, with no acute ST-segment or T-wave change and no change from the previous tracing." }]
            },
            {
              id: "c042-turn-ecg-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-ecg-interpretation", text: "A normal first ECG does not exclude acute coronary syndrome. This changed pattern still requires serial ECGs and high-sensitivity troponin in hospital." }]
            },
            {
              id: "c042-turn-assessment-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c042-run-assessment-prompt", text: "Five minutes have elapsed. Please explain your assessment and plan." }]
            }
          ]
        },
        {
          id: "c042-run-management",
          heading: "Explanation, treatment and transfer",
          turns: [
            {
              id: "c042-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-diagnosis", text: "Miro, your previously predictable symptoms are now more frequent, longer, triggered by less exertion and present at rest. I am treating this as suspected acute coronary syndrome. Serial high-sensitivity troponin shows heart-muscle injury; together with symptoms and ECGs, it helps distinguish unstable angina from a non-ST elevation heart attack." }]
            },
            {
              id: "c042-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-patient-question", text: "But the spray worked and the ECG is normal. Does that not mean it is my usual angina?" }]
            },
            {
              id: "c042-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-patient-answer", text: "No. The spray can relieve stable or acute coronary symptoms, so it does not prove the cause. A first ECG can be normal in acute coronary syndrome." }]
            },
            {
              id: "c042-turn-oxygen-gtn",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-oxygen-gtn", text: "Your oxygen saturation is 97%, so you do not need oxygen. You do not need GTN while pain-free. If pain returns, I will reassess, repeat the ECG and give GTN every five minutes for up to three doses only if there is no nitrate contraindication and blood pressure is safe. Other antiplatelet or anticoagulant treatment follows specialist or local protocol." }]
            },
            {
              id: "c042-turn-hospital-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-hospital-plan", text: "Hospital will use serial ECGs and high-sensitivity troponin in a validated pathway, with blood count, electrolytes, kidney function and glucose. Recurrent symptoms matter even if the first troponin is normal." }]
            },
            {
              id: "c042-turn-transport-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-transport-question", text: "I drove here. Could my wife take me to hospital instead?" }]
            },
            {
              id: "c042-turn-transport-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-transport-answer", text: "Pain or an abnormal rhythm could recur. Paramedics can monitor and treat you during the journey. Do not drive or travel by private car." }]
            },
            {
              id: "c042-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c042-run-teachback", text: "Why do you still need hospital assessment?" }]
            },
            {
              id: "c042-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c042-run-teachback-answer", text: "My pattern changed, and a normal ECG while pain-free does not exclude ACS. I need an ambulance and serial tests." }]
            },
            {
              id: "c042-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c042-run-handover-prompt", text: "Please finish with a concise handover to the ambulance clinician." }]
            },
            {
              id: "c042-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c042-run-handover", text: "Miro Bennett is 67 with coronary disease and previously predictable exertional angina. Over eight days he has had five longer, lower-threshold episodes, including twelve minutes at rest with left-shoulder radiation, dyspnoea and diaphoresis. He is pain-free and stable; initial ECG has no acute ischaemic change. Aspirin 300 milligrams was given. Oxygen and GTN are not indicated now. He needs serial ECGs, high-sensitivity troponin and definitive ACS assessment." }]
            },
            {
              id: "c042-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c042-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
        title: "Comprehensive Australian clinical guideline for diagnosing and managing acute coronary syndromes 2025",
        date: "2025",
        url: "https://assets.contentstack.io/v3/assets/blt8a393bb3b76c0ede/bltc58c127475ae7407/ACS-Guideline.pdf"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 14.1: Acute Coronary Syndromes: Presentation",
        date: "Approved December 2024, current 2026 edition",
        url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-1-acute-coronary-syndromes-presentation"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 14.2: Acute Coronary Syndromes: Initial Medical Therapy",
        date: "Approved December 2024, current 2026 edition",
        url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-2-acute-coronary-syndromes-initial-medical-therapy"
      }
    ]
  });
})();
