export function PopPhoneMockup() {
  return (
    <div className="relative mx-auto h-[580px] w-[280px] overflow-hidden rounded-[2.5rem] border-[12px] border-zinc-900 bg-zinc-50 shadow-2xl">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/2 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />

      {/* App Header */}
      <div className="relative z-10 bg-white px-4 pt-8 pb-2 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xl font-black tracking-tighter text-teal-500">POP</p>
          <span className="text-sm text-teal-500" aria-hidden="true">
            💬
          </span>
        </div>
        <div className="mt-3 flex justify-evenly">
          <button
            type="button"
            className="border-b-2 border-teal-500 px-3 pb-1.5 text-sm font-semibold text-teal-600"
          >
            Feed
          </button>
          <button
            type="button"
            className="px-3 pb-1.5 text-sm font-medium text-zinc-400"
          >
            Discover
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="h-full w-full space-y-4 bg-zinc-100 p-3 pt-4 pb-20">
        <article className="rounded-xl bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-600">
              S
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-zinc-800">sjyu</p>
              <p className="text-xs text-zinc-400">a minute ago</p>
            </div>
          </div>

          <p className="mt-2 text-sm font-medium text-zinc-800">Taco Bell? Anyone?</p>

          <div className="mt-2 flex h-24 w-full items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-2xl text-teal-500">
            📍
          </div>

          <div className="mt-3 flex gap-2">
            <span className="flex-1 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-center text-xs font-semibold text-teal-600">
              ✓ Going 3
            </span>
            <span className="flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-center text-xs font-medium text-zinc-500">
              ⊗ Not Going
            </span>
          </div>
        </article>

        <article className="rounded-xl bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-600">
              S
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-zinc-800">sjyu</p>
              <p className="text-xs text-zinc-400">3 minutes ago</p>
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-zinc-800">what&apos;s up??</p>
          <div className="mt-3 flex gap-2">
            <span className="flex-1 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-center text-xs font-semibold text-teal-600">
              ✓ Going 1
            </span>
            <span className="flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-center text-xs font-medium text-zinc-500">
              ⊗ Not Going
            </span>
          </div>
        </article>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 z-20 flex h-16 w-full items-center justify-around border-t border-zinc-200 bg-white px-2 pb-2">
        <span className="text-center text-[10px] font-semibold text-teal-500">
          ⌂
          <span className="mt-0.5 block">Home</span>
        </span>
        <span className="text-center text-[10px] font-medium text-zinc-400">
          ⌕
          <span className="mt-0.5 block">Search</span>
        </span>
        <span className="flex size-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white shadow-md">
          +
        </span>
        <span className="text-center text-[10px] font-medium text-zinc-400">
          💬
          <span className="mt-0.5 block">Chat</span>
        </span>
        <span className="text-center text-[10px] font-medium text-zinc-400">
          ☺
          <span className="mt-0.5 block">Profile</span>
        </span>
      </div>
    </div>
  )
}
