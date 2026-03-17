"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "#hero", isContact: false },
  { label: "About", href: "#about", isContact: false },
  { label: "Projects", href: "#projects", isContact: false },
  { label: "Contact", href: "#contact", isContact: true },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "glass border-b border-border/50 shadow-lg shadow-primary/5" 
          : "bg-transparent",
      )}
    >
      {/* Blue gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--blue-light)] via-[var(--blue-accent)] to-[var(--blue-dark)]" />
      
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2 flex-shrink-0">
            <span className="text-base sm:text-lg lg:text-xl font-serif font-medium text-foreground whitespace-nowrap">
              Siddarth Sharma
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-hover text-sm font-medium text-muted-foreground px-2 py-1"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-accent"
              aria-label="Toggle menu"
            >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={cn(
                  "h-0.5 bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] transition-all duration-300 origin-center rounded-full",
                  isMobileMenuOpen ? "w-5 translate-y-2 rotate-45" : "w-5",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-4 bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] transition-all duration-300 rounded-full",
                  isMobileMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 bg-gradient-to-r from-[var(--blue-light)] to-[var(--blue-dark)] transition-all duration-300 origin-center rounded-full",
                  isMobileMenuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5",
                )}
              />
            </div>
          </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-400 md:hidden rounded-2xl mt-2",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "nav-hover text-lg font-medium text-muted-foreground py-2 animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
