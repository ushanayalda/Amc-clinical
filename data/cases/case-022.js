(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-022",
    globalId: "CP-C022",
    registryId: "CP-P7-C002",
    displayNumber: "Case 22",
    title: "Thirst, frequent urination and increasing confusion",
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
          id: "c022-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c022-stem-patient",
          text: "Mr Tane Whaitiri, a 76-year-old man with type 2 diabetes, has been brought in by his daughter, Aroha. He has been very thirsty, passing urine frequently and increasingly confused over four days."
        },
        {
          id: "c022-stem-start",
          text: "Tane is able to answer brief questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c022-task-history",
          text: "Assess Tane and obtain a focused history from Tane and Aroha.",
          timing: "3 minutes"
        },
        {
          id: "c022-task-interpret",
          text: "Interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c022-task-explain",
          text: "Explain your assessment and plan to Tane and Aroha.",
          timing: "1 minute"
        },
        {
          id: "c022-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c022-run-assessment",
          heading: "Initial assessment and focused history",
          turns: [
            {
              id: "c022-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-start", text: "You may begin." }]
            },
            {
              id: "c022-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c022-run-first-action", text: "The doctor performs hand hygiene and approaches Tane and Aroha." }]
            },
            {
              id: "c022-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-intro", text: "Hello Tane, I am Ushana, one of the emergency doctors. Can you tell me your full name and where you are? Is it okay for Aroha to stay and help answer questions?" }]
            },
            {
              id: "c022-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c022-run-consent", text: "Tane Whaitiri. I am at the hospital. Yes, please let her stay. I cannot think properly." }]
            },
            {
              id: "c022-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check capillary glucose and ketones, temperature and capillary refill. Examine hydration, the heart, lungs, abdomen and legs, and screen for a focal neurological deficit. Please provide the findings." }]
            },
            {
              id: "c022-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c022-run-primary-findings", text: "Airway is patent. Respiratory rate is 24, oxygen saturation 92% on room air and there are right basal crackles. Pulse is 112 and regular, blood pressure 96/62 mmHg and capillary refill four seconds. Tane has dry mucous membranes and reduced skin turgor. He is confused about the date but obeys commands, with no focal neurological deficit. Temperature is 38.3 degrees Celsius. The glucose meter reads above its measurable range and blood ketones are 0.8 mmol/L." }]
            },
            {
              id: "c022-turn-initial-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-initial-management", text: "This may be a severe hyperglycaemic emergency with marked dehydration and infection. Call the senior emergency doctor and request critical-care and diabetes-team review. Give oxygen to a target saturation of 92 to 96%, insert two intravenous cannulas, start strict fluid balance and measure urine output. Take blood before antibiotics if this causes no delay." }]
            },
            {
              id: "c022-turn-history-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-history-question", text: "Aroha, when was Tane last himself? How much has he been drinking and urinating? Any reduced intake, vomiting, abdominal pain, deep breathing, fever, cough, painful urine, chest symptoms, weakness or seizure?" }]
            },
            {
              id: "c022-turn-history-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c022-run-history-answer", text: "Four days ago he became constantly thirsty and was up every hour to pass urine. He has barely eaten. Yesterday he became muddled. He has had fever and a cough with yellow phlegm, but no vomiting, abdominal pain, painful urine, chest pain or seizure." }]
            },
            {
              id: "c022-turn-diabetes-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-diabetes-question", text: "How is his diabetes usually treated? Has he missed doses or taken steroids? What other conditions, medicines and allergies does he have? Any previous similar episode?" }]
            },
            {
              id: "c022-turn-diabetes-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c022-run-diabetes-answer", text: "He takes metformin and gliclazide, but missed them for three days because he felt unwell. He also takes amlodipine and atorvastatin. No steroids, allergies or previous episode. He lives independently and is normally sharp." }]
            }
          ]
        },
        {
          id: "c022-run-interpretation",
          heading: "Investigation, controlled correction and treatment of the cause",
          turns: [
            {
              id: "c022-turn-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-tests", text: "Send venous gas with lactate, laboratory glucose, electrolytes, urea, creatinine, calculated osmolality, full blood count, inflammatory markers, magnesium and phosphate. Take blood cultures, urine studies and a chest X-ray, and obtain an ECG. Repeat glucose, sodium, potassium, urea and calculated osmolality hourly initially." }]
            },
            {
              id: "c022-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c022-run-results", text: "Venous pH is 7.36, bicarbonate 19 mmol/L and lactate 2.4 mmol/L. Glucose is 48 mmol/L, sodium 151, potassium 4.8, urea 29 and creatinine 220 micromol/L. Calculated osmolality is 379 mOsm/kg. White cell count is 18.4 and C-reactive protein 176. ECG shows sinus tachycardia. Chest X-ray shows right lower-lobe consolidation." }]
            },
            {
              id: "c022-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-interpretation-text", text: "The profound hyperglycaemia, osmolality and dehydration, with little ketonaemia and no major acidosis, indicate hyperosmolar hyperglycaemic state. Pneumonia is the likely trigger, with acute kidney injury. Start intravenous 0.9% sodium chloride first under the HHS protocol. Because Tane is older and has acute kidney injury, begin with a 250-millilitre bolus and reassess perfusion, lungs and urine output before repeating it. Continue controlled replacement guided by those findings and the hourly osmolality trend." }]
            },
            {
              id: "c022-turn-control",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-control", text: "Aim for osmolality to fall by 3 to 8 mOsm/kg per hour, glucose by no more than about 5 mmol/L per hour and sodium by no more than 10 mmol/L in 24 hours. A modest sodium rise while glucose falls is expected if osmolality is falling. With potassium 4.8 and acute kidney injury, do not add potassium automatically. Repeat it and confirm urine output; once it is below 5, add a renal-adjusted amount under the local protocol, commonly 20 to 30 mmol per litre. Omit it above 5.5, and if it falls below 3.5 obtain urgent senior replacement and delay insulin until corrected." }]
            },
            {
              id: "c022-turn-insulin",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-insulin", text: "Do not start insulin immediately because fluids alone should lower glucose and osmolality. When glucose stops falling adequately with fluid, and potassium is safe, start fixed-rate intravenous insulin at 0.05 units per kilogram per hour under senior protocol. Add glucose infusion when blood glucose falls below 14 mmol/L while continuing controlled saline and insulin." }]
            },
            {
              id: "c022-turn-trigger",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-trigger", text: "Give prompt intravenous antibiotics for community-acquired pneumonia according to local guidance, after cultures without delaying treatment. Provide renal-adjusted low-molecular-weight heparin thromboprophylaxis unless contraindicated. Monitor neurological state, fluid overload, glucose, electrolytes and osmolality in a high-acuity area. Hold metformin and gliclazide during the acute illness." }]
            },
            {
              id: "c022-turn-question",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c022-run-question", text: "His sugar is extremely high. Why are you waiting to give insulin?" }]
            },
            {
              id: "c022-turn-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-answer", text: "His blood has become very concentrated over several days. Fluid is the first treatment and will lower the glucose. Insulin too early can make glucose and osmolality fall too quickly, which may cause dangerous shifts in fluid and salts. We will add insulin once the fluid response shows it is needed." }]
            }
          ]
        },
        {
          id: "c022-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c022-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-explanation-prompt", text: "Please explain your assessment and plan to Tane and Aroha." }]
            },
            {
              id: "c022-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c022-run-explanation", text: "Tane and Aroha, pneumonia has pushed his glucose very high. He has lost a large amount of water in his urine, making the blood concentrated and affecting his kidneys and thinking. We will replace fluid gradually, treat the pneumonia and monitor him closely. Insulin will be added at the safe point." }]
            },
            {
              id: "c022-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c022-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c022-run-handover", text: "Tane Whaitiri is 76 with type 2 diabetes, four days of polyuria and polydipsia, then confusion, fever and productive cough. He is dehydrated, febrile and mildly hypoxaemic, with glucose 48, osmolality 379, sodium 151, minimal ketonaemia, pH 7.36 and acute kidney injury. This is HHS triggered by right lower-lobe pneumonia. Monitoring, oxygen, intravenous access and controlled 0.9% saline have started. Cultures and antibiotics are underway. I have requested senior, critical-care and diabetes review, with hourly osmolality and electrolyte-guided fluid, potassium and delayed low-dose insulin management." }]
            },
            {
              id: "c022-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c022-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Diabetic emergency - Hyperglycaemia",
        date: "September 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219046/CPG_Diabetic-emergency_hyperglycaemia.pdf"
      },
      {
        organisation: "American Diabetes Association, European Association for the Study of Diabetes, Joint British Diabetes Societies and partner organisations",
        title: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report",
        date: "2024",
        url: "https://doi.org/10.2337/dci24-0032"
      },
      {
        organisation: "Joint British Diabetes Societies for Inpatient Care",
        title: "Management of Hyperosmolar Hyperglycaemic State (HHS) in Adults: An updated guideline",
        date: "March 2023",
        url: "https://doi.org/10.1111/dme.15005"
      }
    ]
  });
})();
