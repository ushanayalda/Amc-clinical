(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-026",
    globalId: "CP-C026",
    registryId: "CP-P8-C003",
    displayNumber: "Case 26",
    title: "A fall with a missing moment",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 8, title: "Cardiac Syncope" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c026-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c026-stem-patient",
          text: "Mrs Eleni Markou, a 79-year-old woman, has presented after falling in her kitchen and sustaining a small bruise to her forehead. She cannot remember how the fall began."
        },
        {
          id: "c026-stem-start",
          text: "Eleni's daughter, Nadia Markou, is present. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c026-task-history",
          text: "Take a focused history from Eleni and, with her consent, Nadia.",
          timing: "2 minutes"
        },
        {
          id: "c026-task-assess",
          text: "Assess Eleni and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c026-task-explain",
          text: "Explain your assessment and management plan to Eleni and Nadia.",
          timing: "2 minutes"
        },
        {
          id: "c026-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c026-run-history",
          heading: "History, collateral account and initial assessment",
          turns: [
            {
              id: "c026-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-start", text: "You may begin." }]
            },
            {
              id: "c026-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c026-run-first-action", text: "The doctor performs hand hygiene and approaches Eleni and Nadia." }]
            },
            {
              id: "c026-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your full name and date of birth. Eleni, may I ask about the fall, examine you and hear Nadia's account?" }]
            },
            {
              id: "c026-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-consent", text: "I am Eleni Markou. Yes. I remember walking towards the sink, then Nadia was beside me on the floor." }]
            },
            {
              id: "c026-turn-event-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-event-question", text: "Before the missing moment, did you feel light-headed, warm or sick? Any vision change, unusual heartbeat, chest discomfort or breathlessness? Had you just stood up or felt pain?" }]
            },
            {
              id: "c026-turn-event-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-event-answer", text: "No warning at all, and I was already standing. I knew where I was immediately afterwards. I feel normal now." }]
            },
            {
              id: "c026-turn-witness-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-witness-question", text: "Nadia, did she trip or protect herself? How long was she unresponsive? Any stiffening, repeated jerking, tongue injury, incontinence or confusion afterwards?" }]
            },
            {
              id: "c026-turn-witness-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c026-run-witness-answer", text: "Nothing was in her way. Mum suddenly dropped without putting out her hands and did not answer for about fifteen seconds. There was no stiffening, repeated shaking, wetting or tongue injury. She recognised me immediately." }]
            },
            {
              id: "c026-turn-prior-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-prior-question", text: "Any previous unexplained falls or near-faints? Any heart disease, stroke, seizures or recent illness? What prescribed and non-prescribed medicines do you take, especially heart-rate tablets?" }]
            },
            {
              id: "c026-turn-prior-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-prior-answer", text: "I have hypertension and arthritis. I take only amlodipine and paracetamol, with no supplements or allergies. I blamed two falls this year on clumsiness, but I could not remember tripping then either." }]
            },
            {
              id: "c026-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-primary-request", text: "I assess airway, breathing, circulation and conscious state while checking for head, neck or limb injury. I examine her heart and nervous system, check glucose and postural blood pressure, and request a 12-lead ECG." }]
            },
            {
              id: "c026-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-primary-findings", text: "Airway is patent. Respiratory rate is 16, oxygen saturation 98% on room air, pulse 64 and regular, and blood pressure 142/76. Glucose is 5.8 mmol/L. Eleni is alert with normal neurology. She has a small frontal bruise but no other injury finding. Heart, lung and postural assessments are normal." }]
            },
            {
              id: "c026-turn-ecg-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-ecg-request", text: "Please show me the ECG." }]
            },
            {
              id: "c026-turn-ecg-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c026-run-ecg-results", text: "The ECG shows sinus rhythm at 64, PR interval 220 milliseconds, right bundle branch block and marked left axis deviation." }]
            },
            {
              id: "c026-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-interpretation", text: "The ECG shows bifascicular conduction disease with PR prolongation. Her sudden collapse without warning and previous unexplained falls suggest intermittent cardiac conduction failure. Start continuous monitoring, obtain intravenous access, apply pacing-defibrillation pads and request senior emergency and cardiology review." }]
            },
            {
              id: "c026-turn-test-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-test-request", text: "I request blood count, electrolytes, renal function, magnesium, calcium, serial troponins and CT brain for head impact with amnesia." }]
            },
            {
              id: "c026-turn-test-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c026-run-test-results", text: "CT brain is normal. Blood count, renal function, calcium, magnesium, glucose and serial troponins are normal; potassium is 4.2 mmol/L." }]
            },
            {
              id: "c026-turn-test-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-test-interpretation", text: "The minor injury and normal scan do not explain the fall." }]
            }
          ]
        },
        {
          id: "c026-run-deterioration",
          heading: "Recurrent symptoms and rhythm management",
          turns: [
            {
              id: "c026-turn-dizzy",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-dizzy", text: "Doctor, I suddenly feel very faint." }]
            },
            {
              id: "c026-turn-reassessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-reassessment", text: "Eleni, lie flat. Reassess airway, breathing, circulation and conscious state. Confirm a central pulse and blood pressure, and display the rhythm. Record a 12-lead ECG without delaying treatment. Call the resuscitation team and cardiology." }]
            },
            {
              id: "c026-turn-deterioration-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-deterioration-findings", text: "Eleni is pale and drowsy but responsive. Central pulse is 30, blood pressure 82/50 and oxygen saturation 96% on room air. The monitor and ECG show independent P waves and QRS complexes, with a broad ventricular escape rhythm at 30." }]
            },
            {
              id: "c026-turn-brady-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-brady-treatment", text: "This is complete atrioventricular block with poor perfusion. Give atropine 600 micrograms intravenously while preparing transcutaneous pacing, but do not delay pacing for a response. Use demand mode at about 70 beats per minute and increase current until capture. Titrate analgesia and sedation if her circulation allows." }]
            },
            {
              id: "c026-turn-atropine",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-atropine", text: "Atropine produces no change. Pacing spikes are visible after the current is increased, with a broad QRS after each spike. The displayed rate is 70." }]
            },
            {
              id: "c026-turn-capture",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-capture", text: "Confirm electrical capture on the monitor and mechanical capture with a pulse at the paced rate, improved blood pressure and alertness. Recheck capture continuously. If pacing is ineffective or perfusion remains inadequate, commence adrenaline at 2 to 10 micrograms per minute while arranging transvenous pacing." }]
            },
            {
              id: "c026-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-response", text: "There is a palpable pulse at 70, blood pressure is now 118/70 and Eleni is alert. Pain is controlled with titrated analgesia." }]
            },
            {
              id: "c026-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-definitive-plan", text: "Continue care in the resuscitation area. Cardiology should arrange transvenous pacing and assess for a permanent pacemaker. Check reversible causes, including ischaemia, electrolyte disturbance, hypoxia, infection, thyroid disease and medicine or toxin exposure. None is yet identified." }]
            }
          ]
        },
        {
          id: "c026-run-communication",
          heading: "Explanation, teach-back and handover",
          turns: [
            {
              id: "c026-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-explanation-prompt", text: "Please explain the assessment and plan to Eleni and Nadia." }]
            },
            {
              id: "c026-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-explanation", text: "Eleni, the electrical signal controlling your heartbeat stopped reaching the lower heart chambers. Your heart became too slow to supply your brain, explaining today's collapse and possibly earlier falls. The normal brain scan is reassuring but does not explain the blackout. These pads are pacing your heart while cardiology arranges a pacing wire and assesses whether you need a permanent pacemaker." }]
            },
            {
              id: "c026-turn-family-question",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c026-run-family-question", text: "So the previous falls may not have been clumsiness?" }]
            },
            {
              id: "c026-turn-family-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-family-answer", text: "Correct. A fall with no remembered trip can be a blackout. Your account helped us recognise that. Eleni will remain monitored and should not stand without staff." }]
            },
            {
              id: "c026-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-teachback", text: "Eleni, can you tell me what the pads are doing and what happens next?" }]
            },
            {
              id: "c026-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-teachback-answer", text: "They are making my heart beat steadily for now. The heart team will use a more reliable pacing wire and check whether I need a permanent pacemaker." }]
            },
            {
              id: "c026-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c026-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c026-run-handover", text: "Eleni Markou is 79 and presented after sudden collapse without warning and a minor forehead bruise. Her daughter saw no trip, fifteen seconds of unresponsiveness and immediate recovery. She has had two similar unexplained falls. Initial observations and neurology were normal. ECG showed PR prolongation, right bundle branch block and left axis deviation. CT brain, electrolytes, glucose and serial troponins were normal. On monitoring she developed complete atrioventricular block with a broad escape rate of 30 and blood pressure 82/50. Atropine 600 micrograms had no effect. Transcutaneous pacing at 70 achieved electrical and mechanical capture, pulse 70, blood pressure 118/70 and alertness. She needs continuous capture monitoring, transvenous pacing, reversible-cause assessment and permanent-pacemaker evaluation." }]
            },
            {
              id: "c026-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 11.9: Managing Acute Dysrhythmias",
        date: "Current July 2026",
        url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-9-managing-acute-dysrhythmias"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Cardiac arrhythmias",
        date: "September 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308717/CPG_Cardiac-arrhythmias.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Procedure: Transcutaneous cardiac pacing",
        date: "December 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0018/219222/CPP_Transcutaneous-cardiac-pacing.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Syncope",
        date: "February 2021, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219090/cpg_syncope.pdf"
      }
    ]
  });
})();
