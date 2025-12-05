"use client"

import { useState, useMemo } from "react"
import { DollarSign, TrendingUp } from "lucide-react"

export function PayoutCalculator() {
    const [accountSize, setAccountSize] = useState(100000)
    const [monthlyGain, setMonthlyGain] = useState(4)
    const [profitSplit, setProfitSplit] = useState(80)

    const calculations = useMemo(() => {
        const monthlyProfit = accountSize * (monthlyGain / 100)
        const yourShare = monthlyProfit * (profitSplit / 100)
        const firmShare = monthlyProfit - yourShare
        const yearlyProjection = yourShare * 12

        return {
            monthlyProfit,
            yourShare,
            firmShare,
            yearlyProjection,
        }
    }, [accountSize, monthlyGain, profitSplit])

    const sharePercentage = profitSplit

    return (
        <div className="space-y-6">
            {/* Account Size Slider */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-zinc-400">Account Size</label>
                    <span className="text-sm font-bold text-white">${accountSize.toLocaleString()}</span>
                </div>
                <input
                    type="range"
                    min={10000}
                    max={400000}
                    step={10000}
                    value={accountSize}
                    onChange={(e) => setAccountSize(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>

            {/* Monthly Gain Input */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-zinc-400">Monthly Gain (%)</label>
                    <span className="text-sm font-bold text-white">{monthlyGain}%</span>
                </div>
                <input
                    type="range"
                    min={1}
                    max={15}
                    step={0.5}
                    value={monthlyGain}
                    onChange={(e) => setMonthlyGain(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>

            {/* Profit Split */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-zinc-400">Profit Split</label>
                    <span className="text-sm font-bold text-white">{profitSplit}%</span>
                </div>
                <input
                    type="range"
                    min={50}
                    max={95}
                    step={5}
                    value={profitSplit}
                    onChange={(e) => setProfitSplit(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-500 [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>

            {/* Visual Progress Bar */}
            <div className="space-y-2">
                <div className="flex justify-between text-xs text-zinc-500">
                    <span>Profit Distribution</span>
                    <span>Total: ${calculations.monthlyProfit.toLocaleString()}</span>
                </div>
                <div className="h-8 rounded-full overflow-hidden flex">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center transition-all duration-300"
                        style={{ width: `${sharePercentage}%` }}
                    >
                        <span className="text-xs font-bold text-white">Your Share</span>
                    </div>
                    <div
                        className="bg-zinc-700 flex items-center justify-center transition-all duration-300"
                        style={{ width: `${100 - sharePercentage}%` }}
                    >
                        <span className="text-xs font-medium text-zinc-400">Firm</span>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                        <p className="text-sm text-zinc-400">You take home</p>
                        <p className="text-3xl font-bold text-white">${calculations.yourShare.toLocaleString()}<span className="text-lg text-zinc-500">/mo</span></p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <div>
                            <p className="text-xs text-zinc-500">Yearly Projection</p>
                            <p className="text-sm font-bold text-white">${calculations.yearlyProjection.toLocaleString()}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500">Firm&apos;s Share</p>
                        <p className="text-sm font-medium text-zinc-400">${calculations.firmShare.toLocaleString()}/mo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
