const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const basePath = normalizeBasePath(process.env.BASE_PATH || "/Amc-clinical/");
const buildId = process.env.BUILD_ID || getGitSha() || new Date().toISOString();
const generatedAt = new Date().toISOString();

function discoverCaseAssets(directory) {
  return fs.readdirSync(path.join(root, "data", directory))
    .filter((name) => /^case-[0-9]+[.]js$/.test(name))
    .sort()
    .map((name) => "data/" + directory + "/" + name);
}

const currentCaseAssets = discoverCaseAssets("current-cases");
const emergencyExploreAssets = discoverCaseAssets("cases");

const assets = ["assets/css/styles.css"]
  .concat(currentCaseAssets)
  .concat(emergencyExploreAssets)
  .concat(["assets/js/case-views.js", "assets/js/app.js"]);

function normalizeBasePath(value) {
  let clean = value || "/";
  if (!clean.startsWith("/")) clean = "/" + clean;
  if (!clean.endsWith("/")) clean += "/";
  return clean;
}

function getGitSha() {
  try {
    return execSync("git rev-parse --short=12 HEAD", {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
  } catch (error) {
    return "";
  }
}

function emptyDirectory(directory) {
  fs.rmSync(directory, { recursive: true, force: true });
  fs.mkdirSync(directory, { recursive: true });
}

function fingerprint(relativePath) {
  const sourcePath = path.join(root, relativePath);
  const content = fs.readFileSync(sourcePath);
  const parsed = path.parse(relativePath);
  const hash = crypto.createHash("sha256").update(content).digest("hex").slice(0, 12);
  const output = path.join(parsed.dir, `${parsed.name}.${hash}${parsed.ext}`).replace(/\\/g, "/");
  const destination = path.join(dist, output);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, content);
  return { source: relativePath, output, url: basePath + output, hash };
}

function buildShell(manifest) {
  let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  html = html.replace("<head>", `<head>\n  <base href="${basePath}">`);
  html = html.replace(/(<meta name="x-build-id" content=")[^"]+("[^>]*>)/, `$1${buildId}$2`);
  html = html.replace(/window\.__BUILD_ID__ = "[^"]+";/, `window.__BUILD_ID__ = ${JSON.stringify(buildId)};`);

  html = html.replace(/\s*<script src="data\/(?:current-cases|cases)\/case-[0-9]+[.]js(?:[?]v=[^"]+)?"><\/script>/g, "");
  const caseScriptTags = manifest
    .filter((asset) => /^data\/(?:current-cases|cases)\/case-[0-9]+[.]js$/.test(asset.source))
    .map((asset) => `  <script src="${asset.url}"></script>`)
    .join("\n");
  html = html.replace("<!-- CASE_COLLECTION_SCRIPTS -->", caseScriptTags);

  manifest.forEach((asset) => {
    html = html.split(asset.source).join(asset.url);
  });
  html = html.replace(/[?]v=[^"']+/g, "");
  return html;
}

emptyDirectory(dist);
const manifest = assets.map(fingerprint);
const shell = buildShell(manifest);

fs.writeFileSync(path.join(dist, "index.html"), shell);
fs.writeFileSync(path.join(dist, "404.html"), shell);
fs.writeFileSync(path.join(dist, ".nojekyll"), "");
fs.writeFileSync(path.join(dist, "version.json"), JSON.stringify({
  buildId,
  basePath,
  generatedAt,
  environment: "github-pages",
  defaultCollection: "current",
  defaultCaseId: "case-001",
  currentCaseIds: currentCaseAssets.map((asset) => path.basename(asset, ".js")),
  emergencyExploreCaseIds: emergencyExploreAssets.map((asset) => path.basename(asset, ".js")),
  caseIds: emergencyExploreAssets.map((asset) => path.basename(asset, ".js")),
  collectionModel: "current-and-emergency-explore",
  productModel: "multi-case-optional-reasoning",
  assets: manifest
}, null, 2) + "\n");

console.log(`Built ${currentCaseAssets.length} current cases and ${emergencyExploreAssets.length} Emergency Explore cases with build id ${buildId}`);
