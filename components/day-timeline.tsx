import { PhoneIncoming, MessageSquareText, HelpCircle, Siren, Inbox } from "lucide-react"
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
    icon: MessageSquareText,
    title: "WhatsApp באנגלית",
    body: "“Do you have anything this week?” — קולי מזהה אנגלית ועונה באנגלית, בלי שאף אחד יגדיר כלום.",
    tag: "דו־לשוני",
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
    <section id="day" className="scroll-mt-24 bg-abyss py-28 md:py-40">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <span className="mono-label text-ash">איך זה מרגיש</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-cloud sm:text-6xl">
            יום אחד
            <br />
            עם <span className="italic">קולי.</span>
          </h2>
          <p className="max-w-sm font-light text-subheading text-ash">
            חמישה רגעים מתוך יום רגיל במרפאה. אף אחד מהם לא דרש מכם להרים טלפון.
          </p>
        </Reveal>

        <ol className="relative flex flex-col lg:col-span-8">
          <div aria-hidden className="absolute bottom-6 top-6 right-[27px] w-px bg-pure/10" />
          {EVENTS.map(({ time, icon: Icon, title, body, tag, tone }, i) => (
            <Reveal key={time} as="li" delay={i * 80} className="relative grid grid-cols-[56px_1fr] gap-5 py-6">
              <span className={`relative z-10 flex size-14 items-center justify-center rounded-full border border-pure/10 bg-obsidian ${tone}`}>
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-3 rounded-tiles bg-graphite p-7 transition-colors duration-200 hover:bg-steel">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="ltr font-mono text-2xl tabular-nums text-pure">{time}</span>
                  <span className="mono-label rounded-full border border-pure/10 px-3 text-ash">{tag}</span>
                </div>
                <h3 className="display-serif text-[26px] leading-tight text-cloud">{title}</h3>
                <p className="text-body text-ash">{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
