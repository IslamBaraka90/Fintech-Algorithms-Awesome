// Refresh data/npm-package-topics.tsv from the fintech-algorithms package.
//
// The Awesome README marks which algorithms are already shipping in the npm
// package. That signal must survive being cloned on its own, so it is kept as a
// checked-in snapshot here rather than read live from a sibling directory —
// exactly like data/sitemap-live-topics.txt.
//
// Source of truth: the package's own docs.json, which carries the catalog topic
// id and the import subpath for every implemented topic.
//
// Usage:
//   node scripts/refresh_npm_coverage.mjs                 # find the sibling checkout
//   node scripts/refresh_npm_coverage.mjs <path/to/docs.json>
//
// Re-run this whenever the package publishes new topics, then re-run
// generate_awesome.mjs to rebuild the README.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..");

const CANDIDATES = [
  process.argv[2],
  path.join(REPO, "..", "Fintech-Algorithms-Library", "docs.json"),
  path.join(REPO, "..", "..", "Fintech-Algorithms-Library", "docs.json"),
].filter(Boolean);

const source = CANDIDATES.find((candidate) => fs.existsSync(candidate));
if (!source) {
  console.error("Could not find the package's docs.json. Looked in:");
  for (const candidate of CANDIDATES) console.error(`  ${candidate}`);
  console.error("\nPass the path explicitly:");
  console.error("  node scripts/refresh_npm_coverage.mjs ../Fintech-Algorithms-Library/docs.json");
  process.exit(1);
}

const docs = JSON.parse(fs.readFileSync(source, "utf8"));
const pkg = docs.package || {};
const rows = [];
for (const topic of docs.topics || []) {
  const subpath = topic.import?.subpath;
  if (topic.id && subpath) rows.push([topic.id, subpath, topic.import?.entry || ""]);
}
rows.sort((a, b) => a[0].localeCompare(b[0]));

const lines = [
  `# ${pkg.name || "fintech-algorithms"}\t${pkg.version || "unknown"}`,
  "# topic_id\tsubpath\tentry",
  ...rows.map((row) => row.join("\t")),
];

const target = path.join(REPO, "data", "npm-package-topics.tsv");
fs.writeFileSync(target, lines.join("\n") + "\n", "utf8");
console.log(`Wrote ${target}`);
console.log(`package=${pkg.name}@${pkg.version} topics=${rows.length} (from ${source})`);
