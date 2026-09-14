"use client"

import { useState } from "react"

const shekel = (n: number) => `₪${Math.round(n).toLocaleString("en-US")}`

export function PitchCalculator() {
  const [missedPerDay, setMissedPerDay] = useState(15)
  const [customerValue, setCustomerValue] = useState(500)
  const [bookRate, setBookRate] = useState(50)

  const missedPerMonth = missedPerDay * 30
  const customersLost = missedPerMonth * (bookRate / 100)
  const perMonth = customersLost * customerValue
  const perYear = perMonth * 12

  return (
    <section dir="ltr" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="mono-label text-accent">Pitch tool</span>
        <h2 className="display-serif text-3xl leading-tight text-ink">
          What Their Missed Calls Are Costing Them
        </h2>
        <p className="max-w-xl text-body-sm text-muted">
          Pull this up mid-call and plug in their numbers — it&apos;s a fast way to show a clinic or
          salon owner exactly how much revenue is slipping through unanswered calls.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-cards border border-line bg-surface p-6">
          <Slider
            label="Calls they miss in a day"
            value={missedPerDay}
            display={String(missedPerDay)}
            min={1}
            max={100}
            step={1}
            onChange={setMissedPerDay}
          />
          <Slider
            label="What one customer is worth"
            value={customerValue}
            display={shekel(customerValue)}
            min={50}
            max={5000}
            step={50}
            onChange={setCustomerValue}
          />
          <Slider
            label="How many of them would book"
            value={bookRate}
            display={`${bookRate}%`}
            min={5}
            max={100}
            step={5}
            onChange={setBookRate}
          />
        </div>

        <div className="flex flex-col gap-5 rounded-cards border border-line bg-surface p-6">
          <span className="mono-label text-faint">They are losing</span>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-5xl leading-none text-orchid-bloom tabular-nums">
              {shekel(perMonth)}
            </span>
            <span className="text-body-sm text-muted">every month</span>
          </div>

          <dl className="flex flex-col gap-2 border-t border-line pt-4">
            <Row label="Missed calls a month" value={missedPerMonth.toLocaleString("en-US")} />
            <Row label="Customers never gained" value={Math.round(customersLost).toLocaleString("en-US")} />
            <Row label="Lost in a year" value={shekel(perYear)} />
          </dl>
        </div>
      </div>
    </section>
  )
}

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (n: number) => void
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-baseline justify-between gap-4">
        <span className="text-body-sm font-medium text-ink">{label}</span>
        <span className="font-mono text-body-sm text-accent tabular-nums">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--c-accent)]"
      />
    </label>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-body-sm text-muted">{label}</dt>
      <dd className="font-mono text-body-sm text-ink-2 tabular-nums">{value}</dd>
    </div>
  )
}
