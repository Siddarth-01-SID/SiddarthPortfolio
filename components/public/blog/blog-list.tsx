"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Building Design Systems That Scale",
    excerpt: "A practical guide to creating flexible, maintainable design systems for growing products.",
    date: "March 2026",
    slug: "design-systems-scale",
  },
  {
    id: 2,
    title: "The Art of Micro-Interactions",
    excerpt: "How subtle animations and feedback can dramatically improve user experience.",
    date: "February 2026",
    slug: "micro-interactions",
  },
  {
    id: 3,
    title: "Designing for Developer Experience",
    excerpt: "Lessons learned from building tools that developers actually want to use.",
    date: "January 2026",
    slug: "developer-experience",
  },
  {
    id: 4,
    title: "Accessibility as a Design Principle",
    excerpt: "Why inclusive design makes better products for everyone.",
    date: "December 2025",
    slug: "accessibility-design",
  },
  {
    id: 5,
    title: "From Figma to Production",
    excerpt: "Bridging the gap between design files and shipped products.",
    date: "November 2025",
    slug: "figma-production",
  },
]

export function BlogList() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="divide-y divide-border">
      {articles.map((article, index) => (
        <article
          key={article.id}
          className={cn(
            "group py-8 first:pt-0 last:pb-0 opacity-0",
            isVisible && "animate-fade-in-up",
          )}
          style={{ animationDelay: `${index * 80 + 100}ms` }}
        >
          <Link href={`/blog/${article.slug}`} className="block space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4">
                {article.title}
              </h2>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
            <p className="text-xs text-muted-foreground">
              {article.date}
            </p>
          </Link>
        </article>
      ))}
    </div>
  )
}
