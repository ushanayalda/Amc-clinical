(function () {
  "use strict";

  var app = document.getElementById("app");
  var cases = window.AMC_CASES || [];
  var viewModel = window.AMCViewModel;
  var requestedCaseId = new URLSearchParams(window.location.search).get("case");
  var currentCase = viewModel ? viewModel.selectCase(cases, requestedCaseId) : null;
  var activeMarker = null;
  var popover = null;
  var journeyDock = null;
  var currentJourneyHintId = null;
  var pendingJourneyHintId = null;
  var pendingSurfaceTop = false;
  var visitedHintIds = new Set();
  var showDeeperMarkers = false;

  function reasoningReady(caseData) {
    return Boolean(caseData && caseData.reasoningCompass && caseData.hints && caseData.hints.length);
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (typeof text === "string") node.textContent = text;
    return node;
  }

  function append(parent) {
    Array.prototype.slice.call(arguments, 1).forEach(function (child) {
      if (child) parent.appendChild(child);
    });
    return parent;
  }

  function link(href, className, text) {
    var node = element("a", className, text);
    node.href = href;
    return node;
  }

  function viewHref(mode, screen) {
    return "#" + mode + "-" + screen;
  }

  function caseHref(caseId) {
    var url = new URL(window.location.href);
    url.searchParams.set("case", caseId);
    url.hash = "exam-stem";
    return url.pathname + url.search + url.hash;
  }

  function currentView() {
    return viewModel.viewForCase(currentCase, window.location.hash);
  }

  function surfaceForView(view) {
    return view.screen === "full-run" ? "run" : "stem";
  }

  function visitedStorageKey() {
    return "amc-reasoning-journey-v2:" + currentCase.id;
  }

  function loadVisitedHintIds() {
    try {
      var stored = JSON.parse(window.localStorage.getItem(visitedStorageKey()) || "[]");
      return new Set(Array.isArray(stored) ? stored.filter(function (hintId) { return Boolean(hintById(hintId)); }) : []);
    } catch (error) {
      return new Set();
    }
  }

  function saveVisitedHintIds() {
    try {
      window.localStorage.setItem(visitedStorageKey(), JSON.stringify(Array.from(visitedHintIds)));
    } catch (error) {
      /* The journey still works when storage is unavailable. */
    }
  }

  function restartReasoningPractice() {
    closeHint(false);
    visitedHintIds.clear();
    currentJourneyHintId = null;
    saveVisitedHintIds();
    if (currentView().screen !== "stem") {
      pendingSurfaceTop = true;
      window.location.hash = viewHref("reasoning", "stem");
      return;
    }
    document.querySelectorAll(".reasoning-marker").forEach(updateMarkerState);
    updateJourneyDock();
    var surface = document.querySelector(".case-surface");
    if (surface) surface.scrollIntoView({ block: "start", behavior: "auto" });
  }

  function loadDeeperMarkerPreference() {
    try {
      return window.localStorage.getItem("amc-reasoning-show-deeper:" + currentCase.id) === "true";
    } catch (error) {
      return false;
    }
  }

  function saveDeeperMarkerPreference() {
    try {
      window.localStorage.setItem("amc-reasoning-show-deeper:" + currentCase.id, String(showDeeperMarkers));
    } catch (error) {
      /* The visibility control still works when storage is unavailable. */
    }
  }

  function essentialHintIds() {
    return currentCase.essentialHintIds || [];
  }

  function isEssentialHint(hintId) {
    return essentialHintIds().indexOf(hintId) !== -1;
  }

  function essentialHintsForView(view) {
    return viewModel.essentialHintsForSurface(currentCase, surfaceForView(view));
  }

  function renderCasePicker() {
    var field = element("label", "case-picker");
    field.appendChild(element("span", "case-picker-label", "Case"));
    var select = element("select", "case-picker-select");
    select.setAttribute("aria-label", "Choose a case");
    cases.forEach(function (caseData) {
      var option = element("option", "", caseData.displayNumber + ": " + caseData.title);
      option.value = caseData.id;
      option.selected = caseData.id === currentCase.id;
      select.appendChild(option);
    });
    select.addEventListener("change", function () {
      window.location.href = caseHref(select.value);
    });
    field.appendChild(select);
    return field;
  }

  function renderSegments(parent, surface, item) {
    var view = viewModel.viewParts(window.location.hash);
    if (view.mode !== "reasoning") {
      parent.appendChild(document.createTextNode(item.text));
      return;
    }

    viewModel.segmentsForItem(currentCase, surface, item.id, item.text).forEach(function (segment) {
      if (segment.type === "text") {
        parent.appendChild(document.createTextNode(segment.text));
        return;
      }
      var essential = isEssentialHint(segment.hintId);
      var marker = element("button", "reasoning-marker reasoning-marker--" + (essential ? "essential" : "deeper"), essential ? "(*)" : "(+)");
      marker.type = "button";
      marker.dataset.hintId = segment.hintId;
      marker.dataset.hintQuote = segment.quote;
      marker.dataset.route = essential ? "essential" : "deeper";
      marker.setAttribute("aria-haspopup", "dialog");
      marker.setAttribute("aria-controls", "reasoning-hint-dialog");
      marker.setAttribute("aria-expanded", "false");
      updateMarkerState(marker);
      parent.appendChild(marker);
    });
  }

  function segmentedControl(labelText, options) {
    var group = element("nav", "segmented-control");
    group.setAttribute("aria-label", labelText);
    group.style.gridTemplateColumns = "repeat(" + options.length + ", minmax(76px, 1fr))";
    var label = element("span", "segmented-label", labelText);
    group.appendChild(label);
    options.forEach(function (option) {
      var item = link(option.href, "segment" + (option.active ? " is-active" : ""), option.label);
      if (option.active) item.setAttribute("aria-current", "page");
      group.appendChild(item);
    });
    return group;
  }

  function renderHeader(view) {
    var header = element("header", "site-header");
    var identity = element("div", "site-identity");
    var eyebrow = element("p", "eyebrow", "AMC Clinical Mastery");
    var title = element("h1", "site-title", currentCase.displayNumber + ": " + currentCase.title);
    var status = element("span", "review-status", currentCase.statusLabel || "Exam case complete");
    append(identity, eyebrow, title, status);

    var controls = element("div", "view-controls");
    var modeOptions = [
      { label: "Exam", href: viewHref("exam", view.screen), active: view.mode === "exam" }
    ];
    if (reasoningReady(currentCase)) {
      modeOptions.push({ label: "Reasoning", href: viewHref("reasoning", view.screen), active: view.mode === "reasoning" });
    }
    var mode = segmentedControl("Version", modeOptions);
    var screen = segmentedControl("Screen", [
      { label: "Stem", href: viewHref(view.mode, "stem"), active: view.screen === "stem" },
      { label: "Full Run", href: viewHref(view.mode, "full-run"), active: view.screen === "full-run" }
    ]);
    append(controls, renderCasePicker(), mode, screen);
    append(header, identity, controls);
    return header;
  }

  function renderStem() {
    var section = element("section", "case-surface stem-surface");
    section.setAttribute("aria-labelledby", "stem-heading");

    var top = element("div", "surface-heading-row");
    var headingBlock = element("div");
    var kicker = element("p", "surface-kicker", "Your station information");
    var heading = element("h2", "surface-title", "Station stem");
    heading.id = "stem-heading";
    append(headingBlock, kicker, heading);

    var format = element("dl", "format-strip");
    [
      ["Reading", currentCase.format.readingTime],
      ["Assessment", currentCase.format.assessmentTime],
      ["Predominant area", currentCase.format.predominantArea]
    ].forEach(function (pair) {
      var item = element("div", "format-item");
      append(item, element("dt", "", pair[0]), element("dd", "", pair[1]));
      format.appendChild(item);
    });
    append(top, headingBlock, format);

    var paper = element("article", "exam-paper");
    currentCase.stem.lines.forEach(function (line) {
      var paragraph = element("p", "stem-line");
      renderSegments(paragraph, "stem", line);
      paper.appendChild(paragraph);
    });

    var taskHeading = element("h3", "task-heading", "Your tasks");
    var taskList = element("ol", "task-list");
    currentCase.stem.tasks.forEach(function (task) {
      var item = element("li", "task-item");
      var taskText = element("span", "task-text");
      renderSegments(taskText, "stem", task);
      var timing = element("span", "task-timing", task.timing);
      append(item, taskText, timing);
      taskList.appendChild(item);
    });
    append(paper, taskHeading, taskList);
    append(section, top, paper);
    return section;
  }

  function turnClass(turn) {
    var kind = String(turn.kind || "spoken").toLowerCase().replace(/[^a-z-]/g, "");
    var speaker = String(turn.speaker || "").toLowerCase().replace(/[^a-z-]/g, "");
    return "run-turn run-turn--" + kind + " run-turn--speaker-" + speaker;
  }

  function renderRun() {
    var section = element("section", "case-surface run-surface");
    section.setAttribute("aria-labelledby", "run-heading");

    var top = element("div", "surface-heading-row");
    var headingBlock = element("div");
    var kicker = element("p", "surface-kicker", "High-standard model encounter");
    var heading = element("h2", "surface-title", "Full Run");
    heading.id = "run-heading";
    append(headingBlock, kicker, heading);
    var key = element("p", "run-key", "Every spoken line, action, finding and investigation is shown in sequence.");
    append(top, headingBlock, key);
    section.appendChild(top);

    var transcript = element("div", "transcript");
    currentCase.run.sections.forEach(function (runSection) {
      var block = element("section", "run-section");
      block.id = runSection.id;
      block.appendChild(element("h3", "run-section-title", runSection.heading));
      runSection.turns.forEach(function (turn) {
        var turnNode = element("article", turnClass(turn));
        var speaker = element("p", "speaker-label", turn.speaker);
        turnNode.appendChild(speaker);
        turn.lines.forEach(function (line) {
          var paragraph = element("p", "run-line");
          renderSegments(paragraph, "run", line);
          turnNode.appendChild(paragraph);
        });
        block.appendChild(turnNode);
      });
      transcript.appendChild(block);
    });
    section.appendChild(transcript);
    return section;
  }

  function renderModeNote(view) {
    var note = element("div", "mode-note mode-note--" + view.mode);
    if (view.mode === "exam") {
      append(note, element("strong", "", "Exam version"), document.createTextNode(" Clean station wording. No teaching is added."));
    } else {
      append(note, element("strong", "", "Reasoning version"), document.createTextNode(" Follow (*) for the essential journey. Use Show optional (+) Hints when you want more points to explore."));
    }
    return note;
  }

  function renderReasoningCompass(view) {
    if (view.mode !== "reasoning" || !currentCase.reasoningCompass) return null;
    var compass = currentCase.reasoningCompass[view.screen === "stem" ? "stem" : "run"];
    if (!compass) return null;

    var region = element("section", "reasoning-compass");
    region.setAttribute("aria-label", compass.title);
    var header = element("div", "compass-header");
    append(header, element("p", "compass-kicker", "If you lose your place"), element("h2", "compass-title", compass.title), element("p", "compass-anchor", compass.anchor));
    region.appendChild(header);

    var details = element("details", "compass-details");
    details.appendChild(element("summary", "", "Open the full plan and mastery focus"));
    var detailsBody = element("div", "compass-details-body");

    var steps = element("div", "compass-steps");
    compass.steps.forEach(function (step) {
      var item = element("div", "compass-step");
      append(item, element("strong", "", step.time), element("span", "", step.text));
      steps.appendChild(item);
    });
    detailsBody.appendChild(steps);

    if (currentCase.masteryFocus) {
      var focus = element("div", "mastery-focus");
      var caseFocus = element("p", "mastery-focus-item");
      append(caseFocus, element("strong", "", "Case mastery"), element("span", "", currentCase.masteryFocus.case));
      var clinicalFocus = element("p", "mastery-focus-item");
      append(clinicalFocus, element("strong", "", "Clinical mastery"), element("span", "", currentCase.masteryFocus.clinical));
      append(focus, caseFocus, clinicalFocus);
      detailsBody.appendChild(focus);
    }

    details.appendChild(detailsBody);
    region.appendChild(details);
    return region;
  }

  function updateMarkerState(marker) {
    var hintId = marker.dataset.hintId;
    var opened = visitedHintIds.has(hintId);
    var kind = marker.dataset.route === "essential" ? "essential" : "optional";
    var hint = hintById(hintId);
    marker.classList.toggle("is-visited", opened);
    marker.setAttribute("aria-label", "Open " + kind + " Hint: " + (hint ? hint.where : "reasoning point") + (opened ? "; reasoning already revealed" : ""));
  }

  function markHintVisited(hintId) {
    if (visitedHintIds.has(hintId)) return;
    visitedHintIds.add(hintId);
    saveVisitedHintIds();
    document.querySelectorAll(".reasoning-marker").forEach(updateMarkerState);
    updateJourneyDock();
  }

  function findRenderedMarker(hintId) {
    return Array.prototype.find.call(document.querySelectorAll(".reasoning-marker"), function (marker) {
      return marker.dataset.hintId === hintId;
    });
  }

  function goToJourneyHint(hintId) {
    var hint = hintById(hintId);
    if (!hint) return;
    var destinationScreen = hint.target.surface === "run" ? "full-run" : "stem";
    var view = currentView();
    if (view.screen !== destinationScreen || view.mode !== "reasoning") {
      pendingJourneyHintId = hintId;
      window.location.hash = viewHref("reasoning", destinationScreen);
      return;
    }
    var marker = findRenderedMarker(hintId);
    if (!marker) return;
    marker.scrollIntoView({ block: "center", behavior: "auto" });
    openHint(marker);
  }

  function journeyNeighbours(hintId) {
    var ids = essentialHintIds();
    var index = ids.indexOf(hintId);
    return {
      position: index,
      previous: index > 0 ? ids[index - 1] : null,
      next: index !== -1 && index < ids.length - 1 ? ids[index + 1] : null
    };
  }

  function renderJourneyButton(label, hintId, className) {
    var button = element("button", className || "journey-button", label);
    button.type = "button";
    button.disabled = !hintId;
    if (hintId) button.addEventListener("click", function () { goToJourneyHint(hintId); });
    return button;
  }

  function renderJourneyAction(label, action, className) {
    var button = element("button", className || "journey-button", label);
    button.type = "button";
    button.addEventListener("click", action);
    return button;
  }

  function continueToReasoningScreen(screen) {
    closeHint(false);
    pendingSurfaceTop = true;
    window.location.hash = viewHref("reasoning", screen);
  }

  function startReadingSurface() {
    var surface = document.querySelector(".case-surface");
    if (surface) surface.scrollIntoView({ block: "start", behavior: "auto" });
  }

  function compactTaskPlan() {
    var authoredLabels = currentCase.masteryFocus && currentCase.masteryFocus.tasks;
    var list = element("ol", "journey-dock-anchor");
    currentCase.stem.tasks.forEach(function (task, index) {
      var timing = task.timing.replace(/ minutes?/, "m");
      var taskLabel = authoredLabels && authoredLabels[index] ? authoredLabels[index] : String(task.text || "").replace(/[.]$/, "");
      var item = element("li", "journey-task-chip", timing + " " + taskLabel);
      item.title = task.timing + ": " + task.text;
      list.appendChild(item);
    });
    return list;
  }

  function journeyBoundaryLabel(fromHintId, toHintId, fallback) {
    var from = hintById(fromHintId);
    var to = hintById(toHintId);
    if (from && to && from.target.surface !== to.target.surface) {
      return to.target.surface === "stem" ? "Back to Stem" : "Continue to Full Run";
    }
    return fallback;
  }

  function renderJourneyDock(view) {
    if (view.mode !== "reasoning") return null;
    journeyDock = element("aside", "journey-dock");
    journeyDock.setAttribute("aria-label", "Essential reasoning journey");
    updateJourneyDock(view);
    return journeyDock;
  }

  function renderDeeperMarkerToggle() {
    var button = element("button", "journey-button journey-button--depth", showDeeperMarkers ? "Hide optional (+) Hints" : "Show optional (+) Hints");
    button.type = "button";
    button.setAttribute("aria-pressed", String(showDeeperMarkers));
    button.addEventListener("click", function () {
      showDeeperMarkers = !showDeeperMarkers;
      app.dataset.deeperMarkers = showDeeperMarkers ? "shown" : "hidden";
      saveDeeperMarkerPreference();
      updateJourneyDock();
      var replacement = journeyDock.querySelector(".journey-button--depth");
      if (replacement) replacement.focus({ preventScroll: true });
    });
    return button;
  }

  function updateJourneyDock(view) {
    if (!journeyDock) return;
    var activeView = view || currentView();
    var surfaceHints = essentialHintsForView(activeView);
    var surfaceIds = surfaceHints.map(function (hint) { return hint.id; });
    var activeIndex = surfaceIds.indexOf(currentJourneyHintId);
    if (activeIndex === -1) {
      for (var index = surfaceIds.length - 1; index >= 0; index -= 1) {
        if (visitedHintIds.has(surfaceIds[index])) {
          activeIndex = index;
          break;
        }
      }
    }

    var focusHint = activeIndex >= 0 ? surfaceHints[activeIndex] : surfaceHints.find(function (hint) {
      return !visitedHintIds.has(hint.id);
    });
    var taskPlan = compactTaskPlan();
    var exactTasks = currentCase.stem.tasks.map(function (task) { return task.timing + ": " + task.text; }).join(" ");
    taskPlan.setAttribute("aria-label", "Exact task plan. " + exactTasks);
    taskPlan.title = exactTasks;
    var copy = element("div", "journey-dock-copy");
    var focusCopy = "Choose the first essential Hint on this screen.";
    if (focusHint && activeIndex === -1) {
      focusCopy = "Start here: " + focusHint.where + ".";
    } else if (focusHint) {
      var routeNeighbours = journeyNeighbours(focusHint.id);
      var nextHint = routeNeighbours.next ? hintById(routeNeighbours.next) : null;
      focusCopy = "Current focus: " + focusHint.where + "." + (nextHint ? " Keep reading to: " + nextHint.where + "." : " This completes the essential route.");
    }
    append(copy,
      element("p", "journey-dock-label", "Task plan"),
      taskPlan,
      element("p", "journey-dock-focus", focusCopy)
    );

    var focusId = focusHint ? focusHint.id : null;
    var neighbours = focusId ? journeyNeighbours(focusId) : { previous: null, next: surfaceIds[0] || null };
    var previousId = neighbours.previous;
    var controls = element("div", "journey-dock-controls");
    controls.appendChild(renderDeeperMarkerToggle());
    controls.appendChild(renderJourneyButton(previousId ? journeyBoundaryLabel(focusId, previousId, "Previous essential") : "Previous essential", previousId));
    if (activeIndex === -1 && focusId) {
      controls.appendChild(renderJourneyAction("Start at the top", startReadingSurface));
    } else if (neighbours.next && hintById(neighbours.next).target.surface !== hintById(focusId).target.surface) {
      controls.appendChild(renderJourneyAction("Continue to Full Run", function () { continueToReasoningScreen("full-run"); }));
    } else if (focusId && neighbours.next) {
      controls.appendChild(renderJourneyButton("Reopen current Hint", focusId));
    } else {
      controls.appendChild(renderJourneyAction("Restart case practice", restartReasoningPractice));
    }
    journeyDock.replaceChildren(copy, controls);
  }

  function renderFooter() {
    var footer = element("footer", "site-footer");
    var note = element("p", "case-note", currentCase.note);
    var sourceMessage = reasoningReady(currentCase)
      ? "Clinical content is checked against current Australian primary sources. Source links appear inside relevant Hints."
      : "Clinical content is checked against current Australian primary sources.";
    var sourceText = element("p", "source-note", sourceMessage);
    append(footer, note, sourceText);
    return footer;
  }

  function sourceById(id) {
    return (currentCase.sources || []).find(function (source) { return source.id === id; });
  }

  function hintById(id) {
    return (currentCase.hints || []).find(function (hint) { return hint.id === id; });
  }

  function createPopover() {
    var aside = element("aside", "hint-popover");
    aside.id = "reasoning-hint-dialog";
    aside.hidden = true;
    aside.setAttribute("role", "dialog");
    aside.setAttribute("aria-modal", "false");
    aside.setAttribute("aria-labelledby", "hint-title");
    document.body.appendChild(aside);
    return aside;
  }

  function positionPopover(marker) {
    if (!popover || popover.hidden) return;
    popover.style.removeProperty("left");
    popover.style.removeProperty("right");
    popover.style.removeProperty("top");
    popover.dataset.placement = "sheet";

    if (window.matchMedia("(max-width: 760px)").matches) return;

    var rect = marker.getBoundingClientRect();
    var width = Math.min(480, window.innerWidth - 48);
    var spaceRight = window.innerWidth - rect.right;
    var left;
    if (spaceRight >= width + 28) {
      left = rect.right + 18;
      popover.dataset.placement = "right";
    } else {
      left = Math.max(24, rect.left - width - 18);
      popover.dataset.placement = "left";
    }
    popover.style.width = width + "px";
    popover.style.left = left + "px";

    var desiredTop = rect.top - 48;
    var maxTop = Math.max(24, window.innerHeight - Math.min(popover.offsetHeight, window.innerHeight - 48) - 24);
    popover.style.top = Math.max(24, Math.min(desiredTop, maxTop)) + "px";
  }

  function closeHint(restoreFocus) {
    if (!popover || popover.hidden) return;
    popover.hidden = true;
    popover.replaceChildren();
    if (activeMarker) activeMarker.setAttribute("aria-expanded", "false");
    var marker = activeMarker;
    activeMarker = null;
    if (restoreFocus && marker && document.body.contains(marker)) marker.focus();
  }

  function renderHintSources(hint) {
    var sources = element("details", "hint-sources");
    sources.appendChild(element("summary", "", "Sources behind this Hint (" + hint.citationIds.length + ")"));
    var list = element("ul");
    hint.citationIds.forEach(function (sourceId) {
      var source = sourceById(sourceId);
      if (!source) return;
      var item = element("li");
      var sourceLink = link(source.url, "source-link", source.organisation + ": " + source.title + " (" + source.date + ")");
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener noreferrer";
      item.appendChild(sourceLink);
      list.appendChild(item);
    });
    sources.appendChild(list);
    return sources;
  }

  function renderHintNavigation(hint) {
    if (!isEssentialHint(hint.id)) return null;
    var neighbours = journeyNeighbours(hint.id);
    var navigation = element("nav", "hint-journey-nav");
    navigation.setAttribute("aria-label", "Essential Hint navigation");
    navigation.appendChild(renderJourneyButton(neighbours.previous ? journeyBoundaryLabel(hint.id, neighbours.previous, "Previous essential") : "Previous essential", neighbours.previous, "hint-nav-button"));
    navigation.appendChild(element("span", "hint-route-position", "Essential " + (neighbours.position + 1) + " of " + essentialHintIds().length));
    if (neighbours.next && hintById(neighbours.next).target.surface !== hint.target.surface) {
      navigation.appendChild(renderJourneyAction("Continue to Full Run", function () { continueToReasoningScreen("full-run"); }, "hint-nav-button"));
    } else {
      navigation.appendChild(renderJourneyAction("Close and continue reading", function () { closeHint(true); }, "hint-nav-button"));
    }
    return navigation;
  }

  function renderTransferCheck(hint) {
    var finalEssentialId = essentialHintIds()[essentialHintIds().length - 1];
    if (hint.id !== finalEssentialId || !currentCase.masteryFocus || !currentCase.masteryFocus.transfer) return null;
    var transfer = element("section", "transfer-check");
    transfer.appendChild(element("p", "transfer-check-label", "Try it in a variation"));
    transfer.appendChild(element("h3", "transfer-check-question", currentCase.masteryFocus.transfer));
    var answer = element("details", "transfer-answer");
    answer.appendChild(element("summary", "", "Reveal the answer and decision checks"));
    answer.appendChild(element("p", "transfer-answer-text", currentCase.masteryFocus.transferAnswer));
    var checks = element("ul", "transfer-checks");
    currentCase.masteryFocus.transferChecks.forEach(function (check) {
      checks.appendChild(element("li", "", check));
    });
    answer.appendChild(checks);
    var principle = element("p", "transfer-principle");
    append(principle, element("strong", "", "What carries forward: "), document.createTextNode(currentCase.masteryFocus.clinical));
    answer.appendChild(principle);
    var sourceDetails = element("details", "transfer-sources");
    sourceDetails.appendChild(element("summary", "", "Sources for this variation (" + currentCase.masteryFocus.transferCitationIds.length + ")"));
    var sourceList = element("ul");
    currentCase.masteryFocus.transferCitationIds.forEach(function (sourceId) {
      var source = sourceById(sourceId);
      if (!source) return;
      var item = element("li");
      var sourceLink = link(source.url, "source-link", source.organisation + ": " + source.title + " (" + source.date + ")");
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener noreferrer";
      item.appendChild(sourceLink);
      sourceList.appendChild(item);
    });
    sourceDetails.appendChild(sourceList);
    answer.appendChild(sourceDetails);
    transfer.appendChild(answer);
    return transfer;
  }

  function renderRevealedHint(body, hint) {
    var heading = element("h3", "reasoning-reveal-heading", "Reasoning");
    heading.tabIndex = -1;
    body.appendChild(heading);
    var voice = element("section", "consultant-voice");
    hint.say.forEach(function (paragraph) {
      voice.appendChild(element("p", "", paragraph));
    });
    body.appendChild(voice);

    if (hint.logic && hint.logic.length) {
      var flow = element("p", "logic-thread");
      hint.logic.forEach(function (step, index) {
        if (index) flow.appendChild(element("span", "logic-arrow", "→"));
        flow.appendChild(element("span", "logic-step", step));
      });
      body.appendChild(flow);
    }

    var hold = element("p", "pause-line");
    append(hold, element("strong", "", "Hold:"), document.createTextNode(" " + hint.pause));
    body.appendChild(hold);

    if (hint.clock) {
      var clock = element("p", "journey-clock");
      append(clock, element("strong", "", "Clock:"), document.createTextNode(" " + hint.clock));
      body.appendChild(clock);
    }

    var recap = element("p", "recap-line");
    append(recap, element("strong", "", "So far:"), document.createTextNode(" " + hint.recap));
    var reorient = element("p", "reorient-line");
    var nextCopy = String(hint.reorient).replace(/^Now that\b/, "Since").replace(/^Now\s+/, "");
    append(reorient, element("strong", "", "Next:"), document.createTextNode(" " + nextCopy));
    append(body, recap, reorient);

    if (hint.deeper && hint.deeper.length) {
      var deeper = element("details", "hint-deeper");
      deeper.appendChild(element("summary", "", "More detail for this point"));
      var deeperBody = element("div", "hint-deeper-body");
      hint.deeper.forEach(function (paragraph) { deeperBody.appendChild(element("p", "", paragraph)); });
      deeper.appendChild(deeperBody);
      body.appendChild(deeper);
    }

    var transfer = renderTransferCheck(hint);
    if (transfer) body.appendChild(transfer);
    body.appendChild(renderHintSources(hint));
    var navigation = renderHintNavigation(hint);
    if (navigation) body.appendChild(navigation);
    return heading;
  }

  function populateHintPopover(marker, hint, revealed) {
    popover.replaceChildren();

    var close = element("button", "hint-close", "Close");
    close.type = "button";
    close.setAttribute("aria-label", "Close Hint");
    close.addEventListener("click", function () { closeHint(true); });

    var origin = element("p", "hint-origin", "From: “" + hint.target.quote + "”");
    var journeyPoint = element("p", "hint-journey-point", hint.where);
    var header = element("header", "hint-header");
    append(header, journeyPoint, origin, close);
    popover.appendChild(header);

    var body = element("div", "hint-body");
    var thought = element("section", "thought-pop");
    var title = element("h2", "hint-title", hint.popUp);
    title.id = "hint-title";
    thought.appendChild(title);
    body.appendChild(thought);

    if (!revealed) {
      var pause = element("section", "before-reveal");
      pause.appendChild(element("p", "", "Pause here. Give yourself a first answer; a few words is enough."));
      var reveal = element("button", "reveal-reasoning", "Reveal reasoning");
      reveal.type = "button";
      reveal.addEventListener("click", function () {
        markHintVisited(hint.id);
        populateHintPopover(marker, hint, true);
      });
      pause.appendChild(reveal);
      body.appendChild(pause);
      popover.appendChild(body);
      popover.hidden = false;
      positionPopover(marker);
      reveal.focus({ preventScroll: true });
      return;
    }

    markHintVisited(hint.id);
    var reasoningHeading = renderRevealedHint(body, hint);
    popover.appendChild(body);
    popover.hidden = false;
    positionPopover(marker);
    reasoningHeading.focus({ preventScroll: true });
  }

  function openHint(marker) {
    var hint = hintById(marker.dataset.hintId);
    if (!hint) return;
    if (!popover) popover = createPopover();

    if (activeMarker && activeMarker !== marker) activeMarker.setAttribute("aria-expanded", "false");
    activeMarker = marker;
    currentJourneyHintId = hint.id;
    marker.setAttribute("aria-expanded", "true");
    updateJourneyDock();
    populateHintPopover(marker, hint, visitedHintIds.has(hint.id));
  }

  function bindInteractions() {
    document.querySelectorAll(".reasoning-marker").forEach(function (marker) {
      marker.addEventListener("click", function (event) {
        event.stopPropagation();
        if (activeMarker === marker && popover && !popover.hidden) {
          closeHint(true);
          return;
        }
        openHint(marker);
      });
    });
  }

  function render() {
    closeHint(false);
    var requestedView = viewModel.viewParts(window.location.hash);
    var view = viewModel.viewForCase(currentCase, window.location.hash);
    if (requestedView.id !== view.id) {
      window.history.replaceState(null, "", viewHref("exam", view.screen));
    }
    document.title = currentCase.displayNumber + " | AMC Clinical Mastery";
    app.dataset.mode = view.mode;
    app.dataset.screen = view.screen;
    app.dataset.deeperMarkers = showDeeperMarkers ? "shown" : "hidden";
    app.replaceChildren();

    journeyDock = null;
    var shell = element("div", "site-shell");
    append(shell, renderHeader(view), renderModeNote(view), renderReasoningCompass(view), renderJourneyDock(view));
    var main = element("main", "case-main");
    main.appendChild(view.screen === "stem" ? renderStem() : renderRun());
    append(shell, main, renderFooter());
    app.appendChild(shell);
    bindInteractions();
    if (pendingSurfaceTop) {
      pendingSurfaceTop = false;
      var surface = document.querySelector(".case-surface");
      if (surface) surface.scrollIntoView({ block: "start", behavior: "auto" });
    }
    if (pendingJourneyHintId) {
      var hintId = pendingJourneyHintId;
      pendingJourneyHintId = null;
      var marker = findRenderedMarker(hintId);
      if (marker) {
        marker.scrollIntoView({ block: "center", behavior: "auto" });
        openHint(marker);
      }
    }
  }

  function renderFailure(errors) {
    var failure = element("main", "fatal-error");
    var label = currentCase ? currentCase.displayNumber : "The requested case";
    append(failure, element("h1", "", label + " cannot be displayed safely."), element("p", "", "The content contract found errors:"));
    var list = element("ul");
    errors.forEach(function (error) { list.appendChild(element("li", "", error)); });
    failure.appendChild(list);
    if (cases.length) failure.appendChild(link(caseHref(cases[0].id), "", "Open the first available case"));
    app.replaceChildren(failure);
  }

  if (!currentCase || !viewModel) {
    renderFailure(["The canonical case source or view helper is missing."]);
    return;
  }

  var errors = viewModel.validateCase(currentCase);
  if (errors.length) {
    renderFailure(errors);
    return;
  }

  visitedHintIds = loadVisitedHintIds();
  showDeeperMarkers = loadDeeperMarkerPreference();

  if (!window.location.hash) window.history.replaceState(null, "", "#exam-stem");
  render();

  window.addEventListener("hashchange", render);
  window.addEventListener("resize", function () {
    if (activeMarker) positionPopover(activeMarker);
  });
  window.addEventListener("scroll", function () {
    if (activeMarker) positionPopover(activeMarker);
  }, { passive: true });
  document.addEventListener("click", function (event) {
    if (!popover || popover.hidden) return;
    if (popover.contains(event.target) || (activeMarker && activeMarker.contains(event.target))) return;
    closeHint(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeHint(true);
  });
})();
