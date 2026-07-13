(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-011",
    globalId: "CP-C011",
    registryId: "CP-P3-C003",
    displayNumber: "Case 11",
    title: "Headache, vomiting and weakness after a collapse",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
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
})();
