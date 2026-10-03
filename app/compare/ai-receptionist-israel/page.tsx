import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"
import { guideUpdated } from "@/lib/guides"

const PATH = "/compare/ai-receptionist-israel"
const TITLE = "השוואת מזכירות AI בישראל: קולי, Genie, MR.BOT ומזכירה"
const DESCRIPTION =
  "השוואה עובדתית בין ארבעה שירותי מזכירה וירטואלית AI בישראל: מענה טלפוני, WhatsApp, שפות, מחיר מפורסם, ניסיון חינם וחיבור ליומן — לפי מה שכל חברה מפרסמת באתר שלה."
const UPDATED = guideUpdated(PATH)

/**
 * Every competitor cell is what that company's own site said on CHECKED.
 * "לא מצוין באתר" means we did not find it, not that the product lacks it.
 * Re-check before editing; prices and plans change often.
 */
const CHECKED = "3.10.2026"

const VENDORS = ["קולי AI", "Genie", "MR.BOT", "מזכירה"] as const

const ROWS: [string, string, string, string, string][] = [
  ["מענה קולי לשיחות טלפון", "כן", "כן", "כן", "כן"],
  [
    "מענה ללקוחות ב־WhatsApp",
    "כן, באותה מערכת",
    "כן",
    "סיכומי שיחה נשלחים לבעל העסק ב־WhatsApp; מענה ללקוחות לא מצוין",
    "לא מצוין באתר",
  ],
  [
    "שפות",
    "מזהה את שפת הפונה ועוברת אליה: עברית, אנגלית, ערבית, רוסית, צרפתית ועוד",
    "עברית; שפות נוספות לא מצוינות",
    "עברית; שפות נוספות לא מצוינות",
    "עברית, אנגלית, ספרדית, ערבית ורוסית, עם זיהוי אוטומטי",
  ],
  [
    "מחיר מפורסם",
    "לא מפורסם; הצעה לפי היקף",
    "₪179 / ₪549 / ₪3,599 לחודש",
    "החל מ־₪199 לחודש",
    "₪39.90 (300 דק׳) / ₪99 (1,000 דק׳) / ₪149 (3,000 דק׳) לחודש",
  ],
  [
    "ניסיון חינם",
    "שיחת היכרות והדגמה חינם; אין ניסיון בשירות עצמי",
    "7 ימים",
    "7 ימים, 50 דקות, בלי כרטיס אשראי",
    "לא מצוין באתר",
  ],
  [
    "יומן ומערכות",
    "Google Calendar ו־Sheets, או יומן ו־CRM קיימים",
    "סנכרון יומנים וחיבור ל־CRM (המערכות לא מפורטות)",
    "קביעת תורים ביומן (המערכת לא מפורטת)",
    "Google או Outlook, CRM, Slack, Teams",
  ],
  ["זמינות", "24/7", "24/7", "24/7, כולל ערבים וסופי שבוע", "24/7"],
]

const SOURCES = [
  { name: "Genie", href: "https://getgenie.co.il/" },
  { name: "MR.BOT", href: "https://mrbot.ai/virtual-secretary" },
  { name: "מזכירה", href: "https://mazkira.co.il/" },
]

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", locale: "he_IL", url: PATH, siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

export default function CompareVendorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: TITLE,
              description: DESCRIPTION,
              path: PATH,
              section: "השוואה",
              published: UPDATED,
              modified: UPDATED,
            }),
          ),
        }}
      />
      <ArticlePage
        eyebrow="השוואה"
        title={TITLE}
        lead="יש היום בישראל כמה שירותים שעונים לטלפון של העסק עם AI. הדף הזה משווה ארבעה מהם לפי מה שכל חברה מפרסמת באתר שלה — כולל המקומות שבהם מתחרים מציעים משהו שאנחנו לא."
        location="compare-vendors"
        related={[
          { href: "/ai-receptionist", label: "פקידת קבלה AI" },
          { href: "/pricing", label: "כמה עולה מזכירה וירטואלית AI" },
          { href: "/compare/human-answering-service", label: "מענה אנושי מול מזכירה AI" },
        ]}
      >
        <Section heading="התשובה הקצרה">
          <p>
            <strong>
              כל ארבעת השירותים עונים לטלפון בקול ועובדים 24/7. ההבדלים הם בשפות, ב־WhatsApp,
              במחיר המפורסם ובאפשרות לנסות לבד.
            </strong>{" "}
            מזכירה מפרסמת את המחיר הנמוך ביותר ותומכת בחמש שפות. Genie ו־MR.BOT מציעים 7 ימי
            ניסיון חינם. קולי עונה בטלפון וב־WhatsApp באותה מערכת ועוברת לכל שפה שבה הלקוח מדבר,
            אבל לא מפרסמת מחירון ולא מציעה ניסיון בשירות עצמי.
          </p>
        </Section>

        <Section heading="טבלת השוואה">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-body-sm">
              <thead>
                <tr className="border-b border-line-2 text-ink">
                  <th scope="col" className="py-3 pe-4 text-start font-medium">
                    &nbsp;
                  </th>
                  {VENDORS.map((v) => (
                    <th key={v} scope="col" className="py-3 pe-4 text-start font-medium">
                      {v}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, ...cells]) => (
                  <tr key={label} className="border-b border-line align-top">
                    <th scope="row" className="py-3 pe-4 text-start font-normal text-ink-2">
                      {label}
                    </th>
                    {cells.map((c, i) => (
                      <td key={VENDORS[i]} className="py-3 pe-4">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-body-sm">
            המידע על המתחרים נלקח מהאתרים שלהם ב־{CHECKED}. &quot;לא מצוין באתר&quot; אומר שלא מצאנו
            את המידע, לא שהשירות לא קיים. מחירים וחבילות משתנים — בדקו באתר של כל חברה לפני
            שמחליטים.
          </p>
        </Section>

        <Section heading="מתי לבחור כל אחד">
          <ul className="flex flex-col gap-3">
            <li>
              <strong>מזכירה</strong> — אם המחיר הוא השיקול הראשון ואתם רוצים מחירון מפורסם לפי
              דקות. היא גם מציינת תמיכה בחמש שפות.
            </li>
            <li>
              <strong>Genie</strong> — אם אתם רוצים לנסות לבד שבוע לפני שמדברים עם מישהו, וצריכים
              גם מענה ב־WhatsApp.
            </li>
            <li>
              <strong>MR.BOT</strong> — אם אתם רוצים ניסיון חינם בלי כרטיס אשראי ומחיר כניסה
              מפורסם.
            </li>
            <li>
              <strong>קולי AI</strong> — אם חלק מהלקוחות שלכם מדברים שפות אחרות, אם חשוב לכם
              שהטלפון וה־WhatsApp יהיו מערכת אחת, ואם אתם מעדיפים שמישהו יגדיר את המערכת איתכם
              במקום להגדיר לבד.
            </li>
          </ul>
        </Section>

        <Section heading="מה הטבלה לא אומרת">
          <p>
            טבלה משווה תכונות, לא איכות. השאלה החשובה ביותר — איך השיחה נשמעת ללקוח שלכם, בעברית,
            על התוכן שלכם — לא מופיעה באף אתר. הדרך היחידה לדעת היא לנסות את כולם על אותה שיחה. יש
            לנו <a href="/guides/hebrew-voice-bot">צ&apos;קליסט לשיחת ניסיון</a> בדיוק בשביל זה,
            ואפשר להשתמש בו גם מול המתחרים.
          </p>
          <p>
            גם המחיר המפורסם הוא רק חלק מהתמונה: חבילה לפי דקות, חריגות, עלות הקמה וחיבורים. מה
            לשאול כל ספק לפני שחותמים מפורט ב<a href="/pricing">דף המחיר</a>.
          </p>
        </Section>

        <Section heading="מקורות">
          <ul className="flex flex-col gap-1">
            {SOURCES.map((s) => (
              <li key={s.href}>
                <a href={s.href} rel="nofollow noopener" target="_blank">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </ArticlePage>
    </>
  )
}
