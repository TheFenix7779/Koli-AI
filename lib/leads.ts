import raw from "./leads.json"

export type Lead = {
  id: number
  name: string
  owner: string | null
  category: string
  city: string
  phone: string
  hasSite: boolean
  rating: number | null
  reviews: number | null
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

export const CATEGORIES = [...new Set(LEADS.map((l) => l.category))].filter(Boolean).sort()
export const CITIES = [...new Set(LEADS.map((l) => l.city))].filter(Boolean).sort()

/** tel: links need the digits only. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`
}
