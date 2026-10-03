import type { Metadata } from "next"
import { ArticlePage, Section, articleJsonLd } from "@/components/article-page"
import { AudioDemo } from "@/components/audio-demo"
import { guideUpdated } from "@/lib/guides"
import { INDUSTRIES } from "@/lib/industries"

const PATH = "/ai-receptionist"
const TITLE = "פקידת קבלה AI לעסקים"
const DESCRIPTION =
  "פקידת קבלה AI עונה לטלפון ול-WhatsApp של העסק 24/7, קובעת תורים ישירות ביומן, עונה על שאלות קבועות בכל שפה ומעבירה לצוות את מה שדורש אדם. מה היא עושה, מה לא, ואיך מתחילים."
const UPDATED = guideUpdated(PATH)

export const metadata: Metadata = {
  title: `${TITLE} — עונה לטלפון ול-WhatsApp 24/7 | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", locale: "he_IL", url: PATH, siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

export default function AiReceptionistPage() {
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
              section: "פקידת קבלה AI",
              published: UPDATED,
              modified: UPDATED,
            }),
          ),
        }}
      />
      <ArticlePage
        eyebrow="פקידת קבלה AI"
        title={TITLE}
        lead="פקידת קבלה AI עונה לכל שיחה שנכנסת לעסק — גם כשהצוות באמצע עבודה, בהפסקה או אחרי סגירה. הדף הזה מסביר מה היא עושה בפועל, איפה היא לא מתאימה, ואיך נשמעת שיחה אמיתית איתה."
        location="ai-receptionist"
        related={[
          { href: "/pricing", label: "כמה עולה מזכירה וירטואלית AI" },
          { href: "/compare/human-answering-service", label: "מענה אנושי מול מזכירה AI" },
          { href: "/guides/missed-calls", label: "שיחות שלא נענו בעסק" },
        ]}
      >
        <Section heading="מה זה פקידת קבלה AI">
          <p>
            <strong>
              פקידת קבלה AI היא מערכת שעונה לטלפון ול־WhatsApp בשם העסק, מנהלת שיחה בשפה טבעית,
              קובעת תורים ישירות ביומן ומעבירה לצוות כל מה שדורש אדם.
            </strong>{" "}
            היא לא תפריט &quot;הקישו 1&quot; ולא תא קולי: הלקוח מדבר כרגיל, והיא מבינה מה הוא
            צריך, שואלת את מה שחסר ועונה.
          </p>
          <p>
            קולי AI היא פקידת קבלה כזאת, שנבנתה לעסקים בישראל: היא מדברת עברית, מזהה כשלקוח
            מדבר בשפה אחרת ועוברת אליה, ועובדת 24/7 — כולל ערבים, סופי שבוע וחגים.
          </p>
        </Section>

        <Section heading="איך זה נשמע">
          <p>
            הדרך הכי מהירה להבין מה פקידת קבלה AI עושה היא לשמוע אותה. זו הקלטה קצרה של קולי
            עונה לשיחה:
          </p>
          <AudioDemo location="ai-receptionist" />
        </Section>

        <Section heading="מה פקידת קבלה AI עושה">
          <ul className="flex flex-col gap-3">
            <li>
              <strong>עונה לכל שיחה, מיד.</strong> בלי המתנה, בלי קו תפוס, גם כשנכנסות כמה שיחות
              באותו רגע.
            </li>
            <li>
              <strong>קובעת תורים ביומן.</strong> בודקת זמינות ב־Google Calendar או ביומן או
              ב־CRM שכבר יש לכם, מציעה רק שעות פנויות ומאשרת בזמן השיחה.
            </li>
            <li>
              <strong>עונה על השאלות שחוזרות כל יום.</strong> שעות פתיחה, כתובת, חניה, מחירים
              ושירותים — לפי המידע שהעסק מגדיר.
            </li>
            <li>
              <strong>מדברת בשפה של הלקוח.</strong> עברית, אנגלית, ערבית, רוסית, צרפתית ועוד,
              בלי תפריט בחירת שפה. פירוט ב
              <a href="/guides/russian-phone-answering">מענה טלפוני ברוסית</a> וב
              <a href="/guides/arabic-phone-answering">מענה טלפוני בערבית</a>.
            </li>
            <li>
              <strong>מזהה פניות דחופות.</strong> מסמנת אותן בתיעוד ושולחת לצוות התראה במייל
              באותו רגע.
            </li>
            <li>
              <strong>עונה גם ב־WhatsApp.</strong> אותה פקידת קבלה, אותו מידע ואותו זיכרון,
              בטלפון ובהודעות.
            </li>
            <li>
              <strong>מתעדת כל פנייה.</strong> מי התקשר, מה ביקש ומה נקבע, ב־Google Sheets או
              במערכת שלכם.
            </li>
          </ul>
        </Section>

        <Section heading="מה היא לא עושה">
          <p>חשוב לדעת את זה לפני שמחברים אותה לקו:</p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>היא לא מחליפה שיקול דעת.</strong> שיחה רגישה, לקוח כועס או מקרה חריג עוברים
              לאדם.
            </li>
            <li>
              <strong>היא לא נותנת ייעוץ רפואי, משפטי או מקצועי.</strong> שאלות כאלה מועברות לאיש
              המקצוע.
            </li>
            <li>
              <strong>היא לא שירות חירום.</strong> במצב חירום רפואי מחייגים 101.
            </li>
            <li>
              <strong>היא לא מתחזה לאדם.</strong> כל שיחה נפתחת בהצהרה שמדובר בעוזרת אוטומטית
              ושהשיחה מוקלטת.
            </li>
          </ul>
          <p>
            מי עומד מאחורי השירות ועל אילו טכנולוגיות הוא בנוי, מפורט ב<a href="/about">דף עלינו</a>.
          </p>
        </Section>

        <Section heading="פקידת קבלה AI או פקידת קבלה אנושית?">
          <p>
            ברוב העסקים זו לא שאלה של או־או. פקידת קבלה אנושית עדיפה בפער בכל מה שדורש רגישות,
            שיקול דעת או היכרות עם לקוח ותיק. פקידת קבלה AI עדיפה בכל מה שחוזר על עצמו ובכל
            השעות שבהן אין מי שיענה: הפסקות, עומסים, ערבים וסופי שבוע.
          </p>
          <p>
            לכן ברוב העסקים שעובדים איתנו, קולי מכסה את השעות והעומסים, והצוות ממשיך לעשות את מה
            שהוא עושה הכי טוב. מרפאת שיניים באזור המרכז, למשל, ענתה כך בחודש הראשון לכ־29 שיחות
            יותר מאשר בחודש שלפניו — אותו צוות ואותו מספר, רק שמישהי ענתה גם כשאף אחד לא היה פנוי.
            זו מרפאה אחת ולא מדגם.
          </p>
          <p>
            השוואה מלאה מול מוקד מענה אנושי נמצאת ב
            <a href="/compare/human-answering-service">דף ההשוואה</a>, ופירוט על מה מרכיב את
            המחיר ב<a href="/pricing">דף המחיר</a>.
          </p>
        </Section>

        <Section heading="הרבה שמות, אותו דבר">
          <p>
            בשוק משתמשים בהרבה שמות לאותו שירות: <strong>פקידת קבלה וירטואלית</strong>,{" "}
            <strong>מזכירה וירטואלית AI</strong>, <strong>רצפציה דיגיטלית</strong>,{" "}
            <strong>מוקדנית AI</strong>, <strong>מוקד קבלה דיגיטלי</strong> או{" "}
            <a href="/guides/ai-voice-agent">סוכן AI קולי</a>. ההבדלים בין השמות הם בעיקר שיווקיים.
          </p>
          <p>
            מה שכן כדאי להבדיל: יש מערכות שרק עונות ורושמות הודעה, יש כאלה שעובדות רק בצ&apos;אט,
            ויש כאלה שמנהלות שיחה קולית מלאה וקובעות תור ביומן. לפני שבוחרים, כדאי לבקש שיחת
            ניסיון ולבדוק אותה — יש לנו{" "}
            <a href="/guides/hebrew-voice-bot">צ&apos;קליסט לבדיקת בוט קולי בעברית</a> בדיוק
            בשביל זה.
          </p>
        </Section>

        <Section heading="איך מתחילים">
          <ol className="flex flex-col gap-3 [&>li]:ms-5 [&>li]:list-decimal">
            <li>
              <strong>שיחת היכרות ב־WhatsApp.</strong> נבין איך העסק שלכם עובד ואילו שיחות
              מגיעות. ללא התחייבות.
            </li>
            <li>
              <strong>הגדרה.</strong> נגדיר יחד את המידע שפקידת הקבלה צריכה להכיר — שעות,
              שירותים, מחירים, מה עושים במקרה דחוף — ונחבר אותה ליומן.
            </li>
            <li>
              <strong>בדיקה לפני חיבור.</strong> אתם מתקשרים, מנסים לשבור אותה, ורק אז מפנים
              אליה את הקו.
            </li>
          </ol>
        </Section>

        <Section heading="לאילו עסקים">
          <p>לכל עסק שהטלפון שלו מצלצל כשהידיים תפוסות. יש לנו דפים ייעודיים ל:</p>
          <ul className="flex flex-col gap-1">
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <a href={`/industries/${i.slug}`}>{i.name}</a>
              </li>
            ))}
          </ul>
        </Section>
      </ArticlePage>
    </>
  )
}
