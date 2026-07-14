(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-024",
    globalId: "CP-C024",
    registryId: "CP-P8-C001",
    displayNumber: "Case 24",
    title: "A brief collapse at netball training",
    status: "reasoning_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 8, title: "Cardiac Syncope" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History Taking"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c024-stem-role",
          text: "You are a doctor working in a general practice clinic."
        },
        {
          id: "c024-stem-patient",
          text: "Ms Amara Nwosu, a 22-year-old woman, has attended after briefly losing consciousness during netball training this morning. She feels back to normal."
        },
        {
          id: "c024-stem-witness",
          text: "Amara's teammate, Maeve Collins, witnessed the event and is present. The examiner will provide findings and an ECG when requested."
        }
      ],
      tasks: [
        {
          id: "c024-task-history",
          text: "Take a focused history from Amara and, with her consent, Maeve.",
          timing: "3 minutes"
        },
        {
          id: "c024-task-assess",
          text: "Assess Amara's current condition and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c024-task-explain",
          text: "Explain your assessment and plan to Amara.",
          timing: "2 minutes"
        },
        {
          id: "c024-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c024-run-history",
          heading: "Focused history and witness account",
          turns: [
            {
              id: "c024-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-start", text: "You may begin." }]
            },
            {
              id: "c024-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c024-run-first-action", text: "The doctor performs hand hygiene and approaches Amara and Maeve." }]
            },
            {
              id: "c024-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-intro", text: "Hello, I am Ushana, one of the doctors. Amara, can you confirm your full name? May I ask what happened, examine you and check an ECG?" }]
            },
            {
              id: "c024-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-intro-answer", text: "Amara Nwosu. Yes. I feel completely fine now. I mainly need to know whether I can play in Saturday's final." }]
            },
            {
              id: "c024-turn-event-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-event-question", text: "Please take me from just before the event until you recovered. Were you exercising or had you stopped? Any palpitations, chest discomfort, breathlessness, dizziness, nausea, warmth or fading vision?" }]
            },
            {
              id: "c024-turn-event-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-event-answer", text: "I was sprinting for the ball, not resting afterwards. My heart suddenly thumped very fast, then I woke on the court. There was no warning dizziness, nausea or fading vision, and no chest pain. I felt normal within a minute." }]
            },
            {
              id: "c024-turn-witness-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-consent", text: "Amara, may I ask Maeve what she saw?" }]
            },
            {
              id: "c024-turn-witness-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-consent-answer", text: "Yes, of course." }]
            },
            {
              id: "c024-turn-witness-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-question", text: "Maeve, what did you see? How long was Amara unresponsive? Any injury, repeated jerking, tongue biting, incontinence or confusion afterwards?" }]
            },
            {
              id: "c024-turn-witness-answer",
              speaker: "Witness",
              kind: "spoken",
              lines: [{ id: "c024-run-witness-answer", text: "She suddenly dropped while running. We rolled her onto her side. She was out for about fifteen seconds, then answered me straight away. No shaking, tongue injury, wetting or confusion. She did not hit her head." }]
            },
            {
              id: "c024-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-background-question", text: "Any previous faint, near-faint, palpitations or unusual breathlessness with exercise? Any heart condition, seizure or recent illness? What medicines, supplements, energy products or recreational drugs do you use?" }]
            },
            {
              id: "c024-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-background-answer", text: "Twice this year I became light-headed with pounding in my chest during hard training, but stopped before passing out. I am otherwise healthy, take nothing and do not use drugs. I ate and drank normally today." }]
            },
            {
              id: "c024-turn-family-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-family-question", text: "Has a close relative had heart disease, unexplained collapse or sudden death at a young age?" }]
            },
            {
              id: "c024-turn-family-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-family-answer", text: "My father died suddenly while running at thirty-eight. They thought it was a heart attack, but there was no post-mortem. No one else has been checked." }]
            }
          ]
        },
        {
          id: "c024-run-assessment",
          heading: "Examination, ECG and interpretation",
          turns: [
            {
              id: "c024-turn-assessment-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-assessment-request", text: "I assess airway, breathing, circulation, conscious state, glucose and injury. I record lying and standing observations and examine the pulse, heart, lungs and neurological system. If she remains well, I listen during standing, Valsalva and squatting. I request a 12-lead ECG." }]
            },
            {
              id: "c024-turn-assessment-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c024-run-assessment-findings", text: "Amara is alert and comfortable. Pulse is 74 and regular, blood pressure 118/72 without a postural fall, respiratory rate 14, oxygen saturation 99% on room air and glucose 5.2 mmol/L. There is no injury or neurological deficit. A systolic ejection murmur at the left sternal edge and apex becomes louder with standing and Valsalva and softer with squatting. Lungs are clear. ECG shows sinus rhythm, left ventricular hypertrophy, deep narrow inferolateral Q waves and inferolateral T-wave inversion. QT interval is normal." }]
            },
            {
              id: "c024-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-interpretation", text: "Loss of consciousness during exertion without a vasovagal warning, preceded by palpitations, with her father's sudden death and these examination and ECG abnormalities is high-risk cardiac syncope. Hypertrophic cardiomyopathy is a leading concern, although it requires imaging and specialist assessment to confirm." }]
            },
            {
              id: "c024-turn-immediate-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-immediate-plan", text: "Amara should not resume sport or drive herself. I will call an ambulance for monitored transfer to the emergency department today. While waiting, she remains supervised, avoids exertion and has repeat observations and intravenous access. If she collapses again, we begin immediate resuscitation and use the defibrillator if indicated." }]
            },
            {
              id: "c024-turn-investigation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-investigation-plan", text: "Hospital assessment includes continuous rhythm monitoring, repeat ECG, electrolytes, renal function, magnesium, full blood count and an echocardiogram. Cardiology may arrange ambulatory monitoring, supervised exercise assessment and cardiac magnetic resonance imaging if the diagnosis or risk remains uncertain." }]
            }
          ]
        },
        {
          id: "c024-run-communication",
          heading: "Explanation, concern and handover",
          turns: [
            {
              id: "c024-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-explanation-prompt", text: "Please explain your assessment and plan to Amara." }]
            },
            {
              id: "c024-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-explanation", text: "Amara, several parts of today's blackout suggest a heart-related cause rather than a simple faint. The murmur and ECG can occur when heart muscle is unusually thick, but do not confirm it. You need a heart scan and specialist review, while monitoring may detect a rhythm problem a single ECG misses." }]
            },
            {
              id: "c024-turn-final-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-final-concern", text: "Does that mean I can never play again? I have trained all year for this final." }]
            },
            {
              id: "c024-turn-final-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-final-response", text: "I understand why Saturday matters. Playing before we know the cause could expose you to another collapse, so no training or competition for now. That is temporary, not a lifetime decision. A cardiologist will confirm the diagnosis, assess your individual sudden-death risk and discuss future exercise. An implanted defibrillator is considered only after that assessment. Do not drive until the cause has been assessed and you are medically cleared." }]
            },
            {
              id: "c024-turn-family-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-family-plan", text: "Because of your father's death, cardiology will take a three-generation family history and may offer genetic counselling and testing. If an inherited condition is confirmed, close relatives can be offered ECGs, heart scans and targeted testing." }]
            },
            {
              id: "c024-turn-teach-back",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c024-run-teach-back", text: "Before I call the ambulance, can you tell me why you should not play or drive yourself today, and what will happen next?" }]
            },
            {
              id: "c024-turn-teach-back-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c024-run-teach-back-answer", text: "The collapse might be heart-related, so exercise or driving could be unsafe. I am going by ambulance for monitoring, a heart scan and cardiology review. It is not automatically a lifetime ban." }]
            },
            {
              id: "c024-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-handover-prompt", text: "Please finish with a concise handover to the receiving clinician." }]
            },
            {
              id: "c024-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c024-run-handover", text: "Amara Nwosu is 22 and had an abrupt fifteen-second loss of consciousness while sprinting today, preceded by palpitations and without prodrome or confusion. She has had two exertional near-syncopal episodes, and her father died suddenly while running at thirty-eight. She is currently stable. Examination reveals a dynamic systolic ejection murmur; ECG shows left ventricular hypertrophy, deep narrow inferolateral Q waves and T-wave inversion. I am concerned about cardiac syncope from possible hypertrophic cardiomyopathy. She has been advised not to exercise or drive and requires monitored emergency transfer, telemetry, echocardiography and cardiology assessment of inherited disease and sudden-death risk." }]
            },
            {
              id: "c024-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c024-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Syncope",
        date: "February 2021, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219090/cpg_syncope.pdf"
      },
      {
        organisation: "American Heart Association and American College of Cardiology",
        title: "2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy: Key Points",
        date: "May 2024",
        url: "https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/05/06/15/12/2024-hypertrophic-cardiomyopathy-gl"
      },
      {
        organisation: "American College of Cardiology",
        title: "Hypertrophic Cardiomyopathy Guideline Hub",
        date: "Current July 2026",
        url: "https://www.acc.org/Guidelines/Hubs/Hypertrophic-Cardiomyopathy"
      },
      {
        organisation: "Austroads",
        title: "Assessing Fitness to Drive",
        date: "Current July 2026",
        url: "https://austroads.com.au/drivers-and-vehicles/assessing-fitness-to-drive"
      }
    ]
  });

  var caseTwentyFour = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-024"; });
  function buildHint24(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseTwentyFour.masteryFocus = {
    case: "Reconstruct the timing of a blackout during netball training from patient and witness accounts, identify features that make a cardiac cause unsafe to dismiss, and turn examination and ECG findings into an immediate disposition plan.",
    clinical: "A person who feels normal after transient loss of consciousness may still be high risk; let event timing, prodrome, family history, examination and ECG determine disposition rather than the current appearance.",
    tasks: ["Focused collateral history", "Assess and interpret", "Explain assessment and plan", "Concise clinical handover"],
    transfer: "If Amara had fainted only after stopping exercise, with warmth, nausea, fading vision, a normal examination, normal ECG and no family history, would monitored ambulance transfer still be automatic?",
    transferAnswer: "Not automatically. That pattern is more compatible with reflex syncope, but first confirm recovery, hydration, injury, glucose and absence of cardiac red flags. Disposition then depends on the complete assessment, recurrence, local pathways and reliable safety-netting rather than the single label.",
    transferChecks: ["During exercise versus after exercise", "Prodrome and rapid recovery", "Family history and prior exertional symptoms", "Examination and ECG"],
    transferCitationIds: ["qas-syncope-2021", "austroads-driving-2026"]
  };
  caseTwentyFour.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "qas-syncope-2021", title: "Clinical Practice Guideline: Syncope", organisation: "Queensland Ambulance Service", date: "February 2021, listed July 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0021/219090/cpg_syncope.pdf" },
    { id: "aha-hcm-2024", title: "2024 Guideline for the Management of Hypertrophic Cardiomyopathy: Key Points", organisation: "American Heart Association and American College of Cardiology", date: "May 2024", url: "https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/05/06/15/12/2024-hypertrophic-cardiomyopathy-gl" },
    { id: "acc-hcm-hub-2026", title: "Hypertrophic Cardiomyopathy Guideline Hub", organisation: "American College of Cardiology", date: "Current July 2026", url: "https://www.acc.org/Guidelines/Hubs/Hypertrophic-Cardiomyopathy" },
    { id: "austroads-driving-2026", title: "Assessing Fitness to Drive", organisation: "Austroads", date: "Current July 2026", url: "https://austroads.com.au/drivers-and-vehicles/assessing-fitness-to-drive" }
  ];
  caseTwentyFour.reasoningCompass = {
    stem: { title: "Reconstruct the event before naming the faint", steps: [
      { time: "0 to 30 seconds", text: "Loss of consciousness during active exercise is different from fainting after exercise. Confirm the exact timing, warning symptoms and recovery." },
      { time: "30 to 60 seconds", text: "Use Amara for symptoms and Maeve for movement, duration and recovery. Add previous exertional symptoms, medicines, substances and sudden-death family history." },
      { time: "1 to 2 minutes", text: "Set the stops: history to minute 3, assessment to minute 5, explanation to minute 7, handover to minute 8." }
    ], anchor: "History 0 to 3 | Assess 3 to 5 | Explain 5 to 7 | Handover 7 to 8" },
    run: { title: "Rebuild the event before deciding risk", steps: [
      { time: "0 to 3 minutes", text: "Establish consent, reconstruct what happened before, during and after the blackout, and use the witness account to fill only the gaps the patient could not observe." },
      { time: "3 to 5 minutes", text: "Assess current stability and interpret the disclosed examination and tracing together. State which features change the level of concern and the next step." },
      { time: "5 to 8 minutes", text: "Explain what is known, what remains uncertain and the immediate plan, then hand over the event sequence and the findings that determine risk." }
    ], anchor: "If airway, breathing, circulation or consciousness becomes unsafe, pause the task, respond, state where you paused and then return." }
  };
  caseTwentyFour.hints = [
    buildHint24("c024-hint-01", "stem", "c024-stem-role", "general practice clinic", ["amc-spec-2026", "qas-syncope-2021"], "Reading the setting", "What does general practice change?", "You can assess current stability and ECG, then decide whether outpatient care is safe or emergency transfer is required.", "The setting changes disposition options, not the seriousness of red flags.", "Amara is in a clinic after a transient event.", "Read when the event occurred relative to exercise."),
    buildHint24("c024-hint-02", "stem", "c024-stem-patient", "22-year-old woman", ["qas-syncope-2021", "amc-tips-2024"], "Using age", "Does youth make the event benign?", "No. Many blackouts in young people are benign, but serious cardiac causes still occur. The event itself has to establish the risk.", "Age changes probability; it does not replace event analysis.", "Current risk depends on the story and objective findings.", "Focus on exactly when the blackout happened during training."),
    buildHint24("c024-hint-03", "stem", "c024-stem-patient", "losing consciousness during netball training", ["qas-syncope-2021"], "Using the training context", "What exact distinction matters?", "Ask whether she collapsed while sprinting, after stopping or while standing between plays. A blackout during active exertion carries a different risk from a faint after exertion.", "Keep the timing precise rather than calling both exercise-related.", "The timing may be important but is not yet detailed.", "Read her recovery without letting it close the case."),
    buildHint24("c024-hint-04", "stem", "c024-stem-patient", "feels back to normal", ["qas-syncope-2021", "amc-tips-2024"], "Using current recovery", "Does normal now mean safe now?", "No. Some serious cardiac causes leave normal findings between events. Recovery helps define syncope but does not decide disposition.", "Separate current appearance from event risk.", "Amara can provide history and consent.", "Use the witness to verify what she could not observe."),
    buildHint24("c024-hint-05", "stem", "c024-stem-witness", "witnessed the event", ["qas-syncope-2021", "acsqhc-communication-2026"], "Planning collateral history", "What can Maeve add that Amara cannot?", "Suddenness, fall pattern, duration, movements, injury and recovery. Obtain Amara's consent before asking.", "A witness account complements rather than replaces Amara's account.", "Two perspectives can reconstruct the missing seconds.", "Fix the four task times."),
    buildHint24("c024-hint-06", "stem", "c024-task-history", "focused history", ["amc-spec-2026", "amc-tips-2024"], "Setting task one", "What belongs in three minutes?", "Event posture and exertion, prodrome and palpitations, duration and recovery, witness seizure features, prior exertional symptoms, family sudden death, medicines and substances.", "Use the event sequence before background detail.", "Minutes 0 to 3 establish whether this was high-risk syncope.", "Move to examination even if one low-value negative remains."),
    buildHint24("c024-hint-07", "stem", "c024-task-assess", "Assess Amara's current condition", ["amc-spec-2026", "qas-syncope-2021"], "Setting task two", "What must fit into two minutes?", "ABCDE, glucose, injury and neurology, postural observations, heart examination and ECG interpretation, followed by a clear disposition decision.", "A normal current observation set does not erase high-risk history.", "Minutes 3 to 5 cover assessment, interpretation and transfer decision.", "Stop at minute 5 and explain."),
    buildHint24("c024-hint-08", "stem", "c024-task-explain", "Explain your assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting task three", "What concern must be answered directly?", "Explain the leading assessment from the evidence available by then, why the plan is needed now, what remains uncertain and how the next steps address it.", "Answer Amara's concern without predicting the final outcome.", "Minutes 5 to 7 belong to Amara.", "Keep one minute for the receiving clinician."),
    buildHint24("c024-hint-09", "stem", "c024-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Setting the final task", "Which facts make a handover useful?", "Event sequence and recovery, decisive background and witness details, important examination and ECG findings, working assessment, current disposition and next action.", "Lead with the event risk, then the supporting evidence.", "Minute 7 to 8 transfers the reason for urgent assessment.", "Start by addressing Amara and her immediate concern."),
    buildHint24("c024-hint-10", "run", "c024-run-start", "You may begin", ["amc-tips-2024", "amc-spec-2026"], "Starting", "What is the first visible move?", "Perform hand hygiene, approach both women, observe Amara and establish identity and consent before asking about the event.", "The three-minute history has started.", "Current observation begins at first contact.", "Address Amara first."),
    buildHint24("c024-hint-11", "run", "c024-run-intro-answer", "whether I can play", ["acsqhc-communication-2026", "qas-syncope-2021"], "Hearing the real concern", "Do I answer about Saturday now?", "Acknowledge it, then explain that the answer depends on whether the collapse has cardiac red flags. Do not promise clearance before assessment.", "Keep her concern visible while gathering evidence.", "Amara feels well and wants a sport decision.", "Reconstruct the event from just before collapse."),
    buildHint24("c024-hint-12", "run", "c024-run-event-question", "exercising or had you stopped", ["qas-syncope-2021", "aha-hcm-2024"], "Clarifying exertion", "Why ask this before every other symptom?", "Collapse during active exertion raises concern for arrhythmia or structural obstruction more than a faint after exercise.", "Exact timing changes risk categorisation.", "The event is being defined before a cause is named.", "Listen for palpitations and a vasovagal prodrome."),
    buildHint24("c024-hint-13", "run", "c024-run-event-answer", "sprinting for the ball", ["qas-syncope-2021", "aha-hcm-2024"], "Recognising a red flag", "What has the story established?", "She lost consciousness during peak exertion, preceded by sudden palpitations and without nausea, warmth or fading vision. That pattern is high risk for a cardiac cause.", "Rapid recovery does not remove the red flag.", "Cardiac syncope is now a serious working concern.", "Verify duration, movements and recovery with Maeve."),
    buildHint24("c024-hint-14", "run", "c024-run-witness-consent", "may I ask Maeve", ["acsqhc-communication-2026", "amc-tips-2024"], "Obtaining consent", "Why pause for permission?", "Amara is alert and owns her health information. Consent also makes Maeve's role explicit.", "Collateral history remains patient-centred.", "Amara agrees to the witness account.", "Ask for observable facts, not Maeve's diagnosis."),
    buildHint24("c024-hint-15", "run", "c024-run-witness-answer", "answered me straight away", ["qas-syncope-2021"], "Using the witness account", "What does immediate orientation add?", "A brief unresponsive period with rapid, clear recovery and no repeated jerking or post-event confusion supports syncope over a generalised seizure.", "It defines the event but not its cardiac cause.", "Transient loss of consciousness is confirmed without strong seizure features.", "Ask about prior exertional near-events and substances."),
    buildHint24("c024-hint-16", "run", "c024-run-background-answer", "light-headed with pounding", ["qas-syncope-2021", "aha-hcm-2024"], "Recognising recurrence", "Why do near-faints matter?", "Repeated exertional palpitations and light-headedness suggest the same process may have occurred before without complete loss of consciousness.", "Previous near-events raise concern even without prior collapse.", "The pattern is recurrent and exertional.", "Family history now becomes decisive."),
    buildHint24("c024-hint-17", "run", "c024-run-family-answer", "died suddenly while running at thirty-eight", ["aha-hcm-2024", "acc-hcm-hub-2026"], "Using family history", "How much weight does this carry?", "Sudden exertional death in a first-degree relative under 40 raises concern for inherited cardiomyopathy or arrhythmia and justifies family-focused specialist assessment.", "The historical label of heart attack is not proof of the mechanism.", "Personal and family exertional events now align.", "Move to current stability, dynamic examination and ECG."),
    buildHint24("c024-hint-18", "run", "c024-run-assessment-request", "standing, Valsalva and squatting", ["aha-hcm-2024", "qas-syncope-2021"], "Using dynamic examination", "Why change posture during auscultation?", "Safe manoeuvres alter venous return and can change a dynamic outflow murmur, adding evidence about the mechanism.", "Do this only while she remains well and supervised.", "The examination is testing both stability and a structural clue.", "Interpret the murmur together with the ECG."),
    buildHint24("c024-hint-19", "run", "c024-run-assessment-findings", "becomes louder with standing", ["aha-hcm-2024", "acc-hcm-hub-2026"], "Reading the murmur", "Why does louder with standing matter?", "Standing reduces ventricular filling. A smaller cavity can worsen dynamic outflow obstruction and make this murmur louder; squatting increases filling and softens it.", "The finding supports a mechanism but does not confirm a diagnosis.", "A dynamic systolic murmur is present despite normal current observations.", "Now integrate the ECG pattern."),
    buildHint24("c024-hint-20", "run", "c024-run-assessment-findings", "deep narrow inferolateral Q waves", ["aha-hcm-2024", "acc-hcm-hub-2026"], "Reading the ECG", "What does this combination add?", "Left ventricular hypertrophy, deep narrow Q waves and inferolateral T-wave inversion support abnormal myocardial structure rather than a simple faint.", "ECG supports concern but imaging is required for confirmation.", "History, family history, murmur and ECG all point toward a cardiac cause.", "State the leading concern and keep diagnostic certainty accurate."),
    buildHint24("c024-hint-21", "run", "c024-run-interpretation", "Hypertrophic cardiomyopathy is a leading concern", ["aha-hcm-2024", "acc-hcm-hub-2026"], "Naming the leading diagnosis", "Can I call it confirmed?", "No. The combined features make hypertrophic cardiomyopathy a leading concern, but echocardiography and specialist assessment are required to establish morphology and risk.", "Say leading concern, not proven disease.", "High-risk cardiac syncope requires urgent disposition regardless of final imaging.", "Move from diagnostic concern to immediate safety."),
    buildHint24("c024-hint-22", "run", "c024-run-immediate-plan", "should not resume sport", ["aha-hcm-2024", "austroads-driving-2026", "qas-syncope-2021"], "Acting before confirmation", "Why restrict activity and driving now?", "Another abrupt event during exertion or driving could harm Amara and others. Monitored ambulance transfer is appropriate while the cause remains high risk and unresolved.", "Temporary restriction protects her during assessment; it is not a lifetime verdict.", "Current stability does not make outpatient waiting safe.", "Prepare for recurrence while transfer is arranged."),
    buildHint24("c024-hint-23", "run", "c024-run-investigation-plan", "echocardiogram", ["aha-hcm-2024", "acc-hcm-hub-2026"], "Choosing next tests", "What does each test add?", "Telemetry seeks intermittent rhythm disturbance; echocardiography tests wall thickness and obstruction; cardiac MRI refines structure when needed; exercise and ambulatory testing are specialist-selected.", "A single resting ECG cannot answer every risk question.", "The urgent hospital and cardiology pathway is defined.", "Switch to explaining the uncertainty and plan."),
    buildHint24("c024-hint-24", "run", "c024-run-explanation-prompt", "explain your assessment", ["amc-spec-2026", "acsqhc-communication-2026"], "Switching audience", "What belongs in two minutes?", "Explain why the event looks heart-related, what the murmur and ECG suggest without claiming confirmation, why transfer and temporary restrictions are needed, and which tests follow.", "Start with her Saturday concern, then the evidence.", "Minutes 5 to 7 belong to Amara.", "Use direct, calm uncertainty."),
    buildHint24("c024-hint-25", "run", "c024-run-explanation", "do not confirm it", ["acsqhc-communication-2026", "aha-hcm-2024"], "Explaining uncertainty", "Why say this explicitly?", "It separates a serious working concern from a confirmed diagnosis and shows why further testing is urgent rather than optional.", "Uncertainty can be clear without being vague.", "Amara understands why a scan and monitoring are needed.", "Now answer whether the restriction is permanent."),
    buildHint24("c024-hint-26", "run", "c024-run-final-concern", "never play again", ["acsqhc-communication-2026", "aha-hcm-2024"], "Hearing the feared conclusion", "What should I correct first?", "Correct the word never. No sport now is a temporary safety decision; future exercise is individualised after diagnosis and sudden-death risk assessment.", "Do not promise return or impose a lifetime ban.", "Her main fear is loss of sport, not only the diagnosis.", "Give the immediate restriction and the pathway to a later decision."),
    buildHint24("c024-hint-27", "run", "c024-run-final-response", "temporary, not a lifetime decision", ["aha-hcm-2024", "austroads-driving-2026", "acsqhc-communication-2026"], "Making the plan tolerable", "What gives Amara useful control?", "Tell her what not to do today, why, how she will travel, who will assess risk and that device decisions follow individual assessment rather than the ECG alone.", "Specific next steps reduce uncertainty without false reassurance.", "Sport and driving restrictions are explained proportionately.", "Address the inherited-disease implication next."),
    buildHint24("c024-hint-28", "run", "c024-run-family-plan", "three-generation family history", ["aha-hcm-2024", "acc-hcm-hub-2026"], "Planning family assessment", "Why involve relatives before a genetic result exists?", "The father's death raises suspicion. Cardiology can document the pedigree, counsel about testing and offer ECG and imaging to close relatives if an inherited condition is confirmed.", "Do not announce that the family has a genetic disease before confirmation.", "Family assessment is planned with counselling and staged testing.", "Use teach-back to check immediate safety and next steps."),
    buildHint24("c024-hint-29", "run", "c024-run-teach-back", "why you should not play", ["acsqhc-communication-2026"], "Checking understanding", "What am I testing?", "Whether Amara understands the temporary restriction, ambulance transfer and next tests, not whether she can repeat a disease label.", "Teach-back checks your explanation.", "The key safety plan has been given.", "Listen and correct only what is missing."),
    buildHint24("c024-hint-30", "run", "c024-run-teach-back-answer", "not automatically a lifetime ban", ["acsqhc-communication-2026", "aha-hcm-2024"], "Confirming understanding", "Has she captured the balance?", "Yes. She understands current danger, immediate transfer and that long-term exercise depends on specialist assessment.", "Do not add new detail after successful teach-back.", "Amara can state the reason and plan.", "Use the final minute to transfer all high-risk features."),
    buildHint24("c024-hint-31", "run", "c024-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps this urgent?", "Event during sprinting, palpitations and absent prodrome; immediate recovery and no seizure features; prior episodes and father; current murmur and ECG; then restriction and monitored transfer.", "Normal current observations belong after the event risk, not before it.", "The final minute transfers why she cannot wait for routine review.", "Finish with telemetry, echocardiography and cardiology."),
    buildHint24("c024-hint-32", "run", "c024-run-handover", "monitored emergency transfer", ["qas-syncope-2021", "acsqhc-communication-2026"], "Closing with disposition", "Why end with transfer rather than diagnosis?", "Because the receiving clinician needs to know what is happening now for an unresolved high-risk event. The diagnosis remains a leading concern pending imaging.", "Disposition is the immediate safety action.", "Risk features, uncertainty and next action are transferred.", "Stop when the examiner ends the station."),
    buildHint24("c024-hint-33", "run", "c024-run-end", "station is complete", ["amc-tips-2024"], "Finishing", "Should I add another family recommendation?", "No. The station has ended. Stop, reset and let the next case begin from its own stem.", "The handover is complete.", "Case 24 is complete.", "Take one breath, then read the next stem from line one.")
  ];
  caseTwentyFour.essentialHintIds = ["c024-hint-03", "c024-hint-06", "c024-hint-07", "c024-hint-08", "c024-hint-09", "c024-hint-13", "c024-hint-17", "c024-hint-20", "c024-hint-21", "c024-hint-22", "c024-hint-24", "c024-hint-27", "c024-hint-31", "c024-hint-33"];
  var clockByHint24 = {
    "c024-hint-06": "Minutes 0 to 3: reconstruct event, recovery, witness account, prior exertional symptoms, family history and substances.",
    "c024-hint-13": "The event pattern is high risk. Complete only the witness, recurrence and family questions before moving to assessment.",
    "c024-hint-20": "Before minute 5: combine murmur and ECG with the history, then state the disposition rather than pursuing more detail.",
    "c024-hint-22": "Assessment time is complete. Arrange monitored transfer and switch to Amara's explanation.",
    "c024-hint-24": "Minute 5: explain the concern, uncertainty, temporary restrictions and next tests to Amara.",
    "c024-hint-31": "Final minute: hand over exertional timing, absent prodrome, recurrence, family history, murmur, ECG and transfer."
  };
  var deeperByHint24 = {
    "c024-hint-19": ["Standing reduces venous return and ventricular volume. In dynamic outflow obstruction, a smaller cavity brings the septum and mitral valve apparatus closer, increasing the gradient and murmur intensity."],
    "c024-hint-20": ["Deep narrow Q waves can reflect abnormal septal depolarisation rather than previous infarction in a young person. Repolarisation changes and voltage then add evidence of abnormal myocardial structure."],
    "c024-hint-28": ["An inherited pathogenic variant can show variable expression within one family. Clinical screening remains important because a relative may carry risk without obvious symptoms."]
  };
  caseTwentyFour.hints.forEach(function (hint) { if (clockByHint24[hint.id]) hint.clock = clockByHint24[hint.id]; if (deeperByHint24[hint.id]) hint.deeper = deeperByHint24[hint.id]; });
})();
