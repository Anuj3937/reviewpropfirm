"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Play, RefreshCw, TrendingUp, TrendingDown, Activity } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

interface SimulationResult {
    id: number
    data: { trade: number; equity: number }[]
    finalEquity: number
    isWinner: boolean
    maxDrawdown: number
}

export function EquitySimulator() {
    const [winRate, setWinRate] = useState(55)
    const [riskReward, setRiskReward] = useState(2)
    const [numTrades, setNumTrades] = useState(50)
    const [riskPerTrade, setRiskPerTrade] = useState(1)
    const [simulations, setSimulations] = useState<SimulationResult[]>([])
    const [isSimulating, setIsSimulating] = useState(false)

    const runSimulation = () => {
        setIsSimulating(true)

        setTimeout(() => {
            const startingEquity = 100000
            const results: SimulationResult[] = []

            // Run 5 simulations
            for (let sim = 0; sim < 5; sim++) {
                const data: { trade: number; equity: number }[] = [{ trade: 0, equity: startingEquity }]
                let equity = startingEquity
                let maxEquity = startingEquity
                let maxDrawdown = 0

                for (let i = 1; i <= numTrades; i++) {
                    const isWin = Math.random() * 100 < winRate
                    const riskAmount = equity * (riskPerTrade / 100)

                    if (isWin) {
                        equity += riskAmount * riskReward
                    } else {
                        equity -= riskAmount
                    }

                    // Track max drawdown
                    if (equity > maxEquity) {
                        maxEquity = equity
                    }
                    const currentDrawdown = ((maxEquity - equity) / maxEquity) * 100
                    if (currentDrawdown > maxDrawdown) {
                        maxDrawdown = currentDrawdown
                    }

                    data.push({ trade: i, equity: Math.round(equity) })
                }

                results.push({
                    id: sim,
                    data,
                    finalEquity: Math.round(equity),
                    isWinner: equity > startingEquity,
                    maxDrawdown: Math.round(maxDrawdown * 100) / 100,
                })
            }

            setSimulations(results)
            setIsSimulating(false)
        }, 500)
    }

    const stats = useMemo(() => {
        if (simulations.length === 0) return null

        const winners = simulations.filter(s => s.isWinner).length
        const avgFinal = simulations.reduce((acc, s) => acc + s.finalEquity, 0) / simulations.length
        const avgDrawdown = simulations.reduce((acc, s) => acc + s.maxDrawdown, 0) / simulations.length
        const bestRun = Math.max(...simulations.map(s => s.finalEquity))
        const worstRun = Math.min(...simulations.map(s => s.finalEquity))

        return {
            winners,
            losers: 5 - winners,
            avgFinal: Math.round(avgFinal),
            avgDrawdown: Math.round(avgDrawdown * 100) / 100,
            bestRun,
            worstRun,
        }
    }, [simulations])

    const lineColors = ["#22c55e", "#3b82f6", "#8b5cf6", "#ef4444", "#f59e0b"]

    return (
        <div className="space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-zinc-400">Win Rate</label>
                        <span className="text-sm font-bold text-white">{winRate}%</span>
                    </div>
                    <input
                        type="range"
                        min={30}
                        max={80}
                        step={1}
                        value={winRate}
                        onChange={(e) => setWinRate(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-zinc-400">Risk:Reward</label>
                        <span className="text-sm font-bold text-white">1:{riskReward}</span>
                    </div>
                    <input
                        type="range"
                        min={1}
                        max={5}
                        step={0.5}
                        value={riskReward}
                        onChange={(e) => setRiskReward(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-zinc-400">Number of Trades</label>
                        <span className="text-sm font-bold text-white">{numTrades}</span>
                    </div>
                    <input
                        type="range"
                        min={20}
                        max={200}
                        step={10}
                        value={numTrades}
                        onChange={(e) => setNumTrades(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-zinc-400">Risk Per Trade</label>
                        <span className="text-sm font-bold text-white">{riskPerTrade}%</span>
                    </div>
                    <input
                        type="range"
                        min={0.5}
                        max={3}
                        step={0.25}
                        value={riskPerTrade}
                        onChange={(e) => setRiskPerTrade(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                </div>
            </div>

            {/* Run Button */}
            <Button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold"
            >
                {isSimulating ? (
                    <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Simulating...
                    </>
                ) : (
                    <>
                        <Play className="h-4 w-4 mr-2" />
                        Run Monte Carlo Simulation
                    </>
                )}
            </Button>

            {/* Chart */}
            {simulations.length > 0 && (
                <div className="h-64 bg-zinc-900/50 rounded-xl p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                            <XAxis
                                dataKey="trade"
                                type="number"
                                domain={[0, numTrades]}
                                tick={{ fill: '#71717a', fontSize: 10 }}
                                axisLine={{ stroke: '#27272a' }}
                            />
                            <YAxis
                                tick={{ fill: '#71717a', fontSize: 10 }}
                                axisLine={{ stroke: '#27272a' }}
                                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#18181b',
                                    border: '1px solid #27272a',
                                    borderRadius: '8px',
                                }}
                                labelStyle={{ color: '#fff' }}
                                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Equity']}
                            />
                            <ReferenceLine y={100000} stroke="#374151" strokeDasharray="4" />
                            {simulations.map((sim, index) => (
                                <Line
                                    key={sim.id}
                                    data={sim.data}
                                    type="monotone"
                                    dataKey="equity"
                                    stroke={lineColors[index]}
                                    strokeWidth={2}
                                    dot={false}
                                    opacity={0.8}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}

            {/* Stats */}
            {stats && (
                <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                        <TrendingUp className="h-5 w-5 text-green-400 mx-auto mb-1" />
                        <p className="text-2xl font-bold text-green-400">{stats.winners}</p>
                        <p className="text-xs text-zinc-500">Profitable</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                        <TrendingDown className="h-5 w-5 text-red-400 mx-auto mb-1" />
                        <p className="text-2xl font-bold text-red-400">{stats.losers}</p>
                        <p className="text-xs text-zinc-500">Unprofitable</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <Activity className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-2xl font-bold text-white">{stats.avgDrawdown}%</p>
                        <p className="text-xs text-zinc-500">Avg Drawdown</p>
                    </div>
                </div>
            )}

            {/* Educational Note */}
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-sm text-zinc-300">
                    <strong className="text-purple-400">Understanding Variance:</strong> Even with a profitable strategy,
                    short-term results can vary wildly. This simulation shows the reality of trading - sometimes you win,
                    sometimes you lose, even with the odds in your favor.
                </p>
            </div>
        </div>
    )
}
