import { INDUSTRIES } from "@/lib/industries"

export const dynamic = "force-static"

export function GET() {
  const pages = INDUSTRIES.map((i) => `- [${i.name}](https://koli-ai.com/industries/${i.slug}): ${i.tagline}`)
  const body = `# קולי AI (Koli AI)

> מוקד קבלה דיגיטלי מבוסס AI שעונה לטלפון וב-WhatsApp 24/7 בכל שפה, מזמן תורים ליומן ומתעד כל שיחה. מיועד למרפאות, קליניקות ועסקי שירות בישראל.

## עמודים
- [דף הבית](https://koli-ai.com/): סקירת המוצר, יכולות ושאלות נפוצות
${pages.join("\n")}

## מדריכים
- [מי עומד מאחורי קולי AI](https://koli-ai.com/about): מי מפעיל את השירות, על אילו טכנולוגיות הוא בנוי ומה הוא לא עושה
- [כמה עולה מזכירה וירטואלית AI](https://koli-ai.com/pricing): מה מרכיב את המחיר ואיך להשוות אותו לעלות המלאה של מזכירה
- [מענה אנושי לעסקים מול מזכירה AI](https://koli-ai.com/compare/human-answering-service): השוואה בין מוקד מענה אנושי חיצוני למערכת AI
- [מה זה סוכן AI קולי](https://koli-ai.com/guides/ai-voice-agent): איך עובדת שיחה קולית מבוססת AI, ואיפה היא לא מתאימה
- [בוט קולי בעברית](https://koli-ai.com/guides/hebrew-voice-bot): צ'קליסט לבדיקת בוט קולי לפני חיבור לקו

## מגבלות
- קולי אינה שירות חירום. במצב חירום רפואי יש לחייג 101.
- זיהוי פניות דחופות הוא מאמץ סביר; האחריות למיון נשארת אצל העסק.
- קולי אינה נותנת ייעוץ רפואי או משפטי.

## יצירת קשר
- WhatsApp: https://wa.me/972555648222
- טלפון: 055-564-8222
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
