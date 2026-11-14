import type { NextConfig } from "next"

// Everything the site loads is same-origin: Next's own chunks, the self-hosted
// woff2 files next/font emits, and the generated icon/OG images.
//
// script-src keeps 'unsafe-inline' on purpose. Next injects inline scripts on
// every page (the theme script, the RSC payload, the JSON-LD), and locking them
// down needs a per-request nonce, which would opt every page out of static
// rendering. The remaining directives still remove the payoff from most
// injection bugs: no framing, no plugins, no rewriting <base>, no posting form
// data off-origin.
// Next's dev-mode HMR runtime evaluates strings, so development needs
// 'unsafe-eval'. @vercel/analytics also pulls its debug script from
// va.vercel-scripts.com in dev, where production serves the same file
// same-origin from /_vercel/insights. Neither belongs in the shipped header.
const DEV = process.env.NODE_ENV === "development"
const DEV_SCRIPT = DEV ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${DEV_SCRIPT}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ")

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
