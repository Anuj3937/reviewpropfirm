import { MetadataRoute } from 'next'
import { firms } from '@/lib/data'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thepropfirmreviews.vercel.app'
    const currentDate = new Date().toISOString()

    // Generate URLs for all firm review pages with high priority
    const firmUrls = firms.map((firm) => ({
        url: `${baseUrl}/reviews/${firm.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9, // High priority for individual reviews
    }))

    // Generate URLs for all blog posts
    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        // Homepage - highest priority
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        // Main category pages - very high priority
        {
            url: `${baseUrl}/reviews`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/compare`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        // Feature pages - high priority
        {
            url: `${baseUrl}/offers`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/best-sellers`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/hidden-rules`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/payouts`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/get-listed`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        // Legal pages - low priority but important for trust
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        // Individual firm review pages (high priority)
        ...firmUrls,
        // Blog posts
        ...blogUrls,
    ]
}

