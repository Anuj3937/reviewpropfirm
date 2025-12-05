"use client"

import Script from "next/script"

interface OrganizationSchemaProps {
    name?: string
    url?: string
    logo?: string
    description?: string
}

export function OrganizationSchema({
    name = "Prop Firm Reviews",
    url = "https://thepropfirmreviews.vercel.app",
    logo = "https://thepropfirmreviews.vercel.app/logo.png",
    description = "The most trusted source for proprietary trading firm reviews, comparisons, and guides."
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        url,
        logo,
        description,
        sameAs: [
            "https://twitter.com/propfirmreviews",
            "https://www.youtube.com/@propfirmreviews"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@thepropfirmreviews.com"
        }
    }

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface WebsiteSchemaProps {
    name?: string
    url?: string
    description?: string
}

export function WebsiteSchema({
    name = "Prop Firm Reviews",
    url = "https://thepropfirmreviews.vercel.app",
    description = "Compare the best proprietary trading firms with unbiased reviews and detailed analysis."
}: WebsiteSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url,
        description,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    }

    return (
        <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface ArticleSchemaProps {
    title: string
    description: string
    url: string
    image: string
    datePublished: string
    dateModified?: string
    author: string
}

export function ArticleSchema({
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            "@type": "Person",
            name: author
        },
        publisher: {
            "@type": "Organization",
            name: "Prop Firm Reviews",
            logo: {
                "@type": "ImageObject",
                url: "https://thepropfirmreviews.vercel.app/logo.png"
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url
        }
    }

    return (
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface ReviewSchemaProps {
    itemName: string
    itemDescription: string
    itemUrl: string
    itemImage: string
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
}

export function ReviewSchema({
    itemName,
    itemDescription,
    itemUrl,
    itemImage,
    ratingValue,
    reviewCount,
    bestRating = 5,
    worstRating = 1
}: ReviewSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: itemName,
        description: itemDescription,
        image: itemImage,
        url: itemUrl,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: ratingValue.toFixed(1),
            bestRating,
            worstRating,
            reviewCount
        },
        review: {
            "@type": "Review",
            author: {
                "@type": "Organization",
                name: "Prop Firm Reviews"
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: ratingValue.toFixed(1),
                bestRating,
                worstRating
            }
        }
    }

    return (
        <Script
            id="review-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface FAQItem {
    question: string
    answer: string
}

interface FAQSchemaProps {
    faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    }

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface BreadcrumbItem {
    name: string
    url: string
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
