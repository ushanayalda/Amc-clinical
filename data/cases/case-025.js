(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-025",
    globalId: "CP-C025",
    registryId: "CP-P8-C002",
    displayNumber: "Case 25",
    title: "A brief blackout after a racing heartbeat",
    status: "reasoning_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 8, title: "Cardiac Syncope" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c025-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c025-stem-patient",
          text: "Mr Idris Mensah, a 59-year-old man, has presented after briefly losing consciousness at work. He has recovered."
        },
        {
          id: "c025-stem-context",
          text: "A colleague reported that Idris had said his heart was racing immediately before the event. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c025-task-history",
          text: "Take a focused history from Idris.",
          timing: "2 minutes"
        },
        {
          id: "c025-task-assess",
          text: "Assess Idris, interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c025-task-explain",
          text: "Explain your assessment and ongoing plan to Idris.",
          timing: "2 minutes"
        },
        {
          id: "c025-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c025-run-history",
          heading: "Focused history and initial assessment",
          turns: [
            {
              id: "c025-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-start", text: "You may begin." }]
            },
            {
              id: "c025-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c025-run-first-action", text: "The doctor performs hand hygiene and approaches Idris." }]
            },
            {
              id: "c025-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-intro", text: "Hello Idris, I am Ushana, one of the emergency doctors. Can you confirm your full name? May I assess you while we talk?" }]
            },
            {
              id: "c025-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-intro-answer", text: "Idris Mensah. Yes. I feel all right now, but I suddenly blacked out at work." }]
            },
            {
              id: "c025-turn-initial-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-initial-request", text: "I assess airway, breathing, circulation and conscious state. Attach continuous cardiac and oxygen-saturation monitoring, check glucose, record vital signs and obtain a 12-lead ECG. Please provide the findings." }]
            },
            {
              id: "c025-turn-initial-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c025-run-initial-findings", text: "Airway is patent. Respiratory rate is 16, oxygen saturation 97% on room air, pulse 76 and regular, blood pressure 128/74 and temperature 36.7 degrees Celsius. Idris is alert. Glucose is 5.8 mmol/L. Cardiovascular, respiratory and neurological examinations show no acute abnormality or injury." }]
            },
            {
              id: "c025-turn-event-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-event-history", text: "Tell me exactly what you noticed before you lost consciousness. Were you standing, sitting or exerting yourself? Did you have a racing or irregular heartbeat, chest discomfort, breathlessness, sweating, nausea, warmth, blurred vision or light-headedness?" }]
            },
            {
              id: "c025-turn-event-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-event-answer", text: "I was standing at my workbench. My heart suddenly raced very fast for perhaps half a minute, then everything went black. There was no warning dizziness, nausea or sweating. I did not have chest pain or trouble breathing." }]
            },
            {
              id: "c025-turn-witness-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-witness-history", text: "How long were you unconscious, and how quickly did you recover? Did anyone see stiffening, jerking or a head injury? Any tongue biting, incontinence, confusion or weakness afterwards? Has this happened before?" }]
            },
            {
              id: "c025-turn-witness-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-witness-answer", text: "My colleague said I was out for about 20 seconds. He lowered me to the floor. I woke quickly and knew where I was. There was no shaking, injury, wetting or confusion. I had a shorter burst of racing heartbeat last week but did not faint." }]
            },
            {
              id: "c025-turn-background-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-background-history", text: "Do you have heart disease or reduced heart function? Any previous rhythm problem, fainting or family history of sudden death? What medicines do you take, and have you missed doses or used stimulants, recreational drugs or new over-the-counter products?" }]
            },
            {
              id: "c025-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-background-answer", text: "I had a large heart attack and an anterior stent four years ago. My last scan showed the heart was weak, around 35 percent. I take aspirin, atorvastatin, bisoprolol, ramipril and spironolactone. I have not missed them and use no drugs or stimulants. No family member died suddenly." }]
            },
            {
              id: "c025-turn-ecg-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-ecg-request", text: "Please provide the initial ECG and blood results. Maintain continuous monitoring, obtain intravenous access and apply defibrillator pads while I review them." }]
            },
            {
              id: "c025-turn-ecg-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c025-run-ecg-result", text: "The ECG shows sinus rhythm at 74 beats per minute with old anterior Q waves and no acute ST-segment change. Potassium, magnesium, calcium, renal function and haemoglobin are normal. The initial troponin is not elevated." }]
            },
            {
              id: "c025-turn-interpret-initial",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-interpret-initial", text: "A normal rhythm between episodes does not exclude a transient arrhythmia. Sudden palpitations before syncope, previous myocardial infarction and reduced ejection fraction make a cardiac rhythm cause likely. He requires monitored admission and cardiology review rather than discharge." }]
            }
          ]
        },
        {
          id: "c025-run-deterioration",
          heading: "Dynamic rhythm deterioration",
          turns: [
            {
              id: "c025-turn-change",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c025-run-change", text: "Idris says his heart is racing again. He becomes pale and drowsy. The monitor shows a regular broad-complex tachycardia at 170 beats per minute. QRS duration is about 160 milliseconds. He has a pulse and his blood pressure is 80/48." }]
            },
            {
              id: "c025-turn-emergency-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-emergency-response", text: "Call the resuscitation team and cardiology. This uncertain regular broad-complex rhythm must be treated as ventricular tachycardia. He has adverse signs with hypotension and impaired consciousness, so perform immediate synchronised cardioversion. Give oxygen if saturation is below 92%, targeting 92 to 96%. Maintain intravenous access and prepare rapid sedation and analgesia if this will not delay the shock." }]
            },
            {
              id: "c025-turn-patient-warning",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-patient-warning", text: "Idris, the fast rhythm is lowering your blood pressure. We need to deliver a synchronised electrical shock now to restore a safer rhythm. We will give brief sedation if time allows." }]
            },
            {
              id: "c025-turn-cardioversion",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c025-run-cardioversion", text: "The doctor selects synchronised mode, confirms a marker on every QRS complex, ensures everybody is clear and delivers a 100-joule synchronised shock." }]
            },
            {
              id: "c025-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c025-run-response", text: "The rhythm changes to sinus rhythm at 82 beats per minute. Idris is alert, his colour improves and blood pressure is 118/70." }]
            },
            {
              id: "c025-turn-contingency",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-contingency", text: "Reassess airway, breathing and circulation, repeat the 12-lead ECG and continue monitoring. If cardioversion had failed, I would give amiodarone 300 milligrams intravenously over 10 to 20 minutes, repeat synchronised cardioversion and then give 900 milligrams over 24 hours. If he became pulseless, I would start ALS and defibrillate according to the cardiac-arrest algorithm." }]
            },
            {
              id: "c025-turn-cause-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-cause-plan", text: "Admit Idris to coronary care. Repeat ECGs and troponins, review potassium, magnesium and acid-base status, and obtain echocardiography. Assess for acute ischaemia, heart-failure deterioration, medicine effects and other reversible causes. Cardiology and electrophysiology should consider coronary assessment, catheter ablation and a secondary-prevention implantable defibrillator once reversible causes are addressed." }]
            }
          ]
        },
        {
          id: "c025-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c025-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-explanation-prompt", text: "Please explain your assessment and plan to Idris." }]
            },
            {
              id: "c025-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-explanation", text: "Idris, the monitor captured a very fast rhythm arising from the lower chambers of your heart. It reduced blood flow to your brain, which explains the blackout and why you became drowsy. The electrical treatment restored your usual rhythm. Because your heart was weakened by the previous heart attack, we need continuous monitoring and specialist tests to find the cause and reduce the chance of it recurring." }]
            },
            {
              id: "c025-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-teachback", text: "Can you tell me why you still need coronary-care monitoring even though you now feel better?" }]
            },
            {
              id: "c025-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-teachback-answer", text: "The dangerous fast rhythm could return, so you need to monitor me and work out why it happened." }]
            },
            {
              id: "c025-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c025-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c025-run-handover", text: "Idris Mensah is 59 with a previous anterior myocardial infarction, stent and ejection fraction of 35 percent. He had abrupt palpitations followed by 20 seconds of syncope with rapid recovery and no vasovagal or seizure features. Initial observations, glucose, electrolytes, troponin and ECG rhythm were reassuring apart from old anterior Q waves, so monitoring and pads were continued. He then developed regular broad-complex tachycardia at 170 with a pulse, blood pressure 80/48 and drowsiness. Presumed ventricular tachycardia converted to sinus rhythm after one 100-joule synchronised shock. He is now alert at 118/70. He requires coronary-care monitoring, serial ECGs and troponins, echocardiography, assessment for reversible and ischaemic causes, and urgent cardiology and electrophysiology review for secondary prevention." }]
            },
            {
              id: "c025-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 11.9: Managing Acute Dysrhythmias",
        date: "Current July 2026",
        url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-9-managing-acute-dysrhythmias"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Cardiac arrhythmias",
        date: "September 2024, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308717/CPG_Cardiac-arrhythmias.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Procedure: Synchronised cardioversion",
        date: "December 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0017/219221/CPP_Synchronised-cardioversion.pdf"
      },
      {
        organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
        title: "Australian clinical guideline for diagnosing and managing acute coronary syndromes",
        date: "2025",
        url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline"
      }
    ]
  });

  var caseTwentyFive = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-025"; });
  function buildHint25(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentyFive.masteryFocus = {
    case: "Reconstruct a sudden blackout preceded by palpitations, keep transient rhythm disturbance in consideration despite normal findings between episodes, and respond immediately when the physiology changes.",
    clinical: "A normal snapshot cannot exclude an intermittent cause of syncope; history sets pre-test risk, continuous monitoring captures change, and new adverse signs determine emergency treatment.",
    tasks: ["Focused event history", "Assess interpret and manage", "Explain ongoing plan", "Concise clinical handover"],
    transfer: "If Idris became unresponsive and no central pulse was present when the broad-complex rhythm appeared, would you still use synchronised cardioversion?",
    transferAnswer: "No. Pulseless ventricular tachycardia is cardiac arrest. Start high-quality CPR, deliver an unsynchronised defibrillation shock and follow the ALS shockable-rhythm algorithm, including reversible-cause treatment, rather than delaying for synchronisation or sedation.",
    transferChecks: ["Central pulse", "Responsiveness and breathing", "Synchronised versus unsynchronised shock", "Immediate ALS pathway"],
    transferCitationIds: ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"]
  };
  caseTwentyFive.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "anzcor-dysrhythmias-2026", title: "Guideline 11.9: Managing Acute Dysrhythmias", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Current July 2026", url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-9-managing-acute-dysrhythmias" },
    { id: "qas-arrhythmias-2024", title: "Clinical Practice Guideline: Cardiac arrhythmias", organisation: "Queensland Ambulance Service", date: "September 2024, listed July 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308717/CPG_Cardiac-arrhythmias.pdf" },
    { id: "qas-cardioversion-2024", title: "Clinical Practice Procedure: Synchronised cardioversion", organisation: "Queensland Ambulance Service", date: "December 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0017/219221/CPP_Synchronised-cardioversion.pdf" },
    { id: "australian-acs-2025", title: "Australian clinical guideline for diagnosing and managing acute coronary syndromes", organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand", date: "2025", url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline" }
  ];
  caseTwentyFive.reasoningCompass = {
    stem: { title: "Rebuild the seconds before the blackout", steps: [
      { time: "0 to 30 seconds", text: "The key information is not only that Idris fainted, but that a racing heartbeat came first. Clarify suddenness, posture, exertion, prodrome and recovery." },
      { time: "30 to 60 seconds", text: "Plan current ABC, glucose, ECG and continuous monitoring, then ask about prior episodes, structural heart disease, family history, medicines and substances." },
      { time: "1 to 2 minutes", text: "Set the stops: history to minute 2, assessment and management to minute 5, explanation to minute 7, handover to minute 8." }
    ], anchor: "History 0 to 2 | Assess and manage 2 to 5 | Explain 5 to 7 | Handover 7 to 8" },
    run: { title: "Keep the event sequence visible as findings arrive", steps: [
      { time: "0 to 2 minutes", text: "Clarify what happened before, during and after the episode while current observations and monitoring begin. Ask only about recurrence, recovery and background factors that change risk." },
      { time: "2 to 5 minutes", text: "Interpret the disclosed findings without allowing a normal interval assessment to erase a concerning event. Reassess immediately if anything changes." },
      { time: "5 to 8 minutes", text: "Explain the current assessment, uncertainty and plan, check understanding, then hand over the event, important findings, actions and response." }
    ], anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the task, respond, state where you paused and then return." }
  };
  caseTwentyFive.hints = [
    buildHint25("c025-hint-01", "stem", "c025-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What should happen while I take the history?", "Continuous rhythm monitoring, glucose, observations, ECG and intravenous access can begin immediately.", "An intermittent cause may recur during the station.", "Assessment and history can proceed together.", "Read the event and its recovery separately."),
    buildHint25("c025-hint-02", "stem", "c025-stem-patient", "59-year-old man", ["amc-tips-2024", "qas-arrhythmias-2024"], "Using age", "Does age identify the cause?", "No. It raises the likelihood of structural and ischaemic heart disease, but the event sequence, background and ECG must define risk.", "Age is context, not an endpoint.", "Several causes of transient loss of consciousness remain possible.", "Focus on the abrupt event."),
    buildHint25("c025-hint-03", "stem", "c025-stem-patient", "briefly losing consciousness", ["qas-arrhythmias-2024", "amc-tips-2024"], "Defining the event", "What must I establish before calling this syncope?", "Confirm loss of awareness and posture, duration, fall or injury, spontaneous recovery, post-event confusion and seizure features.", "The label follows the reconstructed event.", "He has recovered, but the missing seconds need definition.", "Use the preceding symptom as a major clue."),
    buildHint25("c025-hint-04", "stem", "c025-stem-patient", "has recovered", ["qas-arrhythmias-2024", "acsqhc-deterioration-2026"], "Using recovery", "Does recovery permit discharge thinking?", "No. A transient rhythm can end before assessment and leave normal observations. Current recovery allows history; it does not prove low risk.", "Do not confuse absence of the rhythm now with absence of the cause.", "A normal interval remains compatible with intermittent danger.", "Read what happened immediately before the blackout."),
    buildHint25("c025-hint-05", "stem", "c025-stem-context", "heart was racing immediately before", ["qas-arrhythmias-2024", "anzcor-dysrhythmias-2026"], "Using palpitations first", "Why is this order important?", "Abrupt palpitations before loss of consciousness raise concern for tachyarrhythmia reducing cardiac output and cerebral perfusion.", "It is a high-risk clue, not yet a captured rhythm.", "Cardiac syncope needs active exclusion and monitoring.", "Fix the four task times."),
    buildHint25("c025-hint-06", "stem", "c025-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Setting task one", "What fits into two minutes?", "Event sequence and posture, prodrome and palpitations, duration and recovery, seizure features, recurrence, heart disease, family history, medicines and substances.", "Prioritise details that separate mechanism and risk.", "Minutes 0 to 2 reconstruct the event and background.", "Move to assessment when the clock reaches two minutes."),
    buildHint25("c025-hint-07", "stem", "c025-task-assess", "Assess Idris, interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Setting task two", "What belongs in three minutes?", "Current physiology and injury, focused examination, ECG and purposeful tests, then interpretation, disposition and response to any change.", "Interpretation includes what normal findings cannot exclude.", "Minutes 2 to 5 cover assessment, meaning and management.", "Stop at minute 5 and explain."),
    buildHint25("c025-hint-08", "stem", "c025-task-explain", "Explain your assessment and ongoing plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting task three", "What should Idris understand?", "Explain the leading assessment from the evidence available by then, how it accounts for the event, what has been done, why monitoring continues and which decisions follow.", "Use the evidence available by then, not a prediction from the stem.", "Minutes 5 to 7 belong to Idris.", "Keep the final minute for transfer of care."),
    buildHint25("c025-hint-09", "stem", "c025-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting the final task", "Which pattern must the senior hear?", "Event and recovery, high-risk background, initial findings, any monitored change, treatment and response, then current location and next specialist action.", "A handover carries the trend, not just the last observation.", "Minute 7 to 8 transfers current risk and action.", "Start with direct assessment and monitoring."),
    buildHint25("c025-hint-10", "run", "c025-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting", "What is the first move?", "Approach Idris, observe him, confirm identity and consent, and begin monitoring while asking the first event question.", "The two-minute history clock has started.", "Current stability and event reconstruction run together.", "Perform hand hygiene and approach him."),
    buildHint25("c025-hint-11", "run", "c025-run-intro-answer", "suddenly blacked out", ["qas-arrhythmias-2024", "amc-tips-2024"], "Hearing suddenness", "What should I do before a long history?", "Obtain ABC, observations, glucose, ECG and monitoring. Sudden events can recur without warning.", "Feeling all right now is useful but not reassuring enough.", "Idris confirms an abrupt blackout with current recovery.", "Request current physiology and ECG."),
    buildHint25("c025-hint-12", "run", "c025-run-initial-request", "continuous cardiac", ["anzcor-dysrhythmias-2026", "acsqhc-deterioration-2026"], "Choosing continuous monitoring", "Why not rely on one ECG?", "A transient rhythm may have ended before the resting tracing. Continuous monitoring can capture recurrence and link symptoms to rhythm.", "The test duration must match the intermittent problem.", "Current ABC, glucose, ECG and monitoring are requested.", "Use normal initial findings carefully."),
    buildHint25("c025-hint-13", "run", "c025-run-initial-findings", "pulse 76 and regular", ["qas-arrhythmias-2024", "acsqhc-deterioration-2026"], "Reading the normal interval", "Does this make the event benign?", "No. It establishes present stability and allows focused history, but it cannot exclude an arrhythmia that terminated.", "State what is normal now and what remains unexplained.", "Idris is currently stable without injury or focal deficit.", "Rebuild the seconds before loss of consciousness."),
    buildHint25("c025-hint-14", "run", "c025-run-event-history", "before you lost consciousness", ["qas-arrhythmias-2024", "amc-tips-2024"], "Testing mechanism", "Which answers separate cardiac from reflex fainting?", "Abrupt palpitations, exertion or no prodrome support cardiac concern; warmth, nausea and fading vision support reflex physiology.", "Ask the sequence, not a checklist without timing.", "Current observations are normal; event mechanism remains unresolved.", "Listen for palpitations followed by immediate blackout."),
    buildHint25("c025-hint-15", "run", "c025-run-event-answer", "heart suddenly raced", ["qas-arrhythmias-2024", "anzcor-dysrhythmias-2026"], "Recognising the pattern", "What has become more likely?", "Abrupt rapid palpitations immediately before syncope, without vasovagal warning, make a transient tachyarrhythmia more likely.", "The rhythm is still not captured, so keep diagnostic wording provisional.", "A cardiac rhythm cause is now a leading concern.", "Confirm brief duration, recovery and seizure features."),
    buildHint25("c025-hint-16", "run", "c025-run-witness-answer", "woke quickly", ["qas-arrhythmias-2024"], "Using recovery", "What does rapid orientation add?", "Twenty seconds of unresponsiveness with immediate orientation and no repeated shaking, incontinence or confusion supports syncope over a generalised seizure.", "It defines the event without locating the rhythm.", "Syncope is supported and recurrence has occurred as palpitations.", "Now establish structural heart risk."),
    buildHint25("c025-hint-17", "run", "c025-run-background-answer", "heart was weak, around 35 percent", ["anzcor-dysrhythmias-2026", "australian-acs-2025"], "Using structural heart disease", "Why does a previous infarct and low ejection fraction matter?", "Scarred, weakened ventricular muscle provides a substrate for malignant ventricular arrhythmia and raises the risk attached to this syncope pattern.", "The background changes disposition even if the initial ECG is sinus rhythm.", "Event pattern and structural substrate now align.", "Review ECG and electrolytes, but do not let normal results close the case."),
    buildHint25("c025-hint-18", "run", "c025-run-ecg-result", "sinus rhythm at 74", ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"], "Interpreting the resting ECG", "What does sinus rhythm prove?", "Only the rhythm at this moment. Old Q waves support prior myocardial scar, while normal electrolytes and troponin remove some triggers but not an intermittent arrhythmia.", "A normal interval tracing cannot disprove a transient event.", "No acute reversible abnormality is identified yet.", "State why monitored admission remains necessary."),
    buildHint25("c025-hint-19", "run", "c025-run-interpret-initial", "normal rhythm between episodes", ["qas-arrhythmias-2024", "anzcor-dysrhythmias-2026"], "Holding the correct conclusion", "What is the disposition before recurrence?", "High-risk cardiac syncope with prior infarct and low ejection fraction requires monitored admission and cardiology review, even without rhythm capture.", "Risk-based disposition comes before diagnostic proof.", "Monitoring and pads remain in place.", "Watch for a live change and reassess immediately if it occurs."),
    buildHint25("c025-hint-20", "run", "c025-run-change", "broad-complex tachycardia", ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"], "Responding to recurrence", "What changed the case?", "The suspected intermittent rhythm is now captured. A regular broad-complex tachycardia with hypotension and drowsiness is an unstable life-threatening rhythm.", "Stop every non-urgent task and assess pulse, pressure and consciousness.", "The rhythm now explains both the current deterioration and earlier syncope.", "Call the resuscitation team and treat as ventricular tachycardia."),
    buildHint25("c025-hint-21", "run", "c025-run-emergency-response", "immediate synchronised cardioversion", ["anzcor-dysrhythmias-2026", "qas-cardioversion-2024"], "Choosing the emergency treatment", "Why electrical treatment now?", "Hypotension and impaired consciousness are adverse signs. Synchronised cardioversion is faster and more reliable than waiting for antiarrhythmic infusion in an unstable patient with a pulse.", "Sedation should not delay a lifesaving shock.", "The rhythm is treated as ventricular tachycardia because uncertainty is dangerous.", "Explain one sentence to Idris while the team prepares."),
    buildHint25("c025-hint-22", "run", "c025-run-patient-warning", "lowering your blood pressure", ["acsqhc-communication-2026", "qas-cardioversion-2024"], "Communicating during urgency", "How much explanation is enough?", "State the immediate problem, the electrical treatment and brief sedation if time permits. He needs purpose, not a lecture.", "Urgency shortens explanation but does not erase it.", "Idris receives a clear warning and reason.", "Deliver the shock safely in synchronised mode."),
    buildHint25("c025-hint-23", "run", "c025-run-cardioversion", "confirms a marker on every QRS", ["qas-cardioversion-2024", "anzcor-dysrhythmias-2026"], "Using synchronisation", "Why confirm the markers?", "Synchronisation times energy to the QRS and reduces the risk of shocking during repolarisation, which could provoke ventricular fibrillation.", "Confirm sync mode again before each shock.", "A 100-joule synchronised shock is delivered safely.", "Reassess rhythm, pulse, pressure and consciousness immediately."),
    buildHint25("c025-hint-24", "run", "c025-run-response", "blood pressure is 118/70", ["acsqhc-deterioration-2026", "anzcor-dysrhythmias-2026"], "Checking response", "Is conversion the end of care?", "No. Sinus rhythm, restored pressure, colour and alertness confirm immediate success, but recurrence and the underlying substrate remain.", "A successful shock changes urgency, not disposition.", "Perfusion has recovered after cardioversion.", "State the failed-shock and pulseless contingencies."),
    buildHint25("c025-hint-25", "run", "c025-run-contingency", "If he became pulseless", ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"], "Keeping pulse status central", "What changes if the pulse disappears?", "Switch immediately from synchronised cardioversion to cardiac-arrest care: CPR, unsynchronised defibrillation and the ALS shockable-rhythm pathway.", "Pulse status determines the electrical algorithm.", "The rescue plan covers failed cardioversion and cardiac arrest.", "Move to cause assessment and prevention."),
    buildHint25("c025-hint-26", "run", "c025-run-cause-plan", "secondary-prevention implantable defibrillator", ["anzcor-dysrhythmias-2026", "australian-acs-2025"], "Planning after stabilisation", "Why consider more than medicine?", "Documented unstable ventricular tachycardia with prior infarct and reduced function creates high recurrence risk. Cardiology must address reversible and ischaemic causes, ablation options and defibrillator protection.", "Device decisions follow specialist assessment of reversibility and benefit.", "Coronary-care monitoring and secondary prevention are required.", "Turn to Idris and explain what the monitor proved."),
    buildHint25("c025-hint-27", "run", "c025-run-explanation-prompt", "explain your assessment", ["amc-spec-2026", "acsqhc-communication-2026"], "Switching audience", "What belongs in two minutes?", "Explain the captured lower-chamber rhythm, reduced brain blood flow, successful shock, recurrence risk, monitoring, cause assessment and future prevention options.", "Use the monitor evidence to answer why the blackout happened.", "Minutes 5 to 7 belong to Idris.", "Check understanding after the explanation."),
    buildHint25("c025-hint-28", "run", "c025-run-explanation", "reduced blood flow to your brain", ["acsqhc-communication-2026", "anzcor-dysrhythmias-2026"], "Linking rhythm and blackout", "Why is this explanation memorable?", "It connects the fast ineffective rhythm to reduced cardiac output, then to loss of cerebral perfusion and consciousness.", "Mechanism explains symptoms without excessive terminology.", "Idris knows what happened and why treatment was urgent.", "Ask why monitoring continues despite feeling better."),
    buildHint25("c025-hint-29", "run", "c025-run-teachback-answer", "could return", ["acsqhc-communication-2026"], "Using teach-back", "What has he understood?", "He understands recurrence risk and the need to identify the cause. That is the essential reason for coronary-care monitoring.", "Correct only missing or inaccurate points.", "The explanation has transferred the immediate safety message.", "Use the final minute for a trend-based handover."),
    buildHint25("c025-hint-30", "run", "c025-run-handover-prompt", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps this useful?", "Event and recovery, infarct and ejection fraction, initial findings, captured rhythm with adverse signs, cardioversion and response, then current monitoring and specialist plan.", "Include both the normal interval and the later deterioration.", "The final minute transfers the full clinical trend.", "End with coronary care and secondary prevention."),
    buildHint25("c025-hint-31", "run", "c025-run-handover", "converted to sinus rhythm", ["anzcor-dysrhythmias-2026", "acsqhc-communication-2026"], "Transferring response", "Why state the energy and current pressure?", "They show what was required, whether it worked and Idris's present stability. The receiving team can continue from a clear treatment endpoint.", "A handover should make the next reassessment obvious.", "Event, rhythm, treatment, response and prevention plan are transferred.", "Stop when the examiner closes the station."),
    buildHint25("c025-hint-32", "run", "c025-run-end", "station is complete", ["amc-tips-2024"], "Finishing", "Should I add driving advice now?", "No. The station has ended. Stop, reset and begin the next stem from its own information.", "Do not weaken the final handover with an afterthought.", "Case 25 is complete.", "Take one breath, then read the next stem from line one.")
  ];
  caseTwentyFive.essentialHintIds = ["c025-hint-05", "c025-hint-06", "c025-hint-07", "c025-hint-08", "c025-hint-09", "c025-hint-15", "c025-hint-17", "c025-hint-19", "c025-hint-20", "c025-hint-21", "c025-hint-24", "c025-hint-27", "c025-hint-30", "c025-hint-32"];
  var clockByHint25 = {
    "c025-hint-06": "Minutes 0 to 2: event sequence, recovery, recurrence, cardiac background, medicines and substances while monitoring starts.",
    "c025-hint-19": "Before minute 5: high-risk syncope already requires monitored admission. Keep watching for recurrence while stating the plan.",
    "c025-hint-20": "New hypotension and drowsiness interrupt every other task. Reassess pulse and treat the unstable rhythm now.",
    "c025-hint-24": "The shock worked. Reassess, state contingencies and move to cause and prevention before the explanation prompt.",
    "c025-hint-27": "Minute 5: turn to Idris and explain what the monitor captured, why he blacked out and why risk remains.",
    "c025-hint-30": "Final minute: hand over the event, substrate, captured deterioration, shock response and current plan."
  };
  var deeperByHint25 = {
    "c025-hint-17": ["Myocardial infarction leaves electrically heterogeneous scar. Slow conduction around scar can form a re-entry circuit that repeatedly activates the ventricles at a rapid rate."],
    "c025-hint-23": ["An unsynchronised shock delivered on the vulnerable part of the T wave can induce ventricular fibrillation. Synchronisation waits for a detected QRS before releasing energy."],
    "c025-hint-28": ["At a very rapid ventricular rate, filling time shortens and scarred myocardium contracts inefficiently. Stroke volume falls, so cerebral perfusion can drop abruptly even while a pulse remains."]
  };
  caseTwentyFive.hints.forEach(function (hint) { if (clockByHint25[hint.id]) hint.clock = clockByHint25[hint.id]; if (deeperByHint25[hint.id]) hint.deeper = deeperByHint25[hint.id]; });
})();
