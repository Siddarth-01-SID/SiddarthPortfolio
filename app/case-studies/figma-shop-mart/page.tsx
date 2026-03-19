import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Shop Mart - Figma Case Study | Siddarth Sharma",
  description: "Transforming Online Shopping with Data-Driven UX Research - Interactive Figma Design",
}

export default function FigmaCaseStudy() {
  return (
    <main className="relative w-full bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center gap-4">
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

      {/* Full-Screen Figma Embed */}
      <div className="flex-1 w-full">
        <iframe 
          style={{
            border: "none",
            width: "100%",
            height: "100vh",
          }} 
          src="https://embed.figma.com/design/59Omflr8EWfqZAoMkaz9TJ/Online-Shopping?node-id=1-3&embed-host=share" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Project Details Section */}
      <div className="w-full bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-12">
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
