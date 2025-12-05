import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PromoBar } from "@/components/layout/promo-bar"
import { AuthProvider } from "@/contexts/AuthContext"
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thepropfirmreviews.vercel.app'),
  title: {
    default: 'Best Prop Firm Reviews 2025 | Compare Top Funded Trading Firms',
    template: '%s | Prop Firm Reviews',
  },
  description: 'The #1 resource for prop firm reviews. Compare 25+ proprietary trading firms with honest reviews, profit splits, payout speeds, hidden rules, and trader ratings. Find your perfect funding partner.',
  keywords: [
    // Primary keywords
    'prop firm reviews',
    'best prop firms',
    'best prop firms 2025',
    'proprietary trading firm',
    'funded trader',
    'prop firm comparison',
    'top prop trading firms',
    'prop firm rankings',
    // Secondary keywords  
    'forex prop firm',
    'futures prop firm',
    'instant funding prop firm',
    'prop firm challenge',
    'prop firm evaluation',
    'funded trading account',
    'prop firm profit split',
    'prop firm payout',
    'prop firm rules',
    'legit prop firms',
    'cheap prop firms',
    'best prop firm for beginners',
    // Long-tail keywords
    'prop firms with no time limit',
    'prop firms that allow news trading',
    'prop firms with fast withdrawals',
    'how to pass prop firm challenge',
    'prop firm daily loss limit',
    'prop firm maximum drawdown',
    'prop firm scaling plan',
    'which prop firm actually pays',
    'prop firm hidden fees',
    // Firm-specific
    'FTMO review',
    'funded next review',
    'the5ers review',
    'funding pips review',
    'apex trader funding review',
    'topstep review',
    'my forex funds alternative',
  ],
  authors: [{ name: 'Prop Firm Reviews Team' }],
  creator: 'Prop Firm Reviews',
  publisher: 'Prop Firm Reviews',
  alternates: {
    canonical: 'https://thepropfirmreviews.vercel.app',
    languages: {
      'en-US': 'https://thepropfirmreviews.vercel.app',
    },
  },
  verification: {
    google: 'a4uw-76wRgn19CoI2zARtb1A3J9899tHoos_B_WM99E',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thepropfirmreviews.vercel.app',
    title: 'Best Prop Firm Reviews 2025 | Compare Top Funded Trading Firms',
    description: 'The #1 resource for prop firm reviews. Compare 25+ proprietary trading firms with honest reviews, profit splits, payout speeds, and trader ratings.',
    siteName: 'Prop Firm Reviews',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prop Firm Reviews - Compare the Best Funded Trading Firms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@propfirmreviews',
    creator: '@propfirmreviews',
    title: 'Best Prop Firm Reviews 2025 | Compare Top Funded Trading Firms',
    description: 'The #1 resource for prop firm reviews. Compare 25+ proprietary trading firms with honest reviews and trader ratings.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Finance',
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
          <PromoBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}


