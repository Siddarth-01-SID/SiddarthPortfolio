"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [greeting, setGreeting] = useState("Good morning")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning")
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon")
    } else {
      setGreeting("Good evening")
    }
  }, [])

  return (
    <section className="px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm text-muted-foreground animate-fade-in">{greeting}</p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight animate-fade-in-up stagger-1">
            {"I'm a product designer focused on crafting thoughtful, user-centered experiences. While design is my primary focus, I regularly collaborate with engineers to bring ideas to life."}
          </h1>

          <div className="pt-4 animate-fade-in-up stagger-2">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-all duration-300 hover:bg-secondary hover:border-foreground/20"
            >
              About me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
