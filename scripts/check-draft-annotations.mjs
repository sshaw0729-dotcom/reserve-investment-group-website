// Fails the build if unresolved draft/compliance placeholder annotations
// (for example "[COMPLIANCE REVIEW REQUIRED]", "[ENTITY DISCLOSURE
// REQUIRED]", or "[PERFORMANCE CONTENT -- DO NOT PUBLISH]") render into
// the built HTML output. See src/components/marketing/DisclosureBlock.tsx,
// which documents this check. Run this after `next build` -- it scans
// .next/server/app for the static HTML Next.js already generated.

import { readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const BUILD_DIR = join(process.cwd(), ".next", "server", "app");

// Matches "[COMPLIANCE REVIEW REQUIRED]" and any other bracketed
// ALL-CAPS annotation (two or more consecutive all-caps words), which is
// the shape every draft/compliance placeholder in this codebase uses --
// e.g. "[ENTITY DISCLOSURE REQUIRED]", "[FACT TO VERIFY]",
// "[PERFORMANCE CONTENT -- DO NOT PUBLISH: ...]", "[TESTIMONIAL PLACEHOLDER]".
const FORBIDDEN_PATTERN = /\[[A-Z]{2,}(?:[ _-][A-Z0-9]{2,})+\b[^\]]*\]/g;

function walk(dir, out) {
    out = out || [];
    const entries = readdirSync(dir);
    for (const entry of entries) {
          const full = join(dir, entry);
          const info = statSync(full);
          if (info.isDirectory()) {
                  walk(full, out);
          } else if (entry.endsWith(".html")) {
                  out.push(full);
          }
    }
    return out;
}

if (!existsSync(BUILD_DIR)) {
    console.error(
          "check:draft-annotations: build output not found at " + BUILD_DIR + ". Run `npm run build` first."
        );
    process.exit(1);
}

const htmlFiles = walk(BUILD_DIR);
const violations = [];

for (const file of htmlFiles) {
    const content = readFileSync(file, "utf8");
    const matches = content.match(FORBIDDEN_PATTERN);
    if (matches) {
          violations.push({
                  file: file.replace(process.cwd() + "/", ""),
                  matches: Array.from(new Set(matches)),
          });
    }
}

if (violations.length > 0) {
    console.error(
          "check:draft-annotations: unresolved compliance placeholder text found in built HTML output:\n"
        );
    for (const v of violations) {
          console.error("  " + v.file);
          for (const m of v.matches) {
                  console.error("    -> " + m);
          }
    }
    console.error(
          "\n" + violations.length + " file(s) with unresolved annotations. Resolve the compliance review before this can ship."
        );
    process.exit(1);
}

console.log(
    "check:draft-annotations: scanned " + htmlFiles.length + " built HTML file(s), no unresolved compliance annotations found."
  );
process.exit(0);
