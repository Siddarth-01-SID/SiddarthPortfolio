"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Meridian Health",
    description: "Redesigning the patient experience for a modern healthcare platform. Led end-to-end design from research to implementation.",
    tags: ["Product Design", "Design System", "Mobile App", "User Research"],
    year: "2024",
    image: "/images/project-meridian.jpg",
    color: "bg-stone-100 dark:bg-stone-900",
  },
  {
    id: 2,
    title: "Flux Finance",
    description: "Building a seamless fintech experience for the next generation. Created a comprehensive design system and mobile-first interface.",
    tags: ["UI/UX Design", "Web Application", "Branding", "Design System"],
    year: "2024",
    image: "/images/project-flux.jpg",
    color: "bg-amber-50 dark:bg-amber-950",
  },
  {
    id: 3,
    title: "Wanderlust Travel",
    description: "Creating memorable booking experiences for travelers worldwide. Focused on reducing friction in the booking flow.",
    tags: ["Product Design", "User Research", "Prototyping"],
    year: "2023",
    image: "/images/project-wanderlust.jpg",
    color: "bg-sky-50 dark:bg-sky-950",
  },
  {
    id: 4,
    title: "Archway Studio",
    description: "Crafting a portfolio platform for architects and designers. Built a flexible component system for creative portfolios.",
    tags: ["Design System", "Web Design", "Development"],
    year: "2023",
    image: "/images/project-archway.jpg",
    color: "bg-neutral-100 dark:bg-neutral-900",
  },
]

export function ProjectsPageContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className={cn("mb-16 space-y-4 max-w-2xl opacity-0", isVisible && "animate-fade-in-up")}>
          <p className="text-sm text-muted-foreground">Selected Work</p>
          <h1 className="text-4xl font-normal tracking-tight sm:text-5xl">
            Case studies and projects showcasing my design process.
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl opacity-0",
                project.color,
                isVisible && "animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background/60 backdrop-blur-sm px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-xl img-zoom">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
