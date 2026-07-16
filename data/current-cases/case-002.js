(function () {
  "use strict";

  window.AMC_CURRENT_CASES = window.AMC_CURRENT_CASES || [];
  window.AMC_CURRENT_CASES.push({
    id: "case-002",
    globalId: "CP-C002",
    registryId: "CP-P1-C002",
    displayNumber: "Case 2",
    title: "Sudden chest and back pain",
    status: "audited",
    statusLabel: "Exam case audited",
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 1, title: "Dangerous Chest Pain" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    reasoningAvailable: false,
    stem: {
      lines: [
        {
          id: "stem-role",
          text: "You are an emergency medicine registrar working in a metropolitan emergency department."
        },
        {
          id: "stem-patient",
          text: "Mr Julian Merrick, a 59-year-old man, has presented with central chest discomfort and pain between his shoulder blades that began while sitting at a cafe."
        },
        {
          id: "stem-start",
          text: "Current observations and focused examination findings are available from the examiner if requested."
        }
      ],
      tasks: [
        {
          id: "task-assessment",
          text: "Conduct a focused assessment.",
          timing: "3 minutes"
        },
        {
          id: "task-reasoning",
          text: "Explain your most likely diagnosis and important differential diagnoses to the patient.",
          timing: "1 minute"
        },
        {
          id: "task-management",
          text: "Address the patient's concerns and explain your management plan.",
          timing: "4 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "run-opening",
          heading: "Opening, identity and consent",
          turns: [
            {
              id: "turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "run-start", text: "You may begin." }]
            },
            {
              id: "turn-approach",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-approach", text: "The doctor performs hand hygiene and approaches the patient." }]
            },
            {
              id: "turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-intro", text: "Hello, I am Ushana, one of the doctors. Could you confirm your full name and date of birth?" }]
            },
            {
              id: "turn-id",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-id", text: "My name is Julian Merrick, and my date of birth is 7 September 1966." }]
            },
            {
              id: "turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-consent", text: "Julian, is it okay if I ask you some questions about the pain?" }]
            },
            {
              id: "turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-consent-answer", text: "Yes." }]
            }
          ]
        },
        {
          id: "run-assessment",
          heading: "Focused assessment",
          turns: [
            {
              id: "turn-open-question",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-open-question", text: "Tell me what happened." }]
            },
            {
              id: "turn-opening-story",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-opening-story", text: "Half an hour ago, while I was sitting at a cafe, severe pain suddenly struck the centre of my chest and shot between my shoulder blades. It was at its worst immediately. I became sweaty, felt sick and nearly fainted. The pain has not eased." }]
            },
            {
              id: "turn-pain-site",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-pain-site", text: "Where is the pain now?" }]
            },
            {
              id: "turn-pain-site-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-pain-site-answer", text: "It is still in the middle of my chest and between my shoulder blades." }]
            },
            {
              id: "turn-pain-character",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-pain-character", text: "How would you describe the pain?" }]
            },
            {
              id: "turn-pain-character-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-pain-character-answer", text: "It feels deep and tearing. I have never felt anything like it." }]
            },
            {
              id: "turn-current-pain",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-current-pain", text: "How severe is the pain now from zero to ten?" }]
            },
            {
              id: "turn-current-pain-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-current-pain-answer", text: "Nine." }]
            },
            {
              id: "turn-loss-consciousness",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-loss-consciousness", text: "Did you black out?" }]
            },
            {
              id: "turn-loss-consciousness-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-loss-consciousness-answer", text: "I nearly fainted but stayed conscious." }]
            },
            {
              id: "turn-observations-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-observations-request", text: "Please provide his observations." }]
            },
            {
              id: "turn-observations-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "run-observations-response", text: "Pulse 108 regular, respiratory rate 22, oxygen saturation 97 percent on room air, temperature 36.7 degrees Celsius. Blood pressure is 198 over 110 in the right arm and 166 over 96 in the left." }]
            },
            {
              id: "turn-examination-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-examination-consent", text: "Julian, may I examine you?" }]
            },
            {
              id: "turn-examination-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-examination-consent-answer", text: "Yes." }]
            },
            {
              id: "turn-cardiovascular-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-cardiovascular-request", text: "Please provide the focused cardiovascular, respiratory, neurological and peripheral vascular examination findings." }]
            },
            {
              id: "turn-cardiovascular-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "run-cardiovascular-response", text: "The left radial pulse is weaker. Heart sounds are dual without a murmur. Air entry is equal and the lungs are clear. He is alert, with normal speech, symmetrical facial movement, equal limb power and no sensory loss. Peripheries are warm; capillary refill is two seconds." }]
            },
            {
              id: "turn-early-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-early-explanation", text: "Julian, I can see you are in severe pain, and these findings are concerning. I would ask the senior emergency doctor to review you now, keep you closely monitored and arrange pain relief while I ask a few essential questions." }]
            },
            {
              id: "turn-breathing",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-breathing", text: "Does a deep breath change the pain?" }]
            },
            {
              id: "turn-breathing-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-breathing-answer", text: "No, breathing makes no difference." }]
            },
            {
              id: "turn-breathlessness",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-breathlessness", text: "Are you short of breath?" }]
            },
            {
              id: "turn-breathlessness-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-breathlessness-answer", text: "Only a little because the pain frightens me." }]
            },
            {
              id: "turn-weakness",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-weakness", text: "Have you noticed any weakness?" }]
            },
            {
              id: "turn-weakness-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-weakness-answer", text: "No weakness." }]
            },
            {
              id: "turn-numbness",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-numbness", text: "Have you noticed any numbness?" }]
            },
            {
              id: "turn-numbness-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-numbness-answer", text: "No numbness." }]
            },
            {
              id: "turn-speech",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-speech", text: "Have you had difficulty speaking?" }]
            },
            {
              id: "turn-speech-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-speech-answer", text: "My speech is normal." }]
            },
            {
              id: "turn-abdominal",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-abdominal", text: "Have you developed abdominal pain?" }]
            },
            {
              id: "turn-abdominal-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-abdominal-answer", text: "No abdominal pain." }]
            },
            {
              id: "turn-aorta-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-aorta-history", text: "Have you ever been told that the main artery from your heart is enlarged?" }]
            },
            {
              id: "turn-aorta-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-aorta-history-answer", text: "Nobody has told me that." }]
            },
            {
              id: "turn-medical-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-medical-history", text: "What medical conditions do you have?" }]
            },
            {
              id: "turn-medical-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-medical-history-answer", text: "High blood pressure." }]
            },
            {
              id: "turn-medications",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-medications", text: "What regular medicine do you take?" }]
            },
            {
              id: "turn-medications-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-medications-answer", text: "Irbesartan, but I missed it today." }]
            },
            {
              id: "turn-blood-thinner",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-blood-thinner", text: "Do you take a blood-thinning medicine?" }]
            },
            {
              id: "turn-blood-thinner-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-blood-thinner-answer", text: "I take none." }]
            },
            {
              id: "turn-allergies",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-allergies", text: "Do you have any medicine allergies?" }]
            },
            {
              id: "turn-allergies-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-allergies-answer", text: "No known allergies." }]
            },
            {
              id: "turn-summary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-summary", text: "Your pain began suddenly at maximum severity, spread from your chest to your back and nearly caused fainting. Your right-arm pressure is much higher than the left, your left pulse is weaker, and you have high blood pressure." }]
            },
            {
              id: "turn-time-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "run-time-prompt", text: "Three minutes have passed. Please proceed to the remaining tasks." }]
            }
          ]
        },
        {
          id: "run-reasoning",
          heading: "Diagnosis and important alternatives",
          turns: [
            {
              id: "turn-leading-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-leading-diagnosis", text: "Julian, my main concern is an aortic dissection. The aorta is the main artery leaving the heart. A tear in its inner lining can let blood track between the layers of the wall. This can reduce blood flow to vital organs or, in severe cases, cause the aorta to rupture." }]
            },
            {
              id: "turn-tear-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-tear-concern", text: "Are you saying the artery has torn?" }]
            },
            {
              id: "turn-uncertainty",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-uncertainty", text: "That is possible, but it is not confirmed. The sudden pain and unequal arm findings make it a serious concern, but they do not prove it. An urgent scan is needed to show whether the aorta is affected and which part is involved." }]
            },
            {
              id: "turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-differentials", text: "Other important diagnoses are a heart attack, a lung clot and a collapsed lung. A heart attack can also cause chest pain, sweating and nausea. The lung conditions more often cause breathlessness, pain on breathing or abnormal breath sounds. Those possibilities remain open, but the immediate severe pain spreading to your back and the unequal arm findings make an aortic dissection more likely." }]
            }
          ]
        },
        {
          id: "run-management",
          heading: "Concerns and management explanation",
          turns: [
            {
              id: "turn-indigestion-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-indigestion-concern", text: "I had a spicy lunch. Could this just be indigestion?" }]
            },
            {
              id: "turn-indigestion-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-indigestion-response", text: "Indigestion can cause chest discomfort, but it would not explain pain that was severe immediately, the large difference between your arm pressures or the weaker pulse. We need to exclude the dangerous causes first." }]
            },
            {
              id: "turn-seriousness-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-seriousness-concern", text: "How serious is this?" }]
            },
            {
              id: "turn-seriousness-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-seriousness-response", text: "It can be life-threatening because the aorta supplies blood to the heart, brain and the rest of the body. We do not yet know whether you have it. The safest approach is to treat this as serious while we arrange the scan and involve the right teams." }]
            },
            {
              id: "turn-management-overview",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-management-overview", text: "We will keep you closely monitored, involve the senior emergency doctor and the specialist surgical and intensive care teams, and keep you fasting while the scan is arranged." }]
            },
            {
              id: "turn-tests-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-tests-plan", text: "We will use a drip for medicines and take blood to check your blood count, kidneys, heart and blood group in case surgery is needed. We will also do an ECG because a heart attack remains possible. These tests must not delay the scan." }]
            },
            {
              id: "turn-scan-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-scan-concern", text: "What scan do I need?" }]
            },
            {
              id: "turn-imaging-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-imaging-explanation", text: "As you are not showing signs of circulatory collapse, the main test is an urgent CT angiogram. Contrast through the drip lets the scan show whether the aorta has dissected, where it begins and whether an organ's blood supply is affected." }]
            },
            {
              id: "turn-scan-risk-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-scan-risk-concern", text: "Is the scan dangerous?" }]
            },
            {
              id: "turn-scan-risk-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-scan-risk-response", text: "We will ask about previous contrast reactions and check your kidney function. A serious reaction is rare. Here, the risk of missing a dissection is much greater, and you will be monitored during the scan." }]
            },
            {
              id: "turn-heart-attack-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-heart-attack-concern", text: "My father died from a heart attack. Should I have aspirin?" }]
            },
            {
              id: "turn-aspirin-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-aspirin-response", text: "Not yet. Aspirin and clot-dissolving medicine can worsen bleeding and complicate surgery if this is a dissection. We will reconsider aspirin if the results support a heart attack instead." }]
            },
            {
              id: "turn-analgesia-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-analgesia-explanation", text: "We will give strong pain relief through the drip and reassess you. This also helps reduce the rise in heart rate and blood pressure caused by severe pain." }]
            },
            {
              id: "turn-anti-impulse-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-anti-impulse-explanation", text: "With senior supervision and continuous monitoring, we will first use medicine to slow your heart, then lower the blood pressure carefully. This reduces force on the aortic wall while maintaining blood flow to your organs." }]
            },
            {
              id: "turn-medicine-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-medicine-concern", text: "Will those medicines fix the problem?" }]
            },
            {
              id: "turn-medicine-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-medicine-response", text: "They reduce stress on the aorta and lower the risk of the problem extending while we confirm the diagnosis. Whether medicine is enough depends on which part of the aorta is affected and whether there are complications." }]
            },
            {
              id: "turn-surgery-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-surgery-concern", text: "Will I need an operation?" }]
            },
            {
              id: "turn-surgery-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-surgery-plan", text: "The scan decides that. A dissection near the heart usually needs urgent surgery. One confined to the descending aorta without complications may be treated first with medicine and close monitoring. The specialist team will explain the safest option once the scan is available." }]
            },
            {
              id: "turn-family-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-family-concern", text: "My partner is in the waiting room. Can they come with me?" }]
            },
            {
              id: "turn-family-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-family-response", text: "A staff member can update your partner and bring them to you when it is safe and does not delay your care. We will keep both of you informed as the results become available." }]
            },
            {
              id: "turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-understanding", text: "Could you tell me what you understand so far?" }]
            },
            {
              id: "turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-understanding-answer", text: "You are worried there may be a problem in my main artery, but it is not confirmed. I need close monitoring, pain and blood-pressure treatment, an urgent scan and review by the surgical team." }]
            },
            {
              id: "turn-closing",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-closing", text: "That is correct. We would begin those steps without delay, monitor you closely and explain any change in the plan." }]
            },
            {
              id: "turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Medical Council",
        title: "Clinical Examination Specifications V8.3",
        date: "June 2026",
        url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf"
      },
      {
        organisation: "Heart Foundation and Cardiac Society of Australia and New Zealand",
        title: "Australian clinical guideline for acute coronary syndromes",
        date: "February 2025",
        url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline"
      },
      {
        organisation: "NSW Agency for Clinical Innovation, Emergency Care Institute",
        title: "Aortic dissection clinical tool",
        date: "Minor revision May 2025",
        url: "https://aci.health.nsw.gov.au/networks/eci/clinical/tools/aortic-dissection"
      },
      {
        organisation: "American College of Cardiology and American Heart Association",
        title: "2022 Guideline for the Diagnosis and Management of Aortic Disease",
        date: "November 2022",
        url: "https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.10 - The Use of Oxygen in Emergencies",
        date: "April 2021",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
      }
    ]
  });
})();
