import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Nav } from "@/components/nav"
import { Ticker } from "@/components/ticker"
import { Footer } from "@/components/footer"
import { getIndustry } from "@/lib/industries"
import {
  RESTAURANT_TICKER,
  RestaurantCapabilities,
  RestaurantCompare,
  RestaurantCta,
  RestaurantEvening,
  RestaurantFaq,
  RestaurantHero,
  RestaurantQuick,
  RestaurantSetup,
  RestaurantStatement,
} from "@/components/restaurants/restaurant-sections"

/**
 * Restaurants get a full landing page instead of the shared
 * /industries/[slug] template. This static route takes precedence over the
 * dynamic one, so the URL, sitemap entry and footer link stay the same.
 * Copy that also feeds llms.txt and the sitemap still lives in lib/industries.ts.
 */

const SITE_URL = "https://koli-ai.com"
const PATH = "/industries/restaurants"
const industry = getIndustry("restaurants")

const TITLE = "מארחת דיגיטלית למסעדה | קולי AI"

export const metadata: Metadata = industry
  ? {
      title: { absolute: TITLE },
      description: industry.metaDescription,
      keywords: [
        "מארחת דיגיטלית למסעדה",
        "מענה טלפוני למסעדה",
        "הזמנת שולחנות אוטומטית",
        "מזכירה וירטואלית למסעדה",
        "מארחת AI",
        "AI hostess for restaurants",
      ],
      alternates: { canonical: PATH },
      openGraph: {
        type: "website",
        locale: "he_IL",
        url: PATH,
        siteName: "קולי AI",
        title: TITLE,
        description: industry.metaDescription,
      },
      twitter: { card: "summary_large_image", title: TITLE, description: industry.metaDescription },
    }
  : {}

export default function RestaurantsPage() {
  if (!industry) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: industry.forPhrase,
        serviceType: "AI restaurant hostess",
        description: industry.metaDescription,
        url: `${SITE_URL}${PATH}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Israel" },
        audience: { "@type": "BusinessAudience", name: "מסעדות, בתי קפה וברים" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "קולי AI", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: industry.name, item: `${SITE_URL}${PATH}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: industry.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-lg focus:bg-pure focus:px-4 focus:py-2 focus:text-void"
      >
        דלג לתוכן הראשי
      </a>
      <Nav />
      <main id="main">
        <RestaurantHero />
        <Ticker items={RESTAURANT_TICKER} />
        <RestaurantStatement />
        <RestaurantEvening />
        <RestaurantCapabilities />
        <RestaurantQuick />
        <RestaurantCompare />
        <RestaurantSetup industry={industry} />
        <RestaurantFaq industry={industry} />
        <RestaurantCta />
      </main>
      <Footer />
    </>
  )
}
