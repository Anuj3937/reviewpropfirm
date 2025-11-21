export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    content: string // HTML content for simplicity in this demo, could be MDX
    coverImage: string
    date: string
    author: {
        name: string
        role: string
        avatar: string
    }
    category: string
    tags: string[]
    readTime: string
    relatedFirms: string[] // Slugs of related firms to link to
}

export const blogPosts: BlogPost[] = [
    {
        slug: "top-5-prop-firms-2025",
        title: "Top 5 Proprietary Trading Firms for 2025: The Ultimate Comparison",
        excerpt: "Discover the best prop firms of 2025. We analyze profit splits, scaling plans, and trading rules to help you find your perfect funding partner.",
        coverImage: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
        date: "2024-11-20",
        author: {
            name: "Alex Morgan",
            role: "Senior Trader & Analyst",
            avatar: "/avatars/alex.jpg"
        },
        category: "Reviews",
        tags: ["Best Prop Firms", "Funding", "Forex Trading"],
        readTime: "8 min read",
        relatedFirms: ["ftmo", "the-5ers"],
        content: `
      <p>Choosing the right proprietary trading firm can be the difference between a successful trading career and wasted capital. In 2025, the competition among prop firms has never been fiercer, which is great news for traders.</p>
      
      <h2>1. FTMO - The Industry Standard</h2>
      <p>FTMO continues to set the bar high with its reliable payouts and excellent trading conditions. Their 2-step evaluation process is fair, and the scaling plan allows consistent traders to manage up to $2M.</p>
      <ul>
        <li><strong>Profit Split:</strong> Up to 90%</li>
        <li><strong>Leverage:</strong> 1:100</li>
        <li><strong>Pros:</strong> Trusted reputation, great dashboard.</li>
      </ul>

      <h2>2. The 5%ers - Best for Instant Funding</h2>
      <p>If you want to skip the evaluation, The 5%ers offer one of the best instant funding models in the industry. Their growth plan is exponential, doubling your account at every milestone.</p>

      <h2>What to Look for in a Prop Firm</h2>
      <p>When comparing firms, don't just look at the profit split. Consider the drawdown rules, news trading restrictions, and payout frequency. A firm with a slightly lower split but better trading conditions is often the superior choice.</p>
    `
    },
    {
        slug: "how-to-pass-prop-firm-challenge",
        title: "How to Pass Your Prop Firm Challenge: 7 Pro Tips",
        excerpt: "Struggling to pass the evaluation phase? Learn the risk management strategies and psychological hacks used by funded traders.",
        coverImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop",
        date: "2024-11-18",
        author: {
            name: "Sarah Jenkins",
            role: "Psychology Coach",
            avatar: "/avatars/sarah.jpg"
        },
        category: "Education",
        tags: ["Trading Psychology", "Risk Management", "Tutorial"],
        readTime: "12 min read",
        relatedFirms: ["ftmo"],
        content: `
      <p>Passing a prop firm challenge is 20% strategy and 80% psychology. Most traders fail not because they can't trade, but because they rush.</p>

      <h2>1. Respect the Daily Drawdown</h2>
      <p>The daily drawdown is the silent killer. Never risk more than 1-2% of your daily limit on a single trade. If your daily loss limit is 5%, your risk per trade should not exceed 0.5% to 1%.</p>

      <h2>2. Don't Rush the Process</h2>
      <p>Most firms give you unlimited time now. Use it. There is no prize for passing in 3 days, but there is a penalty for blowing up your account trying to rush.</p>

      <h2>3. Stick to Your A-Setup</h2>
      <p>During the evaluation, only take your highest probability setups. This is not the time to experiment with new strategies.</p>
    `
    },
    {
        slug: "prop-firm-rules-explained",
        title: "Prop Firm Rules Explained: Drawdown, News Trading, and consistency",
        excerpt: "Confused by 'relative drawdown' or 'consistency rules'? We break down the complex terms so you don't lose your account by accident.",
        coverImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
        date: "2024-11-15",
        author: {
            name: "Michael Chen",
            role: "Risk Manager",
            avatar: "/avatars/michael.jpg"
        },
        category: "Guides",
        tags: ["Rules", "Education", "Beginner"],
        readTime: "6 min read",
        relatedFirms: ["the-5ers"],
        content: `
      <p>Understanding the fine print is crucial. Many traders lose their funded accounts simply because they didn't fully understand a specific rule.</p>

      <h2>Relative vs. Absolute Drawdown</h2>
      <p><strong>Absolute Drawdown</strong> is calculated from your initial balance. <strong>Relative (or Trailing) Drawdown</strong> moves with your equity high water mark. This is much harder to manage and requires stricter risk control.</p>

      <h2>News Trading Restrictions</h2>
      <p>Some firms strictly forbid trading 2 minutes before and after high-impact news. Always check the economic calendar and the specific firm's FAQ.</p>
    `
    }
]
