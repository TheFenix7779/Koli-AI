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

export default function Page() {
  return (
    <>
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
