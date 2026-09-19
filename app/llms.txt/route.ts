import { INDUSTRIES } from "@/lib/industries"

export const dynamic = "force-static"

export function GET() {
  const pages = INDUSTRIES.map((i) => `- [${i.name}](https://koli-ai.com/industries/${i.slug}): ${i.tagline}`)
  const body = `# קולי AI (Koli AI)

> מוקד קבלה דיגיטלי מבוסס AI שעונה לטלפון וב-WhatsApp 24/7 בכל שפה, מזמן תורים ליומן ומתעד כל שיחה. מיועד למרפאות, קליניקות ועסקי שירות בישראל.

## עמודים
- [דף הבית](https://koli-ai.com/): סקירת המוצר, יכולות ושאלות נפוצות
${pages.join("\n")}

## יצירת קשר
- WhatsApp: https://wa.me/972555648222
- טלפון: 055-564-8222
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
