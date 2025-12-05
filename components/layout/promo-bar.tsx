"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Gift, ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const promos = [
    {
        text: "🔥 FundingPips: 25% OFF with code MATCH25",
        link: "/offers",
        highlight: true
    },
    {
        text: "💰 FundedNext: Get 20% discount + profit share during challenge",
        link: "/offers",
        highlight: false
    },
    {
        text: "⚡ New: Compare 25+ prop firms side-by-side",
        link: "/compare",
        highlight: false
    },
    {
        text: "📊 Free Tools: Calculate your potential payouts",
        link: "/tools",
        highlight: false
    }
]

export function PromoBar() {
    const [isVisible, setIsVisible] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Check if user has dismissed the promo bar
        const dismissed = sessionStorage.getItem('promoBarDismissed')
        if (dismissed) {
            setIsVisible(false)
        }
    }, [])

    useEffect(() => {
        if (!isVisible) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % promos.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isVisible])

    const handleDismiss = () => {
        setIsVisible(false)
        sessionStorage.setItem('promoBarDismissed', 'true')
    }

    if (!mounted || !isVisible) return null

    const currentPromo = promos[currentIndex]

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-gradient-to-r from-primary/90 via-primary to-green-500/90 text-black relative overflow-hidden"
            >
                {/* Animated background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="container relative">
                    <div className="flex items-center justify-center py-2.5 px-4">
                        <Link
                            href={currentPromo.link}
                            className="flex items-center gap-2 text-sm font-medium hover:underline"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center gap-2"
                                >
                                    {currentPromo.highlight && (
                                        <Sparkles className="h-4 w-4" />
                                    )}
                                    {currentPromo.text}
                                    <ArrowRight className="h-4 w-4" />
                                </motion.span>
                            </AnimatePresence>
                        </Link>

                        {/* Progress dots */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0.5 flex gap-1">
                            {promos.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex
                                            ? 'bg-black w-3'
                                            : 'bg-black/30 hover:bg-black/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleDismiss}
                            className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
                            aria-label="Dismiss"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
