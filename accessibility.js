(function () {
  const storageKey = "amc.a11y.v1";
  const defaults = {
    text: "normal",
    spacing: "standard",
    contrast: "standard"
  };

  const labels = {
    text: {
      normal: "Standard",
      large: "Larger",
      xlarge: "Biggest"
    },
    spacing: {
      standard: "Standard",
      open: "More air"
    },
    contrast: {
      standard: "Standard",
      high: "Strong"
    }
  };

  function readState() {
    try {
      return Object.assign({}, defaults, JSON.parse(window.localStorage.getItem(storageKey)) || {});
    } catch (error) {
      return Object.assign({}, defaults);
    }
  }

  function saveState(state) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      // The controls still work for the current page if storage is unavailable.
    }
  }

  function setDocumentState(state) {
    document.documentElement.dataset.a11yText = state.text;
    document.documentElement.dataset.a11ySpacing = state.spacing;
    document.documentElement.dataset.a11yContrast = state.contrast;
  }

  function activeSummary(state) {
    const active = [];
    if (state.text !== defaults.text) active.push(labels.text[state.text]);
    if (state.spacing !== defaults.spacing) active.push(labels.spacing[state.spacing]);
    if (state.contrast !== defaults.contrast) active.push(labels.contrast[state.contrast]);
    return active.length ? active.join(" | ") : "Standard";
  }

  function updatePanel(panel, state) {
    panel.querySelectorAll("[data-a11y-control]").forEach((button) => {
      const control = button.dataset.a11yControl;
      const value = button.dataset.a11yValue;
      button.setAttribute("aria-pressed", String(state[control] === value));
    });

    const summary = panel.querySelector("[data-a11y-summary]");
    if (summary) summary.textContent = activeSummary(state);
  }

  function createButton(control, value, text) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "accessibility-button";
    button.dataset.a11yControl = control;
    button.dataset.a11yValue = value;
    button.setAttribute("aria-pressed", "false");
    button.textContent = text;
    return button;
  }

  function createGroup(title, buttons) {
    const group = document.createElement("div");
    group.className = "accessibility-group";

    const label = document.createElement("p");
    label.className = "accessibility-label";
    label.textContent = title;

    const options = document.createElement("div");
    options.className = "accessibility-options";
    buttons.forEach((button) => options.appendChild(button));

    group.append(label, options);
    return group;
  }

  function createPanel(state) {
    const panel = document.createElement("details");
    panel.id = "accessibilityPanel";
    panel.className = "accessibility-panel";

    const summary = document.createElement("summary");
    summary.innerHTML = 'View <span data-a11y-summary></span>';

    const body = document.createElement("div");
    body.className = "accessibility-body";

    body.appendChild(createGroup("Text", [
      createButton("text", "normal", "Standard"),
      createButton("text", "large", "Larger"),
      createButton("text", "xlarge", "Biggest")
    ]));

    body.appendChild(createGroup("Spacing", [
      createButton("spacing", "standard", "Standard"),
      createButton("spacing", "open", "More air")
    ]));

    body.appendChild(createGroup("Contrast", [
      createButton("contrast", "standard", "Standard"),
      createButton("contrast", "high", "Strong")
    ]));

    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "accessibility-button accessibility-reset";
    reset.textContent = "Reset view";
    reset.addEventListener("click", () => {
      state = Object.assign({}, defaults);
      setDocumentState(state);
      saveState(state);
      updatePanel(panel, state);
    });

    body.appendChild(reset);
    panel.append(summary, body);

    panel.addEventListener("click", (event) => {
      const button = event.target.closest("[data-a11y-control]");
      if (!button) return;

      state[button.dataset.a11yControl] = button.dataset.a11yValue;
      setDocumentState(state);
      saveState(state);
      updatePanel(panel, state);
    });

    updatePanel(panel, state);
    return panel;
  }

  function initAccessibilityPanel() {
    if (document.getElementById("accessibilityPanel")) return;

    const state = readState();
    setDocumentState(state);
    document.body.appendChild(createPanel(state));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccessibilityPanel);
  } else {
    initAccessibilityPanel();
  }
})();
