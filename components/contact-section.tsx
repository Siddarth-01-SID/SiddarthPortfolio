"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Send, Sparkles } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleEmailClick = () => {
    window.location.href = "mailto:sidh.sharma2001@gmail.com?subject=Let's Work Together&body=Hi Siddarth,%0D%0A%0D%0AI'd love to discuss a potential project with you.%0D%0A%0D%0ABest regards"
  }

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative px-6 py-24 sm:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] rounded-full blur-[200px] opacity-20 animate-pulse-glow" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--blue-accent)] rounded-full blur-[100px] opacity-15 animate-float-orb" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[var(--blue-light)] rounded-full blur-[120px] opacity-15 animate-float-orb-reverse" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce-subtle" style={{ animationDelay: "0s" }}>
          <Sparkles className="w-6 h-6 text-[var(--blue-light)] opacity-40" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-bounce-subtle" style={{ animationDelay: "0.5s" }}>
          <Sparkles className="w-4 h-4 text-[var(--blue-accent)] opacity-30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce-subtle" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-5 h-5 text-[var(--blue-dark)] opacity-35" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-bounce-subtle" style={{ animationDelay: "1.5s" }}>
          <Sparkles className="w-6 h-6 text-[var(--blue-light)] opacity-40" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Section Badge */}
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--blue-light)]/20 to-[var(--blue-dark)]/20 border border-[var(--blue-accent)]/30 text-sm font-medium text-[var(--blue-dark)] dark:text-[var(--blue-light)] mb-6">
            <Mail className="w-4 h-4" />
            Get In Touch
          </span>
        </div>

        {/* Main Heading */}
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif mb-8 ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}>
          Let{"'"}s <span className="gradient-text italic">Work Together</span>
        </h2>

        {/* Quote */}
        <p className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}>
          {"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}
        </p>

        {/* CTA Button */}
        <div className={`${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}>
          <button
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] text-white text-lg font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--blue-accent)]/40 hover:scale-105 overflow-hidden"
          >
            {/* Button shimmer effect */}
            <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100" />
            
            <span className="relative flex items-center gap-3">
              <Send className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Say Hello
            </span>
          </button>
        </div>

        {/* Email Display */}
        <div className={`mt-8 ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}>
          <a 
            href="mailto:sidh.sharma2001@gmail.com" 
            className="text-muted-foreground hover:text-foreground transition-colors underline-animate"
          >
            sidh.sharma2001@gmail.com
          </a>
        </div>

        {/* Social Proof / Stats */}
        <div className={`mt-16 pt-16 border-t border-border/50 ${isVisible ? "animate-fade-in-up stagger-5" : "opacity-0"}`}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <span className="block text-3xl font-bold gradient-text">24h</span>
              <span className="text-sm text-muted-foreground">Response Time</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold gradient-text">100%</span>
              <span className="text-sm text-muted-foreground">Client Satisfaction</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold gradient-text">Open</span>
              <span className="text-sm text-muted-foreground">For Freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
