import { NextResponse } from "next/server"
import { SESSION_COOKIE, checkPassword, issueToken, passwordConfigured } from "@/lib/auth"

export async function POST(req: Request) {
  if (!passwordConfigured()) {
    return NextResponse.json({ error: "TOOLS_PASSWORD is not set on the server." }, { status: 500 })
  }

  const { password } = (await req.json().catch(() => ({}))) as { password?: string }
  if (typeof password !== "string" || !checkPassword(password)) {
    return NextResponse.json({ error: "סיסמה שגויה" }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, issueToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.delete(SESSION_COOKIE)
  return res
}
