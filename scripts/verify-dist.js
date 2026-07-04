const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function read(file) {
  return fs.readFileSync(path.join(dist, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(dist, file));
}

function walkFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(fullPath);
    return fullPath;
  });
}

function extractBuildId(html) {
  const match = html.match(/<meta name="x-build-id" content="([^"]+)"/);
  return match ? match[1] : "";
}

if (!exists("index.html")) fail("dist/index.html is missing.");
if (!exists("404.html")) fail("dist/404.html is missing.");
if (!exists("version.json")) fail("dist/version.json is missing.");

if (!process.exitCode) {
  const indexHtml = read("index.html");
  const notFoundHtml = read("404.html");
  const version = JSON.parse(read("version.json"));
  const indexBuildId = extractBuildId(indexHtml);
  const notFoundBuildId = extractBuildId(notFoundHtml);

  if (!indexBuildId) fail("dist/index.html is missing x-build-id.");
  if (!notFoundBuildId) fail("dist/404.html is missing x-build-id.");
  if (indexBuildId && notFoundBuildId && indexBuildId !== notFoundBuildId) {
    fail("dist/index.html and dist/404.html have different build IDs.");
  }
  if (version.buildId !== indexBuildId) {
    fail("dist/version.json build ID does not match the shell build ID.");
  }

  ["Classic Chest Pain", "Start speaking", "Cases"].forEach((term) => {
    if (!indexHtml.includes(term)) fail(`Canonical shell is missing learner-facing term: ${term}`);
    if (!notFoundHtml.includes(term)) fail(`404 shell is missing learner-facing term: ${term}`);
  });

  ["Map", "Before the Case", "Progress", "Demo progress", "Case 1 awaiting transfer", "Tracking not connected yet"].forEach((term) => {
    if (indexHtml.includes(term)) fail(`Canonical shell still contains legacy term: ${term}`);
    if (notFoundHtml.includes(term)) fail(`404 shell still contains legacy term: ${term}`);
  });

  if (/[?&]v=/.test(indexHtml) || /[?&]v=/.test(notFoundHtml)) {
    fail("Query-string cache busting remains in built HTML.");
  }

  const learnerFacingBundle = walkFiles(dist)
    .filter((file) => /\.(?:html|js)$/.test(file))
    .map((file) => fs.readFileSync(file, "utf8"))
    .join("\n");

  ["Timed run", "Do not miss", "Choose one thing to improve", "return to Start speaking"].forEach((term) => {
    if (!learnerFacingBundle.includes(term)) fail(`Built app is missing aligned learner-facing term: ${term}`);
  });

  ["Mock Exam", "Keys", "Before Case", "Before the Case", "Candidate", "What broke", "Choose your next repair", "return to Practise", "Warm up first"].forEach((term) => {
    if (learnerFacingBundle.includes(term)) fail(`Built app still contains old learner-facing term: ${term}`);
  });

  const assetRefs = Array.from(indexHtml.matchAll(/(?:src|href)="\/Amc-clinical\/([^"]+)"/g)).map((match) => match[1]);
  assetRefs.forEach((assetPath) => {
    if (assetPath.startsWith("assets/") || assetPath.startsWith("data/")) {
      if (!/[.][a-f0-9]{12}[.](?:js|css)$/.test(assetPath)) {
        fail(`Asset is not fingerprinted: ${assetPath}`);
      }
      if (!exists(assetPath)) fail(`Referenced asset is missing: ${assetPath}`);
    }
  });
}

["before-case.html", "case1.html", "case1-focus-pack.html", "map.html"].forEach((legacyFile) => {
  if (exists(legacyFile)) fail(`Legacy root page was published to dist: ${legacyFile}`);
});

if (!process.exitCode) console.log("dist verification passed.");
