(function () {
  const resumeKey = "amc.case1.resume.v1";
  const hintKey = "amc.case1.hintProgress.v1";

  const hints = [
    { id: "missed-diagnosis", label: "Possible heart attack" },
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
      label: "Warm up",
      detail: "Danger pattern",
      href: "before-case.html"
    },
    door: {
      section: "door",
      label: "Station stem",
      detail: "Read only",
      href: "case1.html#station-stem"
    },
    map: {
      section: "map",
      label: "Brain map",
      detail: "Body clues",
      href: "case1.html#brain-map"
    },
    run: {
      section: "run",
      label: "Speak the case",
      detail: "Say the case aloud",
      href: "case1.html#speak-practice"
    },
    check: {
      section: "check",
      label: "Hints",
      detail: "One missed line",
      href: "case1.html#confidence-check"
    },
    full: {
      section: "full",
      label: "Notes",
      detail: "Extra lines and sources",
      href: "case1.html#study-notes"
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
    const base = stored && places[stored.section] ? places[stored.section] : places.run;
    const next = Object.assign({}, base, stored || {});

    if (next.section && places[next.section]) {
      const current = places[next.section];
      if (["Door note", "Run station", "Full pack", "Speak practice", "Study notes"].includes(next.label)) {
        next.label = current.label;
      }
      if (["Stem only", "Station practice", "Danger route", "Thinking, drill, sources", "Fix one missed point", "Extra lines, drills, sources"].includes(next.detail)) {
        next.detail = current.detail;
      }
      if (next.href === "case1.html#door-note") next.href = "case1.html#station-stem";
      if (next.href === "case1.html#run-station") next.href = "case1.html#speak-practice";
      if (next.href === "case1.html#full-pack") next.href = "case1.html#study-notes";
    }

    return next;
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
    if (!stats.fixed && !stats.practised) return "No hints fixed yet.";
    return stats.fixed + " fixed | " + stats.practised + " practised | " + stats.open + " left";
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
