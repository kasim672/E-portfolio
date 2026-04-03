export function SkipLink() {
  return (
    <a
      href="#main"
      className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-16 rounded-lg bg-[var(--color-highlight)] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-md transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
    >
      Skip to content
    </a>
  )
}
