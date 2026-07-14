(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-026",
    globalId: "CP-C026",
    registryId: "CP-P8-C003",
    displayNumber: "Case 26",
    title: "A fall with a missing moment",
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
          id: "c026-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c026-stem-patient",
          text: "Mrs Eleni Markou, a 79-year-old woman, has presented after falling in her kitchen and sustaining a small bruise to her forehead. She cannot remember how the fall began."
        },
        {
          id: "c026-stem-start",
          text: "Eleni's daughter, Nadia Markou, is present. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c026-task-history",
          text: "Take a focused history from Eleni and, with her consent, Nadia.",
          timing: "2 minutes"
        },
        {
          id: "c026-task-assess",
          text: "Assess Eleni and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c026-task-explain",
          text: "Explain your assessment and management plan to Eleni and Nadia.",
          timing: "2 minutes"
        },
        {
          id: "c026-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c026-run-history",
          heading: "History, collateral account and initial assessment",
          turns: [
            {
              id: "c026-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-start", text: "You may begin." }]
            },
            {
              id: "c026-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c026-run-first-action", text: "The doctor performs hand hygiene and approaches Eleni and Nadia." }]
            },
            {
              id: "c026-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your full name and date of birth. Eleni, may I ask about the fall, examine you and hear Nadia's account?" }]
            },
            {
              id: "c026-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-consent", text: "I am Eleni Markou. Yes. I remember walking towards the sink, then Nadia was beside me on the floor." }]
            },
            {
              id: "c026-turn-event-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-event-question", text: "Before the missing moment, did you feel light-headed, warm or sick? Any vision change, unusual heartbeat, chest discomfort or breathlessness? Had you just stood up or felt pain?" }]
            },
            {
              id: "c026-turn-event-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-event-answer", text: "No warning at all, and I was already standing. I knew where I was immediately afterwards. I feel normal now." }]
            },
            {
              id: "c026-turn-witness-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-witness-question", text: "Nadia, did she trip or protect herself? How long was she unresponsive? Any stiffening, repeated jerking, tongue injury, incontinence or confusion afterwards?" }]
            },
            {
              id: "c026-turn-witness-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c026-run-witness-answer", text: "Nothing was in her way. Mum suddenly dropped without putting out her hands and did not answer for about fifteen seconds. There was no stiffening, repeated shaking, wetting or tongue injury. She recognised me immediately." }]
            },
            {
              id: "c026-turn-prior-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-prior-question", text: "Any previous unexplained falls or near-faints? Any heart disease, stroke, seizures or recent illness? What prescribed and non-prescribed medicines do you take, especially heart-rate tablets?" }]
            },
            {
              id: "c026-turn-prior-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-prior-answer", text: "I have hypertension and arthritis. I take only amlodipine and paracetamol, with no supplements or allergies. I blamed two falls this year on clumsiness, but I could not remember tripping then either." }]
            },
            {
              id: "c026-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-primary-request", text: "I assess airway, breathing, circulation and conscious state while checking for head, neck or limb injury. I examine her heart and nervous system, check glucose and postural blood pressure, and request a 12-lead ECG." }]
            },
            {
              id: "c026-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-primary-findings", text: "Airway is patent. Respiratory rate is 16, oxygen saturation 98% on room air, pulse 64 and regular, and blood pressure 142/76. Glucose is 5.8 mmol/L. Eleni is alert with normal neurology. She has a small frontal bruise but no other injury finding. Heart, lung and postural assessments are normal." }]
            },
            {
              id: "c026-turn-ecg-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-ecg-request", text: "Please show me the ECG." }]
            },
            {
              id: "c026-turn-ecg-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c026-run-ecg-results", text: "The ECG shows sinus rhythm at 64, PR interval 220 milliseconds, right bundle branch block and marked left axis deviation." }]
            },
            {
              id: "c026-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-interpretation", text: "The ECG shows bifascicular conduction disease with PR prolongation. Her sudden collapse without warning and previous unexplained falls suggest intermittent cardiac conduction failure. Start continuous monitoring, obtain intravenous access, apply pacing-defibrillation pads and request senior emergency and cardiology review." }]
            },
            {
              id: "c026-turn-test-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-test-request", text: "I request blood count, electrolytes, renal function, magnesium, calcium, serial troponins and CT brain for head impact with amnesia." }]
            },
            {
              id: "c026-turn-test-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c026-run-test-results", text: "CT brain is normal. Blood count, renal function, calcium, magnesium, glucose and serial troponins are normal; potassium is 4.2 mmol/L." }]
            },
            {
              id: "c026-turn-test-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-test-interpretation", text: "The minor injury and normal scan do not explain the fall." }]
            }
          ]
        },
        {
          id: "c026-run-deterioration",
          heading: "Recurrent symptoms and rhythm management",
          turns: [
            {
              id: "c026-turn-dizzy",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-dizzy", text: "Doctor, I suddenly feel very faint." }]
            },
            {
              id: "c026-turn-reassessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-reassessment", text: "Eleni, lie flat. Reassess airway, breathing, circulation and conscious state. Confirm a central pulse and blood pressure, and display the rhythm. Record a 12-lead ECG without delaying treatment. Call the resuscitation team and cardiology." }]
            },
            {
              id: "c026-turn-deterioration-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-deterioration-findings", text: "Eleni is pale and drowsy but responsive. Central pulse is 30, blood pressure 82/50 and oxygen saturation 96% on room air. The monitor and ECG show independent P waves and QRS complexes, with a broad ventricular escape rhythm at 30." }]
            },
            {
              id: "c026-turn-brady-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-brady-treatment", text: "This is complete atrioventricular block with poor perfusion. Give atropine 600 micrograms intravenously while preparing transcutaneous pacing, but do not delay pacing for a response. Use demand mode at about 70 beats per minute and increase current until capture. Titrate analgesia and sedation if her circulation allows." }]
            },
            {
              id: "c026-turn-atropine",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-atropine", text: "Atropine produces no change. Pacing spikes are visible after the current is increased, with a broad QRS after each spike. The displayed rate is 70." }]
            },
            {
              id: "c026-turn-capture",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-capture", text: "Confirm electrical capture on the monitor and mechanical capture with a pulse at the paced rate, improved blood pressure and alertness. Recheck capture continuously. If pacing is ineffective or perfusion remains inadequate, commence adrenaline at 2 to 10 micrograms per minute while arranging transvenous pacing." }]
            },
            {
              id: "c026-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c026-run-response", text: "There is a palpable pulse at 70, blood pressure is now 118/70 and Eleni is alert. Pain is controlled with titrated analgesia." }]
            },
            {
              id: "c026-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-definitive-plan", text: "Continue care in the resuscitation area. Cardiology should arrange transvenous pacing and assess for a permanent pacemaker. Check reversible causes, including ischaemia, electrolyte disturbance, hypoxia, infection, thyroid disease and medicine or toxin exposure. None is yet identified." }]
            }
          ]
        },
        {
          id: "c026-run-communication",
          heading: "Explanation, teach-back and handover",
          turns: [
            {
              id: "c026-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-explanation-prompt", text: "Please explain the assessment and plan to Eleni and Nadia." }]
            },
            {
              id: "c026-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-explanation", text: "Eleni, the electrical signal controlling your heartbeat stopped reaching the lower heart chambers. Your heart became too slow to supply your brain, explaining today's collapse and possibly earlier falls. The normal brain scan is reassuring but does not explain the blackout. These pads are pacing your heart while cardiology arranges a pacing wire and assesses whether you need a permanent pacemaker." }]
            },
            {
              id: "c026-turn-family-question",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c026-run-family-question", text: "So the previous falls may not have been clumsiness?" }]
            },
            {
              id: "c026-turn-family-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-family-answer", text: "Correct. A fall with no remembered trip can be a blackout. Your account helped us recognise that. Eleni will remain monitored and should not stand without staff." }]
            },
            {
              id: "c026-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c026-run-teachback", text: "Eleni, can you tell me what the pads are doing and what happens next?" }]
            },
            {
              id: "c026-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c026-run-teachback-answer", text: "They are making my heart beat steadily for now. The heart team will use a more reliable pacing wire and check whether I need a permanent pacemaker." }]
            },
            {
              id: "c026-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c026-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c026-run-handover", text: "Eleni Markou is 79 and presented after sudden collapse without warning and a minor forehead bruise. Her daughter saw no trip, fifteen seconds of unresponsiveness and immediate recovery. She has had two similar unexplained falls. Initial observations and neurology were normal. ECG showed PR prolongation, right bundle branch block and left axis deviation. CT brain, electrolytes, glucose and serial troponins were normal. On monitoring she developed complete atrioventricular block with a broad escape rate of 30 and blood pressure 82/50. Atropine 600 micrograms had no effect. Transcutaneous pacing at 70 achieved electrical and mechanical capture, pulse 70, blood pressure 118/70 and alertness. She needs continuous capture monitoring, transvenous pacing, reversible-cause assessment and permanent-pacemaker evaluation." }]
            },
            {
              id: "c026-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c026-run-end", text: "Thank you. The station is complete." }]
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
        date: "September 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308717/CPG_Cardiac-arrhythmias.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Procedure: Transcutaneous cardiac pacing",
        date: "December 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0018/219222/CPP_Transcutaneous-cardiac-pacing.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Syncope",
        date: "February 2021, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219090/cpg_syncope.pdf"
      }
    ]
  });

  var caseTwentySix = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-026"; });
  function buildHint26(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentySix.masteryFocus = {
    case: "Treat an unexplained fall with a missing moment as possible transient loss of consciousness, use collateral history and objective findings to expose hidden risk, and maintain active reassessment until the cause is secure.",
    clinical: "Falls can conceal syncope, especially when the person cannot describe the event; separate injury from cause, seek a witness account, and confirm that any temporary treatment restores physiology rather than trusting the monitor alone.",
    tasks: ["Focused collateral history", "Assess and interpret", "Explain management plan", "Concise clinical handover"],
    transfer: "If pacing spikes and broad QRS complexes appeared on Eleni's monitor but there was no palpable pulse at the paced rate and blood pressure remained 82/50, would that count as successful capture?",
    transferAnswer: "No. Electrical appearance without a matching pulse and improved perfusion is not adequate mechanical capture. Recheck pads and connections, increase current until reliable capture, confirm a pulse at the paced rate, use adrenaline support if needed and expedite transvenous pacing with resuscitation and cardiology teams.",
    transferChecks: ["Electrical capture", "Pulse at the paced rate", "Blood pressure and alertness", "Backup chronotrope and transvenous pacing"],
    transferCitationIds: ["qas-pacing-2024", "anzcor-dysrhythmias-2026"]
  };
  caseTwentySix.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "anzcor-dysrhythmias-2026", title: "Guideline 11.9: Managing Acute Dysrhythmias", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Current July 2026", url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-9-managing-acute-dysrhythmias" },
    { id: "qas-arrhythmias-2024", title: "Clinical Practice Guideline: Cardiac arrhythmias", organisation: "Queensland Ambulance Service", date: "September 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308717/CPG_Cardiac-arrhythmias.pdf" },
    { id: "qas-pacing-2024", title: "Clinical Practice Procedure: Transcutaneous cardiac pacing", organisation: "Queensland Ambulance Service", date: "December 2024", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0018/219222/CPP_Transcutaneous-cardiac-pacing.pdf" },
    { id: "qas-syncope-2021", title: "Clinical Practice Guideline: Syncope", organisation: "Queensland Ambulance Service", date: "February 2021, listed July 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219090/cpg_syncope.pdf" }
  ];
  caseTwentySix.reasoningCompass = {
    stem: { title: "First decide whether the fall began with a blackout", steps: [
      { time: "0 to 30 seconds", text: "A missing moment before a fall is not explained by the bruise. Ask about warning, posture and recovery, then seek the witness account with consent." },
      { time: "30 to 60 seconds", text: "Plan injury, ABC, glucose, postural, cardiac and neurological assessment plus ECG, previous unexplained falls and medicine review." },
      { time: "1 to 2 minutes", text: "Set the stops: history to minute 2, assessment to minute 5, explanation to minute 7, handover to minute 8." }
    ], anchor: "History 0 to 2 | Assess 2 to 5 | Explain 5 to 7 | Handover 7 to 8" },
    run: { title: "Separate the injury from the reason for the fall", steps: [
      { time: "0 to 2 minutes", text: "Use Eleni's account for symptoms and Nadia's account for observable events while current stability and the injury are assessed." },
      { time: "2 to 5 minutes", text: "Interpret the disclosed examination, tracing and tests together. Keep the cause of the fall separate from the consequences of landing." },
      { time: "5 to 8 minutes", text: "Explain the current assessment and immediate plan, check understanding, then hand over the event pattern, important findings, actions and response." }
    ], anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the task, respond, state where you paused and then return." }
  };
  caseTwentySix.hints = [
    buildHint26("c026-hint-01", "stem", "c026-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can begin while I ask about the fall?", "Injury assessment, observations, glucose, ECG and monitoring can begin while Eleni and Nadia reconstruct the event.", "The bruise and the cause must be assessed in parallel.", "Emergency resources are available if the event recurs.", "Read the memory gap before assuming a mechanical fall."),
    buildHint26("c026-hint-02", "stem", "c026-stem-patient", "79-year-old woman", ["qas-syncope-2021", "amc-tips-2024"], "Using age", "Does age make a simple trip more likely?", "It broadens possibilities: postural change, medicines, arrhythmia, neurological events and injury. The event sequence still determines which is most concerning.", "Do not use age as an explanation.", "Reduced reserve and injury risk increase urgency.", "Ask what happened before contact with the floor."),
    buildHint26("c026-hint-03", "stem", "c026-stem-patient", "small bruise to her forehead", ["qas-syncope-2021", "acsqhc-deterioration-2026"], "Separating injury and cause", "Could the bruise explain the missing memory?", "It may justify head-injury assessment, but it does not explain why she fell. Treat it as a consequence until evidence shows otherwise.", "Assess the injury and the cause of the fall as two separate questions.", "There are two questions: injury and event mechanism.", "Use the memory gap as the clue to possible transient loss of consciousness."),
    buildHint26("c026-hint-04", "stem", "c026-stem-patient", "cannot remember how the fall began", ["qas-syncope-2021", "amc-tips-2024"], "Using the missing moment", "What should I consider besides amnesia from impact?", "Sudden syncope can remove the chance to brace or remember the onset. Ask for warning symptoms and immediate recovery, then seek a witness.", "Do not label recurrent unexplained falls as clumsiness.", "Transient loss of consciousness is possible but unconfirmed.", "Read who can provide the missing seconds."),
    buildHint26("c026-hint-05", "stem", "c026-stem-start", "daughter, Nadia Markou, is present", ["acsqhc-communication-2026", "qas-syncope-2021"], "Planning collateral history", "What can Nadia establish?", "Whether there was a trip, protective movement, unresponsiveness, jerking, injury and post-event confusion. Ask Eleni's permission first.", "Observable details are more useful than a witness diagnosis.", "Nadia may distinguish sudden collapse from a trip.", "Fix the four task times."),
    buildHint26("c026-hint-06", "stem", "c026-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Setting task one", "What fits into two minutes?", "Warning, posture and recovery; witness account; prior unexplained falls; cardiac, neurological and illness history; then prescribed and non-prescribed medicines.", "Use Eleni first, then Nadia for the missing interval.", "Minutes 0 to 2 reconstruct the event and recurrence.", "Move to assessment when the history stop arrives."),
    buildHint26("c026-hint-07", "stem", "c026-task-assess", "Assess Eleni and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Setting task two", "What belongs in three minutes?", "Current physiology, injury and focused cardiac and neurological examination, ECG and purposeful investigations, then interpretation and immediate disposition.", "Interpret both positive and normal findings against the event history.", "Minutes 2 to 5 cover assessment and meaning.", "New symptoms override the planned sequence."),
    buildHint26("c026-hint-08", "stem", "c026-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting task three", "What should both women understand?", "Explain the leading assessment from the evidence available by then, how it accounts for the event, what has been done, what happens next and what remains uncertain.", "Connect prior unexplained falls only as a possibility, not certainty.", "Minutes 5 to 7 belong to Eleni and Nadia.", "Keep one minute for handover."),
    buildHint26("c026-hint-09", "stem", "c026-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting the final task", "Which trend must the senior receive?", "Event and witness account, recurrence, initial examination and ECG, investigation meaning, any deterioration, treatment and response, then definitive plan.", "A trend is more useful than the last normal value.", "Minute 7 to 8 transfers current risk and action.", "Start by confirming consent for both accounts."),
    buildHint26("c026-hint-10", "run", "c026-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting", "What is the first move?", "Perform hand hygiene, approach both women, observe Eleni, establish identity and ask permission for examination and Nadia's account.", "The two-minute history has started.", "Injury and event reconstruction begin together.", "Address Eleni first."),
    buildHint26("c026-hint-11", "run", "c026-run-consent", "then Nadia was beside me", ["qas-syncope-2021", "amc-tips-2024"], "Hearing the memory gap", "What detail should I obtain from Eleni before Nadia?", "Ask about warning, posture, palpitations, chest symptoms and immediate orientation. These are experiences only Eleni can report.", "Do not let collateral history silence the patient.", "Eleni confirms a missing interval and consents to Nadia's account.", "Test for prodrome and postural trigger."),
    buildHint26("c026-hint-12", "run", "c026-run-event-answer", "No warning at all", ["qas-syncope-2021"], "Recognising abrupt onset", "What does no warning while already standing suggest?", "It makes a simple postural or vasovagal event less convincing and raises concern for abrupt cardiac syncope, especially with immediate recovery.", "The pattern is concerning but the cause remains unproven.", "Eleni cannot explain a trip or prodrome.", "Ask Nadia whether there was a trip, protection or seizure pattern."),
    buildHint26("c026-hint-13", "run", "c026-run-witness-answer", "suddenly dropped", ["qas-syncope-2021", "amc-tips-2024"], "Using the witness account", "What has Nadia added?", "No obstacle, no protective movement, brief unresponsiveness and immediate recognition support abrupt syncope over a trip or generalised seizure.", "A witness defines the event without diagnosing its cause.", "Transient loss of consciousness is now strongly supported.", "Ask whether earlier falls had the same missing onset."),
    buildHint26("c026-hint-14", "run", "c026-run-prior-answer", "two falls this year", ["qas-syncope-2021"], "Recognising recurrence", "Why revisit events called clumsiness?", "Repeated falls without a remembered trip may be previous syncopal episodes. Recurrence raises the importance of intermittent causes.", "Do not retroactively declare the same diagnosis without evidence.", "This may be the third unexplained event.", "Move to injury, current physiology, postural assessment and ECG."),
    buildHint26("c026-hint-15", "run", "c026-run-primary-request", "12-lead ECG", ["qas-syncope-2021", "acsqhc-deterioration-2026"], "Assessing consequence and cause", "Why combine head assessment with ECG?", "The head examination addresses harm from the fall; ECG and cardiac assessment search for why it happened. Glucose, neurology and postural pressure test other reversible causes.", "Do not allow the visible injury to consume the entire assessment.", "Both consequence and mechanism are being assessed.", "Use normal observations as a snapshot, then inspect the ECG."),
    buildHint26("c026-hint-16", "run", "c026-run-primary-findings", "small frontal bruise", ["qas-syncope-2021", "acsqhc-deterioration-2026"], "Reading normal current findings", "Does normal neurology and posture settle the event?", "No. They reduce some current concerns and allow further assessment, but an intermittent rhythm can be absent between episodes.", "The bruise is real; it still does not explain the sudden fall.", "Eleni is currently stable with a minor injury.", "Request and interpret the ECG."),
    buildHint26("c026-hint-17", "run", "c026-run-ecg-results", "PR interval 220", ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"], "Reading conduction clues", "What does PR prolongation plus right bundle branch block and left axis deviation suggest?", "Conduction is delayed in more than one part of the cardiac electrical system. That creates risk of intermittent failure to conduct impulses to the ventricles.", "Sinus rhythm now does not exclude intermittent advanced block.", "The ECG provides a plausible cardiac mechanism for abrupt recurrent syncope.", "Start monitoring and pacing readiness before it recurs."),
    buildHint26("c026-hint-18", "run", "c026-run-interpretation", "intermittent cardiac conduction failure", ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"], "Interpreting the risk", "Why act before complete block is captured?", "Abrupt recurrent syncope plus conduction disease is high risk. Monitoring, access, pacing-defibrillation pads and cardiology review reduce delay if conduction fails again.", "Risk-based action can precede definitive rhythm capture.", "An intermittent cardiac cause is now likely.", "Investigate injury and reversible contributors without removing monitoring."),
    buildHint26("c026-hint-19", "run", "c026-run-test-results", "CT brain is normal", ["qas-syncope-2021", "amc-tips-2024"], "Using normal tests correctly", "What has the normal scan answered?", "It reduces concern for acute intracranial injury from the impact. It does not explain why Eleni suddenly collapsed.", "A consequence test cannot become a cause test.", "No electrolyte, ischaemic or structural brain explanation is identified.", "Keep the cardiac concern and monitor for live evidence."),
    buildHint26("c026-hint-20", "run", "c026-run-test-interpretation", "do not explain the fall", ["amc-tips-2024", "qas-syncope-2021"], "Holding the unresolved cause", "What should I say after normal tests?", "The minor injury is assessed, but the event remains unexplained and the abnormal ECG still requires monitored cardiac evaluation.", "Normal tests narrow the problem; they do not cancel the positive evidence.", "The cause remains likely intermittent and cardiac.", "Respond immediately if Eleni reports new faintness."),
    buildHint26("c026-hint-21", "run", "c026-run-dizzy", "suddenly feel very faint", ["acsqhc-deterioration-2026", "anzcor-dysrhythmias-2026"], "Responding to change", "What happens to the task sequence now?", "Stop. Lie her flat, reassess ABC and consciousness, confirm a central pulse and pressure, display the rhythm and call resuscitation and cardiology support.", "New symptoms interrupt interpretation and conversation.", "The intermittent process may now be occurring.", "Obtain rhythm evidence without delaying treatment."),
    buildHint26("c026-hint-22", "run", "c026-run-deterioration-findings", "independent P waves and QRS complexes", ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"], "Interpreting the rhythm", "What does independence mean?", "Atrial impulses are no longer reaching the ventricles. The slow broad escape rhythm is maintaining a pulse poorly, causing hypotension and drowsiness.", "This is not stable bradycardia.", "Complete atrioventricular block with poor perfusion is now captured.", "Treat immediately while preparing pacing."),
    buildHint26("c026-hint-23", "run", "c026-run-brady-treatment", "do not delay pacing", ["anzcor-dysrhythmias-2026", "qas-pacing-2024"], "Choosing pacing early", "Why give atropine but not wait for it?", "Atropine may fail when block is below the atrioventricular node. Poor perfusion with a broad escape rhythm requires rapid transcutaneous pacing readiness.", "A drug trial must not delay effective rate support.", "Atropine and pacing preparation occur together.", "Set demand rate, increase current and then prove capture."),
    buildHint26("c026-hint-24", "run", "c026-run-atropine", "Atropine produces no change", ["anzcor-dysrhythmias-2026", "qas-pacing-2024"], "Moving past failed atropine", "Do pacing spikes and QRS complexes prove success?", "They show electrical capture is possible, but you still need a pulse at the paced rate and improved perfusion to prove mechanical capture.", "Never read the monitor without checking the patient.", "Atropine failed and pacing appears electrically effective.", "Confirm pulse, pressure and alertness now."),
    buildHint26("c026-hint-25", "run", "c026-run-capture", "mechanical capture", ["qas-pacing-2024", "anzcor-dysrhythmias-2026"], "Confirming real capture", "What counts as success?", "A QRS after each pacing spike, a matching palpable pulse and improved blood pressure and consciousness. Recheck because capture can be lost.", "Electrical capture alone is incomplete.", "The treatment endpoint is restored perfusion at the paced rate.", "Use adrenaline and transvenous pacing if capture or perfusion is inadequate."),
    buildHint26("c026-hint-26", "run", "c026-run-response", "palpable pulse at 70", ["acsqhc-deterioration-2026", "qas-pacing-2024"], "Reading the response", "Has pacing achieved its immediate aim?", "Yes. Pulse matches the paced rate, pressure and alertness have improved, and pain is controlled. Continuous capture and skin checks remain necessary.", "Temporary success does not remove the need for definitive pacing.", "Electrical and mechanical capture are confirmed.", "Arrange the transvenous and permanent-pacemaker pathway."),
    buildHint26("c026-hint-27", "run", "c026-run-definitive-plan", "permanent pacemaker", ["anzcor-dysrhythmias-2026", "qas-arrhythmias-2024"], "Planning definitive treatment", "Why cannot the pads remain the solution?", "Transcutaneous pacing is uncomfortable and temporary. Cardiology needs reliable transvenous support and assessment for a permanent pacemaker while reversible causes are checked.", "Temporary pacing buys time for definitive care.", "No reversible cause has yet been identified.", "Turn to Eleni and Nadia with a clear causal explanation."),
    buildHint26("c026-hint-28", "run", "c026-run-explanation-prompt", "explain the assessment", ["amc-spec-2026", "acsqhc-communication-2026"], "Switching audience", "What belongs in two minutes?", "Explain the electrical block, slow heartbeat and brain blood-flow link, what the pads are doing, why the brain scan does not explain the fall and what pacing comes next.", "Use the captured rhythm to answer the missing moment.", "Minutes 5 to 7 belong to Eleni and Nadia.", "Address whether earlier falls could have been similar without claiming certainty."),
    buildHint26("c026-hint-29", "run", "c026-run-family-answer", "can be a blackout", ["acsqhc-communication-2026", "qas-syncope-2021"], "Reframing earlier falls", "How certain should I sound?", "Say they may have been blackouts because the onset was also missing. That possibility explains why collateral history and monitoring matter.", "Possible is accurate; proven would overreach.", "Nadia understands that the prior falls deserve reclassification and review.", "Use teach-back for the temporary and definitive plan."),
    buildHint26("c026-hint-30", "run", "c026-run-teachback-answer", "more reliable pacing wire", ["acsqhc-communication-2026", "qas-pacing-2024"], "Using teach-back", "What has Eleni understood?", "She understands that the pads are temporary rate support and that cardiology will provide more reliable pacing and assess permanent treatment.", "Correct only missing details.", "The immediate and next steps are clear.", "Use the final minute for a trend-based handover."),
    buildHint26("c026-hint-31", "run", "c026-run-handover-prompt", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps this safe?", "Event and witness account, prior falls, initial ECG, normal injury and reversible-cause tests, captured block and perfusion, treatment and response, then transvenous and permanent pacing plan.", "Include the transition from normal observations to deterioration.", "The final minute transfers current risk and treatment dependence.", "Finish with continuous capture monitoring and cardiology."),
    buildHint26("c026-hint-32", "run", "c026-run-handover", "electrical and mechanical capture", ["qas-pacing-2024", "acsqhc-communication-2026"], "Transferring the treatment endpoint", "Why state both types of capture?", "It tells the senior that the monitor and patient agree: paced complexes produce a palpable pulse and restored perfusion.", "The receiving team must keep confirming both.", "Event, cause, deterioration, response and definitive plan are transferred.", "Stop when the examiner ends the station."),
    buildHint26("c026-hint-33", "run", "c026-run-end", "station is complete", ["amc-tips-2024"], "Finishing", "Should I add a falls-clinic referral?", "No. The station has ended. Stop, reset and begin the next case from its own stem.", "Do not add a lower-priority afterthought.", "Case 26 is complete.", "Take one breath, then read the next stem from line one.")
  ];
  caseTwentySix.essentialHintIds = ["c026-hint-04", "c026-hint-06", "c026-hint-07", "c026-hint-08", "c026-hint-09", "c026-hint-13", "c026-hint-17", "c026-hint-18", "c026-hint-21", "c026-hint-22", "c026-hint-25", "c026-hint-28", "c026-hint-31", "c026-hint-33"];
  var clockByHint26 = {
    "c026-hint-06": "Minutes 0 to 2: Eleni's warning and recovery, Nadia's observations, prior unexplained falls, relevant illness and medicines.",
    "c026-hint-18": "Before minute 5: the history and ECG already require monitoring and pacing readiness. Complete only tests that change the immediate plan.",
    "c026-hint-21": "New faintness interrupts every other task. Reassess pulse, pressure and rhythm and call resuscitation support now.",
    "c026-hint-26": "Perfusion is restored with pacing. State the definitive pathway, then switch to explanation.",
    "c026-hint-28": "Minute 5: turn to Eleni and Nadia and explain the block, temporary pacing and what happens next.",
    "c026-hint-31": "Final minute: hand over event pattern, ECG warning, captured deterioration, pacing response and definitive plan."
  };
  var deeperByHint26 = {
    "c026-hint-17": ["Right bundle branch block shows delayed right-sided ventricular activation. Marked left axis deviation can reflect left anterior fascicular disease. Together they indicate disease in two ventricular conduction pathways."],
    "c026-hint-22": ["When atrial impulses cannot traverse the atrioventricular conduction system, a slower distal focus may generate a broad escape rhythm. Its low rate and inefficient activation can sharply reduce cardiac output."],
    "c026-hint-25": ["Electrical capture is a paced depolarisation on the monitor. Mechanical capture means that depolarisation produces a contraction strong enough to generate a pulse and improve organ perfusion."]
  };
  caseTwentySix.hints.forEach(function (hint) { if (clockByHint26[hint.id]) hint.clock = clockByHint26[hint.id]; if (deeperByHint26[hint.id]) hint.deeper = deeperByHint26[hint.id]; });
})();
