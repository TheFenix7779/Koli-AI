import { CalendarCheck2, Phone, MessageCircle, MailCheck, AlertTriangle } from "lucide-react"
import { Reveal } from "./reveal"

const DAYS = ["א׳", "ב׳", "ג׳", "ד׳", "ה׳"]
const SLOTS = ["09:00", "10:30", "12:00", "14:30", "16:00"]
const BOOKED = new Set(["1-3", "0-1", "3-0", "2-2", "4-4", "1-0"])
const NEW = "2-3"

const LOG = [
  { name: "דנה לוי", topic: "ניקוי אבנית", urgency: "רגילה" },
  { name: "Michael R.", topic: "Availability", urgency: "רגילה" },
  { name: "יוסי ברק", topic: "כאב חד", urgency: "דחוף" },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="container-page scroll-mt-24 py-28 md:py-40">
      <Reveal className="mb-16 flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="mono-label text-ash">היכולות</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-cloud sm:text-6xl">
            לא עוד בוט.
            <br />
            <span className="italic">רצפציה.</span>
          </h2>
        </div>
        <p className="max-w-sm font-light text-subheading text-ash">
          כל מה שרצפציה אנושית עושה — ועוד קצת. בלי הפסקות, בלי חופשות, בלי לשכוח.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        {/* Calendar — big iris tile */}
        <Reveal className="flex flex-col justify-between gap-8 rounded-tiles bg-iris-gleam p-8 text-void md:col-span-4 md:row-span-2">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[30px] leading-tight">זימון תורים בזמן אמת</h3>
            <p className="max-w-md text-body text-void/75">
              קולי רואה את היומן שלכם, מציעה רק זמנים פנויים ומאשרת מיד. הסנכרון ל־Google Calendar הוא דו־כיווני ואוטומטי.
            </p>
          </div>
          <div className="rounded-cards bg-void/85 p-4 text-cloud" aria-hidden>
            <div className="mb-3 flex items-center justify-between text-xs text-ash">
              <span className="mono-label text-ash">השבוע</span>
              <span className="flex items-center gap-1.5 text-cyan-signal">
                <CalendarCheck2 className="size-3.5" /> תור חדש נוסף
              </span>
            </div>
            <div className="grid grid-cols-[44px_repeat(5,1fr)] gap-1.5 text-[11px]">
              <span />
              {DAYS.map((d) => (
                <span key={d} className="pb-1 text-center text-ash">{d}</span>
              ))}
              {SLOTS.map((slot, r) => (
                <div key={slot} className="contents">
                  <span className="ltr self-center font-mono text-[10px] text-fog">{slot}</span>
                  {DAYS.map((_, c) => {
                    const key = `${c}-${r}`
                    const isNew = key === NEW
                    const booked = BOOKED.has(key)
                    return (
                      <span
                        key={key}
                        className={`h-7 rounded-md ${
                          isNew
                            ? "flex items-center justify-center bg-iris-gleam text-[10px] font-medium text-void"
                            : booked
                            ? "bg-pure/12"
                            : "bg-pure/4"
                        }`}
                      >
                        {isNew ? "דנה" : ""}
                      </span>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Channels */}
        <Reveal delay={80} className="flex flex-col justify-between gap-6 rounded-tiles bg-graphite p-8 md:col-span-2">
          <div className="flex gap-2">
            <span className="flex size-11 items-center justify-center rounded-xl bg-pure/10 text-pure"><Phone className="size-5" /></span>
            <span className="flex size-11 items-center justify-center rounded-xl bg-pure/10 text-pure"><MessageCircle className="size-5" /></span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[26px] leading-tight text-cloud">טלפון ו־WhatsApp</h3>
            <p className="text-body text-ash">שני ערוצים, מוח אחד. שיחה קולית או הודעה — אותה רצפציה, אותו זיכרון.</p>
          </div>
        </Reveal>

        {/* Bilingual */}
        <Reveal delay={160} className="flex flex-col justify-between gap-6 rounded-tiles bg-periwinkle p-8 text-void md:col-span-2">
          <div className="flex w-fit items-center rounded-full bg-void/10 p-1 text-sm" aria-hidden>
            <span className="rounded-full bg-void px-3 py-1 text-pure">עברית</span>
            <span className="ltr px-3 py-1">English</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[26px] leading-tight">דו־לשוני, אוטומטי</h3>
            <p className="text-body text-void/75">מזהה את שפת הלקוח מהמילה הראשונה ועוברת אליה בלי שתגדירו דבר.</p>
          </div>
        </Reveal>

        {/* Log */}
        <Reveal delay={80} className="flex flex-col gap-6 rounded-tiles bg-graphite p-8 md:col-span-3">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[26px] leading-tight text-cloud">כל שיחה מתועדת</h3>
            <p className="text-body text-ash">שם, נושא, סיכום ורמת דחיפות — נכתבים ל־Google Sheets בזמן אמת.</p>
          </div>
          <div className="overflow-hidden rounded-cards border border-pure/8 text-body-sm" aria-hidden>
            <div className="grid grid-cols-3 bg-pure/5 px-4 py-2 text-xs text-ash">
              <span>שם</span><span>נושא</span><span>דחיפות</span>
            </div>
            {LOG.map((r) => (
              <div key={r.name} className="grid grid-cols-3 border-t border-pure/8 px-4 py-2.5 text-cloud">
                <span>{r.name}</span>
                <span className="text-ash">{r.topic}</span>
                <span className={r.urgency === "דחוף" ? "flex items-center gap-1 text-orchid-bloom" : "text-ash"}>
                  {r.urgency === "דחוף" && <AlertTriangle className="size-3.5" />}
                  {r.urgency}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Emergency */}
        <Reveal delay={160} className="flex flex-col justify-between gap-6 rounded-tiles bg-orchid-bloom p-8 text-void md:col-span-2">
          <span className="flex size-11 items-center justify-center rounded-xl bg-void/10"><AlertTriangle className="size-5" /></span>
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[26px] leading-tight">מזהה מקרי חירום</h3>
            <p className="text-body text-void/75">שיחה דחופה לא מחכה לבוקר. קולי מזהה, מסמנת ומעבירה לאדם — מיד.</p>
          </div>
        </Reveal>

        {/* Team alerts */}
        <Reveal delay={240} className="flex flex-col justify-between gap-6 rounded-tiles bg-deep-iris p-8 text-cloud md:col-span-1">
          <span className="flex size-11 items-center justify-center rounded-xl bg-pure/10"><MailCheck className="size-5" /></span>
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[24px] leading-tight">הצוות מעודכן</h3>
            <p className="text-body-sm text-cloud/70">מייל על כל תור חדש או פנייה דחופה.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
