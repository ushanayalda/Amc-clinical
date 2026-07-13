(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-023",
    globalId: "CP-C023",
    registryId: "CP-P7-C003",
    displayNumber: "Case 23",
    title: "Weak legs and a skipping heartbeat",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 7, title: "Metabolic Collapse" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c023-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c023-stem-patient",
          text: "Mr Eamon Kaurangi, a 61-year-old man, has presented with increasing weakness and an intermittent sensation that his heart is skipping beats since yesterday."
        },
        {
          id: "c023-stem-start",
          text: "Eamon is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c023-task-history",
          text: "Take a focused history from Eamon.",
          timing: "2 minutes"
        },
        {
          id: "c023-task-assess",
          text: "Assess Eamon, interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c023-task-explain",
          text: "Explain your assessment and ongoing plan to Eamon.",
          timing: "2 minutes"
        },
        {
          id: "c023-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c023-run-assessment",
          heading: "Focused history and immediate assessment",
          turns: [
            {
              id: "c023-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-start", text: "You may begin." }]
            },
            {
              id: "c023-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c023-run-first-action", text: "The doctor performs hand hygiene and approaches Eamon." }]
            },
            {
              id: "c023-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-intro", text: "Hello Eamon, I am Ushana, one of the emergency doctors. Can you confirm your full name? May I assess you while we talk?" }]
            },
            {
              id: "c023-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-intro-answer", text: "Eamon Kaurangi. Yes. My legs feel heavy and my heart keeps missing a beat." }]
            },
            {
              id: "c023-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach continuous cardiac and oxygen-saturation monitoring, obtain intravenous access, check glucose and record a 12-lead ECG. Examine his heart, lungs, hydration, abdomen and limb power. Please provide the findings." }]
            },
            {
              id: "c023-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c023-run-primary-findings", text: "Airway is patent. Respiratory rate is 18, oxygen saturation 97% on room air and lungs are clear. Pulse is 48 and regular, blood pressure 102/64 and capillary refill three seconds. Eamon is alert, afebrile and clinically dry. Glucose is 5.6 mmol/L. Limb power is mildly reduced but symmetrical, without a focal deficit. The ECG shows sinus bradycardia, very tall peaked T waves, small P waves and QRS widening to 150 milliseconds." }]
            },
            {
              id: "c023-turn-point-of-care-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-point-of-care-request", text: "These ECG changes may reflect hyperkalaemia. Obtain a venous blood gas. Send a non-haemolysed sample for electrolytes, renal function, calcium, magnesium and full blood count. Do not delay treatment for the laboratory result. Please provide the blood gas." }]
            },
            {
              id: "c023-turn-point-of-care-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c023-run-point-of-care-result", text: "Venous potassium is 7.2 mmol/L, pH 7.29, bicarbonate 18 mmol/L, glucose 5.5 mmol/L and lactate 1.7 mmol/L." }]
            },
            {
              id: "c023-turn-calcium",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-calcium", text: "Call the senior emergency doctor, nephrology and critical care. Under the local severe-hyperkalaemia protocol, give 6.6 mmol of intravenous calcium gluconate, equivalent to 30 millilitres of 10%, over 2 to 3 minutes through secure access with continuous monitoring. Calcium protects the heart but does not lower potassium. Repeat the ECG within 5 to 10 minutes and repeat calcium at 10 minutes if the toxic changes persist." }]
            },
            {
              id: "c023-turn-calcium-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c023-run-calcium-action", text: "Intravenous calcium gluconate is commenced under continuous cardiac monitoring while further treatment is prepared." }]
            },
            {
              id: "c023-turn-shift-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-shift-treatment", text: "Now give 10 units of short-acting insulin with 25 grams of intravenous glucose, plus nebulised salbutamol 10 to 20 milligrams as an adjunct, not alone. His starting glucose is below 7, so commence 10% glucose at 50 millilitres per hour for five hours. Check glucose half-hourly, then hourly for six hours, and treat any hypoglycaemia." }]
            },
            {
              id: "c023-turn-symptom-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-symptom-history", text: "While treatment starts, when did the weakness and heartbeat sensation begin? Any fainting, chest discomfort, breathlessness, numbness or paralysis? Have you had fever, vomiting, diarrhoea, poor intake or passed less urine?" }]
            },
            {
              id: "c023-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-symptom-answer", text: "The weakness began yesterday and is worse today. I have not fainted and have no chest pain or breathlessness. I have felt sick, vomited twice and barely eaten or drunk. I am passing much less urine." }]
            },
            {
              id: "c023-turn-trigger-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-trigger-history", text: "Any urinary burning, fever or flank pain? What kidney and heart conditions do you have? Please list every regular and recently started medicine, including anti-inflammatory tablets, potassium supplements and salt substitutes." }]
            },
            {
              id: "c023-turn-trigger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-trigger-answer", text: "I have stage 3 kidney disease and heart failure. Five days ago my GP gave me trimethoprim for burning urine. I take ramipril, spironolactone, furosemide and carvedilol. I kept taking them despite vomiting. No ibuprofen, supplements or salt substitute. I have no allergies." }]
            }
          ]
        },
        {
          id: "c023-run-treatment",
          heading: "Potassium lowering and definitive management",
          turns: [
            {
              id: "c023-turn-contributors",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-contributors", text: "Withhold trimethoprim, ramipril and spironolactone. Also hold carvedilol while he is bradycardic, and review furosemide against renal function and volume status. Give cautious isotonic crystalloid with repeated assessment because he appears depleted but has heart failure. Obtain urinalysis and urine culture and choose a renally adjusted antibiotic according to the local infection guideline." }]
            },
            {
              id: "c023-turn-formal-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c023-run-formal-results", text: "The laboratory sample is not haemolysed. Potassium is 7.3 mmol/L, creatinine 318 micromol/L compared with a baseline of 145, urea 29 mmol/L and bicarbonate 17 mmol/L. Urinalysis is positive for leucocytes and nitrites. Ten minutes after calcium, QRS duration is 110 milliseconds and P waves are visible." }]
            },
            {
              id: "c023-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-definitive-plan", text: "This confirms severe hyperkalaemia with ECG toxicity and acute kidney injury, likely from dehydration, infection and potassium-raising medicines. Continue monitored high-dependency care. Recheck potassium at one, two, four, six and 24 hours, with repeat ECGs, renal function, acid-base status, fluid balance and urine output. The shift into cells is temporary. Discuss a locally available potassium binder with nephrology and prepare urgent dialysis if potassium or ECG toxicity persists, rebounds, or oliguria and acidosis worsen." }]
            },
            {
              id: "c023-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-patient-question", text: "Did my usual tablets cause this? Should I never take them again?" }]
            },
            {
              id: "c023-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-patient-answer", text: "The combination became unsafe while your kidneys were working poorly. Trimethoprim, ramipril and spironolactone can each raise potassium. We will stop them now, but that does not mean every medicine is permanently unsuitable. Your kidney and heart teams will decide what can restart after recovery, with a clear illness plan and early blood tests." }]
            }
          ]
        },
        {
          id: "c023-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c023-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-explanation-prompt", text: "Please explain your assessment and plan to Eamon." }]
            },
            {
              id: "c023-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-explanation", text: "Eamon, potassium is a body salt that helps nerves, muscles and the heart work. Your level is high enough to slow and disturb the heart rhythm. We have given calcium to protect your heart and insulin with glucose and salbutamol to move potassium out of the blood temporarily. We are treating the kidney problem and urine infection, checking you closely and arranging kidney treatment to remove potassium if it does not fall safely." }]
            },
            {
              id: "c023-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c023-run-understanding", text: "Can you tell me why you need monitoring even though the ECG has improved?" }]
            },
            {
              id: "c023-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c023-run-understanding-answer", text: "The first treatments may only work for a while, so the potassium and heartbeat can become abnormal again." }]
            },
            {
              id: "c023-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c023-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c023-run-handover", text: "Eamon Kaurangi is 61 with stage 3 chronic kidney disease and heart failure, presenting with weakness, palpitations, vomiting, poor intake and oliguria after starting trimethoprim while continuing ramipril and spironolactone. Pulse was 48 with peaked T waves, small P waves and QRS 150 milliseconds. Potassium was 7.2 and confirmed non-haemolysed at 7.3; creatinine is 318 from 145, with acidosis and probable urinary infection. Calcium gluconate narrowed the QRS to 110. Insulin with glucose and salbutamol have been given, glucose monitoring and cautious fluids are underway, and contributing drugs are withheld. He needs continuous monitoring, serial potassium and ECGs, infection treatment and urgent nephrology review for potassium removal, including dialysis if refractory or recurrent." }]
            },
            {
              id: "c023-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c023-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 11.10: Resuscitation in Special Circumstances, Electrolyte Disorders",
        date: "Current July 2026",
        url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-10-resuscitation-in-special-circumstances"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Hyperkalaemia",
        date: "January 2020, listed in the June 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0025/219049/cpg_hyperkalaemia.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Drug Therapy Protocol: Calcium gluconate",
        date: "October 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219325/DTP_Calcium-gluconate.pdf"
      },
      {
        organisation: "UK Kidney Association",
        title: "Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults",
        date: "October 2023",
        url: "https://guidelines.ukkidney.org/hyperkalaemia/"
      }
    ]
  });
})();
