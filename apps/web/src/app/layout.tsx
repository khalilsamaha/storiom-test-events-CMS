import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SplashScreen from "@/components/SplashScreen"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Storiom — Kornet Chehwan",
  description: "Stores, dining, and essentials across every floor. Explore Storiom at Kornet Chehwan, Antelias–Bikfaya Road.",
  icons: {
    icon: "/logo-storiom-square.png",
    apple: "/logo-storiom-square.png",
  },
  openGraph: {
    title: "Storiom — Kornet Chehwan",
    description: "Stores, dining, and essentials across every floor. Explore Storiom at Kornet Chehwan, Antelias–Bikfaya Road.",
    url: "https://www.storiom.com.lb",
    siteName: "Storiom",
    images: [{ url: "/logo-storiom-square.png" }],
    locale: "en_US",
    type: "website",
  },
}

/*
export const metadata: Metadata = {
  title: "Storiom — Kornet Chehwan",
  description:
    "Stores, dining, and essentials across every floor. Explore Storiom at Kornet Chehwan, Antelias–Bikfaya Road.",
}
*/

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <GoogleAnalytics />
        <SplashScreen />
        {/* 4px brand gradient stripe */}
        <div className="h-1 w-full brand-gradient" />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
