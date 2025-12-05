"use client"

import { useState } from "react"
import { Star, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore"

interface ReviewFormProps {
    firmSlug: string
    firmName: string
    onSuccess?: () => void
}

export function ReviewForm({ firmSlug, firmName, onSuccess }: ReviewFormProps) {
    const { user } = useAuth()
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tradingExperience, setTradingExperience] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!user) {
            setError("Please sign in to submit a review")
            return
        }

        if (rating === 0) {
            setError("Please select a rating")
            return
        }

        setLoading(true)
        setError("")

        try {
            // Store review in Firestore (strings only)
            await addDoc(collection(db, "reviews"), {
                firmSlug: firmSlug,
                firmName: firmName,
                userId: user.uid,
                userName: user.displayName || "Anonymous",
                userEmail: user.email || "",
                rating: rating.toString(),
                title: title,
                content: content,
                tradingExperience: tradingExperience,
                createdAt: new Date().toISOString(),
                status: "pending" // pending, approved, rejected
            })

            setSuccess(true)
            setRating(0)
            setTitle("")
            setContent("")
            setTradingExperience("")

            if (onSuccess) onSuccess()

            setTimeout(() => setSuccess(false), 5000)
        } catch (err) {
            console.error("Error submitting review:", err)
            setError("Failed to submit review. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (!user) {
        return (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <User className="h-12 w-12 mx-auto mb-4 text-zinc-500" />
                <h3 className="text-lg font-bold text-white mb-2">Sign in to Review</h3>
                <p className="text-zinc-400 text-sm">
                    Share your experience with {firmName} to help other traders.
                </p>
            </div>
        )
    }

    if (success) {
        return (
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-400 fill-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Thank You!</h3>
                <p className="text-zinc-400 text-sm">
                    Your review has been submitted and is pending approval.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Write a Review</h3>

            {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                </div>
            )}

            {/* Star Rating */}
            <div className="mb-6">
                <label className="block text-sm text-zinc-400 mb-2">Your Rating *</label>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 transition-transform hover:scale-110"
                        >
                            <Star
                                className={`h-8 w-8 transition-colors ${star <= (hoverRating || rating)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-zinc-600"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Review Title */}
            <div className="mb-4">
                <label className="block text-sm text-zinc-400 mb-2">Review Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Summarize your experience"
                    className="w-full h-10 px-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50"
                />
            </div>

            {/* Trading Experience */}
            <div className="mb-4">
                <label className="block text-sm text-zinc-400 mb-2">Trading Experience</label>
                <select
                    value={tradingExperience}
                    onChange={(e) => setTradingExperience(e.target.value)}
                    className="w-full h-10 px-4 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary/50"
                >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="experienced">Experienced (3-5 years)</option>
                    <option value="professional">Professional (5+ years)</option>
                </select>
            </div>

            {/* Review Content */}
            <div className="mb-6">
                <label className="block text-sm text-zinc-400 mb-2">Your Review *</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your experience with this prop firm..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 resize-none"
                />
            </div>

            <Button
                type="submit"
                disabled={loading || rating === 0}
                className="w-full bg-primary text-black hover:bg-primary/90 font-bold"
            >
                {loading ? (
                    "Submitting..."
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Review
                    </>
                )}
            </Button>
        </form>
    )
}
