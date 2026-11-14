"use client"

import { useId, useState } from "react"

const WEEKS_PER_MONTH = 52 / 12

const nf = new Intl.NumberFormat("he-IL", { maximumFractionDigits: 0 })

function Field({
  label,
  hint,
  value,
  onChange,
  suffix,
  max,
}: {
  label: string
  hint: string
  value: number
  onChange: (n: number) => void
  suffix: string
  max: number
}) {
  const id = useId()
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body text-ink-2">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          max={max}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => {
            const n = Number(e.target.value)
            onChange(Number.isFinite(n) ? Math.min(Math.max(n, 0), max) : 0)
          }}
          className="min-h-11 w-32 rounded-lg border border-line bg-canvas px-3 text-body text-ink tabular-nums outline-none focus-visible:border-accent"
        />
        <span className="text-body-sm text-muted">{suffix}</span>
      </div>
      <p className="text-body-sm text-faint">{hint}</p>
    </div>
  )
}

/**
 * Plain arithmetic on the visitor's own numbers. The defaults are only
 * placeholders to show how it works; nothing here claims a typical missed-call rate.
 */
export function MissedCallCalculator() {
  const [missed, setMissed] = useState(10)
  const [bookPct, setBookPct] = useState(30)
  const [value, setValue] = useState(500)

  const lostCustomersMonth = missed * WEEKS_PER_MONTH * (bookPct / 100)
  const lostMonth = lostCustomersMonth * value
  const lostYear = lostMonth * 12

  return (
    <div className="flex flex-col gap-8 rounded-tiles border border-line bg-surface p-6 md:p-10">
      <div className="grid gap-6 sm:grid-cols-3">
        <Field
          label="שיחות שלא נענו בשבוע"
          hint="אפשר לספור שבוע אחד ביומן השיחות של הטלפון."
          value={missed}
          onChange={setMissed}
          suffix="שיחות"
          max={1000}
        />
        <Field
          label="כמה מהן היו הופכות ללקוח"
          hint="ההערכה שלכם. מי שמתקשר לקבוע תור שונה ממי ששואל שעות פתיחה."
          value={bookPct}
          onChange={setBookPct}
          suffix="%"
          max={100}
        />
        <Field
          label="שווי לקוח אחד"
          hint="הכנסה ממוצעת מלקוח או מטיפול, לא רווח."
          value={value}
          onChange={setValue}
          suffix="₪"
          max={1_000_000}
        />
      </div>

      <div aria-live="polite" className="grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
        <div className="flex flex-col gap-1">
          <span className="text-body-sm text-muted">לקוחות שהולכים לאיבוד בחודש</span>
          <span className="display-serif text-4xl text-ink tabular-nums">{nf.format(lostCustomersMonth)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-body-sm text-muted">הכנסה שאובדת בחודש</span>
          <span className="display-serif text-4xl text-ink tabular-nums">₪{nf.format(lostMonth)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-body-sm text-muted">הכנסה שאובדת בשנה</span>
          <span className="display-serif text-4xl text-accent tabular-nums">₪{nf.format(lostYear)}</span>
        </div>
      </div>

      <p className="text-body-sm text-faint">
        החישוב: שיחות בשבוע × 52 ÷ 12 × אחוז הלקוחות × שווי לקוח. המספרים בשדות הם דוגמה להמחשה בלבד;
        החליפו אותם בנתונים של העסק שלכם.
      </p>
    </div>
  )
}
