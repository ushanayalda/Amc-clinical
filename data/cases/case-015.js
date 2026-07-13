(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-015",
    globalId: "CP-C015",
    registryId: "CP-P5-C001",
    displayNumber: "Case 15",
    title: "Lower abdominal and hip pain after an e-bike collision",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
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
          id: "c015-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c015-stem-patient",
          text: "Mr Otis Mercer, a 38-year-old man, has presented after an e-bike collision about 40 minutes ago. He reports pain across his lower abdomen and left hip."
        },
        {
          id: "c015-stem-start",
          text: "Otis is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c015-task-assess",
          text: "Assess Otis and discuss your initial management.",
          timing: "3 minutes"
        },
        {
          id: "c015-task-interpret",
          text: "Interpret the information provided and discuss your ongoing management.",
          timing: "3 minutes"
        },
        {
          id: "c015-task-explain",
          text: "Explain your assessment and management plan to Otis.",
          timing: "1 minute"
        },
        {
          id: "c015-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c015-run-assessment",
          heading: "Trauma assessment and early recognition",
          turns: [
            {
              id: "c015-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-start", text: "You may begin." }]
            },
            {
              id: "c015-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c015-run-first-action", text: "The doctor performs hand hygiene, applies appropriate protective equipment and approaches Otis while spinal motion restriction is maintained." }]
            },
            {
              id: "c015-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-intro", text: "Hello Otis, I am Ushana, one of the emergency doctors. I will assess and treat you while we talk. Is that okay? Can you confirm your full name and tell me where the pain is worst?" }]
            },
            {
              id: "c015-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-opening", text: "Yes. Otis Mercer. It is deep in my left groin and across the bottom of my stomach. I feel light-headed and cold." }]
            },
            {
              id: "c015-turn-primary",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-primary", text: "I assess for external bleeding, then airway, breathing, circulation, conscious state and exposure. Apply cardiac and oxygen-saturation monitoring, cycle blood pressure frequently and check temperature, capillary refill and glucose. I inspect the chest, abdomen and limbs. I will not spring or repeatedly manipulate the pelvis. Please provide the findings." }]
            },
            {
              id: "c015-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c015-run-primary-findings", text: "There is no external haemorrhage. Airway is patent, respiratory rate is 24, oxygen saturation is 97% on room air and breath sounds are equal. Pulse is 118, blood pressure is 118/76 and capillary refill is three seconds. He is pale, cool and alert, with glucose 6.4 mmol/L and temperature 35.7 degrees Celsius. There is lower abdominal tenderness, left groin bruising and pelvic pain with slight leg movement. There is no long-bone deformity or focal neurological deficit." }]
            },
            {
              id: "c015-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-recognition", text: "The normal blood pressure does not exclude significant blood loss. Tachycardia, delayed refill, cool skin, light-headedness and pelvic pain suggest compensated haemorrhagic shock. Activate the trauma response and local major haemorrhage protocol. Request the trauma surgeon, orthopaedic pelvic-trauma surgeon, anaesthetist, transfusion laboratory and interventional radiology team." }]
            },
            {
              id: "c015-turn-intimate-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-intimate-consent", text: "Otis, a pelvic injury can cause hidden bruising or bleeding. With a chaperone, may I briefly inspect your groin and perineal area without moving the pelvis?" }]
            },
            {
              id: "c015-turn-intimate-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-intimate-consent-answer", text: "Yes." }]
            },
            {
              id: "c015-turn-intimate-finding",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c015-run-intimate-finding", text: "There is no perineal bruising or blood at the urethral opening." }]
            },
            {
              id: "c015-turn-binder",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-binder", text: "Apply a pelvic binder centred over the greater trochanters, not the waist, without further pelvic compression. Keep him flat, warm and fasting. Establish two large-bore intravenous lines. Give titrated intravenous analgesia and high-concentration oxygen during active haemorrhagic shock, then titrate once circulation is stabilised." }]
            },
            {
              id: "c015-turn-actions",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c015-run-actions", text: "The trauma response and major haemorrhage protocol are activated. A pelvic binder is applied over the greater trochanters, active warming begins and two large-bore intravenous lines are secured." }]
            },
            {
              id: "c015-turn-mechanism",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-mechanism", text: "What happened, where did you land, and were you wearing a helmet? Did you lose consciousness?" }]
            },
            {
              id: "c015-turn-mechanism-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-mechanism-answer", text: "A car clipped the bike at an intersection and I landed hard on my left side. I wore a helmet and did not black out. I could not stand because of the groin pain." }]
            },
            {
              id: "c015-turn-ample",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-ample", text: "Any chest, back or neck pain, breathlessness, weakness, numbness or bleeding? Any allergies, medical conditions or medicines, especially blood thinners? When did you last eat or drink?" }]
            },
            {
              id: "c015-turn-ample-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-ample-answer", text: "No other pain, numbness or bleeding. I am usually well, take no medicines and have no allergies. I ate breakfast about four hours ago." }]
            }
          ]
        },
        {
          id: "c015-run-investigation",
          heading: "Investigations, deterioration and haemorrhage control",
          turns: [
            {
              id: "c015-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-investigations", text: "Send full blood count, blood gas with lactate and base excess, group and crossmatch, coagulation studies including fibrinogen, electrolytes, renal function and ionised calcium. Arrange portable chest and pelvic X-rays and eFAST. These tests occur alongside resuscitation and must not delay bleeding control." }]
            },
            {
              id: "c015-turn-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c015-run-results", text: "eFAST shows no pericardial, pleural or intraperitoneal free fluid. Pelvic X-ray through the binder shows left sacroiliac joint widening and pubic rami fractures. Haemoglobin is 142 g/L, lactate 4.6 mmol/L, base excess minus 7, fibrinogen 1.8 g/L and ionised calcium 1.04 mmol/L. Other results are pending." }]
            },
            {
              id: "c015-turn-interpret-results",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-interpret-results", text: "A negative eFAST does not assess retroperitoneal bleeding, and the initial haemoglobin may remain normal during acute blood loss. The pelvic injury, raised lactate and base deficit support ongoing occult haemorrhage. Continue the binder and major haemorrhage protocol. Do not remove the binder merely to repeat the examination or obtain imaging." }]
            },
            {
              id: "c015-turn-resuscitation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-resuscitation", text: "Give warmed red cells, plasma and platelets in the balanced packs specified by the local protocol, moving to group-specific components when available. Avoid large crystalloid volumes. If blood is briefly unavailable, use a small warmed balanced crystalloid bolus as a bridge. He is within three hours of injury with suspected critical bleeding, so give tranexamic acid according to the local trauma protocol." }]
            },
            {
              id: "c015-turn-monitoring",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-monitoring", text: "Use a blood warmer and active external warming. Repeatedly measure temperature, blood gas, lactate, ionised calcium, haemoglobin, platelets, PT, INR, APTT and fibrinogen. Replace calcium and fibrinogen according to results and local protocol. Reassess airway, breathing, perfusion and mental state after each pack." }]
            },
            {
              id: "c015-turn-deterioration",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c015-run-deterioration", text: "Ten minutes later, after the first blood components have started, Otis becomes drowsier. Pulse is 142 beats per minute, blood pressure is 82/48 mmHg, capillary refill time is five seconds and temperature is 35.3 degrees Celsius. Repeat eFAST remains negative." }]
            },
            {
              id: "c015-turn-definitive",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-definitive", text: "He now has decompensated haemorrhagic shock despite the binder and initial blood. Continue warmed balanced resuscitation and move directly to haemorrhage control. Do not send him to CT while unstable. Proceed to theatre for preperitoneal pelvic packing and mechanical stabilisation, or to angiographic embolisation or a hybrid pathway if immediately available without delay. Reserve laparotomy for a separate intraperitoneal indication and continue searching for another source during transfer." }]
            },
            {
              id: "c015-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c015-run-patient-question", text: "Am I bleeding inside? I cannot stay awake." }]
            },
            {
              id: "c015-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-patient-answer", text: "We believe the injured pelvic blood vessels are bleeding internally. The belt is helping stabilise the pelvis, and we are replacing blood while the specialist team takes you straight to a procedure that can stop the bleeding. I will stay with you and keep explaining what is happening." }]
            },
            {
              id: "c015-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-time", text: "Please explain your assessment and management plan to Otis." }]
            }
          ]
        },
        {
          id: "c015-run-communication",
          heading: "Explanation and handover",
          turns: [
            {
              id: "c015-turn-explanation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-explanation", text: "Otis, the collision has broken part of your pelvic ring. This can injure blood vessels and cause major internal bleeding even when the first blood-pressure and haemoglobin readings look acceptable. Your circulation readings and blood tests showed blood loss before the blood pressure fell." }]
            },
            {
              id: "c015-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c015-run-plan", text: "We have stabilised the pelvis with a binder, activated the major haemorrhage protocol and started warmed blood components. Your blood pressure has now fallen, so a CT scan would delay treatment. The trauma, surgical and radiology teams will use the quickest available procedure to stop the bleeding while we protect your temperature, clotting and calcium levels." }]
            },
            {
              id: "c015-turn-handover-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-handover-prompt", text: "Please finish with a concise handover to the senior clinician." }]
            },
            {
              id: "c015-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c015-run-handover", text: "Otis Mercer is 38, forty minutes after an e-bike collision with left-sided impact. He has pelvic pain, groin bruising and an unstable pelvic-ring injury on X-ray. Initial pulse was 118 with pressure 118/76, cool skin and delayed refill. Lactate is 4.6, base excess minus 7, fibrinogen 1.8 and ionised calcium 1.04; eFAST is repeatedly negative. A binder is correctly placed, major haemorrhage protocol and tranexamic acid are underway, and warmed balanced components have started. He has deteriorated to pulse 142, pressure 82/48 and drowsiness. He is going directly for definitive pelvic haemorrhage control without CT." }]
            },
            {
              id: "c015-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c015-run-end", text: "Thank you. The station is complete." }]
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
        organisation: "Agency for Clinical Innovation, NSW",
        title: "Traumatic haemorrhagic shock",
        date: "Current NSW trauma resource accessed July 2026",
        url: "https://aci.health.nsw.gov.au/networks/trauma/resources/traumatic-haemorrhagic-shock"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Traumatic haemorrhagic shock",
        date: "September 2024",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/308753/CPG_Traumatic-haemorrhagic-shock.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Pelvic injury",
        date: "February 2021, listed in the current manual July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0019/219142/cpg_pelvic-injury.pdf"
      }
    ]
  });

  var caseFifteen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-015"; });
  function buildHint15(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseFifteen.masteryFocus = {
    case: "Assess lower abdominal and hip pain after trauma, track circulation over time and let stability decide which investigation or treatment can happen safely.",
    clinical: "In trauma, judge circulation from mechanism, perfusion and trend rather than one reassuring number or test."
  };
  caseFifteen.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "nba-critical-bleeding-2025", title: "Patient blood management guideline for adults with critical bleeding", organisation: "National Blood Authority", date: "Version 2.0, September 2025", url: "https://www.blood.gov.au/patient-blood-management-guideline-adults-critical-bleeding" },
    { id: "aci-trauma-shock-2026", title: "Traumatic haemorrhagic shock", organisation: "Agency for Clinical Innovation, NSW", date: "Current July 2026", url: "https://aci.health.nsw.gov.au/networks/trauma/resources/traumatic-haemorrhagic-shock" },
    { id: "qas-pelvic-injury-2021", title: "Clinical practice guideline: Pelvic injury", organisation: "Queensland Ambulance Service", date: "February 2021; current manual July 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0019/219142/cpg-pelvic-injury.pdf" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseFifteen.reasoningCompass = {
    stem: {
      title: "Keep trauma physiology and tasks together",
      steps: [
        { time: "0 to 30 seconds", text: "Fix the ED setting, collision 40 minutes ago and lower abdominal and hip pain. Prepare an external-bleeding check followed by ABCDE." },
        { time: "30 to 60 seconds", text: "Consider hidden pelvic or abdominal bleeding even if Otis is talking. Plan monitoring, trauma activation, a binder decision, access, warming and focused tests." },
        { time: "1 to 2 minutes", text: "Hold the switches: assess and manage to minute 3, interpret and continue management to minute 6, explain to minute 7, hand over to minute 8." }
      ],
      anchor: "Assess and manage 0 to 3 | Interpret and continue 3 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Follow perfusion, not one reassuring number",
      steps: [
        { time: "0 to 3 minutes", text: "Perform trauma ABCDE, protect the spine, avoid repeated pelvic manipulation, activate teams, apply the binder when indicated and start warming and access." },
        { time: "3 to 6 minutes", text: "Interpret bedside imaging and perfusion markers within their limits. Use the trend to decide whether further imaging, resuscitation or direct treatment is safest." },
        { time: "6 to 8 minutes", text: "At the prompt, explain the assessment and why stability changes the plan, then hand over mechanism, trajectory, treatment and destination." }
      ],
      anchor: "If airway, breathing, circulation or conscious state worsens, interrupt the sequence, repeat ABCDE and move to definitive control; then return to the unfinished task verb."
    }
  };
  caseFifteen.hints = [
    buildHint15("c015-hint-01", "stem", "c015-stem-role", "emergency department", ["amc-spec-2026", "amc-tips-2024"], "Reading the setting", "What does the ED setting allow?", "Assessment, resuscitation and specialist activation can happen together. Think in actions that protect life while the diagnosis becomes clearer.", "Resources do not make the patient stable.", "This is an acute trauma station.", "Read the mechanism, timing and pain location."),
    buildHint15("c015-hint-02", "stem", "c015-stem-patient", "38-year-old man", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age", "Young and likely healthy. Reassuring?", "Not after trauma. Age may help compensation, so pressure can remain normal while blood loss is already important.", "Compensation can hide severity.", "Otis may look better than his circulation is.", "Use mechanism and perfusion, not age, to judge urgency."),
    buildHint15("c015-hint-03", "stem", "c015-stem-patient", "e-bike collision about 40 minutes ago", ["qas-pelvic-injury-2021", "acsqhc-deterioration-2026"], "Reading mechanism and time", "Does an e-bike sound low energy?", "Not necessarily. Vehicle impact and a fall can transmit substantial force. Forty minutes is also early enough that haemoglobin and blood pressure may not yet reflect the full loss.", "Do not grade trauma from the vehicle label.", "There may be recent occult injury.", "Ask direction of impact, landing, helmet, loss of consciousness and ability to stand."),
    buildHint15("c015-hint-04", "stem", "c015-stem-patient", "lower abdomen and left hip", ["qas-pelvic-injury-2021"], "Reading pain location", "What structures sit here?", "Pelvic ring, retroperitoneal vessels, bladder, urethra, abdominal organs and hip can all be involved. The location tells you to protect and assess the pelvis without repeated compression.", "Pain location directs the examination; it does not identify the injured structure.", "A pelvic or lower abdominal injury is possible.", "Look for circulation symptoms and avoid forceful pelvic testing."),
    buildHint15("c015-hint-05", "stem", "c015-stem-start", "awake and able to answer questions", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Interpreting alertness", "If he is awake, can I start with history?", "A talking patient has a currently patent airway, but can still be bleeding. Begin external-bleeding check and ABCDE while asking short questions.", "Alert is one finding, not clearance.", "Airway appears intact; circulation remains unknown.", "Plan a parallel trauma assessment."),
    buildHint15("c015-hint-06", "stem", "c015-task-assess", "Assess Otis and discuss your initial management", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "What counts as assess here?", "External bleeding, ABCDE, exposure with warming, focused trauma examination, monitoring and immediate management. The mechanism history comes around those priorities.", "Do not turn an emergency task into a full history.", "The first three minutes require assessment plus action.", "Prepare the trauma response, binder, access and blood support decisions."),
    buildHint15("c015-hint-07", "stem", "c015-task-interpret", "ongoing management", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task two", "How is ongoing management different?", "It changes with investigations and trend. You must say when CT is appropriate, when it is unsafe and how definitive bleeding control is chosen.", "The second task tests adjustment after new information.", "Minutes 3 to 6 are about trajectory and destination.", "Keep initial and repeat perfusion findings ready to compare."),
    buildHint15("c015-hint-task-explain", "stem", "c015-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task three", "What belongs in the explanation minute?", "Speak to Otis about the suspected injury, hidden bleeding risk, treatment already underway and why the next investigation or procedure depends on stability.", "Do not use the handover language with the patient.", "Minute 6 to 7 is explanation.", "Keep minute 7 to 8 for the senior handover."),
    buildHint15("c015-hint-08", "stem", "c015-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "What belongs in the handover?", "Mechanism, suspected injury, initial compensated signs, investigation limits, deterioration, blood support, binder and destination for haemorrhage control.", "The next clinician needs trajectory, not every negative finding.", "The explanation and handover are separate tasks.", "Keep a running summary as the physiology changes."),
    buildHint15("c015-hint-09", "run", "c015-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the station", "Where do I start?", "Start the trauma assessment immediately. Approach with protective equipment and maintain spinal precautions while introducing yourself.", "The first three-minute task has begun.", "Mechanism and circulation can be assessed together.", "Confirm consent and ask where pain is worst while observing him."),
    buildHint15("c015-hint-10", "run", "c015-run-first-action", "spinal motion restriction is maintained", ["acsqhc-deterioration-2026"], "Protecting before certainty", "No neck pain in the stem. Why protect the spine?", "The collision mechanism has not been cleared. Maintain protection during the initial survey, then refine it from mechanism, examination and imaging.", "Absence of a stated symptom is not a completed assessment.", "Spinal injury remains unassessed.", "Approach without delaying the primary survey."),
    buildHint15("c015-hint-11", "run", "c015-run-intro", "assess and treat you while we talk", ["acsqhc-communication-2026", "amc-tips-2024"], "Setting expectations", "Why say treatment will occur during questions?", "It explains the fast, interrupted style and preserves consent. Otis knows why actions may happen before a complete history.", "Emergency care can still be transparent.", "You have permission to work in parallel.", "Hear the worst pain and circulation symptoms."),
    buildHint15("c015-hint-12", "run", "c015-run-opening", "light-headed and cold", ["acsqhc-deterioration-2026"], "Hearing perfusion symptoms", "Could this be pain or anxiety?", "Possibly, but after trauma these symptoms may reflect reduced circulation. They justify immediate observations and examination before a detailed mechanism history.", "A benign explanation must not delay exclusion of blood loss.", "Hidden circulatory compromise is possible.", "Request external bleeding check and ABCDE now."),
    buildHint15("c015-hint-13", "run", "c015-run-primary", "will not spring or repeatedly manipulate the pelvis", ["qas-pelvic-injury-2021"], "Examining without harm", "How do I assess pelvic injury then?", "Use mechanism, pain, bruising, limb position and gentle observation. Repeated compression is unreliable and may disrupt clot formation or worsen pain.", "Do not perform a dangerous ritual to prove instability.", "Pelvic injury is suspected from location and mechanism.", "Read perfusion and the whole trauma survey."),
    buildHint15("c015-hint-14", "run", "c015-run-primary-findings", "blood pressure is 118/76", ["acsqhc-deterioration-2026"], "Avoiding false reassurance", "Normal pressure. Is shock excluded?", "No. A healthy adult can maintain pressure through vasoconstriction and tachycardia. Pulse 118 beside a normal pressure may be early compensation.", "Pressure may fall late.", "Circulation may be impaired despite a normal number.", "Keep reading for refill, skin, temperature and injury findings."),
    buildHint15("c015-hint-15", "run", "c015-run-primary-findings", "pale, cool", ["aci-trauma-shock-2026", "nba-critical-bleeding-2025"], "Combining circulation findings", "Do the clues now earn a leading diagnosis?", "Yes. Tachycardia, delayed refill, light-headedness, cool pallor and pelvic pain support compensated haemorrhagic shock from occult trauma bleeding until proved otherwise.", "The diagnosis comes from perfusion and mechanism, not hypotension alone.", "Hidden pelvic or abdominal blood loss is now the leading concern.", "Activate trauma and major haemorrhage responses immediately."),
    buildHint15("c015-hint-16", "run", "c015-run-recognition", "normal blood pressure does not exclude significant blood loss", ["aci-trauma-shock-2026", "nba-critical-bleeding-2025"], "Stating the key correction", "Why say this aloud?", "It shows that you have recognised compensated shock and will not wait for collapse. Early team and blood-bank activation buys time for haemorrhage control.", "Recognition should change action now.", "Otis is in compensated haemorrhagic shock.", "Inspect for pelvic and urethral injury with consent, then stabilise the pelvis."),
    buildHint15("c015-hint-17", "run", "c015-run-intimate-consent", "With a chaperone", ["acsqhc-communication-2026", "qas-pelvic-injury-2021"], "Handling an intimate examination", "Is this examination necessary?", "A brief inspection may find perineal bruising or urethral blood that changes urinary management. Explain the reason, use a chaperone and avoid moving the pelvis.", "Urgency does not remove dignity.", "The examination is focused and clinically relevant.", "Proceed only after consent."),
    buildHint15("c015-hint-18", "run", "c015-run-intimate-finding", "no perineal bruising or blood at the urethral opening", ["qas-pelvic-injury-2021"], "Using a negative finding", "Does this clear the pelvis?", "No. It reduces evidence of urethral injury but does not exclude pelvic fracture or retroperitoneal bleeding.", "A negative sign answers one question only.", "Occult pelvic haemorrhage remains likely.", "Apply the binder correctly without further pelvic compression."),
    buildHint15("c015-hint-19", "run", "c015-run-binder", "centred over the greater trochanters, not the waist", ["qas-pelvic-injury-2021", "aci-trauma-shock-2026"], "Placing the binder", "Why so low?", "The greater trochanters align with the pelvic ring. Correct placement reduces pelvic volume and motion; a waist-level binder misses the injured structure.", "Anatomical placement determines whether the device helps.", "Mechanical stabilisation is part of early haemorrhage control.", "Keep him flat, warm and fasting while access and analgesia are established."),
    buildHint15("c015-hint-20", "run", "c015-run-actions", "major haemorrhage protocol are activated", ["nba-critical-bleeding-2025", "aci-trauma-shock-2026"], "Mobilising resources", "Is this too early before imaging?", "No. Clinical compensated shock with a possible pelvic source justifies preparation. The protocol can be adjusted if later evidence changes the concern.", "Early activation is reversible; delayed blood support is not.", "Binder, warming, access and blood-bank support are underway.", "Return to mechanism and AMPLE questions while resuscitation continues."),
    buildHint15("c015-hint-21", "run", "c015-run-mechanism-answer", "landed hard on my left side", ["qas-pelvic-injury-2021", "aci-trauma-shock-2026"], "Connecting force and injury", "What does the side impact add?", "A hard lateral impact can disrupt the pelvic ring and injure vessels in the retroperitoneum. Inability to stand strengthens concern for structural injury.", "Mechanism supports, but imaging will define, the injury.", "The left-sided findings fit the impact.", "Check other injury sites, medicines, allergies and fasting status."),
    buildHint15("c015-hint-22", "run", "c015-run-ample", "especially blood thinners", ["aci-trauma-shock-2026", "amc-tips-2024"], "Completing essential background", "Why ask this after treatment started?", "Anticoagulants change bleeding risk and reversal planning, while allergy and last intake affect anaesthesia. These are brief, action-linked questions.", "Focused history follows immediate threats.", "No other major injury has been disclosed yet.", "Move to tests that assess source, perfusion and coagulopathy."),
    buildHint15("c015-hint-23", "run", "c015-run-investigations", "must not delay bleeding control", ["nba-critical-bleeding-2025", "aci-trauma-shock-2026"], "Ordering tests in parallel", "Do I need results before blood or surgery?", "No. Blood gas, crossmatch, clotting and imaging refine treatment, but resuscitation and haemorrhage-control planning continue while they are obtained.", "Tests support action; they do not pause it.", "The diagnosis is clinical and time critical.", "Interpret each result for what it can and cannot exclude."),
    buildHint15("c015-hint-24", "run", "c015-run-results", "eFAST shows no pericardial, pleural or intraperitoneal free fluid", ["aci-trauma-shock-2026", "qas-pelvic-injury-2021"], "Reading a negative eFAST", "No free fluid. Is the bleeding concern gone?", "No. eFAST does not assess most retroperitoneal pelvic bleeding and may miss early or small collections. The clinical perfusion signs still need an explanation.", "Know the anatomical boundary of the test.", "Chest, pericardial and intraperitoneal fluid are not seen; pelvic bleeding remains possible.", "Read the pelvic X-ray and perfusion markers."),
    buildHint15("c015-hint-25", "run", "c015-run-results", "Haemoglobin is 142 g/L", ["nba-critical-bleeding-2025", "aci-trauma-shock-2026"], "Reading an early haemoglobin", "Normal haemoglobin. Can I relax now?", "No. Whole blood is lost together, so the initial concentration may remain normal before fluid shifts or resuscitation dilute it.", "A concentration is not a measure of acute blood volume.", "Occult haemorrhage remains likely despite the first haemoglobin.", "Keep reading for lactate, base excess, fibrinogen and calcium."),
    buildHint15("c015-hint-26", "run", "c015-run-interpret-results", "retroperitoneal bleeding", ["qas-pelvic-injury-2021", "aci-trauma-shock-2026"], "Naming the hidden compartment", "Why can pelvic bleeding be so large?", "The retroperitoneum can hold a substantial volume, and disrupted pelvic bone and vessels may continue bleeding without entering the abdominal cavity seen on eFAST.", "Anatomy explains the misleading scan.", "The pelvic injury and perfusion markers fit ongoing occult haemorrhage.", "Do not remove the binder for repeated examination or imaging."),
    buildHint15("c015-hint-27", "run", "c015-run-resuscitation", "warmed red cells, plasma and platelets", ["nba-critical-bleeding-2025", "aci-trauma-shock-2026"], "Replacing what is being lost", "Why not large volumes of crystalloid?", "Critical bleeding loses cells and clotting components. Balanced blood support restores oxygen carriage and haemostasis, while excess crystalloid dilutes clotting factors and worsens hypothermia.", "Resuscitation should support clot formation as well as pressure.", "Balanced warmed components and tranexamic acid are indicated under protocol.", "Monitor temperature, calcium, fibrinogen and the clinical response."),
    buildHint15("c015-hint-28", "run", "c015-run-monitoring", "ionised calcium", ["nba-critical-bleeding-2025"], "Protecting coagulation", "Why keep checking calcium and temperature?", "Cold impairs clotting, and citrate in transfused blood lowers ionised calcium, which the heart and clotting system need. Active warming and guided replacement protect resuscitation from creating more bleeding.", "Blood products need physiological support to work well.", "Haemorrhage control and correction of coagulopathy proceed together.", "Watch the next trend for decompensation."),
    buildHint15("c015-hint-29", "run", "c015-run-deterioration", "blood pressure is 82/48 mmHg", ["nba-critical-bleeding-2025", "aci-trauma-shock-2026"], "Recognising decompensation", "Now the pressure has fallen. What changes?", "Compensation has failed. Drowsiness, pulse 142 and hypotension show worsening haemorrhagic shock despite initial blood and binder.", "The trend now demands definitive control.", "Otis is unstable with ongoing bleeding.", "Keep reading for perfusion, temperature and repeat eFAST, then move to source control."),
    buildHint15("c015-hint-30", "run", "c015-run-definitive", "Do not send him to CT while unstable", ["aci-trauma-shock-2026", "qas-pelvic-injury-2021"], "Choosing destination by physiology", "But CT would define the bleeding. Why skip it?", "An unstable patient needs the quickest available procedure that can stop bleeding. CT adds detail but cannot treat him and may separate him from resuscitation and immediate control.", "Diagnostic precision comes after immediate survival when delay is dangerous.", "He needs pelvic packing, stabilisation, embolisation or a hybrid approach according to immediate local access.", "Continue searching for another source during transfer without delaying control."),
    buildHint15("c015-hint-31", "run", "c015-run-patient-question", "Am I bleeding inside", ["acsqhc-communication-2026"], "Answering during deterioration", "How direct should I be?", "Be clear: internal pelvic bleeding is the leading concern, blood is being replaced and the specialist team is moving to stop it. Avoid false reassurance or a long explanation.", "In deterioration, communication becomes shorter and more concrete.", "Otis needs orientation as conscious state worsens.", "Tell him what is happening now and that you remain with him."),
    buildHint15("c015-hint-32", "run", "c015-run-patient-answer", "straight to a procedure", ["acsqhc-communication-2026", "aci-trauma-shock-2026"], "Explaining urgency", "Can I name one exact procedure?", "Only if local teams have chosen it. The safe explanation is that the quickest available surgical, radiological or hybrid procedure will stop the bleeding.", "Do not promise a pathway that depends on local capability.", "Definitive control is certain; the exact method is conditional.", "At the prompt, switch to the required patient explanation."),
    buildHint15("c015-hint-33", "run", "c015-run-time", "Please explain your assessment", ["amc-spec-2026", "amc-tips-2024"], "Recovering at the task switch", "I already answered him. Do I repeat?", "Now give the complete one-minute explanation: pelvic injury, hidden bleeding, early misleading numbers, treatment given and why CT is unsafe during instability.", "Follow the requested verb and audience.", "Assessment and ongoing management are complete.", "Use a short causal sequence, then stop for handover."),
    buildHint15("c015-hint-34", "run", "c015-run-explanation", "first blood-pressure and haemoglobin readings look acceptable", ["acsqhc-communication-2026", "nba-critical-bleeding-2025"], "Explaining the apparent contradiction", "How do I make this believable?", "Say that the body can maintain pressure early and the first haemoglobin is a concentration, not a direct measure of lost volume. His pulse, skin, refill and lactate showed the problem sooner.", "Explain why the earlier numbers did not show the full blood loss.", "Otis can understand why the plan escalated.", "Describe binder, blood and definitive control."),
    buildHint15("c015-hint-35", "run", "c015-run-plan", "CT scan would delay treatment", ["aci-trauma-shock-2026", "acsqhc-communication-2026"], "Explaining the omitted test", "Will skipping CT sound careless?", "Explain that CT is useful only when circulation is stable enough. Right now, the quickest treatment-capable pathway is safer than more diagnostic detail.", "An omitted test can be a deliberate safety decision.", "The current priority is control of bleeding.", "Switch from patient explanation to clinical handover."),
    buildHint15("c015-hint-36", "run", "c015-run-handover-prompt", "concise handover", ["acsqhc-communication-2026", "amc-spec-2026"], "Changing audience", "Which facts should structure the handover?", "Mechanism, suspected unstable pelvic-ring injury, compensated signs, misleading negative tests, deterioration, treatment delivered and direct destination for control.", "Do not restart the encounter.", "The final minute transfers trajectory and immediate action.", "State that CT is being bypassed because he is unstable."),
    buildHint15("c015-hint-run-handover", "run", "c015-run-handover", "He has deteriorated to pulse 142, pressure 82/48 and drowsiness", ["acsqhc-communication-2026", "nba-critical-bleeding-2025"], "Transferring the trajectory", "Why repeat the deterioration after treatment?", "It proves ongoing haemorrhage despite binder and initial components and explains the direct move to control without CT.", "The handover must show why the destination changed.", "Mechanism, evidence, treatment response and destination are transferred.", "Finish with definitive haemorrhage control already underway."),
    buildHint15("c015-hint-37", "run", "c015-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I keep thinking of missed trauma injuries?", "Not in this station. Let it end, take one breath and begin the next stem from its own mechanism, symptoms and tasks.", "Do not import pelvic bleeding into the next case.", "Case 15 is complete.", "Read the next role and task verbs afresh." )
  ];
  caseFifteen.hints.forEach(function (hint, index) { hint.id = "c015-hint-" + String(index + 1).padStart(2, "0"); });
})();
