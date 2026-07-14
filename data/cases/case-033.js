(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-033",
    globalId: "CP-C033",
    registryId: "CP-P11-C001",
    displayNumber: "Case 33",
    title: "Fever, reduced feeding and unusual sleepiness",
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
              lines: [{ id: "c033-run-antibiotic-plan", text: "Give ceftriaxone 100 milligrams per kilogram, 650 milligrams, through the intraosseous line now. Under the local meningitis protocol, give dexamethasone 0.15 milligrams per kilogram, approximately 1 milligram, immediately before or with it, but never delay ceftriaxone. Start droplet precautions." }]
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
              lines: [{ id: "c033-run-handover", text: "Remy Dela Cruz is 4 months old and weighs 6.5 kilograms. After one day of fever, reduced feeding and sleepiness, he presented with weak cry, mottling, four-second refill, pulse 188 and preserved blood pressure, without rash or neck stiffness. Lactate is 4.8 and he deteriorated to 64/36 with new petechiae, consistent with septic shock, possible meningococcal disease and meningitis. IO access and cultures are complete. Ceftriaxone 650 milligrams, protocol dexamethasone and 65 millilitres of crystalloid were given. Adrenaline at 0.1 microgram per kilogram per minute improved pressure to 74/42 and refill to three seconds. He remains drowsy. LP is deferred until stable. Droplet precautions are active and PICU has accepted him." }]
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
})();
