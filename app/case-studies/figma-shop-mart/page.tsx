import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Shop Mart - Figma Case Study | Siddarth Sharma",
  description: "Transforming Online Shopping with Data-Driven UX Research - Interactive Figma Design",
}

export default function FigmaCaseStudy() {
  return (
    <main className="relative w-full min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="mx-auto max-w-7xl flex items-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-lg font-semibold">Shop Mart - Online Shopping Design</h1>
        </div>
      </header>

      {/* Content */}
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Project Info */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold">Transforming Online Shopping with Data-Driven UX Research</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore the complete Figma design system and interactive prototype for Shop Mart, a comprehensive UX research project focused on creating a seamless online shopping experience.
            </p>
          </div>

          {/* Figma Embed - Responsive */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-4xl">
              <div className="relative w-full rounded-lg overflow-hidden border border-border/50 shadow-lg">
                <div className="aspect-video w-full">
                  <iframe 
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      width: "100%",
                      height: "100%",
                      borderRadius: "0.5rem",
                    }} 
                    src="https://embed.figma.com/design/59Omflr8EWfqZAoMkaz9TJ/Online-Shopping?node-id=1-3&embed-host=share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Shop Mart is a self-directed UX research project focused on understanding user needs, shopping behaviors, and pain points within an online shopping experience. The research process included user interviews, surveys, competitive analysis, and usability testing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Simplify product search and filtering</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Increase trust during the purchase process</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Reduce friction in the checkout flow</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Created low-fidelity wireframes to explore improved user flows and validate solutions. Developed a comprehensive design system with clear navigation, smooth interaction patterns, and features that support faster decision-making and efficient purchase journeys.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Design Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["User Research", "Design System", "Wireframes", "Prototyping", "E-commerce"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
