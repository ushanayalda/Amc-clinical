(function () {
  var routes = {
    home: "index.html",
    pathway: "map.html",
    warmup: "before-case.html",
    case: "case1.html"
  };

  function screenFromPath(pathname) {
    var path = (pathname || window.location.pathname).toLowerCase();
    if (path.indexOf("map.html") !== -1) return "pathway";
    if (path.indexOf("before-case.html") !== -1) return "warmup";
    if (path.indexOf("case1.html") !== -1) return "case";
    return "home";
  }

  function getScreen(appEl) {
    return (appEl && appEl.dataset && appEl.dataset.screen) || screenFromPath();
  }

  function href(name, hash) {
    return (routes[name] || routes.home) + (hash || "");
  }

  window.AMCRouter = {
    routes: routes,
    screenFromPath: screenFromPath,
    getScreen: getScreen,
    href: href
  };
})();
