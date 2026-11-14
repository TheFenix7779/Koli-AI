
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
/** The number to actually dial: a self-published mobile beats the front desk. */
export function dialNumber(lead: Lead) {
  return lead.mobile ?? lead.phone
}

/** tel: links need the digits only. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`
}
