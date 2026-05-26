import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Shop Mart - Figma Case Study | Siddarth Sharma",
  description: "Transforming Online Shopping with Data-Driven UX Research - Interactive Figma Design",
}

export default function FigmaCaseStudy() {
  return (
    <>
      {/* Back Button Overlay */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-md border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Full-Screen Figma Design - No Margins */}
      <div className="w-screen h-screen overflow-auto">
        <iframe 
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            display: "block",
          }} 
          src="https://embed.figma.com/design/59Omflr8EWfqZAoMkaz9TJ/Online-Shopping?node-id=1-3&embed-host=share" 
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
