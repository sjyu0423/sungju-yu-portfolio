const PLAYOFF_ROUNDS = [
  { round: "Round of 16", team: "Portugal", pct: 56.6 },
  { round: "Quarter-finals", team: "Portugal", pct: 52.42 },
  { round: "Semi-finals", team: "Portugal", pct: 48.51 },
  { round: "Final", team: "England", pct: 44.42 },
] as const

type GroupStanding = {
  team: string
  code: string
  pts: number
  advanced: boolean
}

const GROUPS: { name: string; standings: GroupStanding[] }[] = [
  {
    name: "Group A",
    standings: [
      { team: "Netherlands", code: "NLD", pts: 9, advanced: true },
      { team: "Senegal", code: "SEN", pts: 4, advanced: true },
      { team: "Ecuador", code: "ECU", pts: 4, advanced: false },
      { team: "Qatar", code: "QAT", pts: 0, advanced: false },
    ],
  },
  {
    name: "Group B",
    standings: [
      { team: "England", code: "ENG", pts: 9, advanced: true },
      { team: "USA", code: "USA", pts: 4, advanced: true },
      { team: "Wales", code: "WAL", pts: 2, advanced: false },
      { team: "Iran", code: "IRN", pts: 1, advanced: false },
    ],
  },
  {
    name: "Group C",
    standings: [
      { team: "Argentina", code: "ARG", pts: 9, advanced: true },
      { team: "Poland", code: "POL", pts: 4, advanced: true },
      { team: "Mexico", code: "MEX", pts: 4, advanced: false },
      { team: "Saudi Arabia", code: "SAU", pts: 0, advanced: false },
    ],
  },
  {
    name: "Group D",
    standings: [
      { team: "France", code: "FRA", pts: 7, advanced: true },
      { team: "Denmark", code: "DNK", pts: 7, advanced: true },
      { team: "Tunisia", code: "TUN", pts: 1, advanced: false },
      { team: "Australia", code: "AUS", pts: 1, advanced: false },
    ],
  },
]

function formatPct(pct: number) {
  return `${pct.toFixed(2)}%`
}

function SimulationStatusBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ${
        compact ? "gap-2" : "gap-3"
      }`}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        Model Simulation Complete
      </span>
      <p className="font-mono text-xs text-zinc-400">
        Gradient Boosting • 64 Matches Simulated
      </p>
    </div>
  )
}

/** Full case-study hero visualization */
export function WorldCupSimulationViz() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/30 via-zinc-900/80 to-zinc-950"
      />

      <div className="relative z-[1] space-y-6">
        <SimulationStatusBar />

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 sm:p-5">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 sm:p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Predicted Champion
              </p>
              <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                <h3 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  England
                </h3>
                <span className="font-mono text-sm font-semibold text-emerald-400">
                  44.42% Win Prob
                </span>
              </div>
            </div>

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-400">
                Playoff Probability Progression
              </p>
              <ul className="space-y-4">
                {PLAYOFF_ROUNDS.map(({ round, team, pct }) => (
                  <li key={round} className="group">
                    <div className="mb-1.5 flex items-baseline justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-zinc-200">{round}</p>
                        <p className="font-mono text-xs text-zinc-500">{team}</p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-emerald-400">
                        {formatPct(pct)}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-700 group-hover:bg-emerald-400"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 sm:p-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-400">
              Group Stage Standings
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {GROUPS.map((group) => (
                <div
                  key={group.name}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 transition-colors hover:border-emerald-500/30"
                >
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {group.name}
                  </p>
                  <ul className="divide-y divide-zinc-800">
                    {group.standings.map((row) => (
                      <li
                        key={row.team}
                        className="flex items-center justify-between gap-2 py-1.5 first:pt-0 last:pb-0"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          {row.advanced ? (
                            <span
                              className="inline-flex shrink-0 items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-emerald-400"
                              title="Advanced"
                            >
                              <span className="mr-1 size-1.5 rounded-full bg-emerald-400" />
                              Adv
                            </span>
                          ) : (
                            <span className="size-1.5 shrink-0 rounded-full bg-zinc-700" />
                          )}
                          <span
                            className={`truncate text-xs ${
                              row.advanced ? "font-medium text-zinc-100" : "text-zinc-400"
                            }`}
                          >
                            {row.team}
                          </span>
                        </div>
                        <span className="shrink-0 font-mono text-xs text-zinc-300">
                          {row.pts}
                          <span className="ml-0.5 text-zinc-600">pts</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Compact dashboard for the homepage project card visual area */
export function WorldCupCardDashboard() {
  return (
    <div className="relative overflow-hidden border-b border-zinc-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/30 via-zinc-900/80 to-zinc-950 p-4 sm:p-5">
      <div className="relative z-[1] space-y-4">
        <SimulationStatusBar compact />

        <div className="grid gap-3 md:grid-cols-2">
          {/* Champion + progression */}
          <div className="flex flex-col gap-3 rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
            <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                Predicted Champion
              </p>
              <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                <p className="text-2xl font-semibold tracking-tight text-zinc-50">England</p>
                <span className="font-mono text-xs font-semibold text-emerald-400">
                  44.42% Win Prob
                </span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {PLAYOFF_ROUNDS.map(({ round, team, pct }) => (
                <li key={round} className="group">
                  <div className="mb-1 flex items-baseline justify-between gap-2">
                    <p className="truncate text-[11px] text-zinc-300">
                      <span className="text-zinc-200">{round}</span>
                      <span className="font-mono text-zinc-500"> · {team}</span>
                    </p>
                    <span className="shrink-0 font-mono text-[10px] text-emerald-400">
                      {formatPct(pct)}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-500 group-hover:bg-emerald-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Group standings mini-grid */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Group Stage Standings
            </p>
            <div className="grid grid-cols-2 gap-2">
              {GROUPS.map((group) => (
                <div
                  key={group.name}
                  className="rounded-md border border-zinc-800 bg-zinc-900/70 p-2 transition-colors hover:border-emerald-500/30"
                >
                  <p className="mb-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    {group.name}
                  </p>
                  <ul className="space-y-1">
                    {group.standings.map((row) => (
                      <li
                        key={row.code}
                        className="flex items-center justify-between gap-1"
                        title={row.team}
                      >
                        <div className="flex min-w-0 items-center gap-1">
                          {row.advanced ? (
                            <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1 py-px font-mono text-[8px] uppercase tracking-wide text-emerald-400">
                              Adv
                            </span>
                          ) : null}
                          <span
                            className={`font-mono text-[10px] ${
                              row.advanced
                                ? "font-semibold text-emerald-400"
                                : "text-zinc-500"
                            }`}
                          >
                            {row.code}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400">
                          {row.pts}
                          <span className="text-zinc-600">p</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
