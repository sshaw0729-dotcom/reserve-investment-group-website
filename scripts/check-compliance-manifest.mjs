// Fails the build if a page being shipped to production lacks a row in
// CONTENT-MANIFEST.csv whose status indicates real Production approval
// (not just "Compliance approved (copy as drafted...)"). Run this after
// `next build` -- it reads .next/prerender-manifest.json, the
// authoritative list of statically generated routes Next.js itself
// produces during the build, rather than guessing at file layout.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const PRERENDER_MANIFEST = join(process.cwd(), ".next", "prerender-manifest.json");
const CONTENT_MANIFEST = join(process.cwd(), "CONTENT-MANIFEST.csv");

// Minimal RFC4180-ish CSV parser: handles quoted fields, embedded commas,
// and doubled-quote escaping (two double-quotes become one). This is
// scoped to parsing this one known file, not a general-purpose library.
function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
          const c = text[i];
          if (inQuotes) {
                  if (c === '"') {
                            if (text[i + 1] === '"') {
                                        field += '"';
                                        i++;
                            } else {
                                        inQuotes = false;
                            }
                  } else {
                            field += c;
                  }
          } else if (c === '"') {
                  inQuotes = true;
          } else if (c === ",") {
                  row.push(field);
                  field = "";
          } else if (c === "\n" || c === "\r") {
                  if (c === "\r" && text[i + 1] === "\n") i++;
                  row.push(field);
                  rows.push(row);
                  row = [];
                  field = "";
          } else {
                  field += c;
          }
    }
    if (field.length > 0 || row.length > 0) {
          row.push(field);
          rows.push(row);
    }
    return rows.filter(function (r) {
          return r.length > 1 || r[0] !== "";
    });
}

if (!existsSync(PRERENDER_MANIFEST)) {
    console.error(
          "check:compliance-manifest: " + PRERENDER_MANIFEST + " not found. Run `npm run build` first."
        );
    process.exit(1);
}

if (!existsSync(CONTENT_MANIFEST)) {
    console.error("check:compliance-manifest: " + CONTENT_MANIFEST + " not found.");
    process.exit(1);
}

const prerender = JSON.parse(readFileSync(PRERENDER_MANIFEST, "utf8"));
const staticRoutes = Object.keys(prerender.routes || {});

function normalizeRoute(route) {
    if (route === "/" || route === "") return "/";
    return route.endsWith("/") ? route : route + "/";
}

// Generated technical files, not marketing pages -- they don't need
// compliance content or manifest sign-off.
const NON_PAGE_ROUTES = new Set(["/robots.txt/", "/sitemap.xml/"]);

const requiredRoutes = Array.from(new Set(staticRoutes.map(normalizeRoute))).filter(
        function (route) {
                    return !NON_PAGE_ROUTES.has(route);
        }
    );
const csvRows = parseCsv(readFileSync(CONTENT_MANIFEST, "utf8"));
const header = csvRows[0];
const dataRows = csvRows.slice(1);
const urlIndex = header.indexOf("url");
const statusIndex = header.indexOf("status");

if (urlIndex === -1 || statusIndex === -1) {
    console.error(
          "check:compliance-manifest: CONTENT-MANIFEST.csv is missing a \"url\" or \"status\" column."
        );
    process.exit(1);
}

const manifestByUrl = new Map();
for (const row of dataRows) {
    const url = (row[urlIndex] || "").trim();
    const status = (row[statusIndex] || "").trim();
    if (url) manifestByUrl.set(url, status);
}

const missing = [];
const notApproved = [];

for (const route of requiredRoutes) {
    const status = manifestByUrl.get(route);
    if (status === undefined) {
          missing.push(route);
    } else if (!/^production approved/i.test(status)) {
          notApproved.push({ route: route, status: status });
    }
}

if (missing.length > 0 || notApproved.length > 0) {
    console.error(
          "check:compliance-manifest: not every page targeting production has a Production-approved row in CONTENT-MANIFEST.csv:\n"
        );
    if (missing.length > 0) {
          console.error("  No manifest row at all:");
          for (const r of missing) {
                  console.error("    " + r);
          }
    }
    if (notApproved.length > 0) {
          console.error("  Manifest row exists but status is not Production approved:");
          for (const item of notApproved) {
                  console.error("    " + item.route + " -> \"" + item.status + "\"");
          }
    }
    console.error(
          "\n" + (missing.length + notApproved.length) + " page(s) not cleared for production. Update CONTENT-MANIFEST.csv once each page has real compliance sign-off."
        );
    process.exit(1);
}

console.log(
    "check:compliance-manifest: all " + requiredRoutes.length + " statically built page(s) have a Production-approved row in CONTENT-MANIFEST.csv."
  );
process.exit(0);
