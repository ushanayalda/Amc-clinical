(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-041",
    globalId: "CP-C041",
    registryId: "CP-P13-C001",
    displayNumber: "Case 41",
    title: "Chest tightness when walking uphill",
    status: "exam_complete",
    statusLabel: "Exam Stem and Full Run complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 2, title: "Dangerous Mimics" },
    pattern: { id: 13, title: "Stable Chest Pain versus Unstable Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History Taking"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c041-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c041-stem-patient",
          text: "Ms Sabine Tran, a 58-year-old woman, has attended because of intermittent chest tightness over the past three months."
        },
        {
          id: "c041-stem-context",
          text: "The examiner will provide examination findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c041-task-history",
          text: "Take a focused history from Sabine.",
          timing: "3 minutes"
        },
        {
          id: "c041-task-assess",
          text: "Request a focused examination and interpret the information provided.",
          timing: "2 minutes"
        },
        {
          id: "c041-task-explain",
          text: "Explain your assessment and important differential diagnoses to Sabine.",
          timing: "1 minute"
        },
        {
          id: "c041-task-plan",
          text: "Discuss your investigation and management plan, including safety-net advice.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c041-run-history",
          heading: "Focused history and symptom trajectory",
          turns: [
            {
              id: "c041-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c041-run-start", text: "You may begin." }]
            },
            {
              id: "c041-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c041-run-first-action", text: "The doctor performs hand hygiene and sits facing Sabine." }]
            },
            {
              id: "c041-turn-introduction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-introduction", text: "Hello, I am Ushana, one of the doctors here. Could I confirm your full name and date of birth?" }]
            },
            {
              id: "c041-turn-identity",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-identity", text: "Sabine Tran, 9 September 1967." }]
            },
            {
              id: "c041-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-consent", text: "Thank you, Sabine. May I ask about the tightness, examine you and discuss what it may mean?" }]
            },
            {
              id: "c041-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-consent-answer", text: "Yes. My sister keeps telling me it could be my heart." }]
            },
            {
              id: "c041-turn-current-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-current-question", text: "Do you have tightness now? Tell me about the first and most recent episodes." }]
            },
            {
              id: "c041-turn-opening-story",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-opening-story", text: "Nothing now. Three months ago, hurrying up the hill caused a band-like central tightness. It happened there again yesterday and settled when I stopped." }]
            },
            {
              id: "c041-turn-pattern-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-pattern-question", text: "How often, what activity brings it on, how long does it last, and has that changed?" }]
            },
            {
              id: "c041-turn-pattern-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-pattern-answer", text: "Two or three times most weeks, after five minutes walking uphill or carrying groceries. It is four out of ten and stops within four minutes of rest. The trigger, strength, duration and frequency have not changed." }]
            },
            {
              id: "c041-turn-rest-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-rest-question", text: "Has it ever happened while resting, woken you at night, lasted more than ten minutes, or failed to settle when you stopped?" }]
            },
            {
              id: "c041-turn-rest-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-rest-answer", text: "No. Never at rest or in bed, and it has always settled quickly." }]
            },
            {
              id: "c041-turn-character-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-character-question", text: "Does it spread? Any breathlessness, sweating, nausea, dizziness, fainting or palpitations?" }]
            },
            {
              id: "c041-turn-character-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-character-answer", text: "Sometimes my left shoulder, with mild breathlessness. No sweating, nausea, dizziness, fainting or palpitations." }]
            },
            {
              id: "c041-turn-alternatives-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-alternatives-question", text: "Did it ever start at maximum intensity, tear into your back or worsen with breathing? Any coughing blood or swollen leg? Is it linked to meals, arm movement or pressing the chest?" }]
            },
            {
              id: "c041-turn-alternatives-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-alternatives-answer", text: "No. It builds while walking and is not sharp, tender, pleuritic or meal-related. No cough, swollen leg or recent long trip." }]
            },
            {
              id: "c041-turn-history-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-history-question", text: "Any heart, circulation, kidney or diabetes history? High blood pressure or cholesterol? Smoking or early family heart disease?" }]
            },
            {
              id: "c041-turn-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-history-answer", text: "High blood pressure and cholesterol. I smoke five cigarettes daily, and my father had a heart attack at 54. No diabetes, kidney disease, stroke or heart problem." }]
            },
            {
              id: "c041-turn-medicine-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-medicine-question", text: "Which medicines and allergies? Any previous ECG, stress test or heart scan?" }]
            },
            {
              id: "c041-turn-medicine-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-medicine-answer", text: "Amlodipine 5 milligrams most days. I sometimes forget. No allergies and no previous heart tests." }]
            },
            {
              id: "c041-turn-concern-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-concern-question", text: "What concerns you, and how has this affected you?" }]
            },
            {
              id: "c041-turn-concern-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-concern-answer", text: "A blocked artery worries me, though I may just be unfit. I now avoid the hill." }]
            },
            {
              id: "c041-turn-summary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-summary", text: "For three months, the same exertion has caused brief central tightness that settles with rest, never at rest and without change. Correct?" }]
            },
            {
              id: "c041-turn-summary-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-summary-answer", text: "Yes, exactly." }]
            }
          ]
        },
        {
          id: "c041-run-assessment",
          heading: "Focused examination and interpretation",
          turns: [
            {
              id: "c041-turn-examination-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-examination-request", text: "I assess Sabine's appearance and observations, examine the heart and lungs, look for heart failure, assess pulses and perfusion, listen for a significant murmur and check for chest-wall tenderness." }]
            },
            {
              id: "c041-turn-examination-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c041-run-examination-findings", text: "Sabine is comfortable. Pulse is 72, blood pressure 146/86, respiratory rate 15, oxygen saturation 98% on room air and temperature 36.6 degrees Celsius. Heart and chest examinations are normal, with no murmur, heart failure, pulse deficit or chest tenderness. Body mass index is 29 kg/m2." }]
            },
            {
              id: "c041-turn-ecg-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-ecg-request", text: "I would obtain a resting 12-lead ECG and compare it with any previous tracing." }]
            },
            {
              id: "c041-turn-ecg-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c041-run-ecg-result", text: "The ECG shows sinus rhythm at 70 beats per minute, with no acute ST-segment or T-wave change." }]
            },
            {
              id: "c041-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-interpretation", text: "The current findings are reassuring, but a normal resting ECG does not exclude coronary artery disease. The symptom trajectory determines whether this pattern has changed." }]
            }
          ]
        },
        {
          id: "c041-run-explanation",
          heading: "Assessment, planned investigation and safety net",
          turns: [
            {
              id: "c041-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-diagnosis", text: "Sabine, reduced blood flow to heart muscle during exertion is my main concern. The predictable trigger, brief duration, relief with rest and unchanged pattern fit suspected stable angina, a presentation of chronic coronary syndrome. It is not confirmed. Chest-wall, oesophageal and lung causes remain possible, but your pattern and risk factors favour a coronary cause." }]
            },
            {
              id: "c041-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-patient-question", text: "If the ECG is normal and the pain always stops, can I just keep an eye on it?" }]
            },
            {
              id: "c041-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-patient-answer", text: "Do not ignore it. A resting ECG may be normal when exertion exposes reduced coronary flow. This unchanged pattern can have prompt outpatient assessment, with a plan if it changes." }]
            },
            {
              id: "c041-turn-investigation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-investigation-plan", text: "I would arrange blood count, kidney function, electrolytes, HbA1c, lipids and liver tests, then refer you to cardiology or a rapid-access chest-pain service. They can select coronary CT angiography or stress imaging. Echocardiography is added if findings suggest structural disease." }]
            },
            {
              id: "c041-turn-symptom-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-symptom-plan", text: "Until assessment, avoid exertion that causes tightness. After checking blood pressure and interactions, I would prescribe short-acting glyceryl trinitrate and show its use while seated. Relief does not prove the cause. Longer-term antianginal treatment follows assessment. Cardiovascular risk and confirmed disease guide lipid lowering; confirmed disease and bleeding risk guide antiplatelet treatment." }]
            },
            {
              id: "c041-turn-risk-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-risk-plan", text: "We will improve medicine adherence, calculate cardiovascular risk, support smoking cessation and address cholesterol, nutrition, activity and weight. I will book follow-up." }]
            },
            {
              id: "c041-turn-safety-net",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-safety-net", text: "Stop, sit and use the prescribed spray. Call Triple Zero immediately if symptoms are severe or worsening, or occur with marked breathlessness, sweating, nausea, faintness or collapse. Otherwise, repeat the spray after five minutes if not fully relieved; if symptoms remain at ten minutes, call Triple Zero. Do not drive. Even if symptoms settle, new rest pain, a lower activity trigger, or more frequent, stronger or longer episodes need same-day medical assessment." }]
            },
            {
              id: "c041-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-teachback", text: "When would you call an ambulance, and when would you seek same-day review?" }]
            },
            {
              id: "c041-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c041-run-teachback-answer", text: "I would call Triple Zero for severe or worsening symptoms, warning symptoms, or pain still present at ten minutes. Even if it settles, rest pain or a clear change from my usual pattern needs same-day assessment." }]
            },
            {
              id: "c041-turn-close",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c041-run-close", text: "I will write the action plan and arrange the tests, referral and follow-up." }]
            },
            {
              id: "c041-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c041-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
        title: "Comprehensive Australian clinical guideline for diagnosing and managing acute coronary syndromes 2025",
        date: "2025",
        url: "https://assets.contentstack.io/v3/assets/blt8a393bb3b76c0ede/bltc58c127475ae7407/ACS-Guideline.pdf"
      },
      {
        organisation: "Australian Government Department of Health, Disability and Ageing",
        title: "Medicare Benefits Schedule item 57360: Computed tomography of the coronary arteries",
        date: "Current 1 July 2026 schedule",
        url: "https://www9.health.gov.au/mbs/fullDisplay.cfm?type=item&q=57360&qt=item"
      },
      {
        organisation: "Australian Chronic Disease Prevention Alliance",
        title: "Australian guideline for assessing and managing cardiovascular disease risk",
        date: "2023 guideline, current 2026 resources",
        url: "https://www.cvdcheck.org.au/resources"
      },
      {
        organisation: "European Society of Cardiology",
        title: "2024 ESC Guidelines for the management of chronic coronary syndromes",
        date: "2024",
        url: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/chronic-coronary-syndromes/"
      },
      {
        organisation: "National Heart Foundation of Australia",
        title: "Heart attack warning signs action plan",
        date: "Reviewed January 2024",
        url: "https://www.heartfoundation.org.au/your-heart/heart-attack-warning-signs"
      }
    ]
  });
})();
