(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-012",
    globalId: "CP-C012",
    registryId: "CP-P4-C001",
    displayNumber: "Case 12",
    title: "New confusion and reduced intake",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
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

  var caseTwelve = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-012"; });
  caseTwelve.masteryFocus = {
    case: "Assess new confusion and reduced intake, identify immediate physiological risk, use collateral and findings to explain the cause and complete the required handover.",
    clinical: "In any acutely confused older person, compare with baseline, check physiology and perfusion, seek the cause and reassess the response rather than trusting blood pressure alone.",
    tasks: [
      "Assess and manage",
      "Collateral history and interpretation",
      "Explain concerns and plan",
      "Concise clinical handover"
    ],
    transfer: "If Marisol's lactate and perfusion improved after antibiotics and fluid but hydronephrosis and oliguria persisted, which part of the plan would remain urgent, and why?",
    transferAnswer: "Improved perfusion does not remove an infected obstruction. Hydronephrosis with persistent oliguria still needs urgent urology review and source control, because antibiotics cannot reliably clear infection while the obstruction persists.",
    transferChecks: [
      "Ongoing urine output and kidney injury",
      "Site and degree of obstruction",
      "Perfusion, lactate and infection trend",
      "Urology and critical-care escalation"
    ],
    transferCitationIds: ["c012-sepsis-standard", "c012-qld-pathway"]
  };
  caseTwelve.sources = [
    { id: "c012-delirium", title: "Delirium Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Revised 2021; accessed July 2026", url: "https://www.safetyandquality.gov.au/clinical-care-standards/delirium" },
    { id: "c012-sepsis-standard", title: "Sepsis Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "2022 standard; accessed July 2026", url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis" },
    { id: "c012-qld-pathway", title: "Adult Sepsis Pathway, Low MRSA Non-Tropical", organisation: "Queensland Health", date: "Version 2.00, March 2025", url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0033/1383963/SW1283-v2.pdf" },
    { id: "c012-qld-resources", title: "Sepsis resources for health professionals", organisation: "Queensland Health", date: "Updated September 2025", url: "https://www.health.qld.gov.au/clinical-practice/guidelines-procedures/clinical-resources/sepsis-resources-for-health-professionals" },
    { id: "c012-amc-spec", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "c012-amc-tips", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "c012-communication", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Accessed July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseTwelve.reasoningCompass = {
    stem: {
      title: "Four tasks, one continuous assessment",
      steps: [
        { time: "0 to 30 seconds", text: "Treat new confusion and reduced intake in an older person as acute illness until proven otherwise. Prepare ABCDE, glucose, perfusion and a focused source examination." },
        { time: "30 to 60 seconds", text: "Use Lucia to establish the exact baseline, first change, infection symptoms, urine output, medicines, kidney history and advance-care information." },
        { time: "1 to 2 minutes", text: "Set the task change points: assess and manage for 3 minutes, collateral and interpretation for 3, explain for 1, then hand over for 1." }
      ],
      anchor: "Assess and manage 0 to 3 | Collateral and interpret 3 to 6 | Explain 6 to 7 | Hand over 7 to 8"
    },
    run: {
      title: "Find the physiology, then the cause and the action that cannot wait",
      steps: [
        { time: "0 to 3 minutes", text: "Assess ABCDE, glucose, perfusion, hydration and likely sources. Start monitoring and any time-critical treatment supported by the findings, with repeated reassessment." },
        { time: "3 to 6 minutes", text: "Establish baseline and symptom order, interpret organ injury and source evidence, then escalate when definitive source treatment cannot wait." },
        { time: "6 to 8 minutes", text: "Explain the cause supported at that point, organ effects and ongoing treatment in one minute. At minute 7, stop and deliver the requested concise handover." }
      ],
      anchor: "If airway, breathing, perfusion, urine output or conscious state worsens, interrupt the task, stabilise and escalate, then return to the part you paused."
    }
  };

  function c012Hint(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient, clock) {
    var hint = { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
    if (clock) hint.clock = clock;
    return hint;
  }
  caseTwelve.hints = [
    c012Hint("c012-hint-01", "stem", "c012-stem-role", "emergency department", ["c012-amc-spec", "c012-amc-tips"], "Reading the setting", "What should happen while collateral history is taken?", "Monitoring, glucose, intravenous access, perfusion assessment, cultures and early treatment can begin while Lucia answers focused questions.", "Do not make an acutely confused patient wait for a complete history.", "This is an emergency assessment with parallel action.", "Read the acute change and the previous baseline."),
    c012Hint("c012-hint-02", "stem", "c012-stem-patient", "81-year-old woman", ["c012-delirium", "c012-amc-tips"], "Reading Marisol's age", "Is confusion expected at 81?", "No. Age increases vulnerability to delirium and dehydration, but new confusion is not normal ageing. Treat it as a sign of acute illness until the cause is found.", "Never use age to dismiss a new cognitive change.", "Marisol is older and therefore more vulnerable to rapid physiological deterioration.", "Separate today's change from her usual function."),
    c012Hint("c012-hint-03", "stem", "c012-stem-patient", "become confused", ["c012-delirium"], "Reading the cognitive change", "Confusion gives too many possibilities. Where do I start?", "Start with three questions: Is physiology failing? Is the change truly acute? Which system clues point toward the cause?", "Do not begin with a long dementia assessment.", "This is acute confusion of unknown cause.", "Add the reduced intake and its consequences."),
    c012Hint("c012-hint-04", "stem", "c012-stem-patient", "eaten and drunk very little since yesterday", ["c012-delirium"], "Reading reduced intake", "Is dehydration enough to explain everything?", "It may contribute to delirium, kidney injury and poor perfusion, but it may also be the result of infection or obstruction. Assess volume state and give fluid according to response, not from the history alone.", "A contributor is not necessarily the primary cause.", "Reduced intake increases physiological risk but has not explained the acute illness.", "Notice that Marisol normally manages independently."),
    c012Hint("c012-hint-05", "stem", "c012-stem-patient", "normally lives independently", ["c012-delirium", "c012-communication"], "Establishing baseline", "Why is one line about independence so important?", "It makes today's confusion and reduced function clearly new. Baseline cognition, mobility and self-care also help interpret recovery and future support needs.", "Do not mistake current delirium for chronic dementia.", "Marisol's usual cognition and function are substantially better than today.", "Use Lucia for the exact time and order of change."),
    c012Hint("c012-hint-06", "stem", "c012-stem-start", "answers some questions inconsistently", ["c012-delirium", "c012-communication"], "Planning communication", "Should Lucia answer everything?", "Speak to Marisol directly with one short question at a time, then use Lucia to verify facts. Reassess understanding as her condition changes and explain urgent actions to both of them.", "Inconsistent answers call for collateral, not exclusion.", "Marisol can participate partly, with Lucia supporting the history.", "Anchor the four timed tasks."),
    c012Hint("c012-hint-07", "stem", "c012-task-assess", "Assess Marisol and discuss your management", ["c012-amc-spec", "c012-amc-tips"], "Anchoring task one", "What must fit in three minutes?", "Hold four blocks: immediate physiology, perfusion and hydration, focused source and neurology, then treatment with reassessment.", "Assessment and treatment must move together.", "Task one covers immediate physiology and first management.", "Switch at minute 3 to essential collateral and interpretation.", "0 to 3 minutes"),
    c012Hint("c012-hint-08", "stem", "c012-task-history", "essential collateral history", ["c012-amc-spec", "c012-amc-tips", "c012-delirium"], "Anchoring task two", "Which details are essential?", "Use four blocks: exact timeline; associated symptoms that help locate the problem; medicines and medical background; then baseline cognition, function and wishes.", "Ask what changes current treatment first.", "Collateral and interpretation share minutes 3 to 6.", "Protect one minute for explanation and one for handover.", "3 to 6 minutes"),
    c012Hint("c012-hint-09", "stem", "c012-task-explain", "Explain your assessment, concerns and management plan", ["c012-amc-spec", "c012-amc-tips", "c012-communication"], "Anchoring task three", "One minute. What survives?", "State the cause supported by the findings, name the organ effects, explain treatment already started and give the next urgent action.", "Do not use the explanation minute for another result list.", "The explanation must connect cause, organ effects and next action.", "Stop at minute 7 for the requested handover.", "6 to 7 minutes"),
    c012Hint("c012-hint-10", "stem", "c012-task-handover", "concise clinical handover", ["c012-amc-spec", "c012-amc-tips", "c012-communication"], "Anchoring task four", "What makes this handover concise?", "Lead with Marisol's baseline and current emergency, then give organ dysfunction, source evidence, treatment response and the specialist plan supported by results available at that point.", "Do not repeat the full history.", "The final minute is explicitly reserved for handover.", "Begin the run with Marisol directly.", "7 to 8 minutes"),
    c012Hint("c012-hint-11", "run", "c012-run-start", "You may begin", ["c012-amc-spec", "c012-amc-tips"], "Starting the run", "What do I establish first?", "Whether Marisol can engage, followed immediately by ABCDE, glucose, perfusion and monitoring. Lucia can support the history after brief consent.", "Do not decide the cause from confusion alone.", "The first task is assess and manage.", "Listen for Marisol's awareness of the change."),
    c012Hint("c012-hint-12", "run", "c012-run-opening", "I do not know why Lucia brought me here", ["c012-delirium", "c012-communication"], "Hearing impaired awareness", "Does lack of concern mean she is well?", "No. Reduced insight can occur in delirium. Compare her account with Lucia's observations and objective physiology while keeping Marisol involved.", "Do not argue with her about being confused.", "Marisol is awake but does not recognise the acute change.", "Ask permission for Lucia to stay and help."),
    c012Hint("c012-hint-13", "run", "c012-run-consent", "assess you while we talk", ["c012-communication", "c012-delirium"], "Setting parallel care", "Why explain this before the examination?", "It prepares Marisol for several urgent actions and keeps the interaction respectful. Short explanations reduce distress while monitoring and examination proceed.", "Consent is decision-specific and may need reassessment as delirium changes.", "Lucia can support history while Marisol is assessed.", "Request a focused examination that tests physiology, source and focal neurology."),
    c012Hint("c012-hint-14", "run", "c012-run-primary", "Check temperature, glucose, perfusion and hydration", ["c012-delirium", "c012-amc-tips"], "Choosing the first checks", "Why these before a formal cognitive test?", "Fever, low glucose, hypoxia and poor perfusion are urgent reversible causes of altered cognition. Hydration and source examination help explain organ stress and guide safe fluids.", "Treat dangerous physiology before detailed cognitive scoring.", "The assessment is testing acute illness, not assuming dementia.", "Use the findings to decide whether organ dysfunction is present."),
    c012Hint("c012-hint-15", "run", "c012-run-primary-findings", "capillary refill time is four seconds", ["c012-sepsis-standard", "c012-qld-pathway", "c012-delirium"], "Reading perfusion", "Blood pressure is 124/72. Can perfusion still be poor?", "Yes. Fever, tachycardia, tachypnoea, confusion and prolonged capillary refill during suspected infection support sepsis with impaired perfusion before blood pressure falls.", "Normal-range blood pressure does not overrule the rest of the circulation assessment.", "Marisol has suspected sepsis with acute confusion and impaired peripheral perfusion.", "Look for evidence pointing to a source."),
    c012Hint("c012-hint-16", "run", "c012-run-primary-findings", "right renal-angle tenderness", ["c012-delirium", "c012-qld-pathway"], "Finding a possible source", "Does renal-angle tenderness prove a kidney infection?", "No, but fever plus suprapubic and renal-angle tenderness makes a urinary source plausible. Stone and obstruction remain important because pain, low urine output and kidney dysfunction may coexist.", "Use examination to direct cultures and imaging, not to declare certainty.", "A urinary or renal source is now suspected.", "Name the systemic emergency after considering the full physiology."),
    c012Hint("c012-hint-17", "run", "c012-run-recognition", "Activate the adult sepsis pathway", ["c012-sepsis-standard", "c012-qld-pathway", "c012-qld-resources"], "Recognising the emergency", "What does the pattern support now?", "Suspected infection with acute confusion, tachypnoea and impaired perfusion is enough to treat possible sepsis now. Blood pressure can remain normal while organ dysfunction develops.", "Start the pathway before lactate, cultures or hypotension arrive.", "Marisol has suspected sepsis with delirium and poor perfusion.", "Monitor, obtain access and measure urine output while investigations begin."),
    c012Hint("c012-hint-18", "run", "c012-run-investigations", "blood-culture sets and a venous gas with lactate", ["c012-sepsis-standard", "c012-qld-pathway"], "Choosing urgent tests", "What does lactate add?", "Lactate can support evidence of tissue stress and helps track response, but it is not specific for sepsis. Cultures help identify the organism; kidney, liver, blood count and coagulation tests define organ effects and treatment safety.", "Take cultures first only if treatment is not delayed.", "Tests are defining source, organ dysfunction and response.", "Start empiric antibiotics within the required time."),
    c012Hint("c012-hint-19", "run", "c012-run-treatment", "within 60 minutes", ["c012-sepsis-standard", "c012-qld-pathway"], "Starting antibiotics", "Should I wait for urine and ultrasound?", "Start empiric intravenous antibiotics under the local pathway after checking allergies and recent microbiology. Obtain cultures first only when this does not delay the first dose.", "Source confirmation and timely treatment are not competing jobs.", "Antibiotics are started for suspected urinary sepsis.", "Give fluid in a measured amount and reassess."),
    c012Hint("c012-hint-20", "run", "c012-run-treatment", "500 millilitres of Hartmann's solution", ["c012-qld-pathway", "c012-sepsis-standard"], "Giving fluid safely", "Why not an automatic large bolus?", "Marisol is older with kidney disease and no hypotension. A measured bolus followed by lungs, perfusion, mental state and urine reassessment seeks benefit while limiting fluid overload.", "Fluid is a treatment trial with a clinical response.", "Antibiotics and a cautious first fluid bolus are underway.", "Use Lucia to establish the exact baseline and first change."),
    c012Hint("c012-hint-21", "run", "c012-run-history-answer", "normal yesterday morning", ["c012-delirium", "c012-communication"], "Confirming acute onset", "Why does the baseline change matter after sepsis treatment started?", "It confirms delirium rather than chronic cognitive impairment and gives a time against which recovery can be judged. New walking difficulty also shows functional impact.", "Collateral establishes what 'normal' means for Marisol.", "Confusion and mobility decline developed within a day.", "Ask for symptoms that locate the source and quantify urine output."),
    c012Hint("c012-hint-22", "run", "c012-run-source-history-answer", "passed no urine since early morning", ["c012-qld-pathway", "c012-sepsis-standard"], "Reading oliguria", "Could this be dehydration alone?", "Possibly, but very low urine with right-sided ache raises kidney injury and urinary obstruction as well. Bladder scan separates retention from low production, and renal imaging assesses upper-tract obstruction.", "Do not give repeated fluid without checking why urine is absent.", "Oliguria is an organ warning and a source-control clue.", "Ask about stones, kidney disease, medicines and baseline function."),
    c012Hint("c012-hint-23", "run", "c012-run-background-answer", "kidney stone five years ago", ["c012-qld-pathway"], "Reading obstruction risk", "Does an old stone matter today?", "It raises the possibility of recurrent obstruction when combined with renal-angle pain and oliguria. Stage 3 kidney disease also reduces reserve and affects fluid, contrast and antibiotic decisions.", "Past history matters because it changes current vulnerability and imaging need.", "Stone history and chronic kidney disease make obstruction and acute injury more concerning.", "Interpret the laboratory and ultrasound results together."),
    c012Hint("c012-hint-24", "run", "c012-run-results", "Cultures are pending", ["c012-sepsis-standard", "c012-qld-pathway"], "Reading organ dysfunction", "Which results matter most?", "Raised lactate, creatinine above baseline, low bicarbonate, thrombocytopenia, delirium and oliguria show systemic illness with organ dysfunction. Nitrites, leukocytes and pyuria support a urinary source while cultures remain pending.", "Do not let the later blood-pressure response hide persistent kidney and cognitive dysfunction.", "Sepsis is affecting perfusion, kidneys, urine output and cognition.", "Now read the hydronephrosis as a management result."),
    c012Hint("c012-hint-25", "run", "c012-run-results", "moderate right hydronephrosis", ["c012-sepsis-standard", "c012-qld-pathway"], "Recognising obstruction", "What does a swollen collecting system change?", "Hydronephrosis with infection, right-sided tenderness, oliguria and kidney injury strongly suggests infected urinary obstruction. Antibiotics may not reach and clear infected urine effectively while drainage is blocked.", "This is no longer antibiotics and fluids alone.", "The leading diagnosis is obstructed right pyelonephritis causing sepsis and organ dysfunction.", "Call urology for urgent decompression and intensive care for persistent organ support."),
    c012Hint("c012-hint-26", "run", "c012-run-interpret", "delirium, acute kidney injury, oliguria and raised lactate", ["c012-sepsis-standard", "c012-qld-pathway", "c012-delirium"], "Giving the interpretation", "How do I avoid just repeating abnormal results?", "State one causal chain: infected obstructed kidney leads to systemic infection, impaired perfusion and organ dysfunction, producing delirium, kidney injury, low urine output and raised lactate.", "Interpretation should point directly to antibiotics, reassessment and source control.", "Measured fluid improved some circulation findings, but organ dysfunction persists.", "Escalate source control rather than giving automatic repeated fluid."),
    c012Hint("c012-hint-27", "run", "c012-run-source-control", "urgent decompression planning", ["c012-sepsis-standard", "c012-qld-pathway"], "Treating the source", "Why is drainage urgent?", "Antibiotics treat organisms in blood and tissue, but an obstructed infected collecting system remains pressurised and poorly drained. A stent or nephrostomy can release infected urine; urology chooses the method from anatomy and stability.", "Further imaging must not create avoidable delay when obstruction is already strongly supported.", "Urology and intensive care are attending for drainage and organ support.", "Answer Lucia's normal-blood-pressure concern."),
    c012Hint("c012-hint-28", "run", "c012-run-daughter-question", "blood pressure is normal", ["c012-sepsis-standard", "c012-qld-pathway", "c012-communication"], "Correcting false reassurance", "What is the shortest safe answer?", "Normal blood pressure does not mean mild illness. Confusion, oliguria, acute kidney injury, raised lactate and delayed capillary refill already show organ dysfunction.", "Use the concrete findings she has heard.", "Marisol is seriously unwell despite maintaining blood pressure.", "At the prompt, move from interpretation to the one-minute explanation."),
    c012Hint("c012-hint-29", "run", "c012-run-time", "Please explain your assessment", ["c012-amc-spec", "c012-amc-tips"], "Changing tasks", "I could discuss more fluid and antibiotic detail. What now?", "Stop. You have one minute for explanation. Give the cause, organ effects, treatment underway and urgent drainage plan. Keep the final minute for the requested handover.", "Leaving those extra details now protects the handover time.", "Assessment and interpretation are complete enough to explain.", "Speak to Marisol and Lucia in plain language.", "6 to 7 minutes"),
    c012Hint("c012-hint-30", "run", "c012-run-explanation", "infection is affecting her organs", ["c012-sepsis-standard", "c012-delirium", "c012-communication"], "Explaining sepsis", "How do I explain without frightening them with jargon?", "Say that a kidney and urine infection has spread its effects through the body. It is disturbing circulation, kidney function, urine output and thinking, which is why treatment and specialist support are urgent.", "Explain seriousness without predicting the outcome.", "They understand why confusion is a medical symptom of organ dysfunction.", "Explain why the swollen kidney changes treatment."),
    c012Hint("c012-hint-31", "run", "c012-run-plan", "Antibiotics alone may not control infection behind an obstruction", ["c012-sepsis-standard", "c012-qld-pathway", "c012-communication"], "Explaining source control", "How do I explain the obstruction simply?", "Urine from the right kidney appears trapped because the drainage path is blocked. Antibiotics have started, but urology may need to drain the kidney so infected urine can leave and pressure can fall.", "Do not promise which procedure will be used.", "Antibiotics and measured fluids treat the systemic illness; urgent drainage treats the obstruction.", "Add that intensive care is reviewing persistent organ dysfunction."),
    c012Hint("c012-hint-32", "run", "c012-run-uncertainty", "remain unwell", ["c012-sepsis-standard", "c012-delirium", "c012-communication"], "Being honest about response", "Some circulation findings improved. What remains concerning?", "Confusion, minimal urine, kidney injury and raised lactate mean the problem is not resolved. Repeat lactate, close monitoring, organ support and source control are still required.", "Partial improvement is useful information, not discharge readiness.", "Marisol remains seriously unwell while urology and intensive care attend.", "Stop when the examiner requests the final handover."),
    c012Hint("c012-hint-33", "run", "c012-run-handover-prompt", "finish with a concise handover", ["c012-amc-spec", "c012-amc-tips", "c012-communication"], "Changing to the final task", "What can I leave out?", "Leave out the conversational sequence. Give baseline, current diagnosis, organ dysfunction, source and obstruction evidence, response to treatment, current observations and the specialist action now underway.", "This handover is required, not optional.", "The one-minute explanation is finished.", "Address the senior clinician with urgency first.", "7 to 8 minutes"),
    c012Hint("c012-hint-34", "run", "c012-run-handover", "underway", ["c012-sepsis-standard", "c012-qld-pathway", "c012-communication"], "Delivering the handover", "What makes this handover clinically useful?", "It states who Marisol was before illness, names current organ dysfunction, gives lactate and creatinine trend, reports hydronephrosis, treatment and response, and finishes with urgent urology and intensive-care actions.", "End with what the senior needs to do or supervise now.", "The receiving clinician has severity, source, treatment and next action.", "Wait for the station to end."),
    c012Hint("c012-hint-35", "run", "c012-run-end", "The station is complete", ["c012-amc-spec", "c012-amc-tips"], "Leaving the station", "Should I replay whether I gave enough fluid?", "The case has ended. Take one breath, then begin the next stem without assuming that confusion means sepsis or dehydration.", "Let the next patient's findings show you the physiology and cause.", "Case 12 is finished.", "Read the next role, symptoms and tasks from the beginning.")
  ];

  caseTwelve.essentialHintIds = [
    "c012-hint-03", "c012-hint-07", "c012-hint-08", "c012-hint-09",
    "c012-hint-10", "c012-hint-15", "c012-hint-16", "c012-hint-17",
    "c012-hint-19", "c012-hint-24", "c012-hint-25", "c012-hint-27",
    "c012-hint-29", "c012-hint-31", "c012-hint-33", "c012-hint-35"
  ];

  var c012Journey = {
    "c012-hint-03": { deeper: ["Check oxygenation, glucose, perfusion, temperature, pain, retention and focal neurology first. Let those findings direct you toward infection, metabolic disturbance, organ failure, medicine effect or structural brain disease."] },
    "c012-hint-07": { deeper: ["Complete ABCDE and glucose; assess perfusion and hydration; examine for a focused source and focal neurology; begin monitoring, access and any supported time-critical treatment, then reassess."] },
    "c012-hint-08": { deeper: ["Clarify last normal and first change; symptoms that help locate the problem; recent medicines or illness; usual cognition and function, allergies, and any advance-care plan."] },
    "c012-hint-15": {
      say: ["Yes. Fever, tachycardia, tachypnoea, confusion and capillary refill of four seconds show impaired perfusion even though the blood pressure is still in the normal range."],
      deeper: ["Blood pressure can be maintained early by sympathetic vasoconstriction and tachycardia. Capillary refill and organ function may reveal impaired circulation before hypotension appears."]
    },
    "c012-hint-17": { clock: "Danger interrupts the assessment: activate the sepsis pathway and begin treatment now." },
    "c012-hint-25": {
      say: ["Hydronephrosis with infection, right-sided tenderness, oliguria and kidney injury strongly suggests infected urinary obstruction. Antibiotics and fluid alone are not enough; urgent drainage is needed."],
      deeper: ["An obstruction holds infected urine under pressure in the collecting system. Poor drainage limits source clearance and can continue driving sepsis despite appropriate antibiotics."]
    },
    "c012-hint-27": { clock: "Source control cannot wait: escalate to urology while organ support continues." },
    "c012-hint-29": { clock: "6 to 7 minutes: explain cause, organ effects, treatment and urgent drainage." },
    "c012-hint-33": { clock: "7 to 8 minutes: concise senior handover." },
    "c012-hint-35": { clock: "Station closed: one breath, then leave this case here." }
  };

  caseTwelve.hints.forEach(function (hint) {
    var journey = c012Journey[hint.id];
    if (!journey) return;
    if (journey.clock) hint.clock = journey.clock;
    if (journey.say) hint.say = journey.say;
    if (journey.deeper) hint.deeper = journey.deeper;
  });
})();
