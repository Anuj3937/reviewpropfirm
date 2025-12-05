"use client"

import { ComparisonTable } from "@/components/comparison-table"
import { motion } from "framer-motion"

export function ComparePageClient() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
                    >
                        Compare <span className="text-primary">Prop Firms</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-zinc-400 max-w-2xl"
                    >
                        Side-by-side comparison of the industry&apos;s top players.
                        Analyze profit splits, evaluation rules, and pricing to find your perfect match.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <ComparisonTable />
                </motion.div>
            </div>
        </div>
    )
}
