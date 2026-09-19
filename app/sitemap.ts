import type { MetadataRoute } from "next"

/**
 * Only the public marketing page belongs here. /tools is internal and already
 * carries `robots: { index: false }`, so it is deliberately left out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://koli-ai.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
