import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Ticket Booking App - Figma Case Study | Siddarth Sharma",
  description: "Unified Movie & Event Booking Interface - Interactive Figma Design",
}

export default function TicketBookingCaseStudy() {
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
          <h1 className="text-lg font-semibold">Ticket Booking App - Event Booking Design</h1>
        </div>
      </header>

      {/* Content */}
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Project Info */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl font-bold">Unified Movie & Event Booking Interface</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore the complete Figma design and interactive prototype for a modern ticket booking application that unifies movie and event booking experiences into one seamless interface.
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
                    src="https://embed.figma.com/proto/4E4iD27lb8l3gxQhN3Asio/Ticket-Booking-App-UI?page-id=7%3A2&node-id=567-3930&embed-host=share"
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
                  A unified ticket booking application designed to streamline the process of booking movies and events. The interface brings together browsing, selection, and checkout flows for both entertainment categories into one cohesive, intuitive platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Unified browsing for movies and events</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Intuitive seat/ticket selection interface</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 flex-shrink-0">→</span>
                    <span>Streamlined booking and payment flow</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Design Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The design prioritizes user experience by creating a clean, modern interface that makes browsing and booking tickets effortless. Strategic use of visual hierarchy and interactive elements guide users through the booking journey while maintaining clarity and engagement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Design Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Mobile App", "UI Design", "Prototyping", "Booking System", "E-commerce"].map((tag) => (
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
