import Link from "next/link"
import { Mic, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppLink } from "@/components/contact-link"
import { CONTENT_UPDATED } from "@/lib/site"

/** Shared chrome for the guide, pricing and comparison pages. */
export function ArticlePage({
  eyebrow,
  title,
  lead,
  location,
  related,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  lead: string
  /** Analytics label for the CTA on this page. */
  location: string
  related: { href: string; label: string }[]
  children: React.ReactNode
}) {
  return (
    <>
      <header className="border-b border-line">
        <nav aria-label="ניווט ראשי" className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="קולי AI — דף הבית">
            <span className="flex size-9 items-center justify-center rounded-lg bg-action text-action-ink">
              <Mic className="size-4" />
            </span>
            <span className="display-serif text-2xl text-ink">קולי AI</span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-body text-muted transition-colors hover:text-ink">
            לדף הבית <ArrowRight className="size-4 rotate-180" />
          </Link>
        </nav>
      </header>

      <main id="main" className="container-page max-w-3xl py-16 md:py-24">
        <span className="mono-label text-muted">{eyebrow}</span>
        <h1 className="display-serif mt-4 text-balance text-[38px] leading-[1.05] text-ink sm:text-6xl">{title}</h1>
        <p className="mt-6 font-light text-subheading text-muted">{lead}</p>

        <div className="mt-14 flex flex-col gap-12">{children}</div>

        <aside className="mt-20 flex flex-col gap-6 rounded-tiles border border-line bg-surface p-8 md:p-12">
          <h2 className="display-serif text-[28px] leading-tight text-ink">רוצים לשמוע איך זה נשמע?</h2>
          <p className="text-body text-muted">
            שיחת היכרות קצרה ב־WhatsApp. נבין איך העסק שלכם עובד ונראה אם קולי מתאימה — ללא התחייבות.
          </p>
          <div>
            <Button asChild size="lg">
              <WhatsAppLink location={location}>
                <MessageCircle />
                פתחו WhatsApp
              </WhatsAppLink>
            </Button>
          </div>
        </aside>

        <nav aria-label="קריאה נוספת" className="mt-12 flex flex-col gap-4">
          <span className="mono-label text-muted">קריאה נוספת</span>
          <ul className="flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="inline-flex min-h-11 items-center rounded-lg border border-line px-4 text-body-sm text-ink-2 transition-colors hover:bg-surface-2"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <footer className="border-t border-line">
        <div className="container-page flex items-center justify-between py-8 text-body-sm text-muted">
          <Link href="/" className="hover:text-ink">
            קולי AI
          </Link>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">
              פרטיות
            </Link>
            <Link href="/terms" className="hover:text-ink">
              תנאים
            </Link>
          </div>
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

/** Article + breadcrumb JSON-LD, matching the graph nodes in the root layout. */
export function articleJsonLd({
  title,
  description,
  path,
  section,
  published = CONTENT_UPDATED,
  modified = CONTENT_UPDATED,
}: {
  title: string
  description: string
  path: string
  section: string
  published?: string
  modified?: string
}) {
  const url = `https://koli-ai.com${path}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        url,
        inLanguage: "he-IL",
        articleSection: section,
        datePublished: published,
        dateModified: modified,
        image: "https://koli-ai.com/opengraph-image",
        author: { "@id": "https://koli-ai.com/#organization" },
        publisher: { "@id": "https://koli-ai.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "קולי AI", item: "https://koli-ai.com" },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  }
}
