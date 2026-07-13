(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-032",
    globalId: "CP-C032",
    registryId: "CP-P10-C003",
    displayNumber: "Case 32",
    title: "Ongoing bleeding after a vaginal birth",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 10, title: "Obstetric Catastrophe" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c032-stem-role",
          text: "You are a doctor working in the birth suite."
        },
        {
          id: "c032-stem-patient",
          text: "Ms Talia Novak, a 34-year-old woman, is 40 minutes after a vaginal birth and has ongoing vaginal bleeding."
        },
        {
          id: "c032-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c032-task-history",
          text: "Take a focused history from Talia.",
          timing: "2 minutes"
        },
        {
          id: "c032-task-assess",
          text: "Assess Talia and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c032-task-manage",
          text: "Initiate management and explain your assessment and plan to Talia.",
          timing: "3 minutes"
        },
        {
          id: "c032-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c032-run-history",
          heading: "Focused history and rapid assessment",
          turns: [
            {
              id: "c032-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-start", text: "You may begin." }]
            },
            {
              id: "c032-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c032-run-first-action", text: "The doctor performs hand hygiene and approaches Talia while the midwife remains at the bedside." }]
            },
            {
              id: "c032-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-intro", text: "Hello Talia, I am Ushana, a birth-suite doctor. Please confirm your full name. May I assess you and ask brief questions while the team helps?" }]
            },
            {
              id: "c032-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-consent", text: "Talia Novak. Yes. I feel faint, cold and very weak, and the bleeding has not stopped." }]
            },
            {
              id: "c032-turn-symptom-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-symptom-question", text: "While I call senior obstetrics, anaesthesia, the senior midwife, haematology and blood bank and alert theatre and intensive care, tell me: any breathlessness, chest pain, severe abdominal or vaginal pain, headache or visual change? Was labour prolonged or assisted? Any placental problem?" }]
            },
            {
              id: "c032-turn-symptom-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-symptom-answer", text: "I am breathless but have no chest pain, headache or visual problem. Labour was long and ended with a vacuum. My son weighed 4.1 kilograms and the placenta looked complete." }]
            },
            {
              id: "c032-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-background-question", text: "What medicine followed birth? Any asthma, high blood pressure, bleeding problem, regular medicine or allergy? Would you accept blood products?" }]
            },
            {
              id: "c032-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-background-answer", text: "I had the oxytocin injection. I use an asthma preventer and occasional salbutamol. I have no high blood pressure, bleeding problem, blood thinner or allergy, and accept blood." }]
            },
            {
              id: "c032-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-primary-request", text: "I review airway, breathing, circulation, conscious state and perfusion while obtaining observations and quantified blood loss." }]
            },
            {
              id: "c032-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-primary-findings", text: "Airway is patent. Talia is pale, clammy and drowsy but responds appropriately. Respiratory rate is 28, oxygen saturation 92% on room air, pulse 134 and regular, blood pressure 72/40 and capillary refill five seconds. Measured blood loss is 1300 mL and rising." }]
            },
            {
              id: "c032-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-interpretation", text: "This is primary postpartum haemorrhage with haemorrhagic shock. Prolonged labour, assisted birth and a large baby favour uterine atony. Resuscitation and bleeding control must occur together." }]
            }
          ]
        },
        {
          id: "c032-run-management",
          heading: "Concurrent resuscitation and haemorrhage control",
          turns: [
            {
              id: "c032-turn-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-resuscitation", text: "Lie Talia flat, keep her warm and give oxygen at 15 litres per minute by reservoir mask. Apply continuous ECG, saturation and frequent blood-pressure monitoring. Continue quantified loss. Insert two 14 to 16 gauge intravenous cannulas and a catheter for hourly urine output." }]
            },
            {
              id: "c032-turn-resuscitation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c032-run-resuscitation-action", text: "The midwifery and anaesthetic teams position Talia, provide oxygen, attach monitoring, establish two large intravenous lines and insert the catheter." }]
            },
            {
              id: "c032-turn-blood-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-blood-plan", text: "Send full blood count, electrolytes, coagulation with fibrinogen, arterial blood gas and lactate, ionised calcium, and group and crossmatch. Activate the major-haemorrhage protocol. Give warmed balanced crystalloid while blood arrives, then early warmed red cells and other protocol components. Do not await results before treating shock." }]
            },
            {
              id: "c032-turn-antifibrinolytic",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-antifibrinolytic", text: "Give tranexamic acid 1 gram intravenously over 10 minutes now. If bleeding continues after 30 minutes, or restarts within 24 hours, give a second 1-gram dose. Reassess the four Ts: tone, tissue, trauma and thrombin." }]
            },
            {
              id: "c032-turn-blood-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-blood-response", text: "The major-haemorrhage protocol is active and emergency red cells are available. Placenta and membranes are complete. No visible cervical, vaginal or perineal tear is found." }]
            },
            {
              id: "c032-turn-exam-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-exam-consent", text: "Talia, I need to examine your uterus and vagina and apply firm internal and abdominal pressure to slow bleeding. It may hurt despite analgesia. Is that acceptable?" }]
            },
            {
              id: "c032-turn-exam-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-exam-consent-answer", text: "Yes, please stop it." }]
            },
            {
              id: "c032-turn-tone-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-tone-findings", text: "The uterus is enlarged and boggy. Massage expresses clots. Bimanual compression reduces but does not stop bleeding. The catheter drains little concentrated urine." }]
            },
            {
              id: "c032-turn-tone-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-tone-treatment", text: "Continue uterine massage, clot expression, bimanual compression and bladder drainage. Because Talia is profoundly hypovolaemic, begin oxytocin 30 International Units in 500 mL by controlled infusion at 5 to 10 International Units per hour; consider a 5-Unit slow intravenous dose only with senior anaesthetic oversight. If there is no retained placenta, hypertension, pre-eclampsia, eclampsia, severe sepsis, or severe renal, hepatic, vascular or cardiac disease, give ergometrine 250 micrograms intramuscularly or slowly intravenously over one to two minutes. Give misoprostol 800 to 1000 micrograms rectally. Avoid carboprost because asthma creates serious bronchospasm risk." }]
            },
            {
              id: "c032-turn-ongoing-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c032-run-ongoing-findings", text: "Despite massage, bimanual compression and first-line medication, bleeding continues. Blood is running. Pulse is 126, blood pressure 82/48 and measured loss is now 1700 mL. Theatre is ready." }]
            },
            {
              id: "c032-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-escalation", text: "Maintain compression and transfer to theatre during resuscitation. Under anaesthesia, examine the genital tract and explore the uterus to confirm the cavity is empty and intact before balloon tamponade. If bleeding continues, escalate to compression sutures, vascular control or definitive surgery. Hysterectomy may be life-saving. Preserve fertility where safe, but not at the cost of haemorrhage control." }]
            }
          ]
        },
        {
          id: "c032-run-communication",
          heading: "Explanation, consent, teach-back and handover",
          turns: [
            {
              id: "c032-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-explanation-prompt", text: "Please explain the assessment and next steps to Talia." }]
            },
            {
              id: "c032-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-explanation", text: "Talia, your uterus has not tightened after birth, causing severe blood loss and low circulation. We are giving blood, medicines and uterine pressure. Because bleeding continues, you need theatre for a balloon inside the uterus and, if needed, surgery to stop it." }]
            },
            {
              id: "c032-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-concern", text: "Will I lose my uterus? What happens to my baby?" }]
            },
            {
              id: "c032-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-concern-response", text: "We will use the quickest safe measures that preserve your uterus, but uncontrolled bleeding may require hysterectomy to save your life. Your baby is being cared for and assessed by the midwife and support team, who will update you." }]
            },
            {
              id: "c032-turn-theatre-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-theatre-consent", text: "You can decide now. Do you consent to anaesthesia, examination and uterine exploration, balloon tamponade and, if required, abdominal surgery or hysterectomy? If you lose capacity, we will provide necessary emergency treatment in your best interests." }]
            },
            {
              id: "c032-turn-theatre-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-theatre-consent-answer", text: "Yes. I understand. Please do what is needed to stop the bleeding." }]
            },
            {
              id: "c032-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c032-run-teachback", text: "Before we move, please tell me what is causing the bleeding and what the team will do next." }]
            },
            {
              id: "c032-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c032-run-teachback-answer", text: "My uterus is not tightening. You are giving blood and medicines, and I need theatre for a balloon or surgery if the bleeding continues." }]
            },
            {
              id: "c032-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-handover-prompt", text: "Please finish with a concise handover to the senior obstetric clinician." }]
            },
            {
              id: "c032-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c032-run-handover", text: "Talia Novak is 34, 40 minutes after prolonged labour, vacuum birth of a 4.1-kilogram baby and prophylactic oxytocin. Loss rose from 1300 to 1700 mL; pulse is 126 and blood pressure 82/48. Placenta appears complete, no tear is visible and the uterus is enlarged and boggy. Major haemorrhage care is active with senior obstetrics, anaesthesia, haematology and theatre. Warmed blood, compression and uterotonics continue; tranexamic acid was given. Carboprost is avoided due to asthma. She has consented to anaesthesia, uterine exploration, balloon and possible surgery. Proceed to theatre now, with hysterectomy if conservative control fails." }]
            },
            {
              id: "c032-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c032-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Queensland Health",
        title: "Primary postpartum haemorrhage (PPH)",
        date: "August 2024, amended November 2024",
        url: "https://www.health.qld.gov.au/__data/assets/pdf_file/0015/140136/g-pph.pdf"
      },
      {
        organisation: "Royal Australian and New Zealand College of Obstetricians and Gynaecologists",
        title: "Management of Postpartum Haemorrhage (PPH) (C-Obs 43)",
        date: "November 2021, review due November 2026",
        url: "https://ranzcog.edu.au/wp-content/uploads/Management-Postpartum-Haemorrhage.pdf"
      }
    ]
  });
})();
