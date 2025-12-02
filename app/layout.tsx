import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Grimstad Kiosk & Grill | Smaken av ekte grill",
  description:
    "Grimstad Kiosk & Grill - Alt du trenger for at helgekosen eller en blåmandag skal bli fullkommen. Kebab, burgere, wraps, pizza og mer i Grimstad. Best grill food in Grimstad, Norway.",
  keywords: [
    "Grimstad Kiosk Grill",
    "Grimstad restaurant",
    "kebab Grimstad",
    "burger Grimstad",
    "pizza Grimstad",
    "grill mat",
    "fast food Grimstad",
    "halal Grimstad",
    "beste kebab Sørlandet",
    "mat levering Grimstad",
    "takeaway Grimstad",
    "Storgata 27A Grimstad",
    "best food Grimstad Norway",
    "Norwegian grill restaurant",
  ],
  authors: [{ name: "Grimstad Kiosk & Grill" }],
  creator: "Grimstad Kiosk & Grill",
  publisher: "Grimstad Kiosk & Grill",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://grimstadkiosk.no"),
  alternates: {
    canonical: "/",
    languages: {
      "nb-NO": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Grimstad Kiosk & Grill | Smaken av ekte grill",
    description: "Smaken av ekte grill - Kebab, burgere, pizza og mer i Grimstad. Åpent alle dager!",
    type: "website",
    locale: "nb_NO",
    alternateLocale: "en_US",
    siteName: "Grimstad Kiosk & Grill",
    url: "https://grimstadkiosk.no",
    images: [
      {
        url: "/images/screenshot-202025-12-01-20170926.png",
        width: 1200,
        height: 630,
        alt: "Grimstad Kiosk & Grill storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grimstad Kiosk & Grill | Smaken av ekte grill",
    description: "Kebab, burgere, pizza og mer i Grimstad. Åpent alle dager!",
    images: ["/images/screenshot-202025-12-01-20170926.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "restaurant",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Grimstad Kiosk & Grill",
              image: "/images/screenshot-202025-12-01-20170926.png",
              "@id": "https://grimstadkiosk.no",
              url: "https://grimstadkiosk.no",
              telephone: "+47 96 00 88 48",
              email: "grimstadkiosk@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Storgata 27A",
                addressLocality: "Grimstad",
                postalCode: "4876",
                addressCountry: "NO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 58.3405,
                longitude: 8.5934,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
                  opens: "10:00",
                  closes: "23:59",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "10:00",
                  closes: "02:30",
                },
              ],
              servesCuisine: ["Kebab", "Burger", "Pizza", "Norwegian", "Fast Food"],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "80",
              },
              sameAs: ["https://www.facebook.com/Grimstadkiosk/"],
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
