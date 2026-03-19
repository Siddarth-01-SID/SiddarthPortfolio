import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Shop Mart - Figma Case Study | Siddarth Sharma",
  description: "Transforming Online Shopping with Data-Driven UX Research - Interactive Figma Design",
}

export default function FigmaCaseStudy() {
  return (
    <main className="relative w-full h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-border/50 z-50">
        <div className="mx-auto max-w-full flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-lg font-semibold text-center flex-1">Shop Mart - Online Shopping Design</h1>
          <div className="w-12" />
        </div>
      </header>

      {/* Figma Embed - Full Screen */}
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          title="Shop Mart Figma Design"
          style={{
            border: "none",
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
