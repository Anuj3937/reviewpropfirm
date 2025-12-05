import { Metadata } from "next"
import { ComparePageClient } from "./client"

export const metadata: Metadata = {
    title: "Compare Prop Firms 2025 | Side-by-Side Comparison Chart",
    description: "Compare 25+ prop trading firms side-by-side. Analyze profit splits, evaluation fees, payout speeds, trading rules, and funding limits to find your perfect match.",
    keywords: [
        "prop firm comparison",
        "compare prop firms",
        "prop firm comparison chart",
        "best prop firm comparison",
        "prop firm side by side",
        "compare funded trading accounts",
        "prop firm profit split comparison",
        "prop firm fees comparison",
        "prop firm payout comparison",
        "FTMO vs Funded Next",
        "prop firm evaluation comparison",
        "cheapest prop firm",
        "highest profit split prop firm",
        "prop firm with no time limit",
    ],
    openGraph: {
        title: "Compare Prop Firms 2025 | Side-by-Side Comparison Chart",
        description: "Compare 25+ prop trading firms. Analyze profit splits, fees, and trading rules.",
        type: "website",
        url: "https://thepropfirmreviews.vercel.app/compare",
    },
    alternates: {
        canonical: "https://thepropfirmreviews.vercel.app/compare",
    },
}

export default function ComparePage() {
    return <ComparePageClient />
}
