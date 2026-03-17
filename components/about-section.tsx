"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Download } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative px-6 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--blue-light)] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[var(--blue-dark)] rounded-full blur-[130px] opacity-15" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--blue-light)]/20 to-[var(--blue-dark)]/20 border border-[var(--blue-accent)]/30 text-sm font-medium text-[var(--blue-dark)] dark:text-[var(--blue-light)] mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
            Get to Know <span className="gradient-text italic">Me Better</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Left Column - Description */}
          <div className={`space-y-6 order-2 lg:order-1 ${isVisible ? "animate-slide-in-left stagger-2" : "opacity-0"}`}>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I{"'"}m <span className="text-foreground font-semibold">Siddarth Sharma</span>, a passionate UI/UX and Product Designer dedicated to crafting thoughtful, intuitive, and visually engaging digital experiences. My work is rooted in empathy, understanding user needs, and transforming ideas into meaningful solutions that balance aesthetics with functionality.
              </p>
              <p>
                I believe great design isn{"'"}t just beautiful—it solves problems, removes friction, and feels effortless. From research and competitive analysis to user flows, wireframes, prototypes, and high-fidelity interfaces, I focus on creating seamless end-to-end experiences.
              </p>
              <p>
                Whether it{"'"}s designing mobile apps, responsive websites, or product systems, I approach every project with curiosity, clarity, and an attention to detail. I enjoy bringing ideas to life through clean layouts, strategic interaction patterns, and consistent design systems that elevate usability while expressing brand identity.
              </p>
              <p className="text-foreground font-medium">
                My goal is to design products that people love using—not just because they look great, but because they feel natural, purposeful, and human.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--blue-accent)]/30 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download CV
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right Column - Photo with flip animation */}
          <div className={`flex justify-center lg:justify-start perspective-1000 order-1 lg:order-2 ${isVisible ? "animate-flip-in-right stagger-3" : "opacity-0"}`}>
            <div className="relative preserve-3d">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--blue-light)] to-[var(--blue-dark)] rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[var(--blue-accent)]/30 rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[var(--blue-light)]/30 rounded-2xl" />
              
              {/* Main Image */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/images/siddarth-sharma.jpg"
                  alt="Siddarth Sharma"
                  fill
                  className="object-cover object-top"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-dark)]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 left-8 px-4 py-2 bg-card border border-border rounded-lg shadow-lg animate-bounce-subtle">
                <span className="text-sm font-medium gradient-text">UI UX & Product Designer</span>
              </div>
              <div className="absolute -bottom-4 right-8 px-4 py-2 bg-card border border-border rounded-lg shadow-lg animate-bounce-subtle" style={{ animationDelay: "0.5s" }}>
                <span className="text-sm font-medium gradient-text">2+ Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
