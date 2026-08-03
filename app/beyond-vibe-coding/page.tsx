import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Beyond Vibe Coding — The Playbook | SungJu Yu",
  description:
    "How I orchestrate Cursor, Claude, and Codex to architect and ship production-ready software.",
}

export default function BeyondVibeCodingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <Link
          href="/"
          className="inline-flex font-mono text-sm text-zinc-400 transition-colors hover:text-teal-400"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-12 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
          Beyond Vibe Coding: The Playbook
        </h1>
      </div>
    </main>
  )
}
