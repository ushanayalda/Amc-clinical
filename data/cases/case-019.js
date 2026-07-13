(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-019",
    globalId: "CP-C019",
    registryId: "CP-P6-C002",
    displayNumber: "Case 19",
    title: "Vomiting blood twice in one evening",
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
          id: "c019-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c019-stem-patient",
          text: "Mr Sami Brennan, a 55-year-old man, has vomited blood twice this evening. His sister, Mira, is present."
        },
        {
          id: "c019-stem-start",
          text: "Sami is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c019-task-history",
          text: "Take a focused history from Sami and Mira.",
          timing: "2 minutes"
        },
        {
          id: "c019-task-assess",
          text: "Assess Sami, interpret the information provided and discuss your management.",
          timing: "4 minutes"
        },
        {
          id: "c019-task-explain",
          text: "Explain your assessment and plan to Sami and Mira.",
          timing: "1 minute"
        },
        {
          id: "c019-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c019-run-assessment",
          heading: "Focused history and primary assessment",
          turns: [
            {
              id: "c019-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c019-run-start", text: "You may begin." }]
            },
            {
              id: "c019-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-first-action", text: "The doctor performs hand hygiene, applies appropriate protective equipment and approaches Sami. Suction is immediately available." }]
            },
            {
              id: "c019-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-intro", text: "Hello Sami, I am Ushana, one of the emergency doctors. Can you confirm your full name? Are you comfortable speaking with Mira here while I assess and treat you?" }]
            },
            {
              id: "c019-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-consent", text: "Sami Brennan. Yes, please let her stay." }]
            },
            {
              id: "c019-turn-bleeding-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-bleeding-history", text: "Tell me what happened. Was the blood bright or dark, about how much was there, and have you had black bowel motions, fainting, chest pain or abdominal pain?" }]
            },
            {
              id: "c019-turn-bleeding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-bleeding-answer", text: "Both times it was bright red with clots, nearly a cup each time. My stools have been black since yesterday. I felt close to fainting when I stood up. There is no chest or stomach pain." }]
            },
            {
              id: "c019-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check glucose and temperature. Examine for pallor, chronic liver disease, abdominal tenderness and ascites, and inspect any vomit or stool. Please provide the findings." }]
            },
            {
              id: "c019-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c019-run-primary-findings", text: "His airway is clear with no current vomiting. Respiratory rate is 22, oxygen saturation 96% on room air and lungs are clear. Pulse is 116, blood pressure 94/58 and capillary refill three seconds. He is pale, cool and jaundiced. Temperature is 36.1 degrees Celsius, glucose 6.2 mmol/L and GCS 15. His abdomen is distended with shifting dullness, without tenderness or guarding. There are spider naevi, palmar erythema and ankle oedema. The bedpan contains melaena." }]
            },
            {
              id: "c019-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-recognition", text: "This is a significant upper gastrointestinal bleed with impaired circulation and advanced chronic liver disease. I call the senior emergency doctor and request anaesthetic, intensive-care, gastroenterology and hepatology support." }]
            },
            {
              id: "c019-turn-access-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-access-tests", text: "Keep Sami fasting, establish two large-bore intravenous lines and take a blood gas with lactate, full blood count, group and crossmatch, renal and liver function, coagulation studies, fibrinogen and calcium. Begin small reassessed boluses of warmed crystalloid while blood is prepared, and give warmed red cells as soon as available. Sami, a urinary catheter will help monitor your circulation. With privacy and a chaperone, may we insert one?" }]
            },
            {
              id: "c019-turn-catheter-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-catheter-consent", text: "Yes." }]
            },
            {
              id: "c019-turn-access-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-access-action", text: "Monitoring, intravenous access and warming are established. A small warmed crystalloid bolus begins while red cells are prepared. A urinary catheter is inserted with privacy and a chaperone." }]
            },
            {
              id: "c019-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-background", text: "Sami, have you been diagnosed with liver disease, enlarged veins in the oesophagus, ulcers or previous bleeding? What medicines do you take, including anti-inflammatory tablets, aspirin or blood thinners? Any allergies, recent alcohol use or infection symptoms?" }]
            },
            {
              id: "c019-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-background-answer", text: "I have cirrhosis from alcohol and had veins banded about eighteen months ago. I take carvedilol, fluid tablets and lactulose, but I missed some doses. No aspirin, ibuprofen or blood thinners. I have not drunk for eight months and have no allergies or fever." }]
            },
            {
              id: "c019-turn-sister-history",
              speaker: "Sister",
              kind: "spoken",
              lines: [{ id: "c019-run-sister-history", text: "He has been slower and a little muddled today. His stomach and legs have also become more swollen this week." }]
            }
          ]
        },
        {
          id: "c019-run-treatment",
          heading: "Resuscitation and cause-directed treatment",
          turns: [
            {
              id: "c019-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c019-run-results", text: "Haemoglobin is 73 g/L, platelets 58, INR 2.0 and fibrinogen 1.3 g/L. Urea is 16 mmol/L, creatinine 136 micromol/L, bilirubin 82 micromol/L, albumin 22 g/L and lactate 5.1 mmol/L. Crossmatched blood is being prepared." }]
            },
            {
              id: "c019-turn-blood-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-blood-plan", text: "Activate the local critical-bleeding protocol and give warmed red cells without waiting for another haemoglobin. Reassess perfusion, haemoglobin, calcium, fibrinogen, coagulation and temperature. Avoid overtransfusion; once stable, aim for haemoglobin 70 to 90. Do not give fresh frozen plasma solely to correct the cirrhotic INR. Do not give platelets routinely. Individualise haemostatic components with haematology and transfusion specialists using active bleeding, local protocol and available viscoelastic results. Do not give tranexamic acid routinely." }]
            },
            {
              id: "c019-turn-variceal-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-variceal-plan", text: "Variceal bleeding is likely, although other upper gastrointestinal causes remain possible. Start terlipressin, or the local vasoactive alternative, and ceftriaxone now without waiting for endoscopic proof. Hold carvedilol and diuretics while he is hypotensive. Consider intravenous erythromycin before endoscopy. Arrange endoscopy within 12 hours of presentation after haemodynamic resuscitation." }]
            },
            {
              id: "c019-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-treatment-action", text: "Warmed red cells, terlipressin and ceftriaxone are commenced. The endoscopy team prepares for the procedure." }]
            },
            {
              id: "c019-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-patient-question", text: "Is this definitely those veins again?" }]
            },
            {
              id: "c019-turn-patient-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-patient-explanation", text: "They are the leading possibility because cirrhosis raises pressure in veins around the oesophagus, but the camera test must confirm the source. Meanwhile, we are replacing blood, lowering that pressure and preventing infection." }]
            },
            {
              id: "c019-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c019-run-deterioration", text: "Sami suddenly vomits about 400 millilitres of fresh blood. He becomes drowsy and disoriented, develops asterixis, makes gurgling sounds and no longer follows instructions consistently. GCS is 13, oxygen saturation 90%, pulse 126 and blood pressure 78/46." }]
            },
            {
              id: "c019-turn-airway",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-airway", text: "His airway is now unsafe because of active haematemesis and reduced consciousness. Use suction, high-flow oxygen and lateral positioning while the senior anaesthetist performs controlled rapid-sequence intubation. Continue critical-bleeding and vasoactive treatment. He now requires intubation before endoscopy." }]
            },
            {
              id: "c019-turn-post-airway",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-post-airway", text: "Sami is intubated by the anaesthetic team without aspiration. After further warmed red cells, blood pressure is 102/64, pulse 104 and lactate 3.8 mmol/L. He proceeds to endoscopy." }]
            },
            {
              id: "c019-turn-endoscopy-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-endoscopy-request", text: "Please provide the endoscopy findings and current liver-risk assessment." }]
            },
            {
              id: "c019-turn-endoscopy-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c019-run-endoscopy-result", text: "Endoscopy shows large oesophageal varices with active bleeding. Endoscopic band ligation controls the bleeding. His Child-Pugh score is 12, class C." }]
            },
            {
              id: "c019-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-definitive-plan", text: "Continue vasoactive therapy for up to five days and ceftriaxone for up to seven. Because he is Child-Pugh C with active bleeding, discuss pre-emptive TIPS within 72 hours, preferably within 24 hours. If bleeding becomes uncontrolled, use a self-expanding metal stent in the oesophagus, or experienced balloon tamponade if unavailable, as a bridge to rescue TIPS." }]
            },
            {
              id: "c019-turn-sister-question",
              speaker: "Sister",
              kind: "spoken",
              lines: [{ id: "c019-run-sister-question", text: "Is he going to survive this?" }]
            },
            {
              id: "c019-turn-sister-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-sister-explanation", text: "This is life-threatening, but banding has stopped the bleeding and his circulation has improved. He is on a breathing machine for safety. Intensive care and the liver team will watch him closely and assess a shunt procedure to reduce further bleeding." }]
            },
            {
              id: "c019-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c019-run-time", text: "Please provide your handover." }]
            }
          ]
        },
        {
          id: "c019-run-handover-section",
          heading: "Clinical handover",
          turns: [
            {
              id: "c019-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c019-run-handover", text: "Sami Brennan is 55 with alcohol-related cirrhosis, previous variceal banding and acute haematemesis with melaena. He deteriorated after a further 400-millilitre haematemesis to GCS 13 and pressure 78/46, requiring intubation by the anaesthetic team. Critical-bleeding treatment, warmed red cells, terlipressin and ceftriaxone are running. Endoscopy found active oesophageal variceal bleeding, controlled by band ligation. He is now 102/64. As Child-Pugh C12, he is being assessed for pre-emptive TIPS, with rescue TIPS and a temporary bridge planned if bleeding recurs uncontrollably." }]
            },
            {
              id: "c019-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c019-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "European Society of Gastrointestinal Endoscopy",
        title: "Endoscopic diagnosis and management of esophagogastric variceal hemorrhage: ESGE Guideline",
        date: "2022",
        url: "https://doi.org/10.1055/a-1939-4887"
      },
      {
        organisation: "National Blood Authority Australia",
        title: "Patient blood management guideline for adults with critical bleeding",
        date: "Version 2.0, updated September 2025",
        url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding"
      },
      {
        organisation: "Baveno VII Faculty",
        title: "Baveno VII: Renewing consensus in portal hypertension",
        date: "2022",
        url: "https://doi.org/10.1016/j.jhep.2021.12.022"
      }
    ]
  });
})();

(function () {
  "use strict";

  var caseNineteen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-019"; });
  function buildHint19(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }

  caseNineteen.masteryFocus = {
    case: "Assess acute haematemesis with impaired circulation, protect airway and perfusion, identify the source only as the clues emerge, then explain and hand over the complete plan.",
    clinical: "In any major bleed, separate severity from source: resuscitate the physiology immediately, revise the cause with each new clue, and let response and definitive testing determine escalation."
  };

  caseNineteen.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "nba-critical-bleeding-2025", title: "Patient blood management guideline for adults with critical bleeding", organisation: "National Blood Authority Australia", date: "Updated September 2025", url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding" },
    { id: "acg-upper-gi-2021", title: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding", organisation: "American College of Gastroenterology", date: "2021", url: "https://pubmed.ncbi.nlm.nih.gov/33929377/" },
    { id: "esge-variceal-2022", title: "Endoscopic diagnosis and management of esophagogastric variceal hemorrhage: ESGE Guideline", organisation: "European Society of Gastrointestinal Endoscopy", date: "2022", url: "https://doi.org/10.1055/a-1939-4887" },
    { id: "baveno-vii-2022", title: "Baveno VII: Renewing consensus in portal hypertension", organisation: "Baveno VII Faculty", date: "2022", url: "https://doi.org/10.1016/j.jhep.2021.12.022" }
  ];

  caseNineteen.reasoningCompass = {
    stem: {
      title: "First decide how sick he may be",
      steps: [
        { time: "0 to 30 seconds", text: "Vomiting blood twice means a potentially significant upper gastrointestinal bleed. Do not guess the source. Prepare to establish current bleeding, amount, melaena, presyncope, pain and immediate ABCDE risk." },
        { time: "30 to 60 seconds", text: "Mira may report changes Sami has not noticed. Plan monitoring, intravenous access, blood sampling, crossmatch and senior help while the focused history continues." },
        { time: "1 to 2 minutes", text: "Set the task times: focused history to minute 2, assessment and management to minute 6, explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess and manage 2 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Treat severity while the source becomes clearer",
      steps: [
        { time: "0 to 2 minutes", text: "Confirm consent for Mira, assess the bleeding and circulation, then ask source clues without delaying monitoring, access, crossmatch and blood preparation." },
        { time: "2 to 6 minutes", text: "Use findings, results and response to judge severity. Start treatment supported by the evidence available, reassess after every change and protect the airway if consciousness or active vomiting worsens." },
        { time: "6 to 8 minutes", text: "At the prompt, explain what is known and uncertain, then hand over current physiology, the working source, treatments, response and the next escalation." }
      ],
      anchor: "If airway, breathing, circulation or conscious state worsens, interrupt the history, repeat ABCDE and escalate; then return to the unfinished task."
    }
  };

  caseNineteen.hints = [
    buildHint19("c019-hint-01", "stem", "c019-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What does the setting allow me to do immediately?", "You can assess, monitor, resuscitate and call senior teams at the same time. This is not a history that must be completed before treatment starts.", "Keep the sequence simple: current danger first, source second.", "The location supports parallel emergency care.", "Read the presenting event before deciding which resources Sami needs."),
    buildHint19("c019-hint-02", "stem", "c019-stem-patient", "55-year-old man", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age", "Does his age tell me the cause?", "No. It changes background probability, but it does not identify where the blood came from or how unstable he is.", "Age changes concern, but it does not identify the bleeding source.", "Sami is a middle-aged adult with an acute bleeding presentation.", "Place more weight on the bleeding description and physiology."),
    buildHint19("c019-hint-03", "stem", "c019-stem-patient", "vomited blood twice this evening", ["acg-upper-gi-2021", "acsqhc-deterioration-2026"], "Reading the event", "Two episodes. Is that enough to call it severe?", "It confirms haematemesis and makes an upper gastrointestinal source likely. Severity still depends on amount, ongoing bleeding, melaena, presyncope and circulation.", "Do not confuse where the blood appeared with why it happened.", "There is acute upper gastrointestinal bleeding; its source and physiological effect are still unknown.", "Ask about amount, colour, clots, melaena and symptoms of poor perfusion."),
    buildHint19("c019-hint-04", "stem", "c019-stem-patient", "His sister, Mira, is present", ["acsqhc-communication-2026", "amc-spec-2026"], "Using the collateral historian", "Why involve Mira if Sami is awake?", "With Sami's permission, she can add changes in behaviour, medication use and recent swelling that he may not recognise during acute illness.", "Collateral history adds evidence; it does not replace Sami's voice.", "Mira may hold important recent observations.", "Remember consent before discussing Sami's health with her."),
    buildHint19("c019-hint-05", "stem", "c019-stem-start", "awake and able to answer questions", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Using current alertness", "Can I relax because he is talking?", "No. A patient can speak while losing blood and can deteriorate quickly. Use the opportunity for brief questions while monitoring airway, circulation and conscious state.", "Current conversation does not prove stability.", "History is possible, but danger has not been excluded.", "Plan questions that can stop immediately if ABCDE worsens."),
    buildHint19("c019-hint-06", "stem", "c019-task-history", "focused history from Sami and Mira", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "What belongs in the first two minutes?", "Clarify the bleed and perfusion symptoms, then ask previous bleeding, liver disease, ulcer risks, medicines, alcohol, allergies and infection symptoms. Use Mira for recent behaviour and swelling.", "A focused history includes the questions that change immediate assessment or treatment.", "Task one ends at minute 2.", "Move to assessment even if one low-value question remains."),
    buildHint19("c019-hint-07", "stem", "c019-task-assess", "Assess Sami, interpret the information provided and discuss your management", ["amc-spec-2026", "acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Anchoring task two", "What are the three verbs here?", "Obtain ABCDE findings, say what they mean, then act. Monitoring, access, blood preparation, senior help and repeated assessment belong here before a final source is known.", "Assessment, interpretation and management must all be audible.", "Minutes 2 to 6 carry the main safety work.", "Keep one minute for explanation and one for handover."),
    buildHint19("c019-hint-08", "stem", "c019-task-explain", "Explain your assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What must Sami and Mira understand?", "State how serious the bleeding is, what is being done now, what source is suspected at that point, what test will confirm it and what could happen next.", "Explain uncertainty without sounding uncertain about urgent care.", "Minute 6 to 7 is for Sami and Mira.", "Stop when the examiner requests handover."),
    buildHint19("c019-hint-09", "stem", "c019-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which facts must I hand over?", "Give the bleed, relevant background, worst physiology, major results, deterioration, treatment, response, confirmed source if available and the next escalation.", "Include the facts that change current care.", "The final minute transfers responsibility safely.", "Keep the latest blood pressure, conscious state and airway status ready."),
    buildHint19("c019-hint-10", "run", "c019-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What should be visible before the first long question?", "Infection control, readiness for suction, a rapid look at Sami and an introduction. You are already checking whether he can speak and whether bleeding is active.", "The opening is part of assessment.", "The first task is a focused history during emergency observation.", "Approach, introduce yourself and obtain consent for Mira."),
    buildHint19("c019-hint-11", "run", "c019-run-first-action", "Suction is immediately available", ["acsqhc-deterioration-2026", "acg-upper-gi-2021"], "Preparing for recurrence", "Why suction when he is not vomiting now?", "Fresh haematemesis can obstruct the view, contaminate the airway and be aspirated. Having suction ready costs no time and protects against a predictable change.", "Preparation is based on the presenting event, not just this second.", "Sami can currently speak, but recurrent bleeding remains possible.", "Introduce yourself while observing airway and breathing."),
    buildHint19("c019-hint-12", "run", "c019-run-intro", "comfortable speaking with Mira here", ["acsqhc-communication-2026", "amc-spec-2026"], "Obtaining permission", "Can I assume family involvement because she arrived with him?", "No. Confirm identity and ask Sami directly. His agreement makes it clear that Mira may hear the assessment and contribute information.", "Urgency does not remove privacy when consent is possible.", "Sami is awake and can decide who remains.", "Hear his answer, then start with the bleeding event."),
    buildHint19("c019-hint-13", "run", "c019-run-consent", "please let her stay", ["acsqhc-communication-2026"], "Using consent", "What changes after he agrees?", "You can speak openly with both of them and later ask Mira for observations. Keep addressing Sami unless his condition prevents it.", "Consent includes Mira; it does not make her the primary speaker.", "Family involvement is now authorised.", "Ask the short questions that establish severity first."),
    buildHint19("c019-hint-14", "run", "c019-run-bleeding-history", "bright or dark, about how much", ["acg-upper-gi-2021", "amc-tips-2024"], "Clarifying the bleed", "Why ask description before the full background?", "Colour, clots and estimated amount help judge fresh bleeding. Melaena and presyncope add evidence of gastrointestinal blood loss and physiological effect.", "The first questions decide urgency, not the final cause.", "Haematemesis is known; size and impact are not.", "Listen for active blood, stool change and poor perfusion."),
    buildHint19("c019-hint-15", "run", "c019-run-bleeding-answer", "bright red with clots, nearly a cup each time", ["acg-upper-gi-2021", "acsqhc-deterioration-2026"], "Hearing significant fresh bleeding", "Does the patient's estimate have to be exact?", "No. Repeated bright blood with clots and a substantial estimated volume is enough to treat this as significant bleeding while objective physiology is obtained.", "Do not spend time converting a cup into false precision.", "The bleeding is more concerning than the stem alone showed.", "Add melaena and presyncope, then move promptly to ABCDE."),
    buildHint19("c019-hint-16", "run", "c019-run-bleeding-answer", "black since yesterday", ["acg-upper-gi-2021", "acsqhc-deterioration-2026"], "Connecting melaena and presyncope", "What do black stool and near-fainting add?", "Melaena supports gastrointestinal blood exposure before tonight, and near-fainting on standing suggests reduced effective circulation. Together they raise concern for more blood loss than the visible vomit alone.", "No pain does not make the bleed minor.", "There is likely ongoing or recent upper gastrointestinal blood loss with circulatory effect.", "Request ABCDE findings and continuous monitoring now."),
    buildHint19("c019-hint-17", "run", "c019-run-primary-request", "airway, breathing, circulation, conscious state and exposure", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Moving from history to physiology", "Why stop asking questions here?", "You already have enough to justify immediate assessment. ABCDE shows which problem needs treatment first; monitoring and repeat observations show whether it is working.", "The history can resume after immediate danger is addressed.", "Significant bleeding with presyncope is established.", "Read airway, perfusion, temperature and liver findings separately."),
    buildHint19("c019-hint-18", "run", "c019-run-primary-findings", "Pulse is 116, blood pressure 94/58 and capillary refill three seconds", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Recognising impaired circulation", "Do I wait for haemoglobin before calling this shock?", "No. Tachycardia, hypotension, delayed refill, pallor and cool skin show impaired perfusion in the setting of blood loss. Treatment follows physiology while laboratory results are pending.", "A normal GCS does not cancel circulatory failure.", "Sami has a significant bleed with impaired circulation.", "Call senior teams and establish access and blood preparation."),
    buildHint19("c019-hint-19", "run", "c019-run-primary-findings", "jaundiced", ["esge-variceal-2022", "baveno-vii-2022"], "Reading the liver findings", "Jaundice, ascites and spider naevi. What can I say now?", "They strongly support advanced chronic liver disease. That changes which bleeding sources deserve priority, but it still does not prove the exact lesion.", "Name the background disease without inventing endoscopy findings.", "There is impaired circulation and clear evidence of chronic liver disease.", "Confirm the working syndrome and activate the relevant teams."),
    buildHint19("c019-hint-20", "run", "c019-run-recognition", "significant upper gastrointestinal bleed with impaired circulation", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Naming what is earned", "Is this enough interpretation before the cause is known?", "You can now say this is a significant upper gastrointestinal bleed, that circulation is affected and that chronic liver disease is present. The exact bleeding point still needs endoscopy.", "State what the evidence proves and keep the source question open.", "Sami needs emergency, anaesthetic, intensive-care and gastrointestinal support.", "Start access, tests, warming and blood preparation."),
    buildHint19("c019-hint-21", "run", "c019-run-access-tests", "two large-bore intravenous lines", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Building resuscitation access", "Why two lines and this test set?", "Large access supports rapid blood delivery. Crossmatch prepares compatible blood; lactate and repeated perfusion assess response; haemoglobin, fibrinogen, calcium, coagulation, renal and liver tests guide ongoing treatment.", "Order tests because each informs a decision.", "Circulatory support and cause assessment are proceeding together.", "Use warmed treatment and reassess after each bolus."),
    buildHint19("c019-hint-22", "run", "c019-run-catheter-consent", "Yes", ["acsqhc-communication-2026", "acsqhc-deterioration-2026"], "Respecting consent during urgency", "Why pause for this one word?", "A urinary catheter can help track output during shock, but it is still an intimate procedure. Sami is conscious, so explain, use privacy and a chaperone, and obtain agreement.", "Urgent care can remain respectful.", "Sami accepts urinary monitoring.", "Continue resuscitation and obtain the source-focused background."),
    buildHint19("c019-hint-23", "run", "c019-run-access-action", "while red cells are prepared", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Using crystalloid while blood is prepared", "Why not give repeated large crystalloid boluses?", "Small reassessed warmed boluses can support circulation while blood arrives. Large volumes may dilute clotting factors, worsen hypothermia and do not replace lost red cells.", "Every fluid step needs a response check.", "Access, monitoring, warming and temporary volume support are active.", "Return to the brief background history while treatment continues."),
    buildHint19("c019-hint-24", "run", "c019-run-background", "liver disease, enlarged veins in the oesophagus, ulcers or previous bleeding", ["esge-variceal-2022", "baveno-vii-2022"], "Testing source possibilities", "Why ask several causes after seeing liver signs?", "Chronic liver disease raises one important possibility, but peptic ulcer disease and medicine-related bleeding remain possible. Previous diagnoses and procedures can change the leading source.", "A strong clue should focus the questions, not close them.", "Severity is established; source evidence is now being gathered.", "Hear the liver history, previous banding and medicine exposure."),
    buildHint19("c019-hint-25", "run", "c019-run-background-answer", "cirrhosis from alcohol and had veins banded", ["esge-variceal-2022", "baveno-vii-2022"], "Revising the leading source", "Do the clues now justify source-directed treatment?", "Yes. Cirrhosis, signs of decompensation and previous oesophageal banding make recurrent variceal bleeding the leading explanation. No NSAID, aspirin or anticoagulant use lowers those contributions but does not exclude another upper gastrointestinal lesion. Endoscopy still has to confirm the source.", "Eight months without alcohol does not remove complications from established cirrhosis.", "Suspected variceal bleeding now leads after the history confirms cirrhosis and prior varices.", "Add Mira's observations, then interpret the laboratory results."),
    buildHint19("c019-hint-26", "run", "c019-run-sister-history", "slower and a little muddled today", ["acsqhc-deterioration-2026", "baveno-vii-2022"], "Hearing decompensation", "Could this simply be anxiety or tiredness?", "Possibly, but new confusion with cirrhosis and bleeding may reflect impaired perfusion, hepatic encephalopathy or both. It raises airway risk and makes serial conscious-state assessment essential.", "Do not force one cause for the mental change yet.", "Mira adds recent confusion, ascites and oedema.", "Interpret the blood results beside perfusion and liver reserve."),
    buildHint19("c019-hint-27", "run", "c019-run-results", "Haemoglobin is 73 g/L", ["nba-critical-bleeding-2025", "esge-variceal-2022"], "Reading severity from the results", "Is 73 the only reason to transfuse?", "No. Sami is actively bleeding with impaired circulation and lactate 5.1. Blood treatment follows the whole clinical picture; another haemoglobin should not delay it.", "A laboratory threshold does not replace shock assessment.", "The results support major blood loss and poor perfusion.", "Activate the local critical-bleeding protocol and reassess repeatedly."),
    buildHint19("c019-hint-28", "run", "c019-run-results", "INR 2.0 and fibrinogen 1.3 g/L", ["nba-critical-bleeding-2025", "baveno-vii-2022"], "Reading haemostasis carefully", "Does the INR tell me to give plasma automatically?", "No. Cirrhotic INR does not describe the full balance of clotting and bleeding. Use active bleeding, fibrinogen, platelets, local protocol and specialist or viscoelastic guidance rather than correcting a number alone.", "Treat haemostasis as a clinical problem, not an isolated INR.", "Critical bleeding and impaired liver reserve coexist.", "Follow the protocol while avoiding routine products without an indication."),
    buildHint19("c019-hint-28b", "run", "c019-run-results", "Urea is 16 mmol/L", ["acg-upper-gi-2021", "nba-critical-bleeding-2025", "baveno-vii-2022"], "Connecting the organ results", "What do the urea, creatinine, liver tests and lactate add?", "Urea may rise after digestion of upper gastrointestinal blood and with reduced kidney perfusion. Creatinine 136 and lactate 5.1 support impaired perfusion, while bilirubin 82 and albumin 22 show poor liver reserve.", "No single result explains the whole deterioration.", "The blood loss, organ perfusion and liver reserve are all abnormal.", "Activate critical-bleeding treatment and follow each trend after resuscitation."),
    buildHint19("c019-hint-29", "run", "c019-run-blood-plan", "give warmed red cells without waiting for another haemoglobin", ["nba-critical-bleeding-2025", "acsqhc-deterioration-2026"], "Acting on critical bleeding", "What should be reassessed after blood starts?", "Check perfusion, conscious state, ongoing loss, haemoglobin, lactate, calcium, fibrinogen, coagulation and temperature. The trend tells you whether resuscitation and haemostasis are catching up.", "Starting blood is not the end of resuscitation.", "Warmed red cells and protocol-guided support are now required.", "Avoid overshooting once circulation stabilises."),
    buildHint19("c019-hint-30", "run", "c019-run-blood-plan", "aim for haemoglobin 70 to 90", ["esge-variceal-2022", "baveno-vii-2022"], "Avoiding overtransfusion", "Why not push the haemoglobin to normal?", "After stabilisation, a restrictive target limits unnecessary transfusion and may reduce the pressure driving portal bleeding. Individualise if cardiovascular disease or ongoing shock changes the balance.", "The target applies after immediate resuscitation, not instead of it.", "Blood is treating poor perfusion; excessive replacement is also avoided.", "Begin cause-directed treatment now that the leading source is supported."),
    buildHint19("c019-hint-30b", "run", "c019-run-blood-plan", "Do not give fresh frozen plasma solely to correct the cirrhotic INR", ["nba-critical-bleeding-2025", "baveno-vii-2022"], "Avoiding routine haemostatic products", "Why not correct every abnormal result?", "Cirrhosis changes procoagulant and anticoagulant factors, so INR alone is a poor guide. Plasma, platelets and antifibrinolytic treatment are not routine here; individualise components to active bleeding, local protocol and specialist or viscoelastic guidance.", "An abnormal test needs interpretation before a product is given.", "Red cells and source-directed treatment continue while haemostasis is reassessed.", "Proceed to treatment for the now-supported leading source."),
    buildHint19("c019-hint-31", "run", "c019-run-variceal-plan", "Variceal bleeding is likely", ["esge-variceal-2022", "baveno-vii-2022"], "Starting treatment before proof", "Can treatment begin before the camera test?", "Yes. The cirrhosis, previous banding and current bleed make the suspicion strong enough for vasoactive treatment and antibiotic prophylaxis now, while endoscopy confirms and treats the source.", "Do not wait for proof when evidence supports time-sensitive treatment.", "Recurrent variceal bleeding is the leading diagnosis, not yet confirmed.", "Continue resuscitation and arrange timely endoscopy."),
    buildHint19("c019-hint-32", "run", "c019-run-variceal-plan", "within 12 hours of presentation after haemodynamic resuscitation", ["esge-variceal-2022", "baveno-vii-2022"], "Timing endoscopy safely", "Does within 12 hours mean before stabilisation?", "No. Resuscitation, airway assessment, vasoactive treatment and antibiotics start first. Endoscopy then provides definitive diagnosis and endoscopic haemostasis within the recommended window.", "Arrange endoscopy within 12 hours, but stabilise airway and circulation first.", "Cause-directed treatment and procedural preparation are underway.", "Confirm the medicines have started and answer Sami's uncertainty."),
    buildHint19("c019-hint-33", "run", "c019-run-treatment-action", "terlipressin and ceftriaxone are commenced", ["esge-variceal-2022", "baveno-vii-2022"], "Checking parallel treatment", "Why both medicines?", "Terlipressin lowers portal inflow and helps control suspected variceal bleeding. Ceftriaxone prevents infections that are common during acute variceal haemorrhage and are linked with worse outcomes.", "Each treatment addresses a different part of the risk.", "Blood replacement, vasoactive treatment, antibiotics and endoscopy preparation are active.", "Explain why the source is likely but not certain."),
    buildHint19("c019-hint-34", "run", "c019-run-patient-question", "definitely those veins again", ["acsqhc-communication-2026", "esge-variceal-2022"], "Answering diagnostic uncertainty", "How do I avoid either evasion or false certainty?", "Say they are the leading possibility and give the reasons, then name endoscopy as the test that will confirm the source. Also explain that urgent treatment has already begun because waiting would be unsafe.", "Tell him treatment is underway and that endoscopy still has to confirm the source.", "The likely cause is supported but still provisional.", "Give a short explanation and keep watching for deterioration."),
    buildHint19("c019-hint-35", "run", "c019-run-patient-explanation", "camera test must confirm the source", ["acsqhc-communication-2026", "esge-variceal-2022"], "Explaining the mechanism", "Why mention pressure rather than only naming the veins?", "It connects cirrhosis to raised portal pressure, enlarged oesophageal veins and bleeding. It also explains why vasoactive treatment and later pressure-reducing procedures may help.", "Mechanism should clarify the actions, not become a lecture.", "Sami knows what is suspected, what remains uncertain and what is being done.", "Return immediately to ABCDE if bleeding or consciousness changes."),
    buildHint19("c019-hint-36", "run", "c019-run-deterioration", "gurgling sounds and no longer follows instructions consistently", ["acsqhc-deterioration-2026", "esge-variceal-2022"], "Recognising an unsafe airway", "Which change matters most right now?", "Fresh active haematemesis, gurgling and reduced ability to follow instructions mean he may not protect his airway. Oxygen saturation, blood pressure and conscious state are also worsening.", "Stop the explanation. This is a new ABCDE emergency.", "Sami now has active major bleeding, shock and an unsafe airway.", "Call senior anaesthetics, suction and position him while resuscitation continues."),
    buildHint19("c019-hint-37", "run", "c019-run-airway", "controlled rapid-sequence intubation", ["acsqhc-deterioration-2026", "esge-variceal-2022"], "Securing the airway", "Why controlled intubation before endoscopy?", "He is actively vomiting blood with reduced consciousness and cannot reliably protect his airway. Senior anaesthetic intubation allows suction, oxygenation and safer endoscopy while critical-bleeding treatment continues.", "Airway treatment does not pause circulation treatment.", "The indication is now clear from deterioration, not from the original stem.", "Reassess pressure, pulse and lactate after airway and blood treatment."),
    buildHint19("c019-hint-38", "run", "c019-run-post-airway", "blood pressure is 102/64", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025"], "Reading the response", "Has the emergency ended because the pressure improved?", "No. Airway protection and blood have improved immediate physiology, but the bleeding source still needs endoscopic control and recurrence risk remains high.", "The better observations allow endoscopy to proceed, but repeated assessment is still required.", "Sami is intubated and circulation has responded enough to proceed.", "Request the endoscopy findings and liver-risk assessment."),
    buildHint19("c019-hint-39", "run", "c019-run-endoscopy-request", "endoscopy findings and current liver-risk assessment", ["esge-variceal-2022", "baveno-vii-2022"], "Requesting the decision-changing result", "Why ask for both source and liver risk?", "Endoscopy identifies and treats the lesion. Child-Pugh class and active bleeding identify whether endoscopic control alone leaves a high enough rebleeding risk to consider early portal decompression.", "Ask for both because each result changes what happens next.", "Immediate physiology is supported; definitive source information is due.", "Read source, haemostasis and risk class separately."),
    buildHint19("c019-hint-40", "run", "c019-run-endoscopy-result", "large oesophageal varices with active bleeding", ["esge-variceal-2022", "baveno-vii-2022"], "Confirming the source", "What is now confirmed rather than suspected?", "Active oesophageal varices caused the bleed. Band ligation has achieved endoscopic haemostasis, and Child-Pugh C12 places Sami in a high-risk group for further bleeding.", "Source control has occurred, but recurrence prevention is now urgent.", "The cause is confirmed only after endoscopy.", "Continue the proven medicines and discuss pre-emptive TIPS."),
    buildHint19("c019-hint-40b", "run", "c019-run-definitive-plan", "Continue vasoactive therapy for up to five days and ceftriaxone for up to seven", ["esge-variceal-2022", "baveno-vii-2022"], "Continuing early treatment", "Why continue after banding has stopped the bleed?", "Vasoactive therapy supports early haemostasis during the high-risk period, and antibiotic prophylaxis reduces infection-related complications. Continue for the recommended duration unless contraindications or the treating team require adjustment.", "Endoscopic control does not make the early medical treatment unnecessary.", "Banding has controlled the source and the supportive course continues.", "Use the Child-Pugh result to decide whether early TIPS is indicated."),
    buildHint19("c019-hint-41", "run", "c019-run-definitive-plan", "pre-emptive TIPS within 72 hours, preferably within 24 hours", ["esge-variceal-2022", "baveno-vii-2022"], "Preventing early rebleeding", "Why discuss TIPS after banding worked?", "Child-Pugh C with active bleeding at endoscopy predicts high failure and rebleeding risk. Early TIPS can reduce portal pressure before another uncontrolled bleed occurs.", "Banding has stopped this bleed, but the risk of early rebleeding remains high.", "Sami has high-risk confirmed variceal haemorrhage after initial haemostasis.", "Keep a rescue option ready if bleeding returns before definitive decompression."),
    buildHint19("c019-hint-42", "run", "c019-run-definitive-plan", "self-expanding metal stent in the oesophagus", ["esge-variceal-2022", "baveno-vii-2022"], "Planning for uncontrolled recurrence", "Is the stent or balloon the final treatment?", "No. Either provides temporary control when bleeding cannot be stopped, buying time for rescue TIPS. A self-expanding oesophageal stent is preferred where available; balloon tamponade requires experienced use and close monitoring.", "This is temporary bleeding control while definitive portal decompression is arranged.", "Early TIPS is planned, with rescue treatment ready if control fails.", "Now answer Mira using the current response without promising the outcome."),
    buildHint19("c019-hint-43", "run", "c019-run-sister-question", "going to survive this", ["acsqhc-communication-2026", "acsqhc-deterioration-2026"], "Responding to fear", "How honest should I be?", "Say it is life-threatening, then give the current facts: bleeding is controlled, circulation has improved, breathing is supported and intensive care and liver teams are continuing treatment. Do not promise an outcome.", "Acknowledge the danger and describe the improvements without promising survival.", "The immediate response is favourable, but risk remains substantial.", "Explain the next procedure in plain language, then stop at the handover prompt."),
    buildHint19("c019-hint-44", "run", "c019-run-sister-explanation", "banding has stopped the bleeding", ["acsqhc-communication-2026", "esge-variceal-2022"], "Explaining the current position", "Why mention both improvement and intensive care?", "Mira needs the balance: endoscopic control and better circulation are encouraging, but Sami still needs ventilation, close monitoring and assessment for a pressure-reducing shunt because early rebleeding remains possible.", "Reassurance should describe progress, not guarantee survival.", "The family explanation now matches Sami's current physiology and ongoing risk.", "When the examiner prompts, change immediately to clinical handover."),
    buildHint19("c019-hint-45", "run", "c019-run-time", "Please provide your handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Changing to handover", "What leads the final minute?", "Start with cirrhosis and major haematemesis, then the worst airway and circulation findings, critical-bleeding treatment, endoscopic diagnosis and control, current response and the pre-emptive and rescue plans.", "Do not continue counselling after the examiner changes the task.", "Responsibility is moving to the senior clinician.", "Deliver current risk and required action in a fixed clinical order."),
    buildHint19("c019-hint-46", "run", "c019-run-handover", "being assessed for pre-emptive TIPS", ["acsqhc-communication-2026", "esge-variceal-2022", "baveno-vii-2022"], "Closing the clinical transfer", "What makes this handover complete?", "It includes presentation, relevant background, deterioration, airway intervention, resuscitation, confirmed source, endoscopic control, current observations and the plan if bleeding recurs.", "The receiving team needs the next risk, not every normal finding.", "The full course and immediate escalation plan have been transferred.", "Stop when the examiner releases the station."),
    buildHint19("c019-hint-47", "run", "c019-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I add one more management point?", "No. The station has ended. Take one breath and begin the next case from its own stem, tasks and evidence.", "Extra speech after release cannot improve this station.", "Case 19 is complete.", "Start the next reading period at its first line.")
  ];
  caseNineteen.hints.forEach(function (hint, index) { hint.id = "c019-hint-" + String(index + 1).padStart(2, "0"); });
})();
