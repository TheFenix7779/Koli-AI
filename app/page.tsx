import { CLIPS, HOME_UPDATED, SITE_URL, transcriptText } from "@/lib/site"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { Manifesto } from "@/components/manifesto"
import { DayTimeline } from "@/components/day-timeline"
import { Capabilities } from "@/components/capabilities"
import { Industries } from "@/components/industries"
import { Comparison } from "@/components/comparison"
import { Integrations } from "@/components/integrations"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "קולי AI",
      inLanguage: "he-IL",
      dateModified: HOME_UPDATED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: `${SITE_URL}/opengraph-image`,
    },
    ...Object.values(CLIPS).map((c) => ({
      "@type": "AudioObject",
      name: c.label,
      description: "הקלטת דוגמה של שיחה עם קולי AI, המזכירה הווירטואלית שעונה לטלפון ול-WhatsApp.",
      contentUrl: `${SITE_URL}${c.src}`,
      encodingFormat: "audio/mpeg",
      duration: c.iso,
      transcript: transcriptText(c.transcript),
      inLanguage: "he-IL",
      isPartOf: { "@id": `${SITE_URL}/#webpage` },
    })),
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-lg focus:bg-pure focus:px-4 focus:py-2 focus:text-void"
      >
        דלג לתוכן הראשי
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <Manifesto />
        <DayTimeline />
        <Capabilities />
        <Industries />
        <Comparison />
        <Integrations />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
