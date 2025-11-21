"use client"

import { PropFirm } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface FirmCardProps {
    firm: PropFirm
    index?: number
}

export function FirmCard({ firm, index = 0 }: FirmCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <Card className="relative h-full flex flex-col border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
                                {firm.name.substring(0, 2)}
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-white group-hover:text-primary transition-colors">{firm.name}</h3>
                                <div className="flex items-center gap-1 mt-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-bold text-white">{firm.rating}</span>
                                    <span className="text-xs text-zinc-400">({firm.reviewCount})</span>
                                </div>
                            </div>
                        </div>
                        <Badge variant="outline" className="bg-white/5 text-zinc-300 border-white/10 group-hover:border-primary/30 transition-colors">
                            {firm.evaluationType}
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                        <div>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Profit Split</p>
                            <p className="font-bold text-white text-lg">{firm.profitSplit}</p>
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Max Funding</p>
                            <p className="font-bold text-white text-lg">{firm.maxFunding}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {firm.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                                <CheckCircle2 className="h-4 w-4 text-primary/70 shrink-0" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="pt-2 gap-3">
                    <Button asChild className="flex-1 bg-white text-black hover:bg-primary hover:text-black font-bold shadow-lg shadow-black/20 group-hover:shadow-primary/20 transition-all">
                        <Link href={`/reviews/${firm.slug}`}>
                            View Review
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="border-white/10 hover:bg-white/10 hover:text-white hover:border-primary/50">
                        <a href={firm.affiliateUrl} target="_blank" rel="nofollow noreferrer" aria-label={`Visit ${firm.name}`}>
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
