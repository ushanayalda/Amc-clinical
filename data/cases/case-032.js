(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-032",
    globalId: "CP-C032",
    registryId: "CP-P10-C003",
    displayNumber: "Case 32",
    title: "Ongoing bleeding after a vaginal birth",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 10, title: "Obstetric Catastrophe" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c032-stem-role",
          text: "You are a doctor working in the birth suite."
        },
        {
          id: "c032-stem-patient",
          text: "Ms Talia Novak, a 34-year-old woman, is 40 minutes after a vaginal birth and has ongoing vaginal bleeding."
        },
        {
          id: "c032-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c032-task-history",
          text: "Take a focused history from Talia.",
          timing: "2 minutes"
        },
        {
          id: "c032-task-assess",
          text: "Assess Talia and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c032-task-manage",
          text: "Initiate management and explain your assessment and plan to Talia.",
          timing: "3 minutes"
        },
        {
          id: "c032-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c032-run-history",
          heading: "Focused history and rapid assessment",
          turns: [
            {
              id: "c032-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-start", text: "You may begin." }]
            },
            {
              id: "c032-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c032-run-first-action", text: "The doctor performs hand hygiene and approaches Talia while the midwife remains at the bedside." }]
            },
            {
              id: "c032-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-intro", text: "Hello Talia, I am Ushana, a birth-suite doctor. Please confirm your full name. May I assess you and ask brief questions while the team helps?" }]
            },
            {
              id: "c032-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-consent", text: "Talia Novak. Yes. I feel faint, cold and very weak, and the bleeding has not stopped." }]
            },
            {
              id: "c032-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-symptom-question", text: "While I call senior obstetrics, anaesthesia, the senior midwife, haematology and blood bank and alert theatre and intensive care, tell me: any breathlessness, chest pain, severe abdominal or vaginal pain, headache or visual change? Was labour prolonged or assisted? Any placental problem?" }]
            },
            {
              id: "c032-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-symptom-answer", text: "I am breathless but have no chest pain, headache or visual problem. Labour was long and ended with a vacuum. My son weighed 4.1 kilograms and the placenta looked complete." }]
            },
            {
              id: "c032-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-background-question", text: "What medicine followed birth? Any asthma, high blood pressure, bleeding problem, regular medicine or allergy? Would you accept blood products?" }]
            },
            {
              id: "c032-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-background-answer", text: "I had the oxytocin injection. I use an asthma preventer and occasional salbutamol. I have no high blood pressure, bleeding problem, blood thinner or allergy, and accept blood." }]
            },
            {
              id: "c032-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-primary-request", text: "I review airway, breathing, circulation, conscious state and perfusion while obtaining observations and quantified blood loss." }]
            },
            {
              id: "c032-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-primary-findings", text: "Airway is patent. Talia is pale, clammy and drowsy but responds appropriately. Respiratory rate is 28, oxygen saturation 92% on room air, pulse 134 and regular, blood pressure 72/40 and capillary refill five seconds. Measured blood loss is 1300 mL and rising." }]
            },
            {
              id: "c032-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-interpretation", text: "This is primary postpartum haemorrhage with haemorrhagic shock. Prolonged labour, assisted birth and a large baby favour uterine atony. Resuscitation and bleeding control must occur together." }]
            }
          ]
        },
        {
          id: "c032-run-management",
          heading: "Concurrent resuscitation and haemorrhage control",
          turns: [
            {
              id: "c032-turn-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-resuscitation", text: "Lie Talia flat, keep her warm and give oxygen at 15 litres per minute by reservoir mask. Apply continuous ECG, saturation and frequent blood-pressure monitoring. Continue quantified loss. Insert two 14 to 16 gauge intravenous cannulas and a catheter for hourly urine output." }]
            },
            {
              id: "c032-turn-resuscitation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c032-run-resuscitation-action", text: "The midwifery and anaesthetic teams position Talia, provide oxygen, attach monitoring, establish two large intravenous lines and insert the catheter." }]
            },
            {
              id: "c032-turn-blood-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-blood-plan", text: "Send full blood count, electrolytes, coagulation with fibrinogen, arterial blood gas and lactate, ionised calcium, and group and crossmatch. Activate the major-haemorrhage protocol. Give warmed balanced crystalloid while blood arrives, then early warmed red cells and other protocol components. Do not await results before treating shock." }]
            },
            {
              id: "c032-turn-antifibrinolytic",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-antifibrinolytic", text: "Give tranexamic acid 1 gram intravenously over 10 minutes now. If bleeding continues after 30 minutes, or restarts within 24 hours, give a second 1-gram dose. Reassess the four Ts: tone, tissue, trauma and thrombin." }]
            },
            {
              id: "c032-turn-blood-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-blood-response", text: "The major-haemorrhage protocol is active and emergency red cells are available. Placenta and membranes are complete. No visible cervical, vaginal or perineal tear is found." }]
            },
            {
              id: "c032-turn-exam-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-exam-consent", text: "Talia, I need to examine your uterus and vagina and apply firm internal and abdominal pressure to slow bleeding. It may hurt despite analgesia. Is that acceptable?" }]
            },
            {
              id: "c032-turn-exam-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-exam-consent-answer", text: "Yes, please stop it." }]
            },
            {
              id: "c032-turn-tone-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-tone-findings", text: "The uterus is enlarged and boggy. Massage expresses clots. Bimanual compression reduces but does not stop bleeding. The catheter drains little concentrated urine." }]
            },
            {
              id: "c032-turn-tone-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-tone-treatment", text: "Continue uterine massage, clot expression, bimanual compression and bladder drainage. Because Talia is profoundly hypovolaemic, begin oxytocin 30 International Units in 500 mL by controlled infusion at 5 to 10 International Units per hour; consider a 5-Unit slow intravenous dose only with senior anaesthetic oversight. If there is no retained placenta, hypertension, pre-eclampsia, eclampsia, severe sepsis, or severe renal, hepatic, vascular or cardiac disease, give ergometrine 250 micrograms intramuscularly or slowly intravenously over one to two minutes. Give misoprostol 800 to 1000 micrograms rectally. Avoid carboprost because asthma creates serious bronchospasm risk." }]
            },
            {
              id: "c032-turn-ongoing-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-ongoing-findings", text: "Despite massage, bimanual compression and first-line medication, bleeding continues. Blood is running. Pulse is 126, blood pressure 82/48 and measured loss is now 1700 mL. Theatre is ready." }]
            },
            {
              id: "c032-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-escalation", text: "Maintain compression and transfer to theatre during resuscitation. Under anaesthesia, examine the genital tract and explore the uterus to confirm the cavity is empty and intact before balloon tamponade. If bleeding continues, escalate to compression sutures, vascular control or definitive surgery. Hysterectomy may be life-saving. Preserve fertility where safe, but not at the cost of haemorrhage control." }]
            }
          ]
        },
        {
          id: "c032-run-communication",
          heading: "Explanation, consent, teach-back and handover",
          turns: [
            {
              id: "c032-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-explanation-prompt", text: "Please explain the assessment and next steps to Talia." }]
            },
            {
              id: "c032-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-explanation", text: "Talia, your uterus has not tightened after birth, causing severe blood loss and low circulation. We are giving blood, medicines and uterine pressure. Because bleeding continues, you need theatre for a balloon inside the uterus and, if needed, surgery to stop it." }]
            },
            {
              id: "c032-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-concern", text: "Will I lose my uterus? What happens to my baby?" }]
            },
            {
              id: "c032-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-concern-response", text: "We will use the quickest safe measures that preserve your uterus, but uncontrolled bleeding may require hysterectomy to save your life. Your baby is being cared for and assessed by the midwife and support team, who will update you." }]
            },
            {
              id: "c032-turn-theatre-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-theatre-consent", text: "You can decide now. Do you consent to anaesthesia, examination and uterine exploration, balloon tamponade and, if required, abdominal surgery or hysterectomy? If you lose capacity, we will provide necessary emergency treatment in your best interests." }]
            },
            {
              id: "c032-turn-theatre-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-theatre-consent-answer", text: "Yes. I understand. Please do what is needed to stop the bleeding." }]
            },
            {
              id: "c032-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-teachback", text: "Before we move, please tell me what is causing the bleeding and what the team will do next." }]
            },
            {
              id: "c032-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-teachback-answer", text: "My uterus is not tightening. You are giving blood and medicines, and I need theatre for a balloon or surgery if the bleeding continues." }]
            },
            {
              id: "c032-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-handover-prompt", text: "Please finish with a concise handover to the senior obstetric clinician." }]
            },
            {
              id: "c032-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c032-run-handover", text: "Talia Novak is 34, 40 minutes after prolonged labour, vacuum birth of a 4.1-kilogram baby and prophylactic oxytocin. Loss rose from 1300 to 1700 mL; pulse is 126 and blood pressure 82/48. Placenta appears complete, no tear is visible and the uterus is enlarged and boggy. Major haemorrhage care is active with senior obstetrics, anaesthesia, haematology and theatre. Warmed blood, compression and uterotonics continue; tranexamic acid was given. Carboprost is avoided due to asthma. She has consented to anaesthesia, uterine exploration, balloon and possible surgery. Proceed to theatre now, with hysterectomy if conservative control fails." }]
            },
            {
              id: "c032-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Health",
        title: "Primary postpartum haemorrhage (PPH)",
        date: "August 2024, amended November 2024",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0015/140136/g-pph.pdf"
      },
      {
        organisation: "Royal Australian and New Zealand College of Obstetricians and Gynaecologists",
        title: "Management of Postpartum Haemorrhage (PPH) (C-Obs 43)",
        date: "November 2021, review due November 2026",
        url: "https://ranzcog.edu.au/wp-content/uploads/Management-Postpartum-Haemorrhage.pdf"
      }
    ]
  });

  var caseThirtyTwo = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-032"; });
  function buildHint32(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtyTwo.masteryFocus = {
    case: "Use the timing and ongoing bleeding after birth to establish current physiology quickly, check the major cause groups systematically, and let response to each disclosed intervention determine escalation.",
    clinical: "In any major visible bleeding event, resuscitation and source control run together, treatment follows physiology rather than a delayed concentration result, and repeated response checks set the next step.",
    tasks: ["Focused bleeding history", "Assess and interpret", "Manage and explain", "Concise obstetric handover"],
    transfer: "If bleeding remained heavy but the uterus was firm and well contracted, how would the cause search and immediate actions change?",
    transferAnswer: "Tone becomes less likely, so move promptly through trauma, tissue and thrombin. Maintain haemorrhage resuscitation while inspecting the cervix, vagina and perineum for laceration, confirming placental completeness and uterine integrity, and checking coagulation and fibrinogen. Repair trauma, remove retained tissue or correct coagulopathy according to the cause rather than repeating uterotonics alone.",
    transferChecks: ["Recheck all four Ts", "Inspect for genital trauma", "Confirm placental completeness", "Treat the demonstrated cause"],
    transferCitationIds: ["qh-pph-2024", "ranzcog-pph-2021"]
  };
  caseThirtyTwo.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "nba-critical-bleeding-2025", title: "Patient blood management guideline for adults with critical bleeding", organisation: "National Blood Authority", date: "Version 2.0, September 2025", url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding" },
    { id: "qh-pph-2024", title: "Primary postpartum haemorrhage (PPH)", organisation: "Queensland Health", date: "August 2024, amended November 2024", url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0015/140136/g-pph.pdf" },
    { id: "ranzcog-pph-2021", title: "Management of Postpartum Haemorrhage (PPH) (C-Obs 43)", organisation: "Royal Australian and New Zealand College of Obstetricians and Gynaecologists", date: "November 2021, review due November 2026", url: "https://ranzcog.edu.au/wp-content/uploads/Management-Postpartum-Haemorrhage.pdf" }
  ];
  caseThirtyTwo.reasoningCompass = {
    stem: {
      title: "Start with physiology and amount",
      steps: [
        { time: "0 to 30 seconds", text: "Ongoing bleeding 40 minutes after birth requires immediate assessment of consciousness, breathing, circulation, perfusion and quantified loss before a long history." },
        { time: "30 to 60 seconds", text: "Plan a short birth and bleeding history, relevant conditions and medicines, and consent preferences while the team obtains current findings." },
        { time: "1 to 2 minutes", text: "Fix the task times: history to minute 2, assessment to minute 4, management and explanation to minute 7, handover in the final minute." }
      ],
      anchor: "History 0 to 2 | Assess 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Assess circulation and the source together",
      steps: [
        { time: "0 to 2 minutes", text: "Obtain a short symptom and birth history while current physiology and the amount of ongoing bleeding are assessed." },
        { time: "2 to 4 minutes", text: "Interpret circulation, perfusion and focused source findings together. Let the current response determine the next action." },
        { time: "4 to 8 minutes", text: "Explain the current assessment, next steps and consent needs, then hand over the bleeding trend, decisive evidence and care already started." }
      ],
      anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the current task, respond, say where you paused and then return."
    }
  };
  caseThirtyTwo.hints = [
    buildHint32("c032-hint-01", "stem", "c032-stem-role", "birth suite", ["amc-spec-2026", "qh-pph-2024"], "Reading the setting", "What can happen while I ask questions?", "Midwifery, obstetric, anaesthetic and blood-bank support can be mobilised while current physiology and bleeding are assessed.", "Do not plan a history before team action.", "The setting supports simultaneous assessment and escalation.", "Read the timing after birth."),
    buildHint32("c032-hint-02", "stem", "c032-stem-patient", "40 minutes after a vaginal birth", ["qh-pph-2024", "ranzcog-pph-2021"], "Using postpartum timing", "Why does 40 minutes matter?", "Bleeding in the first 24 hours is an acute postpartum event. Ask about the birth, placenta, preventive medicine, trauma and conditions that change treatment.", "Timing defines the immediate context, not the cause.", "This is an early post-birth bleed.", "Now give the word ongoing its full weight."),
    buildHint32("c032-hint-03", "stem", "c032-stem-patient", "ongoing vaginal bleeding", ["qh-pph-2024", "ranzcog-pph-2021", "acsqhc-deterioration-2026"], "Reading ongoing loss", "What matters before the exact cause?", "Quantify the loss and assess its effect on circulation. At the same time, prepare to examine the four cause groups: tone, tissue, trauma and thrombin.", "Severity and source are parallel questions.", "Active loss may still be increasing.", "Check which findings must be requested."),
    buildHint32("c032-hint-04", "stem", "c032-stem-context", "when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning requested evidence", "Which categories will determine urgency?", "Request ABC, consciousness, perfusion and quantified loss, then focused post-birth findings that distinguish uterine tone, retained tissue, trauma and coagulation.", "Ask for evidence that changes action.", "Current physiology and source findings are not yet available.", "Anchor each task before starting."),
    buildHint32("c032-hint-05", "stem", "c032-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "Which questions fit two minutes?", "Ask faintness, breathlessness, chest or severe pain; labour length, assisted birth, baby size and placenta; preventive medicine; asthma, hypertension, bleeding risk, medicines, allergies and blood acceptance.", "The history runs beside assessment if loss is active.", "Task one identifies severity, cause clues and treatment constraints.", "At minute 2, move to current physiology and quantified loss."),
    buildHint32("c032-hint-06", "stem", "c032-task-assess", "Assess Talia and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "How do I turn these findings into a decision?", "Start with how much blood is being lost and what it is doing to consciousness, breathing, circulation and urine output. Then use examination and response to initial measures to narrow the cause.", "Do not let one number replace the whole physiology.", "Minutes 2 to 4 establish shock severity and the likely cause group.", "At minute 4, move to management and explanation."),
    buildHint32("c032-hint-07", "stem", "c032-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "How do I manage and communicate together?", "State immediate team, circulation and source-control priorities, reassess response, then tell Talia what is known, what is happening now, the next escalation and why consent is needed.", "Action and explanation can be brief and parallel.", "Minutes 4 to 7 cover treatment, response and consent.", "Keep the final minute for obstetric handover."),
    buildHint32("c032-hint-08", "stem", "c032-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final task", "Which facts deserve the final minute?", "Give birth context, loss and perfusion trend, cause-focused findings, treatment and response, consent and the immediate destination.", "The handover follows current risk and action.", "The last minute has a fixed structure.", "Keep a running summary as bleeding changes."),
    buildHint32("c032-hint-09", "run", "c032-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is the first visible move?", "Approach Talia, observe her colour and consciousness, identify yourself and begin short questions while the midwife helps obtain current observations.", "The first task is already running.", "You have two minutes for focused history during active assessment.", "Confirm identity and permission for parallel care."),
    buildHint32("c032-hint-10", "run", "c032-run-consent", "feel faint, cold and very weak", ["acsqhc-deterioration-2026", "qh-pph-2024"], "Hearing poor perfusion", "What changes after this answer?", "These symptoms can reflect reduced cerebral and peripheral perfusion from blood loss. Call senior help and obtain ABC, observations and quantified loss now rather than completing a long interview.", "The history has already found a circulation warning.", "Talia can answer but may be deteriorating.", "Ask only brief questions that change cause or treatment."),
    buildHint32("c032-hint-11", "run", "c032-run-symptom-question", "call senior obstetrics, anaesthesia", ["qh-pph-2024", "ranzcog-pph-2021"], "Calling for help during the history", "Why call before the measured loss appears?", "The exact volume can follow. Ongoing bleeding plus faintness and weakness is enough to prepare obstetric, anaesthetic, blood and theatre support while severity is quantified.", "Do not wait for a neat number before calling help.", "The necessary teams are being mobilised.", "Use the birth details to test likely cause groups."),
    buildHint32("c032-hint-12", "run", "c032-run-symptom-answer", "long and ended with a vacuum", ["qh-pph-2024", "ranzcog-pph-2021"], "Using birth risk factors", "What do prolonged labour, assisted birth and a large baby suggest?", "They increase the chance that the uterus will not contract effectively and that genital trauma may have occurred. A placenta that looked complete is useful but still needs verification.", "Risk factors guide the search; they do not prove the cause.", "Tone and trauma deserve early examination.", "Check treatment constraints and blood preferences."),
    buildHint32("c032-hint-13", "run", "c032-run-background-answer", "asthma preventer", ["qh-pph-2024", "ranzcog-pph-2021"], "Making asthma actionable", "Why ask about asthma during bleeding?", "It affects uterotonic choice because carboprost can cause serious bronchospasm. Blood acceptance also guides immediate replacement planning.", "A short background answer can change treatment.", "Asthma is a medication constraint and Talia accepts blood.", "Request current physiology and measured loss now."),
    buildHint32("c032-hint-14", "run", "c032-run-primary-request", "quantified blood loss", ["qh-pph-2024", "ranzcog-pph-2021"], "Measuring rather than estimating", "Why quantify if physiology matters most?", "Measured and cumulative loss supports communication and response tracking, but treatment still follows the whole clinical state because visual estimates can be inaccurate and effects vary.", "Use amount and physiology together.", "The team is measuring ongoing loss while assessing ABC.", "Interpret the full observation cluster."),
    buildHint32("c032-hint-15", "run", "c032-run-primary-findings", "blood pressure 72/40", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025", "qh-pph-2024"], "Recognising haemorrhagic shock", "What does the cluster show?", "Drowsiness, tachypnoea, hypoxaemia, tachycardia, severe hypotension, delayed refill and rising measured loss show life-threatening circulatory failure.", "Name shock from the physiology, not only the volume.", "Talia has severe ongoing blood loss with organ hypoperfusion.", "State the emergency and run resuscitation and cause control together."),
    buildHint32("c032-hint-16", "run", "c032-run-interpretation", "uterine atony", ["qh-pph-2024", "ranzcog-pph-2021"], "Setting the leading cause", "Why does atony lead before examination confirms it?", "Prolonged labour, assisted birth and a large baby increase tone failure risk. It is a working cause that must be tested while tissue, trauma and thrombin are checked in parallel.", "Lead with the likely cause without abandoning the four Ts.", "Primary postpartum haemorrhage with shock is established.", "Begin full resuscitation and quantify response."),
    buildHint32("c032-hint-17", "run", "c032-run-resuscitation", "two 14 to 16 gauge intravenous cannulas", ["qh-pph-2024", "nba-critical-bleeding-2025"], "Preparing for rapid blood replacement", "Why two large lines and a catheter?", "Large intravenous access allows blood sampling and rapid warmed components. Urine output provides a repeated measure of organ perfusion while monitoring and warming continue.", "Access and monitoring must not delay bleeding control.", "The airway, oxygenation and circulation are being supported.", "Activate blood replacement before laboratory results return."),
    buildHint32("c032-hint-18", "run", "c032-run-blood-plan", "Do not await results before treating shock", ["nba-critical-bleeding-2025", "qh-pph-2024"], "Treating before the blood results return", "Why not wait for haemoglobin or fibrinogen?", "Acute whole-blood loss may leave early concentrations misleading. Current shock requires warmed blood-led replacement while repeated coagulation, calcium, temperature, lactate and clinical response guide later components.", "Her physiology already gives the treatment threshold.", "Major-haemorrhage care is active.", "Add the time-sensitive antifibrinolytic and reassess the cause groups."),
    buildHint32("c032-hint-19", "run", "c032-run-antifibrinolytic", "tranexamic acid 1 gram", ["qh-pph-2024", "ranzcog-pph-2021"], "Giving early tranexamic acid", "What does tranexamic acid add?", "It reduces clot breakdown and is most useful when given early in postpartum haemorrhage. It supports haemostasis but does not replace uterine treatment, repair or removal of retained tissue.", "It helps preserve clot but does not stop the source by itself.", "Tranexamic acid and haemorrhage care are proceeding.", "Use the four Ts to identify the source."),
    buildHint32("c032-hint-20", "run", "c032-run-blood-response", "Placenta and membranes are complete", ["qh-pph-2024", "ranzcog-pph-2021"], "Updating tissue and trauma", "What do these findings make less likely?", "A complete placenta makes retained major placental tissue less likely, and no visible tear reduces obvious trauma. Neither finding removes occult trauma, uterine injury or a coagulation problem, so examination continues.", "These findings narrow the causes; they do not end the assessment.", "Poor uterine tone is now more likely among the four cause groups.", "Explain and seek consent for an intimate source-control examination."),
    buildHint32("c032-hint-21", "run", "c032-run-exam-consent", "It may hurt despite analgesia", ["acsqhc-communication-2026", "qh-pph-2024"], "Seeking urgent examination consent", "Why describe discomfort during shock?", "Talia still responds appropriately, so explain the purpose, likely discomfort and immediate benefit, then seek consent while life-saving care continues.", "Urgency shortens but does not erase communication.", "Talia understands why uterine and vaginal examination is needed.", "Use the findings to test tone and response to compression."),
    buildHint32("c032-hint-22", "run", "c032-run-tone-findings", "uterus is enlarged and boggy", ["qh-pph-2024", "ranzcog-pph-2021"], "Confirming poor uterine tone", "What does boggy mean physiologically?", "The uterine muscle has not contracted firmly enough to compress the open vessels at the placental bed. Clots can further prevent effective contraction.", "The examination now supports the leading cause.", "Atony is confirmed and compression only partly reduces bleeding.", "Continue mechanical measures and choose uterotonics around contraindications."),
    buildHint32("c032-hint-23", "run", "c032-run-tone-treatment", "Avoid carboprost because asthma", ["qh-pph-2024", "ranzcog-pph-2021"], "Tailoring uterotonics", "Why not give every uterotonic?", "Each medicine has contraindications. Asthma makes carboprost hazardous, while ergometrine requires checks for hypertension and vascular or organ disease. Oxytocin and misoprostol can proceed with appropriate monitoring.", "More medicines are not safer if they ignore the patient.", "Compression, bladder drainage and suitable uterotonics are active.", "Reassess bleeding and circulation before assuming they worked."),
    buildHint32("c032-hint-24", "run", "c032-run-ongoing-findings", "measured loss is now 1700 mL", ["qh-pph-2024", "nba-critical-bleeding-2025"], "Recognising failed first-line control", "What does the trend demand?", "Bleeding continues despite compression and first-line medication, pressure remains critically low and blood is still required. Bedside control has not succeeded.", "The continuing loss shows that bedside measures have not worked.", "Talia remains in haemorrhagic shock with ongoing loss.", "Maintain compression and move to theatre during resuscitation."),
    buildHint32("c032-hint-25", "run", "c032-run-escalation", "Hysterectomy may be life-saving", ["qh-pph-2024", "ranzcog-pph-2021"], "Planning the next bleeding-control steps", "How do balloon and surgery fit?", "Under anaesthesia, confirm the genital tract and uterine cavity before balloon tamponade. If bleeding continues, compression sutures, vascular control or hysterectomy follow according to speed, findings and response.", "Use uterus-preserving measures where they can work quickly, but do not let them delay life-saving surgery if bleeding continues.", "The next destination and escalation steps are clear.", "Explain the cause, current treatment and possible surgery plainly."),
    buildHint32("c032-hint-26", "run", "c032-run-explanation", "uterus has not tightened", ["acsqhc-communication-2026", "qh-pph-2024"], "Explaining atony", "What is the clearest cause-and-effect sentence?", "The uterus has not contracted firmly after birth, so its vessels keep bleeding; blood, medicines and pressure are supporting her, and theatre is needed because loss continues.", "Give cause, current treatment and next step.", "Talia understands why theatre cannot wait.", "Answer fertility and baby concerns separately."),
    buildHint32("c032-hint-27", "run", "c032-run-concern-response", "hysterectomy to save your life", ["acsqhc-communication-2026", "qh-pph-2024"], "Discussing a frightening possibility", "How direct should I be?", "Say that the team will use rapid uterus-preserving measures first where safe, but uncontrolled bleeding may make hysterectomy necessary. Do not promise preservation or imply it is already inevitable.", "Be honest about hysterectomy without saying it is inevitable.", "Talia also knows her baby is being cared for.", "Seek explicit theatre consent while capacity remains."),
    buildHint32("c032-hint-28", "run", "c032-run-theatre-consent", "If you lose capacity", ["acsqhc-communication-2026"], "Planning for changing capacity", "Why mention emergency treatment now?", "Talia can decide now, so obtain consent for the foreseeable escalation. Explain that if shock removes capacity, the team will provide necessary life-saving treatment in her best interests.", "Consent is specific, informed and responsive to urgency.", "The theatre pathway has been discussed before transfer.", "Use teach-back to confirm cause and next steps."),
    buildHint32("c032-hint-29", "run", "c032-run-teachback-answer", "uterus is not tightening", ["acsqhc-communication-2026", "qh-pph-2024"], "Checking the central message", "What has Talia understood?", "She can state the cause, blood and medicine treatment, and why balloon or surgery may follow. No further detail is needed before transfer.", "Teach-back checks explanation, not obedience.", "The immediate plan is understood.", "Switch to the final obstetric handover."),
    buildHint32("c032-hint-30", "run", "c032-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the handover structure", "Which order prevents drift?", "Give birth context, quantified loss and perfusion trend, four-T findings, treatment and response, contraindication, consent and the immediate theatre step.", "Carry only information that affects current care.", "The final task is transfer of risk and action.", "Finish with the destination and escalation threshold."),
    buildHint32("c032-hint-31", "run", "c032-run-handover", "Proceed to theatre now", ["acsqhc-communication-2026", "qh-pph-2024", "nba-critical-bleeding-2025"], "Closing with the destination", "Why finish with theatre rather than the total loss?", "The receiving team already has severity and cause evidence. The final line makes the immediate action, consent and hysterectomy threshold unmistakable.", "A handover ends with what happens next.", "Loss trend, cause, treatment, response and destination have transferred.", "Stop when the examiner ends the station."),
    buildHint32("c032-hint-32", "run", "c032-run-end", "The station is complete", ["amc-tips-2024"], "Finishing the case", "Should I add postnatal follow-up?", "No. The examiner has ended the station, and follow-up comes after haemorrhage control and recovery.", "Finish on the instruction.", "Case 32 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtyTwo.essentialHintIds = [
    "c032-hint-03", "c032-hint-05", "c032-hint-06", "c032-hint-07", "c032-hint-08", "c032-hint-10",
    "c032-hint-13", "c032-hint-15", "c032-hint-16", "c032-hint-18", "c032-hint-22", "c032-hint-24",
    "c032-hint-25", "c032-hint-26", "c032-hint-31", "c032-hint-32"
  ];
  var clockByHint32 = {
    "c032-hint-05": "Minutes 0 to 2: perfusion symptoms, birth and placenta, preventive medicine, treatment constraints and blood acceptance while current observations are obtained.",
    "c032-hint-06": "Minutes 2 to 4: quantify loss, interpret physiology and assess tone, tissue, trauma and thrombin with response to initial measures.",
    "c032-hint-16": "The emergency is established. Resuscitation and bleeding control now run together without waiting for laboratory confirmation.",
    "c032-hint-24": "Continuing loss resets the plan. Maintain blood-led resuscitation and compression while transferring to theatre.",
    "c032-hint-26": "Minutes 4 to 7: explain atony, active treatment, failed first-line control, theatre escalation and fertility uncertainty, then obtain consent.",
    "c032-hint-30": "Final minute: transfer birth context, loss and perfusion trend, cause evidence, treatment, response, consent and theatre destination."
  };
  var deeperByHint32 = {
    "c032-hint-12": ["An overdistended or exhausted uterus may contract poorly after birth. Assisted birth also raises the need to inspect for cervical, vaginal and perineal trauma."],
    "c032-hint-18": ["Acute blood loss removes plasma and cells together. Early haemoglobin may not reflect total loss, while ongoing bleeding also consumes fibrinogen and clotting factors."],
    "c032-hint-19": ["Tranexamic acid blocks plasminogen binding and reduces fibrin breakdown. It preserves formed clot but cannot make an atonic uterus contract."],
    "c032-hint-22": ["Myometrial contraction acts as a living ligature by compressing vessels that traversed the placental bed. Atony leaves those vessels open."],
    "c032-hint-23": ["Carboprost is a prostaglandin F2-alpha analogue that contracts uterine and bronchial smooth muscle, explaining the bronchospasm risk in asthma."],
    "c032-hint-25": ["A balloon applies pressure from inside the uterine cavity. Compression sutures or vascular control add external or arterial haemostasis when tamponade is insufficient."]
  };
  caseThirtyTwo.hints.forEach(function (hint) {
    if (clockByHint32[hint.id]) hint.clock = clockByHint32[hint.id];
    if (deeperByHint32[hint.id]) hint.deeper = deeperByHint32[hint.id];
  });
})();
