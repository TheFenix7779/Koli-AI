"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export function PasswordGate() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      const res = await fetch("/api/tools/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.refresh()
        return
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      setError(data.error ?? "Something went wrong")
    } catch {
      setError("Network error")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-canvas p-6">
      <form
        onSubmit={submit}
        dir="ltr"
        className="flex w-full max-w-sm flex-col gap-5 rounded-tiles border border-line bg-surface p-8"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-surface-2 text-muted">
          <Lock className="size-5" />
        </span>

        <div className="flex flex-col gap-1.5">
          <h1 className="display-serif text-2xl leading-tight text-ink">Internal tools</h1>
          <p className="text-body-sm text-muted">
            This area is private. Enter the team password to continue.
          </p>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          autoComplete="current-password"
          placeholder="Password"
          className="w-full rounded-buttons border border-line bg-canvas px-3.5 py-2.5 text-body-sm text-ink outline-none placeholder:text-faint focus-visible:border-accent"
        />

        {error ? (
          <p role="alert" className="text-body-sm text-orchid-bloom">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={busy || !password}
          className="rounded-buttons bg-action px-4 py-2.5 text-body-sm font-medium text-action-ink transition-opacity duration-200 hover:opacity-90 disabled:opacity-40"
        >
          {busy ? "Checking…" : "Unlock"}
        </button>
      </form>
    </div>
  )
}
