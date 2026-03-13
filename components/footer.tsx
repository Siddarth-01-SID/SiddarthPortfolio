"use client"

import { Heart, Linkedin, Dribbble, Instagram, Twitter } from "lucide-react"

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Dribbble", icon: Dribbble, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative px-6 py-12 border-t border-border/50 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-dark)]/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-[var(--blue-accent)] hover:text-[var(--blue-accent)] hover:scale-110"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Back to top</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Credits */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Designed and Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
              <span className="gradient-text font-medium">Siddarth Sharma</span>
            </p>
            <p className="text-xs text-muted-foreground/60">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
