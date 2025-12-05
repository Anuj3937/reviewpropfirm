import { firms } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle2, XCircle, ArrowLeft, ExternalLink, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

interface ReviewPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
    const { slug } = await params
    const firm = firms.find((f) => f.slug === slug)

    if (!firm) {
        return {
            title: "Firm Not Found",
        }
    }

    return {
        title: firm.metaTitle,
        description: firm.metaDescription,
        openGraph: {
            title: firm.metaTitle,
            description: firm.metaDescription,
            type: "article",
            url: `https://propfirmreviews.com/reviews/${firm.slug}`,
            images: [
                {
                    url: `/og/${firm.slug}.jpg`, // Placeholder for dynamic OG image
                    width: 1200,
                    height: 630,
                    alt: `${firm.name} Review`,
                },
            ],
        },
    }
}

export default async function ReviewPage({ params }: ReviewPageProps) {
    const { slug } = await params
    const firm = firms.find((f) => f.slug === slug)

    if (!firm) {
        notFound()
    }

    // JSON-LD Structured Data for Review
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Organization",
            "name": firm.name,
            "image": `https://propfirmreviews.com${firm.logo}`,
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": firm.rating,
            "bestRating": "5",
        },
        "author": {
            "@type": "Organization",
            "name": "Prop Firm Reviews",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Prop Firm Reviews",
        },
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header Section */}
            <div className="relative border-b border-white/10 bg-white/5 pb-12 pt-8">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container relative z-10">
                    <Link
                        href="/reviews"
                        className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Reviews
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-primary/20 border border-white/10">
                                {firm.name.substring(0, 2)}
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{firm.name}</h1>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1.5" />
                                        <span className="font-bold text-white mr-1">{firm.rating}</span>
                                        <span className="text-zinc-400">({firm.reviewCount} reviews)</span>
                                    </div>
                                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                                        Verified Payouts
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <Button asChild size="lg" className="flex-1 md:flex-none bg-primary text-black hover:bg-primary/90 font-bold shadow-[0_0_20px_-5px_rgba(var(--primary),0.4)]">
                                <a href={firm.affiliateUrl} target="_blank" rel="nofollow noreferrer">
                                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Quick Verdict */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <Shield className="mr-3 h-6 w-6 text-primary" />
                                Our Verdict
                            </h2>
                            <p className="text-zinc-300 leading-relaxed text-lg">
                                {firm.description}
                            </p>
                        </div>

                        {/* Pros & Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                                    The Good
                                </h3>
                                <div className="space-y-3">
                                    {firm.pros.map((pro, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-zinc-300 text-sm">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                                    The Bad
                                </h3>
                                <div className="space-y-3">
                                    {firm.cons.map((con, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                            <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                            <span className="text-zinc-300 text-sm">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hidden Rules / Fine Print */}
                        {firm.hiddenRules && firm.hiddenRules.length > 0 && (
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <AlertTriangle className="mr-3 h-6 w-6 text-amber-400" />
                                    ⚠️ The Fine Print
                                </h2>
                                <p className="text-zinc-400 mb-6">
                                    Important rules that may not be prominently displayed. Read carefully before purchasing.
                                </p>
                                <div className="space-y-3">
                                    {firm.hiddenRules.map((rule, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                            <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                                            <span className="text-zinc-300 text-sm">{rule}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Full Review */}
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-3xl font-bold text-white mb-6">Full Review</h2>
                            <div className="text-zinc-400 leading-relaxed space-y-6">
                                <p>{firm.fullReview}</p>
                                <p>
                                    Traders looking for a reliable partner will find {firm.name} to be a strong contender.
                                    Their trading conditions are competitive, with tight spreads and low commissions on most major pairs.
                                    The dashboard is intuitive, providing real-time analytics on your trading performance.
                                </p>
                                <p>
                                    One standout feature is their scaling plan, which is more generous than the industry average.
                                    Consistent traders can see their capital allocation grow by 25% every 3 months, provided they meet the profit targets.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">At a Glance</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <span className="text-zinc-500">Profit Split</span>
                                    <span className="font-bold text-white text-lg">{firm.profitSplit}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <span className="text-zinc-500">Max Funding</span>
                                    <span className="font-bold text-white text-lg">{firm.maxFunding}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <span className="text-zinc-500">Evaluation</span>
                                    <span className="font-bold text-white">{firm.evaluationType}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <span className="text-zinc-500">Price From</span>
                                    <span className="font-bold text-primary text-xl">${firm.priceStarting}</span>
                                </div>
                                <div className="pt-2">
                                    <Button asChild className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12">
                                        <a href={firm.affiliateUrl} target="_blank" rel="nofollow noreferrer">
                                            Start Challenge
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
