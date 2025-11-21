"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, ShieldCheck, Zap, TrendingUp, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firms } from "@/lib/data"
import { blogPosts } from "@/lib/blog-data"
import { FirmCard } from "@/components/firm-card"
import { motion } from "framer-motion"

export default function Home() {
  const featuredFirms = firms.slice(0, 3)
  const latestFirms = firms.slice(3, 6)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 z-0" />

        {/* Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] z-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] z-0"
        />

        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary shadow-[0_0_15px_-3px_rgba(var(--primary),0.4)] mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Updated for November 2025
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Find Your <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-zinc-500">
              Trading Edge
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed"
          >
            The most comprehensive database of proprietary trading firms.
            Compare funding rules, profit splits, and hidden fees to find
            the perfect partner for your trading journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
          >
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_-5px_rgba(var(--primary),0.4)] hover:shadow-[0_0_40px_-5px_rgba(var(--primary),0.6)] transition-all rounded-full">
              Compare Firms
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md rounded-full">
              Read Reviews
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-12 w-full max-w-5xl"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">50+</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Firms Reviewed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">$10M+</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Funding Verified</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">10k+</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Monthly Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">4.8/5</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Trust Score</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Firms Section */}
      <section className="py-24 container relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Top Rated Firms</h2>
            <p className="text-zinc-400 text-lg">The industry leaders trusted by thousands of traders.</p>
          </div>
          <Link href="/reviews" className="hidden md:flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
            View all reviews <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFirms.map((firm, index) => (
            <FirmCard key={firm.id} firm={firm} index={index} />
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Button variant="outline" className="w-full border-white/10 text-white">
            View all reviews
          </Button>
        </div>
      </section>

      {/* Features Grid (Bento Style) */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Why Trust Us?</h2>
            <p className="text-zinc-400 text-lg">
              We don't just list firms. We test them, verify their payouts, and analyze their hidden rules so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-primary/30 transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Unbiased & Verified</h3>
              <p className="text-zinc-400 leading-relaxed">
                Our reviews are based on real trading accounts. We verify spreads, slippage, and most importantly, the withdrawal process. If a firm delays payouts, you'll know about it first.
              </p>
            </div>

            <div className="col-span-1 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-primary/30 transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep Analytics</h3>
              <p className="text-zinc-400 leading-relaxed">
                Compare over 50 data points per firm, from commission structures to scaling plans.
              </p>
            </div>

            <div className="col-span-1 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-primary/30 transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Live Updates</h3>
              <p className="text-zinc-400 leading-relaxed">
                Prop firm rules change fast. Our team updates reviews weekly to reflect the latest conditions.
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-primary/30 transition-all group flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Community Driven</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Join thousands of traders who share their experiences. User ratings play a huge role in our overall firm scoring.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-black/40 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-zinc-700" />
                  <div className="h-2 w-20 bg-zinc-700 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-zinc-800 rounded-full" />
                  <div className="h-2 w-3/4 bg-zinc-800 rounded-full" />
                  <div className="h-2 w-5/6 bg-zinc-800 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Additions Section */}
      <section className="py-24 container relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">New Arrivals</h2>
            <p className="text-zinc-400 text-lg">Freshly added firms and updated reviews.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestFirms.map((firm, index) => (
            <FirmCard key={firm.id} firm={firm} index={index + 3} />
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative">
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Latest Insights</h2>
              <p className="text-zinc-400 text-lg">Expert analysis and trading strategies.</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
              View all articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/20 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="flex items-center text-primary text-sm font-bold group-hover:translate-x-2 transition-transform mt-auto">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-12 md:hidden text-center">
            <Button asChild variant="outline" className="w-full border-white/10 text-white">
              <Link href="/blog">View all articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 rounded-full blur-[120px] z-0" />

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Get Funded?</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Stop guessing and start trading. Compare the top rated prop firms and find the one that suits your strategy today.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl font-bold bg-white text-black hover:bg-zinc-200 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] transition-all">
            Compare All Firms
          </Button>
        </div>
      </section>
    </div>
  )
}
