(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-015",
    globalId: "CP-C015",
    registryId: "CP-P5-C001",
    displayNumber: "Case 15",
    title: "Lower abdominal and hip pain after an e-bike collision",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 5, title: "Shock Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Adult emergency medicine"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c015-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c015-stem-patient",
          text: "Mr Otis Mercer, a 38-year-old man, has presented after an e-bike collision about 40 minutes ago. He reports pain across his lower abdomen and left hip."
        },
        {
          id: "c015-stem-start",
          text: "Otis is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c015-task-assess",
          text: "Assess Otis and discuss your initial management.",
          timing: "3 minutes"
        },
        {
          id: "c015-task-interpret",
          text: "Interpret the information provided and discuss your ongoing management.",
          timing: "3 minutes"
        },
        {
          id: "c015-task-explain",
          text: "Explain your assessment and management plan to Otis.",
          timing: "1 minute"
        },
        {
          id: "c015-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c015-run-assessment",
          heading: "Trauma assessment and early recognition",
          turns: [
            {
              id: "c015-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-start", text: "You may begin." }]
            },
            {
              id: "c015-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c015-run-first-action", text: "The doctor performs hand hygiene, applies appropriate protective equipment and approaches Otis while spinal motion restriction is maintained." }]
            },
            {
              id: "c015-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-intro", text: "Hello Otis, I am Ushana, one of the emergency doctors. I will assess and treat you while we talk. Is that okay? Can you confirm your full name and tell me where the pain is worst?" }]
            },
            {
              id: "c015-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-opening", text: "Yes. Otis Mercer. It is deep in my left groin and across the bottom of my stomach. I feel light-headed and cold." }]
            },
            {
              id: "c015-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-primary", text: "I assess for external bleeding, then airway, breathing, circulation, conscious state and exposure. Apply cardiac and oxygen-saturation monitoring, cycle blood pressure frequently and check temperature, capillary refill and glucose. I inspect the chest, abdomen and limbs. I will not spring or repeatedly manipulate the pelvis. Please provide the findings." }]
            },
            {
              id: "c015-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c015-run-primary-findings", text: "There is no external haemorrhage. Airway is patent, respiratory rate is 24, oxygen saturation is 97% on room air and breath sounds are equal. Pulse is 118, blood pressure is 118/76 and capillary refill is three seconds. He is pale, cool and alert, with glucose 6.4 mmol/L and temperature 35.7 degrees Celsius. There is lower abdominal tenderness, left groin bruising and pelvic pain with slight leg movement. There is no long-bone deformity or focal neurological deficit." }]
            },
            {
              id: "c015-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-recognition", text: "The normal blood pressure does not exclude significant blood loss. Tachycardia, delayed refill, cool skin, light-headedness and pelvic pain suggest compensated haemorrhagic shock. Activate the trauma response and local major haemorrhage protocol. Request the trauma surgeon, orthopaedic pelvic-trauma surgeon, anaesthetist, transfusion laboratory and interventional radiology team." }]
            },
            {
              id: "c015-turn-intimate-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-intimate-consent", text: "Otis, a pelvic injury can cause hidden bruising or bleeding. With a chaperone, may I briefly inspect your groin and perineal area without moving the pelvis?" }]
            },
            {
              id: "c015-turn-intimate-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-intimate-consent-answer", text: "Yes." }]
            },
            {
              id: "c015-turn-intimate-finding",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c015-run-intimate-finding", text: "There is no perineal bruising or blood at the urethral opening." }]
            },
            {
              id: "c015-turn-binder",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-binder", text: "Apply a pelvic binder centred over the greater trochanters, not the waist, without further pelvic compression. Keep him flat, warm and fasting. Establish two large-bore intravenous lines. Give titrated intravenous analgesia and high-concentration oxygen during active haemorrhagic shock, then titrate once circulation is stabilised." }]
            },
            {
              id: "c015-turn-actions",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c015-run-actions", text: "The trauma response and major haemorrhage protocol are activated. A pelvic binder is applied over the greater trochanters, active warming begins and two large-bore intravenous lines are secured." }]
            },
            {
              id: "c015-turn-mechanism",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-mechanism", text: "What happened, where did you land, and were you wearing a helmet? Did you lose consciousness?" }]
            },
            {
              id: "c015-turn-mechanism-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-mechanism-answer", text: "A car clipped the bike at an intersection and I landed hard on my left side. I wore a helmet and did not black out. I could not stand because of the groin pain." }]
            },
            {
              id: "c015-turn-ample",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-ample", text: "Any chest, back or neck pain, breathlessness, weakness, numbness or bleeding? Any allergies, medical conditions or medicines, especially blood thinners? When did you last eat or drink?" }]
            },
            {
              id: "c015-turn-ample-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-ample-answer", text: "No other pain, numbness or bleeding. I am usually well, take no medicines and have no allergies. I ate breakfast about four hours ago." }]
            }
          ]
        },
        {
          id: "c015-run-investigation",
          heading: "Investigations, deterioration and haemorrhage control",
          turns: [
            {
              id: "c015-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-investigations", text: "Send full blood count, blood gas with lactate and base excess, group and crossmatch, coagulation studies including fibrinogen, electrolytes, renal function and ionised calcium. Arrange portable chest and pelvic X-rays and eFAST. These tests occur alongside resuscitation and must not delay bleeding control." }]
            },
            {
              id: "c015-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c015-run-results", text: "eFAST shows no pericardial, pleural or intraperitoneal free fluid. Pelvic X-ray through the binder shows left sacroiliac joint widening and pubic rami fractures. Haemoglobin is 142 g/L, lactate 4.6 mmol/L, base excess minus 7, fibrinogen 1.8 g/L and ionised calcium 1.04 mmol/L. Other results are pending." }]
            },
            {
              id: "c015-turn-interpret-results",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-interpret-results", text: "A negative eFAST does not assess retroperitoneal bleeding, and the initial haemoglobin may remain normal during acute blood loss. The pelvic injury, raised lactate and base deficit support ongoing occult haemorrhage. Continue the binder and major haemorrhage protocol. Do not remove the binder merely to repeat the examination or obtain imaging." }]
            },
            {
              id: "c015-turn-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-resuscitation", text: "Give warmed red cells, plasma and platelets in the balanced packs specified by the local protocol, moving to group-specific components when available. Avoid large crystalloid volumes. If blood is briefly unavailable, use a small warmed balanced crystalloid bolus as a bridge. He is within three hours of injury with suspected critical bleeding, so give tranexamic acid according to the local trauma protocol." }]
            },
            {
              id: "c015-turn-monitoring",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-monitoring", text: "Use a blood warmer and active external warming. Repeatedly measure temperature, blood gas, lactate, ionised calcium, haemoglobin, platelets, PT, INR, APTT and fibrinogen. Replace calcium and fibrinogen according to results and local protocol. Reassess airway, breathing, perfusion and mental state after each pack." }]
            },
            {
              id: "c015-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c015-run-deterioration", text: "Ten minutes later, after the first blood components have started, Otis becomes drowsier. Pulse is 142 beats per minute, blood pressure is 82/48 mmHg, capillary refill time is five seconds and temperature is 35.3 degrees Celsius. Repeat eFAST remains negative." }]
            },
            {
              id: "c015-turn-definitive",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-definitive", text: "He now has decompensated haemorrhagic shock despite the binder and initial blood. Continue warmed balanced resuscitation and move directly to haemorrhage control. Do not send him to CT while unstable. Proceed to theatre for preperitoneal pelvic packing and mechanical stabilisation, or to angiographic embolisation or a hybrid pathway if immediately available without delay. Reserve laparotomy for a separate intraperitoneal indication and continue searching for another source during transfer." }]
            },
            {
              id: "c015-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-patient-question", text: "Am I bleeding inside? I cannot stay awake." }]
            },
            {
              id: "c015-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-patient-answer", text: "We believe the injured pelvic blood vessels are bleeding internally. The belt is helping stabilise the pelvis, and we are replacing blood while the specialist team takes you straight to a procedure that can stop the bleeding. I will stay with you and keep explaining what is happening." }]
            },
            {
              id: "c015-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-time", text: "Please explain your assessment and management plan to Otis." }]
            }
          ]
        },
        {
          id: "c015-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c015-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-explanation", text: "Otis, the collision has broken part of your pelvic ring. This can injure blood vessels and cause major internal bleeding even when the first blood-pressure and haemoglobin readings look acceptable. Your circulation readings and blood tests showed blood loss before the blood pressure fell." }]
            },
            {
              id: "c015-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-plan", text: "We have stabilised the pelvis with a binder, activated the major haemorrhage protocol and started warmed blood components. Your blood pressure has now fallen, so a CT scan would delay treatment. The trauma, surgical and radiology teams will use the quickest available procedure to stop the bleeding while we protect your temperature, clotting and calcium levels." }]
            },
            {
              id: "c015-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-handover-prompt", text: "Please finish with a concise handover to the senior clinician." }]
            },
            {
              id: "c015-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c015-run-handover", text: "Otis Mercer is 38, forty minutes after an e-bike collision with left-sided impact. He has pelvic pain, groin bruising and an unstable pelvic-ring injury on X-ray. Initial pulse was 118 with pressure 118/76, cool skin and delayed refill. Lactate is 4.6, base excess minus 7, fibrinogen 1.8 and ionised calcium 1.04; eFAST is repeatedly negative. A binder is correctly placed, major haemorrhage protocol and tranexamic acid are underway, and warmed balanced components have started. He has deteriorated to pulse 142, pressure 82/48 and drowsiness. He is going directly for definitive pelvic haemorrhage control without CT." }]
            },
            {
              id: "c015-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "National Blood Authority",
        title: "Patient blood management guideline for adults with critical bleeding",
        date: "Version 2.0, September 2025",
        url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding"
      },
      {
        organisation: "Agency for Clinical Innovation, NSW",
        title: "Traumatic haemorrhagic shock",
        date: "Current NSW trauma resource accessed July 2026",
        url: "https://aci.health.nsw.gov.au/networks/trauma/resources/traumatic-haemorrhagic-shock"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Traumatic haemorrhagic shock",
        date: "September 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308753/CPG_Traumatic-haemorrhagic-shock.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Pelvic injury",
        date: "February 2021, listed in the current manual July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0019/219142/cpg_pelvic-injury.pdf"
      }
    ]
  });
})();
