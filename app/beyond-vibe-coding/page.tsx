import type { Metadata } from "next"
import type { ComponentType } from "react"
import Link from "next/link"
import { ClaudeIcon, CodexIcon, CursorIcon } from "@/components/portfolio/ai-tool-icons"

export const metadata: Metadata = {
  title: "Beyond Vibe Coding — The Playbook | SungJu Yu",
  description:
    "Workflows, lessons, and tips for mastering Claude Code, Codex, and Cursor.",
}

const TOOLS: {
  href: string
  label: string
  iconBox: string
  Icon: ComponentType<{ className?: string }>
}[] = [
  {
    href: "/beyond-vibe-coding/claude-code",
    label: "Claude Code ↗",
    Icon: ClaudeIcon,
    iconBox: "bg-amber-500/10 border border-amber-500/20 text-amber-400",
  },
  {
    href: "/beyond-vibe-coding/codex",
    label: "Codex ↗",
    Icon: CodexIcon,
    iconBox: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",
  },
  {
    href: "/beyond-vibe-coding/cursor",
    label: "Cursor ↗",
    Icon: CursorIcon,
    iconBox: "bg-blue-500/10 border border-blue-500/20 text-blue-400",
  },
]

export default function BeyondVibeCodingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-zinc-200 md:p-16">
      <Link
        href="/"
        className="mb-12 inline-block text-sm text-zinc-500 hover:text-teal-400"
      >
        ← Back to Home
      </Link>

      <nav className="flex flex-col" aria-label="Playbook tools">
        {TOOLS.map(({ href, label, iconBox, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group mb-8 flex items-center gap-6 border-b border-zinc-800/50 pb-8 transition-colors duration-300 hover:border-teal-500"
          >
            <span
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${iconBox}`}
            >
              <Icon className="size-8" />
            </span>
            <span className="text-4xl font-black text-zinc-700 transition-colors duration-300 group-hover:text-white md:text-5xl">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </main>
  )
}
