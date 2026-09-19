import Link from "next/link"
import { Lock, Mic } from "lucide-react"
import { INDUSTRIES } from "@/lib/industries"
import { PhoneLink } from "@/components/contact-link"
import { PHONE_DISPLAY } from "@/lib/contact"

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,#1a4788,#14386e)]">
      <div className="container-page flex flex-col gap-10 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-pure text-void">
              <Mic className="size-4" />
            </span>
            <div className="flex flex-col">
              <span className="display-serif text-2xl leading-none text-pure">קולי AI</span>
              <span className="text-body-sm text-cloud/70">הרצפציה החכמה של העסק שלך</span>
            </div>
          </div>

          <nav aria-label="קישורים משפטיים" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-cloud/70">
            <Link href="/about" className="transition-colors duration-200 hover:text-pure">עלינו</Link>
            <Link href="/privacy" className="transition-colors duration-200 hover:text-pure">מדיניות פרטיות</Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-pure">תנאי שימוש</Link>
            <PhoneLink location="footer" className="ltr font-mono tabular-nums transition-colors duration-200 hover:text-pure">
              {PHONE_DISPLAY}
            </PhoneLink>
          </nav>
        </div>

        <nav aria-label="תחומי עיסוק" className="flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-cloud/70">
          {INDUSTRIES.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="transition-colors duration-200 hover:text-pure">
              {i.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between gap-4">
          <p className="mono-label text-cloud/55">
            © <span className="ltr">2025</span> קולי AI. כל הזכויות שמורות.
          </p>
          <Link
            href="/tools"
            rel="nofollow"
            title="Internal tools"
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-cloud/25 px-3 py-1.5 text-[12px] text-cloud/70 transition-colors duration-200 hover:border-cloud/60 hover:text-pure"
          >
            <Lock className="size-3" />
            כלים
          </Link>
        </div>
      </div>
    </footer>
  )
}
