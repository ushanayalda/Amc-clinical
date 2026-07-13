(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-020",
    globalId: "CP-C020",
    registryId: "CP-P6-C003",
    displayNumber: "Case 20",
    title: "Repeated red bowel motions",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 6, title: "Unstable Gastrointestinal Bleed" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c020-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c020-stem-patient",
          text: "Mrs Alma Rios, a 78-year-old woman, has passed red bowel motions several times since this morning. Her daughter, Nessa, is present."
        },
        {
          id: "c020-stem-start",
          text: "Alma is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c020-task-history",
          text: "Take a focused history from Alma and Nessa.",
          timing: "2 minutes"
        },
        {
          id: "c020-task-assess",
          text: "Assess Alma, interpret the information provided and discuss your management.",
          timing: "4 minutes"
        },
        {
          id: "c020-task-explain",
          text: "Explain your assessment and plan to Alma and Nessa.",
          timing: "1 minute"
        },
        {
          id: "c020-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c020-run-history",
          heading: "Focused history and assessment",
          turns: [
            {
              id: "c020-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-start", text: "You may begin." }]
            },
            {
              id: "c020-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c020-run-first-action", text: "The doctor performs hand hygiene and approaches Alma." }]
            },
            {
              id: "c020-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-intro", text: "Hello Alma, I am Ushana, one of the emergency doctors. Can you confirm your full name? Is it okay for Nessa to stay and help with the history while I assess you?" }]
            },
            {
              id: "c020-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-consent-answer", text: "Alma Rios. Yes, please let her stay. I feel faint." }]
            },
            {
              id: "c020-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check capillary refill, temperature and glucose. Examine the heart, lungs and abdomen, and inspect for continuing bleeding. Please provide the findings." }]
            },
            {
              id: "c020-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c020-run-primary-findings", text: "Airway is patent. Respiratory rate is 24, oxygen saturation 96% on room air and lungs are clear. Pulse is 122 and irregular, blood pressure 84/48 mmHg and capillary refill four seconds. Alma is pale, cool and orientated. Temperature is 36.1 degrees Celsius and glucose 6.8 mmol/L. The abdomen is soft and non-tender. Dark red blood and clot are on the bed pad." }]
            },
            {
              id: "c020-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-recognition", text: "This is major gastrointestinal bleeding with impaired circulation. Call the senior emergency doctor. Activate the local major haemorrhage protocol now, with early anaesthetic, interventional radiology and gastroenterology involvement. Keep Alma fasting, flat and warm." }]
            },
            {
              id: "c020-turn-access-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-access-tests", text: "Insert two large-bore intravenous cannulas. Send a blood gas with lactate, full blood count, group and crossmatch, coagulation studies, fibrinogen, renal and liver function and ionised calcium. Record urine output. Treatment follows her physiology, not the first haemoglobin." }]
            },
            {
              id: "c020-turn-resuscitation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-resuscitation-plan", text: "Start warmed blood components under the local protocol, moving to group-specific products when available. Avoid large crystalloid volumes. Reassess circulation, lungs and observations after each pack, and repeat haemoglobin, lactate, coagulation, fibrinogen, calcium and temperature to guide treatment." }]
            },
            {
              id: "c020-turn-action-resuscitation",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c020-run-action-resuscitation", text: "Two large-bore intravenous lines are secured, blood is collected, warming begins and the major haemorrhage protocol is activated. History continues during resuscitation." }]
            },
            {
              id: "c020-turn-bleeding-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-bleeding-history", text: "While treatment starts, when did the bleeding begin? How many motions, and was the blood bright or dark, mixed with stool or separate? Any clots, black stool, vomiting blood or abdominal pain?" }]
            },
            {
              id: "c020-turn-bleeding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-bleeding-answer", text: "It began after breakfast. I have been six times. The bowl fills with dark red blood and clots, with hardly any stool. There is no pain, black stool or vomiting." }]
            },
            {
              id: "c020-turn-impact-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-impact-history", text: "Have you fainted, had chest discomfort or breathlessness, or passed less urine? Any previous bleeding, bowel change, weight loss, bowel disease, ulcers, liver disease or recent procedure?" }]
            },
            {
              id: "c020-turn-impact-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-impact-answer", text: "I nearly blacked out and my heart is racing. I have not passed urine since early morning. No previous bleeding, bowel change or weight loss. A colonoscopy five years ago showed diverticular pockets. No ulcers or liver disease." }]
            },
            {
              id: "c020-turn-medication-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-medication-history", text: "What conditions and medicines do you have? Do you take a blood thinner, aspirin or anti-inflammatory tablets? When was the last dose? Any allergies?" }]
            },
            {
              id: "c020-turn-medication-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-medication-answer", text: "I have atrial fibrillation, high blood pressure and kidney trouble. I take apixaban and irbesartan. I have no allergies." }]
            },
            {
              id: "c020-turn-daughter-history",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c020-run-daughter-history", text: "Mum takes apixaban five milligrams twice daily. Her last dose was at seven this morning. She does not take aspirin or anti-inflammatory tablets." }]
            }
          ]
        },
        {
          id: "c020-run-resuscitation",
          heading: "Resuscitation, localisation and haemostasis",
          turns: [
            {
              id: "c020-turn-initial-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c020-run-initial-results", text: "Haemoglobin is 111 g/L, lactate 5.2 mmol/L, pH 7.30, urea 16 mmol/L, creatinine 146 micromol/L, estimated GFR 32 mL/minute and ionised calcium 1.06 mmol/L. Blood components are running. Alma passes another large volume of red blood and clots. Blood pressure is 88/52 mmHg and pulse 118." }]
            },
            {
              id: "c020-turn-anticoagulation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-anticoagulation", text: "The first haemoglobin does not measure the full acute loss. Withhold apixaban. For ongoing life-threatening bleeding after a recent dose, seek haematology-led use of the locally available specific factor Xa reversal agent or four-factor prothrombin complex concentrate. Do not use tranexamic acid routinely." }]
            },
            {
              id: "c020-turn-source-thinking",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-source-thinking", text: "Diverticular bleeding or angiodysplasia are possible, but malignancy and colitis remain. Brisk upper gastrointestinal bleeding can also present as red bowel motions, so an upper source remains possible." }]
            },
            {
              id: "c020-turn-cta-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-cta-plan", text: "With resuscitation underway, ongoing bleeding and instability requires CT angiography before colonoscopy to locate the source and guide haemostasis. Continue monitored treatment during transfer. If no lower source is found, assess promptly for upper endoscopy." }]
            },
            {
              id: "c020-turn-cta-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c020-run-cta-result", text: "CT angiography shows active contrast extravasation from a branch supplying the sigmoid colon, with no other bleeding source identified." }]
            },
            {
              id: "c020-turn-definitive",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-definitive", text: "Proceed to selective angiography and superselective embolisation within 60 minutes where feasible, while continuing blood replacement and reversal. After stabilisation, gastroenterology should perform a properly bowel-prepared colonoscopy. Involve colorectal surgery early, but operate only if endoscopic and radiological control fails, with the site localised when possible." }]
            },
            {
              id: "c020-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-patient-question", text: "Is this because of my blood thinner? Am I going to need an operation?" }]
            },
            {
              id: "c020-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-patient-answer", text: "The blood thinner may worsen bleeding but may not be its original cause. We are reversing its effect. The scan found a vessel that radiology can usually seal from inside the artery. Surgery is a backup if that fails." }]
            }
          ]
        },
        {
          id: "c020-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c020-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-explanation-prompt", text: "Please explain your assessment and plan to Alma and Nessa." }]
            },
            {
              id: "c020-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-explanation", text: "Alma and Nessa, she has lost enough blood to affect her circulation. We are replacing it and reversing apixaban. The scan located a bleeding bowel vessel, which radiology will now seal. We will monitor her closely and investigate the cause once she is stable." }]
            },
            {
              id: "c020-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c020-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c020-run-handover", text: "Alma Rios is 78 with six painless large-volume haematochezia episodes, near-syncope and oliguria. She takes apixaban for atrial fibrillation, last dose seven this morning. She is pale and cool, pulse 122 irregular, pressure 84/48 and lactate 5.2, with ongoing bleeding. The major haemorrhage protocol is active, apixaban is withheld and reversal is underway. CT angiography localised active sigmoid bleeding; interventional radiology is proceeding to superselective embolisation." }]
            },
            {
              id: "c020-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "European Society of Gastrointestinal Endoscopy",
        title: "Diagnosis and management of acute lower gastrointestinal bleeding: ESGE Guideline",
        date: "2021",
        url: "https://doi.org/10.1055/a-1496-8969"
      },
      {
        organisation: "National Blood Authority",
        title: "Patient blood management guideline for adults with critical bleeding",
        date: "Version 2.0, September 2025",
        url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding"
      },
      {
        organisation: "Thrombosis and Haemostasis Society of Australia and New Zealand",
        title: "2025 Guidelines for direct oral anticoagulants: a practical guidance on the prescription, laboratory testing, peri-operative and bleeding management",
        date: "2025",
        url: "https://doi.org/10.1111/imj.70103"
      }
    ]
  });

  var caseTwenty = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-020"; });
  function buildHint20(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwenty.masteryFocus = {
    case: "Assess repeated red bowel motions, recognise circulatory compromise, treat the immediate problem, use disclosed evidence to locate the source and coordinate the next intervention.",
    clinical: "In any acute bleeding presentation, let perfusion, ongoing loss, medicine timing and response to treatment determine escalation; keep source location provisional until it is demonstrated.",
    tasks: [
      "Focused history",
      "Assess, interpret and manage",
      "Explain assessment and plan",
      "Concise clinical handover"
    ],
    transfer: "If Alma became haemodynamically stable and immediate imaging showed no active bleeding, how would the next investigation and source-control pathway change?",
    transferAnswer: "If she is stable and CT angiography shows no active bleeding, there is no immediate embolisation target. Continue monitoring and anticoagulant planning, then perform adequately prepared colonoscopy during the hospital stay to identify and treat the source; return to CTA, interventional radiology or surgery only if major bleeding recurs or persists.",
    transferChecks: [
      "Sustained stability and absence of ongoing major loss",
      "No active extravasation on imaging",
      "Adequate bowel preparation and inpatient colonoscopy",
      "Clear rebleeding and anticoagulant-restart plan"
    ],
    transferCitationIds: ["esge-lgib-2021", "thanz-doac-2025"]
  };
  caseTwenty.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "nba-critical-bleeding-2025", title: "Patient blood management guideline for adults with critical bleeding", organisation: "National Blood Authority", date: "Version 2.0, September 2025", url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding" },
    { id: "acsqhc-blood-2026", title: "Blood Management Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/blood-management-standard" },
    { id: "acsqhc-medication-2026", title: "Medication Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/medication-safety-standard" },
    { id: "thanz-doac-2025", title: "2025 Guidelines for direct oral anticoagulants: a practical guidance on the prescription, laboratory testing, peri-operative and bleeding management", organisation: "Thrombosis and Haemostasis Society of Australia and New Zealand", date: "2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12240022/" },
    { id: "esge-lgib-2021", title: "Diagnosis and management of acute lower gastrointestinal bleeding: ESGE Guideline", organisation: "European Society of Gastrointestinal Endoscopy", date: "2021, current guideline checked July 2026", url: "https://www.thieme-connect.com/products/ejournals/html/10.1055/a-1496-8969" },
    { id: "halt-it-2020", title: "Effects of a high-dose 24-hour infusion of tranexamic acid in acute gastrointestinal bleeding: HALT-IT trial", organisation: "HALT-IT Trial Collaborators", date: "2020", url: "https://doi.org/10.1016/S0140-6736(20)30848-5" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseTwenty.reasoningCompass = {
    stem: {
      title: "Start with severity; keep the source uncertain",
      steps: [
        { time: "0 to 30 seconds", text: "Repeated red bowel motions in an older patient. Prepare to establish the amount, associated symptoms and circulatory state before deciding the cause or location." },
        { time: "30 to 60 seconds", text: "Plan a focused history while ABCDE, monitoring and treatment can run in parallel. Include blood appearance, pain, black stool, vomiting, bowel change, previous disease, procedures and medicines that increase bleeding." },
        { time: "1 to 2 minutes", text: "Set the task times: history to minute 2, assessment and management to minute 6, explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess and manage 2 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Treat the active bleeding, then locate its source",
      steps: [
        { time: "0 to 2 minutes", text: "Confirm consent and obtain the focused history while checking ABCDE, visible loss and circulation. Call for help as soon as the findings require it." },
        { time: "2 to 6 minutes", text: "Support circulation, take targeted tests and continue history in parallel. Use repeat findings, medicine timing and imaging to decide further treatment." },
        { time: "6 to 8 minutes", text: "At the prompt, explain what is known and what happens next. Then hand over severity, changes, treatment, location evidence and the immediate action." }
      ],
      anchor: "If bleeding or circulation worsens, stop the current question, repeat ABCDE and escalate. Then return to the unfinished task."
    }
  };
  caseTwenty.hints = [
    buildHint20("c020-hint-01", "stem", "c020-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What does the setting allow me to do straight away?", "Assessment, monitoring, intravenous access, blood support and senior help can begin together if Alma is unwell.", "Do not wait for a complete history before checking circulation.", "This is an emergency department presentation with visible bleeding.", "Read the patient line for severity clues, but keep the source uncertain."),
    buildHint20("c020-hint-02", "stem", "c020-stem-patient", "78-year-old woman", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age and symptom", "Does age tell me where the bleeding comes from?", "Her age increases the chance of serious disease and reduced reserve, but red bowel motions alone do not prove the level or cause of bleeding.", "Her age raises concern, but the bleeding site still needs evidence.", "Alma may tolerate blood loss poorly; the source is not established.", "Look for frequency, associated symptoms and current stability."),
    buildHint20("c020-hint-03", "stem", "c020-stem-start", "awake and able to answer questions", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Using current alertness", "She is awake. Can I safely take the full history first?", "Alertness gives you a chance to ask focused questions, but it does not exclude severe circulatory compromise. Obtain ABCDE findings early and continue history during treatment if needed.", "A normal conversation does not confirm adequate perfusion.", "Alma can participate; her physiology is still unknown.", "Use the examiner findings actively rather than describing a history alone."),
    buildHint20("c020-hint-04", "stem", "c020-task-history", "focused history from Alma and Nessa", ["amc-spec-2026", "amc-tips-2024", "acsqhc-communication-2026"], "Anchoring task one", "What makes two minutes focused here?", "Use four buckets: the bleeding pattern, its effect on circulation, clues to the source, and medicine or procedure risk. With Alma's permission, Nessa can confirm timing and doses.", "Focused means decision-relevant, not rushed or incomplete.", "The first two minutes establish loss, effect, source clues and medicine risk.", "Keep watching for a reason to interrupt the history and treat."),
    buildHint20("c020-hint-05", "stem", "c020-task-assess", "Assess Alma, interpret the information provided and discuss your management", ["amc-spec-2026", "acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Anchoring task two", "What belongs in the four-minute assessment block?", "Use four blocks: current physiology; focused examination; access and targeted tests; then treatment, interpretation and the next action.", "Management begins from the current physiology before the cause is named.", "Minutes 2 to 6 cover physiology, treatment, interpretation and next steps.", "Reserve the final two minutes for explanation and handover."),
    buildHint20("c020-hint-06", "stem", "c020-task-explain", "Explain your assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What changes at minute six?", "Stop speaking to the examiner and address Alma and Nessa. Explain the seriousness, what is being done now, what the available evidence has shown and what treatment comes next without overclaiming the original cause.", "The explanation is a task, not spare time after management.", "Minute 6 to 7 belongs to Alma and Nessa.", "Keep one minute for transfer of clinical risk."),
    buildHint20("c020-hint-07", "stem", "c020-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which facts must the senior hear?", "Use four blocks: bleeding pattern; physiological effect and key results; treatment and response; then the next source-control step.", "A concise handover carries current risk and action, not every question asked.", "Minute 7 to 8 is the senior handover.", "Start the run with the first safety action and preserve these final facts."),
    buildHint20("c020-hint-08", "run", "c020-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is my first visible move?", "Perform hand hygiene, approach Alma, identify yourself and confirm who she wants involved while noticing her colour, breathing and ability to engage.", "Hand hygiene, observation and introduction can happen in the same few seconds.", "The history task has started, but observation starts with it.", "Approach Alma and establish permission for Nessa to assist."),
    buildHint20("c020-hint-09", "run", "c020-run-first-action", "performs hand hygiene", ["amc-tips-2024", "acsqhc-communication-2026"], "Showing safe practice", "Is hand hygiene worth the seconds?", "Yes. Do it without delaying urgent observation or contact. It is brief, visible and part of safe emergency care.", "Complete hand hygiene, then continue the assessment.", "You are at Alma's bedside.", "Introduce yourself and confirm identity and consent."),
    buildHint20("c020-hint-10", "run", "c020-run-intro", "okay for Nessa to stay", ["acsqhc-communication-2026", "amc-tips-2024"], "Using family with consent", "Can Nessa answer because Alma is older?", "Only after Alma agrees. Alma is awake and remains the main speaker; Nessa can add medication details and observations that Alma cannot recall.", "Support does not replace the patient's voice.", "Identity and consent are being established.", "Listen for Alma's first symptom before following the prepared history sequence."),
    buildHint20("c020-hint-11", "run", "c020-run-consent-answer", "I feel faint", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Hearing the first severity clue", "Do I continue asking about the colour of blood?", "Pause the history. Faintness during active bleeding may reflect reduced cerebral perfusion. Obtain ABCDE findings, monitoring and visible blood loss now.", "A danger symptom changes the order of work.", "Alma consents to Nessa staying and reports possible circulatory compromise.", "Request the primary assessment before returning to detail."),
    buildHint20("c020-hint-12", "run", "c020-run-primary-request", "airway, breathing, circulation, conscious state and exposure", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Requesting the whole primary assessment", "Why ask for more than blood pressure?", "Bleeding can affect breathing, consciousness, temperature and perfusion as well as pressure. Monitoring and exposure also show trend and continuing loss.", "Read airway, breathing, circulation, consciousness and exposure together.", "You are testing the severity of an active bleed.", "Read the findings in ABCDE order, then decide whether the history can wait."),
    buildHint20("c020-hint-13", "run", "c020-run-primary-findings", "blood pressure 84/48 mmHg and capillary refill four seconds", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Reading perfusion", "What do the pulse, pressure and refill say together?", "Pulse 122, marked hypotension and delayed refill show impaired circulation. Pallor and cool skin agree. This is not a stable patient who can finish history before treatment.", "The pulse, pressure, refill and skin signs all indicate poor perfusion.", "Alma has circulatory compromise during active bleeding.", "Check the visible loss and abdomen, then name the immediate problem."),
    buildHint20("c020-hint-14", "run", "c020-run-primary-findings", "Dark red blood and clot are on the bed pad", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Confirming ongoing loss", "Does dark red blood prove a lower source?", "It confirms current gastrointestinal blood loss, but colour alone cannot safely locate brisk bleeding. The soft, non-tender abdomen does not reduce the circulatory urgency.", "Blood colour alone does not locate the source.", "There is active gastrointestinal bleeding with impaired perfusion; the source remains uncertain.", "Escalate and begin the local critical bleeding response."),
    buildHint20("c020-hint-15", "run", "c020-run-recognition", "Activate the local major haemorrhage protocol now", ["nba-critical-bleeding-2025", "acsqhc-blood-2026"], "Activating coordinated treatment", "Why activate a protocol before the haemoglobin returns?", "The combination of ongoing visible loss and impaired circulation is enough. The protocol brings blood products, laboratory support, warming, monitoring and the required teams into one coordinated response.", "Treatment follows current bleeding and perfusion, not a delayed laboratory picture.", "Major gastrointestinal bleeding is now established; exact source is not.", "Secure access, send the critical tests and start replacement."),
    buildHint20("c020-hint-16", "run", "c020-run-access-tests", "Treatment follows her physiology, not the first haemoglobin", ["nba-critical-bleeding-2025", "acsqhc-blood-2026"], "Interpreting the first blood count", "Why can haemoglobin look better than the patient?", "Immediately after acute whole-blood loss, plasma and red cells are lost together, so the first concentration may not show the final fall. Pressure, pulse, refill, urine, lactate and continuing loss guide urgent treatment.", "Treat the hypotension, tachycardia, delayed refill and ongoing loss now; the first haemoglobin may fall later.", "Access and tests are underway; circulatory failure is already evident.", "Begin warmed blood support and reassess after each step."),
    buildHint20("c020-hint-17", "run", "c020-run-resuscitation-plan", "Reassess circulation, lungs and observations after each pack", ["nba-critical-bleeding-2025", "acsqhc-blood-2026"], "Using each treatment as a checkpoint", "Why reassess rather than prescribe a fixed volume?", "Response and repeat results show whether bleeding continues, perfusion improves or complications are developing. Temperature, calcium, fibrinogen and coagulation can deteriorate during major blood loss and replacement.", "Replacement is guided care, not a one-time order.", "Warm blood components are running under the local protocol.", "Continue the focused history while the team treats and monitors."),
    buildHint20("c020-hint-18", "run", "c020-run-action-resuscitation", "History continues during resuscitation", ["nba-critical-bleeding-2025", "amc-tips-2024"], "Working in parallel", "Have I lost the history task?", "You haven't. The team can secure access, collect blood and warm Alma while you ask short questions that change management. Pause again if her circulation or consciousness worsens.", "Continue short questions only while she remains safe enough to answer.", "Immediate treatment is active and the source is still uncertain.", "Clarify the bleeding pattern first."),
    buildHint20("c020-hint-19", "run", "c020-run-bleeding-history", "blood bright or dark, mixed with stool or separate", ["amc-spec-2026", "amc-tips-2024"], "Clarifying the bleeding pattern", "What will these details change?", "Amount, colour, clots and relation to stool help judge severity and suggest possible levels. Black stool or vomiting blood would support an upper source; pain can point toward inflammatory or ischaemic causes. None of these details replaces resuscitation.", "Ask one compact cluster, then listen.", "Treatment is active; you are now refining source possibilities.", "Use Alma's answer to update severity and location without declaring either cause."),
    buildHint20("c020-hint-20", "run", "c020-run-bleeding-answer", "six times", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Quantifying the loss", "Is six motions just a history detail?", "Repeated bowls filling with blood and clots, with little stool, supports large ongoing loss. The absence of pain, black stool and vomiting adjusts the possibilities but does not exclude a brisk upper source.", "Large ongoing loss is established; the source is not.", "The bleeding is frequent, large volume and painless.", "Ask about syncope, cardiac strain, urine and previous disease."),
    buildHint20("c020-hint-21", "run", "c020-run-impact-history", "passed less urine", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Checking organ perfusion", "Why ask about urine in a bowel bleed?", "Reduced urine can signal renal hypoperfusion. Near-fainting, chest discomfort and breathlessness screen cerebral and cardiac effects of blood loss, especially in an older person.", "Ask how the bleeding has affected perfusion, not only what it looked like.", "Alma has major visible loss; end-organ effect needs clarification.", "Then ask previous bleeding, bowel change, upper digestive disease and procedures."),
    buildHint20("c020-hint-22", "run", "c020-run-impact-answer", "not passed urine since early morning", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Confirming end-organ effect", "What does absent urine add?", "Alongside near-blackout, tachycardia, hypotension and raised refill time, it supports significant renal hypoperfusion. Her known kidney disease may also reduce reserve.", "This strengthens urgency; it does not locate the bleed.", "Alma has clinical evidence of impaired circulation and organ perfusion.", "Keep reading for previous bowel findings, then check medicines."),
    buildHint20("c020-hint-23", "run", "c020-run-impact-answer", "diverticular pockets", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Using previous colonoscopy carefully", "Have I found the cause now?", "Diverticular disease makes one painless colonic cause plausible, but it is common and may be incidental. Angiodysplasia, malignancy, colitis and a brisk upper source still require consideration.", "A previous finding is a possibility, not localisation of today's bleed.", "Diverticular bleeding is one consideration; the active source remains unproven.", "Ask about anticoagulants, antiplatelets, anti-inflammatory medicines and the last dose."),
    buildHint20("c020-hint-24", "run", "c020-run-medication-history", "When was the last dose", ["acsqhc-medication-2026", "amc-tips-2024"], "Making the medicine history actionable", "Why is timing as important as the medicine name?", "The last dose, dose size, kidney function and ongoing bleeding help determine whether a medicine may still be increasing the bleed and what specialist advice is needed.", "A medicine list without timing is incomplete in active bleeding.", "The bleed is severe and its anatomical source is still uncertain.", "Hear Alma's conditions and medicines, then confirm the exact dose with Nessa."),
    buildHint20("c020-hint-25", "run", "c020-run-medication-answer", "I take apixaban", ["acsqhc-medication-2026", "nba-critical-bleeding-2025"], "Identifying anticoagulant exposure", "Does apixaban explain the whole event?", "It can increase the amount or persistence of bleeding but does not identify the lesion that started it. Atrial fibrillation also means interruption and later resumption require attention to stroke risk.", "Separate the bleeding lesion from a medicine that may worsen it.", "Apixaban is clinically important; dose timing and current effect are not yet confirmed.", "Use Nessa's information to confirm dose and time."),
    buildHint20("c020-hint-26", "run", "c020-run-daughter-history", "last dose was at seven this morning", ["acsqhc-medication-2026", "thanz-doac-2025"], "Confirming recent exposure", "What changes after a recent dose?", "Ongoing life-threatening bleeding soon after apixaban makes clinically important drug effect more likely. Kidney impairment may prolong exposure, so involve haematology while resuscitation continues.", "Medicine reversal is considered from severity, timing and clearance together.", "Recent apixaban exposure is now confirmed during ongoing major bleeding.", "Read the repeat physiology and laboratory results before deciding the next treatment."),
    buildHint20("c020-hint-27", "run", "c020-run-initial-results", "Haemoglobin is 111 g/L", ["nba-critical-bleeding-2025", "acsqhc-blood-2026"], "Not being reassured by 111", "Does this haemoglobin mean the loss is moderate?", "It is compatible with early acute blood loss. Lactate 5.2, acidaemia, hypotension, tachycardia and oliguria show inadequate perfusion despite that number.", "The observations, urine and lactate show poor perfusion despite the haemoglobin.", "Blood components are running, but perfusion remains poor.", "Look at whether bleeding and instability continue."),
    buildHint20("c020-hint-28", "run", "c020-run-initial-results", "another large volume of red blood and clots", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Recognising failed initial control", "What does another large bleed change?", "It confirms ongoing loss despite initial resuscitation. Persistent hypotension means replacement, monitoring and escalation continue while medication effect and source localisation are addressed.", "Treatment has started, but control has not been achieved.", "Alma remains unstable with active bleeding.", "Withhold the anticoagulant and decide whether urgent reversal is justified."),
    buildHint20("c020-hint-29", "run", "c020-run-anticoagulation", "Withhold apixaban", ["acsqhc-medication-2026", "thanz-doac-2025"], "Stopping further anticoagulant exposure", "Is withholding enough here?", "It is essential, but ongoing life-threatening bleeding, recent dosing and impaired renal clearance mean passive waiting may be unsafe. Haematology should guide the locally available reversal option while blood replacement continues.", "Resuscitation and source localisation continue during the medicine decision.", "Apixaban is withheld; active drug effect is likely enough to address.", "Use specialist-led reversal because the severity and timing now support it."),
    buildHint20("c020-hint-30", "run", "c020-run-anticoagulation", "specific factor Xa reversal agent or four-factor prothrombin complex concentrate", ["thanz-doac-2025", "acsqhc-medication-2026"], "Choosing reversal with specialist input", "Why not name one automatic drug for everyone?", "Availability, local protocol, timing, renal function and thrombotic risk matter. A safe plan is urgent haematology-guided use of the locally available specific agent or four-factor concentrate for this ongoing life-threatening bleed.", "Reversal has a thrombotic cost and supports, rather than replaces, definitive bleeding control.", "Resuscitation and anticoagulant reversal are proceeding together.", "Avoid adding treatments that have not shown benefit in gastrointestinal bleeding."),
    buildHint20("c020-hint-31", "run", "c020-run-anticoagulation", "Do not use tranexamic acid routinely", ["halt-it-2020"], "Avoiding routine tranexamic acid", "Why leave out a familiar bleeding medicine?", "The large HALT-IT trial found no mortality benefit in acute gastrointestinal bleeding and more venous thromboembolic events. Routine use is therefore not justified here.", "A treatment being useful in other bleeding settings does not make it useful in this one.", "Blood replacement and indicated reversal continue; routine tranexamic acid does not.", "Now reconsider possible sources without forcing the red blood into one location."),
    buildHint20("c020-hint-32", "run", "c020-run-source-thinking", "an upper source remains possible", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Keeping the source provisional", "Why keep an upper source after red bowel motions?", "Very brisk upper gastrointestinal bleeding can pass rapidly and appear red. Painless large-volume bleeding and known diverticula suggest colonic possibilities, but neither proves where the blood began.", "Keep several plausible causes until a test demonstrates the active site.", "Severity is established; source location is not.", "Choose the test that can localise active bleeding without waiting for bowel preparation."),
    buildHint20("c020-hint-33", "run", "c020-run-cta-plan", "CT angiography before colonoscopy", ["esge-lgib-2021", "nba-critical-bleeding-2025"], "Choosing the next test from the current state", "Why not send her straight to colonoscopy?", "She remains unstable and is actively bleeding. CT angiography is rapid, needs no bowel preparation and can show active extravasation precisely enough to direct the next intervention. Monitoring and resuscitation continue during transfer.", "The test is chosen for the immediate decision and the patient's stability.", "The source remains uncertain and treatment is ongoing.", "Read the scan before naming the location or the method of haemostasis."),
    buildHint20("c020-hint-34", "run", "c020-run-cta-result", "active contrast extravasation from a branch supplying the sigmoid colon", ["esge-lgib-2021"], "Localising the active source", "What has the scan now proved?", "It demonstrates active bleeding from a sigmoid arterial branch and finds no other source. A lower gastrointestinal location is now established, but the underlying lesion still requires later investigation.", "The scan proves the site, not the underlying lesion.", "The active bleeding site is now localised to the sigmoid colon.", "Use that location to arrange prompt targeted haemostasis."),
    buildHint20("c020-hint-35", "run", "c020-run-definitive", "superselective embolisation within 60 minutes", ["esge-lgib-2021", "nba-critical-bleeding-2025"], "Controlling the demonstrated vessel", "Why does radiology come next?", "Alma is unstable with active extravasation on CT. Selective angiography can reach that branch and embolise it while avoiding unnecessary bowel surgery; guidance recommends prompt access when feasible.", "Resuscitation and reversal continue during definitive control.", "The active sigmoid branch is demonstrated and targetable.", "After control and stabilisation, investigate the underlying bowel cause."),
    buildHint20("c020-hint-36", "run", "c020-run-definitive", "operate only if endoscopic and radiological control fails", ["esge-lgib-2021"], "Placing colonoscopy and surgery correctly", "Where do colonoscopy and surgery fit now?", "A properly prepared colonoscopy follows stabilisation to identify and treat the underlying lesion. Surgery is involved early but is reserved for failure of radiological or endoscopic control, ideally after the site is known.", "Early surgical involvement does not mean early laparotomy.", "Targeted embolisation is first; later investigation and backup plans are defined.", "Answer Alma's questions about apixaban and operation without giving false certainty."),
    buildHint20("c020-hint-37", "run", "c020-run-patient-question", "Is this because of my blood thinner", ["acsqhc-communication-2026", "acsqhc-medication-2026"], "Answering causation honestly", "Can I simply say yes?", "Explain that apixaban may make bleeding heavier or harder to stop, but the bowel vessel still needs an underlying cause investigated after stabilisation.", "Acknowledge the medicine's role without blaming it for an unproven lesion.", "The site is known; the original cause is not yet known.", "Then explain why radiology is planned and where surgery sits."),
    buildHint20("c020-hint-38", "run", "c020-run-patient-answer", "Surgery is a backup if that fails", ["esge-lgib-2021", "acsqhc-communication-2026"], "Explaining the treatment sequence", "How much detail is enough while she is unstable?", "Say that radiology will try to seal the demonstrated vessel from inside the artery, while blood replacement and reversal continue. Surgery is available if less invasive control fails.", "Give the next step and the backup, not a long procedural lecture.", "Alma and Nessa understand why radiology comes before surgery.", "When the examiner prompts, bring the whole explanation together in one minute."),
    buildHint20("c020-hint-39", "run", "c020-run-explanation-prompt", "explain your assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Switching to explanation", "What must I stop doing now?", "Stop adding examiner-facing differentials. Address Alma and Nessa with the current facts: serious blood loss affecting circulation, treatment underway, the scan location, the immediate radiology plan and later investigation of cause.", "The prompt changes the audience and purpose.", "Assessment and management have reached a clear next action.", "Use plain language and check that both understand."),
    buildHint20("c020-hint-40", "run", "c020-run-explanation", "investigate the cause once she is stable", ["acsqhc-communication-2026", "esge-lgib-2021"], "Separating what is known from what is pending", "Why mention later investigation after the vessel is seen?", "The scan has shown where blood is escaping, not whether the lesion is diverticular disease, angiodysplasia, malignancy or another cause. This sentence prevents false certainty while keeping the immediate plan clear.", "The scan shows the bleeding site; the underlying lesion still needs investigation.", "Alma and Nessa have heard the severity, current treatment and next procedure.", "Use the final minute to transfer the same facts and current risk to the senior clinician."),
    buildHint20("c020-hint-41", "run", "c020-run-handover-prompt", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering at the final prompt", "What order keeps the handover useful?", "Lead with identity and major ongoing bleed, then give perfusion and organ effects, apixaban dose timing, key results, treatment and response, CT localisation and the immediate radiology action.", "Use only the history and normal findings that change current risk or action.", "The last task is transfer of current risk and action.", "State the unresolved cause only after the confirmed site and plan."),
    buildHint20("c020-hint-42", "run", "c020-run-handover", "interventional radiology is proceeding to superselective embolisation", ["acsqhc-communication-2026", "esge-lgib-2021", "nba-critical-bleeding-2025"], "Closing with the next action", "Why finish with radiology rather than the differential?", "Because it tells the senior what is happening now for a still time-critical problem. The handover already carries severity, anticoagulant exposure, treatment and confirmed location.", "Finish with who is taking her now and what they are doing.", "The receiving clinician has the current state and plan.", "Stop when the examiner ends the station."),
    buildHint20("c020-hint-43", "run", "c020-run-end", "The station is complete", ["amc-tips-2024"], "Letting the station finish", "Should I add anticoagulant restart timing?", "The station has ended. That later decision needs haemostasis, cause, stroke risk and specialist review, none of which should be invented here.", "Finish on the examiner's instruction.", "Case 20 is complete.", "Take one breath, then read the next stem from its first line.")
  ];
  caseTwenty.hints.forEach(function (hint, index) { hint.id = "c020-hint-" + String(index + 1).padStart(2, "0"); });
  caseTwenty.hints.splice(2, 0, buildHint20(
    "c020-hint-stem-bleeding",
    "stem",
    "c020-stem-patient",
    "passed red bowel motions several times",
    ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025", "esge-lgib-2021"],
    "Reading repeated red bleeding",
    "Several red bowel motions. What matters before I know the source?",
    "Repeated visible bleeding makes the amount and its effect on circulation urgent. Red blood can come from the colon or from a brisk upper gastrointestinal bleed, so colour alone cannot safely locate it.",
    "Keep severity and source as separate questions.",
    "There is repeated visible gastrointestinal bleeding; current perfusion and source are still unknown.",
    "Read whether Alma can answer, then anchor the four task blocks."
  ));
  caseTwenty.essentialHintIds = [
    "c020-hint-stem-bleeding", "c020-hint-04", "c020-hint-05", "c020-hint-06", "c020-hint-07",
    "c020-hint-13", "c020-hint-15", "c020-hint-20", "c020-hint-26",
    "c020-hint-28", "c020-hint-33", "c020-hint-34",
    "c020-hint-35", "c020-hint-39", "c020-hint-41", "c020-hint-43"
  ];
  var clockByHint20 = {
    "c020-hint-04": "Minutes 0 to 2: ask only about bleeding severity, perfusion, source clues and medicines that change immediate care.",
    "c020-hint-13": "Circulatory compromise interrupts the history. Begin major-bleeding treatment now, then return to short decisive questions.",
    "c020-hint-28": "Ongoing large-volume bleeding means resuscitation is not complete. Reassess and escalate before pursuing detail.",
    "c020-hint-34": "Before minute 6: the scan now localises active bleeding; move from possibilities to targeted control.",
    "c020-hint-39": "Minute 6: turn to Alma and Nessa and explain the known site, treatment and remaining uncertainty.",
    "c020-hint-41": "Final minute: transfer current risk, anticoagulant timing, response, scan location and immediate radiology action.",
    "c020-hint-43": "Time is complete. One breath, then begin the next stem from its first line."
  };
  var deeperByHint20 = {
    "c020-hint-05": ["Within those blocks, request only findings and tests that establish severity, show organ effect, prepare treatment or choose the next investigation."],
    "c020-hint-04": ["Clarify onset, frequency and amount, colour and clots; pain, black stool or vomiting blood; fainting, chest symptoms and urine; previous digestive disease or procedures, bleeding medicines and last dose."],
    "c020-hint-07": ["Give identity, amount and pattern of bleeding, circulatory effect, relevant medicine and last dose, important results, ongoing loss, treatment and response, location evidence and the next intervention."],
    "c020-hint-16": ["Early whole-blood loss removes plasma and red cells together. The first haemoglobin concentration can look relatively preserved even while circulating volume and organ perfusion fall."],
    "c020-hint-30": ["A specific factor Xa antidote binds and neutralises the drug. Four-factor concentrate instead supplies clotting factors to improve thrombin generation; both carry thrombotic risk."],
    "c020-hint-34": ["Contrast extravasation means contrast is visibly leaving an artery during the scan. It proves active bleeding at that vessel, not the underlying bowel lesion."]
  };
  caseTwenty.hints.forEach(function (hint) {
    if (clockByHint20[hint.id]) hint.clock = clockByHint20[hint.id];
    if (deeperByHint20[hint.id]) hint.deeper = deeperByHint20[hint.id];
  });
})();
