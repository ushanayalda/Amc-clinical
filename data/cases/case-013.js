(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-013",
    globalId: "CP-C013",
    registryId: "CP-P4-C002",
    displayNumber: "Case 13",
    title: "Fever, cough and increasing weakness",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 4, title: "Sepsis Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Adult emergency medicine"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c013-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c013-stem-patient",
          text: "Mr Kieran D'Souza, a 58-year-old man, has presented with fever, cough and increasing weakness over two days. His partner, Anika, is present."
        },
        {
          id: "c013-stem-start",
          text: "Kieran is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c013-task-assess",
          text: "Assess Kieran and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c013-task-interpret",
          text: "Interpret the initial and repeat findings and discuss your next steps.",
          timing: "3 minutes"
        },
        {
          id: "c013-task-explain",
          text: "Explain your assessment and management plan to Kieran and Anika.",
          timing: "1 minute"
        },
        {
          id: "c013-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c013-run-assessment",
          heading: "Assessment and first treatment",
          turns: [
            {
              id: "c013-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-start", text: "You may begin." }]
            },
            {
              id: "c013-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c013-run-first-action", text: "The doctor performs hand hygiene, applies appropriate respiratory precautions and approaches Kieran." }]
            },
            {
              id: "c013-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-intro", text: "Hello Kieran, I am Ushana, one of the emergency doctors. Can you confirm your full name and tell me what is troubling you most?" }]
            },
            {
              id: "c013-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c013-run-opening", text: "Kieran D'Souza. I cannot catch my breath, and I feel too weak to sit up." }]
            },
            {
              id: "c013-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-consent", text: "I will assess and treat you while we speak. Is it okay for Anika to help with the history?" }]
            },
            {
              id: "c013-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c013-run-consent-answer", text: "Yes." }]
            },
            {
              id: "c013-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-primary", text: "I assess airway, breathing, circulation and conscious state. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check temperature, glucose, perfusion and urine output. Examine the chest, heart, abdomen, skin and calves. Please provide the findings." }]
            },
            {
              id: "c013-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c013-run-primary-findings", text: "Kieran's airway is patent. Respiratory rate is 34 breaths per minute, oxygen saturation is 88% on room air and there are coarse crackles with bronchial breathing at the right base. Pulse is 132 beats per minute and regular, blood pressure is 82/46 mmHg, temperature is 39.1 degrees Celsius and capillary refill time is five seconds. His knees are mottled, GCS is 14 and blood glucose is 8.1 mmol/L. He weighs 78 kilograms. There is no raised jugular venous pressure, peripheral oedema, calf asymmetry, rash or abdominal tenderness." }]
            },
            {
              id: "c013-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-recognition", text: "This is shock with a likely respiratory infection. Activate the adult sepsis pathway and call the senior emergency doctor and intensive-care team. Give oxygen, targeting 92% to 96%. Obtain two large-bore intravenous lines and insert a urinary catheter, if not contraindicated, for hourly urine output." }]
            },
            {
              id: "c013-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-investigations", text: "Take two blood-culture sets, a blood gas with lactate, full blood count, renal and liver function and coagulation studies. Send sputum and respiratory viral testing without delaying treatment. Arrange ECG, portable chest X-ray and bedside cardiac and lung ultrasound." }]
            },
            {
              id: "c013-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-treatment", text: "Record the recognition time and give empiric intravenous antibiotics for severe community-acquired pneumonia now. Take cultures first only if this causes no delay. Give 500 millilitres of Hartmann's solution and reassess circulation, lungs and fluid responsiveness." }]
            },
            {
              id: "c013-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c013-run-treatment-action", text: "Oxygen, monitoring and intravenous access are established. Cultures are taken, antibiotics are administered and a measured fluid bolus is given while the senior and intensive-care teams are called." }]
            }
          ]
        },
        {
          id: "c013-run-response",
          heading: "Source, treatment response and escalation",
          turns: [
            {
              id: "c013-turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-history", text: "Anika, when did this begin, and how did his breathing and cough change today?" }]
            },
            {
              id: "c013-turn-history-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-history-answer", text: "Fever and cough began two days ago. Today he produced rusty sputum, had sharp right-sided pain when breathing and became much weaker. I had influenza last week." }]
            },
            {
              id: "c013-turn-source-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-source-history", text: "Any choking, coughing blood, vomiting, diarrhoea, urinary symptoms, rash or wound? Any recent antibiotic or hospital stay?" }]
            },
            {
              id: "c013-turn-source-history-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-source-history-answer", text: "No. He has not taken antibiotics or been in hospital recently." }]
            },
            {
              id: "c013-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-background", text: "Any heart, lung, kidney or immune problem? What medicines and allergies? Has he passed urine today?" }]
            },
            {
              id: "c013-turn-background-answer",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-background-answer", text: "Only high blood pressure treated with irbesartan, and no allergies. He passed a little dark urine this morning and none since." }]
            },
            {
              id: "c013-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c013-run-results", text: "Lactate is 6.0 mmol/L, pH 7.28 and bicarbonate 17 mmol/L. White cell count is 19.4, platelets 92 and creatinine 168 micromol/L from a baseline of 82. Chest X-ray shows dense right lower-lobe consolidation. Bedside ultrasound shows a hyperdynamic left ventricle with no pericardial effusion. After the first 500 millilitres of Hartmann's, blood pressure is 88/50, pulse 126 and refill four seconds. A passive leg raise produces a temporary improvement in pulse pressure, and the lungs are unchanged." }]
            },
            {
              id: "c013-turn-second-fluid",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-second-fluid", text: "This is pneumonia causing septic shock with acute kidney injury. Begin peripheral noradrenaline now at the local-protocol starting rate of 5 micrograms per minute because hypotension persists. As he remains fluid responsive without overload, give a second 500-millilitre Hartmann's bolus concurrently and reassess. Start empiric oseltamivir while PCR is pending, adjusted for renal function." }]
            },
            {
              id: "c013-turn-second-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c013-run-second-treatment-action", text: "Peripheral noradrenaline and the second measured fluid bolus commence. The first oseltamivir dose is prescribed and given." }]
            },
            {
              id: "c013-turn-repeat-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c013-run-repeat-findings", text: "After a total of one litre of Hartmann's, blood pressure is 86/48 mmHg, mean arterial pressure is 61, pulse is 124 and refill remains four seconds. Urine output is 10 millilitres. Passive leg raise no longer changes pulse pressure. Oxygen saturation is 93% on oxygen, and repeat lung ultrasound now shows increasing bilateral B-lines." }]
            },
            {
              id: "c013-turn-vasopressor",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-vasopressor", text: "Stop further rapid boluses because fluid responsiveness has been lost and B-lines are increasing. Continue noradrenaline through monitored proximal peripheral access while central access is arranged, and titrate from the local-protocol starting rate to a mean arterial pressure of at least 65 mmHg and clinical perfusion. Intensive care will manage vasopressor and organ support. Repeat lactate within two hours." }]
            },
            {
              id: "c013-turn-partner-question",
              speaker: "Partner",
              kind: "spoken",
              lines: [{ id: "c013-run-partner-question", text: "Why are you not just giving him more fluid until the pressure comes up?" }]
            },
            {
              id: "c013-turn-partner-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-partner-answer", text: "We checked after each measured bolus. He is no longer responding and fluid is starting to collect in his lungs. Noradrenaline supports his circulation while antibiotics treat the infection." }]
            },
            {
              id: "c013-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-time", text: "Please explain the diagnosis and ongoing management plan." }]
            }
          ]
        },
        {
          id: "c013-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c013-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-explanation", text: "Kieran, the X-ray shows right-sided pneumonia. It has triggered sepsis, and your circulation is not delivering enough blood to your organs. This is septic shock. Anika, I will keep explaining each step while we treat him." }]
            },
            {
              id: "c013-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-plan", text: "Kieran, you have received oxygen, antibiotics, oseltamivir and measured fluid. Noradrenaline is supporting your circulation because more fluid may harm your lungs. Intensive care will monitor your breathing, pressure, urine, kidneys and lactate and provide further support if needed." }]
            },
            {
              id: "c013-turn-review",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c013-run-review", text: "Cultures and viral testing may identify the cause. Treatment will be reviewed when results return, and we will look for a drainable complication if he does not improve." }]
            },
            {
              id: "c013-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-handover-prompt", text: "Please finish with a concise handover to the intensive-care clinician." }]
            },
            {
              id: "c013-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c013-run-handover", text: "Kieran D'Souza is 58 with severe right lower-lobe pneumonia and septic shock. Initial pressure was 82/46, saturation 88% and lactate 6.0, with acute kidney injury and oliguria. Cultures, pneumonia antibiotics, oseltamivir, oxygen and two measured 500-millilitre Hartmann's boluses have been given. MAP remains 61; he is no longer fluid responsive and B-lines are increasing. Noradrenaline is running at 5 micrograms per minute through monitored peripheral access while central access is arranged. Repeat lactate and intensive-care organ support are planned." }]
            },
            {
              id: "c013-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c013-run-end", text: "Thank you. The station is complete." }]
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
        organisation: "Clinical Excellence Commission",
        title: "Adult Sepsis Pathway",
        date: "Current NSW pathway accessed July 2026",
        url: "https://cec.health.nsw.gov.au/__data/assets/pdf_file/0005/291803/Adult-Sepsis-Pathway.PDF"
      },
      {
        organisation: "Centers for Disease Control and Prevention",
        title: "Influenza Antiviral Medications: Summary for Clinicians",
        date: "Updated March 2026",
        url: "https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html"
      }
    ]
  });
})();
