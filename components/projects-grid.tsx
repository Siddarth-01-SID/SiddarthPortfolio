"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Meridian Health",
    description: "Redesigning the patient experience for a modern healthcare platform",
    tags: ["Product Design", "Design System", "Mobile App"],
    image: "/images/project-meridian.jpg",
    href: "/projects/meridian",
    color: "bg-stone-100 dark:bg-stone-900",
  },
  {
    id: 2,
    title: "Flux Finance",
    description: "Building a seamless fintech experience for the next generation",
    tags: ["UI/UX Design", "Web Application", "Branding"],
    image: "/images/project-flux.jpg",
    href: "/projects/flux",
    color: "bg-amber-50 dark:bg-amber-950",
  },
  {
    id: 3,
    title: "Wanderlust Travel",
    description: "Creating memorable booking experiences for travelers worldwide",
    tags: ["Product Design", "User Research", "Prototyping"],
    image: "/images/project-wanderlust.jpg",
    href: "/projects/wanderlust",
    color: "bg-sky-50 dark:bg-sky-950",
  },
  {
    id: 4,
    title: "Archway Studio",
    description: "Crafting a portfolio platform for architects and designers",
    tags: ["Design System", "Web Design", "Development"],
    image: "/images/project-archway.jpg",
    href: "/projects/archway",
    color: "bg-neutral-100 dark:bg-neutral-900",
  },
]

export function ProjectsGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-2 animate-fade-in-up">
            <p className="text-sm text-muted-foreground">Selected work</p>
            <div className="flex items-center gap-4">
              <button className="text-sm text-foreground underline underline-offset-4">All</button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Branding</button>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up stagger-1">
            <button className="p-2 rounded-full border border-border hover:bg-secondary transition-colors">&larr;</button>
            <button className="p-2 rounded-full border border-border hover:bg-secondary transition-colors">&rarr;</button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.href}
              className={cn(
                "group relative overflow-hidden rounded-2xl animate-fade-in-up",
                project.color,
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">{project.description}</p>
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
