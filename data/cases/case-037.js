(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-037",
    globalId: "CP-C037",
    registryId: "CP-P12-C002",
    displayNumber: "Case 37",
    title: "Nausea after taking tablets",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
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

  var caseThirtySeven = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-037"; });
  function buildHint37(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtySeven.masteryFocus = {
    case: "Reconstruct product, formulation, dose, body weight and time before interpreting symptoms, then use the disclosed timeline to decide which evidence framework applies and what cannot wait.",
    clinical: "In any poisoning, exact exposure structure determines whether a decision rule is valid; a normal early examination cannot cancel a toxic dose or a time-sensitive treatment window.",
    tasks: ["Focused exposure history", "Assess and interpret", "Manage and explain", "Concise senior handover"],
    transfer: "If Mirela had taken the same total paracetamol dose in several groups over the night and could not give reliable times, could you use the nomogram in the same way?",
    transferAnswer: "No. The nomogram is designed for a single acute ingestion with a reliable time and does not safely interpret staggered or unknown-time exposure. Start or continue acetylcysteine when the history or results meet treatment criteria, obtain paracetamol and liver tests, and use toxicology-guided serial assessment and stopping criteria rather than plotting one point.",
    transferChecks: ["Single versus staggered ingestion", "Reliability of the ingestion time", "Paracetamol concentration and ALT", "Toxicology-guided treatment and stopping criteria"],
    transferCitationIds: ["mja-paracetamol-2020", "vic-poisons-2026"]
  };
  caseThirtySeven.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-medication-2026", title: "Medication Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/medication-safety-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "mja-paracetamol-2020", title: "Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand", organisation: "Medical Journal of Australia", date: "2020", url: "https://www.mja.com.au/journal/2020/212/4/updated-guidelines-management-paracetamol-poisoning-australia-and-new-zealand" },
    { id: "qas-suicidal-2024", title: "Clinical Practice Guideline: The suicidal patient", organisation: "Queensland Ambulance Service", date: "September 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0020/219017/CPG_The-suicidal_patient.pdf" },
    { id: "vic-poisons-2026", title: "Victorian Poisons Centre", organisation: "Austin Health", date: "Current July 2026", url: "https://www.austin.org.au/poisons" }
  ];
  caseThirtySeven.reasoningCompass = {
    stem: {
      title: "Build the exposure before judging the nausea",
      steps: [
        { time: "0 to 30 seconds", text: "The named tablet and overnight timing make product, formulation, strength, number, exact time, body weight and co-ingestants the first information set." },
        { time: "30 to 60 seconds", text: "Plan ABCD, observations, glucose and a focused examination, but do not expect early symptoms or normal findings to measure future organ injury." },
        { time: "1 to 2 minutes", text: "Set the task times: exposure history to minute 2, assessment and interpretation to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess and interpret 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Let dose and time govern the next step",
      steps: [
        { time: "0 to 2 minutes", text: "Confirm the exposure structure and current safety without judgement. Calculate dose only after product, strength, number, weight and timing are disclosed." },
        { time: "2 to 7 minutes", text: "Assess, obtain the tests that answer immediate decisions and act on the disclosed time threshold without waiting for later reassurance. Then address ongoing safety." },
        { time: "7 to 8 minutes", text: "Explain the reason for the sequence and what must be checked before discharge, then hand over dose, timeline, results, treatment and psychosocial risk." }
      ],
      anchor: "If the time, formulation or ingestion pattern becomes uncertain, stop using a single-point rule and seek toxicology guidance."
    }
  };
  caseThirtySeven.hints = [
    buildHint37("c037-hint-01", "stem", "c037-stem-role", "emergency department", ["amc-spec-2026", "mja-paracetamol-2020"], "Reading the setting", "What can happen while history is taken?", "Observations, glucose, access and toxicology contact can begin while Mirela gives the exact exposure timeline.", "Preparation can begin before symptoms worsen.", "The setting can assess both toxicity and immediate safety.", "Read the product and timing already disclosed."),
    buildHint37("c037-hint-02", "stem", "c037-stem-patient", "paracetamol tablets last night", ["mja-paracetamol-2020", "amc-tips-2024"], "Reading the exposure clue", "What is still missing before I calculate risk?", "Product strength, formulation, number, whether they were taken together, exact time, current time and body weight. Nausea alone cannot supply those answers.", "Build the exposure before interpreting the symptom.", "Paracetamol and an overnight ingestion are known; dose structure is not.", "Use the first task to obtain exact numbers without judgement."),
    buildHint37("c037-hint-03", "stem", "c037-stem-context", "provide findings", ["amc-spec-2026", "amc-tips-2024"], "Using examiner findings", "What should I request after the exposure history?", "Ask for ABCD, hydration, conscious state, abdomen, observations, glucose, weight and ECG. Then request tests selected from the disclosed product and timeline.", "Let the defined exposure determine which toxicology tests you request.", "Current physiology and dose are both incomplete.", "Anchor the four tasks."),
    buildHint37("c037-hint-04", "stem", "c037-task-history", "focused history from Mirela", ["amc-spec-2026", "mja-paracetamol-2020"], "Anchoring task one", "What makes this history focused?", "Obtain exact product, strength, formulation, number, pattern and time; weight, vomiting, charcoal, co-ingestants, organ risk, pregnancy and immediate intent or safety.", "Use direct neutral questions and record exact times.", "Minutes 0 to 2 build the exposure and immediate safety picture.", "Do not infer dose or intent before Mirela answers."),
    buildHint37("c037-hint-05", "stem", "c037-task-assess", "Assess Mirela and interpret", ["amc-spec-2026", "mja-paracetamol-2020"], "Anchoring task two", "What belongs in interpretation?", "Combine current physiology with the disclosed dose per kilogram, formulation, ingestion pattern and elapsed time. State whether a validated rule applies only after all required conditions are known.", "A normal examination and a low-risk exposure are not the same thing.", "Minutes 2 to 4 cover assessment, calculation and interpretation.", "Use the timeline to decide what cannot wait."),
    buildHint37("c037-hint-06", "stem", "c037-task-manage", "Initiate management and explain", ["amc-spec-2026", "mja-paracetamol-2020", "acsqhc-communication-2026"], "Anchoring task three", "How do I keep this from becoming a list?", "Act on the disclosed dose and timing, monitor for treatment effects, explain why the sequence matters and then address psychosocial safety without judgement.", "Medical and psychosocial care are both required, in a safe order.", "Minutes 4 to 7 include treatment, reassessment and explanation.", "Reserve the final minute for handover."),
    buildHint37("c037-hint-07", "stem", "c037-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories must be exact?", "Give age and weight, product and formulation, total dose and dose per kilogram, ingestion time and pattern, symptoms and observations, key tests, interventions and current safety concerns.", "Precision is more useful than a long narrative.", "Minute 7 to 8 transfers toxicology and psychosocial risk.", "Begin with direct consent for the exposure questions."),
    buildHint37("c037-hint-08", "run", "c037-run-first-action", "nurse remains nearby", ["amc-tips-2024", "acsqhc-communication-2026"], "Setting a safe conversation", "Why sit beside her?", "A calm, private, non-judgemental approach supports accurate disclosure while staff remain available for safety and treatment.", "Keep the urgency calm and non-accusatory.", "The exposure history has started.", "Explain why exact questions matter and ask permission."),
    buildHint37("c037-hint-09", "run", "c037-run-introduction", "tablet, dose and time determine treatment", ["mja-paracetamol-2020", "acsqhc-communication-2026"], "Making the purpose explicit", "Why tell Mirela this?", "It explains the direct questioning and helps her prioritise exact product, dose and time. Neutral language reduces concealment driven by shame.", "Precision and compassion support each other.", "Mirela has agreed to focused questions.", "Clarify the product and formulation first."),
    buildHint37("c037-hint-10", "run", "c037-run-dose-question", "immediate or modified release", ["mja-paracetamol-2020"], "Defining the ingestion structure", "Why ask formulation and all-together timing?", "The interpretation pathway differs for immediate-release, modified-release, single and staggered ingestions. Current clock time fixes the elapsed interval.", "A complete timeline is needed before plotting or treating.", "Product, number, pattern and two clock times are being requested.", "Use the answer to calculate total dose and milligrams per kilogram."),
    buildHint37("c037-hint-11", "run", "c037-run-dose-answer", "30 tablets together", ["mja-paracetamol-2020"], "Calculating the exposure", "What are the two useful dose numbers?", "Thirty 500-milligram tablets equal 15 grams. At 60 kilograms, that is 250 milligrams per kilogram, taken as one immediate-release ingestion ten hours ago.", "Pause and calculate once, clearly.", "The dose is potentially hepatotoxic and the elapsed time matters.", "Confirm co-ingestants, vomiting, body weight and organ risk."),
    buildHint37("c037-hint-12", "run", "c037-run-coingestant-question", "poor nutrition", ["mja-paracetamol-2020", "acsqhc-medication-2026"], "Checking modifiers and competing risks", "What can change interpretation or treatment?", "Co-ingestants, altered absorption, unreliable weight, liver or kidney disease, poor nutrition and pregnancy may change investigation, consultation or safety planning.", "Ask the cluster once and keep exact negatives.", "A single timed exposure has been described but still needs corroboration.", "Clarify symptoms without using them to grade future liver risk."),
    buildHint37("c037-hint-13", "run", "c037-run-symptom-answer", "mild ache high in my abdomen", ["mja-paracetamol-2020"], "Keeping symptoms in proportion", "Does mild epigastric pain show liver injury?", "No. Early nausea and upper abdominal discomfort are nonspecific. Dose, time, concentration and liver tests guide risk more reliably.", "Symptoms do not replace the exposure calculation.", "Mirela is symptomatic but not clinically unstable.", "Request the primary assessment and weight confirmation."),
    buildHint37("c037-hint-14", "run", "c037-run-primary-findings", "alert and weighs 60 kilograms", ["mja-paracetamol-2020"], "Reading a normal early examination", "Can normal observations close the case?", "No. Serious liver injury can evolve after an initially well period. The confirmed weight supports the dose calculation, while normal physiology guides supportive care.", "Being well now does not establish safety later.", "Current examination is stable; toxic exposure remains significant.", "State the dose, elapsed time and risk together."),
    buildHint37("c037-hint-15", "run", "c037-run-interpretation", "250 milligrams per kilogram", ["mja-paracetamol-2020"], "Stating the toxicology problem", "What makes this interpretation complete?", "It includes product, formulation, pattern, total dose, dose per kilogram and ten-hour delay. Those facts support potential hepatotoxicity despite a normal examination.", "Keep the calculation visible because it drives the next step.", "A single timed immediate-release ingestion is established.", "Obtain the decision tests and contact toxicology."),
    buildHint37("c037-hint-16", "run", "c037-run-investigation-plan", "paracetamol concentration", ["mja-paracetamol-2020", "vic-poisons-2026"], "Ordering decision-linked tests", "What does each major test answer?", "Paracetamol concentration tests the nomogram decision; ALT and INR assess injury and synthesis; renal function, glucose, lactate and acid-base status screen severity and complications. Pregnancy and co-ingestant tests change adjacent care.", "Take blood promptly, but do not let results delay an already indicated action.", "The timeline is beyond a key treatment threshold.", "Start the antidote after sampling rather than waiting."),
    buildHint37("c037-hint-17", "run", "c037-run-treatment-start", "more than eight hours", ["mja-paracetamol-2020"], "Protecting the treatment window", "Why start before the level returns?", "Antidote benefit is greatest early and delay after eight hours increases risk. This calculated dose and reliable ten-hour timeline justify immediate acetylcysteine after blood is taken.", "The result can refine continuation, but should not create avoidable delay.", "Treatment begins from dose and time evidence.", "Use the weight to prescribe the two-bag regimen."),
    buildHint37("c037-hint-18", "run", "c037-run-nac-dose", "two-bag regimen", ["mja-paracetamol-2020", "acsqhc-medication-2026"], "Checking the weight-based course", "Which safety checks sit beside the dose?", "Confirm weight, calculate each bag independently, check concentration and infusion time, and monitor closely early for rash, wheeze or hypotension.", "A correct total dose can still be unsafe if the bag or rate is wrong.", "The first infusion is now running.", "Read the timed level and liver tests before interpreting continuation."),
    buildHint37("c037-hint-19", "run", "c037-run-results", "above the treatment line", ["mja-paracetamol-2020"], "Using the nomogram correctly", "What has the concentration confirmed?", "At a reliable ten-hour point after one immediate-release ingestion, 68 mg/L plots above the treatment line. That confirms continuing acetylcysteine.", "Use the graph only because all validity conditions are met.", "Early ALT and INR are normal, but treatment remains indicated.", "State why normal liver tests do not stop the course."),
    buildHint37("c037-hint-20", "run", "c037-run-nomogram", "valid only", ["mja-paracetamol-2020"], "Checking rule validity", "When would this graph be unsafe?", "Unknown time, staggered ingestion or some modified-release patterns cannot be reduced to this single plotted point. The rule applies here because the ingestion was single, timed and immediate release.", "Always check the rule's entry conditions before trusting its answer.", "The level confirms treatment; current ALT only describes the present moment.", "Plan the near-completion tests and stop criteria."),
    buildHint37("c037-hint-21", "run", "c037-run-reassessment-plan", "two hours before completion", ["mja-paracetamol-2020"], "Planning the stop decision", "Why test before the infusion ends?", "It allows continuation without a treatment gap if paracetamol remains above 10 mg/L or ALT is above 50 and rising. Additional results assess evolving organ injury.", "Stopping is an evidence decision, not an automatic clock event.", "The full course continues while response is assessed.", "Keep a plan for infusion reaction without abandoning indicated treatment."),
    buildHint37("c037-hint-22", "run", "c037-run-reaction-plan", "restart under toxicology guidance", ["mja-paracetamol-2020", "vic-poisons-2026"], "Managing an infusion reaction", "Does a reaction mean the antidote is contraindicated?", "Usually not. Pause, treat the reaction and restart when controlled with toxicology guidance because untreated poisoning risk remains.", "Manage the adverse effect while preserving necessary therapy.", "Medical treatment and monitoring are defined.", "Now address the intent and ongoing safety directly."),
    buildHint37("c037-hint-23", "run", "c037-run-intent-question", "Did you want to die", ["qas-suicidal-2024", "acsqhc-communication-2026"], "Asking directly about safety", "Will this question put the idea in her head?", "No. Direct, calm questions about intent, current thoughts, plans, previous acts, care and access to means are needed for a safe assessment.", "Use direct questions rather than vague reassurance.", "The medical emergency is being treated; psychosocial risk remains open.", "Listen for both current fear and protective help-seeking."),
    buildHint37("c037-hint-24", "run", "c037-run-intent-answer", "scared those thoughts could return", ["qas-suicidal-2024", "acsqhc-communication-2026"], "Hearing ongoing risk", "Does being glad to be here make discharge safe?", "No. Relief and fear of recurrence can coexist. Her two months of low mood, recent suicidal intent and concern about returning thoughts require observation and comprehensive assessment.", "Current denial or regret cannot carry the risk assessment alone.", "Mirela is engaging and has a supportive friend, but risk remains active.", "Create immediate safety while medical treatment continues."),
    buildHint37("c037-hint-25", "run", "c037-run-safety-plan", "remove access to means", ["qas-suicidal-2024", "acsqhc-communication-2026"], "Making safety concrete", "What happens before a formal assessment?", "Maintain observation, reduce access to harmful items and identify supports. After medical stabilisation, obtain a full mental-health assessment and collaborative safety plan.", "Immediate environmental safety does not wait for medical clearance.", "Medical and psychosocial pathways now run together.", "Answer prognosis and confidentiality without overpromising."),
    buildHint37("c037-hint-26", "run", "c037-run-concern", "tell my parents", ["acsqhc-communication-2026"], "Answering confidentiality", "Can I promise complete secrecy?", "Explain that information is private and chosen supports are preferred, but limited sharing may be necessary to prevent serious immediate harm. Be clear about that boundary.", "Promise only the privacy boundary you can keep.", "Mirela also needs an honest liver-risk explanation.", "Use early reassuring evidence without guaranteeing the final result."),
    buildHint37("c037-hint-27", "run", "c037-run-explanation", "repeat tests before predicting recovery", ["mja-paracetamol-2020", "acsqhc-communication-2026"], "Explaining uncertainty", "Why not say the antidote has fixed it?", "Early normal liver tests and timely treatment are encouraging, but later tests are required to show that paracetamol has cleared and liver injury is not emerging.", "Give evidence-based reassurance with a stated checkpoint.", "Mirela understands why treatment and privacy limits exist.", "Set discharge conditions beyond current intent alone."),
    buildHint37("c037-hint-28", "run", "c037-run-disposition", "Denial of current intent alone is insufficient", ["qas-suicidal-2024", "acsqhc-communication-2026"], "Defining safe discharge", "What must be complete?", "Medical stopping criteria, psychosocial assessment, means safety, supports and follow-up must align. One reassuring statement cannot replace the full assessment.", "Disposition follows combined medical and psychosocial evidence.", "Both treatment pathways require completion.", "Use teach-back to confirm why treatment began early and what remains."),
    buildHint37("c037-hint-29", "run", "c037-run-teachback-answer", "mental-health safety assessment", ["acsqhc-communication-2026", "qas-suicidal-2024"], "Confirming the whole plan", "What has Mirela understood?", "She can explain the treatment timing, repeat blood tests and the need for a safety assessment and plan before discharge.", "Correct only missing or unsafe details.", "The explanation now covers body and safety.", "Move to the final handover."),
    buildHint37("c037-hint-30", "run", "c037-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps both risks visible?", "Give product, formulation, exact time, total and weight-based dose, presentation, treatment timing, concentration and liver tests, continuation plan, intent, current concern and safety pathway.", "Give psychosocial risk the same explicit place as the toxicology risk.", "The final minute transfers toxicology and current safety.", "Finish with the conditions for continued treatment and assessment."),
    buildHint37("c037-hint-31", "run", "c037-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I add another promise about recovery?", "No. The station has ended and uncertainty was correctly tied to repeat evidence.", "Finish on the instruction.", "Case 37 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtySeven.essentialHintIds = [
    "c037-hint-02", "c037-hint-04", "c037-hint-05", "c037-hint-06", "c037-hint-07",
    "c037-hint-11", "c037-hint-14", "c037-hint-15", "c037-hint-17", "c037-hint-19",
    "c037-hint-20", "c037-hint-24", "c037-hint-25", "c037-hint-30", "c037-hint-31"
  ];
  var clockByHint37 = {
    "c037-hint-04": "Minutes 0 to 2: secure product, formulation, strength, number, pattern, exact time, weight, co-ingestants and immediate safety.",
    "c037-hint-11": "Before minute 3: calculate total dose and milligrams per kilogram once all inputs are disclosed.",
    "c037-hint-17": "The disclosed delay crosses a time threshold. Take blood and begin indicated treatment without waiting for the result.",
    "c037-hint-23": "By minute 6: medical treatment is running; ask direct current and future safety questions now.",
    "c037-hint-30": "Final minute: transfer exposure precision, treatment timing, results, stop plan and psychosocial risk."
  };
  var deeperByHint37 = {
    "c037-hint-11": ["Calculate total dose first: 30 tablets x 500 mg = 15,000 mg, which is 15 g. Then divide by body weight: 15,000 mg / 60 kg = 250 mg/kg."],
    "c037-hint-14": ["Clinical symptoms can remain mild while toxic metabolism is underway. Hepatocyte injury and synthetic dysfunction may become measurable later, which is why dose, time and serial laboratory evidence matter."],
    "c037-hint-17": ["Acetylcysteine replenishes glutathione and supports detoxification of NAPQI. Its protective effect is strongest when started early, so waiting beyond eight hours for a level can remove preventable benefit."],
    "c037-hint-20": ["The nomogram relates one measured concentration to time after a single acute ingestion. When absorption or timing is spread out, one point no longer represents a predictable elimination curve."],
    "c037-hint-21": ["Paracetamol below 10 mg/L indicates little circulating drug remains, while ALT trend looks for established hepatocyte injury. Both are needed because either persistent drug or rising injury may justify extending treatment."]
  };
  caseThirtySeven.hints.forEach(function (hint) {
    if (clockByHint37[hint.id]) hint.clock = clockByHint37[hint.id];
    if (deeperByHint37[hint.id]) hint.deeper = deeperByHint37[hint.id];
  });
})();
