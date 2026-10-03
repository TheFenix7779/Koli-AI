import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"
import { guideUpdated } from "@/lib/guides"

const PATH = "/guides/arabic-phone-answering"
const TITLE = "מענה טלפוני בערבית לעסקים"
const DESCRIPTION =
  "איך לתת מענה טלפוני וב-WhatsApp בערבית: ההבדל בין עסק בחברה הערבית לעסק עם לקוחות דוברי ערבית, ערבית מדוברת מול ספרותית, ומה לבדוק לפני שבוחרים פתרון."
const UPDATED = guideUpdated(PATH)

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", locale: "he_IL", url: PATH, siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

export default function ArabicPhoneAnsweringGuide() {
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
              section: "מדריך",
              published: UPDATED,
              modified: UPDATED,
            }),
          ),
        }}
      />
      <ArticlePage
        eyebrow="מדריך"
        title={TITLE}
        lead="לקוח שמתקשר בערבית ושומע מענה בשפה שלו מרגיש שמחכים לו. לקוח ששומע רק עברית לא תמיד ינסה שוב. הדף הזה מסביר איך לתת מענה בערבית — ולמה ״בערבית״ זו רק חצי מהשאלה."
        location="guide-arabic"
        related={[
          { href: "/guides/russian-phone-answering", label: "מענה טלפוני ברוסית" },
          { href: "/industries/medical-clinics", label: "מוקד קבלה AI לקליניקה" },
          { href: "/compare/human-answering-service", label: "מענה אנושי מול מזכירה AI" },
        ]}
      >
        <Section heading="התשובה הקצרה">
          <p>
            <strong>
              מענה טלפוני בערבית טוב הוא מענה בערבית המדוברת שהלקוחות שלכם מדברים, לא בערבית
              ספרותית, ועם יכולת להבין עברית שמשולבת באמצע המשפט.
            </strong>{" "}
            אפשר לתת אותו דרך עובד דובר ערבית, מוקד מענה עם נציגים דוברי ערבית, או מערכת AI
            שמזהה את השפה ועוברת אליה. בכל אחת מהאפשרויות, הבדיקה החשובה היא איך זה נשמע ללקוח
            אמיתי — לא איך זה נשמע בדמו.
          </p>
        </Section>

        <Section heading="שני סוגי עסקים, שני צרכים">
          <ul className="flex flex-col gap-4">
            <li>
              <strong>עסק בחברה הערבית.</strong> רוב הלקוחות מדברים ערבית, והיא שפת ברירת המחדל.
              עברית היא השפה המשנית — ללקוחות יהודים, לספקים, למשרדים. כאן המענה בערבית הוא
              השירות עצמו, והוא צריך להיות טוב לפחות כמו מזכירה מקומית.
            </li>
            <li>
              <strong>עסק עם לקוחות דוברי ערבית.</strong> מרפאה, משרד עורכי דין או בית מרקחת שרוב
              הלקוחות שלהם מדברים עברית, וחלק מדברים ערבית. כאן הערבית היא שירות שמונע מלקוח
              ללכת למקום אחר, והשאלה העיקרית היא אם יש מי שעונה בערבית בכל שעה — או רק כשהעובד
              שמדבר ערבית במשמרת.
            </li>
          </ul>
          <p>
            כדאי לדעת לאיזה מהשניים אתם שייכים לפני שמשווים הצעות, כי זה משנה מה חשוב לבדוק.
          </p>
        </Section>

        <Section heading="ערבית מדוברת, לא ספרותית">
          <p>
            כמעט כל מי שמתקשר לעסק מדבר בערבית מדוברת מקומית, לא בערבית הספרותית של החדשות. מענה
            בערבית ספרותית מלאה נשמע רשמי ומרוחק, בערך כמו מזכירה שעונה בעברית של ספר חוקים.
          </p>
          <p>ויש עוד כמה דברים שמענה טוב צריך להתמודד איתם:</p>
          <ul className="flex flex-col gap-3">
            <li>
              <strong>עברית בתוך ערבית.</strong> &quot;
              <bdi dir="rtl">بدي أحجز תור عند الدكتور</bdi>&quot; הוא משפט רגיל. מילים כמו תור,
              קופה, הפניה וביטוח מגיעות הרבה פעמים בעברית, ודווקא הן המילים החשובות בשיחה.
            </li>
            <li>
              <strong>ערבית באותיות לטיניות ב־WhatsApp.</strong> הרבה אנשים כותבים ערבית
              באותיות לטיניות ובמספרים, למשל{" "}
              <bdi dir="ltr" className="font-mono">
                bdi a7jez dor
              </bdi>
              . מענה ב־WhatsApp שלא מבין את זה יפספס חלק גדול מהפניות הכתובות.
            </li>
            <li>
              <strong>שמות.</strong> שם ערבי שנאמר בטלפון צריך להירשם ביומן כך שהצוות יזהה את
              הלקוח כשהוא מגיע.
            </li>
            <li>
              <strong>שעות וימים.</strong> שעות פעילות שונות בחגים, בחודש הרמדאן או ביום שישי
              צריכות להיות מוגדרות מראש, אחרת המענה ימסור שעות לא נכונות בדיוק בתקופות העמוסות.
            </li>
          </ul>
        </Section>

        <Section heading="איך זה עובד בקולי — ומה כדאי לבדוק">
          <p>
            קולי מזהה את שפת המתקשר מהמילים הראשונות ועוברת אליה, בטלפון וב־WhatsApp, בלי תפריט
            בחירת שפה. אם הלקוח מחליף בין ערבית לעברית, קולי עוברת איתו. המידע שהעסק מגדיר —
            שעות, כתובת, שירותים, מה עושים במקרה דחוף — נמסר בכל שפה, וכל שיחה מתועדת.
          </p>
          <p>
            נאמר ביושר: ערבית מדוברת היא המקום שבו כל מערכת קולית, כולל שלנו, צריכה הכי הרבה
            בדיקה. יש הבדלים בין אזורים ובין ניבים, והמבחן היחיד שחשוב הוא שיחה על התוכן שלכם עם
            מישהו שמדבר כמו הלקוחות שלכם. לכן בשיחת ההיכרות אנחנו מציעים לבדוק בדיוק את זה, לפני
            שמחברים משהו לקו.
          </p>
        </Section>

        <Section heading="צ'קליסט לשיחת ניסיון בערבית">
          <p>
            בקשו ממישהו שמדבר ערבית כמו הלקוחות שלכם לעשות את הבדיקות האלה — בכל פתרון, אנושי או
            אוטומטי:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>לדבר בערבית מדוברת</strong>, בקצב רגיל, ולשמוע אם התשובה נשמעת טבעית או
              רשמית מדי.
            </li>
            <li>
              <strong>לשלב מילים בעברית</strong> — תור, הפניה, קופה — ולראות שהן נקלטות.
            </li>
            <li>
              <strong>להתחיל בעברית ולעבור לערבית</strong> באמצע השיחה.
            </li>
            <li>
              <strong>לשלוח הודעת WhatsApp בערבית באותיות לטיניות</strong> ולראות מה חוזר.
            </li>
            <li>
              <strong>לתת שם ולקבוע תור</strong>, ואז לבדוק איך השם נרשם ביומן.
            </li>
            <li>
              <strong>לבקש לדבר עם בן אדם</strong> ולוודא שזה עובד.
            </li>
          </ul>
          <p>
            עוד בדיקות שמתאימות לכל מערכת קולית נמצאות ב
            <a href="/guides/hebrew-voice-bot">מדריך לבוט קולי בעברית</a>, ואם השאלה אצלכם היא
            בעיקר כמה שיחות הולכות לאיבוד, כדאי להתחיל מ
            <a href="/guides/missed-calls">המדריך לשיחות שלא נענו</a>.
          </p>
        </Section>

        <Section heading="לאילו עסקים זה הכי חשוב">
          <p>
            בכל עסק שחלק מהלקוחות שלו מדברים ערבית, ובמיוחד כשהשיחה כוללת פרטים שחייבים להיות
            מדויקים:{" "}
            <a href="/industries/medical-clinics">קליניקות ומרפאות</a>,{" "}
            <a href="/industries/dental-clinics">מרפאות שיניים</a>,{" "}
            <a href="/industries/pharmacies">בתי מרקחת</a>,{" "}
            <a href="/industries/law-firms">משרדי עורכי דין</a> ו
            <a href="/industries/real-estate">משרדי נדל&quot;ן</a>. השאלות דומות בכל השפות —
            מתי פתוח, כמה זה עולה, מתי יש תור — וההבדל הוא אם יש מי שעונה עליהן בשפה של הלקוח.
          </p>
        </Section>
      </ArticlePage>
    </>
  )
}
