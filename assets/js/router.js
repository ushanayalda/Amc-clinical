(function () {
  var routes = {
    home: "index.html",
    pathway: "index.html#cases",
    warmup: "index.html#ignite",
    case: "index.html#station-stem"
  };

  function screenFromPath(pathname, hashValue) {
    var path = (pathname || window.location.pathname).toLowerCase();
    var hash = (hashValue || window.location.hash || "").toLowerCase();

    if (hash === "#cases" || hash === "#pathway") return "pathway";
    if (hash === "#ignite" || hash === "#warmup") return "warmup";
    if (
      hash === "#station-stem" ||
      hash === "#speak-aloud" ||
      hash === "#timed-run" ||
      hash === "#mock-exam" ||
      hash === "#what-matters" ||
      hash === "#hints"
    ) {
      return "case";
    }

    if (path.indexOf("map.html") !== -1) return "pathway";
    if (path.indexOf("before-case.html") !== -1) return "warmup";
    if (path.indexOf("case1.html") !== -1) return "case";
    return "home";
  }

  function getScreen(appEl) {
    var inferred = screenFromPath();
    if (inferred !== "home") return inferred;
    return (appEl && appEl.dataset && appEl.dataset.screen) || inferred;
  }

  function caseQuery(caseId) {
    return caseId ? "?case=" + encodeURIComponent(caseId) : "";
  }

  function currentCaseId() {
    try {
      return new URLSearchParams(window.location.search).get("case") || "";
    } catch (error) {
      return "";
    }
  }

  function href(name, hash, caseId) {
    if (name === "case") return "index.html" + caseQuery(caseId || currentCaseId()) + (hash || "#station-stem");
    if (name === "pathway") return "index.html" + caseQuery(caseId || currentCaseId()) + "#cases";
    return routes[name] || routes.home;
  }

  window.AMCRouter = {
    routes: routes,
    screenFromPath: screenFromPath,
    getScreen: getScreen,
    href: href,
    currentCaseId: currentCaseId
  };
})();
