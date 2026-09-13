import { Check, Minus } from "lucide-react"
import { Reveal } from "./reveal"

const ROWS = [
  { label: "זמינות", before: "בשעות הפעילות בלבד", after: "24 שעות, 7 ימים" },
  { label: "זמן מענה", before: "תלוי בעומס בדלפק", after: "פחות מ־1.2 שניות" },
  { label: "שפות", before: "תלוי מי במשמרת", after: "כל שפה, אוטומטית" },
  { label: "תיעוד שיחות", before: "ידני, אם בכלל", after: "כל שיחה ב־Google Sheets" },
  { label: "זיכרון שיחה", before: "הלקוח חוזר על עצמו", after: "זוכרת את כל ההקשר" },
  { label: "מקרי חירום", before: "מחכים לבוקר", after: "הסלמה מיידית לאדם" },
  { label: "ימי מחלה וחופשות", before: "כן", after: "אין" },
]

export function Comparison() {
  return (
    <section className="container-page py-28 md:py-40">
      <Reveal className="overflow-hidden rounded-tiles bg-spotlight text-spotlight-ink">
        <div className="grid grid-cols-1 gap-10 p-8 md:p-14 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <span className="mono-label opacity-60">לפני ואחרי</span>
            <h2 className="display-serif text-balance text-[40px] leading-[1.02] sm:text-5xl">
              מה משתנה
              <br />
              <span className="italic">ביום הראשון.</span>
            </h2>
            <p className="max-w-xs text-body opacity-70">
              לא מחליפים את הצוות — משחררים אותו מהטלפון.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="hidden grid-cols-[140px_1fr_1fr] gap-x-4 border-b border-current/15 pb-3 sm:grid">
              <span className="mono-label opacity-50">&nbsp;</span>
              <span className="mono-label opacity-50">רצפציה מסורתית</span>
              <span className="mono-label">קולי AI</span>
            </div>
            <ul>
              {ROWS.map((r) => (
                <li
                  key={r.label}
                  className="grid grid-cols-1 gap-y-2 border-b border-current/10 py-4 last:border-0 sm:grid-cols-[140px_1fr_1fr] sm:items-start sm:gap-x-4"
                >
                  <span className="mono-label opacity-70 sm:font-sans sm:text-body-sm sm:font-medium sm:normal-case sm:tracking-normal sm:opacity-100">
                    {r.label}
                  </span>
                  <span className="flex items-start gap-2 text-body-sm opacity-55">
                    <Minus className="mt-1 size-3.5 shrink-0" />
                    <span>
                      <span className="sm:hidden">מסורתית: </span>
                      {r.before}
                    </span>
                  </span>
                  <span className="flex items-start gap-2 text-body-sm font-medium">
                    <Check className="mt-1 size-3.5 shrink-0" />
                    <span>
                      <span className="sm:hidden">קולי: </span>
                      {r.after}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
