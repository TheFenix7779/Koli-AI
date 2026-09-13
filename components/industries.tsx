"use client"

import { useState } from "react"
import { Smile, Stethoscope, Sparkles, Scale, Building2, Pill, Mic } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

const INDUSTRIES = [
  {
    id: "dental",
    icon: Smile,
    name: "מרפאות שיניים",
    tagline: "תורים, תזכורות ושאלות על טיפולים — בלי להוריד את הכפפות.",
    asks: ["לקבוע ניקוי אבנית", "כמה עולה הלבנה?", "יש לי כאב, מה עושים?"],
    reply: "יש לי זמינות לניקוי אבנית ביום שלישי ב־14:30. לרשום אותך?",
  },
  {
    id: "clinic",
    icon: Stethoscope,
    name: "קליניקות רפואיות",
    tagline: "מיון פניות, קביעת תורים והפניה לרופא הנכון — כבר מהשיחה הראשונה.",
    asks: ["תור לרופא עור", "האם אתם עובדים עם הקופה שלי?", "Можно записаться?"],
    reply: "אפנה אותך לד״ר כהן. הפנוי הקרוב הוא יום רביעי ב־11:00. מתאים?",
  },
  {
    id: "spa",
    icon: Sparkles,
    name: "אסתטיקה וספא",
    tagline: "הזמנת טיפולים, מחירון וזמינות — בטון רגוע, גם כשהעומס לא.",
    asks: ["לקבוע טיפול פנים", "מה כולל הזוגי?", "יש מקום היום?"],
    reply: "טיפול פנים קלאסי נמשך כשעה. יש לי מקום היום ב־17:00 או מחר ב־10:30.",
  },
  {
    id: "law",
    icon: Scale,
    name: "משרדי עורכי דין",
    tagline: "מיון לידים וקביעת פגישות ראשוניות — דיסקרטי, מדויק, מתועד.",
    asks: ["ייעוץ בדיני עבודה", "כמה עולה פגישת ייעוץ?", "אפשר לדבר עם עו״ד?"],
    reply: "אשמח לתאם פגישת היכרות עם עו״ד המתמחה בדיני עבודה. יום חמישי ב־13:00 נוח?",
  },
  {
    id: "realestate",
    icon: Building2,
    name: "סוכנויות נדל״ן",
    tagline: "מענה מיידי ללידים נכנסים ותיאום ביקורים — לפני שהם מתקשרים למתחרה.",
    asks: ["הדירה ברחוב הרצל זמינה?", "Can I schedule a viewing?", "מה המחיר המבוקש?"],
    reply: "הנכס עדיין זמין. אפשר לתאם סיור מחר ב־16:00 עם הסוכן האחראי. לרשום?",
  },
  {
    id: "pharmacy",
    icon: Pill,
    name: "בתי מרקחת",
    tagline: "שעות פתיחה, זמינות תרופות ושאלות חוזרות — בלי לעצור את התור בדלפק.",
    asks: ["עד מתי אתם פתוחים?", "יש לכם את התרופה במלאי?", "אפשר להזמין מראש?"],
    reply: "אנחנו פתוחים היום עד 22:00. אבדוק זמינות ואחזור אליך בהודעה תוך דקות.",
  },
]

export function Industries() {
  const [active, setActive] = useState(INDUSTRIES[0].id)
  const current = INDUSTRIES.find((i) => i.id === active)!

  return (
    <section id="industries" className="scroll-mt-24 py-28 md:py-40">
      <div className="container-page">
        <Reveal className="mb-14 flex flex-col gap-4">
          <span className="mono-label text-muted">למי זה מתאים</span>
          <h2 className="display-serif max-w-3xl text-balance text-[40px] leading-[1.02] text-ink sm:text-6xl">
            לעסקים שהטלפון אצלם
            <br />
            <span className="italic text-accent">לא מפסיק לצלצל.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          {/* Tabs */}
          <div role="tablist" aria-label="תחומי עיסוק" className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0">
            {INDUSTRIES.map(({ id, icon: Icon, name }) => {
              const selected = id === active
              return (
                <button
                  key={id}
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${id}`}
                  onClick={() => setActive(id)}
                  className={cn(
                    "flex min-h-14 shrink-0 cursor-pointer items-center gap-3 rounded-cards border px-5 text-start text-body transition-colors duration-200",
                    selected
                      ? "border-transparent bg-action text-action-ink"
                      : "border-line bg-surface text-ink-2 hover:border-line-2 hover:bg-surface-2"
                  )}
                >
                  <Icon className="size-5 shrink-0" />
                  <span className="whitespace-nowrap">{name}</span>
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            key={current.id}
            className="animate-msg-in flex flex-col gap-10 rounded-tiles border border-line bg-surface p-8 opacity-0 md:p-12 lg:col-span-8"
          >
            <div className="flex flex-col gap-3">
              <h3 className="display-serif text-[32px] leading-tight text-ink md:text-heading-lg">{current.name}</h3>
              <p className="max-w-xl font-light text-subheading text-muted">{current.tagline}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <span className="mono-label text-faint">מה הלקוחות שואלים</span>
                <ul className="flex flex-col gap-2">
                  {current.asks.map((a) => (
                    <li
                      key={a}
                      dir="auto"
                      className="w-fit rounded-2xl rounded-tr-md bg-surface-3 px-4 py-2.5 text-body-sm text-ink-2"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="mono-label text-faint">איך קולי עונה</span>
                <div className="ms-auto w-fit rounded-2xl rounded-tl-md bg-action px-5 py-4 text-body text-action-ink">
                  <span className="mb-1.5 flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.15em] opacity-55">
                    <Mic className="size-3" /> קולי
                  </span>
                  {current.reply}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
