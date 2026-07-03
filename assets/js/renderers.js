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
    return '<footer class="site-footer">' +
      '<p>(c) 2026 Dr. Ushana Yalda. All rights reserved.</p>' +
      '<p>' + esc(app.title || "AMC Clinical Pathway") + ' is an independent educational resource. Not affiliated with or endorsed by the Australian Medical Council.</p>' +
      "</footer>";
  }

  function miniHeader(context, label) {
    var app = context.app || {};

    return '<header class="mini-header is-simple">' +
      '<a class="mini-brand" href="' + window.AMCRouter.href("home") + '">' + esc(app.shortTitle || app.title || "AMC Pathway") + "</a>" +
      "</header>";
  }

  function floatingNav(active, hasTools) {
    if (active === "home" || active === "pathway") return "";

    var items = [
      { key: "home", label: "Home", href: window.AMCRouter.href("home") },
      { key: "pathway", label: "Cases", href: window.AMCRouter.href("pathway") },
      { key: "warmup", label: "Before", href: window.AMCRouter.href("warmup") },
      { key: "case", label: "Case", href: window.AMCRouter.href("case") }
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

    appEl.innerHTML = shell(
      '<section class="home-hero">' +
        '<header class="brand-block home-brand">' +
          '<p class="eyebrow">Prepared by ' + esc(app.preparedBy) + '</p>' +
          '<h1>' + esc(app.title) + '</h1>' +
          '<p class="tagline">' + esc(app.tagline) + '</p>' +
        '</header>' +
        '<section class="home-launch" aria-labelledby="home-current-case">' +
          '<p class="home-case-label">Ready when you are</p>' +
          '<div class="home-position">' +
            '<h2 id="home-current-case">' + esc(currentCase && currentCase.title) + '</h2>' +
            '<p class="home-focus">A short first try is enough.</p>' +
          '</div>' +
          '<div class="home-action-row" aria-label="Homepage actions">' +
            '<a class="home-start-link" href="' + window.AMCRouter.href("case") + '">Start Case 1</a>' +
            '<a class="home-soft-link" href="' + window.AMCRouter.href("pathway") + '">Cases</a>' +
          '</div>' +
          '<p class="home-system-note">A rough run counts.</p>' +
        '</section>' +
      '</section>',
      context,
      "home"
    );
  }

  function renderPathway(appEl, context) {
    var phases = context.phases || [];
    var patterns = context.patterns || [];
    var cases = context.cases || [];
    var warmups = context.warmups || [];
    var currentContext = window.AMCStore.getCaseContext(context.currentCase && context.currentCase.id);

    var phaseMarkup = phases.map(function (phase) {
      var phasePatterns = patterns.filter(function (pattern) {
        return pattern.phaseId === phase.id;
      });
      var quiet = phase.status !== "active" ? " quiet" : "";
      var phaseOpen = phase.status === "active" ? " open" : "";
      var branchMarkup = phasePatterns.map(function (pattern) {
        var warmup = warmups.find(function (item) { return item.id === pattern.warmupId; });
        var patternCases = cases.filter(function (item) {
          return (pattern.caseIds || []).indexOf(item.id) !== -1;
        });
        var patternOpen = pattern.status === "active" ? " open" : "";

        return '<details class="pattern-branch"' + patternOpen + '>' +
          '<summary class="pattern-summary">' +
            '<span class="path-index">Focus ' + esc(pattern.order) + '</span>' +
            '<span class="path-title">' + esc(pattern.title) + '</span>' +
          '</summary>' +
          '<div class="pattern-body">' +
            '<div class="route-items">' +
              (warmup ? '<a class="route-item" href="' + window.AMCRouter.href("warmup") + '"><span>Before</span><strong>' + esc(warmup.title) + '</strong></a>' : "") +
              patternCases.map(function (currentCase) {
                return '<a class="route-item current" href="' + window.AMCRouter.href("case") + '"><span>' + esc(currentCase.displayNumber) + '</span><strong>' + esc(currentCase.title) + '</strong></a>';
              }).join("") +
            '</div>' +
          '</div>' +
        '</details>';
      }).join("");

      return '<details class="pathway-phase' + quiet + '"' + phaseOpen + '>' +
        '<summary class="phase-summary">' +
          '<span class="path-index">Set ' + esc(phase.order) + '</span>' +
          '<span class="path-title">' + esc(phase.title) + '</span>' +
        '</summary>' +
        (branchMarkup ? '<div class="phase-branch">' + branchMarkup + '</div>' : "") +
      '</details>';
    }).join("");

    appEl.innerHTML = shell(
      miniHeader(currentContext || context, "pathway") +
      '<section class="study-page pathway-page">' +
        '<h1>Cases</h1>' +
        '<div class="pathway-stack">' + phaseMarkup + '</div>' +
      '</section>',
      currentContext || context,
      "pathway"
    );
  }

  function renderWarmup(appEl, context) {
    var warmup = context.warmup;

    var flow = [
      {
        title: "Spot it",
        body: [warmup.trigger, warmup.dangerFeatures.join(", ") + "."]
      },
      {
        title: "Act",
        body: [warmup.meaning, warmup.warning]
      },
      {
        title: "Do not miss",
        body: warmup.doNotMiss
      },
      {
        title: "First move",
        body: warmup.firstActions
      },
      {
        title: "Say",
        body: warmup.sayAloud
      },
      {
        title: "Ready",
        body: [warmup.readyCheck]
      }
    ];

    appEl.innerHTML = shell(
      miniHeader(context, "warmup") +
      '<section class="study-page warmup-page">' +
        '<p class="section-kicker">Before the case</p>' +
        '<h1>' + esc(warmup.title) + '</h1>' +
        '<p class="lead">' + esc(warmup.subtitle) + '</p>' +
        '<div class="memory-flow">' + flow.map(function (step, index) {
          var bodyMarkup = list(step.body, "plain-list");
          if (step.title === "See it") {
            bodyMarkup = '<p>' + esc(warmup.trigger) + '</p>' +
              '<div class="signal-chips">' + warmup.dangerFeatures.map(function (feature) {
                return '<span>' + esc(feature) + '</span>';
              }).join("") + '</div>';
          } else if (step.title === "Do not miss") {
            bodyMarkup = '<div class="cause-list">' + step.body.map(function (cause) {
              return '<span>' + esc(cause) + '</span>';
            }).join("") + '</div>';
          } else if (step.title === "Say") {
            bodyMarkup = '<p class="say-line">' + esc(step.body[0]) + '</p>';
          }
          return '<article class="flow-step">' +
            '<span class="flow-number">' + esc(index + 1) + '</span>' +
            '<div><h2>' + esc(step.title) + '</h2>' +
            bodyMarkup +
            '</div>' +
          '</article>';
        }).join("") + '</div>' +
        '<div class="cta-row single">' +
          '<a class="button primary" href="' + window.AMCRouter.href("case") + '">Start Case 1</a>' +
        '</div>' +
      '</section>',
      context,
      "warmup"
    );
  }

  function renderCase(appEl, context) {
    var currentCase = context.case;
    var tools = renderToolsDrawer(context, "case");
    var duration = (currentCase.duration || "").replace(" minutes", " min").replace(" minute", " min");

    appEl.innerHTML = shell(
      miniHeader(context, "case") +
      '<section class="study-page case-page">' +
        '<div class="case-cockpit">' +
          '<h1>' + esc(currentCase.title) + '</h1>' +
          '<p class="case-meta">' + esc(currentCase.displayNumber) + '. ' + esc(currentCase.setting) + '. ' + esc(duration) + '.</p>' +
        '</div>' +
        renderStationStem(currentCase) +
        renderSpeakAloud(currentCase) +
        '<div class="cta-row single case-bottom-actions">' +
          '<button class="button secondary" type="button" data-open-tools="hints">Hints</button>' +
        '</div>' +
        renderStudyNotes(currentCase) +
      '</section>',
      context,
      "case",
      tools
    );
  }

  function renderStationStem(currentCase) {
    return '<section class="content-section" id="station-stem">' +
      '<div class="section-head"><h2>Stem</h2></div>' +
      '<div class="reader-card">' +
        currentCase.stem.map(function (line) {
          return '<p>' + esc(line) + '</p>';
        }).join("") +
        '<p>Tasks:</p>' +
        list(currentCase.tasks, "numbered-list") +
        '<p>Time: ' + esc(currentCase.duration) + '.</p>' +
      '</div>' +
    '</section>';
  }

  function renderSpeakAloud(currentCase) {
    return '<section class="content-section speak-section" id="speak-aloud">' +
      '<div class="section-head"><h2>Run</h2></div>' +
      '<div class="script-stack">' + currentCase.script.map(function (block, index) {
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
                var anchorClass = block.anchor && line === block.anchor ? ' is-anchor' : "";
                return '<p class="script-line' + anchorClass + '">' + esc(line) + '</p>';
              }).join("") +
              '</div>' +
            '</div>';
          }).join("") +
        '</article>';
      }).join("") + '</div>' +
    '</section>';
  }

  function renderStudyNotes(currentCase) {
    if (!currentCase.notes || !currentCase.notes.length) return "";

    function noteKind(title) {
      if (title === "Thinking map") return "Map";
      if (title === "Exam lines") return "Say";
      if (title === "Memory lines") return "Memory";
      return "Note";
    }

    function noteClass(title) {
      return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    return '<details class="study-notes-shell" id="study-notes">' +
      '<summary><span>Study notes</span></summary>' +
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

  function renderToolsDrawer(context, mode) {
    var currentCase = context.case || window.AMCStore.getCurrentCase();
    var warmup = context.warmup || (currentCase && window.AMCStore.getWarmupById(currentCase.warmupId));
    var tabs;
    var panels;

    if (mode === "warmup") {
      tabs = [
        ["pathway", "Cases"],
        ["case", "Case 1"]
      ];
      panels = [
        '<section class="tool-panel" data-tool-panel="pathway"><h3>Cases</h3><p>Current area: ' + esc(context.phase.title) + '</p><p>Current pattern: ' + esc(context.pattern.title) + '</p><a class="button secondary" href="' + window.AMCRouter.href("pathway") + '">Open cases</a></section>',
        '<section class="tool-panel" data-tool-panel="case" hidden><h3>Case 1</h3><p>' + esc(currentCase.title) + '</p><a class="button secondary" href="' + window.AMCRouter.href("case") + '">Start Case 1</a></section>'
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

    var choices = Object.keys(groups).map(function (group) {
      return '<div class="hint-group"><h4>' + esc(group) + '</h4>' + groups[group].map(function (hint) {
        return '<button class="hint-choice" type="button" data-hint-choice="' + esc(hint.id) + '">' + esc(hint.label) + '</button>';
      }).join("") + '</div>';
    }).join("");

    var cards = currentCase.hints.map(function (hint) {
      return '<article class="hint-card" data-hint-card="' + esc(hint.id) + '" hidden>' +
        '<h4>' + esc(hint.title) + '</h4>' +
        '<dl>' +
          '<dt>Look for</dt><dd>' + esc(hint.missed) + '</dd>' +
          '<dt>Say</dt><dd class="say-line">' + esc(hint.say) + '</dd>' +
          '<dt>Try again</dt><dd>' + esc(hint.practise) + '</dd>' +
        '</dl>' +
        '<button class="button secondary" type="button" data-hint-back>Back to hints</button>' +
      '</article>';
    }).join("");

    return '<section class="tool-panel" data-tool-panel="hints" hidden>' +
      '<div class="hint-choices">' + choices + '</div>' +
      '<div class="hint-result" data-hint-result hidden>' + cards + '</div>' +
    '</section>';
  }

  function renderNotesPanel(currentCase) {
    return '<section class="tool-panel" data-tool-panel="notes" hidden>' +
      '<h3>Notes</h3>' +
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
