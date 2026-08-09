/** @type {import('next').NextConfig} */

// Security headers mirrored from netlify.toml's [[headers]] block for "/*".
// Netlify's declarative netlify.toml headers apply to static/CDN-served
// assets, but responses served through the Netlify Next.js Runtime plugin
// (SSR / dynamic App Router routes) do not reliably inherit them. Setting
// the same headers here via Next's own headers() ensures every response —
// static or dynamic — gets them. Keep these two lists in sync if either
// changes.
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
