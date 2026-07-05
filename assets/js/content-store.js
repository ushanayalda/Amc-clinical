(function () {
  function content() {
    return window.AMC_CONTENT || {};
  }

  function list(name) {
    return Array.isArray(content()[name]) ? content()[name] : [];
  }

  function byId(name, id) {
    return list(name).find(function (item) {
      return item.id === id;
    }) || null;
  }

  function getCurrentCase() {
    var data = content();
    var id = data.app && data.app.currentCaseId;
    return byId("cases", id || (data.settings && data.settings.defaultCaseId));
  }

  function getPhaseById(id) {
    return byId("phases", id);
  }

  function getPatternById(id) {
    return byId("patterns", id);
  }

  function getWarmupById(id) {
    return byId("warmups", id);
  }

  function getCaseById(id) {
    return byId("cases", id);
  }

  function getCaseContext(caseId) {
    var currentCase = getCaseById(caseId) || getCurrentCase();
    if (!currentCase) return null;

    var phase = getPhaseById(currentCase.phaseId);
    var pattern = getPatternById(currentCase.patternId);
    var warmup = getWarmupById(currentCase.warmupId || (pattern && pattern.warmupId));

    return {
      app: content().app || {},
      case: currentCase,
      phase: phase,
      pattern: pattern,
      warmup: warmup
    };
  }

  function getWarmupContext(warmupId) {
    var warmup = getWarmupById(warmupId);
    if (!warmup) return null;

    var phase = getPhaseById(warmup.phaseId);
    var pattern = getPatternById(warmup.patternId);
    var currentCase = pattern && pattern.caseIds && pattern.caseIds.length
      ? getCaseById(pattern.caseIds[0])
      : getCurrentCase();

    return {
      app: content().app || {},
      warmup: warmup,
      phase: phase,
      pattern: pattern,
      case: currentCase
    };
  }

  function getPathwayContext(caseId) {
    return {
      app: content().app || {},
      phases: list("phases"),
      patterns: list("patterns"),
      warmups: list("warmups"),
      cases: list("cases"),
      futurePathway: Array.isArray(content().futurePathway) ? content().futurePathway : [],
      currentCase: getCaseById(caseId) || getCurrentCase()
    };
  }

  window.AMCStore = {
    content: content,
    getCurrentCase: getCurrentCase,
    getPhaseById: getPhaseById,
    getPatternById: getPatternById,
    getWarmupById: getWarmupById,
    getCaseById: getCaseById,
    getCaseContext: getCaseContext,
    getWarmupContext: getWarmupContext,
    getPathwayContext: getPathwayContext
  };
})();
