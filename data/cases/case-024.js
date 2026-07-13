(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-024",
    globalId: "CP-C024",
    registryId: "CP-P8-C001",
    displayNumber: "Case 24",
    title: "A brief collapse at netball training",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 8, title: "Cardiac Syncope" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History Taking"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c024-stem-role",
          text: "You are a doctor working in a general practice clinic."
        },
        {
          id: "c024-stem-patient",
          text: "Ms Amara Nwosu, a 22-year-old woman, has attended after briefly losing consciousness during netball training this morning. She feels back to normal."
        },
        {
          id: "c024-stem-witness",
          text: "Amara's teammate, Maeve Collins, witnessed the event and is present. The examiner will provide findings and an ECG when requested."
        }
      ],
      tasks: [
        {
          id: "c024-task-history",
          text: "Take a focused history from Amara and, with her consent, Maeve.",
          timing: "3 minutes"
        },
        {
          id: "c024-task-assess",
          text: "Assess Amara's current condition and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c024-task-explain",
          text: "Explain your assessment and plan to Amara.",
          timing: "2 minutes"
        },
        {
          id: "c024-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c024-run-history",
          heading: "Focused history and witness account",
          turns: [
            {
              id: "c024-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-start", text: "You may begin." }]
            },
            {
              id: "c024-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c024-run-first-action", text: "The doctor performs hand hygiene and approaches Amara and Maeve." }]
            },
            {
              id: "c024-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-intro", text: "Hello, I am Ushana, one of the doctors. Amara, can you confirm your full name? May I ask what happened, examine you and check an ECG?" }]
            },
            {
              id: "c024-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-intro-answer", text: "Amara Nwosu. Yes. I feel completely fine now. I mainly need to know whether I can play in Saturday's final." }]
            },
            {
              id: "c024-turn-event-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-event-question", text: "Please take me from just before the event until you recovered. Were you exercising or had you stopped? Any palpitations, chest discomfort, breathlessness, dizziness, nausea, warmth or fading vision?" }]
            },
            {
              id: "c024-turn-event-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-event-answer", text: "I was sprinting for the ball, not resting afterwards. My heart suddenly thumped very fast, then I woke on the court. There was no warning dizziness, nausea or fading vision, and no chest pain. I felt normal within a minute." }]
            },
            {
              id: "c024-turn-witness-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-consent", text: "Amara, may I ask Maeve what she saw?" }]
            },
            {
              id: "c024-turn-witness-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-consent-answer", text: "Yes, of course." }]
            },
            {
              id: "c024-turn-witness-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-question", text: "Maeve, what did you see? How long was Amara unresponsive? Any injury, repeated jerking, tongue biting, incontinence or confusion afterwards?" }]
            },
            {
              id: "c024-turn-witness-answer",
              speaker: "Witness",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-answer", text: "She suddenly dropped while running. We rolled her onto her side. She was out for about fifteen seconds, then answered me straight away. No shaking, tongue injury, wetting or confusion. She did not hit her head." }]
            },
            {
              id: "c024-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-background-question", text: "Any previous faint, near-faint, palpitations or unusual breathlessness with exercise? Any heart condition, seizure or recent illness? What medicines, supplements, energy products or recreational drugs do you use?" }]
            },
            {
              id: "c024-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-background-answer", text: "Twice this year I became light-headed with pounding in my chest during hard training, but stopped before passing out. I am otherwise healthy, take nothing and do not use drugs. I ate and drank normally today." }]
            },
            {
              id: "c024-turn-family-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-family-question", text: "Has a close relative had heart disease, unexplained collapse or sudden death at a young age?" }]
            },
            {
              id: "c024-turn-family-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-family-answer", text: "My father died suddenly while running at thirty-eight. They thought it was a heart attack, but there was no post-mortem. No one else has been checked." }]
            }
          ]
        },
        {
          id: "c024-run-assessment",
          heading: "Examination, ECG and interpretation",
          turns: [
            {
              id: "c024-turn-assessment-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-assessment-request", text: "I assess airway, breathing, circulation, conscious state, glucose and injury. I record lying and standing observations and examine the pulse, heart, lungs and neurological system. If she remains well, I listen during standing, Valsalva and squatting. I request a 12-lead ECG." }]
            },
            {
              id: "c024-turn-assessment-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c024-run-assessment-findings", text: "Amara is alert and comfortable. Pulse is 74 and regular, blood pressure 118/72 without a postural fall, respiratory rate 14, oxygen saturation 99% on room air and glucose 5.2 mmol/L. There is no injury or neurological deficit. A systolic ejection murmur at the left sternal edge and apex becomes louder with standing and Valsalva and softer with squatting. Lungs are clear. ECG shows sinus rhythm, left ventricular hypertrophy, deep narrow inferolateral Q waves and inferolateral T-wave inversion. QT interval is normal." }]
            },
            {
              id: "c024-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-interpretation", text: "Loss of consciousness during exertion without a vasovagal warning, preceded by palpitations, with her father's sudden death and these examination and ECG abnormalities is high-risk cardiac syncope. Hypertrophic cardiomyopathy is a leading concern, although it requires imaging and specialist assessment to confirm." }]
            },
            {
              id: "c024-turn-immediate-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-immediate-plan", text: "Amara should not resume sport or drive herself. I will call an ambulance for monitored transfer to the emergency department today. While waiting, she remains supervised, avoids exertion and has repeat observations and intravenous access. If she collapses again, we begin immediate resuscitation and use the defibrillator if indicated." }]
            },
            {
              id: "c024-turn-investigation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-investigation-plan", text: "Hospital assessment includes continuous rhythm monitoring, repeat ECG, electrolytes, renal function, magnesium, full blood count and an echocardiogram. Cardiology may arrange ambulatory monitoring, supervised exercise assessment and cardiac magnetic resonance imaging if the diagnosis or risk remains uncertain." }]
            }
          ]
        },
        {
          id: "c024-run-communication",
          heading: "Explanation, concern and handover",
          turns: [
            {
              id: "c024-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-explanation-prompt", text: "Please explain your assessment and plan to Amara." }]
            },
            {
              id: "c024-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-explanation", text: "Amara, several parts of today's blackout suggest a heart-related cause rather than a simple faint. The murmur and ECG can occur when heart muscle is unusually thick, but do not confirm it. You need a heart scan and specialist review, while monitoring may detect a rhythm problem a single ECG misses." }]
            },
            {
              id: "c024-turn-final-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-final-concern", text: "Does that mean I can never play again? I have trained all year for this final." }]
            },
            {
              id: "c024-turn-final-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-final-response", text: "I understand why Saturday matters. Playing before we know the cause could expose you to another collapse, so no training or competition for now. That is temporary, not a lifetime decision. A cardiologist will confirm the diagnosis, assess your individual sudden-death risk and discuss future exercise. An implanted defibrillator is considered only after that assessment. Do not drive until the cause has been assessed and you are medically cleared." }]
            },
            {
              id: "c024-turn-family-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-family-plan", text: "Because of your father's death, cardiology will take a three-generation family history and may offer genetic counselling and testing. If an inherited condition is confirmed, close relatives can be offered ECGs, heart scans and targeted testing." }]
            },
            {
              id: "c024-turn-teach-back",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-teach-back", text: "Before I call the ambulance, can you tell me why you should not play or drive yourself today, and what will happen next?" }]
            },
            {
              id: "c024-turn-teach-back-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-teach-back-answer", text: "The collapse might be heart-related, so exercise or driving could be unsafe. I am going by ambulance for monitoring, a heart scan and cardiology review. It is not automatically a lifetime ban." }]
            },
            {
              id: "c024-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-handover-prompt", text: "Please finish with a concise handover to the receiving clinician." }]
            },
            {
              id: "c024-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c024-run-handover", text: "Amara Nwosu is 22 and had an abrupt fifteen-second loss of consciousness while sprinting today, preceded by palpitations and without prodrome or confusion. She has had two exertional near-syncopal episodes, and her father died suddenly while running at thirty-eight. She is currently stable. Examination reveals a dynamic systolic ejection murmur; ECG shows left ventricular hypertrophy, deep narrow inferolateral Q waves and T-wave inversion. I am concerned about cardiac syncope from possible hypertrophic cardiomyopathy. She has been advised not to exercise or drive and requires monitored emergency transfer, telemetry, echocardiography and cardiology assessment of inherited disease and sudden-death risk." }]
            },
            {
              id: "c024-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Syncope",
        date: "February 2021, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219090/cpg_syncope.pdf"
      },
      {
        organisation: "American Heart Association and American College of Cardiology",
        title: "2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy: Key Points",
        date: "May 2024",
        url: "https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/05/06/15/12/2024-hypertrophic-cardiomyopathy-gl"
      },
      {
        organisation: "American College of Cardiology",
        title: "Hypertrophic Cardiomyopathy Guideline Hub",
        date: "Current July 2026",
        url: "https://www.acc.org/Guidelines/Hubs/Hypertrophic-Cardiomyopathy"
      },
      {
        organisation: "Austroads",
        title: "Assessing Fitness to Drive",
        date: "Current July 2026",
        url: "https://austroads.com.au/drivers-and-vehicles/assessing-fitness-to-drive"
      }
    ]
  });
})();
