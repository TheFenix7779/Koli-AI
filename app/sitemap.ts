import type { MetadataRoute } from "next"
import { INDUSTRIES } from "@/lib/industries"
import { UPDATED_ISO } from "@/lib/legal"
import { GUIDES } from "@/lib/guides"
import { HOME_UPDATED } from "@/lib/site"

// Dates are hand-maintained in lib/site.ts and lib/guides.ts. Google only trusts <lastmod> when
// it tracks real content changes, and `new Date()` would mark every page as
// modified on every deploy.

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
    ...GUIDES.map((g) => ({ url: `https://koli-ai.com${g.href}`, lastModified: g.updated })),
    { url: "https://koli-ai.com/privacy", lastModified: UPDATED_ISO },
    { url: "https://koli-ai.com/terms", lastModified: UPDATED_ISO },
  ]
}
