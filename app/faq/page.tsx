import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"
import { guideUpdated } from "@/lib/guides"

const PATH = "/faq"
const TITLE = "שאלות ותשובות על קולי AI"
const DESCRIPTION =
  "תשובות קצרות וישירות על קולי AI: מה היא עושה, באילו שפות, WhatsApp, יומן, מחיר, פרטיות, מה קורה בפנייה דחופה ומה היא לא עושה."
const UPDATED = guideUpdated(PATH)

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", locale: "he_IL", url: PATH, siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

// One question per <h2>, answer first. These pages get quoted by AI search
// surfaces one passage at a time, so each answer has to stand on its own.
// No FAQPage markup: Google limits that rich result to government and health
// sites (see SEO-STRATEGY.md), and the HTML structure is what gets read.

export default function FaqPage() {
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
              section: "שאלות ותשובות",
              published: UPDATED,
              modified: UPDATED,
            }),
          ),
        }}
      />
      <ArticlePage
        eyebrow="שאלות ותשובות"
        title={TITLE}
        lead="כל מה ששואלים אותנו לפני שמתחילים, בתשובות קצרות. אם השאלה שלכם לא כאן, אפשר לשאול אותנו ישירות ב־WhatsApp."
        location="faq"
        related={[
          { href: "/ai-receptionist", label: "פקידת קבלה AI" },
          { href: "/compare/ai-receptionist-israel", label: "השוואת מזכירות AI בישראל" },
          { href: "/pricing", label: "כמה זה עולה" },
        ]}
      >
        <Section heading="מה זה קולי AI?">
          <p>
            <strong>
              קולי AI היא פקידת קבלה וירטואלית שעונה לטלפון ול־WhatsApp בשם העסק, 24/7, קובעת תורים
              ישירות ביומן ומתעדת כל פנייה.
            </strong>{" "}
            היא מיועדת למרפאות, קליניקות ועסקי שירות בישראל, ומדברת עברית ועוד שפות. פירוט ב
            <a href="/ai-receptionist">דף פקידת קבלה AI</a>.
          </p>
        </Section>

        <Section heading="באילו שפות קולי מדברת?">
          <p>
            קולי מזהה את שפת הפונה מהמילים הראשונות ועוברת אליה: עברית, אנגלית, ערבית, רוסית,
            צרפתית, ספרדית, אמהרית ושפות נוספות. אין תפריט בחירת שפה. מדריכים מפורטים:{" "}
            <a href="/guides/russian-phone-answering">מענה טלפוני ברוסית</a>,{" "}
            <a href="/guides/arabic-phone-answering">מענה טלפוני בערבית</a>.
          </p>
        </Section>

        <Section heading="האם קולי עונה גם ב־WhatsApp?">
          <p>
            כן. אותה מערכת עונה לשיחות טלפון ולהודעות WhatsApp, עם אותו מידע על העסק ואותו תיעוד.
          </p>
        </Section>

        <Section heading="כמה עולה קולי?">
          <p>
            המחיר הוא מנוי חודשי שנקבע לפי היקף השיחות ולפי החיבורים שהעסק צריך. אין עלות העסקה
            ואין תוספת על לילות, שבתות וחגים. מה מרכיב את המחיר ואיך להשוות אותו לעלות של מזכירה
            מוסבר ב<a href="/pricing">דף המחיר</a>.
          </p>
        </Section>

        <Section heading="אפשר לנסות לפני שמתחייבים?">
          <p>
            שיחת ההיכרות וההדגמה חינם וללא התחייבות. אין אצלנו ניסיון בשירות עצמי — אנחנו מגדירים
            את המערכת יחד עם העסק, כך שהבדיקה נעשית על התוכן האמיתי שלכם ולא על דמו כללי.
          </p>
        </Section>

        <Section heading="הלקוחות יודעים שהם מדברים עם מערכת?">
          <p>
            כן. כל שיחה נפתחת בהודעה שמדובר בעוזרת אוטומטית ושהשיחה מוקלטת, לפני כל שאלה. קולי לא
            מציגה את עצמה כאדם, ומי שמבקש לדבר עם נציג מועבר או שנרשמת עבורו הודעה.
          </p>
        </Section>

        <Section heading="קולי מחליפה את המזכירה?">
          <p>
            ברוב העסקים לא. קולי טובה בשיחות שחוזרות על עצמן — שעות, מחירים, זימון תור — ובשעות
            שאין בהן מענה. מזכירה אנושית עדיפה בכל מה שדורש שיקול דעת, רגישות או היכרות עם לקוח
            ותיק. השוואה מלאה ב<a href="/compare/human-answering-service">דף מענה אנושי מול AI</a>.
          </p>
        </Section>

        <Section heading="איך קולי מתחברת ליומן?">
          <p>
            ברירת המחדל היא Google Calendar לתורים, בסנכרון דו־כיווני, ו־Google Sheets לתיעוד. אם
            אתם כבר עובדים עם יומן אחר או עם CRM, קולי מתחברת אליו ואין צורך להחליף כלים.
          </p>
        </Section>

        <Section heading="מה קורה כשמישהו מתקשר עם מקרה דחוף?">
          <p>
            קולי מזהה דחיפות מתוך תוכן השיחה, מסמנת את הפנייה כדחופה ושולחת לצוות התראה במייל באותו
            רגע. זיהוי הדחיפות הוא מאמץ סביר ולא הבטחה, והאחריות למיון נשארת אצל העסק. קולי אינה
            שירות חירום — במצב חירום רפואי מחייגים 101.
          </p>
        </Section>

        <Section heading="מה קורה למידע ולהקלטות?">
          <p>
            הקלטות שיחה נשמרות עד 30 יום ונמחקות. תמלולים ופרטי פנייה נשמרים עד 12 חודשים. העסק הוא
            בעל המידע וקולי מעבדת אותו עבורו בלבד; המידע לא נמכר ולא משמש לאימון מודלים. חלק מהעיבוד
            נעשה מחוץ לישראל, בעיקר בארצות הברית. הפירוט המלא ב
            <a href="/privacy">מדיניות הפרטיות</a>.
          </p>
        </Section>

        <Section heading="מה קולי לא עושה?">
          <p>
            קולי לא נותנת ייעוץ רפואי, משפטי או מקצועי, היא לא שירות חירום, והיא לא מבקשת מספר
            תעודת זהות, פרטי תשלום או היסטוריה רפואית. שאלות שדורשות איש מקצוע מועברות לצוות.
          </p>
        </Section>

        <Section heading="לאילו עסקים קולי מתאימה?">
          <p>
            לכל עסק שהטלפון שלו מצלצל כשהידיים תפוסות. יש לנו דפים ייעודיים ל
            <a href="/industries/dental-clinics">מרפאות שיניים</a>,{" "}
            <a href="/industries/medical-clinics">קליניקות רפואיות</a>,{" "}
            <a href="/industries/aesthetics-spa">קליניקות אסתטיקה וספא</a>,{" "}
            <a href="/industries/law-firms">משרדי עורכי דין</a>,{" "}
            <a href="/industries/real-estate">סוכנויות נדל״ן</a>,{" "}
            <a href="/industries/pharmacies">בתי מרקחת</a>, ולבעלי מקצוע:{" "}
            <a href="/industries/plumbers">אינסטלטורים</a>,{" "}
            <a href="/industries/electricians">חשמלאים</a> ו
            <a href="/industries/leak-detection">מאתרי נזילות</a>.
          </p>
        </Section>

        <Section heading="יש הוכחה שזה עובד?">
          <p>
            מרפאת שיניים באזור המרכז ענתה בחודש הראשון עם קולי לכ־29 שיחות יותר מאשר בחודש שלפניו —
            אותו צוות ואותו מספר טלפון. זו מרפאה אחת וחודש אחד, לא מחקר. אפשר גם{" "}
            <a href="/guides/ai-voice-agent">לשמוע הקלטה של שיחה מלאה</a>.
          </p>
        </Section>

        <Section heading="במה קולי שונה ממזכירות AI אחרות?">
          <p>
            קולי עונה בטלפון וב־WhatsApp באותה מערכת ועוברת לכל שפה שבה הלקוח מדבר, ואנחנו מגדירים
            אותה יחד עם העסק. מתחרים מסוימים מפרסמים מחיר נמוך יותר או מציעים ניסיון בשירות עצמי.
            ההשוואה המלאה, עם מקורות, ב<a href="/compare/ai-receptionist-israel">דף ההשוואה</a>.
          </p>
        </Section>

        <Section heading="מי עומד מאחורי קולי?">
          <p>
            קולי AI מופעלת על ידי Eden Elnekave ו־Eitan Kadmon. השירות בנוי על OpenAI, ElevenLabs,
            Twilio, Zadarma ו־Google. פירוט ב<a href="/about">דף עלינו</a>.
          </p>
        </Section>

        <Section heading="איך מתחילים?">
          <p>
            שולחים הודעה ב־WhatsApp. בשיחת היכרות קצרה נבין איך העסק עובד, נגדיר יחד את המידע
            והתסריטים שקולי צריכה להכיר ונחבר אותה ליומן.
          </p>
        </Section>
      </ArticlePage>
    </>
  )
}
