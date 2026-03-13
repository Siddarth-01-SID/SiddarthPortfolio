import { BlogList } from "@/components/public/blog/blog-list"
import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on design, technology, and the craft of building digital products.",
  openGraph: {
    title: "Writing — Alex Chen",
    description: "Thoughts on design, technology, and the craft of building digital products.",
    url: `${baseUrl}/blog`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
}

export default function BlogPage() {
  return (
    <div className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <p className="text-sm text-muted-foreground">Writing</p>
          <h1 className="text-4xl font-normal tracking-tight sm:text-5xl">
            Thoughts on design and technology.
          </h1>
        </div>
        <BlogList />
      </div>
    </div>
  )
}
