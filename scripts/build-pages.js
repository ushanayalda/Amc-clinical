const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const basePath = normalizeBasePath(process.env.BASE_PATH || "/Amc-clinical/");
const buildId = process.env.BUILD_ID || getGitSha() || new Date().toISOString();
const generatedAt = new Date().toISOString();

const assets = [
  { src: "assets/css/styles.css", outDir: "assets/css", name: "styles", ext: ".css", tag: "style" },
  { src: "data/content.js", outDir: "data", name: "content", ext: ".js", tag: "script" },
  { src: "assets/js/content-store.js", outDir: "assets/js", name: "content-store", ext: ".js", tag: "script" },
  { src: "assets/js/router.js", outDir: "assets/js", name: "router", ext: ".js", tag: "script" },
  { src: "assets/js/ui.js", outDir: "assets/js", name: "ui", ext: ".js", tag: "script" },
  { src: "assets/js/renderers.js", outDir: "assets/js", name: "renderers", ext: ".js", tag: "script" },
  { src: "assets/js/app.js", outDir: "assets/js", name: "app", ext: ".js", tag: "script" }
];

const staticAssets = [
  { src: "assets/img/collapsed-lung.png", output: "assets/img/collapsed-lung.png" }
];

function normalizeBasePath(value) {
  var clean = value || "/";
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

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function emptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  ensureDir(dir);
}

function hashContent(content) {
  return crypto.createHash("sha256").update(content).digest("hex").slice(0, 12);
}

function copyFingerprintedAsset(asset) {
  const sourcePath = path.join(root, asset.src);
  const content = fs.readFileSync(sourcePath);
  const hash = hashContent(content);
  const fileName = `${asset.name}.${hash}${asset.ext}`;
  const outputDir = path.join(dist, asset.outDir);
  const outputPath = path.join(outputDir, fileName);

  ensureDir(outputDir);
  fs.writeFileSync(outputPath, content);

  return {
    source: asset.src,
    output: `${asset.outDir}/${fileName}`.replace(/\\/g, "/"),
    url: basePath + `${asset.outDir}/${fileName}`.replace(/\\/g, "/"),
    tag: asset.tag,
    hash
  };
}

function copyStaticAsset(asset) {
  const sourcePath = path.join(root, asset.src);
  const outputPath = path.join(dist, asset.output);

  ensureDir(path.dirname(outputPath));
  fs.copyFileSync(sourcePath, outputPath);

  return {
    source: asset.src,
    output: asset.output.replace(/\\/g, "/"),
    url: basePath + asset.output.replace(/\\/g, "/"),
    tag: "static"
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsString(value) {
  return JSON.stringify(String(value));
}

function serviceWorkerCleanupSnippet() {
  return `(function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        registration.unregister();
      });
    });
  }
  if (window.caches && window.caches.keys) {
    window.caches.keys().then(function (keys) {
      keys.forEach(function (key) {
        window.caches.delete(key);
      });
    });
  }
})();`;
}

function renderStaticHomeShell() {
  return `    <section class="home-hero home-entry" data-static-shell>
      <header class="home-top">
        <div class="brand-block home-brand">
          <p class="eyebrow">Prepared by Ushana Yalda</p>
          <h1>AMC Clinical Pathway</h1>
        </div>
        <a class="home-soft-link home-cases-link" href="${escapeHtml(basePath)}index.html#cases">Cases</a>
      </header>
      <section class="home-launch" aria-labelledby="home-current-case">
        <div class="home-current-truth">
          <p class="home-case-label">Current pattern</p>
          <h2>Dangerous Chest Pain</h2>
          <p class="home-current-case"><span>Today&apos;s case</span><strong id="home-current-case">Classic Chest Pain</strong></p>
        </div>
        <div class="home-primary-start">
          <p>Start with Ignite, then open the stem.</p>
          <div class="home-action-row">
            <a class="home-start-link" href="${escapeHtml(basePath)}index.html#ignite">Start the pattern</a>
          </div>
        </div>
      </section>
    </section>`;
}

function renderShell(manifest) {
  const stylesheet = manifest.find((asset) => asset.tag === "style");
  const scripts = manifest.filter((asset) => asset.tag === "script");
  const version = {
    buildId,
    generatedAt,
    basePath,
    source: "github-pages-artifact"
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-build-id" content="${escapeHtml(buildId)}">
  <base href="${escapeHtml(basePath)}">
  <title>AMC Clinical Pathway</title>
  <link rel="stylesheet" href="${escapeHtml(stylesheet.url)}">
</head>
<body>
  <main id="app" data-screen="home">
${renderStaticHomeShell()}
  </main>
  <script>
    window.__BUILD_ID__ = ${jsString(buildId)};
    window.__APP_VERSION__ = ${JSON.stringify(version)};
    ${serviceWorkerCleanupSnippet()}
  </script>
${scripts.map((asset) => `  <script src="${escapeHtml(asset.url)}"></script>`).join("\n")}
</body>
</html>
`;
}

emptyDir(dist);

const manifest = assets.map(copyFingerprintedAsset);
const staticManifest = staticAssets.map(copyStaticAsset);
const shell = renderShell(manifest);

fs.writeFileSync(path.join(dist, "index.html"), shell);
fs.writeFileSync(path.join(dist, "404.html"), shell);
fs.writeFileSync(path.join(dist, ".nojekyll"), "");
const versionManifest = { buildId, basePath, generatedAt, environment: "github-pages", assets: manifest.concat(staticManifest) };
fs.writeFileSync(path.join(dist, "version.json"), JSON.stringify(versionManifest, null, 2) + "\n");

console.log(`Built dist with build id ${buildId}`);
