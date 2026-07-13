(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-029",
    globalId: "CP-C029",
    registryId: "CP-P9-C003",
    displayNumber: "Case 29",
    title: "Upper abdominal pain that has spread",
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
          id: "c029-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c029-stem-patient",
          text: "Ms Inez Calder, a 48-year-old woman, has presented with upper abdominal pain that began this morning and has become more widespread."
        },
        {
          id: "c029-stem-context",
          text: "The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c029-task-history",
          text: "Take a focused history from Inez.",
          timing: "2 minutes"
        },
        {
          id: "c029-task-assess",
          text: "Perform a focused assessment and interpret the information provided.",
          timing: "3 minutes"
        },
        {
          id: "c029-task-explain",
          text: "Explain your assessment and management plan to Inez.",
          timing: "2 minutes"
        },
        {
          id: "c029-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c029-run-history",
          heading: "Focused history and initial assessment",
          turns: [
            {
              id: "c029-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-start", text: "You may begin." }]
            },
            {
              id: "c029-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c029-run-first-action", text: "The doctor performs hand hygiene and approaches Inez." }]
            },
            {
              id: "c029-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-intro", text: "Hello, I am Ushana, an emergency doctor. Please confirm your full name. May I ask about your pain and examine you?" }]
            },
            {
              id: "c029-turn-consent",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-consent", text: "Inez Calder. Yes. It began high up this morning, but now my whole abdomen hurts." }]
            },
            {
              id: "c029-turn-pain-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-pain-question", text: "Did it start suddenly or gradually? Where, how severe, and how has it changed? Do movement or coughing affect it?" }]
            },
            {
              id: "c029-turn-pain-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-pain-answer", text: "It struck suddenly in the pit of my stomach during breakfast, like a knife. Over hours it spread everywhere. It is constant, nine out of ten, and movement hurts." }]
            },
            {
              id: "c029-turn-associated-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-associated-question", text: "Any vomiting, blood, black stool, swelling, bowel or urinary change, fever, faintness, chest pain, vaginal bleeding or chance of pregnancy?" }]
            },
            {
              id: "c029-turn-associated-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-associated-answer", text: "I vomited twice without blood and feel feverish, faint and swollen. No black stool, bowel or urinary change, chest pain or bleeding. My period was two weeks ago and pregnancy is unlikely." }]
            },
            {
              id: "c029-turn-background-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-background-question", text: "Any indigestion, ulcer, Helicobacter pylori, gallstones or surgery? What medicines, including anti-inflammatories, allergies, smoking or alcohol?" }]
            },
            {
              id: "c029-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-background-answer", text: "I have indigestion but no diagnosed ulcer or Helicobacter. I have taken daily naproxen for knee pain for three weeks. I smoke ten cigarettes daily, rarely drink and have no surgery or allergies." }]
            },
            {
              id: "c029-turn-examination-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-examination-request", text: "I assess airway, breathing, circulation and conscious state, record observations and glucose, then inspect, listen, percuss and gently palpate the abdomen. Please provide the findings." }]
            },
            {
              id: "c029-turn-initial-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c029-run-initial-findings", text: "Airway is patent. Inez is alert and distressed. Respiratory rate 24, saturation 97% on air, pulse 108, blood pressure 102/66, temperature 38.1 degrees Celsius and glucose 6.8 mmol/L. Her abdomen is mildly distended with marked epigastric tenderness, guarding and quiet sounds. Tenderness is spreading without rigidity. There is no mass or hernia." }]
            },
            {
              id: "c029-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-interpretation", text: "Sudden epigastric pain, naproxen exposure, dyspepsia, fever and evolving peritonism suggest a perforated peptic ulcer with intra-abdominal sepsis. Alternatives include pancreatitis, biliary disease and another perforated viscus." }]
            }
          ]
        },
        {
          id: "c029-run-management",
          heading: "Resuscitation, results and serial reassessment",
          turns: [
            {
              id: "c029-turn-escalation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-escalation", text: "Move Inez to resuscitation. Call senior emergency, surgical, anaesthetic and intensive care clinicians now. Continue ABC, cardiac, blood pressure and saturation monitoring, and insert two large-bore intravenous cannulas. Give oxygen if hypoxaemic." }]
            },
            {
              id: "c029-turn-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-tests", text: "Send FBC, U&E, LFTs, lipase, coagulation, VBG, lactate, glucose, pregnancy test, group and crossmatch. Take blood cultures unless they delay antibiotics. Keep her nil by mouth and, with consent, catheterise for hourly urine output." }]
            },
            {
              id: "c029-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-treatment", text: "Give titrated intravenous analgesia and antiemetic. Start small balanced-crystalloid boluses, reassessing each. Give broad-spectrum intravenous antibiotics now per local protocol, covering gram-positive, gram-negative and anaerobic organisms, plus intravenous proton-pump inhibitor. Routine empirical antifungal treatment is not indicated." }]
            },
            {
              id: "c029-turn-investigation-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-investigation-request", text: "Arrange an ECG and CT abdomen and pelvis with intravenous contrast now, and review the initial erect chest X-ray while treatment continues. Please provide available results." }]
            },
            {
              id: "c029-turn-investigation-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c029-run-investigation-results", text: "ECG shows sinus tachycardia. White-cell count is 17.8 x 10^9/L, haemoglobin 128 g/L, creatinine 112 micromol/L, venous pH 7.31 and lactate 3.6 mmol/L. Liver tests and lipase are normal, pregnancy test negative and blood crossmatched. Erect chest X-ray shows no visible free gas." }]
            },
            {
              id: "c029-turn-film-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-film-interpretation", text: "The negative X-ray does not exclude perforation or overrule peritonism. Proceed with CT only if it cannot delay very urgent surgery. Surgical review proceeds now." }]
            },
            {
              id: "c029-turn-deterioration",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-deterioration", text: "The pain is everywhere. I feel cold and dizzy." }]
            },
            {
              id: "c029-turn-reassessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-reassessment", text: "I repeat ABC, conscious state, abdominal examination, capillary refill, urine output, VBG and lactate." }]
            },
            {
              id: "c029-turn-serial-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c029-run-serial-findings", text: "After initial crystalloid, pulse is 124, blood pressure 86/52, respiratory rate 28, temperature 38.5 degrees Celsius and capillary refill four seconds. Peripheries are cool, urine output absent and lactate 5.1 mmol/L. Her abdomen is now rigid with generalised guarding and rebound." }]
            },
            {
              id: "c029-turn-shock-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-shock-plan", text: "This is shock from intra-abdominal sepsis with generalised peritonitis. Critical care starts noradrenaline now, targeting MAP at least 65 mmHg and perfusion. Individualise further small crystalloid boluses with reassessment. Do not wait for CT. She needs washout and repair, not antibiotics alone, for source control as soon as possible and within three hours in septic shock." }]
            }
          ]
        },
        {
          id: "c029-run-communication",
          heading: "Explanation, consent, teach-back and handover",
          turns: [
            {
              id: "c029-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-explanation-prompt", text: "Please explain your assessment and plan to Inez." }]
            },
            {
              id: "c029-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-explanation", text: "Inez, I am concerned an ulcer has made a hole in your stomach or bowel. Leakage is contaminating your abdomen and affecting your circulation. We are treating pain, infection and blood pressure while surgical and anaesthetic teams prepare emergency surgery." }]
            },
            {
              id: "c029-turn-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-concern", text: "If the X-ray was normal, could we wait for CT or see whether antibiotics work?" }]
            },
            {
              id: "c029-turn-concern-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-concern-response", text: "X-rays can miss perforation. A rigid abdomen and falling pressure make waiting dangerous. CT helps only if it does not delay surgery. Antibiotics cannot close the hole or clear contamination. The surgeon will discuss the urgent operation, risks and consent." }]
            },
            {
              id: "c029-turn-ng-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-ng-consent", text: "Because you are vomiting and distended, a soft tube through your nose can drain the stomach and reduce vomiting. It can be uncomfortable. May we insert it?" }]
            },
            {
              id: "c029-turn-ng-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-ng-answer", text: "Yes. Please do what is needed." }]
            },
            {
              id: "c029-turn-follow-up",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c029-run-follow-up", text: "After recovery we will test for Helicobacter pylori, treat it if present, stop naproxen and discuss safer analgesia and smoking support. Why should we not wait for another scan?" }]
            },
            {
              id: "c029-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c029-run-teachback-answer", text: "X-ray can miss a hole. My abdomen and pressure are worsening, so I need urgent surgery rather than waiting for CT or antibiotics." }]
            },
            {
              id: "c029-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-handover-prompt", text: "Please finish with a concise handover to the surgical team." }]
            },
            {
              id: "c029-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c029-run-handover", text: "Inez Calder is 48 with sudden epigastric pain now generalised, vomiting and fever after daily naproxen. Initially pulse 108, blood pressure 102/66 with epigastric guarding. White-cell count 17.8; lactate rose from 3.6 to 5.1. Initial erect chest X-ray shows no free gas but cannot exclude perforation. After initial crystalloid she is 124, 86/52, cool and anuric, with rigid generalised peritonitis. I suspect perforated peptic ulcer causing intra-abdominal sepsis and shock. She is monitored and nil by mouth, with two IVs, crossmatch, antibiotics, PPI, analgesia and antiemetic. Surgery, anaesthesia and intensive care are present; noradrenaline is starting. CT must not delay immediate washout and repair, with source control as soon as possible and within three hours." }]
            },
            {
              id: "c029-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c029-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Emergency Laparotomy Clinical Care Standard",
        date: "2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/emergency-laparotomy"
      },
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Sepsis Clinical Care Standard",
        date: "Current July 2026",
        url: "https://www.safetyandquality.gov.au/clinical-care-standards/sepsis"
      },
      {
        organisation: "World Society of Emergency Surgery",
        title: "Perforated and bleeding peptic ulcer: WSES guidelines",
        date: "2020",
        url: "https://link.springer.com/article/10.1186/s13017-019-0283-9"
      }
    ]
  });
})();
