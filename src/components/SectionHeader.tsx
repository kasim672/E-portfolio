import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  titleId?: string
  description?: ReactNode
  className?: string
}

export function SectionHeader({ eyebrow, title, titleId, description, className = '' }: Props) {
  return (
    <header className={`mb-10 sm:mb-14 ${className}`}>
      {eyebrow ? (
        <p className="font-display mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-display text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <div className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          {description}
        </div>
      ) : null}
    </header>
  )
}
