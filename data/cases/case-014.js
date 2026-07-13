(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-014",
    globalId: "CP-C014",
    registryId: "CP-P4-C003",
    displayNumber: "Case 14",
    title: "Chills and tiredness after chemotherapy",
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
          id: "c014-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c014-stem-patient",
          text: "Ms Celeste Moretti, a 46-year-old woman, attends with chills, tiredness and a sore mouth since last night. She received chemotherapy eight days ago. Her partner, Jonah, is with her."
        },
        {
          id: "c014-stem-start",
          text: "Celeste is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c014-task-history-assess",
          text: "Obtain a focused history and assess Celeste's current condition.",
          timing: "3 minutes"
        },
        {
          id: "c014-task-interpret",
          text: "Interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c014-task-explain",
          text: "Explain your concerns and management plan to Celeste and Jonah.",
          timing: "1 minute"
        },
        {
          id: "c014-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c014-run-assessment",
          heading: "Focused assessment and risk recognition",
          turns: [
            {
              id: "c014-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-start", text: "You may begin." }]
            },
            {
              id: "c014-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c014-run-first-action", text: "The doctor performs hand hygiene and approaches Celeste." }]
            },
            {
              id: "c014-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-intro", text: "Hello, I am Ushana, one of the doctors here. Could I confirm your full name and what has worried you most today?" }]
            },
            {
              id: "c014-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-opening", text: "Celeste Moretti. I kept shivering last night and feel completely drained, but my temperature is not very high now." }]
            },
            {
              id: "c014-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-consent", text: "I will check you while we talk. Is it okay for Jonah to stay and help with the timeline?" }]
            },
            {
              id: "c014-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-consent-answer", text: "Yes." }]
            },
            {
              id: "c014-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-primary", text: "I assess airway, breathing, circulation and conscious state. Check respiratory rate, oxygen saturation, pulse, blood pressure, temperature, capillary refill and glucose. Examine the mouth, chest, abdomen and skin, without a rectal temperature or rectal examination. Please provide the findings." }]
            },
            {
              id: "c014-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c014-run-primary-findings", text: "Celeste's airway is patent. Respiratory rate is 23 breaths per minute, oxygen saturation is 96% on room air, pulse is 116 beats per minute and regular, blood pressure is 104/64 mmHg, temperature is 37.8 degrees Celsius and capillary refill time is three seconds. GCS is 15 and glucose is 6.8 mmol/L. She looks pale and is shivering. There are several oral ulcers without airway swelling. Chest and abdominal examinations are unremarkable, with no rash or wound." }]
            },
            {
              id: "c014-turn-history-chemo",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-history-chemo", text: "Which cancer is being treated, when was your last chemotherapy, and did oncology give you a fever plan? Do you have a central line?" }]
            },
            {
              id: "c014-turn-history-chemo-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-history-chemo-answer", text: "Breast cancer. The cycle was eight days ago, and they said my counts may fall around now. I have a PICC in my right arm. My card says to call if my temperature reaches 38." }]
            },
            {
              id: "c014-turn-fever-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-fever-history", text: "What was your highest temperature, and did you take anything for it? Any shaking chills? Did you receive a white-cell growth injection?" }]
            },
            {
              id: "c014-turn-fever-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-fever-history-answer", text: "It was 38.3 at 6 am, then I took paracetamol. I had shaking chills overnight and no growth injection." }]
            },
            {
              id: "c014-turn-source-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-source-history", text: "Any cough, breathlessness, urine symptoms, diarrhoea, abdominal or anal pain, skin change or pain around the PICC? Can you drink?" }]
            },
            {
              id: "c014-turn-source-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-source-history-answer", text: "No cough, urine problem, diarrhoea, abdominal or anal pain, skin change or line pain. My mouth hurts and I have hardly drunk today. Jonah had a cold last week." }]
            },
            {
              id: "c014-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-background", text: "Any recent antibiotic, hospital admission, resistant infection or medicine allergy? I would also inspect the PICC site." }]
            },
            {
              id: "c014-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-background-answer", text: "No to all of those." }]
            },
            {
              id: "c014-turn-line-finding",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c014-run-line-finding", text: "The PICC site is clean and non-tender." }]
            }
          ]
        },
        {
          id: "c014-run-management",
          heading: "Interpretation and transfer plan",
          turns: [
            {
              id: "c014-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-recognition", text: "Chemotherapy eight days ago, rigors, a home temperature of 38.3, tachycardia, slow refill and mucositis make neutropenic sepsis possible. Paracetamol can lower the measured temperature, and impaired immunity can blunt fever. I will not wait for a clinic blood count before arranging care." }]
            },
            {
              id: "c014-turn-actions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-actions", text: "Call Triple Zero for a monitored ambulance and contact acute oncology and the receiving emergency department now. Record the presentation and recognition times and monitor observations. Check whether today's chemotherapy blood result is available. If intravenous access can be obtained without delaying transfer, give 250 to 500 millilitres of Hartmann's for delayed perfusion, then reassess. Her saturation is adequate, so do not give routine oxygen." }]
            },
            {
              id: "c014-turn-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c014-run-action", text: "The ambulance, acute oncology team and emergency department are contacted. Intravenous access is obtained and a measured Hartmann's bolus begins without delaying transfer." }]
            },
            {
              id: "c014-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c014-run-results", text: "A routine chemotherapy blood sample taken this morning now reports white cell count 0.5, neutrophils 0.1, haemoglobin 91 and platelets 74. Kidney and liver function are unchanged. The ambulance is eight minutes away." }]
            },
            {
              id: "c014-turn-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-interpret", text: "This confirms profound neutropenia with suspected infection and impaired perfusion. She needs the hospital neutropenic-sepsis pathway. Blood cultures should come from a peripheral vein and each PICC lumen, without delaying antibiotics. With no penicillin allergy, piperacillin-tazobactam 4.5 grams intravenously is an appropriate local first dose, due within 30 minutes of presentation or clinical recognition, whichever was earlier. Choice must still follow her oncology plan, prior cultures and local resistance guidance." }]
            },
            {
              id: "c014-turn-transfer-detail",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-transfer-detail", text: "Confirm directly with the ambulance and receiving emergency clinician that the first dose will start within that 30-minute window. If they cannot meet it, arrange immediate pre-transfer piperacillin-tazobactam through the local clinic or ambulance pathway after senior and oncology advice, without delaying departure. She needs admission, frequent observations and source review. Avoid rectal examination, rectal medicines and intramuscular injections while counts are low." }]
            },
            {
              id: "c014-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c014-run-patient-question", text: "My temperature is below 38 now. Could Jonah drive me home and watch it for another hour?" }]
            },
            {
              id: "c014-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-patient-answer", text: "No. The earlier fever, shaking and circulation changes matter more than this one reading. With extremely low neutrophils, infection can worsen quickly and show few local symptoms. You need monitored ambulance transfer and intravenous treatment, not home observation or a private car." }]
            },
            {
              id: "c014-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-time", text: "Please explain your concerns and management plan to Celeste and Jonah." }]
            }
          ]
        },
        {
          id: "c014-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c014-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-explanation", text: "Celeste and Jonah, chemotherapy has reduced the neutrophils that fight infection. Your count is 0.1, which is profoundly low. The fever, chills, fast pulse and slow circulation mean we must treat this as neutropenic sepsis even without a clear source." }]
            },
            {
              id: "c014-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-plan", text: "The ambulance will take you to hospital while oncology and the emergency team prepare. We are confirming that intravenous antibiotics will start within the 30-minute pathway window. Cultures must not delay them. You will be admitted, monitored and checked for the infection source." }]
            },
            {
              id: "c014-turn-reassurance",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c014-run-reassurance", text: "You did the right thing by coming. With this chemotherapy timing and blood count, it is unsafe to wait for a higher fever or clearer symptoms." }]
            },
            {
              id: "c014-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-handover-prompt", text: "Please finish with a concise handover to the receiving emergency clinician." }]
            },
            {
              id: "c014-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c014-run-handover", text: "Celeste Moretti is 46 and day eight after breast-cancer chemotherapy. She had rigors and a home temperature of 38.3 before paracetamol. Pulse is 116, pressure 104/64 and refill three seconds. Neutrophils are 0.1 and platelets 74. She has mucositis, a clean PICC and no other clear source; she reports no anal pain. Oncology and ED are alerted, monitored ambulance transfer is underway, and the first protocol antibiotic must start within 30 minutes of presentation or clinical recognition, whichever was earlier." }]
            },
            {
              id: "c014-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c014-run-end", text: "Thank you. The station is complete." }]
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
        title: "Adult Sepsis Primary Healthcare Screening Tool",
        date: "Current tool accessed July 2026",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0019/1381330/adult-sepsis-screening-tool.pdf"
      },
      {
        organisation: "eviQ, Cancer Institute NSW",
        title: "Neutropenic fever: Patient evaluation, risk assessment and immediate management",
        date: "ID 123 version 7, reviewed July 2026",
        url: "https://www.eviq.org.au/p/123"
      }
    ]
  });

  var caseFourteen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-014"; });
  function buildHint14(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseFourteen.masteryFocus = {
    case: "Assess post-chemotherapy chills and fatigue, then use the full timeline and current condition to decide how urgently treatment and transfer are needed.",
    clinical: "Judge immune-compromised patients from the whole timeline and physiology, not from one reassuring reading or the absence of a clear source.",
    tasks: [
      "Focused history and assessment",
      "Interpret and discuss management",
      "Explain concerns and plan",
      "Concise clinical handover"
    ],
    transfer: "A patient ten days after chemotherapy reports rigors and a measured fever before paracetamol, but is now 37.4 degrees and the neutrophil count is pending. What makes the next decision time critical?",
    transferAnswer: "The earlier measured fever and rigors count; paracetamol and a normal temperature now do not make the episode safe, and treatment must not wait for the neutrophil result. Arrange urgent monitored assessment and follow the neutropenic-fever antibiotic deadline: within one hour if there is systemic compromise, otherwise within the locally defined timeframe.",
    transferChecks: [
      "Chemotherapy timing and expected nadir",
      "Recorded temperature before paracetamol",
      "Current perfusion and organ dysfunction",
      "Cultures and ANC must not delay antibiotics"
    ],
    transferCitationIds: ["eviq-neutropenic-fever-2026"]
  };
  caseFourteen.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-sepsis-2022", title: "Sepsis Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "2022 standard, current July 2026", url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis" },
    { id: "qld-primary-sepsis-2026", title: "Adult Sepsis Primary Healthcare Screening Tool", organisation: "Queensland Health", date: "Current July 2026", url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0019/1381330/adult-sepsis-screening-tool.pdf" },
    { id: "eviq-neutropenic-fever-2026", title: "Neutropenic fever: Patient evaluation, risk assessment and immediate management", organisation: "eviQ, Cancer Institute NSW", date: "ID 123 version 7, reviewed July 2026", url: "https://www.eviq.org.au/p/123" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseFourteen.reasoningCompass = {
    stem: {
      title: "Hold the timeline and the four tasks",
      steps: [
        { time: "0 to 30 seconds", text: "Note the GP setting, chemotherapy eight days ago and symptoms since last night. Plan immediate observations while taking the focused history." },
        { time: "30 to 60 seconds", text: "Prepare questions about highest temperature, antipyretics, rigors, oncology instructions, expected count nadir, line, mucositis and possible sources." },
        { time: "1 to 2 minutes", text: "Set the task change points: history and condition to minute 3, interpretation and management to minute 6, explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History and condition 0 to 3 | Interpret and manage 3 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Use the whole timeline, not one temperature",
      steps: [
        { time: "0 to 3 minutes", text: "Obtain ABCDE observations while asking the chemotherapy, fever and source questions. Escalate immediately if the timeline and physiology are concerning." },
        { time: "3 to 6 minutes", text: "Interpret the available results, coordinate safe transfer, protect time-critical treatment and state which pre-transfer actions depend on local capability." },
        { time: "6 to 8 minutes", text: "At the prompt, explain why waiting is unsafe, then hand over the timeline, key result, perfusion, source review and treatment deadline." }
      ],
      anchor: "If breathing, circulation or conscious state worsens, interrupt routine questions, repeat ABCDE and escalate; then return to the question or action you paused."
    }
  };
  caseFourteen.hints = [
    buildHint14("c014-hint-01", "stem", "c014-stem-role", "suburban medical clinic", ["amc-spec-2026", "amc-tips-2024"], "Reading the setting", "Can a clinic manage this as a routine review?", "The clinic can assess, monitor and begin treatment, but it cannot provide definitive emergency care. Decide early whether transfer is needed and do not let clinic tests delay it.", "Setting changes capability, not severity.", "This starts in primary care with hospital support available by transfer.", "Read the chemotherapy timing before deciding urgency."),
    buildHint14("c014-hint-02", "stem", "c014-stem-patient", "46-year-old woman", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age", "Does her age help much?", "Not yet. At 46, serious illness can still present subtly after cancer treatment. The recent treatment and current physiology matter more than age.", "Her age is not reassuring after recent treatment.", "Celeste's baseline risk depends on treatment and timing.", "Read the symptoms and when chemotherapy occurred."),
    buildHint14("c014-hint-03", "stem", "c014-stem-patient", "chills, tiredness and a sore mouth since last night", ["acsqhc-deterioration-2026"], "Reading the first symptoms", "These sound mild. Am I overreacting?", "Chills may represent rigors, tiredness may reflect systemic illness and a sore mouth may mean mucosal injury. After chemotherapy, ordinary words can carry more risk.", "Severity cannot be judged from dramatic wording.", "There may be infection and a damaged entry barrier.", "Place these symptoms beside the chemotherapy date."),
    buildHint14("c014-hint-04", "stem", "c014-stem-patient", "chemotherapy eight days ago", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Reading treatment timing", "Why does day eight matter?", "Blood counts often fall after chemotherapy, but the exact pattern depends on the regimen. This timing makes immune suppression plausible and should trigger the oncology fever plan and count history.", "Timing raises concern; it does not provide the blood count.", "Celeste may be near the expected low-count period.", "Ask about fever, antipyretics, rigors, growth-factor support and oncology instructions."),
    buildHint14("c014-hint-05", "stem", "c014-stem-patient", "Her partner, Jonah, is with her", ["acsqhc-communication-2026"], "Using support safely", "Can Jonah supply the history?", "Ask Celeste first and obtain permission. Jonah can help with the overnight timeline and transport details while you continue assessment.", "Support does not replace consent.", "Jonah may add useful collateral information.", "Keep Celeste central and use him when fatigue limits detail."),
    buildHint14("c014-hint-06", "stem", "c014-stem-start", "findings and investigation results when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning requests", "What must I say aloud?", "Request ABCDE observations, a focused source examination and treatment-specific results. In a clinic station, also state what must not be delayed while results are sought.", "Requested information is part of the task.", "You need both current condition and the earlier timeline.", "Prepare a short history that runs beside observations."),
    buildHint14("c014-hint-07", "stem", "c014-task-history-assess", "focused history and assess Celeste's current condition", ["amc-spec-2026", "amc-tips-2024", "acsqhc-deterioration-2026"], "Anchoring task one", "History first, then examination?", "They run together. Ask the critical chemotherapy and fever questions while checking airway, breathing, circulation, conscious state and glucose.", "Parallel work protects time and safety.", "The first three minutes combine history and physiology.", "Obtain observations before expanding the source history."),
    buildHint14("c014-hint-task-interpret", "stem", "c014-task-interpret", "Interpret the information provided and discuss your management", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task two", "What changes at minute three?", "Stop asking routine questions. Use only what has been provided by then: what does it mean, has the urgency changed, and what must happen now?", "Interpretation connects the evidence you have to the next decision.", "Minutes 3 to 6 are for meaning, urgency and management.", "At minute 6, leave the technical discussion and speak to Celeste and Jonah."),
    buildHint14("c014-hint-task-explain", "stem", "c014-task-explain", "Explain your concerns and management plan", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task three", "How is this different from discussion?", "For one minute, speak to Celeste and Jonah. Explain why the whole timeline is concerning, why waiting is unsafe and what transfer and treatment involve.", "Change from clinical terms to everyday language.", "Minute 6 to 7 belongs to explanation.", "Reserve the final minute for clinical handover."),
    buildHint14("c014-hint-08", "stem", "c014-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "What makes this handover useful?", "Use four blocks: why she presented; the most important findings available by then; treatment and response; then the next urgent action.", "Keep only facts that change current care.", "The final minute transfers risk and unfinished treatment.", "Keep a brief running note as each important fact appears."),
    buildHint14("c014-hint-09", "run", "c014-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What do I do first?", "Introduce yourself, hear her priority and begin observations while you talk. The focused history and condition assessment start together.", "Keep the opening history short enough to assess her physiology.", "You have three minutes for history plus current condition.", "Listen for what changed overnight and what may be hidden by treatment."),
    buildHint14("c014-hint-10", "run", "c014-run-intro", "what has worried you most today", ["acsqhc-communication-2026", "amc-tips-2024"], "Opening with her concern", "Why ask her concern in an emergency?", "It gives you her symptom priority and shows how well she can speak and think. You can then redirect quickly to the timeline and observations.", "Patient-centred does not mean slow.", "Celeste can answer, but looks unwell until proven otherwise.", "Hear her first account without accepting its reassurance."),
    buildHint14("c014-hint-11", "run", "c014-run-opening", "temperature is not very high now", ["acsqhc-deterioration-2026"], "Hearing apparent reassurance", "Could the lower temperature make this safe?", "That single lower reading isn't enough. Ask for the highest reading and whether paracetamol was taken. Immune suppression can also reduce the fever response, so the whole timeline matters.", "A current reading cannot erase an earlier fever.", "Rigors and profound fatigue remain concerning.", "Confirm consent for Jonah, then obtain ABCDE observations."),
    buildHint14("c014-hint-12", "run", "c014-run-consent", "Is it okay for Jonah to stay", ["acsqhc-communication-2026"], "Including Jonah", "Is this worth the seconds?", "Yes. A brief permission protects privacy and lets him help with the timeline if Celeste tires.", "Urgency and respect can coexist.", "Jonah is now an approved support person.", "Move immediately to current condition."),
    buildHint14("c014-hint-13", "run", "c014-run-primary", "airway, breathing, circulation and conscious state", ["acsqhc-deterioration-2026"], "Assessing physiology", "What am I trying to catch?", "Respiratory failure, impaired circulation, altered conscious state and glucose disturbance. The mouth, line, chest, abdomen and skin then look for a source without unsafe rectal procedures.", "Current physiology decides urgency.", "The source may be subtle or absent.", "Read respiratory rate, pulse, pressure, refill and appearance together."),
    buildHint14("c014-hint-14", "run", "c014-run-primary-findings", "pulse is 116 beats per minute", ["acsqhc-deterioration-2026"], "Reading the observations", "Is a normal oxygen level reassuring?", "Only about oxygenation. Respiratory rate 23 and pulse 116 already show physiological stress despite a pressure that is not yet low.", "One normal vital sign cannot cancel the others.", "Celeste is physiologically unwell.", "Keep reading for temperature, refill and appearance."),
    buildHint14("c014-hint-15", "run", "c014-run-primary-findings", "temperature is 37.8 degrees Celsius", ["acsqhc-deterioration-2026"], "Interpreting the clinic temperature", "Below 38. Can I step back?", "It is one reading at one time. Her current tachycardia, rapid breathing and treatment timing still require the earlier fever history and oncology plan.", "Use the timeline, not a cut-off in isolation.", "Current temperature does not settle risk.", "Keep reading for perfusion and appearance, then obtain the treatment-specific history."),
    buildHint14("c014-hint-16", "run", "c014-run-primary-findings", "several oral ulcers", ["acsqhc-deterioration-2026"], "Reading mucosal injury", "Are mouth ulcers just a side effect?", "They may be chemotherapy mucositis. Damaged mucosa is painful, reduces intake and can provide an entry point for infection when white cells are low.", "A treatment side effect can also change infection risk.", "Mouth pain and poor intake now matter clinically.", "Ask about regimen, count timing, fever instructions and the PICC."),
    buildHint14("c014-hint-17", "run", "c014-run-history-chemo", "did oncology give you a fever plan", ["acsqhc-communication-2026", "amc-tips-2024"], "Using the existing plan", "Why ask about her card?", "The regimen-specific plan may define expected count timing, fever action and antibiotic pathway. It is more useful than guessing from a generic chemotherapy schedule.", "Use existing specialist instructions when available.", "The exact regimen risk is not yet known.", "Hear what oncology told Celeste and whether she has central access."),
    buildHint14("c014-hint-18", "run", "c014-run-history-chemo-answer", "my counts may fall around now", ["acsqhc-deterioration-2026"], "Connecting treatment and timing", "Does this confirm low neutrophils?", "No, but it makes low counts plausible enough that a fever history will change urgency before a clinic count returns.", "Suspected low counts are enough to change the assessment.", "Day eight matches her own oncology warning.", "Keep reading for central access, then ask the highest temperature, paracetamol and rigors."),
    buildHint14("c014-hint-19", "run", "c014-run-fever-history", "highest temperature", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Recovering the true fever history", "Why not use the clinic number?", "Because antipyretics and time can lower it. The maximum measured temperature and when it occurred preserve the clinically important event.", "A treatment-altered observation needs its pre-treatment value.", "The current 37.8 may be misleading.", "Ask exactly what she took and whether the chills were shaking rigors."),
    buildHint14("c014-hint-20", "run", "c014-run-fever-history-answer", "38.3 at 6 am, then I took paracetamol", ["eviq-neutropenic-fever-2026", "acsqhc-sepsis-2022"], "Restoring the timeline", "Is there enough evidence for a leading diagnosis now?", "Yes, as a working emergency diagnosis. Fever before paracetamol, recent chemotherapy, expected count fall and current physiological stress make possible neutropenic sepsis the leading concern.", "The diagnosis is provisional; the action is urgent.", "Possible neutropenic sepsis now leads.", "Check possible sources, hydration and resistance or allergy history while arranging escalation."),
    buildHint14("c014-hint-21", "run", "c014-run-source-history", "abdominal or anal pain", ["eviq-neutropenic-fever-2026"], "Checking difficult sources safely", "Why ask about anal pain but avoid examination?", "Perianal infection can be important when neutrophils are low, but rectal examination can injure mucosa and introduce infection. Ask and inspect externally only when indicated.", "A source question does not require an unsafe procedure.", "No source has yet been established.", "Complete the mouth, line, skin, chest, urinary and gastrointestinal review."),
    buildHint14("c014-hint-22", "run", "c014-run-source-history-answer", "hardly drunk today", ["acsqhc-deterioration-2026", "qld-primary-sepsis-2026"], "Reading intake and perfusion", "Is the slow refill only dehydration?", "Poor intake may contribute, but it cannot safely explain rigors and treatment-related immune risk. A measured fluid trial may help perfusion while emergency transfer proceeds.", "Dehydration may coexist with infection; it does not explain the whole presentation.", "There may be both volume depletion and infection.", "Check allergy, recent antibiotics, resistant organisms and the PICC site."),
    buildHint14("c014-hint-23", "run", "c014-run-line-finding", "clean and non-tender", ["eviq-neutropenic-fever-2026"], "Interpreting a normal line site", "Does this exclude a line infection?", "It lowers concern for a local exit-site infection, but bloodstream infection can occur without redness or tenderness. Cultures still need to include each lumen when the hospital pathway starts.", "Normal local appearance does not exclude bloodstream infection.", "There is still no clear source.", "Combine timing, fever and physiology and state the leading emergency concern."),
    buildHint14("c014-hint-24", "run", "c014-run-recognition", "make neutropenic sepsis possible", ["eviq-neutropenic-fever-2026", "acsqhc-sepsis-2022", "qld-primary-sepsis-2026"], "Naming the leading concern", "Is there enough evidence to act on this diagnosis?", "Yes, as a working emergency diagnosis. Chemotherapy timing, documented fever, rigors, mucositis, tachycardia and slow refill justify treating this as possible neutropenic sepsis before the count or source is confirmed.", "The diagnosis is provisional; the action is urgent.", "Possible neutropenic sepsis is now the leading concern.", "Interrupt routine history and arrange monitored transfer and oncology contact."),
    buildHint14("c014-hint-25", "run", "c014-run-actions", "Call Triple Zero for a monitored ambulance", ["eviq-neutropenic-fever-2026", "qld-primary-sepsis-2026"], "Escalating from the clinic", "Could Jonah drive her faster?", "A private car would be unsafe. She has circulation changes and may deteriorate. Monitored ambulance transfer allows reassessment and coordinated handover while the receiving team prepares.", "Transfer is part of treatment when the clinic cannot provide definitive care.", "Emergency escalation has interrupted the routine sequence appropriately.", "Monitor, obtain access if it causes no delay and confirm the antibiotic plan."),
    buildHint14("c014-hint-26", "run", "c014-run-results", "neutrophils 0.1", ["eviq-neutropenic-fever-2026", "acsqhc-sepsis-2022"], "Interpreting the count", "What changes now?", "The count confirms profound neutropenia. Combined with fever and impaired perfusion, this strengthens the diagnosis and the need for immediate broad-spectrum intravenous antibiotics and admission.", "The result confirms risk; it should not be the start of concern.", "Possible infection is occurring with almost no neutrophil defence.", "Protect the antibiotic time and obtain cultures without delay."),
    buildHint14("c014-hint-27", "run", "c014-run-interpret", "within 30 minutes of presentation or clinical recognition", ["eviq-neutropenic-fever-2026"], "Protecting the antibiotic deadline", "Which clock counts?", "Use the earlier of presentation or clinical recognition as the pathway states. Cultures are useful, but they must not push antibiotics beyond the required time.", "A time-critical treatment needs an explicit owner.", "The receiving pathway and first dose must be confirmed.", "State the local first choice, allergy check and factors that may alter it."),
    buildHint14("c014-hint-28", "run", "c014-run-transfer-detail", "If they cannot meet it", ["eviq-neutropenic-fever-2026", "acsqhc-communication-2026"], "Handling a conditional action", "Must I always give antibiotics in the clinic?", "Not automatically. Confirm whether ambulance or hospital can meet the deadline. If not, use the local pre-transfer pathway after senior and oncology advice without delaying departure.", "State what is required and what depends on local capability.", "Timely antibiotics are required; the delivery location is conditional.", "Also avoid rectal procedures and intramuscular injections while counts are low."),
    buildHint14("c014-hint-29", "run", "c014-run-patient-question", "Could Jonah drive me home", ["acsqhc-communication-2026", "eviq-neutropenic-fever-2026"], "Hearing the real concern", "She sees a lower temperature. How do I answer?", "Acknowledge why waiting sounds reasonable, then explain that the earlier fever, rigors, very low neutrophils and circulation changes predict risk better than the current number.", "Answer the belief behind the question.", "Celeste is asking whether the emergency assessment is truly necessary.", "Give a clear no, the reason and the safer alternative."),
    buildHint14("c014-hint-30", "run", "c014-run-patient-answer", "few local symptoms", ["eviq-neutropenic-fever-2026", "acsqhc-communication-2026"], "Explaining muted inflammation", "Why can infection look quiet?", "Neutrophils create much of the local inflammatory response. When they are profoundly low, serious infection may produce less redness, pus or focal pain, not less danger.", "Few symptoms are not reassuring in this context.", "The absence of a source fits the immune state.", "At the prompt, switch from management detail to explanation."),
    buildHint14("c014-hint-31", "run", "c014-run-time", "Please explain your concerns", ["amc-spec-2026", "amc-tips-2024"], "Turning to Celeste and Jonah", "What if I still have management points?", "The management discussion is complete. Tell Celeste and Jonah what the low count means, why one temperature is misleading and what will happen during transfer and admission.", "The prompt has changed your audience.", "Interpretation and management are complete.", "Use short causal sentences and check that the plan is clear."),
    buildHint14("c014-hint-32", "run", "c014-run-explanation", "neutrophils that fight infection", ["eviq-neutropenic-fever-2026", "acsqhc-communication-2026"], "Explaining the biology", "How much detail is enough?", "Chemotherapy has lowered the white cells that normally contain infection. That is why fever, rigors and circulation changes require treatment even when no source is obvious.", "Mechanism should clarify the plan, not become a lecture.", "They understand why the low count changes risk.", "Explain monitored transfer, antibiotics, cultures and admission."),
    buildHint14("c014-hint-33", "run", "c014-run-plan", "Cultures must not delay them", ["eviq-neutropenic-fever-2026", "acsqhc-communication-2026"], "Explaining priorities", "Will cultures still matter?", "Yes. Cultures may identify the organism and refine treatment, but broad treatment must begin first when waiting would be unsafe.", "Useful information can come after time-critical care begins.", "The plan balances immediate treatment and later precision.", "Reassure her that coming in was appropriate, then prepare the handover."),
    buildHint14("c014-hint-34", "run", "c014-run-reassurance", "unsafe to wait for a higher fever", ["eviq-neutropenic-fever-2026", "acsqhc-communication-2026"], "Giving grounded reassurance", "What reassurance is honest?", "Reassure her that coming early was appropriate and that the team is acting before deterioration, not that everything will be fine.", "Confidence comes from a clear plan, not promises.", "Celeste's action was timely.", "Switch to the required clinical handover."),
    buildHint14("c014-hint-35", "run", "c014-run-handover-prompt", "concise handover", ["acsqhc-communication-2026", "amc-spec-2026"], "Changing audience", "What does the receiving clinician need first?", "Lead with day eight after chemotherapy, earlier 38.3 fever and rigors, perfusion findings and neutrophils 0.1. Then give source review, allergy status, transfer and antibiotic deadline.", "Change from patient language to a selective clinical summary.", "The final task transfers urgency and responsibility.", "Name the unfinished first-dose action explicitly."),
    buildHint14("c014-hint-36", "run", "c014-run-handover", "first protocol antibiotic must start within 30 minutes", ["eviq-neutropenic-fever-2026", "acsqhc-communication-2026"], "Closing the handover", "Why finish with the deadline?", "It tells the receiving clinician exactly what remains time critical and prevents the transfer from resetting responsibility.", "A handover must preserve unfinished action.", "Risk, evidence and next treatment are transferred.", "Stop when the handover is complete and wait for the examiner."),
    buildHint14("c014-hint-37", "run", "c014-run-end", "The station is complete", ["amc-tips-2024"], "Letting the station finish", "Should I replay what I missed?", "Let this station end. Take one breath, then read the next role, setting and tasks without carrying this diagnosis forward.", "The next patient starts with new evidence.", "Case 14 is complete.", "Begin the next stem from the first line." )
  ];
  caseFourteen.hints.forEach(function (hint, index) { hint.id = "c014-hint-" + String(index + 1).padStart(2, "0"); });
  caseFourteen.essentialHintIds = [
    "c014-hint-04", "c014-hint-07", "c014-hint-08", "c014-hint-09",
    "c014-hint-10", "c014-hint-13", "c014-hint-16", "c014-hint-22",
    "c014-hint-26", "c014-hint-27", "c014-hint-28", "c014-hint-29",
    "c014-hint-31", "c014-hint-33", "c014-hint-37", "c014-hint-39"
  ];
  var clockByHint14 = {
    "c014-hint-07": "Minutes 0 to 3: the focused history and current-condition assessment run together.",
    "c014-hint-27": "Danger interrupts the sequence: arrange monitored transfer now, then continue only questions that change treatment.",
    "c014-hint-29": "Protect the antibiotic deadline from the earlier of presentation or clinical recognition.",
    "c014-hint-33": "Minute 6: turn from management detail to a one-minute explanation.",
    "c014-hint-37": "Final minute: transfer the fever timeline, perfusion, neutrophil count and unfinished antibiotic action.",
    "c014-hint-39": "Time is complete. One breath, then begin the next stem from its first line."
  };
  var deeperByHint14 = {
    "c014-hint-10": ["If they have been provided, keep the treatment timing, highest recorded temperature, current observations, important results, actions completed and unfinished work together."],
    "c014-hint-18": ["Chemotherapy can damage the mouth lining. Mucosal injury plus very low neutrophils creates both an entry point for infection and a weaker local inflammatory response."],
    "c014-hint-28": ["Neutrophils normally contain bacterial and fungal infection. At 0.1 × 10⁹/L, even a quiet-looking infection can progress quickly."],
    "c014-hint-32": ["Fewer neutrophils can mean less redness, pus and focal pain. A muted local response is not the same as a mild infection."]
  };
  caseFourteen.hints.forEach(function (hint) {
    if (clockByHint14[hint.id]) hint.clock = clockByHint14[hint.id];
    if (deeperByHint14[hint.id]) hint.deeper = deeperByHint14[hint.id];
  });
})();
