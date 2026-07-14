(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-028",
    globalId: "CP-C028",
    registryId: "CP-P9-C002",
    displayNumber: "Case 28",
    title: "Severe abdominal pain over several hours",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
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

  var caseTwentyEight = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-028"; });
  function buildHint28(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentyEight.masteryFocus = {
    case: "Use severe abdominal pain and its progression to test time-critical vascular, inflammatory and obstructive causes, then let examination, physiology and disclosed evidence select the next step.",
    clinical: "When pain severity and examination do not match, keep vascular and ischaemic causes active, use the right time-sensitive test, and reassess for the moment the treatment route changes.",
    tasks: ["Focused pain history", "Assess and select imaging", "Explain assessment and plan", "Concise team handover"],
    transfer: "If Soraya developed rigid generalised peritonism and free intraperitoneal gas before endovascular treatment, how would the definitive route change?",
    transferAnswer: "Peritonism or perforation suggests nonviable bowel and contamination. Continue resuscitation, antibiotics and anticoagulation decisions with the senior teams, but proceed to urgent laparotomy for direct bowel assessment, revascularisation where possible and resection of only clearly nonviable bowel. Endovascular treatment alone would no longer address the whole problem.",
    transferChecks: ["Peritonism changes the route", "Direct bowel viability assessment", "Restore blood flow rapidly", "Resect only nonviable bowel"],
    transferCitationIds: ["wses-ami-2022", "acsqhc-laparotomy-2026"]
  };
  caseTwentyEight.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "acsqhc-laparotomy-2026", title: "Emergency Laparotomy Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "2026", url: "https://www.safetyandquality.gov.au/clinical-care-standards/emergency-laparotomy" },
    { id: "wses-ami-2022", title: "Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery", organisation: "World Society of Emergency Surgery", date: "October 2022", url: "https://link.springer.com/article/10.1186/s13017-022-00443-x" }
  ];
  caseTwentyEight.reasoningCompass = {
    stem: {
      title: "Notice the mismatch early",
      steps: [
        { time: "0 to 30 seconds", text: "Start with severe central pain that becomes diffuse over several hours. Clarify the exact onset and keep vascular, perforation, pancreatic and biliary causes possible until examination and perfusion narrow them." },
        { time: "30 to 60 seconds", text: "Plan questions about exact onset, associated symptoms, background risk and recent medicine changes beside ABC, perfusion and abdominal examination." },
        { time: "1 to 2 minutes", text: "Fix the task times: history to minute 2, assessment and imaging choice to minute 5, explanation to minute 7, handover in the final minute." }
      ],
      anchor: "History 0 to 2 | Assess and image 2 to 5 | Explain 5 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Let the current findings choose the next action",
      steps: [
        { time: "0 to 2 minutes", text: "Clarify onset, progression, associated symptoms and relevant background while current physiology and perfusion are checked." },
        { time: "2 to 5 minutes", text: "Interpret the focused examination and requested evidence together, then choose the investigation that answers the most urgent unresolved question." },
        { time: "5 to 8 minutes", text: "Explain the current assessment and next action, then hand over the symptom pattern, physiology, decisive evidence and care already started." }
      ],
      anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the current task, respond, say where you paused and then return."
    }
  };
  caseTwentyEight.hints = [
    buildHint28("c028-hint-01", "stem", "c028-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can start before the cause is settled?", "Monitoring, intravenous access, analgesia, blood tests and senior help can proceed while the time-sensitive diagnosis is investigated.", "Assessment and treatment can run together.", "The setting supports rapid escalation.", "Read the onset and spread before choosing a system."),
    buildHint28("c028-hint-02", "stem", "c028-stem-patient", "77-year-old woman", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Using age carefully", "Does age make this one diagnosis?", "No. It increases vascular risk and may reduce physiological reserve, but the symptom pattern and findings must determine the next action.", "Age changes probability, not proof.", "A vascular cause deserves early attention.", "Now focus on how the pain began and changed."),
    buildHint28("c028-hint-03", "stem", "c028-stem-patient", "severe central abdominal pain that has become diffuse over several hours", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Clarifying onset and progression", "What do I need to establish about this pain?", "Clarify how it started, when it became severe and how it spread. Severe central pain can come from vascular or structural disease before the abdomen develops dramatic signs.", "Do not wait for rigidity before taking severe pain seriously.", "The pain is severe and evolving; the cause is not settled.", "Add the vomiting, then plan the focused questions."),
    buildHint28("c028-hint-04", "stem", "c028-stem-patient", "vomited once", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Placing the vomit", "Does one vomit locate the problem?", "No. Vomiting can accompany severe visceral or systemic illness. Its value is in the wider pattern and whether it continues or causes distension.", "A common symptom should not dominate the reasoning.", "Vomiting adds severity but not location.", "Check which findings must be requested."),
    buildHint28("c028-hint-05", "stem", "c028-stem-context", "when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning purposeful requests", "Which findings will change urgency or management?", "Request current physiology and perfusion, focused system and abdominal findings, relevant bedside and laboratory evidence, and an investigation matched to the leading time-critical question.", "Ask for information that changes urgency or management.", "Current physiology and abdominal signs are unknown.", "Anchor each task before the run begins."),
    buildHint28("c028-hint-06", "stem", "c028-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "Which questions fit these two minutes?", "Ask exact onset, severity and progression; important associated and perfusion symptoms; relevant cardiac, vascular and abdominal history; recent medicine changes, operations and allergies.", "Focused means every question tests risk, mimic or action.", "Task one builds the pain timeline and relevant risk.", "At minute 2, move to assessment even if minor review remains."),
    buildHint28("c028-hint-07", "stem", "c028-task-assess", "select the most appropriate investigation", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "What must the chosen test answer?", "First establish physiology and focused findings. Then name the most urgent unresolved question, choose the test that answers it quickly and explain how stability affects timing.", "The investigation follows the clinical question.", "Minutes 2 to 5 combine assessment, interpretation and one justified test.", "At minute 5, change from analysis to explanation."),
    buildHint28("c028-hint-08", "stem", "c028-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What must Soraya hear?", "Explain the current serious concern, the evidence supporting it, what has already been done, the immediate next step and what remains uncertain.", "Use plain language and current facts.", "Minutes 5 to 7 belong to Soraya.", "Reserve the final minute for the treating teams."),
    buildHint28("c028-hint-09", "stem", "c028-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final task", "Which order keeps the handover useful?", "Give onset and progression, relevant background risk, physiology and abdominal findings, decisive evidence, treatment and the immediate next action.", "Carry the decision, not every normal result.", "The final minute transfers urgency and route.", "Keep a running summary as evidence arrives."),
    buildHint28("c028-hint-10", "run", "c028-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Beginning the case", "What do I do before listing causes?", "Approach Soraya, observe her distress and perfusion, identify yourself and start a short pain history while assessment is prepared.", "The first task is active now.", "You have two minutes for the focused history.", "Open with identity and consent."),
    buildHint28("c028-hint-11", "run", "c028-run-consent", "The pain is unbearable", ["acsqhc-deterioration-2026", "acsqhc-communication-2026"], "Responding to severe pain", "Should analgesia wait for diagnosis?", "No. Acknowledge the pain, arrange titrated analgesia and continue urgent assessment. Pain relief does not prevent serial examination.", "Treat suffering while the cause is investigated.", "Soraya is distressed but can answer.", "Clarify the exact onset and whether the severity has changed."),
    buildHint28("c028-hint-12", "run", "c028-run-pain-answer", "like a switch", ["wses-ami-2022"], "Hearing abrupt onset", "What does this phrase add?", "It confirms sudden onset rather than a gradual inflammatory pattern. Constant ten-out-of-ten pain with few associated symptoms keeps a vascular or ischaemic process prominent.", "Onset is more discriminating than a long symptom list here.", "The pain pattern is now strongly time-sensitive.", "Look for an embolic source or a recent medicine change."),
    buildHint28("c028-hint-13", "run", "c028-run-pain-answer", "No other symptoms", ["wses-ami-2022"], "Not requiring bowel symptoms", "Can bowel ischaemia occur without diarrhoea or bleeding?", "Yes. Early disease may present mainly with severe pain. The absence of bleeding, distension or previous post-meal pain does not make threatened bowel safe.", "Do not demand a complete textbook pattern.", "Severe abrupt pain remains unexplained.", "Use the medical and anticoagulant history next."),
    buildHint28("c028-hint-14", "run", "c028-run-background-answer", "stopped apixaban four days ago", ["wses-ami-2022"], "Linking embolic risk", "Why does this medicine timing matter?", "Atrial fibrillation can form atrial clot, and interruption of anticoagulation removes protection against embolism. This does not prove the destination of a clot, but it changes the prior probability sharply.", "Medicine timing can explain a new risk without assigning blame.", "Abrupt pain now sits beside a plausible embolic source.", "Request physiology and abdominal findings before naming the diagnosis."),
    buildHint28("c028-hint-15", "run", "c028-run-assessment-findings", "soft with minimal diffuse tenderness", ["wses-ami-2022", "acsqhc-deterioration-2026"], "Seeing the mismatch", "How can severe pain coexist with a soft abdomen?", "Early bowel ischaemia affects tissue perfusion before full-thickness injury irritates the peritoneum. Severe pain out of proportion to palpation is therefore a warning, not reassurance.", "A soft early abdomen can be part of the danger pattern.", "Soraya also has tachycardia, cool peripheries and delayed refill.", "Now state the leading interpretation from pain, risk and examination together."),
    buildHint28("c028-hint-16", "run", "c028-run-interpretation", "embolic acute mesenteric ischaemia", ["wses-ami-2022"], "Naming the working diagnosis", "What evidence now supports this label?", "Abrupt severe pain, atrial fibrillation, interrupted anticoagulation and little tenderness fit an acute arterial embolus before peritonitis develops.", "This is a time-critical working diagnosis, not a claim about bowel viability.", "Embolic acute mesenteric ischaemia is now the leading concern.", "Resuscitation and diagnostic imaging must proceed together."),
    buildHint28("c028-hint-17", "run", "c028-run-resuscitation", "Resuscitation and diagnosis proceed together", ["wses-ami-2022", "acsqhc-deterioration-2026"], "Starting treatment while imaging is arranged", "Why not finish the scan before calling teams?", "Bowel survival falls with delay. Surgical, vascular, anaesthetic and radiology teams can prepare while monitoring, access, analgesia and cautious fluid support begin.", "Do not turn urgent diagnosis into a waiting period.", "Support and specialist coordination are active.", "Choose tests that prepare treatment without postponing CT angiography."),
    buildHint28("c028-hint-18", "run", "c028-run-tests", "venous blood gas with lactate", ["wses-ami-2022"], "Using lactate correctly", "Is lactate the gatekeeper for imaging?", "No. It helps follow perfusion and later injury, but early bowel ischaemia can have a normal lactate. The clinical pattern determines whether imaging proceeds.", "A normal early marker cannot veto a time-sensitive diagnosis.", "Laboratory tests support care but do not replace angiographic imaging.", "Request the specific CT protocol now."),
    buildHint28("c028-hint-19", "run", "c028-run-cta-request", "urgent biphasic CT angiography", ["wses-ami-2022"], "Choosing the decisive scan", "Why biphasic and no oral contrast?", "Arterial and venous phases can show occlusion, perfusion and alternative vascular disease. Oral contrast adds delay and can obscure bowel-wall enhancement without helping this immediate decision.", "The scan is designed around blood flow.", "CT angiography is the key investigation.", "Do not wait for lactate or creatinine before proceeding."),
    buildHint28("c028-hint-20", "run", "c028-run-blood-results", "lactate 1.8 mmol/L", ["wses-ami-2022"], "Not being reassured by 1.8", "Does this normal lactate close the concern?", "No. Early or segmental ischaemia may not yet release enough lactate into systemic blood. The sudden pain, embolic risk and examination mismatch still carry more weight.", "Timing explains why a marker can lag behind disease.", "The laboratory results have not excluded bowel ischaemia.", "Proceed despite the mild kidney injury."),
    buildHint28("c028-hint-21", "run", "c028-run-results-interpretation", "Despite mild acute kidney injury, CT angiography proceeds", ["wses-ami-2022"], "Balancing contrast risk", "Why accept contrast with creatinine 139?", "The immediate risk of missed or delayed bowel infarction is much greater than the uncertain renal risk of necessary contrast. Hydration and renal follow-up can continue without withholding the diagnostic test.", "Compare risks on the same timescale.", "The scan remains urgent and justified.", "Read the vessel, bowel enhancement and complication signs separately."),
    buildHint28("c028-hint-22", "run", "c028-run-cta-result", "embolic occlusion of the superior mesenteric artery", ["wses-ami-2022"], "Localising the blockage", "What has the scan now proved?", "It demonstrates an arterial embolus in the major vessel supplying much of the small bowel, with reduced downstream enhancement. The diagnosis is confirmed and rapid reperfusion is required.", "The scan proves the vessel and threatened territory.", "Blood flow is blocked; the amount of irreversible injury remains uncertain.", "Now examine the signs that decide endovascular treatment versus laparotomy."),
    buildHint28("c028-hint-23", "run", "c028-run-cta-result", "no free gas, pneumatosis or portal venous gas", ["wses-ami-2022"], "Reading absent late signs", "Does their absence prove viable bowel?", "No. These are concerning signs when present, but their absence and a soft abdomen do not exclude evolving infarction. They support an endovascular-first option only with surgical oversight and continuing reassessment.", "Absence of late signs is not proof of healthy bowel.", "There is no current peritonism or definite transmural injury.", "Reassess perfusion and abdomen while treatment is coordinated."),
    buildHint28("c028-hint-24", "run", "c028-run-reassessment", "Repeat ABC, perfusion and abdominal examination", ["acsqhc-deterioration-2026", "wses-ami-2022"], "Watching for findings that require surgery", "What findings would change the plan?", "Worsening shock, rising lactate, new guarding or rigidity can signal progression and change the plan from endovascular treatment to urgent laparotomy.", "The plan must respond to new physiology.", "Soraya remains without peritonism but needs continuous review.", "Start anticoagulation after the relevant safety checks."),
    buildHint28("c028-hint-25", "run", "c028-run-heparin-plan", "full-dose intravenous unfractionated heparin", ["wses-ami-2022"], "Starting anticoagulation", "Why use heparin after an embolus is found?", "It reduces propagation and further thromboembolism while definitive reperfusion is arranged. Unfractionated heparin is rapidly adjustable around procedures, but active bleeding and heparin contraindications must be checked.", "Anticoagulation supports but does not replace reperfusion.", "The clot is confirmed and immediate treatment is coordinated.", "Choose the definitive route from peritonism, viability and available expertise."),
    buildHint28("c028-hint-26", "run", "c028-run-definitive-plan", "Urgent endovascular revascularisation is preferred", ["wses-ami-2022"], "Choosing endovascular treatment", "Why is this preferred now?", "She has a reachable arterial occlusion, no peritonism and available expertise. Restoring flow through the artery can be rapid and less invasive while general surgery remains ready to assess bowel if the picture changes.", "The preference depends on the current state, not the diagnosis alone.", "Endovascular reperfusion is the immediate route.", "Keep the conditions for laparotomy explicit."),
    buildHint28("c028-hint-27", "run", "c028-run-definitive-plan", "requires laparotomy", ["wses-ami-2022", "acsqhc-laparotomy-2026"], "Knowing when surgery takes over", "Which changes remove an endovascular-only plan?", "Peritonitis, deterioration, uncertain bowel viability, or failed or unavailable endovascular treatment require laparotomy for direct assessment, reperfusion and selective resection.", "A safe plan includes the threshold for changing route.", "General surgery remains part of care even without current peritonism.", "Now explain urgency without overwhelming Soraya."),
    buildHint28("c028-hint-28", "run", "c028-run-explanation", "a clot is blocking an artery supplying your bowel", ["acsqhc-communication-2026", "wses-ami-2022"], "Explaining the problem plainly", "What is the shortest accurate explanation?", "A clot has blocked bowel blood supply; delay can permanently damage bowel; specialists will restore flow through the artery, with surgery ready if direct assessment is needed.", "Give cause, consequence and action in that order.", "Soraya knows why treatment cannot wait.", "Answer the questions about blame and bowel removal separately."),
    buildHint28("c028-hint-29", "run", "c028-run-concern-response", "This is not your fault", ["acsqhc-communication-2026", "wses-ami-2022"], "Addressing blame and uncertainty", "Can I promise that no bowel will be removed?", "No. Explain that interruption increased clot risk but is not a moral failure. The scan has not proved full-thickness death, and prompt reperfusion may preserve bowel; resection depends on actual viability.", "Reassure without inventing certainty.", "Soraya understands both hope and the surgical backup.", "Use teach-back to confirm the time-critical point."),
    buildHint28("c028-hint-30", "run", "c028-run-teachback-answer", "restore blood flow before the bowel is permanently damaged", ["acsqhc-communication-2026", "wses-ami-2022"], "Checking the core message", "What does this answer confirm?", "Soraya has understood the clot, the reason for urgency and why surgery remains available. No extra lecture is needed before transfer.", "Teach-back checks your explanation, not her memory.", "The immediate decision is understood.", "Use the final minute for the surgical and vascular handover."),
    buildHint28("c028-hint-31", "run", "c028-run-handover", "She needs immediate revascularisation", ["acsqhc-communication-2026", "wses-ami-2022"], "Ending with the action", "What should the final sentence achieve?", "It tells the receiving teams that the vessel and threatened bowel are defined, current support and heparin are active, and reperfusion cannot wait, with laparotomy triggers clear.", "Finish with the current route and backup.", "The teams have the risk, evidence and immediate plan.", "Stop when the examiner ends the station."),
    buildHint28("c028-hint-32", "run", "c028-run-end", "The station is complete", ["amc-tips-2024"], "Finishing on time", "Should I add long-term anticoagulation?", "No. The station has ended, and that later decision depends on procedural findings and specialist review.", "Stop on the examiner's instruction.", "Case 28 is complete.", "Take one breath, then start the next stem from its first line.")
  ];
  caseTwentyEight.essentialHintIds = [
    "c028-hint-03", "c028-hint-06", "c028-hint-07", "c028-hint-08", "c028-hint-09", "c028-hint-12",
    "c028-hint-14", "c028-hint-15", "c028-hint-16", "c028-hint-19", "c028-hint-20", "c028-hint-22",
    "c028-hint-25", "c028-hint-26", "c028-hint-31", "c028-hint-32"
  ];
  var clockByHint28 = {
    "c028-hint-06": "Minutes 0 to 2: exact onset and progression, perfusion symptoms, relevant cardiac, vascular and abdominal history, medicines and important mimics.",
    "c028-hint-07": "Minutes 2 to 5: establish physiology, interpret the focused abdomen and choose one investigation that answers the most urgent unresolved question.",
    "c028-hint-16": "A time-critical working diagnosis now leads. Keep only alternatives that would change the immediate plan.",
    "c028-hint-24": "Any new peritonism or worsening perfusion resets the plan and may require immediate laparotomy.",
    "c028-hint-28": "Minutes 5 to 7: explain blocked blood flow, urgency, endovascular treatment and the surgical backup.",
    "c028-hint-31": "Final minute: transfer onset, embolic risk, current perfusion, CT location, heparin and immediate reperfusion route."
  };
  var deeperByHint28 = {
    "c028-hint-14": ["Atrial stasis can allow thrombus to form, commonly in the left atrial appendage. An embolus entering the systemic circulation can lodge in the superior mesenteric artery."],
    "c028-hint-15": ["Mucosal and muscular ischaemia causes intense visceral pain before full-thickness injury inflames the parietal peritoneum and produces guarding or rigidity."],
    "c028-hint-18": ["The liver can clear lactate from a limited ischaemic segment early. Systemic lactate often rises later with more extensive tissue injury or global hypoperfusion."],
    "c028-hint-19": ["Arterial phase imaging defines occlusion and vascular anatomy; venous phase imaging helps assess bowel enhancement, mesenteric veins and other abdominal pathology."],
    "c028-hint-23": ["Pneumatosis and portal venous gas can reflect advanced bowel-wall injury. Their absence is helpful context, but bowel viability remains a clinical and sometimes operative judgement."],
    "c028-hint-25": ["Unfractionated heparin has a short half-life and can be monitored and reversed, which is useful when an invasive procedure is imminent."]
  };
  caseTwentyEight.hints.forEach(function (hint) {
    if (clockByHint28[hint.id]) hint.clock = clockByHint28[hint.id];
    if (deeperByHint28[hint.id]) hint.deeper = deeperByHint28[hint.id];
  });
})();
