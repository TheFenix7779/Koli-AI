"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Check, Copy, Phone, RefreshCw } from "lucide-react"
import { CATEGORIES, CITIES, LEADS, telHref, type CallStatus, type Outcome } from "@/lib/leads"

type LeadStatus = { dialed: boolean; outcome: Outcome | null; callbackDate: string | null }
type StatusMap = Record<string, LeadStatus>
type Filter = "all" | "not_dialed" | "dialed" | "closed" | "not_closed" | "callback_due"

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "not_dialed", label: "Not dialed" },
  { value: "dialed", label: "Dialed" },
  { value: "closed", label: "Closed" },
  { value: "not_closed", label: "Not closed" },
  { value: "callback_due", label: "Callback due" },
]

const EMPTY: LeadStatus = { dialed: false, outcome: null, callbackDate: null }

/** Today as YYYY-MM-DD, comparable directly against callbackDate strings. */
function today() {
  return new Date().toISOString().slice(0, 10)
}

export function CallTracker() {
  const [statuses, setStatuses] = useState<StatusMap>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")
  const [city, setCity] = useState("")
  const [filter, setFilter] = useState<Filter>("all")

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/tools/calls", { cache: "no-store" })
      const data = (await res.json()) as { statuses?: CallStatus[]; error?: string }
      if (!res.ok) throw new Error(data.error ?? "Failed to load")
      const next: StatusMap = {}
      for (const s of data.statuses ?? []) {
        next[s.phone] = { dialed: s.dialed, outcome: s.outcome, callbackDate: s.callback_date ?? null }
      }
      setStatuses(next)
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load")
    } finally {
      setLoading(false)
    }
  }, [])

  // Poll and refetch on focus so several people calling at once stay in sync.
  useEffect(() => {
    load()
    const timer = setInterval(load, 20000)
    window.addEventListener("focus", load)
    return () => {
      clearInterval(timer)
      window.removeEventListener("focus", load)
    }
  }, [load])

  const save = useCallback(
    async (phone: string, next: LeadStatus) => {
      const prev = statuses[phone] ?? EMPTY
      setStatuses((s) => ({ ...s, [phone]: next }))
      try {
        const res = await fetch("/api/tools/calls", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, ...next }),
        })
        if (!res.ok) throw new Error((await res.json()).error ?? "Save failed")
        setError(null)
      } catch (e) {
        setStatuses((s) => ({ ...s, [phone]: prev }))
        setError(e instanceof Error ? e.message : "Save failed")
      }
    },
    [statuses],
  )

  function toggleDialed(phone: string) {
    const cur = statuses[phone] ?? EMPTY
    save(phone, { ...cur, dialed: !cur.dialed })
  }

  function setOutcome(phone: string, outcome: Outcome) {
    const cur = statuses[phone] ?? EMPTY
    const next = cur.outcome === outcome ? null : outcome
    // Marking an outcome implies the call happened.
    save(phone, { dialed: next ? true : cur.dialed, outcome: next, callbackDate: cur.callbackDate })
  }

  function setCallback(phone: string, date: string | null) {
    const cur = statuses[phone] ?? EMPTY
    save(phone, { ...cur, callbackDate: date })
  }

  async function resetAll() {
    if (!confirm("Reset dialed and outcome for all 577 leads? This affects everyone.")) return
    const res = await fetch("/api/tools/calls", { method: "DELETE" })
    if (res.ok) setStatuses({})
    else setError("Reset failed")
  }

  async function copy(phone: string) {
    await navigator.clipboard.writeText(phone)
    setCopied(phone)
    setTimeout(() => setCopied((c) => (c === phone ? null : c)), 1200)
  }

  const stats = useMemo(() => {
    let dialed = 0
    let closed = 0
    let notClosed = 0
    for (const lead of LEADS) {
      const s = statuses[lead.phone]
      if (!s) continue
      if (s.dialed) dialed++
      if (s.outcome === "closed") closed++
      if (s.outcome === "not_closed") notClosed++
    }
    return { dialed, closed, notClosed, total: LEADS.length }
  }, [statuses])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LEADS.filter((lead) => {
      if (category && lead.category !== category) return false
      if (city && lead.city !== city) return false

      const s = statuses[lead.phone] ?? EMPTY
      if (filter === "dialed" && !s.dialed) return false
      if (filter === "not_dialed" && s.dialed) return false
      if (filter === "closed" && s.outcome !== "closed") return false
      if (filter === "not_closed" && s.outcome !== "not_closed") return false
      if (filter === "callback_due" && (!s.callbackDate || s.callbackDate > today())) return false

      if (q) {
        const hay = `${lead.name} ${lead.owner ?? ""} ${lead.city} ${lead.category} ${lead.phone}`
        if (!hay.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [query, category, city, filter, statuses])

  const sortedVisible = useMemo(() => {
    if (filter !== "callback_due") return visible
    // Soonest callback first.
    return [...visible].sort((a, b) => {
      const da = statuses[a.phone]?.callbackDate ?? ""
      const db = statuses[b.phone]?.callbackDate ?? ""
      return da.localeCompare(db)
    })
  }, [visible, filter, statuses])

  const pct = (n: number) => (stats.total ? Math.round((n / stats.total) * 100) : 0)
  const closeRate = stats.dialed ? Math.round((stats.closed / stats.dialed) * 100) : 0

  return (
    <section dir="ltr" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="mono-label text-accent">Outscraper import · Israel leads</span>
        <h2 className="display-serif text-4xl leading-tight text-ink">Cold Call Tracker</h2>
        <p className="max-w-xl text-body-sm text-muted">
          {stats.total} unique numbers from your scrape. Tick a lead off once you&apos;ve dialed it,
          then mark whether it closed — the stats update live and sync to everyone on the team.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Total leads" value={stats.total} sub={`${stats.total - stats.dialed} not yet dialed`} />
        <Stat label="Dialed" value={stats.dialed} sub={`${pct(stats.dialed)}% of list`} />
        <Stat label="Closed" value={stats.closed} sub={`${closeRate}% close rate`} tone="accent" />
        <Stat label="Not closed" value={stats.notClosed} sub={`${pct(stats.notClosed)}% of list`} tone="warn" />
      </div>

      <div className="flex flex-col gap-3 rounded-cards border border-line bg-surface p-4">
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search business, owner, city, phone…"
            className="min-w-56 flex-1 rounded-buttons border border-line bg-canvas px-3 py-2 text-body-sm text-ink outline-none placeholder:text-faint focus-visible:border-accent"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-buttons border border-line bg-canvas px-3 py-2 text-body-sm text-ink outline-none focus-visible:border-accent"
          >
            <option value="">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-buttons border border-line bg-canvas px-3 py-2 text-body-sm text-ink outline-none focus-visible:border-accent"
          >
            <option value="">All cities</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-3 py-1 text-[13px] transition-colors duration-200 ${
                filter === f.value
                  ? "bg-accent text-void"
                  : "border border-line text-muted hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
          <button
            onClick={resetAll}
            className="ms-auto rounded-buttons border border-orchid-bloom/40 px-3 py-1.5 text-[13px] text-orchid-bloom transition-colors duration-200 hover:bg-orchid-bloom/10"
          >
            Reset all progress
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 text-body-sm text-muted">
        <span>
          Showing {sortedVisible.length} of {stats.total} leads
        </span>
        {loading ? <RefreshCw className="size-3.5 animate-spin" /> : null}
        {error ? <span className="text-orchid-bloom">{error}</span> : null}
      </div>

      <div className="max-h-[70vh] overflow-auto rounded-cards border border-line">
        <table className="w-full border-collapse text-body-sm">
          <thead className="sticky top-0 z-10 bg-surface-2">
            <tr className="text-start">
              <Th className="w-12">#</Th>
              <Th>Business</Th>
              <Th className="w-44">Phone</Th>
              <Th className="w-24">Rating</Th>
              <Th className="w-20">Dialed</Th>
              <Th className="w-52">Outcome</Th>
              <Th className="w-40">Ring back</Th>
            </tr>
          </thead>
          <tbody>
            {sortedVisible.map((lead) => {
              const s = statuses[lead.phone] ?? EMPTY
              return (
                <tr key={lead.phone} className="border-t border-line bg-surface align-top">
                  <td className="px-3 py-3 font-mono text-[12px] text-faint tabular-nums">{lead.id}</td>

                  <td className="px-3 py-3">
                    <div dir="auto" className="font-medium text-ink">{lead.name || "—"}</div>
                    {lead.owner ? (
                      <div dir="auto" className="text-[12px] text-muted">{lead.owner}</div>
                    ) : null}
                    <div className="text-[12px] text-faint">
                      {lead.category}
                      {lead.city ? ` · ${lead.city}` : ""}
                      {lead.website ? (
                        <>
                          {" · "}
                          <a
                            href={lead.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                          >
                            site
                          </a>
                        </>
                      ) : lead.hasSite ? (
                        " · site"
                      ) : (
                        ""
                      )}
                    </div>
                  </td>

                  <td className="px-3 py-3">
                    <div className="font-mono text-[13px] text-ink-2 tabular-nums">{lead.phone}</div>
                    <div className="mt-1 flex gap-2 text-[12px]">
                      <a href={telHref(lead.phone)} className="flex items-center gap-1 text-accent hover:underline">
                        <Phone className="size-3" />
                        Call
                      </a>
                      <button
                        onClick={() => copy(lead.phone)}
                        className="flex items-center gap-1 text-muted hover:text-ink"
                      >
                        {copied === lead.phone ? <Check className="size-3" /> : <Copy className="size-3" />}
                        {copied === lead.phone ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </td>

                  <td className="px-3 py-3 text-[13px] text-muted tabular-nums">
                    {lead.rating != null ? `★ ${lead.rating} (${lead.reviews})` : "—"}
                  </td>

                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={s.dialed}
                      onChange={() => toggleDialed(lead.phone)}
                      aria-label={`Mark ${lead.name} as dialed`}
                      className="size-4 accent-[var(--c-accent)]"
                    />
                  </td>

                  <td className="px-3 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      <OutcomeButton
                        active={s.outcome === "closed"}
                        tone="accent"
                        onClick={() => setOutcome(lead.phone, "closed")}
                      >
                        Closed
                      </OutcomeButton>
                      <OutcomeButton
                        active={s.outcome === "not_closed"}
                        tone="warn"
                        onClick={() => setOutcome(lead.phone, "not_closed")}
                      >
                        Not closed
                      </OutcomeButton>
                      <OutcomeButton
                        active={s.outcome === "no_answer"}
                        tone="muted"
                        onClick={() => setOutcome(lead.phone, "no_answer")}
                      >
                        Didn&apos;t answer
                      </OutcomeButton>
                    </div>
                  </td>

                  <td className="px-3 py-3">
                    <CallbackCell value={s.callbackDate} onChange={(date) => setCallback(lead.phone, date)} />
                  </td>
                </tr>
              )
            })}
            {sortedVisible.length === 0 ? (
              <tr>
                <td colSpan={7} className="bg-surface px-3 py-10 text-center text-muted">
                  No leads match these filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-3 py-2.5 text-start mono-label text-faint ${className}`}>{children}</th>
  )
}

function Stat({
  label,
  value,
  sub,
  tone,
}: {
  label: string
  value: number
  sub: string
  tone?: "accent" | "warn"
}) {
  const color = tone === "accent" ? "text-accent" : tone === "warn" ? "text-orchid-bloom" : "text-ink"
  return (
    <div className="flex flex-col gap-1 rounded-cards border border-line bg-surface p-4">
      <span className="mono-label text-faint">{label}</span>
      <span className={`display-serif text-3xl leading-none tabular-nums ${color}`}>{value}</span>
      <span className="text-[12px] text-faint">{sub}</span>
    </div>
  )
}

function OutcomeButton({
  active,
  tone,
  onClick,
  children,
}: {
  active: boolean
  tone: "accent" | "warn" | "muted"
  onClick: () => void
  children: React.ReactNode
}) {
  const on =
    tone === "accent"
      ? "bg-accent text-void"
      : tone === "warn"
        ? "bg-orchid-bloom text-void"
        : "bg-surface-3 text-ink"
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-2.5 py-1 text-[12px] transition-colors duration-200 ${
        active ? on : "border border-line text-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  )
}

function CallbackCell({
  value,
  onChange,
}: {
  value: string | null
  onChange: (date: string | null) => void
}) {
  const overdue = value != null && value <= today()
  return (
    <div className="flex flex-col gap-1">
      <input
        type="date"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || null)}
        aria-label="Ring back on"
        className="rounded-buttons border border-line bg-canvas px-2 py-1 text-[12px] text-ink outline-none focus-visible:border-accent"
      />
      {value ? (
        <div className="flex items-center gap-1.5 text-[12px]">
          <span className={overdue ? "text-orchid-bloom" : "text-accent"}>
            {overdue ? "Call back today/overdue:" : "Call back:"}{" "}
            {new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            })}
          </span>
          <button onClick={() => onChange(null)} className="text-faint hover:text-ink">
            Clear
          </button>
        </div>
      ) : null}
    </div>
  )
}
