import { site } from '../data/portfolio'
import { Container } from './Container'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border)] py-10 text-center text-sm text-[var(--color-muted)]"
    >
      <Container>
        <p>
          © {year} {site.name}. Built with React, Vite, Tailwind CSS, and Framer Motion.
        </p>
      </Container>
    </footer>
  )
}
