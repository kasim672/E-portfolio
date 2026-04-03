export function LoadingSections() {
  return (
    <div
      className="mx-auto w-full max-w-5xl space-y-6 px-5 py-16 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Loading sections…</span>
      <div className="h-40 animate-pulse rounded-2xl bg-[var(--color-bg-secondary)]" />
      <div className="h-52 animate-pulse rounded-2xl bg-[var(--color-bg-secondary)]" />
      <div className="h-64 animate-pulse rounded-2xl bg-[var(--color-bg-secondary)]" />
    </div>
  )
}
