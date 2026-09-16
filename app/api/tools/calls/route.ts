import { NextResponse } from "next/server"
import { isAuthed } from "@/lib/auth"
import { supabaseAdmin, supabaseConfigured } from "@/lib/supabase"

const TABLE = "call_status"

async function guard() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  if (!supabaseConfigured) {
    return NextResponse.json(
      { error: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
      { status: 500 },
    )
  }
  return null
}

export async function GET() {
  const blocked = await guard()
  if (blocked) return blocked

  const { data, error } = await supabaseAdmin()
    .from(TABLE)
    .select("phone, dialed, outcome, callback_date, updated_at")

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ statuses: data ?? [] })
}

export async function POST(req: Request) {
  const blocked = await guard()
  if (blocked) return blocked

  const body = (await req.json().catch(() => ({}))) as {
    phone?: string
    dialed?: boolean
    outcome?: string | null
    callbackDate?: string | null
  }

  if (typeof body.phone !== "string" || !body.phone) {
    return NextResponse.json({ error: "phone is required" }, { status: 400 })
  }
  if (
    body.outcome != null &&
    body.outcome !== "closed" &&
    body.outcome !== "not_closed" &&
    body.outcome !== "no_answer"
  ) {
    return NextResponse.json({ error: "invalid outcome" }, { status: 400 })
  }
  if (body.callbackDate != null && !/^\d{4}-\d{2}-\d{2}$/.test(body.callbackDate)) {
    return NextResponse.json({ error: "invalid callbackDate" }, { status: 400 })
  }

  const { error } = await supabaseAdmin()
    .from(TABLE)
    .upsert(
      {
        phone: body.phone,
        dialed: Boolean(body.dialed),
        outcome: body.outcome ?? null,
        callback_date: body.callbackDate ?? null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "phone" },
    )

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function DELETE() {
  const blocked = await guard()
  if (blocked) return blocked

  const { error } = await supabaseAdmin().from(TABLE).delete().neq("phone", "")
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
