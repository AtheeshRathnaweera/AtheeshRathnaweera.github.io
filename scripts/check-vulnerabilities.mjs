#!/usr/bin/env node
/**
 * Actionable vulnerability check.
 *
 * Runs `npm audit` and prints a short summary of what needs action:
 * which vulnerable package, which of YOUR dependencies pulls it in,
 * whether it ships to production, and what to do about it.
 *
 * Usage:
 *   node scripts/check-vulnerabilities.mjs [--level=moderate] [--strict] [--prod-only]
 *
 *   --level=<low|moderate|high|critical>  minimum severity to report (default: moderate)
 *   --strict      exit 1 when anything at/above --level is found (CI use)
 *   --prod-only   ignore devDependencies
 *   --postinstall used by the npm postinstall hook; does nothing when CI is set
 *
 * Without --strict it only warns and always exits 0, so it never blocks you.
 */
import { execSync } from "node:child_process";

const SEVERITIES = ["info", "low", "moderate", "high", "critical"];
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, fallback) =>
  args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;

const level = opt("level", "moderate");
const strict = flag("strict");
const prodOnly = flag("prod-only");

// On `npm install`, skip in CI (the CI workflows' audit jobs cover it there).
if (flag("postinstall") && process.env.CI) process.exit(0);
const minRank = SEVERITIES.indexOf(level);
if (minRank === -1) {
  console.error(
    `Unknown --level "${level}". Use one of: ${SEVERITIES.join(", ")}`,
  );
  process.exit(2);
}

const color = process.stdout.isTTY && !process.env.NO_COLOR;
const c = (code) => (s) => (color ? `\x1b[${code}m${s}\x1b[0m` : s);
const red = c("31");
const yellow = c("33");
const green = c("32");
const dim = c("2");
const bold = c("1");
const sevColor = {
  critical: red,
  high: red,
  moderate: yellow,
  low: dim,
  info: dim,
};

function audit(extra = "") {
  try {
    return JSON.parse(
      execSync(`npm audit --json ${extra}`, {
        stdio: ["ignore", "pipe", "ignore"],
      }),
    );
  } catch (err) {
    // npm audit exits non-zero when vulnerabilities exist; the JSON is still on stdout.
    if (err.stdout?.length) {
      try {
        return JSON.parse(err.stdout);
      } catch {
        /* fall through */
      }
    }
    return null;
  }
}

const all = audit();
if (!all || all.error) {
  console.warn(
    yellow(
      "⚠️  Could not run npm audit (offline or registry error). Skipping vulnerability check.",
    ),
  );
  process.exit(0);
}
const prod = audit("--omit=dev");
const prodNames = new Set(Object.keys(prod?.vulnerabilities ?? {}));
const vulns = all.vulnerabilities ?? {};

// Find which direct dependencies (in package.json) pull a package in.
function directParents(name, seen = new Set()) {
  if (seen.has(name)) return [];
  seen.add(name);
  const v = vulns[name];
  if (!v) return [];
  if (v.isDirect) return [name];
  return [...new Set((v.effects ?? []).flatMap((e) => directParents(e, seen)))];
}

function action(v) {
  const fix = v.fixAvailable;
  if (fix === true) return { kind: "auto", text: "Run: npm audit fix" };
  if (fix && typeof fix === "object") {
    if (!fix.isSemVerMajor) return { kind: "auto", text: "Run: npm audit fix" };
    return {
      kind: "manual",
      text: `Only fix is a BREAKING change: ${fix.name}@${fix.version}. Check for a newer patched release, or pin a safe version via "overrides" in package.json.`,
    };
  }
  return {
    kind: "none",
    text: 'No fix published yet. Consider an "overrides" entry, replacing the package, or accepting the risk for now.',
  };
}

// Only report packages that carry an actual advisory (root causes), not every package
// that merely depends on one — that is what makes raw `npm audit` so noisy.
const findings = Object.values(vulns)
  .filter((v) => v.via.some((x) => typeof x === "object"))
  .filter((v) => SEVERITIES.indexOf(v.severity) >= minRank)
  .map((v) => ({
    name: v.name,
    severity: v.severity,
    prod: prodNames.has(v.name),
    parents: directParents(v.name),
    advisories: v.via.filter((x) => typeof x === "object"),
    action: action(v),
  }))
  .filter((f) => !prodOnly || f.prod)
  .sort(
    (a, b) =>
      Number(b.prod) - Number(a.prod) ||
      SEVERITIES.indexOf(b.severity) - SEVERITIES.indexOf(a.severity),
  );

console.log(
  bold(
    `🔍 Vulnerability check (${level}+${prodOnly ? ", production only" : ""})`,
  ),
);

if (findings.length === 0) {
  console.log(green("✅ No vulnerable packages need action.\n"));
  process.exit(0);
}

for (const f of findings) {
  const scope = f.prod ? red("PRODUCTION") : dim("dev only");
  const via =
    f.parents.length && !f.parents.includes(f.name)
      ? dim(` (via ${f.parents.join(", ")})`)
      : "";
  console.log(
    `\n${sevColor[f.severity](`● ${f.severity.toUpperCase()}`)}  ${bold(f.name)}${via}  [${scope}]`,
  );
  const seen = new Set();
  for (const a of f.advisories) {
    if (seen.has(a.url)) continue;
    seen.add(a.url);
    console.log(`   ${a.title}  ${dim(a.url)}`);
  }
  console.log(`   → ${f.action.text}`);
}

const autoFixable = findings.filter((f) => f.action.kind === "auto").length;
const prodCount = findings.filter((f) => f.prod).length;
console.log(
  `\n${yellow("⚠️ ")} ${findings.length} package(s) need action — ${prodCount} in production deps, ${autoFixable} auto-fixable with ${bold("npm audit fix")}.\n`,
);

process.exit(strict ? 1 : 0);
