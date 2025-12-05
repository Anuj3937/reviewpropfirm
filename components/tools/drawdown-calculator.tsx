"use client"

import { useState, useMemo } from "react"
import { AlertTriangle, Shield, Info } from "lucide-react"

export function DrawdownCalculator() {
    const [balance, setBalance] = useState(100000)
    const [drawdownType, setDrawdownType] = useState<"static" | "relative">("static")
    const [drawdownPercent, setDrawdownPercent] = useState(10)
    const [currentProfit, setCurrentProfit] = useState(0)

    const calculations = useMemo(() => {
        if (drawdownType === "static") {
            const stopOutLevel = balance * (1 - drawdownPercent / 100)
            const riskRemaining = balance + currentProfit - stopOutLevel
            const riskPercentage = (riskRemaining / (balance + currentProfit)) * 100

            return {
                stopOutLevel,
                riskRemaining,
                riskPercentage,
                highWaterMark: null,
            }
        } else {
            // Relative/Trailing drawdown
            const highWaterMark = balance + currentProfit
            const stopOutLevel = highWaterMark * (1 - drawdownPercent / 100)
            const riskRemaining = highWaterMark - stopOutLevel
            const riskPercentage = (riskRemaining / highWaterMark) * 100

            return {
                stopOutLevel,
                riskRemaining,
                riskPercentage,
                highWaterMark,
            }
        }
    }, [balance, drawdownType, drawdownPercent, currentProfit])

    // Calculate visual positions for the graph
    const graphHeight = 120
    const currentEquity = balance + currentProfit
    const maxEquity = Math.max(currentEquity, balance * 1.1)
    const minEquity = Math.min(calculations.stopOutLevel * 0.95, balance * 0.85)
    const range = maxEquity - minEquity

    const balanceY = graphHeight - ((balance - minEquity) / range) * graphHeight
    const currentY = graphHeight - ((currentEquity - minEquity) / range) * graphHeight
    const stopOutY = graphHeight - ((calculations.stopOutLevel - minEquity) / range) * graphHeight

    return (
        <div className="space-y-6">
            {/* Balance Input */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-zinc-400">Account Balance</label>
                    <span className="text-sm font-bold text-white">${balance.toLocaleString()}</span>
                </div>
                <input
                    type="range"
                    min={10000}
                    max={400000}
                    step={10000}
                    value={balance}
                    onChange={(e) => setBalance(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>

            {/* Drawdown Type Toggle */}
            <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Drawdown Type</label>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        onClick={() => setDrawdownType("static")}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${drawdownType === "static"
                                ? "bg-primary text-black"
                                : "bg-white/5 text-zinc-300 hover:bg-white/10"
                            }`}
                    >
                        Static (Absolute)
                    </button>
                    <button
                        onClick={() => setDrawdownType("relative")}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${drawdownType === "relative"
                                ? "bg-red-500 text-white"
                                : "bg-white/5 text-zinc-300 hover:bg-white/10"
                            }`}
                    >
                        Relative (Trailing)
                    </button>
                </div>
            </div>

            {/* Drawdown Percentage */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-zinc-400">Max Drawdown</label>
                    <span className="text-sm font-bold text-white">{drawdownPercent}%</span>
                </div>
                <input
                    type="range"
                    min={5}
                    max={20}
                    step={1}
                    value={drawdownPercent}
                    onChange={(e) => setDrawdownPercent(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>

            {/* Current Profit (for relative drawdown visualization) */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-zinc-400">Current Profit</label>
                    <span className={`text-sm font-bold ${currentProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {currentProfit >= 0 ? '+' : ''}${currentProfit.toLocaleString()}
                    </span>
                </div>
                <input
                    type="range"
                    min={-balance * 0.08}
                    max={balance * 0.15}
                    step={500}
                    value={currentProfit}
                    onChange={(e) => setCurrentProfit(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>

            {/* Visual Graph */}
            <div className="relative h-32 bg-zinc-900/50 rounded-xl p-4 overflow-hidden">
                <svg className="w-full h-full" viewBox={`0 0 300 ${graphHeight}`} preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1={balanceY} x2="300" y2={balanceY} stroke="#374151" strokeDasharray="4" />

                    {/* Danger Zone (below stop out) */}
                    <rect
                        x="0"
                        y={stopOutY}
                        width="300"
                        height={graphHeight - stopOutY}
                        fill="rgba(239, 68, 68, 0.15)"
                    />

                    {/* Stop Out Line */}
                    <line x1="0" y1={stopOutY} x2="300" y2={stopOutY} stroke="#ef4444" strokeWidth="2" />

                    {/* Current Equity Line */}
                    <line x1="0" y1={currentY} x2="300" y2={currentY} stroke="#22c55e" strokeWidth="2" strokeDasharray="6" />

                    {/* High Water Mark (for relative) */}
                    {drawdownType === "relative" && calculations.highWaterMark && currentProfit > 0 && (
                        <line
                            x1="0"
                            y1={graphHeight - ((calculations.highWaterMark - minEquity) / range) * graphHeight}
                            x2="300"
                            y2={graphHeight - ((calculations.highWaterMark - minEquity) / range) * graphHeight}
                            stroke="#8b5cf6"
                            strokeWidth="2"
                            strokeDasharray="4"
                        />
                    )}
                </svg>

                {/* Labels */}
                <div className="absolute left-2 text-xs" style={{ top: `${Math.max(8, Math.min(balanceY + 16, graphHeight - 16))}px` }}>
                    <span className="text-zinc-500">Start: ${balance.toLocaleString()}</span>
                </div>
                <div className="absolute right-2 text-xs text-red-400" style={{ top: `${Math.max(8, stopOutY - 16)}px` }}>
                    Stop Out: ${calculations.stopOutLevel.toLocaleString()}
                </div>
            </div>

            {/* Warning for Relative Drawdown */}
            {drawdownType === "relative" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-red-400">Relative Drawdown Warning</p>
                        <p className="text-xs text-zinc-400 mt-1">
                            With relative drawdown, your stop-out level follows your profit.
                            If you&apos;re up ${currentProfit.toLocaleString()}, your stop-out rises to ${calculations.stopOutLevel.toLocaleString()}.
                            Don&apos;t get trapped!
                        </p>
                    </div>
                </div>
            )}

            {/* Results */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-xs text-zinc-500">Risk Remaining</span>
                    </div>
                    <p className="text-xl font-bold text-white">${Math.round(calculations.riskRemaining).toLocaleString()}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                        <Info className="h-4 w-4 text-blue-400" />
                        <span className="text-xs text-zinc-500">Current Equity</span>
                    </div>
                    <p className="text-xl font-bold text-white">${currentEquity.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}
