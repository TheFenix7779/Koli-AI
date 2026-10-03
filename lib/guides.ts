import { CONTENT_UPDATED } from "./site"

/**
 * Content pages, shared by the nav dropdown and the sitemap. `updated` is the
 * date that page's copy last changed — bump it when you edit the page.
 */
export const GUIDES = [
  { href: "/ai-receptionist", label: "פקידת קבלה AI", updated: "2026-10-03" },
  { href: "/about", label: "מי עומד מאחורי קולי", updated: CONTENT_UPDATED },
  { href: "/pricing", label: "כמה זה עולה", updated: CONTENT_UPDATED },
  { href: "/compare/human-answering-service", label: "מענה אנושי מול AI", updated: CONTENT_UPDATED },
  { href: "/guides/ai-voice-agent", label: "מה זה סוכן AI קולי", updated: CONTENT_UPDATED },
  { href: "/guides/hebrew-voice-bot", label: "בוט קולי בעברית", updated: CONTENT_UPDATED },
  { href: "/guides/missed-calls", label: "שיחות שלא נענו בעסק", updated: "2026-10-03" },
  { href: "/guides/russian-phone-answering", label: "מענה טלפוני ברוסית", updated: "2026-10-03" },
  { href: "/guides/arabic-phone-answering", label: "מענה טלפוני בערבית", updated: "2026-10-03" },
] as const

export type GuidePath = (typeof GUIDES)[number]["href"]

/** A guide's last-changed date, for its Article JSON-LD. */
export const guideUpdated = (href: GuidePath) => GUIDES.find((g) => g.href === href)!.updated
