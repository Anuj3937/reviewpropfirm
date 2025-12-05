"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, ArrowRight, FileText, Building2 } from "lucide-react"
import Link from "next/link"
import { firms } from "@/lib/data"
import { blogPosts } from "@/lib/blog-data"
import { motion, AnimatePresence } from "framer-motion"

interface SearchResult {
    type: "firm" | "blog"
    title: string
    description: string
    slug: string
    rating?: number
}

export function SearchModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    // Keyboard shortcut to open search (Cmd/Ctrl + K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsOpen(true)
            }
            if (e.key === "Escape") {
                setIsOpen(false)
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    // Search logic
    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            return
        }

        const searchTerm = query.toLowerCase()

        // Search firms
        const firmResults: SearchResult[] = firms
            .filter(
                (firm) =>
                    firm.name.toLowerCase().includes(searchTerm) ||
                    firm.description.toLowerCase().includes(searchTerm) ||
                    firm.features.some((f) => f.toLowerCase().includes(searchTerm))
            )
            .slice(0, 5)
            .map((firm) => ({
                type: "firm" as const,
                title: firm.name,
                description: firm.description.slice(0, 100) + "...",
                slug: `/reviews/${firm.slug}`,
                rating: firm.rating
            }))

        // Search blog posts
        const blogResults: SearchResult[] = blogPosts
            .filter(
                (post) =>
                    post.title.toLowerCase().includes(searchTerm) ||
                    post.excerpt.toLowerCase().includes(searchTerm) ||
                    post.tags.some((t) => t.toLowerCase().includes(searchTerm))
            )
            .slice(0, 5)
            .map((post) => ({
                type: "blog" as const,
                title: post.title,
                description: post.excerpt.slice(0, 100) + "...",
                slug: `/blog/${post.slug}`
            }))

        setResults([...firmResults, ...blogResults])
    }, [query])

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 h-10 px-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
                <Search className="h-4 w-4" />
                <span className="hidden md:inline text-sm">Search...</span>
                <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-zinc-400">
                    ⌘K
                </kbd>
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Search Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="fixed left-1/2 top-24 -translate-x-1/2 z-50 w-full max-w-2xl mx-4"
                        >
                            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Search Input */}
                                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                                    <Search className="h-5 w-5 text-zinc-400" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder="Search firms, blog posts..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="flex-1 bg-transparent text-white text-lg placeholder:text-zinc-500 focus:outline-none"
                                    />
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1 text-zinc-400 hover:text-white"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Results */}
                                <div className="max-h-[60vh] overflow-y-auto p-2">
                                    {results.length === 0 && query && (
                                        <div className="p-8 text-center text-zinc-500">
                                            No results found for &ldquo;{query}&rdquo;
                                        </div>
                                    )}

                                    {results.length === 0 && !query && (
                                        <div className="p-8 text-center text-zinc-500">
                                            <p className="mb-2">Start typing to search...</p>
                                            <p className="text-sm">Search for prop firms or blog posts</p>
                                        </div>
                                    )}

                                    {results.length > 0 && (
                                        <div className="space-y-1">
                                            {results.map((result, index) => (
                                                <Link
                                                    key={`${result.type}-${index}`}
                                                    href={result.slug}
                                                    onClick={() => {
                                                        setIsOpen(false)
                                                        setQuery("")
                                                    }}
                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                                >
                                                    <div className={`p-2 rounded-lg ${result.type === "firm"
                                                            ? "bg-primary/10 text-primary"
                                                            : "bg-blue-500/10 text-blue-400"
                                                        }`}>
                                                        {result.type === "firm" ? (
                                                            <Building2 className="h-4 w-4" />
                                                        ) : (
                                                            <FileText className="h-4 w-4" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <p className="font-medium text-white group-hover:text-primary transition-colors truncate">
                                                                {result.title}
                                                            </p>
                                                            {result.rating && (
                                                                <span className="text-xs text-yellow-400 flex items-center">
                                                                    ★ {result.rating}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-zinc-500 truncate">
                                                            {result.description}
                                                        </p>
                                                    </div>
                                                    <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-primary transition-colors mt-1" />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="p-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑</kbd>
                                            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↓</kbd>
                                            to navigate
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd>
                                            to select
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1">
                                        <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">esc</kbd>
                                        to close
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
