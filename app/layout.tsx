import type { Metadata } from "next"
import { Frank_Ruhl_Libre, Heebo, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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

const SITE_URL = "https://koli-ai.com"

const TITLE = "קולי AI — מזכירה וירטואלית ומוקד קבלה AI שעובד 24/7"
const DESCRIPTION =
  "מזכירה וירטואלית AI שעונה לטלפון ול-WhatsApp בכל שפה, קובעת תורים ביומן ומתעדת כל שיחה. למרפאות שיניים, קליניקות, משרדי עורכי דין ועסקי שירות."


const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "קולי AI",
      alternateName: "Koli AI",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      telephone: "+972-55-564-8222",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+972-55-564-8222",
          contactType: "sales",
          areaServed: "IL",
          availableLanguage: ["he", "en", "ar", "ru", "fr"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "קולי AI",
      inLanguage: "he-IL",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      name: "מוקד קבלה דיגיטלי מבוסס AI",
      serviceType: "AI digital receptionist",
      description: DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Israel" },
    },
  ],
}

export const metadata: Metadata = {
  // The site is reachable on four domains; this pins every generated URL to the
  // canonical one so Google indexes koli-ai.com and treats the rest as aliases.
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "קולי AI",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body className="min-h-dvh">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
