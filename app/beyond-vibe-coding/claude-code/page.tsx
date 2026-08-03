import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Code Playbook | Beyond Vibe Coding",
  description: "Workflows and tips for mastering Claude Code.",
}

export default function ClaudeCodePlaybookPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-8 md:p-16">
      <Link
        href="/beyond-vibe-coding"
        className="mb-12 inline-block text-sm text-zinc-500 hover:text-teal-400"
      >
        ← Back to Playbook
      </Link>

      <h1 className="mt-12 text-4xl font-bold text-white">Claude Code Playbook</h1>
      <p className="mt-4 text-zinc-500">Content and workflows coming soon...</p>
    </main>
  )
}
