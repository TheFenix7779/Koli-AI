/**
 * The Koli logo: an animated GIF, deliberately not run through next/image, whose
 * optimizer would flatten the animation. Cropped to the circle and sized for
 * a 36px mark at up to 4x density (~98 kB, cached after the first page).
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/koli-logo.gif"
      alt=""
      width={36}
      height={36}
      decoding="async"
      className={`size-9 shrink-0 rounded-full ${className}`}
    />
  )
}
