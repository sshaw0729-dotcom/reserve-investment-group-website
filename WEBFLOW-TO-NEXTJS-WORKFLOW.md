# Webflow-to-Next.js Workflow

Status: Draft. Verify current Webflow DevLink capabilities against official
documentation before implementation — feature availability, licensing, and
supported frameworks change over time and are not assumed here.

## Sequence

1. Build the design system and reusable components in Webflow.
2. Review components at required breakpoints inside Webflow.
3. Obtain visual and content approval (marketing + compliance where content
   is present).
4. Transfer approved components into the Next.js repository using the
   preferred or fallback method below.
5. Normalize exported code to project conventions (naming, folder
   structure, design tokens).
6. Replace any Webflow-specific runtime dependency.
7. Add semantic HTML and accessibility attributes (landmarks, labels,
   heading order, focus handling).
8. Add typed component props (TypeScript interfaces).
9. Add automated tests (render test, accessibility assertion).
10. Submit through a pull request on a `design/*` branch.
11. Review via Netlify Deploy Preview.
12. Merge only after required human approvals.

## Preferred Method — Webflow DevLink Export

Use DevLink where supported and commercially appropriate. Before adopting
it for this project, confirm current: documentation, licensing terms,
supported frameworks/versions, component-limitation list, styling
behavior, sync behavior, and production requirements directly from
Webflow's current developer documentation — do not assume prior guidance
still applies. Record findings in `WEBFLOW-LIMITATIONS-REGISTER.md` and
`PLATFORM-DECISION-LOG.md`.

## Fallback Method — Manual Rebuild From Export

1. Export Webflow HTML/CSS/JS/assets and treat the export as design
   reference only — never deploy it directly.
2. Rebuild the approved layout as native Next.js components.
3. Remove unused Webflow scripts/styles/interaction attributes.
4. Replace Webflow interactions (dropdowns, tabs, sliders) with accessible,
   tested application code.
5. Optimize and convert assets (responsive `next/image` usage).
6. Correct semantic HTML, heading order, form labels, keyboard behavior,
   and focus behavior.
7. Test responsiveness at all required breakpoints and performance
   (Core Web Vitals).
8. Document any visual or behavioral difference from the Webflow source in
   the pull request.

## Webflow CMS

Do not connect Webflow CMS directly to the production Next.js site unless
the Model B controls in `CONTENT-MODEL.md` are fully implemented and
approved. Default posture for this project is **Model A: version-controlled
content** (Markdown/MDX/JSON/TS content objects committed to Git and
reviewed via pull request).
