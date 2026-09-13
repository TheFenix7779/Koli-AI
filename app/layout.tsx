import type { Metadata } from "next"
import { Frank_Ruhl_Libre, Heebo, Roboto_Mono } from "next/font/google"
import "./globals.css"

const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400"],
  variable: "--font-frank",
  display: "swap",
})

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-heebo",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "קולי AI — הרצפציה הדיגיטלית שעובדת 24/7",
  description:
    "מוקד קבלה דיגיטלי מבוסס AI שמדבר עברית ואנגלית, מזמן תורים ועונה ללקוחות 24/7. מושלם למרפאות וקליניקות.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frank.variable} ${heebo.variable} ${robotoMono.variable}`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
