import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { navItems, site } from '../data/portfolio'
import { Container } from './Container'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 backdrop-blur-md"
      role="banner"
    >
      <Container as="div" className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-[var(--color-fg)] transition hover:text-[var(--color-accent-hover)]"
        >
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-3 py-2 text-sm text-[var(--color-muted)] transition hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2 text-[var(--color-fg)] md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-3 text-base text-[var(--color-fg)] hover:bg-[var(--color-bg-elevated)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
