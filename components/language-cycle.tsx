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
    <div className="flex flex-col items-center gap-7">
      <div className="relative flex size-[236px] items-center justify-center" aria-hidden>
        <span className="absolute inset-0 rounded-full border border-iris-gleam/25" />
        <span className="absolute inset-[26px] rounded-full border border-iris-gleam/40" />
        <span className="absolute inset-[10px] rounded-full bg-iris-gleam/25 blur-2xl" />
        <span className="relative flex size-[184px] items-center justify-center rounded-full bg-iris-gleam px-5 shadow-[inset_0_-18px_40px_rgba(0,0,0,0.16),inset_0_14px_32px_rgba(255,255,255,0.3)]">
          <span
            key={active.greet}
            dir="auto"
            className="animate-swap-in display-serif text-center text-[38px] font-medium leading-none text-void"
          >
            {active.greet}
          </span>
        </span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-faint">
          שפה מזוהה · {active.label}
        </span>

        <ul className="flex flex-wrap justify-center gap-1.5">
          {LANGS.map((l, idx) => (
            <li
              key={l.label}
              dir="auto"
              className={`rounded-full px-3 py-1 text-[13px] transition-colors duration-300 ${
                idx === i ? "bg-iris-gleam text-void" : "border border-line text-muted"
              }`}
            >
              {l.label}
            </li>
          ))}
          <li className="rounded-full border border-line px-3 py-1 text-[13px] text-faint">ועוד…</li>
        </ul>
      </div>
    </div>
  )
}
