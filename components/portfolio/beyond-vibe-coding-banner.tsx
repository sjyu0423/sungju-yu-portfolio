import Link from "next/link"

const TOOLS = [
  { label: "[Claude Icon]", name: "Claude Code", accent: "border-orange-500/40 text-orange-300" },
  { label: "[Codex Icon]", name: "Codex", accent: "border-emerald-500/40 text-emerald-300" },
  { label: "[Cursor Icon]", name: "Cursor", accent: "border-sky-500/40 text-sky-300" },
] as const

export function BeyondVibeCodingBanner() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Link
          href="/beyond-vibe-coding"
          className="group relative mb-24 block w-full cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-colors duration-300 hover:border-teal-500/50 md:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-900/0 to-zinc-950"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left — copy */}
            <div>
              <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-indigo-400">
                {"// THE AI ENGINEERING PLAYBOOK"}
              </p>
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Beyond Vibe Coding.
              </h2>
              <p className="max-w-xl text-lg text-zinc-400">
                AI tools offer massive leverage for developers, but mastering them requires a
                shift in mindset. Here is a collection of practical tips and takeaways from my own
                experience, designed to help you navigate the learning curve and level up your
                workflow.
              </p>
              <span className="mt-8 inline-flex items-center text-sm font-medium text-teal-400 transition-transform duration-300 group-hover:translate-x-1">
                Read the Playbook →
              </span>
            </div>

            {/* Right — command-center visual */}
            <div
              aria-hidden="true"
              className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-950/80 shadow-[0_0_40px_-12px_rgba(45,212,191,0.25)]"
            >
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <span className="size-2.5 rounded-full bg-zinc-700" />
                <span className="size-2.5 rounded-full bg-zinc-700" />
                <span className="size-2.5 rounded-full bg-zinc-700" />
                <span className="ml-3 font-mono text-[11px] text-zinc-500">
                  orchestrator.session
                </span>
              </div>

              <div className="space-y-4 p-5 font-mono text-xs leading-relaxed md:p-6 md:text-sm">
                <p className="text-zinc-500">
                  <span className="text-indigo-400">$</span> agent.orchestrate --tools cursor,claude,codex
                </p>
                <p className="text-zinc-400">
                  <span className="text-teal-400/80">›</span> routing tasks across agents…
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool.name}
                      className={`inline-flex items-center gap-2 rounded-full border bg-zinc-900/90 px-3 py-1.5 text-xs font-medium shadow-[0_0_20px_-8px_rgba(99,102,241,0.5)] ${tool.accent}`}
                    >
                      <span className="text-[10px] opacity-70">{tool.label}</span>
                      {tool.name}
                    </span>
                  ))}
                </div>

                <div className="mt-2 space-y-1.5 rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-3 text-[11px] text-zinc-500 md:text-xs">
                  <p>
                    <span className="text-indigo-300">architect</span>
                    <span className="text-zinc-600"> · </span>
                    schema + API surface locked
                  </p>
                  <p>
                    <span className="text-orange-300">claude</span>
                    <span className="text-zinc-600"> · </span>
                    implementing service layer
                  </p>
                  <p>
                    <span className="text-emerald-300">codex</span>
                    <span className="text-zinc-600"> · </span>
                    tests + edge cases green
                  </p>
                  <p className="pt-1 text-teal-400/90">
                    ✓ production-ready · ship
                    <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-teal-400/80 align-middle" />
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-6 size-36 rounded-full bg-teal-500/10 blur-3xl" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
