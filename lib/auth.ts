import { createHmac, timingSafeEqual } from "node:crypto"
import { cookies } from "next/headers"

export const SESSION_COOKIE = "koli_tools"
const TOKEN_PAYLOAD = "koli-tools-v1"

function password() {
  const pw = process.env.TOOLS_PASSWORD
  if (!pw) throw new Error("TOOLS_PASSWORD is not set.")
  return pw
}

export function passwordConfigured() {
  return Boolean(process.env.TOOLS_PASSWORD)
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

export function checkPassword(input: string) {
  return safeEqual(input, password())
}

/** Cookie value is an HMAC of a constant, keyed by the password — rotating the password invalidates every session. */
export function issueToken() {
  return createHmac("sha256", password()).update(TOKEN_PAYLOAD).digest("hex")
}

export async function isAuthed() {
  if (!passwordConfigured()) return false
  const token = (await cookies()).get(SESSION_COOKIE)?.value
  if (!token) return false
  return safeEqual(token, issueToken())
}
