const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");

function filesIn(directory) {
  return fs.readdirSync(path.join(root, "data", directory))
    .filter((file) => /^case-[0-9]+[.]js$/.test(file))
    .sort();
}

test("new cases and Emergency Explore register as separate collections", () => {
  const context = { window: {} };
  vm.createContext(context);

  filesIn("current-cases").forEach((file) => {
    vm.runInContext(fs.readFileSync(path.join(root, "data", "current-cases", file), "utf8"), context);
  });
  filesIn("cases").forEach((file) => {
    vm.runInContext(fs.readFileSync(path.join(root, "data", "cases", file), "utf8"), context);
  });

  assert.equal(context.window.AMC_CURRENT_CASES.length, filesIn("current-cases").length);
  assert.equal(context.window.AMC_CASES.length, filesIn("cases").length);
  assert.equal(context.window.AMC_CURRENT_CASES[0].id, "case-001");
  assert.equal(context.window.AMC_CASES[0].id, "case-001");
  assert.notEqual(context.window.AMC_CURRENT_CASES[0].title, context.window.AMC_CASES[0].title);
});

test("the source shell and build discover both learner collections", () => {
  const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const appSource = fs.readFileSync(path.join(root, "assets", "js", "app.js"), "utf8");
  const buildSource = fs.readFileSync(path.join(root, "scripts", "build-pages.js"), "utf8");

  assert.match(indexSource, /data\/current-cases\/case-001[.]js/);
  assert.match(indexSource, /data\/cases\/case-001[.]js/);
  assert.ok(indexSource.indexOf("data/current-cases/case-001.js") < indexSource.indexOf("data/cases/case-001.js"));
  assert.match(appSource, /window[.]AMC_CURRENT_CASES/);
  assert.match(appSource, /window[.]AMC_CASES/);
  assert.match(appSource, /Emergency Explore/);
  assert.match(appSource, /query[.]get\("collection"\)/);
  assert.match(appSource, /query[.]get\("case"\)/);
  assert.match(buildSource, /discoverCaseAssets\("current-cases"\)/);
  assert.match(buildSource, /discoverCaseAssets\("cases"\)/);
});

