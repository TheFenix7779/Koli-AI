import type { MetadataRoute } from "next"
import { INDUSTRIES } from "@/lib/industries"
import { UPDATED_ISO } from "@/lib/legal"

// Bump when the homepage copy changes. Google only trusts <lastmod> when it
// tracks real content changes, so this is a hand-maintained date rather than
// `new Date()`, which would mark every page as modified on every deploy.
const HOME_UPDATED = "2026-09-19"

// changefreq and priority are deliberately omitted: Google ignores both.

/**
 * Public marketing pages only. /tools is internal and already carries
 * `robots: { index: false }`, so it is deliberately left out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://koli-ai.com", lastModified: HOME_UPDATED },
    ...INDUSTRIES.map((i) => ({
      url: `https://koli-ai.com/industries/${i.slug}`,
      lastModified: i.updated,
    })),
    { url: "https://koli-ai.com/privacy", lastModified: UPDATED_ISO },
    { url: "https://koli-ai.com/terms", lastModified: UPDATED_ISO },
  ]
}
