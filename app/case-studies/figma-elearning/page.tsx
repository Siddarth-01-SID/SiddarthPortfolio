import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "E-Learning App - Figma Case Study | Siddarth Sharma",
  description: "Redefining Digital Learning: A UX Research Case Study - Interactive Figma Design",
}

export default function ElearningCaseStudy() {
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
          <h1 className="text-lg font-semibold">E-Learning App - Digital Learning Design</h1>
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
          src="https://embed.figma.com/proto/K5CBcuiSl2FQ0uytckkhzI/E--Learning-App?node-id=1-125&embed-host=share"
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
                  This e-learning platform was designed through extensive UX research to understand learner needs, pain points, and preferences in digital education. The research encompassed user interviews, surveys, and usability testing to identify barriers to learning and opportunities for engagement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Simplifying course discovery and navigation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Increasing learner engagement and motivation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Personalizing the learning experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developed an intuitive, user-centered platform with personalized course recommendations, engaging learning materials, progress tracking, and interactive features. The design prioritizes accessibility, clear information hierarchy, and smooth navigation to support diverse learning styles and educational backgrounds.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Design Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["UX Research", "EdTech", "Interactive Design", "Accessibility", "Mobile-First"].map((tag) => (
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
