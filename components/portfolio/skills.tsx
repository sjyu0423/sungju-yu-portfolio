const STACK = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Next.js",
  "Python",
  "Flutter",
]

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-sm text-primary">{"// 01 — experience & skills"}</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            The tools I build with.
          </h2>
          <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A pragmatic, full-stack toolkit spanning modern web frameworks, typed languages, and
            cross-platform mobile development.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-card px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
