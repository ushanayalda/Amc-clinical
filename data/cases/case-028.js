(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-028",
    globalId: "CP-C028",
    registryId: "CP-P9-C002",
    displayNumber: "Case 28",
    title: "Severe abdominal pain over several hours",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 9, title: "Acute Severe Abdominal Pain with Instability" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c028-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c028-stem-patient",
          text: "Mrs Soraya Vassallo, a 77-year-old woman, has presented with severe central abdominal pain that has become diffuse over several hours. She has vomited once."
        },
        {
          id: "c028-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c028-task-history",
          text: "Take a focused history from Soraya.",
          timing: "2 minutes"
        },
        {
          id: "c028-task-assess",
          text: "Assess Soraya, interpret the information provided and select the most appropriate investigation.",
          timing: "3 minutes"
        },
        {
          id: "c028-task-explain",
          text: "Explain your assessment and management plan to Soraya.",
          timing: "2 minutes"
        },
        {
          id: "c028-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c028-run-history",
          heading: "Focused history and initial assessment",
          turns: [
            {
              id: "c028-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c028-run-start", text: "You may begin." }]
            },
            {
              id: "c028-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c028-run-first-action", text: "The doctor performs hand hygiene and approaches Soraya." }]
            },
            {
              id: "c028-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-intro", text: "Hello Mrs Vassallo, I am Ushana, an emergency doctor. Please confirm your name. May I ask questions and examine you?" }]
            },
            {
              id: "c028-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c028-run-consent", text: "Soraya Vassallo. Yes, please. The pain is unbearable." }]
            },
            {
              id: "c028-turn-pain-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-pain-question", text: "How did it start and spread? Is it constant? Any previous post-meal pain, vomiting, diarrhoea, bleeding, swelling, fever, urinary symptoms, chest pain or faintness?" }]
            },
            {
              id: "c028-turn-pain-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c028-run-pain-answer", text: "It struck suddenly around 10 this morning, like a switch, in the middle and then everywhere. It has stayed ten out of ten. I vomited once. No other symptoms, bleeding or previous pain after food." }]
            },
            {
              id: "c028-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-background-question", text: "Any medical conditions, operations or allergies? Which medicines, especially blood thinners, changed recently? Any recent bleeding, stroke or head injury?" }]
            },
            {
              id: "c028-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c028-run-background-answer", text: "I have atrial fibrillation and high blood pressure. I stopped apixaban four days ago for a dental extraction yesterday and have not restarted it. I take perindopril, have no allergies or operations, and no bleeding, stroke or head injury." }]
            },
            {
              id: "c028-turn-assessment-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-assessment-request", text: "I assess ABC and conscious state, obtain observations and glucose, examine heart and lungs, and inspect and palpate the abdomen for distension, tenderness, guarding and rebound. Findings, please." }]
            },
            {
              id: "c028-turn-assessment-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c028-run-assessment-findings", text: "Airway is patent. Soraya is alert and distressed. Respiratory rate is 22, oxygen saturation 96% on room air, pulse 112 and irregular, blood pressure 98/62, temperature 36.8 degrees Celsius and glucose 6.9 mmol/L. Her peripheries are cool; capillary refill is 3 seconds. Lungs are clear. The abdomen is soft with minimal diffuse tenderness and no distension, guarding or rebound." }]
            },
            {
              id: "c028-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-interpretation", text: "Abrupt severe pain greatly out of proportion to the early abdominal findings, with atrial fibrillation and interrupted anticoagulation, makes embolic acute mesenteric ischaemia my leading concern. A soft abdomen does not make this safe." }]
            }
          ]
        },
        {
          id: "c028-run-investigation",
          heading: "Resuscitation, investigation and definitive plan",
          turns: [
            {
              id: "c028-turn-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-resuscitation", text: "Resuscitation and diagnosis proceed together. Call senior general and vascular surgeons, anaesthesia, intensive care and radiology. Obtain two large-bore intravenous lines, start cardiac and oxygen monitoring, check blood pressure and urine output. Keep Soraya nil by mouth, give titrated analgesia and antiemetic, and reassess small crystalloid boluses." }]
            },
            {
              id: "c028-turn-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-tests", text: "Send full blood count, urea and electrolytes, liver tests, lipase, coagulation studies, venous blood gas with lactate, and group and crossmatch. Correct electrolyte abnormalities. Give early broad-spectrum intravenous antibiotics. Use a nasogastric tube only for continuing vomiting or distension." }]
            },
            {
              id: "c028-turn-cta-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-cta-request", text: "The key investigation is urgent biphasic CT angiography of the abdomen and pelvis, with arterial and venous phases and no oral contrast. Do not wait for lactate or renal results; suspected mesenteric ischaemia justifies contrast despite acute kidney injury." }]
            },
            {
              id: "c028-turn-blood-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c028-run-blood-results", text: "Haemoglobin is 132 g/L, white cell count 13.2 x 10^9/L and platelets 238 x 10^9/L. Potassium is 3.3 mmol/L and creatinine 139 micromol/L, increased from 84. Liver tests and lipase are normal. INR is 1.1, APTT 29 seconds, venous pH 7.35 and lactate 1.8 mmol/L. Crossmatched blood is available." }]
            },
            {
              id: "c028-turn-results-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-results-interpretation", text: "A normal early lactate does not exclude bowel ischaemia. Despite mild acute kidney injury, CT angiography proceeds. I replace potassium with monitoring." }]
            },
            {
              id: "c028-turn-cta-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c028-run-cta-result", text: "CT angiography shows abrupt embolic occlusion of the superior mesenteric artery 6 cm beyond its origin, with reduced enhancement of several small-bowel loops but no free gas, pneumatosis or portal venous gas. Repeat examination remains soft without peritonism; blood pressure is 94/60 after 250 mL crystalloid." }]
            },
            {
              id: "c028-turn-reassessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-reassessment", text: "Repeat ABC, perfusion and abdominal examination, urine output and lactate. Continue individualised crystalloid with reassessment, and use vasoactive support if hypoperfusion persists without delaying reperfusion." }]
            },
            {
              id: "c028-turn-heparin-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-heparin-plan", text: "With CT confirming acute mesenteric ischaemia, check active bleeding, intracranial haemorrhage, heparin-induced thrombocytopenia, last apixaban dose and the procedural plan while coordinating senior teams. Start full-dose intravenous unfractionated heparin without avoidable delay, with APTT and platelet monitoring." }]
            },
            {
              id: "c028-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-definitive-plan", text: "Urgent endovascular revascularisation is preferred while there is no peritonitis and expertise is available. General surgery remains involved because absent gas or peritonism does not exclude infarction. Deterioration, uncertain viability, or failed or unavailable endovascular treatment requires laparotomy to restore flow and resect only nonviable bowel, with a second look within 24 to 48 hours if viability is uncertain." }]
            }
          ]
        },
        {
          id: "c028-run-communication",
          heading: "Explanation, teach-back and handover",
          turns: [
            {
              id: "c028-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c028-run-explanation-prompt", text: "Please explain your assessment and plan to Soraya." }]
            },
            {
              id: "c028-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-explanation", text: "Soraya, a clot is blocking an artery supplying your bowel. Without rapid blood-flow restoration, bowel may be permanently damaged. Specialists are preparing treatment through the artery, with surgeons ready if an operation is needed. Meanwhile we support your circulation, treat pain and infection risk, and give heparin against further clotting." }]
            },
            {
              id: "c028-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c028-run-concern", text: "Did I cause this by stopping apixaban? Will you have to remove my bowel?" }]
            },
            {
              id: "c028-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-concern-response", text: "This is not your fault. Interrupting apixaban increased clot risk, but several factors affect this. The scan does not show definite full-thickness bowel death. Prompt flow restoration may avoid resection. If damaged bowel is found, surgeons remove only tissue that cannot recover and may reassess it during a second operation." }]
            },
            {
              id: "c028-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c028-run-teachback", text: "To check I explained clearly, what is blocking the bowel's blood supply and why are we acting now?" }]
            },
            {
              id: "c028-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c028-run-teachback-answer", text: "A clot is blocking the artery. You need to restore blood flow before the bowel is permanently damaged, with surgery ready if needed." }]
            },
            {
              id: "c028-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c028-run-handover-prompt", text: "Please finish with a concise handover to the surgical and vascular team." }]
            },
            {
              id: "c028-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c028-run-handover", text: "Soraya Vassallo is 77 with abrupt ten-out-of-ten central then diffuse pain from 10:00, one vomit, atrial fibrillation and apixaban withheld for four days. Pulse is 112 and irregular, blood pressure 94/60 after 250 mL crystalloid, and abdomen remains soft without peritonism. Lactate is 1.8 and creatinine 139 from 84. Biphasic CT angiography shows embolic superior mesenteric artery occlusion and reduced bowel enhancement without definitive evidence of transmural infarction. She is monitored, nil by mouth, and receiving analgesia, cautious fluids, potassium and antibiotics. Full-dose unfractionated heparin has started after checks. She needs immediate revascularisation, with general surgery ready for laparotomy if she deteriorates or viability or endovascular treatment is uncertain." }]
            },
            {
              id: "c028-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c028-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "World Society of Emergency Surgery",
        title: "Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery",
        date: "October 2022",
        url: "https://link.springer.com/article/10.1186/s13017-022-00443-x"
      },
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Emergency Laparotomy Clinical Care Standard",
        date: "2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/emergency-laparotomy"
      }
    ]
  });
})();
