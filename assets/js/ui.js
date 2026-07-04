(function () {
  var lastDrawerTrigger = null;
  var mockExamTimerId = null;
  var mockExamStartedAt = null;
  var mockExamElapsedSeconds = 0;
  var mockExamVoiceEnabled = true;
  var mockExamVoiceSpeaking = false;
  var mockExamVoiceAudio = null;
  var mockExamVoiceSpokenIndexes = {};

  function closeFloatingNav() {
    var nav = document.querySelector("[data-floating-nav]");
    if (!nav) return;
    nav.classList.remove("is-open");
    var toggle = nav.querySelector("[data-nav-toggle]");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function toggleFloatingNav() {
    var nav = document.querySelector("[data-floating-nav]");
    if (!nav) return;
    var isOpen = nav.classList.toggle("is-open");
    var toggle = nav.querySelector("[data-nav-toggle]");
    if (toggle) toggle.setAttribute("aria-expanded", String(isOpen));
  }

  function getDrawer() {
    return document.querySelector("[data-tools-drawer]");
  }

  function getHintScope(source) {
    if (source && typeof source.closest === "function") {
      var inlineScope = source.closest("[data-hint-scope]");
      if (inlineScope) return inlineScope;
    }
    return getDrawer();
  }

  function getMockExam() {
    return document.querySelector("[data-mock-exam]");
  }

  function getMockExamDurations(scope) {
    var readingSeconds = Number(scope.getAttribute("data-reading-seconds")) || 120;
    var totalSeconds = Number(scope.getAttribute("data-total-seconds")) || 600;
    return {
      reading: Math.max(1, readingSeconds),
      total: Math.max(readingSeconds + 1, totalSeconds)
    };
  }

  function formatMockExamTime(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  }

  function getMockExamFlowProgress(elapsedSeconds, durations) {
    if (elapsedSeconds < durations.reading) return 0;
    return Math.min(1, Math.max(0, (elapsedSeconds - durations.reading) / Math.max(1, durations.total - durations.reading)));
  }

  function getMockExamGuideY(scope, flowProgress) {
    var speaking = scope.querySelector("[data-mock-speaking]");
    if (!speaking) return null;
    var speakingRect = speaking.getBoundingClientRect();
    return speakingRect.top + speakingRect.height * flowProgress;
  }

  function getMockExamVoiceTargets(scope) {
    return Array.from(scope.querySelectorAll("[data-mock-speaking] [data-voice-line]")).map(function (line, fallbackIndex) {
      var rect = line.getBoundingClientRect();
      var index = Number(line.getAttribute("data-voice-index"));
      return {
        element: line,
        index: Number.isFinite(index) ? index : fallbackIndex,
        text: line.getAttribute("data-voice-line"),
        audioSrc: line.getAttribute("data-voice-audio") || "",
        triggerY: rect.top + Math.min(10, rect.height * 0.4)
      };
    }).filter(function (target) {
      return target.text;
    }).sort(function (a, b) {
      return a.triggerY - b.triggerY;
    });
  }

  function clearMockExamVoiceCue(scope) {
    if (!scope) return;
    scope.querySelectorAll(".is-flow-current").forEach(function (line) {
      line.classList.remove("is-flow-current");
    });
  }

  function setMockExamVoiceCue(scope, target) {
    clearMockExamVoiceCue(scope);
    if (target && target.element) {
      target.element.classList.add("is-flow-current");
    }
  }

  function primeMockExamVoicePosition(scope, elapsedSeconds, durations) {
    var guideY = getMockExamGuideY(scope, getMockExamFlowProgress(elapsedSeconds, durations));
    mockExamVoiceSpokenIndexes = {};
    clearMockExamVoiceCue(scope);

    if (guideY === null || elapsedSeconds < durations.reading) return;

    getMockExamVoiceTargets(scope).forEach(function (target) {
      if (target.triggerY < guideY - 1) {
        mockExamVoiceSpokenIndexes[target.index] = true;
      }
    });
  }

  function hasMockExamVoiceClips(scope) {
    return Boolean(scope && scope.querySelector("[data-voice-audio]"));
  }

  function supportsMockExamSpeechFallback() {
    return Boolean(window.speechSynthesis && window.SpeechSynthesisUtterance);
  }

  function supportsMockExamVoice(scope) {
    return hasMockExamVoiceClips(scope) || supportsMockExamSpeechFallback();
  }

  function chooseMockExamVoice(scope) {
    if (!supportsMockExamSpeechFallback()) return null;

    var voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    var patientSex = (scope.getAttribute("data-patient-sex") || "").toLowerCase();
    var maleHints = ["david", "daniel", "george", "mark", "michael", "james", "guy", "ryan", "liam", "oliver", "jack", "lee", "william", "thomas"];
    var naturalHints = ["natural", "neural", "online", "premium"];

    if (!voices.length) return null;

    function scoreVoice(voice) {
      var name = (voice.name || "").toLowerCase();
      var lang = (voice.lang || "").toLowerCase();
      var score = 0;

      if (lang.indexOf("en-au") === 0) score += 40;
      else if (lang.indexOf("en-gb") === 0) score += 28;
      else if (lang.indexOf("en-us") === 0) score += 20;
      else if (lang.indexOf("en") === 0) score += 12;

      if (naturalHints.some(function (hint) { return name.indexOf(hint) !== -1; })) {
        score += 46;
      }

      if (patientSex === "male" && maleHints.some(function (hint) { return name.indexOf(hint) !== -1; })) {
        score += 35;
      }

      if (name.indexOf("male") !== -1) score += 20;
      if (voice.localService) score -= 3;
      return score;
    }

    return voices.slice().sort(function (a, b) {
      return scoreVoice(b) - scoreVoice(a);
    })[0];
  }

  function setMockExamVoiceStatus(scope, message) {
    var status = scope && scope.querySelector("[data-mock-voice-state]");
    if (status) status.textContent = message;
  }

  function updateMockExamVoiceButton(scope) {
    var button = scope && scope.querySelector("[data-mock-voice]");
    if (!button) return;
    if (!supportsMockExamVoice(scope)) {
      button.disabled = true;
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-label", "Voice unavailable");
      button.title = "Voice unavailable";
      button.classList.add("is-muted");
      setMockExamVoiceStatus(scope, "Voice unavailable in this browser.");
      return;
    }
    button.disabled = false;
    button.setAttribute("aria-pressed", String(mockExamVoiceEnabled));
    button.setAttribute("aria-label", mockExamVoiceEnabled ? "Patient voice on" : "Patient voice off");
    button.title = mockExamVoiceEnabled ? "Patient voice on" : "Patient voice off";
    button.classList.toggle("is-muted", !mockExamVoiceEnabled);
  }

  function stopMockExamVoice(scope, message) {
    if (mockExamVoiceAudio) {
      mockExamVoiceAudio.pause();
      mockExamVoiceAudio.removeAttribute("src");
      mockExamVoiceAudio.load();
      mockExamVoiceAudio = null;
    }
    if (supportsMockExamSpeechFallback()) {
      window.speechSynthesis.cancel();
    }
    mockExamVoiceSpeaking = false;
    if (message) setMockExamVoiceStatus(scope, message);
  }

  function playMockExamVoiceClip(scope, target) {
    if (!target || !target.audioSrc) return false;

    stopMockExamVoice(scope);

    var audio = new Audio(target.audioSrc);
    mockExamVoiceAudio = audio;
    mockExamVoiceSpeaking = true;
    setMockExamVoiceStatus(scope, "Patient voice active.");

    audio.onended = function () {
      mockExamVoiceSpeaking = false;
    };
    audio.onerror = function () {
      mockExamVoiceSpeaking = false;
      mockExamVoiceAudio = null;
      if (target.text && supportsMockExamSpeechFallback()) {
        speakMockExamLineFallback(scope, target.text);
      } else {
        setMockExamVoiceStatus(scope, "Voice file unavailable.");
      }
    };

    var playAttempt = audio.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(function () {
        mockExamVoiceSpeaking = false;
        mockExamVoiceAudio = null;
        if (target.text && supportsMockExamSpeechFallback()) {
          speakMockExamLineFallback(scope, target.text);
        } else {
          setMockExamVoiceStatus(scope, "Tap play to allow voice.");
        }
      });
    }

    return true;
  }

  function speakMockExamLineFallback(scope, line) {
    if (!supportsMockExamSpeechFallback() || !line) return;

    var utterance = new window.SpeechSynthesisUtterance(line);
    var selectedVoice = chooseMockExamVoice(scope);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang || "en-AU";
    } else {
      utterance.lang = "en-AU";
    }

    utterance.rate = 0.9;
    utterance.pitch = 0.84;
    utterance.volume = 1;
    mockExamVoiceSpeaking = true;
    setMockExamVoiceStatus(scope, "Patient voice active.");

    utterance.onend = function () {
      mockExamVoiceSpeaking = false;
    };
    utterance.onerror = function () {
      mockExamVoiceSpeaking = false;
      setMockExamVoiceStatus(scope, "Voice paused by browser.");
    };

    window.speechSynthesis.speak(utterance);
  }

  function speakMockExamLine(scope, target) {
    if (!supportsMockExamVoice(scope) || !target) return;
    if (playMockExamVoiceClip(scope, target)) return;
    speakMockExamLineFallback(scope, target.text);
  }

  function syncMockExamVoice(scope, elapsedSeconds, durations, running) {
    if (!scope || !running) return;

    if (!mockExamVoiceEnabled) {
      setMockExamVoiceStatus(scope, "Patient voice off.");
      return;
    }

    if (!supportsMockExamVoice(scope)) {
      setMockExamVoiceStatus(scope, "Voice unavailable in this browser.");
      return;
    }

    if (elapsedSeconds < durations.reading) {
      setMockExamVoiceStatus(scope, "Patient voice starts at 2:00.");
      return;
    }

    if (elapsedSeconds >= durations.total) {
      stopMockExamVoice(scope, "Patient voice stopped.");
      return;
    }

    if (mockExamVoiceSpeaking) return;

    var guideY = getMockExamGuideY(scope, getMockExamFlowProgress(elapsedSeconds, durations));
    var targets = getMockExamVoiceTargets(scope);
    if (guideY === null || !targets.length) return;

    var nextTarget = targets.find(function (target) {
      return guideY >= target.triggerY && !mockExamVoiceSpokenIndexes[target.index];
    });

    if (!nextTarget) {
      if (targets.every(function (target) { return mockExamVoiceSpokenIndexes[target.index]; })) {
        setMockExamVoiceStatus(scope, "Patient voice complete.");
      }
      return;
    }

    setMockExamVoiceCue(scope, nextTarget);
    mockExamVoiceSpokenIndexes[nextTarget.index] = true;
    speakMockExamLine(scope, nextTarget);

    if (targets.every(function (target) { return mockExamVoiceSpokenIndexes[target.index]; })) {
      setMockExamVoiceStatus(scope, "Patient voice complete.");
    }
  }

  function toggleMockExamVoice() {
    var scope = getMockExam();
    if (!scope) return;

    mockExamVoiceEnabled = !mockExamVoiceEnabled;
    updateMockExamVoiceButton(scope);

    if (!mockExamVoiceEnabled) {
      stopMockExamVoice(scope, "Patient voice off.");
      return;
    }

    setMockExamVoiceStatus(scope, mockExamElapsedSeconds >= getMockExamDurations(scope).reading ? "Patient voice ready." : "Patient voice starts at 2:00.");
    if (mockExamStartedAt) {
      syncMockExamVoice(scope, mockExamElapsedSeconds, getMockExamDurations(scope), Boolean(mockExamTimerId));
    }
  }

  function stopMockExamTimer() {
    if (!mockExamTimerId) return;
    window.clearInterval(mockExamTimerId);
    mockExamTimerId = null;
  }

  function setMockExamState(scope, elapsedSeconds, running, options) {
    if (!scope) return;
    options = options || {};
    var durations = getMockExamDurations(scope);
    var safeElapsed = Math.max(0, Math.min(durations.total, Math.floor(elapsedSeconds)));
    var phase = safeElapsed >= durations.total ? "finished" : safeElapsed >= durations.reading ? "speaking" : "reading";
    var previousPhase = scope.getAttribute("data-mock-phase") || "";
    var flowProgress = phase === "reading" ? 0 : getMockExamFlowProgress(safeElapsed, durations);
    var time = scope.querySelector("[data-mock-time]");
    var state = scope.querySelector("[data-mock-state]");
    var reading = scope.querySelector("[data-mock-reading]");
    var speaking = scope.querySelector("[data-mock-speaking]");
    var complete = scope.querySelector("[data-mock-complete]");
    var playButton = scope.querySelector("[data-mock-play]");
    var pauseButton = scope.querySelector("[data-mock-pause]");
    var stopButton = scope.querySelector("[data-mock-stop]");
    var flowGuide = scope.querySelector("[data-mock-flow-guide]");
    var seek = scope.querySelector("[data-mock-seek]");
    var seekLabel = scope.querySelector("[data-mock-seek-label]");

    mockExamElapsedSeconds = safeElapsed;
    scope.setAttribute("data-mock-phase", phase);
    scope.style.setProperty("--mock-flow-progress", (flowProgress * 100).toFixed(3) + "%");
    updateMockExamVoiceButton(scope);

    if (time) time.textContent = formatMockExamTime(safeElapsed);
    if (seek) {
      seek.max = String(durations.total);
      if (document.activeElement !== seek || options.forceSeekUpdate) {
        seek.value = String(safeElapsed);
      }
    }
    if (seekLabel) seekLabel.textContent = formatMockExamTime(safeElapsed);
    if (state) {
      state.textContent = phase === "reading" ? "Reading time" : phase === "speaking" ? "Speak the case" : "Time finished";
    }
    if (reading) reading.hidden = phase !== "reading";
    if (speaking) speaking.hidden = phase !== "speaking";
    if (complete) complete.hidden = phase !== "finished";
    if (flowGuide) {
      flowGuide.setAttribute("data-flow-active", String(phase === "speaking" && running));
    }
    if (playButton) {
      playButton.disabled = running || safeElapsed >= durations.total;
      playButton.setAttribute("aria-label", safeElapsed > 0 && safeElapsed < durations.total ? "Resume" : "Play");
      playButton.title = safeElapsed > 0 && safeElapsed < durations.total ? "Resume" : "Play";
    }
    if (pauseButton) {
      pauseButton.disabled = !running;
    }
    if (stopButton) {
      stopButton.disabled = !running && safeElapsed === 0;
    }

    if (phase === "finished") {
      stopMockExamVoice(scope, "Patient voice stopped.");
      if (previousPhase !== "finished" && complete && !options.skipCompletionFocus) {
        window.setTimeout(function () {
          try {
            complete.focus({ preventScroll: true });
          } catch (error) {
            complete.focus();
          }
          if (typeof complete.scrollIntoView === "function") {
            complete.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        }, 0);
      }
    } else if (!options.skipVoiceSync) {
      syncMockExamVoice(scope, safeElapsed, durations, running);
    }
  }

  function seekMockExamTimer(value) {
    var scope = getMockExam();
    if (!scope) return;

    var durations = getMockExamDurations(scope);
    var safeElapsed = Math.max(0, Math.min(durations.total, Math.floor(Number(value) || 0)));
    var running = Boolean(mockExamTimerId);

    if (running) {
      mockExamStartedAt = Date.now() - safeElapsed * 1000;
    } else {
      mockExamStartedAt = null;
    }

    stopMockExamVoice(scope, safeElapsed >= durations.reading ? "Patient voice ready." : "Patient voice starts at 2:00.");
    mockExamElapsedSeconds = safeElapsed;
    setMockExamState(scope, safeElapsed, running, { forceSeekUpdate: true, skipVoiceSync: true });
    primeMockExamVoicePosition(scope, safeElapsed, durations);

    if (running) {
      syncMockExamVoice(scope, safeElapsed, durations, true);
    }
  }

  function updateMockExamTimer() {
    var scope = getMockExam();
    if (!scope || !mockExamStartedAt) {
      stopMockExamTimer();
      return;
    }

    var durations = getMockExamDurations(scope);
    var elapsedSeconds = Math.floor((Date.now() - mockExamStartedAt) / 1000);
    var finished = elapsedSeconds >= durations.total;

    if (finished) {
      elapsedSeconds = durations.total;
      stopMockExamTimer();
      mockExamStartedAt = null;
    }

    setMockExamState(scope, elapsedSeconds, !finished);
  }

  function startMockExamTimer() {
    var scope = getMockExam();
    if (!scope || mockExamTimerId) return;

    var durations = getMockExamDurations(scope);
    if (mockExamElapsedSeconds >= durations.total) {
      mockExamElapsedSeconds = 0;
    }

    primeMockExamVoicePosition(scope, mockExamElapsedSeconds, durations);
    mockExamStartedAt = Date.now() - mockExamElapsedSeconds * 1000;
    updateMockExamTimer();
    mockExamTimerId = window.setInterval(updateMockExamTimer, 250);
  }

  function pauseMockExamTimer() {
    var scope = getMockExam();
    if (!scope || !mockExamTimerId) return;

    stopMockExamTimer();
    stopMockExamVoice(scope, "Paused.");
    mockExamStartedAt = null;
    setMockExamState(scope, mockExamElapsedSeconds, false, { forceSeekUpdate: true, skipVoiceSync: true });
  }

  function resetMockExamTimer() {
    var scope = getMockExam();
    stopMockExamTimer();
    stopMockExamVoice(scope, "Patient voice starts at 2:00.");
    mockExamStartedAt = null;
    mockExamElapsedSeconds = 0;
    mockExamVoiceSpokenIndexes = {};
    clearMockExamVoiceCue(scope);
    setMockExamState(scope, 0, false, { forceSeekUpdate: true });
  }

  function prepareMockExam() {
    var scope = getMockExam();
    if (!scope || scope.getAttribute("data-mock-ready") === "true") return;
    scope.setAttribute("data-mock-ready", "true");
    if (supportsMockExamSpeechFallback() && window.speechSynthesis.getVoices) {
      window.speechSynthesis.getVoices();
    }
    setMockExamState(scope, mockExamElapsedSeconds, Boolean(mockExamTimerId));
  }

  function selectCaseTab(tabId, updateHash) {
    var shell = document.querySelector("[data-case-tabs]");
    if (!shell || !tabId) return;

    var activeButton = null;
    shell.setAttribute("data-active-case-tab", tabId);
    shell.querySelectorAll("[data-case-tab]").forEach(function (tab) {
      var active = tab.dataset.caseTab === tabId;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      if (active) activeButton = tab;
    });

    shell.querySelectorAll("[data-case-tab-panel]").forEach(function (panel) {
      panel.hidden = panel.dataset.caseTabPanel !== tabId;
    });

    if (updateHash && activeButton && activeButton.dataset.caseHash) {
      window.history.replaceState(null, "", "#" + activeButton.dataset.caseHash);
    }

    if (tabId === "mock") {
      prepareMockExam();
    }
  }

  function selectCaseTabFromHash() {
    var hash = window.location.hash ? window.location.hash.slice(1) : "";
    var tabByHash = {
      "station-stem": "stem",
      "speak-aloud": "speak",
      "timed-run": "mock",
      "mock-exam": "mock",
      "what-matters": "matters",
      "hints": "hints"
    };

    if (tabByHash[hash]) {
      selectCaseTab(tabByHash[hash], false);
    }
  }

  function openTools(initialPanel, trigger) {
    var drawer = getDrawer();
    if (!drawer) return;

    lastDrawerTrigger = trigger || document.activeElement;
    drawer.hidden = false;
    document.documentElement.classList.add("tools-open");

    if (initialPanel) {
      selectToolPanel(initialPanel);
    }

    if ((initialPanel || "hints") === "hints") {
      clearHint();
    }

    var closeButton = drawer.querySelector("[data-tools-close]");
    if (closeButton) closeButton.focus();
  }

  function closeTools() {
    var drawer = getDrawer();
    if (!drawer || drawer.hidden) return;

    drawer.hidden = true;
    document.documentElement.classList.remove("tools-open");

    if (lastDrawerTrigger && typeof lastDrawerTrigger.focus === "function") {
      lastDrawerTrigger.focus();
    }
    lastDrawerTrigger = null;
  }

  function selectToolPanel(panelId) {
    var drawer = getDrawer();
    if (!drawer) return;

    drawer.querySelectorAll("[data-tool-tab]").forEach(function (tab) {
      var active = tab.dataset.toolTab === panelId;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    drawer.querySelectorAll("[data-tool-panel]").forEach(function (panel) {
      panel.hidden = panel.dataset.toolPanel !== panelId;
    });
  }

  function selectHint(hintId, source) {
    var scope = getHintScope(source);
    if (!scope) return;
    var panel = scope.querySelector('[data-tool-panel="hints"]');
    var activeCard = null;
    scope.querySelectorAll("[data-hint-choice]").forEach(function (choice) {
      choice.classList.remove("is-selected");
    });
    scope.querySelectorAll("[data-hint-card]").forEach(function (card) {
      card.hidden = card.dataset.hintCard !== hintId;
      if (!card.hidden) activeCard = card;
    });
    var result = scope.querySelector("[data-hint-result]");
    if (result) result.hidden = !hintId;
    if (panel) panel.classList.toggle("is-hint-open", Boolean(hintId));
    var chosen = scope.querySelector('[data-hint-choice="' + hintId + '"]');
    if (chosen) chosen.classList.add("is-selected");
    if (activeCard && typeof activeCard.focus === "function") {
      try {
        activeCard.focus({ preventScroll: false });
      } catch (error) {
        activeCard.focus();
      }
    }
  }

  function clearHint(source) {
    var scope = getHintScope(source);
    if (!scope) return;
    scope.querySelectorAll("[data-hint-card]").forEach(function (card) {
      card.hidden = true;
    });
    scope.querySelectorAll("[data-hint-choice]").forEach(function (choice) {
      choice.classList.remove("is-selected");
    });
    var result = scope.querySelector("[data-hint-result]");
    if (result) result.hidden = true;
    var panel = scope.querySelector('[data-tool-panel="hints"]');
    if (panel) panel.classList.remove("is-hint-open");
    var firstChoice = scope.querySelector("[data-hint-choice]");
    if (firstChoice && typeof firstChoice.focus === "function" && !scope.hidden) {
      firstChoice.focus();
    }
  }

  function keepPathwayCompact(opened) {
    if (!opened || !opened.open) return;

    if (opened.classList.contains("pathway-phase")) {
      var stack = opened.closest(".pathway-stack");
      if (!stack) return;
      Array.prototype.forEach.call(stack.children, function (phase) {
        if (phase !== opened && phase.classList.contains("pathway-phase")) {
          phase.open = false;
        }
      });
    }

    if (opened.classList.contains("pattern-branch")) {
      var branch = opened.closest(".phase-branch");
      if (!branch) return;
      branch.querySelectorAll(".pattern-branch").forEach(function (pattern) {
        if (pattern !== opened) pattern.open = false;
      });
    }
  }

  function init() {
    document.addEventListener("input", function (event) {
      var mockSeek = event.target.closest("[data-mock-seek]");
      if (mockSeek) {
        seekMockExamTimer(mockSeek.value);
      }
    });

    document.addEventListener("click", function (event) {
      var navToggle = event.target.closest("[data-nav-toggle]");
      if (navToggle) {
        toggleFloatingNav();
        return;
      }

      var caseTab = event.target.closest("[data-case-tab]");
      if (caseTab) {
        event.preventDefault();
        selectCaseTab(caseTab.dataset.caseTab, true);
        closeFloatingNav();
        return;
      }

      var mockPlay = event.target.closest("[data-mock-play]");
      if (mockPlay) {
        event.preventDefault();
        startMockExamTimer();
        closeFloatingNav();
        return;
      }

      var mockPause = event.target.closest("[data-mock-pause]");
      if (mockPause) {
        event.preventDefault();
        pauseMockExamTimer();
        closeFloatingNav();
        return;
      }

      var mockStop = event.target.closest("[data-mock-stop]");
      if (mockStop) {
        event.preventDefault();
        resetMockExamTimer();
        closeFloatingNav();
        return;
      }

      var mockVoice = event.target.closest("[data-mock-voice]");
      if (mockVoice) {
        event.preventDefault();
        toggleMockExamVoice();
        closeFloatingNav();
        return;
      }

      var toolsTrigger = event.target.closest("[data-open-tools]");
      if (toolsTrigger) {
        event.preventDefault();
        openTools(toolsTrigger.dataset.openTools || "hints", toolsTrigger);
        closeFloatingNav();
        return;
      }

      var toolsClose = event.target.closest("[data-tools-close], [data-tools-backdrop]");
      if (toolsClose) {
        closeTools();
        return;
      }

      var tab = event.target.closest("[data-tool-tab]");
      if (tab) {
        selectToolPanel(tab.dataset.toolTab);
        return;
      }

      var hintChoice = event.target.closest("[data-hint-choice]");
      if (hintChoice) {
        selectHint(hintChoice.dataset.hintChoice, hintChoice);
        return;
      }

      var hintBack = event.target.closest("[data-hint-back]");
      if (hintBack) {
        clearHint(hintBack);
        return;
      }

      if (!event.target.closest("[data-floating-nav]")) {
        closeFloatingNav();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeTools();
        closeFloatingNav();
      }
    });

    document.addEventListener("toggle", function (event) {
      keepPathwayCompact(event.target);
    }, true);

    window.addEventListener("hashchange", selectCaseTabFromHash);
    selectCaseTabFromHash();
  }

  window.AMC_UI = {
    init: init,
    openTools: openTools,
    closeTools: closeTools,
    selectToolPanel: selectToolPanel,
    selectCaseTab: selectCaseTab
  };
})();
