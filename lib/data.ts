export interface PropFirm {
    id: string
    name: string
    slug: string
    logo: string
    rating: number
    reviewCount: number
    maxFunding: string
    profitSplit: string
    evaluationType: "1-Step" | "2-Step" | "Instant"
    priceStarting: number
    features: string[]
    description: string
    pros: string[]
    cons: string[]
    fullReview: string
    affiliateUrl: string
    websiteUrl: string
    metaTitle: string
    metaDescription: string
}

export const firms: PropFirm[] = [
    {
        id: "1",
        name: "FTMO",
        slug: "ftmo",
        logo: "/logos/ftmo.png", // Placeholder
        rating: 4.9,
        reviewCount: 1250,
        maxFunding: "$200,000",
        profitSplit: "Up to 90%",
        evaluationType: "2-Step",
        priceStarting: 164,
        features: ["Trusted since 2015", "Bi-weekly Payouts", "Free Trial"],
        description: "The industry leader in proprietary trading. FTMO offers a robust 2-step evaluation process with excellent support and reliable payouts.",
        pros: ["Industry standard reliability", "Great trading conditions", "Free trial available", "Fast payouts"],
        cons: ["Stricter drawdown rules than some competitors", "Weekend holding restrictions on some accounts"],
        fullReview: "FTMO is widely considered the gold standard in the prop trading industry. Established in 2015, they have paid out millions to traders worldwide. Their evaluation process consists of a Challenge and Verification stage. Once funded, traders can keep up to 90% of their profits. The trading conditions are excellent, with low spreads and fast execution. Customer support is top-notch, available 24/7 in multiple languages.",
        affiliateUrl: "https://ftmo.com/en/",
        websiteUrl: "https://ftmo.com/en/",
        metaTitle: "FTMO Review 2025: Is it Still the Best Prop Firm?",
        metaDescription: "Read our in-depth FTMO review. We analyze their funding challenges, profit splits, and payout reliability to help you decide if they are the right prop firm for you."
    },
    {
        id: "2",
        name: "The 5%ers",
        slug: "the-5ers",
        logo: "/logos/5ers.png", // Placeholder
        rating: 4.8,
        reviewCount: 850,
        maxFunding: "$4,000,000",
        profitSplit: "Up to 100%",
        evaluationType: "Instant",
        priceStarting: 260,
        features: ["Instant Funding", "Scale up to $4M", "Salary Program"],
        description: "Unique instant funding model that allows you to start trading with real capital immediately. Great for traders who want to skip the challenge.",
        pros: ["Instant funding (no evaluation)", "High scaling potential", "Salary for top traders", "Long time in business"],
        cons: ["Lower leverage (1:10 to 1:30)", "Higher entry cost for instant funding"],
        fullReview: "The 5%ers offer a unique proposition: instant funding. Unlike most firms that require you to pass a challenge, The 5%ers give you a funded account immediately. You start with a smaller capital and scale up as you make profits. They offer a hyper-growth program that can scale up to $4 million. The trade-off is lower leverage and a higher initial fee compared to challenge-based firms, but for traders who want to start earning immediately, it's an excellent choice.",
        affiliateUrl: "https://the5ers.com/",
        websiteUrl: "https://the5ers.com/",
        metaTitle: "The 5%ers Review: Instant Funding Prop Firm Explained",
        metaDescription: "Detailed review of The 5%ers instant funding program. Learn how to get funded immediately without a challenge and scale up to $4 million."
    },
    {
        id: "3",
        name: "Alpha Capital Group",
        slug: "alpha-capital",
        logo: "/logos/alpha.png", // Placeholder
        rating: 4.7,
        reviewCount: 620,
        maxFunding: "$2,000,000",
        profitSplit: "80%",
        evaluationType: "2-Step",
        priceStarting: 497,
        features: ["0% Commission", "Raw Spreads", "Dashboard 2.0"],
        description: "Built by traders for traders. Alpha Capital Group offers competitive trading conditions and a custom-built dashboard for analytics.",
        pros: ["0% commission on trades", "Excellent dashboard", "Good educational resources", "Responsive support"],
        cons: ["Newer than FTMO", "Limited platform options"],
        fullReview: "Alpha Capital Group has quickly made a name for itself by offering 0% commission trading, which is a huge advantage for scalpers and high-frequency traders. Their custom dashboard provides detailed analytics to help you improve your trading. The evaluation is a standard 2-step process. They are praised for their transparency and community engagement.",
        affiliateUrl: "https://alphacapitalgroup.uk/",
        websiteUrl: "https://alphacapitalgroup.uk/",
        metaTitle: "Alpha Capital Group Review: 0% Commission Prop Trading",
        metaDescription: "Is Alpha Capital Group legit? We review their 0% commission trading accounts, spreads, and payout process."
    },
    {
        id: "4",
        name: "FundedNext",
        slug: "fundednext",
        logo: "/logos/fundednext.png", // Placeholder
        rating: 4.7,
        reviewCount: 900,
        maxFunding: "$300,000",
        profitSplit: "Up to 95%",
        evaluationType: "1-Step",
        priceStarting: 99,
        features: ["15% Profit Share in Challenge", "No Time Limit", "Balance Based Drawdown"],
        description: "One of the few firms that pays you a profit share even during the challenge phase. Offers flexible trading rules.",
        pros: ["Profit share during challenge", "No time limits", "Balance-based drawdown", "Low starting price"],
        cons: ["Complex rule set for some accounts", "Newer in the market"],
        fullReview: "FundedNext disrupted the industry by introducing profit sharing during the challenge phase. This means you can earn money while you are still being evaluated. They offer both 1-step and 2-step models with no time limits. Their balance-based drawdown is also more trader-friendly than the equity-based drawdown used by many competitors.",
        affiliateUrl: "https://fundednext.com/",
        websiteUrl: "https://fundednext.com/",
        metaTitle: "FundedNext Review: Profit Share During Challenge?",
        metaDescription: "FundedNext pays you while you trade. Read our review of their unique profit-sharing model and balance-based drawdown rules."
    },
    {
        id: "5",
        name: "Blue Guardian",
        slug: "blue-guardian",
        logo: "/logos/blueguardian.png", // Placeholder
        rating: 4.6,
        reviewCount: 400,
        maxFunding: "$2,000,000",
        profitSplit: "85%",
        evaluationType: "2-Step",
        priceStarting: 187,
        features: ["Guardian Protector", "No Time Limits", "Bi-weekly Payouts"],
        description: "Known for their 'Guardian Protector' tool which helps prevent hitting the daily drawdown limit.",
        pros: ["Guardian Protector tool", "No time limits", "Simple rules", "Good scaling plan"],
        cons: ["Slippage can be high during news", "Support response time varies"],
        fullReview: "Blue Guardian is famous for its 'Guardian Protector' feature, a built-in risk management tool that helps traders avoid hitting their daily loss limit. This is invaluable for newer traders. They offer a straightforward 2-step evaluation with no time limits and bi-weekly payouts. The scaling plan allows you to double your account size every few months if you are profitable.",
        affiliateUrl: "https://blueguardian.com/",
        websiteUrl: "https://blueguardian.com/",
        metaTitle: "Blue Guardian Review: The Best Prop Firm for Risk Management?",
        metaDescription: "Review of Blue Guardian's 'Guardian Protector' tool and funding programs. See if their risk management features can help you pass."
    },
    {
        id: "6",
        name: "TopTier Trader",
        slug: "toptier-trader",
        logo: "/logos/toptier.png", // Placeholder
        rating: 4.5,
        reviewCount: 350,
        maxFunding: "$600,000",
        profitSplit: "Up to 90%",
        evaluationType: "2-Step",
        priceStarting: 149,
        features: ["Swing Trading Allowed", "Scaling Plan", "Regular Promos"],
        description: "A reliable firm offering standard 2-step challenges with competitive pricing and regular promotional offers.",
        pros: ["Swing trading friendly", "Regular discounts", "Clear rules", "Fast verification"],
        cons: ["High spreads on some pairs", "Strict news trading rules on some accounts"],
        fullReview: "TopTier Trader is a solid choice for swing traders as they allow holding trades over the weekend. They frequently run promotions offering discounts and higher profit splits. The evaluation is a standard 2-step process. They have a good reputation for payouts and fair treatment of traders.",
        affiliateUrl: "https://toptiertrader.com/",
        websiteUrl: "https://toptiertrader.com/",
        metaTitle: "TopTier Trader Review: Swing Trading Friendly Prop Firm",
        metaDescription: "TopTier Trader review for 2025. We analyze their swing trading rules, scaling plan, and payout history."
    }
]
