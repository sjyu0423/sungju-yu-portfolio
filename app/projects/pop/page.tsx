import type { Metadata } from "next"
import Link from "next/link"
import type { SVGProps } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  Smartphone,
  Radio,
  ImageIcon,
} from "lucide-react"

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "pop — Case Study | SungJu Yu",
  description:
    "A cross-platform mobile social application built for spontaneous moment sharing and real-time interaction.",
}

const STACK = ["Flutter", "Dart", "Supabase", "PostgreSQL"] as const

const CHALLENGES = [
  {
    title: "Cross-Platform UI Architecture",
    icon: Smartphone,
    body: "Designed and built a clean, reactive mobile interface in Flutter and Dart. Focused on smooth 60fps animations, custom gesture controls, and adaptive layouts that feel native on both iOS and Android.",
  },
  {
    title: "Real-Time Backend & Supabase Subscriptions",
    icon: Radio,
    body: "Leveraged Supabase real-time WebSocket listeners and PostgreSQL Row Level Security (RLS). This allowed live streaming of social interactions and feed updates without expensive polling or server overhead.",
  },
  {
    title: "State Management & Media Optimization",
    icon: ImageIcon,
    body: "Implemented robust state management to handle media capture flows seamlessly. Optimized image compression and client-side caching to ensure quick feed renders even on low-bandwidth mobile networks.",
  },
] as const

export default function PopCaseStudyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
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
            Back to Projects
          </Link>

          <p className="mt-10 font-mono text-sm text-primary">{"// case study — pop"}</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            pop
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            A cross-platform mobile social application built for spontaneous moment sharing and
            real-time interaction.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <GithubIcon className="size-4" />
              View GitHub
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-transparent px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-900"
            >
              Live Demo / APK
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <dl className="mt-10 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Role
              </dt>
              <dd className="mt-2 font-mono text-sm text-foreground">
                Mobile Application Engineer
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {STACK.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-800 bg-zinc-900/80 px-3 py-1 font-mono text-xs text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="relative mt-12 flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-zinc-900/80 to-zinc-950 p-8 shadow-[0_0_80px_-20px_rgba(16,185,129,0.25)] sm:min-h-[520px] sm:p-12">
            <div className="relative z-[1] w-full max-w-sm overflow-hidden rounded-[2rem] border border-zinc-700 bg-zinc-950 shadow-2xl ring-1 ring-white/5">
              <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-zinc-800" />
              <img
                src="/projects/pop.png"
                alt="pop mobile app interface — stories feed and social timeline"
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl md:p-8">
            <p className="font-mono text-sm text-primary">{"// the problem"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">The Problem</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Traditional social networks focus on overly curated, delayed posts. This creates
              bloated feeds and removes the authentic, spontaneous feeling of sharing everyday
              moments with close friends.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl md:p-8">
            <p className="font-mono text-sm text-primary">{"// the solution"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">The Solution</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I engineered &apos;pop&apos;, a fluid cross-platform mobile app built with Flutter. By
              pairing a fast, responsive UI with real-time Supabase listeners, users can capture,
              share, and interact with spontaneous fleeting moments instantly.
            </p>
          </article>
        </div>
      </section>

      {/* Engineering Challenges — Bento */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-sm text-primary">{"// architecture"}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Engineering Challenges
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Shipping a native-feeling social app meant solving UI performance, live backend sync,
            and media-heavy mobile constraints in one coherent stack.
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

      {/* Back to Projects */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex justify-center border-t border-zinc-800 pt-10">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
