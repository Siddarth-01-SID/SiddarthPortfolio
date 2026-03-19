import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "E-Learning App - Figma Case Study | Siddarth Sharma",
  description: "Redefining Digital Learning: A UX Research Case Study - Interactive Figma Design",
}

export default function ElearningCaseStudy() {
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
          <h1 className="text-lg font-semibold">E-Learning App - Digital Learning</h1>
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
        src="https://embed.figma.com/proto/K5CBcuiSl2FQ0uytckkhzI/E--Learning-App?node-id=1-125&embed-host=share"
        allowFullScreen
      ></iframe>
    </main>
  )
}
