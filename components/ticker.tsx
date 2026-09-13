const ITEMS = [
  "מענה תוך 1.2 שניות",
  "24/7",
  "עברית + English",
  "Google Calendar",
  "WhatsApp Business",
  "זיהוי מקרי חירום",
  "זיכרון שיחה מלא",
  "Google Sheets",
  "התראות לצוות",
]

export function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-pure/8 bg-abyss py-4
      [mask-image:linear-gradient(to_left,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap" style={{ direction: "ltr" }}>
        {row.map((t, i) => (
          <span key={i} className="mono-label flex items-center gap-10 text-ash">
            <span dir="rtl">{t}</span>
            <span className="size-1 rounded-full bg-iris-gleam" />
          </span>
        ))}
      </div>
    </div>
  )
}
