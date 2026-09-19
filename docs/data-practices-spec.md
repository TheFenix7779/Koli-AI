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

## A. Facts only you can supply

These cannot be chosen for you. Fill them in before drafting the public text.

| Field | Value |
|---|---|
| Registered legal name | |
| ח.פ. / ע.מ. number | |
| Registered address | |
| Privacy contact email | |
| Speech-to-text provider | |
| LLM / AI model provider | |
| Text-to-speech provider | |
| Telephony provider | |
| WhatsApp Business API provider | |

A privacy policy must name real sub-processors. Do not publish a vendor you do
not use.

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

15. Data is stored in the **EU region** of each provider. Pick a region per
    vendor and record it, since "the cloud" is not an answer to a clinic's
    procurement question.
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
    your lawyer will likely propose exactly this.
27. Governing law: Israel. Jurisdiction: the courts of Tel Aviv.

## I. Publishing checklist

- [ ] Section A filled in with real values
- [ ] Items 1–3 true (DPA template exists and is signed)
- [ ] Items 7–8 true (the call opening actually says it)
- [ ] Items 10–14 true (deletion is automated, not a manual promise)
- [ ] Items 15–18 true (regions recorded, access list written down)
- [ ] Lawyer has reviewed the final Hebrew text
- [ ] Then: build `/privacy` and `/terms` and point the footer links at them

Until the last box is ticked, the footer links stay as they are. Dead links are
a smaller problem than a policy that is not true.
