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
    "מוקד קבלה דיגיטלי מבוסס AI שמדבר בכל שפה, מזמן תורים ועונה ללקוחות 24/7. מושלם למרפאות, קליניקות ועסקי שירות.",
}

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('koli-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      data-theme="dark"
      suppressHydrationWarning
      className={`${frank.variable} ${heebo.variable} ${robotoMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
