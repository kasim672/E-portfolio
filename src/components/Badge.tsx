type Props = {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

export function Badge({ children, variant = 'default' }: Props) {
  const styles =
    variant === 'accent'
      ? 'border-[var(--color-highlight)]/40 bg-[var(--color-highlight)]/12 text-[var(--color-highlight)]'
      : 'border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-muted)]'

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium ${styles}`}
    >
      {children}
    </span>
  )
}
