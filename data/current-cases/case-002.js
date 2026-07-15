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
              lines: [{ id: "run-id", text: "Julian Merrick, 7 September 1966." }]
            },
            {
              id: "turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-consent", text: "Julian, may I ask what happened?" }]
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
          heading: "Focused assessment and early protection",
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
              lines: [{ id: "run-opening-story", text: "Half an hour ago, while sitting at a cafe, severe pain struck the centre of my chest and shot between my shoulder blades. It was at its worst immediately, and I nearly fainted." }]
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
              lines: [{ id: "run-current-pain-answer", text: "Nine. It has not eased." }]
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
              lines: [{ id: "run-examination-consent", text: "Julian, may I examine you now?" }]
            },
            {
              id: "turn-examination-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-examination-consent-answer", text: "Yes." }]
            },
            {
              id: "turn-examination-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-examination-action", text: "The doctor performs a focused cardiovascular, respiratory, neurological and peripheral perfusion examination." }]
            },
            {
              id: "turn-cardiovascular-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-cardiovascular-request", text: "Please provide the focused examination findings." }]
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
              lines: [{ id: "run-early-explanation", text: "Julian, the sudden pain and unequal arm findings suggest a problem with your aorta. We are starting treatment while arranging imaging and specialist review." }]
            },
            {
              id: "turn-early-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-early-action", text: "The doctor moves Julian to the resuscitation area, starts continuous cardiac, oxygen-saturation and frequent blood-pressure monitoring, keeps the defibrillator available, asks the emergency consultant to attend, contacts radiology, intensive care and the cardiothoracic aortic service, keeps Julian fasting, and withholds supplemental oxygen because his saturation is 97 percent on room air." }]
            },
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
              lines: [{ id: "run-indigestion-response", text: "Indigestion can cause discomfort, but it does not explain immediate severe pain with unequal arm findings. We must exclude an aortic problem first." }]
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
              lines: [{ id: "run-aorta-history", text: "Has anyone said your aorta is enlarged?" }]
            },
            {
              id: "turn-aorta-history-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-aorta-history-answer", text: "No, nobody has." }]
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
              lines: [{ id: "run-medications", text: "What regular medicines do you take?" }]
            },
            {
              id: "turn-medications-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-medications-answer", text: "Irbesartan, but I missed it today." }]
            },
            {
              id: "turn-summary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-summary", text: "Your pain was severe immediately. It spread to your back and nearly caused fainting. Your left pulse is weaker, your arm pressures differ, and you have hypertension." }]
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
              lines: [{ id: "run-leading-diagnosis", text: "Julian, my most likely diagnosis is an aortic dissection. This happens when blood enters and separates layers in the wall of the aorta, the main artery from the heart." }]
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
              lines: [{ id: "run-uncertainty", text: "It is not confirmed. The pattern is concerning enough to begin treatment while urgent imaging checks the aorta and its branches." }]
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
              lines: [{ id: "run-aspirin-response", text: "A heart attack is still possible. If this is a dissection, aspirin could increase bleeding and complicate surgery. I will withhold it until dissection is excluded or the specialist team advises otherwise." }]
            },
            {
              id: "turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-differentials", text: "Important differential diagnoses are a heart attack, a clot in the lung and a collapsed lung. The immediate severe chest-to-back pain and unequal arm findings favour an aortic dissection." }]
            }
          ]
        },
        {
          id: "run-management",
          heading: "Concerns and immediate management",
          turns: [
            {
              id: "turn-management-overview",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-management-overview", text: "We will continue close monitoring and repeated circulation and neurological checks. The emergency consultant, aortic surgical service, intensive care and radiology are involved now." }]
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
              lines: [{ id: "run-blood-thinner-answer", text: "No, I do not take one." }]
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
              id: "turn-iv-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-iv-consent", text: "Julian, may I insert two intravenous cannulas now?" }]
            },
            {
              id: "turn-iv-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-iv-consent-answer", text: "Yes." }]
            },
            {
              id: "turn-iv-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-iv-action", text: "The doctor inserts two large-bore intravenous cannulas." }]
            },
            {
              id: "turn-blood-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-blood-consent", text: "May I take blood samples through a cannula?" }]
            },
            {
              id: "turn-blood-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-blood-consent-answer", text: "Yes." }]
            },
            {
              id: "turn-blood-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-blood-action", text: "The doctor sends a full blood count, electrolytes and renal function, coagulation studies, high-sensitivity troponin, and a group and crossmatch." }]
            },
            {
              id: "turn-ecg-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-ecg-plan", text: "We will record an ECG without delaying aortic imaging. Aspirin and clot-dissolving treatment remain withheld while dissection is strongly suspected." }]
            },
            {
              id: "turn-analgesia-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-analgesia-explanation", text: "Pain raises heart rate and blood pressure, increasing force on the aorta. I recommend carefully titrated intravenous opioid pain relief." }]
            },
            {
              id: "turn-analgesia-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-analgesia-consent", text: "May I give you intravenous pain medicine now?" }]
            },
            {
              id: "turn-analgesia-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-analgesia-consent-answer", text: "Yes, please." }]
            },
            {
              id: "turn-analgesia-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-analgesia-action", text: "The doctor gives titrated intravenous opioid analgesia and reassesses pain, consciousness, breathing and blood pressure after each dose." }]
            },
            {
              id: "turn-anti-impulse-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-anti-impulse-explanation", text: "Your heart rate and the higher blood-pressure reading are high. After reviewing your ECG and circulation and confirming it is safe, we will carefully adjust an intravenous beta-blocker. We aim for a heart rate of 60 to 80 and systolic pressure of 100 to 120, provided blood flow to your organs remains adequate." }]
            },
            {
              id: "turn-asthma",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-asthma", text: "Have you ever had asthma?" }]
            },
            {
              id: "turn-asthma-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-asthma-answer", text: "No, I have never had asthma." }]
            },
            {
              id: "turn-beta-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-beta-consent", text: "May I start intravenous treatment to reduce the force on the aorta?" }]
            },
            {
              id: "turn-beta-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-beta-consent-answer", text: "Yes." }]
            },
            {
              id: "turn-beta-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-beta-action", text: "The doctor reviews the ECG and clinical findings for beta-blocker contraindications under senior supervision. The doctor then begins titrated intravenous beta-blockade with continuous monitoring and uses the higher blood-pressure reading until invasive monitoring is established. A titratable intravenous vasodilator is added only if pressure remains above target after heart-rate control." }]
            },
            {
              id: "turn-imaging-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-imaging-explanation", text: "You are stable enough for immediate CT angiography of the aorta and its branches. If CT becomes unsafe because your condition worsens, a bedside heart ultrasound can look for complications and guide the team. A normal bedside scan cannot exclude dissection." }]
            },
            {
              id: "turn-contrast-reaction",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-contrast-reaction", text: "Have you ever reacted to CT contrast?" }]
            },
            {
              id: "turn-contrast-reaction-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-contrast-reaction-answer", text: "No, I haven't." }]
            },
            {
              id: "turn-kidney-disease",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-kidney-disease", text: "Do you have kidney disease?" }]
            },
            {
              id: "turn-kidney-disease-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-kidney-disease-answer", text: "No, I do not have kidney disease." }]
            },
            {
              id: "turn-cta-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-cta-consent", text: "May I arrange for urgent CT angiography to be performed once radiology is ready?" }]
            },
            {
              id: "turn-cta-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-cta-consent-answer", text: "Yes." }]
            },
            {
              id: "turn-cta-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "run-cta-action", text: "The doctor confirms immediate CT angiography and continuous monitored transfer with the emergency and radiology teams." }]
            },
            {
              id: "turn-surgery-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-surgery-plan", text: "If the dissection involves the aorta nearest the heart, emergency surgery is usually needed. If it is confined to the descending aorta without complications, treatment may begin in intensive care with close monitoring and blood-pressure control; complications may still require a procedure or surgery." }]
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
              lines: [{ id: "run-family-response", text: "A staff member can update your partner and bring them to you if this does not delay treatment. We will keep explaining what is happening." }]
            },
            {
              id: "turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-understanding", text: "Could you tell me your understanding of the plan?" }]
            },
            {
              id: "turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "run-understanding-answer", text: "There may be a split in my main artery. You are treating my pain and blood pressure, arranging the scan and involving the surgical team." }]
            },
            {
              id: "turn-closing",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "run-closing", text: "That is correct. We will reassess you frequently and explain any change in the plan." }]
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
