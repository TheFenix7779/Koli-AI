import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"
import { AudioDemo } from "@/components/audio-demo"
import { CLIPS, SITE_URL, transcriptText } from "@/lib/site"

const TITLE = "מה זה סוכן AI קולי ואיך הוא עובד"
const DESCRIPTION =
  "הסבר על סוכן AI קולי: מה קורה בפועל בתוך שיחה, מה מבדיל מערכת טובה מגרועה, למה עברית מסובכת יותר מאנגלית ואיפה סוכן קולי לא מתאים."

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: "/guides/ai-voice-agent" },
  openGraph: { type: "article", locale: "he_IL", url: "/guides/ai-voice-agent", siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

export default function VoiceAgentGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              ...articleJsonLd({ title: TITLE, description: DESCRIPTION, path: "/guides/ai-voice-agent", section: "מדריך" }),
              "@graph": [
                ...articleJsonLd({ title: TITLE, description: DESCRIPTION, path: "/guides/ai-voice-agent", section: "מדריך" })["@graph"],
                {
                  "@type": "AudioObject",
                  name: CLIPS.full.label,
                  description: "הקלטת דוגמה של שיחה מלאה עם קולי AI.",
                  contentUrl: `${SITE_URL}${CLIPS.full.src}`,
                  encodingFormat: "audio/mpeg",
                  duration: CLIPS.full.iso,
                  transcript: transcriptText(CLIPS.full.transcript),
                  inLanguage: "he-IL",
                },
              ],
            },
          ),
        }}
      />
      <ArticlePage
        eyebrow="מדריך"
        title={TITLE}
        lead="סוכן AI קולי הוא מערכת שמנהלת שיחת טלפון מלאה בשפה טבעית. המונח נשמע טכני, אבל מה שקורה מאחוריו פשוט להסבר — וההבדל בין מערכת טובה לגרועה נמצא בפרטים שקל לפספס בדמו."
        location="guide-voice-agent"
        related={[
          { href: "/guides/hebrew-voice-bot", label: "בוט קולי בעברית" },
          { href: "/pricing", label: "כמה עולה מזכירה וירטואלית AI" },
          { href: "/", label: "מזכירה וירטואלית AI" },
        ]}
      >
        <Section heading="ההגדרה, בשתי שורות">
          <p>
            <strong>
              סוכן AI קולי הוא מערכת שמנהלת שיחת טלפון שלמה בשפה טבעית, בלי תפריטים ובלי לחיצות
              על ספרות.
            </strong>{" "}
            היא עונה, מבינה מה הפונה רוצה, שואלת שאלות המשך, מבצעת פעולה — למשל קביעת תור ביומן —
            ומסכמת את השיחה בכתב.
          </p>
          <p>
            מתחת למכסה המנוע היא משרשרת שלושה חלקים: <strong>זיהוי דיבור</strong> שהופך את מה שנאמר לטקסט,{" "}
            <strong>מודל שפה</strong> שמבין את הבקשה ומחליט מה לענות, ו<strong>מנוע דיבור</strong>{" "}
            שמקריא את התשובה בקול. כל זה קורה תוך פחות משנייה, שוב ושוב, לאורך כל השיחה.
          </p>
          <p>
            ההבדל מתפריט קולי ישן הוא שאין מסלול קבוע: הפונה מדבר חופשי, והמערכת מתאימה את עצמה
            לניסוח שלו ולא להפך.
          </p>
          <p>
            מה שהופך את זה לשימושי בעסק הוא החלק הרביעי, שלא תמיד מזכירים: חיבור למערכות. סוכן
            שיכול לדבר יפה אבל לא יכול לפתוח את היומן הוא תא קולי משודרג.
          </p>
        </Section>

        <Section heading="איך שיחה נראית מבפנים">
          <p>נניח שמטופל מתקשר למרפאה בשמונה בערב:</p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>המערכת עונה</strong> ומודיעה שמדובר בעוזרת אוטומטית ושהשיחה מוקלטת.
            </li>
            <li>
              <strong>המטופל מדבר חופשי</strong> — "רציתי לקבוע תור לניקוי אבנית" — בלי תפריט ובלי
              ללחוץ ספרות.
            </li>
            <li>
              <strong>הדיבור הופך לטקסט</strong> והמודל מזהה את הכוונה: זימון תור, סוג טיפול מסוים.
            </li>
            <li>
              <strong>המערכת פונה ליומן</strong>, בודקת מה פנוי בהתאם למשך הטיפול ומציעה שתי אפשרויות.
            </li>
            <li>
              <strong>המטופל בוחר</strong>, והתור נרשם בזמן השיחה.
            </li>
            <li>
              <strong>השיחה מתועדת</strong> — פרטי הפונה, סיכום, ורמת דחיפות אם זוהתה.
            </li>
          </ul>
          <p>
            כל שלב כאן הוא נקודת כשל אפשרית, ושם נמצא ההבדל האמיתי בין מערכות. כך זה נשמע בפועל:
          </p>
          <AudioDemo location="guide-voice-agent" clip={CLIPS.full} />
        </Section>

        <Section heading="מה מבדיל סוכן טוב מגרוע">
          <ul className="flex flex-col gap-3">
            <li>
              <strong>זמן תגובה.</strong> שתיקה של שנייה וחצי אחרי שסיימתם לדבר מרגישה שבורה. זה
              הדבר הראשון שאנשים שמים לב אליו, גם אם הם לא יודעים לנסח את זה.
            </li>
            <li>
              <strong>התמודדות עם הפרעה.</strong> אנשים נכנסים לדברי הצד השני. מערכת שממשיכה לדבר
              מעל הפונה או מתקלקלת כשקוטעים אותה תיחשף בשיחה הראשונה.
            </li>
            <li>
              <strong>זיכרון בתוך השיחה.</strong> אם אמרתם את שמכם בהתחלה ונשאלתם עליו שוב בסוף,
              המערכת לא באמת מנהלת שיחה.
            </li>
            <li>
              <strong>ידיעה מתי להעביר.</strong> מערכת טובה מזהה שהיא מחוץ לתחום ומעבירה לאדם עם
              סיכום. מערכת גרועה מנחשת, וזה הרבה יותר גרוע משלא לענות.
            </li>
            <li>
              <strong>מה קורה כשהיא לא מבינה.</strong> שאלת הבהרה אחת סבירה. שלוש זו לולאה, והפונה
              מנתק.
            </li>
          </ul>
        </Section>

        <Section heading="עברית היא לא אנגלית">
          <p>
            רוב הסוכנים הקוליים בעולם נבנו לאנגלית, והתרגום לעברית לא מובן מאליו:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>דיבור מעורב.</strong> "קבעתי appointment לשבוע הבא" היא משפט נורמלי בישראל.
              מערכת שנועלת שפה אחת בתחילת השיחה נשברת עליו.
            </li>
            <li>
              <strong>שמות.</strong> שמות ישראליים, ערביים ורוסיים שנכתבים נכון בתמלול — אחרת
              התיעוד לא שווה הרבה.
            </li>
            <li>
              <strong>מספרים ותאריכים.</strong> "יום שלישי הבא בארבע וחצי" הוא ניסוח שצריך להפוך
              לרשומה מדויקת ביומן.
            </li>
            <li>
              <strong>מבטאים.</strong> קהל דובר עברית לא נשמע אחיד, ומערכת שאומנה על דגימה צרה
              תתקשה.
            </li>
          </ul>
        </Section>

        <Section heading="מה צריך כדי להפעיל סוכן קולי">
          <p>
            הרכיב הטכני הוא בדרך כלל החלק הקל. מה שבאמת לוקח זמן הוא להחליט מה המערכת אמורה לדעת:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>מספר טלפון ודרך הפניה</strong> — או מספר ייעודי, או הפניה מהקו הקיים בשעות
              שתבחרו.
            </li>
            <li>
              <strong>המידע הקבוע</strong> — שעות, כתובת, שירותים, מה עונים על שאלות נפוצות. זה
              המסמך שקובע את איכות המענה יותר מכל דבר אחר.
            </li>
            <li>
              <strong>גישה ליומן</strong> — Google Calendar, או היומן וה־CRM שאתם כבר עובדים איתם.
              בלעדיה המערכת יכולה רק למסור הודעה.
            </li>
            <li>
              <strong>כללי העברה</strong> — מתי להעביר לאדם, למי, ומה לעשות כשאף אחד לא זמין.
            </li>
            <li>
              <strong>מקום לתיעוד</strong> — גיליון או מערכת שבה כל פנייה נרשמת ונשארת.
            </li>
          </ul>
          <p>
            עסק שכבר כתב לעצמו תשובות לשאלות החוזרות נמצא בחצי הדרך. עסק שהמידע אצלו בראש של
            מישהו אחד יגלה שזה החלק שדורש את העבודה.
          </p>
        </Section>

        <Section heading="איפה זה לא מתאים">
          <p>
            שיחות ארוכות שדורשות שיקול דעת, שיחות רגישות רגשית, וכל דבר שדורש הכרעה מקצועית — שם
            צריך אדם. קולי מזהה מצבים כאלה ומעבירה אותם הלאה.
          </p>
          <p>
            וחשוב מכל: <strong>סוכן קולי אינו שירות חירום</strong>. במצב חירום רפואי מחייגים 101.
            הנקודה הזאת מפורטת ב<a href="/terms">תנאי השימוש</a>, והיא לא ניסוח משפטי בלבד אלא
            גבול אמיתי של הטכנולוגיה.
          </p>
        </Section>
      </ArticlePage>
    </>
  )
}
