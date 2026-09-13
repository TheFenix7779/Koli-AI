import { Reveal } from "./reveal"

const POINTS = [
  { n: "01", title: "תמיד עונה", body: "גם בשתיים בלילה, גם בשישי בצהריים. אף שיחה לא נופלת לתא הקולי." },
  { n: "02", title: "נשמעת אנושית", body: "קול טבעי, בשפה של הלקוח, עם זיכרון שיחה מלא — אף אחד לא חוזר על עצמו." },
  { n: "03", title: "משאירה לכם שקט", body: "הצוות מקבל רק מה שחשוב: תור חדש, פנייה דחופה, סיכום מסודר." },
]

export function Manifesto() {
  return (
    <section className="container-page py-28 md:py-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-6 lg:col-span-7">
          <span className="mono-label text-muted">למה קולי</span>
          <h2 className="display-serif text-balance text-[40px] leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            כל שיחה שלא נענתה
            <br />
            היא לקוח שהלך <span className="italic text-accent">למקום אחר.</span>
          </h2>
        </Reveal>
        <div className="flex flex-col divide-y divide-line lg:col-span-5 lg:pt-10">
          {POINTS.map((p, i) => (
            <Reveal key={p.n} delay={i * 120} className="grid grid-cols-[48px_1fr] gap-4 py-7 first:pt-0">
              <span className="mono-label ltr text-faint">{p.n}</span>
              <div className="flex flex-col gap-2">
                <h3 className="display-serif text-[26px] leading-tight text-ink">{p.title}</h3>
                <p className="text-body text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
