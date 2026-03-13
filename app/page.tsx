import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhatIDoSection } from "@/components/what-i-do-section"
import { WhatIUseSection } from "@/components/what-i-use-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <WhatIUseSection />
      <ProjectsGrid />
      <ContactSection />
      <Footer />
    </main>
  )
}
