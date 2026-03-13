"use client"

import { Dribbble, Github, Linkedin, Twitter } from "lucide-react"

const experience = [
  {
    period: "2023 — Present",
    role: "Senior Product Designer",
    company: "Vercel",
    description: "Leading design for developer tools and platform experiences, focusing on simplifying complex workflows.",
    skills: ["Product Design", "Design Systems", "Figma"],
  },
  {
    period: "2021 — 2023",
    role: "Product Designer",
    company: "Stripe",
    description: "Designed checkout flows and payment experiences used by millions of businesses worldwide.",
    skills: ["UI/UX", "Prototyping", "User Research"],
  },
  {
    period: "2019 — 2021",
    role: "UI/UX Designer",
    company: "Linear",
    description: "Contributed to building a fast, keyboard-first project management tool loved by engineering teams.",
    skills: ["Interface Design", "Motion Design", "React"],
  },
]

const socialLinks = [
  { label: "Dribbble", icon: Dribbble, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr,2fr]">
          {/* Left Column - About */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">About</p>

              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-foreground hover:text-foreground"
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Bio + Experience */}
          <div className="space-y-12">
            <div className="space-y-6 animate-fade-in-up stagger-1">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"I'm a product designer passionate about crafting digital experiences that are both beautiful and functional. My work lies at the intersection of design and technology, creating products that not only look great but are built for performance and usability."}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently at <span className="text-foreground font-medium">Vercel</span>, where I focus on developer tools and making complex workflows feel simple. Previously, I worked on payment experiences at Stripe and helped shape Linear into the tool engineering teams love.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"Outside of work, I enjoy exploring new coffee shops, reading about design history, and occasionally contributing to open-source projects."}
              </p>
            </div>

            <div className="space-y-6 animate-fade-in-up stagger-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Experience</p>

              <div className="space-y-0 divide-y divide-border">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="py-6 first:pt-0 last:pb-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="grid gap-4 sm:grid-cols-[140px,1fr]">
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium">{exp.role}</h4>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-secondary px-3 py-1 text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
