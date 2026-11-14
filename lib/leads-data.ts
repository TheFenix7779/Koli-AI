import raw from "./leads.json"
import pitchData from "./lead-pitches.json"
import type { Lead, Pitch } from "./leads"

// Server-only on purpose: importing this from a client component would bundle
// the whole lead list into a public JS file, readable without the password.
// The call tracker loads it through the authenticated /api/tools/leads route.
export const LEADS = raw as Lead[]

export const PITCHES = pitchData as unknown as Record<string, Pitch>

/** Leads whose listed number rings the owner directly -- work these first. */
export const DIRECT_DIAL = LEADS.filter((l) => l.gatekeeper === false)

/** Front-desk leads where we know who to ask for. */
export const ASK_FOR_BY_NAME = LEADS.filter((l) => l.gatekeeper && l.owner)

export const CATEGORIES = [...new Set(LEADS.map((l) => l.category))].filter(Boolean).sort()
export const CITIES = [...new Set(LEADS.map((l) => l.city))].filter(Boolean).sort()

