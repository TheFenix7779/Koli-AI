import Link from "next/link"
import { Mic } from "lucide-react"

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
            <a href="#" className="transition-colors duration-200 hover:text-pure">מדיניות פרטיות</a>
            <a href="#" className="transition-colors duration-200 hover:text-pure">תנאי שימוש</a>
            <a href="tel:0555648222" className="ltr font-mono tabular-nums transition-colors duration-200 hover:text-pure">
              055-564-8222
            </a>
          </nav>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="mono-label text-cloud/55">
            © <span className="ltr">2025</span> קולי AI. כל הזכויות שמורות.
          </p>
          <Link
            href="/tools"
            rel="nofollow"
            aria-label="כלים פנימיים"
            title="Internal tools"
            className="size-2 shrink-0 rounded-full bg-cloud/25 transition-colors duration-200 hover:bg-cloud/80"
          />
        </div>
      </div>
    </footer>
  )
}
