"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { db } from "@/lib/firebase"
import { doc, setDoc, deleteDoc, getDoc } from "firebase/firestore"

interface FavoriteButtonProps {
    firmSlug: string
    firmName: string
    size?: "sm" | "md" | "lg"
}

export function FavoriteButton({ firmSlug, firmName, size = "md" }: FavoriteButtonProps) {
    const { user } = useAuth()
    const [isFavorite, setIsFavorite] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user) {
            setIsFavorite(false)
            return
        }

        // Check if this firm is in user's favorites
        const checkFavorite = async () => {
            try {
                const favoriteRef = doc(db, "favorites", `${user.uid}_${firmSlug}`)
                const favoriteSnap = await getDoc(favoriteRef)
                setIsFavorite(favoriteSnap.exists())
            } catch (error) {
                console.error("Error checking favorite:", error)
            }
        }

        checkFavorite()
    }, [user, firmSlug])

    const toggleFavorite = async () => {
        if (!user) return

        setLoading(true)
        try {
            const favoriteRef = doc(db, "favorites", `${user.uid}_${firmSlug}`)

            if (isFavorite) {
                await deleteDoc(favoriteRef)
                setIsFavorite(false)
            } else {
                // Store as strings only
                await setDoc(favoriteRef, {
                    odl: `${user.uid}_${firmSlug}`,
                    firmSlug: firmSlug,
                    firmName: firmName,
                    addedAt: new Date().toISOString()
                })
                setIsFavorite(true)
            }
        } catch (error) {
            console.error("Error toggling favorite:", error)
        } finally {
            setLoading(false)
        }
    }

    const sizeClasses = {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12"
    }

    const iconSizes = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
    }

    if (!user) {
        return null // Don't show button if not logged in
    }

    return (
        <button
            onClick={toggleFavorite}
            disabled={loading}
            className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all ${isFavorite
                    ? "bg-red-500/20 text-red-500 hover:bg-red-500/30"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            <Heart
                className={`${iconSizes[size]} transition-transform ${loading ? "animate-pulse" : ""} ${isFavorite ? "fill-current" : ""
                    }`}
            />
        </button>
    )
}
