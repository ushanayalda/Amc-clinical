(function () {
  var lastDrawerTrigger = null;

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

  function openTools(initialPanel, trigger) {
    var drawer = getDrawer();
    if (!drawer) return;

    lastDrawerTrigger = trigger || document.activeElement;
    drawer.hidden = false;
    document.documentElement.classList.add("tools-open");

    if (initialPanel) {
      selectToolPanel(initialPanel);
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

  function selectHint(hintId) {
    var drawer = getDrawer();
    if (!drawer) return;
    drawer.querySelectorAll("[data-hint-choice]").forEach(function (choice) {
      choice.classList.remove("is-selected");
    });
    drawer.querySelectorAll("[data-hint-card]").forEach(function (card) {
      card.hidden = card.dataset.hintCard !== hintId;
    });
    var result = drawer.querySelector("[data-hint-result]");
    if (result) result.hidden = !hintId;
    var chosen = drawer.querySelector('[data-hint-choice="' + hintId + '"]');
    if (chosen) chosen.classList.add("is-selected");
  }

  function clearHint() {
    var drawer = getDrawer();
    if (!drawer) return;
    drawer.querySelectorAll("[data-hint-card]").forEach(function (card) {
      card.hidden = true;
    });
    drawer.querySelectorAll("[data-hint-choice]").forEach(function (choice) {
      choice.classList.remove("is-selected");
    });
    var result = drawer.querySelector("[data-hint-result]");
    if (result) result.hidden = true;
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
    document.addEventListener("click", function (event) {
      var navToggle = event.target.closest("[data-nav-toggle]");
      if (navToggle) {
        toggleFloatingNav();
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
        selectHint(hintChoice.dataset.hintChoice);
        return;
      }

      var hintBack = event.target.closest("[data-hint-back]");
      if (hintBack) {
        clearHint();
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
  }

  window.AMC_UI = {
    init: init,
    openTools: openTools,
    closeTools: closeTools,
    selectToolPanel: selectToolPanel
  };
})();
