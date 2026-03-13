"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const craftItems = [
  {
    id: 1,
    title: "Design System Tokens",
    description: "A comprehensive guide to creating scalable design tokens",
    type: "Article",
    image: "/images/craft-tokens.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Figma Auto-Layout Patterns",
    description: "Advanced auto-layout techniques for complex interfaces",
    type: "Figma Plugin",
    image: "/images/craft-figma.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Accessibility Checklist",
    description: "Essential accessibility guidelines for designers",
    type: "Resource",
    image: "/images/craft-accessibility.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "Motion Design Principles",
    description: "Creating meaningful animations in product design",
    type: "Tutorial",
    image: "/images/craft-motion.jpg",
    href: "#",
  },
]

export function CraftSection() {
  return (
    <section className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 animate-fade-in-up">
          <p className="text-sm text-muted-foreground">Craft</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {craftItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary mb-4 img-zoom">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>

              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-sm group-hover:underline underline-offset-4">{item.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                <p className="text-xs text-muted-foreground">{item.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
