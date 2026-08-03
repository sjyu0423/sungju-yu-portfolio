import { Hero } from "@/components/portfolio/hero"
import { BeyondVibeCodingBanner } from "@/components/portfolio/beyond-vibe-coding-banner"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <BeyondVibeCodingBanner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
