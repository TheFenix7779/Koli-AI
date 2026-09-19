import type { Metadata } from "next"
import { ArticlePage, Section } from "@/components/article-page"
import { PRIVACY_EMAIL } from "@/lib/legal"
import { PHONE_DISPLAY } from "@/lib/contact"

const TITLE = "מי עומד מאחורי קולי AI"
const DESCRIPTION =
  "מי מפעיל את קולי AI, על אילו טכנולוגיות השירות בנוי, מה הוא עושה ומה הוא לא עושה, ואיך יוצרים איתנו קשר."

export const metadata: Metadata = {
  title: `${TITLE} | קולי AI`,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", locale: "he_IL", url: "/about", siteName: "קולי AI", title: TITLE, description: DESCRIPTION },
}

// Only what we can stand behind: who operates the service, what it runs on and
// what it refuses to do. No founding story, no credentials, no customer counts.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      url: "https://koli-ai.com/about",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "he-IL",
      about: { "@id": "https://koli-ai.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://koli-ai.com/#eden",
      name: "Eden Elnekave",
      worksFor: { "@id": "https://koli-ai.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://koli-ai.com/#eitan",
      name: "Eitan Kadmon",
      worksFor: { "@id": "https://koli-ai.com/#organization" },
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <ArticlePage
        eyebrow="עלינו"
        title={TITLE}
        lead="קולי AI היא מזכירה וירטואלית שעונה לטלפון ול-WhatsApp בשם העסק. הדף הזה מסביר מי מפעיל אותה, על מה היא בנויה ומה היא לא עושה — כדי שתדעו עם מי אתם מדברים לפני שאתם מחברים אותה לקו."
        location="about"
        related={[
          { href: "/pricing", label: "כמה זה עולה" },
          { href: "/guides/ai-voice-agent", label: "מה זה סוכן AI קולי" },
          { href: "/privacy", label: "מדיניות פרטיות" },
        ]}
      >
        <Section heading="מי מפעיל את קולי">
          <p>
            קולי AI מופעלת על ידי <strong>Eden Elnekave</strong> ו־<strong>Eitan Kadmon</strong>.
            אנחנו צוות קטן, ומי שעונה לפנייה שלכם הוא מי שגם בונה את המערכת ומגדיר אותה מול העסק —
            אין שכבת תמיכה באמצע.
          </p>
          <p>
            המשמעות המעשית: אם משהו לא עובד כמו שצריך, אפשר לדבר ישירות עם מי שיכול לתקן את זה.
          </p>
        </Section>

        <Section heading="מה קרה במרפאה אחת">
          <p>
            <strong>
              מרפאת שיניים באזור המרכז ענתה בחודש הראשון עם קולי לכ־29 שיחות יותר מאשר בחודש שלפניו.
            </strong>{" "}
            אותה מרפאה, אותו מספר טלפון, אותו צוות — ההבדל היחיד היה שמישהי ענתה גם כשאף אחד לא היה
            פנוי.
          </p>
          <p>
            כדאי לומר מה המספר הזה לא אומר. זו מרפאה אחת ולא מדגם, החודש הראשון הוא לא בהכרח
            מייצג, והשוואה לחודש קודם מושפעת גם מעונתיות ומכל מה שקורה בעסק באותו זמן. אנחנו גם לא
            יודעים כמה מהשיחות האלה הפכו לתור בפועל.
          </p>
          <p>
            מה שהוא כן אומר: 29 שיחות שבחודש הקודם פשוט צלצלו לריק. כמה מהן שוות לכם, זה חישוב
            שאפשר לעשות ב<a href="/pricing">דף המחיר</a>.
          </p>
        </Section>

        <Section heading="על מה השירות בנוי">
          <p>
            אנחנו לא מפתחים מודלים בעצמנו. קולי מחברת כמה מערכות מובילות לשיחה אחת, ואנחנו חושבים
            שכדאי שתדעו בדיוק אילו:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>OpenAI</strong> — תמלול השיחה והבנת מה שנאמר
            </li>
            <li>
              <strong>ElevenLabs</strong> — הקול שבו קולי מדברת
            </li>
            <li>
              <strong>Twilio</strong> — קווי טלפון, ניתוב שיחות והודעות WhatsApp
            </li>
            <li>
              <strong>Zadarma</strong> — קווי טלפון וניתוב שיחות
            </li>
            <li>
              <strong>Google Calendar ו-Sheets</strong> — היומן שאליו נכנסים התורים והתיעוד של
              השיחות
            </li>
          </ul>
          <p>
            העבודה שלנו היא החיבור ביניהם ומה שקורה סביבו: התסריטים, ההגדרה מול העסק, הטיפול בעברית
            ובמעבר בין שפות, וההחלטה מתי להעביר שיחה לאדם. פירוט על מה קורה למידע נמצא ב
            <a href="/privacy">מדיניות הפרטיות</a>.
          </p>
        </Section>

        <Section heading="מה קולי לא עושה">
          <p>
            אנחנו מעדיפים לומר את זה מראש ולא בשיחת המכירה:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>קולי אינה שירות חירום.</strong> במצב חירום רפואי מחייגים{" "}
              <strong>101</strong> (מד״א) ולא ממתינים למענה.
            </li>
            <li>
              <strong>היא לא נותנת ייעוץ רפואי, משפטי או מקצועי.</strong> שאלות כאלה עוברות לאיש
              המקצוע בעסק.
            </li>
            <li>
              <strong>זיהוי דחיפות הוא מאמץ סביר, לא הבטחה.</strong> האחריות למיון נשארת אצל העסק.
            </li>
            <li>
              <strong>היא לא מתחזה לאדם.</strong> כל שיחה נפתחת בהצהרה שמדובר בעוזרת אוטומטית
              ושהשיחה מוקלטת.
            </li>
          </ul>
          <p>
            הפירוט המלא נמצא ב<a href="/terms">תנאי השימוש</a>.
          </p>
        </Section>

        <Section heading="איך מדברים איתנו">
          <p>
            הדרך המהירה היא WhatsApp. אפשר גם בטלפון{" "}
            <span className="ltr font-mono tabular-nums">{PHONE_DISPLAY}</span> או במייל{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="ltr">
              {PRIVACY_EMAIL}
            </a>
            .
          </p>
          <p>
            שיחת ההיכרות היא בירור ולא מצגת: נשאל כמה שיחות אתם מקבלים, מה חוזר על עצמו ומה לא.
            אם נראה לנו שקולי לא מתאימה לכם, נגיד את זה.
          </p>
        </Section>
      </ArticlePage>
    </>
  )
}
