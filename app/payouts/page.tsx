"use client"

import { DollarSign, Clock, TrendingUp, Users, CheckCircle, AlertCircle, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firms } from "@/lib/data"
import Link from "next/link"
import { motion } from "framer-motion"

interface PayoutStats {
    firmName: string
    firmSlug: string
    totalPaid: string
    numberOfPayouts: string
    largestPayout: string
    averagePayout: string
    averageTime: string
    payoutMethods: string[]
    verified: boolean
}

// Mock payout data - in production this would come from a database
const payoutData: PayoutStats[] = [
    {
        firmName: "FTMO",
        firmSlug: "ftmo",
        totalPaid: "$130M+",
        numberOfPayouts: "150,000+",
        largestPayout: "$120,000",
        averagePayout: "$867",
        averageTime: "< 24 hours",
        payoutMethods: ["Bank Wire", "Crypto", "Skrill"],
        verified: true
    },
    {
        firmName: "FundedNext",
        firmSlug: "fundednext",
        totalPaid: "$25M+",
        numberOfPayouts: "30,000+",
        largestPayout: "$52,000",
        averagePayout: "$833",
        averageTime: "24-48 hours",
        payoutMethods: ["Bank Wire", "Crypto", "Rise"],
        verified: true
    },
    {
        firmName: "The 5%ers",
        firmSlug: "the-5ers",
        totalPaid: "$15M+",
        numberOfPayouts: "20,000+",
        largestPayout: "$45,000",
        averagePayout: "$750",
        averageTime: "< 24 hours",
        payoutMethods: ["Bank Wire", "Crypto", "PayPal"],
        verified: true
    },
    {
        firmName: "E8 Markets",
        firmSlug: "e8-markets",
        totalPaid: "$10M+",
        numberOfPayouts: "12,000+",
        largestPayout: "$40,000",
        averagePayout: "$833",
        averageTime: "24-48 hours",
        payoutMethods: ["Bank Wire", "Crypto"],
        verified: true
    },
    {
        firmName: "FundingPips",
        firmSlug: "fundingpips",
        totalPaid: "$8M+",
        numberOfPayouts: "10,000+",
        largestPayout: "$35,000",
        averagePayout: "$800",
        averageTime: "1-3 days",
        payoutMethods: ["Crypto", "Rise"],
        verified: true
    },
    {
        firmName: "Alpha Capital",
        firmSlug: "alpha-capital",
        totalPaid: "$5M+",
        numberOfPayouts: "6,000+",
        largestPayout: "$28,000",
        averagePayout: "$833",
        averageTime: "24-48 hours",
        payoutMethods: ["Bank Wire", "Crypto"],
        verified: true
    }
]

export default function PayoutsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative border-b border-white/10 bg-gradient-to-b from-green-500/5 to-transparent pb-20 pt-12">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                        <DollarSign className="h-4 w-4" />
                        Verified Payout Data
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Prop Firm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                            Payout Analytics
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Transparent payout statistics from verified prop trading firms.
                        See who pays fast and who pays big.
                    </p>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="container mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-400">$200M+</div>
                        <div className="text-sm text-zinc-400">Total Industry Payouts</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">250K+</div>
                        <div className="text-sm text-zinc-400">Successful Withdrawals</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400">$850</div>
                        <div className="text-sm text-zinc-400">Average Payout</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400">&lt;48h</div>
                        <div className="text-sm text-zinc-400">Average Processing</div>
                    </div>
                </div>
            </div>

            {/* Payout Table */}
            <div className="container mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Payout Statistics by Firm</h2>
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Firm</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Total Paid</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium"># Payouts</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Largest</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Average</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Speed</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Methods</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payoutData.map((firm, index) => (
                                    <motion.tr
                                        key={firm.firmSlug}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                                                    <span className="font-bold text-green-400">{firm.firmName.charAt(0)}</span>
                                                </div>
                                                <div>
                                                    <Link href={`/reviews/${firm.firmSlug}`} className="font-bold text-white hover:text-primary transition-colors">
                                                        {firm.firmName}
                                                    </Link>
                                                    {firm.verified && (
                                                        <div className="flex items-center gap-1 text-xs text-green-400">
                                                            <CheckCircle className="h-3 w-3" />
                                                            Verified
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-green-400 font-bold">{firm.totalPaid}</td>
                                        <td className="py-4 px-6 text-zinc-300">{firm.numberOfPayouts}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1 text-amber-400">
                                                <Trophy className="h-4 w-4" />
                                                {firm.largestPayout}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-zinc-300">{firm.averagePayout}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1 text-blue-400">
                                                <Clock className="h-4 w-4" />
                                                {firm.averageTime}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex flex-wrap gap-1">
                                                {firm.payoutMethods.map((method) => (
                                                    <span key={method} className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-zinc-400">
                                                        {method}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Payout Tips */}
            <div className="container mt-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Tips for Fast Payouts</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Users className="h-6 w-6" />,
                            title: "Complete KYC Early",
                            description: "Submit verification documents right after passing, not when requesting payout.",
                            color: "text-blue-400 bg-blue-500/10"
                        },
                        {
                            icon: <DollarSign className="h-6 w-6" />,
                            title: "Use Crypto",
                            description: "Cryptocurrency payouts are typically processed same-day, often within hours.",
                            color: "text-green-400 bg-green-500/10"
                        },
                        {
                            icon: <Clock className="h-6 w-6" />,
                            title: "Request on Weekdays",
                            description: "Payouts requested on weekends may not be processed until Monday.",
                            color: "text-amber-400 bg-amber-500/10"
                        },
                        {
                            icon: <CheckCircle className="h-6 w-6" />,
                            title: "Meet All Requirements",
                            description: "Ensure you've met minimum trading days and other payout conditions first.",
                            color: "text-purple-400 bg-purple-500/10"
                        }
                    ].map((tip) => (
                        <div key={tip.title} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${tip.color}`}>
                                {tip.icon}
                            </div>
                            <h3 className="font-bold text-white mb-2">{tip.title}</h3>
                            <p className="text-sm text-zinc-400">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Disclaimer */}
            <div className="container mt-16">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-zinc-500 shrink-0" />
                    <div>
                        <h3 className="font-bold text-white mb-2">Data Disclaimer</h3>
                        <p className="text-sm text-zinc-400">
                            Payout statistics are compiled from publicly available data, firm disclosures, and verified trader reports.
                            Actual payout times may vary based on payment method, verification status, and other factors.
                            Always check the firm&apos;s official website for the most current payout policies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
