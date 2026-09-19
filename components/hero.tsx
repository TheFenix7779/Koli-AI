import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppLink } from "@/components/contact-link"
import { LiveCall } from "./live-call"


export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Grid BG */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 h-[720px] opacity-70
        bg-[linear-gradient(to_right,var(--c-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--c-grid)_1px,transparent_1px)]
        bg-[size:6rem_5rem]
        [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_50%,transparent_100%)]"
      />
      {/* Iris glow behind the call card */}
      <div
        aria-hidden
        className="absolute left-[-10%] top-[20%] -z-10 h-[620px] w-[620px] rounded-full bg-[var(--c-glow)] blur-[140px]"
      />

      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="flex flex-col items-start gap-8 lg:col-span-7">
          <span className="animate-fade-in mono-label flex items-center gap-3 text-muted opacity-0">
            <span aria-hidden className="animate-pulse-dot size-2 rounded-full bg-cyan-signal" />
            מזכירה וירטואלית AI · בכל שפה
          </span>

          <h1
            className="animate-fade-in delay-100 display-serif text-balance
            bg-gradient-to-bl from-ink from-45% to-ink/40 bg-clip-text
            text-[52px] leading-[1.0] text-transparent opacity-0 sm:text-7xl lg:text-[88px] xl:text-display"
          >
            הטלפון מצלצל.
            <br />
            <span className="italic">קולי</span> כבר ענתה.
          </h1>

          <p className="animate-fade-in delay-200 max-w-xl text-balance font-light text-subheading text-muted opacity-0 md:text-xl">
            מזכירה וירטואלית מבוססת בינה מלאכותית שמדברת בכל שפה, קובעת תורים ישירות ביומן, מזהה
            מקרים דחופים ומעדכנת את הצוות — עשרים וארבע שעות ביממה. לא במקום הצוות שלכם, אלא
            בשיחות שאף אחד לא מספיק לענות להן.
          </p>

          <div className="animate-fade-in delay-300 flex w-full flex-col gap-3 opacity-0 sm:w-auto sm:flex-row">
            <Button asChild size="lg">
              <WhatsAppLink location="hero">
                <MessageCircle />
                לשמוע דמו ב־WhatsApp
              </WhatsAppLink>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#day">
                יום אחד עם קולי
                <ArrowLeft />
              </a>
            </Button>
          </div>

          {/* The only first-party proof we have — it belongs above the fold, not on /about. */}
          <p className="animate-fade-in delay-400 text-body-sm text-muted opacity-0">
            מרפאת שיניים באזור המרכז ענתה עם קולי לכ־<strong className="text-ink-2">29 שיחות יותר</strong>{" "}
            בחודש הראשון מאשר בחודש שלפניו.{" "}
            <Link href="/about" className="text-accent underline-offset-4 hover:underline">
              מה המספר הזה אומר ומה לא
            </Link>
          </p>

          <ul className="animate-fade-in delay-500 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-faint opacity-0">
            <li>ללא התחייבות</li>
            <li>ייעוץ ראשוני חינם</li>
            <li>מענה תוך דקות</li>
          </ul>
        </div>

        {/* Live demo */}
        <div className="animate-fade-up delay-300 flex justify-center opacity-0 lg:col-span-5 lg:justify-start">
          <LiveCall />
        </div>
      </div>
    </section>
  )
}
