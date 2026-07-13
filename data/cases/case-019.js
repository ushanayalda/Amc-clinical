(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-019",
    globalId: "CP-C019",
    registryId: "CP-P6-C002",
    displayNumber: "Case 19",
    title: "Vomiting blood twice in one evening",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 6, title: "Unstable Gastrointestinal Bleed" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c019-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c019-stem-patient",
          text: "Mr Sami Brennan, a 55-year-old man, has vomited blood twice this evening. His sister, Mira, is present."
        },
        {
          id: "c019-stem-start",
          text: "Sami is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c019-task-history",
          text: "Take a focused history from Sami and Mira.",
          timing: "2 minutes"
        },
        {
          id: "c019-task-assess",
          text: "Assess Sami, interpret the information provided and discuss your management.",
          timing: "4 minutes"
        },
        {
          id: "c019-task-explain",
          text: "Explain your assessment and plan to Sami and Mira.",
          timing: "1 minute"
        },
        {
          id: "c019-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c019-run-assessment",
          heading: "Focused history and primary assessment",
          turns: [
            {
              id: "c019-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c019-run-start", text: "You may begin." }]
            },
            {
              id: "c019-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-first-action", text: "The doctor performs hand hygiene, applies appropriate protective equipment and approaches Sami. Suction is immediately available." }]
            },
            {
              id: "c019-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-intro", text: "Hello Sami, I am Ushana, one of the emergency doctors. Can you confirm your full name? Are you comfortable speaking with Mira here while I assess and treat you?" }]
            },
            {
              id: "c019-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-consent", text: "Sami Brennan. Yes, please let her stay." }]
            },
            {
              id: "c019-turn-bleeding-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-bleeding-history", text: "Tell me what happened. Was the blood bright or dark, about how much was there, and have you had black bowel motions, fainting, chest pain or abdominal pain?" }]
            },
            {
              id: "c019-turn-bleeding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-bleeding-answer", text: "Both times it was bright red with clots, nearly a cup each time. My stools have been black since yesterday. I felt close to fainting when I stood up. There is no chest or stomach pain." }]
            },
            {
              id: "c019-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check glucose and temperature. Examine for pallor, chronic liver disease, abdominal tenderness and ascites, and inspect any vomit or stool. Please provide the findings." }]
            },
            {
              id: "c019-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c019-run-primary-findings", text: "His airway is clear with no current vomiting. Respiratory rate is 22, oxygen saturation 96% on room air and lungs are clear. Pulse is 116, blood pressure 94/58 and capillary refill three seconds. He is pale, cool and jaundiced. Temperature is 36.1 degrees Celsius, glucose 6.2 mmol/L and GCS 15. His abdomen is distended with shifting dullness, without tenderness or guarding. There are spider naevi, palmar erythema and ankle oedema. The bedpan contains melaena." }]
            },
            {
              id: "c019-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-recognition", text: "This is a significant upper gastrointestinal bleed with impaired circulation and advanced chronic liver disease. I call the senior emergency doctor and request anaesthetic, intensive-care, gastroenterology and hepatology support." }]
            },
            {
              id: "c019-turn-access-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-access-tests", text: "Keep Sami fasting, establish two large-bore intravenous lines and take a blood gas with lactate, full blood count, group and crossmatch, renal and liver function, coagulation studies, fibrinogen and calcium. Begin small reassessed boluses of warmed crystalloid while blood is prepared, and give warmed red cells as soon as available. Sami, a urinary catheter will help monitor your circulation. With privacy and a chaperone, may we insert one?" }]
            },
            {
              id: "c019-turn-catheter-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-catheter-consent", text: "Yes." }]
            },
            {
              id: "c019-turn-access-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-access-action", text: "Monitoring, intravenous access and warming are established. A small warmed crystalloid bolus begins while red cells are prepared. A urinary catheter is inserted with privacy and a chaperone." }]
            },
            {
              id: "c019-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-background", text: "Sami, have you been diagnosed with liver disease, enlarged veins in the oesophagus, ulcers or previous bleeding? What medicines do you take, including anti-inflammatory tablets, aspirin or blood thinners? Any allergies, recent alcohol use or infection symptoms?" }]
            },
            {
              id: "c019-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-background-answer", text: "I have cirrhosis from alcohol and had veins banded about eighteen months ago. I take carvedilol, fluid tablets and lactulose, but I missed some doses. No aspirin, ibuprofen or blood thinners. I have not drunk for eight months and have no allergies or fever." }]
            },
            {
              id: "c019-turn-sister-history",
              speaker: "Sister",
              kind: "spoken",
              lines: [{ id: "c019-run-sister-history", text: "He has been slower and a little muddled today. His stomach and legs have also become more swollen this week." }]
            }
          ]
        },
        {
          id: "c019-run-treatment",
          heading: "Resuscitation and cause-directed treatment",
          turns: [
            {
              id: "c019-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c019-run-results", text: "Haemoglobin is 73 g/L, platelets 58, INR 2.0 and fibrinogen 1.3 g/L. Urea is 16 mmol/L, creatinine 136 micromol/L, bilirubin 82 micromol/L, albumin 22 g/L and lactate 5.1 mmol/L. Crossmatched blood is being prepared." }]
            },
            {
              id: "c019-turn-blood-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-blood-plan", text: "Activate the local critical-bleeding protocol and give warmed red cells without waiting for another haemoglobin. Reassess perfusion, haemoglobin, calcium, fibrinogen, coagulation and temperature. Avoid overtransfusion; once stable, aim for haemoglobin 70 to 90. Do not give fresh frozen plasma solely to correct the cirrhotic INR. Do not give platelets routinely. Individualise haemostatic components with haematology and transfusion specialists using active bleeding, local protocol and available viscoelastic results. Do not give tranexamic acid routinely." }]
            },
            {
              id: "c019-turn-variceal-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-variceal-plan", text: "Variceal bleeding is likely, although other upper gastrointestinal causes remain possible. Start terlipressin, or the local vasoactive alternative, and ceftriaxone now without waiting for endoscopic proof. Hold carvedilol and diuretics while he is hypotensive. Consider intravenous erythromycin before endoscopy. Arrange endoscopy within 12 hours of presentation after haemodynamic resuscitation." }]
            },
            {
              id: "c019-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-treatment-action", text: "Warmed red cells, terlipressin and ceftriaxone are commenced. The endoscopy team prepares for the procedure." }]
            },
            {
              id: "c019-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c019-run-patient-question", text: "Is this definitely those veins again?" }]
            },
            {
              id: "c019-turn-patient-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-patient-explanation", text: "They are the leading possibility because cirrhosis raises pressure in veins around the oesophagus, but the camera test must confirm the source. Meanwhile, we are replacing blood, lowering that pressure and preventing infection." }]
            },
            {
              id: "c019-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c019-run-deterioration", text: "Sami suddenly vomits about 400 millilitres of fresh blood. He becomes drowsy and disoriented, develops asterixis, makes gurgling sounds and no longer follows instructions consistently. GCS is 13, oxygen saturation 90%, pulse 126 and blood pressure 78/46." }]
            },
            {
              id: "c019-turn-airway",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-airway", text: "His airway is now unsafe because of active haematemesis and reduced consciousness. Use suction, high-flow oxygen and lateral positioning while the senior anaesthetist performs controlled rapid-sequence intubation. Continue critical-bleeding and vasoactive treatment. He now requires intubation before endoscopy." }]
            },
            {
              id: "c019-turn-post-airway",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c019-run-post-airway", text: "Sami is intubated by the anaesthetic team without aspiration. After further warmed red cells, blood pressure is 102/64, pulse 104 and lactate 3.8 mmol/L. He proceeds to endoscopy." }]
            },
            {
              id: "c019-turn-endoscopy-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-endoscopy-request", text: "Please provide the endoscopy findings and current liver-risk assessment." }]
            },
            {
              id: "c019-turn-endoscopy-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c019-run-endoscopy-result", text: "Endoscopy shows large oesophageal varices with active bleeding. Endoscopic band ligation controls the bleeding. His Child-Pugh score is 12, class C." }]
            },
            {
              id: "c019-turn-definitive-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-definitive-plan", text: "Continue vasoactive therapy for up to five days and ceftriaxone for up to seven. Because he is Child-Pugh C with active bleeding, discuss pre-emptive TIPS within 72 hours, preferably within 24 hours. If bleeding becomes uncontrolled, use a self-expanding metal stent in the oesophagus, or experienced balloon tamponade if unavailable, as a bridge to rescue TIPS." }]
            },
            {
              id: "c019-turn-sister-question",
              speaker: "Sister",
              kind: "spoken",
              lines: [{ id: "c019-run-sister-question", text: "Is he going to survive this?" }]
            },
            {
              id: "c019-turn-sister-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c019-run-sister-explanation", text: "This is life-threatening, but banding has stopped the bleeding and his circulation has improved. He is on a breathing machine for safety. Intensive care and the liver team will watch him closely and assess a shunt procedure to reduce further bleeding." }]
            },
            {
              id: "c019-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c019-run-time", text: "Please provide your handover." }]
            }
          ]
        },
        {
          id: "c019-run-handover-section",
          heading: "Clinical handover",
          turns: [
            {
              id: "c019-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c019-run-handover", text: "Sami Brennan is 55 with alcohol-related cirrhosis, previous variceal banding and acute haematemesis with melaena. He deteriorated after a further 400-millilitre haematemesis to GCS 13 and pressure 78/46, requiring intubation by the anaesthetic team. Critical-bleeding treatment, warmed red cells, terlipressin and ceftriaxone are running. Endoscopy found active oesophageal variceal bleeding, controlled by band ligation. He is now 102/64. As Child-Pugh C12, he is being assessed for pre-emptive TIPS, with rescue TIPS and a temporary bridge planned if bleeding recurs uncontrollably." }]
            },
            {
              id: "c019-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c019-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "European Society of Gastrointestinal Endoscopy",
        title: "Endoscopic diagnosis and management of esophagogastric variceal hemorrhage: ESGE Guideline",
        date: "2022",
        url: "https://doi.org/10.1055/a-1939-4887"
      },
      {
        organisation: "National Blood Authority Australia",
        title: "Patient blood management guideline for adults with critical bleeding",
        date: "Version 2.0, updated September 2025",
        url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding"
      },
      {
        organisation: "Baveno VII Faculty",
        title: "Baveno VII: Renewing consensus in portal hypertension",
        date: "2022",
        url: "https://doi.org/10.1016/j.jhep.2021.12.022"
      }
    ]
  });
})();
