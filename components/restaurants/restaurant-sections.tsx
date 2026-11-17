import Link from "next/link"
import {
  AlertTriangle,
  ArrowLeft,
  CalendarCheck2,
  CalendarX2,
  ChevronDown,
  Clock,
  Leaf,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  PhoneIncoming,
  PhoneMissed,
  PartyPopper,
  Siren,
  Sunrise,
  Truck,
  Users,
  UtensilsCrossed,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { LiveCall, type CallStep } from "@/components/live-call"
import { LanguageCycle } from "@/components/language-cycle"
import { PhoneLink, WhatsAppLink } from "@/components/contact-link"
import { PHONE_DISPLAY } from "@/lib/contact"
import type { Industry } from "@/lib/industries"

const LOC = "industry:restaurants"

const CALL: CallStep[] = [
  { kind: "caller", text: "היי, אפשר שולחן לשישה ביום חמישי בשמונה?" },
  { kind: "koli", text: "בטח! יש לי שולחן לשישה בחמישי ב־20:00 בפנים, או ב־20:30 במרפסת. מה מתאים?" },
  { kind: "caller", text: "בפנים. ואחת מאיתנו אלרגית לאגוזים." },
  { kind: "koli", text: "רשמתי את האלרגיה בהזמנה כדי שהמטבח יידע מראש. על איזה שם?" },
  { kind: "caller", text: "מיכל אברהם." },
  { kind: "koli", text: "מעולה, מיכל. שולחן לשישה, חמישי 20:00. שלחתי אישור ב־WhatsApp. ערב נעים!" },
  { kind: "event", text: "ההזמנה נוספה ליומן", icon: "calendar" },
  { kind: "event", text: "נרשם ב־Google Sheets · אלרגיה: אגוזים", icon: "sheet" },
  { kind: "event", text: "עדכון נשלח למארחת ולמטבח", icon: "mail" },
]

export const RESTAURANT_TICKER = [
  "הזמנת שולחנות 24/7",
  "מענה בשעת העומס",
  "אלרגנים וכשרות",
  "כל שפה",
  "אירועים וקבוצות",
  "שינויים וביטולים",
  "Google Calendar",
  "אישור ב־WhatsApp",
  "התראות למנהל",
]

/* ───────────────────────── Hero ───────────────────────── */

export function RestaurantHero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 h-[720px] opacity-70
        bg-[linear-gradient(to_right,var(--c-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--c-grid)_1px,transparent_1px)]
        bg-[size:6rem_5rem]
        [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_50%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="absolute left-[-10%] top-[20%] -z-10 h-[620px] w-[620px] rounded-full bg-[var(--c-glow)] blur-[140px]"
      />

      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-start gap-8 lg:col-span-7">
          <nav aria-label="פירורי לחם" className="animate-fade-in mono-label text-faint opacity-0">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors duration-200 hover:text-ink">קולי AI</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-muted">מסעדות ובתי קפה</li>
            </ol>
          </nav>

          <span className="animate-fade-in mono-label flex items-center gap-3 text-muted opacity-0">
            <span aria-hidden className="animate-pulse-dot size-2 rounded-full bg-cyan-signal" />
            AI Hostess · מארחת דיגיטלית למסעדות
          </span>

          <h1
            className="animate-fade-in delay-100 display-serif text-balance
            bg-gradient-to-bl from-ink from-45% to-ink/40 bg-clip-text
            text-[48px] leading-[1.0] text-transparent opacity-0 sm:text-7xl lg:text-[84px]"
          >
            השולחנות מלאים.
            <br />
            <span className="italic">קולי</span> בטלפון.
          </h1>

          <p className="animate-fade-in delay-200 max-w-xl text-balance font-light text-subheading text-muted opacity-0 md:text-xl">
            מארחת דיגיטלית שעונה לכל שיחה ולכל הודעת WhatsApp של המסעדה, בכל שפה. קובעת הזמנות ישירות
            ביומן, עונה על שאלות על התפריט והאלרגנים, ומעבירה אירועים למנהל — גם באמצע שירות ערב, וגם
            אחרי הסגירה.
          </p>

          <div className="animate-fade-in delay-300 flex w-full flex-col gap-3 opacity-0 sm:w-auto sm:flex-row">
            <Button asChild size="lg">
              <WhatsAppLink location={`${LOC}:hero`}>
                <MessageCircle />
                לשמוע דמו למסעדה
              </WhatsAppLink>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#evening">
                ערב אחד עם קולי
                <ArrowLeft />
              </a>
            </Button>
          </div>

          <ul className="animate-fade-in delay-500 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-faint opacity-0">
            <li>ללא התחייבות</li>
            <li>ייעוץ ראשוני חינם</li>
            <li>הקמה תוך 1–3 ימי עבודה</li>
          </ul>
        </div>

        <div className="animate-fade-up delay-300 flex justify-center opacity-0 lg:col-span-5 lg:justify-start">
          <LiveCall script={CALL} callerLabel="מסעדה" />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Statement ─────────────────────── */

export function RestaurantStatement() {
  return (
    <section className="container-page py-28 md:py-40">
      <Reveal className="flex flex-col gap-8">
        <span className="mono-label text-muted">הבעיה</span>
        <p className="display-serif max-w-5xl text-balance text-[34px] leading-[1.15] text-ink sm:text-5xl lg:text-6xl">
          בשמונה בערב, כשהמסעדה הכי מלאה, <span className="italic text-accent">הטלפון הכי לא נענה.</span>{" "}
          <span className="text-muted">
            ומי שלא קיבל מענה לא מחכה. הוא מתקשר למסעדה הבאה ברשימה.
          </span>
        </p>
      </Reveal>
    </section>
  )
}

/* ─────────────────────── Evening timeline ─────────────────────── */

const EVENING = [
  {
    time: "10:40",
    icon: Sunrise,
    title: "הזמנות של הבוקר",
    body: "שלוש הזמנות לסוף השבוע נכנסו לפני שמישהו הגיע למסעדה. כולן ביומן, עם אישור שנשלח לסועדים.",
    tag: "Google Calendar",
    tone: "text-iris-gleam",
  },
  {
    time: "17:15",
    icon: Leaf,
    title: "שאלה על התפריט",
    body: "“יש לכם מנות טבעוניות? והאם המטבח כשר?” — קולי עונה מתוך המידע שהגדרתם, בלי להוציא את השף מהמטבח.",
    tag: "תפריט ואלרגנים",
    tone: "text-pale-iris",
  },
  {
    time: "20:05",
    icon: PhoneIncoming,
    title: "שעת השיא",
    body: "שלוש שיחות נכנסות במקביל, והמארחת מושיבה זוג בכניסה. קולי עונה לכולן, וההזמנות נרשמות.",
    tag: "שיחות במקביל",
    tone: "text-cyan-signal",
  },
  {
    time: "20:40",
    icon: Siren,
    title: "סועד מתעכב, ואלרגיה חמורה",
    body: "קבוצה של שמונה מודיעה שהיא מאחרת, וסועדת מספרת על אלרגיה חמורה. קולי מסמנת ומעבירה למנהל המשמרת מיד.",
    tag: "הסלמה לאדם",
    tone: "text-orchid-bloom",
  },
  {
    time: "23:50",
    icon: Moon,
    title: "אחרי הסגירה",
    body: "“Hi, do you have a table for two tomorrow?” — תייר כותב ב־WhatsApp באמצע הלילה. קולי עונה באנגלית וקובעת.",
    tag: "24/7 · כל שפה",
    tone: "text-periwinkle",
  },
]

export function RestaurantEvening() {
  return (
    <section id="evening" className="scroll-mt-24 bg-canvas-alt py-28 md:py-40">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <span className="mono-label text-muted">איך זה מרגיש</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-ink sm:text-6xl">
            יום אחד
            <br />
            במסעדה, עם <span className="italic text-accent">קולי.</span>
          </h2>
          <p className="max-w-sm font-light text-subheading text-muted">
            חמישה רגעים מיום עבודה רגיל. באף אחד מהם הצוות לא היה צריך לעזוב את הקומה כדי לענות לטלפון.
          </p>
        </Reveal>

        <ol className="relative flex flex-col lg:col-span-8">
          <div aria-hidden className="absolute bottom-6 top-6 right-[27px] w-px bg-line" />
          {EVENING.map(({ time, icon: Icon, title, body, tag, tone }, i) => (
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

/* ─────────────────────── Capabilities bento ─────────────────────── */

const BOOK = [
  { time: "19:00", name: "כהן", party: 2, area: "בפנים", note: null as string | null, isNew: false },
  { time: "19:30", name: "Smith", party: 4, area: "מרפסת", note: null, isNew: false },
  { time: "20:00", name: "מיכל אברהם", party: 6, area: "בפנים", note: "אלרגיה: אגוזים", isNew: true },
  { time: "20:00", name: "לוי", party: 2, area: "בר", note: "יום נישואין", isNew: false },
  { time: "20:30", name: "Петров", party: 3, area: "בפנים", note: null, isNew: false },
]

const TABLES = [
  { n: 1, seats: 2, state: "busy" },
  { n: 2, seats: 2, state: "free" },
  { n: 3, seats: 4, state: "busy" },
  { n: 4, seats: 4, state: "busy" },
  { n: 5, seats: 6, state: "new" },
  { n: 6, seats: 4, state: "free" },
  { n: 7, seats: 2, state: "busy" },
  { n: 8, seats: 8, state: "free" },
] as const

export function RestaurantCapabilities() {
  return (
    <section id="capabilities" className="container-page scroll-mt-24 py-28 md:py-40">
      <Reveal className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="mono-label text-muted">היכולות</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-ink sm:text-6xl">
            כל מה שמארחת עושה
            <br />
            <span className="italic text-accent">בטלפון. ועוד קצת.</span>
          </h2>
        </div>
        <p className="max-w-sm font-light text-subheading text-muted">
          הצוות שלכם נשאר עם הסועדים בקומה. קולי לוקחת את הקו.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
        {/* Reservation book */}
        <Reveal className="flex flex-col gap-7 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight text-ink">יומן הזמנות שמתמלא לבד</h3>
            <p className="max-w-md text-body text-muted">
              קולי רואה את היומן, מציעה רק שעות פנויות ורושמת את ההזמנה בזמן השיחה — עם מספר הסועדים,
              האזור והבקשות המיוחדות. Google Calendar, או היומן שאתם כבר עובדים איתו.
            </p>
          </div>

          <div className="rounded-cards border border-line bg-canvas p-4" aria-hidden>
            <div className="mb-3 flex items-center justify-between">
              <span className="mono-label text-faint">הערב · חמישי</span>
              <span className="flex items-center gap-1.5 text-[11px] text-cyan-signal">
                <CalendarCheck2 className="size-3.5" />
                הזמנה חדשה נוספה
              </span>
            </div>
            <div className="flex flex-col">
              {BOOK.map((r, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[48px_1fr_auto] items-center gap-3 rounded-md px-2 py-2.5 ${
                    r.isNew ? "bg-iris-gleam text-void ring-4 ring-iris-gleam/20" : "border-b border-line last:border-0"
                  }`}
                >
                  <span className={`ltr font-mono text-[12px] tabular-nums ${r.isNew ? "" : "text-faint"}`}>{r.time}</span>
                  <div className="flex min-w-0 flex-col leading-tight">
                    <span dir="auto" className={`truncate text-body-sm ${r.isNew ? "font-medium" : "text-ink-2"}`}>{r.name}</span>
                    {r.note && (
                      <span className={`truncate text-[12px] ${r.isNew ? "text-void/70" : "text-faint"}`}>{r.note}</span>
                    )}
                  </div>
                  <span className={`flex items-center gap-1.5 text-[12px] ${r.isNew ? "" : "text-muted"}`}>
                    <Users className="size-3.5" />
                    {r.party} · {r.area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Floor */}
        <Reveal delay={80} className="flex flex-col justify-between gap-8 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-5">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight text-ink">יודעת כמה מקום יש</h3>
            <p className="text-body text-muted">
              מגדירים מראש כמה שולחנות יש ובאיזה גודל. קבוצה שלא נכנסת לכללים עוברת למנהל, לא נדחית.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-sm grid-cols-4 gap-2.5" aria-hidden>
            {TABLES.map((t) => (
              <div
                key={t.n}
                className={`flex aspect-square flex-col items-center justify-center gap-0.5 rounded-full text-[11px] ${
                  t.state === "new"
                    ? "bg-iris-gleam font-medium text-void ring-4 ring-iris-gleam/20"
                    : t.state === "busy"
                      ? "bg-slot-busy text-muted"
                      : "border border-line bg-slot text-faint"
                }`}
              >
                <span className="font-mono text-[13px]">{t.n}</span>
                <span>{t.seats} מק׳</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-[12px] text-faint" aria-hidden>
            <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-slot-busy" />תפוס</span>
            <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full border border-line bg-slot" />פנוי</span>
            <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-iris-gleam" />הוזמן עכשיו</span>
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal delay={80} className="flex flex-col justify-between gap-8 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-5">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight text-ink">תיירים? אין בעיה.</h3>
            <p className="text-body text-muted">
              קולי מזהה את שפת הסועד מהמילה הראשונה ועוברת אליה — עברית, אנגלית, ערבית, רוסית, צרפתית ועוד.
            </p>
          </div>
          <LanguageCycle />
        </Reveal>

        {/* Menu & allergens */}
        <Reveal delay={160} className="flex flex-col gap-7 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[28px] leading-tight text-ink">תפריט, אלרגנים וכשרות</h3>
            <p className="max-w-md text-body text-muted">
              קולי עונה רק לפי מה שהגדרתם. מה שהיא לא יודעת — היא לא ממציאה, אלא מעבירה לצוות.
              ואלרגיה שנאמרה בשיחה נרשמת בהזמנה, כדי שהמטבח יידע לפני שהסועדים מגיעים.
            </p>
          </div>
          <div className="flex flex-col gap-2.5" aria-hidden>
            <div className="w-fit max-w-[85%] rounded-2xl rounded-tr-md bg-surface-3 px-4 py-2.5 text-body-sm text-ink-2">
              יש לכם מנות טבעוניות? ואתם כשרים?
            </div>
            <div className="ms-auto w-fit max-w-[85%] rounded-2xl rounded-tl-md bg-action px-4 py-3 text-body-sm text-action-ink">
              כן, יש ארבע מנות עיקריות טבעוניות, והמטבח בהשגחת הרבנות המקומית. לשמור לכם שולחן?
            </div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {["טבעוני", "ללא גלוטן", "אגוזים", "כשרות", "מנות ילדים"].map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1 text-[12px] text-muted">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Events */}
        <Reveal delay={80} className="flex flex-col justify-between gap-6 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-surface-3 text-pale-iris">
            <PartyPopper className="size-5" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[26px] leading-tight text-ink">אירועים וקבוצות</h3>
            <p className="text-body text-muted">
              ימי הולדת, ארוחות חברה ושולחנות גדולים נאספים כפנייה מסודרת — תאריך, כמות וסוג אירוע — ומועברים למנהל.
            </p>
          </div>
        </Reveal>

        {/* Changes */}
        <Reveal delay={160} className="flex flex-col justify-between gap-6 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-surface-3 text-iris-gleam">
            <CalendarX2 className="size-5" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[26px] leading-tight text-ink">שינויים וביטולים</h3>
            <p className="text-body text-muted">
              סועד שמבטל או משנה כמות מעדכן את היומן, והשולחן מתפנה מיד להזמנה הבאה.
            </p>
          </div>
        </Reveal>

        {/* Urgent */}
        <Reveal delay={240} className="flex flex-col justify-between gap-6 rounded-tiles border border-line bg-surface p-8 md:p-10 lg:col-span-4">
          <span className="relative flex size-12 items-center justify-center rounded-full bg-orchid-bloom text-void">
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full border border-orchid-bloom/60 [animation-duration:3s]" />
            <AlertTriangle className="size-5" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="display-serif text-[26px] leading-tight text-ink">מה שדחוף, מגיע למנהל</h3>
            <p className="text-body text-muted">
              אלרגיה חמורה, תלונה על מנה או חפץ שנשכח — מסומן כדחוף ונשלח למנהל המשמרת באותו רגע.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────────────── More hostess tasks ─────────────────────── */

const QUICK = [
  { icon: Clock, title: "שעות פתיחה", body: "עד מתי פתוח, מתי המטבח נסגר, ומה בחגים." },
  { icon: MapPin, title: "הגעה וחניה", body: "כתובת, חניה, נגישות, ואם אפשר להגיע עם כלב." },
  { icon: Truck, title: "משלוחים ואיסוף", body: "אזורי משלוח, זמני הכנה, והעברת הזמנות לאישור הצוות." },
  { icon: UtensilsCrossed, title: "בקשות מיוחדות", body: "כיסא תינוק, קינוח ליום הולדת, שולחן שקט בפינה." },
]

export function RestaurantQuick() {
  return (
    <section className="border-y border-line bg-canvas-alt py-20 md:py-24">
      <div className="container-page flex flex-col gap-12">
        <Reveal className="flex max-w-xl flex-col gap-3">
          <span className="mono-label text-muted">והשאלות שחוזרות כל יום</span>
          <h2 className="display-serif text-[32px] leading-tight text-ink sm:text-5xl">
            עשרות שיחות בשבוע שהצוות כבר לא צריך לענות עליהן.
          </h2>
        </Reveal>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} as="li" delay={i * 60} className="flex flex-col gap-3 border-t border-line pt-5">
              <Icon className="size-5 text-accent" />
              <h3 className="text-subheading text-ink">{title}</h3>
              <p className="text-body-sm text-muted">{body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ─────────────────────── Before / after ─────────────────────── */

const WITHOUT = [
  "הטלפון מצלצל בשעת השיא ואין מי שירים",
  "הזמנות נרשמות על פתק ליד הקופה",
  "אלרגיה שנאמרה בטלפון לא מגיעה למטבח",
  "שיחות מחוץ לשעות הפעילות הולכות לאיבוד",
  "תיירים שלא מדברים עברית מוותרים",
]
const WITH = [
  "כל שיחה נענית תוך שנייה, גם כמה במקביל",
  "כל הזמנה נכנסת ליומן עם כל הפרטים",
  "אלרגיות ובקשות מסומנות בהזמנה עצמה",
  "הזמנות נכנסות 24/7, גם בלילה ובשבת",
  "כל סועד מקבל מענה בשפה שלו",
]

export function RestaurantCompare() {
  return (
    <section className="container-page py-28 md:py-40">
      <Reveal className="mb-14 flex flex-col gap-4">
        <span className="mono-label text-muted">לפני ואחרי</span>
        <h2 className="display-serif max-w-3xl text-balance text-[40px] leading-[1.02] text-ink sm:text-6xl">
          אותה מסעדה,
          <br />
          <span className="italic text-accent">טלפון אחר לגמרי.</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Reveal className="flex flex-col gap-6 rounded-tiles border border-line bg-surface p-8 md:p-10">
          <span className="flex items-center gap-2 text-subheading text-muted">
            <PhoneMissed className="size-5 text-orchid-bloom" />
            בלי קולי
          </span>
          <ul className="flex flex-col gap-4">
            {WITHOUT.map((t) => (
              <li key={t} className="flex gap-3 text-body text-muted">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-orchid-bloom" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="flex flex-col gap-6 rounded-tiles bg-action p-8 text-action-ink md:p-10">
          <span className="flex items-center gap-2 text-subheading">
            <Phone className="size-5" />
            עם קולי
          </span>
          <ul className="flex flex-col gap-4">
            {WITH.map((t) => (
              <li key={t} className="flex gap-3 text-body">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-current opacity-60" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────────────── Setup ─────────────────────── */

export function RestaurantSetup({ industry }: { industry: Industry }) {
  return (
    <section className="border-y border-line bg-canvas-alt py-28 md:py-36">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-4 lg:col-span-5">
          <span className="mono-label text-muted">ההקמה</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-ink sm:text-5xl">
            1–3 ימי עבודה,
            <br />
            <span className="italic text-accent">ועולים לאוויר.</span>
          </h2>
          <p className="max-w-md text-body text-muted">
            איכות המענה נקבעת כמעט כולה במידע שקולי מקבלת מראש. את הרשימה הזאת עוברים יחד בשיחת ההיכרות,
            ואפשר לעדכן אותה בכל שלב.
          </p>
        </Reveal>
        <ol className="flex flex-col gap-3 lg:col-span-7">
          {industry.setup.map((s, i) => (
            <Reveal
              key={s}
              as="li"
              delay={i * 50}
              className="flex items-center gap-5 rounded-tiles border border-line bg-surface p-5"
            >
              <span className="ltr shrink-0 font-mono text-[13px] text-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-body text-ink-2">{s}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ─────────────────────── FAQ ─────────────────────── */

export function RestaurantFaq({ industry }: { industry: Industry }) {
  return (
    <section id="faq" className="container-page scroll-mt-24 py-28 md:py-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-4 lg:col-span-4">
          <span className="mono-label text-muted">שאלות של בעלי מסעדות</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-ink sm:text-5xl">
            לפני שמכניסים
            <br />
            <span className="italic text-accent">מארחת AI.</span>
          </h2>
        </Reveal>
        <div className="flex flex-col divide-y divide-line border-y border-line lg:col-span-8">
          {industry.faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-6 text-start text-subheading text-ink-2 transition-colors duration-200 hover:text-ink">
                  <h3 className="font-sans text-subheading font-normal">{f.q}</h3>
                  <ChevronDown className="faq-chevron size-5 shrink-0 text-muted transition-transform duration-300" />
                </summary>
                <p className="max-w-2xl pb-7 text-body text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── CTA ─────────────────────── */

export function RestaurantCta() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-32 md:py-48">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#0f1011,#131d27_45%,#1a4788_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(ellipse_60%_45%_at_50%_38%,rgba(64,138,193,0.5),transparent)]"
      />
      <Reveal className="container-page flex flex-col items-center gap-10 text-center">
        <span className="mono-label text-cloud/70">למסעדה שלכם</span>
        <h2 className="display-serif max-w-4xl text-balance text-[44px] leading-[1.0] text-pure sm:text-7xl lg:text-[88px]">
          בואו תשמעו איך
          <br />
          <span className="italic">קולי</span> מארחת.
        </h2>
        <p className="max-w-lg text-balance font-light text-subheading text-cloud/75">
          שיחת היכרות קצרה ב־WhatsApp. נבנה יחד דמו על התפריט והשעות שלכם — ללא התחייבות, והייעוץ הראשוני עלינו.
        </p>
        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full bg-pure text-void hover:bg-cloud sm:w-auto">
            <WhatsAppLink location={`${LOC}:cta`}>
              <MessageCircle />
              פתחו WhatsApp
            </WhatsAppLink>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="w-full border-pure/60 text-pure hover:bg-pure/10 sm:w-auto"
          >
            <PhoneLink location={`${LOC}:cta`}>
              <Phone />
              <span className="ltr font-mono tabular-nums">{PHONE_DISPLAY}</span>
            </PhoneLink>
          </Button>
        </div>
        <p className="text-body-sm text-cloud/70">
          רוצים קודם להבין כמה זה עולה?{" "}
          <Link href="/pricing" className="text-pure underline-offset-4 hover:underline">
            מה מרכיב את המחיר
          </Link>
        </p>
      </Reveal>
    </section>
  )
}
