import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
    title: "Prop Firm Trading Blog | Tips, Strategies & Industry News 2025",
    description: "Expert trading tips, prop firm news, and strategies to pass your funded challenge. Learn risk management, drawdown control, and earn consistent profits as a funded trader.",
    keywords: [
        "prop firm trading tips",
        "how to pass prop firm challenge",
        "funded trader strategies",
        "prop firm news",
        "trading psychology",
        "risk management prop firm",
        "drawdown management",
        "prop firm evaluation tips",
        "best trading strategies for prop firms",
        "consistency rule prop firm",
        "prop firm trading psychology",
        "funded account strategies",
        "trading discipline",
        "prop firm success stories",
    ],
    openGraph: {
        title: "Prop Firm Trading Blog | Tips, Strategies & Industry News",
        description: "Expert trading tips and strategies to pass your funded challenge and earn consistent profits.",
        type: "website",
        url: "https://thepropfirmreviews.vercel.app/blog",
    },
    alternates: {
        canonical: "https://thepropfirmreviews.vercel.app/blog",
    },
}

export default function BlogPage() {
    const featuredPost = blogPosts[0]
    const regularPosts = blogPosts.slice(1)

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container">
                <Breadcrumbs />

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Trading <span className="text-primary">Insights</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Expert analysis, strategy guides, and industry news to help you secure and keep your funded account.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <span className="w-1 h-8 bg-primary rounded-full" />
                        Featured Article
                    </h2>
                    <Link href={`/blog/${featuredPost.slug}`} className="group">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-primary/50 transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="relative h-64 lg:h-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 lg:hidden" />
                                    <Image
                                        src={featuredPost.coverImage}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-6">
                                        <Badge className="bg-primary text-black hover:bg-primary/90">{featuredPost.category}</Badge>
                                        <div className="flex items-center text-sm text-zinc-400">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center text-sm text-zinc-400">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {featuredPost.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-zinc-400 text-lg mb-8 line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                                                <User className="h-6 w-6 text-zinc-400" />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium text-sm">{featuredPost.author.name}</p>
                                                <p className="text-zinc-500 text-xs">{featuredPost.author.role}</p>
                                            </div>
                                        </div>
                                        <span className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Regular Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                            <Card className="h-full flex flex-col bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-black/60 backdrop-blur-md text-white border-white/10 hover:bg-black/80">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                                        <span className="flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {new Date(post.date).toLocaleDateString()}
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="h-3 w-3 mr-1" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-zinc-400 text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-0 border-t border-white/5 mt-4 pt-4">
                                    <div className="flex items-center gap-2 w-full">
                                        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                                            <User className="h-4 w-4 text-zinc-400" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white text-xs font-medium">{post.author.name}</p>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
