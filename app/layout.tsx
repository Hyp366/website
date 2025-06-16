import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import SupabaseProvider from "@/components/supabase-provider"
import ViewportHandler from "@/components/viewport-handler"

const inter = Inter({ subsets: ["latin"], display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: "Hearty You Products India Pvt Ltd | Organic Red Chilli, Millets, Spices & Herbal Powders",
  description:
    "Discover premium quality organic Red Chilli, Millets, Spices, and Herbal & Fruit Powders from Hearty You Products India Pvt Ltd in Bangalore. Our products are naturally sourced, sustainably grown, and packed with authentic flavors and nutrients for your health and culinary delight.",
  keywords: "Hearty You Products, organic red chilli, millets India, organic spices, natural food products, herbal powders, fruit powders, moringa, neem powder, Bangalore",
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
            <ViewportHandler />
            <Header />
            <main className="min-h-screen flex-1 w-full">{children}</main>
            <WhatsAppButton />
            <Footer />
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
