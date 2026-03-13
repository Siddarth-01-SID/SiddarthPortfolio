"use client"

import { Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

const links = [
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Read.cv", href: "#" },
]

export function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "hello@alexchen.design"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr]">
          {/* Left Column */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight tracking-tight">
              {"If you'd like to discuss a project or just say hi, I'm always open to chat."}
            </h2>

            <div className="pt-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 rounded-full border border-foreground bg-foreground text-background px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-foreground/90"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:text-right animate-fade-in-up stagger-1">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Email</p>
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 text-lg hover:text-muted-foreground transition-colors"
              >
                {email}
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Social</p>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-animate"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground animate-fade-in stagger-3">
          <p>Designed and built by Alex Chen</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
