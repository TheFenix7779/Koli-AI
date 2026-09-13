"use client"

import { useState } from "react"
import { Menu, X, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

const LINKS = [
  { label: "יום עם קולי", href: "#day" },
  { label: "יכולות", href: "#capabilities" },
  { label: "למי זה מתאים", href: "#industries" },
  { label: "שאלות", href: "#faq" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-pure/8 bg-obsidian/60 backdrop-blur-2xl">
        <nav
          aria-label="ניווט ראשי"
          className="container-page flex h-16 items-center justify-between gap-6"
        >
          <a href="#hero" className="flex items-center gap-2.5" aria-label="קולי AI — דף הבית">
            <span className="flex size-9 items-center justify-center rounded-lg bg-pure text-void">
              <Mic className="size-4" />
            </span>
            <span className="display-serif text-2xl text-pure">קולי AI</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-body text-ash transition-colors duration-200 hover:bg-pure/8 hover:text-pure"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">קבע פגישה</a>
            </Button>
          </div>

          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-lg text-pure transition-colors duration-200 hover:bg-pure/8 md:hidden"
            aria-label={open ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div id="mobile-menu" className="border-t border-pure/8 md:hidden">
            <ul className="container-page flex flex-col gap-1 py-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3.5 py-3 text-subheading text-cloud transition-colors duration-200 hover:bg-pure/8"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>קבע פגישה</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
