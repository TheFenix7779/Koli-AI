-- Koli AI — internal cold-call tracker
-- Run this once in the Supabase SQL editor (Dashboard → SQL Editor → New query).
--
-- Only per-lead progress lives here. The 577 leads themselves ship in the app
-- (lib/leads.json), so this table stays small and is keyed by phone number.

create table if not exists public.call_status (
  phone      text primary key,
  dialed     boolean     not null default false,
  outcome    text        check (outcome in ('closed', 'not_closed')),
  updated_at timestamptz not null default now()
);

-- The app reaches this table only through server-side API routes using the
-- service-role key, so no anon/public access is granted. RLS on with no policy
-- means a leaked anon key still cannot read or write this table.
alter table public.call_status enable row level security;
