const SKILL_GROUPS = [
  {
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Python", "Supabase", "PostgreSQL", "Vercel Serverless"],
  },
  {
    title: "AI & Tools",
    skills: ["OpenAI", "Claude", "Gemini", "Cursor", "Git"],
  },
] as const

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-sm text-primary">{"// 01 — experience & skills"}</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Experience &amp; Skills
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* About & Education */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl">
            <p className="mb-4 w-fit rounded-full bg-zinc-800/80 px-3 py-1 font-mono text-xs text-zinc-400">
              University of Maryland — B.S. Computer Science
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I love building practical apps that solve real problems. I enjoy taking on challenging
              technical concepts and figuring out how to implement them into clean, functional
              software. My superpower is speed-to-market using AI. By mastering Claude Code and
              Codex, I&apos;m able to accelerate the development cycle—spending less time debugging
              syntax and more time designing scalable, high-impact features.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-4">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 shadow-xl"
              >
                <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3.5 py-1.5 font-mono text-sm text-zinc-200 transition-colors hover:border-primary/50 hover:bg-zinc-800 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
