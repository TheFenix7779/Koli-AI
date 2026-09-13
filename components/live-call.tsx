"use client"

import { useEffect, useState } from "react"
import { PhoneIncoming, CalendarCheck2, FileSpreadsheet, MailCheck, Mic } from "lucide-react"
import { cn } from "@/lib/utils"

type Step =
  | { kind: "caller" | "koli"; text: string }
  | { kind: "event"; text: string; icon: "calendar" | "sheet" | "mail" }

const SCRIPT: Step[] = [
  { kind: "caller", text: "שלום, אני רוצה לקבוע תור לניקוי אבנית." },
  { kind: "koli", text: "בשמחה! יש לי זמינות ביום שלישי ב־14:30 או ביום חמישי ב־10:00. מה נוח לך?" },
  { kind: "caller", text: "שלישי בבקשה." },
  { kind: "koli", text: "מעולה. על שם מי לרשום את התור?" },
  { kind: "caller", text: "דנה לוי." },
  { kind: "koli", text: "התור נקבע לדנה לוי, יום שלישי 14:30. שלחתי אישור ב־WhatsApp. יום נעים!" },
  { kind: "event", text: "נוסף ל־Google Calendar", icon: "calendar" },
  { kind: "event", text: "נרשם ב־Google Sheets · דחיפות: רגילה", icon: "sheet" },
  { kind: "event", text: "מייל עדכון נשלח לצוות", icon: "mail" },
]

const ICONS = { calendar: CalendarCheck2, sheet: FileSpreadsheet, mail: MailCheck }
const BARS = [22, 40, 58, 34, 66, 48, 30, 54, 42, 62, 28, 46]

export function LiveCall({ className }: { className?: string }) {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    if (mq.matches) {
      setCount(SCRIPT.length)
      setSeconds(48)
      return
    }
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      i += 1
      setCount(i)
      if (i < SCRIPT.length) {
        const next = SCRIPT[i]
        timer = setTimeout(tick, next.kind === "event" ? 900 : 1700)
      } else {
        timer = setTimeout(() => {
          i = 0
          setCount(0)
          setSeconds(0)
          timer = setTimeout(tick, 900)
        }, 4500)
      }
    }
    timer = setTimeout(tick, 900)
    const clock = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => {
      clearTimeout(timer)
      clearInterval(clock)
    }
  }, [])

  const visible = SCRIPT.slice(0, count)
  const nextStep = SCRIPT[count]
  const koliTyping = !reduced && nextStep?.kind === "koli"
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[440px] flex-col overflow-hidden rounded-tiles border border-pure/10 bg-[linear-gradient(135deg,rgb(43,43,44),rgb(19,19,19))] shadow-lg",
        className
      )}
      aria-label="הדגמה של שיחה עם קולי"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-pure/8 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex size-10 items-center justify-center rounded-full bg-pure text-void">
            <PhoneIncoming className="size-4" />
            <span aria-hidden className="animate-pulse-dot absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-cyan-signal" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-body-sm font-medium text-cloud">שיחה נכנסת</span>
            <span className="text-xs text-ash">מרפאת שיניים · 055-••• ••••</span>
          </div>
        </div>
        <span className="ltr font-mono text-sm tabular-nums text-cloud">
          {mm}:{ss}
        </span>
      </div>

      {/* Transcript */}
      <div className="flex min-h-[380px] flex-col gap-3 px-5 py-5" aria-live="polite">
        {visible.map((s, i) => {
          if (s.kind === "event") {
            const Icon = ICONS[s.icon]
            return (
              <div
                key={i}
                className="animate-msg-in mx-auto flex items-center gap-2 rounded-full border border-cyan-signal/25 bg-cyan-signal/10 px-3.5 py-1.5 text-xs text-cloud opacity-0"
              >
                <Icon className="size-3.5 text-cyan-signal" />
                {s.text}
              </div>
            )
          }
          const isKoli = s.kind === "koli"
          return (
            <div key={i} className={cn("animate-msg-in flex opacity-0", isKoli ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-body-sm leading-relaxed",
                  isKoli ? "rounded-tl-md bg-pure text-void" : "rounded-tr-md bg-pure/10 text-cloud"
                )}
              >
                {isKoli && (
                  <span className="mb-1 flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.15em] text-void/55">
                    <Mic className="size-3" /> קולי
                  </span>
                )}
                {s.text}
              </div>
            </div>
          )
        })}
        {koliTyping && (
          <div className="flex justify-end">
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-pure px-4 py-3">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="animate-typing size-1.5 rounded-full bg-void"
                  style={{ animationDelay: `${d * 160}ms` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer waveform */}
      <div className="flex items-center justify-between border-t border-pure/8 px-5 py-3">
        <div aria-hidden className="flex h-6 items-center gap-1">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="animate-wave w-0.5 origin-center rounded-full bg-cyan-signal"
              style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
            />
          ))}
        </div>
        <span className="mono-label text-fog">מענה תוך 1.2 שנ׳</span>
      </div>
    </div>
  )
}
