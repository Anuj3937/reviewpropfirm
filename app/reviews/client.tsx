"use client"

import { firms } from "@/lib/data"
import { FirmCard } from "@/components/firm-card"
import { motion } from "framer-motion"

export function ReviewsPageClient() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary mb-6"
                    >
                        {firms.length}+ Firms Reviewed
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
                    >
                        Prop Firm <span className="text-primary">Reviews</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-zinc-400 max-w-2xl"
                    >
                        In-depth analysis of the world&apos;s leading proprietary trading firms.
                        We test their platforms, spreads, and payout speeds so you don&apos;t have to.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {firms.map((firm, index) => (
                        <FirmCard key={firm.id} firm={firm} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
