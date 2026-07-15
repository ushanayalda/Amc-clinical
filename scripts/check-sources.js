const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
function discoverCaseFiles(directory) {
  return fs.readdirSync(path.join(root, "data", directory))
    .filter((name) => /^case-[0-9]+[.]js$/.test(name))
    .sort()
    .map((name) => path.join(root, "data", directory, name));
}

const currentCaseFiles = discoverCaseFiles("current-cases");
const emergencyExploreFiles = discoverCaseFiles("cases");
const caseFiles = currentCaseFiles.concat(emergencyExploreFiles);

const files = caseFiles.concat([
  path.join(root, "assets", "js", "case-views.js"),
  path.join(root, "assets", "js", "app.js"),
  path.join(root, "scripts", "build-pages.js"),
  path.join(root, "scripts", "verify-dist.js")
]);

files.forEach((file) => {
  const result = spawnSync(process.execPath, ["--check", file], { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
});

console.log(`Syntax checked ${currentCaseFiles.length} current case files and ${emergencyExploreFiles.length} Emergency Explore case files.`);
