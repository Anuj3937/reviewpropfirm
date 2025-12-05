"use client"

import { useState } from "react"
import { firms } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Tag, Save, CheckCircle2 } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const accountSizes = [
    { value: 10000, label: "$10,000" },
    { value: 25000, label: "$25,000" },
    { value: 50000, label: "$50,000" },
    { value: 100000, label: "$100,000" },
    { value: 200000, label: "$200,000" },
]

const discountCodes: Record<string, { code: string; discount: number }> = {
    ftmo: { code: "SAVE10", discount: 10 },
    fundednext: { code: "FN15OFF", discount: 15 },
    "the-5ers": { code: "FIVE5", discount: 5 },
    "alpha-capital": { code: "ALPHA20", discount: 20 },
    "e8-markets": { code: "E8SAVE", discount: 10 },
    "fundingpips": { code: "PIPS10", discount: 10 },
    "blue-guardian": { code: "GUARD15", discount: 15 },
    "toptier-trader": { code: "TOPTIER", discount: 12 },
    "maven-trading": { code: "MAVEN10", discount: 10 },
    myfundedfx: { code: "FUNDED5", discount: 5 },
    "smart-prop-trader": { code: "SMART15", discount: 15 },
    "instant-funding": { code: "INSTANT5", discount: 5 },
}

// Price multipliers for different account sizes (relative to base price which is usually for lowest tier)
const sizeMultipliers: Record<number, number> = {
    10000: 1,
    25000: 1.6,
    50000: 2.5,
    100000: 3.5,
    200000: 5,
}

export function ChallengeCostCalculator() {
    const [selectedFirm, setSelectedFirm] = useState(firms[0].slug)
    const [selectedSize, setSelectedSize] = useState(100000)
    const [saved, setSaved] = useState(false)
    const { user } = useAuth()

    const firm = firms.find(f => f.slug === selectedFirm)
    const basePrice = firm?.priceStarting || 0
    const multiplier = sizeMultipliers[selectedSize] || 1
    const rawPrice = Math.round(basePrice * multiplier)

    const discountInfo = discountCodes[selectedFirm]
    const discountedPrice = discountInfo
        ? Math.round(rawPrice * (1 - discountInfo.discount / 100))
        : rawPrice

    const saveCalculation = async () => {
        if (!user) return

        try {
            await addDoc(collection(db, "user_calculations"), {
                userId: user.uid,
                type: "challenge_cost",
                firm: selectedFirm,
                firmName: firm?.name,
                accountSize: selectedSize,
                rawPrice,
                discountCode: discountInfo?.code || null,
                discountedPrice,
                savings: discountInfo ? rawPrice - discountedPrice : 0,
                timestamp: serverTimestamp(),
            })
            setSaved(true)
            setTimeout(() => setSaved(false), 2000)
        } catch (error) {
            console.error("Error saving calculation:", error)
        }
    }

    return (
        <div className="space-y-6">
            {/* Firm Selection */}
            <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Select Prop Firm</label>
                <select
                    value={selectedFirm}
                    onChange={(e) => setSelectedFirm(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 appearance-none cursor-pointer"
                >
                    {firms.map((f) => (
                        <option key={f.slug} value={f.slug} className="bg-zinc-900">
                            {f.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Account Size */}
            <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Account Size</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                    {accountSizes.map((size) => (
                        <button
                            key={size.value}
                            onClick={() => setSelectedSize(size.value)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedSize === size.value
                                    ? "bg-primary text-black"
                                    : "bg-white/5 text-zinc-300 hover:bg-white/10"
                                }`}
                        >
                            {size.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-zinc-400">Regular Price</span>
                    <span className="text-xl font-bold text-white line-through opacity-50">${rawPrice}</span>
                </div>

                {discountInfo && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20 mb-4">
                        <Tag className="h-5 w-5 text-green-400" />
                        <div className="flex-1">
                            <p className="text-sm text-green-400 font-medium">Use code: {discountInfo.code}</p>
                            <p className="text-xs text-zinc-500">Save {discountInfo.discount}% on your purchase</p>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Your Price</span>
                    <span className="text-3xl font-bold text-green-400">${discountedPrice}</span>
                </div>

                {discountInfo && (
                    <p className="text-sm text-green-500 mt-2 text-right">
                        You save: ${rawPrice - discountedPrice}
                    </p>
                )}
            </div>

            {/* Save Button */}
            {user && (
                <Button
                    onClick={saveCalculation}
                    disabled={saved}
                    className="w-full h-12 bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                >
                    {saved ? (
                        <>
                            <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                            Saved!
                        </>
                    ) : (
                        <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Calculation
                        </>
                    )}
                </Button>
            )}
        </div>
    )
}
