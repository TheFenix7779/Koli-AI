import { ImageResponse } from "next/og"

export const alt = "Koli AI — AI digital receptionist, 24/7"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The default OG font has no Hebrew glyphs, so the card is Latin-only.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "linear-gradient(135deg,#0f1011 0%,#131d27 55%,#1a4788 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 30, color: "#b3aaff", letterSpacing: 6 }}>KOLI AI</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          The digital receptionist
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, color: "#b3aaff" }}>
          that answers 24/7.
        </div>
        <div style={{ fontSize: 32, marginTop: 40, color: "#cfd3d8" }}>
          Any language · Books appointments · Phone &amp; WhatsApp
        </div>
      </div>
    ),
    size
  )
}
