"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-black/50 backdrop-blur-md border-white/10 py-4"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="container flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
                            P
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            PropFirm<span className="text-primary">Reviews</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/reviews" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Reviews
                        </Link>
                        <Link href="/compare" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Compare
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Blog
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search firms..."
                                className="h-10 w-64 rounded-full bg-white/5 border border-white/10 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                        </div>
                        <Button asChild className="bg-white text-black hover:bg-zinc-200 font-bold shadow-lg shadow-white/10 hover:shadow-white/20">
                            <Link href="/get-listed">Get Listed</Link>
                        </Button>
                    </div>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium text-zinc-300">
                            <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
                            <Link href="/compare" onClick={() => setIsMobileMenuOpen(false)}>Compare</Link>
                            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                            <hr className="border-white/10" />
                            <Button asChild className="w-full bg-primary text-black font-bold">
                                <Link href="/get-listed" onClick={() => setIsMobileMenuOpen(false)}>Get Listed</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
