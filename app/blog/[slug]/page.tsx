import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react"
import { firms } from "@/lib/data"

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return { title: "Post Not Found" }
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author.name],
            images: [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
        },
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    // JSON-LD for BlogPosting
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.coverImage,
        "author": {
            "@type": "Person",
            "name": post.author.name,
        },
        "publisher": {
            "@type": "Organization",
            "name": "Prop Firm Reviews",
            "logo": {
                "@type": "ImageObject",
                "url": "https://propfirmreviews.com/logo.png" // Placeholder
            }
        },
        "datePublished": post.date,
        "description": post.excerpt,
    }

    // Find related firms
    const relatedFirmsData = firms.filter(f => post.relatedFirms.includes(f.slug))

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container">
                <Breadcrumbs />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        <header className="mb-10">
                            <div className="flex items-center gap-4 mb-6">
                                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                    {post.category}
                                </Badge>
                                <span className="text-zinc-400 text-sm flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span className="text-zinc-400 text-sm flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center overflow-hidden">
                                    <User className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-bold">{post.author.name}</p>
                                    <p className="text-zinc-400 text-sm">{post.author.role}</p>
                                </div>
                            </div>
                        </header>

                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 border border-white/10">
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div
                            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-primary prose-strong:text-white prose-li:text-zinc-300"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-sm border border-white/10">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Share Widget */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <Share2 className="mr-2 h-5 w-5 text-primary" />
                                Share this article
                            </h3>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="border-white/10 hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-colors">
                                    <Facebook className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="border-white/10 hover:bg-[#1DA1F2] hover:text-white hover:border-transparent transition-colors">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="border-white/10 hover:bg-[#0A66C2] hover:text-white hover:border-transparent transition-colors">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Related Firms Widget */}
                        {relatedFirmsData.length > 0 && (
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 sticky top-24">
                                <h3 className="text-lg font-bold text-white mb-6">Mentioned Firms</h3>
                                <div className="space-y-4">
                                    {relatedFirmsData.map(firm => (
                                        <div key={firm.slug} className="group">
                                            <Link href={`/reviews/${firm.slug}`} className="block p-4 rounded-xl bg-black/20 border border-white/5 hover:border-primary/50 transition-all">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                            {firm.name.substring(0, 2)}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-white group-hover:text-primary transition-colors">{firm.name}</p>
                                                            <div className="flex items-center text-xs text-zinc-400">
                                                                <span className="text-yellow-400 mr-1">★</span> {firm.rating}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-zinc-500">Max Funding</span>
                                                    <span className="text-white font-medium">{firm.maxFunding}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    )
}
