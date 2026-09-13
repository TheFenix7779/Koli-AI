"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark")
  }, [])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    const root = document.documentElement
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (animate) {
      root.classList.add("theme-transition")
      window.setTimeout(() => root.classList.remove("theme-transition"), 320)
    }
    root.dataset.theme = next
    try {
      localStorage.setItem("koli-theme", next)
    } catch {}
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "עבור למצב בהיר" : "עבור למצב כהה"}
      className="flex size-11 cursor-pointer items-center justify-center rounded-lg border border-line text-ink transition-colors duration-200 hover:bg-surface-2"
    >
      {theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </button>
  )
}
