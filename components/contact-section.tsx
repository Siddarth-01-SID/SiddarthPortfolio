"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Send, Sparkles } from "lucide-react"

// Custom SVG Icons for social media
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/siddarth-sharma-854092241/",
    icon: LinkedInIcon,
    color: "hover:text-[#0A66C2]"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_sidd__01/",
    icon: InstagramIcon,
    color: "hover:text-[#E4405F]"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sidh.sharma2001/",
    icon: FacebookIcon,
    color: "hover:text-[#1877F2]"
  }
]

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

        {/* Social Links */}
        <div className={`mt-12 ${isVisible ? "animate-fade-in-up stagger-5" : "opacity-0"}`}>
          <p className="text-sm text-muted-foreground mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-card border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-[var(--blue-accent)]/50 ${social.color}`}
                aria-label={`Follow on ${social.name}`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
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
