(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-040",
    globalId: "CP-C040",
    registryId: "CP-P12-C005",
    displayNumber: "Case 40",
    title: "An ankle injury during a bushwalk",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 12, title: "Toxicological Emergency" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c040-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c040-stem-patient",
          text: "Mr Eli Navarro, a 37-year-old man, felt a sudden sting at his left ankle while walking through long grass and noticed two puncture marks afterward."
        },
        {
          id: "c040-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c040-task-history",
          text: "Take a focused history from Eli.",
          timing: "2 minutes"
        },
        {
          id: "c040-task-assess",
          text: "Assess Eli and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c040-task-manage",
          text: "Initiate management and explain your assessment and plan to Eli.",
          timing: "3 minutes"
        },
        {
          id: "c040-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c040-run-history",
          heading: "Focused history and immediate first aid",
          turns: [
            {
              id: "c040-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c040-run-start", text: "You may begin." }]
            },
            {
              id: "c040-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c040-run-first-action", text: "The doctor performs hand hygiene and approaches Eli, who is lying on a trolley with a crepe bandage around his left ankle." }]
            },
            {
              id: "c040-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-introduction", text: "Hello, I am Ushana, an emergency doctor. Please confirm your name. Keep still while we assess you. May I ask what happened and improve the bandaging without washing the marks?" }]
            },
            {
              id: "c040-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c040-run-consent", text: "Eli Navarro. Yes. It happened 45 minutes ago near the You Yangs. I felt a sting and saw something thin and brownish move through the grass, but could not identify it." }]
            },
            {
              id: "c040-turn-event-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-event-question", text: "Was there one contact or more? Did you collapse or become confused? Who applied this bandage, and have you walked? Did anyone wash, cut, suck or tie off the limb?" }]
            },
            {
              id: "c040-turn-event-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c040-run-event-answer", text: "Only once. I did not collapse. My friend wrapped the ankle after five minutes and carried me to the track; ambulance officers kept me on the stretcher. Nobody washed or cut it, and there was no tourniquet." }]
            },
            {
              id: "c040-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-symptom-question", text: "Any headache, sweating, nausea, abdominal pain, visual change, drooping eyelids, trouble speaking, swallowing or breathing, weakness, muscle pain, bleeding or dark urine? Any illness, medicine, blood thinner or allergy?" }]
            },
            {
              id: "c040-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c040-run-symptom-answer", text: "None of those. The ankle stings slightly. I am normally well, take no medicine or blood thinner and have no allergies. I cannot remember my last tetanus booster." }]
            },
            {
              id: "c040-turn-first-aid",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-first-aid", text: "This could be a snakebite, although appearance cannot identify the species or prove envenoming. Keep Eli flat. Without removing the existing bandage, apply a broad elastic bandage from the toes over the entire limb, firm like a sprained-ankle bandage but preserving arterial circulation, then splint above and below." }]
            },
            {
              id: "c040-turn-first-aid-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c040-run-first-aid-action", text: "The nurse marks the reported site over the bandage, applies full-limb pressure immobilisation and splints the leg. Eli remains lying still." }]
            },
            {
              id: "c040-turn-first-aid-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-first-aid-explanation", text: "Pressure and stillness slow lymphatic venom movement. Do not wash, cut or suck the site, apply an arterial tourniquet, walk, or handle the animal. Resuscitation takes priority if Eli collapses." }]
            }
          ]
        },
        {
          id: "c040-run-assessment",
          heading: "Assessment, controlled bandage removal and serial testing",
          turns: [
            {
              id: "c040-turn-assessment-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-assessment-request", text: "Apply continuous cardiac, blood pressure and saturation monitoring. Assess ABC, conscious state, pupils, eye movements, speech, swallowing, limb and respiratory strength, bleeding, muscle tenderness and urine. Check distal neurovascular status without removing the bandage." }]
            },
            {
              id: "c040-turn-assessment-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c040-run-assessment-findings", text: "Eli is alert. Respiratory rate is 16, saturation 98% on room air, pulse 82, blood pressure 128/76 and temperature 36.7 degrees Celsius. Cardiopulmonary, neurological and abdominal examinations are normal. There is no bleeding or muscle tenderness. Toes are warm with normal sensation and refill." }]
            },
            {
              id: "c040-turn-investigation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-investigation-plan", text: "Call the Poisons Information Centre on 13 11 26 and a clinical toxicologist. Establish two intravenous lines. Send laboratory INR, APTT, fibrinogen, D-dimer, blood count and film, CK, electrolytes and renal function. Obtain ECG and urinalysis. Point-of-care coagulation is unreliable." }]
            },
            {
              id: "c040-turn-initial-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c040-run-initial-results", text: "Initial laboratory coagulation, fibrinogen, D-dimer, platelets, CK and renal function are normal. ECG and urinalysis are normal. Toxicology advises controlled removal of the bandage with serial examination and blood tests." }]
            },
            {
              id: "c040-turn-vdk",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-vdk", text: "A venom-detection kit does not diagnose envenoming or override the clinical and laboratory pattern. False results occur, so use it only if toxicology requests, preferably on an unwashed bite-site swab, never blood. Do not name the snake from colour." }]
            },
            {
              id: "c040-turn-removal-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-removal-plan", text: "Remove the bandage only now, with full monitoring, senior staff, resuscitation and airway equipment, two working intravenous lines, laboratory support, antivenom access and toxicology agreement. Continue strict rest. Repeat examination and bloods one hour after removal, then six and twelve hours after the bite as advised." }]
            },
            {
              id: "c040-turn-removal-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c040-run-removal-action", text: "The team removes the splint and bandage in a controlled manner. Two puncture marks are visible and remain unwashed." }]
            },
            {
              id: "c040-turn-deterioration",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c040-run-deterioration", text: "One hour later Eli develops headache, nausea and oozing from an intravenous site. INR is greater than 10, APTT greater than 150 seconds, fibrinogen less than 0.5 g/L and D-dimer greater than 20 mg/L. Platelets, CK and creatinine remain normal. There is no ptosis, weakness or respiratory impairment." }]
            },
            {
              id: "c040-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-interpretation", text: "This is systemic envenoming with venom-induced consumption coagulopathy. Recontact toxicology immediately. Give the expert-selected, geographically appropriate antivenom without waiting for snake identification. Administer it by the recommended infusion protocol with continuous monitoring, airway equipment and adrenaline immediately available for anaphylaxis." }]
            },
            {
              id: "c040-turn-vicc-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-vicc-plan", text: "Antivenom neutralises circulating venom, but coagulopathy takes time to recover. Do not repeat it solely for an abnormal INR. Avoid intramuscular injections and invasive procedures. Reserve blood products for life-threatening bleeding after antivenom with toxicology, haematology and critical-care advice. Continue serial coagulation, platelets, film, CK, renal, urine and neurological monitoring. Review tetanus protection once clotting permits." }]
            }
          ]
        },
        {
          id: "c040-run-communication",
          heading: "Explanation, teach-back and handover",
          turns: [
            {
              id: "c040-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c040-run-explanation-prompt", text: "Please explain the assessment and plan to Eli." }]
            },
            {
              id: "c040-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-explanation", text: "Eli, venom has disrupted the proteins needed for clotting. Your first tests were normal, so repeated tests after controlled bandage removal mattered. The toxicologist is guiding antivenom to stop further venom action. We will monitor breathing, nerves, muscles, kidneys and clotting." }]
            },
            {
              id: "c040-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c040-run-concern", text: "How could it become serious when I felt well? Will the kit tell us which snake it was, and will antivenom fix the bleeding straight away?" }]
            },
            {
              id: "c040-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-concern-response", text: "Effects and blood-test changes can be delayed. The kit is not a severity test and may misidentify venom. Antivenom stops further venom activity, but your body must rebuild clotting factors. We are ready for an allergic reaction. Later fever, rash or joint pains may indicate serum sickness." }]
            },
            {
              id: "c040-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c040-run-teachback", text: "Before treatment continues, tell me what first aid you would use if you witnessed a similar injury." }]
            },
            {
              id: "c040-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c040-run-teachback-answer", text: "Keep the person still, call an ambulance, pressure-bandage and splint the whole limb. Do not wash, cut, suck, use a tourniquet or let them walk." }]
            },
            {
              id: "c040-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c040-run-handover-prompt", text: "Please finish with a concise handover to the senior clinician." }]
            },
            {
              id: "c040-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c040-run-handover", text: "Eli Navarro is 37 and sustained a suspected left-ankle snakebite 45 minutes before arrival near the You Yangs. The animal was not identified. Full pressure immobilisation was removed only after normal initial assessment, toxicology agreement and resuscitation readiness. One hour later he developed headache, nausea, IV-site ooze, INR above 10, APTT above 150, fibrinogen below 0.5 and D-dimer above 20, consistent with systemic envenoming and consumption coagulopathy. No neurotoxicity or myotoxicity is evident. Two IV lines and monitoring are established. Toxicology is directing antivenom with anaphylaxis preparedness. Avoid procedures and IM injections, reserve blood products for life-threatening bleeding after expert discussion, and continue serial coagulation, film, CK, renal, urine and neurological monitoring." }]
            },
            {
              id: "c040-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c040-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.4.1: First Aid Management of Australian Snake Bite",
        date: "Current 2026 edition; approved April 2021",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-4-1-first-aid-management-of-australian-snake-bite"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.4.8: Envenomation - Pressure Immobilisation Technique",
        date: "Current 2026 edition",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-4-8-envenomation-pressure-immobilisation-technique"
      },
      {
        organisation: "Perth Children's Hospital, Child and Adolescent Health Service",
        title: "Emergency Department Guideline: Snake bite",
        date: "Endorsed January 2026; review January 2029",
        url: "https://pch.health.wa.gov.au/For-health-professionals/Emergency-Department-Guidelines/Snake-bite"
      }
    ]
  });

  var caseForty = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-040"; });
  function buildHint40(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseForty.masteryFocus = {
    case: "Use scene, movement, first aid, symptoms and serial physiology to manage uncertainty, keeping animal identity separate from the evidence that determines severity and action.",
    clinical: "In any possible envenomation, correct first aid and controlled serial reassessment prevent avoidable deterioration; normal early findings do not exclude delayed systemic effects, and treatment follows the clinical and laboratory pattern rather than visual identification.",
    tasks: ["Focused event history", "Assess and interpret", "Manage and explain", "Concise senior handover"],
    transfer: "If Eli developed ptosis, bulbar weakness and reduced respiratory effort but coagulation tests remained normal, would normal clotting make systemic envenoming or urgent treatment unlikely?",
    transferAnswer: "No. Neurotoxicity is a separate systemic pattern and can threaten ventilation without coagulopathy. Recontact toxicology, support airway and ventilation early, and give the expert-selected geographically appropriate antivenom when systemic envenoming is diagnosed. Continue serial neurological, respiratory, coagulation, muscle, renal and urine monitoring rather than waiting for snake identification or abnormal INR.",
    transferChecks: ["Cranial, bulbar and respiratory weakness", "Ventilation and airway protection", "Systemic pattern independent of coagulation", "Expert-directed antivenom and serial monitoring"],
    transferCitationIds: ["pch-snakebite-2026", "anzcor-snakebite-2026"]
  };
  caseForty.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" },
    { id: "anzcor-snakebite-2026", title: "Guideline 9.4.1: First Aid Management of Australian Snake Bite", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Current 2026 edition", url: "https://www.anzcor.org/home/first-aid/guideline-9-4-1-first-aid-management-of-australian-snake-bite" },
    { id: "anzcor-pit-2026", title: "Guideline 9.4.8: Envenomation, Pressure Immobilisation Technique", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Current 2026 edition", url: "https://www.anzcor.org/home/first-aid/guideline-9-4-8-envenomation-pressure-immobilisation-technique" },
    { id: "pch-snakebite-2026", title: "Emergency Department Guideline: Snake bite", organisation: "Perth Children's Hospital, Child and Adolescent Health Service", date: "Endorsed January 2026", url: "https://pch.health.wa.gov.au/For-health-professionals/Emergency-Department-Guidelines/Snake-bite" },
    { id: "vic-poisons-2026", title: "Victorian Poisons Centre", organisation: "Austin Health", date: "Current July 2026", url: "https://www.austin.org.au/poisons" }
  ];
  caseForty.reasoningCompass = {
    stem: {
      title: "Preserve evidence and prevent movement",
      steps: [
        { time: "0 to 30 seconds", text: "A sting in long grass with puncture marks raises several possibilities. First establish place, time, movement and first aid while keeping Eli still and the site unwashed." },
        { time: "30 to 60 seconds", text: "Plan questions for collapse, neurological, bleeding, muscle, gastrointestinal and urine symptoms, then request ABCD, full neurological and bleeding assessment, distal circulation and serial observations." },
        { time: "1 to 2 minutes", text: "Set the task times: event history to minute 2, assessment and interpretation to minute 4, management and explanation to minute 7, handover to minute 8." }
      ],
      anchor: "History 0 to 2 | Assess and interpret 2 to 4 | Manage and explain 4 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Keep each decision tied to what is actually found",
      steps: [
        { time: "0 to 2 minutes", text: "Keep Eli still, preserve the current first aid and obtain a focused event and symptom history." },
        { time: "2 to 7 minutes", text: "Interpret each new finding in order, make any first-aid change under controlled conditions and repeat the same checks to judge the response." },
        { time: "7 to 8 minutes", text: "Explain what is known, what remains uncertain and why observation is active care, then hand over the event, actions, findings and response." }
      ],
      anchor: "If ABCD becomes unsafe, stop the current task, stabilise Eli, then return to the point that was interrupted."
    }
  };
  caseForty.hints = [
    buildHint40("c040-hint-01", "stem", "c040-stem-role", "emergency department", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Reading the setting", "What can happen without moving the limb?", "Monitoring, intravenous access, laboratory support, resuscitation readiness and toxicology contact can be brought to Eli while he remains still.", "Bring the assessment to Eli so the limb stays still.", "The setting can control how first aid is changed.", "Read the event without naming the animal."),
    buildHint40("c040-hint-02", "stem", "c040-stem-patient", "long grass", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading the scene", "Do the punctures prove what caused this?", "No. The setting and marks make a medically important exposure possible, so use safe first aid and serial assessment while keeping the cause and systemic effect unproven.", "Act safely under uncertainty.", "A potentially important exposure occurred; systemic effect is unknown.", "Clarify time, location, movement and first aid."),
    buildHint40("c040-hint-03", "stem", "c040-stem-context", "provide findings", ["amc-spec-2026", "amc-tips-2024"], "Using examiner findings", "What should I request?", "Ask for ABCD, conscious state, pupils, cranial and limb strength, speech, swallowing, breathing effort, bleeding, muscle tenderness, urine, distal limb circulation and serial observations.", "An early normal appearance still needs planned repeat checks.", "No current physiology is disclosed in the stem.", "Anchor the four tasks."),
    buildHint40("c040-hint-04", "stem", "c040-task-history", "focused history from Eli", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task one", "What fits into two minutes?", "Ask event place and time, one or more contacts, collapse, walking, first aid and site washing; then neurological, breathing, bleeding, muscle, gastrointestinal and urine symptoms, medicines and allergy.", "Keep Eli still while asking.", "Minutes 0 to 2 establish exposure, movement, first aid and systemic symptoms.", "Interrupt history for collapse, weakness or breathing difficulty."),
    buildHint40("c040-hint-05", "stem", "c040-task-assess", "Assess Eli and interpret", ["amc-spec-2026", "acsqhc-deterioration-2026"], "Anchoring task two", "What makes the assessment focused?", "Combine ABCD with neurological, respiratory, bleeding, muscle, renal and distal limb findings. Interpret each serial change without relying on animal appearance.", "Say what the examination shows now and what still needs repeat checking.", "Minutes 2 to 4 establish the baseline examination and tests.", "Use the disclosed findings to choose the next action."),
    buildHint40("c040-hint-06", "stem", "c040-task-manage", "Initiate management and explain", ["amc-spec-2026", "acsqhc-deterioration-2026", "acsqhc-communication-2026"], "Anchoring task three", "How do I keep the management in a clear order?", "Keep the current first aid in place, seek expert advice, make any change under monitoring, treat effects that are actually found and explain why one normal assessment is not the end.", "Treatment decisions come from repeat clinical and laboratory findings, not appearance alone.", "Minutes 4 to 7 include action, reassessment and explanation.", "Reserve the final minute for handover."),
    buildHint40("c040-hint-07", "stem", "c040-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which categories must the senior hear?", "Give event and location, time, movement and first aid, initial clinical and laboratory state, controlled changes, deterioration or stability, treatment, response and the current monitoring plan.", "The handover should make the change over time easy to follow.", "Minute 7 to 8 transfers current risk.", "Begin by keeping Eli still and preserving the site."),
    buildHint40("c040-hint-08", "run", "c040-run-first-action", "crepe bandage", ["anzcor-pit-2026", "amc-tips-2024"], "Assessing existing first aid", "Should I remove it to see the marks?", "No. Keep Eli still and improve the bandage without removing the current layer until controlled assessment and expert advice are ready.", "The marks can wait; stillness and controlled first aid come first.", "Some first aid is already present but may be incomplete.", "Ask permission and preserve the unwashed site."),
    buildHint40("c040-hint-09", "run", "c040-run-introduction", "without washing the marks", ["anzcor-snakebite-2026", "anzcor-pit-2026"], "Preserving the site", "Why avoid washing?", "An unwashed site may retain venom useful for expert-directed testing, and washing offers no treatment benefit. Stillness and full-limb pressure immobilisation are more important.", "Keep the site unwashed while urgent assessment continues.", "Eli agrees to assessment and bandage improvement.", "Clarify place, time and what he actually saw."),
    buildHint40("c040-hint-10", "run", "c040-run-consent", "could not identify it", ["anzcor-snakebite-2026", "pch-snakebite-2026"], "Keeping species uncertain", "Can I identify the animal from 'thin and brownish'?", "No. Colour and brief movement are unreliable for species identification. Geography helps expert antivenom selection later, but clinical and laboratory effects determine whether treatment is needed.", "Keep the animal unidentified unless reliable evidence becomes available.", "The event was 45 minutes ago near the You Yangs.", "Ask movement and first-aid details next."),
    buildHint40("c040-hint-11", "run", "c040-run-event-answer", "carried me", ["anzcor-snakebite-2026", "anzcor-pit-2026"], "Assessing movement after the event", "Why does being carried matter?", "Walking and muscle contraction can increase lymphatic movement from the limb. Being carried and kept on a stretcher limited further activity.", "Record that he was carried and did not keep walking.", "The ankle was wrapped early, the site was not washed and no tourniquet was used.", "Screen for systemic symptoms before correcting the bandage."),
    buildHint40("c040-hint-12", "run", "c040-run-symptom-question", "dark urine", ["pch-snakebite-2026"], "Screening several systemic patterns", "Why ask such a broad cluster?", "Different venoms can affect nerves, breathing, clotting, muscle and kidneys. Headache, nausea and abdominal pain may be early nonspecific clues, while dark urine can signal muscle injury.", "Judge severity from the combined findings and how they change, not from one symptom.", "Eli currently reports only local stinging.", "Apply correct full-limb pressure immobilisation now."),
    buildHint40("c040-hint-13", "run", "c040-run-first-aid", "entire limb", ["anzcor-pit-2026", "anzcor-snakebite-2026"], "Completing pressure immobilisation", "Why bandage beyond the ankle?", "Firm pressure over the whole limb and splinting reduce lymphatic movement while preserving arterial circulation. A local wrap alone is incomplete.", "Mark the site over the bandage and keep Eli flat.", "Possible exposure remains unconfirmed, but safe first aid is indicated.", "Explain why movement and harmful local measures are avoided."),
    buildHint40("c040-hint-14", "run", "c040-run-first-aid-explanation", "slow lymphatic venom movement", ["anzcor-pit-2026", "anzcor-snakebite-2026"], "Explaining the first-aid mechanism", "Why does stillness matter as much as pressure?", "Lymph flow rises with muscle movement. Pressure and splinting reduce lymph transport, while walking can accelerate systemic spread.", "Do not use an arterial tourniquet or damage the site.", "Correct first aid is now in place.", "Assess systemic physiology and distal circulation without removing it."),
    buildHint40("c040-hint-15", "run", "c040-run-assessment-request", "distal neurovascular status", ["pch-snakebite-2026", "anzcor-pit-2026"], "Checking first-aid safety and systemic effect", "What are the two purposes of this examination?", "Confirm the bandage has not compromised arterial flow, and establish a baseline for neurological, respiratory, bleeding, muscle and renal effects.", "Keep the bandage on during this assessment.", "First aid is complete; systemic status is still unknown.", "Read the normal findings as a baseline, not a clearance test."),
    buildHint40("c040-hint-16", "run", "c040-run-assessment-findings", "examinations are normal", ["pch-snakebite-2026", "anzcor-snakebite-2026"], "Interpreting an early normal assessment", "Can normal findings exclude envenoming?", "No. Effects may be delayed, especially while movement is limited. The normal examination and distal circulation provide a safe baseline for controlled serial reassessment.", "The examination is normal at this point; later effects still need surveillance.", "Eli is clinically stable with an intact distal limb.", "Obtain expert advice and laboratory baseline before bandage removal."),
    buildHint40("c040-hint-17", "run", "c040-run-investigation-plan", "Point-of-care coagulation is unreliable", ["pch-snakebite-2026", "vic-poisons-2026"], "Choosing reliable baseline tests", "Why send formal laboratory coagulation?", "Venom-induced consumption can produce major abnormalities that point-of-care devices may not measure reliably. CK, renal function, film and urine screen muscle, kidney and haemolytic effects.", "Use formal laboratory results when the treatment decision carries major consequences.", "Two lines, ECG and expert advice support controlled observation.", "Read initial results without treating one normal sample as final."),
    buildHint40("c040-hint-18", "run", "c040-run-initial-results", "Initial laboratory coagulation", ["pch-snakebite-2026"], "Using normal baseline results", "What do these results permit?", "They show no systemic pattern yet and provide a comparison point. With toxicology agreement and full resuscitation readiness, they support controlled bandage removal followed by timed repeat assessment.", "The normal baseline gives you something reliable to compare with the next tests.", "Clinical and laboratory baselines are both normal.", "Keep the venom-detection kit in its limited role."),
    buildHint40("c040-hint-19", "run", "c040-run-vdk", "does not diagnose envenoming", ["pch-snakebite-2026", "vic-poisons-2026"], "Placing the detection kit correctly", "What question can the kit not answer?", "It cannot establish severity or replace the clinical and laboratory pattern. False identification can misdirect care, so use it only when toxicology requests and never on blood.", "Keep identification secondary to repeat clinical and laboratory assessment.", "No systemic effect is yet demonstrated.", "Remove first aid only with all safeguards ready."),
    buildHint40("c040-hint-20", "run", "c040-run-removal-plan", "Remove the bandage only now", ["pch-snakebite-2026", "anzcor-pit-2026"], "Controlling a high-risk transition", "Why can removal change the situation?", "Releasing pressure and movement restriction may allow retained venom to enter the circulation. Monitoring, access, equipment, laboratory support, antivenom access and toxicology agreement must already be present.", "Treat removal as a monitored clinical step, with the team and equipment ready.", "Eli is stable and the team is prepared.", "Repeat examination and laboratory tests on the advised schedule."),
    buildHint40("c040-hint-21", "run", "c040-run-removal-action", "remain unwashed", ["pch-snakebite-2026"], "Preserving evidence after removal", "Should the visible punctures now be cleaned?", "Not yet. Leave the site unwashed while expert-directed testing remains possible, and continue strict rest during serial assessment.", "Seeing marks still does not identify the animal or prove systemic effect.", "Controlled removal is complete.", "Watch the next hour for symptoms, bleeding, weakness and laboratory change."),
    buildHint40("c040-hint-22", "run", "c040-run-deterioration", "INR is greater than 10", ["pch-snakebite-2026", "acsqhc-deterioration-2026"], "Recognising delayed systemic effect", "What has changed from baseline?", "Headache, nausea, IV-site ooze, very prolonged clotting times, very low fibrinogen and high D-dimer show a new severe consumption coagulopathy. Earlier normal results no longer apply.", "Pause. Serial change has now demonstrated systemic envenoming.", "There is a major clotting pattern without current neurotoxicity or myotoxicity.", "Recontact toxicology and treat the demonstrated systemic effect."),
    buildHint40("c040-hint-23", "run", "c040-run-interpretation", "venom-induced consumption coagulopathy", ["pch-snakebite-2026", "vic-poisons-2026"], "Naming the systemic pattern", "Why does the pattern matter more than species?", "The combination of low fibrinogen, markedly prolonged clotting and high D-dimer is enough to diagnose systemic envenoming with consumption coagulopathy and justify expert-selected antivenom.", "Treatment does not wait for visual identification.", "The clinical and laboratory pattern is now established.", "Prepare antivenom with anaphylaxis readiness."),
    buildHint40("c040-hint-24", "run", "c040-run-interpretation", "antivenom", ["pch-snakebite-2026", "vic-poisons-2026"], "Giving expert-selected antivenom", "What determines the product?", "Toxicology uses geography and the systemic pattern, not unreliable colour recall alone. Continuous monitoring, airway equipment and adrenaline are ready because anaphylaxis can occur.", "Neutralise circulating venom while treating immediate complications.", "Systemic envenoming is treated without waiting for species confirmation.", "Explain why coagulation recovery will not be instantaneous."),
    buildHint40("c040-hint-25", "run", "c040-run-vicc-plan", "takes time to recover", ["pch-snakebite-2026", "vic-poisons-2026"], "Understanding delayed clotting recovery", "Does an abnormal INR after antivenom mean another dose?", "Not by itself. Antivenom stops further venom action, but the body must replace consumed clotting factors. Repeat dosing follows toxicology evidence, not one persistent number.", "Avoid procedures and intramuscular injections while clotting is unsafe.", "Antivenom is active; serial organ and coagulation monitoring continues.", "Use blood products only for life-threatening bleeding after expert discussion."),
    buildHint40("c040-hint-26", "run", "c040-run-explanation-prompt", "explain the assessment and plan", ["amc-spec-2026", "acsqhc-communication-2026"], "Changing audience", "What should Eli hear first?", "Explain that venom has disrupted clotting proteins, the first tests were normal because effects can be delayed, and treatment now stops further venom action while recovery is monitored.", "Use the serial change to make the plan understandable.", "Eli is receiving expert-directed treatment.", "Address the kit, delayed seriousness and speed of recovery."),
    buildHint40("c040-hint-27", "run", "c040-run-explanation", "repeated tests after controlled bandage removal mattered", ["acsqhc-communication-2026", "pch-snakebite-2026"], "Explaining why observation was active care", "Why emphasise the repeat test?", "It shows that the team did not dismiss a normal first result. Controlled removal and timed comparison detected systemic effect before more obvious deterioration.", "Observation is active care here because each repeat check can change treatment.", "Eli can understand how a serious change appeared while he felt fairly well.", "Answer what the kit can and cannot do."),
    buildHint40("c040-hint-28", "run", "c040-run-concern", "kit tell us which snake", ["pch-snakebite-2026", "acsqhc-communication-2026"], "Answering the identification question", "Can I promise a species answer?", "No. Explain that the kit can misidentify and does not grade severity. The systemic pattern and geography are more useful for expert treatment decisions.", "Be explicit that the species remains uncertain.", "Eli also expects clotting to normalise immediately.", "Explain neutralisation versus factor replacement."),
    buildHint40("c040-hint-29", "run", "c040-run-concern-response", "rebuild clotting factors", ["pch-snakebite-2026", "acsqhc-communication-2026"], "Explaining the recovery lag", "What distinction makes this clear?", "Antivenom neutralises venom that is still active; it does not instantly replace proteins already consumed. Serial tests show the body's recovery and guide further care.", "One treatment can stop injury before measurements normalise.", "Allergic reaction and later serum sickness have also been explained.", "Check first-aid understanding before handover."),
    buildHint40("c040-hint-30", "run", "c040-run-teachback-answer", "Do not wash", ["anzcor-snakebite-2026", "anzcor-pit-2026", "acsqhc-communication-2026"], "Confirming first-aid recall", "What has Eli retained?", "He knows to keep the person still, call an ambulance, pressure-bandage and splint the whole limb, and avoid washing, cutting, sucking, a tourniquet or walking.", "Correct technique and stillness are the lasting safety actions.", "The patient explanation is complete.", "Move to the final clinical handover."),
    buildHint40("c040-hint-31", "run", "c040-run-handover-prompt", "concise handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering the final task", "What order preserves the serial change?", "Give event place and time, uncertain animal, first aid and movement, normal baseline, controlled removal, one-hour symptoms and coagulation, absent current neurotoxicity or myotoxicity, expert-directed treatment and current precautions.", "Make the normal-to-abnormal transition explicit.", "The final minute transfers systemic bleeding risk.", "End with monitoring and procedure restrictions."),
    buildHint40("c040-hint-32", "run", "c040-run-end", "The station is complete", ["amc-tips-2024"], "Ending cleanly", "Should I name the snake now?", "No. The examiner has ended the station, and treatment correctly remained based on geography, expert advice and the demonstrated pattern.", "Finish on the instruction.", "Case 40 is complete.", "Take one breath, then begin the next stem from its first line.")
  ];
  caseForty.essentialHintIds = [
    "c040-hint-02", "c040-hint-04", "c040-hint-05", "c040-hint-06", "c040-hint-07",
    "c040-hint-13", "c040-hint-16", "c040-hint-18", "c040-hint-20", "c040-hint-22",
    "c040-hint-23", "c040-hint-24", "c040-hint-25", "c040-hint-31", "c040-hint-32"
  ];
  var clockByHint40 = {
    "c040-hint-04": "Minutes 0 to 2: keep Eli still while securing event, movement, first aid and systemic symptom details.",
    "c040-hint-13": "Before minute 3: correct full-limb pressure immobilisation without removing the original bandage.",
    "c040-hint-20": "Controlled bandage removal is a monitored transition. Repeat assessment on the planned serial clock.",
    "c040-hint-22": "New bleeding and severe coagulation change interrupt every planned task. Recontact toxicology and treat systemic envenoming now.",
    "c040-hint-26": "By minute 7: explain delayed effects, treatment, recovery lag and the kit's limits.",
    "c040-hint-31": "Final minute: transfer event, first aid, normal baseline, serial change, treatment and current precautions."
  };
  var deeperByHint40 = {
    "c040-hint-14": ["Venom from a peripheral bite is carried largely through lymphatics before reaching the circulation. Muscle contraction drives lymph flow, so firm pressure, splinting and stillness slow transport together."],
    "c040-hint-17": ["Venom-induced consumption coagulopathy can consume fibrinogen and other clotting factors rapidly. Point-of-care devices may not represent this complex failure reliably, so formal laboratory testing and trends are required."],
    "c040-hint-20": ["Pressure immobilisation can delay systemic absorption. Removing it may release a new venom load, which is why access, monitoring, resuscitation equipment, laboratory support and antivenom readiness precede removal."],
    "c040-hint-23": ["Procoagulant venom activates clotting extensively, consuming fibrinogen and factors while generating large amounts of fibrin breakdown product. The result is severe laboratory coagulopathy with bleeding risk rather than useful clot formation."],
    "c040-hint-25": ["Antivenom binds circulating venom and stops further procoagulant activity. The liver must then synthesise replacement clotting factors, so INR and fibrinogen recover over time rather than immediately."]
  };
  caseForty.hints.forEach(function (hint) {
    if (clockByHint40[hint.id]) hint.clock = clockByHint40[hint.id];
    if (deeperByHint40[hint.id]) hint.deeper = deeperByHint40[hint.id];
  });
})();
