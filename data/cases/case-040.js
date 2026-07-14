(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-040",
    globalId: "CP-C040",
    registryId: "CP-P12-C005",
    displayNumber: "Case 40",
    title: "An ankle injury during a bushwalk",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
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
})();
