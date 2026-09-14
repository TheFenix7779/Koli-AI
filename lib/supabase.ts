import { createClient } from "@supabase/supabase-js"

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabaseConfigured = Boolean(url && serviceKey)

/**
 * Server-only client. The service-role key bypasses row-level security, so this
 * must never be imported into a client component.
 */
export function supabaseAdmin() {
  if (!url || !serviceKey) {
    throw new Error(
      "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    )
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
