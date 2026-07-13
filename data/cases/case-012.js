(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-012",
    globalId: "CP-C012",
    registryId: "CP-P4-C001",
    displayNumber: "Case 12",
    title: "New confusion and reduced intake",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 4, title: "Sepsis Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c012-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c012-stem-patient",
          text: "Mrs Marisol Vega, an 81-year-old woman, has been brought in by her daughter, Lucia, because she has become confused and has eaten and drunk very little since yesterday. Marisol normally lives independently."
        },
        {
          id: "c012-stem-start",
          text: "Marisol is awake but answers some questions inconsistently. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c012-task-assess",
          text: "Assess Marisol and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c012-task-history",
          text: "Obtain the essential collateral history from Lucia and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c012-task-explain",
          text: "Explain your assessment, concerns and management plan to Marisol and Lucia.",
          timing: "1 minute"
        },
        {
          id: "c012-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c012-run-assessment",
          heading: "Assessment and recognition",
          turns: [
            {
              id: "c012-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c012-run-start", text: "You may begin." }]
            },
            {
              id: "c012-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c012-run-first-action", text: "The doctor performs hand hygiene and approaches Marisol at eye level." }]
            },
            {
              id: "c012-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-intro", text: "Hello Marisol, I am Ushana, one of the emergency doctors. Can you tell me your full name and what feels wrong today?" }]
            },
            {
              id: "c012-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c012-run-opening", text: "Marisol Vega. I am tired. I do not know why Lucia brought me here." }]
            },
            {
              id: "c012-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-consent", text: "I need to assess you while we talk. Is it okay for Lucia to stay and help with the history?" }]
            },
            {
              id: "c012-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c012-run-consent-answer", text: "Yes, that is okay." }]
            },
            {
              id: "c012-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-primary", text: "I assess airway, breathing, circulation and conscious state. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check temperature, glucose, perfusion and hydration. Examine the chest, abdomen, renal angles and skin, and check for focal neurology or meningism. Please provide the findings." }]
            },
            {
              id: "c012-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c012-run-primary-findings", text: "Marisol's airway is patent. Respiratory rate is 26 breaths per minute and oxygen saturation is 93% on room air. Pulse is 116 beats per minute and regular, blood pressure is 124/72 mmHg, temperature is 38.2 degrees Celsius and capillary refill time is four seconds. GCS is 14 because she is confused. Blood glucose is 7.4 mmol/L. Her mouth is dry and peripheries are cool. Chest examination is clear. There is mild suprapubic and right renal-angle tenderness without guarding. There is no rash, focal neurological deficit or meningism." }]
            },
            {
              id: "c012-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-recognition", text: "She has possible infection with new confusion, tachypnoea and impaired perfusion. Her normal-range blood pressure does not exclude organ dysfunction. Activate the adult sepsis pathway and request senior review. Her saturation is within the 92% to 96% target, so monitor without routine oxygen. Insert two intravenous cannulas and begin strict fluid balance. Perform a bladder scan, then insert a urinary catheter if there is no contraindication to exclude retention and measure hourly output." }]
            },
            {
              id: "c012-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-investigations", text: "Take two blood-culture sets and a venous gas with lactate, full blood count, renal and liver function and coagulation studies. Send urine for dipstick, microscopy and culture, without delaying treatment. Arrange an ECG, chest X-ray and source-directed imaging. Record the recognition time and repeat lactate after treatment." }]
            },
            {
              id: "c012-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-treatment", text: "After checking allergies and recent microbiology, give empiric intravenous antibiotics under the local urinary sepsis pathway within 60 minutes. Take cultures first only if this causes no delay. Give 500 millilitres of Hartmann's solution, then reassess circulation, lungs, mental state and urine output before giving more." }]
            },
            {
              id: "c012-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c012-run-treatment-action", text: "Monitoring and intravenous access are established. The bladder scan shows 40 millilitres and a urinary catheter is inserted. Blood and urine cultures are collected, the first antibiotic dose is given and a measured Hartmann's bolus begins." }]
            }
          ]
        },
        {
          id: "c012-run-history-results",
          heading: "Collateral history, source and response",
          turns: [
            {
              id: "c012-turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-history", text: "Lucia, when was Marisol last completely herself, and what changed first?" }]
            },
            {
              id: "c012-turn-history-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c012-run-history-answer", text: "She was normal yesterday morning. By evening she was muddled and needed help walking." }]
            },
            {
              id: "c012-turn-source-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-source-history", text: "Has she had shaking, pain, cough, vomiting, diarrhoea or urinary change? Any fall or new medicine?" }]
            },
            {
              id: "c012-turn-source-history-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c012-run-source-history-answer", text: "She shivered overnight, kept going to the toilet but passed very little, and mentioned a right-sided ache. She has passed no urine since early morning. No cough, diarrhoea, fall or new medicine." }]
            },
            {
              id: "c012-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-background", text: "Any previous urine infection or kidney stone? What are her conditions, medicines, allergies and usual memory and function? Does she have an advance-care plan?" }]
            },
            {
              id: "c012-turn-background-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c012-run-background-answer", text: "A kidney stone five years ago, high blood pressure and stage 3 kidney disease. She takes perindopril and amlodipine and has no allergies. She normally shops, cooks and manages her medicines. No dementia or advance-care plan." }]
            },
            {
              id: "c012-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c012-run-results", text: "Venous lactate is 4.3 mmol/L. White cell count is 18.6, platelets 118, creatinine 190 micromol/L from a baseline of 110, and bicarbonate 18 mmol/L. Urine is positive for nitrites and leukocytes, with pyuria on microscopy. Cultures are pending. Renal ultrasound shows moderate right hydronephrosis. After 500 millilitres of Hartmann's, pulse is 104, blood pressure 122/70, capillary refill is three seconds and lungs remain clear. She is still confused and has passed only 10 millilitres of urine." }]
            },
            {
              id: "c012-turn-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-interpret", text: "This is sepsis from right pyelonephritis, with delirium, acute kidney injury, oliguria and raised lactate. Hydronephrosis makes an infected obstruction likely. Repeat lactate and continue close monitoring. Her lungs are clear and perfusion partly improved, so give a further 250 to 500 millilitres with reassessment, not automatic large-volume fluid." }]
            },
            {
              id: "c012-turn-source-control",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-source-control", text: "Call urology now for urgent decompression planning and request intensive-care review now because organ dysfunction persists. Ultrasound and the clinical picture strongly suggest an infected obstruction; any further imaging chosen with urology must not delay drainage. Review antibiotics against cultures and renal function within 24 to 48 hours." }]
            },
            {
              id: "c012-turn-specialist-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c012-run-specialist-action", text: "Urology and intensive care are contacted and confirm that they are attending." }]
            },
            {
              id: "c012-turn-daughter-question",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c012-run-daughter-question", text: "Her blood pressure is normal. Does that mean it is not really serious?" }]
            },
            {
              id: "c012-turn-daughter-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-daughter-answer", text: "No. Her confusion, low urine output, kidney injury and raised lactate show organ dysfunction already. Blood pressure can remain normal early in sepsis." }]
            },
            {
              id: "c012-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c012-run-time", text: "Please explain your assessment and ongoing management plan." }]
            }
          ]
        },
        {
          id: "c012-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c012-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-explanation", text: "Marisol and Lucia, a kidney and urine infection has triggered sepsis, meaning the infection is affecting her organs. That explains the confusion, kidney injury, very low urine output and poor circulation." }]
            },
            {
              id: "c012-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-plan", text: "Antibiotics and measured intravenous fluid have started. The swollen right kidney strongly suggests infected urine is trapped, so urology is assessing you for urgent drainage. Antibiotics alone may not control infection behind an obstruction." }]
            },
            {
              id: "c012-turn-uncertainty",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c012-run-uncertainty", text: "Some circulation measures improved, but you remain unwell. Intensive care is reviewing you now while we repeat the lactate, monitor your organs and keep you comfortable and oriented." }]
            },
            {
              id: "c012-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c012-run-handover-prompt", text: "Please finish with a concise handover to the senior clinician." }]
            },
            {
              id: "c012-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c012-run-handover", text: "Marisol Vega is 81 and normally independent. She has urinary sepsis with delirium, acute kidney injury and oliguria. Lactate is 4.3 and creatinine 190 from 110; blood pressure is 122/70 after 500 millilitres of Hartmann's. Urine supports infection and ultrasound shows right hydronephrosis. Cultures have been collected and the first antibiotic dose given. She remains confused with minimal urine. Urology and intensive care are attending for urgent decompression and organ support, with repeat lactate and cautious fluid reassessment underway." }]
            },
            {
              id: "c012-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c012-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Sepsis Clinical Care Standard",
        date: "2022 standard, current citation July 2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis"
      },
      {
        organisation: "Queensland Health",
        title: "Adult Sepsis Pathway, Low MRSA Non-Tropical",
        date: "Version 2.00, March 2025",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0033/1383963/SW1283-v2.pdf"
      },
      {
        organisation: "Queensland Health",
        title: "Sepsis resources for health professionals",
        date: "Updated September 2025",
        url: "https://www.health.qld.gov.au/clinical-practice/guidelines-procedures/clinical-resources/sepsis-resources-for-health-professionals"
      }
    ]
  });
})();
