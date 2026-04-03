import {
  BarChart3,
  Brain,
  Code2,
  Globe,
  Server,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { Container } from '../components/Container'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'

const icons = {
  code: Code2,
  brain: Brain,
  chart: BarChart3,
  wrench: Wrench,
  server: Server,
  globe: Globe,
} as const

export default function Skills() {
  return (
    <MotionSection
      id="skills"
      ariaLabelledby="skills-heading"
      className="border-b border-[var(--color-border)] py-[var(--spacing-section)]"
    >
      <Container>
        <SectionHeader
          eyebrow="Stack"
          title="Technical skills"
          titleId="skills-heading"
          description="Languages, frameworks, and tools I use to build and ship ML systems."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon]
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    aria-hidden
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-[var(--color-fg)]">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex rounded-lg border border-[var(--color-highlight)]/25 bg-[var(--color-highlight)]/10 px-2.5 py-1 text-xs text-[var(--color-muted)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </MotionSection>
  )
}
