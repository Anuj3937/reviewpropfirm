// Comprehensive SEO Keywords and Metadata for Prop Firm Reviews
// Based on keyword research for maximum search visibility

export const siteConfig = {
    name: "Prop Firm Reviews",
    url: "https://thepropfirmreviews.vercel.app",
    description: "The most comprehensive database of proprietary trading firms. Compare 25+ prop firms with unbiased reviews, profit splits, hidden rules, payout speeds, and trader ratings.",

    // Primary keywords - highest search volume
    primaryKeywords: [
        "prop firm reviews",
        "best prop firms",
        "proprietary trading firm",
        "funded trader",
        "prop firm comparison",
        "top prop trading firms",
        "prop firm rankings",
    ],

    // Secondary keywords - medium search volume
    secondaryKeywords: [
        "forex prop firm",
        "futures prop firm",
        "instant funding prop firm",
        "prop firm challenge",
        "prop firm evaluation",
        "funded trading account",
        "prop firm profit split",
        "prop firm payout",
        "prop firm rules",
        "prop firm scam",
        "legit prop firms",
        "cheap prop firms",
        "best prop firm for beginners",
    ],

    // Long-tail keywords - lower competition, high conversion
    longTailKeywords: [
        "best prop trading firm for beginners",
        "prop firms with no time limit",
        "prop firms that allow news trading",
        "prop firms with fast withdrawals",
        "prop firm with highest profit split",
        "how to pass prop firm challenge",
        "prop firm daily loss limit",
        "prop firm maximum drawdown",
        "prop firm scaling plan",
        "prop trading firm reviews 2025",
        "FTMO review 2025",
        "funded trading plus review",
        "apex trader funding review",
        "topstep review",
        "my forex funds alternative",
        "the5ers review",
        "funding pips review",
        "prop firm vs own capital",
        "which prop firm actually pays",
        "prop firm hidden fees",
    ],

    // Firm-specific keywords (for individual review pages)
    firmKeywords: (firmName: string) => [
        `${firmName} review`,
        `${firmName} review 2025`,
        `${firmName} payout proof`,
        `${firmName} profit split`,
        `${firmName} rules`,
        `${firmName} promo code`,
        `${firmName} discount`,
        `${firmName} vs FTMO`,
        `is ${firmName} legit`,
        `${firmName} hidden rules`,
        `${firmName} challenge`,
        `${firmName} evaluation`,
    ],

    // Blog post keywords
    educationalKeywords: [
        "how to get funded by a prop firm",
        "prop firm trading strategies",
        "risk management for funded traders",
        "drawdown management prop firm",
        "passing prop firm challenge tips",
        "prop firm trading psychology",
        "best trading strategy for prop firms",
        "prop firm consistency rule",
        "trading with prop firm capital",
    ],

    // Category-specific descriptions
    categoryDescriptions: {
        reviews: "Honest, in-depth reviews of proprietary trading firms. Compare profit splits, payout speeds, trading rules, and trader experiences.",
        compare: "Side-by-side comparison of top prop firms. Compare profit splits, evaluation fees, funding limits, and trading conditions.",
        tools: "Free trading calculators for prop firm traders. Calculate challenge costs, potential payouts, drawdown limits, and more.",
        offers: "Latest prop firm discount codes and promotional offers. Save money on your evaluation with exclusive deals.",
        blog: "Trading tips, prop firm news, and educational content for funded traders. Learn strategies to pass your challenge.",
        bestSellers: "The most popular and trusted prop firms ranked by trader satisfaction and payout reliability.",
        hiddenRules: "Understand the hidden rules and restrictions that prop firms don't advertise. Avoid surprises and protect your account.",
        payouts: "Transparent payout statistics and speed rankings. See which prop firms pay fastest.",
    }
}

// Generate comprehensive keywords array for metadata
export function generateKeywords(pageType: string, firmName?: string): string[] {
    const base = [...siteConfig.primaryKeywords]

    switch (pageType) {
        case "home":
            return [...base, ...siteConfig.secondaryKeywords.slice(0, 10)]
        case "reviews":
            return [...base, "prop firm ratings", "prop firm testimonials", "prop firm feedback"]
        case "compare":
            return [...base, "prop firm comparison chart", "compare funded trading accounts", "prop firm side by side"]
        case "tools":
            return ["prop firm calculator", "payout calculator", "drawdown calculator", "challenge cost calculator", "trading profit calculator"]
        case "offers":
            return ["prop firm discount", "prop firm promo code", "prop firm coupon", "cheap prop firm challenge", "prop firm sale"]
        case "blog":
            return [...siteConfig.educationalKeywords]
        case "firm":
            return firmName ? siteConfig.firmKeywords(firmName) : base
        default:
            return base
    }
}

// Generate page-specific meta description
export function generateDescription(pageType: string, firmName?: string): string {
    switch (pageType) {
        case "home":
            return siteConfig.description
        case "reviews":
            return siteConfig.categoryDescriptions.reviews
        case "compare":
            return siteConfig.categoryDescriptions.compare
        case "tools":
            return siteConfig.categoryDescriptions.tools
        case "offers":
            return siteConfig.categoryDescriptions.offers
        case "blog":
            return siteConfig.categoryDescriptions.blog
        case "firm":
            return firmName
                ? `Complete ${firmName} review 2025. Honest analysis of profit splits, payout speed, trading rules, hidden fees, and real trader experiences.`
                : siteConfig.categoryDescriptions.reviews
        default:
            return siteConfig.description
    }
}

// Image storage note:
// Firestore stores STRING values only. For user profile photos, we store the URL string (from Google Auth).
// For actual image uploads in the future, use Firebase Storage which returns a download URL string.
