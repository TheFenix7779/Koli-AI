"use client"

import { useEffect, useState } from "react"

const LANGS = [
  { label: "עברית", greet: "שלום" },
  { label: "English", greet: "Hello" },
  { label: "العربية", greet: "مرحبا" },
  { label: "Русский", greet: "Привет" },
  { label: "Français", greet: "Bonjour" },
  { label: "Español", greet: "Hola" },
  { label: "አማርኛ", greet: "ሰላም" },
]

export function LanguageCycle() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setI((v) => (v + 1) % LANGS.length), 2200)
    return () => clearInterval(t)
  }, [])

  const active = LANGS[i]

  return (
    <div className="flex flex-col gap-7">
      <div className="flex h-24 flex-col justify-center gap-1">
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-void/50">
          שפה מזוהה · {active.label}
        </span>
        <span
          key={active.greet}
          dir="auto"
          className="animate-swap-in display-serif block text-[52px] leading-none text-void"
        >
          {active.greet}
        </span>
      </div>

      <ul className="flex flex-wrap gap-1.5">
        {LANGS.map((l, idx) => (
          <li
            key={l.label}
            dir="auto"
            className={`rounded-full px-3 py-1 text-[13px] transition-colors duration-300 ${
              idx === i ? "bg-void text-pure" : "bg-void/10 text-void/70"
            }`}
          >
            {l.label}
          </li>
        ))}
        <li className="rounded-full bg-void/10 px-3 py-1 text-[13px] text-void/70">ועוד…</li>
      </ul>
    </div>
  )
}
