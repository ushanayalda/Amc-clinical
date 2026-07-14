(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-037",
    globalId: "CP-C037",
    registryId: "CP-P12-C002",
    displayNumber: "Case 37",
    title: "Nausea after taking tablets",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 12, title: "Toxicological Emergency" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c037-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c037-stem-patient",
          text: "Ms Mirela Zhou, a 22-year-old woman, has presented with nausea after taking a quantity of paracetamol tablets last night."
        },
        {
          id: "c037-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c037-task-history",
          text: "Take a focused history from Mirela.",
          timing: "2 minutes"
        },
        {
          id: "c037-task-assess",
          text: "Assess Mirela and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c037-task-manage",
          text: "Initiate management and explain your assessment and plan to Mirela.",
          timing: "3 minutes"
        },
        {
          id: "c037-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c037-run-history",
          heading: "Dose, formulation and timeline",
          turns: [
            {
              id: "c037-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c037-run-start", text: "You may begin." }]
            },
            {
              id: "c037-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c037-run-first-action", text: "The doctor performs hand hygiene and sits beside Mirela while a nurse remains nearby." }]
            },
            {
              id: "c037-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-introduction", text: "Hello, I am Ushana, an emergency doctor. Please confirm your name. I will ask direct questions without judging you because the tablet, dose and time determine treatment. Is that acceptable?" }]
            },
            {
              id: "c037-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c037-run-consent", text: "I am Mirela Zhou. Yes. I feel sick and vomited once this morning." }]
            },
            {
              id: "c037-turn-dose-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-dose-question", text: "Which product and strength did you take? Were the tablets immediate or modified release? How many, when, and all together or over several hours? What time is it now?" }]
            },
            {
              id: "c037-turn-dose-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c037-run-dose-answer", text: "They were ordinary immediate-release paracetamol, 500 milligrams each. I swallowed 30 tablets together at 10:30 last night. It is now 8:30 in the morning. The empty packets are in my bag." }]
            },
            {
              id: "c037-turn-coingestant-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-coingestant-question", text: "Any other tablets, alcohol or recreational drug? Did you vomit tablets or receive charcoal? Your weight? Any liver or kidney disease, poor nutrition, medicine, allergy or chance of pregnancy?" }]
            },
            {
              id: "c037-turn-coingestant-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c037-run-coingestant-answer", text: "Nothing else, no alcohol and no charcoal. I vomited at seven, but saw no tablets. I weigh 60 kilograms, eat normally, have no medical problem, medicine or allergy, and do not think I am pregnant." }]
            },
            {
              id: "c037-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-symptom-question", text: "Apart from nausea, any abdominal pain, confusion, faintness, reduced urine or bleeding?" }]
            },
            {
              id: "c037-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c037-run-symptom-answer", text: "Only nausea and a mild ache high in my abdomen. I am thinking clearly, passing urine and have no bleeding." }]
            },
            {
              id: "c037-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-primary-request", text: "I assess airway, breathing, circulation, conscious state, hydration and abdomen, and obtain full observations, glucose, weight, intravenous access and a 12-lead ECG." }]
            },
            {
              id: "c037-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c037-run-primary-findings", text: "Mirela is alert and weighs 60 kilograms. Respiratory rate is 16, oxygen saturation 99% on room air, pulse 88, blood pressure 116/72, temperature 36.7 degrees Celsius and glucose 5.1 mmol/L. There is mild epigastric tenderness without guarding or right upper-quadrant tenderness. ECG is normal." }]
            },
            {
              id: "c037-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-interpretation", text: "This is a single immediate-release ingestion of 15 grams, or 250 milligrams per kilogram, ten hours ago. That is potentially hepatotoxic. A normal examination does not exclude evolving liver injury." }]
            }
          ]
        },
        {
          id: "c037-run-treatment",
          heading: "Nomogram decision and acetylcysteine",
          turns: [
            {
              id: "c037-turn-investigation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-investigation-plan", text: "Send paracetamol concentration, ALT, liver tests, INR, electrolytes, renal function, venous gas with lactate and glucose, pregnancy test, salicylate and ethanol. Call the Poisons Information Centre or clinical toxicologist." }]
            },
            {
              id: "c037-turn-treatment-start",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-treatment-start", text: "Because more than eight hours have passed, start intravenous acetylcysteine immediately after taking blood. Do not wait for the paracetamol result. Charcoal is not useful ten hours after this immediate-release ingestion." }]
            },
            {
              id: "c037-turn-nac-dose",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-nac-dose", text: "Use the Australian two-bag regimen: acetylcysteine 200 milligrams per kilogram over four hours, 12 grams, then 100 milligrams per kilogram over sixteen hours, 6 grams. During the first two hours, monitor for rash, wheeze or hypotension." }]
            },
            {
              id: "c037-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c037-run-treatment-action", text: "Blood is collected and the first acetylcysteine infusion starts while Mirela remains under observation." }]
            },
            {
              id: "c037-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c037-run-results", text: "The ten-hour paracetamol concentration is 68 mg/L, above the treatment line on the Australian nomogram. ALT is 27 U/L, INR 1.0, creatinine 65 micromol/L, lactate 1.3 mmol/L and glucose 5.0 mmol/L. Pregnancy, salicylate and ethanol tests are negative." }]
            },
            {
              id: "c037-turn-nomogram",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-nomogram", text: "The nomogram is valid only because this was a single, timed immediate-release ingestion. The level confirms treatment. Normal ALT now is reassuring but does not permit stopping early." }]
            },
            {
              id: "c037-turn-reassessment-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-reassessment-plan", text: "Repeat ALT two hours before completion and paracetamol if toxicology advises. Continue acetylcysteine if paracetamol is above 10 mg/L or ALT is above 50 U/L and rising. Do not stop solely because 20 hours have elapsed. If treatment continues, stop only with toxicology advice when Mirela is clinically well, ALT or AST is falling and INR is below 2. Monitor renal function, glucose and acid-base status; contact the liver unit if injury develops." }]
            },
            {
              id: "c037-turn-reaction-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-reaction-plan", text: "If an acetylcysteine reaction occurs, pause it briefly, treat the reaction and restart under toxicology guidance once controlled. Do not abandon the antidote when it remains indicated." }]
            }
          ]
        },
        {
          id: "c037-run-safety",
          heading: "Intent, explanation, safety and handover",
          turns: [
            {
              id: "c037-turn-intent-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-intent-question", text: "Mirela, I now need to understand your safety. What was happening before you took the tablets? Did you want to die? Do you have thoughts or plans to harm yourself now, previous attempts, mental-health care, or access to more tablets?" }]
            },
            {
              id: "c037-turn-intent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c037-run-intent-answer", text: "After an argument I felt trapped and wanted everything to stop. My friend found the packets and brought me here. I am glad she did, but I am scared those thoughts could return. I have felt low for two months and have never had help or tried before." }]
            },
            {
              id: "c037-turn-safety-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-safety-plan", text: "Thank you for telling me. Keep Mirela observed and remove access to means. After medical stabilisation, arrange liaison psychiatry assessment, identify supports and protective factors, and make a collaborative safety plan. With consent, obtain collateral history from her friend." }]
            },
            {
              id: "c037-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c037-run-concern", text: "Will my liver fail? Do you have to tell my parents?" }]
            },
            {
              id: "c037-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-explanation", text: "Your early liver tests are normal and the antidote greatly reduces risk, but we must complete treatment and repeat tests before predicting recovery. Your information is private. We will involve people you choose, unless sharing limited information is necessary to prevent serious immediate harm." }]
            },
            {
              id: "c037-turn-disposition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-disposition", text: "Discharge requires medical clearance, psychosocial assessment and safe follow-up. Denial of current intent alone is insufficient. We will address the distress and arrange ongoing mental-health care." }]
            },
            {
              id: "c037-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c037-run-teachback", text: "Please tell me why treatment began before the result and what must happen before discharge." }]
            },
            {
              id: "c037-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c037-run-teachback-answer", text: "Ten hours had passed, so waiting could increase liver damage. I need the full antidote course, repeat blood tests and a mental-health safety assessment and plan before discharge." }]
            },
            {
              id: "c037-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c037-run-handover-prompt", text: "Please finish with a concise handover to the toxicology clinician." }]
            },
            {
              id: "c037-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c037-run-handover", text: "Mirela Zhou is 22 and weighs 60 kilograms. At 22:30 she deliberately ingested 30 immediate-release 500-milligram paracetamol tablets together, totalling 15 grams or 250 milligrams per kilogram, with no co-ingestant. She presented ten hours later with nausea and one vomit, haemodynamically stable with mild epigastric tenderness. Acetylcysteine began immediately after sampling because presentation exceeded eight hours. Her ten-hour level is 68 mg/L above the nomogram treatment line; ALT is 27, INR 1.0, creatinine and lactate are normal. Continue the standard two-bag course, repeat ALT and paracetamol near completion and extend treatment if stop criteria are not met. The ingestion followed suicidal intent; she fears thoughts may return. Maintain observation and arrange comprehensive liaison psychiatry assessment and safety planning after medical stabilisation." }]
            },
            {
              id: "c037-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c037-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Medical Journal of Australia",
        title: "Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand",
        date: "Published online December 2019; MJA 2020",
        url: "https://www.mja.com.au/journal/2020/212/4/updated-guidelines-management-paracetamol-poisoning-australia-and-new-zealand"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: The suicidal patient",
        date: "September 2024, review due September 2027",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0020/219017/CPG_The-suicidal_patient.pdf"
      }
    ]
  });
})();
