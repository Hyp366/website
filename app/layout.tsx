import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import SupabaseProvider from "@/components/supabase-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hearty You Products India Pvt Ltd | Organic Red Chilli, Millets & Spices",
  description:
    "Premium quality organic Red Chilli, Millets and Spices from Hearty You Products India. Natural, healthy, and sustainably sourced ingredients.",
  keywords: "Hearty You Products, organic red chilli, millets India, organic spices, natural food products",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SupabaseProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <WhatsAppButton />
            <Footer />
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
