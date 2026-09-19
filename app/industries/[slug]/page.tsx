import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MessageCircle, Mic, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { INDUSTRIES, getIndustry } from "@/lib/industries"
import { PhoneLink, WhatsAppLink } from "@/components/contact-link"
import { PHONE_DISPLAY } from "@/lib/contact"

const SITE_URL = "https://koli-ai.com"

type Params = { slug: string }

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const industry = getIndustry((await params).slug)
  if (!industry) return {}
  const title = `${industry.forPhrase} | קולי AI`
  const url = `/industries/${industry.slug}`
  return {
    title,
    description: industry.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "he_IL", url, siteName: "קולי AI", title, description: industry.metaDescription },
    twitter: { card: "summary_large_image", title, description: industry.metaDescription },
  }
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const industry = getIndustry((await params).slug)
  if (!industry) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: industry.forPhrase,
        serviceType: "AI digital receptionist",
        description: industry.metaDescription,
        url: `${SITE_URL}/industries/${industry.slug}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Israel" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "קולי AI", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: industry.name, item: `${SITE_URL}/industries/${industry.slug}` },
        ],
      },
    ],
  }

  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-line bg-canvas/70">
        <nav aria-label="ניווט ראשי" className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="קולי AI — דף הבית">
            <span className="flex size-9 items-center justify-center rounded-lg bg-action text-action-ink">
              <Mic className="size-4" />
            </span>
            <span className="display-serif text-2xl text-ink">קולי AI</span>
          </Link>
          <Link href="/#industries" className="flex items-center gap-1.5 text-body text-muted transition-colors hover:text-ink">
            כל התחומים <ArrowRight className="size-4 rotate-180" />
          </Link>
        </nav>
      </header>

      <main id="main" className="container-page flex flex-col gap-20 py-16 md:py-24">
        <section className="flex max-w-3xl flex-col gap-6">
          <span className="mono-label text-muted">{industry.name}</span>
          <h1 className="display-serif text-balance text-[40px] leading-[1.05] text-ink sm:text-6xl">
            {industry.forPhrase}
          </h1>
          <p className="font-light text-subheading text-muted">{industry.tagline}</p>
          <p className="text-body text-muted">{industry.intro}</p>
          <div>
            <Button asChild size="lg">
              <WhatsAppLink location={`industry:${industry.slug}`}>
                <MessageCircle />
                שיחת היכרות ב־WhatsApp
              </WhatsAppLink>
            </Button>
          </div>
        </section>

        <section aria-labelledby="pains" className="flex flex-col gap-8">
          <h2 id="pains" className="display-serif text-[32px] leading-tight text-ink sm:text-5xl">
            מה קורה היום
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {industry.pains.map((p) => (
              <li key={p.title} className="flex flex-col gap-2 rounded-tiles border border-line bg-surface p-6">
                <h3 className="text-subheading text-ink">{p.title}</h3>
                <p className="text-body-sm text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="helps" className="flex flex-col gap-8">
          <h2 id="helps" className="display-serif text-[32px] leading-tight text-ink sm:text-5xl">
            איך קולי עוזרת
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {industry.helps.map((h) => (
              <li key={h.title} className="flex flex-col gap-2 rounded-tiles border border-line bg-surface p-6">
                <h3 className="text-subheading text-ink">{h.title}</h3>
                <p className="text-body-sm text-muted">{h.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="example" className="flex flex-col gap-8">
          <h2 id="example" className="display-serif text-[32px] leading-tight text-ink sm:text-5xl">
            דוגמה לשיחה
          </h2>
          <div className="grid grid-cols-1 gap-8 rounded-tiles border border-line bg-surface p-8 md:grid-cols-2 md:p-12">
            <div className="flex flex-col gap-4">
              <span className="mono-label text-faint">מה הלקוחות שואלים</span>
              <ul className="flex flex-col gap-2">
                {industry.asks.map((a) => (
                  <li key={a} dir="auto" className="w-fit rounded-2xl rounded-tr-md bg-surface-3 px-4 py-2.5 text-body-sm text-ink-2">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="mono-label text-faint">איך קולי עונה</span>
              <div className="ms-auto w-fit rounded-2xl rounded-tl-md bg-action px-5 py-4 text-body text-action-ink">
                {industry.reply}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="setup" className="flex flex-col gap-8">
          <h2 id="setup" className="display-serif text-[32px] leading-tight text-ink sm:text-5xl">
            מה מגדירים לפני שמתחילים
          </h2>
          <p className="max-w-2xl text-body text-muted">
            איכות המענה נקבעת כמעט כולה במידע שקולי מקבלת מראש. ב{industry.name} זה בדרך כלל אומר:
          </p>
          <ul className="flex flex-col gap-3">
            {industry.setup.map((s) => (
              <li
                key={s}
                className="flex gap-3 rounded-tiles border border-line bg-surface p-5 text-body-sm text-ink-2"
              >
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl text-body-sm text-muted">
            את הרשימה הזאת עוברים יחד בשיחת ההיכרות, ואפשר לעדכן אותה בכל שלב.
          </p>
        </section>

        <section aria-labelledby="faq" className="flex flex-col gap-8">
          <h2 id="faq" className="display-serif text-[32px] leading-tight text-ink sm:text-5xl">
            שאלות נפוצות
          </h2>
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {industry.faq.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center py-6 text-subheading text-ink-2 hover:text-ink">
                  {f.q}
                </summary>
                <p className="max-w-2xl pb-7 text-body text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="others" className="flex flex-col gap-4">
          <h2 id="others" className="mono-label text-muted">
            תחומים נוספים
          </h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/industries/${o.slug}`}
                  className="inline-flex min-h-11 items-center rounded-lg border border-line px-4 text-body-sm text-ink-2 transition-colors hover:bg-surface-2"
                >
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="container-page flex items-center justify-between py-8 text-body-sm text-muted">
          <Link href="/" className="hover:text-ink">
            קולי AI
          </Link>
          <PhoneLink location={`industry:${industry.slug}`} className="ltr font-mono tabular-nums hover:text-ink">
            {PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </footer>
    </>
  )
}
