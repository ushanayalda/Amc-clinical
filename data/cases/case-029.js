(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-029",
    globalId: "CP-C029",
    registryId: "CP-P9-C003",
    displayNumber: "Case 29",
    title: "Upper abdominal pain that has spread",
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
          id: "c029-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c029-stem-patient",
          text: "Ms Inez Calder, a 48-year-old woman, has presented with upper abdominal pain that began this morning and has become more widespread."
        },
        {
          id: "c029-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c029-task-history",
          text: "Take a focused history from Inez.",
          timing: "2 minutes"
        },
        {
          id: "c029-task-assess",
          text: "Perform a focused assessment and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c029-task-explain",
          text: "Explain your assessment and management plan to Inez.",
          timing: "2 minutes"
        },
        {
          id: "c029-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c029-run-history",
          heading: "Focused history and initial assessment",
          turns: [
            {
              id: "c029-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-start", text: "You may begin." }]
            },
            {
              id: "c029-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c029-run-first-action", text: "The doctor performs hand hygiene and approaches Inez." }]
            },
            {
              id: "c029-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your full name. May I ask about your pain and examine you?" }]
            },
            {
              id: "c029-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-consent", text: "Inez Calder. Yes. It began high up this morning, but now my whole abdomen hurts." }]
            },
            {
              id: "c029-turn-pain-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-pain-question", text: "Did it start suddenly or gradually? Where, how severe, and how has it changed? Do movement or coughing affect it?" }]
            },
            {
              id: "c029-turn-pain-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-pain-answer", text: "It struck suddenly in the pit of my stomach during breakfast, like a knife. Over hours it spread everywhere. It is constant, nine out of ten, and movement hurts." }]
            },
            {
              id: "c029-turn-associated-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-associated-question", text: "Any vomiting, blood, black stool, swelling, bowel or urinary change, fever, faintness, chest pain, vaginal bleeding or chance of pregnancy?" }]
            },
            {
              id: "c029-turn-associated-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-associated-answer", text: "I vomited twice without blood and feel feverish, faint and swollen. No black stool, bowel or urinary change, chest pain or bleeding. My period was two weeks ago and pregnancy is unlikely." }]
            },
            {
              id: "c029-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-background-question", text: "Any indigestion, ulcer, Helicobacter pylori, gallstones or surgery? What medicines, including anti-inflammatories, allergies, smoking or alcohol?" }]
            },
            {
              id: "c029-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-background-answer", text: "I have indigestion but no diagnosed ulcer or Helicobacter. I have taken daily naproxen for knee pain for three weeks. I smoke ten cigarettes daily, rarely drink and have no surgery or allergies." }]
            },
            {
              id: "c029-turn-examination-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-examination-request", text: "I assess airway, breathing, circulation and conscious state, record observations and glucose, then inspect, listen, percuss and gently palpate the abdomen. Please provide the findings." }]
            },
            {
              id: "c029-turn-initial-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c029-run-initial-findings", text: "Airway is patent. Inez is alert and distressed. Respiratory rate 24, saturation 97% on air, pulse 108, blood pressure 102/66, temperature 38.1 degrees Celsius and glucose 6.8 mmol/L. Her abdomen is mildly distended with marked epigastric tenderness, guarding and quiet sounds. Tenderness is spreading without rigidity. There is no mass or hernia." }]
            },
            {
              id: "c029-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-interpretation", text: "Sudden epigastric pain, naproxen exposure, dyspepsia, fever and evolving peritonism suggest a perforated peptic ulcer with intra-abdominal sepsis. Alternatives include pancreatitis, biliary disease and another perforated viscus." }]
            }
          ]
        },
        {
          id: "c029-run-management",
          heading: "Resuscitation, results and serial reassessment",
          turns: [
            {
              id: "c029-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-escalation", text: "Move Inez to resuscitation. Call senior emergency, surgical, anaesthetic and intensive care clinicians now. Continue ABC, cardiac, blood pressure and saturation monitoring, and insert two large-bore intravenous cannulas. Give oxygen if hypoxaemic." }]
            },
            {
              id: "c029-turn-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-tests", text: "Send FBC, U&E, LFTs, lipase, coagulation, VBG, lactate, glucose, pregnancy test, group and crossmatch. Take blood cultures unless they delay antibiotics. Keep her nil by mouth and, with consent, catheterise for hourly urine output." }]
            },
            {
              id: "c029-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-treatment", text: "Give titrated intravenous analgesia and antiemetic. Start small balanced-crystalloid boluses, reassessing each. Give broad-spectrum intravenous antibiotics now per local protocol, covering gram-positive, gram-negative and anaerobic organisms, plus intravenous proton-pump inhibitor. Routine empirical antifungal treatment is not indicated." }]
            },
            {
              id: "c029-turn-investigation-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-investigation-request", text: "Arrange an ECG and CT abdomen and pelvis with intravenous contrast now, and review the initial erect chest X-ray while treatment continues. Please provide available results." }]
            },
            {
              id: "c029-turn-investigation-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c029-run-investigation-results", text: "ECG shows sinus tachycardia. White-cell count is 17.8 x 10^9/L, haemoglobin 128 g/L, creatinine 112 micromol/L, venous pH 7.31 and lactate 3.6 mmol/L. Liver tests and lipase are normal, pregnancy test negative and blood crossmatched. Erect chest X-ray shows no visible free gas." }]
            },
            {
              id: "c029-turn-film-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-film-interpretation", text: "The negative X-ray does not exclude perforation or overrule peritonism. Proceed with CT only if it cannot delay very urgent surgery. Surgical review proceeds now." }]
            },
            {
              id: "c029-turn-deterioration",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-deterioration", text: "The pain is everywhere. I feel cold and dizzy." }]
            },
            {
              id: "c029-turn-reassessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-reassessment", text: "I repeat ABC, conscious state, abdominal examination, capillary refill, urine output, VBG and lactate." }]
            },
            {
              id: "c029-turn-serial-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c029-run-serial-findings", text: "After initial crystalloid, pulse is 124, blood pressure 86/52, respiratory rate 28, temperature 38.5 degrees Celsius and capillary refill four seconds. Peripheries are cool, urine output absent and lactate 5.1 mmol/L. Her abdomen is now rigid with generalised guarding and rebound." }]
            },
            {
              id: "c029-turn-shock-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-shock-plan", text: "This is shock from intra-abdominal sepsis with generalised peritonitis. Critical care starts noradrenaline now, targeting MAP at least 65 mmHg and perfusion. Individualise further small crystalloid boluses with reassessment. Do not wait for CT. She needs washout and repair, not antibiotics alone, for source control as soon as possible and within three hours in septic shock." }]
            }
          ]
        },
        {
          id: "c029-run-communication",
          heading: "Explanation, consent, teach-back and handover",
          turns: [
            {
              id: "c029-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-explanation-prompt", text: "Please explain your assessment and plan to Inez." }]
            },
            {
              id: "c029-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-explanation", text: "Inez, I am concerned an ulcer has made a hole in your stomach or bowel. Leakage is contaminating your abdomen and affecting your circulation. We are treating pain, infection and blood pressure while surgical and anaesthetic teams prepare emergency surgery." }]
            },
            {
              id: "c029-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-concern", text: "If the X-ray was normal, could we wait for CT or see whether antibiotics work?" }]
            },
            {
              id: "c029-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-concern-response", text: "X-rays can miss perforation. A rigid abdomen and falling pressure make waiting dangerous. CT helps only if it does not delay surgery. Antibiotics cannot close the hole or clear contamination. The surgeon will discuss the urgent operation, risks and consent." }]
            },
            {
              id: "c029-turn-ng-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-ng-consent", text: "Because you are vomiting and distended, a soft tube through your nose can drain the stomach and reduce vomiting. It can be uncomfortable. May we insert it?" }]
            },
            {
              id: "c029-turn-ng-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-ng-answer", text: "Yes. Please do what is needed." }]
            },
            {
              id: "c029-turn-follow-up",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-follow-up", text: "After recovery we will test for Helicobacter pylori, treat it if present, stop naproxen and discuss safer analgesia and smoking support. Why should we not wait for another scan?" }]
            },
            {
              id: "c029-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-teachback-answer", text: "X-ray can miss a hole. My abdomen and pressure are worsening, so I need urgent surgery rather than waiting for CT or antibiotics." }]
            },
            {
              id: "c029-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-handover-prompt", text: "Please finish with a concise handover to the surgical team." }]
            },
            {
              id: "c029-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c029-run-handover", text: "Inez Calder is 48 with sudden epigastric pain now generalised, vomiting and fever after daily naproxen. Initially pulse 108, blood pressure 102/66 with epigastric guarding. White-cell count 17.8; lactate rose from 3.6 to 5.1. Initial erect chest X-ray shows no free gas but cannot exclude perforation. After initial crystalloid she is 124, 86/52, cool and anuric, with rigid generalised peritonitis. I suspect perforated peptic ulcer causing intra-abdominal sepsis and shock. She is monitored and nil by mouth, with two IVs, crossmatch, antibiotics, PPI, analgesia and antiemetic. Surgery, anaesthesia and intensive care are present; noradrenaline is starting. CT must not delay immediate washout and repair, with source control as soon as possible and within three hours." }]
            },
            {
              id: "c029-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Emergency Laparotomy Clinical Care Standard",
        date: "2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/emergency-laparotomy"
      },
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Sepsis Clinical Care Standard",
        date: "Current July 2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis"
      },
      {
        organisation: "World Society of Emergency Surgery",
        title: "Perforated and bleeding peptic ulcer: WSES guidelines",
        date: "2020",
        url: "https://link.springer.com/article/10.1186/s13017-019-0283-9"
      }
    ]
  });

  var caseTwentyNine = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-029"; });
  function buildHint29(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentyNine.masteryFocus = {
    case: "Use the onset, spread and current physiology to prioritise dangerous causes of upper abdominal pain, then let serial findings determine urgency and the next action.",
    clinical: "In any evolving abdominal presentation, repeat examination and perfusion assessment can be more decisive than one early image or laboratory result.",
    tasks: ["Focused pain history", "Assess and interpret", "Explain assessment and plan", "Concise surgical handover"],
    transfer: "A patient taking long-term corticosteroids has the same sudden spreading pain, tachycardia and raised lactate, but only mild tenderness. How should the reduced guarding change your reasoning?",
    transferAnswer: "Corticosteroids can blunt inflammatory and peritoneal signs, so mild tenderness cannot safely overrule the sudden pain and abnormal physiology. Escalate early, repeat the examination, obtain urgent contrast CT if it will not delay necessary surgery, and involve the surgical team before rigidity appears.",
    transferChecks: ["Recognise blunted examination signs", "Let physiology retain weight", "Repeat abdominal assessment", "Escalate before rigidity"],
    transferCitationIds: ["wses-ppu-2020", "acsqhc-deterioration-2026"]
  };
  caseTwentyNine.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "acsqhc-sepsis-2026", title: "Sepsis Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis" },
    { id: "acsqhc-laparotomy-2026", title: "Emergency Laparotomy Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "2026", url: "https://www.safetyandquality.gov.au/clinical-care-standards/emergency-laparotomy" },
    { id: "wses-ppu-2020", title: "Perforated and bleeding peptic ulcer: WSES guidelines", organisation: "World Society of Emergency Surgery", date: "2020", url: "https://link.springer.com/article/10.1186/s13017-019-0283-9" }
  ];
  caseTwentyNine.reasoningCompass = {
    stem: {
      title: "Track what changed",
      steps: [
        { time: "0 to 30 seconds", text: "Start with upper abdominal pain that has spread. Clarify whether onset was abrupt and whether movement, vomiting, fever, bleeding or faintness changed with it." },
        { time: "30 to 60 seconds", text: "Consider gastrointestinal, biliary, pancreatic, vascular, cardiac and pregnancy-related causes while planning early ABC, perfusion and abdominal findings." },
        { time: "1 to 2 minutes", text: "Set the task boundaries: history to minute 2, assessment to minute 5, explanation to minute 7, handover in the final minute." }
      ],
      anchor: "History 0 to 2 | Assess 2 to 5 | Explain 5 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Repeat the assessment when the picture changes",
      steps: [
        { time: "0 to 2 minutes", text: "Clarify onset, spread, movement sensitivity, associated symptoms, relevant medicines and pregnancy possibility while current distress is observed." },
        { time: "2 to 5 minutes", text: "Interpret physiology, perfusion, the focused abdominal examination and requested evidence together. Repeat the assessment if symptoms or circulation change." },
        { time: "5 to 8 minutes", text: "Explain the current assessment and next action, then hand over the symptom pattern, trend, decisive evidence and care already started." }
      ],
      anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the current task, respond, say where you paused and then return."
    }
  };
  caseTwentyNine.hints = [
    buildHint29("c029-hint-01", "stem", "c029-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can begin while I clarify the pain?", "Observations, perfusion assessment, intravenous access, analgesia and senior review can begin together if the first answers suggest danger.", "Do not separate history from safety.", "The setting supports rapid reassessment and escalation.", "Clarify how the pain began and spread before favouring one organ."),
    buildHint29("c029-hint-02", "stem", "c029-stem-patient", "48-year-old woman", ["amc-tips-2024"], "Using age and sex", "What must I remember without guessing the cause?", "At 48, common digestive causes remain possible, but cardiac, vascular and pregnancy-related conditions still need deliberate exclusion from the history and tests.", "Demographics shape the checklist, not the conclusion.", "Several systems are still possible.", "Now focus on how an upper pain became widespread."),
    buildHint29("c029-hint-03", "stem", "c029-stem-patient", "upper abdominal pain that began this morning and has become more widespread", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading spread over time", "Why does the change in distribution matter?", "Pain that moves from a local upper area to a broader abdomen may reflect an evolving process rather than simple stable dyspepsia. Ask exact onset, speed of spread and movement sensitivity.", "The timeline is more useful than the label upper abdominal pain.", "The problem is evolving; current physiology is unknown.", "Plan focused questions before requesting findings."),
    buildHint29("c029-hint-04", "stem", "c029-stem-context", "when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning requested evidence", "What should I ask the examiner to provide?", "Request current physiology and perfusion, focused system and abdominal findings, relevant bedside and laboratory evidence, and imaging matched to the disclosed pattern.", "Each request should answer risk, cause or action.", "No current examination or results are available yet.", "Anchor the four tasks before starting."),
    buildHint29("c029-hint-05", "stem", "c029-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "Which questions earn the first two minutes?", "Ask onset, site, spread and movement; vomiting, bleeding, fever, bowel and urinary change; faintness and chest symptoms; pregnancy possibility; prior digestive disease, surgery, medicines, smoking and alcohol.", "Focused means every question alters risk or next action.", "Task one builds the timeline and key exposures.", "Move to examination at minute 2 even if minor details remain."),
    buildHint29("c029-hint-06", "stem", "c029-task-assess", "focused assessment and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "How do I avoid an examination list?", "State ABC and perfusion first, then interpret abdominal tenderness, guarding, bowel sounds and serial change beside observations and results. Say what a negative early test cannot exclude.", "Interpretation connects findings to urgency.", "Minutes 2 to 5 decide the current physiological and abdominal state.", "At minute 5, stop analysis and address Inez."),
    buildHint29("c029-hint-07", "stem", "c029-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What should the explanation contain?", "Give the leading concern supported by current evidence, explain how it is affecting her, describe treatment already started and the immediate next step, then answer why waiting may be unsafe.", "Use plain language rather than repeating the differential.", "Minutes 5 to 7 belong to Inez.", "Keep the final minute for surgical handover."),
    buildHint29("c029-hint-08", "stem", "c029-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final task", "Which facts need the last minute?", "Transfer onset and spread, relevant background risk, physiology and abdominal trend, decisive evidence, current actions and the immediate next step.", "The handover is a current-risk summary.", "The final minute has a fixed purpose.", "Keep a running summary as Inez changes."),
    buildHint29("c029-hint-09", "run", "c029-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is the first useful action?", "Approach Inez, observe her distress, identify yourself and start the pain timeline while arranging observations if she appears unwell.", "The first task is already running.", "You have two minutes for focused history.", "Confirm identity and consent."),
    buildHint29("c029-hint-10", "run", "c029-run-pain-answer", "struck suddenly", ["wses-ppu-2020"], "Hearing the onset", "What does sudden onset change?", "It argues against treating this as uncomplicated indigestion and keeps acute structural, vascular and inflammatory causes prominent.", "Onset can outweigh a familiar symptom label.", "The pain began abruptly and stayed severe.", "Use the spread and movement sensitivity next."),
    buildHint29("c029-hint-11", "run", "c029-run-pain-answer", "movement hurts", ["wses-ppu-2020"], "Using movement sensitivity", "Why ask about movement and coughing?", "Pain worsened by movement suggests irritation of the parietal peritoneum. It becomes more meaningful when paired with guarding or rebound on examination.", "One symptom suggests a process; examination tests it.", "The pain has spread and may involve the peritoneum.", "Ask for systemic, bleeding and pregnancy clues."),
    buildHint29("c029-hint-12", "run", "c029-run-associated-answer", "feel feverish, faint and swollen", ["acsqhc-deterioration-2026", "acsqhc-sepsis-2026"], "Hearing systemic effect", "Which of these words changes urgency?", "Faintness can reflect impaired perfusion, feverishness can suggest inflammation or infection, and swelling may reflect ileus. None locates the cause, but together they justify early observations.", "Severity and source are separate questions.", "Systemic and abdominal effects are both possible.", "Now look for an exposure that makes one cause more likely."),
    buildHint29("c029-hint-13", "run", "c029-run-background-answer", "daily naproxen", ["wses-ppu-2020"], "Using the medicine exposure", "Does naproxen settle the diagnosis?", "No. Regular NSAID use can injure gastroduodenal mucosa and raises concern for ulcer complications, but the examination and imaging still need to establish what is happening now.", "An exposure strengthens a pathway without proving it.", "A plausible mucosal risk is present.", "Request current physiology and abdominal signs before naming the cause."),
    buildHint29("c029-hint-14", "run", "c029-run-initial-findings", "pulse 108, blood pressure 102/66", ["acsqhc-deterioration-2026", "acsqhc-sepsis-2026"], "Reading early perfusion", "Is the pressure reassuring?", "Tachycardia with fever and distress can precede overt shock. The pressure is one early value, so pair it with skin, refill, urine and trend.", "Do not wait for severe hypotension before escalating.", "Inez is not yet profoundly hypotensive, but risk is active.", "Now interpret the abdominal examination."),
    buildHint29("c029-hint-15", "run", "c029-run-initial-findings", "marked epigastric tenderness, guarding and quiet sounds", ["wses-ppu-2020", "acsqhc-laparotomy-2026"], "Recognising evolving peritonism", "What does guarding add to the pain history?", "Guarding and quiet bowel sounds support peritoneal irritation and ileus. Spreading tenderness without rigidity can be an early stage, so serial examination matters.", "Do not require a rigid abdomen before acting.", "The severe spreading pain now has objective abdominal signs.", "Bring onset, NSAID exposure, fever and guarding together."),
    buildHint29("c029-hint-16", "run", "c029-run-interpretation", "perforated peptic ulcer with intra-abdominal sepsis", ["wses-ppu-2020", "acsqhc-sepsis-2026"], "Naming the leading diagnosis", "What supports this conclusion now?", "Sudden epigastric pain, daily naproxen, dyspepsia, fever and spreading guarding fit a perforated ulcer with contamination. Pancreatic, biliary and other perforated causes remain until definitive assessment.", "Name the leading cause while keeping important alternatives proportionate.", "A perforated ulcer with intra-abdominal sepsis is now the working diagnosis.", "Begin resuscitation, antibiotics and surgical planning together."),
    buildHint29("c029-hint-17", "run", "c029-run-escalation", "Call senior emergency, surgical, anaesthetic and intensive care clinicians now", ["acsqhc-sepsis-2026", "acsqhc-laparotomy-2026"], "Escalating before shock", "Why involve all teams now?", "A perforation needs source control, and sepsis can worsen quickly. Early surgical, anaesthetic and critical care coordination prevents treatment and theatre delays.", "Do not wait for CT or profound hypotension to call.", "Definitive and supportive teams are engaged.", "Send tests that assess organ effect and prepare surgery."),
    buildHint29("c029-hint-18", "run", "c029-run-tests", "pregnancy test", ["amc-tips-2024", "acsqhc-laparotomy-2026"], "Keeping testing complete", "Why test pregnancy when the pain is epigastric?", "Pregnancy status changes diagnostic possibilities, imaging discussion, medicines and operative planning. It is a quick safety check, not a claim that pregnancy is likely.", "A focused assessment still covers high-impact alternatives.", "Blood tests and crossmatch are preparing treatment and theatre.", "Start time-critical treatment before all results return."),
    buildHint29("c029-hint-19", "run", "c029-run-treatment", "broad-spectrum intravenous antibiotics now", ["acsqhc-sepsis-2026", "wses-ppu-2020"], "Treating contamination early", "Why not wait for CT confirmation?", "The history and peritoneal signs already support intra-abdominal contamination with systemic effect. Early antibiotics reduce ongoing infectious harm while surgery addresses the source.", "Antibiotics support source control; they do not replace it.", "Analgesia, cautious fluid, antibiotics and acid suppression are active.", "Use imaging only if it does not delay necessary surgery."),
    buildHint29("c029-hint-20", "run", "c029-run-investigation-request", "CT abdomen and pelvis with intravenous contrast", ["wses-ppu-2020", "acsqhc-laparotomy-2026"], "Choosing imaging by stability", "Why review X-ray and still plan CT?", "An erect chest film may show free gas but can miss it. Contrast CT is more sensitive and can locate the problem, but only if the patient is stable enough and the scan will not delay source control.", "The investigation is conditional on current physiology.", "Treatment and surgical review continue during imaging decisions.", "Read the X-ray as one piece of evidence, not a gatekeeper."),
    buildHint29("c029-hint-21", "run", "c029-run-investigation-results", "no visible free gas", ["wses-ppu-2020"], "Handling a negative X-ray", "Does no free gas rule out a hole?", "No. Plain radiographs miss some perforations, especially when gas is small, contained or not positioned under the diaphragm. The clinical examination retains its weight.", "A negative low-sensitivity test cannot overrule peritonism.", "The X-ray has not excluded perforation.", "Interpret the lactate and kidney function beside the patient."),
    buildHint29("c029-hint-22", "run", "c029-run-film-interpretation", "Proceed with CT only if it cannot delay very urgent surgery", ["wses-ppu-2020", "acsqhc-laparotomy-2026"], "Keeping CT in its place", "What question decides whether to scan?", "Ask whether CT will change or safely plan the operation without delaying it. If physiology or peritonism worsens, direct source control becomes more important than additional localisation.", "Tests must serve the next action.", "Surgical review is already active despite the negative film.", "Listen for deterioration and reset the assessment if it occurs."),
    buildHint29("c029-hint-23", "run", "c029-run-deterioration", "feel cold and dizzy", ["acsqhc-deterioration-2026", "acsqhc-sepsis-2026"], "Hearing the change", "What happens to the scan plan now?", "Stop and repeat ABC, perfusion, urine and abdominal examination. Coldness and dizziness may signal worsening shock, so the earlier observations no longer define her.", "Deterioration interrupts planned investigations.", "The case has changed.", "Use the new trend, not the old snapshot."),
    buildHint29("c029-hint-24", "run", "c029-run-serial-findings", "blood pressure 86/52", ["acsqhc-deterioration-2026", "acsqhc-sepsis-2026"], "Recognising shock", "Which findings make this more than pain?", "Hypotension, tachycardia, cool peripheries, delayed refill, anuria and rising lactate show inadequate organ perfusion despite initial fluid.", "Name shock from the cluster and trend.", "Inez now has circulatory failure.", "Add the new abdominal signs to decide whether imaging can wait."),
    buildHint29("c029-hint-25", "run", "c029-run-serial-findings", "rigid with generalised guarding and rebound", ["wses-ppu-2020", "acsqhc-laparotomy-2026"], "Recognising generalised peritonitis", "What does rigidity change?", "It indicates widespread peritoneal irritation and, with shock, makes ongoing contamination requiring urgent source control highly likely. Waiting for CT is now unsafe.", "The repeat examination now makes waiting for CT unsafe.", "Shock and generalised peritonitis are established.", "Support perfusion and proceed directly to operative source control."),
    buildHint29("c029-hint-26", "run", "c029-run-shock-plan", "source control as soon as possible and within three hours", ["acsqhc-sepsis-2026", "acsqhc-laparotomy-2026"], "Prioritising source control", "Why are antibiotics not enough?", "They treat circulating and tissue infection but cannot close a perforation or remove contamination. Vasopressor support preserves perfusion while surgery controls the source without avoidable delay.", "Resuscitation is a bridge to source control.", "Noradrenaline and individualised fluid support are active.", "Explain why the normal X-ray no longer matters."),
    buildHint29("c029-hint-27", "run", "c029-run-explanation", "a hole in your stomach or bowel", ["acsqhc-communication-2026", "wses-ppu-2020"], "Explaining the concern", "What should Inez hear first?", "A likely hole is leaking into the abdomen, causing infection and low circulation; treatment is supporting her while surgical and anaesthetic teams prepare to stop the leak.", "Use cause, effect and immediate action.", "Inez understands why this is urgent.", "Answer the request to wait without dismissing it."),
    buildHint29("c029-hint-28", "run", "c029-run-concern-response", "X-rays can miss perforation", ["acsqhc-communication-2026", "wses-ppu-2020"], "Explaining conflicting evidence", "How do I explain a normal test and urgent surgery together?", "Say that the X-ray is not sensitive enough to exclude a hole, while the falling pressure and rigid abdomen are direct evidence of worsening contamination and shock.", "Explain why the stronger evidence wins.", "Inez knows why CT or antibiotics alone would be unsafe.", "Obtain consent for any immediate supportive procedure."),
    buildHint29("c029-hint-29", "run", "c029-run-ng-consent", "a soft tube through your nose", ["acsqhc-communication-2026", "wses-ppu-2020"], "Seeking procedure consent", "Why explain the tube now?", "Continuing vomiting and distension make decompression useful, but the tube is uncomfortable and does not replace surgery. Explain purpose, discomfort and choice briefly.", "Urgency does not remove consent when capacity remains.", "Inez has agreed to gastric decompression.", "Keep long-term prevention until after the emergency plan is clear."),
    buildHint29("c029-hint-30", "run", "c029-run-follow-up", "test for Helicobacter pylori", ["wses-ppu-2020"], "Separating later prevention", "Why mention this after surgery planning?", "Eradication, stopping naproxen and smoking support reduce recurrence, but none should dilute the immediate message about source control.", "Put future prevention after current danger.", "Inez understands both the emergency and later risk reduction.", "Use the final minute to transfer the current state and destination."),
    buildHint29("c029-hint-31", "run", "c029-run-handover", "CT must not delay immediate washout and repair", ["acsqhc-communication-2026", "acsqhc-sepsis-2026", "acsqhc-laparotomy-2026"], "Closing with destination", "What makes this handover actionable?", "It gives the onset, exposure, serial perfusion and abdomen, treatment, failed initial response and the decision for immediate source control without waiting for CT.", "Finish with what the receiving team must do now.", "Risk, trend, treatment and operative plan have transferred.", "Stop when the examiner closes the station."),
    buildHint29("c029-hint-32", "run", "c029-run-end", "The station is complete", ["amc-tips-2024"], "Finishing the case", "Should I add another test?", "No. The examiner has ended the station and the handover already carries the urgent plan.", "Finish on the instruction.", "Case 29 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseTwentyNine.essentialHintIds = [
    "c029-hint-03", "c029-hint-05", "c029-hint-06", "c029-hint-07", "c029-hint-08", "c029-hint-10",
    "c029-hint-13", "c029-hint-15", "c029-hint-16", "c029-hint-21", "c029-hint-24", "c029-hint-25",
    "c029-hint-26", "c029-hint-27", "c029-hint-31", "c029-hint-32"
  ];
  var clockByHint29 = {
    "c029-hint-05": "Minutes 0 to 2: onset, spread and movement, systemic and bleeding symptoms, pregnancy possibility, digestive history and medicine exposure.",
    "c029-hint-06": "Minutes 2 to 5: request ABC, perfusion, complete abdomen, essential tests and imaging, then interpret the whole pattern and trend.",
    "c029-hint-17": "Surgical and critical care coordination begins now while treatment and investigation continue.",
    "c029-hint-23": "Deterioration resets the clock. Stop planned imaging, repeat ABC and abdomen, and act on the current physiology.",
    "c029-hint-27": "Minutes 5 to 7: explain the likely hole, contamination, shock treatment and immediate operation.",
    "c029-hint-31": "Final minute: transfer onset, risk exposure, serial perfusion and abdomen, treatment, response and immediate source control."
  };
  var deeperByHint29 = {
    "c029-hint-11": ["Inflammation of the parietal peritoneum makes motion painful because movement stretches the sensitive lining. Visceral pain alone is usually less sharply movement-dependent."],
    "c029-hint-13": ["NSAIDs reduce protective prostaglandins, weakening mucosal blood flow, bicarbonate and mucus defence. Acid can then contribute to ulceration and, in some cases, perforation."],
    "c029-hint-15": ["Peritoneal irritation produces involuntary abdominal muscle contraction. Quiet bowel sounds can reflect reflex ileus when inflamed peritoneum suppresses gut movement."],
    "c029-hint-21": ["Free gas depends on the site, size and timing of a leak and the patient's position during imaging. Small or contained perforations may not create visible subdiaphragmatic gas."],
    "c029-hint-24": ["Rising lactate reflects increasing mismatch between oxygen delivery and tissue demand, but it is interpreted with perfusion, urine output and serial examination rather than alone."],
    "c029-hint-26": ["Noradrenaline raises vascular tone to support perfusion pressure after initial fluid assessment. It does not correct the source, so theatre preparation continues without pause."]
  };
  caseTwentyNine.hints.forEach(function (hint) {
    if (clockByHint29[hint.id]) hint.clock = clockByHint29[hint.id];
    if (deeperByHint29[hint.id]) hint.deeper = deeperByHint29[hint.id];
  });
})();
