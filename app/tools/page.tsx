import type { Metadata } from "next"
import { isAuthed, passwordConfigured } from "@/lib/auth"
import { PasswordGate } from "@/components/tools/password-gate"
import { CallTracker } from "@/components/tools/call-tracker"
import { PitchCalculator } from "@/components/tools/pitch-calculator"

export const metadata: Metadata = {
  title: "Internal tools — קולי AI",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function ToolsPage() {
  if (!passwordConfigured()) {
    return (
      <main dir="ltr" className="flex min-h-dvh items-center justify-center bg-canvas p-6">
        <p className="max-w-md text-body-sm text-muted">
          <span className="text-ink">TOOLS_PASSWORD is not set.</span> Add it to{" "}
          <code className="font-mono text-accent">.env.local</code> locally and to your Vercel
          project&apos;s environment variables, then reload.
        </p>
      </main>
    )
  }

  if (!(await isAuthed())) return <PasswordGate />

  return (
    <main dir="ltr" className="min-h-dvh bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-14">
        <CallTracker />
        <PitchCalculator />
      </div>
    </main>
  )
}
