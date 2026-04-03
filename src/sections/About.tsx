import { about } from '../data/portfolio'
import { Container } from '../components/Container'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'

export default function About() {
  return (
    <MotionSection
      id="about"
      ariaLabelledby="about-heading"
      className="border-b border-[var(--color-border)] py-[var(--spacing-section)]"
    >
      <Container>
        <SectionHeader eyebrow="Profile" title="About me" titleId="about-heading" />
        <div className="space-y-6 text-base leading-relaxed text-[var(--color-muted)]">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
