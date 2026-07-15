const fs = require("fs");
const path = require("path");

const dist = path.resolve(__dirname, "..", "dist");
const root = path.resolve(__dirname, "..");
function expectedCaseIds(directory) {
  return fs.readdirSync(path.join(root, "data", directory))
    .filter((file) => /^case-[0-9]+[.]js$/.test(file))
    .sort()
    .map((file) => path.basename(file, ".js"));
}

const expectedCurrentCaseIds = expectedCaseIds("current-cases");
const expectedEmergencyExploreCaseIds = expectedCaseIds("cases");
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
  if (version.collectionModel !== "current-and-emergency-explore") fail("Wrong collection model in version.json");
  if (version.defaultCollection !== "current") fail("New cases are not the default collection");
  if (version.defaultCaseId !== "case-001") fail("Case 1 is not the default case");
  if (JSON.stringify(version.currentCaseIds) !== JSON.stringify(expectedCurrentCaseIds)) {
    fail("Built current-case registry is incomplete or out of order");
  }
  if (JSON.stringify(version.emergencyExploreCaseIds) !== JSON.stringify(expectedEmergencyExploreCaseIds)) {
    fail("Built Emergency Explore registry is incomplete or out of order");
  }
  if (JSON.stringify(version.caseIds) !== JSON.stringify(expectedEmergencyExploreCaseIds)) {
    fail("Legacy built case registry is incomplete or out of order");
  }
  if (!index.includes(`<base href="${version.basePath}">`)) fail("Built base path is missing");
  if (!notFound.includes(`<base href="${version.basePath}">`)) fail("404 base path is missing");

  version.assets.forEach((asset) => {
    if (!exists(asset.output)) fail(`Missing fingerprinted asset: ${asset.output}`);
    if (!/[.][a-f0-9]{12}[.](?:js|css)$/.test(asset.output)) fail(`Asset is not fingerprinted: ${asset.output}`);
    if (!index.includes(asset.url)) fail(`Shell does not reference asset: ${asset.url}`);
  });

  [
    "New Cases",
    "Emergency Explore",
    "Exam",
    "Reasoning",
    "Stem",
    "Full Run",
    "(*)",
    "Chest discomfort after lunch",
    "Sudden chest and back pain",
    "Sharp chest discomfort after dinner",
    "Breathlessness after a motorcycle collision",
    "Worsening breathlessness despite reliever use",
    "Sudden breathlessness and light-headedness",
    "Cough and worsening breathlessness over three days",
    "Worsening breathlessness with COPD",
    "Sudden facial droop, arm weakness and speech difficulty",
    "Sudden slurred speech, weakness and confusion",
    "Headache, vomiting and weakness after a collapse",
    "New confusion and reduced intake",
    "Fever, cough and increasing weakness",
    "Chills and tiredness after chemotherapy",
    "Lower abdominal and hip pain after an e-bike collision",
    "Breathlessness, nausea and marked fatigue",
    "Neck pain and limb weakness after a diving injury",
    "Dark vomit and black bowel motions",
    "Vomiting blood twice in one evening",
    "Repeated red bowel motions",
    "Vomiting, abdominal pain and unusual breathing",
    "Thirst, frequent urination and increasing confusion",
    "Weak legs and a skipping heartbeat",
    "A brief collapse at netball training",
    "A brief blackout after a racing heartbeat",
    "A fall with a missing moment",
    "Sudden pain with a brief faint",
    "Severe abdominal pain over several hours",
    "Upper abdominal pain that has spread",
    "Lower abdominal pain and light bleeding",
    "Headache and upper abdominal discomfort",
    "Ongoing bleeding after a vaginal birth",
    "Fever, reduced feeding and unusual sleepiness",
    "Barking cough and noisy breathing",
    "A child after a convulsion",
    "Drowsiness and slow breathing",
    "Nausea after taking tablets",
    "Confusion beside an empty medicine packet",
    "Agitation, sweating and shaking",
    "An ankle injury during a bushwalk",
    "Chest tightness when walking uphill",
    "A repeat prescription for chest tightness"
  ].forEach((term) => {
    if (!allLearnerText.includes(term)) fail(`Built site is missing required term: ${term}`);
  });

  expectedCurrentCaseIds.forEach((caseId) => {
    const source = `data/current-cases/${caseId}.js`;
    if (!version.assets.some((asset) => asset.source === source)) fail(`Current case is absent from the built assets: ${source}`);
  });
  expectedEmergencyExploreCaseIds.forEach((caseId) => {
    const source = `data/cases/${caseId}.js`;
    if (!version.assets.some((asset) => asset.source === source)) fail(`Emergency Explore case is absent from the built assets: ${source}`);
  });

  ["Custom GPT", "Timed run", "Progress ring", "Choose one Hint", "migration_only"].forEach((term) => {
    if (allLearnerText.includes(term)) fail(`Built site contains retired production term: ${term}`);
  });

  if (/[?&]v=/.test(index)) fail("Query-string cache busting remains in built HTML");
}

if (failed) process.exitCode = 1;
else console.log("Multi-case dist verification passed.");
