import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Shop Mart - Figma Case Study | Siddarth Sharma",
  description: "Transforming Online Shopping with Data-Driven UX Research - Interactive Figma Design",
}

export default function FigmaCaseStudy() {
  return (
    <main className="relative w-screen h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-lg font-semibold">Shop Mart - Online Shopping</h1>
        </div>
      </header>

      {/* Full-Screen Figma Embed */}
      <iframe 
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          marginTop: "64px",
        }} 
        src="https://embed.figma.com/design/59Omflr8EWfqZAoMkaz9TJ/Online-Shopping?node-id=1-3&embed-host=share" 
        allowFullScreen
      ></iframe>
    </main>
  )
}
