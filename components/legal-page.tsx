import Link from "next/link"
import { Mic } from "lucide-react"
import { PHONE_DISPLAY } from "@/lib/contact"
import { PhoneLink } from "@/components/contact-link"

/** Shared chrome for /privacy and /terms: plain reading page, no marketing. */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  /** Display date, e.g. "19 בספטמבר 2026". */
  updated: string
  intro?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <header className="border-b border-line">
        <nav aria-label="ניווט ראשי" className="container-page flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2.5" aria-label="קולי AI — דף הבית">
            <span className="flex size-9 items-center justify-center rounded-lg bg-action text-action-ink">
              <Mic className="size-4" />
            </span>
            <span className="display-serif text-2xl text-ink">קולי AI</span>
          </Link>
        </nav>
      </header>

      <main id="main" className="container-page max-w-3xl py-16 md:py-24">
        <h1 className="display-serif text-balance text-[36px] leading-[1.1] text-ink sm:text-5xl">{title}</h1>
        <p className="mono-label mt-4 text-faint">עודכן לאחרונה: {updated}</p>
        {intro && <div className="mt-8 text-body text-muted">{intro}</div>}
        <div className="mt-12 flex flex-col gap-12">{children}</div>
      </main>

      <footer className="border-t border-line">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-8 text-body-sm text-muted">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-ink">
              דף הבית
            </Link>
            <Link href="/privacy" className="hover:text-ink">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="hover:text-ink">
              תנאי שימוש
            </Link>
          </div>
          <PhoneLink location="legal-footer" className="ltr font-mono tabular-nums hover:text-ink">
            {PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </footer>
    </>
  )
}

export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="display-serif text-[26px] leading-tight text-ink sm:text-[32px]">{heading}</h2>
      <div className="flex flex-col gap-4 text-body text-muted [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:ms-5 [&_li]:list-disc [&_strong]:text-ink-2">
        {children}
      </div>
    </section>
  )
}
