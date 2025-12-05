import { Metadata } from "next"
import { Calculator, DollarSign, TrendingDown, LineChart, Sparkles } from "lucide-react"
import { ChallengeCostCalculator } from "@/components/tools/challenge-cost-calculator"
import { PayoutCalculator } from "@/components/tools/payout-calculator"
import { DrawdownCalculator } from "@/components/tools/drawdown-calculator"
import { EquitySimulator } from "@/components/tools/equity-simulator"

export const metadata: Metadata = {
    title: "Trading Tools | Professional Calculators for Funded Traders",
    description: "Free professional trading tools: Challenge Cost Calculator, Payout Calculator, Drawdown Risk Calculator, and Monte Carlo Equity Simulator. Make informed decisions.",
    keywords: ["prop firm calculator", "payout calculator", "drawdown calculator", "trading tools", "monte carlo simulation"],
    openGraph: {
        title: "Trading Tools | Professional Calculators for Funded Traders",
        description: "Free professional trading tools to help you make informed decisions about prop firm challenges.",
        type: "website",
    },
}

export default function ToolsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative border-b border-white/10 bg-gradient-to-b from-primary/5 to-transparent pb-20 pt-12">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4" />
                        Professional Trading Tools
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Don&apos;t Guess.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Calculate.
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Professional-grade trading tools designed for funded traders.
                        Make data-driven decisions and maximize your prop firm journey.
                    </p>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="container mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Challenge Cost Calculator - Large Card */}
                    <div className="lg:col-span-1 group">
                        <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <DollarSign className="h-7 w-7 text-green-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Challenge Cost Calculator</h2>
                                    <p className="text-zinc-500">Find the best price for your challenge</p>
                                </div>
                            </div>
                            <ChallengeCostCalculator />
                        </div>
                    </div>

                    {/* Payout Calculator */}
                    <div className="lg:col-span-1 group">
                        <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Calculator className="h-7 w-7 text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Payout Calculator</h2>
                                    <p className="text-zinc-500">Calculate your monthly earnings</p>
                                </div>
                            </div>
                            <PayoutCalculator />
                        </div>
                    </div>

                    {/* Drawdown Calculator */}
                    <div className="lg:col-span-1 group">
                        <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <TrendingDown className="h-7 w-7 text-red-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Drawdown Calculator</h2>
                                    <p className="text-zinc-500">Understand your risk limits</p>
                                </div>
                            </div>
                            <DrawdownCalculator />
                        </div>
                    </div>

                    {/* Equity Simulator */}
                    <div className="lg:col-span-1 group">
                        <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <LineChart className="h-7 w-7 text-purple-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Equity Simulator</h2>
                                    <p className="text-zinc-500">Monte Carlo simulation</p>
                                </div>
                            </div>
                            <EquitySimulator />
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                            <Sparkles className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Pro Tip: Save Your Calculations</h3>
                            <p className="text-zinc-400">
                                Sign in to save your calculations and access them from any device.
                                Track your analysis history and make better decisions over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
