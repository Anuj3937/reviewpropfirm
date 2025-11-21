"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { firms } from "@/lib/data"
import { CheckCircle2, XCircle, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function ComparisonTable() {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">
            <Table>
                <TableHeader className="bg-black/40 backdrop-blur-md sticky top-0 z-20">
                    <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="w-[200px] text-white font-bold text-lg pl-6 py-6">Firm</TableHead>
                        <TableHead className="text-zinc-300 font-semibold">Rating</TableHead>
                        <TableHead className="text-zinc-300 font-semibold">Profit Split</TableHead>
                        <TableHead className="text-zinc-300 font-semibold">Max Funding</TableHead>
                        <TableHead className="text-zinc-300 font-semibold">Price</TableHead>
                        <TableHead className="text-zinc-300 font-semibold">Evaluation</TableHead>
                        <TableHead className="text-right text-white font-bold pr-6">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {firms.map((firm, index) => (
                        <TableRow key={firm.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                            <TableCell className="font-medium pl-6 py-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center text-white font-bold border border-white/10 group-hover:border-primary/50 transition-colors">
                                        {firm.name.substring(0, 2)}
                                    </div>
                                    <span className="text-base text-white group-hover:text-primary transition-colors">{firm.name}</span>
                                    {index === 0 && (
                                        <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 text-[10px] px-1.5 py-0.5 h-5">
                                            Best Value
                                        </Badge>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1.5">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-bold text-white">{firm.rating}</span>
                                    <span className="text-xs text-zinc-500">({firm.reviewCount})</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-zinc-300">{firm.profitSplit}</TableCell>
                            <TableCell className="text-zinc-300 font-medium">{firm.maxFunding}</TableCell>
                            <TableCell className="text-zinc-300">${firm.priceStarting}</TableCell>
                            <TableCell>
                                <Badge variant="outline" className="bg-white/5 text-zinc-300 border-white/10">
                                    {firm.evaluationType}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right pr-6">
                                <Button asChild size="sm" className="bg-white text-black hover:bg-primary hover:text-black font-bold shadow-lg shadow-black/20">
                                    <Link href={`/reviews/${firm.slug}`}>
                                        Details <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
