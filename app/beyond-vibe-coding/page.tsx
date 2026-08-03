import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Beyond Vibe Coding — The Playbook | SungJu Yu",
  description:
    "Workflows, lessons, and tips for mastering Claude Code, Codex, and Cursor.",
}

const TOOLS = [
  { href: "/beyond-vibe-coding/claude-code", label: "01. Claude Code ↗" },
  { href: "/beyond-vibe-coding/codex", label: "02. Codex ↗" },
  { href: "/beyond-vibe-coding/cursor", label: "03. Cursor ↗" },
] as const

export default function BeyondVibeCodingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-zinc-200 md:p-16">
      <Link
        href="/"
        className="mb-12 inline-block text-sm text-zinc-500 hover:text-teal-400"
      >
        ← Back to Home
      </Link>

      <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">Beyond Vibe Coding.</h1>

      <p className="mb-16 max-w-2xl text-lg text-zinc-400">
        AI coding tools are an incredible force multiplier, but the learning curve is steeper than
        it looks. I&apos;ve documented my workflows, hard-learned lessons, and daily tips to help
        fellow developers master AI-assisted engineering. Select a tool below to view the playbook.
      </p>

      <nav className="flex flex-col" aria-label="Playbook tools">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="mb-8 block border-b border-zinc-800/50 pb-8 text-4xl font-black text-zinc-700 transition-colors duration-300 hover:border-teal-500 hover:text-white md:text-5xl"
          >
            {tool.label}
          </Link>
        ))}
      </nav>
    </main>
  )
}
