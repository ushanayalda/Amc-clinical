(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-027",
    globalId: "CP-C027",
    registryId: "CP-P9-C001",
    displayNumber: "Case 27",
    title: "Sudden pain with a brief faint",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 9, title: "Acute Severe Abdominal Pain with Instability" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c027-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c027-stem-patient",
          text: "Mr Darius Okafor, a 73-year-old man, has presented with sudden lower abdominal and left flank pain extending into his back. He briefly fainted at home."
        },
        {
          id: "c027-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c027-task-history",
          text: "Take a focused history from Darius.",
          timing: "2 minutes"
        },
        {
          id: "c027-task-assess",
          text: "Assess Darius and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c027-task-explain",
          text: "Explain your assessment and management plan to Darius.",
          timing: "2 minutes"
        },
        {
          id: "c027-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c027-run-history",
          heading: "Focused history and initial assessment",
          turns: [
            {
              id: "c027-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-start", text: "You may begin." }]
            },
            {
              id: "c027-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c027-run-first-action", text: "The doctor performs hand hygiene and approaches Darius." }]
            },
            {
              id: "c027-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your full name. May I assess you while asking about the pain and faint?" }]
            },
            {
              id: "c027-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-consent", text: "Darius Okafor. Yes. The pain came from nowhere and I briefly passed out." }]
            },
            {
              id: "c027-turn-pain-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-pain-question", text: "Show me where it began and travels. Was the onset instant or gradual? Is it constant or in waves? Any nausea, vomiting, fever, urinary burning or visible blood?" }]
            },
            {
              id: "c027-turn-pain-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-pain-answer", text: "It struck instantly in my left lower belly and flank, then bored into my back. It stays severe, although I cannot get comfortable. I feel sick but have not vomited. No fever, burning or visible blood." }]
            },
            {
              id: "c027-turn-collapse-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-collapse-question", text: "What happened around the faint? Any chest pain, breathlessness, palpitations, sweating, weakness, injury or confusion afterwards? Have you had similar pain or a kidney stone?" }]
            },
            {
              id: "c027-turn-collapse-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-collapse-answer", text: "My wife said I was out for about 15 seconds. I woke clear-headed, sweaty and still in pain. No chest pain, breathing trouble, racing heart, injury or weakness. I have never had this or a kidney stone." }]
            },
            {
              id: "c027-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-background-question", text: "Do you have high blood pressure, artery problems or previous abdominal scans? Do you smoke? What medicines, blood thinners and allergies do you have?" }]
            },
            {
              id: "c027-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-background-answer", text: "I have hypertension and smoked for 50 years. A scan two years ago found a 52-millimetre abdominal aortic aneurysm. I missed vascular follow-up. I take perindopril, no blood thinner and have no allergies." }]
            },
            {
              id: "c027-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-primary-request", text: "I ask the senior emergency doctor to attend and alert vascular surgery, anaesthesia and theatre while I assess ABC and conscious state. Start monitoring, check glucose and obtain a 12-lead ECG. Titrate oxygen to clinical need and saturation. Findings, please." }]
            },
            {
              id: "c027-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c027-run-primary-findings", text: "Airway is patent. Darius is alert but pale. Respiratory rate is 18, oxygen saturation 97% on room air, pulse 94 and regular, blood pressure 104/66 and capillary refill two seconds. Glucose is 6.1 mmol/L. ECG shows sinus rhythm without acute ischaemic change." }]
            },
            {
              id: "c027-turn-focused-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-focused-request", text: "I request a focused abdominal, flank and peripheral perfusion examination, urine dip and bedside ultrasound of the abdominal aorta." }]
            },
            {
              id: "c027-turn-focused-findings",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c027-run-focused-findings", text: "There is left lower abdominal, flank and renal-angle tenderness without rigidity. No pulsatile mass is palpable. Femoral pulses are equal. Urine dip has two-plus blood. Ultrasound shows a 74-millimetre infrarenal aortic aneurysm; no free intraperitoneal fluid is seen." }]
            },
            {
              id: "c027-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-interpretation", text: "Rupture of this abdominal aortic aneurysm is the leading diagnosis. It can mimic renal colic. Neither microscopic blood nor absence of a palpable mass excludes it. Ultrasound confirms the aneurysm but cannot exclude retroperitoneal rupture, and near-normal initial observations do not make this safe." }]
            }
          ]
        },
        {
          id: "c027-run-deterioration",
          heading: "Early escalation and deterioration",
          turns: [
            {
              id: "c027-turn-early-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-early-management", text: "Keep those teams engaged and activate the major-haemorrhage pathway. Insert two large-bore intravenous cannulas. Send full blood count, electrolytes, coagulation, venous blood gas with lactate, and group and crossmatch. Keep Darius warm, give titrated intravenous analgesia, and monitor coagulation, fibrinogen, ionised calcium and temperature. While he remains alert at 104/66, CT angiography is considered only with the vascular team if it will not delay repair; prepare to bypass it if he deteriorates." }]
            },
            {
              id: "c027-turn-preparation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c027-run-preparation-action", text: "Monitoring continues while staff establish two large intravenous lines, draw blood, warm Darius and prepare blood components." }]
            },
            {
              id: "c027-turn-dizzy",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-dizzy", text: "Doctor, the pain is worse. I feel faint again." }]
            },
            {
              id: "c027-turn-reassessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-reassessment", text: "Repeat airway, breathing, circulation, conscious state and perfusion now, including all observations. Confirm both intravenous lines remain patent." }]
            },
            {
              id: "c027-turn-deterioration-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c027-run-deterioration-findings", text: "Airway remains patent. Darius is drowsy but responds to voice. Respiratory rate is 24, oxygen saturation 95% on room air, pulse 122, blood pressure 74/42 and capillary refill four seconds. He is cool and clammy. Lactate is 5.4 mmol/L and haemoglobin 118 g/L." }]
            },
            {
              id: "c027-turn-controlled-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-controlled-resuscitation", text: "This is haemorrhagic shock from presumed rupture. Start warmed blood components without waiting for haemoglobin to fall. Use blood-led controlled resuscitation to preserve consciousness and vital-organ perfusion until bleeding is controlled. Avoid large crystalloid loads and do not normalise blood pressure before control. Repeat ABC assessment, observations, blood gas, lactate, coagulation, fibrinogen, ionised calcium and temperature." }]
            },
            {
              id: "c027-turn-imaging-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-imaging-plan", text: "His hypotension and drowsiness now make CT angiography unsafe. Proceed directly to repair with vascular surgery and anaesthesia. Endovascular or open repair is decided by anatomy, available expertise and the vascular team." }]
            },
            {
              id: "c027-turn-team-arrival",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c027-run-team-arrival", text: "The vascular and anaesthetic teams arrive. Blood is running, theatre is ready and Darius can engage with a brief explanation." }]
            }
          ]
        },
        {
          id: "c027-run-communication",
          heading: "Explanation, teach-back and vascular handover",
          turns: [
            {
              id: "c027-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-explanation-prompt", text: "Please explain your assessment and plan to Darius." }]
            },
            {
              id: "c027-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-explanation", text: "Darius, the aneurysm in your main abdominal artery may have ruptured and be bleeding internally. This explains the sudden pain, faint and falling blood pressure. We are giving blood and taking you directly to theatre. The vascular surgeon will explain the immediate repair and seek your consent as far as your condition allows." }]
            },
            {
              id: "c027-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-concern", text: "Am I going to die? Is this my fault for missing follow-up?" }]
            },
            {
              id: "c027-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-concern-response", text: "This is life-threatening, but treatment is underway and I cannot promise the outcome. The aneurysm has grown; we can discuss why after surgery. There is no blame. If you become unable to decide, the team will provide life-saving emergency treatment in your best interests and update your wife." }]
            },
            {
              id: "c027-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c027-run-teachback", text: "Before we move, please tell me what we think is happening and what happens next." }]
            },
            {
              id: "c027-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c027-run-teachback-answer", text: "The enlarged artery may be leaking. I need blood and an operation now, with the repair chosen by the vascular team." }]
            },
            {
              id: "c027-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-handover-prompt", text: "Please finish with a concise handover to the vascular surgeon." }]
            },
            {
              id: "c027-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c027-run-handover", text: "Darius Okafor is 73 with instantaneous left lower abdominal and flank pain radiating to his back, followed by a 15-second faint. He has hypertension, a 50-year smoking history and missed follow-up of a 52-millimetre abdominal aortic aneurysm. No mass is palpable; urine has two-plus blood and ultrasound shows a 74-millimetre infrarenal aneurysm. He deteriorated from 104/66 to pulse 122, blood pressure 74/42, drowsiness and lactate 5.4, consistent with rupture and haemorrhagic shock. Major haemorrhage is active with two large intravenous lines, crossmatch, warmed blood and analgesia. Anaesthesia and theatre are ready. CT is unsafe; he requires direct repair, with endovascular or open approach decided by anatomy and your team." }]
            },
            {
              id: "c027-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c027-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Manual",
        date: "Current July 2026",
        url: "https://www.ambulance.qld.gov.au/clinical/cpm"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Abdominal emergencies",
        date: "October 2017, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0016/219040/cpg_abdominal-emergencies.pdf"
      },
      {
        organisation: "European Society for Vascular Surgery",
        title: "2024 Clinical Practice Guidelines on the Management of Abdominal Aorto-Iliac Artery Aneurysms",
        date: "2024",
        url: "https://doi.org/10.1016/j.ejvs.2023.11.002"
      }
    ]
  });
})();
