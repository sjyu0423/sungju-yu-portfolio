export function ClaudeIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <rect x="7" y="9" width="18" height="14" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="13" cy="15.5" r="1.6" fill="currentColor" />
      <circle cx="19" cy="15.5" r="1.6" fill="currentColor" />
      <path
        d="M13.5 19.5c1.2 1.2 3.8 1.2 5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M16 4v3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M16 3.5l.55 1.2 1.25.3-1.05.8.3 1.25L16 6.35l-1.05.7.3-1.25-1.05-.8 1.25-.3L16 3.5z"
        fill="currentColor"
      />
      <path d="M10 25.5h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

export function CodexIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 9.5L5.5 16 10 22.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 9.5L26.5 16 22 22.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 13.2c-.9-1.4.1-3.2 1.9-3.2.7 0 1.3.3 1.7.8.4-.5 1-.8 1.7-.8 1.8 0 2.8 1.8 1.9 3.2-.4.7-.7 1.3-.7 2.1v1.1c0 1.1-.9 2-2 2h-1.8c-1.1 0-2-.9-2-2v-1.1c0-.8-.3-1.4-.7-2.1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 12.2v5.2M14.2 14.2c.6.3 1.2.4 1.8.4s1.2-.1 1.8-.4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CursorIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8.5 5.5l3.2 18.2 4.1-4.3 5.8 6.4 2.4-2.2-5.9-6.5 5.2-1.6L8.5 5.5z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 6.5l.7 1.5 1.5.5-1.2 1 .4 1.6-1.4-.9-1.4.9.4-1.6-1.2-1 1.5-.5.7-1.5z"
        fill="currentColor"
      />
      <path
        d="M27.5 13.5l.4.9.9.3-.7.6.2.9-.8-.5-.8.5.2-.9-.7-.6.9-.3.4-.9z"
        fill="currentColor"
        fillOpacity="0.7"
      />
    </svg>
  )
}
