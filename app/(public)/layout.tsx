import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="relative min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
