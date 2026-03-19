import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Shop Mart - Figma Case Study | Siddarth Sharma",
  description: "Transforming Online Shopping with Data-Driven UX Research - Interactive Figma Design",
}

export default function FigmaCaseStudy() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-lg font-semibold">Shop Mart - Figma Design</h1>
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Figma Embed */}
      <div className="w-full h-screen pt-16">
        <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "100%",
            borderRadius: "0",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/59Omflr8EWfqZAoMkaz9TJ/Online-Shopping?node-id=1-3&t=GCtjsjICIpljnk4z-1"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  )
}
