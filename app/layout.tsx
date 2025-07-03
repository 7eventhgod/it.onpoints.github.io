import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/contexts/translation-context"
import RootLoader from "./components/RootLoader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OnPoints IT - Premium Technology Solutions",
  description:
    "Professional IPTV, server management, network infrastructure, software development, cybersecurity, and firewall solutions.",
  keywords: "IPTV, server management, network infrastructure, cybersecurity, firewall, software development",
  openGraph: {
    title: "OnPoints IT - Premium Technology Solutions",
    description: "Professional technology solutions for businesses worldwide",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <RootLoader>
          <TranslationProvider>
            <Header />
            <main>{children}</main>     
            <Footer />
          </TranslationProvider>
        </RootLoader>
      </body>
    </html>
  )
}
