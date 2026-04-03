import { certifications, education, researchInterests } from '../data/portfolio'
import { Container } from '../components/Container'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'

export default function Education() {
  return (
    <MotionSection
      id="education"
      ariaLabelledby="education-heading"
      className="border-b border-[var(--color-border)] py-[var(--spacing-section)]"
    >
      <Container>
        <SectionHeader
          eyebrow="Academic"
          title="Education & credentials"
          titleId="education-heading"
          description="Coursework, certifications, and research focus areas."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--color-fg)]">Education</h3>
            <ul className="mt-5 space-y-5" role="list">
              {education.map((row, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-1 border-b border-[var(--color-border)]/70 pb-5 last:border-0 last:pb-0"
                >
                  <p className="font-medium text-[var(--color-fg)]">{row.title}</p>
                  <p className="text-sm text-[var(--color-muted)]">{row.place}</p>
                  {row.period ? (
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
                      {row.period}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <h3
                id="certifications-heading"
                className="font-display text-lg font-semibold text-[var(--color-fg)]"
              >
                Certifications
              </h3>
              <ul className="mt-4 space-y-3" role="list" aria-labelledby="certifications-heading">
                {certifications.map((c, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-muted)] shadow-sm"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                id="research-heading"
                className="font-display text-lg font-semibold text-[var(--color-fg)]"
              >
                Research interests
              </h3>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                role="list"
                aria-labelledby="research-heading"
              >
                {researchInterests.map((topic) => (
                  <li key={topic}>
                    <span className="inline-flex rounded-full border border-[var(--color-highlight)]/30 bg-[var(--color-highlight)]/10 px-3 py-1 text-xs text-[var(--color-muted)]">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  )
}
