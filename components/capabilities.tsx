import { CalendarCheck2, Phone, MessageCircle, AlertTriangle, Mic, ArrowLeft } from "lucide-react"
import { Reveal } from "./reveal"
import { LanguageCycle } from "./language-cycle"

const DAYS = ["א׳", "ב׳", "ג׳", "ד׳", "ה׳"]
const SLOTS = ["09:00", "10:30", "12:00", "14:30", "16:00"]
const BOOKED: Record<string, string> = {
  "0-1": "בדיקה",
  "1-0": "ציפוי",
  "1-3": "ניקוי",
  "2-0": "שתל",
  "3-2": "בדיקה",
  "3-4": "עקירה",
  "4-4": "הלבנה",
}
const NEW_SLOT = "2-3"

const LOG = [
  { initials: "ד״ל", name: "דנה לוי", topic: "ניקוי אבנית", urgent: false },
  { initials: "MR", name: "Michael R.", topic: "Availability", urgent: false },
  { initials: "י״ב", name: "יוסי ברק", topic: "כאב חד", urgent: true },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="container-page scroll-mt-24 py-28 md:py-40">
      <Reveal className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="mono-label text-muted">היכולות</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-ink sm:text-6xl">
            לא עוד בוט.
            <br />
            <span className="italic text-accent">רצפציה.</span>
          </h2>
        </div>
        <p className="max-w-sm font-light text-subheading text-muted">
          כל מה שרצפציה אנושית עושה — ועוד קצת. בלי הפסקות, בלי חופשות, בלי לשכוח.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
        {/* Calendar — quiet card, detailed UI */}
        <Reveal className="flex flex-col gap-7 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight text-ink">זימון תורים בזמן אמת</h3>
            <p className="max-w-md text-body text-muted">
              קולי רואה את היומן שלכם, מציעה רק זמנים פנויים ומאשרת מיד. הסנכרון ל־Google Calendar דו־כיווני.
            </p>
          </div>

          <div className="rounded-cards border border-line bg-canvas p-4" aria-hidden>
            <div className="mb-3 flex items-center justify-between">
              <span className="mono-label text-faint">השבוע</span>
              <span className="flex items-center gap-1.5 text-[11px] text-cyan-signal">
                <CalendarCheck2 className="size-3.5" />
                תור חדש נוסף
              </span>
            </div>

            <div className="grid grid-cols-[38px_repeat(5,1fr)] gap-1.5">
              <span />
              {DAYS.map((d) => (
                <span key={d} className="pb-1 text-center text-[11px] text-faint">
                  {d}
                </span>
              ))}

              {SLOTS.map((slot, r) => (
                <div key={slot} className="contents">
                  <span className="ltr self-center text-start font-mono text-[10px] text-faint">{slot}</span>
                  {DAYS.map((_, c) => {
                    const key = `${c}-${r}`
                    if (key === NEW_SLOT) {
                      return (
                        <span
                          key={key}
                          className="flex h-8 items-center justify-center rounded-md bg-iris-gleam text-[11px] font-medium text-void ring-4 ring-iris-gleam/20"
                        >
                          דנה לוי
                        </span>
                      )
                    }
                    const label = BOOKED[key]
                    return (
                      <span
                        key={key}
                        className={`flex h-8 items-center justify-center rounded-md text-[10px] ${
                          label ? "bg-slot-busy text-muted" : "bg-slot"
                        }`}
                      >
                        {label ?? ""}
                      </span>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Language — the one full-bleed accent tile */}
        <Reveal delay={80} className="flex flex-col justify-between gap-10 rounded-tiles bg-iris-gleam p-8 text-void md:p-10 lg:col-span-5">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight">כל שפה שהלקוח מדבר</h3>
            <p className="text-body text-void/70">
              קולי מזהה את השפה מהמילה הראשונה ועוברת אליה — בלי תפריטים, בלי הגדרות, בלי לבקש מהלקוח לנסות שוב.
            </p>
          </div>
          <LanguageCycle />
        </Reveal>

        {/* Call log */}
        <Reveal delay={80} className="flex flex-col gap-7 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-5">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight text-ink">כל שיחה מתועדת</h3>
            <p className="text-body text-muted">
              שם, נושא, סיכום ורמת דחיפות נכתבים ל־Google Sheets בזמן אמת — והצוות מקבל מייל על כל אחת.
            </p>
          </div>

          <div className="flex flex-col" aria-hidden>
            <div className="flex items-center justify-between border-b border-line pb-2">
              <span className="mono-label text-faint">לקוח</span>
              <span className="mono-label text-faint">דחיפות</span>
            </div>
            {LOG.map((r) => (
              <div key={r.name} className="flex items-center justify-between gap-3 border-b border-line py-3 last:border-0">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-3 text-[11px] font-medium text-ink-2">
                    {r.initials}
                  </span>
                  <div className="flex min-w-0 flex-col leading-tight">
                    <span dir="auto" className="truncate text-body-sm text-ink-2">{r.name}</span>
                    <span dir="auto" className="truncate text-[13px] text-faint">{r.topic}</span>
                  </div>
                </div>
                {r.urgent ? (
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-orchid-bloom px-2.5 py-1 text-[11px] font-medium text-void">
                    <AlertTriangle className="size-3" />
                    דחוף
                  </span>
                ) : (
                  <span className="shrink-0 text-[11px] text-faint">רגילה</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Channels */}
        <Reveal delay={160} className="flex flex-col justify-between gap-8 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-4">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight text-ink">שני ערוצים, מוח אחד</h3>
            <p className="text-body text-muted">שיחה קולית או הודעה — אותה רצפציה, אותו זיכרון.</p>
          </div>

          <div className="flex items-center" aria-hidden>
            <div className="flex flex-col">
              {[
                { icon: Phone, label: "טלפון" },
                { icon: MessageCircle, label: "WhatsApp" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex h-12 items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-surface-2 text-ink">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-body-sm text-muted">{label}</span>
                </div>
              ))}
            </div>

            <svg viewBox="0 0 48 96" className="h-24 w-12 shrink-0 text-line-2" fill="none" aria-hidden>
              <path
                d="M48 24 H32 Q24 24 24 32 V64 Q24 72 32 72 H48"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <path d="M24 48 H4" stroke="currentColor" strokeWidth="1.25" />
            </svg>

            <span className="flex items-center gap-2 rounded-full bg-action px-3.5 py-2 text-body-sm text-action-ink">
              <Mic className="size-3.5" />
              קולי
            </span>
          </div>
        </Reveal>

        {/* Emergency */}
        <Reveal delay={240} className="flex flex-col justify-between gap-8 rounded-tiles bg-orchid-bloom p-8 text-void md:p-10 lg:col-span-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-void/10">
            <AlertTriangle className="size-5" />
          </span>
          <div className="flex flex-col gap-3">
            <h3 className="display-serif text-[28px] leading-tight">מזהה מקרי חירום</h3>
            <p className="text-body text-void/70">
              שיחה דחופה לא מחכה לבוקר. קולי מזהה, מסמנת — ומעבירה הלאה.
            </p>
            <span className="flex w-fit items-center gap-1.5 rounded-full bg-void px-3 py-1.5 text-[12px] text-pure">
              מועבר לאדם, מיד
              <ArrowLeft className="size-3.5" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
