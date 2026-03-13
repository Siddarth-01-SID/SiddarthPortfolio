import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://siddarth-sharma.vercel.app'),
  title: {
    default: "Siddarth Sharma — UI/UX & Product Designer",
    template: "%s | Siddarth Sharma",
  },
  description:
    "UI/UX and Product Designer crafting thoughtful, intuitive, and visually engaging digital experiences. Creating products that people love using.",
  keywords: ["UI/UX Designer", "Product Designer", "Siddarth Sharma", "User Experience", "Interface Design", "Digital Product Design", "Figma", "Design Systems"],
  authors: [{ name: "Siddarth Sharma" }],
  creator: "Siddarth Sharma",
  publisher: "Siddarth Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Siddarth Sharma — UI/UX & Product Designer",
    description: "UI/UX and Product Designer crafting thoughtful, intuitive, and visually engaging digital experiences.",
    siteName: "Siddarth Sharma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siddarth Sharma — UI/UX & Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddarth Sharma — UI/UX & Product Designer",
    description: "UI/UX and Product Designer crafting thoughtful, intuitive, and visually engaging digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
