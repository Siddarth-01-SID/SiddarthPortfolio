import { ProjectsPageContent } from "@/components/public/projects/projects-page-content"
import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work showcasing product design, UI/UX, and design systems across various industries.",
  keywords: ["portfolio", "projects", "product design", "UI/UX", "case studies"],
  openGraph: {
    title: "Projects — Alex Chen",
    description: "Selected work showcasing product design, UI/UX, and design systems.",
    url: `${baseUrl}/projects`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsPageContent />
    </div>
  )
}
