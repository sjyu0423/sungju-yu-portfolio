import { ArrowUpRight } from "lucide-react"
import { WorldCupCardDashboard } from "@/components/portfolio/world-cup-simulation-viz"

const MACROLENS = {
  name: "MacroLens",
  tagline: "AI-Powered Macro Tracker",
  description:
    "An AI-native Progressive Web App for frictionless macro tracking. Snap a photo or speak your meal and GPT-4o-mini calculates macros instantly — routed through a secure Vercel Serverless proxy so API keys never hit the client, with real-time Supabase cloud sync keeping daily logs and targets consistent across devices.",
  tags: ["React", "Vite", "OpenAI", "Supabase", "Vercel Serverless", "PWA"],
  image: "/projects/macrolens-placeholder.png",
  href: "/projects/macrolens",
}

const WORLD_CUP = {
  name: "World Cup ML Predictor",
  tagline: "Machine Learning & Data Analysis",
  description:
    "Engineered a machine learning model and automated tournament simulator for the 2022 FIFA World Cup. Handled feature engineering, model training, and combinatorial bracket progression.",
  tags: ["Python", "Machine Learning", "Scikit-Learn", "Academic"],
  href: "/projects/world-cup-ml",
}

type AcademicProject = {
  name: string
  tagline: string
  description: string
  tags: string[]
  image?: string
  href: string
}

const POP_PROJECT: AcademicProject = {
  name: "pop",
  tagline: "Mobile Social App",
  description:
    "A cross-platform mobile application developed as part of university coursework. Built with Flutter and a real-time Supabase backend to enable spontaneous moment sharing.",
  tags: ["Flutter", "Supabase", "Dart", "Academic"],
  image: "/projects/pop-hero-photo.png",
  href: "/projects/pop",
}

function AcademicCard({ project }: { project: AcademicProject }) {
  return (
    <a
      href={project.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-xl transition-colors hover:border-primary/60"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} — ${project.tagline}`}
          className="h-48 w-full rounded-t-2xl object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] md:h-64"
        />
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold tracking-tight">{project.name}</h4>
            <p className="mt-1 font-mono text-sm text-primary">{project.tagline}</p>
          </div>
          <span className="rounded-full border border-zinc-800 p-2 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-1 font-mono text-xs text-zinc-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}

function WorldCupProjectCard() {
  return (
    <a
      href={WORLD_CUP.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-xl transition-colors hover:border-emerald-500/40"
    >
      <WorldCupCardDashboard />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold tracking-tight">{WORLD_CUP.name}</h4>
            <p className="mt-1 font-mono text-sm text-primary">{WORLD_CUP.tagline}</p>
          </div>
          <span className="rounded-full border border-zinc-800 p-2 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
          {WORLD_CUP.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {WORLD_CUP.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-1 font-mono text-xs text-zinc-300"
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
            Projects
          </h2>
        </div>

        {/* Personal Projects */}
        <div className="mt-10">
          <h3 className="mb-6 text-xl font-semibold text-zinc-100">Personal Projects</h3>

          <a
            href={MACROLENS.href}
            className="group grid overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-xl transition-colors hover:border-primary/60 md:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {MACROLENS.name}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-primary">{MACROLENS.tagline}</p>
                </div>
                <span className="rounded-full border border-zinc-800 p-2 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:mt-6">
                {MACROLENS.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2 md:mt-8">
                {MACROLENS.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[280px] overflow-hidden bg-zinc-950 md:min-h-full">
              <img
                src={MACROLENS.image}
                alt={`${MACROLENS.name} — dark-mode phone mockup`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </a>
        </div>

        {/* Academic Projects */}
        <div>
          <h3 className="mb-6 mt-16 text-xl font-semibold text-zinc-100">
            Academic &amp; Coursework
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AcademicCard project={POP_PROJECT} />
            <WorldCupProjectCard />
          </div>
        </div>
      </div>
    </section>
  )
}
