"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectCategory = "All" | "User Research" | "User Interface"

interface Project {
  id: number
  title: string
  projectName: string
  description: string
  tags: string[]
  image: string
  category: ProjectCategory
  caseStudyUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Elevating Social Media Usability Through Modern UX",
    projectName: "Yaari",
    description: "This case study highlights my complete end-to-end design process for creating Yaari, a social media app designed to be more intuitive, engaging, and user-focused. The journey began with thorough user research, where I compared multiple existing social media platforms to identify gaps, pain points, and opportunities for improvement. Based on these insights, I defined clear problem statements and crafted meaningful solutions aligned with both user expectations and product goals. Through structured interviews and well-designed research questions, I gathered valuable feedback that guided the direction of the experience. A detailed competitive analysis helped establish usability standards and uncover areas for differentiation in the market. To ensure the product truly represented real users, I developed User Personas, Empathy Maps, and a complete User Journey Map, capturing motivations, frustrations, and behaviors. To organize the experience, I built the Information Architecture and mapped a clear User Flow. Using a well-defined Design System—including typography, color, UI components, and reusable patterns—I ensured consistency, scalability, and visual harmony. The process concluded with Low-Fidelity Wireframes to outline structure and interactions before transitioning into high-fidelity UI screens. This case study demonstrates my ability to combine research, strategy, and design principles to create a meaningful, user-centered product experience.",
    tags: ["User Research", "Design System", "Wireframes"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    category: "User Research",
    caseStudyUrl: "https://www.figma.com/proto/rIJBtS40cegdPf3yluD0bs/Case-Study?node-id=259-3253&t=mAXYquJfb8CBm011-1",
  },
  {
    id: 2,
    title: "Transforming Online Shopping with Data-Driven UX Research",
    projectName: "Shop Mart",
    description: "Shop Mart is a self-directed UX research project focused on understanding user needs, shopping behaviors, and pain points within an online shopping experience. The research process included user interviews, surveys, competitive analysis, and usability testing to uncover key challenges related to product discovery, navigation, decision-making, and the checkout journey. Insights from the research revealed opportunities to simplify product search and filtering, increase trust during the purchase process, and reduce friction in the checkout flow. As part of the research phase, I also created low-fidelity wireframes to explore improved user flows and validate solutions before moving forward. Shop Mart aims to deliver a seamless and user-friendly shopping experience with clear navigation, smooth interaction patterns, and features that support faster decision-making, enhanced engagement, and a more efficient purchase journey.",
    tags: ["User Research", "Design System", "Wireframes"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "User Research",
    caseStudyUrl: "https://www.figma.com/proto/59Omflr8EWfqZAoMkaz9TJ/Online-Shopping?node-id=1-3&t=IsxJewufma9P0x1f-1",
  },
  {
    id: 3,
    title: "Unified Movie & Event Booking Interface",
    projectName: "TixFlix",
    description: "I have designed my own website UI called TixFlix, created to deliver a seamless and enjoyable movie and event ticket booking experience from start to finish. The journey begins with a visually engaging pre-landing page that sets the overall tone and showcases the platform's purpose. From there, users are guided into clean and intuitive authentication screens—including login, signup, and password reset—ensuring effortless access for both new and returning users. Once authenticated, users arrive at a thoughtfully structured post-landing page where they can easily explore trending movies, upcoming events, schedules, and nearby venues. The interface prioritizes clarity, quick navigation, and visual hierarchy, allowing users to make decisions confidently. As the journey continues, the seat-selection screen offers a refined, clear, and responsive layout, giving users full control over choosing the perfect spot based on availability, pricing, and seating preference. To enhance the booking experience further, I designed a dedicated beverages and checkout process with smooth interactions and simplified steps, making the final stage of securing tickets feel fast, intuitive, and satisfying. Every screen and interaction throughout TixFlix has been carefully crafted with user needs, accessibility, and usability in mind. Overall, this project represents a complete, user-centered booking experience—combining thoughtful design decisions, functional simplicity, and a cohesive visual identity to create a website UI that feels modern, efficient, and truly enjoyable to use.",
    tags: ["User Interface", "Web Designing", "Design System"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    category: "User Interface",
    caseStudyUrl: "https://www.figma.com/proto/tE9SzmsQIMFdZxvcR5f4WZ/Ticket-Booking-App-UI?node-id=567-3930&t=UUZMnlSMceb97MSv-1",
  },
  {
    id: 4,
    title: "Redefining Digital Learning: A UX Research Case Study",
    projectName: "Teach Nexus",
    description: "Teach Nexus is a self-designed e-learning app created with the goal of making online education more intuitive, engaging, and accessible for learners. This UX research project focuses on identifying user needs, learning habits, and key pain points through methods such as user interviews, surveys, competitive analysis, and usability testing. The insights gathered helped uncover opportunities to improve navigation clarity, increase engagement, and support consistent course completion. As part of the design process, I also created low-fidelity wireframes to explore user flows, structure content hierarchy, and validate core interaction patterns early in the research phase. Teach Nexus features personalized learning paths, interactive lessons, progress tracking, and a clean, distraction-free interface designed to enhance the overall learning experience.",
    tags: ["User Research", "Design System", "App Designing"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    category: "User Research",
    caseStudyUrl: "https://www.figma.com/proto/K5CBcuiSl2FQ0uytckkhzI/E--Learning-App?node-id=1-125&t=rV8eBZqoJqfy1DsY-1",
  },
]

const filters: ProjectCategory[] = ["All", "User Research", "User Interface"]

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Get first ~250 characters for preview
  const previewLength = 250
  const previewText = project.description.substring(0, previewLength)
  const hasMore = project.description.length > previewLength

  // Highlight project name in description
  const highlightProjectName = (text: string) => {
    const parts = text.split(new RegExp(`(${project.projectName})`, 'gi'))
    return parts.map((part, i) => 
      part.toLowerCase() === project.projectName.toLowerCase() 
        ? <strong key={i} className="font-bold text-foreground">{part}</strong>
        : part
    )
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover-lift card-glow",
        isVisible ? `animate-fade-in-up` : "opacity-0"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--blue-light)]/10 to-[var(--blue-dark)]/10 border border-[var(--blue-accent)]/20 text-xs font-medium text-[var(--blue-dark)] dark:text-[var(--blue-light)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="text-muted-foreground text-sm leading-relaxed mb-4">
          {isExpanded ? (
            <p>{highlightProjectName(project.description)}</p>
          ) : (
            <p>
              {highlightProjectName(previewText)}
              {hasMore && "..."}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {hasMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[var(--blue-accent)]/50 transition-all duration-300"
            >
              {isExpanded ? (
                <>
                  See Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  See More
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </>
              )}
            </button>
          )}
          
          <a
            href={project.caseStudyUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--blue-accent)]/30 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            See Case Study
          </a>
        </div>
      </div>
    </div>
  )
}

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All")
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative px-6 py-24 sm:py-32 overflow-hidden bg-secondary/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[var(--blue-dark)] rounded-full blur-[140px] opacity-15" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--blue-light)] rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--blue-light)]/20 to-[var(--blue-dark)]/20 border border-[var(--blue-accent)]/30 text-sm font-medium text-[var(--blue-dark)] dark:text-[var(--blue-light)] mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
            Projects I Have <span className="gradient-text italic">Worked On</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my design journey through various industries and challenges.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter
                  ? "bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] text-white shadow-lg shadow-[var(--blue-accent)]/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-[var(--blue-accent)]/50"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
