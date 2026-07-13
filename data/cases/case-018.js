(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-018",
    globalId: "CP-C018",
    registryId: "CP-P6-C001",
    displayNumber: "Case 18",
    title: "Dark vomit and black bowel motions",
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
          id: "c018-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c018-stem-patient",
          text: "Ms Fern Delaney, a 63-year-old woman, has presented after two episodes of dark vomit today and black bowel motions since yesterday. She reports upper abdominal discomfort and light-headedness."
        },
        {
          id: "c018-stem-start",
          text: "Fern is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c018-task-assess",
          text: "Obtain a focused history and assess Fern's current condition.",
          timing: "3 minutes"
        },
        {
          id: "c018-task-interpret",
          text: "Interpret the findings and investigation results and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c018-task-explain",
          text: "Explain your assessment and management plan to Fern.",
          timing: "1 minute"
        },
        {
          id: "c018-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c018-run-assessment",
          heading: "Focused assessment and early management",
          turns: [
            {
              id: "c018-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-start", text: "You may begin." }]
            },
            {
              id: "c018-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c018-run-first-action", text: "The doctor performs hand hygiene and approaches Fern." }]
            },
            {
              id: "c018-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-intro", text: "Hello Fern, I am Ushana, one of the emergency doctors. Can you confirm your full name? I will assess and treat you while we talk. Is that okay?" }]
            },
            {
              id: "c018-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-intro-answer", text: "Fern Delaney. Yes. I feel faint whenever I sit up." }]
            },
            {
              id: "c018-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-primary", text: "I assess airway, breathing, circulation, conscious state and exposure. Keep Fern fasting, position her safely and have suction ready. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check glucose, temperature and perfusion, and examine the abdomen. Please provide the findings." }]
            },
            {
              id: "c018-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c018-run-primary-findings", text: "Airway is patent with no current vomiting. Respiratory rate is 22, oxygen saturation 96% on room air and lungs are clear. Pulse is 116, blood pressure 104/66 and capillary refill three seconds. Fern is pale, cool and alert. Glucose is 6.2 mmol/L and temperature 36.5 degrees Celsius. There is mild epigastric tenderness without guarding, a mass or stigmata of chronic liver disease." }]
            },
            {
              id: "c018-turn-access",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-access", text: "She has impaired perfusion with probable gastrointestinal blood loss. Call the senior emergency doctor and gastroenterology team. Insert two large-bore intravenous cannulas, use small reassessed boluses of warmed crystalloid while blood is prepared, keep her warm and measure urine output." }]
            },
            {
              id: "c018-turn-access-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c018-run-access-action", text: "Monitoring is established, two intravenous cannulas are inserted and warmed fluid is commenced while blood is prepared." }]
            },
            {
              id: "c018-turn-history-bleeding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-history-bleeding", text: "Fern, what did the vomit and bowel motions look like? How often has this happened? Any fainting, fresh blood, severe pain, swallowing difficulty or weight loss?" }]
            },
            {
              id: "c018-turn-history-bleeding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-history-bleeding-answer", text: "The vomit looked like dark coffee grounds. I have had three sticky black motions. I nearly fainted in the bathroom. I have a burning pain high in my stomach but no severe pain, trouble swallowing or weight loss." }]
            },
            {
              id: "c018-turn-history-risk",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-history-risk", text: "Any previous ulcer or bleeding? Any liver disease or heavy alcohol use? What medicines have you taken, including painkillers, aspirin, steroids or blood thinners? Any allergies or other conditions?" }]
            },
            {
              id: "c018-turn-history-risk-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-history-risk-answer", text: "No previous bleeding or liver problem. I rarely drink. I started naproxen twice daily three weeks ago for knee pain. I take amlodipine for blood pressure, no aspirin or blood thinner, and I have no allergies or heart disease." }]
            }
          ]
        },
        {
          id: "c018-run-investigation",
          heading: "Investigation, deterioration and resuscitation",
          turns: [
            {
              id: "c018-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-investigations", text: "Send full blood count, group and crossmatch, blood gas with lactate, electrolytes, renal and liver function, coagulation studies, fibrinogen and ionised calcium. Obtain an ECG and repeat key results with her clinical course. What are the results?" }]
            },
            {
              id: "c018-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c018-run-results", text: "Haemoglobin is 121 g/L, platelets 238, urea 15.8 mmol/L, creatinine 102 micromol/L, lactate 3.9 mmol/L, base excess minus 5 and ionised calcium 1.10 mmol/L. INR is 1.1 and fibrinogen 2.5 g/L. Liver tests and ECG show no significant abnormality. Crossmatched blood is being prepared." }]
            },
            {
              id: "c018-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-interpretation", text: "This suggests an acute non-variceal upper gastrointestinal bleed, probably a naproxen-related peptic ulcer. The first haemoglobin may remain near normal before fluid redistribution and does not override poor perfusion, raised urea and lactate. Stop naproxen and consider high-dose intravenous proton-pump inhibitor treatment without delaying endoscopy." }]
            },
            {
              id: "c018-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c018-run-deterioration", text: "Fern vomits about 250 millilitres of fresh blood. She remains able to protect her airway. Pulse is now 132, blood pressure 82/48 and capillary refill five seconds." }]
            },
            {
              id: "c018-turn-critical",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-critical", text: "Activate the local major-haemorrhage protocol and request anaesthetic support. Continue suction and reassess her airway. Intubation is selective for impaired airway protection or severe ongoing haematemesis. Give warmed blood components guided by her response and repeated coagulation, fibrinogen, calcium, temperature and blood-gas results. Avoid excessive crystalloid. Do not give tranexamic acid routinely." }]
            },
            {
              id: "c018-turn-transfusion-logic",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-transfusion-logic", text: "Her active bleeding is treated from physiology; I will not wait for haemoglobin to fall. Once stable, use a restrictive red-cell strategy, generally below 70 g/L and targeting 70 to 90 without cardiovascular disease, individualised higher when cardiovascular disease is present." }]
            },
            {
              id: "c018-turn-resuscitation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c018-run-resuscitation-action", text: "The major-haemorrhage protocol is activated. Warmed blood components commence while airway equipment and the endoscopy team are prepared." }]
            }
          ]
        },
        {
          id: "c018-run-source-control",
          heading: "Endoscopic haemostasis and rebleeding plan",
          turns: [
            {
              id: "c018-turn-scope-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-scope-plan", text: "Endoscopy follows haemodynamic resuscitation and should occur within 24 hours. Fern's continuing instability despite adequate resuscitation requires expedited source control with gastroenterology and anaesthetics. Consider intravenous erythromycin for severe ongoing bleeding. Do not delay for nasogastric lavage." }]
            },
            {
              id: "c018-turn-scope-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c018-run-scope-result", text: "After initial blood resuscitation her pressure improves to 102/64. Endoscopy shows an actively oozing duodenal ulcer with a visible vessel." }]
            },
            {
              id: "c018-turn-haemostasis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-haemostasis", text: "Use combined endoscopic haemostasis, such as dilute adrenaline plus a clip or thermal therapy. Adrenaline injection must not be used alone. Continue high-dose proton-pump inhibitor treatment for 72 hours, test for Helicobacter pylori and confirm eradication after treatment." }]
            },
            {
              id: "c018-turn-rebleed",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-rebleed", text: "Monitor for recurrent bleeding. If she rebleeds, repeat endoscopy and consider an over-the-scope clip. If endoscopic haemostasis fails, proceed to transcatheter arterial embolisation, then surgery if embolisation is unavailable or unsuccessful." }]
            },
            {
              id: "c018-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-patient-question", text: "Was this caused by the naproxen? Am I going to be all right?" }]
            },
            {
              id: "c018-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-patient-answer", text: "Naproxen can damage the stomach or duodenal lining and probably contributed to this bleeding ulcer. We are replacing the blood you lost and will treat the bleeding point through a camera procedure. You are responding, but bleeding can recur, so we will watch you closely." }]
            },
            {
              id: "c018-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-time", text: "Please explain your assessment and management plan to Fern." }]
            }
          ]
        },
        {
          id: "c018-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c018-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-explanation", text: "Fern, the dark vomit and black motions came from bleeding high in the digestive tract. Your circulation then worsened, so we started urgent blood replacement while protecting your airway." }]
            },
            {
              id: "c018-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-plan", text: "The camera test found a bleeding ulcer, which will be treated during the procedure. Naproxen has been stopped. You will receive acid suppression, close monitoring and testing for a stomach infection. If bleeding returns, we can repeat treatment and escalate if needed." }]
            },
            {
              id: "c018-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-handover-prompt", text: "Please finish with a concise handover to the senior clinician." }]
            },
            {
              id: "c018-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c018-run-handover", text: "Fern Delaney is 63 with coffee-ground emesis, melaena and recent naproxen use. She deteriorated after 250 millilitres of fresh haematemesis to pulse 132 and pressure 82/48. Her airway remains protected with suction ready. Two large-bore lines, warming and major-haemorrhage protocol blood are underway. After initial resuscitation, endoscopy showed an actively oozing duodenal ulcer with a visible vessel requiring combined haemostasis, followed by high-dose proton-pump inhibitor treatment and rebleeding surveillance." }]
            },
            {
              id: "c018-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "National Blood Authority",
        title: "Patient blood management guideline for adults with critical bleeding",
        date: "Version 2.0, September 2025",
        url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding"
      },
      {
        organisation: "European Society of Gastrointestinal Endoscopy",
        title: "Peptic ulcer bleeding guideline update",
        date: "May 2026",
        url: "https://doi.org/10.1055/a-2863-8314"
      }
    ]
  });

  var caseEighteen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-018"; });
  function buildHint18(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseEighteen.masteryFocus = {
    case: "Assess dark vomit, black bowel motions and changing circulation, then use each disclosed finding to guide resuscitation, definitive treatment and transfer of care.",
    clinical: "In any active bleeding presentation, judge severity from physiology and trend, treat before a concentration result falls, and keep reassessment tied to source control."
  };
  caseEighteen.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "nba-critical-bleeding-2025", title: "Patient blood management guideline for adults with critical bleeding", organisation: "National Blood Authority", date: "Version 2.0, September 2025", url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding" },
    { id: "nice-ugib-2026", title: "Acute upper gastrointestinal bleeding in over 16s: management", organisation: "National Institute for Health and Care Excellence", date: "Current July 2026", url: "https://www.nice.org.uk/guidance/cg141" },
    { id: "esge-pub-2026", title: "Endoscopic diagnosis and management of peptic ulcer bleeding: ESGE Guideline Update 2026", organisation: "European Society of Gastrointestinal Endoscopy", date: "May 2026", url: "https://doi.org/10.1055/a-2863-8314" },
    { id: "nhs-naproxen-2026", title: "Naproxen", organisation: "National Health Service", date: "Reviewed June 2026", url: "https://www.nhs.uk/medicines/naproxen/" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseEighteen.reasoningCompass = {
    stem: {
      title: "First decide how unwell she may be",
      steps: [
        { time: "0 to 30 seconds", text: "Start with the combination of dark vomit, black bowel motions and light-headedness. Plan an immediate ABCDE assessment while the focused history begins." },
        { time: "30 to 60 seconds", text: "Prepare to clarify the amount and timing, test current perfusion, ask about pain, liver disease, previous bleeding and medicines, then request purposeful investigations." },
        { time: "1 to 2 minutes", text: "Set the task times before the run: assessment to minute 3, interpretation and management to minute 6, explanation to minute 7, handover to minute 8." }
      ],
      anchor: "Assess 0 to 3 | Interpret and manage 3 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Let physiology and new evidence set the next action",
      steps: [
        { time: "0 to 3 minutes", text: "Obtain ABCDE findings, support current circulation, activate help and take a short bleeding and medicine history while treatment proceeds." },
        { time: "3 to 6 minutes", text: "Interpret the tests beside the observations. If bleeding or perfusion worsens, interrupt the history, reassess ABCDE and escalate treatment before returning to the unfinished task." },
        { time: "6 to 8 minutes", text: "At the prompt, explain what has been found, what has been treated and what happens next. Then hand over the bleeding, deterioration, response and immediate plan." }
      ],
      anchor: "A worse airway, breathing, circulation or conscious state interrupts every other task and requires immediate reassessment and escalation."
    }
  };
  caseEighteen.hints = [
    buildHint18("c018-hint-01", "stem", "c018-stem-role", "emergency department", ["amc-spec-2026", "amc-tips-2024"], "Reading the setting", "What does the setting allow me to do immediately?", "Assessment, monitoring, intravenous access, blood preparation and senior help can begin together while you ask the first questions.", "This is not a history before treatment.", "The ED can support simultaneous assessment and action.", "Read the presentation for the first physiological risk."),
    buildHint18("c018-hint-02", "stem", "c018-stem-patient", "63-year-old woman", ["amc-tips-2024", "nba-critical-bleeding-2025"], "Reading age", "Does her age tell me the cause?", "No. It increases concern for significant bleeding and comorbidity, but the source and severity still have to come from the history, observations and examination.", "Age raises concern, but it does not identify the cause.", "Fern may have less reserve than a younger adult.", "Now look at exactly what she vomited and passed."),
    buildHint18("c018-hint-03", "stem", "c018-stem-patient", "two episodes of dark vomit today", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Reading dark vomit", "Is dark vomit definitely blood?", "It can be altered blood, but the word dark is not enough. Clarify whether it looked like coffee grounds or fresh blood, how much there was and whether vomiting is continuing.", "Do not name the source from colour alone.", "Possible bleeding is present; its appearance and activity are not yet defined.", "Connect it with the bowel motions."),
    buildHint18("c018-hint-04", "stem", "c018-stem-patient", "black bowel motions since yesterday", ["nba-critical-bleeding-2025"], "Reading black bowel motions", "What detail makes black stool clinically useful?", "Ask whether it was sticky, tar-like and unusually offensive, and consider iron or bismuth as alternatives. Together with dark vomit, digested blood becomes a serious possibility.", "Black colour alone is suggestive, not conclusive.", "Both symptoms may represent digested blood, but neither identifies the source.", "Check whether circulation may already be affected."),
    buildHint18("c018-hint-05", "stem", "c018-stem-patient", "upper abdominal discomfort and light-headedness", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Reading the added symptoms", "Which word changes the urgency?", "Light-headedness may reflect reduced cerebral perfusion from blood loss. Upper abdominal discomfort may help locate the cause, but perfusion comes first.", "Do not let the pain description delay observations.", "Possible bleeding is now accompanied by a circulation warning.", "Plan ABCDE, monitoring and access before a long history."),
    buildHint18("c018-hint-06", "stem", "c018-stem-start", "awake and able to answer questions", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Using current alertness", "She is awake. Can I assume she is stable?", "No. An alert person can still have tachycardia and poor peripheral perfusion, then deteriorate quickly if bleeding continues.", "Conscious state is one observation, not a stability decision.", "You can obtain consent and a short history while assessing her.", "Request the full ABCDE findings early."),
    buildHint18("c018-hint-07", "stem", "c018-stem-start", "findings and investigation results when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning information requests", "What will the station only give me if I ask?", "Verbalise a complete initial assessment, then request tests that answer blood loss, perfusion, coagulation, organ function and transfusion preparation.", "Do not wait for observations or results to appear.", "Your requests determine what evidence becomes available.", "Anchor each task before the encounter starts."),
    buildHint18("c018-hint-08", "stem", "c018-task-assess", "focused history and assess Fern's current condition", ["amc-spec-2026", "amc-tips-2024", "acsqhc-deterioration-2026"], "Anchoring task one", "Does focused history mean history first?", "No. Here it means ABCDE and immediate treatment beside short questions about bleeding, fainting, pain, previous disease and medicines.", "Danger can interrupt the interview.", "The first three minutes combine assessment, action and focused history.", "Finish with a clear statement of current perfusion."),
    buildHint18("c018-hint-09", "stem", "c018-task-interpret", "Interpret the findings and investigation results and discuss your management", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task two", "What does interpret require beyond reading numbers?", "Link each result to the clinical state, state what it does and does not prove, then choose treatment from the current physiology and response.", "A normal-looking number cannot cancel abnormal perfusion.", "Minutes 3 to 6 are interpretation plus management.", "Expect a change in condition and be ready to reassess."),
    buildHint18("c018-hint-10", "stem", "c018-task-explain", "Explain your assessment and management plan to Fern", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What changes at minute six?", "Stop discussing with the examiner and speak directly to Fern. Explain the problem, what has already been done, the next procedure and the remaining risk in plain language.", "Do not continue listing tests after the prompt.", "Minute 6 to 7 belongs to Fern.", "Keep the last minute for the senior handover."),
    buildHint18("c018-hint-11", "stem", "c018-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final task", "Which facts deserve the final minute?", "Give identity, bleeding features, physiological deterioration, key results, treatment and response, confirmed source, definitive treatment and immediate rebleeding risk.", "Concise means selected, not rushed.", "The handover must transfer current risk and action.", "Keep a short running summary as the case changes."),
    buildHint18("c018-hint-12", "run", "c018-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is the first visible move?", "Approach Fern safely, identify yourself and begin assessment without spending time announcing a long plan.", "The first task is already running.", "You have three minutes for assessment and early management.", "Perform hand hygiene and approach the patient."),
    buildHint18("c018-hint-13", "run", "c018-run-first-action", "performs hand hygiene and approaches Fern", ["amc-tips-2024", "acsqhc-communication-2026"], "Making the opening efficient", "Do I need to speak to the examiner first?", "No. Start with Fern, observe her colour and work of breathing, and let the team begin monitoring as you introduce yourself.", "Visible patient care comes before commentary.", "Contact has begun and immediate appearance can be assessed.", "Confirm identity and consent to simultaneous assessment and treatment."),
    buildHint18("c018-hint-14", "run", "c018-run-intro", "assess and treat you while we talk", ["acsqhc-communication-2026", "acsqhc-deterioration-2026"], "Explaining simultaneous care", "Why say this at the start?", "It prepares Fern for several actions at once and gives a clear reason for brief, direct questions while urgent care proceeds.", "Consent remains possible during urgent treatment when she can decide.", "Fern knows that assessment and treatment will occur together.", "Listen to her first answer for a circulation warning."),
    buildHint18("c018-hint-15", "run", "c018-run-intro-answer", "feel faint whenever I sit up", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Hearing positional faintness", "Why does sitting up matter?", "Symptoms on sitting suggest that her circulation may not maintain cerebral perfusion when posture changes. Keep her safely positioned and obtain observations now.", "Do not ask her to stand for a postural reading.", "The history already suggests reduced circulating volume or ongoing loss.", "Request ABCDE and begin practical precautions."),
    buildHint18("c018-hint-16", "run", "c018-run-primary", "Keep Fern fasting, position her safely and have suction ready", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Preparing for another vomit", "Why fasting and suction before the cause is known?", "Further haematemesis can threaten the airway and an urgent procedure may be needed. Safe positioning, suction and repeated airway checks reduce avoidable delay.", "Preparation does not mean routine intubation.", "Airway is currently assessable, but vomiting may recur.", "Read the requested respiratory and circulatory findings separately."),
    buildHint18("c018-hint-17", "run", "c018-run-primary-findings", "Respiratory rate is 22", ["acsqhc-deterioration-2026"], "Reading breathing", "Does a saturation of 96% clear breathing?", "It shows adequate oxygenation on room air now. A respiratory rate of 22 may reflect physiological stress, so continue monitoring rather than giving oxygen automatically.", "Normal saturation does not explain the tachypnoea.", "Airway is patent and lungs are clear; breathing is currently maintained.", "Now judge circulation from pulse, pressure, refill and skin."),
    buildHint18("c018-hint-18", "run", "c018-run-primary-findings", "Pulse is 116, blood pressure 104/66 and capillary refill three seconds", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Reading perfusion", "The pressure is above 100. Is that reassuring?", "No. Tachycardia, delayed refill, pallor and cool skin show impaired perfusion even before severe hypotension appears.", "Use the whole circulation examination, not one pressure value.", "Fern is alert but physiologically compromised.", "Check the abdomen for a complication or another clue to source."),
    buildHint18("c018-hint-19", "run", "c018-run-primary-findings", "mild epigastric tenderness without guarding", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Using the abdominal examination", "What does the absence of guarding change?", "It makes perforation or peritonitis less likely at this moment. Mild epigastric tenderness may fit mucosal disease, but it does not identify the bleeding lesion.", "A soft abdomen does not make the blood loss safe.", "There is no current peritoneal sign or obvious chronic liver sign.", "Treat poor perfusion while the source is clarified."),
    buildHint18("c018-hint-20", "run", "c018-run-access", "two large-bore intravenous cannulas", ["nba-critical-bleeding-2025"], "Acting on poor perfusion", "Why call teams and prepare blood before the haemoglobin returns?", "Her symptoms and circulation already support significant blood loss. Large access, warming, crossmatched blood preparation, small reassessed crystalloid boluses and urine monitoring can start now.", "Do not wait for laboratory confirmation of shock.", "Early support and senior involvement are underway.", "Keep the crystalloid measured and reassess after each intervention."),
    buildHint18("c018-hint-21", "run", "c018-run-access-action", "warmed fluid is commenced while blood is prepared", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Using parallel action", "Should I stop asking questions until every intervention is finished?", "No. The team can establish monitoring and access while you continue a short history, provided you watch Fern and interrupt if she worsens.", "Parallel care saves time only when reassessment continues.", "Initial circulation support has begun.", "Clarify the appearance, amount and consequences of the bleeding."),
    buildHint18("c018-hint-22", "run", "c018-run-history-bleeding", "what did the vomit and bowel motions look like", ["nba-critical-bleeding-2025", "amc-tips-2024"], "Focusing the bleeding history", "What am I trying to separate with these questions?", "Appearance and frequency estimate whether blood is altered or fresh and whether loss is continuing. Fainting tests severity; severe pain, dysphagia and weight loss test important alternative causes or complications.", "Ask one short question at a time if Fern is unwell.", "The history now has a purpose: activity, severity and source clues.", "Use her description before naming the bleeding site."),
    buildHint18("c018-hint-23", "run", "c018-run-history-bleeding-answer", "dark coffee grounds", ["nice-ugib-2026"], "Recognising altered blood", "Does coffee-ground vomit settle where the blood came from?", "Together with black sticky stool, it strongly supports bleeding from the upper gastrointestinal tract, but endoscopy is still needed to identify the lesion.", "You can name the bleeding region now, not the exact cause.", "An upper gastrointestinal bleed is now the leading diagnosis.", "Judge its severity from the repeated loss and faintness."),
    buildHint18("c018-hint-24", "run", "c018-run-history-bleeding-answer", "three sticky black motions", ["nice-ugib-2026", "nba-critical-bleeding-2025"], "Confirming melaena and severity", "Why does nearly fainting matter more than counting motions?", "The sticky black description supports melaena, while near-syncope shows that the loss is affecting perfusion. Neither stool count nor colour measures the blood volume accurately.", "Near-syncope and impaired circulation determine urgency; the number of motions does not.", "The bleed is clinically significant and may still be active.", "Use the pain features to refine the likely lesion without closing the assessment."),
    buildHint18("c018-hint-25", "run", "c018-run-history-bleeding-answer", "burning pain high in my stomach", ["nice-ugib-2026"], "Using the pain pattern", "Does burning epigastric pain prove an ulcer?", "No. It makes peptic disease plausible, while the absence of severe pain, dysphagia and weight loss reduces some complications and alternatives but does not exclude them.", "The pain makes peptic disease plausible, but the lesion is still unconfirmed.", "Upper gastrointestinal bleeding is established; its cause remains provisional.", "Ask about ulcer, liver and medicine risks next."),
    buildHint18("c018-hint-26", "run", "c018-run-history-risk", "previous ulcer or bleeding", ["nice-ugib-2026", "amc-tips-2024"], "Checking cause and treatment modifiers", "Why ask liver, alcohol and medicines together?", "They separate common non-variceal causes from possible portal hypertension and identify drugs that injure mucosa, impair platelets or anticoagulate blood.", "A negative history can lower concern without eliminating a cause.", "No liver or medicine cause has been established yet.", "Listen for recent NSAID exposure and antithrombotic use."),
    buildHint18("c018-hint-27", "run", "c018-run-history-risk-answer", "started naproxen twice daily three weeks ago", ["nhs-naproxen-2026", "esge-pub-2026"], "Connecting naproxen", "Is three weeks enough to matter?", "Yes. Naproxen can cause stomach or duodenal ulceration and bleeding. The timing and epigastric pain make a peptic ulcer more likely, but only endoscopy can confirm it.", "A strong medicine link is still not visual proof.", "A naproxen-related ulcer is now the leading cause of the upper gastrointestinal bleed.", "Use the tests to judge blood loss, perfusion and treatment safety."),
    buildHint18("c018-hint-28", "run", "c018-run-investigations", "full blood count, group and crossmatch", ["nba-critical-bleeding-2025", "esge-pub-2026"], "Making each test answer a question", "Why request this group of tests?", "Full blood count gives a baseline, crossmatch prepares compatible blood, gas and lactate assess perfusion, renal and liver tests add severity and cause clues, and coagulation, fibrinogen and calcium guide replacement during major bleeding.", "Investigations support treatment; they must not delay it.", "Access, warming and blood preparation are already in progress.", "Interpret the results beside the observations, not in isolation."),
    buildHint18("c018-hint-29", "run", "c018-run-results", "Haemoglobin is 121 g/L", ["nba-critical-bleeding-2025", "esge-pub-2026"], "Not being reassured by the first haemoglobin", "How can she be bleeding with a near-normal haemoglobin?", "An early haemoglobin is a concentration. Acute loss removes plasma and red cells together, so the value may not fall until fluid redistribution or treatment occurs.", "The circulation examination remains more urgent than this single value.", "The haemoglobin does not cancel the clinical blood loss.", "Now use urea, lactate and base excess to understand the rest of the physiology."),
    buildHint18("c018-hint-30", "run", "c018-run-results", "urea 15.8 mmol/L", ["esge-pub-2026", "nba-critical-bleeding-2025"], "Reading the supporting results", "What joins raised urea, lactate 3.9 and base excess minus 5?", "Raised urea can accompany digestion of upper gastrointestinal blood and reduced renal perfusion. Raised lactate and a negative base excess support tissue hypoperfusion. Calcium is already slightly low and needs monitoring if transfusion expands.", "No single result measures the total blood loss.", "The laboratory pattern supports significant upper gastrointestinal bleeding with impaired perfusion.", "State the leading diagnosis and begin cause-directed treatment without delaying definitive assessment."),
    buildHint18("c018-hint-31", "run", "c018-run-interpretation", "acute non-variceal upper gastrointestinal bleed", ["esge-pub-2026", "nhs-naproxen-2026"], "Naming the working diagnosis", "Have the clues now earned this conclusion?", "Yes. Coffee-ground emesis, melaena, epigastric pain, no liver history or chronic liver signs, and recent naproxen support a non-variceal upper gastrointestinal bleed from a peptic ulcer.", "Keep the cause probable until endoscopy shows it.", "Upper gastrointestinal bleeding is established; a naproxen-related peptic ulcer is the most likely cause.", "Stop the offending medicine and arrange treatment that does not delay endoscopy."),
    buildHint18("c018-hint-32", "run", "c018-run-interpretation", "Stop naproxen and consider high-dose intravenous proton-pump inhibitor", ["esge-pub-2026", "nhs-naproxen-2026"], "Starting cause-directed treatment", "Why give a proton-pump inhibitor before the camera test?", "It can reduce high-risk endoscopic appearances and is reasonable in acute upper gastrointestinal bleeding, but it must not delay resuscitation or early endoscopy.", "Medication is not source control.", "Naproxen is stopped and acid suppression is being considered.", "Watch Fern continuously because the bleed may become overtly active."),
    buildHint18("c018-hint-33", "run", "c018-run-deterioration", "vomits about 250 millilitres of fresh blood", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Responding to deterioration", "What changes now?", "Fresh haematemesis with pulse 132, pressure 82/48 and refill five seconds shows active major bleeding with severe circulatory compromise. Stop the history and repeat ABCDE now.", "The previous haemoglobin is no longer relevant to the urgency.", "Fern has deteriorated into haemorrhagic shock while still protecting her airway.", "Activate major-haemorrhage support and bring anaesthetics and gastroenterology to the bedside."),
    buildHint18("c018-hint-34", "run", "c018-run-critical", "Activate the local major-haemorrhage protocol", ["nba-critical-bleeding-2025", "esge-pub-2026"], "Escalating resuscitation", "What must happen together?", "Call senior, anaesthetic and endoscopy support; maintain suction and repeated airway assessment; give warmed blood components under the local protocol; and follow coagulation, fibrinogen, calcium, temperature and gas results.", "Routine intubation can cause harm; use it when airway protection or ongoing haematemesis requires it.", "Resuscitation now follows active blood loss and physiological response.", "Limit crystalloid and keep definitive haemostasis moving."),
    buildHint18("c018-hint-35", "run", "c018-run-critical", "Do not give tranexamic acid routinely", ["esge-pub-2026", "nba-critical-bleeding-2025"], "Avoiding an unhelpful treatment", "Why not give tranexamic acid for every major bleed?", "Evidence in acute gastrointestinal bleeding does not support routine tranexamic acid. ESGE does not recommend it for acute non-variceal upper gastrointestinal bleeding.", "In gastrointestinal bleeding, leave tranexamic acid out unless there is a separate indication.", "Blood replacement, monitoring and definitive haemostasis remain the priorities.", "Use the clinical response to guide the next blood decision."),
    buildHint18("c018-hint-36", "run", "c018-run-transfusion-logic", "treated from physiology", ["nba-critical-bleeding-2025", "esge-pub-2026"], "Separating active resuscitation from a stable threshold", "When does the 70 g/L threshold apply?", "It guides red-cell transfusion once a patient is haemodynamically stable. It does not tell you to withhold blood during active major bleeding and shock. Cardiovascular disease may justify a higher individual threshold.", "Do not apply a stable-patient threshold to an unstable patient.", "Fern needs blood now because of active loss and shock, not because of the first haemoglobin.", "Continue component-guided resuscitation and prepare definitive control."),
    buildHint18("c018-hint-37", "run", "c018-run-resuscitation-action", "Warmed blood components commence", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Checking the response", "What do I reassess as blood starts?", "Repeat airway, vomiting, pulse, pressure, refill, conscious state, urine output, temperature, gas, calcium and coagulation. Improvement determines readiness for the procedure; failure demands faster escalation.", "Starting blood is not the end of resuscitation.", "Major-haemorrhage treatment and procedure preparation are occurring together.", "State when endoscopy should occur and what instability changes."),
    buildHint18("c018-hint-38", "run", "c018-run-scope-plan", "Endoscopy follows haemodynamic resuscitation", ["esge-pub-2026"], "Timing definitive assessment", "Within 24 hours or immediately?", "Early endoscopy should follow resuscitation and occur within 24 hours. If instability persists despite adequate resuscitation, expedited endoscopy is justified. Intravenous erythromycin may improve visualisation in severe ongoing bleeding; routine nasogastric lavage is not required.", "Resuscitate first; persistent instability makes endoscopy more urgent.", "Fern needs early endoscopy, faster if her shock persists despite adequate support.", "Read her response and the endoscopic finding before choosing haemostasis."),
    buildHint18("c018-hint-39", "run", "c018-run-scope-result", "pressure improves to 102/64", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Using the response", "Does one improved pressure mean the danger has passed?", "No. It shows an initial response to blood and makes the procedure safer, but the recent shock and active bleeding still require definitive control and close monitoring.", "The pressure has improved, but recent shock and active bleeding still require endoscopic control and close monitoring.", "Circulation has improved enough to proceed with urgent source assessment.", "Now let the camera finding define the lesion."),
    buildHint18("c018-hint-40", "run", "c018-run-scope-result", "actively oozing duodenal ulcer with a visible vessel", ["esge-pub-2026"], "Confirming the source", "What is now proven?", "Endoscopy has confirmed a high-risk bleeding duodenal ulcer. Active oozing and a visible vessel require endoscopic haemostasis rather than medication alone.", "The probable ulcer is now directly seen.", "The diagnosis and bleeding point are confirmed.", "Choose a haemostatic method that gives durable control."),
    buildHint18("c018-hint-41", "run", "c018-run-haemostasis", "combined endoscopic haemostasis", ["esge-pub-2026"], "Treating the vessel", "Why is adrenaline injection not enough by itself?", "Adrenaline can slow bleeding and improve the view, but durable control requires a second method such as a clip or thermal therapy. An over-the-scope clip may be another first-line option in experienced hands.", "Temporary slowing is not durable haemostasis.", "The ulcer requires mechanical or thermal control, with adrenaline only as an adjunct.", "After haemostasis, reduce early rebleeding risk and address the cause."),
    buildHint18("c018-hint-42", "run", "c018-run-haemostasis", "Continue high-dose proton-pump inhibitor treatment for 72 hours", ["esge-pub-2026"], "Protecting the treated site", "What needs to continue after the bleeding point is treated?", "High-dose proton-pump inhibitor treatment for 72 hours reduces rebleeding after high-risk ulcer haemostasis. Test for Helicobacter pylori, treat it if present and later confirm eradication.", "Successful endoscopy does not finish cause prevention.", "Haemostasis, acid suppression and H. pylori management now work together.", "Prepare a clear plan if bleeding returns."),
    buildHint18("c018-hint-43", "run", "c018-run-rebleed", "If she rebleeds, repeat endoscopy", ["esge-pub-2026"], "Planning for recurrent bleeding", "What is the escalation sequence?", "Repeat upper gastrointestinal endoscopy with haemostasis, considering an over-the-scope clip. If the second endoscopic attempt fails, use transcatheter arterial embolisation; surgery follows when embolisation is unavailable or unsuccessful.", "Rebleeding needs renewed source control, not observation alone.", "A staged rescue plan is ready before deterioration recurs.", "Answer Fern's concern without promising a fixed outcome."),
    buildHint18("c018-hint-44", "run", "c018-run-patient-question", "Am I going to be all right", ["acsqhc-communication-2026", "esge-pub-2026"], "Answering the concern", "How honest should I be when she has improved?", "Say that the team has identified and is treating the bleeding point, and that her response is encouraging. Also explain that rebleeding can occur and is why close monitoring continues.", "Do not replace uncertainty with reassurance you cannot support.", "Fern needs cause, current response and remaining risk.", "Connect naproxen to the ulcer carefully, then state what the team is doing."),
    buildHint18("c018-hint-45", "run", "c018-run-patient-answer", "probably contributed to this bleeding ulcer", ["nhs-naproxen-2026", "acsqhc-communication-2026"], "Explaining causation", "Why say probably rather than definitely?", "Naproxen is a recognised ulcer and bleeding risk and the timing fits, but other contributors such as H. pylori still need testing.", "Say ‘probably’ because naproxen fits, while H. pylori and other contributors are still being checked.", "The likely medicine contribution and current treatment have been explained.", "At the examiner prompt, stop answering this single question and give the full one-minute explanation."),
    buildHint18("c018-hint-46", "run", "c018-run-time", "Please explain your assessment and management plan", ["amc-spec-2026", "amc-tips-2024"], "Switching to explanation", "What should the first sentence do?", "Name the bleeding region and explain why circulation worsened, then cover blood replacement, the camera procedure, the confirmed ulcer, prevention and the rebleeding plan.", "This is Fern's explanation, not a technical handover.", "One minute remains before the senior handover.", "Use short sentences and check that the sequence is clear."),
    buildHint18("c018-hint-47", "run", "c018-run-explanation", "bleeding high in the digestive tract", ["acsqhc-communication-2026", "esge-pub-2026"], "Giving the diagnosis in plain language", "Why start with what the symptoms meant?", "It connects the dark vomit and black motions to one understandable problem, then explains why urgent blood replacement and airway precautions were needed.", "Cause and treatment are easier to follow when linked.", "Fern now knows what happened and why the response was urgent.", "Continue with what the procedure found and how recurrence will be managed."),
    buildHint18("c018-hint-48", "run", "c018-run-plan", "camera test found a bleeding ulcer", ["esge-pub-2026", "nhs-naproxen-2026", "acsqhc-communication-2026"], "Explaining the next plan", "What information gives Fern useful control?", "Tell her that the ulcer will be treated during endoscopy, naproxen is stopped, acid suppression and H. pylori testing follow, and renewed bleeding has a clear escalation plan.", "Do not overwhelm her with device names.", "The explanation covers diagnosis, treatment, prevention and contingency.", "Stop when the examiner asks for the handover."),
    buildHint18("c018-hint-49", "run", "c018-run-handover-prompt", "concise handover to the senior clinician", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps this handover useful?", "Identity and presentation, deterioration, current airway, resuscitation, response, endoscopic diagnosis, haemostasis plan and rebleeding risk. Lead with the event that changed urgency.", "Do not repeat the entire history.", "The receiving clinician needs current risk and action in one minute.", "Give the physiological nadir and what is underway now."),
    buildHint18("c018-hint-50", "run", "c018-run-handover", "deteriorated after 250 millilitres of fresh haematemesis", ["acsqhc-communication-2026", "nba-critical-bleeding-2025", "esge-pub-2026"], "Transferring the critical facts", "Why include both the deterioration and the endoscopy result?", "The deterioration shows how unstable Fern became; the endoscopy result names the treatable source. Together they tell the senior what has happened, what is working and what could recur.", "A handover must include trend, not only the latest pressure.", "Bleeding severity, resuscitation, confirmed source and definitive plan have been transferred.", "Stop and wait for the examiner."),
    buildHint18("c018-hint-51", "run", "c018-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Do I need to add one more detail?", "No. The station has ended. Pause briefly, then start the next case from its own stem and task verbs.", "Extra speech after release cannot improve this handover.", "Case 18 is complete.", "Read the next stem from the first line.")
  ];
  caseEighteen.hints.forEach(function (hint, index) { hint.id = "c018-hint-" + String(index + 1).padStart(2, "0"); });
})();
