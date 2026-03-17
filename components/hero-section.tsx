"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--blue-light)] rounded-full blur-[120px] opacity-30 animate-float-orb" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[var(--blue-dark)] rounded-full blur-[150px] opacity-25 animate-float-orb-reverse" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[var(--blue-accent)] rounded-full blur-[130px] opacity-20 animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[var(--blue-light)] rounded-full blur-[100px] opacity-15 animate-float-orb" style={{ animationDelay: "5s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--blue-light)]/20 to-[var(--blue-dark)]/20 border border-[var(--blue-accent)]/30 text-sm font-medium text-[var(--blue-dark)] dark:text-[var(--blue-light)] mb-6">
                UI/UX & Product Designer
              </span>
            </div>

            <h1 className="animate-fade-in-up stagger-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-6">
              <span className="text-muted-foreground">Hello, I{"'"}m</span>
              <br />
              <span className="gradient-text font-semibold italic">Siddarth Sharma</span>
            </h1>

            <p className="animate-fade-in-up stagger-2 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Creating intuitive and beautiful digital experiences that put users first. I transform complex problems into elegant, user-friendly solutions.
            </p>

            <div className="animate-fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--blue-accent)]/30 hover:scale-105"
              >
                View My Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:sidh.sharma2001@gmail.com?subject=Let's Work Together&body=Hi Siddarth,%0D%0A%0D%0AI'd love to discuss a potential project with you.%0D%0A%0D%0ABest regards"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--blue-accent)]/50 text-foreground font-medium transition-all duration-300 hover:bg-[var(--blue-accent)]/10 hover:border-[var(--blue-accent)]"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up stagger-4 flex flex-wrap gap-8 justify-center lg:justify-start mt-12 pt-12 border-t border-border/50">
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-bold gradient-text">2+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-bold gradient-text">13+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-bold gradient-text">10+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in stagger-2">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[var(--blue-light)]/30 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute -inset-8 rounded-full border-2 border-dashed border-[var(--blue-dark)]/20 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
              
              {/* Gradient glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-light)] to-[var(--blue-dark)] rounded-full blur-2xl opacity-40 scale-110" />
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/50 dark:border-white/20 shadow-2xl">
                <Image
                  src="/images/siddarth-sharma.jpg"
                  alt="Siddarth Sharma - UI/UX Designer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-full shadow-lg animate-bounce-subtle">
                <span className="text-sm font-medium">Figma Expert</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-full shadow-lg animate-bounce-subtle" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-medium">UI/UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in stagger-5"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
