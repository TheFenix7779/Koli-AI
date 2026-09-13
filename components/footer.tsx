import { Mic } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-alt">
      <div className="container-page flex flex-col gap-10 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-action text-action-ink">
              <Mic className="size-4" />
            </span>
            <div className="flex flex-col">
              <span className="display-serif text-2xl leading-none text-ink">קולי AI</span>
              <span className="text-body-sm text-muted">הרצפציה החכמה של העסק שלך</span>
            </div>
          </div>

          <nav aria-label="קישורים משפטיים" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-muted">
            <a href="#" className="transition-colors duration-200 hover:text-ink">מדיניות פרטיות</a>
            <a href="#" className="transition-colors duration-200 hover:text-ink">תנאי שימוש</a>
            <a href="tel:0555648222" className="ltr font-mono tabular-nums transition-colors duration-200 hover:text-ink">
              055-564-8222
            </a>
          </nav>
        </div>

        <p className="mono-label text-faint">
          © <span className="ltr">2025</span> קולי AI. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
