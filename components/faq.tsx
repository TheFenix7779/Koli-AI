import { ChevronDown } from "lucide-react"
import { Reveal } from "./reveal"

const FAQ = [
  {
    q: "הלקוחות ירגישו שהם מדברים עם בוט?",
    a: "קולי משתמשת בטכנולוגיית TTS מתקדמת עם קול נשי מקצועי בעברית, וזוכרת את כל מה שנאמר לאורך השיחה. אף לקוח לא מתבקש לחזור על עצמו, והשיחה זורמת כמו עם רצפציה מנוסה.",
  },
  {
    q: "מה קורה כשמישהו מתקשר עם מקרה דחוף?",
    a: "קולי מזהה דחיפות מתוך תוכן השיחה, מסמנת את הפנייה כדחופה בתיעוד ומעבירה אותה לטיפול אנושי מיידי. הצוות מקבל התראה במייל באותו רגע.",
  },
  {
    q: "איך זה מתחבר ליומן ולמערכות שלנו?",
    a: "התורים נכנסים ישירות ל־Google Calendar, כל שיחה מתועדת ב־Google Sheets עם פרטי הלקוח, סיכום ורמת דחיפות, והצוות מקבל עדכונים במייל. אין צורך להחליף כלים.",
  },
  {
    q: "ומה אם הלקוח מדבר אנגלית?",
    a: "קולי מזהה את שפת הלקוח אוטומטית מהמילים הראשונות ועוברת לאנגלית — בטלפון וב־WhatsApp. אין צורך בתפריט בחירת שפה.",
  },
  {
    q: "מה צריך כדי להתחיל?",
    a: "שיחת היכרות קצרה ב־WhatsApp. נבין איך העסק שלכם עובד, נגדיר יחד את התסריטים והמידע שקולי צריכה להכיר, ונחבר אותה ליומן. ללא התחייבות, והייעוץ הראשוני חינם.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="container-page scroll-mt-24 py-28 md:py-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-4 lg:col-span-4">
          <span className="mono-label text-ash">שאלות נפוצות</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-cloud sm:text-5xl">
            מה שכולם שואלים
            <br />
            <span className="italic">לפני שמתחילים.</span>
          </h2>
        </Reveal>
        <div className="flex flex-col divide-y divide-pure/10 border-y border-pure/10 lg:col-span-8">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-6 text-start text-subheading text-cloud transition-colors duration-200 hover:text-pure">
                  {f.q}
                  <ChevronDown className="faq-chevron size-5 shrink-0 text-ash transition-transform duration-300" />
                </summary>
                <p className="max-w-2xl pb-7 text-body text-ash">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
