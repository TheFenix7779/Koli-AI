# Data practices spec (proposal — not yet published)

**Status: draft. Nothing here is live, and none of it is true yet.**

This is a target specification. Each numbered item is a commitment to implement
in the product. Once an item is actually true, tick it. When every item in a
section is ticked, that section can be published as customer-facing text.

Publishing any of this before it is true would be a false statement about how
patient data is handled. Have a lawyer review the final text: Israeli privacy
law (חוק הגנת הפרטיות) treats medical information as sensitive, and clinics are
regulated clients.

Written 2026-09-19. Defaults below are proposals, chosen to be defensible and
cheap to honour — change any of them.

---

## A. Identity and vendors (supplied 2026-09-19)

| Field | Value |
|---|---|
| Operators | Eden Elnekave, Eitan Kadmon |
| Legal entity | **None — not registered yet** |
| ח.פ. / ע.מ. number | — |
| Registered address | — |
| Privacy contact | koli-ai.team@gmail.com |
| Text-to-speech | ElevenLabs |
| LLM / speech-to-text | OpenAI (ChatGPT) |
| Telephony | Twilio, Zadarma |
| WhatsApp Business API | Twilio (Twilio is an official WhatsApp provider) |

Confirm the vendor split: the assumption below is ElevenLabs for the voice,
OpenAI for both transcription and the conversation, Twilio and Zadarma for
phone numbers and call routing.

### A1. Blockers this creates

**A. Register the business before signing a paying clinic.** Two consequences,
both worse than the registration paperwork:

- Without an עוסק מורשה/פטור you cannot issue a lawful invoice, which a clinic
  needs in order to pay you.
- Without a company, Eden and Eitan are personally the data processors. A
  mishandled patient call is a personal liability, and the liability cap in item
  26 protects almost nothing. A limited company is what makes that clause mean
  something.

Until registration, the privacy policy would have to name two private
individuals as the processors of patient data. That is legal, but it is a hard
sell to a clinic's procurement.

**B. Use a domain address, not Gmail.** You own koli-ai.com, so
`privacy@koli-ai.com` costs nothing and reads as a business. A Gmail address on
a privacy policy undercuts the same trust the page exists to build.

**C. WhatsApp — resolved.** It runs through Twilio, so the site's WhatsApp
claims are accurate. Section J is retained only as a record of the check.

---

## B. Roles (proposed)

1. The **clinic is the data controller**. It decides why caller data is
   processed. Koli is the **processor**, acting on the clinic's instructions.
2. Koli signs a **data processing agreement (DPA)** with every client before
   handling live calls. One standard template, not per-client negotiation.
3. Koli does not use caller data to train models, and does not sell or share it
   with anyone outside the sub-processors listed in section A.

Item 3 is the single most valuable promise you can make to a clinic. It is also
easy to keep, provided your vendor contracts allow opting out of training — check
that before committing.

## C. What is captured (proposed)

4. Per call: caller phone number, the name they give, the reason they state, and
   any appointment created.
5. Call **audio** is recorded, and a **text transcript** is produced.
6. No caller is asked for an ID number (ת.ז.), payment details, or medical
   history. If a caller volunteers medical detail, it lands in the transcript —
   which is why the transcript is treated as sensitive data throughout.

## D. Disclosure and consent (proposed)

7. Every call opens by stating that the caller is speaking with an **automated
   assistant** and that the call is **recorded**, before anything else is asked.
8. A caller who asks for a human is transferred or has a message taken. Koli
   never claims to be a person.
9. The clinic is responsible for surfacing its own privacy notice to patients.
   Koli supplies the wording.

Item 7 is not optional. Recording a call without disclosure is a legal problem,
not a UX preference.

## E. Retention (proposed)

10. **Audio: deleted after 30 days.** It exists for dispute resolution and
    quality checks, nothing else.
11. **Transcripts and call metadata: 12 months**, then deleted.
12. Appointment data lives in the clinic's own Google Calendar and is governed by
    the clinic's retention, not Koli's.
13. When a client leaves, all their caller data is deleted within **30 days** of
    the contract ending.
14. A caller's deletion request is honoured within **30 days**, forwarded by the
    clinic.

Shorter retention is cheaper to defend and cheaper to store. Do not set these
longer than you need.

## F. Storage and security (proposed)

15. **Caller data leaves Israel.** ElevenLabs, OpenAI and Twilio all process in
    the United States, so an EU-or-Israel-only claim is not available and must
    not be made. The policy states plainly that call audio and transcripts are
    processed by US-based providers. Two things to settle:
    - Confirm each vendor contract excludes your data from model training.
      OpenAI's API excludes it by default; verify ElevenLabs separately rather
      than assuming.
    - Check where Zadarma routes and stores call data before naming it to a
      clinic. Ownership and routing for budget telephony providers are worth
      knowing in advance, not during a procurement review.
16. Encrypted in transit (TLS) and at rest.
17. Access is limited to named Koli staff who need it, with no shared logins.
18. A breach affecting caller data is reported to the affected clinics within
    **72 hours** of discovery.

## G. Website (already true)

19. koli-ai.com uses Vercel Analytics: cookieless, aggregate page and click
    counts, no identification of individual visitors and no cross-site tracking.
    **This is live now and must be disclosed** in the published policy.
20. The site sets no advertising or tracking cookies. The only stored value is a
    `localStorage` theme preference, which never leaves the browser.
21. `/tools` is an internal, password-gated sales tracker holding Koli's own
    prospect list, not caller data. It is `noindex` and disallowed in robots.txt.

## H. Terms of service (proposed)

22. **Not an emergency service.** Koli does not replace emergency care, and the
    terms must say so plainly, directing callers with a medical emergency to 101
    (מד"א). This is the most important clause on the page.
23. Urgent-case flagging is **best-effort**. Koli detects urgency from the
    conversation and alerts staff, but the clinic remains responsible for
    triage. Do not promise detection accuracy you have not measured.
24. **No uptime SLA** until you have measured your own uptime for a quarter. An
    SLA you cannot meet is worse than none.
25. Billing: monthly, in advance. Either side may cancel with **30 days'**
    notice. No lock-in.
26. Liability is capped at fees paid in the preceding 12 months — standard, and
    your lawyer will likely propose exactly this. Note that this clause is
    close to worthless while there is no company: a court can look past it to
    Eden and Eitan personally. See A1.
27. Governing law: Israel. Jurisdiction: the courts of Tel Aviv.

---

## J. WhatsApp claim check — resolved

Queried because section A initially listed no WhatsApp provider, while the site
advertises WhatsApp in seven places (FAQ, integrations, ticker, live-call demo,
industry pages, llms.txt, meta descriptions).

Resolved: WhatsApp runs through Twilio, which is an official WhatsApp Business
Solution Provider. The claims are accurate and no copy changes are needed.
