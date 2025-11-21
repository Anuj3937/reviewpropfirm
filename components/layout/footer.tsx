"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

export function Footer() {
    const [email, setEmail] = useState("")
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            // Here you would typically send the email to your API
            console.log("Subscribed:", email)
            setTimeout(() => {
                setEmail("")
                setSubscribed(false)
            }, 3000)
        }
    }

    return (
        <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                                P
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                PropFirm<span className="text-primary">Reviews</span>
                            </span>
                        </Link>
                        <p className="text-zinc-400 max-w-sm mb-8">
                            The most trusted resource for proprietary trading firm reviews.
                            We help traders find the right funding partner to scale their trading career.
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons would go here */}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="/reviews" className="hover:text-primary transition-colors">All Reviews</Link></li>
                            <li><Link href="/compare" className="hover:text-primary transition-colors">Compare Firms</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Trading Blog</Link></li>
                            <li><Link href="/get-listed" className="hover:text-primary transition-colors">Get Listed</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Newsletter</h4>
                        <p className="text-zinc-400 text-sm mb-4">
                            Get the latest prop firm discounts and news delivered to your inbox.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-all"
                                required
                            />
                            <Button
                                type="submit"
                                className="w-full bg-white text-black hover:bg-zinc-200 font-bold"
                                disabled={subscribed}
                            >
                                {subscribed ? (
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600" /> Subscribed
                                    </span>
                                ) : (
                                    "Subscribe"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Prop Firm Reviews. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
