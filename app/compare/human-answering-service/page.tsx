import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"

const TITLE = "מענה אנושי לעסקים מול מזכירה AI"
const DESCRIPTION =
  "השוואה בין מוקד מענה אנושי חיצוני לבין מזכירה וירטואלית מבוססת AI: איפה כל אחד מהם עדיף, מה ההבדל בעלות ובזמינות, ומה לשאול לפני שבוחרים."

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: "/compare/human-answering-service" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    url: "/compare/human-answering-service",
    siteName: "קולי AI",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const ROWS: [string, string, string][] = [
  ["זמינות", "לפי שעות המוקד, לרוב אפשר גם 24/7", "24/7 תמיד, כולל חגים"],
  ["המתנה בעומס", "תלוי בכמות הנציגים באותו רגע", "אין תור המתנה"],
  ["שפות", "לפי הנציגים שיש במשמרת", "עוברת לשפת הפונה אוטומטית"],
  ["זימון תור ביומן", "לרוב מוסרים הודעה, לא קובעים", "קובעת ישירות ביומן"],
  ["שיקול דעת בשיחה חריגה", "יתרון ברור לאדם", "מעבירה לצוות"],
  ["תיעוד", "תלוי בנוהל המוקד", "כל שיחה מתועדת עם סיכום"],
  ["מודל עלות", "לרוב לפי מנוי ומספר שיחות", "לפי היקף, ללא עלות העסקה"],
  ["זמן הקמה", "מהיר — מוסרים תסריט", "דורש הגדרה של המידע והתסריטים"],
]

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: TITLE,
              description: DESCRIPTION,
              path: "/compare/human-answering-service",
              section: "השוואה",
            }),
          ),
        }}
      />
      <ArticlePage
        eyebrow="השוואה"
        title={TITLE}
        lead="שתי הדרכים הנפוצות להפסיק לפספס שיחות הן מוקד מענה אנושי חיצוני ומזכירה וירטואלית מבוססת AI. הן פותרות את אותה בעיה בדרכים שונות מאוד, ולא תמיד התשובה היא אותה אחת."
        location="compare-human"
        related={[
          { href: "/pricing", label: "כמה עולה מזכירה וירטואלית AI" },
          { href: "/industries/medical-clinics", label: "מוקד קבלה AI לקליניקה" },
          { href: "/guides/ai-voice-agent", label: "מה זה סוכן AI קולי" },
        ]}
      >
        <Section heading="מה זה מענה אנושי חיצוני">
          <p>
            מוקד מענה אנושי הוא שירות שבו נציגים אמיתיים עונים לשיחות בשם העסק שלכם, לפי תסריט
            שהגדרתם. מפנים אליהם את הקו, והם מוסרים הודעות, מסננים פניות ולפעמים גם מתאמים פגישות.
            זו קטגוריה ותיקה ומוכחת, והיא עובדת.
          </p>
          <p>
            המגבלות שלה נובעות מכך שבצד השני יושב אדם: הוא עולה כסף לכל שעה, הוא מטפל בשיחה אחת
            בכל רגע, והוא מדבר את השפות שהוא מדבר.
          </p>
        </Section>

        <Section heading="איפה מענה אנושי עדיף">
          <p>נאמר את זה בפירוש, כי זה נכון:</p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>שיחות רגישות.</strong> לקוח כועס, בשורה לא נעימה, מצב שדורש אמפתיה אמיתית —
              שם אדם עדיף, ובפער.
            </li>
            <li>
              <strong>שיחות שדורשות שיקול דעת.</strong> כשכל פנייה שונה מקודמתה ואין שום תבנית,
              אדם מסתדר טוב יותר.
            </li>
            <li>
              <strong>קהל שמסרב לדבר עם מערכת.</strong> יש כזה, ובחלק מהתחומים הוא גדול.
            </li>
            <li>
              <strong>הקמה מיידית.</strong> מוקד אנושי מתחיל לעבוד עם תסריט בדף. מערכת דורשת
              הגדרה של המידע שהיא צריכה להכיר.
            </li>
          </ul>
        </Section>

        <Section heading="איפה מזכירה AI עדיפה">
          <ul className="flex flex-col gap-2">
            <li>
              <strong>עומס.</strong> חמש שיחות שמגיעות יחד לא יוצרות תור המתנה.
            </li>
            <li>
              <strong>שעות שאף אחד לא מכסה.</strong> לילה, שבת וחג באותה עלות כמו אמצע השבוע.
            </li>
            <li>
              <strong>שפות.</strong> מעבר אוטומטי לשפת הפונה, בלי לאייש משמרת לפי שפה.
            </li>
            <li>
              <strong>זימון ולא רק הודעה.</strong> ההבדל המעשי הגדול ביותר: תור שנקבע ביומן מול
              פתק שמישהו צריך לטפל בו אחר כך.
            </li>
            <li>
              <strong>עקביות.</strong> אותה תשובה לאותה שאלה, בלי תלות במי שבמשמרת.
            </li>
          </ul>
        </Section>

        <Section heading="טבלת השוואה">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-body-sm">
              <thead>
                <tr className="border-b border-line-2 text-ink">
                  <th scope="col" className="py-3 text-start font-medium">
                    &nbsp;
                  </th>
                  <th scope="col" className="py-3 text-start font-medium">
                    מענה אנושי
                  </th>
                  <th scope="col" className="py-3 text-start font-medium">
                    מזכירה AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, human, ai]) => (
                  <tr key={label} className="border-b border-line align-top">
                    <th scope="row" className="py-3 pe-4 text-start font-normal text-ink-2">
                      {label}
                    </th>
                    <td className="py-3 pe-4">{human}</td>
                    <td className="py-3">{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section heading="אפשר גם את שניהם">
          <p>
            הפיצול הנפוץ הוא לא לבחור אחד: קולי עונה לכל שיחה, מטפלת במה שחוזר על עצמו — שעות,
            מחירים, זימון תור — ומעבירה לצוות או למוקד רק את מה שדורש אדם. כך אף שיחה לא הולכת
            לאיבוד, והזמן האנושי מופנה למקום שבו הוא באמת שווה משהו.
          </p>
        </Section>

        <Section heading="שלושה תרחישים נפוצים">
          <ul className="flex flex-col gap-3">
            <li>
              <strong>קליניקה קטנה שמפספסת שיחות בזמן טיפול.</strong> רוב הפניות הן זימון תור
              ושאלות חוזרות, והן מגיעות בדיוק כשאין מי שיענה. זה המקרה הקלאסי למערכת: התור נקבע
              ביומן בזמן השיחה, בלי שאף אחד יוריד כפפות.
            </li>
            <li>
              <strong>משרד עם פניות מורכבות ומעט שיחות.</strong> כשכל שיחה שונה ודורשת הבנה, מוקד
              אנושי או מזכירה במשרה חלקית יתנו תוצאה טובה יותר. מערכת תוסיף כאן חיכוך.
            </li>
            <li>
              <strong>עסק עם עומס גלי.</strong> שקט רוב היום ואז עשר שיחות ברבע שעה. מוקד אנושי
              מתמחר את השיא, ומערכת לא מרגישה אותו בכלל.
            </li>
          </ul>
        </Section>

        <Section heading="מה לשאול לפני שבוחרים">
          <ul className="flex flex-col gap-2">
            <li>כמה מהשיחות שלכם הן באמת שאלות חוזרות, וכמה דורשות שיקול דעת?</li>
            <li>מתי מגיעות השיחות שאתם מפספסים — בעומס, או אחרי שעות העבודה?</li>
            <li>אתם צריכים שמישהו יקבע תור, או רק שיאסוף הודעה?</li>
            <li>כמה מהפונים אליכם לא דוברים עברית?</li>
            <li>מה קורה למידע של הפונים, ומי שומר אותו?</li>
          </ul>
          <p>
            התשובות האלה קובעות את הבחירה הרבה יותר מהמחיר. ב<a href="/pricing">דף המחיר</a> יש
            פירוט של מה שמרכיב את העלות בצד של קולי.
          </p>
        </Section>
      </ArticlePage>
    </>
  )
}
