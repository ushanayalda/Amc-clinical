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
      '<p>(c) 2026 Ushana Yalda. All rights reserved.</p>' +
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
            '<p class="home-case-label">Current position</p>' +
            '<h2 id="home-current-case">' + esc(patternTitle) + '</h2>' +
            '<p class="home-current-case"><span>Today&apos;s case</span><strong>' + esc(caseTitle) + '</strong><em>current</em></p>' +
          '</div>' +
          '<div class="home-primary-start">' +
            '<p>Start with the stem. Give it a go.</p>' +
            '<div class="home-action-row">' +
              '<a class="home-start-link" href="' + window.AMCRouter.href("case", "#station-stem") + '">Continue Case 1</a>' +
            '</div>' +
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
    var patternTitle = currentPattern && currentPattern.title ? currentPattern.title : "Dangerous Chest Pain";
    var caseTitle = currentCase && currentCase.title ? currentCase.title : "Classic Chest Pain";

    function renderAllCasesIndex() {
      var phases = context.phases || [];
      var patterns = context.patterns || [];
      var cases = context.cases || [];

      function caseHref(caseItem) {
        return window.AMCRouter.href("case", "#station-stem");
      }

      function renderCaseItem(caseItem) {
        var active = currentCase && caseItem.id === currentCase.id;
        return '<li>' +
          '<a class="case-index-case-link' + (active ? " is-current" : "") + '" href="' + caseHref(caseItem) + '">' +
            '<span>' + esc(caseItem.displayNumber || "Case") + '</span>' +
            '<strong>' + esc(caseItem.title) + '</strong>' +
          '</a>' +
        '</li>';
      }

      function renderPattern(pattern) {
        var patternCases = cases.filter(function (caseItem) {
          return (pattern.caseIds || []).indexOf(caseItem.id) !== -1;
        });
        var active = currentPattern && pattern.id === currentPattern.id;
        var overviewLink = pattern.warmupId ? '<a class="pattern-overview-link" href="' + window.AMCRouter.href("warmup") + '">Overview</a>' : "";

        return '<details class="case-index-pattern"' + (active ? " open" : "") + '>' +
          '<summary><strong>' + esc(pattern.title) + '</strong>' + overviewLink + '</summary>' +
          '<div class="case-index-pattern-body">' +
            (patternCases.length
              ? '<ul class="case-index-case-list">' + patternCases.map(renderCaseItem).join("") + '</ul>'
              : '<p class="case-index-empty">No cases added yet.</p>') +
          '</div>' +
        '</details>';
      }

      function renderPhase(phase) {
        var phasePatterns = patterns.filter(function (pattern) {
          return (phase.patternIds || []).indexOf(pattern.id) !== -1 || pattern.phaseId === phase.id;
        });
        var active = currentContext && currentContext.phase && phase.id === currentContext.phase.id;

        return '<details class="case-index-phase"' + (active ? " open" : "") + '>' +
          '<summary><strong>' + esc(phase.title) + '</strong></summary>' +
          '<div class="case-index-phase-body">' +
            (phasePatterns.length
              ? phasePatterns.map(renderPattern).join("")
              : '<p class="case-index-empty">No patterns added yet.</p>') +
          '</div>' +
        '</details>';
      }

      return '<section class="case-index-shell" aria-labelledby="all-cases-heading">' +
        '<h2 id="all-cases-heading">All cases</h2>' +
        '<p class="case-index-legend" aria-hidden="true"><span>Phase</span><span>Pattern</span><span>Case</span></p>' +
        '<div class="case-index-list">' + phases.map(renderPhase).join("") + '</div>' +
      '</section>';
    }

    appEl.innerHTML = shell(
      miniHeader(currentContext || context, "pathway") +
      '<section class="study-page cases-page pathway-page">' +
        '<header class="cases-head">' +
          '<h1>Cases</h1>' +
          '<p class="lead">Choose where to continue.</p>' +
        '</header>' +
        '<section class="cases-continue" aria-labelledby="cases-current-heading">' +
          '<p class="section-kicker cases-current-path"><span>Continue</span><strong>' + esc(patternTitle) + '</strong></p>' +
          '<h2 id="cases-current-heading"><a class="case-title-link" href="' + window.AMCRouter.href("case", "#station-stem") + '">' + esc(caseTitle) + '</a></h2>' +
        '</section>' +
        renderAllCasesIndex() +
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
        body: ["Recognise dangerous chest pain. Do not wait to prove it."]
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
          '<a class="button primary" href="' + window.AMCRouter.href("case", "#station-stem") + '">Continue to stem</a>' +
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
      ["mock", "Timed run", "timed-run"],
      ["matters", "Do not miss", "what-matters"],
      ["hints", "Hints", "hints"]
    ];

    var tabButtons = tabs.map(function (tab, index) {
      var active = index === 0;
      return '<button class="case-tab' + (active ? " is-active" : "") + '" type="button" role="tab" aria-selected="' + String(active) + '" aria-controls="' + esc(tab[2]) + '" data-case-tab="' + esc(tab[0]) + '" data-case-hash="' + esc(tab[2]) + '"><span class="case-tab-step" aria-hidden="true"></span><span>' + esc(tab[1]) + '</span></button>';
    }).join("") +
      '<a class="case-tab case-tab-link" href="' + window.AMCRouter.href("pathway") + '">Cases</a>';

    return '<section class="case-tabs-shell" data-case-tabs data-active-case-tab="stem">' +
      '<div class="case-tab-row" role="tablist" aria-label="Case sections">' + tabButtons + '</div>' +
      '<div class="case-tab-panels">' +
        renderCaseTabPanel("stem", "station-stem", true, renderStationStemContent(currentCase)) +
        renderCaseTabPanel("speak", "speak-aloud", false, renderSpeakAloudContent(currentCase)) +
        renderCaseTabPanel("mock", "timed-run", false, renderMockExamContent(currentCase)) +
        renderCaseTabPanel("matters", "what-matters", false, renderWhatMattersContent(currentCase)) +
        renderCaseTabPanel("hints", "hints", false, renderHintsInlinePanel(currentCase)) +
      '</div>' +
      renderCaseMobileActions() +
    '</section>';
  }

  function renderCaseMobileActions() {
    return '<nav class="case-bottom-actions" aria-label="Quick case actions">' +
      '<a class="case-bottom-action is-primary" href="#speak-aloud">Start speaking</a>' +
      '<a class="case-bottom-action" href="#timed-run">Next</a>' +
      '<a class="case-bottom-action" href="#hints">Hint</a>' +
    '</nav>';
  }

  function renderCaseTabPanel(tabId, panelId, active, content) {
    return '<section class="case-tab-panel" id="' + esc(panelId) + '" role="tabpanel" data-case-tab-panel="' + esc(tabId) + '"' + (active ? "" : " hidden") + '>' + content + '</section>';
  }

  function renderRunComplete() {
    var protectedLines = [
      "This may be coming from your heart.",
      "I am arranging an ambulance now.",
      "You should not drive yourself.",
      "I will not delay transfer for blood tests.",
      "I will give aspirin if safe.",
      "I will give oxygen only if needed.",
      "I will check safety before chest pain spray or tablet."
    ];

    return '<section class="run-complete mock-phase" data-mock-complete aria-labelledby="run-complete-heading" tabindex="-1" hidden>' +
      '<h2 id="run-complete-heading">Run complete.</h2>' +
      '<p class="run-next-line">Choose one thing to improve.</p>' +
      '<div class="run-complete-actions">' +
        '<button class="button primary" type="button" data-open-tools="hints">Hints</button>' +
        '<a class="button secondary" href="#speak-aloud">Repeat</a>' +
        '<a class="small-action" href="' + window.AMCRouter.href("pathway") + '">Back to Cases</a>' +
      '</div>' +
      '<details class="protected-lines-drawer">' +
        '<summary>Safety lines</summary>' +
        '<ul class="protected-list">' + protectedLines.map(function (line) {
          return '<li>' + esc(line) + '</li>';
        }).join("") + '</ul>' +
      '</details>' +
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
    return '<div class="mock-exam" data-mock-exam data-breath-seconds="5" data-reading-seconds="120" data-total-seconds="600" data-patient-sex="male" data-patient-state="acute chest pain" data-mock-phase="settle">' +
      '<div class="mock-timer-bar" aria-live="polite">' +
        '<div class="mock-time-block">' +
          '<span class="mock-timer-label">Timer</span>' +
          '<strong data-mock-time>00:00</strong>' +
        '</div>' +
        '<p data-mock-state>First breath</p>' +
        '<div class="mock-actions" aria-label="Timer controls">' +
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
          '<span>Time</span>' +
          '<input type="range" min="0" max="600" step="1" value="0" data-mock-seek aria-label="Timer time">' +
          '<strong data-mock-seek-label>00:00</strong>' +
        '</label>' +
        '<p class="mock-voice-note" data-mock-voice-state>Patient voice starts at 2:00.</p>' +
      '</div>' +
      '<section class="mock-phase mock-breath-stage" data-mock-breath>' +
        '<div class="breath-card">' +
          '<h2>Take one calm breath.</h2>' +
          '<p class="breath-caption">The stem appears 5 seconds after you start.</p>' +
          '<ol class="breath-steps">' +
            '<li>Breathe in through your nose.</li>' +
            '<li>Add a tiny second breath.</li>' +
            '<li>Let it out slowly through your mouth.</li>' +
          '</ol>' +
        '</div>' +
      '</section>' +
      '<section class="mock-phase is-reading" data-mock-reading hidden>' +
        renderStationStemContent(currentCase) +
      '</section>' +
      '<section class="mock-phase is-speaking mock-speaking-stage" data-mock-speaking hidden>' +
        '<div class="mock-flow-guide" data-mock-flow-guide aria-hidden="true">' +
          '<span class="mock-flow-line"></span>' +
          '<span class="mock-flow-dot"></span>' +
        '</div>' +
        renderSpeakAloudContent(currentCase, { examMode: true }) +
      '</section>' +
      renderRunComplete() +
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

    function noteSection(title) {
      return currentCase.notes.find(function (section) {
        return section.title === title;
      });
    }

    function noteLabel(title) {
      if (title === "Do not miss" || title === "What matters") return "Do not miss";
      if (title === "Exam-safe lines") return "Say aloud / Fail Points";
      if (title === "Memory drills") return "Memory line";
      return title;
    }

    function renderVisualMap() {
      var map = currentCase.doNotMissMap;
      var fullNotes = currentCase.notes.map(function (section) {
        return '<section class="study-note-section is-' + esc(section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")) + '">' +
          '<div class="study-note-label">' + esc(noteLabel(section.title)) + '</div>' +
          '<div class="study-note-content">' +
            '<ol class="study-note-list">' + section.items.map(function (item, index) {
              return '<li><span>' + esc(index + 1) + '</span><p>' + esc(item) + '</p></li>';
            }).join("") + '</ol>' +
          '</div>' +
        '</section>';
      }).join("");

      function stepIcon(label) {
        if (label === "See") return "👀";
        if (label === "Say") return "🗣";
        if (label === "Do") return "✓";
        return "";
      }

      function itemText(item) {
        return item && typeof item === "object" ? item.text : item;
      }

      function itemMark(item) {
        return item && typeof item === "object" ? item.mark : "";
      }

      function markedItem(item) {
        var mark = itemMark(item);
        return '<li>' + (mark ? '<span class="item-mark" aria-hidden="true">' + esc(mark) + '</span>' : "") + esc(itemText(item)) + '</li>';
      }

      function stepBlock(label, items) {
        if (!items || !items.length) return "";
        return '<div class="scene-step scene-step-' + esc(label.toLowerCase()) + '">' +
          '<h3><span aria-hidden="true">' + esc(stepIcon(label)) + '</span>' + esc(label) + '</h3>' +
          '<ul>' + items.map(function (item) {
            return markedItem(item);
          }).join("") + '</ul>' +
        '</div>';
      }

      function sceneIcon(scene) {
        if (scene.iconImage) {
          return '<img class="scene-icon-image" src="' + esc(scene.iconImage) + '" alt="' + esc(scene.iconAlt || scene.title || "") + '">';
        }
        return '<strong aria-hidden="true">' + esc(scene.icon) + '</strong>';
      }

      return '<div class="do-not-miss-scenes">' +
        '<section class="scene-prime" aria-label="Do not miss cue">' +
          '<p>Do not miss</p>' +
          '<ol>' + map.prime.map(function (item) {
            return '<li>' + esc(item) + '</li>';
          }).join("") + '</ol>' +
        '</section>' +
        '<section class="danger-scenes" aria-label="Danger scenes">' + map.scenes.map(function (scene) {
          return '<article class="danger-scene tone-' + esc(scene.tone) + '">' +
            '<header class="scene-head">' +
              '<span class="scene-signal"><em>' + esc(scene.color) + '</em>' + sceneIcon(scene) + '</span>' +
              '<div><h2>' + esc(scene.title) + '</h2><p>' + esc(scene.clinical) + '</p></div>' +
            '</header>' +
            '<div class="scene-steps">' +
              stepBlock("See", scene.see) +
              stepBlock("Say", scene.say) +
              stepBlock("Do", scene.do) +
            '</div>' +
          '</article>';
        }).join("") + '</section>' +
        '<section class="support-zones">' +
          '<article class="support-zone is-safe">' +
            '<h2><span aria-hidden="true">🛏</span>' + esc(map.safe.title) + '</h2>' +
            '<ul>' + map.safe.items.map(function (item) {
              return markedItem(item);
            }).join("") + '</ul>' +
          '</article>' +
          '<article class="support-zone is-medicines">' +
            '<h2><span aria-hidden="true">💊</span>Medicines</h2>' +
            '<div class="medicine-grid">' + map.medicines.map(function (group) {
              return '<section><h3>' + esc(group.title) + '</h3><ul>' + group.items.map(function (item) {
                return markedItem(item);
              }).join("") + '</ul></section>';
            }).join("") + '</div>' +
          '</article>' +
        '</section>' +
        '<section class="finish-check">' +
          '<h2><span aria-hidden="true">🛑</span>Before you finish</h2>' +
          '<ul>' + map.finishCheck.map(function (item) {
            return '<li><button class="finish-check-button" type="button" data-finish-check data-state="blank" data-finish-label="' + esc(item) + '" aria-pressed="false" aria-label="' + esc(item) + ': not marked"><span class="finish-check-mark" aria-hidden="true"></span><span class="finish-check-text">' + esc(item) + '</span></button></li>';
          }).join("") + '</ul>' +
        '</section>' +
        '<section class="one-line">' +
          '<h2><span aria-hidden="true">🎤</span>One line</h2>' +
          '<p>' + map.oneLine.map(esc).join('<br>') + '</p>' +
        '</section>' +
        '<details class="full-notes-drawer">' +
          '<summary>Full notes</summary>' +
          '<div class="study-notes-body is-tabbed">' + fullNotes + '</div>' +
        '</details>' +
      '</div>';
    }

    if (currentCase.doNotMissMap) {
      return renderVisualMap() + renderSourceBasis(currentCase);
    }

    return '<div class="retrieval-card">' +
      '<h2>Cover this.</h2>' +
      '<p>Say the memory line aloud.</p>' +
      '<a class="small-action" href="#timed-run">Then return to Timed run</a>' +
    '</div>' +
    '<div class="study-notes-body is-tabbed">' +
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
    '</div>' +
    renderSourceBasis(currentCase);
  }

  function renderSourceBasis(currentCase) {
    var basis = currentCase.sourceBasis;
    if (!basis && (!currentCase.references || !currentCase.references.length)) return "";

    var basisRows = basis && basis.basis ? basis.basis.map(function (item) {
      return '<li><span>' + esc(item.decision) + '</span><p>' + esc(item.match) + '</p></li>';
    }).join("") : "";

    var verifiedLinks = basis && basis.verifiedLinks ? basis.verifiedLinks.map(function (source) {
      return '<li><a href="' + esc(source.url) + '" target="_blank" rel="noreferrer">' + esc(source.title) + '</a><span>' + esc(source.year) + '</span></li>';
    }).join("") : "";

    return '<details class="source-basis-card">' +
      '<summary><span>Clinical source basis</span></summary>' +
      '<div class="source-basis-body">' +
        (basis ? '<dl class="source-basis-meta">' +
          '<div><dt>Last checked</dt><dd>' + esc(basis.lastChecked) + '</dd></div>' +
          '<div><dt>Website role</dt><dd>' + esc(basis.websiteRole) + '</dd></div>' +
        '</dl>' : "") +
        (basisRows ? '<ol class="source-basis-list">' + basisRows + '</ol>' : "") +
        (verifiedLinks ? '<div class="source-link-block"><h3>Verified links</h3><ul>' + verifiedLinks + '</ul></div>' : "") +
        (currentCase.references && currentCase.references.length ? '<details class="source-reference-list"><summary>Listed references</summary>' + list(currentCase.references, "plain-list") + '</details>' : "") +
      '</div>' +
    '</details>';
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
        '<section class="tool-panel" data-tool-panel="pathway"><h3>Cases</h3><p>Current position: ' + esc(context.phase.title) + ' / ' + esc(context.pattern.title) + '</p><a class="button secondary" href="' + window.AMCRouter.href("pathway") + '">Open cases</a></section>',
        '<section class="tool-panel" data-tool-panel="case" hidden><h3>Start speaking</h3><p>' + esc(currentCase.title) + '</p><a class="button secondary" href="' + window.AMCRouter.href("case", "#speak-aloud") + '">Start speaking</a></section>'
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
    var stageOrder = [
      { key: "see", label: "See", cue: "Spot danger" },
      { key: "say", label: "Say", cue: "Make it clear" },
      { key: "act", label: "Act", cue: "Move early" },
      { key: "close", label: "Close", cue: "Land the plan" }
    ];
    var stages = stageOrder.reduce(function (memo, stage) {
      memo[stage.key] = [];
      return memo;
    }, {});

    function hintStage(hint) {
      if (hint.id === "technical-language" || hint.id === "decision-point") return "say";
      if (hint.id === "first-action" || hint.id === "escalation" || hint.id === "delayed-transfer-tests" || hint.id === "medication-safety") return "act";
      if (hint.group === "Safety, time, close") return "close";
      return "see";
    }

    currentCase.hints.forEach(function (hint) {
      stages[hintStage(hint)].push(hint);
    });

    var choices = stageOrder.map(function (stage) {
      if (!stages[stage.key].length) return "";
      return '<section class="hint-group hint-group-' + esc(stage.key) + '">' +
        '<h4><span>' + esc(stage.label) + '</span><small>' + esc(stage.cue) + '</small></h4>' +
        '<div class="hint-choice-list">' + stages[stage.key].map(function (hint) {
          return '<button class="hint-choice" type="button" data-hint-choice="' + esc(hint.id) + '">' +
            '<span class="hint-choice-text">' + esc(hint.label) + '</span>' +
          '</button>';
        }).join("") + '</div>' +
      '</section>';
    }).join("");

    var cards = currentCase.hints.map(function (hint) {
      return '<article class="hint-card" data-hint-card="' + esc(hint.id) + '" tabindex="-1" hidden>' +
        '<h4>' + esc(hint.title) + '</h4>' +
        '<div class="hint-say-line"><span>Say this</span><p>' + esc(hint.say) + '</p></div>' +
        '<div class="hint-note-row is-missed"><span>What slipped</span><p>' + esc(hint.missed) + '</p></div>' +
        '<div class="hint-note-row"><span>Why this helps</span><p>' + esc(hint.why) + '</p></div>' +
        '<div class="hint-note-row is-practise"><span>Practise now</span><p>Say this line three times. Then return to Start speaking.</p></div>' +
        '<div class="hint-actions">' +
          '<button class="button secondary" type="button" data-hint-back>Back to Hints</button>' +
          '<a class="button primary" href="#speak-aloud">Start speaking</a>' +
        '</div>' +
      '</article>';
    }).join("");

    return '<section class="tool-panel hint-panel" data-tool-panel="hints" hidden>' +
      '<div class="hint-start"><p>Choose one thing to improve.</p><small>One hint. One line. Back to speaking.</small></div>' +
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
