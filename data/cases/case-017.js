(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-017",
    globalId: "CP-C017",
    registryId: "CP-P5-C003",
    displayNumber: "Case 17",
    title: "Neck pain and limb weakness after a diving injury",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 5, title: "Shock Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c017-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c017-stem-patient",
          text: "Mr Arlo Sayeed, a 29-year-old man, has been brought in after striking his head while diving into a swimming pool. He reports neck pain and weakness in his arms and legs."
        },
        {
          id: "c017-stem-start",
          text: "Arlo is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c017-task-assess",
          text: "Assess Arlo and discuss your initial management.",
          timing: "3 minutes"
        },
        {
          id: "c017-task-neurology",
          text: "Perform a focused neurological assessment, interpret the information provided and discuss your next steps.",
          timing: "3 minutes"
        },
        {
          id: "c017-task-explain",
          text: "Explain your assessment and management plan to Arlo.",
          timing: "1 minute"
        },
        {
          id: "c017-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c017-run-primary",
          heading: "Primary assessment and circulation",
          turns: [
            {
              id: "c017-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c017-run-start", text: "You may begin." }]
            },
            {
              id: "c017-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c017-run-first-action", text: "The doctor performs hand hygiene, confirms that manual head support and spinal motion restriction are maintained, and approaches Arlo from the front." }]
            },
            {
              id: "c017-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-intro", text: "Hello Arlo, I am Ushana, one of the emergency doctors. Please keep your head still. Can you confirm your full name and tell me whether your breathing feels different?" }]
            },
            {
              id: "c017-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-opening", text: "Arlo Sayeed. My breathing feels shallow, and I cannot move my legs. My hands are very weak." }]
            },
            {
              id: "c017-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-consent", text: "I am going to assess and treat you while keeping your neck protected. Is that okay?" }]
            },
            {
              id: "c017-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-consent-answer", text: "Yes." }]
            },
            {
              id: "c017-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-primary-request", text: "I assess airway, breathing, circulation and conscious state while maintaining spinal alignment. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check glucose and temperature. Expose him with active warming and examine for external bleeding, chest injury, abdominal tenderness, pelvic injury and long-bone injury. Please provide the findings." }]
            },
            {
              id: "c017-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c017-run-primary-findings", text: "Arlo's airway is patent and his voice is soft. Respiratory rate is 22 and shallow, oxygen saturation is 94% on room air, and air entry is equal without chest injury. Pulse is 52 beats per minute and regular, blood pressure is 78/42 mmHg, capillary refill is two seconds and his skin is warm and dry. Temperature is 35.8 degrees Celsius, GCS is 15 and glucose is 5.9 mmol/L. There is midline lower-cervical tenderness. No external bleeding, abdominal tenderness, pelvic instability or long-bone injury is found." }]
            },
            {
              id: "c017-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-recognition", text: "He has shock after trauma. Hypotension with relative bradycardia, warm skin and limb weakness suggests loss of sympathetic tone from a cervical cord injury, but that pattern does not exclude bleeding or another traumatic cause. Activate the trauma response and call the senior emergency, spinal surgery, anaesthetic and intensive-care teams now." }]
            },
            {
              id: "c017-turn-actions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-actions", text: "Give oxygen to maintain adequate saturation, establish two large-bore intravenous lines and keep him warm. Take a blood gas with lactate, full blood count, electrolytes, coagulation studies and group and crossmatch. Arrange ECG, extended focused trauma ultrasound and portable chest and pelvic X-rays. Give a measured 250-millilitre bolus of warmed Hartmann's while assessing the response, rather than repeated large fluid loads." }]
            },
            {
              id: "c017-turn-actions-done",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c017-run-actions-done", text: "Monitoring, oxygen, active warming and intravenous access are established. The trauma, spinal, anaesthetic and intensive-care teams are contacted, and the measured fluid bolus begins." }]
            }
          ]
        },
        {
          id: "c017-run-neurology",
          heading: "Neurological assessment and cause",
          turns: [
            {
              id: "c017-turn-mechanism",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-mechanism", text: "Arlo, what happened from the moment you entered the water? Did you lose consciousness, and could you move or feel your limbs immediately afterwards?" }]
            },
            {
              id: "c017-turn-mechanism-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-mechanism-answer", text: "My head hit the bottom and I felt an electric pain down my body. I stayed awake. I could not move my legs, and my arms became weak straight away." }]
            },
            {
              id: "c017-turn-symptoms",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-symptoms", text: "Any chest or abdominal pain, bleeding, severe headache or vomiting? Can you feel when I touch your chest, arms and legs?" }]
            },
            {
              id: "c017-turn-symptoms-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-symptoms-answer", text: "No chest or stomach pain and no vomiting. I can feel my shoulders, but everything becomes numb lower down." }]
            },
            {
              id: "c017-turn-neuro-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-neuro-request", text: "I examine cranial nerves, breathing strength, limb tone and reflexes, key muscle groups and light-touch and pinprick sensation." }]
            },
            {
              id: "c017-turn-intimate-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-intimate-consent", text: "Arlo, the formal cord examination includes checking sensation around the anus and whether those muscles contract. It is an intimate examination and a chaperone will be present. Is that okay?" }]
            },
            {
              id: "c017-turn-intimate-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-intimate-consent-answer", text: "Yes." }]
            },
            {
              id: "c017-turn-sacral-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-sacral-request", text: "With a chaperone, I assess sacral sensation and voluntary anal contraction and document the complete findings on the international spinal-cord injury chart. Please provide the findings and initial results." }]
            },
            {
              id: "c017-turn-neuro-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c017-run-neuro-results", text: "Cranial nerves are normal. Shoulder abduction and elbow flexion are preserved, wrist extension is weak, and there is no useful movement in the fingers or legs. Tone and reflexes are reduced. Sensation is preserved to the upper chest and impaired below it, with no sacral sparing. Extended trauma ultrasound is negative, chest and pelvic X-rays show no acute injury, and haemoglobin is 142 g/L. ECG shows sinus bradycardia. Lactate is 3.6 mmol/L. After 250 millilitres of Hartmann's, blood pressure is 80/44 and pulse 50, with clear lungs." }]
            },
            {
              id: "c017-turn-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-interpret", text: "The examination supports a severe cervical spinal cord injury. The flaccidity and absent reflexes describe spinal shock; the hypotension, bradycardia and warm skin describe neurogenic shock. They are different problems and can occur together. The trauma search has not found bleeding, but observations and serial examinations must continue because a normal first haemoglobin does not exclude recent blood loss." }]
            },
            {
              id: "c017-turn-circulation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-circulation-plan", text: "Start noradrenaline through monitored proximal peripheral access under the local critical-care protocol while central access is arranged. For Arlo, agree and document the lower MAP boundary with spinal and intensive care, usually 75 to 80, and avoid augmentation beyond 90 to 95. Individualise the target and its three-to-seven-day duration because the evidence is weak. Avoid further fluid unless reassessment shows a separate volume need. Treat worsening symptomatic bradycardia under the advanced-life-support protocol and have pacing available." }]
            },
            {
              id: "c017-turn-imaging-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-imaging-request", text: "Once circulation is supported, arrange CT of the head and whole spine with trauma imaging as indicated. MRI can define the cord and soft tissues, but it must not delay urgent reduction, decompression and stabilisation. Please provide the imaging and repeat respiratory findings." }]
            },
            {
              id: "c017-turn-imaging-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c017-run-imaging-results", text: "CT shows an unstable C5 to C6 fracture-dislocation with spinal canal compromise and no intracranial, chest, abdominal or pelvic bleeding. On noradrenaline, blood pressure is 102/64 with a mean arterial pressure of 77 and pulse 58. His cough has weakened, respiratory rate is 28 and vital capacity is falling." }]
            },
            {
              id: "c017-turn-respiratory",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-respiratory", text: "His respiratory function is deteriorating. The anaesthetic team should secure the airway in a controlled manner while maintaining cervical alignment, before exhaustion or secretion retention causes collapse. Continue oxygenation, repeated gas and respiratory measurements, pressure-area care, urinary drainage and venous-thromboembolism prevention when bleeding risk permits. Spinal surgery should proceed with urgent reduction, decompression and stabilisation, ideally within 24 hours when medically feasible." }]
            },
            {
              id: "c017-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-patient-question", text: "Does this mean I will never walk again?" }]
            },
            {
              id: "c017-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-patient-answer", text: "You have a serious spinal cord injury, but it is too early to predict your recovery. Right now we are protecting your neck, breathing and blood flow to the cord. The spinal team will explain the scan, treatment options and what we learn from repeated examinations." }]
            },
            {
              id: "c017-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c017-run-time", text: "Please provide your handover." }]
            }
          ]
        },
        {
          id: "c017-run-handover-section",
          heading: "Clinical handover",
          turns: [
            {
              id: "c017-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c017-run-handover", text: "Arlo Sayeed is 29 after an axial-load diving injury. He has an unstable C5 to C6 fracture-dislocation, severe motor and sensory deficit without sacral sparing, and neurogenic shock. Initial pressure was 78/42 with pulse 52, warm skin and lactate 3.6. No bleeding or other traumatic cause has been found on serial examination, ultrasound or CT. He had little response to 250 millilitres of Hartmann's and is now 102/64, MAP 77, on protocol-guided noradrenaline. His cough and vital capacity are worsening. Spinal alignment is maintained; anaesthetics are preparing controlled airway support, and spinal surgery is attending for urgent reduction, decompression and stabilisation without MRI delay." }]
            },
            {
              id: "c017-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c017-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Recognising and Responding to Acute Deterioration Standard",
        date: "Current standard accessed July 2026",
        url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Spinal cord injury",
        date: "Current guideline accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219145/cpg-spinal-cord-injury.pdf"
      },
      {
        organisation: "Agency for Clinical Innovation, NSW",
        title: "Adult ECAT protocol: Traumatic injury",
        date: "Current NSW protocol accessed July 2026",
        url: "https://aci.health.nsw.gov.au/ecat/adult/traumatic-injury"
      },
      {
        organisation: "AO Spine and Praxis Spinal Cord Institute",
        title: "Clinical Practice Guideline for Acute Spinal Cord Injury: Recommendations on Hemodynamic Management",
        date: "2024",
        url: "https://journals.sagepub.com/doi/10.1177/21925682231202348"
      }
    ]
  });
})();
