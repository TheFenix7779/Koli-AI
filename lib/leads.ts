import raw from "./leads.json"
import pitchData from "./lead-pitches.json"

export type Lead = {
  id: number
  name: string
  owner: string | null
  category: string
  city: string
  phone: string
  hasSite: boolean
  website: string | null
  rating: number | null
  reviews: number | null
  /** True when the call lands on a front desk, false for one-person shops, null if unknown. */
  gatekeeper: boolean | null
  /** A mobile the business publishes on its own site, when it differs from `phone`. */
  mobile: string | null
  /** "tel-link" (from a tel: href) is trustworthy; "page-text" is a looser match. */
  mobileSource: "tel-link" | "page-text" | null
}

export type Outcome = "closed" | "not_closed" | "no_answer"

/** Per-lead progress, keyed by phone — the only part that lives in Supabase. */
export type CallStatus = {
  phone: string
  dialed: boolean
  outcome: Outcome | null
  /** ISO date (YYYY-MM-DD) to call this lead back on, or null if none set. */
  callback_date: string | null
  updated_at: string
}

export const LEADS = raw as Lead[]

/**
 * Which product to pitch first, from scanning each lead's website
 * (lib/lead-pitches.json, keyed by lead id). The other product is the fallback.
 */
export type SiteState = "none" | "dead" | "old" | "dated" | "modern" | "unverified"
export type Pitch = {
  first: "site" | "ai"
  state: SiteState
  /** Evidence behind the site-state call, e.g. "no HTTPS; © 2019". */
  why: string
  /** How badly the business needs call handling: high / medium / low. */
  fit: "high" | "medium" | "low"
  /** 1-6: how easy the sell looks. Higher first. */
  prio: number
}
export const PITCHES = pitchData as unknown as Record<string, Pitch>

/** Leads whose listed number rings the owner directly -- work these first. */
export const DIRECT_DIAL = LEADS.filter((l) => l.gatekeeper === false)

/** The number to actually dial: a self-published mobile beats the front desk. */
export function dialNumber(lead: Lead) {
  return lead.mobile ?? lead.phone
}

/** Front-desk leads where we know who to ask for. */
export const ASK_FOR_BY_NAME = LEADS.filter((l) => l.gatekeeper && l.owner)

export const CATEGORIES = [...new Set(LEADS.map((l) => l.category))].filter(Boolean).sort()
export const CITIES = [...new Set(LEADS.map((l) => l.city))].filter(Boolean).sort()

/** tel: links need the digits only. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`
}
