(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-027",
    globalId: "CP-C027",
    registryId: "CP-P9-C001",
    displayNumber: "Case 27",
    title: "Sudden pain with a brief faint",
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
          id: "c027-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c027-stem-patient",
          text: "Mr Darius Okafor, a 73-year-old man, has presented with sudden lower abdominal and left flank pain extending into his back. He briefly fainted at home."
        },
        {
          id: "c027-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c027-task-history",
          text: "Take a focused history from Darius.",
          timing: "2 minutes"
        },
        {
          id: "c027-task-assess",
          text: "Assess Darius and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c027-task-explain",
          text: "Explain your assessment and management plan to Darius.",
          timing: "2 minutes"
        },
        {
          id: "c027-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c027-run-history",
          heading: "Focused history and initial assessment",
          turns: [
            {
              id: "c027-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-start", text: "You may begin." }]
            },
            {
              id: "c027-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c027-run-first-action", text: "The doctor performs hand hygiene and approaches Darius." }]
            },
            {
              id: "c027-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your full name. May I assess you while asking about the pain and faint?" }]
            },
            {
              id: "c027-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-consent", text: "Darius Okafor. Yes. The pain came from nowhere and I briefly passed out." }]
            },
            {
              id: "c027-turn-pain-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-pain-question", text: "Show me where it began and travels. Was the onset instant or gradual? Is it constant or in waves? Any nausea, vomiting, fever, urinary burning or visible blood?" }]
            },
            {
              id: "c027-turn-pain-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-pain-answer", text: "It struck instantly in my left lower belly and flank, then bored into my back. It stays severe, although I cannot get comfortable. I feel sick but have not vomited. No fever, burning or visible blood." }]
            },
            {
              id: "c027-turn-collapse-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-collapse-question", text: "What happened around the faint? Any chest pain, breathlessness, palpitations, sweating, weakness, injury or confusion afterwards? Have you had similar pain or a kidney stone?" }]
            },
            {
              id: "c027-turn-collapse-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-collapse-answer", text: "My wife said I was out for about 15 seconds. I woke clear-headed, sweaty and still in pain. No chest pain, breathing trouble, racing heart, injury or weakness. I have never had this or a kidney stone." }]
            },
            {
              id: "c027-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-background-question", text: "Do you have high blood pressure, artery problems or previous abdominal scans? Do you smoke? What medicines, blood thinners and allergies do you have?" }]
            },
            {
              id: "c027-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-background-answer", text: "I have hypertension and smoked for 50 years. A scan two years ago found a 52-millimetre abdominal aortic aneurysm. I missed vascular follow-up. I take perindopril, no blood thinner and have no allergies." }]
            },
            {
              id: "c027-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-primary-request", text: "I ask the senior emergency doctor to attend and alert vascular surgery, anaesthesia and theatre while I assess ABC and conscious state. Start monitoring, check glucose and obtain a 12-lead ECG. Titrate oxygen to clinical need and saturation. Findings, please." }]
            },
            {
              id: "c027-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c027-run-primary-findings", text: "Airway is patent. Darius is alert but pale. Respiratory rate is 18, oxygen saturation 97% on room air, pulse 94 and regular, blood pressure 104/66 and capillary refill two seconds. Glucose is 6.1 mmol/L. ECG shows sinus rhythm without acute ischaemic change." }]
            },
            {
              id: "c027-turn-focused-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-focused-request", text: "I request a focused abdominal, flank and peripheral perfusion examination, urine dip and bedside ultrasound of the abdominal aorta." }]
            },
            {
              id: "c027-turn-focused-findings",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c027-run-focused-findings", text: "There is left lower abdominal, flank and renal-angle tenderness without rigidity. No pulsatile mass is palpable. Femoral pulses are equal. Urine dip has two-plus blood. Ultrasound shows a 74-millimetre infrarenal aortic aneurysm; no free intraperitoneal fluid is seen." }]
            },
            {
              id: "c027-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-interpretation", text: "Rupture of this abdominal aortic aneurysm is the leading diagnosis. It can mimic renal colic. Neither microscopic blood nor absence of a palpable mass excludes it. Ultrasound confirms the aneurysm but cannot exclude retroperitoneal rupture, and near-normal initial observations do not make this safe." }]
            }
          ]
        },
        {
          id: "c027-run-deterioration",
          heading: "Early escalation and deterioration",
          turns: [
            {
              id: "c027-turn-early-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-early-management", text: "Keep those teams engaged and activate the major-haemorrhage pathway. Insert two large-bore intravenous cannulas. Send full blood count, electrolytes, coagulation, venous blood gas with lactate, and group and crossmatch. Keep Darius warm, give titrated intravenous analgesia, and monitor coagulation, fibrinogen, ionised calcium and temperature. While he remains alert at 104/66, CT angiography is considered only with the vascular team if it will not delay repair; prepare to bypass it if he deteriorates." }]
            },
            {
              id: "c027-turn-preparation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c027-run-preparation-action", text: "Monitoring continues while staff establish two large intravenous lines, draw blood, warm Darius and prepare blood components." }]
            },
            {
              id: "c027-turn-dizzy",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-dizzy", text: "Doctor, the pain is worse. I feel faint again." }]
            },
            {
              id: "c027-turn-reassessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-reassessment", text: "Repeat airway, breathing, circulation, conscious state and perfusion now, including all observations. Confirm both intravenous lines remain patent." }]
            },
            {
              id: "c027-turn-deterioration-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c027-run-deterioration-findings", text: "Airway remains patent. Darius is drowsy but responds to voice. Respiratory rate is 24, oxygen saturation 95% on room air, pulse 122, blood pressure 74/42 and capillary refill four seconds. He is cool and clammy. Lactate is 5.4 mmol/L and haemoglobin 118 g/L." }]
            },
            {
              id: "c027-turn-controlled-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-controlled-resuscitation", text: "This is haemorrhagic shock from presumed rupture. Start warmed blood components without waiting for haemoglobin to fall. Use blood-led controlled resuscitation to preserve consciousness and vital-organ perfusion until bleeding is controlled. Avoid large crystalloid loads and do not normalise blood pressure before control. Repeat ABC assessment, observations, blood gas, lactate, coagulation, fibrinogen, ionised calcium and temperature." }]
            },
            {
              id: "c027-turn-imaging-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-imaging-plan", text: "His hypotension and drowsiness now make CT angiography unsafe. Proceed directly to repair with vascular surgery and anaesthesia. Endovascular or open repair is decided by anatomy, available expertise and the vascular team." }]
            },
            {
              id: "c027-turn-team-arrival",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c027-run-team-arrival", text: "The vascular and anaesthetic teams arrive. Blood is running, theatre is ready and Darius can engage with a brief explanation." }]
            }
          ]
        },
        {
          id: "c027-run-communication",
          heading: "Explanation, teach-back and vascular handover",
          turns: [
            {
              id: "c027-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-explanation-prompt", text: "Please explain your assessment and plan to Darius." }]
            },
            {
              id: "c027-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-explanation", text: "Darius, the aneurysm in your main abdominal artery may have ruptured and be bleeding internally. This explains the sudden pain, faint and falling blood pressure. We are giving blood and taking you directly to theatre. The vascular surgeon will explain the immediate repair and seek your consent as far as your condition allows." }]
            },
            {
              id: "c027-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-concern", text: "Am I going to die? Is this my fault for missing follow-up?" }]
            },
            {
              id: "c027-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-concern-response", text: "This is life-threatening, but treatment is underway and I cannot promise the outcome. The aneurysm has grown; we can discuss why after surgery. There is no blame. If you become unable to decide, the team will provide life-saving emergency treatment in your best interests and update your wife." }]
            },
            {
              id: "c027-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-teachback", text: "Before we move, please tell me what we think is happening and what happens next." }]
            },
            {
              id: "c027-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-teachback-answer", text: "The enlarged artery may be leaking. I need blood and an operation now, with the repair chosen by the vascular team." }]
            },
            {
              id: "c027-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-handover-prompt", text: "Please finish with a concise handover to the vascular surgeon." }]
            },
            {
              id: "c027-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c027-run-handover", text: "Darius Okafor is 73 with instantaneous left lower abdominal and flank pain radiating to his back, followed by a 15-second faint. He has hypertension, a 50-year smoking history and missed follow-up of a 52-millimetre abdominal aortic aneurysm. No mass is palpable; urine has two-plus blood and ultrasound shows a 74-millimetre infrarenal aneurysm. He deteriorated from 104/66 to pulse 122, blood pressure 74/42, drowsiness and lactate 5.4, consistent with rupture and haemorrhagic shock. Major haemorrhage is active with two large intravenous lines, crossmatch, warmed blood and analgesia. Anaesthesia and theatre are ready. CT is unsafe; he requires direct repair, with endovascular or open approach decided by anatomy and your team." }]
            },
            {
              id: "c027-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Manual",
        date: "Current July 2026",
        url: "https://www.ambulance.qld.gov.au/clinical/cpm"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Abdominal emergencies",
        date: "October 2017, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0016/219040/cpg_abdominal-emergencies.pdf"
      },
      {
        organisation: "European Society for Vascular Surgery",
        title: "2024 Clinical Practice Guidelines on the Management of Abdominal Aorto-Iliac Artery Aneurysms",
        date: "2024",
        url: "https://doi.org/10.1016/j.ejvs.2023.11.002"
      }
    ]
  });

  var caseTwentySeven = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-027"; });
  function buildHint27(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentySeven.masteryFocus = {
    case: "Use sudden abdominal, flank and back pain plus a brief faint to prioritise serious vascular and non-vascular causes, establish current physiology, and let each disclosed finding set urgency.",
    clinical: "In any sudden severe pain presentation, let onset, perfusion and trend outweigh a familiar mimic, a single normal observation or an absent classic sign.",
    tasks: ["Focused pain history", "Assess and interpret", "Explain assessment and plan", "Concise vascular handover"],
    transfer: "An older smoker has the same sudden flank-to-back pain and a brief faint, but no known aneurysm. The abdomen is soft, no mass is felt and urine contains microscopic blood. Which findings still keep a leaking aneurysm ahead of renal colic?",
    transferAnswer: "The instantaneous constant pain, syncope and any impaired perfusion keep a leaking aneurysm urgent in an older vascular-risk patient. Microscopic blood can occur with another process, while a soft abdomen and absent pulsatile mass do not exclude retroperitoneal bleeding. Request early aortic imaging and senior vascular help while reassessing circulation.",
    transferChecks: ["Instantaneous constant pain", "Syncope or poor perfusion", "Age and vascular risk", "Absent mass does not exclude rupture"],
    transferCitationIds: ["esvs-aaa-2024", "qas-abdominal-2017"]
  };
  caseTwentySeven.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "nba-critical-bleeding-2025", title: "Patient blood management guideline for adults with critical bleeding", organisation: "National Blood Authority", date: "Version 2.0, September 2025", url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding" },
    { id: "qas-abdominal-2017", title: "Clinical Practice Guideline: Abdominal emergencies", organisation: "Queensland Ambulance Service", date: "October 2017, listed in the July 2026 Clinical Practice Manual", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0016/219040/cpg_abdominal-emergencies.pdf" },
    { id: "esvs-aaa-2024", title: "2024 Clinical Practice Guidelines on the Management of Abdominal Aorto-Iliac Artery Aneurysms", organisation: "European Society for Vascular Surgery", date: "2024", url: "https://doi.org/10.1016/j.ejvs.2023.11.002" }
  ];
  caseTwentySeven.reasoningCompass = {
    stem: {
      title: "Start with onset and circulation",
      steps: [
        { time: "0 to 30 seconds", text: "Join sudden abdominal, flank and back pain with the faint. Keep vascular and other time-critical causes active while common mimics remain possible." },
        { time: "30 to 60 seconds", text: "Plan a short pain, collapse and vascular-risk history beside an early ABC assessment, observations and perfusion check." },
        { time: "1 to 2 minutes", text: "Fix the task boundaries: history to minute 2, assessment to minute 5, explanation to minute 7, handover in the final minute." }
      ],
      anchor: "History 0 to 2 | Assess 2 to 5 | Explain 5 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Use current perfusion to choose the next action",
      steps: [
        { time: "0 to 2 minutes", text: "Clarify onset, radiation, the faint and relevant background while current observations and perfusion are checked." },
        { time: "2 to 5 minutes", text: "Interpret physiology, perfusion, the focused examination and requested evidence together. Let the current findings choose the next action." },
        { time: "5 to 8 minutes", text: "Explain the current assessment and next action, then hand over the symptom pattern, trend, decisive evidence and care already started." }
      ],
      anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the current task, respond, say where you paused and then return."
    }
  };
  caseTwentySeven.hints = [
    buildHint27("c027-hint-01", "stem", "c027-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can happen while I ask questions?", "Monitoring, perfusion assessment, intravenous access and senior help can begin together. The setting supports parallel action if the history reveals danger.", "Do not plan a history-only opening.", "You can assess and act at the same time.", "Read the pain pattern before choosing the first system."),
    buildHint27("c027-hint-02", "stem", "c027-stem-patient", "73-year-old man", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Using age without anchoring", "Does age identify the cause?", "No. It raises vascular risk and lowers tolerance of internal bleeding, but the onset, perfusion and examination must carry the reasoning.", "Age changes risk, not proof.", "A vascular emergency deserves early space in the assessment.", "Now connect the three pain locations."),
    buildHint27("c027-hint-03", "stem", "c027-stem-patient", "sudden lower abdominal and left flank pain extending into his back", ["qas-abdominal-2017", "acsqhc-deterioration-2026"], "Clarifying pain distribution", "What matters most before the exact label?", "Instant onset across the abdomen, flank and back can signal a time-critical vascular or abdominal process. Renal, gastrointestinal and musculoskeletal causes remain possible.", "The next move is urgent assessment, not an early diagnosis.", "The pain pattern can come from more than one system.", "Add the faint before deciding how safe he is."),
    buildHint27("c027-hint-04", "stem", "c027-stem-patient", "briefly fainted at home", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Giving the faint proper weight", "Could pain alone explain the faint?", "Possibly, but transient impaired cerebral perfusion from a time-critical cause must be excluded first. Ask what happened before, during and after, then obtain circulation findings early.", "Treat the faint as a perfusion warning until assessed.", "Sudden pain plus syncope raises the urgency sharply.", "Check what information must be requested."),
    buildHint27("c027-hint-05", "stem", "c027-stem-context", "when requested", ["amc-spec-2026", "amc-tips-2024"], "Planning requests", "Which evidence will not appear unless I ask?", "Request current physiology and perfusion, a focused examination, relevant bedside and laboratory evidence, and only investigations matched to the leading serious possibilities.", "Ask for findings that change urgency or the next action.", "The stem has not supplied current physiology.", "Anchor the four tasks before starting."),
    buildHint27("c027-hint-06", "stem", "c027-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "What makes this history focused?", "Cover pain onset and radiation, the faint and associated symptoms, relevant system clues, background risks, medicines and allergies. Stop if he worsens.", "Two minutes is enough for questions that change risk or action.", "Task one is pain, perfusion clues and relevant risk.", "At minute 2, move to requested assessment even if minor history details remain."),
    buildHint27("c027-hint-07", "stem", "c027-task-assess", "Assess Darius and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "What does interpretation add to examination?", "Link the symptom pattern to current physiology, focused examination and requested evidence. State what is established, what remains possible and how stability changes the next step.", "Do not report findings as an unconnected list.", "Minutes 2 to 5 decide stability and the next action.", "At minute 5, stop examiner-facing analysis and speak to Darius."),
    buildHint27("c027-hint-08", "stem", "c027-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring task three", "What belongs in these two minutes?", "Name the current serious concern in plain language, connect it to the symptoms and physiology, explain actions already underway and the next step, acknowledge uncertainty, then answer his concern honestly.", "Explanation is not another management list.", "Minutes 5 to 7 belong to Darius.", "Keep the final minute for the senior handover."),
    buildHint27("c027-hint-09", "stem", "c027-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final task", "Which facts must survive the time pressure?", "Give identity, onset and radiation, faint, relevant background risk, physiology and trend, decisive evidence, actions already taken and the immediate next step.", "Concise means ordered around current risk.", "The last minute transfers responsibility and action.", "Keep a running summary as new findings arrive."),
    buildHint27("c027-hint-10", "run", "c027-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting cleanly", "What is the first useful move?", "Approach Darius, observe his colour and distress, identify yourself and begin a short assessment without announcing a long plan.", "The first task is already running.", "History time has started.", "Open with identity, consent and simultaneous assessment."),
    buildHint27("c027-hint-11", "run", "c027-run-intro", "assess you while asking about the pain and faint", ["acsqhc-communication-2026", "acsqhc-deterioration-2026"], "Setting up parallel care", "Why say this in the opening?", "It tells Darius why questions and examination will happen together and keeps permission clear while time-critical assessment begins.", "Be direct without sounding abrupt.", "Darius knows what is happening.", "Listen for whether the onset and faint are confirmed."),
    buildHint27("c027-hint-12", "run", "c027-run-pain-answer", "struck instantly", ["esvs-aaa-2024", "qas-abdominal-2017"], "Hearing instantaneous onset", "What changes when he says instantly?", "An abrupt maximal onset supports a vascular or other sudden structural event more than a slowly evolving inflammatory process. Constant severe pain keeps concern high even though he cannot get comfortable.", "Restlessness does not automatically make this renal colic.", "The onset strengthens the need for early perfusion and aortic assessment.", "Now use the collapse details to judge effect."),
    buildHint27("c027-hint-13", "run", "c027-run-collapse-answer", "out for about 15 seconds", ["acsqhc-deterioration-2026", "esvs-aaa-2024"], "Reading the collapse", "Does rapid recovery make it harmless?", "Clear recovery argues against a prolonged seizure, but brief loss of consciousness with sweating and persistent pain can still reflect transient hypoperfusion.", "Recovery does not remove the circulation warning.", "The faint remains clinically important.", "Look for vascular history and bleeding modifiers."),
    buildHint27("c027-hint-14", "run", "c027-run-background-answer", "52-millimetre abdominal aortic aneurysm", ["esvs-aaa-2024"], "Using the known aneurysm", "Have I proved rupture?", "No. The known aneurysm, missed surveillance, age, smoking and new sudden pain make rupture much more likely, but current anatomy and physiology still decide the next action.", "A strong prior risk is not the final evidence.", "A symptomatic enlarging aneurysm is now a central concern.", "Escalate while requesting current ABC and perfusion."),
    buildHint27("c027-hint-15", "run", "c027-run-primary-request", "alert vascular surgery, anaesthesia and theatre", ["esvs-aaa-2024", "acsqhc-deterioration-2026"], "Escalating before collapse", "Why call several teams before severe hypotension appears?", "A suspected leaking aneurysm can deteriorate abruptly. Early vascular, anaesthetic and theatre preparation removes delay while the diagnosis and stability are refined.", "Escalation follows risk, not only a low pressure reading.", "Definitive help is being prepared.", "Read the full observations without letting one normal value settle the case."),
    buildHint27("c027-hint-16", "run", "c027-run-primary-findings", "blood pressure 104/66", ["acsqhc-deterioration-2026", "esvs-aaa-2024"], "Reading the first pressure", "Is 104/66 safe enough to slow down?", "No. He is pale after sudden pain and syncope, and retroperitoneal bleeding may be temporarily contained. The first pressure is one moment, so trend it beside consciousness and perfusion.", "Near-normal is not the same as stable.", "There is no current severe shock, but serious risk remains.", "Request focused findings that test the leading concern and its mimics."),
    buildHint27("c027-hint-17", "run", "c027-run-focused-request", "urine dip and bedside ultrasound", ["esvs-aaa-2024", "qas-abdominal-2017"], "Testing two paths", "Why request urine and aortic ultrasound together?", "Urine may support a urinary tract process but cannot safely exclude another cause. Bedside ultrasound can confirm an aneurysm quickly, while the clinical picture determines whether rupture is suspected.", "A mimic clue must not cancel a higher-risk pattern.", "You are testing renal and vascular possibilities in parallel.", "Interpret every focused finding by what it proves and what it cannot exclude."),
    buildHint27("c027-hint-18", "run", "c027-run-focused-findings", "No pulsatile mass is palpable", ["esvs-aaa-2024", "qas-abdominal-2017"], "Handling an absent classic sign", "Does no mass move the aneurysm away?", "No. Aneurysms are not always palpable, and guarding, body habitus or a retroperitoneal position can hide them. Absence of a mass cannot overrule the onset, faint and history.", "A missing classic sign is not an exclusion test.", "The physical examination has not made this safe.", "Now separate the haematuria from the aortic image."),
    buildHint27("c027-hint-19", "run", "c027-run-focused-findings", "74-millimetre infrarenal aortic aneurysm", ["esvs-aaa-2024"], "Reading the ultrasound", "What has ultrasound established?", "It confirms a much larger aneurysm than the previous scan. It does not show whether retroperitoneal rupture is present, and no free intraperitoneal fluid does not exclude bleeding behind the peritoneum.", "Confirmed aneurysm plus symptoms requires urgent vascular judgement.", "A large symptomatic aneurysm is demonstrated; rupture remains a clinical concern.", "State the leading interpretation without being distracted by microscopic blood."),
    buildHint27("c027-hint-20", "run", "c027-run-interpretation", "can mimic renal colic", ["esvs-aaa-2024", "qas-abdominal-2017"], "Naming the mimic safely", "Why mention renal colic now?", "Flank pain, restlessness and microscopic blood can pull attention toward a stone. Naming the mimic explains why those clues do not override age, syncope, known aneurysm and sudden constant pain.", "Keep the dangerous explanation until adequate evidence removes it.", "Rupture is now the leading working diagnosis.", "Begin haemorrhage preparation while the vascular team decides how to repair it."),
    buildHint27("c027-hint-21", "run", "c027-run-early-management", "CT angiography is considered only with the vascular team", ["esvs-aaa-2024", "nba-critical-bleeding-2025"], "Making imaging conditional", "Why not order CT automatically?", "CT can define anatomy in someone stable enough for transfer, but it must not delay repair. The vascular team weighs current physiology, travel time and whether the result changes the operative approach.", "Imaging serves the treatment decision.", "Blood preparation, warming, analgesia and senior care continue while stability is watched.", "Look for any new symptom that changes the imaging route."),
    buildHint27("c027-hint-22", "run", "c027-run-dizzy", "feel faint again", ["acsqhc-deterioration-2026", "esvs-aaa-2024"], "Hearing deterioration", "What happens to the planned sequence now?", "Stop. New faintness with worsening pain may mean renewed bleeding and falling cerebral perfusion. Repeat ABC, consciousness and all observations immediately.", "Deterioration interrupts the history and imaging plan.", "The previous pressure no longer describes him.", "Reassess before saying or doing anything else."),
    buildHint27("c027-hint-23", "run", "c027-run-reassessment", "Repeat airway, breathing, circulation, conscious state and perfusion now", ["acsqhc-deterioration-2026"], "Recovering the sequence", "Why repeat rather than rely on earlier findings?", "Because acute bleeding changes over minutes. A structured repeat shows which system has failed and gives the team a common current picture.", "Return to ABC whenever new findings or deterioration disrupt the sequence.", "The assessment has reset to current physiology.", "Use the new consciousness, pressure, pulse and refill together."),
    buildHint27("c027-hint-24", "run", "c027-run-deterioration-findings", "blood pressure 74/42", ["acsqhc-deterioration-2026", "nba-critical-bleeding-2025", "esvs-aaa-2024"], "Recognising haemorrhagic shock", "What does the cluster say?", "Drowsiness, tachycardia, hypotension, delayed refill, cool clammy skin and lactate 5.4 show inadequate organ perfusion. This is no longer a stable imaging decision.", "State that he is in shock and change the plan.", "Darius is in shock with presumed ongoing internal bleeding.", "Start blood-led resuscitation and go directly toward haemorrhage control."),
    buildHint27("c027-hint-25", "run", "c027-run-deterioration-findings", "haemoglobin 118 g/L", ["nba-critical-bleeding-2025"], "Not waiting for haemoglobin", "Does 118 argue against major bleeding?", "No. Early whole-blood loss can leave the concentration relatively preserved while circulating volume and organ perfusion fall. His physiology already requires treatment.", "Treat the patient, not the first concentration.", "Shock is established despite the haemoglobin.", "Follow the blood-led controlled resuscitation plan."),
    buildHint27("c027-hint-26", "run", "c027-run-controlled-resuscitation", "do not normalise blood pressure before control", ["esvs-aaa-2024", "nba-critical-bleeding-2025"], "Understanding controlled resuscitation", "Why not chase a normal pressure?", "Before the bleeding vessel is controlled, excessive pressure and large crystalloid loads may worsen bleeding and dilution. Use warmed blood to preserve consciousness and vital-organ perfusion while moving rapidly to repair.", "The endpoint is adequate perfusion on the way to control, not a normal monitor number.", "Blood replacement and operative transfer are one continuous plan.", "Now decide whether CT remains safe."),
    buildHint27("c027-hint-27", "run", "c027-run-imaging-plan", "CT angiography unsafe", ["esvs-aaa-2024", "acsqhc-deterioration-2026"], "Dropping the scan", "What evidence removes CT from the plan?", "Severe hypotension and drowsiness show that transfer to CT risks delay and collapse away from definitive care. Vascular surgery now chooses endovascular or open repair from the available anatomy and resources.", "A test is abandoned when it delays the treatment already required.", "The destination is theatre, not radiology.", "Give Darius a brief truthful explanation while preparation continues."),
    buildHint27("c027-hint-28", "run", "c027-run-team-arrival", "can engage with a brief explanation", ["acsqhc-communication-2026", "esvs-aaa-2024"], "Using the available moment", "Is he too unwell for communication?", "He can still engage, so explain the immediate concern and next step and support consent as far as possible. Keep it brief because treatment cannot pause.", "Urgency shortens the explanation but does not erase it.", "The teams and blood are ready, and Darius can participate now.", "Switch from examiner language to plain language."),
    buildHint27("c027-hint-29", "run", "c027-run-explanation", "taking you directly to theatre", ["acsqhc-communication-2026", "esvs-aaa-2024"], "Explaining the immediate route", "What does Darius need to understand first?", "The enlarged artery may be leaking, it explains the pain, faint and falling pressure, blood is replacing loss, and theatre offers the only timely way to stop it.", "Give the danger, treatment and destination before procedural detail.", "Darius has heard what is happening and why there is no scan delay.", "Answer fear and blame without false reassurance."),
    buildHint27("c027-hint-30", "run", "c027-run-concern-response", "There is no blame", ["acsqhc-communication-2026"], "Responding to fear and guilt", "How honest should the answer be?", "Be brief, honest and compassionate. Say that the condition is life-threatening and treatment is active, without promising survival. Missing follow-up may matter later, but blame does not help this emergency decision.", "Keep the answer honest, brief and compassionate.", "Darius understands the seriousness without being blamed.", "Check understanding, then prepare the vascular handover."),
    buildHint27("c027-hint-31", "run", "c027-run-handover", "CT is unsafe; he requires direct repair", ["acsqhc-communication-2026", "esvs-aaa-2024", "nba-critical-bleeding-2025"], "Closing the handover", "Which sentence carries the immediate decision?", "After the pain, risk, ultrasound and deterioration, finish with the active major-haemorrhage care and why he is bypassing CT for direct repair.", "The receiving team needs the current state and next action.", "Risk, evidence, treatment and destination have transferred.", "Stop when the examiner closes the station."),
    buildHint27("c027-hint-32", "run", "c027-run-end", "The station is complete", ["amc-tips-2024"], "Letting the case finish", "Should I add another differential?", "No. The examiner has ended the station. Adding unsupported detail now weakens a complete, time-critical handover.", "Finish on the instruction.", "Case 27 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseTwentySeven.essentialHintIds = [
    "c027-hint-03", "c027-hint-04", "c027-hint-06", "c027-hint-07", "c027-hint-08", "c027-hint-09",
    "c027-hint-12", "c027-hint-14", "c027-hint-16", "c027-hint-19", "c027-hint-24", "c027-hint-26",
    "c027-hint-27", "c027-hint-29", "c027-hint-31", "c027-hint-32"
  ];
  var clockByHint27 = {
    "c027-hint-06": "Minutes 0 to 2: pain onset and radiation, faint and perfusion symptoms, vascular risk, medicines and allergies.",
    "c027-hint-07": "Minutes 2 to 5: request ABC, perfusion, focused abdomen and pulses, urine, ECG and bedside aortic imaging, then interpret them together.",
    "c027-hint-15": "Senior vascular and anaesthetic help begins now. Continue the assessment while definitive care prepares.",
    "c027-hint-24": "Deterioration resets the clock. Stop the planned sequence, repeat ABC and move directly to blood-led resuscitation and repair.",
    "c027-hint-29": "Minutes 5 to 7: explain the suspected leak, falling circulation, blood replacement and direct theatre plan.",
    "c027-hint-31": "Final minute: transfer onset, faint, aneurysm evidence, perfusion trend, active resuscitation and direct repair."
  };
  var deeperByHint27 = {
    "c027-hint-03": ["The abdominal aorta lies retroperitoneally. Blood can track into the flank and back, so the pain may not stay central or produce early free intraperitoneal fluid."],
    "c027-hint-04": ["A short faint can occur when circulating volume or vascular tone briefly fails to maintain cerebral blood flow. Clear recovery does not tell you which mechanism caused it."],
    "c027-hint-18": ["Retroperitoneal location and overlying bowel can make an aneurysm difficult to palpate. Examination sensitivity is not high enough to rule it out."],
    "c027-hint-19": ["Bedside ultrasound measures the aortic diameter well, but it is much less reliable for showing a retroperitoneal leak. Symptoms and physiology therefore remain decisive."],
    "c027-hint-25": ["Acute haemorrhage initially removes red cells and plasma together. Haemoglobin may fall later after fluid redistribution or resuscitation changes the concentration."],
    "c027-hint-26": ["Before aortic control, the resuscitation target is sufficient cerebral and coronary perfusion. The exact pressure target is individualised with the vascular and anaesthetic teams."]
  };
  caseTwentySeven.hints.forEach(function (hint) {
    if (clockByHint27[hint.id]) hint.clock = clockByHint27[hint.id];
    if (deeperByHint27[hint.id]) hint.deeper = deeperByHint27[hint.id];
  });
})();
