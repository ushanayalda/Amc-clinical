(function () {
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function list(items, className) {
    return '<ul class="' + esc(className || "plain-list") + '">' + (items || []).map(function (item) {
      return "<li>" + esc(item) + "</li>";
    }).join("") + "</ul>";
  }

  function chip(text) {
    return '<span class="chip">' + esc(text) + "</span>";
  }

  function shell(inner, context, screen, toolsMarkup) {
    return [
      inner,
      footer(context),
      floatingNav(screen, Boolean(toolsMarkup)),
      toolsMarkup || ""
    ].join("");
  }

  function footer(context) {
    var app = (context && context.app) || {};
    var buildId = window.__BUILD_ID__ ? String(window.__BUILD_ID__) : "";
    var buildStamp = buildId ? '<p class="build-stamp">Build ' + esc(buildId.slice(0, 12)) + "</p>" : "";
    return '<footer class="site-footer">' +
      '<p>(c) 2026 Dr. Ushana Yalda. All rights reserved.</p>' +
      '<p>' + esc(app.title || "AMC Clinical Pathway") + ' is an independent educational resource. Not affiliated with or endorsed by the Australian Medical Council.</p>' +
      buildStamp +
      "</footer>";
  }

  function miniHeader(context, label) {
    var app = context.app || {};

    return '<header class="mini-header is-simple">' +
      '<a class="mini-brand" href="' + window.AMCRouter.href("home") + '">' + esc(app.shortTitle || app.title || "AMC Pathway") + "</a>" +
      "</header>";
  }

  function floatingNav(active, hasTools) {
    if (active === "home" || active === "pathway" || active === "case") return "";

    var items = [
      { key: "home", label: "Home", href: window.AMCRouter.href("home") },
      { key: "pathway", label: "Cases", href: window.AMCRouter.href("pathway") },
      { key: "warmup", label: "Ignite", href: window.AMCRouter.href("warmup") },
      { key: "case", label: "Stem", href: window.AMCRouter.href("case", "#station-stem") }
    ];

    var links = items.map(function (item) {
      var current = item.key === active ? ' aria-current="page"' : "";
      var activeClass = item.key === active ? " is-active" : "";
      return '<a class="float-link' + activeClass + '" href="' + item.href + '"' + current + ">" + esc(item.label) + "</a>";
    }).join("");

    return '<nav class="floating-nav" data-floating-nav aria-label="Learning navigation">' +
      '<button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-label="Open navigation">Menu</button>' +
      '<div class="float-menu" role="menu">' + links + "</div>" +
      "</nav>";
  }

  function renderHome(appEl, context) {
    var app = context.app || {};
    var currentCase = context.currentCase || window.AMCStore.getCurrentCase();
    var patterns = context.patterns || [];
    var currentPattern = currentCase
      ? patterns.find(function (pattern) { return pattern.id === currentCase.patternId; })
      : null;
    var patternTitle = currentPattern && currentPattern.title ? currentPattern.title : "Dangerous Chest Pain";
    var caseTitle = currentCase && currentCase.title ? currentCase.title : "Classic Chest Pain";

    appEl.innerHTML = shell(
      '<section class="home-hero home-entry">' +
        '<header class="home-top">' +
          '<div class="brand-block home-brand">' +
            '<p class="eyebrow">Prepared by ' + esc(app.preparedBy) + '</p>' +
            '<h1>' + esc(app.title) + '</h1>' +
          '</div>' +
          '<a class="home-soft-link home-cases-link" href="' + window.AMCRouter.href("pathway") + '">Cases</a>' +
        '</header>' +
        '<section class="home-launch" aria-labelledby="home-current-case">' +
          '<div class="home-current-truth">' +
            '<p class="home-case-label">Current pattern</p>' +
            '<h2 id="home-current-case">' + esc(patternTitle) + '</h2>' +
            '<p class="home-current-case"><span>Current case</span><strong>' + esc(caseTitle) + '</strong><em>Status: Ready</em></p>' +
          '</div>' +
          '<div class="home-choice-list">' +
            '<article class="home-choice">' +
            '<h3>New here?</h3>' +
              '<p>Use Ignite before the case.</p>' +
              '<a class="home-start-link" href="' + window.AMCRouter.href("warmup") + '">Read Ignite</a>' +
            '</article>' +
            '<article class="home-choice">' +
              '<h3>Ready to speak?</h3>' +
              '<p>Open the current case and speak it aloud.</p>' +
              '<a class="home-start-link" href="' + window.AMCRouter.href("case") + '">Start speaking</a>' +
            '</article>' +
          '</div>' +
        '</section>' +
      '</section>',
      context,
      "home"
    );
  }

  function renderPathway(appEl, context) {
    var currentCase = context.currentCase || window.AMCStore.getCurrentCase();
    var currentContext = window.AMCStore.getCaseContext(currentCase && currentCase.id);
    var currentPattern = currentContext && currentContext.pattern;
    var phase = currentContext && currentContext.phase;
    var patternTitle = currentPattern && currentPattern.title ? currentPattern.title : "Dangerous Chest Pain";
    var caseTitle = currentCase && currentCase.title ? currentCase.title : "Classic Chest Pain";
    var phaseTitle = phase && phase.title ? phase.title : "Can Kill Fast";
    var task = "Speak the station. Call the ambulance early. Do not wait for tests.";
    var plannedCases = [
      { number: 1, title: "Classic Chest Pain", status: "Ready", href: window.AMCRouter.href("case") },
      { number: 2, title: "Case 2", status: "Not ready yet" },
      { number: 3, title: "Case 3", status: "Not ready yet" },
      { number: 4, title: "Case 4", status: "Not ready yet" },
      { number: 5, title: "Case 5", status: "Not ready yet" }
    ];

    var courseCases = plannedCases.map(function (item) {
      var caseLabel = "Case " + esc(item.number) + " - " + esc(item.title);
      var statusClass = item.status === "Ready" ? " ready" : "";
      if (item.href) {
        return '<li><a href="' + item.href + '"><span>' + caseLabel + '</span><em class="case-status' + statusClass + '">' + esc(item.status) + '</em></a></li>';
      }
      return '<li><span>' + caseLabel + '</span><em class="case-status">' + esc(item.status) + '</em></li>';
    }).join("");

    appEl.innerHTML = shell(
      miniHeader(currentContext || context, "pathway") +
      '<section class="study-page cases-page pathway-page">' +
        '<header class="cases-head">' +
          '<h1>Cases</h1>' +
          '<p class="lead">Pick where to continue.</p>' +
        '</header>' +
        '<section class="cases-current" aria-labelledby="cases-current-heading">' +
          '<p class="section-kicker">Current case</p>' +
          '<h2 id="cases-current-heading">' + esc(caseTitle) + '</h2>' +
          '<dl class="cases-current-facts">' +
            '<div><dt>Pattern</dt><dd>' + esc(patternTitle) + '</dd></div>' +
            '<div><dt>Status</dt><dd>Ready</dd></div>' +
          '</dl>' +
          '<p class="cases-task">' + esc(task) + '</p>' +
          '<div class="cases-actions">' +
            '<a class="button primary" href="' + window.AMCRouter.href("case") + '">Start speaking</a>' +
            '<a class="small-action" href="' + window.AMCRouter.href("warmup") + '">Ignite</a>' +
            '<a class="small-action" href="' + window.AMCRouter.href("case", "#hints") + '">Hints</a>' +
            '<a class="small-action" href="' + window.AMCRouter.href("case", "#station-stem") + '">Stem</a>' +
          '</div>' +
        '</section>' +
        '<details class="course-index">' +
          '<summary><span>Course index</span><small>Open this when you want to see the wider pathway.</small></summary>' +
          '<div class="course-index-body">' +
            '<section class="course-phase">' +
              '<h2>Phase 1 - ' + esc(phaseTitle) + '</h2>' +
              '<section class="course-pattern">' +
                '<h3>Pattern 1 - ' + esc(patternTitle) + '</h3>' +
                '<ol class="course-case-list">' + courseCases + '</ol>' +
              '</section>' +
            '</section>' +
          '</div>' +
        '</details>' +
      '</section>',
      currentContext || context,
      "pathway"
    );
  }

  function renderWarmup(appEl, context) {
    var warmup = context.warmup;

    var flow = [
      {
        title: "Today's Aim",
        body: ["Recognise dangerous chest pain and act before certainty."]
      },
      {
        title: "What This Pattern Is Testing",
        body: ["Can I recognise possible heart-related chest pain, stay calm, and arrange urgent care safely?"]
      },
      {
        title: "What You Are Practising",
        body: ["Finding dangerous chest pain before looking for the exact diagnosis."]
      },
      {
        title: "Focus Here",
        body: [
          "Confirm the setting.",
          "Check if the patient is unstable.",
          "Look for immediate threat signs.",
          "Do not reassure early."
        ]
      },
      {
        title: "Main Danger",
        body: [
          "Acute coronary syndrome.",
          "Patient wording: Possible heart-related chest pain."
        ]
      },
      {
        title: "Four Causes Not to Miss",
        body: [
          "Acute coronary syndrome",
          "Aortic dissection",
          "Pulmonary embolism",
          "Tension pneumothorax"
        ]
      },
      {
        title: "Fast Trigger",
        body: ["Chest pressure with sweating, nausea, breathlessness, radiation, collapse, or cardiac risk factors."]
      },
      {
        title: "First Action in GP",
        body: [
          "Call ambulance now.",
          "Do an ECG only if it is immediately available and does not delay transfer."
        ]
      },
      {
        title: "Do Not Do These",
        body: [
          "Do not call it reflux too early.",
          "Do not delay transfer for troponin.",
          "Do not let the patient drive.",
          "Do not give oxygen routinely.",
          "Do not give glyceryl trinitrate without checking blood pressure and medication safety."
        ]
      },
      {
        title: "One Sentence to Remember",
        body: ["Chest pressure with sweating, nausea, breathlessness, radiation, collapse, or cardiac risk factors is a possible heart problem until proven otherwise."]
      },
      {
        title: "Next Case",
        body: ["Case 1 - Classic Chest Pain in GP consultation."]
      },
      {
        title: "Warm-Up",
        body: [
          "What is the setting?",
          "What is the danger trigger?",
          "What is the first action?",
          "What must I not delay?"
        ]
      }
    ];

    function renderIgniteBody(step) {
      if (step.title === "Four Causes Not to Miss") {
        return '<div class="cause-list">' + step.body.map(function (cause) {
          return '<span>' + esc(cause) + '</span>';
        }).join("") + '</div>';
      }

      if (step.title === "One Sentence to Remember") {
        return '<p class="say-line">' + esc(step.body[0]) + '</p>';
      }

      return list(step.body, "plain-list");
    }

    appEl.innerHTML = shell(
      miniHeader(context, "warmup") +
      '<section class="study-page warmup-page">' +
        '<h1>' + esc(warmup.title) + '</h1>' +
        '<p class="lead">' + esc(warmup.subtitle) + '</p>' +
        '<p class="ignite-concept">Finding dangerous chest pain before looking for the exact diagnosis.</p>' +
        '<div class="ignite-flow">' + flow.map(function (step) {
          return '<article class="ignite-step">' +
            '<h2>' + esc(step.title) + '</h2>' +
            renderIgniteBody(step) +
          '</article>';
        }).join("") + '</div>' +
        '<div class="cta-row single">' +
          '<a class="button primary" href="' + window.AMCRouter.href("case") + '">Start speaking</a>' +
        '</div>' +
      '</section>',
      context,
      "warmup"
    );
  }

  function renderCase(appEl, context) {
    var currentCase = context.case;

    appEl.innerHTML = shell(
      miniHeader(context, "case") +
      '<section class="study-page case-page">' +
        renderCaseStart(currentCase) +
        renderCaseTabs(currentCase) +
      '</section>',
      context,
      "case"
    );
  }

  function renderCaseStart(currentCase) {
    return '<section class="case-start" id="case-start">' +
      '<h1>' + esc(currentCase.displayNumber + " - " + currentCase.title) + '</h1>' +
      '<div class="case-start-task" aria-label="Case task">' +
        '<p>Speak the station.</p>' +
        '<p>Call the ambulance early.</p>' +
        '<p>Do not wait for tests.</p>' +
      '</div>' +
    '</section>';
  }

  function renderCaseTabs(currentCase) {
    var tabs = [
      ["stem", "Stem", "station-stem"],
      ["speak", "Start speaking", "speak-aloud"],
      ["mock", "Timed run", "mock-exam"],
      ["matters", "Do not miss", "what-matters"],
      ["hints", "Hints", "hints"]
    ];

    var tabButtons = tabs.map(function (tab, index) {
      var active = index === 0;
      return '<button class="case-tab' + (active ? " is-active" : "") + '" type="button" role="tab" aria-selected="' + String(active) + '" aria-controls="' + esc(tab[2]) + '" data-case-tab="' + esc(tab[0]) + '" data-case-hash="' + esc(tab[2]) + '">' + esc(tab[1]) + '</button>';
    }).join("") +
      '<a class="case-tab case-tab-link" href="' + window.AMCRouter.href("pathway") + '">Cases</a>';

    return '<section class="case-tabs-shell" data-case-tabs>' +
      '<div class="case-tab-row" role="tablist" aria-label="Case sections">' + tabButtons + '</div>' +
      '<div class="case-tab-panels">' +
        renderCaseTabPanel("stem", "station-stem", true, renderStationStemContent(currentCase)) +
        renderCaseTabPanel("speak", "speak-aloud", false, renderSpeakAloudContent(currentCase)) +
        renderCaseTabPanel("mock", "mock-exam", false, renderMockExamContent(currentCase)) +
        renderCaseTabPanel("matters", "what-matters", false, renderWhatMattersContent(currentCase)) +
        renderCaseTabPanel("hints", "hints", false, renderHintsInlinePanel(currentCase)) +
      '</div>' +
    '</section>';
  }

  function renderCaseTabPanel(tabId, panelId, active, content) {
    return '<section class="case-tab-panel" id="' + esc(panelId) + '" role="tabpanel" data-case-tab-panel="' + esc(tabId) + '"' + (active ? "" : " hidden") + '>' + content + '</section>';
  }

  function renderRunComplete() {
    var protectedLines = [
      "Ambulance now.",
      "No driving.",
      "ECG only if it does not delay transfer.",
      "No troponin delay.",
      "Aspirin if safe.",
      "Oxygen only if needed.",
      "Medication safety before chest pain spray or tablet."
    ];

    return '<section class="run-complete" aria-labelledby="run-complete-heading">' +
      '<h2 id="run-complete-heading">Run complete.</h2>' +
      '<p>You protected the patient if you said:</p>' +
      '<ul class="protected-list">' + protectedLines.map(function (line) {
        return '<li>' + esc(line) + '</li>';
      }).join("") + '</ul>' +
      '<p class="run-next-line">Choose one thing to improve.</p>' +
      '<div class="run-complete-actions">' +
        '<button class="button primary" type="button" data-open-tools="hints">Hints</button>' +
        '<a class="button secondary" href="#speak-aloud">Start speaking</a>' +
        '<a class="small-action" href="' + window.AMCRouter.href("pathway") + '">Back to Cases</a>' +
      '</div>' +
    '</section>';
  }

  function renderStationStem(currentCase) {
    return '<details class="content-section case-detail-section" id="station-stem" open>' +
      '<summary>Stem</summary>' +
      renderStationStemContent(currentCase) +
    '</details>';
  }

  function renderStationStemContent(currentCase) {
    return '<div class="reader-card">' +
      currentCase.stem.map(function (line) {
        return '<p>' + esc(line) + '</p>';
      }).join("") +
      '<p class="stem-questions-label">Questions</p>' +
      list(currentCase.tasks, "numbered-list") +
    '</div>';
  }

  function renderSpeakAloud(currentCase) {
    return '<section class="content-section speak-section" id="speak-aloud">' +
      renderSpeakAloudContent(currentCase) +
    '</section>';
  }

  function renderSpeakAloudContent(currentCase, options) {
    options = options || {};
    var voiceLineIndex = 0;
    var voiceClips = currentCase.mockExamVoiceClips || [];
    var protectedLines = {
      "I am worried this may be coming from your heart.": true,
      "I am going to arrange an ambulance while I ask you a few focused questions. Is that okay?": true,
      "I am arranging an ambulance now.": true,
      "You should not drive yourself.": true,
      "I will not delay the ambulance for blood tests that need to happen in hospital.": true
    };

    return '<div class="script-stack">' + currentCase.script.map(function (block, index) {
      return '<article class="script-block">' +
        '<div class="beat-head">' +
          '<span class="beat-number">' + esc(String(index + 1).padStart(2, "0")) + '</span>' +
          '<div><h3>' + esc(block.heading) + '</h3></div>' +
        '</div>' +
        block.turns.map(function (turn) {
          return '<div class="rehearsal-turn ' + (turn.speaker === "Patient" ? "patient" : "you") + '">' +
            '<span class="speaker-label">' + (turn.speaker === "Patient" ? "Patient" : "You") + '</span>' +
            '<div class="turn-lines">' +
            turn.lines.map(function (line) {
              var anchorClass = protectedLines[line] ? ' is-anchor' : "";
              var voiceAttr = "";
              if (turn.speaker === "Patient") {
                voiceAttr = ' data-voice-line="' + esc(line) + '" data-voice-index="' + esc(String(voiceLineIndex)) + '"';
                if (options.examMode && voiceClips[voiceLineIndex]) {
                  voiceAttr += ' data-voice-audio="' + esc(voiceClips[voiceLineIndex]) + '"';
                }
                voiceLineIndex += 1;
              }
              return '<p class="script-line' + anchorClass + '"' + voiceAttr + '><span class="line-quote">' + (options.examMode ? esc(line) : '&quot;' + esc(line) + '&quot;') + '</span></p>';
            }).join("") +
            '</div>' +
          '</div>';
        }).join("") +
      '</article>';
    }).join("") + '</div>';
  }

  function renderMockExamContent(currentCase) {
    return '<div class="mock-exam" data-mock-exam data-reading-seconds="120" data-total-seconds="600" data-patient-sex="male" data-patient-state="acute chest pain" data-mock-phase="reading">' +
      '<div class="mock-timer-bar" aria-live="polite">' +
        '<div class="mock-time-block">' +
          '<span class="mock-timer-label">Timer</span>' +
          '<strong data-mock-time>00:00</strong>' +
        '</div>' +
        '<p data-mock-state>Reading time</p>' +
        '<div class="mock-actions" aria-label="Timed run controls">' +
          '<button class="mock-control-button mock-voice-toggle" type="button" data-mock-voice aria-pressed="true" aria-label="Patient voice on" title="Patient voice">' +
            '<span class="mock-icon mock-icon-speaker" data-mock-voice-icon aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" focusable="false">' +
                '<path class="speaker-body" d="M4 9v6h4l5 4V5L8 9H4z"></path>' +
                '<path class="speaker-wave speaker-wave-1" d="M16 9.5c.8 1.2.8 3.8 0 5"></path>' +
                '<path class="speaker-wave speaker-wave-2" d="M18.5 7c1.7 2.4 1.7 7.6 0 10"></path>' +
                '<path class="speaker-slash" d="M5 5l14 14"></path>' +
              '</svg>' +
            '</span>' +
          '</button>' +
          '<button class="mock-control-button is-primary" type="button" data-mock-play aria-label="Play" title="Play">' +
            '<span class="mock-icon mock-icon-play" aria-hidden="true"></span>' +
          '</button>' +
          '<button class="mock-control-button" type="button" data-mock-pause aria-label="Pause" title="Pause">' +
            '<span class="mock-icon mock-icon-pause" aria-hidden="true"></span>' +
          '</button>' +
          '<button class="mock-control-button" type="button" data-mock-stop aria-label="Stop" title="Stop">' +
            '<span class="mock-icon mock-icon-stop" aria-hidden="true"></span>' +
          '</button>' +
        '</div>' +
        '<label class="mock-time-control">' +
          '<input type="range" min="0" max="600" step="1" value="0" data-mock-seek aria-label="Timed run time">' +
          '<strong data-mock-seek-label>00:00</strong>' +
        '</label>' +
        '<p class="mock-voice-note" data-mock-voice-state>Patient voice starts at 2:00.</p>' +
      '</div>' +
      '<section class="mock-phase is-reading" data-mock-reading>' +
        renderStationStemContent(currentCase) +
      '</section>' +
      '<section class="mock-phase is-speaking mock-speaking-stage" data-mock-speaking hidden>' +
        '<div class="mock-flow-guide" data-mock-flow-guide aria-hidden="true">' +
          '<span class="mock-flow-line"></span>' +
          '<span class="mock-flow-dot"></span>' +
        '</div>' +
        renderSpeakAloudContent(currentCase, { examMode: true }) +
      '</section>' +
    '</div>';
  }

  function renderStudyNotes(currentCase) {
    if (!currentCase.notes || !currentCase.notes.length) return "";

    function noteKind(title) {
      if (title === "Do not miss" || title === "What matters") return "Do not miss";
      if (title === "Exam-safe lines") return "Say aloud";
      if (title === "Memory drills") return "Memory line";
      return "Note";
    }

    function noteClass(title) {
      return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    return '<details class="study-notes-shell" id="what-matters">' +
      '<summary><span>Extra detail</span></summary>' +
      '<div class="study-notes-body">' +
        currentCase.notes.map(function (section) {
          return '<section class="study-note-section is-' + esc(noteClass(section.title)) + '">' +
            '<div class="study-note-label">' + esc(noteKind(section.title)) + '</div>' +
            '<div class="study-note-content">' +
              '<h3>' + esc(section.title) + '</h3>' +
              '<ol class="study-note-list">' + section.items.map(function (item, index) {
                return '<li><span>' + esc(index + 1) + '</span><p>' + esc(item) + '</p></li>';
              }).join("") + '</ol>' +
            '</div>' +
          '</section>';
        }).join("") +
        (currentCase.references && currentCase.references.length ? '<details class="study-note-sources"><summary>Sources</summary>' + list(currentCase.references, "plain-list") + '</details>' : "") +
      '</div>' +
    '</details>';
  }

  function renderWhatMattersContent(currentCase) {
    if (!currentCase.notes || !currentCase.notes.length) return '<p class="section-help">No extra detail for this case yet.</p>';

    function noteLabel(title) {
      if (title === "Do not miss" || title === "What matters") return "Do not miss";
      if (title === "Exam-safe lines") return "Say aloud";
      if (title === "Memory drills") return "Memory line";
      return title;
    }

    return '<div class="study-notes-body is-tabbed">' +
      currentCase.notes.map(function (section) {
        return '<section class="study-note-section is-' + esc(section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")) + '">' +
          '<div class="study-note-label">' + esc(noteLabel(section.title)) + '</div>' +
          '<div class="study-note-content">' +
            '<ol class="study-note-list">' + section.items.map(function (item, index) {
              return '<li><span>' + esc(index + 1) + '</span><p>' + esc(item) + '</p></li>';
            }).join("") + '</ol>' +
          '</div>' +
        '</section>';
      }).join("") +
    '</div>';
  }

  function renderHintsInlinePanel(currentCase) {
    return '<div class="case-inline-hints" data-hint-scope>' + renderHintsPanel(currentCase).replace(' hidden>', '>') + '</div>';
  }

  function renderToolsDrawer(context, mode) {
    var currentCase = context.case || window.AMCStore.getCurrentCase();
    var warmup = context.warmup || (currentCase && window.AMCStore.getWarmupById(currentCase.warmupId));
    var tabs;
    var panels;

    if (mode === "warmup") {
      tabs = [
        ["pathway", "Cases"],
        ["case", "Start speaking"]
      ];
      panels = [
        '<section class="tool-panel" data-tool-panel="pathway"><h3>Cases</h3><p>Current area: ' + esc(context.phase.title) + '</p><p>Current pattern: ' + esc(context.pattern.title) + '</p><a class="button secondary" href="' + window.AMCRouter.href("pathway") + '">Open cases</a></section>',
        '<section class="tool-panel" data-tool-panel="case" hidden><h3>Start speaking</h3><p>' + esc(currentCase.title) + '</p><a class="button secondary" href="' + window.AMCRouter.href("case") + '">Start speaking</a></section>'
      ];
    } else {
      tabs = [
        ["hints", "Hints"]
      ];
      panels = [
        renderHintsPanel(currentCase)
      ];
    }

    return '<aside class="tools-drawer' + (tabs.length === 1 ? " is-single-tool" : "") + '" data-tools-drawer hidden aria-modal="true" role="dialog" aria-label="Hints">' +
      '<button class="drawer-backdrop" type="button" data-tools-backdrop aria-label="Close hints"></button>' +
      '<div class="drawer-sheet">' +
        '<div class="drawer-head"><h2>Hints</h2><button type="button" data-tools-close aria-label="Close hints">Close</button></div>' +
        '<div class="tool-tabs" role="tablist">' + tabs.map(function (tab, index) {
          return '<button class="tool-tab' + (index === 0 ? " is-active" : "") + '" type="button" role="tab" aria-selected="' + String(index === 0) + '" data-tool-tab="' + esc(tab[0]) + '">' + esc(tab[1]) + '</button>';
        }).join("") + '</div>' +
        '<div class="tool-panels">' + panels.join("") + '</div>' +
      '</div>' +
    '</aside>';
  }

  function renderHintsPanel(currentCase) {
    var groups = {};
    currentCase.hints.forEach(function (hint) {
      groups[hint.group] = groups[hint.group] || [];
      groups[hint.group].push(hint);
    });

    function hintGroupLabel(group) {
      if (group === "Recognise danger") return "Spot danger";
      if (group === "Explain and act") return "Act early";
      if (group === "Safety, time, close") return "Close safely";
      return group;
    }

    var choices = Object.keys(groups).map(function (group) {
      return '<section class="hint-group"><h4>' + esc(hintGroupLabel(group)) + '</h4><div class="hint-choice-list">' + groups[group].map(function (hint) {
        return '<button class="hint-choice" type="button" data-hint-choice="' + esc(hint.id) + '"><span>' + esc(hint.label) + '</span></button>';
      }).join("") + '</div></section>';
    }).join("");

    var cards = currentCase.hints.map(function (hint) {
      return '<article class="hint-card" data-hint-card="' + esc(hint.id) + '" tabindex="-1" hidden>' +
        '<h4>' + esc(hint.title) + '</h4>' +
        '<div class="hint-note-row is-missed"><span>Missed</span><p>' + esc(hint.missed) + '</p></div>' +
        '<div class="hint-say-line"><span>Say this</span><p>' + esc(hint.say) + '</p></div>' +
        '<div class="hint-note-row"><span>Why it matters</span><p>' + esc(hint.why) + '</p></div>' +
        '<div class="hint-note-row"><span>Practise now</span><p>Say this line three times, then return to Start speaking.</p></div>' +
        '<div class="hint-actions">' +
          '<button class="button secondary" type="button" data-hint-back>Back</button>' +
        '</div>' +
      '</article>';
    }).join("");

    return '<section class="tool-panel hint-panel" data-tool-panel="hints" hidden>' +
      '<div class="hint-start"><p>Choose one thing to improve.</p><small>Choose one thing you missed. One Hint will open.</small></div>' +
      '<div class="hint-choices">' + choices + '</div>' +
      '<div class="hint-result" data-hint-result hidden>' + cards + '</div>' +
    '</section>';
  }

  function renderNotesPanel(currentCase) {
    return '<section class="tool-panel" data-tool-panel="notes" hidden>' +
      '<h3>Extra detail</h3>' +
      currentCase.notes.map(function (section) {
        return '<details class="note-details"><summary>' + esc(section.title) + '</summary>' + list(section.items, "plain-list") + '</details>';
      }).join("") +
      '<details class="note-details"><summary>Sources</summary>' + list(currentCase.references, "plain-list") + '</details>' +
    '</section>';
  }

  window.AMCRenderers = {
    renderHome: renderHome,
    renderPathway: renderPathway,
    renderWarmup: renderWarmup,
    renderCase: renderCase,
    renderMiniHeader: miniHeader,
    renderFloatingNav: floatingNav,
    renderToolsDrawer: renderToolsDrawer
  };
})();
