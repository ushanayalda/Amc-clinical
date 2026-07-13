(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-016",
    globalId: "CP-C016",
    registryId: "CP-P5-C002",
    displayNumber: "Case 16",
    title: "Breathlessness, nausea and marked fatigue",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 5, title: "Shock Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c016-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c016-stem-patient",
          text: "Ms Zara Bellamy, a 32-year-old woman, has presented with worsening breathlessness, nausea and marked fatigue after a flu-like illness. Her partner, Rory, is present."
        },
        {
          id: "c016-stem-start",
          text: "Zara is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c016-task-assess",
          text: "Assess Zara and discuss your initial management.",
          timing: "3 minutes"
        },
        {
          id: "c016-task-interpret",
          text: "Interpret the findings and investigation results and discuss your next steps.",
          timing: "3 minutes"
        },
        {
          id: "c016-task-explain",
          text: "Explain your assessment and management plan to Zara and Rory.",
          timing: "1 minute"
        },
        {
          id: "c016-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c016-run-assessment",
          heading: "Assessment and initial management",
          turns: [
            {
              id: "c016-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-start", text: "You may begin." }]
            },
            {
              id: "c016-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c016-run-first-action", text: "The doctor performs hand hygiene and approaches Zara." }]
            },
            {
              id: "c016-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-intro", text: "Hello Zara, I am Ushana, one of the emergency doctors. Can you confirm your full name and tell me what is troubling you most?" }]
            },
            {
              id: "c016-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-opening", text: "Zara Bellamy. I can hardly breathe when I lie back. I feel sick and completely exhausted." }]
            },
            {
              id: "c016-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-consent", text: "I will assess and treat you while we talk. Is it okay for Rory to stay and help with the history?" }]
            },
            {
              id: "c016-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-consent-answer", text: "Yes, please." }]
            },
            {
              id: "c016-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-primary", text: "I assess airway, breathing, circulation and conscious state. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring, apply defibrillator pads, and check glucose, temperature, perfusion and urine output. Examine the lungs, heart, jugular venous pressure and legs. Please provide the findings." }]
            },
            {
              id: "c016-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c016-run-primary-findings", text: "Zara's airway is patent. Respiratory rate is 30 breaths per minute, oxygen saturation is 91% on room air and there are fine crackles with bilateral B-lines. Pulse is 128 and regular, blood pressure is 78/48 mmHg and capillary refill is five seconds. Her hands are cool and mottled, and jugular venous pressure is raised. Temperature is 37.3 degrees Celsius, GCS is 15 and glucose is 6.4 mmol/L. There is no murmur, calf asymmetry or peripheral oedema." }]
            },
            {
              id: "c016-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-recognition", text: "Zara has shock with pulmonary and systemic venous congestion. Call the senior emergency doctor, cardiology and intensive care now. Give oxygen, targeting 92% to 96%, obtain two large-bore intravenous lines, insert a urinary catheter if there is no contraindication and prepare arterial monitoring. I will not give a large fluid bolus because the raised jugular venous pressure and B-lines indicate congestion." }]
            },
            {
              id: "c016-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-investigations", text: "Obtain a 12-lead ECG, serial troponin, NT-proBNP, blood gas with lactate, full blood count, electrolytes, renal and liver function, C-reactive protein, coagulation studies and beta-hCG. Arrange portable chest X-ray and immediate bedside cardiac and lung ultrasound. Take cultures if infection remains suspected." }]
            },
            {
              id: "c016-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c016-run-treatment-action", text: "Oxygen, monitoring, intravenous access and urinary catheterisation are established while senior, cardiology and intensive-care teams attend." }]
            }
          ]
        },
        {
          id: "c016-run-interpretation",
          heading: "Cause, circulation support and escalation",
          turns: [
            {
              id: "c016-turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-history", text: "When did the illness and breathlessness begin? Any chest pain, palpitations, fainting, fever, cough or coughing blood?" }]
            },
            {
              id: "c016-turn-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-history-answer", text: "Five days ago I had fever, aches and a sore throat. The fever settled, but for about a day and a half I have become breathless and weak. My chest feels heavy and my heart races. I nearly fainted this morning. No coughing blood or sharp pain." }]
            },
            {
              id: "c016-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-background", text: "Any heart or autoimmune condition, recent pregnancy, long travel, leg swelling, new medicine, supplement, recreational drug or toxin exposure? What medicines and allergies do you have?" }]
            },
            {
              id: "c016-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c016-run-background-answer", text: "No medical conditions, pregnancy or regular medicines. No drugs, travel or swollen leg, and no allergies." }]
            },
            {
              id: "c016-turn-fluid-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-fluid-history", text: "Rory, has Zara been able to walk, sleep flat, eat, drink and pass urine?" }]
            },
            {
              id: "c016-turn-fluid-history-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c016-run-fluid-history-answer", text: "Yesterday she stopped halfway to the bathroom. She slept sitting up, has barely eaten, and last passed a small amount of dark urine early this morning." }]
            },
            {
              id: "c016-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c016-run-results", text: "ECG shows sinus tachycardia with diffuse ST-T abnormalities and no diagnostic ST-elevation pattern. Troponin is markedly elevated and NT-proBNP is 7800 ng/L. Lactate is 5.4 mmol/L, pH 7.29, creatinine 132 micromol/L and ALT 186 units/L. White cell count is 12.2, C-reactive protein 54 mg/L and beta-hCG is negative. Chest X-ray shows bilateral pulmonary oedema. Bedside echocardiography shows severe global left-ventricular systolic dysfunction with an estimated ejection fraction of 15%, moderate right-ventricular dysfunction, a plethoric inferior vena cava and no pericardial effusion." }]
            },
            {
              id: "c016-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-interpretation", text: "This is cold, congested cardiogenic shock from severe new biventricular dysfunction. Fulminant myocarditis is strongly suspected, but the recent illness does not prove a viral cause. We must exclude acute coronary syndrome and consider pulmonary embolism, sepsis, toxin-related injury and other cardiomyopathies. The ultrasound makes tamponade unlikely." }]
            },
            {
              id: "c016-turn-support",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-support", text: "Commence noradrenaline through monitored proximal peripheral access at the local-protocol starting rate while central access is arranged, titrating with intensive care to a mean arterial pressure of at least 65 mmHg and clinical perfusion. Avoid further fluid, nitrates, routine diuretics and beta-blockade while she is profoundly hypotensive. Reassess lungs, perfusion, rhythm, urine output and lactate." }]
            },
            {
              id: "c016-turn-support-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c016-run-support-action", text: "Protocol-led noradrenaline commences through monitored proximal peripheral access as definitive vascular access is prepared." }]
            },
            {
              id: "c016-turn-repeat-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c016-run-repeat-findings", text: "With noradrenaline titrated by the intensive-care clinician, mean arterial pressure is 66 mmHg. Zara remains cool and breathless, urine output is 5 millilitres over the preceding hour and repeat lactate is 6.1 mmol/L. Frequent ventricular ectopic beats appear."
              }]
            },
            {
              id: "c016-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-escalation", text: "Perfusion remains inadequate. Cardiology and intensive care should add an inotrope under continuous haemodynamic and rhythm monitoring, selected and titrated by the local cardiogenic-shock protocol. Activate transfer to a tertiary shock centre now. If circulation remains refractory, the shock team should institute temporary mechanical circulatory support without delay, with device choice guided by her biventricular failure and local expertise." }]
            },
            {
              id: "c016-turn-diagnosis-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-diagnosis-plan", text: "Coronary imaging must exclude an acute coronary cause. Once stable enough, cardiac magnetic resonance can identify myocardial inflammation. Because this is a high-risk presentation, the tertiary team should arrange early endomyocardial biopsy to establish the subtype and guide any specific therapy, rather than starting empirical immunosuppression solely from the preceding illness." }]
            },
            {
              id: "c016-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-time", text: "Please explain your assessment and management plan to Zara and Rory." }]
            }
          ]
        },
        {
          id: "c016-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c016-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-explanation", text: "Zara and Rory, her heart is pumping very weakly, so blood is not reaching her organs properly and fluid is backing up into her lungs. Medicines are supporting her blood pressure and heart while specialist teams prepare further support." }]
            },
            {
              id: "c016-turn-cause-question",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c016-run-cause-question", text: "Did the flu infection damage her heart?" }]
            },
            {
              id: "c016-turn-cause-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-cause-answer", text: "Inflammation of the heart muscle, called myocarditis, is a serious possibility, but the earlier illness alone cannot tell us the cause. We first support her circulation and exclude a blocked coronary artery and other causes. Heart imaging and a small heart-muscle biopsy can then confirm the diagnosis and subtype." }]
            },
            {
              id: "c016-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c016-run-plan", text: "She needs intensive-care monitoring because dangerous rhythms and further deterioration can occur. The tertiary team can provide temporary mechanical support if medicines are not enough. We will keep you informed while these steps occur." }]
            },
            {
              id: "c016-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-handover-prompt", text: "Please finish with a concise handover to the intensive-care clinician." }]
            },
            {
              id: "c016-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c016-run-handover", text: "Zara Bellamy is 32 with cold, congested cardiogenic shock and suspected fulminant myocarditis. Initial pressure was 78/48, pulse 128, saturation 91%, refill five seconds and lactate 5.4. She has raised JVP, B-lines and pulmonary oedema. Echo shows global LVEF 15% with moderate RV dysfunction and no effusion. Troponin and NT-proBNP are markedly raised, with early kidney and liver injury. Oxygen, monitoring and intravenous access are established without a large fluid bolus. Noradrenaline has achieved MAP 66, but lactate is 6.1 with oliguria and ventricular ectopy. She needs protocol-led inotropy, tertiary transfer, coronary exclusion, early biopsy and readiness for temporary mechanical support." }]
            },
            {
              id: "c016-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c016-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Cardiogenic shock",
        date: "Current guideline accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0016/219022/cpg-cardiogenic-shock.pdf"
      },
      {
        organisation: "Agency for Clinical Innovation, NSW",
        title: "Adult ECAT protocol: Shortness of breath from cardiac disease",
        date: "Current NSW protocol accessed July 2026",
        url: "https://aci.health.nsw.gov.au/ecat/adult/shortness-of-breath-cardiac-disease"
      },
      {
        organisation: "European Society of Cardiology",
        title: "2025 ESC Guidelines for the management of myocarditis and pericarditis",
        date: "Published August 2025, current citation July 2026",
        url: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis/"
      },
      {
        organisation: "European Society of Cardiology",
        title: "2025 ESC Guidelines for the management of myocarditis and pericarditis, full guideline",
        date: "European Heart Journal 2025",
        url: "https://academic.oup.com/eurheartj/article/46/40/3952/8234483"
      },
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Recognising and Responding to Acute Deterioration Standard",
        date: "Current standard accessed July 2026",
        url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard"
      }
    ]
  });
})();
