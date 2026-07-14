(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-035",
    globalId: "CP-C035",
    registryId: "CP-P11-C003",
    displayNumber: "Case 35",
    title: "A child after a convulsion",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
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
          id: "c035-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c035-stem-patient",
          text: "Master Levon Sarkis, a 6-year-old boy, has been brought to hospital after a convulsion at home."
        },
        {
          id: "c035-stem-context",
          text: "His mother, Anya, is present. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c035-task-assess",
          text: "Assess Levon and obtain a focused history from Anya.",
          timing: "2 minutes"
        },
        {
          id: "c035-task-interpret",
          text: "Interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c035-task-manage",
          text: "Initiate management and explain your assessment and plan to Anya.",
          timing: "3 minutes"
        },
        {
          id: "c035-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c035-run-assessment",
          heading: "Concurrent assessment, seizure timing and first-line treatment",
          turns: [
            {
              id: "c035-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-start", text: "You may begin." }]
            },
            {
              id: "c035-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c035-run-first-action", text: "The doctor performs hand hygiene and approaches Levon and Anya at the trolley." }]
            },
            {
              id: "c035-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-introduction", text: "Hello, I am Ushana, an emergency doctor. Anya, please confirm Levon's name. When did the convulsion begin, and has it stopped at all? I will assess and treat him while we speak." }]
            },
            {
              id: "c035-turn-opening-history",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-opening-history", text: "I am Anya Sarkis. This is Levon Sarkis. It began ten minutes ago. Both arms and legs are still jerking. He has not woken or stopped." }]
            },
            {
              id: "c035-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-primary-request", text: "Start the seizure timer and call senior paediatrics and the resuscitation team. I assess airway, breathing, circulation and disability, and request observations, bedside glucose, weight and intravenous access. Anya, what seizure medicine has he received at home or in the ambulance?" }]
            },
            {
              id: "c035-turn-medication-history",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-medication-history", text: "He has epilepsy and a seizure plan. At five minutes I gave 7.5 milligrams of buccal midazolam exactly as the plan says. Nobody has given anything else. He weighs 25 kilograms." }]
            },
            {
              id: "c035-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c035-run-primary-findings", text: "Levon is unresponsive with continuing symmetrical tonic-clonic movements. Secretions are pooling, but air entry is present bilaterally. Respiratory rate is 18 and becoming shallow, oxygen saturation 91% on room air, pulse 148, blood pressure 104/66, temperature 36.8 degrees Celsius and glucose 5.2 mmol/L. He weighs 25 kilograms. A peripheral intravenous cannula is secured." }]
            },
            {
              id: "c035-turn-airway-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-airway-management", text: "Place him on his side, protect his head, open the airway and suction. Do not restrain him or put anything in his mouth. Give high-concentration oxygen, attach ECG, saturation and blood-pressure monitoring, and prepare bag-mask ventilation with paediatric airway equipment." }]
            },
            {
              id: "c035-turn-first-line-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-first-line-treatment", text: "The home midazolam counts as dose one, and five minutes have passed. Give intravenous midazolam 0.15 milligrams per kilogram: 3.75 milligrams. This is dose two and the final benzodiazepine. Prepare levetiracetam and use intraosseous access if the intravenous line fails." }]
            },
            {
              id: "c035-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c035-run-treatment-action", text: "The team positions Levon, suctions his airway, provides oxygen and monitoring, and gives 3.75 mg intravenous midazolam while preparing second-line medication." }]
            }
          ]
        },
        {
          id: "c035-run-escalation",
          heading: "Second-line treatment, ventilation and cause assessment",
          turns: [
            {
              id: "c035-turn-persistent-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c035-run-persistent-findings", text: "Five minutes after the hospital midazolam, the convulsion continues. Levon's breathing is shallow, oxygen saturation is 87% despite oxygen, and his chest movement is reduced. Pulse is 142 and blood pressure is 98/62." }]
            },
            {
              id: "c035-turn-respiratory-support",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-respiratory-support", text: "Do not give a third benzodiazepine. Begin two-person bag-mask ventilation with 100% oxygen and capnography if available. Call the airway-skilled senior and paediatric critical care team. Prepare for intubation if ventilation remains inadequate or the seizure continues after second-line treatment." }]
            },
            {
              id: "c035-turn-second-line",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-second-line", text: "Give levetiracetam 60 milligrams per kilogram: 1.5 grams intravenously over five minutes. Use intraosseous access if the intravenous line is lost. If this fails, proceed to senior-led anaesthetic treatment and intubation, and arrange EEG because paralysis can hide electrical seizure activity." }]
            },
            {
              id: "c035-turn-ventilation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c035-run-ventilation-action", text: "Two clinicians provide effective bag-mask ventilation. Oxygen saturation rises to 98%. Levetiracetam 1.5 g is infused over five minutes as the airway and critical care teams arrive." }]
            },
            {
              id: "c035-turn-trigger-questions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-trigger-questions", text: "Anya, when was epilepsy diagnosed and what does he take? Any missed or vomited doses, fever, headache, stiff neck, rash, illness, head injury, possible ingestion, sleep loss or focal movement? Is this like his previous seizures?" }]
            },
            {
              id: "c035-turn-trigger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-trigger-answer", text: "He was diagnosed 18 months ago and takes levetiracetam morning and night. He vomited yesterday evening and this morning, so neither dose stayed down. No fever, headache, stiff neck, rash, injury or possible medicine access. He slept badly. His usual seizures look the same but stop within two minutes." }]
            },
            {
              id: "c035-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-investigations", text: "Send venous gas, electrolytes, calcium, magnesium, renal function and full blood count because second-line treatment was required and he has vomited. Investigate infection or toxic exposure if supported clinically. Do not delay treatment for tests, imaging or lumbar puncture." }]
            },
            {
              id: "c035-turn-resolution-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c035-run-resolution-findings", text: "The convulsion stops during the levetiracetam infusion. Levon breathes spontaneously at 20 breaths per minute, oxygen saturation is 98% with supplemental oxygen, pulse 118 and blood pressure 106/68. He remains drowsy but localises to touch. Electrolytes, calcium, magnesium and venous pH are within reference ranges." }]
            },
            {
              id: "c035-turn-postictal-care",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-postictal-care", text: "Keep him lateral with airway and cardiorespiratory monitoring. Titrate oxygen when stable, repeat neurological and glucose assessments, document all times and watch for recurrence. Missed levetiracetam is likely, but reassess for infection, injury, toxin or focal pathology." }]
            }
          ]
        },
        {
          id: "c035-run-communication",
          heading: "Recovery, explanation, teach-back and handover",
          turns: [
            {
              id: "c035-turn-recovery",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-recovery", text: "Mum? I feel tired. My head hurts a little." }]
            },
            {
              id: "c035-turn-child-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-child-response", text: "Hello Levon. You are in hospital and Mum is beside you. The shaking has stopped. Rest on your side while we check you. Tell us if your headache worsens or one side feels different." }]
            },
            {
              id: "c035-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-explanation-prompt", text: "Please explain your assessment and plan to Anya." }]
            },
            {
              id: "c035-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-explanation", text: "Anya, Levon's seizure required two benzodiazepine doses and then levetiracetam. You gave the correct first dose and told us its time, preventing an unsafe extra dose. His breathing became shallow, so we supported it. He is now breathing himself and responding." }]
            },
            {
              id: "c035-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-concern", text: "Did my midazolam make his breathing worse? Could this have damaged his brain?" }]
            },
            {
              id: "c035-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-concern-response", text: "Midazolam can slow breathing, especially after repeated doses, but a continuing seizure is also dangerous. Your dose was appropriate, and we treated the breathing problem. It is too early to promise the outcome, but stopping the seizure and supporting breathing protect him. His response is encouraging." }]
            },
            {
              id: "c035-turn-disposition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-disposition", text: "He will be admitted under paediatrics with neurology input and monitored until recovered. We will plan levetiracetam during vomiting. Brain imaging is reserved for concerns such as trauma, focal findings or failure to recover. His written seizure plan will be updated before discharge." }]
            },
            {
              id: "c035-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c035-run-teachback", text: "Please tell me when you would give home midazolam and what you would tell ambulance or hospital staff." }]
            },
            {
              id: "c035-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c035-run-teachback-answer", text: "I follow his plan at five minutes, note the time and call for help. I keep him on his side, put nothing in his mouth, and tell staff the dose and route so they count it." }]
            },
            {
              id: "c035-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-handover-prompt", text: "Please finish with a concise handover to the senior paediatric clinician." }]
            },
            {
              id: "c035-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c035-run-handover", text: "Master Levon Sarkis is 6, weighs 25 kilograms and has epilepsy treated with levetiracetam. A generalised convulsion followed two vomited levetiracetam doses. His mother gave buccal midazolam 7.5 milligrams at five minutes. At ten minutes, glucose was 5.2 and intravenous midazolam 3.75 milligrams was the second and final benzodiazepine. At fifteen minutes seizure and hypoventilation persisted; bag-mask ventilation restored saturation and intravenous levetiracetam 1.5 grams stopped the convulsion. He now breathes spontaneously, is drowsy but localising, and metabolic tests are normal. Continue airway and neurological monitoring, admit under paediatrics with neurology input, and escalate for recurrence or respiratory compromise." }]
            },
            {
              id: "c035-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c035-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "The Royal Children's Hospital Melbourne",
        title: "Clinical Practice Guideline: Seizures acute management",
        date: "June 2025",
        url: "https://www.rch.org.au/clinicalguide/guideline_index/Seizures_acute_management/"
      },
      {
        organisation: "Children's Health Queensland",
        title: "Status epilepticus - Emergency management in children",
        date: "Version 5.0, approved May 2023; review due May 2027",
        url: "https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/status-epilepticus"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 12.2 - Paediatric Advanced Life Support",
        date: "April 2026",
        url: "https://www.anzcor.org/home/paediatric-advanced-life-support/guideline-12-2-paediatric-advanced-life-support-pals"
      }
    ]
  });
})();
