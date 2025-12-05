"use client"

import { AlertTriangle, Eye, ShieldAlert, Scale, Clock, Wifi, TrendingDown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface HiddenRule {
    icon: React.ReactNode
    title: string
    description: string
    examples: string[]
    firms: string[]
    severity: "high" | "medium" | "low"
}

const hiddenRules: HiddenRule[] = [
    {
        icon: <Clock className="h-6 w-6" />,
        title: "News Trading Restrictions",
        description: "Many firms prohibit trading within 2-5 minutes of high-impact economic releases. This can result in instant disqualification.",
        examples: [
            "No trading 2 minutes before and after NFP, FOMC, CPI releases",
            "Positions opened during news window may be forcibly closed",
            "Some firms define 'news' differently - check their calendar"
        ],
        firms: ["FTMO", "FundedNext", "Most 2-step firms"],
        severity: "high"
    },
    {
        icon: <Scale className="h-6 w-6" />,
        title: "Consistency Rules",
        description: "Your profit must be spread evenly across trading days. A single 'lucky' trade won't pass the evaluation even if you hit the target.",
        examples: [
            "No single day can exceed 30-50% of total profits",
            "Must have minimum 5-10 profitable trading days",
            "Lot sizes must remain consistent throughout"
        ],
        firms: ["Smart Prop Trader", "Some FundedNext accounts"],
        severity: "high"
    },
    {
        icon: <Wifi className="h-6 w-6" />,
        title: "IP Address Monitoring",
        description: "Firms track your login locations. Using VPNs, traveling, or sharing accounts can trigger reviews or termination.",
        examples: [
            "VPN usage may flag your account for review",
            "Logging in from multiple countries triggers alerts",
            "Using copy trading services from different IPs is banned"
        ],
        firms: ["FundedNext", "Many newer firms"],
        severity: "medium"
    },
    {
        icon: <TrendingDown className="h-6 w-6" />,
        title: "Trailing vs Static Drawdown",
        description: "Some firms use trailing (relative) drawdown that follows your high water mark. This is much harder to manage than static drawdown.",
        examples: [
            "If you profit $5k, your stop-out level also moves up $5k",
            "Floating profits count toward your high water mark",
            "You can lose your account even without 'realizing' profits"
        ],
        firms: ["Some instant funding accounts", "Select evaluation firms"],
        severity: "high"
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Martingale & Grid Detection",
        description: "Algorithms detect position averaging, grid trading, and martingale strategies - often resulting in immediate disqualification.",
        examples: [
            "Adding to losing positions is flagged",
            "Grid strategies with increasing lot sizes are banned",
            "Maximum 2-3x position scaling usually allowed"
        ],
        firms: ["Alpha Capital", "Most established firms"],
        severity: "medium"
    },
    {
        icon: <Clock className="h-6 w-6" />,
        title: "Weekend Holding Restrictions",
        description: "Some firms don't allow holding positions over the weekend, or charge extra fees for doing so.",
        examples: [
            "All positions must be closed by Friday market close",
            "Higher margin requirements for weekend positions",
            "Swing accounts often cost extra"
        ],
        firms: ["FTMO (some accounts)", "Various firms with 'Day Trader' labels"],
        severity: "low"
    }
]

const getSeverityColor = (severity: "high" | "medium" | "low") => {
    switch (severity) {
        case "high": return "text-red-400 bg-red-500/10 border-red-500/20"
        case "medium": return "text-amber-400 bg-amber-500/10 border-amber-500/20"
        case "low": return "text-blue-400 bg-blue-500/10 border-blue-500/20"
    }
}

export default function HiddenRulesPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative border-b border-white/10 bg-gradient-to-b from-red-500/5 to-transparent pb-20 pt-12">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                        <AlertTriangle className="h-4 w-4" />
                        Read Before You Buy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Prop Firm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                            Hidden Rules
                        </span>{" "}
                        Exposed
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        The fine print that most traders ignore. These rules can disqualify you
                        even if you hit your profit target.
                    </p>
                </div>
            </div>

            {/* Warning Banner */}
            <div className="container mt-12">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/20 flex items-start gap-4">
                    <ShieldAlert className="h-8 w-8 text-amber-400 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">Why This Matters</h3>
                        <p className="text-zinc-400">
                            Studies show that <strong className="text-white">40% of evaluation failures</strong> are due to rule violations,
                            not poor trading. Many traders hit their profit target but fail due to hidden clauses they weren&apos;t aware of.
                            Reading this guide could save you hundreds of dollars and weeks of frustration.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rules Grid */}
            <div className="container mt-12">
                <div className="space-y-6">
                    {hiddenRules.map((rule, index) => (
                        <motion.div
                            key={rule.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Left Side - Icon and Title */}
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${getSeverityColor(rule.severity)}`}>
                                            {rule.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{rule.title}</h3>
                                            <span className={`text-xs uppercase font-bold ${getSeverityColor(rule.severity).split(' ')[0]}`}>
                                                {rule.severity} risk
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400">{rule.description}</p>
                                </div>

                                {/* Right Side - Examples */}
                                <div className="lg:w-2/3 lg:border-l lg:border-white/10 lg:pl-6">
                                    <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-3">What to Watch For</h4>
                                    <ul className="space-y-2 mb-4">
                                        {rule.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-2 text-zinc-300">
                                                <Eye className="h-4 w-4 text-primary shrink-0 mt-1" />
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs text-zinc-500">Common in:</span>
                                        {rule.firms.map((firm) => (
                                            <span key={firm} className="px-2 py-1 rounded-md bg-white/5 text-xs text-zinc-400">
                                                {firm}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Protection Tips */}
            <div className="container mt-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">How to Protect Yourself</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            number: "01",
                            title: "Read the Full Terms",
                            description: "Before buying any challenge, read the complete Terms & Conditions. All rules are there, even if not on the sales page."
                        },
                        {
                            number: "02",
                            title: "Join the Community",
                            description: "Every major prop firm has a Discord or Telegram. Join them and ask about common failure reasons before you buy."
                        },
                        {
                            number: "03",
                            title: "Ask Support Directly",
                            description: "If your strategy involves anything unusual (news trading, holding, EA), email support and get written confirmation it's allowed."
                        }
                    ].map((tip) => (
                        <div key={tip.number} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <span className="text-5xl font-bold text-primary/30">{tip.number}</span>
                            <h3 className="text-lg font-bold text-white mt-4 mb-2">{tip.title}</h3>
                            <p className="text-zinc-400 text-sm">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mt-16">
                <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Compare Prop Firm Rules
                    </h2>
                    <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                        Use our comparison tool to see which firms have the rules that match your trading style.
                    </p>
                    <Link href="/compare">
                        <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
                            Compare Firms
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
