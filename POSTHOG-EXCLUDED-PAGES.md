# PostHog Excluded / Restricted Pages

These routes never receive autocapture or session recording, and receive
only minimal, allowlisted `page_viewed` events without query-string
capture:

- `/schedule/**` (appointment-booking flow, once it includes any personal
  scheduling detail)
- `/contact/**` (public form)
- `/financial-review/**`, `/retirement-review/**`,
  `/business-owner-financial-review/**` (offer forms)
- Any secure-document-upload page
- Any client-portal or authenticated route
- Any confirmation/thank-you page that may echo submitted values in the URL

Query-string stripping applies site-wide; the above list is where full
tracking suppression applies in addition to query stripping.
