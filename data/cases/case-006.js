(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-006",
    globalId: "CP-C006",
    registryId: "CP-P2-C002",
    displayNumber: "Case 6",
    title: "Sudden breathlessness and light-headedness",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 2, title: "Acute Shortness of Breath" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c006-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c006-stem-patient",
          text: "Ms Maya Patel, a 38-year-old woman, presents with sudden breathlessness, chest tightness and light-headedness that began about 15 minutes ago."
        },
        {
          id: "c006-stem-start",
          text: "She is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        },
        {
          id: "c006-stem-simulation",
          text: "State your assessments and actions. The examiner will provide findings when requested."
        }
      ],
      tasks: [
        {
          id: "c006-task-assess",
          text: "Assess and manage the patient, explaining your actions as her condition permits.",
          timing: "5 minutes"
        },
        {
          id: "c006-task-explain",
          text: "Address the patient's concerns and discuss ongoing management and appropriate disposition.",
          timing: "3 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c006-run-recognition",
          heading: "Recognition and immediate treatment",
          turns: [
            {
              id: "c006-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c006-run-start", text: "You may begin." }]
            },
            {
              id: "c006-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c006-run-first-action", text: "The doctor performs hand hygiene, asks the nurse to bring the clinic resuscitation equipment and emergency medicines, and approaches the patient." }]
            },
            {
              id: "c006-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-intro", text: "Hello, I am Ushana, one of the doctors here. We are treating you now. Please tell me your name and what feels worst." }]
            },
            {
              id: "c006-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-opening", text: "Maya Patel. My throat feels tight... and I cannot breathe." }]
            },
            {
              id: "c006-turn-assessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-assessment", text: "Maya can speak, so her airway is patent but threatened. I assess her voice, mouth and throat, respiratory effort, bilateral air entry, pulse, blood pressure, perfusion and conscious state. Attach oxygen-saturation, ECG and frequent blood-pressure monitoring and provide the findings." }]
            },
            {
              id: "c006-turn-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c006-run-findings", text: "Her recorded weight is 68 kilograms. Her voice is hoarse and there is mild inspiratory noise with widespread wheeze. Respiratory rate is 30 breaths per minute and oxygen saturation is 90% on room air. Pulse is 132 beats per minute, blood pressure is 82/50 mmHg and capillary refill time is four seconds. She is pale, clammy and light-headed. There is no visible facial swelling, rash or hives. She reports nausea and abdominal cramping." }]
            },
            {
              id: "c006-turn-position",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-position", text: "Her blood pressure is dangerously low. Lay her flat with her legs slightly elevated now, and do not let her stand or walk." }]
            },
            {
              id: "c006-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-diagnosis", text: "Maya, this is anaphylaxis, a severe allergic reaction affecting your breathing and blood pressure. It can occur without a rash. Adrenaline is the urgent first treatment. I need to inject it into your outer thigh now." }]
            },
            {
              id: "c006-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-consent", text: "Yes. Please." }]
            },
            {
              id: "c006-turn-adrenaline",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-adrenaline", text: "Give adrenaline 0.5 milligrams, which is 0.5 millilitres of 1 milligram per millilitre solution, by intramuscular injection into the outer mid-thigh. Record the time. Stop amoxicillin and call Triple Zero for an emergency ambulance now." }]
            },
            {
              id: "c006-turn-adrenaline-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c006-run-adrenaline-action", text: "The nurse gives intramuscular adrenaline and calls Triple Zero while the patient is positioned safely." }]
            },
            {
              id: "c006-turn-trigger-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-trigger-question", text: "While treatment continues, did this start after food, a new medicine or an insect sting?" }]
            },
            {
              id: "c006-turn-trigger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-trigger-answer", text: "First amoxicillin tablet... twenty minutes ago." }]
            },
            {
              id: "c006-turn-support",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-support", text: "Give high-concentration oxygen according to local protocol. Insert two large-bore intravenous lines and rapidly give 0.9% sodium chloride, 10 to 20 millilitres per kilogram, then reassess blood pressure and perfusion. If she becomes unconscious but is breathing normally, use the recovery position, on the left side if pregnant. If she is unresponsive and not breathing normally, start CPR. Keep the airway equipment and defibrillator ready and monitor continuously." }]
            },
            {
              id: "c006-turn-first-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c006-run-first-response", text: "The examiner advances the simulated clinical time to five minutes after the first adrenaline dose. Oxygen saturation is 94% on oxygen, pulse is 120 beats per minute and blood pressure is 90/56 mmHg. Her voice remains hoarse and she still has wheeze and light-headedness." }]
            },
            {
              id: "c006-turn-repeat-adrenaline",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-repeat-adrenaline", text: "The response is inadequate. Give a second intramuscular adrenaline dose of 0.5 milligrams now, continue oxygen and intravenous fluid, and repeat the ABC assessment. Adrenaline can be repeated every five minutes while severe airway, breathing or circulatory features persist." }]
            },
            {
              id: "c006-turn-bronchodilator",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-bronchodilator", text: "After adrenaline, give salbutamol for persistent wheeze, using 8 to 12 puffs of 100 micrograms through a spacer or 5 milligrams nebulised. Salbutamol does not treat throat swelling or shock and must never replace adrenaline." }]
            },
            {
              id: "c006-turn-second-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c006-run-second-action", text: "The second adrenaline dose, oxygen, intravenous fluid and inhaled bronchodilator are given." }]
            },
            {
              id: "c006-turn-second-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c006-run-second-response", text: "Maya's voice and breathing improve. Oxygen saturation is 97% on oxygen, pulse is 108 beats per minute and blood pressure is 108/68 mmHg. She is alert and no longer light-headed." }]
            }
          ]
        },
        {
          id: "c006-run-focused-history",
          heading: "Brief history after stabilisation",
          turns: [
            {
              id: "c006-turn-history-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-history-consent", text: "Your breathing and blood pressure are improving. I will ask a few short safety questions while we keep treating you. Have you reacted to penicillin, food or an insect sting before?" }]
            },
            {
              id: "c006-turn-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-history-answer", text: "No. I have taken penicillin before without a problem." }]
            },
            {
              id: "c006-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-background", text: "Any asthma, heart condition or mast-cell disorder? What medicines do you take, especially beta blockers? Could you be pregnant?" }]
            },
            {
              id: "c006-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-background-answer", text: "No medical problems or regular medicines, and I am not pregnant." }]
            },
            {
              id: "c006-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c006-run-time", text: "The first task is complete. Please address the patient's concerns and explain the ongoing management and transfer plan." }]
            }
          ]
        },
        {
          id: "c006-run-explanation",
          heading: "Patient concerns and transfer plan",
          turns: [
            {
              id: "c006-turn-rash-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-rash-question", text: "How can it be an allergy when I do not have a rash?" }]
            },
            {
              id: "c006-turn-rash-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-rash-answer", text: "Anaphylaxis can affect the throat, lungs and circulation without causing skin changes. Your sudden hoarse voice, wheeze and very low blood pressure after amoxicillin were enough to treat immediately." }]
            },
            {
              id: "c006-turn-drive-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-drive-question", text: "I feel better now. Can my husband drive me home?" }]
            },
            {
              id: "c006-turn-drive-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-drive-answer", text: "No. Symptoms can return after appearing to settle, and your reaction affected both breathing and blood pressure. You need ambulance transfer with monitoring and treatment available during the journey." }]
            },
            {
              id: "c006-turn-hospital-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-hospital-plan", text: "Hospital will observe you for at least four hours after the last adrenaline dose. Because you needed repeated adrenaline and intravenous fluid for low blood pressure, overnight observation may be needed. Symptoms can return without another exposure. Antihistamines do not treat the breathing or blood-pressure problems, and steroids cannot replace adrenaline." }]
            },
            {
              id: "c006-turn-refractory",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-refractory", text: "If severe symptoms persist despite two doses, we continue intramuscular adrenaline every five minutes while expert help starts a carefully monitored adrenaline infusion and gives further fluid. Adrenaline must not be given as an intravenous bolus in this setting." }]
            },
            {
              id: "c006-turn-future",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-future", text: "We will document suspected amoxicillin allergy clearly and you should avoid it until specialist assessment. Before discharge, the hospital will consider adrenaline auto-injectors, give you an action plan and arrange allergy referral. Please show the plan to your family and carry it with you." }]
            },
            {
              id: "c006-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c006-run-understanding", text: "Are you clear that you need monitored ambulance transfer even though you feel better?" }]
            },
            {
              id: "c006-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c006-run-understanding-answer", text: "Yes. The reaction can return, so I need the ambulance and hospital monitoring." }]
            },
            {
              id: "c006-turn-ambulance-arrival",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c006-run-ambulance-arrival", text: "The ambulance team arrives while monitoring, oxygen and safe positioning continue." }]
            },
            {
              id: "c006-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c006-run-handover", text: "Maya Patel, 38, developed anaphylaxis about five minutes after her first amoxicillin dose. She had hoarseness, wheeze, oxygen saturation 90%, pulse 132 and blood pressure 82/50, without a rash. Adrenaline 0.5 milligrams was given intramuscularly into the outer thigh and repeated after five minutes for inadequate response. She has received oxygen, rapid intravenous saline and salbutamol after adrenaline. She is now alert, saturation 97% and blood pressure 108/68. Amoxicillin is stopped. She needs continued monitoring and hospital observation from the last adrenaline dose." }]
            },
            {
              id: "c006-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c006-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australasian Society of Clinical Immunology and Allergy",
        title: "Acute management of anaphylaxis guidelines",
        date: "Updated July 2026",
        url: "https://www.allergy.org.au/hp/anaphylaxis/acute-management-guidelines"
      },
      {
        organisation: "Australasian Society of Clinical Immunology and Allergy",
        title: "Initial anaphylaxis management flowchart",
        date: "2026",
        url: "https://www.allergy.org.au/images/ASCIA_HP_Initial_Anaphylaxis_Management_Flowchart_2026.pdf"
      },
      {
        organisation: "Australasian Society of Clinical Immunology and Allergy",
        title: "Refractory anaphylaxis management flowchart",
        date: "2026",
        url: "https://www.allergy.org.au/images/ASCIA_HP_Refractory_Anaphylaxis_Management_Flowchart_2026_v2.pdf"
      },
      {
        organisation: "Australasian Society of Clinical Immunology and Allergy",
        title: "Adrenaline doses for anaphylaxis",
        date: "2026",
        url: "https://www.allergy.org.au/images/ASCIA_HP_Adrenaline_Doses_Anaphylaxis_2026.pdf"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.7: First aid management of anaphylaxis",
        date: "Current citation 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-7-first-aid-management-of-anaphylaxis"
      },
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Acute Anaphylaxis Clinical Care Standard",
        date: "2021, current source accessed July 2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/acute-anaphylaxis"
      }
    ]
  });

  var caseSix = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-006"; });

  caseSix.masteryFocus = {
    case: "Assess sudden breathlessness, chest tightness and light-headedness, act on airway, breathing and circulation findings, and arrange safe monitored transfer.",
    clinical: "When several body systems fail suddenly, treat the life threat before waiting for every feature of a classic presentation."
  };

  caseSix.sources = [
    {
      id: "healthdirect-breath-2025",
      title: "Shortness of breath",
      organisation: "Healthdirect Australia",
      date: "Last reviewed June 2025",
      url: "https://www.healthdirect.gov.au/shortness-of-breath"
    },
    {
      id: "ascia-anaphylaxis-2026",
      title: "Acute management of anaphylaxis guidelines",
      organisation: "Australasian Society of Clinical Immunology and Allergy",
      date: "Updated July 2026",
      url: "https://www.allergy.org.au/hp/anaphylaxis/acute-management-guidelines"
    },
    {
      id: "ascia-initial-flowchart-2026",
      title: "Initial anaphylaxis management flowchart",
      organisation: "Australasian Society of Clinical Immunology and Allergy",
      date: "2026",
      url: "https://www.allergy.org.au/images/ASCIA_HP_Initial_Anaphylaxis_Management_Flowchart_2026.pdf"
    },
    {
      id: "ascia-refractory-2026",
      title: "Refractory anaphylaxis management flowchart",
      organisation: "Australasian Society of Clinical Immunology and Allergy",
      date: "2026",
      url: "https://www.allergy.org.au/images/ASCIA_HP_Refractory_Anaphylaxis_Management_Flowchart_2026_v2.pdf"
    },
    {
      id: "anzcor-anaphylaxis-2026",
      title: "Guideline 9.2.7: First Aid Management of Anaphylaxis",
      organisation: "Australian and New Zealand Committee on Resuscitation",
      date: "Current citation 2026",
      url: "https://www.anzcor.org/home/first-aid/guideline-9-2-7-first-aid-management-of-anaphylaxis"
    },
    {
      id: "acsqhc-anaphylaxis-2021",
      title: "Acute Anaphylaxis Clinical Care Standard",
      organisation: "Australian Commission on Safety and Quality in Health Care",
      date: "2021; accessed July 2026",
      url: "https://www.safetyandquality.gov.au/clinical-care-standards/acute-anaphylaxis"
    },
    {
      id: "amc-spec-2026",
      title: "Clinical Examination Specifications V8.3",
      organisation: "Australian Medical Council",
      date: "June 2026",
      url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf"
    },
    {
      id: "amc-tips-2024",
      title: "Tips from Examiners V1.1",
      organisation: "Australian Medical Council",
      date: "October 2024",
      url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf"
    }
  ];

  caseSix.reasoningCompass = {
    stem: {
      title: "Keep your place while reading",
      steps: [
        { time: "0 to 30 seconds", text: "Recognise sudden breathing, chest and faintness symptoms in a clinic. Plan emergency equipment, monitoring and an ABC assessment before a detailed history." },
        { time: "30 to 60 seconds", text: "Look across airway, breathing, circulation, skin and gut. Severe compromise can justify treatment even without every classic feature." },
        { time: "1 to 2 minutes", text: "Set the task changes: assess, treat and explain actions until minute 5, then answer concerns, discuss ongoing care and choose disposition for the final three minutes." }
      ],
      anchor: "Assessment, treatment and brief explanation 0 to 5 | Concerns, ongoing care and disposition 5 to 8"
    },
    run: {
      title: "Keep your place during the run",
      steps: [
        { time: "0 to 2 minutes", text: "Call for equipment, assess ABC, position safely and give the time-critical first-line treatment as soon as the clinical pattern is established." },
        { time: "2 to 5 minutes", text: "Call an ambulance, support oxygenation and circulation, repeat the first-line treatment if severe features persist, then reassess before brief safety questions." },
        { time: "5 to 8 minutes", text: "At the prompt, answer Maya's concerns, explain observation and future prevention, confirm understanding and transfer care safely." }
      ],
      anchor: "Persistent airway, breathing or circulation compromise interrupts every other task and requires repeat time-critical treatment, ABC reassessment and expert escalation."
    }
  };

  function c006Hint(number, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return {
      id: "c006-hint-" + String(number).padStart(2, "0"),
      target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 },
      citationIds: citationIds,
      where: where,
      popUp: popUp,
      say: Array.isArray(say) ? say : [say],
      pause: pause,
      recap: recap,
      reorient: reorient
    };
  }

  caseSix.hints = [
    c006Hint(1, "stem", "c006-stem-role", "suburban medical clinic", ["healthdirect-breath-2025", "amc-spec-2026"], "Reading the setting", "Clinic. Can I begin as a routine consultation?", "No. Sudden breathing difficulty and light-headedness may need clinic emergency medicines, resuscitation equipment and ambulance transfer before the cause is fully known.", "The setting limits resources, not urgency.", "You have a potentially unstable patient outside hospital.", "Plan help, monitoring and ABC assessment immediately."),
    c006Hint(2, "stem", "c006-stem-patient", "sudden breathlessness, chest tightness and light-headedness", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading the symptom cluster", "Could this simply be panic?", "Not before checking airway, breathing and circulation. Sudden breathlessness and chest tightness may come from airway narrowing, allergy, heart, lung or clot disease; light-headedness may indicate poor cerebral perfusion.", "Do not explain faintness psychologically before measuring circulation.", "Three symptoms began together and may share one acute cause.", "Look for airway change, oxygenation and blood pressure first."),
    c006Hint(3, "stem", "c006-stem-patient", "about 15 minutes ago", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading the timing", "Why does the rapid onset matter?", "A change over minutes favours an acute exposure, airway event, vascular event or arrhythmia over a slowly developing illness. It also means she may still be changing quickly.", "Timing narrows the questions but does not diagnose the cause.", "This is a very recent, active event.", "Find out what is failing now before asking what preceded it."),
    c006Hint(4, "stem", "c006-stem-start", "findings and investigation results when requested", ["healthdirect-breath-2025", "amc-tips-2024"], "Planning the first request", "What should I ask the examiner for first?", "Start with findings that decide whether airway, breathing or circulation needs immediate treatment. Ask the likely trigger only as Maya's condition permits; the emergency assessment is not postponed for a complete story.", "Request decision-making findings before background detail.", "Maya can answer, but the severity and cause are still unknown.", "Bring emergency equipment and assess ABC."),
    c006Hint(5, "stem", "c006-task-assess", "explaining your actions as her condition permits", ["amc-spec-2026", "amc-tips-2024"], "Reading task 1", "How do I explain and resuscitate at the same time?", "Use one short sentence before each major action when Maya can hear you. Assessment, treatment, explanation and reassessment continue together for five minutes.", "Her condition decides how much conversation is possible.", "The first task is active emergency care with brief communication.", "Reserve detailed concerns for the second task."),
    c006Hint(6, "stem", "c006-task-explain", "ongoing management and appropriate disposition", ["amc-spec-2026", "amc-tips-2024"], "Reading task 2", "What must the final three minutes achieve?", "Answer the concern Maya raises, explain ongoing monitoring and recurrence risk once severity is known, and justify the safest disposition.", "Disposition is an explicit task, not an optional closing line.", "Minutes 5 to 8 belong to concerns and the safe next setting.", "Hold the assessment findings and treatment response for that explanation."),
    c006Hint(7, "run", "c006-run-start", "You may begin", ["amc-tips-2024"], "Starting the station", "What do I do before asking about the trigger?", "Bring emergency medicines and resuscitation equipment, then assess airway, breathing and circulation. The trigger can wait several seconds; failing physiology cannot.", "Start with what can kill now.", "The clinic emergency response begins.", "Ask staff for equipment while you approach Maya."),
    c006Hint(8, "run", "c006-run-first-action", "resuscitation equipment and emergency medicines", ["healthdirect-breath-2025", "amc-tips-2024"], "Preparing treatment", "Am I assuming the diagnosis?", "No. You are preparing for several reversible emergencies while you assess. Equipment at the bedside prevents delay if airway, circulation or rhythm deteriorates.", "Preparation does not commit you to a diagnosis.", "Support and treatment options are coming to the room.", "Establish contact and ask what feels worst."),
    c006Hint(9, "run", "c006-run-intro", "what feels worst", ["healthdirect-breath-2025", "amc-tips-2024"], "Opening under pressure", "Why ask only one symptom question?", "It lets Maya identify the dominant threat in her own words without demanding a long account. Her answer can immediately redirect the ABC assessment.", "A short opening protects her limited breath.", "Identity and the most urgent symptom come first.", "Listen for airway words and voice change."),
    c006Hint(10, "run", "c006-run-opening", "My throat feels tight", ["healthdirect-breath-2025", "amc-tips-2024"], "Hearing the airway symptom", "Throat tightness. Is the airway already blocked?", "Not necessarily, but it may be threatened. Voice, inspiratory noise, visible swelling, ability to swallow and progression matter. Assess while preparing to treat.", "Do not wait for complete obstruction before acting.", "Maya reports airway and breathing symptoms together.", "Request airway, chest, circulation and conscious-state findings."),
    c006Hint(11, "run", "c006-run-assessment", "airway is patent but threatened", ["healthdirect-breath-2025", "amc-tips-2024"], "Assessing ABC", "How can an airway be patent and threatened?", "She can move some air and speak now, but hoarseness or inspiratory noise may signal swelling that can progress. Continue directly into breathing and circulation rather than declaring the airway safe.", "For now means reassess soon.", "Airway passage exists, but deterioration remains possible.", "Combine airway findings with oxygenation, blood pressure, skin and gastrointestinal symptoms."),
    c006Hint(12, "run", "c006-run-findings", "no visible facial swelling, rash or hives", ["ascia-anaphylaxis-2026", "ascia-initial-flowchart-2026", "acsqhc-anaphylaxis-2021"], "Interpreting the full pattern", "No rash. Can this still be anaphylaxis?", "Yes. Sudden hoarseness and inspiratory noise show upper-airway involvement; wheeze and low oxygen show lower-airway involvement; profound hypotension and poor perfusion show shock; nausea and cramping add another system. This is anaphylaxis even without skin changes.", "Do not require a rash when airway, breathing or circulation are severely affected.", "A multisystem allergic emergency is causing respiratory compromise and shock.", "Position her safely and give intramuscular adrenaline immediately."),
    c006Hint(13, "run", "c006-run-position", "do not let her stand or walk", ["ascia-anaphylaxis-2026", "anzcor-anaphylaxis-2026"], "Positioning safely", "Why is standing dangerous?", "Allergic mediators dilate blood vessels and make them leak fluid, so venous return and blood pressure fall. Standing can remove the remaining blood flow to the heart and brain and cause sudden collapse.", "A patient who feels faint must not walk to another room or vehicle.", "Maya has anaphylactic shock.", "Keep her safely positioned while adrenaline is prepared."),
    c006Hint(14, "run", "c006-run-diagnosis", "Adrenaline is the urgent first treatment", ["ascia-anaphylaxis-2026", "ascia-initial-flowchart-2026"], "Explaining first-line treatment", "Why adrenaline before antihistamine or steroid?", "Adrenaline constricts dilated vessels, reduces tissue swelling and relaxes bronchial muscle. Those actions directly treat shock, airway swelling and wheeze. Antihistamines and steroids do not reverse these immediate threats.", "Name the first treatment and give it promptly.", "Maya has been told what is happening and why adrenaline cannot wait.", "Obtain brief consent and inject the outer mid-thigh."),
    c006Hint(15, "run", "c006-run-consent", "Yes. Please", ["ascia-anaphylaxis-2026", "amc-tips-2024"], "Receiving consent", "Do I need a longer procedure discussion?", "No. Maya has heard the diagnosis, danger, treatment and urgency and has agreed. Continue communicating, but do not delay the injection.", "Emergency consent can be brief and informed.", "She agrees to immediate adrenaline.", "Give the correct intramuscular dose and record the time."),
    c006Hint(16, "run", "c006-run-adrenaline", "0.5 milligrams", ["ascia-anaphylaxis-2026", "ascia-initial-flowchart-2026"], "Giving adrenaline", "Which concentration and route?", "For this adult, give 0.5 mg intramuscularly into the outer mid-thigh using 1 mg/mL solution. Say both the milligram dose and corresponding volume, record the time, stop the suspected medicine and call an ambulance.", "Avoid concentration and route ambiguity.", "First-line treatment is being delivered without waiting for the trigger history.", "Continue ABC support while asking what immediately preceded the event."),
    c006Hint(17, "run", "c006-run-adrenaline-action", "calls Triple Zero", ["ascia-anaphylaxis-2026", "anzcor-anaphylaxis-2026"], "Escalating transfer", "If adrenaline works, is an ambulance still necessary?", "Yes. This reaction has affected airway, breathing and circulation and may recur. Transfer needs monitoring, repeat adrenaline and resuscitation capability.", "Initial response cannot make private transport safe.", "Adrenaline is given and emergency transfer is underway.", "Ask the trigger question while treatment continues."),
    c006Hint(18, "run", "c006-run-trigger-question", "food, a new medicine or an insect sting", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Finding a likely trigger", "Why ask now rather than before adrenaline?", "The answer guides stopping exposure, documentation and future assessment, but it does not change the need for immediate adrenaline. Treatment came first because the clinical pattern was enough.", "Trigger identification supports care; it must not gate care.", "Maya is receiving treatment and remains monitored.", "Clarify the exposure and timing."),
    c006Hint(19, "run", "c006-run-trigger-answer", "First amoxicillin tablet", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Connecting the exposure", "First tablet, then symptoms. Is amoxicillin definitely the cause?", "The close timing makes it the leading suspected trigger, so stop it and document the reaction clearly. Formal allergy assessment comes later; emergency care does not require laboratory proof.", "Call it suspected until specialist evaluation, but avoid further exposure now.", "Amoxicillin is the likely trigger for this episode.", "Support oxygenation and circulation, then reassess after the first adrenaline dose."),
    c006Hint(20, "run", "c006-run-support", "rapidly give 0.9% sodium chloride", ["ascia-anaphylaxis-2026", "ascia-initial-flowchart-2026"], "Supporting circulation", "Why can she need so much fluid?", "Vasodilation and capillary leak move effective circulating volume away from the vessels. Rapid isotonic fluid supports venous return while adrenaline treats the underlying mediator effects.", "Fluid supports shock; it does not replace adrenaline.", "Airway and bronchial treatment have started, with profound hypotension still present.", "Reassess oxygenation, pulse, blood pressure, perfusion and voice at five minutes."),
    c006Hint(21, "run", "c006-run-first-response", "blood pressure is 90/56 mmHg", ["ascia-anaphylaxis-2026", "ascia-initial-flowchart-2026"], "Reading the first response", "The numbers are better. Is one dose enough?", "No. Blood pressure remains low, hoarseness and wheeze persist, and she is still light-headed. Severe airway, breathing or circulatory features remain after five minutes.", "Improvement is not adequate response when dangerous features persist.", "The first dose helped but did not control the reaction.", "Give a second intramuscular adrenaline dose now."),
    c006Hint(22, "run", "c006-run-repeat-adrenaline", "repeated every five minutes", ["ascia-anaphylaxis-2026", "ascia-initial-flowchart-2026"], "Repeating adrenaline", "Should I hesitate because the pulse is already fast?", "Persistent anaphylactic airway compromise or shock is more dangerous than the expected tachycardia. Repeat intramuscular adrenaline every five minutes while severe features remain, with monitoring and expert support.", "Treat the life threat, then reassess the response.", "Maya still meets criteria for repeat first-line treatment.", "Continue oxygen and fluid and add bronchodilator only for persistent wheeze."),
    c006Hint(23, "run", "c006-run-bronchodilator", "must never replace adrenaline", ["ascia-anaphylaxis-2026", "anzcor-anaphylaxis-2026"], "Using salbutamol correctly", "Wheeze improved with salbutamol before. Could I use that instead?", "No. Salbutamol relaxes lower-airway muscle but does not treat throat swelling, vasodilation or capillary leak. Give it after adrenaline as an adjunct for persistent wheeze.", "One symptom treatment cannot replace multisystem treatment.", "Second adrenaline, oxygen and fluid address the core emergency.", "Reassess the whole patient after the second dose."),
    c006Hint(24, "run", "c006-run-second-response", "no longer light-headed", ["ascia-anaphylaxis-2026", "ascia-initial-flowchart-2026"], "Reading the second response", "Now she looks much better. What changes?", "Airway, breathing, oxygenation and circulation have improved after repeat treatment. Continue monitoring and safe positioning because symptoms can recur, then collect the short history needed for ongoing care.", "A good response permits the next task; it does not permit discharge.", "The immediate emergency is controlled for now.", "Ask prior reactions, relevant illness, medicines and pregnancy while monitoring continues."),
    c006Hint(25, "run", "c006-run-history-consent", "few short safety questions", ["ascia-anaphylaxis-2026", "amc-tips-2024"], "Returning to history", "Where do I resume after the emergency?", "Return to the unfinished assessment, but keep it narrow. Previous reactions, relevant conditions, beta blockers and pregnancy affect recurrence risk, treatment and follow-up.", "Do not restart a complete history from the beginning.", "Maya is stable enough for brief safety questions.", "Ask about previous penicillin, food or insect reactions."),
    c006Hint(26, "run", "c006-run-history-answer", "taken penicillin before without a problem", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Interpreting previous tolerance", "Does previous safe penicillin use exclude allergy now?", "No. Sensitisation can develop after earlier exposure, and a reaction may occur after later doses. Previous tolerance is useful history but cannot overturn today's clinical pattern.", "Past safety does not guarantee future tolerance.", "This is her first recognised reaction.", "Check conditions and medicines that may complicate treatment."),
    c006Hint(27, "run", "c006-run-background", "especially beta blockers", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Checking treatment modifiers", "Why ask about beta blockers?", "They can make anaphylaxis harder to treat and complicate cardiovascular response. Asthma, heart disease, mast-cell disorders and pregnancy also affect monitoring and specialist planning.", "These questions refine ongoing care after first-line treatment.", "No prior allergy history has changed the diagnosis.", "Use the time prompt to switch from assessment to concerns and disposition."),
    c006Hint(28, "run", "c006-run-time", "The first task is complete", ["amc-spec-2026", "amc-tips-2024"], "Changing tasks", "Should I keep asking background questions?", "No. Monitoring and treatment continue, but the examiner has moved you to Maya's concerns, ongoing management and transfer. Follow that task exactly.", "A prompt is a return point, not a disruption.", "Assessment and immediate management are complete for this station.", "Invite and answer the missing-rash concern."),
    c006Hint(29, "run", "c006-run-rash-question", "when I do not have a rash", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Hearing the concern", "She doubts the diagnosis. Do I repeat the label?", "Answer the reason for doubt. Skin changes are common, but not required when sudden airway, breathing or circulatory compromise establishes the emergency.", "Correct the specific misunderstanding without dismissing it.", "Maya equates allergy with rash.", "Connect her actual throat, lung and blood-pressure findings."),
    c006Hint(30, "run", "c006-run-rash-answer", "throat, lungs and circulation", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Explaining without a rash", "Which evidence is enough?", "Hoarse voice and inspiratory noise show airway involvement, wheeze and low oxygen show breathing involvement, and severe hypotension shows circulation involvement after a likely exposure. That is why treatment was immediate.", "Use her findings rather than a generic allergy explanation.", "The missing rash no longer conflicts with the diagnosis.", "Answer why private transport remains unsafe despite improvement."),
    c006Hint(31, "run", "c006-run-drive-question", "Can my husband drive me home", ["ascia-anaphylaxis-2026", "anzcor-anaphylaxis-2026"], "Hearing the transport request", "She feels better. Can family transport be reasonable?", "No. She required repeated adrenaline and intravenous fluid for airway, breathing and circulatory compromise. Symptoms can recur suddenly, and a private car cannot monitor or treat that safely.", "Current comfort does not erase recent shock.", "Maya wants home because the treatment worked.", "Explain recurrence and the protection provided by ambulance transfer."),
    c006Hint(32, "run", "c006-run-drive-answer", "Symptoms can return", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Explaining recurrence", "How do I avoid making this sound vague?", "Say that a second phase can occur without another exposure, and her initial reaction was severe. Monitoring and ready access to adrenaline are the reasons for ambulance and hospital, not punishment for being cautious.", "Tie disposition to a concrete risk.", "She needs monitored transfer even while improved.", "Give the expected hospital observation plan."),
    c006Hint(33, "run", "c006-run-hospital-plan", "at least four hours after the last adrenaline dose", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Planning observation", "Why count from the last dose?", "The last adrenaline marks the most recent severe activity needing treatment. At least four hours allows observation for recurrence; repeated doses and shock may justify overnight monitoring.", "Observation duration follows severity and treatment response.", "Maya had repeat adrenaline and fluid for hypotension.", "Clarify that antihistamines and steroids cannot replace adrenaline."),
    c006Hint(34, "run", "c006-run-refractory", "adrenaline infusion", ["ascia-refractory-2026", "ascia-anaphylaxis-2026"], "Planning refractory treatment", "What if repeated intramuscular doses still fail?", "Continue intramuscular adrenaline every five minutes while expert clinicians start a carefully monitored infusion and give further fluid. An intravenous adrenaline bolus is unsafe in this setting.", "Escalation changes the delivery method and monitoring, not the first-line principle.", "She has responded, but the contingency must be clear.", "Move from immediate recurrence planning to prevention after discharge."),
    c006Hint(35, "run", "c006-run-future", "avoid it until specialist assessment", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Planning future safety", "Should I call this a permanent penicillin allergy today?", "Document suspected amoxicillin anaphylaxis clearly and avoid re-exposure for now. Specialist assessment later can define which antibiotics are unsafe. An action plan and possible auto-injectors protect her before that review.", "Accurate provisional documentation is safer than either certainty or dismissal.", "Immediate and hospital plans are established.", "Check that Maya understands the need for ambulance transfer."),
    c006Hint(36, "run", "c006-run-understanding", "Are you clear", ["amc-tips-2024", "acsqhc-anaphylaxis-2021"], "Checking understanding", "Is a yes-or-no question enough?", "In this acute moment it can confirm agreement, but the strongest check is hearing Maya state the risk and plan in her own words.", "Understanding is demonstrated, not assumed.", "She has received the reason for transfer and observation.", "Listen to what she says back."),
    c006Hint(37, "run", "c006-run-understanding-answer", "reaction can return", ["ascia-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Hearing the plan back", "What does this answer confirm?", "Maya understands the central reason for monitored transfer and hospital observation. No further persuasion is needed while the ambulance arrives.", "Stop once the important decision is understood.", "She accepts the safe disposition.", "Continue monitoring and transfer care to the ambulance team."),
    c006Hint(38, "run", "c006-run-ambulance-arrival", "ambulance team arrives", ["anzcor-anaphylaxis-2026", "acsqhc-anaphylaxis-2021"], "Transferring care", "Are the requested tasks complete now?", "Yes. The two requested tasks are complete. If the examiner permits the transfer to continue, current observations, treatment times, suspected trigger and recurrence risk are handed over as real-care coordination while oxygen, monitoring and safe positioning continue.", "Do not invent an extra station task, but do not abandon safe transfer.", "Definitive transport support is present.", "If permitted, give the concise clinical handover shown next."),
    c006Hint(39, "run", "c006-run-handover", "developed anaphylaxis about five minutes after", ["acsqhc-anaphylaxis-2021", "ascia-anaphylaxis-2026"], "Opening the handover", "What comes first?", "Identity, timing, suspected trigger and the systems affected tell the ambulance team why recurrence is dangerous. Include the absence of rash because it must not undermine the established diagnosis.", "Start with the problem, not the full consultation.", "The receiving team hears what happened and when.", "Give the initial severity and exact adrenaline treatment."),
    c006Hint(40, "run", "c006-run-handover", "repeated after five minutes", ["acsqhc-anaphylaxis-2021", "ascia-initial-flowchart-2026"], "Reporting treatment response", "Why include both doses and timing?", "Repeat dosing shows severity and starts the observation clock from the last dose. Add fluid, oxygen, bronchodilator and the current observations so the team can continue without reconstructing events.", "Medication handover needs dose, route, time and response.", "Two intramuscular doses and supportive treatment are documented.", "Finish with the stopped medicine and required hospital observation."),
    c006Hint(41, "run", "c006-run-handover", "monitoring and hospital observation", ["acsqhc-anaphylaxis-2021", "ascia-anaphylaxis-2026"], "Closing the handover", "How should the final sentence end?", "State what must happen next: continued monitoring, readiness to repeat adrenaline, hospital observation counted from the last dose and clear documentation of suspected amoxicillin allergy.", "End with required care, not a vague request to review.", "The ambulance team has the complete safety-critical sequence.", "Stop once responsibility is accepted."),
    c006Hint(42, "run", "c006-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I add an allergy lecture?", "No. The requested concerns, disposition and transfer are complete. Let this case go: recognise multisystem failure, give adrenaline, position safely, repeat and reassess.", "A closed station needs no extra sentence.", "This station is finished.", "Take one breath and read the next stem from the beginning.")
  ];
})();
