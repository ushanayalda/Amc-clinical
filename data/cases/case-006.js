(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-006",
    globalId: "CP-C006",
    registryId: "CP-P2-C002",
    displayNumber: "Case 6",
    title: "Sudden breathlessness and light-headedness",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 2, title: "Acute Shortness of Breath" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "General practice emergency care"
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
          text: "She is awake and able to answer briefly. No treatment has been given."
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
})();
