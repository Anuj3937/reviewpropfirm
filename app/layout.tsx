import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AuthProvider } from "@/contexts/AuthContext"
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thepropfirmreviews.vercel.app'),
  title: {
    default: 'Prop Firm Reviews | Find Your Perfect Funding Partner',
    template: '%s | Prop Firm Reviews',
  },
  description: 'Compare the best proprietary trading firms. Unbiased reviews, funding rules, profit splits, and trader ratings for FTMO, The 5%ers, and more.',
  keywords: ['prop firm reviews', 'proprietary trading', 'funded trader', 'forex funding', 'ftmo review', 'prop firm comparison'],
  authors: [{ name: 'Prop Firm Reviews Team' }],
  creator: 'Prop Firm Reviews',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'a4uw-76wRgn19CoI2zARtb1A3J9899tHoos_B_WM99E',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thepropfirmreviews.vercel.app',
    title: 'Prop Firm Reviews | Find Your Perfect Funding Partner',
    description: 'Compare the best proprietary trading firms. Unbiased reviews, funding rules, profit splits, and trader ratings.',
    siteName: 'Prop Firm Reviews',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prop Firm Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prop Firm Reviews | Find Your Perfect Funding Partner',
    description: 'Compare the best proprietary trading firms. Unbiased reviews, funding rules, profit splits, and trader ratings.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <OrganizationSchema />
        <WebsiteSchema />
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

