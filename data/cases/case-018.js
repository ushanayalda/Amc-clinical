(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-018",
    globalId: "CP-C018",
    registryId: "CP-P6-C001",
    displayNumber: "Case 18",
    title: "Dark vomit and black bowel motions",
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
          id: "c018-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c018-stem-patient",
          text: "Ms Fern Delaney, a 63-year-old woman, has presented after two episodes of dark vomit today and black bowel motions since yesterday. She reports upper abdominal discomfort and light-headedness."
        },
        {
          id: "c018-stem-start",
          text: "Fern is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c018-task-assess",
          text: "Obtain a focused history and assess Fern's current condition.",
          timing: "3 minutes"
        },
        {
          id: "c018-task-interpret",
          text: "Interpret the findings and investigation results and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c018-task-explain",
          text: "Explain your assessment and management plan to Fern.",
          timing: "1 minute"
        },
        {
          id: "c018-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c018-run-assessment",
          heading: "Focused assessment and early management",
          turns: [
            {
              id: "c018-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-start", text: "You may begin." }]
            },
            {
              id: "c018-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c018-run-first-action", text: "The doctor performs hand hygiene and approaches Fern." }]
            },
            {
              id: "c018-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-intro", text: "Hello Fern, I am Ushana, one of the emergency doctors. Can you confirm your full name? I will assess and treat you while we talk. Is that okay?" }]
            },
            {
              id: "c018-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-intro-answer", text: "Fern Delaney. Yes. I feel faint whenever I sit up." }]
            },
            {
              id: "c018-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-primary", text: "I assess airway, breathing, circulation, conscious state and exposure. Keep Fern fasting, position her safely and have suction ready. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check glucose, temperature and perfusion, and examine the abdomen. Please provide the findings." }]
            },
            {
              id: "c018-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c018-run-primary-findings", text: "Airway is patent with no current vomiting. Respiratory rate is 22, oxygen saturation 96% on room air and lungs are clear. Pulse is 116, blood pressure 104/66 and capillary refill three seconds. Fern is pale, cool and alert. Glucose is 6.2 mmol/L and temperature 36.5 degrees Celsius. There is mild epigastric tenderness without guarding, a mass or stigmata of chronic liver disease." }]
            },
            {
              id: "c018-turn-access",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-access", text: "She has impaired perfusion with probable gastrointestinal blood loss. Call the senior emergency doctor and gastroenterology team. Insert two large-bore intravenous cannulas, use small reassessed boluses of warmed crystalloid while blood is prepared, keep her warm and measure urine output." }]
            },
            {
              id: "c018-turn-access-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c018-run-access-action", text: "Monitoring is established, two intravenous cannulas are inserted and warmed fluid is commenced while blood is prepared." }]
            },
            {
              id: "c018-turn-history-bleeding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-history-bleeding", text: "Fern, what did the vomit and bowel motions look like? How often has this happened? Any fainting, fresh blood, severe pain, swallowing difficulty or weight loss?" }]
            },
            {
              id: "c018-turn-history-bleeding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-history-bleeding-answer", text: "The vomit looked like dark coffee grounds. I have had three sticky black motions. I nearly fainted in the bathroom. I have a burning pain high in my stomach but no severe pain, trouble swallowing or weight loss." }]
            },
            {
              id: "c018-turn-history-risk",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-history-risk", text: "Any previous ulcer or bleeding? Any liver disease or heavy alcohol use? What medicines have you taken, including painkillers, aspirin, steroids or blood thinners? Any allergies or other conditions?" }]
            },
            {
              id: "c018-turn-history-risk-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-history-risk-answer", text: "No previous bleeding or liver problem. I rarely drink. I started naproxen twice daily three weeks ago for knee pain. I take amlodipine for blood pressure, no aspirin or blood thinner, and I have no allergies or heart disease." }]
            }
          ]
        },
        {
          id: "c018-run-investigation",
          heading: "Investigation, deterioration and resuscitation",
          turns: [
            {
              id: "c018-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-investigations", text: "Send full blood count, group and crossmatch, blood gas with lactate, electrolytes, renal and liver function, coagulation studies, fibrinogen and ionised calcium. Obtain an ECG and repeat key results with her clinical course. What are the results?" }]
            },
            {
              id: "c018-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c018-run-results", text: "Haemoglobin is 121 g/L, platelets 238, urea 15.8 mmol/L, creatinine 102 micromol/L, lactate 3.9 mmol/L, base excess minus 5 and ionised calcium 1.10 mmol/L. INR is 1.1 and fibrinogen 2.5 g/L. Liver tests and ECG show no significant abnormality. Crossmatched blood is being prepared." }]
            },
            {
              id: "c018-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-interpretation", text: "This suggests an acute non-variceal upper gastrointestinal bleed, probably a naproxen-related peptic ulcer. The first haemoglobin may remain near normal before fluid redistribution and does not override poor perfusion, raised urea and lactate. Stop naproxen and consider high-dose intravenous proton-pump inhibitor treatment without delaying endoscopy." }]
            },
            {
              id: "c018-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c018-run-deterioration", text: "Fern vomits about 250 millilitres of fresh blood. She remains able to protect her airway. Pulse is now 132, blood pressure 82/48 and capillary refill five seconds." }]
            },
            {
              id: "c018-turn-critical",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-critical", text: "Activate the local major-haemorrhage protocol and request anaesthetic support. Continue suction and reassess her airway. Intubation is selective for impaired airway protection or severe ongoing haematemesis. Give warmed blood components guided by her response and repeated coagulation, fibrinogen, calcium, temperature and blood-gas results. Avoid excessive crystalloid. Do not give tranexamic acid routinely." }]
            },
            {
              id: "c018-turn-transfusion-logic",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-transfusion-logic", text: "Her active bleeding is treated from physiology; I will not wait for haemoglobin to fall. Once stable, use a restrictive red-cell strategy, generally below 70 g/L and targeting 70 to 90 without cardiovascular disease, individualised higher when cardiovascular disease is present." }]
            },
            {
              id: "c018-turn-resuscitation-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c018-run-resuscitation-action", text: "The major-haemorrhage protocol is activated. Warmed blood components commence while airway equipment and the endoscopy team are prepared." }]
            }
          ]
        },
        {
          id: "c018-run-source-control",
          heading: "Endoscopic haemostasis and rebleeding plan",
          turns: [
            {
              id: "c018-turn-scope-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-scope-plan", text: "Endoscopy follows haemodynamic resuscitation and should occur within 24 hours. Fern's continuing instability despite adequate resuscitation requires expedited source control with gastroenterology and anaesthetics. Consider intravenous erythromycin for severe ongoing bleeding. Do not delay for nasogastric lavage." }]
            },
            {
              id: "c018-turn-scope-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c018-run-scope-result", text: "After initial blood resuscitation her pressure improves to 102/64. Endoscopy shows an actively oozing duodenal ulcer with a visible vessel." }]
            },
            {
              id: "c018-turn-haemostasis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-haemostasis", text: "Use combined endoscopic haemostasis, such as dilute adrenaline plus a clip or thermal therapy. Adrenaline injection must not be used alone. Continue high-dose proton-pump inhibitor treatment for 72 hours, test for Helicobacter pylori and confirm eradication after treatment." }]
            },
            {
              id: "c018-turn-rebleed",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-rebleed", text: "Monitor for recurrent bleeding. If she rebleeds, repeat endoscopy and consider an over-the-scope clip. If endoscopic haemostasis fails, proceed to transcatheter arterial embolisation, then surgery if embolisation is unavailable or unsuccessful." }]
            },
            {
              id: "c018-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c018-run-patient-question", text: "Was this caused by the naproxen? Am I going to be all right?" }]
            },
            {
              id: "c018-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-patient-answer", text: "Naproxen can damage the stomach or duodenal lining and probably contributed to this bleeding ulcer. We are replacing the blood you lost and will treat the bleeding point through a camera procedure. You are responding, but bleeding can recur, so we will watch you closely." }]
            },
            {
              id: "c018-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-time", text: "Please explain your assessment and management plan to Fern." }]
            }
          ]
        },
        {
          id: "c018-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c018-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-explanation", text: "Fern, the dark vomit and black motions came from bleeding high in the digestive tract. Your circulation then worsened, so we started urgent blood replacement while protecting your airway." }]
            },
            {
              id: "c018-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c018-run-plan", text: "The camera test found a bleeding ulcer, which will be treated during the procedure. Naproxen has been stopped. You will receive acid suppression, close monitoring and testing for a stomach infection. If bleeding returns, we can repeat treatment and escalate if needed." }]
            },
            {
              id: "c018-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-handover-prompt", text: "Please finish with a concise handover to the senior clinician." }]
            },
            {
              id: "c018-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c018-run-handover", text: "Fern Delaney is 63 with coffee-ground emesis, melaena and recent naproxen use. She deteriorated after 250 millilitres of fresh haematemesis to pulse 132 and pressure 82/48. Her airway remains protected with suction ready. Two large-bore lines, warming and major-haemorrhage protocol blood are underway. After initial resuscitation, endoscopy showed an actively oozing duodenal ulcer with a visible vessel requiring combined haemostasis, followed by high-dose proton-pump inhibitor treatment and rebleeding surveillance." }]
            },
            {
              id: "c018-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c018-run-end", text: "Thank you. The station is complete." }]
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
        organisation: "European Society of Gastrointestinal Endoscopy",
        title: "Peptic ulcer bleeding guideline update",
        date: "May 2026",
        url: "https://doi.org/10.1055/a-2863-8314"
      }
    ]
  });
})();
