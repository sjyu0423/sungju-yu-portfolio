import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Play,
  Shield,
  Layers,
  Database,
} from "lucide-react"

export const metadata: Metadata = {
  title: "MacroLens — Case Study | SungJu Yu",
  description:
    "AI-native Progressive Web App for frictionless macro tracking. Engineering deep-dive into serverless security, multimodal orchestration, and Supabase data design.",
}

const STACK = ["React", "Serverless", "Supabase", "OpenAI"] as const

const CHALLENGES = [
  {
    title: "Serverless Security Proxy",
    icon: Shield,
    body: "OpenAI keys never leave the server. Client requests hit a Vercel Serverless function that validates the session, injects credentials, and forwards multimodal payloads to the model — keeping secrets out of the browser while still delivering low-latency inference.",
  },
  {
    title: "Multimodal State Orchestration",
    icon: Layers,
    body: "Photo and voice inputs are normalized into one prompt pipeline. Base64 image frames from the camera merge with transcript text from the Voice API, then ship as a single structured request so GPT-4o-mini can estimate macros from either modality — or both at once.",
  },
  {
    title: "Supabase & Data Deduplication",
    icon: Database,
    body: "Daily nutrition lives in chronological daily_logs. Recurring meals are deduplicated into a quick-add history so familiar foods resurface without re-running AI — cutting cost, latency, and friction for the meals you log every week.",
  },
] as const

export default function MacroLensCaseStudyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>

          <p className="mt-10 font-mono text-sm text-primary">{"// case study — macrolens"}</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            MacroLens
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            AI-native Progressive Web App for frictionless macro tracking.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Live Demo
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://github.com/sjyu0423"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </div>

          <dl className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {STACK.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Platform
              </dt>
              <dd className="mt-2 font-mono text-sm text-foreground">Web / iOS PWA</dd>
            </div>
          </dl>

          <div className="relative mt-12 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl">
            <div className="aspect-[16/10] w-full bg-secondary">
              <img
                src="/projects/macrolens-placeholder.png"
                alt="MacroLens app mockup on a floating phone"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl md:p-8">
            <p className="font-mono text-sm text-primary">{"// the problem"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">The Problem</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Traditional macro trackers make logging feel like chores. Every meal means hunting
              through food databases, scanning barcodes that half the time don&apos;t resolve, and
              manually splitting portions — friction that kills consistency for anyone trying to
              stay consistent day after day.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl md:p-8">
            <p className="font-mono text-sm text-primary">{"// the solution"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">The Solution</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              MacroLens replaces search with multimodal AI. Snap a photo of your plate or speak
              what you ate — the app parses vision and voice into structured macros instantly, so
              logging takes seconds instead of minutes and the habit actually sticks.
            </p>
          </article>
        </div>
      </section>

      {/* Engineering Challenges — Bento */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-sm text-primary">{"// architecture"}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Engineering Challenges
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Shipping AI meal logging meant solving security, multimodal prompting, and data hygiene
            without bloating the client.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {CHALLENGES.map(({ title, icon: Icon, body }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/60 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video / Demo */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-sm text-primary">{"// walkthrough"}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Product Demo
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A short walkthrough of logging a meal with camera and voice — coming soon.
          </p>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_center,rgba(39,39,42,0.9),transparent_70%)]">
              <div className="flex size-16 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 text-muted-foreground">
                <Play className="size-7 fill-current" />
              </div>
              <p className="font-mono text-sm text-muted-foreground">YouTube walkthrough placeholder</p>
              <p className="max-w-sm px-6 text-center text-xs text-muted-foreground/80">
                Embed a 16:9 YouTube video here when the demo is ready.
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-center border-t border-border pt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
