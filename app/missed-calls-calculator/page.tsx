import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"
import { MissedCallCalculator } from "@/components/missed-call-calculator"
import { guideUpdated } from "@/lib/guides"

const PATH = "/missed-calls-calculator"
const TITLE = "מחשבון שיחות שלא נענו — כמה כסף העסק מפסיד"
const DESCRIPTION =
  "מחשבון חינמי שמראה כמה לקוחות והכנסה העסק שלכם מאבד בגלל שיחות שלא נענו. מזינים שלושה מספרים ומקבלים את העלות בחודש ובשנה."
const UPDATED = guideUpdated(PATH)

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", locale: "he_IL", url: PATH, siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

export default function MissedCallsCalculatorPage() {
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
              section: "כלי",
              published: UPDATED,
              modified: UPDATED,
            }),
          ),
        }}
      />
      <ArticlePage
        eyebrow="כלי חינמי"
        title={TITLE}
        lead="שיחה שלא נענתה היא לא רק הפרעה, אלא לקוח שהלך למתחרה. המחשבון הזה מתרגם את השיחות שהעסק מפספס לכסף, לפי המספרים שלכם."
        location="calculator-missed-calls"
        related={[
          { href: "/guides/missed-calls", label: "שיחות שלא נענו בעסק" },
          { href: "/guides/ai-phone-answering", label: "מענה טלפוני AI" },
          { href: "/pricing", label: "כמה עולה מזכירה וירטואלית AI" },
        ]}
      >
        <MissedCallCalculator />

        <Section heading="איך להשתמש בו">
          <ol className="flex flex-col gap-2">
            <li>
              <strong>ספרו שיחות שלא נענו.</strong> פתחו את יומן השיחות של הטלפון העסקי וספרו שבוע
              רגיל. אם אין יומן, התחילו מהערכה ותשפרו אותה בשבוע הבא.
            </li>
            <li>
              <strong>העריכו כמה מהן היו לקוחות.</strong> חלק מהמתקשרים שואלים שעת פתיחה או טועים
              במספר. הערכה זהירה נותנת תוצאה אמינה יותר.
            </li>
            <li>
              <strong>הזינו שווי של לקוח.</strong> מטופל חדש במרפאה, תיקון דחוף אצל בעל מקצוע או
              תור במספרה שונים בהרבה זה מזה. השתמשו במספר של העסק שלכם.
            </li>
          </ol>
        </Section>

        <Section heading="למי המספר הזה הכי גדול">
          <p>
            העלות של שיחה שלא נענתה גבוהה במיוחד בעסקים עם שני דברים ביחד: <strong>הרבה שיחות
            נכנסות</strong> ו<strong>ערך גבוה ללקוח אחד</strong>. מרפאות שיניים וקליניקות, ובעלי
            מקצוע כמו אינסטלטורים וחשמלאים שנמצאים בשטח כשהטלפון מצלצל, הם הדוגמאות הברורות.
          </p>
          <p>
            כשהתוצאה גבוהה, השלב הבא הוא להחליט איך לטפל בה. חמש הדרכים מתוארות ב
            <a href="/guides/missed-calls">מדריך לשיחות שלא נענו</a>, ומענה מלא סביב השעון מוסבר ב
            <a href="/guides/ai-phone-answering">מענה טלפוני AI לעסקים</a>.
          </p>
        </Section>
      </ArticlePage>
    </>
  )
}
