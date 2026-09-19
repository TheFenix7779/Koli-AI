export const SITE_URL = "https://koli-ai.com"

/** Bump when the homepage copy changes. */
export const HOME_UPDATED = "2026-09-19"

/** Bump when a guide, pricing or comparison page's copy changes. */
export const CONTENT_UPDATED = "2026-09-19"

import { FULL_TRANSCRIPT, SHORT_TRANSCRIPT, type TranscriptLine } from "./transcripts"

/**
 * The two sample calls. Labels describe length, not content — nothing here
 * verifies what is said in either recording.
 */
export const CLIPS = {
  short: {
    src: "/koli-ai-demo-call.mp3",
    label: "דמו קצר: קולי עונה לשיחה",
    iso: "PT31S",
    transcript: SHORT_TRANSCRIPT,
  },
  full: {
    src: "/koli-ai-full-call.mp3",
    label: "שיחה מלאה, מההתחלה ועד הסוף",
    iso: "PT1M30S",
    transcript: FULL_TRANSCRIPT,
  },
} as const

export type Clip = (typeof CLIPS)[keyof typeof CLIPS]

/** Flat text for schema.org `transcript`. */
export const transcriptText = (lines: readonly TranscriptLine[]) => lines.map(([, t]) => t).join(" ")
