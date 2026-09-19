"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X, Mic, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GUIDES } from "@/lib/guides"
import { ThemeToggle } from "./theme-toggle"

const LINKS = [
  { label: "יום עם קולי", href: "#day" },
  { label: "יכולות", href: "#capabilities" },
  { label: "למי זה מתאים", href: "#industries" },
  { label: "שאלות", href: "#faq" },
]

/** Desktop dropdown for the guide and pricing pages. */
function GuidesMenu() {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLLIElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    function onPointerDown(e: PointerEvent) {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false)
        trigger.current?.focus()
      }
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <li ref={wrap} className="relative">
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="guides-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1 rounded-lg px-3.5 py-2 text-body text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
      >
        מדריכים
        <ChevronDown className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/*
        Rendered even when closed, and hidden with CSS rather than unmounted, so
        these links stay in the server-rendered HTML. Mounting them only on open
        would hide the pillar page's internal links to the guides from crawlers.
      */}
      <ul
        id="guides-menu"
        hidden={!open}
        className="absolute end-0 top-full z-50 mt-2 min-w-60 overflow-hidden rounded-cards border border-line bg-canvas p-1.5 shadow-xl"
      >
        {GUIDES.map((g) => (
          <li key={g.href}>
            <Link
              href={g.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3.5 py-2.5 text-body-sm text-ink-2 transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
            >
              {g.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-line bg-canvas/70 backdrop-blur-2xl">
        <nav
          aria-label="ניווט ראשי"
          className="container-page flex h-16 items-center justify-between gap-6"
        >
          <a href="#hero" className="flex items-center gap-2.5" aria-label="קולי AI — דף הבית">
            <span className="flex size-9 items-center justify-center rounded-lg bg-action text-action-ink">
              <Mic className="size-4" />
            </span>
            <span className="display-serif text-2xl text-ink">קולי AI</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-body text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <GuidesMenu />
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button asChild>
                <a href="#contact">קבע פגישה</a>
              </Button>
            </div>
            <button
              type="button"
              className="flex size-12 items-center justify-center rounded-lg text-ink transition-colors duration-200 hover:bg-surface-2 md:hidden"
              aria-label={open ? "סגור תפריט" : "פתח תפריט"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-menu" className="border-t border-line md:hidden">
            <ul className="container-page flex flex-col gap-1 py-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3.5 py-3 text-subheading text-ink-2 transition-colors duration-200 hover:bg-surface-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}

              {/* Flattened on mobile: a nested dropdown inside a drawer is worse than a labelled group. */}
              <li className="mt-2 border-t border-line pt-3">
                <span className="mono-label block px-3.5 text-faint">מדריכים</span>
              </li>
              {GUIDES.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3.5 py-3 text-subheading text-ink-2 transition-colors duration-200 hover:bg-surface-2"
                  >
                    {g.label}
                  </Link>
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
