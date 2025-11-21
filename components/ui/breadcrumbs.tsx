"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { Fragment } from "react"

export function Breadcrumbs() {
    const pathname = usePathname()

    // Remove query parameters and trailing slashes
    const pathWithoutQuery = pathname.split("?")[0]
    const pathSegments = pathWithoutQuery.split("/").filter((v) => v.length > 0)

    // Don't show on home page
    if (pathSegments.length === 0) return null

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`
        // Format segment: replace hyphens with spaces and capitalize
        const label = segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

        return {
            href,
            label,
            isLast: index === pathSegments.length - 1
        }
    })

    // JSON-LD for Breadcrumbs
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://propfirmreviews.com"
            },
            ...breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": crumb.label,
                "item": `https://propfirmreviews.com${crumb.href}`
            }))
        ]
    }

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol className="flex items-center space-x-2 text-sm text-zinc-400">
                <li>
                    <Link href="/" className="hover:text-primary transition-colors flex items-center">
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                    <Fragment key={crumb.href}>
                        <ChevronRight className="h-4 w-4 text-zinc-600" />
                        <li>
                            {crumb.isLast ? (
                                <span className="text-white font-medium" aria-current="page">
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link href={crumb.href} className="hover:text-primary transition-colors">
                                    {crumb.label}
                                </Link>
                            )}
                        </li>
                    </Fragment>
                ))}
            </ol>
        </nav>
    )
}
