import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"
import { guideUpdated } from "@/lib/guides"

const PATH = "/guides/whatsapp-ai-bot"
const TITLE = "בוט וואטסאפ עם בינה מלאכותית לעסק — מענה אוטומטי 24/7 בעברית"
const DESCRIPTION =
  "איך עובד בוט וואטסאפ מבוסס בינה מלאכותית לעסק: ההבדל בין הודעת פתיחה, בוט תפריטים ושיחה חופשית, מה הוא יכול לעשות, מה לבדוק לפני שבוחרים ואיפה הוא לא מתאים."
const UPDATED = guideUpdated(PATH)

const FAQ: [string, string][] = [
  [
    "מה זה בוט וואטסאפ עם בינה מלאכותית?",
    "מערכת שעונה להודעות WhatsApp של העסק בשיחה חופשית. היא מבינה מה הלקוח כתב, עונה על שאלות לפי המידע של העסק, קובעת תור ביומן ומתעדת את הפנייה, גם בלילה ובסוף שבוע.",
  ],
  [
    "במה זה שונה מהודעת מענה אוטומטית של WhatsApp Business?",
    "אפליקציית WhatsApp Business מאפשרת הודעת פתיחה, הודעת היעדרות ותשובות מהירות שנשלחות כמו שהן. בוט עם בינה מלאכותית מנהל שיחה: הוא מבין ניסוחים שונים, שואל שאלת המשך ומבצע פעולה.",
  ],
  [
    "האם אותה מערכת עונה גם לטלפון?",
    "בקולי AI כן. הטלפון וה־WhatsApp הם אותה מערכת, עם אותו מידע על העסק ואותו תיעוד של כל פנייה.",
  ],
  [
    "באילו שפות הבוט עונה?",
    "תלוי בשירות. קולי AI עוברת לשפה שבה הלקוח כותב, כולל עברית, אנגלית, ערבית ורוסית.",
  ],
  [
    "האם צריך את ה־API הרשמי של WhatsApp?",
    "בוט שמנהל שיחות אוטומטיות בהיקף עסקי בדרך כלל מתחבר דרך WhatsApp Business Platform של Meta ולא דרך אפליקציית העסקים הרגילה. שאלו את הספק איך הוא מחבר את המספר ומה Meta גובה בנפרד.",
  ],
  [
    "מה קורה כשהבוט לא יודע לענות?",
    "מערכת טובה מזהה שהיא מחוץ לתחום ומעבירה את הפנייה לאדם עם סיכום של השיחה, ולא מנחשת. כדאי לבדוק את זה בניסיון לפני שבוחרים.",
  ],
  [
    "האם זה מתאים למצבי חירום?",
    "לא. בוט וואטסאפ אינו שירות חירום. במצב חירום רפואי מחייגים 101.",
  ],
]

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", locale: "he_IL", url: PATH, siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

export default function WhatsAppAiBotGuide() {
  const base = articleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    section: "מדריך",
    published: "2026-11-14",
    modified: UPDATED,
  })
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(base),
        }}
      />
      <ArticlePage
        eyebrow="מדריך"
        title={TITLE}
        lead="לקוחות כותבים בוואטסאפ בשעות שבהן אף אחד לא עונה, ומי שלא קיבל תשובה פונה למישהו אחר. הדף הזה מסביר מה בוט וואטסאפ עם בינה מלאכותית עושה בפועל, במה הוא שונה מהודעה אוטומטית, ומה כדאי לבדוק לפני שבוחרים."
        location="guide-whatsapp-ai-bot"
        related={[
          { href: "/guides/ai-phone-answering", label: "מענה טלפוני אוטומטי עם בינה מלאכותית" },
          { href: "/compare/ai-receptionist-israel", label: "השוואת מזכירות AI בישראל" },
          { href: "/guides/hebrew-voice-bot", label: "בוט קולי בעברית" },
          { href: "/missed-calls-calculator", label: "מחשבון שיחות שלא נענו" },
        ]}
      >
        <Section heading="התשובה הקצרה">
          <p>
            <strong>
              בוט וואטסאפ מבוסס בינה מלאכותית עונה להודעות של לקוחות בשיחה חופשית, 24/7: הוא עונה
              על שאלות על העסק, קובע תורים ביומן ומתעד כל פנייה.
            </strong>{" "}
            ההבדל מהודעה אוטומטית הוא שהוא מבין מה הלקוח כתב ומגיב אליו, ולא שולח את אותו טקסט לכולם.
          </p>
        </Section>

        <Section heading="שלוש רמות של מענה אוטומטי בוואטסאפ">
          <ul className="flex flex-col gap-3">
            <li>
              <strong>הודעות מובנות באפליקציית העסקים.</strong> הודעת פתיחה, הודעת היעדרות ותשובות
              מהירות. פשוט ובחינם, אבל זה טקסט קבוע: הוא לא מבין מה הלקוח שאל ולא קובע תור.
            </li>
            <li>
              <strong>בוט תפריטים.</strong> &quot;לחצו 1 לשעות, 2 לתורים&quot;. הלקוח צריך להתאים את
              עצמו לתפריט, וכל שאלה שלא נכנסת אליו נתקעת.
            </li>
            <li>
              <strong>בוט עם בינה מלאכותית.</strong> הלקוח כותב כמו לאדם, והמערכת מבינה, שואלת מה
              שחסר ופועלת, למשל קובעת את התור בזמן השיחה.
            </li>
          </ul>
        </Section>

        <Section heading="מה בוט וואטסאפ עם בינה מלאכותית עושה">
          <ul className="flex flex-col gap-2">
            <li>
              <strong>עונה על שאלות חוזרות.</strong> שעות, כתובת, שירותים והכנות, לפי מה שהעסק הגדיר.
            </li>
            <li>
              <strong>קובע ומשנה תורים.</strong> בודק את היומן (Google Calendar או היומן וה־CRM
              שכבר בשימוש) ומציע זמנים פנויים.
            </li>
            <li>
              <strong>אוסף פרטים.</strong> שם, טלפון וסיבת הפנייה.
            </li>
            <li>
              <strong>מעביר לאדם.</strong> כשהעניין דורש שיקול דעת, עם סיכום של השיחה.
            </li>
            <li>
              <strong>מתעד הכל.</strong> כל פנייה נשמרת, כדי שאפשר יהיה לראות מה קרה בלילה.
            </li>
          </ul>
          <p>
            בקולי AI הטלפון וה־WhatsApp הם אותה מערכת, כך שלקוח שהתקשר ואחר כך כתב מקבל את אותו
            מידע על העסק. מענה הטלפון עצמו מוסבר ב
            <a href="/guides/ai-phone-answering">מענה טלפוני אוטומטי עם בינה מלאכותית</a>.
          </p>
        </Section>

        <Section heading="מה לבדוק לפני שבוחרים בוט">
          <ul className="flex flex-col gap-2">
            <li>
              <strong>עברית אמיתית.</strong> שלחו הודעות כמו שלקוחות כותבים: קיצורים, שגיאות כתיב,
              עברית מעורבת באנגלית וניסוחים לא רשמיים.
            </li>
            <li>
              <strong>חיבור ליומן שלכם</strong>, ולא רק &quot;קביעת תורים&quot; באופן כללי.
            </li>
            <li>
              <strong>העברה לאדם.</strong> מתי הבוט מעביר, למי, ומה האדם רואה כשהוא מקבל את השיחה.
            </li>
            <li>
              <strong>איך מחברים את המספר.</strong> בוט שמנהל שיחות אוטומטיות בהיקף עסקי בדרך כלל
              מתחבר דרך WhatsApp Business Platform של Meta. שאלו מה Meta גובה בנפרד ומה נכלל במחיר
              של הספק.
            </li>
            <li>
              <strong>המחיר המלא:</strong> חבילה, חריגות והקמה. מה לשאול מפורט ב
              <a href="/pricing">כמה עולה מזכירה וירטואלית AI</a>.
            </li>
          </ul>
          <p>
            כדי להשוות שירותים בישראל לפי מה שכל חברה מפרסמת, ראו את{" "}
            <a href="/compare/ai-receptionist-israel">השוואת מזכירות AI בישראל</a>.
          </p>
        </Section>

        <Section heading="איפה זה לא מתאים">
          <p>
            שיחות רגישות רגשית, הכרעות מקצועיות וכל דבר שדורש אדם צריכים להגיע לאדם. ו
            <strong>בוט וואטסאפ אינו שירות חירום</strong>: במצב חירום רפואי מחייגים 101. הפרטים ב
            <a href="/terms">תנאי השימוש</a>.
          </p>
        </Section>

        <Section heading="שאלות נפוצות">
          <dl className="flex flex-col gap-5">
            {FAQ.map(([q, a]) => (
              <div key={q}>
                <dt className="font-medium text-ink">{q}</dt>
                <dd className="mt-1">{a}</dd>
              </div>
            ))}
          </dl>
          <p>
            רוצים לראות איך זה עובד על העסק שלכם?{" "}
            <a href="/ai-receptionist">מזכירה מבוססת בינה מלאכותית לעסקים</a> מסבירה איך מתחילים.
          </p>
        </Section>
      </ArticlePage>
    </>
  )
}
