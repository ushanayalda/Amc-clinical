#!/usr/bin/env node
"use strict";

const path = require("node:path");
const { runAudit } = require("./amc-engine-lib.js");

const root = path.resolve(__dirname, "..");
const report = runAudit(root);
const failed = report.collectionStatus !== "AUDITED" ||
  report.fatalErrors.length > 0 ||
  !report.registry.registryReady ||
  !report.collection.releaseReady;

if (process.argv.includes("--json")) {
  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
  process.exitCode = process.argv.includes("--report-only") ? 0 : (failed ? 2 : 0);
} else {
  const totals = Object.entries(report.issueTotals).sort(function (left, right) {
    return right[1] - left[1];
  });
  process.stdout.write([
    "AMC Case Collection Audit using Engine " + report.engineVersion,
    "Collection: " + report.collectionStatus,
    "Registry: " + (report.registry.registryReady ? "READY" : "HOLD"),
    "Cases: " + report.collection.totalCases,
    "AUDITED: " + report.collection.auditedCases,
    "HOLD: " + report.collection.holdCases,
    "",
    "Fatal errors:",
    ...(report.fatalErrors.length ? report.fatalErrors.map(function (error) { return "- " + error; }) : ["- none"]),
    "",
    "Release-blocking and review findings:",
    ...totals.map(function (entry) { return "- " + entry[0] + ": " + entry[1]; }),
    "",
    "Collection warnings:",
    ...report.collection.warnings.map(function (warning) { return "- " + warning; }),
    ""
  ].join("\n"));
  process.exitCode = process.argv.includes("--report-only") ? 0 : (failed ? 2 : 0);
}
