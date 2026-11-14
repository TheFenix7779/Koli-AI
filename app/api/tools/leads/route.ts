import { NextResponse } from "next/server"
import { isAuthed } from "@/lib/auth"
import { CATEGORIES, CITIES, LEADS, PITCHES } from "@/lib/leads-data"

// The lead list is served here, behind the tools password, instead of being
// imported into the client bundle (which would publish it in a public JS file).
export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  return NextResponse.json(
    { leads: LEADS, pitches: PITCHES, categories: CATEGORIES, cities: CITIES },
    { headers: { "Cache-Control": "private, no-store" } },
  )
}
