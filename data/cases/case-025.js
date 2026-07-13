(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-025",
    globalId: "CP-C025",
    registryId: "CP-P8-C002",
    displayNumber: "Case 25",
    title: "A brief blackout after a racing heartbeat",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 8, title: "Cardiac Syncope" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c025-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c025-stem-patient",
          text: "Mr Idris Mensah, a 59-year-old man, has presented after briefly losing consciousness at work. He has recovered."
        },
        {
          id: "c025-stem-context",
          text: "A colleague reported that Idris had said his heart was racing immediately before the event. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c025-task-history",
          text: "Take a focused history from Idris.",
          timing: "2 minutes"
        },
        {
          id: "c025-task-assess",
          text: "Assess Idris, interpret the information provided and discuss your management.",
          timing: "3 minutes"
        },
        {
          id: "c025-task-explain",
          text: "Explain your assessment and ongoing plan to Idris.",
          timing: "2 minutes"
        },
        {
          id: "c025-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c025-run-history",
          heading: "Focused history and initial assessment",
          turns: [
            {
              id: "c025-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-start", text: "You may begin." }]
            },
            {
              id: "c025-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c025-run-first-action", text: "The doctor performs hand hygiene and approaches Idris." }]
            },
            {
              id: "c025-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-intro", text: "Hello Idris, I am Ushana, one of the emergency doctors. Can you confirm your full name? May I assess you while we talk?" }]
            },
            {
              id: "c025-turn-intro-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-intro-answer", text: "Idris Mensah. Yes. I feel all right now, but I suddenly blacked out at work." }]
            },
            {
              id: "c025-turn-initial-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-initial-request", text: "I assess airway, breathing, circulation and conscious state. Attach continuous cardiac and oxygen-saturation monitoring, check glucose, record vital signs and obtain a 12-lead ECG. Please provide the findings." }]
            },
            {
              id: "c025-turn-initial-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c025-run-initial-findings", text: "Airway is patent. Respiratory rate is 16, oxygen saturation 97% on room air, pulse 76 and regular, blood pressure 128/74 and temperature 36.7 degrees Celsius. Idris is alert. Glucose is 5.8 mmol/L. Cardiovascular, respiratory and neurological examinations show no acute abnormality or injury." }]
            },
            {
              id: "c025-turn-event-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-event-history", text: "Tell me exactly what you noticed before you lost consciousness. Were you standing, sitting or exerting yourself? Did you have a racing or irregular heartbeat, chest discomfort, breathlessness, sweating, nausea, warmth, blurred vision or light-headedness?" }]
            },
            {
              id: "c025-turn-event-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-event-answer", text: "I was standing at my workbench. My heart suddenly raced very fast for perhaps half a minute, then everything went black. There was no warning dizziness, nausea or sweating. I did not have chest pain or trouble breathing." }]
            },
            {
              id: "c025-turn-witness-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-witness-history", text: "How long were you unconscious, and how quickly did you recover? Did anyone see stiffening, jerking or a head injury? Any tongue biting, incontinence, confusion or weakness afterwards? Has this happened before?" }]
            },
            {
              id: "c025-turn-witness-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-witness-answer", text: "My colleague said I was out for about 20 seconds. He lowered me to the floor. I woke quickly and knew where I was. There was no shaking, injury, wetting or confusion. I had a shorter burst of racing heartbeat last week but did not faint." }]
            },
            {
              id: "c025-turn-background-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-background-history", text: "Do you have heart disease or reduced heart function? Any previous rhythm problem, fainting or family history of sudden death? What medicines do you take, and have you missed doses or used stimulants, recreational drugs or new over-the-counter products?" }]
            },
            {
              id: "c025-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-background-answer", text: "I had a large heart attack and an anterior stent four years ago. My last scan showed the heart was weak, around 35 percent. I take aspirin, atorvastatin, bisoprolol, ramipril and spironolactone. I have not missed them and use no drugs or stimulants. No family member died suddenly." }]
            },
            {
              id: "c025-turn-ecg-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-ecg-request", text: "Please provide the initial ECG and blood results. Maintain continuous monitoring, obtain intravenous access and apply defibrillator pads while I review them." }]
            },
            {
              id: "c025-turn-ecg-result",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c025-run-ecg-result", text: "The ECG shows sinus rhythm at 74 beats per minute with old anterior Q waves and no acute ST-segment change. Potassium, magnesium, calcium, renal function and haemoglobin are normal. The initial troponin is not elevated." }]
            },
            {
              id: "c025-turn-interpret-initial",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-interpret-initial", text: "A normal rhythm between episodes does not exclude a transient arrhythmia. Sudden palpitations before syncope, previous myocardial infarction and reduced ejection fraction make a cardiac rhythm cause likely. He requires monitored admission and cardiology review rather than discharge." }]
            }
          ]
        },
        {
          id: "c025-run-deterioration",
          heading: "Dynamic rhythm deterioration",
          turns: [
            {
              id: "c025-turn-change",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c025-run-change", text: "Idris says his heart is racing again. He becomes pale and drowsy. The monitor shows a regular broad-complex tachycardia at 170 beats per minute. QRS duration is about 160 milliseconds. He has a pulse and his blood pressure is 80/48." }]
            },
            {
              id: "c025-turn-emergency-response",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-emergency-response", text: "Call the resuscitation team and cardiology. This uncertain regular broad-complex rhythm must be treated as ventricular tachycardia. He has adverse signs with hypotension and impaired consciousness, so perform immediate synchronised cardioversion. Give oxygen if saturation is below 92%, targeting 92 to 96%. Maintain intravenous access and prepare rapid sedation and analgesia if this will not delay the shock." }]
            },
            {
              id: "c025-turn-patient-warning",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-patient-warning", text: "Idris, the fast rhythm is lowering your blood pressure. We need to deliver a synchronised electrical shock now to restore a safer rhythm. We will give brief sedation if time allows." }]
            },
            {
              id: "c025-turn-cardioversion",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c025-run-cardioversion", text: "The doctor selects synchronised mode, confirms a marker on every QRS complex, ensures everybody is clear and delivers a 100-joule synchronised shock." }]
            },
            {
              id: "c025-turn-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c025-run-response", text: "The rhythm changes to sinus rhythm at 82 beats per minute. Idris is alert, his colour improves and blood pressure is 118/70." }]
            },
            {
              id: "c025-turn-contingency",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-contingency", text: "Reassess airway, breathing and circulation, repeat the 12-lead ECG and continue monitoring. If cardioversion had failed, I would give amiodarone 300 milligrams intravenously over 10 to 20 minutes, repeat synchronised cardioversion and then give 900 milligrams over 24 hours. If he became pulseless, I would start ALS and defibrillate according to the cardiac-arrest algorithm." }]
            },
            {
              id: "c025-turn-cause-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-cause-plan", text: "Admit Idris to coronary care. Repeat ECGs and troponins, review potassium, magnesium and acid-base status, and obtain echocardiography. Assess for acute ischaemia, heart-failure deterioration, medicine effects and other reversible causes. Cardiology and electrophysiology should consider coronary assessment, catheter ablation and a secondary-prevention implantable defibrillator once reversible causes are addressed." }]
            }
          ]
        },
        {
          id: "c025-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c025-turn-explanation-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-explanation-prompt", text: "Please explain your assessment and plan to Idris." }]
            },
            {
              id: "c025-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-explanation", text: "Idris, the monitor captured a very fast rhythm arising from the lower chambers of your heart. It reduced blood flow to your brain, which explains the blackout and why you became drowsy. The electrical treatment restored your usual rhythm. Because your heart was weakened by the previous heart attack, we need continuous monitoring and specialist tests to find the cause and reduce the chance of it recurring." }]
            },
            {
              id: "c025-turn-teachback",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c025-run-teachback", text: "Can you tell me why you still need coronary-care monitoring even though you now feel better?" }]
            },
            {
              id: "c025-turn-teachback-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c025-run-teachback-answer", text: "The dangerous fast rhythm could return, so you need to monitor me and work out why it happened." }]
            },
            {
              id: "c025-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-handover-prompt", text: "Please finish with a concise clinical handover to the senior clinician." }]
            },
            {
              id: "c025-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c025-run-handover", text: "Idris Mensah is 59 with a previous anterior myocardial infarction, stent and ejection fraction of 35 percent. He had abrupt palpitations followed by 20 seconds of syncope with rapid recovery and no vasovagal or seizure features. Initial observations, glucose, electrolytes, troponin and ECG rhythm were reassuring apart from old anterior Q waves, so monitoring and pads were continued. He then developed regular broad-complex tachycardia at 170 with a pulse, blood pressure 80/48 and drowsiness. Presumed ventricular tachycardia converted to sinus rhythm after one 100-joule synchronised shock. He is now alert at 118/70. He requires coronary-care monitoring, serial ECGs and troponins, echocardiography, assessment for reversible and ischaemic causes, and urgent cardiology and electrophysiology review for secondary prevention." }]
            },
            {
              id: "c025-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c025-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 11.9: Managing Acute Dysrhythmias",
        date: "Current July 2026",
        url: "https://www.anzcor.org/home/adult-advanced-life-support/guideline-11-9-managing-acute-dysrhythmias"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Cardiac arrhythmias",
        date: "September 2024, listed in the July 2026 Clinical Practice Manual",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308717/CPG_Cardiac-arrhythmias.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Procedure: Synchronised cardioversion",
        date: "December 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0017/219221/CPP_Synchronised-cardioversion.pdf"
      },
      {
        organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
        title: "Australian clinical guideline for diagnosing and managing acute coronary syndromes",
        date: "2025",
        url: "https://www.heartfoundation.org.au/for-professionals/acs-guideline"
      }
    ]
  });
})();
