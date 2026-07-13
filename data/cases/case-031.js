(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-031",
    globalId: "CP-C031",
    registryId: "CP-P10-C002",
    displayNumber: "Case 31",
    title: "Headache and upper abdominal discomfort",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 10, title: "Obstetric Catastrophe" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c031-stem-role",
          text: "You are a doctor working in the maternity assessment unit."
        },
        {
          id: "c031-stem-patient",
          text: "Ms Rhea Menon, a 34-year-old woman who is 36 weeks and 2 days pregnant, has presented with headache and upper abdominal discomfort."
        },
        {
          id: "c031-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c031-task-history",
          text: "Take a focused history from Rhea.",
          timing: "2 minutes"
        },
        {
          id: "c031-task-assess",
          text: "Request a focused assessment and relevant findings, and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c031-task-explain",
          text: "Explain your assessment and concerns to Rhea.",
          timing: "2 minutes"
        },
        {
          id: "c031-task-management",
          text: "Outline your management and provide a concise clinical handover to the senior clinician.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c031-run-history",
          heading: "Focused history and requested assessment",
          turns: [
            {
              id: "c031-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-start", text: "You may begin." }]
            },
            {
              id: "c031-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-first-action", text: "The doctor performs hand hygiene and approaches Rhea." }]
            },
            {
              id: "c031-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-intro", text: "Hello, I am Ushana, a maternity doctor. Confirm your name. May I assess you?" }]
            },
            {
              id: "c031-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-consent", text: "Rhea Menon. Yes. My head is pounding and my upper abdomen hurts." }]
            },
            {
              id: "c031-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-symptom-question", text: "When did the headache start and is it worsening? Any visual change, nausea or confusion? Where is the pain?" }]
            },
            {
              id: "c031-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-symptom-answer", text: "Six hours ago; now nine out of ten despite paracetamol. My vision is blurred with flashing spots. I feel sick and hurt under my right ribs and upper middle. No confusion." }]
            },
            {
              id: "c031-turn-pregnancy-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-pregnancy-question", text: "I ask the nurse to record observations now. Any swelling? Is your baby moving normally? Any bleeding, fluid loss or contractions? Was your blood pressure abnormal?" }]
            },
            {
              id: "c031-turn-pregnancy-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-pregnancy-answer", text: "My face, hands and ankles became puffy over two days. The baby moves less. No bleeding, fluid or contractions. Yesterday my blood pressure was raised, and I was asked to return." }]
            },
            {
              id: "c031-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-background-question", text: "First pregnancy? Any seizures, migraine, hypertension, asthma, cardiac, kidney or liver disease? Medicines or allergies?" }]
            },
            {
              id: "c031-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-background-answer", text: "This is my first pregnancy. I have none of those conditions. I take pregnancy vitamins and have no allergies." }]
            },
            {
              id: "c031-turn-assessment-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-assessment-request", text: "I request ABC, conscious state, observations, correct-cuff blood pressure and glucose, neurological examination with reflexes and clonus, oedema, abdominal and obstetric examination, fetal heart and urine dip." }]
            },
            {
              id: "c031-turn-assessment-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-assessment-findings", text: "Airway is patent and Rhea is alert. Respiratory rate is 18, saturation 98%, pulse 96, blood pressure 172/114, temperature 36.8 and glucose 5.6. She has oedema, hyperreflexia, three-beat clonus and right upper quadrant and epigastric tenderness. There is no focal deficit. Fetal heart is 148 and urine has three-plus protein." }]
            },
            {
              id: "c031-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-interpretation", text: "This is severe pre-eclampsia with cerebral irritation. I call senior obstetrics, anaesthesia and midwifery and obtain two large-bore intravenous lines. Confirm no asthma, bradycardia, heart block or heart failure, then start magnesium sulfate 4 grams intravenously over 20 minutes and labetalol 20 mg intravenously. Recheck blood pressure within 10 to 15 minutes; do not wait for blood results." }]
            },
            {
              id: "c031-turn-early-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-early-treatment-action", text: "Both intravenous lines are patent. Magnesium loading and acute blood-pressure treatment begin while the team sends investigations." }]
            },
            {
              id: "c031-turn-investigation-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-investigation-request", text: "Send full blood count with platelets, blood film, electrolytes, creatinine, liver tests, coagulation, group and hold, and urine protein-to-creatinine ratio. Do not delay treatment." }]
            },
            {
              id: "c031-turn-investigation-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c031-run-investigation-results", text: "Platelets are 82 x 10^9/L, AST 118 units/L, ALT 126 units/L and creatinine 75 micromol/L. Urine protein-to-creatinine ratio is 180 mg/mmol. Haemoglobin and coagulation are currently normal." }]
            },
            {
              id: "c031-turn-aura",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-aura", text: "The flashing is getting brighter. I feel very strange." }]
            },
            {
              id: "c031-turn-seizure",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-seizure", text: "Rhea becomes unresponsive and develops a generalised tonic-clonic seizure." }]
            }
          ]
        },
        {
          id: "c031-run-resuscitation",
          heading: "Maternal-first seizure response and stabilisation",
          turns: [
            {
              id: "c031-turn-seizure-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-seizure-response", text: "This is eclampsia. Call the obstetric emergency response, anaesthesia, neonatal team and theatre. Note the time, place Rhea left lateral and protect her. Do not restrain her or put anything in her mouth. Assess ABC, suction and support the airway, give oxygen for hypoxaemia, check glucose, monitor and confirm both intravenous lines are patent." }]
            },
            {
              id: "c031-turn-response-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-response-action", text: "The team protects Rhea in the left lateral position, applies monitoring, supports her airway, checks glucose and confirms both intravenous lines." }]
            },
            {
              id: "c031-turn-postictal-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-postictal-findings", text: "The seizure stops after 70 seconds. Rhea is postictal; jaw support relieves snoring. Respiratory rate is 20, saturation improves from 93% to 98% with oxygen, pulse 118, blood pressure 178/116 and glucose 5.8." }]
            },
            {
              id: "c031-turn-magnesium",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-magnesium", text: "Complete the magnesium 4-gram loading dose, then infuse 1 gram per hour. Continue until 24 hours after birth or the last seizure, whichever is later. Follow the repeat-dose protocol if another seizure occurs." }]
            },
            {
              id: "c031-turn-blood-pressure",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-blood-pressure", text: "Her pressure is 178/116 after the first dose. Give further labetalol 20 to 40 mg at 10 to 15 minute intervals under protocol, to a maximum cumulative 80 mg, targeting below 160/110 without abrupt hypotension." }]
            },
            {
              id: "c031-turn-fluid-monitoring",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-fluid-monitoring", text: "Do not give a routine fluid load. Record all input and hourly urine; watch for pulmonary oedema. Check blood pressure, pulse, saturation and respiratory rate every 30 minutes, and reflexes and urine hourly. If magnesium toxicity is suspected, stop the infusion and check the level. For confirmed toxicity, give calcium gluconate 10%, 10 mL diluted in 100 mL saline intravenously over 10 minutes. Catheterise when safe and confirm consent when capacity returns." }]
            },
            {
              id: "c031-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c031-run-treatment-action", text: "Once the seizure has stopped and ABC support is established, continuous CTG starts while magnesium, antihypertensive treatment and maternal monitoring continue." }]
            },
            {
              id: "c031-turn-stabilised-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c031-run-stabilised-findings", text: "Rhea is alert. Blood pressure is 148/96, respiratory rate 18, saturation 98% and patellar reflexes remain present. There is no further seizure." }]
            },
            {
              id: "c031-turn-fetal-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-fetal-request", text: "Review the continuous CTG and obtain senior obstetric assessment of presentation, cervix and birth plan. Ultrasound must not delay indicated birth." }]
            },
            {
              id: "c031-turn-fetal-findings",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c031-run-fetal-findings", text: "CTG baseline is 150 with moderate variability and no decelerations. The fetus is cephalic and cervix two centimetres dilated." }]
            }
          ]
        },
        {
          id: "c031-run-communication",
          heading: "Explanation, consent, teach-back and handover",
          turns: [
            {
              id: "c031-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-explanation-prompt", text: "Please explain your assessment and concerns to Rhea." }]
            },
            {
              id: "c031-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-explanation", text: "Rhea, severe pre-eclampsia caused high blood pressure and a seizure, called eclampsia. It can affect your brain, liver, kidneys, blood cells and placenta. While you could not consent, we gave necessary treatment. Now you are awake, I will explain ongoing care and seek consent." }]
            },
            {
              id: "c031-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-concern", text: "Will my baby be all right? Is magnesium dangerous, and do I need a caesarean immediately?" }]
            },
            {
              id: "c031-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-concern-response", text: "The tracing is reassuring. Magnesium reduces further seizures; we monitor closely and have an antidote. Birth is recommended after stabilisation. Caesarean is not automatic; the route depends on your condition, the tracing, cervix and obstetric factors." }]
            },
            {
              id: "c031-turn-consent-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-consent-plan", text: "Do you consent to ongoing magnesium, blood-pressure treatment, monitoring and catheter care while the obstetrician discusses birth with you?" }]
            },
            {
              id: "c031-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-consent-answer", text: "Yes. Please continue and explain the birth plan to me and my partner." }]
            },
            {
              id: "c031-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c031-run-teachback", text: "Please tell me what happened, why magnesium continues and how the birth route is decided." }]
            },
            {
              id: "c031-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c031-run-teachback-answer", text: "Pre-eclampsia caused a seizure. Magnesium helps prevent another. I need birth after stabilisation, with induction or caesarean based on our condition." }]
            },
            {
              id: "c031-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-handover-prompt", text: "Please finish with a concise handover to the senior obstetrician." }]
            },
            {
              id: "c031-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c031-run-handover", text: "Rhea Menon is 34, primigravida at 36 weeks and 2 days. She has headache, visual disturbance, upper abdominal pain, oedema and reduced movements. Blood pressure was 172/114 with clonus and proteinuria; platelets are 82, AST 118 and ALT 126. Two intravenous lines, magnesium and labetalol started, then a 70-second seizure occurred. Maternal-first care is complete. Magnesium continues at 1 gram per hour; pressure is 148/96. She is alert without recurrence. CTG is reassuring, fetus cephalic and cervix two centimetres. Birth follows stabilisation; route is based on maternal, fetal and obstetric assessment, not automatic caesarean." }]
            },
            {
              id: "c031-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c031-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Society of Obstetric Medicine of Australia and New Zealand",
        title: "SOMANZ Hypertension in Pregnancy Guideline 2023",
        date: "2023",
        url: "https://somanz.org/content/uploads/2024/01/SOMANZ_Hypertension_in_Pregnancy_Guideline_2023.pdf"
      },
      {
        organisation: "Society of Obstetric Medicine of Australia and New Zealand",
        title: "Flowchart 6.6 Management of eclampsia",
        date: "2023",
        url: "https://somanz.org/content/uploads/2024/01/Flowchart-6.6-Management-of-eclampsia.pdf"
      },
      {
        organisation: "Society of Obstetric Medicine of Australia and New Zealand",
        title: "Flowchart 6.2 Management of acute hypertension",
        date: "2023",
        url: "https://somanz.org/content/uploads/2024/01/Flowchart-6.2-Management-of-acute-hypertension.pdf"
      }
    ]
  });
})();
