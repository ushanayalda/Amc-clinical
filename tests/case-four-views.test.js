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
  "case-001": { stem: "6bfb9fcda2a004205ddf0076b19802c2592b143129f8381ec30cadaf25058875", run: "d0be5c8e7843a7e4de545a53b008e7c270773ad5be61b9bb560f1b39cc1c6a66" },
  "case-002": { stem: "18657f3620eca6ce1bb2a06fe0811dc1b340de7ee73e4a6f79fa6e88df53751d", run: "9b976818df6b4f1a28202aa73a52a38f4914481a6370a907ccabcbd36d58d6a9" },
  "case-003": { stem: "628cd9b24075030fa0b146fe890c5b9514acacc0bbbedfaa5c55c4e37f7db634", run: "95f1c861b3fa40e37be2de87d17616ce21321d7c4813824cf048e76aa1296f67" },
  "case-004": { stem: "a615fe14b9d4d6233646069c60ca8abb99eebcdc7af35e29026882c85aecc8da", run: "253476b2111e2b3df0d00fab56da453ac8cc4d7053e356af300fa778e9364664" },
  "case-005": { stem: "1a7478b1c4e9bc31ae63706cb84c1a3589ee185a508afa58af1a6f5509f7adcd", run: "c8de9afc9c97f18d1f2ba1fbe423cd1e47c0f547a1169b998ba388180fad6503" },
  "case-006": { stem: "40a0bd254d28cbc5afef492b6f8b1f602ee226585de11e2bafb8b6a5157db4aa", run: "477055cb3109555634a0c653e9663d4537d81d3fda29ec268e8fa91be4b9479c" },
  "case-007": { stem: "da28c9690459f6739b1cbaedf6414a45672a92a5dad8bad742ee3ac98759c27d", run: "ca6fff5460d18151ab5fb7f382b97c811df7c13a75e9381f4f9efb1927eec79a" },
  "case-008": { stem: "b47b764c07531f233d355d1cd7d0fca7161053c312999dbef5d564baaeaa16b9", run: "1441bfddc44ac308427f982e72054735a310976e0e14f7c10a3cf740bc1fd48c" },
  "case-009": { stem: "57f372e77a6e3326be26cb5b841790e1a9f5aa0813b2fc975100ab002da8a986", run: "fb1327e95e4f67d0ec82373f8ce398f40bbbc861d4cadb377b85f12a7864dc70" },
  "case-010": { stem: "82e5b097663ed13df767d05b6086f90aca787fe6bf686b32e0460395d3254e50", run: "52b71ebf513d4a4e3dc172a5ea22a200c652ee0532b387594df5a101b6104b6c" },
  "case-011": { stem: "0c290f386e3ee5c4e072090157f1ff15d50751204444cdf8dabe47f2b29751b9", run: "15ea305693616c5265c494a88e1c6f66873bc9af9e09ad8d34b9c75945312ea7" },
  "case-012": { stem: "2622bfa858dd237450de67f5309c265d4b54014ab724e26ca3b5b36dfdf90c05", run: "733618606359855606a0df8e314429e306c3aa43a42ac869c84457eae05c71b4" },
  "case-013": { stem: "34c2bdfb29402d1a7d4f4069c8f3374b1a41b56901afb9a1c56cd09b5eec7a75", run: "b18bea8eaa583fd4b9e0e9c775212827448bf240788fbfb5a532e7571a191313" },
  "case-014": { stem: "965310810f6a95a3bd4c03ef9e19d077cc9b212086558ab08833df8a3953c25b", run: "f6b426382e5e72fa494250a5db53d18681f2b845ec3007e498121700b20c633b" },
  "case-015": { stem: "1bcf3e3672f04a937a41c4ec5c0e193e8875adc89724c4b2033b5bd4c31ad7db", run: "e12ff509555b27b85ceea5ca7b66817af2e2406381b7ae2c43a15fb3ab7293f3" },
  "case-016": { stem: "a5db7c28d93248af7399bff948cc1ec91945b2b9270dddc640db838fc95d6689", run: "df5f077117602455398314e5c010c174a562fcbaf7adb066cd1c650a4a7fb76a" },
  "case-017": { stem: "b284bae621453e699d1b927930a6d1e3e719c608645c430b3b3e445ee8280caf", run: "fe13a410831883dd635777cc7194363ef3185e2f0d83834829527d48f772d3cd" },
  "case-018": { stem: "cb337d4ace186f1994cf136e7c4b92c342617097236935cf3e00f28a486f6387", run: "c6dfb68a21352d4c1789cb2cbbc298c96bf28e796acd6cb1ceb3a3e4048dc9f8" },
  "case-019": { stem: "01eecf00f98dccf8ab15eed93d81e70b7afbe054dfdb90b32351792a8dc4c7df", run: "5324caf72bbf04dbe792e3ca0edaf03dcd5dcf3d80aec31f134111507b45f5df" },
  "case-020": { stem: "89b8adc805459321bb8fdfe8a3048fcdf6865559536896761861a0459a1ccb79", run: "d23bde77be063c08eb00736ed6c1a1f9962e473e79959f81be398708fb8367b4" },
  "case-021": { stem: "454709d5cb1ad573735bd630a6032a69fdac369d51976c45f29699c393b75457", run: "6e5d5c928909e935cdf45164a11e51905c8efd1980835fb70f2e2238b059e45d" },
  "case-022": { stem: "2d76b2c20d4a751191e070b4b68f0de9f43dbe498a8b85484ce60fe96917ad3f", run: "ebd52b7cd8c8b1bd677429cad56ab29891e1d874e7ee3376914d6476274f3127" },
  "case-023": { stem: "d173f819dc23d177d266b83c0c390082ad80d1f4cdc80cd24d4bcf513dc401cd", run: "6d500c88bbaa713277bf9b56794caaee143f53ea0dfbcfe17cd03adbd065eb9f" },
  "case-024": { stem: "978e50bf6341f7e8adbe8aef078a8bc4af349bdc1c5d7aec2639f68116ca9f31", run: "6cd2130da1f25b1c0aaa13f354037c104e37b58235f94adfbbe7c93371b7642b" },
  "case-025": { stem: "5cb13b0c84b276b886c2965fb06d6997b7faba4750d20133c32b4f38eb8ac134", run: "6f763d28ef433d705d4f2fbab6f16efea6bc0c44d5a0dad42d0fdfaad9edc8af" },
  "case-026": { stem: "78c7f7e209c227f51b6a8e0c5265d88d07d5d1b53cc06faa48688896a12ea887", run: "2e2065e0372918b481dee841d294deb3511a7ab3da5d61362c079aae88b22170" },
  "case-027": { stem: "5375836302865f94b55142d7a2672e45ae1ed4f19568ef2366248ed40f2e6145", run: "108d6e1c8a4cbb0fc2dd9e6c08c08f4157110d0c80d21f1ab230d69f4010e18e" },
  "case-028": { stem: "d722610b283ca78bf9e8b1c771d51050d9e0d1425b76817f5f5164eafbb8a21f", run: "9b687dfedbd1912b4ff7ab92a45dc193b7ac6e806097480eee387e046555ddce" },
  "case-029": { stem: "1a41642d26339fa5520979ac58210303ddb7e93a452493e51ff11c50a00cb021", run: "78d01b48a72eb8a7bf3b79da7d664b99862541e2f644fa4fa516d22f69b3e3e4" },
  "case-030": { stem: "eac6708a142765cc50d3831186ed11c81a717d5fc64e154a564ed84b731e8996", run: "461124df23f814ad2c4128f0bb9866d744a51fa903d4535234956cc85c3010d7" },
  "case-031": { stem: "42d58f7399dc6b2286904ad5580a0b2a515b9f7c0befc9fe524be13c6f37c9ad", run: "ee66105dcba4b959ac428f5632072ac0638c49b8fbcb390fe37538e355969220" },
  "case-032": { stem: "4e1927029ac5934fafb8e0d4cba8bcd696991c86d40933677346a096698022a1", run: "0a32fd24e7c5307556777b573dec434570f1820e292435e5119bfea26a0dfd7c" },
  "case-033": { stem: "cf4bf8a60471393b5d04702a12202fa0c68faad7d3e3cdea799a313702492cfc", run: "e9457636f28c29df611ef98d2403f20eeb79fdc207d0c845d1871bfc709ca24a" },
  "case-034": { stem: "95baed5fb89b3ad107deb6b3538dee2561057dca127099406957ddb417a9c76e", run: "7f22c59006cab4cf43413b2826f30406862a6c091441110696ff30a484f43949" },
  "case-035": { stem: "4d9ea151614a300ac4c5f6b8c756bbceae3f88ef6d6d05fbc8593575ba0b8a39", run: "d5b867c209499c9e235eb294af91878be49fb243c11dff91218a487a67fbe2b6" },
  "case-036": { stem: "a1867840bd11299cf558c7e30a5fa6962abcaa68ce37c2534157caaa13d61e77", run: "e46fbf6e359ceb097334aa43ada00a48c9c936f3e675118bb0512446d0b13ef4" },
  "case-037": { stem: "417ce829708de0060fc79eff5d67b3a308a3cc4cb37efc5db7d97b5fac1e5593", run: "0cd58202f68f418f9307c76269295f6729034ee26ce96b58c1ace384467d01d6" },
  "case-038": { stem: "b419c740d24ac6e37ad6282a23a30c79a2eb73e63fef98f250d4d5fb3348c099", run: "a4cf95a98658b3de328a70dd07a976af95aee41712463d8c08714ec44071c193" },
  "case-039": { stem: "ce02a432642da31f188ecb3cf336328c37f9bf91eda5ec72706c7c7427db8c57", run: "935f87537f956f96139513ec4852308fbb468d2b8b0fc394a100fd6a921162f7" },
  "case-040": { stem: "40faa2814e5b707e2bb6c8f11f13a6a7513733c41f4a23ecbabd5b0ae983b0eb", run: "0016fb9ba4c4b67e1f2804df187564d15806e888b643924f6a75b6a73067513e" }
};

test("Case 1 remains the protected canonical four-view case", () => {
  assert.equal(context.window.AMC_CASES.length, caseFiles.length);
  assert.equal(caseData.id, "case-001");
  assert.equal(caseData.status, "audited");
  assert.equal(caseData.modality, "in_person");
  assert.ok(caseData.stem.lines.length > 0);
  assert.ok(caseData.run.sections.length > 0);
  assert.equal(caseData.reasoning, undefined, "annotated case text must not be duplicated");
});

test("Phase 1 retains complete reasoning while Pattern 13 remains Exam-only", () => {
  const expectedIds = caseFiles.map((file) => file.replace(/[.]js$/, ""));
  const phaseOneIds = expectedIds.slice(0, 40);
  const patternThirteenIds = ["case-041", "case-042"];
  assert.deepEqual(Array.from(cases, (item) => item.id), expectedIds);
  assert.deepEqual(Array.from(reasoningCases, (item) => item.id), phaseOneIds);
  assert.deepEqual(Array.from(examOnlyCases, (item) => item.id), patternThirteenIds);

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
    assert.doesNotMatch(JSON.stringify([item.clinicalSources, item.sources]), /allergy[.]org[.]au\/hp\/papers\/acute-management-of-anaphylaxis-guidelines/);
  });

  examOnlyCases.forEach((item) => {
    assert.equal(item.reasoningCompass, undefined, `${item.id} contains a reasoning compass`);
    assert.equal(item.masteryFocus, undefined, `${item.id} contains mastery text`);
    assert.equal(item.hints, undefined, `${item.id} contains Hints`);
    assert.equal(item.sources, undefined, `${item.id} contains learner-facing reasoning sources`);
    assert.ok(item.stem.lines.length > 0);
    assert.ok(item.stem.tasks.length > 0);
    assert.ok(item.run.sections.length > 0);
    assert.deepEqual(viewModel.validateCase(item), []);
  });
});

test("case selection exposes completed reasoning and retains a safe fallback for future exam-only cases", () => {
  assert.equal(viewModel.selectCase(cases, "case-002").id, "case-002");
  assert.equal(viewModel.selectCase(cases, "case-003").id, "case-003");
  assert.equal(viewModel.selectCase(cases, "case-017").id, "case-017");
  assert.equal(viewModel.selectCase(cases, "missing-case"), null);
  assert.equal(viewModel.selectCase(cases, "").id, "case-001");
  assert.equal(viewModel.viewForCase(caseTwo, "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase(caseThree, "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase(cases[19], "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase({ reasoningAvailable: false }, "#reasoning-full-run").id, "exam-full-run");
  assert.equal(viewModel.viewForCase(cases[16], "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase({ reasoningAvailable: false }, "#reasoning-full-run").id, "exam-full-run");
  assert.equal(viewModel.viewForCase(caseData, "#reasoning-full-run").id, "reasoning-full-run");
  assert.equal(viewModel.viewForCase(cases[40], "#reasoning-full-run").id, "exam-full-run");
  assert.equal(viewModel.viewForCase(cases[41], "#reasoning-stem").id, "exam-stem");
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

test("all Phase 1 cases keep short-term case mastery and long-term clinical mastery visible", () => {
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
  assert.match(appSource, /"From this case: "/);
  assert.match(appSource, /"What carries forward: "/);
});

test("every case has one bounded essential journey and optional deeper links", () => {
  reasoningCases.forEach((item) => {
    assert.ok(Array.isArray(item.essentialHintIds), `${item.id} has no essential route`);
    assert.ok(item.essentialHintIds.length >= 12 && item.essentialHintIds.length <= 16, `${item.id} essential route is not 12 to 16 Hints`);

    const hintById = new Map(item.hints.map((hint) => [hint.id, hint]));
    const essentialHints = item.essentialHintIds.map((hintId) => {
      assert.ok(hintById.has(hintId), `${item.id} has unknown essential Hint ${hintId}`);
      return hintById.get(hintId);
    });
    const itemOrders = {
      stem: new Map(viewModel.itemsForSurface(item, "stem").map((surfaceItem, index) => [surfaceItem.id, index])),
      run: new Map(viewModel.itemsForSurface(item, "run").map((surfaceItem, index) => [surfaceItem.id, index]))
    };
    const positions = essentialHints.map((hint) => {
      const target = viewModel.itemMap(item, hint.target.surface)[hint.target.itemId];
      return [
        hint.target.surface === "stem" ? 0 : 1,
        itemOrders[hint.target.surface].get(hint.target.itemId),
        viewModel.occurrenceIndex(target.text, hint.target.quote, hint.target.occurrence || 1)
      ];
    });
    positions.slice(1).forEach((position, index) => {
      assert.ok(
        position[0] > positions[index][0] ||
        (position[0] === positions[index][0] && position[1] > positions[index][1]) ||
        (position[0] === positions[index][0] && position[1] === positions[index][1] && position[2] > positions[index][2]),
        `${item.id} essential route is out of disclosure order`
      );
    });
    assert.ok(essentialHints.some((hint) => hint.target.surface === "stem"), `${item.id} route skips the Stem`);
    assert.ok(essentialHints.some((hint) => hint.target.surface === "run"), `${item.id} route skips the Full Run`);
    assert.equal(item.essentialHintIds.at(-1), item.hints.at(-1).id, `${item.id} route does not finish at station completion`);

    const essentialTargets = new Set(essentialHints.map((hint) => hint.target.itemId));
    item.stem.tasks.forEach((task) => assert.ok(essentialTargets.has(task.id), `${item.id} route skips task ${task.id}`));
    const taskIds = new Set(item.stem.tasks.map((task) => task.id));
    assert.ok(
      essentialHints.some((hint) => hint.target.surface === "stem" && !taskIds.has(hint.target.itemId)),
      `${item.id} essential route has no scenario clue before the task anchors`
    );
    ["stem", "run"].forEach((surface) => {
      assert.ok(essentialHints.some((hint) => hint.target.surface === surface && hint.clock), `${item.id} lacks an essential ${surface} clock anchor`);
    });
    assert.ok(item.hints.filter((hint) => hint.clock).length >= 4, `${item.id} needs repeated clock recovery`);
    assert.ok(item.hints.filter((hint) => Array.isArray(hint.deeper) && hint.deeper.length).length >= 2, `${item.id} needs optional mechanism depth without loading the first reveal`);

    item.hints.forEach((hint) => {
      assert.ok(hint.popUp.trim(), `${item.id}/${hint.id} must begin with a genuine thought`);
      assert.ok(hint.say.join(" ").trim().split(/\s+/).length <= 50, `${item.id}/${hint.id} first reveal is too dense`);
      if (hint.deeper === undefined) return;
      assert.ok(Array.isArray(hint.deeper), `${item.id}/${hint.id} deeper content must be an array`);
      hint.deeper.forEach((paragraph) => assert.ok(paragraph.trim(), `${item.id}/${hint.id} has empty deeper content`));
    });
  });
});

test("clinical mastery ends with a sourced case-specific transfer check", () => {
  const questions = new Set();
  reasoningCases.forEach((item) => {
    const sourceIds = new Set(item.sources.map((source) => source.id));
    assert.ok(item.masteryFocus.transfer.trim(), `${item.id} lacks its transfer question`);
    assert.match(item.masteryFocus.transfer, /[?]$/, `${item.id} transfer prompt must be a question`);
    assert.ok(item.masteryFocus.transferAnswer.trim(), `${item.id} lacks a corrective transfer answer`);
    assert.ok(item.masteryFocus.transferChecks.length >= 2, `${item.id} lacks transfer decision checks`);
    assert.equal(item.masteryFocus.tasks.length, item.stem.tasks.length, `${item.id} lacks one compact label per task`);
    item.masteryFocus.tasks.forEach((label) => {
      const words = label.trim().split(/\s+/).length;
      assert.ok(words >= 2 && words <= 5, `${item.id} has an overlong or vague task label: ${label}`);
    });
    item.masteryFocus.transferCitationIds.forEach((sourceId) => {
      assert.ok(sourceIds.has(sourceId), `${item.id} transfer answer cites unknown ${sourceId}`);
    });
    questions.add(item.masteryFocus.transfer);
  });
  assert.equal(questions.size, reasoningCases.length, "transfer questions must be specific to each case");

  const appSource = fs.readFileSync(path.join(root, "assets/js/app.js"), "utf8");
  assert.match(appSource, /"Try it in a variation"/);
  assert.match(appSource, /"Reveal the answer and decision checks"/);
  assert.match(appSource, /transferCitationIds/);
});

test("the guided interface pauses before revealing reasoning and preserves route state", () => {
  const appSource = fs.readFileSync(path.join(root, "assets/js/app.js"), "utf8");
  const cssSource = fs.readFileSync(path.join(root, "assets/css/styles.css"), "utf8");

  assert.match(appSource, /essential \? "\(\*\)" : "\(\+\)"/);
  assert.match(appSource, /"Continue thinking"/);
  assert.match(appSource, /if \(!revealed\)/);
  assert.match(appSource, /renderRevealedHint\(body, hint\)/);
  assert.match(appSource, /reveal[.]addEventListener\("click", function \(event\)/);
  assert.match(appSource, /event[.]stopPropagation\(\);[\s\S]{0,220}?pause[.]remove\(\);[\s\S]{0,220}?renderRevealedHint\(body, hint\)/);
  assert.match(appSource, /event[.]composedPath/);
  assert.match(appSource, /window[.]localStorage[.]setItem/);
  assert.match(appSource, /"Previous essential"/);
  assert.match(appSource, /"Close and continue reading"/);
  assert.doesNotMatch(appSource, /"Next essential"/);
  assert.match(appSource, /"Continue to Full Run"/);
  assert.match(appSource, /"Start at the top"/);
  assert.match(appSource, /"Restart case practice"/);
  assert.match(appSource, /pendingSurfaceTop/);
  assert.match(appSource, /"Show optional \(\+\) Hints"/);
  assert.match(appSource, /"amc-reasoning-show-deeper:" \+ currentCase[.]id/);
  assert.match(appSource, /dataset[.]deeperMarkers/);
  assert.match(appSource, /"Open the full plan and mastery focus"/);
  assert.match(appSource, /"Task plan"/);
  assert.match(appSource, /replace\(\/\^Now that\\b\/, "Since"\)[.]replace\(\/\^Now\\s\+\//);
  assert.match(appSource, /journey-task-chip/);
  assert.match(appSource, /masteryFocus[.]tasks/);
  assert.match(appSource, /reasoningHeading[.]focus/);
  assert.match(appSource, /aria-controls/);
  assert.doesNotMatch(appSource, /"Current task"/);
  assert.match(cssSource, /[.]reasoning-marker[\s\S]*?min-width: 1[.]55rem;[\s\S]*?min-height: 1[.]55rem;/);
  assert.match(cssSource, /[.]reasoning-marker[.]is-visited::after[\s\S]*?content: "✓";/);
  assert.match(cssSource, /data-deeper-markers="hidden"/);
  assert.match(cssSource, /[.]hint-header[\s\S]*?position: sticky;/);
  assert.match(cssSource, /[.]journey-dock-anchor[\s\S]*?grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  assert.match(cssSource, /[.]journey-dock-focus \{[\s\S]{0,120}?overflow-wrap: anywhere;[\s\S]{0,120}?white-space: normal;/);
  assert.match(cssSource, /@media \(prefers-reduced-motion: reduce\)/);
});

test("task anchors stay compact and do not reveal later station findings", () => {
  const byId = (caseId, hintId) => cases.find((item) => item.id === caseId).hints.find((hint) => hint.id === hintId);
  const hintText = (caseId, hintIds) => JSON.stringify(hintIds.map((hintId) => byId(caseId, hintId)));
  const caseOne = cases.find((item) => item.id === "case-001");

  assert.ok(caseOne.essentialHintIds.includes("hint-discomfort"));
  assert.ok(caseOne.essentialHintIds.includes("hint-indigestion-concern"));
  assert.ok(!caseOne.essentialHintIds.includes("hint-ecg"));
  assert.ok(!caseOne.essentialHintIds.includes("hint-aspirin"));

  assert.doesNotMatch(hintText("case-008", ["c008-hint-05"]), /correct dangerous treatment|non-invasive ventilation|intubat/i);
  assert.doesNotMatch(hintText("case-003", ["c003-hint-08"]), /calf|clot|travel|oestrogen/i);
  assert.doesNotMatch(hintText("case-012", ["c012-hint-08"]), /infection|obstruction|urinary|urine output|kidney/i);
  assert.doesNotMatch(hintText("case-001", ["hint-immediate-management"]), /ambulance transfer|waiting for the ambulance/i);
  assert.doesNotMatch(hintText("case-014", ["c014-hint-08", "c014-hint-10"]), /neutrophil|antibiotic|chemotherapy day|transfer status/i);
  assert.doesNotMatch(hintText("case-016", ["c016-hint-07", "c016-hint-09"]), /tertiary|pump and lung|cardiogenic|congestion/i);
  assert.doesNotMatch(hintText("case-018", ["c018-hint-09", "c018-hint-10", "c018-hint-11"]), /endoscop|confirmed source|rebleed|next procedure/i);
  assert.doesNotMatch(hintText("case-019", ["c019-hint-06", "c019-hint-09"]), /liver|varice|portal|endoscop/i);

  [
    ["case-004", "c004-hint-40"],
    ["case-009", "c009-hint-07"],
    ["case-014", "c014-hint-10"],
    ["case-017", "c017-hint-09"],
    ["case-018", "c018-hint-11"],
    ["case-018", "c018-hint-49"],
    ["case-019", "c019-hint-06"],
    ["case-020", "c020-hint-05"]
  ].forEach(([caseId, hintId]) => {
    const words = byId(caseId, hintId).say.join(" ").trim().split(/\s+/).length;
    assert.ok(words <= 36, `${caseId}/${hintId} is too dense for the first reveal`);
  });
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
  assert.doesNotMatch(reasoningText, /speed up your safety|heart (?:near|at) the front|stay open|stays open|diagnostic weight|route to danger|on the board|fix the switches|hold the switches|clean return point|route may step down/i);
  assert.doesNotMatch(reasoningText, /reflux owns|physiology outranks|danger threshold|clot-risk stack|clues click|one mechanism unifies|probability shifter/i);
  assert.doesNotMatch(reasoningText, /\b(?:mental|diagnostic|task|clinical) map\b|\b(?:history|heart|diagnostic) lane\b|old case closed/i);
});

test("Cases 21 to 40 let the Stem reasoning earn rather than disclose the answer", () => {
  const forbiddenBeforeRun = new Map([
    ["case-021", /\bDKA\b|diabetic ketoacidosis|ketonaemia|fixed[- ]rate insulin|insulin infusion|\bpotassium\b|missed basal|infusion endpoint/i],
    ["case-022", /\bHHS\b|hyperosmolar hyperglyc(?:a|e)emic state|pneumonia|kidney injury|delayed insulin|\bpotassium\b/i],
    ["case-023", /hyperkal(?:a|e)emia|\bpotassium\b|calcium gluconate|myocardial protection|insulin[- ]glucose|urgent dialysis|increasing symmetrical weakness/i],
    ["case-024", /hypertrophic cardiomyopathy|\bHCM\b|implanted defibrillator|exertional (?:blackout|collapse)/i],
    ["case-025", /ventricular tachycardia|synchronised cardioversion|amiodarone/i],
    ["case-026", /complete heart block|third[- ]degree heart block|transcutaneous pacing|pacemaker/i],
    ["case-027", /abdominal aortic aneurysm|ruptured aneurysm|vascular repair/i],
    ["case-028", /mesenteric isch(?:a|e)emia|unfractionated heparin|revascularisation|\babrupt\b|recent anticoagulant/i],
    ["case-029", /perforated (?:peptic )?ulcer|pneumoperitoneum|emergency laparotomy/i],
    ["case-030", /ectopic pregnancy|laparoscopy|methotrexate/i],
    ["case-031", /pre[- ]?eclampsia|eclampsia|magnesium sul(?:f|ph)ate|emergency birth/i],
    ["case-032", /uterine atony|bimanual compression|oxytocin|ergometrine|carboprost/i],
    ["case-033", /sepsis|meningitis|ceftriaxone|lumbar puncture|vaccin/i],
    ["case-034", /\bcroup\b|nebulised adrenaline|dexamethasone/i],
    ["case-035", /status epilepticus|midazolam|levetiracetam/i],
    ["case-036", /\bopioid|naloxone/i],
    ["case-037", /acetylcysteine|nomogram|treatment line/i],
    ["case-038", /tricyclic|amitriptyline|sodium bicarbonate/i],
    ["case-039", /serotonin toxicity|Hunter criteria|cyproheptadine/i],
    ["case-040", /snake ?bite|envenom|antivenom|pressure immobili[sz]ation/i]
  ]);

  cases.slice(20, 40).forEach((item) => {
    const stemJourney = JSON.stringify({
      caseMastery: item.masteryFocus.case,
      compass: item.reasoningCompass.stem,
      hints: item.hints
        .filter((hint) => hint.target.surface === "stem")
        .map((hint) => ({
          where: hint.where,
          popUp: hint.popUp,
          say: hint.say,
          pause: hint.pause,
          recap: hint.recap,
          reorient: hint.reorient,
          clock: hint.clock,
          deeper: hint.deeper
        }))
    });
    assert.doesNotMatch(stemJourney, forbiddenBeforeRun.get(item.id), `${item.id} gives away later evidence before the Full Run`);
  });
});

test("Cases 21 to 40 keep the always-visible Full Run compass free of later examiner evidence", () => {
  const forbiddenCompassBeforeRun = new Map([
    ["case-021", /\bDKA\b|insulin|potassium|acid[- ]base|keton/i],
    ["case-022", /\bHHS\b|pneumonia|osmolality|insulin|potassium|kidney injury/i],
    ["case-023", /potassium|dialysis|wider QRS|calcium|myocardial protection/i],
    ["case-024", /hypertrophic|monitored transfer|murmur|left ventricular/i],
    ["case-025", /ventricular|monitor captured|drowsiness|hypotension|cardioversion|amiodarone/i],
    ["case-026", /bradycardia|heart block|pacing|pacemaker|captured cause/i],
    ["case-027", /aortic|haemorrhage|repair|drowsiness|hypotension/i],
    ["case-028", /bowel|mesenteric|angiograph|endovascular|laparotom|periton|anticoag/i],
    ["case-029", /anuria|lactate|periton|source control|perforat/i],
    ["case-030", /free fluid|ectopic|laparoscop|concealed|haemorrhage/i],
    ["case-031", /seizure|magnesium/i],
    ["case-032", /tone, tissue|thrombin|compression|oxytocin/i],
    ["case-033", /vaccin|sepsis|ceftriaxone|lumbar puncture/i],
    ["case-034", /quieter|\bcroup\b|adrenaline|dexamethasone/i],
    ["case-035", /status epilepticus|midazolam|levetiracetam/i],
    ["case-036", /naloxone|opioid|recurrence/i],
    ["case-037", /acetylcysteine|nomogram|treatment line/i],
    ["case-038", /seizure|electrical|bicarbonate|tricyclic|\bQRS\b/i],
    ["case-039", /rigidity|clonus|serotonin|cooling|sedation/i],
    ["case-040", /collapses|bleeds|weakens|breathing difficulty|antivenom|bandage removal|envenom/i]
  ]);

  cases.slice(20, 40).forEach((item) => {
    assert.doesNotMatch(
      JSON.stringify(item.reasoningCompass.run),
      forbiddenCompassBeforeRun.get(item.id),
      `${item.id} Full Run compass reveals a later examiner finding or decision`
    );
  });
});

test("early Phase 1 source labels do not reveal a diagnosis before the case evidence", () => {
  const checks = new Map([
    ["case-021", { hintIds: ["c021-hint-02"], forbidden: /hyperglyc|ketoacidosis|diabetic emergency/i }],
    ["case-022", { hintIds: ["c022-hint-03", "c022-hint-04"], forbidden: /hyperosmolar|\bHHS\b/i }],
    ["case-024", { hintIds: ["c024-hint-03"], forbidden: /hypertrophic|cardiomyopathy|\bHCM\b/i }],
    ["case-027", { hintIds: ["c027-hint-02", "c027-hint-03", "c027-hint-04"], forbidden: /aneurysm|aorto[- ]iliac/i }],
    ["case-028", { hintIds: ["c028-hint-02", "c028-hint-03", "c028-hint-04", "c028-hint-07"], forbidden: /mesenteric|bowel isch/i }],
    ["case-029", { hintIds: ["c029-hint-03"], forbidden: /perforated|peptic ulcer/i }],
    ["case-030", { hintIds: ["c030-hint-02", "c030-hint-03"], forbidden: /ectopic/i }],
    ["case-033", { hintIds: ["c033-hint-02", "c033-hint-04", "c033-hint-05", "c033-hint-06"], forbidden: /sepsis|meningitis/i }],
    ["case-034", { hintIds: ["c034-hint-02", "c034-hint-04", "c034-hint-05", "c034-hint-06"], forbidden: /\bcroup\b/i }],
    ["case-035", { hintIds: ["c035-hint-05", "c035-hint-06"], forbidden: /status epilepticus/i }],
    ["case-036", { hintIds: ["c036-hint-06"], forbidden: /opioid|naloxone/i }],
    ["case-039", { hintIds: ["c039-hint-05", "c039-hint-06"], forbidden: /serotonin/i }],
    ["case-040", { hintIds: ["c040-hint-02", "c040-hint-04", "c040-hint-05", "c040-hint-06"], forbidden: /snake ?bite|envenom|antivenom/i }]
  ]);

  checks.forEach((check, caseId) => {
    const item = cases.find((candidate) => candidate.id === caseId);
    const sourceById = new Map(item.sources.map((source) => [source.id, source]));
    const titles = check.hintIds.flatMap((hintId) => {
      const hint = item.hints.find((candidate) => candidate.id === hintId);
      assert.ok(hint, `${caseId} is missing audited Hint ${hintId}`);
      return hint.citationIds.map((sourceId) => sourceById.get(sourceId).title);
    }).join("\n");
    assert.doesNotMatch(titles, check.forbidden, `${caseId} early source title reveals the diagnosis`);
  });
});

test("Phase 1 completion Hints use one reset cue rather than a duplicated Clock line", () => {
  cases.slice(20, 40).forEach((item) => {
    assert.equal(item.hints.at(-1).clock, undefined, `${item.id} duplicates the final reset in Clock and Next`);
  });
});

test("Cases 21 to 40 keep the natural consultant-companion language lock", () => {
  const text = JSON.stringify(cases.slice(20, 40).map((item) => ({
    masteryFocus: item.masteryFocus,
    reasoningCompass: item.reasoningCompass,
    hints: item.hints
  })));
  assert.doesNotMatch(
    text,
    /systems? remain open|evidence streams?|pain journey|causal map|explanation has landed|movement the price|species curiosity|diagnostic ambition|restore unsafe physiology|management coherent|show immediate physiological support/i
  );
});

test("Reasoning follows the audited clinical updates in Cases 8, 33, 37 and 39", () => {
  const case8 = cases.find((item) => item.id === "case-008");
  const case33 = cases.find((item) => item.id === "case-033");
  const case37 = cases.find((item) => item.id === "case-037");
  const case39 = cases.find((item) => item.id === "case-039");
  const hint = (item, id) => item.hints.find((candidate) => candidate.id === id);

  assert.doesNotMatch(hint(case8, "c008-hint-11").say.join(" "), /82|99|10 litres/i);
  assert.match(hint(case8, "c008-hint-12").say.join(" "), /82%[\s\S]*oxygen was necessary[\s\S]*99%[\s\S]*88% to 92%/i);
  assert.match(hint(case8, "c008-hint-14").deeper.join(" "), /does not prove oxygen is the sole cause/i);
  assert.doesNotMatch(hint(case8, "c008-hint-37").recap, /what has improved/i);

  assert.match(hint(case33, "c033-hint-18").say.join(" "), /0[.]15 mg\/kg[\s\S]*six-hourly for four days[\s\S]*should delay ceftriaxone/i);
  assert.match(hint(case33, "c033-hint-18").deeper.join(" "), /within four hours[\s\S]*never after 12 hours[\s\S]*N meningitidis/i);
  assert.match(case33.masteryFocus.transferAnswer, /dexamethasone 0[.]15 mg\/kg[\s\S]*six-hourly for four days/i);
  assert.ok(case33.masteryFocus.transferChecks.includes("Dexamethasone timing and ongoing indication"));

  assert.ok(case37.essentialHintIds.includes("c037-hint-21"));
  assert.match(hint(case37, "c037-hint-21").say.join(" "), /reassessment point[\s\S]*toxicology advice[\s\S]*clinically well[\s\S]*ALT or AST is falling[\s\S]*INR is below 2/i);
  assert.match(hint(case37, "c037-hint-21").deeper.join(" "), /paracetamol above 10 mg\/L[\s\S]*hepatic synthetic recovery/i);
  assert.match(case37.masteryFocus.clinical, /scheduled antidote duration is a time to reassess, not an automatic stop/i);

  const austinDates = [
    case39.clinicalSources.find((source) => source.title === "Serotonin (5HT) Toxicity").date,
    case39.sources.find((source) => source.id === "austin-serotonin-2024").date
  ];
  austinDates.forEach((date) => assert.match(date, /review date March 2026; remained online when accessed July 2026/));
  assert.doesNotMatch(JSON.stringify([case39.clinicalSources, case39.sources]), /Royal Melbourne Hospital|RMH|Alfred Health|The Alfred/i);
});

test("Cases 18 to 20 earn source and treatment conclusions from disclosed evidence", () => {
  const case18 = cases.find((item) => item.id === "case-018");
  const case19 = cases.find((item) => item.id === "case-019");
  const case20 = cases.find((item) => item.id === "case-020");
  const firstMatch = (item, pattern) => item.hints.find((hint) => pattern.test(JSON.stringify(hint)));
  const stemReasoning = (item) => JSON.stringify({
    mastery: {
      case: item.masteryFocus.case,
      clinical: item.masteryFocus.clinical,
      tasks: item.masteryFocus.tasks
    },
    compass: item.reasoningCompass.stem,
    hints: item.hints
      .filter((hint) => hint.target.surface === "stem")
      .map((hint) => ({
        where: hint.where,
        popUp: hint.popUp,
        say: hint.say,
        pause: hint.pause,
        recap: hint.recap,
        reorient: hint.reorient,
        clock: hint.clock
      }))
  });

  assert.equal(case18.hints.length, 51);
  assert.ok(case18.sources.length >= 10);
  assert.ok(case18.sources.some((source) => source.id === "esge-variceal-2022"));
  assert.ok(case18.sources.some((source) => source.id === "baveno-vii-2022"));
  assert.doesNotMatch(stemReasoning(case18), /upper gastrointestinal bleed|peptic ulcer|naproxen|major[- ]haemorrhage/i);
  assert.equal(firstMatch(case18, /upper gastrointestinal bleed/i).target.itemId, "c018-run-history-bleeding-answer");
  assert.equal(firstMatch(case18, /peptic ulcer|naproxen-related ulcer/i).target.itemId, "c018-run-history-risk-answer");
  assert.equal(firstMatch(case18, /major[- ]haemorrhage protocol/i).target.itemId, "c018-run-critical");

  assert.equal(case19.hints.length, 50);
  assert.equal(case19.sources.length, 8);
  assert.doesNotMatch(stemReasoning(case19), /variceal|cirrhosis|portal|terlipressin|ceftriaxone|\bTIPS\b/i);
  assert.equal(firstMatch(case19, /variceal bleeding/i).target.itemId, "c019-run-background-answer");
  assert.equal(firstMatch(case19, /oesophageal varices with active bleeding/i).target.itemId, "c019-run-endoscopy-result");

  assert.equal(case20.hints.length, 44);
  assert.equal(case20.sources.length, 10);
  assert.doesNotMatch(stemReasoning(case20), /apixaban|revers|divertic|lower gastrointestinal|CT angiography|embolis/i);
  assert.equal(firstMatch(case20, /reversal|reverse/i).target.itemId, "c020-run-daughter-history");
  assert.equal(firstMatch(case20, /lower gastrointestinal location|lower gastrointestinal bleed/i).target.itemId, "c020-run-cta-result");
  assert.equal(firstMatch(case20, /embolisation/i).target.itemId, "c020-run-definitive");
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

test("the Case 5 reasoning reset uses one cache-safe marker", () => {
  const releaseMarker = "case5-reasoning-reset-v1";
  const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const version = JSON.parse(fs.readFileSync(path.join(root, "version.json"), "utf8"));
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/pages.yml"), "utf8");
  const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
  const refresh = fs.readFileSync(path.join(root, ".pages-refresh"), "utf8");

  assert.match(indexSource, new RegExp(`name="x-build-id" content="${releaseMarker}"`));
  assert.match(indexSource, new RegExp(`window[.]__BUILD_ID__ = "${releaseMarker}"`));
  assert.equal((indexSource.match(new RegExp(`[?]v=${releaseMarker}`, "g")) || []).length, caseFiles.length + 3);
  assert.doesNotMatch(indexSource, /cases18-20-reasoning-v1/);
  assert.equal(version.buildId, releaseMarker);
  assert.equal(version.checkpoint, "case-005-reasoning-reset");
  assert.deepEqual(version.caseIds, caseFiles.map((file) => file.replace(/[.]js$/, "")));
  assert.match(workflow, /grep -q "case5-reasoning-reset-v1" index[.]html/);
  assert.match(readme, /All 40 Phase 1 cases contain completed Reasoning layers/);
  assert.match(readme, /Cases 41 and 42 complete the initial two-case core for Phase 2, Pattern 13/);
  assert.match(refresh, /Checkpoint: case5-reasoning-reset-v1/);
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
  assert.match(buildSource, /discoverCaseAssets\("current-cases"\)/);
  assert.match(buildSource, /discoverCaseAssets\("cases"\)/);
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
    const caseNumber = Number.parseInt(item.id.replace("case-", ""), 10);
    if (caseNumber >= 12) {
      assert.ok(audibleWords <= 1050, `${item.id} is too dense for an 8-minute run`);
    }
    if (caseNumber >= 21) {
      assert.ok(audibleWords <= 950, `${item.id} exceeds the current pattern spoken-word ceiling`);
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
    const name = stemText.match(/\b(?:Mr|Mrs|Ms|Master|Miss) ([A-Za-z]+(?:-[A-Za-z]+)?) ([A-Za-z][A-Za-z'-]*)/);
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

test("Case 5 v2 reasoning waits for each clue and uses the approved consultant voice", () => {
  const case5 = cases.find((item) => item.id === "case-005");
  const byId = (id) => case5.hints.find((hint) => hint.id === id);
  const speech = (id) => byId(id).say.join(" ");
  const thought = (id) => [byId(id).popUp].concat(byId(id).say).join(" ");

  assert.equal(case5.hints.length, 30, "Case 5 should keep only useful reasoning points");
  assert.equal(case5.essentialHintIds.length, 16);
  assert.ok(case5.hints.every((hint) => hint.id.startsWith("c005-v2-")));
  assert.ok(case5.hints.every((hint) => hint.pause === undefined && hint.recap === undefined && hint.reorient === undefined));

  assert.equal(case5.hints.some((hint) => hint.target.itemId === "c005-stem-role"), false, "the ED setting does not earn a Hint");
  assert.equal(case5.hints.some((hint) => hint.id === "c005-v2-asthma-background"), false, "background asthma does not earn a premature Hint");
  assert.equal(case5.essentialHintIds[0], "c005-v2-worsening-pattern");
  assert.ok(case5.essentialHintIds.includes("c005-v2-oxygen-bronchodilators"), "immediate treatment belongs on the essential route");
  assert.equal(case5.essentialHintIds.includes("c005-v2-speech"), false, "the essential route should not duplicate severity reasoning");
  assert.equal(case5.essentialHintIds.at(-1), "c005-v2-station-end");

  assert.doesNotMatch(speech("c005-v2-worsening-pattern"), /six hours|reliever|awake|89%|accessory/i);
  assert.doesNotMatch(speech("c005-v2-reliever-failure"), /awake|two words|89%|accessory|drowsy/i);
  assert.doesNotMatch(speech("c005-v2-awake"), /89%|two or three words|accessory|markedly reduced|drowsy/i);

  const compass = JSON.stringify(case5.reasoningCompass);
  assert.doesNotMatch(compass, /incomplete speech|failed reliever|drowsy|quieter wheeze|intubat|carbon dioxide/i);
  assert.match(speech("c005-v2-quiet-deterioration"), /too little air is moving[\s\S]*exhaustion, not recovery/i);
  assert.match(thought("c005-v2-quiet-mechanism"), /Wheeze needs airflow[\s\S]*almost no flow may sound quiet/i);
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

test("Case 21 treats DKA to ketone and acidosis resolution rather than glucose alone", () => {
  const case21 = cases.find((item) => item.id === "case-021");
  assert.ok(case21, "Case 21 is missing");

  const text = case21.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const bedsideIndex = text.indexOf("Glucose is 26.4 mmol/L and blood ketones are 6.2 mmol/L");
  const fluidIndex = text.indexOf("Give the first litre of isotonic crystalloid over one hour");
  const potassiumIndex = text.indexOf("potassium 5.4");
  const insulinIndex = text.indexOf("fixed-rate intravenous insulin at 0.1 units per kilogram per hour");

  assert.ok(bedsideIndex >= 0 && fluidIndex > bedsideIndex, "Case 21 starts DKA treatment before the bedside pattern is available");
  assert.ok(potassiumIndex > fluidIndex && insulinIndex > potassiumIndex, "Case 21 starts insulin before potassium is known");
  assert.match(text, /Continue her usual basal glargine/);
  assert.match(text, /If potassium falls below 3.5, stop insulin temporarily, replace potassium/);
  assert.match(text, /When glucose falls below 14 mmol\/L, add intravenous glucose/);
  assert.match(text, /Insulin must continue until ketonaemia and acidosis resolve/);
  assert.match(text, /never stop basal insulin, check ketones, maintain fluids and seek early help/);
  assert.match(case21.clinicalSources.map((source) => source.url).join("\n"), /219046|dci24-0032/);
});

test("Case 22 corrects HHS osmolality with fluid before adding low-dose insulin", () => {
  const case22 = cases.find((item) => item.id === "case-022");
  assert.ok(case22, "Case 22 is missing");

  const text = case22.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const resultIndex = text.indexOf("Calculated osmolality is 379 mOsm/kg");
  const diagnosisIndex = text.indexOf("indicate hyperosmolar hyperglycaemic state");
  const salineIndex = text.indexOf("Start intravenous 0.9% sodium chloride first");
  const delayedInsulinIndex = text.indexOf("Do not start insulin immediately");
  const insulinIndex = text.indexOf("fixed-rate intravenous insulin at 0.05 units per kilogram per hour");

  assert.ok(resultIndex >= 0 && diagnosisIndex > resultIndex, "Case 22 labels HHS before the discriminating results");
  assert.ok(salineIndex > diagnosisIndex && delayedInsulinIndex > salineIndex && insulinIndex > delayedInsulinIndex, "Case 22 does not sequence HHS fluid before insulin");
  assert.match(text, /osmolality to fall by 3 to 8 mOsm\/kg per hour/);
  assert.match(text, /sodium by no more than 10 mmol\/L in 24 hours/);
  assert.match(text, /A modest sodium rise while glucose falls is expected if osmolality is falling/);
  assert.match(text, /renal-adjusted low-molecular-weight heparin thromboprophylaxis unless contraindicated/);
  assert.match(case22.clinicalSources.map((source) => source.url).join("\n"), /dme[.]15005|dci24-0032/);
});

test("Case 23 protects the myocardium before shifting and removing potassium", () => {
  const case23 = cases.find((item) => item.id === "case-023");
  assert.ok(case23, "Case 23 is missing");

  const text = case23.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const ecgIndex = text.indexOf("QRS widening to 150 milliseconds");
  const pointOfCareIndex = text.indexOf("Venous potassium is 7.2 mmol/L");
  const calciumIndex = text.indexOf("give 6.6 mmol of intravenous calcium gluconate");
  const insulinIndex = text.indexOf("10 units of short-acting insulin with 25 grams of intravenous glucose");
  const formalIndex = text.indexOf("laboratory sample is not haemolysed");

  assert.ok(ecgIndex >= 0 && pointOfCareIndex > ecgIndex, "Case 23 does not connect ECG toxicity with the rapid potassium result");
  assert.ok(calciumIndex > pointOfCareIndex && insulinIndex > calciumIndex, "Case 23 does not give calcium before potassium-shifting treatment");
  assert.ok(formalIndex > insulinIndex, "Case 23 waits for formal confirmation before treating ECG-toxic hyperkalaemia");
  assert.match(text, /Calcium protects the heart but does not lower potassium/);
  assert.match(text, /starting glucose is below 7, so commence 10% glucose at 50 millilitres per hour for five hours/);
  assert.match(text, /The shift into cells is temporary/);
  assert.match(text, /prepare urgent dialysis if potassium or ECG toxicity persists, rebounds/);
  assert.match(case23.clinicalSources.map((source) => source.url).join("\n"), /219325|ukkidney[.]org/);
});

test("Case 24 recognises inherited structural risk after the exertional-syncope history", () => {
  const case24 = cases.find((item) => item.id === "case-024");
  assert.ok(case24, "Case 24 is missing");

  const text = case24.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const familyIndex = text.indexOf("My father died suddenly while running at thirty-eight");
  const findingsIndex = text.indexOf("systolic ejection murmur at the left sternal edge and apex");
  const diagnosisIndex = text.indexOf("Hypertrophic cardiomyopathy is a leading concern");
  const transferIndex = text.indexOf("ambulance for monitored transfer to the emergency department today");

  assert.ok(familyIndex >= 0 && findingsIndex > familyIndex, "Case 24 discloses structural findings before completing the focused history");
  assert.ok(diagnosisIndex > findingsIndex, "Case 24 names hypertrophic cardiomyopathy before the discriminating findings");
  assert.ok(transferIndex > diagnosisIndex, "Case 24 does not act after recognising high-risk exertional syncope");
  assert.match(text, /That is temporary, not a lifetime decision/);
  assert.match(text, /Do not drive until the cause has been assessed and you are medically cleared/);
  assert.match(text, /An implanted defibrillator is considered only after that assessment/);
  assert.match(text, /three-generation family history/);
  assert.match(case24.clinicalSources.map((source) => source.url).join("\n"), /hypertrophic-cardiomyopathy|cpg_syncope/);
});

test("Case 25 keeps monitoring after a normal first ECG and cardioverts captured unstable VT", () => {
  const case25 = cases.find((item) => item.id === "case-025");
  assert.ok(case25, "Case 25 is missing");

  const text = case25.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const initialEcgIndex = text.indexOf("ECG shows sinus rhythm at 74 beats per minute");
  const monitoringIndex = text.indexOf("Maintain continuous monitoring, obtain intravenous access and apply defibrillator pads");
  const deteriorationIndex = text.indexOf("regular broad-complex tachycardia at 170 beats per minute");
  const cardioversionIndex = text.indexOf("delivers a 100-joule synchronised shock");
  const responseIndex = text.indexOf("rhythm changes to sinus rhythm at 82 beats per minute");
  const amiodaroneIndex = text.indexOf("amiodarone 300 milligrams intravenously over 10 to 20 minutes");

  assert.ok(monitoringIndex >= 0 && initialEcgIndex > monitoringIndex, "Case 25 does not protect against an intermittent rhythm before reviewing the normal first ECG");
  assert.ok(deteriorationIndex > initialEcgIndex, "Case 25 reveals the transient rhythm before the initially reassuring ECG");
  assert.ok(cardioversionIndex > deteriorationIndex && responseIndex > cardioversionIndex, "Case 25 does not cardiovert unstable broad-complex tachycardia in sequence");
  assert.ok(amiodaroneIndex > responseIndex, "Case 25 gives amiodarone before the indicated first cardioversion");
  assert.match(text, /uncertain regular broad-complex rhythm must be treated as ventricular tachycardia/);
  assert.match(text, /hypotension and impaired consciousness/);
  assert.match(text, /rather than discharge/);
  assert.match(case25.clinicalSources.map((source) => source.url).join("\n"), /managing-acute-dysrhythmias|Synchronised-cardioversion/);
});

test("Case 26 protects an unexplained fall before complete heart block recurs", () => {
  const case26 = cases.find((item) => item.id === "case-026");
  assert.ok(case26, "Case 26 is missing");

  const text = case26.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const initialEcgIndex = text.indexOf("right bundle branch block and marked left axis deviation");
  const monitoringIndex = text.indexOf("Start continuous monitoring, obtain intravenous access, apply pacing-defibrillation pads");
  const ctIndex = text.indexOf("CT brain is normal");
  const deteriorationIndex = text.indexOf("independent P waves and QRS complexes");
  const atropineIndex = text.indexOf("Give atropine 600 micrograms intravenously");
  const pacingIndex = text.indexOf("Use demand mode at about 70 beats per minute");
  const captureIndex = text.indexOf("Confirm electrical capture on the monitor and mechanical capture with a pulse");

  assert.ok(initialEcgIndex >= 0 && monitoringIndex > initialEcgIndex, "Case 26 does not recognise conduction disease from the first ECG");
  assert.ok(ctIndex > monitoringIndex, "Case 26 waits for CT and serial results before monitoring and pacing preparation");
  assert.ok(deteriorationIndex > ctIndex, "Case 26 reveals complete heart block before the protected observation period");
  assert.ok(atropineIndex > deteriorationIndex && pacingIndex > atropineIndex, "Case 26 does not begin symptomatic bradycardia treatment in sequence");
  assert.ok(captureIndex > pacingIndex, "Case 26 does not verify pacing after starting it");
  assert.match(text, /do not delay pacing for a response/);
  assert.match(text, /normal scan do not explain the fall/);
  assert.match(text, /palpable pulse at 70, blood pressure is now 118\/70/);
  assert.match(text, /adrenaline at 2 to 10 micrograms per minute/);
  assert.match(case26.clinicalSources.map((source) => source.url).join("\n"), /managing-acute-dysrhythmias|Transcutaneous-cardiac-pacing/);
});

test("Case 27 escalates suspected aortic rupture early and chooses imaging from physiology", () => {
  const case27 = cases.find((item) => item.id === "case-027");
  assert.ok(case27, "Case 27 is missing");

  const text = case27.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const historyIndex = text.indexOf("missed vascular follow-up");
  const earlyEscalationIndex = text.indexOf("alert vascular surgery, anaesthesia and theatre");
  const ultrasoundIndex = text.indexOf("Ultrasound shows a 74-millimetre infrarenal aortic aneurysm");
  const diagnosisIndex = text.indexOf("Rupture of this abdominal aortic aneurysm is the leading diagnosis");
  const conditionalCtaIndex = text.indexOf("CT angiography is considered only with the vascular team");
  const deteriorationIndex = text.indexOf("blood pressure 74/42");
  const bloodIndex = text.indexOf("Start warmed blood components");
  const bypassCtIndex = text.indexOf("CT angiography unsafe");

  assert.ok(historyIndex >= 0 && earlyEscalationIndex > historyIndex, "Case 27 does not escalate after the decisive history");
  assert.ok(ultrasoundIndex > earlyEscalationIndex && diagnosisIndex > ultrasoundIndex, "Case 27 uses ultrasound as a gate before alerting the team or labels rupture before findings");
  assert.ok(conditionalCtaIndex > diagnosisIndex && deteriorationIndex > conditionalCtaIndex, "Case 27 omits the stable-enough CTA fork before deterioration");
  assert.ok(bloodIndex > deteriorationIndex && bypassCtIndex > bloodIndex, "Case 27 does not use blood-led resuscitation before bypassing unsafe CT");
  assert.match(text, /Neither microscopic blood nor absence of a palpable mass excludes it/);
  assert.match(text, /cannot exclude retroperitoneal rupture/);
  assert.match(text, /without waiting for haemoglobin to fall/);
  assert.match(text, /Avoid large crystalloid loads and do not normalise blood pressure before control/);
  assert.match(case27.clinicalSources.map((source) => source.url).join("\n"), /219040|ejvs[.]2023[.]11[.]002/);
});

test("Case 28 obtains arterial imaging before normal lactate or a soft abdomen can reassure", () => {
  const case28 = cases.find((item) => item.id === "case-028");
  assert.ok(case28, "Case 28 is missing");

  const text = case28.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const anticoagulantIndex = text.indexOf("stopped apixaban four days ago");
  const mismatchIndex = text.indexOf("pain greatly out of proportion");
  const ctaRequestIndex = text.indexOf("urgent biphasic CT angiography");
  const lactateResultIndex = text.indexOf("lactate 1.8 mmol/L");
  const noReassuranceIndex = text.indexOf("normal early lactate does not exclude bowel ischaemia");
  const occlusionIndex = text.indexOf("embolic occlusion of the superior mesenteric artery");
  const heparinIndex = text.indexOf("Start full-dose intravenous unfractionated heparin without avoidable delay");
  const revascularisationIndex = text.indexOf("Urgent endovascular revascularisation is preferred");

  assert.ok(anticoagulantIndex >= 0 && mismatchIndex > anticoagulantIndex, "Case 28 names the vascular pattern before eliciting embolic risk");
  assert.ok(ctaRequestIndex > mismatchIndex && lactateResultIndex > ctaRequestIndex, "Case 28 waits for laboratory results before requesting CTA");
  assert.ok(noReassuranceIndex > lactateResultIndex && occlusionIndex > noReassuranceIndex, "Case 28 is falsely reassured by normal early lactate");
  assert.ok(heparinIndex > occlusionIndex && revascularisationIndex > heparinIndex, "Case 28 does not sequence contraindication review before anticoagulation and reperfusion");
  assert.match(text, /suspected mesenteric ischaemia justifies contrast despite acute kidney injury/);
  assert.match(text, /no oral contrast/);
  assert.match(text, /Deterioration, uncertain viability, or failed or unavailable endovascular treatment requires laparotomy/);
  assert.match(case28.clinicalSources.map((source) => source.url).join("\n"), /s13017-022-00443-x|emergency-laparotomy/);
});

test("Case 29 does not let a negative plain film delay source control for peritonitis", () => {
  const case29 = cases.find((item) => item.id === "case-029");
  assert.ok(case29, "Case 29 is missing");

  const text = case29.run.sections
    .flatMap((section) => section.turns)
    .flatMap((turn) => turn.lines)
    .map((line) => line.text)
    .join("\n");
  const interpretationIndex = text.indexOf("suggest a perforated peptic ulcer");
  const antibioticsIndex = text.indexOf("Give broad-spectrum intravenous antibiotics now");
  const ctRequestIndex = text.indexOf("CT abdomen and pelvis with intravenous contrast now");
  const negativeFilmIndex = text.indexOf("Erect chest X-ray shows no visible free gas");
  const deteriorationIndex = text.indexOf("blood pressure 86/52");
  const vasopressorIndex = text.indexOf("Critical care starts noradrenaline now");
  const noDelayIndex = text.indexOf("Do not wait for CT");
  const sourceControlIndex = text.indexOf("within three hours in septic shock");

  assert.ok(interpretationIndex >= 0 && antibioticsIndex > interpretationIndex, "Case 29 delays antibiotics after recognising a contaminated abdomen");
  assert.ok(ctRequestIndex > antibioticsIndex && negativeFilmIndex > ctRequestIndex, "Case 29 does not arrange contrast CT early or lets the plain film precede treatment");
  assert.ok(deteriorationIndex > negativeFilmIndex && vasopressorIndex > deteriorationIndex, "Case 29 starts vasopressor before persistent shock is demonstrated");
  assert.ok(noDelayIndex > vasopressorIndex && sourceControlIndex > noDelayIndex, "Case 29 waits for CT instead of progressing to source control");
  assert.match(text, /negative X-ray does not exclude perforation or overrule peritonism/i);
  assert.match(text, /Routine empirical antifungal treatment is not indicated/);
  assert.match(text, /Antibiotics cannot close the hole or clear contamination/);
  assert.match(case29.clinicalSources.map((source) => source.url).join("\n"), /emergency-laparotomy|sepsis|s13017-019-0283-9/);
});

test("Case 30 interrupts history for concealed early-pregnancy haemorrhage and does not delay operative control", () => {
  const case30 = cases.find((item) => item.id === "case-030");
  assert.ok(case30, "Case 30 is missing");

  const turns = case30.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const dangerHistoryIndex = turnIds.indexOf("c030-turn-symptom-answer");
  const primaryAssessmentIndex = turnIds.indexOf("c030-turn-primary-request");
  const remainingHistoryIndex = turnIds.indexOf("c030-turn-gyn-question");
  const positiveTestIndex = turnIds.indexOf("c030-turn-primary-findings");
  const escalationIndex = turnIds.indexOf("c030-turn-escalation");
  const bloodIndex = turnIds.indexOf("c030-turn-blood-plan");
  const ultrasoundIndex = turnIds.indexOf("c030-turn-ultrasound-results");
  const surgeryIndex = turnIds.indexOf("c030-turn-definitive-plan");

  assert.ok(dangerHistoryIndex >= 0 && primaryAssessmentIndex > dangerHistoryIndex, "Case 30 does not assess immediately after shoulder-tip pain and near-syncope emerge");
  assert.ok(remainingHistoryIndex > primaryAssessmentIndex, "Case 30 completes routine history before assessing perfusion and pregnancy");
  assert.ok(escalationIndex > positiveTestIndex && bloodIndex > escalationIndex, "Case 30 does not escalate and begin blood-led treatment after the decisive findings");
  assert.ok(ultrasoundIndex > bloodIndex && surgeryIndex > ultrasoundIndex, "Case 30 lets bedside imaging precede resuscitation or omits definitive operative control");
  assert.match(text, /I have an IUD, so I cannot be pregnant/);
  assert.match(text, /Do not wait for serial beta-hCG or formal imaging/);
  assert.match(text, /Methotrexate is inappropriate with instability and rupture/);
  assert.match(text, /RhD negative and not already sensitised[\s\S]*250 International Units[\s\S]*within 72 hours/);
  assert.match(case30.clinicalSources.map((source) => source.url).join("\n"), /Miscarriage-Ectopic-Pregnancy|g-epl/);
});

test("Case 31 treats severe hypertension and cerebral irritation before eclampsia develops", () => {
  const case31 = cases.find((item) => item.id === "case-031");
  assert.ok(case31, "Case 31 is missing");

  const turns = case31.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const findingsIndex = turnIds.indexOf("c031-turn-assessment-findings");
  const earlyTreatmentIndex = turnIds.indexOf("c031-turn-early-treatment-action");
  const resultsIndex = turnIds.indexOf("c031-turn-investigation-results");
  const seizureIndex = turnIds.indexOf("c031-turn-seizure");
  const magnesiumIndex = turnIds.indexOf("c031-turn-magnesium");
  const pressureIndex = turnIds.indexOf("c031-turn-blood-pressure");
  const fetalMonitoringIndex = turnIds.indexOf("c031-turn-treatment-action");
  const stabilisedIndex = turnIds.indexOf("c031-turn-stabilised-findings");
  const birthAssessmentIndex = turnIds.indexOf("c031-turn-fetal-request");

  assert.ok(findingsIndex >= 0 && earlyTreatmentIndex > findingsIndex && resultsIndex > earlyTreatmentIndex, "Case 31 waits for laboratory confirmation before acute treatment");
  assert.ok(seizureIndex > resultsIndex && magnesiumIndex > seizureIndex && pressureIndex > magnesiumIndex, "Case 31 does not preserve maternal-first eclampsia sequencing");
  assert.ok(fetalMonitoringIndex > pressureIndex && stabilisedIndex > fetalMonitoringIndex, "Case 31 defers fetal monitoring beyond established ABC support");
  assert.ok(birthAssessmentIndex > stabilisedIndex, "Case 31 plans birth before maternal stabilisation is demonstrated");
  assert.match(text, /magnesium sulfate 4 grams intravenously over 20 minutes/);
  assert.match(text, /Continue until 24 hours after birth or the last seizure, whichever is later/);
  assert.match(text, /maximum cumulative 80 mg, targeting below 160\/110/);
  assert.match(text, /Do not give a routine fluid load/);
  assert.match(text, /calcium gluconate 10%, 10 mL diluted in 100 mL saline intravenously over 10 minutes/);
  assert.match(text, /Caesarean is not automatic/);
  assert.match(case31.clinicalSources.map((source) => source.url).join("\n"), /SOMANZ_Hypertension|Management-of-eclampsia|acute-hypertension/);
});

test("Case 32 gives early tranexamic acid and runs resuscitation with cause-directed haemorrhage control", () => {
  const case32 = cases.find((item) => item.id === "case-032");
  assert.ok(case32, "Case 32 is missing");

  const turns = case32.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const earlyCallIndex = turnIds.indexOf("c032-turn-symptom-question");
  const shockIndex = turnIds.indexOf("c032-turn-primary-findings");
  const bloodIndex = turnIds.indexOf("c032-turn-blood-plan");
  const tranexamicIndex = turnIds.indexOf("c032-turn-antifibrinolytic");
  const toneIndex = turnIds.indexOf("c032-turn-tone-findings");
  const uterotonicIndex = turnIds.indexOf("c032-turn-tone-treatment");
  const persistentIndex = turnIds.indexOf("c032-turn-ongoing-findings");
  const theatreIndex = turnIds.indexOf("c032-turn-escalation");
  const consentIndex = turnIds.indexOf("c032-turn-theatre-consent-answer");

  assert.ok(earlyCallIndex >= 0 && shockIndex > earlyCallIndex, "Case 32 waits for measured blood loss before calling the haemorrhage team");
  assert.ok(bloodIndex > shockIndex && tranexamicIndex > bloodIndex && toneIndex > tranexamicIndex, "Case 32 delays tranexamic acid until after cause-directed treatment");
  assert.ok(uterotonicIndex > toneIndex && persistentIndex > uterotonicIndex && theatreIndex > persistentIndex, "Case 32 does not escalate persistent atony from compression and medicines to theatre");
  assert.ok(consentIndex > theatreIndex, "Case 32 omits explicit consent for anaesthesia, uterine exploration and possible surgery");
  assert.match(text, /second 1-gram dose/);
  assert.match(text, /profoundly hypovolaemic[\s\S]*controlled infusion/);
  assert.match(text, /Avoid carboprost because asthma creates serious bronchospasm risk/);
  assert.match(text, /explore the uterus to confirm the cavity is empty and intact before balloon tamponade/);
  assert.match(text, /Your baby is being cared for and assessed/);
  assert.match(case32.clinicalSources.map((source) => source.url).join("\n"), /g-pph|Management-Postpartum-Haemorrhage/);
});

test("Case 33 treats paediatric septic shock before rash, hypotension or lumbar puncture confirmation", () => {
  const case33 = cases.find((item) => item.id === "case-033");
  assert.ok(case33, "Case 33 is missing");

  const turns = case33.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const firstFindingsIndex = turnIds.indexOf("c033-turn-primary-findings");
  const interpretationIndex = turnIds.indexOf("c033-turn-interpretation");
  const antibioticIndex = turnIds.indexOf("c033-turn-antibiotic-plan");
  const fluidIndex = turnIds.indexOf("c033-turn-fluid-plan");
  const deteriorationIndex = turnIds.indexOf("c033-turn-deterioration");
  const vasoactiveIndex = turnIds.indexOf("c033-turn-vasoactive-plan");
  const lumbarPunctureIndex = turnIds.indexOf("c033-turn-lp-plan");

  assert.ok(firstFindingsIndex >= 0 && interpretationIndex > firstFindingsIndex, "Case 33 labels sepsis before assessing the sick-infant pattern");
  assert.ok(antibioticIndex > interpretationIndex && fluidIndex > antibioticIndex, "Case 33 does not begin antibiotics and measured fluid support in sequence");
  assert.ok(deteriorationIndex > fluidIndex && vasoactiveIndex > deteriorationIndex, "Case 33 starts vasoactive support before persistent shock is demonstrated");
  assert.ok(lumbarPunctureIndex > vasoactiveIndex, "Case 33 prioritises lumbar puncture over circulation support");
  assert.match(text, /Preserved blood pressure, vaccination and no rash or neck stiffness do not exclude it/);
  assert.match(text, /ceftriaxone 100 milligrams per kilogram, 650 milligrams/);
  assert.match(text, /Give 10 millilitres per kilogram of balanced crystalloid, 65 millilitres/);
  assert.match(text, /white count and modest CRP do not exclude early infection/);
  assert.match(text, /Do not perform lumbar puncture during shock or reduced consciousness/);
  assert.match(case33.clinicalSources.map((source) => source.url).join("\n"), /acute_meningococcal_disease|paediatric-clinical-guidelines\/sepsis|Meningitis_encephalitis|Lumbar_puncture/);
});

test("Case 34 recognises quieter stridor with fatigue as life-threatening upper-airway obstruction", () => {
  const case34 = cases.find((item) => item.id === "case-034");
  assert.ok(case34, "Case 34 is missing");

  const turns = case34.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const findingsIndex = turnIds.indexOf("c034-turn-primary-findings");
  const firstTreatmentIndex = turnIds.indexOf("c034-turn-treatment");
  const deteriorationIndex = turnIds.indexOf("c034-turn-deterioration");
  const fatigueIndex = turnIds.indexOf("c034-turn-fatigue-recognition");
  const repeatTreatmentIndex = turnIds.indexOf("c034-turn-life-threatening-care");
  const responseIndex = turnIds.indexOf("c034-turn-response");

  assert.ok(findingsIndex >= 0 && firstTreatmentIndex > findingsIndex, "Case 34 treats before severe croup findings are provided");
  assert.ok(deteriorationIndex > firstTreatmentIndex && fatigueIndex > deteriorationIndex, "Case 34 does not reinterpret quieter stridor after the child tires");
  assert.ok(repeatTreatmentIndex > fatigueIndex && responseIndex > repeatTreatmentIndex, "Case 34 does not repeat treatment and reassess in sequence");
  assert.match(text, /will not force her mouth open or lie her down/);
  assert.match(text, /nebulised adrenaline 5 milligrams, equal to 5 millilitres of undiluted 1:1000 solution/);
  assert.match(text, /dexamethasone 0.6 milligrams per kilogram once, which is 8.4 milligrams/);
  assert.match(text, /Quieter stridor with drowsiness, poor effort, reduced air entry and hypoxaemia means exhaustion, not recovery/);
  assert.match(text, /at least three hours after the last dose/);
  assert.match(case34.clinicalSources.map((source) => source.url).join("\n"), /Croup_Laryngotracheobronchitis|paediatric-clinical-guidelines\/croup/);
});

test("Case 35 counts home midazolam and moves to ventilation and second-line treatment after two doses", () => {
  const case35 = cases.find((item) => item.id === "case-035");
  assert.ok(case35, "Case 35 is missing");

  const turns = case35.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const homeDoseIndex = turnIds.indexOf("c035-turn-medication-history");
  const hospitalDoseIndex = turnIds.indexOf("c035-turn-first-line-treatment");
  const persistentIndex = turnIds.indexOf("c035-turn-persistent-findings");
  const ventilationIndex = turnIds.indexOf("c035-turn-respiratory-support");
  const secondLineIndex = turnIds.indexOf("c035-turn-second-line");
  const resolutionIndex = turnIds.indexOf("c035-turn-resolution-findings");

  assert.ok(homeDoseIndex >= 0 && hospitalDoseIndex > homeDoseIndex, "Case 35 gives hospital benzodiazepine before counting the home dose");
  assert.ok(persistentIndex > hospitalDoseIndex && ventilationIndex > persistentIndex, "Case 35 escalates before five-minute reassessment or delays ventilation after hypoventilation");
  assert.ok(secondLineIndex > ventilationIndex && resolutionIndex > secondLineIndex, "Case 35 does not move from two benzodiazepine doses to second-line treatment");
  assert.match(text, /home midazolam counts as dose one/);
  assert.match(text, /3.75 milligrams[\s\S]*dose two and the final benzodiazepine/);
  assert.match(text, /Do not give a third benzodiazepine/);
  assert.match(text, /levetiracetam 60 milligrams per kilogram: 1.5 grams intravenously over five minutes/);
  assert.match(text, /two-person bag-mask ventilation with 100% oxygen/);
  assert.match(case35.clinicalSources.map((source) => source.url).join("\n"), /Seizures_acute_management|status-epilepticus|paediatric-advanced-life-support/);
});

test("Case 36 restores ventilation before titrated naloxone and anticipates recurrent respiratory depression", () => {
  const case36 = cases.find((item) => item.id === "case-036");
  assert.ok(case36, "Case 36 is missing");

  const turns = case36.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const findingsIndex = turnIds.indexOf("c036-turn-primary-findings");
  const ventilationIndex = turnIds.indexOf("c036-turn-ventilation");
  const naloxoneIndex = turnIds.indexOf("c036-turn-naloxone");
  const responseIndex = turnIds.indexOf("c036-turn-naloxone-response");
  const recurrenceIndex = turnIds.indexOf("c036-turn-recurrence");
  const recurrencePlanIndex = turnIds.indexOf("c036-turn-recurrence-plan");

  assert.ok(findingsIndex >= 0 && ventilationIndex > findingsIndex, "Case 36 supports breathing before respiratory failure is demonstrated");
  assert.ok(naloxoneIndex > ventilationIndex && responseIndex > naloxoneIndex, "Case 36 prioritises naloxone over ventilation or omits reassessment");
  assert.ok(recurrenceIndex > responseIndex && recurrencePlanIndex > recurrenceIndex, "Case 36 misses re-sedation after temporary reversal");
  assert.match(text, /Ventilation comes before naloxone/);
  assert.match(text, /target is ventilation, not wakefulness/);
  assert.match(text, /Modified-release oxycodone outlasts naloxone/);
  assert.match(text, /commence a naloxone infusion under toxicology guidance/);
  assert.match(case36.clinicalSources.map((source) => source.url).join("\n"), /first-aid-management-of-opioid-overdose|DTP_Naloxone|adult\/unconscious-person/);
});

test("Case 37 starts acetylcysteine before a delayed level and uses the nomogram only when valid", () => {
  const case37 = cases.find((item) => item.id === "case-037");
  assert.ok(case37, "Case 37 is missing");

  const turns = case37.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const doseIndex = turnIds.indexOf("c037-turn-dose-answer");
  const treatmentIndex = turnIds.indexOf("c037-turn-treatment-start");
  const resultIndex = turnIds.indexOf("c037-turn-results");
  const nomogramIndex = turnIds.indexOf("c037-turn-nomogram");
  const safetyIndex = turnIds.indexOf("c037-turn-safety-plan");

  assert.ok(doseIndex >= 0 && treatmentIndex > doseIndex, "Case 37 treats before reconstructing dose, formulation and time");
  assert.ok(resultIndex > treatmentIndex && nomogramIndex > resultIndex, "Case 37 waits for the delayed level or interprets the nomogram before receiving it");
  assert.ok(safetyIndex > nomogramIndex, "Case 37 replaces medical stabilisation with an early psychosocial assessment");
  assert.match(text, /Because more than eight hours have passed, start intravenous acetylcysteine immediately/);
  assert.match(text, /200 milligrams per kilogram over four hours[\s\S]*100 milligrams per kilogram over sixteen hours/);
  assert.match(text, /nomogram is valid only because this was a single, timed immediate-release ingestion/);
  assert.match(text, /psychosocial assessment and safe follow-up/);
  assert.match(case37.clinicalSources.map((source) => source.url).join("\n"), /updated-guidelines-management-paracetamol-poisoning|CPG_The-suicidal_patient/);
});

test("Case 38 treats tricyclic sodium-channel cardiotoxicity with alkalinisation before generic rhythm drugs", () => {
  const case38 = cases.find((item) => item.id === "case-038");
  assert.ok(case38, "Case 38 is missing");

  const turns = case38.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const ecgIndex = turnIds.indexOf("c038-turn-ecg-findings");
  const bicarbonateIndex = turnIds.indexOf("c038-turn-initial-treatment");
  const deteriorationIndex = turnIds.indexOf("c038-turn-deterioration");
  const seizureIndex = turnIds.indexOf("c038-turn-seizure-airway");
  const responseIndex = turnIds.indexOf("c038-turn-response");
  const vasopressorIndex = turnIds.indexOf("c038-turn-vasopressor");

  assert.ok(ecgIndex >= 0 && bicarbonateIndex > ecgIndex, "Case 38 gives alkalinisation before cardiotoxicity is demonstrated");
  assert.ok(deteriorationIndex > bicarbonateIndex && seizureIndex > deteriorationIndex, "Case 38 fails to reassess before treating the seizure and wider QRS");
  assert.ok(responseIndex > seizureIndex && vasopressorIndex > responseIndex, "Case 38 starts vasopressor support before reassessing alkalinisation and fluid response");
  assert.match(text, /QRS duration 132 milliseconds and a terminal R wave in aVR/);
  assert.match(text, /100 millimoles, or 100 millilitres, of 8.4% sodium bicarbonate/);
  assert.match(text, /Do not use phenytoin/);
  assert.match(text, /Avoid beta-blockers and amiodarone/);
  assert.match(case38.clinicalSources.map((source) => source.url).join("\n"), /Tricyclic%20Guideline|Serum%20alkalinisation|austin[.]org[.]au\/poisons/);
});

test("Case 39 identifies serotonin toxicity through clonus and controls muscle-generated hyperthermia", () => {
  const case39 = cases.find((item) => item.id === "case-039");
  assert.ok(case39, "Case 39 is missing");

  const turns = case39.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const findingsIndex = turnIds.indexOf("c039-turn-primary-findings");
  const interpretationIndex = turnIds.indexOf("c039-turn-interpretation");
  const treatmentIndex = turnIds.indexOf("c039-turn-initial-treatment");
  const deteriorationIndex = turnIds.indexOf("c039-turn-deterioration");
  const severePlanIndex = turnIds.indexOf("c039-turn-severe-management");
  const responseIndex = turnIds.indexOf("c039-turn-response");

  assert.ok(findingsIndex >= 0 && interpretationIndex > findingsIndex, "Case 39 labels serotonin toxicity before the neuromuscular pattern is examined");
  assert.ok(treatmentIndex > interpretationIndex && deteriorationIndex > treatmentIndex, "Case 39 skips initial sedation and cooling or fails to reassess");
  assert.ok(severePlanIndex > deteriorationIndex && responseIndex > severePlanIndex, "Case 39 escalates before severe hyperthermia or omits response assessment");
  assert.match(text, /ocular clonus and sustained ankle clonus/);
  assert.match(text, /titrated intravenous diazepam[\s\S]*cool with mist, fans and ice packs/);
  assert.match(text, /Antipyretics do not help because heat comes from muscle activity/);
  assert.match(text, /use non-depolarising paralysis/);
  assert.match(case39.clinicalSources.map((source) => source.url).join("\n"), /Serotonin%20Toxicity|Serotonin_toxicity|opioids-and-antidepressants/);
});

test("Case 40 preserves pressure immobilisation until controlled removal and treats systemic envenoming, not a kit result", () => {
  const case40 = cases.find((item) => item.id === "case-040");
  assert.ok(case40, "Case 40 is missing");

  const turns = case40.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const firstAidIndex = turnIds.indexOf("c040-turn-first-aid");
  const initialResultsIndex = turnIds.indexOf("c040-turn-initial-results");
  const removalPlanIndex = turnIds.indexOf("c040-turn-removal-plan");
  const removalIndex = turnIds.indexOf("c040-turn-removal-action");
  const deteriorationIndex = turnIds.indexOf("c040-turn-deterioration");
  const antivenomIndex = turnIds.indexOf("c040-turn-interpretation");

  assert.ok(firstAidIndex >= 0 && initialResultsIndex > firstAidIndex, "Case 40 removes pressure immobilisation before assessment and initial laboratory testing");
  assert.ok(removalPlanIndex > initialResultsIndex && removalIndex > removalPlanIndex, "Case 40 removes the bandage before controlled readiness is stated");
  assert.ok(deteriorationIndex > removalIndex && antivenomIndex > deteriorationIndex, "Case 40 gives antivenom before systemic envenoming is demonstrated");
  assert.match(text, /Do not wash, cut or suck the site, apply an arterial tourniquet, walk, or handle the animal/);
  assert.match(text, /venom-detection kit does not diagnose envenoming/);
  assert.match(text, /Remove the bandage only now, with full monitoring/);
  assert.match(text, /systemic envenoming with venom-induced consumption coagulopathy/);
  assert.match(text, /Do not repeat it solely for an abnormal INR/);
  assert.match(case40.clinicalSources.map((source) => source.url).join("\n"), /first-aid-management-of-australian-snake-bite|pressure-immobilisation-technique|Emergency-Department-Guidelines\/Snake-bite/);
});

test("Pattern 13 uses a two-case stable-versus-changed trajectory ladder", () => {
  const patternCases = cases.filter((item) => item.pattern?.id === 13);
  assert.deepEqual(Array.from(patternCases, (item) => item.id), ["case-041", "case-042"]);
  patternCases.forEach((item) => {
    assert.equal(item.phase.id, 2);
    assert.equal(item.phase.title, "Dangerous Mimics");
    assert.equal(item.reasoningAvailable, false);
    assert.equal(item.status, "exam_complete");
  });
});

test("Case 41 confirms an unchanged exertional pattern before selecting outpatient assessment", () => {
  const case41 = cases.find((item) => item.id === "case-041");
  assert.ok(case41, "Case 41 is missing");

  const turns = case41.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const trajectoryIndex = turnIds.indexOf("c041-turn-pattern-answer");
  const restIndex = turnIds.indexOf("c041-turn-rest-answer");
  const diagnosisIndex = turnIds.indexOf("c041-turn-diagnosis");
  const referralIndex = turnIds.indexOf("c041-turn-investigation-plan");
  const safetyIndex = turnIds.indexOf("c041-turn-safety-net");

  assert.ok(trajectoryIndex >= 0 && restIndex > trajectoryIndex, "Case 41 does not establish stability through trajectory and rest symptoms");
  assert.ok(diagnosisIndex > restIndex && referralIndex > diagnosisIndex, "Case 41 names stable angina or plans testing before the stable pattern is established");
  assert.ok(safetyIndex > referralIndex, "Case 41 omits escalation advice after the outpatient plan");
  assert.match(text, /trigger, strength, duration and frequency have not changed/);
  assert.match(text, /normal resting ECG does not exclude coronary artery disease/);
  assert.match(text, /refer you to cardiology or a rapid-access chest-pain service/);
  assert.match(text, /Call Triple Zero immediately if symptoms are severe or worsening/);
  assert.match(text, /new rest pain, a lower activity trigger,[\s\S]*same-day medical assessment/);
  assert.doesNotMatch(text, /routine community troponin|private car to hospital/);
  assert.match(case41.clinicalSources.map((source) => source.url).join("\n"), /q=57360|cvdcheck[.]org[.]au|chronic-coronary-syndromes|heart-attack-warning-signs/);
});

test("Case 42 reclassifies changed angina despite absent pain and a normal first ECG", () => {
  const case42 = cases.find((item) => item.id === "case-042");
  assert.ok(case42, "Case 42 is missing");

  const turns = case42.run.sections.flatMap((section) => section.turns);
  const turnIds = turns.map((turn) => turn.id);
  const text = turns.flatMap((turn) => turn.lines).map((line) => line.text).join("\n");
  const restIndex = turnIds.indexOf("c042-turn-rest-answer");
  const escalationIndex = turnIds.indexOf("c042-turn-escalation");
  const ecgIndex = turnIds.indexOf("c042-turn-ecg-result");
  const ecgInterpretationIndex = turnIds.indexOf("c042-turn-ecg-interpretation");
  const contraindicationIndex = turnIds.indexOf("c042-turn-medicine-answer");
  const aspirinIndex = turnIds.indexOf("c042-turn-aspirin-action");
  const handoverIndex = turnIds.indexOf("c042-turn-handover");

  assert.ok(restIndex >= 0 && escalationIndex > restIndex, "Case 42 escalates before the changed trajectory is elicited");
  assert.ok(ecgIndex > escalationIndex, "Case 42 waits for the ECG before arranging transfer");
  assert.ok(contraindicationIndex > escalationIndex && aspirinIndex > contraindicationIndex, "Case 42 gives aspirin before screening contraindications");
  assert.ok(aspirinIndex < ecgIndex && ecgInterpretationIndex > ecgIndex, "Case 42 delays aspirin for the ECG or treats a normal tracing as exclusion");
  assert.ok(handoverIndex > aspirinIndex, "Case 42 omits transfer of the changed pattern and treatment");
  assert.match(text, /normal first ECG does not exclude acute coronary syndrome/);
  assert.match(text, /oxygen saturation is 97%, so you do not need oxygen/);
  assert.match(text, /do not need GTN while pain-free/);
  assert.match(text, /serial ECGs and high-sensitivity troponin in a validated pathway/);
  assert.match(text, /Do not drive or travel by private car/);
  assert.match(case42.clinicalSources.map((source) => source.url).join("\n"), /ACS-Guideline[.]pdf|guideline-14-1|guideline-14-2/);
});

test("every case keeps the station stem clinically neutral", () => {
  cases.forEach((item) => {
    const stemAndTasks = JSON.stringify(item.stem);
    assert.doesNotMatch(
      stemAndTasks,
      /\burgent\b|\bimmediate\b|\bsame-day\b|\bunstable\b|\bmassive\b|\bprofuse\b|\bshock\b|\bsepsis\b|\bseptic\b|\bmeningitis\b|\bmeningococcal\b|\bcroup\b|upper airway obstruction|\bstatus epilepticus\b|\bprolonged seizure\b|ongoing convulsion|\bmidazolam\b|\blevetiracetam\b|\bbenzodiazepine\b|nebulised adrenaline|\bdexamethasone\b|\bintubat(?:e|ion)\b|\bneutropeni(?:a|c)\b|\bhaemorrhag(?:e|ic)\b|\bcardiogenic\b|\bneurogenic\b|\bmyocarditis\b|\bvariceal\b|\bulcer\b|\bapixaban\b|\banticoagulant\b|\bhaematemesis\b|\bmelaena\b|\bhaematochezia\b|coffee[- ]ground|\bportal hypertension\b|\bcirrhosis\b|\bupper gastrointestinal\b|\blower gastrointestinal\b|active bleeding|major bleeding|resuscitation|ambulance|vasopressor|noradrenaline|lactate|major haemorrhage|pelvic binder|blood components?|transfus(?:e|ion)|endoscop|angiograph|embolisation|gastroenterology|interventional radiology|factor Xa reversal|prothrombin complex concentrate|mechanical circulatory support|spinal motion restriction|intensive-care clinician|receiving emergency clinician|trauma surgeon|\bdiabetic ketoacidosis\b|\beuglycaemic diabetic ketoacidosis\b|\bDKA\b|\bhyperosmolar hyperglyc(?:a|e)emic state\b|\bHHS\b|\bhyperkal(?:a|e)emia\b|\bketonaemia\b|high[- ]anion[- ]gap metabolic acidosis|DKA pathway|fixed[- ]rate intravenous insulin|insulin[- ]glucose infusion|potassium replacement|calcium (?:gluconate|chloride)|peaked T waves?|widened QRS|sine[- ]wave pattern|hypertrophic cardiomyopathy|\bHCM\b|ventricular tachycardia|\bVT\b|complete (?:heart|atrioventricular) block|third[- ]degree (?:heart|atrioventricular) block|bifascicular block|high[- ]risk (?:cardiac )?syncope|sudden[- ]death risk|synchronised cardioversion|transcutaneous pacing|pacemaker|pacing pads|defibrillation pads|monitored transfer|competitive sport restriction|ruptured (?:abdominal )?aortic aneurysm|\babdominal aortic aneurysm\b|\bAAA\b|\bmesenteric ischaemia\b|\bperforated (?:peptic )?ulcer\b|\bperforated viscus\b|\bperitonitis\b|\bpneumoperitoneum\b|\bfree (?:intraperitoneal )?(?:air|gas)\b|\bvascular surgery\b|\bemergency laparotomy\b|\bsource control\b|\bbroad-spectrum antibiotics\b|\bnil by mouth\b|\bCT angiograph(?:y|ic)\b|\bCTA\b|\bbedside aortic ultrasound\b|\bectopic pregnancy\b|\bruptured ectopic\b|\bpre[- ]?eclampsia\b|\beclampsia\b|\bpostpartum haemorrhage\b|\bPPH\b|magnesium sul(?:f|ph)ate|\buterotonic\b|\boxytocin\b|\bergometrine\b|\bcarboprost\b|\bbimanual compression\b|\bballoon tamponade\b|\bfetal monitoring\b|\bCTG\b|\bemergency birth\b|\blaparoscop(?:y|ic)\b|\blaparotom(?:y|ic)\b|\bgynaecolog(?:y|ist|ical)\b|controlled resuscitation|blood-led|\bopioid\b|\bnaloxone\b|\bparacetamol poisoning\b|\boverdose\b|\bpoisoning\b|\btoxicity\b|\btricyclic\b|\bamitriptyline\b|\bserotonin toxicity\b|\bsnake ?bite\b|\bantivenom\b|\bacetylcysteine\b|\bsodium bicarbonate\b|\bcyproheptadine\b|\bclonus\b|pressure immobilisation|venom detection kit|(?:blood|capillary) (?:glucose|ketones?) (?:was|is|of) [0-9]|(?:serum )?potassium (?:was|is|of) [0-9]|(?:venous )?pH (?:was|is|of) [0-9]|(?:serum )?osmolality (?:was|is|of) [0-9]|oxygen saturation (?:was|is) [0-9]|blood pressure (?:was|is) [0-9]|respiratory rate (?:was|is) [0-9]|pulse (?:was|is) [0-9]|temperature (?:was|is) [0-9]|haemoglobin (?:was|is) [0-9]|at triage|while waiting for assessment|become drowsy|obtain (?:an? )?ECG|give oxygen|start oxygen|high-concentration oxygen|oxygen plan|emergency medicines|no imaging has been performed|not required to physically perform|sudden severe chest pain extending into (?:his|her|the) upper back/i,
      `${item.id} stem or tasks disclose the diagnosis or management priority`
    );
  });
});

test("patient first names are varied across the current case set", () => {
  const firstNames = cases.map((item) => {
    const stemText = item.stem.lines.map((line) => line.text).join(" ");
    const match = stemText.match(/\b(?:Mr|Mrs|Ms|Master|Miss) ([A-Za-z]+(?:-[A-Za-z]+)?)/);
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

test("Case 1 preserves the audited atomic and time-critical ACS sequence", () => {
  const lines = caseData.run.sections.flatMap((section) => section.turns.flatMap((turn) => turn.lines));
  const byId = new Map(lines.map((line) => [line.id, line.text]));
  const index = (id) => lines.findIndex((line) => line.id === id);

  assert.equal(byId.get("run-pneumothorax"), "Is the discomfort worse when you breathe in?");
  assert.equal(byId.get("run-pneumothorax-answer"), "No, breathing does not change it.");
  assert.equal(byId.get("run-dissection-answer"), "No. It built up over a few minutes.");
  assert.match(byId.get("run-early-escalation-action"), /begins continuous cardiac monitoring/);
  assert.ok(index("run-associated-answer") < index("run-early-escalation-action"));
  assert.ok(index("run-early-escalation-action") < index("run-dissection"));
  assert.ok(index("run-dissection-answer") < index("run-allergy"));
  assert.ok(index("run-bleeding-answer") < index("run-aspirin"));
  assert.ok(index("run-aspirin-action") < index("run-pe"));
  assert.ok(index("run-pneumothorax-answer") < index("run-history"));
  assert.ok(index("run-summary") < index("run-time-prompt"));
  assert.ok(index("run-gtn") < index("run-gtn-consent"));
  assert.ok(index("run-gtn-consent") < index("run-gtn-action"));
  assert.match(byId.get("run-gtn-action"), /gives one sublingual dose/);
  assert.equal(byId.has("run-handover"), false);
  assert.equal(byId.get("run-closing"), "That is correct. I will stay with you, continue monitoring and keep you updated while we wait.");
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

test("the approved Stem and corrected Full Run remain byte-for-byte locked", () => {
  const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.equal(digest(caseData.stem), "6bfb9fcda2a004205ddf0076b19802c2592b143129f8381ec30cadaf25058875");
  assert.equal(digest(caseData.run), "d0be5c8e7843a7e4de545a53b008e7c270773ad5be61b9bb560f1b39cc1c6a66");
});

test("every Hint resolves to an exact phrase and a current source link", () => {
  const sourceIds = new Set(caseData.sources.map((source) => source.id));
  assert.ok(caseData.hints.length >= 34, "Case 1 needs a start-to-finish reasoning journey");

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

test("Hints cover the requested stem, tasks, dialogue, findings and investigations", () => {
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
    "run-examination-action",
    "run-exam-findings",
    "run-ecg-plan",
    "run-ecg-result",
    "run-aspirin",
    "run-oxygen",
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
  const radiationText = radiation.say.concat(radiation.deeper || []).join(" ");
  const autonomicText = autonomic.say.concat(autonomic.deeper || []).join(" ");
  assert.match(radiationText, /overlapping areas of the spinal cord/i);
  assert.match(radiationText, /pulmonary embolism.*irritates pleura/i);
  assert.match(radiationText, /dissection.*aortic wall/i);
  assert.match(autonomicText, /Sympathetic output/);
  assert.match(autonomicText, /does not identify the affected wall/);
  assert.match(autonomicText, /not explained simply/);
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
  assert.equal(age.say[0], "At 60 with new chest discomfort, a coronary cause deserves early attention. Age changes the starting likelihood; the symptom pattern still decides what happens next.");
  assert.equal(age.pause, "Consider the heart early, but do not decide yet.");

  const presentation = caseData.hints.find((hint) => hint.id === "hint-urgent-booking");
  assert.equal(presentation.say[0], "The booking itself tells me neither the severity nor the cause.");
  assert.equal(presentation.pause, "Use only the urgency information the stem provides.");
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
  ["spoken", "action", "finding", "investigation"].forEach((kind) => assert.ok(kinds.has(kind)));
  assert.equal(kinds.has("handover"), false, "Case 1 adds a handover that is absent from the station tasks");
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
