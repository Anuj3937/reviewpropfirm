"use client"

import { useState } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Mail } from "lucide-react"

interface NewsletterFormProps {
    variant?: "footer" | "inline" | "modal"
}

export function NewsletterForm({ variant = "footer" }: NewsletterFormProps) {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) return

        setLoading(true)
        setError("")

        try {
            // Check if email already exists
            const q = query(collection(db, "newsletter"), where("email", "==", email))
            const querySnapshot = await getDocs(q)

            if (!querySnapshot.empty) {
                setError("This email is already subscribed!")
                setLoading(false)
                return
            }

            // Add to Firestore (strings only)
            await addDoc(collection(db, "newsletter"), {
                email: email,
                subscribedAt: new Date().toISOString(),
                source: variant,
                status: "active"
            })

            setSuccess(true)
            setEmail("")

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSuccess(false)
            }, 5000)
        } catch (err) {
            console.error("Newsletter subscription error:", err)
            setError("Failed to subscribe. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (variant === "inline") {
        return (
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-green-500/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Stay Updated</h3>
                        <p className="text-zinc-400 text-sm">Get exclusive deals & trading tips</p>
                    </div>
                </div>

                {success ? (
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Welcome aboard! Check your inbox.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50"
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            className="h-12 px-6 bg-primary text-black hover:bg-primary/90 font-bold"
                        >
                            {loading ? "..." : "Subscribe"}
                        </Button>
                    </form>
                )}
                {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            </div>
        )
    }

    // Footer variant (default)
    return (
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
                disabled={loading || success}
            >
                {success ? (
                    <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" /> Subscribed!
                    </span>
                ) : loading ? (
                    "Subscribing..."
                ) : (
                    "Subscribe"
                )}
            </Button>
            {error && <p className="text-red-400 text-xs">{error}</p>}
        </form>
    )
}
