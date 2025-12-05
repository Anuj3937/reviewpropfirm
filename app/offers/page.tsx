"use client"

import { useState, useEffect } from "react"
import { Copy, Check, Clock, Sparkles, Tag, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firms } from "@/lib/data"
import Link from "next/link"
import { motion } from "framer-motion"

interface Offer {
    firmName: string
    firmSlug: string
    logo: string
    code: string
    discount: string
    description: string
    expiresInDays?: number  // Changed from expiresAt Date to days
    isHot?: boolean
}

// Sample offers data - in production this would come from a database
const offers: Offer[] = [
    {
        firmName: "FundingPips",
        firmSlug: "fundingpips",
        logo: "/logos/fundingpips.png",
        code: "MATCH25",
        discount: "25% OFF",
        description: "Get 25% off any challenge account",
        expiresInDays: 5,
        isHot: true
    },
    {
        firmName: "FTMO",
        firmSlug: "ftmo",
        logo: "/logos/ftmo.png",
        code: "REVIEW10",
        discount: "10% OFF",
        description: "10% discount on your first challenge",
        expiresInDays: 7
    },
    {
        firmName: "FundedNext",
        firmSlug: "fundednext",
        logo: "/logos/fundednext.png",
        code: "PROPFIRM20",
        discount: "20% OFF",
        description: "20% off all evaluation models",
        expiresInDays: 3,
        isHot: true
    },
    {
        firmName: "The 5%ers",
        firmSlug: "the-5ers",
        logo: "/logos/5ers.png",
        code: "INSTANT5",
        discount: "5% OFF",
        description: "5% discount on instant funding programs",
        expiresInDays: 14
    },
    {
        firmName: "E8 Markets",
        firmSlug: "e8-markets",
        logo: "/logos/e8.png",
        code: "ELEV8SAVE",
        discount: "15% OFF",
        description: "Save 15% on ELEV8 program accounts",
        expiresInDays: 10
    },
    {
        firmName: "Alpha Capital",
        firmSlug: "alpha-capital",
        logo: "/logos/alpha.png",
        code: "ALPHA20",
        discount: "20% OFF",
        description: "20% off + free account extension",
        isHot: true
    },
    {
        firmName: "Blue Guardian",
        firmSlug: "blue-guardian",
        logo: "/logos/blueguardian.png",
        code: "GUARDIAN15",
        discount: "15% OFF",
        description: "15% discount on all challenges"
    },
    {
        firmName: "Maven Trading",
        firmSlug: "maven-trading",
        logo: "/logos/maven.png",
        code: "MAVEN10",
        discount: "10% OFF",
        description: "10% off + lowest reset fees"
    }
]

function CountdownTimer({ expiresInDays }: { expiresInDays: number }) {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Calculate expiry time only on client
        const expiryTime = Date.now() + expiresInDays * 24 * 60 * 60 * 1000

        const calculateTimeLeft = () => {
            const difference = expiryTime - Date.now()
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)
        return () => clearInterval(timer)
    }, [expiresInDays])

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted || !timeLeft) {
        return (
            <div className="flex items-center gap-1 text-xs text-amber-400">
                <Clock className="h-3 w-3" />
                <span>{expiresInDays}d remaining</span>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1 text-xs text-amber-400">
            <Clock className="h-3 w-3" />
            <span>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
        </div>
    )
}

function OfferCard({ offer, index }: { offer: Offer; index: number }) {
    const [copied, setCopied] = useState(false)

    const copyCode = () => {
        navigator.clipboard.writeText(offer.code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
        >
            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-300">
                {/* Hot Badge */}
                {offer.isHot && (
                    <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        HOT
                    </div>
                )}

                {/* Firm Info */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                        <div className="text-2xl font-bold text-primary">{offer.firmName.charAt(0)}</div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{offer.firmName}</h3>
                        <p className="text-sm text-zinc-400">{offer.description}</p>
                    </div>
                </div>

                {/* Discount Badge */}
                <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary font-bold text-xl">
                        <Tag className="h-5 w-5" />
                        {offer.discount}
                    </span>
                </div>

                {/* Countdown */}
                {offer.expiresInDays && (
                    <div className="mb-4">
                        <CountdownTimer expiresInDays={offer.expiresInDays} />
                    </div>
                )}

                {/* Code & Actions */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-dashed border-white/20 font-mono text-white text-center tracking-wider">
                            {offer.code}
                        </div>
                        <Button
                            onClick={copyCode}
                            variant="outline"
                            className={`px-4 ${copied ? 'bg-green-500/20 border-green-500 text-green-400' : 'border-white/20'}`}
                        >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                    </div>

                    <div className="flex gap-2">
                        <Link href={`/reviews/${offer.firmSlug}`} className="flex-1">
                            <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/10">
                                Read Review
                            </Button>
                        </Link>
                        <Button className="flex-1 bg-primary text-black hover:bg-primary/90">
                            Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function OffersPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative border-b border-white/10 bg-gradient-to-b from-primary/5 to-transparent pb-20 pt-12">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Tag className="h-4 w-4" />
                        Active Discount Codes
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Prop Firm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                            Offers & Deals
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Exclusive discount codes and promotions from the top prop trading firms.
                        Save money on your next challenge.
                    </p>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="container mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{offers.length}</div>
                        <div className="text-sm text-zinc-400">Active Offers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-400">25%</div>
                        <div className="text-sm text-zinc-400">Max Discount</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400">3</div>
                        <div className="text-sm text-zinc-400">Hot Deals</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400">Daily</div>
                        <div className="text-sm text-zinc-400">Updates</div>
                    </div>
                </div>
            </div>

            {/* Offers Grid */}
            <div className="container mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer, index) => (
                        <OfferCard key={offer.code} offer={offer} index={index} />
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mt-20">
                <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-green-500/10 border border-primary/20 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Want to List Your Offer?
                    </h2>
                    <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                        If you&apos;re a prop firm looking to reach thousands of traders, get in touch to feature your discount codes.
                    </p>
                    <Link href="/get-listed">
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                            Get Listed
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
