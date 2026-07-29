import type { Metadata } from "next"
import Link from "next/link"
import type { SVGProps } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  Binary,
  LineChart,
  Network,
} from "lucide-react"
import { WorldCupSimulationViz } from "@/components/portfolio/world-cup-simulation-viz"

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "World Cup ML Predictor — Case Study | SungJu Yu",
  description:
    "A machine learning predictive system and automated tournament simulator for the 2022 FIFA World Cup.",
}

const STACK = [
  "Python",
  "Pandas",
  "Scikit-Learn",
  "Random Forest",
  "Gradient Boosting",
] as const

const CHALLENGES = [
  {
    title: "Advanced Feature Engineering",
    icon: LineChart,
    body: "Executed advanced data management and feature engineering in pandas. I calculated trailing five-game metrics and dynamic ranking variances to isolate the true key performance indicators of each team.",
  },
  {
    title: "Rigorous Model Optimization",
    icon: Binary,
    body: "Trained and evaluated Random Forest and Gradient Boosting classifiers. I utilized GridSearchCV to tune hyperparameters and selected the optimal model to strictly minimize overfitting based on rigorous AUC-ROC analysis.",
  },
  {
    title: "Combinatorial Logic Simulation",
    icon: Network,
    body: "Instead of just predicting single matches, I engineered an automated tournament simulator using combinatorial logic to forecast the entire bracket progression, adapting dynamically as simulated teams advanced through the group and knockout stages.",
  },
] as const

export default function WorldCupMlCaseStudyPage() {
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
            Back to portfolio
          </Link>

          <p className="mt-10 font-mono text-sm text-primary">
            {"// case study — world cup ml"}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            World Cup ML Predictor
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            A machine learning predictive system and automated tournament simulator for the 2022
            FIFA World Cup.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://meyhun.github.io/WorldCup-Prediction/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Project
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://github.com/meyhun/WorldCup-Prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-transparent px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-900"
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <dl className="mt-10 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Role
              </dt>
              <dd className="mt-2 font-mono text-sm text-foreground">Data &amp; ML Engineer</dd>
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

          <WorldCupSimulationViz />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl md:p-8">
            <p className="font-mono text-sm text-primary">{"// the problem"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">The Problem</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Predicting a high-stakes, multi-stage tournament like the World Cup requires more than
              just looking at static team rankings. It requires nuanced, time-series performance
              data and an engine capable of handling complex bracket progression logic.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl md:p-8">
            <p className="font-mono text-sm text-primary">{"// the solution"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">The Solution</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I engineered an automated tournament simulator fueled by advanced feature engineering.
              By isolating key performance indicators and training robust classifiers, the system
              accurately forecasts bracket progression using combinatorial logic.
            </p>
          </article>
        </div>
      </section>

      {/* Engineering & Data Challenges — Bento */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-sm text-primary">{"// architecture"}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Engineering &amp; Data Challenges
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Building a credible World Cup forecast meant treating feature design, model selection,
            and bracket simulation as one pipeline — not three isolated scripts.
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

      {/* Back to Home */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex justify-center border-t border-zinc-800 pt-10">
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
