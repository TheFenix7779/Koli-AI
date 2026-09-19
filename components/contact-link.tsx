"use client"

import { track } from "@vercel/analytics"
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact"

/**
 * The two conversion actions on the site. Both report a click to Vercel
 * Analytics with the section it came from, so we can tell which pages actually
 * produce leads — the links themselves are plain anchors, so they still work if
 * the analytics script is blocked or fails to load.
 *
 * `location` is the section or page the link sits in, e.g. "hero" or
 * "industry:dental-clinics".
 */
type LinkProps = Omit<React.ComponentProps<"a">, "href"> & { location: string }

export function WhatsAppLink({ location, onClick, ...props }: LinkProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        track("whatsapp_click", { location })
        onClick?.(e)
      }}
    />
  )
}

export function PhoneLink({ location, onClick, ...props }: LinkProps) {
  return (
    <a
      href={PHONE_HREF}
      {...props}
      onClick={(e) => {
        track("phone_click", { location })
        onClick?.(e)
      }}
    />
  )
}
