(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-020",
    globalId: "CP-C020",
    registryId: "CP-P6-C003",
    displayNumber: "Case 20",
    title: "Repeated red bowel motions",
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
          id: "c020-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c020-stem-patient",
          text: "Mrs Alma Rios, a 78-year-old woman, has passed red bowel motions several times since this morning. Her daughter, Nessa, is present."
        },
        {
          id: "c020-stem-start",
          text: "Alma is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c020-task-history",
          text: "Take a focused history from Alma and Nessa.",
          timing: "2 minutes"
        },
        {
          id: "c020-task-assess",
          text: "Assess Alma, interpret the information provided and discuss your management.",
          timing: "4 minutes"
        },
        {
          id: "c020-task-explain",
          text: "Explain your assessment and plan to Alma and Nessa.",
          timing: "1 minute"
        },
        {
          id: "c020-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c020-run-history",
          heading: "Focused history and assessment",
          turns: [
            {
              id: "c020-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-start", text: "You may begin." }]
            },
            {
              id: "c020-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c020-run-first-action", text: "The doctor performs hand hygiene and approaches Alma." }]
            },
            {
              id: "c020-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-intro", text: "Hello Alma, I am Ushana, one of the emergency doctors. Can you confirm your full name? Is it okay for Nessa to stay and help with the history while I assess you?" }]
            },
            {
              id: "c020-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-consent-answer", text: "Alma Rios. Yes, please let her stay. I feel faint." }]
            },
            {
              id: "c020-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-primary-request", text: "I assess airway, breathing, circulation, conscious state and exposure. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check capillary refill, temperature and glucose. Examine the heart, lungs and abdomen, and inspect for continuing bleeding. Please provide the findings." }]
            },
            {
              id: "c020-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c020-run-primary-findings", text: "Airway is patent. Respiratory rate is 24, oxygen saturation 96% on room air and lungs are clear. Pulse is 122 and irregular, blood pressure 84/48 mmHg and capillary refill four seconds. Alma is pale, cool and orientated. Temperature is 36.1 degrees Celsius and glucose 6.8 mmol/L. The abdomen is soft and non-tender. Dark red blood and clot are on the bed pad." }]
            },
            {
              id: "c020-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-recognition", text: "This is major gastrointestinal bleeding with impaired circulation. Call the senior emergency doctor. Activate the local major haemorrhage protocol now, with early anaesthetic, interventional radiology and gastroenterology involvement. Keep Alma fasting, flat and warm." }]
            },
            {
              id: "c020-turn-access-tests",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-access-tests", text: "Insert two large-bore intravenous cannulas. Send a blood gas with lactate, full blood count, group and crossmatch, coagulation studies, fibrinogen, renal and liver function and ionised calcium. Record urine output. Treatment follows her physiology, not the first haemoglobin." }]
            },
            {
              id: "c020-turn-resuscitation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-resuscitation-plan", text: "Start warmed blood components under the local protocol, moving to group-specific products when available. Avoid large crystalloid volumes. Reassess circulation, lungs and observations after each pack, and repeat haemoglobin, lactate, coagulation, fibrinogen, calcium and temperature to guide treatment." }]
            },
            {
              id: "c020-turn-action-resuscitation",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c020-run-action-resuscitation", text: "Two large-bore intravenous lines are secured, blood is collected, warming begins and the major haemorrhage protocol is activated. History continues during resuscitation." }]
            },
            {
              id: "c020-turn-bleeding-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-bleeding-history", text: "While treatment starts, when did the bleeding begin? How many motions, and was the blood bright or dark, mixed with stool or separate? Any clots, black stool, vomiting blood or abdominal pain?" }]
            },
            {
              id: "c020-turn-bleeding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-bleeding-answer", text: "It began after breakfast. I have been six times. The bowl fills with dark red blood and clots, with hardly any stool. There is no pain, black stool or vomiting." }]
            },
            {
              id: "c020-turn-impact-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-impact-history", text: "Have you fainted, had chest discomfort or breathlessness, or passed less urine? Any previous bleeding, bowel change, weight loss, bowel disease, ulcers, liver disease or recent procedure?" }]
            },
            {
              id: "c020-turn-impact-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-impact-answer", text: "I nearly blacked out and my heart is racing. I have not passed urine since early morning. No previous bleeding, bowel change or weight loss. A colonoscopy five years ago showed diverticular pockets. No ulcers or liver disease." }]
            },
            {
              id: "c020-turn-medication-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-medication-history", text: "What conditions and medicines do you have? Do you take a blood thinner, aspirin or anti-inflammatory tablets? When was the last dose? Any allergies?" }]
            },
            {
              id: "c020-turn-medication-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-medication-answer", text: "I have atrial fibrillation, high blood pressure and kidney trouble. I take apixaban and irbesartan. I have no allergies." }]
            },
            {
              id: "c020-turn-daughter-history",
              speaker: "Daughter",
              kind: "spoken",
              lines: [{ id: "c020-run-daughter-history", text: "Mum takes apixaban five milligrams twice daily. Her last dose was at seven this morning. She does not take aspirin or anti-inflammatory tablets." }]
            }
          ]
        },
        {
          id: "c020-run-resuscitation",
          heading: "Resuscitation, localisation and haemostasis",
          turns: [
            {
              id: "c020-turn-initial-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c020-run-initial-results", text: "Haemoglobin is 111 g/L, lactate 5.2 mmol/L, pH 7.30, urea 16 mmol/L, creatinine 146 micromol/L, estimated GFR 32 mL/minute and ionised calcium 1.06 mmol/L. Blood components are running. Alma passes another large volume of red blood and clots. Blood pressure is 88/52 mmHg and pulse 118." }]
            },
            {
              id: "c020-turn-anticoagulation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-anticoagulation", text: "The first haemoglobin does not measure the full acute loss. Withhold apixaban. For ongoing life-threatening bleeding after a recent dose, seek haematology-led use of the locally available specific factor Xa reversal agent or four-factor prothrombin complex concentrate. Do not use tranexamic acid routinely." }]
            },
            {
              id: "c020-turn-source-thinking",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-source-thinking", text: "Diverticular bleeding or angiodysplasia are possible, but malignancy and colitis remain. Brisk upper gastrointestinal bleeding can also present as red bowel motions, so an upper source remains possible." }]
            },
            {
              id: "c020-turn-cta-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-cta-plan", text: "With resuscitation underway, ongoing bleeding and instability requires CT angiography before colonoscopy to locate the source and guide haemostasis. Continue monitored treatment during transfer. If no lower source is found, assess promptly for upper endoscopy." }]
            },
            {
              id: "c020-turn-cta-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c020-run-cta-result", text: "CT angiography shows active contrast extravasation from a branch supplying the sigmoid colon, with no other bleeding source identified." }]
            },
            {
              id: "c020-turn-definitive",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-definitive", text: "Proceed to selective angiography and superselective embolisation within 60 minutes where feasible, while continuing blood replacement and reversal. After stabilisation, gastroenterology should perform a properly bowel-prepared colonoscopy. Involve colorectal surgery early, but operate only if endoscopic and radiological control fails, with the site localised when possible." }]
            },
            {
              id: "c020-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c020-run-patient-question", text: "Is this because of my blood thinner? Am I going to need an operation?" }]
            },
            {
              id: "c020-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-patient-answer", text: "The blood thinner may worsen bleeding but may not be its original cause. We are reversing its effect. The scan found a vessel that radiology can usually seal from inside the artery. Surgery is a backup if that fails." }]
            }
          ]
        },
        {
          id: "c020-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c020-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-explanation-prompt", text: "Please explain your assessment and plan to Alma and Nessa." }]
            },
            {
              id: "c020-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c020-run-explanation", text: "Alma and Nessa, she has lost enough blood to affect her circulation. We are replacing it and reversing apixaban. The scan located a bleeding bowel vessel, which radiology will now seal. We will monitor her closely and investigate the cause once she is stable." }]
            },
            {
              id: "c020-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c020-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c020-run-handover", text: "Alma Rios is 78 with six painless large-volume haematochezia episodes, near-syncope and oliguria. She takes apixaban for atrial fibrillation, last dose seven this morning. She is pale and cool, pulse 122 irregular, pressure 84/48 and lactate 5.2, with ongoing bleeding. The major haemorrhage protocol is active, apixaban is withheld and reversal is underway. CT angiography localised active sigmoid bleeding; interventional radiology is proceeding to superselective embolisation." }]
            },
            {
              id: "c020-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c020-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "European Society of Gastrointestinal Endoscopy",
        title: "Diagnosis and management of acute lower gastrointestinal bleeding: ESGE Guideline",
        date: "2021",
        url: "https://doi.org/10.1055/a-1496-8969"
      },
      {
        organisation: "National Blood Authority",
        title: "Patient blood management guideline for adults with critical bleeding",
        date: "Version 2.0, September 2025",
        url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding"
      }
    ]
  });
})();
