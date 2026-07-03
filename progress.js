(function () {
  const resumeKey = "amc.case1.resume.v1";
  const hintKey = "amc.case1.hintProgress.v1";

  const hints = [
    { id: "missed-diagnosis", label: "Heart risk" },
    { id: "dangerous-alternatives", label: "Other serious causes" },
    { id: "focused-danger-questions", label: "Danger questions" },
    { id: "technical-language", label: "Everyday language" },
    { id: "decision-point", label: "Why act now" },
    { id: "first-action", label: "Call ambulance early" },
    { id: "escalation", label: "Clear transfer" },
    { id: "delayed-transfer-tests", label: "Do not wait for tests" },
    { id: "medication-safety", label: "Medicine safety" },
    { id: "safety-net", label: "Warning signs" },
    { id: "understanding-check", label: "Check understanding" },
    { id: "ran-over-time", label: "Time control" },
    { id: "something-else", label: "Something else" }
  ];

  const places = {
    before: {
      section: "before",
      label: "Before Case",
      detail: "Pattern primer",
      href: "before-case.html"
    },
    door: {
      section: "door",
      label: "Door note",
      detail: "Stem only",
      href: "case1.html#door-note"
    },
    map: {
      section: "map",
      label: "Brain map",
      detail: "Danger route",
      href: "case1.html#brain-map"
    },
    run: {
      section: "run",
      label: "Run station",
      detail: "Station practice",
      href: "case1.html#run-station"
    },
    check: {
      section: "check",
      label: "Hints",
      detail: "Fix one missed point",
      href: "case1.html#confidence-check"
    },
    full: {
      section: "full",
      label: "Full pack",
      detail: "Thinking, drill, sources",
      href: "case1.html#full-pack"
    }
  };

  function readJSON(key, fallback) {
    try {
      return JSON.parse(window.localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return;
    }
  }

  function hasResume() {
    return Boolean(readJSON(resumeKey, null));
  }

  function readResume() {
    const stored = readJSON(resumeKey, null);
    return Object.assign({}, places.run, stored || {});
  }

  function saveResume(update) {
    const current = readResume();
    const base = places[update.section] || places[current.section] || places.run;
    const next = Object.assign({}, base, update, {
      caseId: "case1",
      updatedAt: new Date().toISOString()
    });

    writeJSON(resumeKey, next);
    window.dispatchEvent(new CustomEvent("amc:progress-updated", { detail: next }));
    return next;
  }

  function readHintProgress() {
    return readJSON(hintKey, {});
  }

  function hintStats() {
    const progress = readHintProgress();
    let fixed = 0;
    let practised = 0;

    hints.forEach((hint) => {
      if (progress[hint.id] === "Fixed once") {
        fixed += 1;
      } else if (progress[hint.id] === "Line practised") {
        practised += 1;
      }
    });

    return {
      total: hints.length,
      fixed,
      practised,
      open: Math.max(hints.length - fixed - practised, 0),
      score: hints.length ? ((fixed + practised * 0.5) / hints.length) * 100 : 0
    };
  }

  function nextHint() {
    const progress = readHintProgress();
    return hints.find((hint) => progress[hint.id] !== "Fixed once") || null;
  }

  function progressLabel() {
    const stats = hintStats();
    if (!stats.fixed && !stats.practised) return "No fixes saved yet.";
    return stats.fixed + " fixed | " + stats.practised + " practised | " + stats.open + " open";
  }

  window.AMCProgress = {
    places,
    hints,
    hasResume,
    readResume,
    saveResume,
    readHintProgress,
    hintStats,
    nextHint,
    progressLabel
  };
})();
