import { Metadata } from "next"
import { firms } from "@/lib/data"
import { ReviewsPageClient } from "./client"

export const metadata: Metadata = {
    title: "Prop Firm Reviews 2025 | Honest Reviews of 25+ Trading Firms",
    description: "In-depth prop firm reviews for 2025. Compare profit splits, payout speeds, hidden rules, and trader experiences for FTMO, Funded Next, The 5%ers, and 20+ more firms.",
    keywords: [
        "prop firm reviews",
        "prop firm reviews 2025",
        "best prop firms",
        "proprietary trading firm reviews",
        "funded trader reviews",
        "FTMO review",
        "Funded Next review",
        "The 5%ers review",
        "prop firm comparison",
        "top rated prop firms",
        "prop firm ratings",
        "honest prop firm reviews",
        "which prop firm is best",
        "legit prop firms",
        "prop firm scam",
    ],
    openGraph: {
        title: "Prop Firm Reviews 2025 | Honest Reviews of 25+ Trading Firms",
        description: "In-depth reviews of the world's leading proprietary trading firms. We test their platforms, spreads, and payout speeds.",
        type: "website",
        url: "https://thepropfirmreviews.vercel.app/reviews",
    },
    alternates: {
        canonical: "https://thepropfirmreviews.vercel.app/reviews",
    },
}

// Generate static paths for all firms
export async function generateStaticParams() {
    return firms.map((firm) => ({
        slug: firm.slug,
    }))
}

export default function ReviewsPage() {
    return <ReviewsPageClient />
}
