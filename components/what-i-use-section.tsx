"use client"

import { useEffect, useRef, useState } from "react"

const tools = [
  {
    name: "Figma",
    description: "My primary design tool for creating interfaces, prototypes, and design systems.",
    icon: (
      <svg viewBox="0 0 38 57" fill="none" className="w-8 h-8">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: "Sketch",
    description: "Vector-based design tool for crafting pixel-perfect icons and illustrations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2L2 9L12 22L22 9L12 2Z" fill="#FDB300"/>
        <path d="M12 2L2 9H22L12 2Z" fill="#EA6C00"/>
        <path d="M12 22L2 9H22L12 22Z" fill="#FDAD00"/>
      </svg>
    ),
  },
  {
    name: "Framer",
    description: "Creating interactive prototypes and production-ready components.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-foreground">
        <path d="M4 0H24V8H14L4 0ZM4 8H14L24 16H4V8ZM4 16H14V24L4 16Z"/>
      </svg>
    ),
  },
  {
    name: "Adobe Illustrator",
    description: "Vector graphics and illustrations for branding and marketing assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#330000"/>
        <path d="M13.5 16.5H10.5L9.75 19H7.5L11 6H13L16.5 19H14.25L13.5 16.5ZM11 14.5H13L12 10.5L11 14.5Z" fill="#FF9A00"/>
        <path d="M18 9V8H16V9H17V13H16V14H19V13H18V9Z" fill="#FF9A00"/>
      </svg>
    ),
  },
  {
    name: "Adobe Photoshop",
    description: "Photo editing and manipulation for creating stunning visual content.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#001E36"/>
        <path d="M7 17V7H10.5C11.6 7 12.5 7.3 13.1 7.9C13.7 8.5 14 9.3 14 10.3C14 11.3 13.7 12.1 13.1 12.7C12.5 13.3 11.6 13.6 10.5 13.6H9V17H7ZM9 11.8H10.3C10.8 11.8 11.2 11.7 11.5 11.4C11.8 11.1 11.9 10.8 11.9 10.3C11.9 9.8 11.8 9.5 11.5 9.2C11.2 8.9 10.8 8.8 10.3 8.8H9V11.8Z" fill="#31A8FF"/>
        <path d="M15 14.5C15.3 14.8 15.7 15 16.2 15.2C16.7 15.4 17.2 15.5 17.7 15.5C18.5 15.5 18.9 15.3 18.9 14.8C18.9 14.6 18.8 14.4 18.5 14.3C18.2 14.2 17.8 14.1 17.3 14C16.7 13.9 16.2 13.7 15.8 13.5C15.4 13.3 15.1 13 14.9 12.7C14.7 12.4 14.6 12 14.6 11.5C14.6 10.8 14.9 10.2 15.5 9.8C16.1 9.4 16.9 9.2 17.8 9.2C18.4 9.2 18.9 9.3 19.4 9.4C19.9 9.5 20.3 9.7 20.6 9.9L19.8 11.3C19.3 10.9 18.6 10.7 17.8 10.7C17.1 10.7 16.7 10.9 16.7 11.3C16.7 11.5 16.8 11.7 17.1 11.8C17.4 11.9 17.8 12 18.4 12.1C19 12.2 19.5 12.4 19.9 12.6C20.3 12.8 20.6 13.1 20.8 13.4C21 13.7 21.1 14.1 21.1 14.6C21.1 15.3 20.8 15.9 20.2 16.3C19.6 16.7 18.7 16.9 17.7 16.9C17 16.9 16.4 16.8 15.8 16.6C15.2 16.4 14.7 16.2 14.3 15.9L15 14.5Z" fill="#31A8FF"/>
      </svg>
    ),
  },
  {
    name: "Adobe Lightroom",
    description: "Professional photo editing and color grading for visual storytelling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#001E36"/>
        <path d="M6 17V7H8V15H12V17H6Z" fill="#31A8FF"/>
        <path d="M13 17V10H15V11C15.2 10.7 15.5 10.4 15.9 10.2C16.3 10 16.7 9.9 17.2 9.9V12C17.1 12 17 12 16.9 12C16.4 12 16 12.1 15.7 12.4C15.4 12.7 15.2 13.1 15.2 13.6V17H13Z" fill="#31A8FF"/>
      </svg>
    ),
  },
]

export function WhatIUseSection() {
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

  return (
    <section 
      ref={sectionRef}
      className="relative px-6 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[var(--blue-accent)] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-[var(--blue-light)] rounded-full blur-[120px] opacity-15" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--blue-light)]/20 to-[var(--blue-dark)]/20 border border-[var(--blue-accent)]/30 text-sm font-medium text-[var(--blue-dark)] dark:text-[var(--blue-light)] mb-4">
            Tools & Software
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
            What I <span className="gradient-text italic">Use</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The industry-standard tools I leverage to bring creative visions to life.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group relative p-8 bg-card border border-border rounded-2xl transition-all duration-500 hover-lift card-glow ${
                isVisible ? `animate-fade-in-up stagger-${index + 1}` : "opacity-0"
              }`}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--blue-accent)]/50 transition-all duration-300">
                  {tool.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                {tool.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {tool.description}
              </p>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
