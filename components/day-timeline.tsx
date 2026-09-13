import { PhoneIncoming, Languages, HelpCircle, Siren, Inbox } from "lucide-react"
import { Reveal } from "./reveal"

const EVENTS = [
  {
    time: "08:12",
    icon: PhoneIncoming,
    title: "שיחה נכנסת",
    body: "לקוח מבקש תור. קולי בודקת את היומן, מציעה שתי אפשרויות ומאשרת. ארבעים שניות — והתור ביומן.",
    tag: "Google Calendar",
    tone: "text-iris-gleam",
  },
  {
    time: "11:47",
    icon: Languages,
    title: "הודעה ברוסית",
    body: "«Здравствуйте, можно записаться?» — קולי מזהה את השפה ועונה בה, בלי שאף אחד הגדיר כלום מראש.",
    tag: "כל שפה",
    tone: "text-periwinkle",
  },
  {
    time: "14:05",
    icon: HelpCircle,
    title: "שאלה חוזרת",
    body: "“כמה עולה טיפול הלבנה?” — קולי עונה מתוך המידע שהגדרתם, בלי להפריע לצוות באמצע יום עבודה.",
    tag: "מענה לשאלות",
    tone: "text-pale-iris",
  },
  {
    time: "02:18",
    icon: Siren,
    title: "מקרה דחוף",
    body: "לקוח מתאר כאב חד באמצע הלילה. קולי מזהה דחיפות, מסמנת את השיחה ומעבירה לטיפול אנושי מיידי.",
    tag: "הסלמה לאדם",
    tone: "text-orchid-bloom",
  },
  {
    time: "09:00",
    icon: Inbox,
    title: "הבוקר של הצוות",
    body: "כל השיחות מתועדות בגיליון עם סיכום ורמת דחיפות, כל תור ביומן, ומייל מסודר מחכה בתיבה.",
    tag: "Google Sheets · מייל",
    tone: "text-cyan-signal",
  },
]

export function DayTimeline() {
  return (
    <section id="day" className="scroll-mt-24 bg-canvas-alt py-28 md:py-40">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <span className="mono-label text-muted">איך זה מרגיש</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-ink sm:text-6xl">
            יום אחד
            <br />
            עם <span className="italic text-accent">קולי.</span>
          </h2>
          <p className="max-w-sm font-light text-subheading text-muted">
            חמישה רגעים מתוך יום רגיל במרפאה. אף אחד מהם לא דרש מכם להרים טלפון.
          </p>
        </Reveal>

        <ol className="relative flex flex-col lg:col-span-8">
          <div aria-hidden className="absolute bottom-6 top-6 right-[27px] w-px bg-line" />
          {EVENTS.map(({ time, icon: Icon, title, body, tag, tone }, i) => (
            <Reveal key={time} as="li" delay={i * 80} className="relative grid grid-cols-[56px_1fr] gap-5 py-6">
              <span className={`relative z-10 flex size-14 items-center justify-center rounded-full border border-line bg-canvas ${tone}`}>
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-3 rounded-tiles border border-line bg-surface p-7 transition-colors duration-200 hover:bg-surface-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="ltr font-mono text-2xl tabular-nums text-ink">{time}</span>
                  <span className="mono-label rounded-full border border-line px-3 text-muted">{tag}</span>
                </div>
                <h3 className="display-serif text-[26px] leading-tight text-ink-2">{title}</h3>
                <p dir="auto" className="text-body text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
