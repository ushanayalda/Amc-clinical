const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const caseFiles = fs.readdirSync(path.join(root, "data", "cases"))
  .filter((name) => /^case-[0-9]+[.]js$/.test(name))
  .sort()
  .map((name) => path.join(root, "data", "cases", name));

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

console.log(`Syntax checked ${caseFiles.length} canonical case files.`);
