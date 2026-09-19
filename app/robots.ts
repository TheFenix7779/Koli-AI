import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal tools and their API routes: never worth crawling, and the
      // password gate would only produce soft-404s in the index.
      disallow: ["/tools", "/api/"],
    },
    sitemap: "https://koli-ai.com/sitemap.xml",
    host: "https://koli-ai.com",
  }
}
