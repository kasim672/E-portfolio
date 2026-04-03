import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { site } from '../data/portfolio'
import { Container } from '../components/Container'

export function Hero() {
  const reduced = useReducedMotion() ?? false

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-[var(--color-border)] pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/14 blur-[100px]" />
        <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-[var(--color-accent)]/10 blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-bg)_88%)]" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <span
                className="font-display flex size-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-sm font-semibold tracking-wide text-[var(--color-fg)]"
                aria-hidden
              >
                KG
              </span>
              <span className="text-sm text-[var(--color-muted)]">Portfolio · ML & AI</span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              {site.name}
            </motion.h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-lg font-medium text-[var(--color-accent)] sm:text-xl"
            >
              {site.title}
            </motion.p>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-highlight)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-highlight-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--color-fg)] shadow-sm transition hover:border-[var(--color-accent)]/35 hover:text-[var(--color-accent)]"
              >
                Contact
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="hidden shrink-0 lg:block"
            aria-hidden
          >
            <a
              href="#about"
              className="group flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-muted)]"
            >
              <span>Scroll</span>
              <ArrowDown className="size-4 motion-safe:animate-bounce" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
