import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  MessageSquare,
  MapPin,
  Bell,
  Camera,
  Users,
  MessagesSquare,
  Layers,
  Play,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Pop — Case Study | SungJu Yu",
  description:
    "A real-time social activity platform engineered for spontaneous meetups, location-based event discovery, and automated group coordination.",
}

const STACK = ["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Maps API"] as const

const CHALLENGES = [
  {
    title: "Automated Event-Driven Chat Architecture",
    icon: MessageSquare,
    body: "Engineered an event-triggered messaging system. When a user RSVPs 'Going' on an activity, a backend trigger instantly subscribes them to that event's dedicated chat room, eliminating the manual overhead of creating and inviting people to group threads.",
  },
  {
    title: "Location-Aware Mapping & Privacy Controls",
    icon: MapPin,
    body: "Integrated map pin search and current location queries to attach geolocation data to posts. Built granular privacy toggles allowing users to scope activities between a private Friends Feed and a public World Discover Feed.",
  },
  {
    title: "Real-Time State & In-App Notification Engine",
    icon: Bell,
    body: "Leveraged Supabase real-time WebSockets to sync live RSVP counters, likes, and comment streams. Built an in-app banner notification system to alert users instantly of incoming group chat messages and submission statuses.",
  },
] as const

const FEATURES = [
  {
    title: "Multimodal Activity Posting",
    icon: Camera,
    body: "Support for text, photo attachments, map location pins, and public/private visibility scoping.",
  },
  {
    title: "Instant RSVP & Headcount",
    icon: Users,
    body: "One-tap 'Going / Not Going' counters that update live across all feeds.",
  },
  {
    title: "Real-Time Group Messaging",
    icon: MessagesSquare,
    body: "Automated group chat creation with live message streaming and active chat lists.",
  },
  {
    title: "Dual-Feed Architecture",
    icon: Layers,
    body: "Curated Friends Feed for close contacts and a World Discover Feed with visible usernames for public events.",
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
            Pop
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            A real-time social activity platform engineered for spontaneous meetups, location-based
            event discovery, and automated group coordination.
          </p>

          <dl className="mt-10 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Role
              </dt>
              <dd className="mt-2 font-mono text-sm text-foreground">
                Full-Stack Mobile Engineer
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

          <div className="relative mt-12 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-zinc-900/80 to-zinc-950 px-4 py-10 sm:px-8 sm:py-14">
            <div className="relative mx-auto flex aspect-video w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl backdrop-blur-sm">
              <div className="flex size-16 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 text-zinc-300">
                <Play className="size-7 fill-current" />
              </div>
              <p className="mt-4 font-medium text-zinc-400">
                Pop App Walkthrough (Embed Here)
              </p>
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
              Planning spontaneous hangouts often leads to friction—fragmented details across text
              threads, messy headcount tracking, and lost location pins. Existing social apps
              prioritize passive content consumption rather than driving real-world meetups.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl md:p-8">
            <p className="font-mono text-sm text-primary">{"// the solution"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">The Solution</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Pop unifies event creation, interactive mapping, and social coordination into a
              single fluid stream. Users post spontaneous activities with location pins, and
              clicking &apos;Going&apos; automatically connects attendees into a dedicated
              real-time group chat.
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
            Turning RSVPs into live coordination meant wiring chat automation, geolocation privacy,
            and real-time feed state into one mobile stack.
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

      {/* Core Capabilities — 2x2 */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-sm text-primary">{"// capabilities"}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Core Capabilities
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            The product surface spans posting, RSVP, messaging, and dual feeds — each designed to
            push people from the screen into real-world plans.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {FEATURES.map(({ title, icon: Icon, body }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl transition-colors hover:border-primary/40"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/60 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
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
