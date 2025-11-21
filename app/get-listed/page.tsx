"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function GetListedPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
                    >
                        Get Your Firm <span className="text-primary">Listed</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400 max-w-2xl mx-auto"
                    >
                        Join the most trusted prop firm directory. Reach thousands of active traders looking for their next funding challenge.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Access to 10,000+ monthly active traders",
                                    "High-intent traffic ready to purchase",
                                    "Premium brand placement options",
                                    "Verified review badges",
                                    "Dedicated support team"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="firmName" className="text-sm font-medium text-zinc-300">Firm Name</label>
                                <input
                                    id="firmName"
                                    type="text"
                                    className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="Enter your firm name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Business Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="partner@yourfirm.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="website" className="text-sm font-medium text-zinc-300">Website URL</label>
                                <input
                                    id="website"
                                    type="url"
                                    className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="https://yourfirm.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full h-32 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell us about your firm..."
                                />
                            </div>
                            <Button className="w-full h-12 text-lg font-bold bg-primary text-black hover:bg-primary/90">
                                Submit Application
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
