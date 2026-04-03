import { Briefcase } from 'lucide-react'
import { currentRole } from '../data/portfolio'
import { Container } from '../components/Container'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'

export default function CurrentRole() {
  return (
    <MotionSection
      id="role"
      ariaLabelledby="role-heading"
      className="border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]/80 py-[var(--spacing-section)]"
    >
      <Container>
        <SectionHeader
          eyebrow="Now"
          title="Current role"
          titleId="role-heading"
          description="Undergraduate research focused on deep learning systems and applied computer vision."
        />
        <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <span
                className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]"
                aria-hidden
              >
                <Briefcase className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-fg)]">
                  {currentRole.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{currentRole.org}</p>
              </div>
            </div>
            <p className="shrink-0 text-sm font-medium text-[var(--color-accent)] sm:text-right">
              {currentRole.duration}
            </p>
          </div>
          <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-[var(--color-fg)]">
            Work
          </h4>
          <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
            {currentRole.highlights.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-highlight)]" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </MotionSection>
  )
}
