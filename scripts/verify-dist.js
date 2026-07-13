const fs = require("fs");
const path = require("path");

const dist = path.resolve(__dirname, "..", "dist");
const root = path.resolve(__dirname, "..");
const expectedCaseIds = fs.readdirSync(path.join(root, "data", "cases"))
  .filter((file) => /^case-[0-9]+[.]js$/.test(file))
  .sort()
  .map((file) => path.basename(file, ".js"));
let failed = false;

function fail(message) {
  failed = true;
  console.error(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(dist, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(dist, relativePath));
}

["index.html", "404.html", "version.json", ".nojekyll"].forEach((file) => {
  if (!exists(file)) fail(`Missing built file: ${file}`);
});

if (!failed) {
  const index = read("index.html");
  const notFound = read("404.html");
  const version = JSON.parse(read("version.json"));
  const bundles = version.assets.map((asset) => read(asset.output)).join("\n");
  const allLearnerText = index + "\n" + bundles;

  if (version.productModel !== "multi-case-optional-reasoning") fail("Wrong product model in version.json");
  if (version.defaultCaseId !== "case-001") fail("Case 1 is not the default case");
  if (JSON.stringify(version.caseIds) !== JSON.stringify(expectedCaseIds)) {
    fail("Built case registry is incomplete or out of order");
  }
  if (!index.includes(`<base href="${version.basePath}">`)) fail("Built base path is missing");
  if (!notFound.includes(`<base href="${version.basePath}">`)) fail("404 base path is missing");

  version.assets.forEach((asset) => {
    if (!exists(asset.output)) fail(`Missing fingerprinted asset: ${asset.output}`);
    if (!/[.][a-f0-9]{12}[.](?:js|css)$/.test(asset.output)) fail(`Asset is not fingerprinted: ${asset.output}`);
    if (!index.includes(asset.url)) fail(`Shell does not reference asset: ${asset.url}`);
  });

  [
    "Exam",
    "Reasoning",
    "Stem",
    "Full Run",
    "(*)",
    "Chest discomfort after lunch",
    "Sudden chest and back pain",
    "Sharp chest discomfort after dinner",
    "Severe breathlessness after a motorcycle collision",
    "Worsening breathlessness despite reliever use",
    "Sudden breathlessness and light-headedness",
    "Cough and worsening breathlessness over three days",
    "Worsening breathlessness and drowsiness with COPD",
    "Sudden facial droop, arm weakness and speech difficulty"
  ].forEach((term) => {
    if (!allLearnerText.includes(term)) fail(`Built site is missing required term: ${term}`);
  });

  ["Custom GPT", "Timed run", "Progress ring", "Choose one Hint", "migration_only"].forEach((term) => {
    if (allLearnerText.includes(term)) fail(`Built site contains retired production term: ${term}`);
  });

  if (/[?&]v=/.test(index)) fail("Query-string cache busting remains in built HTML");
}

if (failed) process.exitCode = 1;
else console.log("Multi-case dist verification passed.");
