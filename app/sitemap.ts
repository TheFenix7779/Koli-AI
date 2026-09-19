import type { MetadataRoute } from "next"
import { INDUSTRIES } from "@/lib/industries"

// Fixed date: `new Date()` would report every page as modified on every build.
const LAST_MODIFIED = new Date("2026-09-19")

/**
 * Public marketing pages only. /tools is internal and already carries
 * `robots: { index: false }`, so it is deliberately left out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://koli-ai.com", lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    ...INDUSTRIES.map((i) => ({
      url: `https://koli-ai.com/industries/${i.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
