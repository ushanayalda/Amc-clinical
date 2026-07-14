(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-034",
    globalId: "CP-C034",
    registryId: "CP-P11-C002",
    displayNumber: "Case 34",
    title: "Barking cough and noisy breathing",
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
})();
