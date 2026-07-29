import { ArrowUpRight } from "lucide-react"

const PROJECT = {
  name: "MacroLens",
  tagline: "AI-Powered Macro Tracker",
  description:
    "An AI-powered macro tracker built to eliminate the headache of manually logging meals. Instead of searching databases, you can just snap a photo or speak your food, and the app uses GPT-4o-mini to instantly calculate your exact macros. I engineered it with a secure serverless backend, real-time cloud syncing, and a smart history feature that remembers your go-to meals.",
  tags: ["React", "Vite", "OpenAI", "Supabase", "Vercel Serverless", "PWA"],
  image: "/projects/macrolens-placeholder.png",
  href: "/projects/macrolens",
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

        <a
          href={PROJECT.href}
          className="group mt-10 grid overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60 md:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {PROJECT.name}
                </h3>
                <p className="mt-1 font-mono text-sm text-primary">{PROJECT.tagline}</p>
              </div>
              <span className="rounded-full border border-border p-2 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                <ArrowUpRight className="size-4" />
              </span>
            </div>

            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:mt-6">
              {PROJECT.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 md:mt-8">
              {PROJECT.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[280px] overflow-hidden bg-secondary md:min-h-full">
            <img
              src={PROJECT.image}
              alt={`${PROJECT.name} — dark-mode phone mockup`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
