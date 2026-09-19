import type { MetadataRoute } from "next"
import { INDUSTRIES } from "@/lib/industries"
import { UPDATED_ISO } from "@/lib/legal"
import { CONTENT_UPDATED, HOME_UPDATED } from "@/lib/site"

// Dates are hand-maintained in lib/site.ts. Google only trusts <lastmod> when
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
    { url: "https://koli-ai.com/about", lastModified: CONTENT_UPDATED },
    { url: "https://koli-ai.com/pricing", lastModified: CONTENT_UPDATED },
    { url: "https://koli-ai.com/compare/human-answering-service", lastModified: CONTENT_UPDATED },
    { url: "https://koli-ai.com/guides/ai-voice-agent", lastModified: CONTENT_UPDATED },
    { url: "https://koli-ai.com/guides/hebrew-voice-bot", lastModified: CONTENT_UPDATED },
    { url: "https://koli-ai.com/privacy", lastModified: UPDATED_ISO },
    { url: "https://koli-ai.com/terms", lastModified: UPDATED_ISO },
  ]
}
