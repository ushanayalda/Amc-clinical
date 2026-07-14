(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-033",
    globalId: "CP-C033",
    registryId: "CP-P11-C001",
    displayNumber: "Case 33",
    title: "Fever, reduced feeding and unusual sleepiness",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 11, title: "Paediatric Acute Deterioration" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c033-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c033-stem-patient",
          text: "Master Remy Dela Cruz, a 4-month-old boy, has been brought by his mother, Camille, because he has a fever, is feeding less and has been unusually sleepy today."
        },
        {
          id: "c033-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c033-task-history",
          text: "Take a focused history from Camille.",
          timing: "2 minutes"
        },
        {
          id: "c033-task-assess",
          text: "Assess Remy and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c033-task-manage",
          text: "Initiate management and explain your assessment and plan to Camille.",
          timing: "3 minutes"
        },
        {
          id: "c033-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c033-run-history",
          heading: "Focused history and recognition",
          turns: [
            {
              id: "c033-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c033-run-start", text: "You may begin." }]
            },
            {
              id: "c033-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c033-run-first-action", text: "The doctor performs hand hygiene and approaches Camille, who is holding Remy while a nurse remains beside them." }]
            },
            {
              id: "c033-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your names. May I assess Remy while asking brief questions? You can stay beside him." }]
            },
            {
              id: "c033-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c033-run-consent", text: "I am Camille Dela Cruz, and this is Remy. Yes. He had his four-month vaccinations yesterday, so I expected some fever, but he is not himself today." }]
            },
            {
              id: "c033-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-symptom-question", text: "When did this begin? How much has he fed, and how many wet nappies? Any vomiting, diarrhoea, breathing pauses, colour change, unusual cry, rash or seizure?" }]
            },
            {
              id: "c033-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c033-run-symptom-answer", text: "The fever began overnight. Today he takes only a few sucks and falls asleep. There has been one wet nappy since morning. No vomiting, diarrhoea, breathing pause, rash or seizure. His cry is weaker." }]
            },
            {
              id: "c033-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-background-question", text: "Was he born at term? Any illness, medicine, allergy or recent antibiotic? Are vaccinations current, including meningococcal vaccines? Any unwell contacts or travel? What worries you most?" }]
            },
            {
              id: "c033-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c033-run-background-answer", text: "He was born at term and has been well, with no medicine or allergy. Routine vaccines are current, but I do not know about meningococcal B. A cousin had a cold. Remy normally watches me and feeds eagerly; now I struggle to wake him." }]
            },
            {
              id: "c033-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-primary-request", text: "I assess airway, breathing, circulation, conscious state, hydration, fontanelle and the fully exposed skin while obtaining weight, full observations, capillary refill and bedside glucose." }]
            },
            {
              id: "c033-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c033-run-primary-findings", text: "Remy weighs 6.5 kilograms. He gives a weak cry and opens his eyes only with handling. Airway is patent. Respiratory rate is 50 without recession, saturation 95% on room air, pulse 188, blood pressure 78/46, temperature 39.2 degrees Celsius and glucose 4.6 mmol/L. He is mottled, with cool limbs, weak pulses and four-second capillary refill. The fontanelle is full but not tense. There is no neck stiffness or rash." }]
            },
            {
              id: "c033-turn-infant-sound",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c033-run-infant-sound", text: "Remy makes a brief weak cry, then becomes quiet in Camille's arms." }]
            },
            {
              id: "c033-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-interpretation", text: "Remy has suspected sepsis with cold shock and possible meningitis. Preserved blood pressure, vaccination and no rash or neck stiffness do not exclude it. Activate the paediatric sepsis pathway, call senior paediatric and critical-care teams, and begin treatment while assessment continues." }]
            }
          ]
        },
        {
          id: "c033-run-management",
          heading: "Antibiotics, circulation support and reassessment",
          turns: [
            {
              id: "c033-turn-resuscitation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c033-run-resuscitation-action", text: "Remy is moved with Camille to a monitored resuscitation bay. Oxygen, warming and cardiorespiratory monitoring begin while the paediatric team attends." }]
            },
            {
              id: "c033-turn-access-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-access-plan", text: "Obtain intravenous access, moving rapidly to intraosseous access if unsuccessful. Send blood culture first if this causes no delay, venous gas with lactate and glucose, full blood count, CRP, electrolytes, renal and liver function, coagulation and meningococcal PCR. Urine can follow after circulation improves." }]
            },
            {
              id: "c033-turn-access-finding",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c033-run-access-finding", text: "The first intravenous attempt fails. Intraosseous access is established and blood is collected without delaying treatment." }]
            },
            {
              id: "c033-turn-antibiotic-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-antibiotic-plan", text: "Give IO ceftriaxone 100 milligrams per kilogram, 650 milligrams, now. Give dexamethasone 0.15 milligrams per kilogram, 1 milligram, before or with it; never delay ceftriaxone. Continue six-hourly for four days under local protocol. Start droplet precautions." }]
            },
            {
              id: "c033-turn-fluid-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-fluid-plan", text: "Give 10 millilitres per kilogram of balanced crystalloid, 65 millilitres, over less than five minutes. Reassess circulation, conscious state, lungs and liver before further fluid. Record urine output and repeat lactate." }]
            },
            {
              id: "c033-turn-deterioration",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c033-run-deterioration", text: "Venous pH is 7.27, lactate 4.8 mmol/L, white cell count 6.1 x 10^9/L and CRP 18 mg/L. After the bolus, Remy is less responsive. Pulse is 198, blood pressure 64/36 and capillary refill five seconds. Lungs remain clear and three non-blanching petechiae have appeared on his thigh." }]
            },
            {
              id: "c033-turn-vasoactive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-vasoactive-plan", text: "The white count and modest CRP do not exclude early infection. Start adrenaline at 0.1 microgram per kilogram per minute, 0.65 microgram per minute, through the intraosseous line while preparing central access. Consider further 10-millilitre-per-kilogram fluid only with reassessment and critical-care guidance." }]
            },
            {
              id: "c033-turn-airway-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-airway-plan", text: "Prepare paediatric airway equipment and assisted ventilation if breathing or consciousness worsens. Optimise circulation before intubation because induction may precipitate cardiovascular collapse. Arrange PICU admission or retrieval and continue frequent ABC reassessment." }]
            },
            {
              id: "c033-turn-lp-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-lp-plan", text: "Do not perform lumbar puncture during shock or reduced consciousness, or obtain routine CT merely to decide about it. Once Remy is stable and a senior confirms no contraindication, obtain cerebrospinal fluid without interrupting treatment." }]
            },
            {
              id: "c033-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c033-run-response", text: "Ceftriaxone has been given. With adrenaline running, pulse falls to 176, blood pressure rises to 74/42 and capillary refill improves to three seconds. Remy remains drowsy. PICU accepts him." }]
            }
          ]
        },
        {
          id: "c033-run-communication",
          heading: "Explanation, teach-back and handover",
          turns: [
            {
              id: "c033-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c033-run-explanation-prompt", text: "Please explain the assessment and plan to Camille." }]
            },
            {
              id: "c033-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-explanation", text: "Camille, Remy may have a serious infection affecting his circulation and possibly the lining around his brain. Fever can follow vaccination, but his poor feeding, sleepiness and weak circulation need treatment now. We have given antibiotics, fluid and blood-pressure support, and intensive care is taking over." }]
            },
            {
              id: "c033-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c033-run-concern", text: "Did the vaccines cause this? Will he survive, and does he need the spinal test immediately?" }]
            },
            {
              id: "c033-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-concern-response", text: "Nothing you did caused this. Mild post-vaccination fever is possible, but impaired feeding, alertness and circulation need another explanation. I cannot promise the outcome, but bringing him in allowed treatment to start quickly. A lumbar puncture may identify the infection, but it is unsafe while his circulation and alertness are impaired. Antibiotics must not wait." }]
            },
            {
              id: "c033-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c033-run-teachback", text: "I know this is a lot. Please tell me what you understand about why we are treating Remy now and why the lumbar puncture is waiting." }]
            },
            {
              id: "c033-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c033-run-teachback-answer", text: "You think a serious infection is affecting his circulation. He needs antibiotics and blood-pressure support now. The spinal test can wait until he is stable." }]
            },
            {
              id: "c033-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c033-run-handover-prompt", text: "Please finish with a concise handover to the senior paediatric clinician." }]
            },
            {
              id: "c033-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c033-run-handover", text: "Remy Dela Cruz is 4 months old and weighs 6.5 kilograms. After one day of fever, reduced feeding and sleepiness, he presented with weak cry, mottling, four-second refill, pulse 188 and preserved blood pressure, without rash or neck stiffness. Lactate is 4.8 and he deteriorated to 64/36 with new petechiae, consistent with septic shock, possible meningococcal disease and meningitis. IO access and cultures are complete. Ceftriaxone 650 milligrams, dexamethasone 1 milligram and 65 millilitres of crystalloid were given. Adrenaline at 0.1 microgram per kilogram per minute improved pressure to 74/42 and refill to three seconds. He remains drowsy. LP is deferred until stable. Droplet precautions are active and PICU has accepted him." }]
            },
            {
              id: "c033-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c033-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Royal Children's Hospital Melbourne",
        title: "Acute meningococcal disease",
        date: "May 2026",
        url: "https://www.rch.org.au/clinicalguide/guideline_index/acute_meningococcal_disease/"
      },
      {
        organisation: "Children's Health Queensland",
        title: "Sepsis: Recognition and emergency management in children",
        date: "May 2026",
        url: "https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/sepsis"
      },
      {
        organisation: "Royal Children's Hospital Melbourne",
        title: "Meningitis and encephalitis",
        date: "October 2024",
        url: "https://www.rch.org.au/clinicalguide/guideline_index/Meningitis_encephalitis/"
      },
      {
        organisation: "Royal Children's Hospital Melbourne",
        title: "Lumbar puncture",
        date: "December 2024",
        url: "https://www.rch.org.au/clinicalguide/guideline_index/Lumbar_puncture/"
      }
    ]
  });

  var caseThirtyThree = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-033"; });
  function buildHint33(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtyThree.masteryFocus = {
    case: "Use age, feeding, alertness and the parent's description of change to set urgency, then let early physiology determine when focused history must give way to immediate action.",
    clinical: "In any unwell child, behaviour, feeding, perfusion and change from usual can reveal danger before blood pressure, rash or laboratory markers do; stabilisation and time-critical treatment come before diagnostic completeness.",
    tasks: ["Focused parent history", "Assess and interpret", "Manage and explain", "Concise senior handover"],
    transfer: "If Remy were alert with normal perfusion and no shock, but meningitis still remained clinically possible, how would the lumbar puncture and treatment sequence change?",
    transferAnswer: "Obtain senior review, cultures and intravenous access promptly. If lumbar puncture is safe and can be completed without delaying antibiotics, collect cerebrospinal fluid first; otherwise give antibiotics and perform lumbar puncture later. Do not obtain routine CT solely to decide whether lumbar puncture is possible, and do not give shock fluid or adrenaline without physiological evidence that they are needed.",
    transferChecks: ["Alertness and neurological findings", "Perfusion and haemodynamic stability", "Contraindications to lumbar puncture", "Whether sampling would delay antibiotics"],
    transferCitationIds: ["rch-meningitis-2024", "rch-lp-2024", "qld-paediatric-sepsis-2026"]
  };
  caseThirtyThree.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "qld-paediatric-sepsis-2026", title: "Sepsis: Recognition and emergency management in children", organisation: "Children's Health Queensland", date: "May 2026", url: "https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/sepsis" },
    { id: "rch-meningococcal-2026", title: "Acute meningococcal disease", organisation: "Royal Children's Hospital Melbourne", date: "May 2026", url: "https://www.rch.org.au/clinicalguide/guideline_index/acute_meningococcal_disease/" },
    { id: "rch-meningitis-2024", title: "Meningitis and encephalitis", organisation: "Royal Children's Hospital Melbourne", date: "October 2024", url: "https://www.rch.org.au/clinicalguide/guideline_index/Meningitis_encephalitis/" },
    { id: "rch-lp-2024", title: "Lumbar puncture", organisation: "Royal Children's Hospital Melbourne", date: "December 2024", url: "https://www.rch.org.au/clinicalguide/guideline_index/Lumbar_puncture/" }
  ];
  caseThirtyThree.reasoningCompass = {
    stem: {
      title: "Treat the change from usual as clinical evidence",
      steps: [
        { time: "0 to 30 seconds", text: "A four-month-old with fever, reduced feeding and unusual sleepiness may deteriorate quickly. Establish his current physiology before deciding on a cause." },
        { time: "30 to 60 seconds", text: "Prepare brief parent questions about onset, feeding, urine, breathing, colour, cry, rash, seizure, exposures and the child's usual behaviour while arranging early ABCDE assessment." },
        { time: "1 to 2 minutes", text: "Set the task times: history to minute 2, assessment to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Let physiology interrupt the planned sequence",
      steps: [
        { time: "0 to 2 minutes", text: "Ask short questions while observing Remy. Move immediately to ABCDE if alertness, breathing or perfusion is concerning." },
        { time: "2 to 7 minutes", text: "Interpret findings together, begin any time-critical action and reassess after every intervention. Keep optional procedures behind immediate safety." },
        { time: "7 to 8 minutes", text: "Explain what the disclosed findings mean, what is happening next and what remains uncertain, then hand over the trend and current support." }
      ],
      anchor: "If danger interrupts, stabilise first, state where you paused, then return only to information that changes care."
    }
  };
  caseThirtyThree.hints = [
    buildHint33("c033-hint-01", "stem", "c033-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can happen in parallel here?", "Observation, monitoring, access, treatment and senior help can begin while Camille answers brief questions.", "Do not make the history a barrier to assessment.", "You have an unwell infant in a setting that can resuscitate.", "Read the presenting changes before deciding why they happened."),
    buildHint33("c033-hint-02", "stem", "c033-stem-patient", "4-month-old boy", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Reading age and change", "Why does four months matter?", "Young infants have limited reserve. Fever with reduced feeding and unusual sleepiness deserves early assessment even before a cause is clear.", "Hold age, feeding and alertness together.", "Remy may be seriously unwell; the cause and physiology are not yet known.", "Use Camille's observations to define how different he is from usual."),
    buildHint33("c033-hint-03", "stem", "c033-stem-context", "provide findings", ["amc-spec-2026", "amc-tips-2024"], "Using examiner findings", "What should I actively request?", "Ask for ABCDE findings, hydration, conscious state, perfusion, fully exposed skin, weight, observations and glucose. These decide whether history can continue.", "Request a complete primary assessment, not isolated vital signs.", "The stem gives no physiology.", "Anchor each task before the run begins."),
    buildHint33("c033-hint-04", "stem", "c033-task-history", "focused history from Camille", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task one", "What fits into two minutes?", "Ask about onset, feeding, urine, alertness, breathing, colour, cry, rash, seizure, vomiting, diarrhoea, birth history, medicines, immunisation and contacts. Let the parent's concern carry weight.", "Focused means questions that alter urgency or treatment.", "Minutes 0 to 2 belong to focused history with observation.", "Be ready to interrupt this task for ABCDE."),
    buildHint33("c033-hint-05", "stem", "c033-task-assess", "Assess Remy and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "What does interpretation add?", "State what the requested ABCDE, conscious-state, hydration and exposure findings mean together. Separate demonstrated physiology from possible causes.", "Name the physiological problem before proposing a source.", "Minutes 2 to 4 cover assessment and interpretation.", "Use the disclosed findings to decide what cannot wait."),
    buildHint33("c033-hint-06", "stem", "c033-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-communication-2026", "acsqhc-deterioration-2026"], "Anchoring task three", "How do I keep treatment and explanation together?", "Start urgent treatment, reassess, then tell Camille what is concerning, what is being done and why. Do not postpone treatment for a polished explanation.", "Action first when physiology is unsafe; short explanations can accompany it.", "Minutes 4 to 7 include management and Camille's understanding.", "Protect the final minute for handover."),
    buildHint33("c033-hint-07", "stem", "c033-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories must survive the handover?", "Give identity and age, the change from usual, key physiological findings, interventions and responses, unresolved risks and the immediate next step.", "A useful handover carries the trend and current risk.", "Minute 7 to 8 belongs to the senior clinician.", "Start the encounter with observation and consent."),
    buildHint33("c033-hint-08", "run", "c033-run-first-action", "nurse remains beside them", ["amc-tips-2024", "qld-paediatric-sepsis-2026"], "Approaching the infant", "What can I notice before touching him?", "Watch posture, colour, breathing, interaction and cry while keeping Camille close. A familiar caregiver can reduce distress and describe subtle change.", "Observation begins before formal examination.", "The history clock has started.", "Confirm consent and ask only brief opening questions."),
    buildHint33("c033-hint-09", "run", "c033-run-consent", "vaccinations yesterday", ["qld-paediatric-sepsis-2026", "rch-meningococcal-2026"], "Handling the vaccination link", "Can yesterday's vaccines explain everything?", "Mild fever may follow vaccination, but poor feeding and unusual sleepiness still require their own assessment. Timing is relevant without being reassuring.", "Do not let a plausible benign trigger close the assessment.", "Vaccination is context; Remy's current state remains unexplained.", "Quantify feeding, urine and alertness next."),
    buildHint33("c033-hint-10", "run", "c033-run-symptom-question", "how many wet nappies", ["qld-paediatric-sepsis-2026", "amc-tips-2024"], "Asking about function", "Why ask feeding and nappies so early?", "They are practical measures of hydration, energy and perfusion in an infant who cannot describe symptoms. Breathing, colour, cry, rash and seizure screen immediate danger.", "Ask one compact cluster and listen.", "You are defining severity through changed function.", "Use Camille's answer to decide whether examination must interrupt history."),
    buildHint33("c033-hint-11", "run", "c033-run-symptom-answer", "one wet nappy", ["qld-paediatric-sepsis-2026"], "Reading reduced intake and output", "What does this pair suggest?", "A few sucks followed by sleep and only one wet nappy suggest poor intake with possible reduced perfusion. A weak cry adds concern about energy and responsiveness.", "These are not minor fever details.", "Feeding, urine and cry are all reduced.", "Ask what he is usually like and how hard he is to wake."),
    buildHint33("c033-hint-12", "run", "c033-run-background-answer", "struggle to wake him", ["qld-paediatric-sepsis-2026", "acsqhc-deterioration-2026"], "Using the parent's baseline", "How much weight should this carry?", "A parent reporting that an infant no longer watches, feeds or wakes normally is important neurological and illness-severity evidence. Move to ABCDE now.", "The change from usual is a finding, not background noise.", "Remy has reduced interaction, intake, urine and cry.", "Request the full primary assessment."),
    buildHint33("c033-hint-13", "run", "c033-run-primary-request", "fully exposed skin", ["qld-paediatric-sepsis-2026", "rch-meningococcal-2026"], "Requesting the whole assessment", "Why expose the skin when there is no reported rash?", "Mottling, petechiae and perfusion changes can be missed under clothing. Weight is also needed for safe fluid, antibiotic and vasoactive dosing.", "Assess airway, breathing, circulation, consciousness and exposure together.", "The history has raised concern but has not defined physiology.", "Read the observations as a pattern."),
    buildHint33("c033-hint-14", "run", "c033-run-primary-findings", "four-second capillary refill", ["qld-paediatric-sepsis-2026", "acsqhc-deterioration-2026"], "Recognising impaired circulation", "Does blood pressure 78 over 46 make him stable?", "No. Mottling, cool limbs, weak pulses, marked tachycardia and delayed refill show poor peripheral perfusion. Children can maintain blood pressure until late.", "Pause the planned history. Perfusion is unsafe.", "Remy has cold shock physiology with reduced responsiveness.", "Check the neurological and skin findings, then escalate."),
    buildHint33("c033-hint-15", "run", "c033-run-primary-findings", "no neck stiffness or rash", ["rch-meningococcal-2026", "rch-meningitis-2024"], "Not using absent late signs as reassurance", "Can I exclude meningitis or meningococcal disease?", "No. Young infants may lack neck stiffness, and rash may be absent early. A full fontanelle, weak cry and reduced consciousness keep central nervous system infection possible.", "Absence of a classic sign is not absence of serious disease.", "Shock and neurological change are established; the source remains uncertain.", "State the immediate interpretation and start treatment."),
    buildHint33("c033-hint-16", "run", "c033-run-interpretation", "possible meningitis", ["qld-paediatric-sepsis-2026", "rch-meningitis-2024"], "Naming the working problem", "What is certain and what is provisional?", "Impaired circulation and reduced consciousness are present. A serious infection is the working cause, and meningitis is possible rather than proven. Treatment must cover that risk now.", "Separate demonstrated physiology from the suspected source.", "The case has crossed from assessment to resuscitation.", "Call the teams and secure access without delay."),
    buildHint33("c033-hint-17", "run", "c033-run-access-finding", "Intraosseous access is established", ["qld-paediatric-sepsis-2026", "rch-meningococcal-2026"], "Changing route without losing time", "Why stop trying intravenous access?", "In shock, repeated failed attempts delay antibiotics, fluid and vasoactive support. Intraosseous access provides a rapid reliable route for the same urgent treatment.", "One failed attempt is enough when delay is dangerous.", "Monitoring and senior help are active; access is now secured.", "Give antibiotics before pursuing lower-priority samples."),
    buildHint33("c033-hint-18", "run", "c033-run-antibiotic-plan", "never delay ceftriaxone", ["rch-meningitis-2024", "rch-meningococcal-2026"], "Protecting the time-critical treatment", "Should cultures or dexamethasone come first?", "Take blood culture only if it causes no delay. Dexamethasone is timed before or with ceftriaxone when indicated, but neither sampling nor steroid should hold the antibiotic.", "Do not let extra tests delay the antibiotic.", "Possible invasive infection is being treated through IO access.", "Support circulation and reassess immediately."),
    buildHint33("c033-hint-19", "run", "c033-run-fluid-plan", "10 millilitres per kilogram", ["qld-paediatric-sepsis-2026"], "Giving a measured fluid challenge", "Why not give a large fixed bolus?", "A small rapid bolus tests response while limiting fluid overload. Recheck perfusion, consciousness, lungs and liver before deciding on more.", "Each bolus is followed by a new assessment.", "Antibiotic is given and circulation now needs support.", "Use the next findings to decide whether fluid alone is enough."),
    buildHint33("c033-hint-20", "run", "c033-run-deterioration", "less responsive", ["qld-paediatric-sepsis-2026", "rch-meningococcal-2026"], "Recognising deterioration despite treatment", "Do the modest CRP and white count lower the urgency?", "No. Falling responsiveness, hypotension, longer refill and new petechiae show worsening shock. Early infection can have modest inflammatory markers.", "Pause. Treatment has started, but circulation is worse.", "Remy now has hypotensive shock with evolving skin signs.", "Begin vasoactive support and prepare the airway."),
    buildHint33("c033-hint-21", "run", "c033-run-vasoactive-plan", "Start adrenaline", ["qld-paediatric-sepsis-2026"], "Moving beyond fluid", "Why start adrenaline now?", "Poor perfusion has worsened after an initial bolus and the lungs remain clear. Adrenaline supports cardiac output and vascular tone while further fluid is considered only with repeated assessment.", "Do not repeat fluid automatically when shock is worsening.", "Antibiotic and one bolus have not restored circulation.", "Support breathing and anticipate intubation risk."),
    buildHint33("c033-hint-22", "run", "c033-run-airway-plan", "induction may precipitate cardiovascular collapse", ["qld-paediatric-sepsis-2026", "acsqhc-deterioration-2026"], "Preparing before the airway fails", "Why not intubate immediately for drowsiness?", "Airway support may become necessary, but induction can remove sympathetic support and worsen shock. Bring skilled help and equipment while improving circulation first when breathing still permits.", "Prepare early; intervene with the right team and physiology supported.", "Remy remains at risk of respiratory and cardiovascular collapse.", "Keep lumbar puncture out of the current resuscitation."),
    buildHint33("c033-hint-23", "run", "c033-run-lp-plan", "Do not perform lumbar puncture during shock", ["rch-lp-2024", "rch-meningitis-2024"], "Deferring an unsafe diagnostic test", "But do we need cerebrospinal fluid to treat?", "It may later identify the infection, but shock and reduced consciousness make the procedure unsafe now. Antibiotics continue; lumbar puncture can follow stabilisation and senior review.", "Diagnosis can wait when the procedure threatens safety.", "Treatment covers possible meningitis without cerebrospinal fluid yet.", "Read the response to adrenaline before explaining the plan."),
    buildHint33("c033-hint-24", "run", "c033-run-response", "capillary refill improves to three seconds", ["qld-paediatric-sepsis-2026"], "Reading partial response", "Is he stable now?", "Pressure and refill have improved, but he remains drowsy and still needs vasoactive support and intensive care. Improvement is a trend, not clearance of risk.", "Reassess the whole child after every change.", "Circulation has improved partially; neurological concern remains.", "Turn to Camille when prompted and explain both urgency and uncertainty."),
    buildHint33("c033-hint-25", "run", "c033-run-explanation-prompt", "explain the assessment and plan", ["acsqhc-communication-2026", "amc-spec-2026"], "Changing audience", "What does Camille need first?", "Say that Remy may have a serious infection affecting circulation, name the treatments already given and explain that intensive care is taking over. Use plain language before procedural detail.", "Stop adding examiner-facing lists.", "Treatment is active and PICU has accepted him.", "Address the vaccination concern without blame or false reassurance."),
    buildHint33("c033-hint-26", "run", "c033-run-concern", "Did the vaccines cause this?", ["acsqhc-communication-2026", "qld-paediatric-sepsis-2026"], "Answering the causal concern", "How can I answer without dismissing her?", "Acknowledge that mild fever can follow vaccination, then explain that poor feeding, reduced alertness and impaired circulation are not safely attributed to it. Nothing Camille did caused the current emergency.", "Answer the question she asked, then return to the evidence.", "Camille needs a clear reason why treatment did not wait.", "Explain prognosis honestly and place lumbar puncture after stabilisation."),
    buildHint33("c033-hint-27", "run", "c033-run-concern-response", "Antibiotics must not wait", ["rch-meningitis-2024", "rch-lp-2024", "acsqhc-communication-2026"], "Explaining the sequence", "How do I make the delayed spinal test feel safe?", "State that the test is useful but unsafe during shock and reduced alertness. Antibiotics treat the immediate risk now; cerebrospinal fluid is obtained later if safe.", "Useful does not mean urgent when the procedure is unsafe.", "Camille has heard why treatment precedes diagnostic completion.", "Check understanding rather than adding more facts."),
    buildHint33("c033-hint-28", "run", "c033-run-teachback-answer", "blood-pressure support now", ["acsqhc-communication-2026"], "Confirming understanding", "What does this answer tell me?", "Camille has understood the serious infection concern, immediate antibiotic and circulation support, and the reason lumbar puncture waits. Correct only what is missing.", "Teach-back tests the explanation, not the parent.", "The family explanation is complete.", "Use the final minute for the clinical trend and current support."),
    buildHint33("c033-hint-29", "run", "c033-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order keeps this handover safe?", "Give identity and weight, change from usual, initial shock findings, deterioration, doses and routes, response, remaining drowsiness, deferred lumbar puncture and PICU destination.", "Lead with current risk and the treatment trend.", "The final minute is for transfer of care.", "Keep normal findings only when they explain a decision."),
    buildHint33("c033-hint-30", "run", "c033-run-handover", "LP is deferred until stable", ["rch-lp-2024", "acsqhc-communication-2026"], "Closing the unresolved action", "Why include the deferred procedure?", "It prevents the receiving team from assuming it was forgotten and states the condition for reconsidering it. The handover also makes clear that antibiotics were not delayed.", "Name what remains to be done and why it remains undone.", "PICU receives the trend, treatment and pending diagnostic step.", "Stop when the examiner closes the station."),
    buildHint33("c033-hint-31", "run", "c033-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I add another differential?", "No. The examiner has ended the station. Additional detail now weakens the close rather than improving safety.", "Finish on the instruction.", "Case 33 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseThirtyThree.essentialHintIds = [
    "c033-hint-02", "c033-hint-04", "c033-hint-05", "c033-hint-06", "c033-hint-07",
    "c033-hint-14", "c033-hint-16", "c033-hint-18", "c033-hint-20", "c033-hint-21",
    "c033-hint-23", "c033-hint-25", "c033-hint-29", "c033-hint-30", "c033-hint-31"
  ];
  var clockByHint33 = {
    "c033-hint-04": "Minutes 0 to 2: obtain the change from usual, feeding, urine and danger symptoms while observing Remy.",
    "c033-hint-14": "Unsafe perfusion interrupts the history. Begin resuscitation now and return only to questions that alter immediate care.",
    "c033-hint-20": "Before minute 6: deterioration after initial treatment requires vasoactive support, airway preparation and repeated ABCDE.",
    "c033-hint-25": "By minute 7: turn to Camille and explain the concern, treatment and why lumbar puncture is waiting.",
    "c033-hint-29": "Final minute: transfer the initial state, deterioration, doses, response, unresolved risk and PICU plan."
  };
  var deeperByHint33 = {
    "c033-hint-14": ["Children can preserve blood pressure through tachycardia and vasoconstriction. Mottling, cool limbs, weak pulses and delayed refill may show shock before hypotension appears."],
    "c033-hint-18": ["Ceftriaxone rapidly reaches bactericidal concentrations. Dexamethasone aims to reduce inflammatory injury when bacterial meningitis is suspected, but its benefit depends on timing and it never replaces antibiotic treatment."],
    "c033-hint-21": ["In cold shock, reduced cardiac output and intense peripheral vasoconstriction produce cool mottled skin and weak pulses. Adrenaline provides inotropic and vasoactive support while the response is reassessed."],
    "c033-hint-23": ["Lumbar puncture can worsen risk when circulation is unstable and may be unsafe with markedly reduced consciousness. Cerebrospinal fluid yield may change after antibiotics, but patient safety and timely treatment take priority."],
    "c033-hint-24": ["A shorter refill and higher pressure suggest improved perfusion, but ongoing drowsiness may reflect infection, impaired cerebral perfusion or both. The trend must be followed rather than interpreted from one improved number."]
  };
  caseThirtyThree.hints.forEach(function (hint) {
    if (clockByHint33[hint.id]) hint.clock = clockByHint33[hint.id];
    if (deeperByHint33[hint.id]) hint.deeper = deeperByHint33[hint.id];
  });
})();
