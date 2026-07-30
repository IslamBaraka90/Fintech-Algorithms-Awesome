// Generate the Awesome list README from the live catalog + the real sitemap.
//
// Sources of truth:
//   * algorithms/MASTER-CATALOG.md  -> full Domain/Family/Topic taxonomy (via the reader's parser)
//   * algorithms/domains/**/metadata.yaml -> real slug for every BUILT topic
//   * data/sitemap-live-topics.txt  -> the real, published article URLs
//   * data/npm-package-topics.tsv   -> which topics ship in the npm package
//   * ../manifest.yaml              -> which topics have their own GitHub repo
//
// Every article link emitted here is verified against the sitemap, so the list
// never ships a broken link. Planned (not-yet-published) topics are listed
// without a link so the full ~1,200-algorithm scope is visible.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { load as loadYaml } from "js-yaml";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..");
const MONO = path.resolve(REPO, "..", "..");
const ALGO = path.join(MONO, "algorithms");
const SITE = "https://thefintechbuilder.com";

const kebab = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Mirror GitHub's heading-anchor algorithm (lowercase, drop chars that are not
// word/space/hyphen, then each space -> a hyphen WITHOUT collapsing runs). The
// " — " in a heading therefore becomes "--", which kebab() would get wrong.
const ghAnchor = (value) =>
  value
    .toLowerCase()
    .replace(/[^\w\s-]+/g, "")
    .replace(/\s/g, "-");

// -- load taxonomy from the reader's own catalog parser -------------------- //
// catalog.mjs reads FINTECH_CONTENT_ROOT at import time; point it at the mono
// algorithms dir so this script runs from anywhere.
process.env.FINTECH_CONTENT_ROOT = ALGO;
const { getLibrary } = await import(pathToFileURL(path.join(MONO, "server", "catalog.mjs")).href);
const library = getLibrary();

// -- map every built topic id -> its real slug (from metadata.yaml) -------- //
const slugById = new Map();
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".git", "__pycache__"].includes(entry.name)) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs);
    else if (entry.name === "metadata.yaml") {
      const meta = loadYaml(fs.readFileSync(abs, "utf8")) || {};
      if (meta.id && meta.slug) slugById.set(meta.id, meta.slug);
    }
  }
}
walk(path.join(ALGO, "domains"));

// -- the real published URLs ----------------------------------------------- //
const liveUrls = new Set(
  fs
    .readFileSync(path.join(REPO, "data", "sitemap-live-topics.txt"), "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean),
);

// -- which topics already ship in the npm package -------------------------- //
// Snapshot of the package's docs.json, refreshed by scripts/refresh_npm_coverage.mjs.
const NPM_PACKAGE_URL = "https://www.npmjs.com/package/fintech-algorithms";
const NPM_REPO_URL = "https://github.com/IslamBaraka90/Fintech-Algorithms-Library";
const npmByTopic = new Map();
let npmPackage = { name: "fintech-algorithms", version: "unknown" };
{
  const raw = fs.readFileSync(path.join(REPO, "data", "npm-package-topics.tsv"), "utf8");
  for (const line of raw.split(/\r?\n/)) {
    if (!line.trim()) continue;
    if (line.startsWith("#")) {
      const [name, version] = line.replace(/^#\s*/, "").split("\t");
      if (name && version && name !== "topic_id") npmPackage = { name, version };
      continue;
    }
    const [topicId, subpath, entry] = line.split("\t");
    if (topicId && subpath) npmByTopic.set(topicId, { subpath, entry });
  }
}

// -- which topics have a dedicated GitHub repo ----------------------------- //
const manifest = loadYaml(fs.readFileSync(path.join(REPO, "..", "manifest.yaml"), "utf8")) || {};
const owner = manifest.owner || "IslamBaraka90";
const repoByTopic = new Map();
for (const repo of manifest.repos || []) {
  if (repo.topic_id) repoByTopic.set(repo.topic_id, `https://github.com/${owner}/${repo.slug}`);
}

// -- build the article URL for a topic, only if it is actually live -------- //
function liveUrlFor(domainTitle, familyTitle, topicId) {
  const slug = slugById.get(topicId);
  if (!slug) return null;
  const url = `${SITE}/${kebab(domainTitle)}/${kebab(familyTitle)}/${slug}/`;
  return liveUrls.has(url) ? url : null;
}

// -- counts ---------------------------------------------------------------- //
let liveCount = 0;
let repoCount = repoByTopic.size;
// Count npm coverage against the catalog only, so a package topic that is not
// (yet) in the taxonomy cannot inflate the badge.
let npmCount = 0;
for (const domain of library.domains)
  for (const family of domain.families)
    for (const topic of family.topics) {
      if (liveUrlFor(domain.title, family.title, topic.id)) liveCount += 1;
      if (npmByTopic.has(topic.id)) npmCount += 1;
    }

const { domainCount, familyCount, topicCount } = library.stats;

// -- emit ------------------------------------------------------------------ //
const out = [];
const P = (line = "") => out.push(line);

P("# Awesome FinTech Algorithms [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)");
P();
P("> A curated, structured index of every algorithm in **[The Fintech Builder](" + SITE + ")** —");
P("> the open knowledge library of production-grade financial algorithms, organized by");
P("> **domain → family → algorithm**, from market-data engineering to fair-value measurement.");
P();
P("<p>");
P(`  <img alt="Domains" src="https://img.shields.io/badge/domains-${domainCount}-2b6cb0">`);
P(`  <img alt="Families" src="https://img.shields.io/badge/families-${familyCount}-2b6cb0">`);
P(`  <img alt="Algorithms" src="https://img.shields.io/badge/algorithms-${topicCount}-2b6cb0">`);
P(`  <img alt="Published" src="https://img.shields.io/badge/published%20articles-${liveCount}-brightgreen">`);
P(`  <img alt="On npm" src="https://img.shields.io/badge/on%20npm-${npmCount}-cb3837">`);
P("</p>");
P();
P(`🌐 **Website:** [${SITE.replace("https://", "")}](${SITE})  ·  📚 **Library:** [${SITE}/library/](${SITE}/library/)`);
P();
P(
  `📥 **Install the whole library:** [\`${npmPackage.name}\`](${NPM_PACKAGE_URL}) ` +
    `(v${npmPackage.version}, **${npmCount}** algorithms) · ` +
    `[source](${NPM_REPO_URL})`,
);
P();
P("```bash");
P(`npm install ${npmPackage.name}`);
P("```");
P();
P("**Legend**");
P();
P("| mark | meaning |");
P("|---|---|");
P("| 🟢 | article published — the title links to it |");
P("| ⚪ | planned — no article yet |");
P(`| 📥 | **implemented in the [\`${npmPackage.name}\`](${NPM_PACKAGE_URL}) npm package** — installable today; hover the mark for its import subpath |`);
P("| 📦 | has its own dedicated open-source repo (Python + TypeScript, deeper implementation) |");
P();
P("Three independent signals, so a row tells you exactly what exists: 🟢 is the");
P("*explanation*, 📥 is the *quickest way to run it*, and 📦 is the *deep dive*. A");
P("planned topic can still be on npm, and a topic on npm may not have its own repo.");
P();
P("---");
P();

// -- personal story (why this project exists) ------------------------------ //
P("## Why I built this");
P();
P("When I first stepped into fintech, I kept hitting the same wall: the field is *enormous*, and its");
P("algorithms are scattered everywhere — a formula in one paper, a snippet in another repo, half an");
P("explanation buried in a forum thread. I could never find a single place that laid out **all** of it,");
P("with a clear path from *\"what is this?\"* to *\"here's the working code.\"* No map. No learning path");
P("through the whole rich, sprawling landscape of financial algorithms.");
P();
P("So I decided to build that place. First for **myself** — to actually learn this field by implementing");
P("every piece of it end to end, not just reading about it — and then for **every other developer**");
P("walking the same road. The Fintech Builder is that continuous learning journey: one algorithm at a");
P("time, explained, visualized, and shipped as real, runnable code you can install and build on.");
P();
P("This index is the map. It keeps growing, because that's the whole point — applying everything, for");
P("myself and for anyone learning alongside me. **The journey never stops.** 🚀");
P();
P("— *Islam, The Fintech Builder*");
P();
P("---");
P();

// Group domains by Part (the catalog stores part on each domain).
const parts = [];
for (const domain of library.domains) {
  let bucket = parts.find((p) => p.part === domain.part);
  if (!bucket) parts.push((bucket = { part: domain.part, domains: [] }));
  bucket.domains.push(domain);
}

// Table of contents
P("## Contents");
P();
for (const { part, domains } of parts) {
  if (part) P(`- **${part}**`);
  for (const domain of domains) {
    const anchor = ghAnchor(`${domain.id} — ${domain.title}`);
    P(`  - [${domain.id} — ${domain.title}](#${anchor})`);
  }
}
P();
P("---");
P();

for (const { part, domains } of parts) {
  if (part) {
    P(`# ${part}`);
    P();
  }
  for (const domain of domains) {
    const domUrl = `${SITE}/domains/${kebab(domain.title)}/`;
    let domLive = 0;
    let domNpm = 0;
    for (const family of domain.families)
      for (const topic of family.topics) {
        if (liveUrlFor(domain.title, family.title, topic.id)) domLive += 1;
        if (npmByTopic.has(topic.id)) domNpm += 1;
      }
    const domTotal = domain.families.reduce((n, f) => n + f.topics.length, 0);

    P(`## ${domain.id} — ${domain.title}`);
    P();
    if (domain.description) P(`_${domain.description}_`);
    P();
    P(`**Domain page:** [${domUrl.replace("https://", "")}](${domUrl})  ·  **${domain.families.length}** families  ·  **${domLive}/${domTotal}** published  ·  **${domNpm}/${domTotal}** on npm`);
    P();
    for (const family of domain.families) {
      P(`### ${family.title}  \`${family.id}\``);
      P();
      for (const topic of family.topics) {
        const url = liveUrlFor(domain.title, family.title, topic.id);
        const npm = npmByTopic.get(topic.id);
        const repo = repoByTopic.get(topic.id);
        // Link titles carry the import subpath, so hovering 📥 shows how to
        // import that specific algorithm without bloating every line.
        const marks = [
          npm ? `📥 [npm](${NPM_PACKAGE_URL} "import from ${npm.subpath}")` : "",
          repo ? `📦 [repo](${repo})` : "",
        ].filter(Boolean);
        const suffix = marks.length ? ` — ${marks.join(" · ")}` : "";
        if (url) {
          P(`- 🟢 [${topic.title}](${url})${suffix}  \`${topic.id}\``);
        } else {
          P(`- ⚪ ${topic.title}${suffix}  \`${topic.id}\``);
        }
      }
      P();
    }
    P("---");
    P();
  }
}

P("## How the three signals relate");
P();
P(`| | [\`${npmPackage.name}\`](${NPM_PACKAGE_URL}) (📥) | per-algorithm repos (📦) |`);
P("|---|---|---|");
P("| Scope | one install, every implemented algorithm | one algorithm per repo |");
P("| Languages | TypeScript | Python **and** TypeScript |");
P("| Use it when | you want to call the algorithm in an app | you want to read, port, or extend it |");
P("| Extras | provider-agnostic subpath modules | streaming engines, algorithm-specific analysis surfaces, deeper test suites |");
P();
P("They are complements, not alternatives — the package is the fastest path to a");
P("working call, and a dedicated repo is where an algorithm is taken apart in full.");
P();
P("## About this list");
P();
P("This index is generated from the live catalog, the site sitemap, and the npm");
P("package's own manifest by [`scripts/generate_awesome.mjs`](scripts/generate_awesome.mjs).");
P("Article links are verified against [`data/sitemap-live-topics.txt`](data/sitemap-live-topics.txt),");
P("so a link only appears once the article is actually published; npm coverage comes from");
P("[`data/npm-package-topics.tsv`](data/npm-package-topics.tsv), refreshed by");
P("[`scripts/refresh_npm_coverage.mjs`](scripts/refresh_npm_coverage.mjs). Re-run both to refresh.");
P();
P("Maintained alongside the per-algorithm open-source repositories. See the");
P("[EMA repo](https://github.com/" + owner + "/Fintech-EMA-Exponential-Moving-Average-algorithm)");
P("for the reference implementation pattern (Python + TypeScript, streaming engine, Yahoo Finance tests).");
P();
P("## License");
P();
P("[CC BY 4.0](LICENSE) — the list. Linked articles and code remain under their own licenses.");
P();

const target = path.join(REPO, "README.md");
fs.writeFileSync(target, out.join("\n"), "utf8");
console.log(`Wrote ${target}`);
console.log(
  `domains=${domainCount} families=${familyCount} algorithms=${topicCount} ` +
    `live=${liveCount} npm=${npmCount} repos=${repoCount}`,
);
