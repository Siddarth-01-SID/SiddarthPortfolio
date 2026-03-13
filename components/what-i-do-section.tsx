"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Palette, 
  Search, 
  Layers, 
  PenTool, 
  Smartphone, 
  Globe 
} from "lucide-react"

const skills = [
  {
    icon: Palette,
    title: "User Interface",
    description: "Crafting visually stunning and intuitive interfaces that delight users and enhance brand identity.",
  },
  {
    icon: Search,
    title: "User Research",
    description: "Deep diving into user behavior to uncover insights that drive meaningful design decisions.",
  },
  {
    icon: Layers,
    title: "Prototyping",
    description: "Building interactive prototypes to validate ideas and communicate design intent effectively.",
  },
  {
    icon: PenTool,
    title: "Wireframing",
    description: "Creating structured blueprints that establish the foundation for seamless user experiences.",
  },
  {
    icon: Smartphone,
    title: "Apps Designing",
    description: "Designing mobile applications with pixel-perfect attention and native platform guidelines.",
  },
  {
    icon: Globe,
    title: "Website Designing",
    description: "Building responsive, accessible websites that work beautifully across all devices.",
  },
]

export function WhatIDoSection() {
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
      className="relative px-6 py-24 sm:py-32 overflow-hidden bg-secondary/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--blue-light)] rounded-full blur-[120px] opacity-15" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--blue-dark)] rounded-full blur-[130px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--blue-light)]/20 to-[var(--blue-dark)]/20 border border-[var(--blue-accent)]/30 text-sm font-medium text-[var(--blue-dark)] dark:text-[var(--blue-light)] mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
            What I <span className="gradient-text italic">Do</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences through design thinking and creative problem-solving.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group relative p-8 bg-card border border-border rounded-2xl transition-all duration-500 hover-lift card-glow ${
                isVisible ? `animate-fade-in-up stagger-${index + 1}` : "opacity-0"
              }`}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--blue-light)]/20 to-[var(--blue-dark)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-[var(--blue-dark)] dark:text-[var(--blue-light)]" />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--blue-light)] to-[var(--blue-dark)] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[var(--blue-accent)]/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
