"use client"

import { Trophy, Star, TrendingUp, Users, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firms } from "@/lib/data"
import Link from "next/link"
import { motion } from "framer-motion"

// Sort firms by rating and review count for best sellers
const sortedFirms = [...firms].sort((a, b) => {
    const scoreA = a.rating * 0.7 + (a.reviewCount / 1000) * 0.3
    const scoreB = b.rating * 0.7 + (b.reviewCount / 1000) * 0.3
    return scoreB - scoreA
})

export default function BestSellersPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative border-b border-white/10 bg-gradient-to-b from-amber-500/5 to-transparent pb-20 pt-12">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                        <Trophy className="h-4 w-4" />
                        Updated December 2024
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Prop Firm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                            Rankings
                        </span>{" "}
                        & Best Sellers
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        The most popular prop trading firms based on trader ratings, review volume,
                        and overall reputation.
                    </p>
                </div>
            </div>

            {/* Podium - Top 3 */}
            <div className="container mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Second Place */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="order-2 md:order-1 md:mt-8"
                    >
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-zinc-500/10 to-transparent border border-zinc-500/20 hover:border-zinc-400/40 transition-all">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-to-r from-zinc-400 to-zinc-500 flex items-center justify-center text-white font-bold shadow-lg">
                                2
                            </div>
                            <div className="text-center pt-4">
                                <div className="h-16 w-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-bold text-zinc-300">{sortedFirms[1]?.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">{sortedFirms[1]?.name}</h3>
                                <div className="flex items-center justify-center gap-1 mt-2">
                                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                                    <span className="text-white font-bold">{sortedFirms[1]?.rating}</span>
                                    <span className="text-zinc-500">({sortedFirms[1]?.reviewCount} reviews)</span>
                                </div>
                                <p className="text-sm text-zinc-400 mt-2">{sortedFirms[1]?.profitSplit} profit split</p>
                                <Link href={`/reviews/${sortedFirms[1]?.slug}`}>
                                    <Button variant="outline" className="w-full mt-4 border-zinc-500/20">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* First Place */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                        className="order-1 md:order-2"
                    >
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition-all shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-lg">
                                <Trophy className="h-6 w-6" />
                            </div>
                            <div className="text-center pt-4">
                                <div className="h-20 w-20 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl font-bold text-amber-400">{sortedFirms[0]?.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">{sortedFirms[0]?.name}</h3>
                                <div className="flex items-center justify-center gap-1 mt-2">
                                    <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                                    <span className="text-white font-bold text-lg">{sortedFirms[0]?.rating}</span>
                                    <span className="text-zinc-400">({sortedFirms[0]?.reviewCount} reviews)</span>
                                </div>
                                <p className="text-zinc-300 mt-2">{sortedFirms[0]?.profitSplit} profit split</p>
                                <p className="text-sm text-zinc-400">Max funding: {sortedFirms[0]?.maxFunding}</p>
                                <Link href={`/reviews/${sortedFirms[0]?.slug}`}>
                                    <Button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-400 hover:to-orange-400">
                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Third Place */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="order-3 md:mt-12"
                    >
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-800/10 to-transparent border border-orange-800/20 hover:border-orange-700/40 transition-all">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-to-r from-orange-700 to-orange-800 flex items-center justify-center text-white font-bold shadow-lg">
                                3
                            </div>
                            <div className="text-center pt-4">
                                <div className="h-16 w-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-bold text-orange-300">{sortedFirms[2]?.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">{sortedFirms[2]?.name}</h3>
                                <div className="flex items-center justify-center gap-1 mt-2">
                                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                                    <span className="text-white font-bold">{sortedFirms[2]?.rating}</span>
                                    <span className="text-zinc-500">({sortedFirms[2]?.reviewCount} reviews)</span>
                                </div>
                                <p className="text-sm text-zinc-400 mt-2">{sortedFirms[2]?.profitSplit} profit split</p>
                                <Link href={`/reviews/${sortedFirms[2]?.slug}`}>
                                    <Button variant="outline" className="w-full mt-4 border-orange-800/20">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Full Rankings Table */}
            <div className="container mt-16">
                <h2 className="text-2xl font-bold text-white mb-8">Full Rankings</h2>
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Rank</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Firm</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Rating</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Reviews</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Profit Split</th>
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Max Funding</th>
                                    <th className="text-right py-4 px-6 text-zinc-400 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedFirms.map((firm, index) => (
                                    <motion.tr
                                        key={firm.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-4 px-6">
                                            <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${index === 0 ? 'bg-amber-500/20 text-amber-400' :
                                                    index === 1 ? 'bg-zinc-500/20 text-zinc-300' :
                                                        index === 2 ? 'bg-orange-800/20 text-orange-400' :
                                                            'bg-white/5 text-zinc-500'
                                                }`}>
                                                {index + 1}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                                                    <span className="font-bold text-primary">{firm.name.charAt(0)}</span>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-white">{firm.name}</span>
                                                    <p className="text-xs text-zinc-500">{firm.evaluationType}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                                                <span className="text-white font-medium">{firm.rating}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-zinc-400">{firm.reviewCount.toLocaleString()}</td>
                                        <td className="py-4 px-6 text-green-400 font-medium">{firm.profitSplit}</td>
                                        <td className="py-4 px-6 text-zinc-300">{firm.maxFunding}</td>
                                        <td className="py-4 px-6 text-right">
                                            <Link href={`/reviews/${firm.slug}`}>
                                                <Button size="sm" variant="outline" className="border-white/10">
                                                    View <ExternalLink className="ml-2 h-3 w-3" />
                                                </Button>
                                            </Link>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* How We Rank Section */}
            <div className="container mt-16">
                <div className="p-8 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6">How We Calculate Rankings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Star className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">User Ratings (70%)</h3>
                                <p className="text-sm text-zinc-400">Average rating from verified trader reviews</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                <Users className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Review Volume (20%)</h3>
                                <p className="text-sm text-zinc-400">More reviews = more data = higher confidence</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                <TrendingUp className="h-5 w-5 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Payout History (10%)</h3>
                                <p className="text-sm text-zinc-400">Verified payout track record</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
