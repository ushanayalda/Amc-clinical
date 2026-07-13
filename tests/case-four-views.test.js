const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const crypto = require("node:crypto");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
const caseFiles = fs.readdirSync(path.join(root, "data", "cases"))
  .filter((file) => /^case-[0-9]+[.]js$/.test(file))
  .sort();
caseFiles.forEach((file) => {
  vm.runInContext(fs.readFileSync(path.join(root, "data/cases", file), "utf8"), context);
});

const viewModel = require("../assets/js/case-views.js");
const cases = context.window.AMC_CASES;
const caseData = context.window.AMC_CASES[0];
const caseTwo = context.window.AMC_CASES[1];
const caseThree = context.window.AMC_CASES[2];
const reasoningCases = cases.filter((item) => item.reasoningAvailable !== false);
const examOnlyCases = cases.filter((item) => item.reasoningAvailable === false);
const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
const canonicalHashes = {
  "case-001": { stem: "6bfb9fcda2a004205ddf0076b19802c2592b143129f8381ec30cadaf25058875", run: "cd353fbe9e257718c54ff615b8f0d5bf5128d30bb0e89684589844696e2ac5b9" },
  "case-002": { stem: "18657f3620eca6ce1bb2a06fe0811dc1b340de7ee73e4a6f79fa6e88df53751d", run: "9b976818df6b4f1a28202aa73a52a38f4914481a6370a907ccabcbd36d58d6a9" },
  "case-003": { stem: "628cd9b24075030fa0b146fe890c5b9514acacc0bbbedfaa5c55c4e37f7db634", run: "95f1c861b3fa40e37be2de87d17616ce21321d7c4813824cf048e76aa1296f67" },
  "case-004": { stem: "a615fe14b9d4d6233646069c60ca8abb99eebcdc7af35e29026882c85aecc8da", run: "253476b2111e2b3df0d00fab56da453ac8cc4d7053e356af300fa778e9364664" },
  "case-005": { stem: "1a7478b1c4e9bc31ae63706cb84c1a3589ee185a508afa58af1a6f5509f7adcd", run: "c8de9afc9c97f18d1f2ba1fbe423cd1e47c0f547a1169b998ba388180fad6503" },
  "case-006": { stem: "40a0bd254d28cbc5afef492b6f8b1f602ee226585de11e2bafb8b6a5157db4aa", run: "477055cb3109555634a0c653e9663d4537d81d3fda29ec268e8fa91be4b9479c" },
  "case-007": { stem: "da28c9690459f6739b1cbaedf6414a45672a92a5dad8bad742ee3ac98759c27d", run: "ca6fff5460d18151ab5fb7f382b97c811df7c13a75e9381f4f9efb1927eec79a" },
  "case-008": { stem: "b47b764c07531f233d355d1cd7d0fca7161053c312999dbef5d564baaeaa16b9", run: "a49942896a9fbea401f4003c6875f84958e8967c1f289b8469f5cbfb51fc1168" },
  "case-009": { stem: "57f372e77a6e3326be26cb5b841790e1a9f5aa0813b2fc975100ab002da8a986", run: "fb1327e95e4f67d0ec82373f8ce398f40bbbc861d4cadb377b85f12a7864dc70" },
  "case-010": { stem: "82e5b097663ed13df767d05b6086f90aca787fe6bf686b32e0460395d3254e50", run: "52b71ebf513d4a4e3dc172a5ea22a200c652ee0532b387594df5a101b6104b6c" },
  "case-011": { stem: "0c290f386e3ee5c4e072090157f1ff15d50751204444cdf8dabe47f2b29751b9", run: "15ea305693616c5265c494a88e1c6f66873bc9af9e09ad8d34b9c75945312ea7" },
  "case-012": { stem: "2622bfa858dd237450de67f5309c265d4b54014ab724e26ca3b5b36dfdf90c05", run: "733618606359855606a0df8e314429e306c3aa43a42ac869c84457eae05c71b4" },
  "case-013": { stem: "34c2bdfb29402d1a7d4f4069c8f3374b1a41b56901afb9a1c56cd09b5eec7a75", run: "b18bea8eaa583fd4b9e0e9c775212827448bf240788fbfb5a532e7571a191313" },
  "case-014": { stem: "965310810f6a95a3bd4c03ef9e19d077cc9b212086558ab08833df8a3953c25b", run: "f6b426382e5e72fa494250a5db53d18681f2b845ec3007e498121700b20c633b" },
  "case-015": { stem: "1bcf3e3672f04a937a41c4ec5c0e193e8875adc89724c4b2033b5bd4c31ad7db", run: "e12ff509555b27b85ceea5ca7b66817af2e2406381b7ae2c43a15fb3ab7293f3" },
  "case-016": { stem: "a5db7c28d93248af7399bff948cc1ec91945b2b9270dddc640db838fc95d6689", run: "df5f077117602455398314e5c010c174a562fcbaf7adb066cd1c650a4a7fb76a" },
  "case-017": { stem: "b284bae621453e699d1b927930a6d1e3e719c608645c430b3b3e445ee8280caf", run: "fe13a410831883dd635777cc7194363ef3185e2f0d83834829527d48f772d3cd" }
};

test("Case 1 remains the protected canonical four-view case", () => {
  assert.equal(context.window.AMC_CASES.length, caseFiles.length);
  assert.equal(caseData.id, "case-001");
  assert.equal(caseData.status, "review");
  assert.equal(caseData.modality, "in_person");
  assert.ok(caseData.stem.lines.length > 0);
  assert.ok(caseData.run.sections.length > 0);
  assert.equal(caseData.reasoning, undefined, "annotated case text must not be duplicated");
});

test("Cases 1 to 17 expose complete reasoning while Cases 18 to 20 remain exam-only", () => {
  const expectedIds = caseFiles.map((file) => file.replace(/[.]js$/, ""));
  assert.deepEqual(Array.from(cases, (item) => item.id), expectedIds);
  assert.deepEqual(Array.from(reasoningCases, (item) => item.id), expectedIds.slice(0, 17));
  assert.deepEqual(Array.from(examOnlyCases, (item) => item.id), expectedIds.slice(17));

  reasoningCases.forEach((item) => {
    assert.notEqual(item.reasoningAvailable, false, `${item.id} must expose Reasoning`);
    assert.ok(item.reasoningCompass, `${item.id} is missing its reasoning compass`);
    assert.ok(item.masteryFocus, `${item.id} is missing its two mastery horizons`);
    assert.ok(Array.isArray(item.hints) && item.hints.length >= 30, `${item.id} needs a complete Hint journey`);
    assert.ok(Array.isArray(item.sources) && item.sources.length >= 1, `${item.id} needs learner-facing reasoning sources`);
    assert.ok(item.stem.lines.length > 0);
    assert.ok(item.stem.tasks.length > 0);
    assert.ok(item.run.sections.length > 0);
    assert.deepEqual(viewModel.validateCase(item), []);
  });

  examOnlyCases.forEach((item) => {
    assert.equal(item.reasoningCompass, undefined, `${item.id} contains a reasoning compass`);
    assert.equal(item.hints, undefined, `${item.id} contains Hints`);
    assert.equal(item.sources, undefined, `${item.id} contains learner-facing reasoning sources`);
    assert.ok(item.stem.lines.length > 0);
    assert.ok(item.stem.tasks.length > 0);
    assert.ok(item.run.sections.length > 0);
    assert.deepEqual(viewModel.validateCase(item), []);
  });
});

test("case selection exposes completed reasoning and falls back for exam-only cases", () => {
  const examOnlyCase = examOnlyCases[0];
  assert.ok(examOnlyCase, "an exam-only fallback case is required");
  assert.equal(viewModel.selectCase(cases, "case-002").id, "case-002");
  assert.equal(viewModel.selectCase(cases, "case-003").id, "case-003");
  assert.equal(viewModel.selectCase(cases, "case-017").id, "case-017");
  assert.equal(viewModel.selectCase(cases, "missing-case"), null);
  assert.equal(viewModel.selectCase(cases, "").id, "case-001");
  assert.equal(viewModel.viewForCase(caseTwo, "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase(caseThree, "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase(examOnlyCase, "#reasoning-full-run").id, "exam-full-run");
  assert.equal(viewModel.viewForCase(cases[16], "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase({ reasoningAvailable: false }, "#reasoning-full-run").id, "exam-full-run");
  assert.equal(viewModel.viewForCase(caseData, "#reasoning-full-run").id, "reasoning-full-run");
});

test("every Reasoning layer preserves the canonical Stem and Full Run", () => {
  reasoningCases.forEach((item) => {
    assert.ok(canonicalHashes[item.id], `missing canonical hash contract for ${item.id}`);
    assert.equal(digest(item.stem), canonicalHashes[item.id].stem, `${item.id} Stem changed`);
    assert.equal(digest(item.run), canonicalHashes[item.id].run, `${item.id} Full Run changed`);

    ["stem", "run"].forEach((surface) => {
      viewModel.itemsForSurface(item, surface).forEach((surfaceItem) => {
        const reconstructed = viewModel.segmentsForItem(item, surface, surfaceItem.id, surfaceItem.text)
          .filter((segment) => segment.type === "text")
          .map((segment) => segment.text)
          .join("");
        assert.equal(reconstructed, surfaceItem.text, `${item.id}/${surface}/${surfaceItem.id} changed when annotated`);
      });
    });
  });
});

test("Cases 1 to 17 keep short-term case mastery and long-term clinical mastery visible", () => {
  const caseFocuses = new Set();
  const clinicalFocuses = new Set();

  reasoningCases.forEach((item) => {
    assert.ok(item.masteryFocus.case.trim(), `${item.id} lacks case mastery`);
    assert.ok(item.masteryFocus.clinical.trim(), `${item.id} lacks clinical mastery`);
    caseFocuses.add(item.masteryFocus.case);
    clinicalFocuses.add(item.masteryFocus.clinical);
  });

  assert.equal(caseFocuses.size, reasoningCases.length, "case mastery must be specific to each station");
  assert.equal(clinicalFocuses.size, reasoningCases.length, "clinical mastery must be a distinct transferable lesson");

  const appSource = fs.readFileSync(path.join(root, "assets/js/app.js"), "utf8");
  assert.match(appSource, /"Case mastery"/);
  assert.match(appSource, /"Clinical mastery"/);
});

test("every new Hint journey resolves exactly, stays in disclosure order and cites a current source", () => {
  reasoningCases.slice(1).forEach((item) => {
    const sourceIds = new Set(item.sources.map((source) => source.id));
    const itemOrder = {
      stem: new Map(viewModel.itemsForSurface(item, "stem").map((surfaceItem, index) => [surfaceItem.id, index])),
      run: new Map(viewModel.itemsForSurface(item, "run").map((surfaceItem, index) => [surfaceItem.id, index]))
    };
    const previous = {
      stem: { item: -1, quote: -1 },
      run: { item: -1, quote: -1 }
    };

    item.sources.forEach((source) => assert.match(source.url, /^https:\/\//, `${item.id}/${source.id} must use HTTPS`));

    item.hints.forEach((hint) => {
      const targetItem = viewModel.itemMap(item, hint.target.surface)[hint.target.itemId];
      assert.ok(targetItem, `${item.id}/${hint.id} has no target item`);
      assert.equal(viewModel.countOccurrences(targetItem.text, hint.target.quote), 1, `${item.id}/${hint.id} has an ambiguous quote`);
      assert.equal(hint.target.occurrence, 1, `${item.id}/${hint.id} must use the exact first occurrence`);

      const current = {
        item: itemOrder[hint.target.surface].get(targetItem.id),
        quote: targetItem.text.indexOf(hint.target.quote)
      };
      const prior = previous[hint.target.surface];
      assert.ok(
        current.item > prior.item || (current.item === prior.item && current.quote > prior.quote),
        `${item.id}/${hint.id} is out of disclosure order`
      );
      previous[hint.target.surface] = current;

      assert.ok(hint.citationIds.length >= 1, `${item.id}/${hint.id} has no citation`);
      hint.citationIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), `${item.id}/${hint.id} cites unknown ${sourceId}`));
    });

    const finalHint = item.hints.at(-1);
    const finalRunItem = viewModel.itemsForSurface(item, "run").at(-1);
    assert.equal(finalHint.target.surface, "run", `${item.id} final Hint must close the Full Run`);
    assert.equal(finalHint.target.itemId, finalRunItem.id, `${item.id} final Hint must target station completion`);
  });
});

test("every stated station task is mentally anchored before the run", () => {
  reasoningCases.forEach((item) => {
    const stemTargets = new Set(item.hints.filter((hint) => hint.target.surface === "stem").map((hint) => hint.target.itemId));
    item.stem.tasks.forEach((task) => {
      assert.ok(stemTargets.has(task.id), `${item.id} has no reasoning anchor for task ${task.id}`);
    });
  });
});

test("the full Reasoning set keeps the locked consultant-companion voice", () => {
  const reasoningText = JSON.stringify(reasoningCases.map((item) => ({
    masteryFocus: item.masteryFocus,
    compass: item.reasoningCompass,
    hints: item.hints
  })));

  assert.doesNotMatch(reasoningText, /\bADHD\b|\blearner\b|\bcandidate\b|—/i);
  assert.doesNotMatch(reasoningText, /speed up your safety|heart (?:near|at) the front|stay open|stays open|diagnostic weight|route to danger|on the board/i);
  assert.doesNotMatch(reasoningText, /reflux owns|physiology outranks|danger threshold|clot-risk stack|clues click|one mechanism unifies|probability shifter/i);
  assert.doesNotMatch(reasoningText, /\b(?:mental|diagnostic|task|clinical) map\b|\b(?:history|heart|diagnostic) lane\b|old case closed/i);
});

test("Case 2 publishes the approved 40-Hint reasoning journey", () => {
  assert.equal(caseTwo.id, "case-002");
  assert.equal(caseTwo.reasoningAvailable, true);
  assert.equal(caseTwo.status, "reasoning_complete");
  assert.equal(caseTwo.statusLabel, "Exam and reasoning complete");
  assert.equal(caseTwo.format.predominantArea, "Management/Counselling/Education");
  assert.equal(caseTwo.reasoningCompass.stem.steps.length, 3);
  assert.equal(caseTwo.reasoningCompass.run.steps.length, 3);
  assert.equal(caseTwo.hints.length, 40);
  assert.equal(caseTwo.sources.length, 8);
  assert.deepEqual(viewModel.validateCase(caseTwo), []);
});

test("Case 2 reasoning preserves the approved Stem and Full Run", () => {
  const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.equal(digest(caseTwo.stem), "18657f3620eca6ce1bb2a06fe0811dc1b340de7ee73e4a6f79fa6e88df53751d");
  assert.equal(digest(caseTwo.run), "9b976818df6b4f1a28202aa73a52a38f4914481a6370a907ccabcbd36d58d6a9");

  ["stem", "run"].forEach((surface) => {
    viewModel.itemsForSurface(caseTwo, surface).forEach((item) => {
      const reconstructed = viewModel.segmentsForItem(caseTwo, surface, item.id, item.text)
        .filter((segment) => segment.type === "text")
        .map((segment) => segment.text)
        .join("");
      assert.equal(reconstructed, item.text, `${surface}/${item.id} changed when annotated`);
    });
  });
});

test("Case 2 Hints resolve exactly, remain ordered and reveal the diagnosis after the pain pattern is elicited", () => {
  const sourceIds = new Set(caseTwo.sources.map((source) => source.id));
  const surfaceText = {
    stem: viewModel.plainSurfaceText(caseTwo, "stem"),
    run: viewModel.plainSurfaceText(caseTwo, "run")
  };
  const previous = { stem: -1, run: -1 };

  caseTwo.hints.forEach((hint, index) => {
    const item = viewModel.itemMap(caseTwo, hint.target.surface)[hint.target.itemId];
    assert.ok(item, `missing Case 2 target for ${hint.id}`);
    assert.equal(viewModel.countOccurrences(item.text, hint.target.quote), 1, `ambiguous quote in ${hint.id}`);
    const position = surfaceText[hint.target.surface].indexOf(hint.target.quote);
    assert.ok(position > previous[hint.target.surface], `out-of-order anchor in ${hint.id}`);
    previous[hint.target.surface] = position;
    assert.ok(hint.citationIds.length >= 1, `uncited Hint ${hint.id}`);
    hint.citationIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), `unknown source ${sourceId}`));

    const body = [hint.popUp].concat(hint.say, hint.logic || [], hint.pause, hint.recap, hint.reorient, hint.clock || "").join(" ");
    const namesDiagnosis = /acute aortic syndrome|aortic dissection/i.test(body);
    if (index < 17) assert.equal(namesDiagnosis, false, `diagnosis leaked in ${hint.id}`);
    if (index === 17) assert.equal(namesDiagnosis, true, "Hint 18 must name the leading diagnosis after the pain history");
  });

  assert.doesNotMatch(JSON.stringify(caseTwo.reasoningCompass.stem), /sudden severe|upper back/i);
  assert.doesNotMatch(JSON.stringify(caseTwo.hints.slice(10, 17)), /\bsudden\b|chest-to-back|between my shoulder blades/i);
  assert.doesNotMatch(JSON.stringify(caseTwo.hints.find((hint) => hint.id === "c002-hint-20")), /near-syncope/i);
  assert.match(JSON.stringify(caseTwo.hints.find((hint) => hint.id === "c002-hint-25")), /has not established whether he uses an anticoagulant/i);

  const learnerText = JSON.stringify(caseTwo.hints);
  assert.doesNotMatch(learnerText, /speed up your safety|heart (?:near|at) the front|stay open|stays open|diagnostic weight|route to danger|on the board/i);
  assert.doesNotMatch(learnerText, /\bADHD\b|\blearner\b|\bcandidate\b|—/i);
});

test("Case 3 publishes the audited 41-Hint reasoning journey", () => {
  assert.equal(caseThree.id, "case-003");
  assert.equal(caseThree.reasoningAvailable, true);
  assert.equal(caseThree.status, "reasoning_complete");
  assert.equal(caseThree.statusLabel, "Exam and reasoning complete");
  assert.equal(caseThree.format.predominantArea, "History Taking");
  assert.equal(caseThree.reasoningCompass.stem.steps.length, 3);
  assert.equal(caseThree.reasoningCompass.run.steps.length, 3);
  assert.equal(caseThree.hints.length, 41);
  assert.equal(caseThree.sources.length, 9);
  assert.deepEqual(Array.from(caseThree.hints, (hint) => hint.id), Array.from({ length: 41 }, (_, index) => `c003-hint-${String(index + 1).padStart(2, "0")}`));
  assert.deepEqual(viewModel.validateCase(caseThree), []);
});

test("Case 3 reasoning preserves the approved Stem and Full Run", () => {
  const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.equal(digest(caseThree.stem), "628cd9b24075030fa0b146fe890c5b9514acacc0bbbedfaa5c55c4e37f7db634");
  assert.equal(digest(caseThree.run), "95f1c861b3fa40e37be2de87d17616ce21321d7c4813824cf048e76aa1296f67");

  ["stem", "run"].forEach((surface) => {
    viewModel.itemsForSurface(caseThree, surface).forEach((item) => {
      const reconstructed = viewModel.segmentsForItem(caseThree, surface, item.id, item.text)
        .filter((segment) => segment.type === "text")
        .map((segment) => segment.text)
        .join("");
      assert.equal(reconstructed, item.text, `${surface}/${item.id} changed when annotated`);
    });
  });
});

test("Case 3 Hints resolve exactly and reveal pulmonary embolism only after the calf clue", () => {
  const sourceIds = new Set(caseThree.sources.map((source) => source.id));
  const itemOrder = {
    stem: new Map(viewModel.itemsForSurface(caseThree, "stem").map((item, index) => [item.id, index])),
    run: new Map(viewModel.itemsForSurface(caseThree, "run").map((item, index) => [item.id, index]))
  };
  const previous = {
    stem: { item: -1, quote: -1 },
    run: { item: -1, quote: -1 }
  };

  caseThree.hints.forEach((hint, index) => {
    const item = viewModel.itemMap(caseThree, hint.target.surface)[hint.target.itemId];
    assert.ok(item, `missing Case 3 target for ${hint.id}`);
    assert.equal(viewModel.countOccurrences(item.text, hint.target.quote), 1, `ambiguous quote in ${hint.id}`);
    assert.equal(hint.target.occurrence, 1, `unsupported occurrence in ${hint.id}`);
    const current = {
      item: itemOrder[hint.target.surface].get(item.id),
      quote: item.text.indexOf(hint.target.quote)
    };
    const prior = previous[hint.target.surface];
    assert.ok(current.item > prior.item || (current.item === prior.item && current.quote > prior.quote), `out-of-order anchor in ${hint.id}`);
    previous[hint.target.surface] = current;
    assert.ok(hint.citationIds.length >= 1, `uncited Hint ${hint.id}`);
    hint.citationIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), `unknown source ${sourceId}`));

    const body = [hint.popUp].concat(hint.say, hint.logic || [], hint.pause, hint.recap, hint.reorient, hint.clock || "").join(" ");
    const namesDiagnosis = /pulmonary embolism|pulmonary embolus|\bPE\b/i.test(body);
    if (index < 23) assert.equal(namesDiagnosis, false, `diagnosis leaked in ${hint.id}`);
    if (index === 23) assert.equal(namesDiagnosis, true, "Hint 24 must name the leading diagnosis after the unilateral calf clue");
  });

  const revealHint = caseThree.hints[23];
  assert.equal(revealHint.id, "c003-hint-24");
  assert.equal(revealHint.target.itemId, "c003-run-leg-answer");
  assert.equal(revealHint.target.quote, "right calf has ached for two days");

  const earlyCitations = caseThree.hints.slice(0, 23).flatMap((hint) => hint.citationIds);
  assert.equal(earlyCitations.includes("racgp-pe-2022"), false, "a source title reveals PE before Hint 24");
  assert.equal(earlyCitations.includes("thanz-vte-2019"), false, "a source title reveals VTE before Hint 24");

  const finalHint = caseThree.hints.at(-1);
  assert.equal(finalHint.target.surface, "run");
  assert.equal(finalHint.target.itemId, "c003-run-end");
  assert.equal(finalHint.target.quote, "The station is complete");
});

test("Case 3 reasoning uses only clues already disclosed by the Full Run", () => {
  const hintText = (start, end) => JSON.stringify(caseThree.hints.slice(start, end));

  assert.doesNotMatch(hintText(10, 15), /91%|112|24 breaths|hypoxaemi|tachycard/i);
  assert.doesNotMatch(hintText(10, 23), /right calf has ached|looks a little swollen|eight hours|combined pill for endometriosis/i);
  assert.doesNotMatch(JSON.stringify(caseThree.hints[23]), /eight hours|combined pill for endometriosis/i);
  assert.doesNotMatch(JSON.stringify(caseThree.hints[24]), /combined pill for endometriosis/i);
  assert.match(JSON.stringify(caseThree.hints[15]), /91%|112/);
  assert.match(JSON.stringify(caseThree.hints[23]), /right calf has ached|pulmonary embolism/i);
  assert.match(JSON.stringify(caseThree.hints[24]), /eight hours|prolonged sitting/i);
  assert.match(JSON.stringify(caseThree.hints[25]), /combined pill for endometriosis|oestrogen/i);
});

test("Case 3 sources and consultant-companion language pass the release guardrails", () => {
  caseThree.sources.forEach((source) => {
    assert.match(source.url, /^https:\/\//, `${source.id} does not use HTTPS`);
  });

  const oxygenHints = caseThree.hints.filter((hint) => ["c003-hint-16", "c003-hint-17", "c003-hint-35"].includes(hint.id));
  assert.ok(oxygenHints.every((hint) => hint.citationIds.includes("anzcor-oxygen-2021")));
  const investigationHint = caseThree.hints.find((hint) => hint.id === "c003-hint-36");
  const anticoagulationHint = caseThree.hints.find((hint) => hint.id === "c003-hint-37");
  const teachBackHint = caseThree.hints.find((hint) => hint.id === "c003-hint-39");
  const handoverHint = caseThree.hints.find((hint) => hint.id === "c003-hint-40");
  const stationEndHint = caseThree.hints.find((hint) => hint.id === "c003-hint-41");
  assert.ok(investigationHint.citationIds.some((id) => ["racgp-pe-2022", "thanz-vte-2019"].includes(id)));
  assert.ok(anticoagulationHint.citationIds.some((id) => ["racgp-pe-2022", "thanz-vte-2019"].includes(id)));
  assert.ok(teachBackHint.citationIds.includes("ahrq-teach-back-2024"));
  assert.ok(handoverHint.citationIds.includes("acsqhc-handover-2026"));
  assert.ok(stationEndHint.citationIds.includes("amc-tips-2024"));
  assert.match(caseThree.clinicalSources.find((source) => /oxygen in emergencies/i.test(source.title)).date, /Approved April 2021/);

  const learnerText = JSON.stringify({
    compass: caseThree.reasoningCompass,
    hints: caseThree.hints
  });
  assert.doesNotMatch(learnerText, /speed up your safety|heart (?:near|at) the front|stay open|stays open|diagnostic weight|route to danger|on the board/i);
  assert.doesNotMatch(learnerText, /reflux owns|physiology outranks|danger threshold|clot-risk stack|clues click|one mechanism unifies|probability shifter/i);
  assert.doesNotMatch(learnerText, /\bmap\b|\blane\b|\bADHD\b|\blearner\b|\bcandidate\b|—/i);
});

test("Cases 4 to 17 publication metadata uses one cache-safe release marker", () => {
  const releaseMarker = "cases4-17-reasoning-v1";
  const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const version = JSON.parse(fs.readFileSync(path.join(root, "version.json"), "utf8"));
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/pages.yml"), "utf8");
  const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
  const refresh = fs.readFileSync(path.join(root, ".pages-refresh"), "utf8");

  assert.match(indexSource, new RegExp(`name="x-build-id" content="${releaseMarker}"`));
  assert.match(indexSource, new RegExp(`window[.]__BUILD_ID__ = "${releaseMarker}"`));
  assert.equal((indexSource.match(new RegExp(`[?]v=${releaseMarker}`, "g")) || []).length, caseFiles.length + 3);
  assert.doesNotMatch(indexSource, /case[23]-reasoning-v1/);
  assert.equal(version.buildId, releaseMarker);
  assert.equal(version.checkpoint, "cases-004-017-reasoning-published");
  assert.deepEqual(version.caseIds, caseFiles.map((file) => file.replace(/[.]js$/, "")));
  assert.match(workflow, /grep -q "cases4-17-reasoning-v1" index[.]html/);
  assert.match(readme, /Cases 1 to 17 contain completed Reasoning layers/);
  assert.match(refresh, /Checkpoint: cases4-17-reasoning-v1/);
});

test("malformed generated cases fail validation without throwing", () => {
  assert.doesNotThrow(() => viewModel.validateCase({ id: "broken" }));
  assert.ok(viewModel.validateCase({ id: "broken" }).length > 0);
  assert.deepEqual(viewModel.itemsForSurface({}, "stem"), []);
  assert.deepEqual(viewModel.itemsForSurface({}, "run"), []);
});

test("shared UI chrome uses learner-facing language and hides branch workflow", () => {
  const appSource = fs.readFileSync(path.join(root, "assets/js/app.js"), "utf8");
  assert.doesNotMatch(appSource, /Candidate information/);
  assert.doesNotMatch(appSource, /The Reasoning version is produced separately/);
  assert.match(appSource, /Your station information/);
  assert.match(appSource, /Open the first available case/);
});

test("every canonical case is loaded by the source shell and discovered by the build", () => {
  const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const buildSource = fs.readFileSync(path.join(root, "scripts/build-pages.js"), "utf8");
  caseFiles.forEach((file) => {
    assert.match(indexSource, new RegExp("data/cases/" + file.replace(/[.]/g, "[.]")));
  });
  assert.match(buildSource, /readdirSync\(path[.]join\(root, "data", "cases"\)\)/);
});

test("new case files contain complete station voices without learner-facing reasoning text", () => {
  cases.slice(1).forEach((item) => {
    const turns = item.run.sections.flatMap((section) => section.turns);
    const speakers = new Set(turns.map((turn) => turn.speaker));
    ["Doctor", "Patient", "Examiner", "Action"].forEach((speaker) => {
      assert.ok(speakers.has(speaker), `${item.id} is missing ${speaker}`);
    });
    assert.equal(turns[0].speaker, "Examiner");
    assert.equal(turns.at(-1).speaker, "Examiner");
    const learnerText = JSON.stringify({ stem: item.stem, run: item.run });
    assert.doesNotMatch(learnerText, /\bHint\b|reasoning layer|thinking partner|ADHD/i);
    assert.doesNotMatch(learnerText, /\bcandidate\b/i);
    assert.doesNotMatch(learnerText, /—/);

    const audibleWords = turns
      .filter((turn) => turn.kind !== "action")
      .flatMap((turn) => turn.lines)
      .map((line) => line.text)
      .join(" ")
      .trim()
      .split(/\s+/).length;
    assert.ok(audibleWords >= 750 && audibleWords <= 1300, `${item.id} is not realistic for an 8-minute run`);
    if (["case-012", "case-013", "case-014", "case-015", "case-016", "case-017", "case-018", "case-019", "case-020"].includes(item.id)) {
      assert.ok(audibleWords <= 1050, `${item.id} is too dense for an 8-minute run`);
    }
  });
});

test("case identifiers, task clocks and patient names remain internally consistent", () => {
  const patternCounts = new Map();
  const allowedAssessmentAreas = new Set([
    "History Taking",
    "Examination",
    "Diagnostic Formulation",
    "Management/Counselling/Education"
  ]);

  cases.forEach((item) => {
    const caseNumber = Number.parseInt(item.id.replace("case-", ""), 10);
    const paddedCaseNumber = String(caseNumber).padStart(3, "0");
    const patternId = item.pattern?.id || 1;
    if (!item.pattern) assert.equal(item.id, "case-001", `${item.id} is unexpectedly missing pattern metadata`);
    const patternOrdinal = (patternCounts.get(patternId) || 0) + 1;
    patternCounts.set(patternId, patternOrdinal);

    assert.ok(
      allowedAssessmentAreas.has(item.format.predominantArea),
      `${item.id} has a non-AMC predominant assessment area`
    );

    assert.equal(item.displayNumber, `Case ${caseNumber}`, `${item.id} has an inconsistent display number`);
    if (caseNumber >= 5) {
      assert.equal(item.globalId, `CP-C${paddedCaseNumber}`, `${item.id} has an inconsistent global ID`);
    }
    if (caseNumber >= 2) {
      assert.equal(
        item.registryId,
        `CP-P${patternId}-C${String(patternOrdinal).padStart(3, "0")}`,
        `${item.id} has an inconsistent registry ID`
      );
    }

    const taskMinutes = item.stem.tasks.reduce((total, task) => {
      const match = task.timing.match(/^(\d+) minutes?$/);
      assert.ok(match, `${item.id}/${task.id} has an invalid task timing`);
      return total + Number.parseInt(match[1], 10);
    }, 0);
    assert.equal(taskMinutes, 8, `${item.id} task timings do not total eight minutes`);

    const namespaces = {
      stem: item.stem.lines.concat(item.stem.tasks).map((entry) => entry.id),
      sections: item.run.sections.map((section) => section.id),
      turns: item.run.sections.flatMap((section) => section.turns).map((turn) => turn.id),
      lines: item.run.sections.flatMap((section) => section.turns).flatMap((turn) => turn.lines).map((line) => line.id)
    };
    Object.entries(namespaces).forEach(([namespace, ids]) => {
      assert.ok(ids.every(Boolean), `${item.id} contains a missing ${namespace} ID`);
      assert.equal(new Set(ids).size, ids.length, `${item.id} contains a duplicate ${namespace} ID`);
    });

    const stemText = item.stem.lines.map((line) => line.text).join(" ");
    const name = stemText.match(/\b(?:Mr|Mrs|Ms) ([A-Za-z]+(?:-[A-Za-z]+)?) ([A-Za-z][A-Za-z'-]*)/);
    assert.ok(name, `${item.id} has no identifiable patient surname in the stem`);
    const runText = item.run.sections
      .flatMap((section) => section.turns)
      .flatMap((turn) => turn.lines)
      .map((line) => line.text)
      .join(" ");
    assert.ok(runText.includes(name[1]), `${item.id} changes or omits the patient's first name in the Full Run`);
    assert.ok(runText.includes(name[2]), `${item.id} changes or omits the patient's surname in the Full Run`);
  });
});

test("Case 4 treats clinical tension pneumothorax before imaging", () => {
  const case4 = cases.find((item) => item.id === "case-004");
  assert.ok(case4, "Case 4 is missing");

  const turns = case4.run.sections.flatMap((section) => section.turns);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const decompressionIndex = text.indexOf("I will decompress the right chest immediately");
  const imagingIndex = text.indexOf("Arrange a portable chest X-ray");

  assert.ok(decompressionIndex >= 0, "Case 4 lacks immediate decompression");
  assert.ok(imagingIndex > decompressionIndex, "Case 4 places imaging before decompression");
  assert.match(text, /I will not wait for a chest X-ray, CT scan or formal ultrasound/);
  assert.match(text, /The decompression catheter is temporary/);
  assert.match(text, /definitive right intercostal catheter/);
});

test("Case 5 recognises quietening breath sounds as deterioration", () => {
  const case5 = cases.find((item) => item.id === "case-005");
  assert.ok(case5, "Case 5 is missing");

  const text = case5.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");

  assert.match(text, /life-threatening acute asthma/);
  assert.match(text, /quieter wheeze and slower respiratory rate are not improvement/);
  assert.match(text, /maximum of 10 millimoles/);
  assert.match(text, /raised carbon dioxide and acidaemia confirm ventilatory failure/);
  assert.match(text, /Adrenaline is not routine asthma treatment but must be given promptly if anaphylaxis emerges/);
});

test("Case 6 gives intramuscular adrenaline before asthma treatment", () => {
  const case6 = cases.find((item) => item.id === "case-006");
  assert.ok(case6, "Case 6 is missing");

  const text = case6.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const adrenalineIndex = text.indexOf("Give adrenaline 0.5 milligrams");
  const salbutamolIndex = text.indexOf("give salbutamol for persistent wheeze");

  assert.ok(adrenalineIndex >= 0, "Case 6 lacks immediate adrenaline");
  assert.ok(salbutamolIndex > adrenalineIndex, "Case 6 gives salbutamol before adrenaline");
  assert.match(text, /It can occur without a rash/);
  assert.match(text, /do not let her stand or walk/i);
  assert.match(text, /second intramuscular adrenaline dose of 0.5 milligrams/);
  assert.match(text, /at least four hours after the last adrenaline dose/);
});

test("Case 7 updates from infection to acute heart failure", () => {
  const case7 = cases.find((item) => item.id === "case-007");
  assert.ok(case7, "Case 7 is missing");

  const text = case7.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");

  assert.match(text, /Call Triple Zero for an ambulance now/);
  assert.match(text, /difficulty lying flat, rapid weight gain, swollen legs and crackles in both lungs/);
  assert.match(text, /acute worsening of heart failure, also called pulmonary oedema/);
  assert.match(text, /Antibiotics would not remove the fluid or correct the low oxygen/);
  assert.match(text, /This must not delay the ambulance/);
});

test("Case 8 gives necessary oxygen safely and treats hypercapnic respiratory failure", () => {
  const case8 = cases.find((item) => item.id === "case-008");
  assert.ok(case8, "Case 8 is missing");

  const text = case8.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const oxygenIndex = text.indexOf("Do not remove oxygen");
  const gasIndex = text.indexOf("acute-on-chronic hypercapnic respiratory failure");
  const nivIndex = text.indexOf("commence bilevel non-invasive ventilation now");

  assert.ok(oxygenIndex >= 0, "Case 8 does not explicitly prevent oxygen withholding");
  assert.match(text, /oxygen saturation target of 88% to 92%/);
  assert.match(text, /The very high PaO2 reflects excessive administered oxygen, not recovery/);
  assert.ok(gasIndex > oxygenIndex, "Case 8 does not interpret the blood gas after correcting oxygen");
  assert.match(text, /air-driven nebuliser, with controlled oxygen supplied separately/);
  assert.ok(nivIndex > gasIndex, "Case 8 escalates to NIV before identifying respiratory acidosis");
  assert.match(text, /pneumonia, pneumothorax, pulmonary embolism, heart failure and acute coronary syndrome/);
  assert.match(text, /Repeat arterial blood gas shows pH 7.29/);
  assert.match(text, /never refuse oxygen in an emergency/i);
});

test("Case 9 activates the stroke pathway without losing the time anchor", () => {
  const case9 = cases.find((item) => item.id === "case-009");
  assert.ok(case9, "Case 9 is missing");

  const text = case9.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const timeIndex = text.indexOf("last completely normal");
  const glucoseIndex = text.indexOf("capillary blood glucose now");
  const ambulanceIndex = text.indexOf("Call Triple Zero for an emergency ambulance now");

  assert.ok(timeIndex >= 0, "Case 9 misses the exact last-known-well question");
  assert.ok(glucoseIndex > timeIndex, "Case 9 does not include immediate glucose in the stroke screen");
  assert.ok(ambulanceIndex > glucoseIndex, "Case 9 activates transfer before the rapid stroke assessment");
  assert.match(text, /Do not wait for further clinic tests/);
  assert.match(text, /nil by mouth until swallowing is assessed/);
  assert.match(text, /Do not give routine oxygen because her saturation is adequate/);
  assert.match(text, /not give aspirin before brain imaging excludes haemorrhage/);
  assert.match(text, /will not rapidly lower her blood pressure in the clinic/);
  assert.match(text, /Even if symptoms improve or disappear, you still need emergency assessment/);
  assert.match(text, /last known well at 10:30 last night and symptoms were discovered at 7:20 this morning/);
  assert.match(text, /we do not know the exact onset. That does not mean there is no treatment/);
  assert.match(text, /last known well at 22:30.*discovered at 07:20/);
});

test("Case 10 treats hypoglycaemia before deciding whether the deficit is a stroke", () => {
  const case10 = cases.find((item) => item.id === "case-010");
  assert.ok(case10, "Case 10 is missing");

  const text = case10.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const glucoseCheckIndex = text.indexOf("check capillary blood glucose immediately");
  const glucoseResultIndex = text.indexOf("Capillary blood glucose is 2.1 mmol/L");
  const treatmentIndex = text.indexOf("Give glucose 10%, 15 grams");
  const onsetIndex = text.indexOf("what exact time was Min-jae last completely normal");
  const repeatExamIndex = text.indexOf("neurological examination normalised completely");

  assert.ok(glucoseCheckIndex >= 0, "Case 10 omits glucose from the first assessment");
  assert.ok(glucoseResultIndex > glucoseCheckIndex, "Case 10 treats before confirming the available glucose result");
  assert.ok(treatmentIndex > glucoseResultIndex, "Case 10 delays treatment sequencing");
  assert.ok(onsetIndex > treatmentIndex, "Case 10 does not obtain last-known-well concurrently with correction");
  assert.match(text, /Do not give food, drink or glucose by mouth/);
  assert.match(text, /repeat glucose 10%, 10 grams, which is 100 millilitres/);
  assert.match(text, /reassess every 5 minutes until it is at least 4 mmol\/L/);
  assert.match(text, /glucagon 1 milligram intramuscularly/);
  assert.ok(repeatExamIndex > treatmentIndex, "Case 10 does not repeat the neurological examination after glucose");
  assert.match(text, /does not automatically exclude a simultaneous stroke/);
  assert.match(text, /blood glucose has fallen to 3.1 mmol\/L/);
  assert.match(text, /recheck his glucose and symptoms in 10 to 15 minutes/);
  assert.match(text, /discuss octreotide/);
  assert.match(text, /hold gliclazide/);
  assert.match(text, /monitored hospital care/);
});

test("Case 11 confirms haemorrhage before reversal and protects a deteriorating airway", () => {
  const case11 = cases.find((item) => item.id === "case-011");
  assert.ok(case11, "Case 11 is missing");

  const text = case11.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const glucoseIndex = text.indexOf("check capillary blood glucose now");
  const imagingIndex = text.indexOf("Arrange non-contrast CT brain now");
  const haemorrhageIndex = text.indexOf("scan confirms a left basal-ganglia intracerebral haemorrhage");
  const reversalIndex = text.indexOf("give four-factor prothrombin complex concentrate");
  const airwayIndex = text.indexOf("She can no longer protect her airway");
  const repeatImagingIndex = text.indexOf("obtain repeat brain imaging");

  assert.ok(glucoseIndex >= 0 && imagingIndex > glucoseIndex, "Case 11 omits glucose before the imaging pathway");
  assert.ok(haemorrhageIndex > imagingIndex, "Case 11 labels haemorrhage before imaging");
  assert.ok(reversalIndex > haemorrhageIndex, "Case 11 reverses warfarin before confirming haemorrhage");
  assert.match(text, /Give no aspirin, anticoagulant or thrombolysis until imaging identifies the stroke type/);
  assert.match(text, /Beriplex, 50 international units per kilogram/);
  assert.match(text, /intravenous vitamin K 5 to 10 milligrams/);
  assert.match(text, /repeat the INR in 20 minutes/);
  assert.match(text, /systolic pressure of 130 to 140 mmHg within one hour/);
  assert.ok(airwayIndex >= 0 && repeatImagingIndex > airwayIndex, "Case 11 does not reimage after neurological deterioration");
  assert.match(text, /Routine removal of a deep basal-ganglia bleed is not automatically beneficial/);
});

test("Case 12 recognises organ dysfunction before hypotension and pursues urinary source control", () => {
  const case12 = cases.find((item) => item.id === "case-012");
  assert.ok(case12, "Case 12 is missing");

  const text = case12.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const recognitionIndex = text.indexOf("normal-range blood pressure does not exclude organ dysfunction");
  const cultureIndex = text.indexOf("Take two blood-culture sets");
  const antibioticIndex = text.indexOf("give empiric intravenous antibiotics");
  const firstFluidIndex = text.indexOf("Give 500 millilitres of Hartmann's solution");
  const repeatFluidIndex = text.indexOf("give a further 250 to 500 millilitres with reassessment");
  const urologyIndex = text.indexOf("Call urology now");

  assert.ok(recognitionIndex >= 0, "Case 12 waits for hypotension before recognising organ dysfunction");
  assert.ok(cultureIndex > recognitionIndex && antibioticIndex > cultureIndex, "Case 12 sequences cultures and antibiotics incorrectly");
  assert.match(text, /Take cultures first only if this causes no delay/);
  assert.match(text, /within 60 minutes/);
  assert.ok(firstFluidIndex > antibioticIndex && repeatFluidIndex > firstFluidIndex, "Case 12 does not reassess before further fluid");
  assert.match(text, /lactate is 4.3 mmol\/L/);
  assert.match(text, /creatinine 190 micromol\/L from a baseline of 110/);
  assert.match(text, /moderate right hydronephrosis/);
  assert.ok(urologyIndex > repeatFluidIndex, "Case 12 misses source-control escalation");
  assert.match(text, /request intensive-care review now because organ dysfunction persists/);
  assert.match(text, /must not delay drainage/);
  assert.match(text, /Antibiotics alone may not control infection behind an obstruction/);
});

test("Case 13 starts noradrenaline while dynamically indicated fluid continues", () => {
  const case13 = cases.find((item) => item.id === "case-013");
  assert.ok(case13, "Case 13 is missing");

  const text = case13.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const firstFluidIndex = text.indexOf("Give 500 millilitres of Hartmann's solution");
  const noradrenalineIndex = text.indexOf("Begin peripheral noradrenaline now");
  const secondFluidIndex = text.indexOf("give a second 500-millilitre Hartmann's bolus");
  const noResponseIndex = text.indexOf("After a total of one litre of Hartmann's");

  assert.ok(firstFluidIndex >= 0 && noradrenalineIndex > firstFluidIndex, "Case 13 omits initial measured fluid reassessment");
  assert.ok(secondFluidIndex > noradrenalineIndex && noResponseIndex > secondFluidIndex, "Case 13 does not combine early vasopressor with a dynamically indicated second bolus");
  assert.match(text, /Passive leg raise no longer changes pulse pressure/);
  assert.match(text, /increasing bilateral B-lines/);
  assert.match(text, /Stop further rapid boluses because fluid responsiveness has been lost/);
  assert.match(text, /mean arterial pressure of at least 65 mmHg/);
  assert.match(text, /5 micrograms per minute/);
  assert.match(text, /Intensive care will manage vasopressor and organ support/);
  assert.match(text, /Start empiric oseltamivir while PCR is pending, adjusted for renal function/);
  assert.match(case13.clinicalSources.map((source) => source.url).join("\n"), /cdc[.]gov\/flu\/hcp\/antivirals/);
});

test("Case 14 treats suspected neutropenic sepsis despite a modest clinic temperature", () => {
  const case14 = cases.find((item) => item.id === "case-014");
  assert.ok(case14, "Case 14 is missing");

  const text = case14.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const recognitionIndex = text.indexOf("make neutropenic sepsis possible");
  const transferIndex = text.indexOf("Call Triple Zero for a monitored ambulance");
  const neutrophilResultIndex = text.indexOf("neutrophils 0.1");
  const antibioticIndex = text.indexOf("piperacillin-tazobactam 4.5 grams intravenously");
  const piccDisclosureIndex = text.indexOf("I have a PICC in my right arm");
  const piccExamIndex = text.indexOf("I would also inspect the PICC site");
  const resultRequestIndex = text.indexOf("Check whether today's chemotherapy blood result is available");

  assert.ok(recognitionIndex >= 0 && transferIndex > recognitionIndex, "Case 14 does not recognise and transfer suspected neutropenic sepsis");
  assert.ok(neutrophilResultIndex > transferIndex, "Case 14 waits for the neutrophil result before arranging transfer");
  assert.ok(antibioticIndex > neutrophilResultIndex, "Case 14 omits protocol-based antipseudomonal treatment");
  assert.match(text, /Paracetamol can lower the measured temperature/);
  assert.match(text, /I will not wait for a clinic blood count/);
  assert.match(text, /within 30 minutes of presentation or clinical recognition, whichever was earlier/);
  assert.ok(piccDisclosureIndex >= 0 && piccExamIndex > piccDisclosureIndex, "Case 14 examines a PICC before learning it exists");
  assert.ok(resultRequestIndex > transferIndex && neutrophilResultIndex > resultRequestIndex, "Case 14 supplies results before they are requested");
  assert.match(text, /Blood cultures should come from a peripheral vein and each PICC lumen, without delaying antibiotics/);
  assert.match(text, /Confirm directly with the ambulance and receiving emergency clinician that the first dose will start within that 30-minute window/);
  assert.match(text, /If they cannot meet it, arrange immediate pre-transfer piperacillin-tazobactam/);
  assert.match(text, /Avoid rectal examination, rectal medicines and intramuscular injections/);
  assert.match(text, /not home observation or a private car/);
  assert.match(case14.clinicalSources.map((source) => source.url).join("\n"), /eviq[.]org[.]au\/p\/123/);
});

test("Case 15 recognises concealed pelvic haemorrhage before hypotension and does not wait for CT", () => {
  const case15 = cases.find((item) => item.id === "case-015");
  assert.ok(case15, "Case 15 is missing");

  const text = case15.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const recognitionIndex = text.indexOf("normal blood pressure does not exclude significant blood loss");
  const binderIndex = text.indexOf("pelvic binder centred over the greater trochanters");
  const bloodIndex = text.indexOf("Give warmed red cells, plasma and platelets");
  const deteriorationIndex = text.indexOf("blood pressure is 82/48");
  const noCtIndex = text.indexOf("Do not send him to CT while unstable");
  const intimateConsentIndex = text.indexOf("may I briefly inspect your groin and perineal area");
  const intimateFindingIndex = text.indexOf("no perineal bruising or blood at the urethral opening");

  assert.ok(recognitionIndex >= 0, "Case 15 waits for hypotension before recognising blood loss");
  assert.ok(binderIndex > recognitionIndex && bloodIndex > binderIndex, "Case 15 does not sequence pelvic stabilisation and blood support safely");
  assert.ok(deteriorationIndex > bloodIndex && noCtIndex > deteriorationIndex, "Case 15 does not respond to decompensation with direct haemorrhage control");
  assert.ok(intimateConsentIndex >= 0 && intimateFindingIndex > intimateConsentIndex, "Case 15 performs an intimate examination without spoken consent");
  assert.match(text, /a chaperone/);
  assert.match(text, /negative eFAST does not assess retroperitoneal bleeding/);
  assert.match(text, /Haemoglobin is 142 g\/L/);
  assert.match(text, /initial haemoglobin may remain normal during acute blood loss/);
  assert.match(text, /Avoid large crystalloid volumes/);
  assert.match(text, /tranexamic acid according to the local trauma protocol/);
  assert.match(text, /preperitoneal pelvic packing and mechanical stabilisation.*angiographic embolisation/);
  assert.match(text, /Reserve laparotomy for a separate intraperitoneal indication/);
  assert.match(case15.clinicalSources.map((source) => source.url).join("\n"), /blood[.]gov[.]au\/patient-blood-management-guideline-adults-critical-bleeding/);
});

test("Case 16 identifies cold congested pump failure and avoids automatic fluid loading", () => {
  const case16 = cases.find((item) => item.id === "case-016");
  assert.ok(case16, "Case 16 is missing");

  const text = case16.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const noFluidIndex = text.indexOf("I will not give a large fluid bolus");
  const diagnosisIndex = text.indexOf("cold, congested cardiogenic shock");
  const noradrenalineIndex = text.indexOf("Commence noradrenaline");
  const inotropeIndex = text.indexOf("add an inotrope");

  assert.ok(noFluidIndex >= 0 && diagnosisIndex > noFluidIndex, "Case 16 does not identify congestion before avoiding fluid");
  assert.ok(noradrenalineIndex > diagnosisIndex && inotropeIndex > noradrenalineIndex, "Case 16 does not support pressure before protocol-led inotropy");
  assert.match(text, /recent illness does not prove a viral cause/);
  assert.match(text, /Avoid further fluid, nitrates, routine diuretics and beta-blockade while she is profoundly hypotensive/);
  assert.match(text, /temporary mechanical circulatory support/);
  assert.match(text, /early endomyocardial biopsy/);
  assert.match(text, /urine output is 5 millilitres over the preceding hour/);
  assert.match(case16.clinicalSources.map((source) => source.url).join("\n"), /escardio[.]org\/guidelines/);
});

test("Case 17 distinguishes neurogenic from spinal shock while continuing the trauma search", () => {
  const case17 = cases.find((item) => item.id === "case-017");
  assert.ok(case17, "Case 17 is missing");

  const text = case17.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const exclusionIndex = text.indexOf("does not exclude bleeding or another traumatic cause");
  const measuredFluidIndex = text.indexOf("measured 250-millilitre bolus");
  const distinctionIndex = text.indexOf("They are different problems and can occur together");
  const noradrenalineIndex = text.indexOf("Start noradrenaline");
  const airwayIndex = text.indexOf("respiratory function is deteriorating");
  const intimateConsentIndex = text.indexOf("It is an intimate examination and a chaperone will be present");
  const sacralExamIndex = text.indexOf("With a chaperone, I assess sacral sensation");

  assert.ok(exclusionIndex >= 0 && measuredFluidIndex > exclusionIndex, "Case 17 assumes neurogenic shock before evaluating trauma causes");
  assert.ok(distinctionIndex > measuredFluidIndex, "Case 17 does not distinguish spinal shock from neurogenic shock");
  assert.ok(noradrenalineIndex > distinctionIndex && airwayIndex > noradrenalineIndex, "Case 17 misses haemodynamic or respiratory escalation");
  assert.ok(intimateConsentIndex >= 0 && sacralExamIndex > intimateConsentIndex, "Case 17 performs the sacral examination without spoken consent");
  assert.match(text, /normal first haemoglobin does not exclude recent blood loss/);
  assert.match(text, /lower MAP boundary with spinal and intensive care, usually 75 to 80/);
  assert.match(text, /avoid augmentation beyond 90 to 95/);
  assert.match(text, /Individualise the target and its three-to-seven-day duration because the evidence is weak/);
  assert.match(text, /controlled manner while maintaining cervical alignment/);
  assert.match(text, /urgent reduction, decompression and stabilisation, ideally within 24 hours when medically feasible/);
  assert.match(text, /without MRI delay/);
  assert.match(case17.clinicalSources.map((source) => source.url).join("\n"), /21925682231202348/);
});

test("Case 18 treats active ulcer bleeding from physiology and progresses through endoscopic source control", () => {
  const case18 = cases.find((item) => item.id === "case-018");
  assert.ok(case18, "Case 18 is missing");

  const text = case18.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const nearNormalIndex = text.indexOf("first haemoglobin may remain near normal");
  const deteriorationIndex = text.indexOf("blood pressure 82/48");
  const mhpIndex = text.indexOf("Activate the local major-haemorrhage protocol");
  const endoscopyIndex = text.indexOf("Endoscopy follows haemodynamic resuscitation");
  const combinationIndex = text.indexOf("combined endoscopic haemostasis");
  const rebleedIndex = text.indexOf("If she rebleeds, repeat endoscopy");
  const embolisationIndex = text.indexOf("transcatheter arterial embolisation");

  assert.ok(nearNormalIndex >= 0 && deteriorationIndex > nearNormalIndex, "Case 18 does not expose the initially reassuring haemoglobin trap");
  assert.ok(mhpIndex > deteriorationIndex, "Case 18 does not escalate critical bleeding after deterioration");
  assert.ok(endoscopyIndex > mhpIndex && combinationIndex > endoscopyIndex, "Case 18 does not resuscitate before combined endoscopic source control");
  assert.ok(rebleedIndex > combinationIndex && embolisationIndex > rebleedIndex, "Case 18 does not escalate recurrent bleeding safely");
  assert.match(text, /active bleeding is treated from physiology; I will not wait for haemoglobin to fall/);
  assert.match(text, /Do not give tranexamic acid routinely/);
  assert.match(text, /within 24 hours/);
  assert.match(text, /Adrenaline injection must not be used alone/);
  assert.match(text, /Helicobacter pylori/);
  assert.match(case18.clinicalSources.map((source) => source.url).join("\n"), /2863-8314/);
});

test("Case 19 begins the variceal bundle before proof and protects a newly unsafe airway", () => {
  const case19 = cases.find((item) => item.id === "case-019");
  assert.ok(case19, "Case 19 is missing");

  const text = case19.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const vasoactiveIndex = text.indexOf("Start terlipressin");
  const ceftriaxoneIndex = text.indexOf("ceftriaxone now");
  const deteriorationIndex = text.indexOf("no longer follows instructions consistently");
  const airwayIndex = text.indexOf("airway is now unsafe");
  const endoscopyResultIndex = text.indexOf("large oesophageal varices with active bleeding");
  const bandIndex = text.indexOf("band ligation controls the bleeding");

  assert.ok(vasoactiveIndex >= 0 && ceftriaxoneIndex > vasoactiveIndex, "Case 19 omits pre-endoscopy vasoactive or antibiotic treatment");
  assert.ok(deteriorationIndex > ceftriaxoneIndex && airwayIndex > deteriorationIndex, "Case 19 does not select airway protection after deterioration");
  assert.ok(endoscopyResultIndex > airwayIndex && bandIndex > endoscopyResultIndex, "Case 19 does not control confirmed oesophageal variceal bleeding with banding");
  assert.match(text, /within 12 hours of presentation after haemodynamic resuscitation/);
  assert.match(text, /Do not give fresh frozen plasma solely to correct the cirrhotic INR/);
  assert.match(text, /aim for haemoglobin 70 to 90/);
  assert.match(text, /pre-emptive TIPS within 72 hours, preferably within 24 hours/);
  assert.match(text, /self-expanding metal stent.*balloon tamponade/);
  assert.match(case19.clinicalSources.map((source) => source.url).join("\n"), /1939-4887/);
});

test("Case 20 localises ongoing major haematochezia with CTA before colonoscopy", () => {
  const case20 = cases.find((item) => item.id === "case-020");
  assert.ok(case20, "Case 20 is missing");

  const text = case20.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const mhpIndex = text.indexOf("Activate the local major haemorrhage protocol");
  const apixabanIndex = text.indexOf("Withhold apixaban");
  const upperSourceIndex = text.indexOf("Brisk upper gastrointestinal bleeding can also present as red bowel motions");
  const ctaIndex = text.indexOf("requires CT angiography before colonoscopy");
  const embolisationIndex = text.indexOf("superselective embolisation");
  const colonoscopyIndex = text.indexOf("After stabilisation, gastroenterology should perform a properly bowel-prepared colonoscopy");

  assert.ok(mhpIndex >= 0 && apixabanIndex > mhpIndex, "Case 20 does not begin physiology-led critical bleeding management before anticoagulant reversal");
  assert.ok(upperSourceIndex > apixabanIndex && ctaIndex > upperSourceIndex, "Case 20 assumes a lower source or sends the patient directly to colonoscopy");
  assert.ok(embolisationIndex > ctaIndex && colonoscopyIndex > embolisationIndex, "Case 20 does not sequence embolisation before post-stabilisation colonoscopy");
  assert.match(text, /specific factor Xa reversal agent or four-factor prothrombin complex concentrate/);
  assert.match(text, /Do not use tranexamic acid routinely/);
  assert.match(text, /operate only if endoscopic and radiological control fails/);
  assert.match(case20.clinicalSources.map((source) => source.url).join("\n"), /1496-8969/);
});

test("every case keeps the station stem clinically neutral", () => {
  cases.forEach((item) => {
    const stemAndTasks = JSON.stringify(item.stem);
    assert.doesNotMatch(
      stemAndTasks,
      /\burgent\b|\bimmediate\b|\bsame-day\b|\bunstable\b|\bmassive\b|\bprofuse\b|\bshock\b|\bsepsis\b|\bneutropeni(?:a|c)\b|\bhaemorrhag(?:e|ic)\b|\bcardiogenic\b|\bneurogenic\b|\bmyocarditis\b|\bvariceal\b|\bulcer\b|\bapixaban\b|\banticoagulant\b|\bhaematemesis\b|\bmelaena\b|\bhaematochezia\b|coffee[- ]ground|\bportal hypertension\b|\bcirrhosis\b|\bupper gastrointestinal\b|\blower gastrointestinal\b|active bleeding|major bleeding|resuscitation|ambulance|vasopressor|noradrenaline|lactate|major haemorrhage|pelvic binder|blood components?|transfus(?:e|ion)|endoscop|angiograph|embolisation|gastroenterology|interventional radiology|factor Xa reversal|prothrombin complex concentrate|mechanical circulatory support|spinal motion restriction|intensive-care clinician|receiving emergency clinician|trauma surgeon|oxygen saturation (?:was|is) [0-9]|blood pressure (?:was|is) [0-9]|haemoglobin (?:was|is) [0-9]|at triage|while waiting for assessment|become drowsy|obtain (?:an? )?ECG|give oxygen|start oxygen|high-concentration oxygen|oxygen plan|emergency medicines|no imaging has been performed|not required to physically perform|sudden severe chest pain extending into (?:his|her|the) upper back/i,
      `${item.id} stem or tasks disclose the diagnosis or management priority`
    );
  });
});

test("patient first names are varied across the current case set", () => {
  const firstNames = cases.map((item) => {
    const stemText = item.stem.lines.map((line) => line.text).join(" ");
    const match = stemText.match(/\b(?:Mr|Mrs|Ms) ([A-Za-z]+(?:-[A-Za-z]+)?)/);
    assert.ok(match, `${item.id} has no identifiable patient name in the stem`);
    return match[1].toLowerCase();
  });
  assert.equal(new Set(firstNames).size, firstNames.length, "a patient first name is repeated");
});

test("all four views resolve and legacy case links have safe redirects", () => {
  assert.deepEqual(viewModel.validViews, [
    "exam-stem",
    "exam-full-run",
    "reasoning-stem",
    "reasoning-full-run"
  ]);
  viewModel.validViews.forEach((view) => assert.equal(viewModel.resolveView("#" + view), view));
  assert.equal(viewModel.resolveView("#station-stem"), "exam-stem");
  assert.equal(viewModel.resolveView("#speak-aloud"), "exam-full-run");
  assert.equal(viewModel.resolveView("#hints"), "reasoning-stem");
});

test("the canonical content contract passes", () => {
  assert.deepEqual(viewModel.validateCase(caseData), []);
});

test("Reasoning text is byte-equivalent to Exam text after markers are removed", () => {
  ["stem", "run"].forEach((surface) => {
    viewModel.itemsForSurface(caseData, surface).forEach((item) => {
      const reconstructed = viewModel.segmentsForItem(caseData, surface, item.id, item.text)
        .filter((segment) => segment.type === "text")
        .map((segment) => segment.text)
        .join("");
      assert.equal(reconstructed, item.text, `${surface}/${item.id} changed when annotated`);
    });
  });
});

test("the approved Stem and Full Run remain byte-for-byte unchanged", () => {
  const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.equal(digest(caseData.stem), "6bfb9fcda2a004205ddf0076b19802c2592b143129f8381ec30cadaf25058875");
  assert.equal(digest(caseData.run), "cd353fbe9e257718c54ff615b8f0d5bf5128d30bb0e89684589844696e2ac5b9");
});

test("every Hint resolves to an exact phrase and a current source link", () => {
  const sourceIds = new Set(caseData.sources.map((source) => source.id));
  assert.ok(caseData.hints.length >= 35, "Case 1 needs a start-to-finish reasoning journey");

  caseData.hints.forEach((hint) => {
    const item = viewModel.itemMap(caseData, hint.target.surface)[hint.target.itemId];
    assert.ok(item, `missing target for ${hint.id}`);
    assert.ok(viewModel.occurrenceIndex(item.text, hint.target.quote, hint.target.occurrence) >= 0, `missing quote for ${hint.id}`);
    ["where", "popUp", "pause", "recap", "reorient"].forEach((field) => {
      assert.ok(hint[field] && hint[field].trim(), `missing ${field} in ${hint.id}`);
    });
    assert.ok(Array.isArray(hint.say) && hint.say.length >= 1, `missing natural speech in ${hint.id}`);
    assert.equal(hint.layers, undefined, `legacy academic layers remain active in ${hint.id}`);
    assert.equal(hint.lead, undefined, `legacy information lead remains active in ${hint.id}`);
    assert.equal(hint.journeyPoint, undefined, `old journey template remains active in ${hint.id}`);
    assert.equal(hint.pal, undefined, `old thinking-partner paragraph remains active in ${hint.id}`);
    assert.equal(hint.hold, undefined, `old hold card remains active in ${hint.id}`);
    assert.equal(hint.next, undefined, `old next-move card remains active in ${hint.id}`);
    assert.ok(hint.citationIds.length >= 1, `uncited Hint ${hint.id}`);
    hint.citationIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), `unknown source ${sourceId}`));
  });
});

test("Hints cover stem, tasks, dialogue, findings, investigations and handover", () => {
  const targets = new Set(caseData.hints.map((hint) => hint.target.itemId));
  [
    "stem-patient",
    "stem-role",
    "stem-start",
    "task-history",
    "task-reasoning",
    "task-management",
    "run-opening-story",
    "run-time-prompt",
    "run-exam-request",
    "run-exam-findings",
    "run-ecg-plan",
    "run-ecg-result",
    "run-aspirin",
    "run-oxygen",
    "run-handover",
    "run-end"
  ].forEach((id) => assert.ok(targets.has(id), `missing mastery target ${id}`));
});

test("the task compass anchors reading, time recovery and task switching", () => {
  assert.equal(caseData.reasoningCompass.stem.steps.length, 3);
  assert.equal(caseData.reasoningCompass.run.steps.length, 3);
  assert.match(caseData.reasoningCompass.stem.anchor, /History 0 to 4/);
  assert.match(caseData.reasoningCompass.run.anchor, /If danger interrupts/);

  const timeHint = caseData.hints.find((hint) => hint.id === "hint-time-prompt");
  assert.match(timeHint.popUp, /still have history questions/i);
  assert.match(timeHint.say.join(" "), /start the explanation now/i);
  assert.match(timeHint.pause, /change tasks/i);
  assert.match(timeHint.reorient, /State the diagnosis/);
});

test("mechanism Hints explain without turning patterns into rigid rules", () => {
  const radiation = caseData.hints.find((hint) => hint.id === "hint-radiation");
  const autonomic = caseData.hints.find((hint) => hint.id === "hint-autonomic");
  assert.match(radiation.say.join(" "), /overlapping areas of the spinal cord/i);
  assert.match(radiation.say.join(" "), /pulmonary embolus often causes pleural irritation/i);
  assert.match(radiation.say.join(" "), /Aortic dissection causes pain from the aortic wall/);
  assert.match(autonomic.say.join(" "), /Sympathetic activation/);
  assert.match(autonomic.say.join(" "), /cannot identify which wall/);
  assert.match(autonomic.say.join(" "), /not explained simply/);
});

test("the learner-facing Hint model is conversational rather than academic", () => {
  const hintsText = caseData.hints.map((hint) => [hint.popUp].concat(hint.say, hint.pause, hint.recap, hint.reorient).join(" ")).join("\n");
  [
    "Pathophysiology",
    "Examiner logic",
    "Clinical weight",
    "Mechanism:",
    "raises the starting chance",
    "earns the heart and circulation first place",
    "adds or removes weight",
    "action follows the whole pattern",
    "you are choosing where to look first",
    "heart near the front",
    "stay open",
    "speed up the safety check",
    "not your mouth",
    "quick route to danger",
    "clues, not passwords",
    "owns the story",
    "history lane",
    "heart lane",
    "safety threshold",
    "task map",
    "old case closed"
  ].forEach((term) => {
    assert.doesNotMatch(hintsText, new RegExp(term, "i"));
  });

  const age = caseData.hints.find((hint) => hint.id === "hint-age");
  assert.equal(age.say[0], "At 60, I would consider a heart-related cause early.");
  assert.equal(age.pause, "Consider the heart early, but do not decide yet.");

  const presentation = caseData.hints.find((hint) => hint.id === "hint-urgent-booking");
  assert.equal(presentation.say[0], "No. The booking itself does not tell me the severity or the cause.");
  assert.equal(presentation.pause, "Do not add urgency or reassurance that the stem has not provided.");
});

test("the Stem journey does not leak the case diagnosis", () => {
  const stemHints = caseData.hints.filter((hint) => hint.target.surface === "stem");
  const text = stemHints.map((hint) => [hint.popUp].concat(hint.say, hint.pause, hint.recap, hint.reorient).join(" ")).join("\n");
  assert.doesNotMatch(text, /acute coronary syndrome|\bACS\b|heart attack/i);
});

test("the model run contains all station voices and observable event types", () => {
  const turns = caseData.run.sections.flatMap((section) => section.turns);
  const speakers = new Set(turns.map((turn) => turn.speaker));
  const kinds = new Set(turns.map((turn) => turn.kind));
  ["Doctor", "Patient", "Examiner", "Action"].forEach((speaker) => assert.ok(speakers.has(speaker)));
  ["spoken", "action", "finding", "investigation", "handover"].forEach((kind) => assert.ok(kinds.has(kind)));
  assert.equal(turns[0].speaker, "Examiner");
  assert.equal(turns.at(-1).speaker, "Examiner");
});

test("current national ACS and official AMC sources are present", () => {
  const urls = caseData.sources.map((source) => source.url).join("\n");
  assert.match(urls, /ACS-Guideline[.]pdf/);
  assert.match(urls, /Clinical-Exam-Spec-V8-3[.]pdf/);
  assert.match(urls, /anzcor[.]org/);
  assert.match(urls, /pubmed[.]ncbi[.]nlm[.]nih[.]gov\/25880519/);
  assert.match(urls, /pubmed[.]ncbi[.]nlm[.]nih[.]gov\/19962467/);
  assert.match(JSON.stringify(caseData), /oxygen saturation is 96%/);
  assert.match(JSON.stringify(caseData), /aspirin 300 milligrams/);
  assert.match(JSON.stringify(caseData), /within 10 minutes/);
});

test("one reusable popover controls every Hint", () => {
  const appSource = fs.readFileSync(path.join(root, "assets/js/app.js"), "utf8");
  assert.match(appSource, /var popover = null/);
  assert.match(appSource, /if \(activeMarker && activeMarker !== marker\)/);
  assert.match(appSource, /event[.]key === "Escape"/);
  assert.match(appSource, /closeHint\(true\)/);
  assert.match(appSource, /aria-haspopup/);
  assert.match(appSource, /element\("details", "hint-sources"\)/);
  assert.doesNotMatch(appSource, /hint[.]layers/);
  assert.doesNotMatch(appSource, /Thinking together|Hold onto this|Next move|A thought may pop up/);
  assert.doesNotMatch(appSource, /journey-card/);
});
