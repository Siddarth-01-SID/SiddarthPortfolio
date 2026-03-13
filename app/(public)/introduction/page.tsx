import { Dribbble, Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my design philosophy, experience, and approach to product design.",
}

const experience = [
  {
    period: "2023 — Present",
    role: "Senior Product Designer",
    company: "Vercel",
    companyUrl: "https://vercel.com",
    description: "Leading design for developer tools and platform experiences, focusing on simplifying complex workflows and creating intuitive interfaces.",
    skills: ["Product Design", "Design Systems", "Figma", "User Research"],
  },
  {
    period: "2021 — 2023",
    role: "Product Designer",
    company: "Stripe",
    companyUrl: "https://stripe.com",
    description: "Designed checkout flows and payment experiences used by millions of businesses worldwide. Led the redesign of the merchant dashboard.",
    skills: ["UI/UX", "Prototyping", "User Research", "A/B Testing"],
  },
  {
    period: "2019 — 2021",
    role: "UI/UX Designer",
    company: "Linear",
    companyUrl: "https://linear.app",
    description: "Contributed to building a fast, keyboard-first project management tool loved by engineering teams. Focused on interaction design and micro-animations.",
    skills: ["Interface Design", "Motion Design", "React", "CSS"],
  },
]

const socialLinks = [
  { label: "Dribbble", icon: Dribbble, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
]

export default function AboutPage() {
  return (
    <div className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm text-muted-foreground mb-4">About</p>
          <h1 className="text-4xl font-normal tracking-tight sm:text-5xl mb-8">
            Designing products that make a difference.
          </h1>
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

        {/* Content Grid */}
        <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr]">
          {/* Left - Photo placeholder */}
          <div className="animate-fade-in-up stagger-1">
            <div className="aspect-[4/5] rounded-2xl bg-secondary" />
          </div>

          {/* Right - Bio & Experience */}
          <div className="space-y-12">
            <div className="space-y-6 animate-fade-in-up stagger-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"I'm a product designer passionate about crafting digital experiences that are both beautiful and functional. My work lies at the intersection of design and technology, creating products that not only look great but are built for performance and usability."}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently at <span className="text-foreground font-medium">Vercel</span>, where I focus on developer tools and making complex workflows feel simple. Previously, I worked on payment experiences at Stripe and helped shape Linear into the tool engineering teams love.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"I believe great design is invisible—it gets out of the way and lets users accomplish their goals effortlessly. This philosophy guides every project I work on, from design systems to user interfaces."}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-6 animate-fade-in-up stagger-3">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Experience</p>

              <div className="space-y-0 divide-y divide-border">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="py-8 first:pt-0 last:pb-0"
                  >
                    <div className="grid gap-4 sm:grid-cols-[140px,1fr]">
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium">{exp.role}</h4>
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {exp.company}
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
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

            {/* Contact CTA */}
            <div className="pt-8 border-t border-border animate-fade-in-up stagger-4">
              <a
                href="mailto:hello@alexchen.design"
                className="inline-flex items-center gap-3 rounded-full border border-foreground bg-foreground text-background px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-foreground/90"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
