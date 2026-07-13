(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-021",
    globalId: "CP-C021",
    registryId: "CP-P7-C001",
    displayNumber: "Case 21",
    title: "Vomiting, abdominal pain and unusual breathing",
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
          id: "c021-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c021-stem-patient",
          text: "Ms Liora Mbeki, a 24-year-old woman, has presented with vomiting and abdominal pain since yesterday. She says her breathing feels different."
        },
        {
          id: "c021-stem-start",
          text: "Liora is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c021-task-assess",
          text: "Obtain a focused history and assess Liora's current condition.",
          timing: "3 minutes"
        },
        {
          id: "c021-task-interpret",
          text: "Interpret the findings and investigation results and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c021-task-explain",
          text: "Explain your assessment and management plan to Liora.",
          timing: "1 minute"
        },
        {
          id: "c021-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c021-run-assessment",
          heading: "Focused assessment and recognition",
          turns: [
            {
              id: "c021-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-start", text: "You may begin." }]
            },
            {
              id: "c021-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c021-run-first-action", text: "The doctor performs hand hygiene and approaches Liora." }]
            },
            {
              id: "c021-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-intro", text: "Hello Liora, I am Ushana, an emergency doctor. Can you confirm your full name? I need to assess and treat you. Is that okay?" }]
            },
            {
              id: "c021-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-consent", text: "Liora Mbeki. Yes. I thought this was a stomach bug, but I cannot stop vomiting." }]
            },
            {
              id: "c021-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check bedside glucose and blood ketones now and obtain intravenous access. Please provide the findings." }]
            },
            {
              id: "c021-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c021-run-primary-findings", text: "Airway is patent. Respiratory rate is 30 with deep breaths, oxygen saturation 98% on room air and lungs are clear. Pulse is 118, blood pressure 98/62 and capillary refill three seconds. Liora is dry, tired but orientated. Temperature is 37.7 degrees Celsius. Glucose is 26.4 mmol/L and blood ketones are 6.2 mmol/L. There is generalised abdominal tenderness without guarding." }]
            },
            {
              id: "c021-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-recognition", text: "This is probable diabetic ketoacidosis with dehydration. Call the senior emergency doctor and diabetes team. Start an adult DKA pathway. Give the first litre of isotonic crystalloid over one hour, adjusted to her response and contraindications. Reassess circulation, lungs and urine output." }]
            },
            {
              id: "c021-turn-history-symptoms",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-history-symptoms", text: "While that starts, when did you become unwell? Any diarrhoea, fever, cough, urinary symptoms, localised pain, confusion, chest pain, pregnancy possibility or sick contacts?" }]
            },
            {
              id: "c021-turn-history-symptoms-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-history-symptoms-answer", text: "I developed a sore throat and runny nose three days ago. Yesterday I became thirsty, passed urine constantly, then started vomiting with crampy pain everywhere. No diarrhoea, urinary symptoms, cough or chest pain. I am not pregnant." }]
            },
            {
              id: "c021-turn-history-diabetes",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-history-diabetes", text: "Tell me about your diabetes and usual insulin. What doses have you taken during this illness? Have you checked glucose or ketones? Any previous ketoacidosis, medication allergies, alcohol or other drugs?" }]
            },
            {
              id: "c021-turn-history-diabetes-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-history-diabetes-answer", text: "I have had type 1 diabetes since I was twelve. I take glargine eighteen units at night and aspart with meals. I skipped glargine last night because I was not eating, and missed most meal doses. My meter just said high. I had ketoacidosis once as a teenager. No allergies, alcohol or drugs." }]
            }
          ]
        },
        {
          id: "c021-run-investigation",
          heading: "Confirmation, treatment and monitoring",
          turns: [
            {
              id: "c021-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-investigations", text: "Send laboratory glucose, electrolytes, urea and creatinine, magnesium, phosphate, full blood count, venous gas and lactate. Obtain an ECG, urinalysis, blood cultures, respiratory viral PCR, chest X-ray and serum pregnancy test. Please provide the results." }]
            },
            {
              id: "c021-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c021-run-results", text: "Venous pH is 7.12, bicarbonate 8 mmol/L, sodium 132, chloride 101, potassium 5.4, urea 12 and creatinine 118 micromol/L. Lactate is 2.0 mmol/L. White cell count is 13.1. Pregnancy test is negative. ECG shows sinus tachycardia without acute ischaemia. Chest X-ray is clear, urinalysis does not suggest infection and respiratory viral PCR is pending." }]
            },
            {
              id: "c021-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-interpretation", text: "The ketonaemia and high-anion-gap metabolic acidosis confirm DKA. Omitted insulin during a likely viral illness is the leading trigger, with no bacterial focus identified currently. Start fixed-rate intravenous insulin at 0.1 units per kilogram per hour under the local protocol, without an insulin bolus. Continue her usual basal glargine. Review the viral PCR and cultures and treat any identified source without delaying DKA care." }]
            },
            {
              id: "c021-turn-potassium",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-potassium", text: "Although potassium is currently raised, total body potassium is depleted and will fall with insulin. Replace potassium in subsequent fluid according to repeat results, renal function, urine output and the local pathway. If potassium falls below 3.5, stop insulin temporarily, replace potassium and obtain senior review." }]
            },
            {
              id: "c021-turn-monitoring",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-monitoring", text: "Record glucose and ketones hourly, and repeat venous pH, bicarbonate and potassium at one hour, two hours and then at least two-hourly. Aim for ketones to fall by at least 0.5 mmol/L per hour or bicarbonate to rise by at least 3 mmol/L per hour. Check fluid balance and neurological state." }]
            },
            {
              id: "c021-turn-dextrose",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-dextrose", text: "When glucose falls below 14 mmol/L, add intravenous glucose and consider reducing insulin to 0.05 units per kilogram per hour under the local protocol. Insulin must continue until ketonaemia and acidosis resolve. Do not give bicarbonate or phosphate routinely." }]
            },
            {
              id: "c021-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c021-run-response", text: "After two hours, Liora is more alert. Pulse is 100, blood pressure 108/70, glucose 18 mmol/L, ketones 4.9 mmol/L, pH 7.20, bicarbonate 12 mmol/L and potassium 4.3 mmol/L. Urine output is adequate." }]
            },
            {
              id: "c021-turn-response-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-response-interpret", text: "She is responding appropriately. Continue protocolised fluids, insulin, potassium replacement and review of the precipitating illness. Persistent or localising abdominal pain after the acidosis improves would need separate investigation rather than being assumed to be DKA." }]
            },
            {
              id: "c021-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c021-run-patient-question", text: "Did skipping one long-acting dose really cause all this? When can the insulin drip stop?" }]
            },
            {
              id: "c021-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-patient-answer", text: "The infection increased your insulin needs, and missing basal insulin allowed acids called ketones to build up. The drip continues until the ketones are below 0.6 and the blood acidity has corrected, not merely until the glucose improves. We overlap injected insulin before stopping it." }]
            }
          ]
        },
        {
          id: "c021-run-communication",
          heading: "Explanation, resolution and handover",
          turns: [
            {
              id: "c021-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-explanation-prompt", text: "Please explain your assessment and management plan to Liora." }]
            },
            {
              id: "c021-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-explanation", text: "Liora, you have diabetic ketoacidosis. Without enough insulin, your body broke down fat and produced acidic ketones. That caused the vomiting, abdominal pain, dehydration and deep breathing. We are replacing fluid, giving insulin safely, monitoring potassium and checking the minor illness that contributed." }]
            },
            {
              id: "c021-turn-resolution-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c021-run-resolution-plan", text: "You will remain in a closely monitored area with the diabetes team. Once ketones are below 0.6, pH is above 7.3 and you can eat and drink, we will return to injected insulin with appropriate overlap. Before discharge, we will review sick-day rules: never stop basal insulin, check ketones, maintain fluids and seek early help." }]
            },
            {
              id: "c021-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c021-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c021-run-handover", text: "Liora Mbeki is 24 with type 1 diabetes, three days of coryzal symptoms and one day of vomiting, generalised abdominal pain, polyuria and deep breathing after missing basal glargine. Initial glucose was 26.4, ketones 6.2, venous pH 7.12, bicarbonate 8 and potassium 5.4. Chest X-ray is clear and no bacterial focus is identified currently. DKA protocol, isotonic fluid, fixed-rate insulin, continued glargine and potassium-guided replacement are underway. At two hours, perfusion, ketones and acidosis are improving. Continue biochemical targets, fluid balance and precipitant review with diabetes and senior input." }]
            },
            {
              id: "c021-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c021-run-end", text: "Thank you. The station is complete." }]
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
        title: "The Management of Diabetic Ketoacidosis in Adults",
        date: "Revised March 2023",
        url: "https://abcd.care/sites/default/files/site_uploads/JBDS_Guidelines_Current/JBDS_02_DKA_Guideline_with_QR_code_March_2023.pdf"
      }
    ]
  });
})();
