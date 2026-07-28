import { ArrowUpRight } from "lucide-react"

type Project = {
  name: string
  tagline: string
  description: string
  tags: string[]
  image: string
  href: string
}

const PROJECTS: Project[] = [
  {
    name: "MacroLens",
    tagline: "AI-Powered Macro Tracker",
    description:
      "A progressive web app that uses computer vision and LLMs to analyze meals from a single photo and instantly log calories and macronutrients.",
    tags: ["PWA", "Next.js", "OpenAI", "Supabase"],
    image: "/projects/macrolens.png",
    href: "#",
  },
  {
    name: "pop",
    tagline: "Mobile Social App",
    description:
      "A cross-platform social app for sharing spontaneous moments with close friends, built with a real-time backend and native-feeling UI.",
    tags: ["Flutter", "Supabase"],
    image: "/projects/pop.png",
    href: "#",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`${project.name} — ${project.tagline}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-1 font-mono text-sm text-primary">{project.tagline}</p>
          </div>
          <span className="rounded-full border border-border p-2 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}

export function Projects() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-sm text-primary">{"// 02 — selected work"}</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Projects I&apos;m proud of.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
