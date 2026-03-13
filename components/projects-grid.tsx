"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectCategory = "All" | "User Research" | "User Interface"

const projects = [
  {
    id: 1,
    title: "Meridian Health",
    description: "Redesigning the patient experience for a modern healthcare platform",
    tags: ["Product Design", "Design System", "Mobile App"],
    image: "/images/project-meridian.jpg",
    category: "User Interface" as ProjectCategory,
  },
  {
    id: 2,
    title: "Flux Finance",
    description: "Building a seamless fintech experience for the next generation",
    tags: ["UI/UX Design", "Web Application", "Branding"],
    image: "/images/project-flux.jpg",
    category: "User Interface" as ProjectCategory,
  },
  {
    id: 3,
    title: "Wanderlust Travel",
    description: "Creating memorable booking experiences for travelers worldwide",
    tags: ["Product Design", "User Research", "Prototyping"],
    image: "/images/project-wanderlust.jpg",
    category: "User Research" as ProjectCategory,
  },
  {
    id: 4,
    title: "Archway Studio",
    description: "Crafting a portfolio platform for architects and designers",
    tags: ["Design System", "Web Design", "Development"],
    image: "/images/project-archway.jpg",
    category: "User Interface" as ProjectCategory,
  },
]

const filters: ProjectCategory[] = ["All", "User Research", "User Interface"]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover-lift card-glow",
                isVisible ? `animate-fade-in-up stagger-${index + 2}` : "opacity-0"
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden img-zoom">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="px-6 py-3 rounded-full bg-white text-[var(--blue-dark)] font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
