(function () {
  function boot() {
    var app = document.getElementById("app");
    if (!app || !window.AMCRenderers || !window.AMCStore) return;

    var screen = window.AMCRouter.getScreen(app);
    document.body.dataset.screen = screen;

    if (screen === "pathway") {
      window.AMCRenderers.renderPathway(app, window.AMCStore.getPathwayContext());
    } else if (screen === "warmup") {
      var warmupId = app.dataset.warmupId || "warmup-dangerous-chest-pain";
      window.AMCRenderers.renderWarmup(app, window.AMCStore.getWarmupContext(warmupId));
    } else if (screen === "case") {
      var caseId = app.dataset.caseId || "case-1-classic-chest-pain";
      window.AMCRenderers.renderCase(app, window.AMCStore.getCaseContext(caseId));
    } else {
      window.AMCRenderers.renderHome(app, window.AMCStore.getPathwayContext());
    }

    window.AMC_UI.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
