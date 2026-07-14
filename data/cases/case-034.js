(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-034",
    globalId: "CP-C034",
    registryId: "CP-P11-C002",
    displayNumber: "Case 34",
    title: "Barking cough and noisy breathing",
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
          id: "c034-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c034-stem-patient",
          text: "Miss Nia Okonkwo, a 3-year-old girl, has been brought by her father, Kelechi, because of a barking cough and noisy breathing."
        },
        {
          id: "c034-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c034-task-history",
          text: "Take a focused history from Kelechi.",
          timing: "2 minutes"
        },
        {
          id: "c034-task-assess",
          text: "Assess Nia and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c034-task-manage",
          text: "Initiate management and explain your assessment and plan to Kelechi.",
          timing: "3 minutes"
        },
        {
          id: "c034-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c034-run-history",
          heading: "Focused history and hands-off assessment",
          turns: [
            {
              id: "c034-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c034-run-start", text: "You may begin." }]
            },
            {
              id: "c034-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c034-run-first-action", text: "The doctor performs hand hygiene and approaches quietly. Nia remains upright on her father's lap in her chosen position." }]
            },
            {
              id: "c034-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-intro", text: "Hello Kelechi, I am Ushana, an emergency doctor. Please confirm your names. May I watch Nia's breathing while you answer brief questions? Keep holding her calmly." }]
            },
            {
              id: "c034-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c034-run-consent", text: "I am Kelechi Okonkwo and this is Nia. Yes. Her cough sounds like a seal and her breathing became noisy tonight. Could you look in her throat?" }]
            },
            {
              id: "c034-turn-minimal-handling",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-minimal-handling", text: "I will not force her mouth open or lie her down because distress can worsen airway narrowing. When did this start? Any runny nose, fever, choking, drooling, trouble swallowing, new exposure, rash, swelling or wheeze?" }]
            },
            {
              id: "c034-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c034-run-symptom-answer", text: "She had a runny nose and mild fever for two days, then the barking cough. No choking, new exposure, rash, swelling, wheeze or drooling. She swallows small sips, but her voice is hoarse." }]
            },
            {
              id: "c034-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-background-question", text: "Has she had severe croup, airway surgery, prematurity or another breathing condition? Is she fully immunised? Any medicines or allergies, and what is her current weight?" }]
            },
            {
              id: "c034-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c034-run-background-answer", text: "None of those. Her immunisations are current, she takes no medicine and has no allergies. She weighed 14 kilograms last week." }]
            },
            {
              id: "c034-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-primary-request", text: "Without upsetting Nia, I assess position, voice, airway noise, air entry, breathing effort, colour, alertness and perfusion. I request tolerated observations." }]
            },
            {
              id: "c034-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c034-run-primary-findings", text: "Nia sits upright, looks pale and anxious, and gives a hoarse cry. She has a barking cough, persistent inspiratory stridor at rest, marked intercostal and subcostal recession, tracheal tug and reduced air entry. Respiratory rate is 42, pulse 148 and oxygen saturation 94% on room air. There is no drooling, tripod position, rash or facial swelling." }]
            },
            {
              id: "c034-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-interpretation", text: "This is severe croup. The coryza, barking cough and hoarseness support it. Foreign body, anaphylaxis, epiglottitis and bacterial tracheitis remain alternatives if she does not respond." }]
            }
          ]
        },
        {
          id: "c034-run-management",
          heading: "Treatment and recognition of fatigue",
          turns: [
            {
              id: "c034-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-escalation", text: "Call senior paediatrics and alert anaesthetics, ENT and paediatric critical care. Bring airway equipment to Nia. Keep her on Kelechi's lap and avoid unnecessary cannulation, throat examination, blood tests or imaging." }]
            },
            {
              id: "c034-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-treatment", text: "Give nebulised adrenaline 5 milligrams, equal to 5 millilitres of undiluted 1:1000 solution. Give dexamethasone 0.6 milligrams per kilogram once, which is 8.4 milligrams, orally if tolerated or intramuscularly or intravenously if oral treatment is unsafe." }]
            },
            {
              id: "c034-turn-parent-support",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-parent-support", text: "Kelechi, hold the nebuliser near Nia while we stay beside you. It should reduce swelling within minutes; the steroid takes longer. Tell us if she becomes sleepier or breathes more quietly." }]
            },
            {
              id: "c034-turn-child-sound",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c034-run-child-sound", text: "Nia gives a short hoarse cry and leans against her father." }]
            },
            {
              id: "c034-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c034-run-deterioration", text: "Ten minutes after the first adrenaline dose, Nia's stridor is quieter. She is drowsy, respiratory rate is 28 with shallow chest movement, air entry is markedly reduced and oxygen saturation is 90%." }]
            },
            {
              id: "c034-turn-fatigue-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-fatigue-recognition", text: "Quieter stridor with drowsiness, poor effort, reduced air entry and hypoxaemia means exhaustion, not recovery. This is life-threatening croup. Activate the paediatric emergency response and have the most experienced clinician prepare for a difficult airway." }]
            },
            {
              id: "c034-turn-life-threatening-care",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-life-threatening-care", text: "Give 100% oxygen at 15 litres per minute by non-rebreather if tolerated, otherwise high-flow blow-by oxygen. Repeat nebulised adrenaline 5 milligrams now under the local 10 to 15 minute protocol. Reassess ABC and conscious state continuously." }]
            },
            {
              id: "c034-turn-airway-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-airway-plan", text: "Prepare suction, bag-mask ventilation, capnography and an endotracheal tube one-half to one size smaller. Anaesthetics and ENT should lead intubation if she does not improve. Oxygen does not remove the obstruction." }]
            },
            {
              id: "c034-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c034-run-response", text: "After the second adrenaline dose, Nia becomes alert. Air entry improves, recession is mild, stridor is no longer present at rest and oxygen saturation is 98%. The airway team and paediatric intensive care clinician are present." }]
            },
            {
              id: "c034-turn-disposition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-disposition", text: "Observe Nia continuously and admit under paediatrics with critical-care review because she had life-threatening features and repeated adrenaline. Any later discharge requires no stridor at rest or distress for at least three hours after the last dose, with safe access to urgent care." }]
            }
          ]
        },
        {
          id: "c034-run-communication",
          heading: "Explanation, teach-back and handover",
          turns: [
            {
              id: "c034-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c034-run-explanation-prompt", text: "Please address Kelechi's concerns and explain the plan." }]
            },
            {
              id: "c034-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c034-run-concern", text: "Was she about to stop breathing? Does she need an X-ray, antibiotics or steam?" }]
            },
            {
              id: "c034-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-explanation", text: "Viral swelling beneath her voice box became severe and she started to tire, so complete blockage was possible. She has responded, but adrenaline may wear off before the steroid works fully. Typical croup needs no X-ray or blood test. Antibiotics do not treat it, and steam does not help." }]
            },
            {
              id: "c034-turn-reassurance",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-reassurance", text: "Keeping her calm helped treatment. We will admit and observe her. After recovery, seek urgent help for stridor at rest, chest recession, blue colour, unusual sleepiness, drooling or difficulty swallowing." }]
            },
            {
              id: "c034-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c034-run-teachback", text: "Please tell me why quieter breathing was concerning and what happens next." }]
            },
            {
              id: "c034-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c034-run-teachback-answer", text: "The noise became quieter because she was too tired to move air, not because she was better. She has had two adrenaline treatments and steroid, and she will stay where the airway team can watch her." }]
            },
            {
              id: "c034-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c034-run-handover-prompt", text: "Please finish with a concise handover to the paediatric critical care clinician." }]
            },
            {
              id: "c034-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c034-run-handover", text: "Nia Okonkwo is 3 years old and 14 kilograms, with coryza and fever followed by barking cough, hoarseness and stridor. No choking, drooling, allergen exposure or airway history. Initially she had stridor at rest, marked recession, reduced air entry, respiratory rate 42 and saturation 94%. After first nebulised adrenaline 5 milligrams, quieter stridor, drowsiness, shallow effort and saturation 90% indicated exhaustion. Emergency airway help attended. She received high-flow oxygen, a second 5-milligram adrenaline nebuliser and dexamethasone 8.4 milligrams. She is now alert, stridor-free at rest with mild recession and saturation 98%. Anaesthetics and ENT are present. Continue high-acuity monitoring and admit with critical-care oversight." }]
            },
            {
              id: "c034-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c034-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "The Royal Children's Hospital Melbourne",
        title: "Clinical Practice Guidelines: Croup (Laryngotracheobronchitis)",
        date: "Updated September 2024",
        url: "https://www.rch.org.au/clinicalguide/guideline_index/Croup_Laryngotracheobronchitis/"
      },
      {
        organisation: "Children's Health Queensland",
        title: "Croup: Emergency management in children",
        date: "Version 3.0, effective February 2023, review due February 2027",
        url: "https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/croup"
      }
    ]
  });

  var caseThirtyFour = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-034"; });
  function buildHint34(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseThirtyFour.masteryFocus = {
    case: "Use airway sound, work of breathing, air entry and alertness together to judge severity without upsetting the child, and reassess every change before calling it improvement.",
    clinical: "In any child with noisy breathing, observe before touching, separate sound from airflow and effort, and treat reduced noise with worsening alertness or air entry as possible exhaustion.",
    tasks: ["Focused parent history", "Assess and interpret", "Manage and explain", "Concise senior handover"],
    transfer: "If Nia had a barking cough and hoarse voice but no stridor at rest, no recession and normal air entry, how would immediate treatment and disposition change?",
    transferAnswer: "Keep her calm and avoid unnecessary throat examination. Clarify whether there was stridor at rest earlier, assess work of breathing, air entry and alertness, and follow the local paediatric pathway on whether a single dose of dexamethasone is indicated. Nebulised adrenaline is not required while there is no stridor at rest or significant distress. Discharge with clear return advice is reasonable only if she remains well, drinks, has no concerning earlier course or airway risk, and has reliable access to urgent care; otherwise observe or seek paediatric review.",
    transferChecks: ["Stridor at rest", "Work of breathing and air entry", "Alertness and oxygenation", "Response to treatment and access to urgent care"],
    transferCitationIds: ["rch-croup-2024", "qld-croup-2023"]
  };
  caseThirtyFour.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "rch-croup-2024", title: "Clinical Practice Guidelines: Croup (Laryngotracheobronchitis)", organisation: "Royal Children's Hospital Melbourne", date: "Updated September 2024", url: "https://www.rch.org.au/clinicalguide/guideline_index/Croup_Laryngotracheobronchitis/" },
    { id: "qld-croup-2023", title: "Croup: Emergency management in children", organisation: "Children's Health Queensland", date: "Version 3.0, February 2023", url: "https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/croup" }
  ];
  caseThirtyFour.reasoningCompass = {
    stem: {
      title: "Observe the airway before examining it",
      steps: [
        { time: "0 to 30 seconds", text: "Barking cough and noisy breathing suggest upper-airway narrowing, but severity comes from stridor at rest, effort, air entry, colour and alertness." },
        { time: "30 to 60 seconds", text: "Plan brief questions about onset, coryza, fever, choking, drooling, swallowing, allergy and previous airway disease while keeping Nia calm and upright." },
        { time: "1 to 2 minutes", text: "Set the task times: history to minute 2, assessment to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Judge airflow, not noise alone",
      steps: [
        { time: "0 to 2 minutes", text: "Approach quietly, let Kelechi hold Nia and take a short history while watching her breathing. Avoid upsetting procedures." },
        { time: "2 to 7 minutes", text: "Act on the disclosed severity, then reassess air entry, effort and alertness after every intervention. Escalate if the physiology worsens." },
        { time: "7 to 8 minutes", text: "Explain the meaning of the disclosed findings and the next step, then hand over the severity trend, response and current support." }
      ],
      anchor: "If airway, breathing, circulation or alertness becomes unsafe, pause the task, respond, state where you paused and return only when it is safe."
    }
  };
  caseThirtyFour.hints = [
    buildHint34("c034-hint-01", "stem", "c034-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What matters before a detailed examination?", "You can bring oxygen, nebulised treatment and an airway team to Nia while she stays in the position she finds easiest.", "Avoid moving or upsetting her without a clear reason.", "This setting allows treatment around the child.", "Read the symptom pair and prepare to judge severity by observation."),
    buildHint34("c034-hint-02", "stem", "c034-stem-patient", "barking cough and noisy breathing", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading the symptom pair", "Does the sound alone tell me severity?", "No. The sound suggests an upper-airway problem, but severity depends on effort, air entry, colour and alertness, which have not yet been disclosed.", "Keep cause and severity as separate questions.", "An upper-airway problem is possible; current airflow is unknown.", "Plan a quiet hands-off assessment."),
    buildHint34("c034-hint-03", "stem", "c034-stem-context", "provide findings", ["amc-spec-2026", "amc-tips-2024"], "Using examiner findings", "Which findings should I request?", "Ask for position, voice, stridor, air entry, effort, colour, alertness, perfusion and tolerated observations. Do not request a forced throat examination.", "The safest assessment may be mainly observation.", "The stem has not shown how obstructed the airway is.", "Anchor the four task blocks."),
    buildHint34("c034-hint-04", "stem", "c034-task-history", "focused history from Kelechi", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task one", "What belongs in two minutes?", "Ask onset and progression, coryza and fever, choking, drooling, swallowing, voice, allergy exposure, rash, wheeze, previous airway disease, immunisation and medicines.", "Keep questions brief so distress does not increase.", "Minutes 0 to 2 cover focused history with continuous observation.", "Stop the questions if breathing or alertness worsens."),
    buildHint34("c034-hint-05", "stem", "c034-task-assess", "Assess Nia and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "What must interpretation include?", "State severity from the disclosed airway sound, effort, air entry, colour and alertness. Continue to consider other airway causes if the onset, associated features or response is atypical.", "Assess severity before expanding possible causes.", "Minutes 2 to 4 cover hands-off assessment and interpretation.", "Use the disclosed severity to choose the next action."),
    buildHint34("c034-hint-06", "stem", "c034-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-deterioration-2026", "acsqhc-communication-2026"], "Anchoring task three", "How do treatment and explanation fit together?", "Keep Nia calm, give treatment, call airway help when needed and explain each brief step to Kelechi while watching the response.", "Do not delay treatment for a long discussion.", "Minutes 4 to 7 include treatment, reassessment and explanation.", "Reserve the final minute for handover."),
    buildHint34("c034-hint-07", "stem", "c034-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories must the senior hear?", "Give the symptom pattern, initial severity, interventions, changes on reassessment, current airway state and immediate next step.", "The trend is more useful than a list of all normal history.", "Minute 7 to 8 belongs to the receiving clinician.", "Begin quietly and keep Nia with her father."),
    buildHint34("c034-hint-08", "run", "c034-run-first-action", "remains upright", ["rch-croup-2024", "qld-croup-2023"], "Respecting the child's position", "Why leave her on Kelechi's lap?", "Her chosen upright position may support airflow, and distress can worsen dynamic upper-airway narrowing. Observe before touching.", "Calm is part of airway management.", "History and assessment begin together.", "Ask consent while watching voice and breathing."),
    buildHint34("c034-hint-09", "run", "c034-run-consent", "look in her throat", ["rch-croup-2024", "qld-croup-2023"], "Handling the throat request", "Should I inspect to confirm the cause?", "Not by force. An upsetting throat examination can worsen obstruction and is unnecessary in a typical croup pattern. Explain that observation is safer first.", "A test is not useful if it creates avoidable risk.", "Kelechi wants certainty, but severity comes first.", "Ask for alternative clues without disturbing Nia."),
    buildHint34("c034-hint-10", "run", "c034-run-minimal-handling", "distress can worsen airway narrowing", ["rch-croup-2024", "qld-croup-2023"], "Making minimal handling deliberate", "What am I screening with these questions?", "Coryza and hoarseness support croup. Choking, drooling, swallowing difficulty, allergy signs and wheeze point toward other airway emergencies.", "Keep Nia still while Kelechi supplies the history.", "The airway remains unexamined by force.", "Use the answer to judge whether the pattern is typical."),
    buildHint34("c034-hint-11", "run", "c034-run-symptom-answer", "runny nose and mild fever", ["rch-croup-2024", "qld-croup-2023"], "Reading the pattern", "What fits and what remains open?", "Coryza followed by barking cough and hoarseness fits viral croup. No choking, drooling or allergic features lowers some alternatives but does not replace assessment of severity.", "Pattern suggests cause; examination determines urgency.", "Croup is plausible without proof of severity.", "Check prior airway risk and current weight."),
    buildHint34("c034-hint-12", "run", "c034-run-background-answer", "14 kilograms", ["qld-croup-2023"], "Using the weight", "Why retain this number?", "It permits an exact dexamethasone dose and helps plan airway equipment. The absence of previous airway disease does not make the current episode mild.", "Weight is actionable; normal background is context.", "The likely pattern is croup in a 14-kilogram child.", "Request a tolerated hands-off assessment."),
    buildHint34("c034-hint-13", "run", "c034-run-primary-request", "Without upsetting Nia", ["rch-croup-2024", "qld-croup-2023"], "Requesting safe findings", "Can a hands-off examination be enough?", "Yes. Position, voice, stridor, air entry, effort, colour and alertness can establish severity. Add only observations she tolerates.", "Do not trade good observation for a distressing routine examination.", "Cause is likely; severity is still unknown.", "Read sound, effort and airflow together."),
    buildHint34("c034-hint-14", "run", "c034-run-primary-findings", "reduced air entry", ["rch-croup-2024", "qld-croup-2023", "acsqhc-deterioration-2026"], "Reading severity", "Which finding carries the greatest danger?", "Persistent stridor at rest with marked recession and reduced air entry shows severe obstruction. Reduced airflow matters more than the loudness of stridor.", "Pause. This is not a history-only station now.", "Nia has severe upper-airway obstruction with preserved alertness.", "Name the pattern and keep alternatives available if treatment fails."),
    buildHint34("c034-hint-15", "run", "c034-run-interpretation", "This is severe croup", ["rch-croup-2024", "qld-croup-2023"], "Stating the working diagnosis", "Why are alternatives still mentioned?", "The viral prodrome, bark and hoarseness fit croup, but absent response or new drooling, allergy signs, focal history or toxic appearance would reopen the diagnosis.", "Use response to treatment as further evidence.", "Severe croup is the working diagnosis.", "Call airway support and remove avoidable procedures."),
    buildHint34("c034-hint-16", "run", "c034-run-escalation", "avoid unnecessary cannulation", ["rch-croup-2024", "qld-croup-2023"], "Removing interventions that can worsen care", "Why avoid blood tests and imaging?", "Typical croup is clinical. Upsetting Nia for tests that will not change immediate treatment may worsen obstruction and delay nebulised adrenaline.", "Bring expertise and equipment to her instead.", "The airway team is being alerted before failure occurs.", "Give airway-swelling treatment now."),
    buildHint34("c034-hint-17", "run", "c034-run-treatment", "nebulised adrenaline 5 milligrams", ["rch-croup-2024", "qld-croup-2023"], "Treating the obstruction", "What does each medicine contribute?", "Nebulised adrenaline reduces mucosal swelling within minutes; dexamethasone has a slower, sustained anti-inflammatory effect. Severe croup needs both.", "Adrenaline response must be reassessed because its effect can wear off.", "Immediate and longer-acting treatment are now given together.", "Keep Kelechi involved and watch effort, airflow and alertness."),
    buildHint34("c034-hint-18", "run", "c034-run-parent-support", "becomes sleepier or breathes more quietly", ["acsqhc-communication-2026", "rch-croup-2024"], "Preparing the parent for the right warning signs", "Why mention quieter breathing?", "With severe obstruction, reduced noise can mean less air is moving because the child is tiring. Sleepiness makes that interpretation more concerning.", "Noise alone cannot show recovery.", "Kelechi knows what change to report immediately.", "Use Nia's next sound and effort as part of reassessment."),
    buildHint34("c034-hint-19", "run", "c034-run-child-sound", "leans against her father", ["rch-croup-2024", "acsqhc-deterioration-2026"], "Noticing a subtle change", "Is leaning in simply comfort?", "It may be, but after severe obstruction it should prompt an immediate check of alertness, effort and air entry. Do not wait for the monitor alone.", "Reassessment begins with behaviour.", "Nia remains at high risk after the first dose.", "Read the next findings as one respiratory pattern."),
    buildHint34("c034-hint-20", "run", "c034-run-deterioration", "stridor is quieter", ["rch-croup-2024", "qld-croup-2023"], "Testing the tempting interpretation", "Quieter stridor. Better?", "Not with drowsiness, shallow movement, markedly reduced air entry and saturation 90%. These findings show less effective ventilation, not relief of obstruction.", "Pause. Quieter is dangerous in this context.", "Nia is tiring with hypoxaemia and poor airflow.", "Escalate to life-threatening airway care now."),
    buildHint34("c034-hint-21", "run", "c034-run-fatigue-recognition", "exhaustion, not recovery", ["rch-croup-2024", "qld-croup-2023"], "Naming fatigue", "What changes once exhaustion is recognised?", "The airway may fail. Activate the emergency response, bring the most experienced airway clinician and treat while preparing for difficult intubation.", "Do not spend time proving the original diagnosis again.", "Life-threatening croup is now established by physiology.", "Give oxygen and repeat nebulised adrenaline while the airway team prepares."),
    buildHint34("c034-hint-22", "run", "c034-run-life-threatening-care", "Repeat nebulised adrenaline", ["qld-croup-2023", "rch-croup-2024"], "Repeating immediate treatment", "Why repeat before the steroid has worked?", "The first adrenaline effect may be incomplete or wearing off, while dexamethasone has not yet reached full effect. Repeat adrenaline can temporarily improve airway calibre during preparation.", "Treatment and airway preparation proceed together.", "Oxygenation and obstruction both need immediate support.", "Prepare ventilation and a smaller tube if response is inadequate."),
    buildHint34("c034-hint-23", "run", "c034-run-airway-plan", "one-half to one size smaller", ["qld-croup-2023", "rch-croup-2024"], "Planning for the narrowed airway", "Why choose a smaller tube?", "Subglottic swelling can prevent the usual age-sized tube from passing. Experienced anaesthesia and ENT support reduce delay and provide a backup if intubation is difficult.", "Oxygen does not remove the physical narrowing.", "The team is ready for failure while treatment continues.", "Use the response to decide whether intubation is still required."),
    buildHint34("c034-hint-24", "run", "c034-run-response", "becomes alert", ["rch-croup-2024", "qld-croup-2023"], "Confirming real improvement", "What makes this different from the earlier quietening?", "Alertness, air entry, recession and saturation all improve, and stridor is absent at rest. Several independent findings now support recovery.", "Call improvement only when airflow and the child improve together.", "Nia has responded, but the earlier fatigue still matters.", "Plan high-acuity observation rather than immediate discharge."),
    buildHint34("c034-hint-25", "run", "c034-run-disposition", "admit under paediatrics", ["rch-croup-2024", "qld-croup-2023"], "Choosing disposition from the worst point", "Why admit when she now looks better?", "She had life-threatening features and required repeated adrenaline. The drug can wear off before steroid effect is established, so continuous observation and critical-care review are appropriate.", "Disposition follows the severity course, not only the latest observation.", "Nia is improving under an airway-ready team.", "Explain the event and answer Kelechi's questions plainly."),
    buildHint34("c034-hint-26", "run", "c034-run-explanation-prompt", "address Kelechi's concerns", ["acsqhc-communication-2026", "amc-spec-2026"], "Changing audience", "What must I explain first?", "Say that swelling below the voice box became severe and Nia started to tire, then explain the response, the risk of recurrence and why admission is needed.", "Use the event Kelechi witnessed, not technical labels alone.", "Treatment has produced real improvement.", "Answer whether tests, antibiotics or steam add value."),
    buildHint34("c034-hint-27", "run", "c034-run-concern", "X-ray, antibiotics or steam", ["rch-croup-2024", "qld-croup-2023", "acsqhc-communication-2026"], "Answering requested treatments", "How do I decline without sounding dismissive?", "Explain that typical croup is diagnosed clinically, antibiotics do not treat the viral swelling and steam has not shown benefit. Tests are reconsidered only if the course becomes atypical.", "Tie each answer to what it would or would not change.", "Kelechi needs clarity about why standard-looking options are omitted.", "Then give practical return signs."),
    buildHint34("c034-hint-28", "run", "c034-run-explanation", "adrenaline may wear off", ["rch-croup-2024", "qld-croup-2023"], "Explaining observation", "Why mention two medicine time courses?", "It makes the admission logic visible: adrenaline works quickly but temporarily, while dexamethasone takes longer. Observation covers the gap.", "A short mechanism can make the plan memorable.", "Kelechi understands why improvement is not immediate clearance.", "Use teach-back to confirm the dangerous quietening was understood."),
    buildHint34("c034-hint-29", "run", "c034-run-teachback-answer", "too tired to move air", ["acsqhc-communication-2026", "rch-croup-2024"], "Confirming the key distinction", "What has Kelechi understood?", "He can distinguish quiet airflow from recovery and knows why repeated treatment and observation are needed. That is the central safety lesson.", "Correct only any missing point.", "Family understanding is established.", "Move to the final clinical handover."),
    buildHint34("c034-hint-30", "run", "c034-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order prevents the fatigue episode being lost?", "Give the likely pattern, initial severity, first treatment, the quieter stridor with worsening alertness and airflow, emergency response, second treatment, current response and airway team presence.", "Make the deterioration and recovery sequence explicit.", "The last minute transfers airway risk.", "Finish with monitoring and disposition."),
    buildHint34("c034-hint-31", "run", "c034-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I keep discussing discharge criteria?", "No. The station has ended and the safe disposition has been stated.", "Finish on the instruction.", "Case 34 is complete.", "Take one breath, then read the next stem from its first line.")
  ];
  caseThirtyFour.essentialHintIds = [
    "c034-hint-02", "c034-hint-04", "c034-hint-05", "c034-hint-06", "c034-hint-07",
    "c034-hint-14", "c034-hint-17", "c034-hint-20", "c034-hint-21", "c034-hint-22",
    "c034-hint-24", "c034-hint-25", "c034-hint-26", "c034-hint-30", "c034-hint-31"
  ];
  var clockByHint34 = {
    "c034-hint-04": "Minutes 0 to 2: ask brief cause and danger questions while Nia stays calm and upright.",
    "c034-hint-14": "At minute 2: severe obstruction ends routine history. Treat and call airway help now.",
    "c034-hint-20": "Any quieter breathing with drowsiness triggers immediate airflow and effort reassessment, whatever the planned task.",
    "c034-hint-26": "By minute 7: explain the fatigue episode, treatment response and need for admission.",
    "c034-hint-30": "Final minute: hand over the severity trend, two adrenaline doses, steroid, response and airway readiness."
  };
  var deeperByHint34 = {
    "c034-hint-02": ["A young child's upper airway is narrow. A small further reduction in radius can markedly increase resistance to airflow, which is why observation of effort, air entry and alertness matters more than sound alone."],
    "c034-hint-17": ["Nebulised adrenaline produces local vasoconstriction and rapidly reduces mucosal oedema. Dexamethasone reduces inflammation more slowly and helps prevent recurrence after the short adrenaline effect fades."],
    "c034-hint-20": ["Stridor needs turbulent airflow to create sound. When fatigue reduces airflow, the noise may fade even while obstruction and gas exchange worsen."],
    "c034-hint-23": ["The narrowest swollen segment may not accept the expected tube diameter. A smaller tube reduces repeated traumatic attempts while ENT provides a surgical-airway backup."],
    "c034-hint-24": ["Real improvement is concordant: better alertness, greater air entry, less recession and improved oxygenation. One quieter sound without those changes is insufficient."]
  };
  caseThirtyFour.hints.forEach(function (hint) {
    if (clockByHint34[hint.id]) hint.clock = clockByHint34[hint.id];
    if (deeperByHint34[hint.id]) hint.deeper = deeperByHint34[hint.id];
  });
})();
