"use client"

import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export function Footer() {
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
                            {/* Social icons */}
                            <a href="https://twitter.com/propfirmreviews" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 transition-all">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@propfirmreviews" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 transition-all">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="/reviews" className="hover:text-primary transition-colors">All Reviews</Link></li>
                            <li><Link href="/compare" className="hover:text-primary transition-colors">Compare Firms</Link></li>
                            <li><Link href="/offers" className="hover:text-primary transition-colors">Discount Codes</Link></li>
                            <li><Link href="/tools" className="hover:text-primary transition-colors">Trading Tools</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Trading Blog</Link></li>
                            <li><Link href="/get-listed" className="hover:text-primary transition-colors">Get Listed</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Newsletter</h4>
                        <p className="text-zinc-400 text-sm mb-4">
                            Get the latest prop firm discounts and news delivered to your inbox.
                        </p>
                        <NewsletterForm variant="footer" />
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

