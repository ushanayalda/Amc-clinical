(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-007",
    globalId: "CP-C007",
    registryId: "CP-P2-C003",
    displayNumber: "Case 7",
    title: "Cough and worsening breathlessness over three days",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 2, title: "Acute Shortness of Breath" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "General practice"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c007-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c007-stem-patient",
          text: "Mrs Margaret Wilson, a 74-year-old woman, has booked a same-day appointment because of a cough and worsening breathlessness over three days. She thinks she has a chest infection and is requesting antibiotics."
        },
        {
          id: "c007-stem-start",
          text: "No observations or examination findings are available at the start of the consultation."
        }
      ],
      tasks: [
        {
          id: "c007-task-assess",
          text: "Assess the patient, including a focused history and relevant examination findings.",
          timing: "4 minutes"
        },
        {
          id: "c007-task-explain",
          text: "Explain your most likely diagnosis and important alternative diagnoses to the patient.",
          timing: "2 minutes"
        },
        {
          id: "c007-task-management",
          text: "Address the patient's request for antibiotics and explain your management plan.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c007-run-opening",
          heading: "Opening and immediate safety check",
          turns: [
            {
              id: "c007-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c007-run-start", text: "You may begin." }]
            },
            {
              id: "c007-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-intro", text: "Hello, I am Ushana, one of the doctors here. Please confirm your full name and date of birth." }]
            },
            {
              id: "c007-turn-id",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-id", text: "Margaret Wilson, 2 May 1952." }]
            },
            {
              id: "c007-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-consent", text: "Thank you, Margaret. Is it okay if I ask focused questions about the cough, your breathing and your heart?" }]
            },
            {
              id: "c007-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-consent-answer", text: "Yes. I mainly need an antibiotic before this gets worse." }]
            },
            {
              id: "c007-turn-open",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-open", text: "Tell me what has happened from the beginning." }]
            },
            {
              id: "c007-turn-story",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-story", text: "I started coughing three days ago and thought I was getting a chest infection. Since yesterday I have become much more short of breath, even sitting still." }]
            },
            {
              id: "c007-turn-early-assessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-early-assessment", text: "I can see you are working hard to breathe. Please sit upright. While we continue, ask the nurse to record oxygen saturation, respiratory rate, pulse, blood pressure and temperature, attach cardiac monitoring and bring the emergency equipment." }]
            },
            {
              id: "c007-turn-observations",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c007-run-observations", text: "Margaret is distressed and speaks in short sentences. Respiratory rate is 30 breaths per minute, oxygen saturation is 89% on room air, pulse is 112 beats per minute and regular, blood pressure is 166/96 mmHg, and temperature is 36.8 degrees Celsius." }]
            },
            {
              id: "c007-turn-oxygen-transfer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-oxygen-transfer", text: "Your oxygen is dangerously low and you are breathless at rest. Start oxygen and titrate it to a saturation of 92% to 96%. Call Triple Zero for an ambulance now. Keep her upright, resting and monitored, and obtain intravenous access and a 12-lead ECG without delaying transfer." }]
            },
            {
              id: "c007-turn-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c007-run-action", text: "The nurse calls Triple Zero. Oxygen and monitoring are applied while the doctor continues the focused assessment." }]
            },
            {
              id: "c007-turn-ambulance-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-ambulance-question", text: "An ambulance? My husband can drive me after I get the antibiotic." }]
            },
            {
              id: "c007-turn-ambulance-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-ambulance-answer", text: "Your oxygen is low and your breathing could worsen quickly. The ambulance can monitor and treat you during transfer. Travelling by car would not be safe." }]
            }
          ]
        },
        {
          id: "c007-run-history",
          heading: "Focused history",
          turns: [
            {
              id: "c007-turn-breathing-pattern",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-breathing-pattern", text: "Is the breathlessness worse lying flat? Have you woken suddenly at night struggling to breathe?" }]
            },
            {
              id: "c007-turn-breathing-pattern-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-breathing-pattern-answer", text: "I slept sitting in a chair last night. I woke gasping twice the night before." }]
            },
            {
              id: "c007-turn-fluid",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-fluid", text: "Any ankle swelling or rapid weight change? Has your urine changed?" }]
            },
            {
              id: "c007-turn-fluid-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-fluid-answer", text: "Both ankles are swollen and I gained about two kilograms this week. I am passing less urine." }]
            },
            {
              id: "c007-turn-cough-infection",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-cough-infection", text: "Are you bringing up sputum? Any fever, chills, pleuritic pain, coughing blood or sick contacts?" }]
            },
            {
              id: "c007-turn-cough-infection-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-cough-infection-answer", text: "Only a little clear frothy sputum. No fever, chills, sharp pain, blood or sick contacts." }]
            },
            {
              id: "c007-turn-cardiac-danger",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-cardiac-danger", text: "Any chest pressure, palpitations, fainting or sudden severe pain?" }]
            },
            {
              id: "c007-turn-cardiac-danger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-cardiac-danger-answer", text: "No." }]
            },
            {
              id: "c007-turn-vte-airways",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-vte-airways", text: "Any one-sided calf pain or swelling, recent immobility or clot? Any wheeze, asthma or choking?" }]
            },
            {
              id: "c007-turn-vte-airways-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-vte-airways-answer", text: "No." }]
            },
            {
              id: "c007-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-background", text: "Have you had heart failure, a heart attack, valve disease or kidney disease? What medicines do you take, and have any changed recently?" }]
            },
            {
              id: "c007-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-background-answer", text: "I had a heart attack three years ago and was told my heart was weaker. I take perindopril, bisoprolol, spironolactone and furosemide. I stopped the furosemide four days ago because I was tired of rushing to the toilet. I also started ibuprofen for my knee." }]
            }
          ]
        },
        {
          id: "c007-run-examination",
          heading: "Focused examination and treatment",
          turns: [
            {
              id: "c007-turn-examination-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-examination-request", text: "With consent, I assess her general appearance and perfusion, jugular venous pressure, heart sounds, both lung fields and peripheral oedema. Please provide the findings." }]
            },
            {
              id: "c007-turn-examination-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c007-run-examination-findings", text: "She has warm peripheries and is alert. Jugular venous pressure is elevated. There are fine crackles bilaterally to the mid-zones, without focal bronchial breathing. Heart sounds are normal without a new murmur. There is bilateral pitting oedema to the mid-shins." }]
            },
            {
              id: "c007-turn-ecg",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c007-run-ecg", text: "The ECG shows sinus tachycardia with old anterior Q waves and no acute ischaemic change." }]
            },
            {
              id: "c007-turn-medication-safety",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-medication-safety", text: "Do you have any medicine allergies, severe narrowing of the aortic valve, or recent sildenafil or tadalafil use?" }]
            },
            {
              id: "c007-turn-medication-safety-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-medication-safety-answer", text: "No." }]
            },
            {
              id: "c007-turn-gtn-check",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-gtn-check", text: "With systolic pressure well above 90, give glyceryl trinitrate 400 micrograms under the tongue according to local emergency protocol. Repeat every five minutes to a maximum of three doses while reassessing blood pressure and symptoms, and stop if hypotension develops." }]
            },
            {
              id: "c007-turn-diuretic",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-diuretic", text: "She has clear fluid overload and normally takes furosemide 40 milligrams daily. Under the clinic emergency protocol and within my competence, give furosemide 40 milligrams slowly intravenously while monitoring blood pressure. This must not delay the ambulance. Do not give a routine fluid bolus or morphine." }]
            },
            {
              id: "c007-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c007-run-treatment-action", text: "Oxygen, the first glyceryl trinitrate dose and slow intravenous furosemide are given while monitoring and ambulance transfer continue." }]
            },
            {
              id: "c007-turn-repeat-observations",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c007-run-repeat-observations", text: "Oxygen saturation improves to 94%, respiratory rate is 26 breaths per minute and blood pressure is 148/88 mmHg. Margaret says her breathing is beginning to ease." }]
            },
            {
              id: "c007-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c007-run-time", text: "Four minutes have elapsed. Please explain your most likely diagnosis and important alternative diagnoses to the patient." }]
            }
          ]
        },
        {
          id: "c007-run-explanation",
          heading: "Diagnosis and patient concerns",
          turns: [
            {
              id: "c007-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-diagnosis", text: "Margaret, I can see why the cough made you think of an infection. Your low oxygen, difficulty lying flat, rapid weight gain, swollen legs and crackles in both lungs show that fluid is building up in your lungs because your heart is not coping. This is acute worsening of heart failure, also called pulmonary oedema." }]
            },
            {
              id: "c007-turn-heart-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-heart-question", text: "But I have no heart pain. How can it be my heart?" }]
            },
            {
              id: "c007-turn-heart-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-heart-answer", text: "Heart failure often causes breathlessness, cough and swelling rather than pain. Stopping the water tablet and taking ibuprofen may have contributed, but hospital still needs to check for a heart attack, abnormal rhythm, kidney problem or infection as a trigger." }]
            },
            {
              id: "c007-turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-differentials", text: "A chest infection is still possible, but you have no fever, purulent sputum or focal chest signs. The hospital will also assess for pulmonary embolism and other lung causes. The fluid and low oxygen are the immediate danger." }]
            },
            {
              id: "c007-turn-antibiotic-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-antibiotic-question", text: "So you will not give me an antibiotic?" }]
            },
            {
              id: "c007-turn-antibiotic-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-antibiotic-answer", text: "Not automatically. Antibiotics would not remove the fluid or correct the low oxygen. Hospital will check for infection and give antibiotics promptly if the findings support it." }]
            },
            {
              id: "c007-turn-hospital-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-hospital-plan", text: "Hospital will repeat the ECG and arrange blood tests for heart strain, kidney function, electrolytes and infection, a chest X-ray and an echocardiogram. If your breathing remains severe, the ambulance or hospital may use a tight-fitting mask called CPAP to push air into the lungs. A breathing tube is needed only if you become exhausted, less conscious or remain dangerously low in oxygen." }]
            },
            {
              id: "c007-turn-reassurance",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-reassurance", text: "Am I going to be all right?" }]
            },
            {
              id: "c007-turn-reassurance-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-reassurance-answer", text: "You are awake and your blood pressure is holding, which helps. This can still worsen quickly, so we are treating it now and transferring you with monitoring. We will stay with you until the ambulance team takes over." }]
            },
            {
              id: "c007-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-understanding", text: "Are you clear why the ambulance and hospital treatment are needed instead of antibiotics and a car journey?" }]
            },
            {
              id: "c007-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-understanding-answer", text: "Yes. Fluid from my heart problem is affecting my lungs and oxygen, so I need monitored hospital treatment." }]
            },
            {
              id: "c007-turn-ambulance",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c007-run-ambulance", text: "The ambulance team arrives while oxygen, upright positioning and monitoring continue." }]
            },
            {
              id: "c007-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c007-run-handover", text: "Margaret Wilson, 74, has three days of cough with rapidly worsening breathlessness, orthopnoea, nocturnal dyspnoea, two-kilogram weight gain and bilateral oedema after stopping furosemide and starting ibuprofen. Respiratory rate is 30, oxygen saturation 89% on room air, pulse 112, blood pressure 166/96 and temperature 36.8. She has elevated JVP and bilateral crackles without focal consolidation. Suspected acute decompensated heart failure with pulmonary oedema. She is upright, monitored and receiving titrated oxygen, glyceryl trinitrate and protocol-guided intravenous furosemide. ECG shows sinus tachycardia without acute ischaemic change." }]
            },
            {
              id: "c007-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c007-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
        title: "Guidelines for the prevention, detection, and management of heart failure in Australia 2018",
        date: "Published online August 2018",
        url: "https://www.mja.com.au/journal/2018/209/8/national-heart-foundation-australia-and-cardiac-society-australia-and-new-0"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.10: The use of oxygen in emergencies",
        date: "Approved April 2021, current citation 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
      },
      {
        organisation: "Australian Prescriber",
        title: "Managing acute pulmonary oedema",
        date: "April 2017",
        url: "https://australianprescriber.tg.org.au/articles/managing-acute-pulmonary-oedema.html"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Acute pulmonary oedema",
        date: "April 2017, current source accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/219095/cpg_acute-pulmonary-oedema.pdf"
      },
      {
        organisation: "Heart Foundation",
        title: "Heart failure",
        date: "Current source accessed July 2026",
        url: "https://www.heartfoundation.org.au/your-heart/heart-failure"
      }
    ]
  });
})();
