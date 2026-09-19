"use client"

import { useEffect, useRef, useState } from "react"
import { track } from "@vercel/analytics"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"
import { CLIPS, type Clip } from "@/lib/site"
import { WHATSAPP_URL } from "@/lib/contact"

// Fixed heights: a random waveform would differ between server and client and
// break hydration. 40 bars reads as speech without pretending to be real data.
const BARS = [
  28, 46, 62, 40, 74, 55, 88, 66, 42, 70, 95, 58, 36, 80, 64, 48, 92, 54, 30, 68,
  84, 44, 72, 96, 52, 38, 76, 60, 86, 34, 66, 90, 46, 58, 78, 42, 70, 50, 62, 32,
]

function time(s: number) {
  if (!Number.isFinite(s)) return "0:00"
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`
}

/**
 * Demo player for the sample call. `preload="none"` is deliberate: the file is
 * ~730KB and must not be fetched on page load, where it would compete with the
 * hero for bandwidth.
 */
export function AudioDemo({
  location,
  clip = CLIPS.short,
  tone = "dark",
  className,
}: {
  location: string
  clip?: Clip
  /** "light" for the always-dark closing section. */
  tone?: "dark" | "light"
  className?: string
}) {
  const ref = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [at, setAt] = useState(0)
  const [total, setTotal] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const a = ref.current
    if (!a) return
    const onTime = () => setAt(a.currentTime)
    const onMeta = () => setTotal(a.duration)
    const onEnd = () => {
      setPlaying(false)
      setAt(0)
    }
    a.addEventListener("timeupdate", onTime)
    a.addEventListener("loadedmetadata", onMeta)
    a.addEventListener("ended", onEnd)
    return () => {
      a.removeEventListener("timeupdate", onTime)
      a.removeEventListener("loadedmetadata", onMeta)
      a.removeEventListener("ended", onEnd)
    }
  }, [])

  function toggle() {
    const a = ref.current
    if (!a) return
    if (a.paused) {
      // Two players share the page; starting one must stop the other.
      document.querySelectorAll("audio").forEach((o) => {
        if (o !== a) o.pause()
      })
      void a.play()
      setPlaying(true)
      if (!started) {
        setStarted(true)
        track("demo_play", { location })
      }
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const a = ref.current
    if (!a || !Number.isFinite(a.duration)) return
    const r = e.currentTarget.getBoundingClientRect()
    // RTL: the track fills from the right edge.
    const ratio = (r.right - e.clientX) / r.width
    a.currentTime = Math.min(Math.max(ratio, 0), 1) * a.duration
    setAt(a.currentTime)
  }

  const pct = total ? (at / total) * 100 : 0
  const light = tone === "light"

  return (
    <div className={cn("flex w-full max-w-md flex-col gap-2", className)}>
    <div
      className={cn(
        "flex w-full items-center gap-4 rounded-cards border p-3",
        light ? "border-pure/25 bg-pure/10 backdrop-blur-xl" : "border-line bg-surface",
      )}
    >
      <audio ref={ref} src={clip.src} preload="none" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "עצור את הדמו" : "נגן את הדמו"}
        className={cn(
          "flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full transition-transform duration-200 active:scale-95",
          light ? "bg-pure text-void" : "bg-action text-action-ink",
        )}
      >
        {playing ? <Pause className="size-5" /> : <Play className="size-5 translate-x-[-1px] rotate-180" />}
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-baseline justify-between gap-3">
          <span className={cn("truncate text-body-sm", light ? "text-pure" : "text-ink-2")}>{clip.label}</span>
          <span
            className={cn(
              "ltr shrink-0 font-mono text-[11px] tabular-nums",
              light ? "text-cloud/70" : "text-faint",
            )}
          >
            {time(at)} / {time(total)}
          </span>
        </div>

        <div
          onClick={seek}
          role="presentation"
          className="flex h-8 cursor-pointer items-center gap-[2px]"
        >
          {BARS.map((h, i) => {
            const on = i < (pct / 100) * BARS.length
            return (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={cn(
                  "flex-1 rounded-full transition-[background-color,opacity] duration-150",
                  playing && on && "animate-pulse",
                  on
                    ? light
                      ? "bg-pure"
                      : "bg-accent"
                    : light
                      ? "bg-pure/25"
                      : "bg-line-2",
                )}
              />
            )
          })}
        </div>
      </div>
    </div>

      <p className={cn("text-body-sm", light ? "text-cloud/70" : "text-faint")}>
        ההקלטה עוברת דרך האינטרנט ומאבדת קצת מהאיכות. בשיחה אמיתית קולי נשמעת נקייה יותר —{" "}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("demo_book_call", { location })}
          className={cn(
            "underline-offset-4 hover:underline",
            light ? "text-pure" : "text-accent",
          )}
        >
          קבעו שיחה ותשמעו בעצמכם
        </a>
        .
      </p>
    </div>
  )
}
