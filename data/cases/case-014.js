(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-014",
    globalId: "CP-C014",
    registryId: "CP-P4-C003",
    displayNumber: "Case 14",
    title: "Chills and tiredness after chemotherapy",
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
          id: "c014-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c014-stem-patient",
          text: "Ms Celeste Moretti, a 46-year-old woman, attends with chills, tiredness and a sore mouth since last night. She received chemotherapy eight days ago. Her partner, Jonah, is with her."
        },
        {
          id: "c014-stem-start",
          text: "Celeste is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c014-task-history-assess",
          text: "Obtain a focused history and assess Celeste's current condition.",
          timing: "3 minutes"
        },
        {
          id: "c014-task-interpret",
          text: "Interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c014-task-explain",
          text: "Explain your concerns and management plan to Celeste and Jonah.",
          timing: "1 minute"
        },
        {
          id: "c014-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c014-run-assessment",
          heading: "Focused assessment and risk recognition",
          turns: [
            {
              id: "c014-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-start", text: "You may begin." }]
            },
            {
              id: "c014-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c014-run-first-action", text: "The doctor performs hand hygiene and approaches Celeste." }]
            },
            {
              id: "c014-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-intro", text: "Hello, I am Ushana, one of the doctors here. Could I confirm your full name and what has worried you most today?" }]
            },
            {
              id: "c014-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-opening", text: "Celeste Moretti. I kept shivering last night and feel completely drained, but my temperature is not very high now." }]
            },
            {
              id: "c014-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-consent", text: "I will check you while we talk. Is it okay for Jonah to stay and help with the timeline?" }]
            },
            {
              id: "c014-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-consent-answer", text: "Yes." }]
            },
            {
              id: "c014-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-primary", text: "I assess airway, breathing, circulation and conscious state. Check respiratory rate, oxygen saturation, pulse, blood pressure, temperature, capillary refill and glucose. Examine the mouth, chest, abdomen and skin, without a rectal temperature or rectal examination. Please provide the findings." }]
            },
            {
              id: "c014-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c014-run-primary-findings", text: "Celeste's airway is patent. Respiratory rate is 23 breaths per minute, oxygen saturation is 96% on room air, pulse is 116 beats per minute and regular, blood pressure is 104/64 mmHg, temperature is 37.8 degrees Celsius and capillary refill time is three seconds. GCS is 15 and glucose is 6.8 mmol/L. She looks pale and is shivering. There are several oral ulcers without airway swelling. Chest and abdominal examinations are unremarkable, with no rash or wound." }]
            },
            {
              id: "c014-turn-history-chemo",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-history-chemo", text: "Which cancer is being treated, when was your last chemotherapy, and did oncology give you a fever plan? Do you have a central line?" }]
            },
            {
              id: "c014-turn-history-chemo-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-history-chemo-answer", text: "Breast cancer. The cycle was eight days ago, and they said my counts may fall around now. I have a PICC in my right arm. My card says to call if my temperature reaches 38." }]
            },
            {
              id: "c014-turn-fever-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-fever-history", text: "What was your highest temperature, and did you take anything for it? Any shaking chills? Did you receive a white-cell growth injection?" }]
            },
            {
              id: "c014-turn-fever-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-fever-history-answer", text: "It was 38.3 at 6 am, then I took paracetamol. I had shaking chills overnight and no growth injection." }]
            },
            {
              id: "c014-turn-source-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-source-history", text: "Any cough, breathlessness, urine symptoms, diarrhoea, abdominal or anal pain, skin change or pain around the PICC? Can you drink?" }]
            },
            {
              id: "c014-turn-source-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-source-history-answer", text: "No cough, urine problem, diarrhoea, abdominal or anal pain, skin change or line pain. My mouth hurts and I have hardly drunk today. Jonah had a cold last week." }]
            },
            {
              id: "c014-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-background", text: "Any recent antibiotic, hospital admission, resistant infection or medicine allergy? I would also inspect the PICC site." }]
            },
            {
              id: "c014-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-background-answer", text: "No to all of those." }]
            },
            {
              id: "c014-turn-line-finding",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c014-run-line-finding", text: "The PICC site is clean and non-tender." }]
            }
          ]
        },
        {
          id: "c014-run-management",
          heading: "Interpretation and transfer plan",
          turns: [
            {
              id: "c014-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-recognition", text: "Chemotherapy eight days ago, rigors, a home temperature of 38.3, tachycardia, slow refill and mucositis make neutropenic sepsis possible. Paracetamol can lower the measured temperature, and impaired immunity can blunt fever. I will not wait for a clinic blood count before arranging care." }]
            },
            {
              id: "c014-turn-actions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-actions", text: "Call Triple Zero for a monitored ambulance and contact acute oncology and the receiving emergency department now. Record the presentation and recognition times and monitor observations. Check whether today's chemotherapy blood result is available. If intravenous access can be obtained without delaying transfer, give 250 to 500 millilitres of Hartmann's for delayed perfusion, then reassess. Her saturation is adequate, so do not give routine oxygen." }]
            },
            {
              id: "c014-turn-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c014-run-action", text: "The ambulance, acute oncology team and emergency department are contacted. Intravenous access is obtained and a measured Hartmann's bolus begins without delaying transfer." }]
            },
            {
              id: "c014-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c014-run-results", text: "A routine chemotherapy blood sample taken this morning now reports white cell count 0.5, neutrophils 0.1, haemoglobin 91 and platelets 74. Kidney and liver function are unchanged. The ambulance is eight minutes away." }]
            },
            {
              id: "c014-turn-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-interpret", text: "This confirms profound neutropenia with suspected infection and impaired perfusion. She needs the hospital neutropenic-sepsis pathway. Blood cultures should come from a peripheral vein and each PICC lumen, without delaying antibiotics. With no penicillin allergy, piperacillin-tazobactam 4.5 grams intravenously is an appropriate local first dose, due within 30 minutes of presentation or clinical recognition, whichever was earlier. Choice must still follow her oncology plan, prior cultures and local resistance guidance." }]
            },
            {
              id: "c014-turn-transfer-detail",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-transfer-detail", text: "Confirm directly with the ambulance and receiving emergency clinician that the first dose will start within that 30-minute window. If they cannot meet it, arrange immediate pre-transfer piperacillin-tazobactam through the local clinic or ambulance pathway after senior and oncology advice, without delaying departure. She needs admission, frequent observations and source review. Avoid rectal examination, rectal medicines and intramuscular injections while counts are low." }]
            },
            {
              id: "c014-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-patient-question", text: "My temperature is below 38 now. Could Jonah drive me home and watch it for another hour?" }]
            },
            {
              id: "c014-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-patient-answer", text: "No. The earlier fever, shaking and circulation changes matter more than this one reading. With extremely low neutrophils, infection can worsen quickly and show few local symptoms. You need monitored ambulance transfer and intravenous treatment, not home observation or a private car." }]
            },
            {
              id: "c014-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-time", text: "Please explain your concerns and management plan to Celeste and Jonah." }]
            }
          ]
        },
        {
          id: "c014-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c014-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-explanation", text: "Celeste and Jonah, chemotherapy has reduced the neutrophils that fight infection. Your count is 0.1, which is profoundly low. The fever, chills, fast pulse and slow circulation mean we must treat this as neutropenic sepsis even without a clear source." }]
            },
            {
              id: "c014-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-plan", text: "The ambulance will take you to hospital while oncology and the emergency team prepare. We are confirming that intravenous antibiotics will start within the 30-minute pathway window. Cultures must not delay them. You will be admitted, monitored and checked for the infection source." }]
            },
            {
              id: "c014-turn-reassurance",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-reassurance", text: "You did the right thing by coming. With this chemotherapy timing and blood count, it is unsafe to wait for a higher fever or clearer symptoms." }]
            },
            {
              id: "c014-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-handover-prompt", text: "Please finish with a concise handover to the receiving emergency clinician." }]
            },
            {
              id: "c014-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c014-run-handover", text: "Celeste Moretti is 46 and day eight after breast-cancer chemotherapy. She had rigors and a home temperature of 38.3 before paracetamol. Pulse is 116, pressure 104/64 and refill three seconds. Neutrophils are 0.1 and platelets 74. She has mucositis, a clean PICC and no other clear source; she reports no anal pain. Oncology and ED are alerted, monitored ambulance transfer is underway, and the first protocol antibiotic must start within 30 minutes of presentation or clinical recognition, whichever was earlier." }]
            },
            {
              id: "c014-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-end", text: "Thank you. The station is complete." }]
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
        title: "Adult Sepsis Primary Healthcare Screening Tool",
        date: "Current tool accessed July 2026",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0019/1381330/adult-sepsis-screening-tool.pdf"
      },
      {
        organisation: "eviQ, Cancer Institute NSW",
        title: "Neutropenic fever: Patient evaluation, risk assessment and immediate management",
        date: "ID 123 version 7, reviewed July 2026",
        url: "https://www.eviq.org.au/p/123"
      }
    ]
  });
})();
