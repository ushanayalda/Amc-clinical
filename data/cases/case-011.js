(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-011",
    globalId: "CP-C011",
    registryId: "CP-P3-C003",
    displayNumber: "Case 11",
    title: "Headache, vomiting and weakness after a collapse",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 3, title: "Sudden Neurological Deficit" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c011-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c011-stem-patient",
          text: "Mrs Leila Haddad, a 72-year-old woman, has presented after developing a headache, vomiting and collapsing at home. Her daughter, Nadia, says Leila's right side has seemed weak since the collapse."
        },
        {
          id: "c011-stem-start",
          text: "Nadia is present. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c011-task-assess",
          text: "Assess Leila and discuss your initial management.",
          timing: "4 minutes"
        },
        {
          id: "c011-task-history",
          text: "Obtain a focused collateral history from Nadia and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c011-task-explain",
          text: "Explain your likely diagnosis and ongoing management plan to Nadia.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c011-run-assessment",
          heading: "Assessment and initial management",
          turns: [
            {
              id: "c011-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c011-run-start", text: "You may begin." }]
            },
            {
              id: "c011-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c011-run-first-action", text: "The doctor performs hand hygiene, approaches Leila and speaks to her at eye level." }]
            },
            {
              id: "c011-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-intro", text: "Hello Leila, I am Ushana, one of the emergency doctors. Can you tell me your full name and what you are feeling?" }]
            },
            {
              id: "c011-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c011-run-opening", text: "Leila Haddad. My head hurts. My right arm will not move." }]
            },
            {
              id: "c011-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-consent", text: "I will examine and treat you while we talk. Is it okay for Nadia to help with the history?" }]
            },
            {
              id: "c011-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c011-run-consent-answer", text: "Yes." }]
            },
            {
              id: "c011-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-primary", text: "I assess airway, breathing, circulation and conscious state. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Obtain two intravenous lines and check capillary blood glucose now. Assess pupils, gaze, facial movement, speech, power and sensation in all limbs, and look for trauma. Keep her nil by mouth, elevate her head about 30 degrees with neutral alignment and have suction ready. Please provide the findings." }]
            },
            {
              id: "c011-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c011-run-primary-findings", text: "Leila's airway is patent, with no pooled secretions. Respiratory rate is 20 breaths per minute and oxygen saturation is 95% on room air with equal air entry. Pulse is 86 beats per minute and irregular, blood pressure is 218/116 mmHg, capillary refill time is two seconds and temperature is 36.8 degrees Celsius. Blood glucose is 6.4 mmol/L. She weighs 80 kilograms. GCS is 13, E3 V4 M6. Pupils are equal and reactive. There is a left gaze preference, right lower facial weakness and dysarthria. Right arm power is 1 out of 5 and right leg power is 3 out of 5, with reduced right-sided sensation. There is no external sign of trauma." }]
            },
            {
              id: "c011-turn-initial-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-initial-plan", text: "This is an acute focal neurological event with reduced consciousness. Activate the stroke pathway and call the senior emergency and stroke teams. Her saturation is adequate, so do not give routine oxygen. Repeat GCS, pupils and focal neurology frequently. Nadia, while the team prepares the scan, what exact time was Leila last completely normal, when did the symptoms begin and what happened first?" }]
            },
            {
              id: "c011-turn-onset-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c011-run-onset-answer", text: "She was normal at 5:04. At 5:05 she suddenly said it was the worst headache of her life, vomited, dropped her cup and could not move her right side. She slumped to the floor at 5:12. It is now 5:40." }]
            },
            {
              id: "c011-turn-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-history", text: "Was there a seizure, head strike, neck stiffness or loss of consciousness? Does she take warfarin or another blood thinner, and when was the last dose? Any previous stroke, brain bleed or aneurysm? What are her medical conditions, allergies and usual level of independence?" }]
            },
            {
              id: "c011-turn-history-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c011-run-history-answer", text: "No seizure or head injury. She was unresponsive for about a minute. She takes warfarin 4 milligrams at night for atrial fibrillation and rheumatic mitral stenosis, and took it last night. She also has high blood pressure. No aspirin, previous stroke, brain bleed or aneurysm. No allergies. She normally lives independently." }]
            },
            {
              id: "c011-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-investigations", text: "Arrange non-contrast CT brain now, followed by appropriate vascular imaging through the stroke pathway. This must not be delayed for a long history. Send full blood count, electrolytes and renal function, liver function, coagulation studies including INR and fibrinogen, and group and hold. Obtain an ECG without delaying imaging. Give no aspirin, anticoagulant or thrombolysis until imaging identifies the stroke type." }]
            }
          ]
        },
        {
          id: "c011-run-results",
          heading: "Imaging result and targeted treatment",
          turns: [
            {
              id: "c011-turn-results",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c011-run-results", text: "Non-contrast CT shows an acute left putaminal intracerebral haemorrhage measuring approximately 38 millilitres, with a small amount of intraventricular extension and 4 millimetres of midline shift. There is no hydrocephalus. CT angiography shows no aneurysm, arteriovenous malformation or large-vessel occlusion. INR is 3.4, platelet count is normal and renal function is unchanged from baseline." }]
            },
            {
              id: "c011-turn-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-interpret", text: "The scan confirms a left basal-ganglia intracerebral haemorrhage causing her right-sided weakness and drowsiness. Stop warfarin. This is critical-organ bleeding, so give four-factor prothrombin complex concentrate, Beriplex, 50 international units per kilogram. At 80 kilograms that is 4000 international units. Give intravenous vitamin K 5 to 10 milligrams as well, and repeat the INR in 20 minutes. Vitamin K alone is too slow. Contact haematology and transfusion support." }]
            },
            {
              id: "c011-turn-blood-pressure",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-blood-pressure", text: "Begin a titratable intravenous antihypertensive under the local protocol with close blood-pressure monitoring. Aim for a smooth reduction to a systolic pressure of 130 to 140 mmHg within one hour of starting treatment, while avoiding hypotension or an abrupt overshoot. Call neurosurgery, intensive care and anaesthetics now, and continue serial GCS, pupils and neurological examinations." }]
            },
            {
              id: "c011-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c011-run-treatment-action", text: "Warfarin is stopped. Four-factor prothrombin complex concentrate and intravenous vitamin K are given. Controlled intravenous blood-pressure treatment begins while the specialist teams attend." }]
            },
            {
              id: "c011-turn-clot-question",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c011-run-clot-question", text: "Is this a clot? Can you give the clot-busting medicine?" }]
            },
            {
              id: "c011-turn-clot-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-clot-answer", text: "No. The scan shows bleeding, not a blocked artery. Clot-busting medicine, aspirin or more anticoagulant could enlarge the bleed. We are reversing the warfarin, lowering the blood pressure in a controlled way and asking the brain and intensive-care specialists to review her." }]
            },
            {
              id: "c011-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c011-run-deterioration", text: "Leila vomits again. Her breathing becomes gurgling, oxygen saturation falls to 89%, and GCS falls to 9, E2 V2 M5. Pupils remain equal and reactive." }]
            },
            {
              id: "c011-turn-airway",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-airway", text: "She can no longer protect her airway. Turn her safely to the side during active vomiting, suction immediately and give oxygen for the airway compromise. Call the senior anaesthetist and intensive-care team for rapid sequence intubation, with capnography and care to avoid hypoxia and hypotension. Reassess glucose, GCS, pupils and focal signs. After airway stabilisation, obtain repeat brain imaging because the deterioration may represent haematoma expansion, hydrocephalus or increasing pressure." }]
            },
            {
              id: "c011-turn-airway-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c011-run-airway-action", text: "Suction and oxygen are applied. The anaesthetic team secures the airway while physiological stability and neutral head alignment are maintained." }]
            },
            {
              id: "c011-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c011-run-time", text: "Please explain your likely diagnosis and ongoing management plan." }]
            }
          ]
        },
        {
          id: "c011-run-explanation",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c011-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-explanation", text: "Nadia, the scan shows bleeding deep in the left side of Leila's brain. That explains the weakness on her right side, speech change and drowsiness. The bleeding and swelling can worsen quickly. Her high blood pressure and warfarin may have contributed, although the team will review the final cause." }]
            },
            {
              id: "c011-turn-plan-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-plan-explanation", text: "We have reversed warfarin and started controlled blood-pressure treatment. Because her consciousness fell, the team protected her breathing and will repeat the scan. Stroke, intensive-care and neurosurgical specialists will decide whether pressure-relieving or life-saving surgery is needed. Routine removal of a deep basal-ganglia bleed is not automatically beneficial, so that decision depends on repeat imaging, deterioration, likely benefit and Leila's wishes." }]
            },
            {
              id: "c011-turn-prognosis-question",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c011-run-prognosis-question", text: "Will she recover?" }]
            },
            {
              id: "c011-turn-prognosis-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-prognosis-answer", text: "I cannot predict that yet. The size of the bleed and reduced consciousness are serious, but treatment is underway and she was independent before this. We will update you after the repeat scan and specialist review. Please tell us about any advance-care plan or wishes Leila has expressed." }]
            },
            {
              id: "c011-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c011-run-understanding", text: "Can you tell me what you understand about the scan and what we are doing now?" }]
            },
            {
              id: "c011-turn-understanding-answer",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c011-run-understanding-answer", text: "There is bleeding in her brain, not a clot. You are reversing warfarin, controlling her blood pressure, protecting her breathing and repeating the scan." }]
            },
            {
              id: "c011-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c011-run-handover", text: "Leila Haddad, 72, previously independent, was last known well at 17:04. At 17:05 she developed sudden severe headache, vomiting, dysarthria and right-sided weakness, then collapsed at 17:12 without seizure or trauma. Initial GCS was 13, glucose 6.4, blood pressure 218/116 and oxygen saturation 95% on room air. CT shows a 38-millilitre left putaminal intracerebral haemorrhage with small intraventricular extension and 4-millimetre shift; CTA shows no vascular lesion. She takes warfarin for atrial fibrillation with rheumatic mitral stenosis, last dose last night, and INR is 3.4. Warfarin is stopped. Beriplex 4000 international units and intravenous vitamin K have been given, with repeat INR due at 20 minutes. Titrated intravenous blood-pressure treatment is targeting systolic 130 to 140 within one hour. She then vomited, desaturated and fell to GCS 9, requiring suction, oxygen and intubation. Repeat CT is requested. Stroke, neurosurgery, intensive care, anaesthetics and haematology are involved." }]
            },
            {
              id: "c011-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c011-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Stroke Foundation",
        title: "Australian and New Zealand Living Clinical Guidelines for Stroke Management",
        date: "Living guideline current July 2026",
        url: "https://informme.org.au/guidelines/living-clinical-guidelines-for-stroke-management"
      },
      {
        organisation: "Stroke Foundation",
        title: "Summary of Recommendations",
        date: "June 2025 summary with intracerebral haemorrhage updates adopted September 2025",
        url: "https://informme.org.au/media/dugdhvzu/summary-of-recommendations-jun-2025.pdf"
      },
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Stroke Clinical Care Standard",
        date: "June 2026",
        url: "https://www.safetyandquality.gov.au/sites/default/files/2026-06/stroke-clinical-care-standard-2026.PDF"
      },
      {
        organisation: "Australian Red Cross Lifeblood",
        title: "Warfarin reversal",
        date: "Current Australian four-factor PCC guidance accessed July 2026",
        url: "https://www.lifeblood.com.au/health-professionals/clinical-practice/clinical-indications/warfarin-reversal"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.2: Stroke",
        date: "Approved April 2021, current citation 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-2-stroke"
      }
    ]
  });

  var caseEleven = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-011"; });
  caseEleven.masteryFocus = {
    case: "Assess sudden headache, collapse and focal weakness, protect airway and physiology, and let urgent imaging determine the next treatment.",
    clinical: "In any acute focal brain syndrome, stabilise first, preserve onset and medicine details, and delay subtype-specific treatment until imaging identifies the lesion.",
    tasks: [
      "Assess and manage",
      "Collateral history and interpretation",
      "Explain diagnosis and plan"
    ],
    transfer: "If the same deep intracerebral haemorrhage occurred in a patient taking apixaban rather than warfarin, which treatment decision would need to change first?",
    transferAnswer: "The first change is the reversal strategy. Stop apixaban and urgently use a factor-Xa reversal pathway: andexanet when appropriate and available, or four-factor PCC according to local protocol and haematology advice. Vitamin K does not reverse apixaban.",
    transferChecks: [
      "Exact last dose and dose size",
      "Renal function and drug-specific level if available",
      "Eligibility and availability of andexanet",
      "Thrombotic risk and response after reversal"
    ],
    transferCitationIds: ["thanz-doac-2025", "c011-stroke-guideline"]
  };
  caseEleven.sources = [
    { id: "c011-stroke-guideline", title: "Australian and New Zealand Living Clinical Guidelines for Stroke Management", organisation: "Stroke Foundation", date: "Living guideline accessed July 2026", url: "https://informme.org.au/guidelines/living-clinical-guidelines-for-stroke-management" },
    { id: "thanz-doac-2025", title: "2025 Guidelines for direct oral anticoagulants: a practical guidance on the prescription, laboratory testing, peri-operative and bleeding management", organisation: "Thrombosis and Haemostasis Society of Australia and New Zealand", date: "2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12240022/" },
    { id: "c011-stroke-summary", title: "Summary of Recommendations", organisation: "Stroke Foundation", date: "June 2025 summary with 2025 intracerebral haemorrhage updates", url: "https://informme.org.au/media/dugdhvzu/summary-of-recommendations-jun-2025.pdf" },
    { id: "c011-stroke-standard", title: "Stroke Clinical Care Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "June 2026", url: "https://www.safetyandquality.gov.au/sites/default/files/2026-06/stroke-clinical-care-standard-2026.PDF" },
    { id: "c011-lifeblood", title: "Warfarin reversal", organisation: "Australian Red Cross Lifeblood", date: "Accessed July 2026", url: "https://www.lifeblood.com.au/health-professionals/clinical-practice/clinical-indications/warfarin-reversal" },
    { id: "c011-anzcor-stroke", title: "Guideline 9.2.2: Stroke", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Approved April 2021; accessed July 2026", url: "https://www.anzcor.org/home/first-aid/guideline-9-2-2-stroke" },
    { id: "c011-amc-spec", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "c011-amc-tips", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "c011-communication", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Accessed July 2026", url: "https://www.safetyandquality.gov.au/standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseEleven.reasoningCompass = {
    stem: {
      title: "Keep deterioration in the centre",
      steps: [
        { time: "0 to 30 seconds", text: "Recognise headache, vomiting, collapse, focal weakness and drowsiness as an unstable neurological syndrome. Prepare ABCDE and urgent imaging." },
        { time: "30 to 60 seconds", text: "Use Nadia for exact onset, symptom order, loss of consciousness, trauma, anticoagulant and last dose while the team prepares the scan." },
        { time: "1 to 2 minutes", text: "Set the task change points: assess and manage until minute 4, focused collateral and interpretation until minute 6, then explain diagnosis and ongoing management." }
      ],
      anchor: "Assess and manage 0 to 4 | Collateral and interpret 4 to 6 | Explain 6 to 8"
    },
    run: {
      title: "Stabilise, image, treat the result",
      steps: [
        { time: "0 to 4 minutes", text: "Assess ABCDE, glucose, GCS, pupils and focal neurology. Activate the stroke pathway and obtain urgent brain imaging without waiting for a long history." },
        { time: "4 to 6 minutes", text: "Interpret the scan before subtype-specific treatment, act on the result, and reassess airway, GCS, pupils and blood pressure continuously." },
        { time: "6 to 8 minutes", text: "At the prompt, explain the imaging result, treatments already given, what remains uncertain and which monitoring or specialist decisions come next." }
      ],
      anchor: "If vomiting, airway protection, pupils, breathing or GCS worsen, interrupt the task, stabilise immediately, then return to the part you paused."
    }
  };

  function c011Hint(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient, clock) {
    var hint = { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
    if (clock) hint.clock = clock;
    return hint;
  }
  caseEleven.hints = [
    c011Hint("c011-hint-01", "stem", "c011-stem-role", "emergency department", ["c011-amc-spec", "c011-amc-tips"], "Reading the setting", "What should happen while I take the history?", "Monitoring, glucose, intravenous access, neurological observations and urgent imaging preparation can begin immediately. The history should not hold those actions back.", "The team can work in parallel.", "This is an emergency neurological assessment.", "Read the symptom sequence and current conscious state."),
    c011Hint("c011-hint-02", "stem", "c011-stem-patient", "72-year-old woman", ["c011-stroke-guideline", "c011-amc-tips"], "Reading Leila's age", "Does age narrow this enough?", "Age increases vascular and medicine-related risk, but the symptom sequence, focal signs and imaging will determine the pathology.", "Age supports urgency; it does not name the lesion.", "Leila is 72 with an acute neurological event.", "Put headache, vomiting and collapse in order."),
    c011Hint("c011-hint-03", "stem", "c011-stem-patient", "headache, vomiting and collapsing", ["c011-stroke-guideline", "c011-anzcor-stroke"], "Reading the first cluster", "This sounds more than a simple faint. Why?", "Sudden headache and vomiting before collapse suggest an acute intracranial process. You still need exact onset, loss of consciousness, seizure, trauma, blood pressure and imaging.", "Do not let the word collapse hide the preceding symptoms.", "The event began in the head, then affected consciousness.", "Add the right-sided weakness."),
    c011Hint("c011-hint-04", "stem", "c011-stem-patient", "right side has seemed weak", ["c011-stroke-guideline"], "Adding the focal deficit", "How does one-sided weakness change the thinking?", "It makes a focal brain lesion more likely than a simple vasovagal episode or general illness. The opposite cerebral hemisphere may be involved, but the scan must show the lesion.", "Localise before choosing subtype-specific treatment.", "There is a focal neurological syndrome with headache, vomiting and collapse.", "Use Nadia for timing and medicines while speaking to Leila directly."),
    c011Hint("c011-hint-05", "stem", "c011-stem-start", "findings and investigation results when requested", ["c011-stroke-guideline", "c011-amc-tips"], "Do not assume the airway", "The stem does not give a GCS. Can I treat the airway as safe?", "No. Collapse and vomiting make conscious state and airway protection immediate questions, but you have not been told the answers. Check GCS, airway sounds, secretions and breathing before deciding whether suction or senior airway help is needed.", "Risk prompts assessment; it does not create a finding.", "Leila needs airway and conscious-state assessment; no result has been supplied yet.", "Anchor the first task."),
    c011Hint("c011-hint-06", "stem", "c011-task-assess", "Assess Leila and discuss your initial management", ["c011-amc-spec", "c011-amc-tips"], "Anchoring task one", "What must happen before minute 4?", "Hold four blocks: physiology, brief neurology, immediate protection, then imaging and senior escalation.", "Do not wait for every historical detail before imaging.", "The first four minutes combine assessment and immediate protection.", "Reserve minute 4 to 6 for collateral and interpretation.", "0 to 4 minutes"),
    c011Hint("c011-hint-07", "stem", "c011-task-history", "focused collateral history", ["c011-amc-spec", "c011-amc-tips"], "Anchoring task two", "Which collateral changes treatment now?", "Use four blocks: exact timing, events that separate the causes, anticoagulant details, then baseline function and wishes.", "Focused collateral serves current decisions.", "Nadia fills gaps while Leila is drowsy.", "Keep the final two minutes for explanation.", "4 to 6 minutes"),
    c011Hint("c011-hint-08", "stem", "c011-task-explain", "ongoing management plan to Nadia", ["c011-amc-spec", "c011-amc-tips", "c011-communication"], "Anchoring task three", "What will Nadia need most?", "Explain what imaging shows, connect it to Leila's symptoms, describe the treatment and current support, then be honest about what repeat imaging and specialist review still need to decide.", "Do not give certainty the evidence cannot support.", "The final task is diagnosis, current treatment and what happens next.", "Begin with Leila directly, then use Nadia's help.", "6 to 8 minutes"),
    c011Hint("c011-hint-09", "run", "c011-run-start", "You may begin", ["c011-amc-spec", "c011-amc-tips"], "Starting the run", "What is the first priority?", "Approach Leila, assess whether she can answer and prepare to protect airway and breathing while monitoring begins.", "A brief introduction can happen inside ABCDE.", "The first task is assess and manage.", "Listen to her first words and observe the focal deficit."),
    c011Hint("c011-hint-10", "run", "c011-run-opening", "My right arm will not move", ["c011-stroke-guideline"], "Hearing Leila", "She reports headache and weakness herself. What does that add?", "It confirms a current focal deficit in a patient who can still communicate. Continue speaking to her while obtaining consent for Nadia to supply exact times and medicine details.", "Do not shift the whole conversation to the daughter.", "Leila has headache and current right arm weakness.", "Assess and treat while history continues."),
    c011Hint("c011-hint-11", "run", "c011-run-consent", "examine and treat you while we talk", ["c011-communication", "c011-amc-tips"], "Setting the emergency process", "Why say treatment will happen during the conversation?", "It prepares Leila and Nadia for parallel actions and brief questions. It also makes clear that urgent care will not wait for a complete story.", "Keep explanations short enough for a drowsy patient.", "Consent and collateral support are established.", "Request ABCDE, glucose and a structured neurological examination."),
    c011Hint("c011-hint-12", "run", "c011-run-primary", "elevate her head about 30 degrees with neutral alignment", ["c011-stroke-guideline"], "Protecting physiology", "Why this position?", "Head elevation and neutral alignment can support venous drainage and reduce aspiration risk while avoiding neck rotation. Keep her nil by mouth and have suction ready because vomiting and drowsiness make swallowing unsafe.", "Positioning supports care; it does not replace imaging or treatment.", "Leila is monitored, protected from aspiration and ready for rapid reassessment.", "Use the findings to judge stability and localisation."),
    c011Hint("c011-hint-13", "run", "c011-run-primary-findings", "blood pressure is 218/116 mmHg", ["c011-stroke-guideline"], "Reading severe hypertension", "Should I lower it immediately to normal?", "Avoid an abrupt fall to normal. Severe hypertension matters, but the target and rate depend on the stroke type and specialist protocol. Uncontrolled reduction can reduce cerebral perfusion.", "Record it, monitor closely and obtain imaging before subtype-specific treatment.", "Leila has severe hypertension during an acute focal brain syndrome.", "Now place conscious state and focal signs beside it."),
    c011Hint("c011-hint-14", "run", "c011-run-primary-findings", "GCS is 13", ["c011-stroke-guideline"], "Reading conscious state", "Thirteen. What should I do with that number?", "Break it into E3 V4 M6, record it and repeat it. A falling GCS, new pupillary change, vomiting or abnormal breathing would trigger immediate airway and repeat-imaging action.", "The trend matters more than saying 'drowsy' again.", "Leila has impaired consciousness but currently follows commands.", "Localise the deficit without claiming the pathology."),
    c011Hint("c011-hint-15", "run", "c011-run-primary-findings", "reduced right-sided sensation", ["c011-stroke-guideline"], "Localising the deficit", "Left gaze with right weakness and sensory loss. Where is the lesion likely?", "A left hemispheric lesion can pull gaze toward the affected hemisphere and weaken the right face and limbs because motor pathways cross. Reduced right sensation supports the same localisation.", "Localisation identifies the side; imaging identifies the lesion.", "The findings point to the left cerebral hemisphere.", "Secure exact onset and symptom order."),
    c011Hint("c011-hint-16", "run", "c011-run-onset-answer", "slumped to the floor at 5:12", ["c011-stroke-guideline", "c011-anzcor-stroke"], "Interpreting symptom order", "Sudden worst headache, vomiting, weakness, collapse. What rises now?", "An acute intracranial bleed becomes a major concern because severe headache and vomiting began with the focal deficit and reduced consciousness. Ischaemic stroke and other vascular causes still require imaging rather than bedside assumption.", "Strong suspicion is not permission for subtype-specific treatment.", "The event began abruptly at 17:05 and progressed to collapse by 17:12.", "Ask about seizure, trauma and anticoagulant use."),
    c011Hint("c011-hint-17", "run", "c011-run-history-answer", "normally lives independently", ["c011-lifeblood", "c011-stroke-guideline"], "Reading the medicine risk", "Warfarin makes bleeding more likely. Is that the diagnosis?", "It increases the likelihood and severity of haemorrhage, but imaging still decides. Record the indication, last dose and INR because rapid reversal may be needed, while remembering that stopping anticoagulation also carries later thrombotic risk.", "Medicine risk changes preparation before it confirms pathology.", "Leila took warfarin last night and was independent before this event.", "Move directly to brain imaging and coagulation studies."),
    c011Hint("c011-hint-18", "run", "c011-run-investigations", "non-contrast CT brain now", ["c011-stroke-guideline", "c011-stroke-standard"], "Choosing urgent imaging", "Why non-contrast CT first?", "It rapidly identifies acute blood and major structural effects. Vascular imaging then looks for an aneurysm, malformation or arterial occlusion and helps plan treatment.", "Do not delay the scan for a long history or routine test.", "Imaging will separate the stroke types and reveal mass effect.", "Withhold aspirin, anticoagulant and thrombolysis until the result is known."),
    c011Hint("c011-hint-19", "run", "c011-run-investigations", "Give no aspirin, anticoagulant or thrombolysis", ["c011-stroke-guideline", "c011-lifeblood"], "Avoiding premature treatment", "Why state all three?", "Each could worsen intracranial bleeding. The focal examination alone cannot establish an arterial clot, so wait for imaging before any treatment that depends on stroke subtype.", "Be urgent about imaging, restrained about unconfirmed treatment.", "Supportive care and monitoring continue without antithrombotic treatment.", "Now let the scan define the diagnosis."),
    c011Hint("c011-hint-20", "run", "c011-run-results", "4 millimetres of midline shift", ["c011-stroke-guideline", "c011-stroke-summary", "c011-stroke-standard"], "Reading the scan", "What does the scan establish now?", "This is a left putaminal intracerebral haemorrhage with intraventricular extension and midline shift. The deep left bleed explains right-sided weakness; blood and swelling explain headache, vomiting and reduced consciousness.", "Treatment now follows confirmed haemorrhage, not suspected ischaemia.", "The scan confirms a sizeable deep brain bleed with early mass effect.", "Add INR and warfarin to choose reversal."),
    c011Hint("c011-hint-21", "run", "c011-run-results", "INR is 3.4", ["c011-lifeblood"], "Reading anticoagulation intensity", "What does 3.4 change?", "In critical-organ bleeding on warfarin, an INR above 1.5 requires rapid reversal. The dose is calculated from body mass up to the recommended cap, and INR is rechecked after treatment.", "Do not wait for vitamin K alone to work.", "Warfarin is actively contributing to impaired clotting during the brain bleed.", "Give four-factor PCC with intravenous vitamin K."),
    c011Hint("c011-hint-22", "run", "c011-run-interpret", "left basal-ganglia intracerebral haemorrhage", ["c011-stroke-guideline", "c011-stroke-summary"], "Connecting anatomy to symptoms", "Why does a deep left bleed cause right weakness?", "The putamen lies beside tightly packed descending motor fibres. Blood and surrounding pressure disrupt those fibres before they cross lower in the nervous system, so weakness appears on the right.", "The anatomy explains the deficit; volume and extension explain severity.", "The working diagnosis is now confirmed intracerebral haemorrhage.", "Reverse warfarin immediately."),
    c011Hint("c011-hint-23", "run", "c011-run-interpret", "Beriplex, 50 international units per kilogram", ["c011-lifeblood"], "Reversing warfarin", "Why give PCC and vitamin K together?", "Four-factor PCC replaces vitamin K-dependent clotting factors within minutes. Intravenous vitamin K allows the liver to resume producing them, but takes hours. Together they provide rapid and sustained reversal.", "For 80 kilograms, the stated 4000-unit dose follows the critical-organ bleeding guidance.", "Warfarin is stopped, PCC and vitamin K are given, and INR is due in 20 minutes.", "Control blood pressure smoothly while specialists attend."),
    c011Hint("c011-hint-24", "run", "c011-run-blood-pressure", "smooth reduction to a systolic pressure of 130 to 140 mmHg", ["c011-stroke-guideline", "c011-stroke-summary"], "Treating blood pressure", "Why smooth rather than fast to normal?", "Controlled reduction may reduce haematoma expansion, while hypotension or a large overshoot can impair cerebral perfusion. Use a titratable intravenous medicine with frequent measurement and senior oversight.", "The target is active treatment with close observation, not a single bolus and hope.", "Reversal and controlled blood-pressure treatment are underway.", "Answer Nadia's clot-treatment question from the scan result."),
    c011Hint("c011-hint-25", "run", "c011-run-clot-question", "Can you give the clot-busting medicine", ["c011-stroke-guideline", "c011-communication"], "Correcting the subtype", "What must Nadia hear first?", "No. The scan shows bleeding, not an arterial blockage. Thrombolysis, aspirin or more anticoagulant could enlarge the haemorrhage, so treatment is reversal, careful blood-pressure control and specialist brain and intensive-care support.", "Answer the direct question before adding detail.", "The stroke subtype is haemorrhagic and clot-directed treatment is unsafe.", "Keep watching GCS, pupils, vomiting and breathing."),
    c011Hint("c011-hint-26", "run", "c011-run-deterioration", "GCS falls to 9", ["c011-stroke-guideline", "c011-stroke-summary"], "Recognising deterioration", "The pupils are still equal. Can I wait for repeat CT?", "No. Gurgling breathing, vomiting, desaturation and GCS 9 mean airway protection has failed now. Stabilise airway and oxygenation before repeat imaging.", "Normal pupils do not cancel an airway emergency.", "Leila has acutely deteriorated with aspiration and airway risk.", "Call anaesthetics and intensive care for immediate airway control."),
    c011Hint("c011-hint-27", "run", "c011-run-airway", "rapid sequence intubation", ["c011-stroke-guideline"], "Protecting the airway", "What else matters during intubation?", "Suction active vomit, give oxygen, use capnography and avoid hypoxia and hypotension because secondary brain injury worsens outcome. After stabilisation, repeat imaging to assess expansion, hydrocephalus or rising pressure.", "The emergency interruption is appropriate; explanation waits.", "The airway is secured while physiological stability is protected.", "Return to the requested explanation when the examiner prompts."),
    c011Hint("c011-hint-28", "run", "c011-run-time", "Please explain your likely diagnosis", ["c011-amc-spec", "c011-amc-tips"], "Changing tasks", "The patient just deteriorated. What do I do with the clock?", "The airway emergency correctly interrupted the plan. Once the team has secured it, return to what the examiner is asking now: explain the diagnosis and ongoing management to Nadia.", "Time spent stabilising deterioration was necessary.", "Immediate stabilisation is complete enough to communicate the plan.", "Use plain language and short sections.", "6 to 8 minutes"),
    c011Hint("c011-hint-29", "run", "c011-run-explanation", "bleeding deep in the left side of Leila's brain", ["c011-stroke-guideline", "c011-communication"], "Explaining the diagnosis", "How much anatomy does Nadia need?", "Say that bleeding deep in the left brain has injured pathways controlling the right side and has affected alertness. Swelling or further bleeding can worsen quickly, which is why monitoring and repeat scanning are urgent.", "Do not overwhelm her with putaminal anatomy unless she asks.", "Nadia understands the cause of weakness and drowsiness.", "Explain treatments already given and what specialists must decide."),
    c011Hint("c011-hint-30", "run", "c011-run-plan-explanation", "not automatically beneficial", ["c011-stroke-guideline", "c011-stroke-summary", "c011-communication"], "Explaining the surgical decision", "Why not promise surgery for a large bleed?", "Deep haemorrhage evacuation is not automatically helpful. Neurosurgery considers repeat imaging, location, expansion, hydrocephalus, deterioration, likely benefit and Leila's wishes before recommending an intervention.", "Specialist review is urgent even when surgery is uncertain.", "Reversal, blood-pressure control, airway support and repeat imaging are definite; surgery is conditional.", "Address prognosis without guessing."),
    c011Hint("c011-hint-31", "run", "c011-run-prognosis-question", "Will she recover", ["c011-stroke-standard", "c011-communication"], "Discussing prognosis", "What can I say now?", "The bleed size and reduced consciousness are serious, but outcome depends on expansion, complications and response to treatment. Say what is happening now and ask about any advance-care plan or previously expressed wishes.", "Do not equate uncertainty with hopelessness.", "Prognosis is unresolved, and Leila's values belong in later decisions.", "Check Nadia's understanding of the scan and current actions."),
    c011Hint("c011-hint-32", "run", "c011-run-understanding", "what you understand about the scan", ["c011-communication"], "Checking understanding", "What should Nadia be able to say?", "That this is brain bleeding rather than a clot, warfarin has been reversed, blood pressure is being controlled, breathing has been protected and repeat imaging is needed after deterioration.", "Correct missing points gently and briefly.", "Nadia can follow the immediate plan despite the stress.", "If time remains and the examiner permits, give a concise real-care handover after the three requested tasks."),
    c011Hint("c011-hint-33", "run", "c011-run-handover", "are involved", ["c011-stroke-guideline", "c011-lifeblood", "c011-communication"], "Optional real-care handover", "If permitted, what must the next team hear first?", "The station did not request handover, so complete assessment, collateral and explanation first. If time remains, give onset, baseline function, scan size and extension, GCS trend, blood pressure, warfarin and INR, exact reversal, airway deterioration, current support and repeat-imaging plan.", "Make the fall from GCS 13 to 9 unmistakable.", "The receiving team has the lesion, trajectory, treatment and unresolved risks.", "Finish and wait for the examiner."),
    c011Hint("c011-hint-34", "run", "c011-run-end", "The station is complete", ["c011-amc-spec", "c011-amc-tips"], "Leaving the station", "Should I keep reviewing the reversal dose?", "The case is complete. Take one breath, then let the next stem show you its pathology and priorities.", "This haemorrhage belongs to Leila's presentation.", "Case 11 is finished.", "Begin the next case with the role, setting and tasks.")
  ];

  caseEleven.essentialHintIds = [
    "c011-hint-04", "c011-hint-06", "c011-hint-07", "c011-hint-08",
    "c011-hint-14", "c011-hint-15", "c011-hint-16", "c011-hint-18",
    "c011-hint-20", "c011-hint-21", "c011-hint-23", "c011-hint-26",
    "c011-hint-27", "c011-hint-28", "c011-hint-29", "c011-hint-34"
  ];

  var c011Journey = {
    "c011-hint-06": { deeper: ["Physiology: ABCDE, glucose and GCS. Neurology: pupils and focal signs. Protection: monitoring, access, nil by mouth and head position. Escalation: stroke team and urgent CT preparation."] },
    "c011-hint-07": { deeper: ["Clarify last known well, onset and symptom order; seizure, trauma or loss of consciousness; anticoagulant name, dose and timing; previous events, allergies, baseline independence and expressed wishes."] },
    "c011-hint-14": { clock: "During task 1: trend GCS, airway protection and pupils while imaging is arranged." },
    "c011-hint-20": { clock: "Diagnosis confirmed: move immediately to reversal, controlled blood pressure and specialist care." },
    "c011-hint-22": {
      say: ["A deep left brain bleed affects pathways controlling the right side. Blood entering the ventricles and surrounding swelling raise pressure, explaining headache, vomiting and reduced consciousness."],
      deeper: ["Motor pathways cross before reaching the limbs, so a left-sided brain lesion causes right-sided weakness. Putaminal haemorrhage can also injure nearby sensory and gaze pathways."]
    },
    "c011-hint-23": {
      say: ["Give four-factor PCC for rapid clotting-factor replacement and intravenous vitamin K so the liver can sustain reversal. Recheck INR after treatment."],
      deeper: ["PCC supplies the vitamin-K-dependent clotting factors immediately. Vitamin K takes longer because the liver must synthesise new factors, so either treatment alone leaves a gap."]
    },
    "c011-hint-26": { clock: "Deterioration interrupts everything: secure airway and oxygenation before repeat imaging." },
    "c011-hint-28": { clock: "After airway stabilisation, return to the 6-to-8-minute explanation." },
    "c011-hint-34": { clock: "Station closed: one breath, then leave this case here." }
  };

  caseEleven.hints.forEach(function (hint) {
    var journey = c011Journey[hint.id];
    if (!journey) return;
    if (journey.clock) hint.clock = journey.clock;
    if (journey.say) hint.say = journey.say;
    if (journey.deeper) hint.deeper = journey.deeper;
  });
})();
