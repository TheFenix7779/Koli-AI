import { ImageResponse } from "next/og"

export const dynamic = "force-static"

// Separate from app/icon.tsx on purpose: the favicon is 64px, but Google's
// Organization logo guidelines require at least 112x112, so schema.org `logo`
// points here instead.
const SIZE = 512

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1011",
          color: "#b3aaff",
          fontSize: 300,
          fontWeight: 700,
        }}
      >
        K
      </div>
    ),
    { width: SIZE, height: SIZE },
  )
}
