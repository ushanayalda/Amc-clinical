(function (root, factory) {
  "use strict";
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.AMCViewModel = api;
})(typeof window !== "undefined" ? window : this, function () {
  "use strict";

  var validViews = ["exam-stem", "exam-full-run", "reasoning-stem", "reasoning-full-run"];

  function resolveView(hashValue) {
    var clean = String(hashValue || "").replace(/^#/, "").toLowerCase();
    if (validViews.indexOf(clean) !== -1) return clean;

    var legacy = {
      "station-stem": "exam-stem",
      "speak-aloud": "exam-full-run",
      "timed-run": "exam-full-run",
      "hints": "reasoning-stem"
    };
    return legacy[clean] || "exam-stem";
  }

  function viewParts(viewValue) {
    var view = resolveView(viewValue);
    return {
      id: view,
      mode: view.indexOf("reasoning-") === 0 ? "reasoning" : "exam",
      screen: view.indexOf("full-run") !== -1 ? "full-run" : "stem"
    };
  }

  function countOccurrences(text, quote) {
    if (!quote) return 0;
    var count = 0;
    var from = 0;
    var index;
    while ((index = text.indexOf(quote, from)) !== -1) {
      count += 1;
      from = index + quote.length;
    }
    return count;
  }

  function occurrenceIndex(text, quote, occurrence) {
    var from = 0;
    var index = -1;
    var target = occurrence || 1;
    for (var i = 0; i < target; i += 1) {
      index = text.indexOf(quote, from);
      if (index === -1) return -1;
      from = index + quote.length;
    }
    return index;
  }

  function itemsForSurface(caseData, surface) {
    var items = [];
    if (surface === "stem") {
      (caseData.stem.lines || []).forEach(function (item) {
        items.push({ id: item.id, text: item.text, kind: "stem-line" });
      });
      (caseData.stem.tasks || []).forEach(function (item) {
        items.push({ id: item.id, text: item.text, kind: "task" });
      });
      return items;
    }

    (caseData.run.sections || []).forEach(function (section) {
      (section.turns || []).forEach(function (turn) {
        (turn.lines || []).forEach(function (line) {
          items.push({
            id: line.id,
            text: line.text,
            kind: turn.kind,
            speaker: turn.speaker,
            sectionId: section.id
          });
        });
      });
    });
    return items;
  }

  function itemMap(caseData, surface) {
    return itemsForSurface(caseData, surface).reduce(function (map, item) {
      map[item.id] = item;
      return map;
    }, {});
  }

  function validateCase(caseData) {
    var errors = [];
    var ids = {};

    ["stem", "run"].forEach(function (surface) {
      itemsForSurface(caseData, surface).forEach(function (item) {
        if (!item.id) errors.push(surface + " item is missing an ID");
        if (ids[item.id]) errors.push("Duplicate item ID: " + item.id);
        ids[item.id] = true;
        if (!item.text || !String(item.text).trim()) errors.push("Empty text: " + item.id);
      });
    });

    var hintIds = {};
    (caseData.hints || []).forEach(function (hint) {
      if (hintIds[hint.id]) errors.push("Duplicate Hint ID: " + hint.id);
      hintIds[hint.id] = true;

      var target = hint.target || {};
      var items = itemMap(caseData, target.surface);
      var item = items[target.itemId];
      if (!item) {
        errors.push("Hint target item not found: " + hint.id + " -> " + target.itemId);
        return;
      }

      var count = countOccurrences(item.text, target.quote);
      if (count < (target.occurrence || 1)) {
        errors.push("Hint quote occurrence not found: " + hint.id);
      }
      if (count !== 1 && !target.occurrence) {
        errors.push("Ambiguous Hint quote without occurrence: " + hint.id);
      }
      if (!hint.citationIds || !hint.citationIds.length) {
        errors.push("Hint has no citation: " + hint.id);
      }
    });

    var sourceIds = (caseData.sources || []).reduce(function (map, source) {
      map[source.id] = true;
      if (!/^https:\/\//.test(source.url || "")) errors.push("Invalid source URL: " + source.id);
      return map;
    }, {});

    (caseData.hints || []).forEach(function (hint) {
      (hint.citationIds || []).forEach(function (sourceId) {
        if (!sourceIds[sourceId]) errors.push("Unknown source " + sourceId + " in " + hint.id);
      });
    });

    return errors;
  }

  function hintsForItem(caseData, surface, itemId) {
    return (caseData.hints || []).filter(function (hint) {
      return hint.target.surface === surface && hint.target.itemId === itemId;
    });
  }

  function segmentsForItem(caseData, surface, itemId, text) {
    var hints = hintsForItem(caseData, surface, itemId);
    if (!hints.length) return [{ type: "text", text: text }];

    var anchors = hints.map(function (hint) {
      var start = occurrenceIndex(text, hint.target.quote, hint.target.occurrence || 1);
      return {
        hint: hint,
        start: start,
        end: start + hint.target.quote.length
      };
    }).sort(function (a, b) {
      return a.end - b.end;
    });

    var segments = [];
    var cursor = 0;
    anchors.forEach(function (anchor) {
      if (anchor.start < cursor || anchor.start < 0) {
        throw new Error("Overlapping or missing Hint anchor: " + anchor.hint.id);
      }
      if (anchor.end > cursor) {
        segments.push({ type: "text", text: text.slice(cursor, anchor.end) });
      }
      segments.push({
        type: "marker",
        hintId: anchor.hint.id,
        quote: anchor.hint.target.quote,
        label: "Open Hint for “" + anchor.hint.target.quote + "”"
      });
      cursor = anchor.end;
    });
    if (cursor < text.length) segments.push({ type: "text", text: text.slice(cursor) });
    return segments;
  }

  function plainSurfaceText(caseData, surface) {
    return itemsForSurface(caseData, surface).map(function (item) {
      return item.text;
    }).join("\n");
  }

  return {
    validViews: validViews.slice(),
    resolveView: resolveView,
    viewParts: viewParts,
    countOccurrences: countOccurrences,
    occurrenceIndex: occurrenceIndex,
    itemsForSurface: itemsForSurface,
    itemMap: itemMap,
    validateCase: validateCase,
    hintsForItem: hintsForItem,
    segmentsForItem: segmentsForItem,
    plainSurfaceText: plainSurfaceText
  };
});
