import { Reveal } from "./reveal"

const STACK = [
  { name: "GPT-4o", role: "הבנה ושיחה" },
  { name: "ElevenLabs", role: "קול טבעי" },
  { name: "Vapi.ai", role: "שיחות בזמן אמת" },
  { name: "Twilio", role: "טלפוניה" },
  { name: "WhatsApp Business API", role: "הודעות" },
  { name: "Google Calendar", role: "יומן ותורים" },
  { name: "Google Sheets", role: "תיעוד" },
  { name: "Email", role: "התראות לצוות" },
]

export function Integrations() {
  return (
    <section className="border-y border-line bg-canvas-alt py-20 md:py-24">
      <div className="container-page flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <Reveal className="flex max-w-sm flex-col gap-3">
          <span className="mono-label text-muted">מתחת למכסה המנוע</span>
          <h2 className="display-serif text-[32px] leading-tight text-ink">
            בנויה על הטכנולוגיות המובילות בעולם לאינטראקציה קולית.
          </h2>
        </Reveal>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-4 lg:w-[60%]">
          {STACK.map((s, i) => (
            <Reveal key={s.name} as="li" delay={i * 50} className="flex flex-col gap-1 border-t border-line pt-4">
              <span className="ltr text-start font-mono text-sm text-ink">{s.name}</span>
              <span className="text-body-sm text-faint">{s.role}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
