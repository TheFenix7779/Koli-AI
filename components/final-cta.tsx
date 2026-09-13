import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const WHATSAPP = "https://wa.me/972555648222"

export function FinalCta() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-32 md:py-48">
      {/* Always dark — the closing statement reads the same in both themes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#0f1011,#131d27_45%,#1a4788_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(64,138,193,0.55),transparent)]"
      />
      <Reveal className="container-page flex flex-col items-center gap-10 text-center">
        <span className="mono-label text-cloud/70">מוכנים?</span>
        <h2 className="display-serif max-w-4xl text-balance text-[44px] leading-[1.0] text-pure sm:text-7xl lg:text-[88px]">
          בואו תשמעו איך
          <br />
          <span className="italic">קולי</span> נשמעת.
        </h2>
        <p className="max-w-lg text-balance font-light text-subheading text-cloud/75">
          שיחת היכרות קצרה ב־WhatsApp. נחזור אליכם תוך דקות — ללא התחייבות, והייעוץ הראשוני עלינו.
        </p>
        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full bg-pure text-void hover:bg-cloud sm:w-auto">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              פתחו WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="w-full border-pure/60 text-pure hover:bg-pure/10 sm:w-auto"
          >
            <a href="tel:0555648222">
              <Phone />
              <span className="ltr font-mono tabular-nums">055-564-8222</span>
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
