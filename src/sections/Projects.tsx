import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { staggerContainer, staggerItem } from '../lib/motion'
import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 shadow-sm transition hover:border-[var(--color-accent)]/40 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="accent">{project.badge}</Badge>
        <span className="text-xs text-[var(--color-muted)]">{project.domain}</span>
      </div>
      <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-[var(--color-fg)]">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.summary}</p>
      <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-[var(--color-fg)]">
        Highlights
      </h4>
      <ul className="mt-3 flex-1 space-y-2 text-sm text-[var(--color-muted)]">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[var(--color-highlight)]" aria-hidden>
              ·
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-[var(--color-border)] pt-4 text-sm leading-relaxed text-[var(--color-fg)]/90">
        <span className="font-medium text-[var(--color-highlight)]">Impact: </span>
        {project.impact}
      </p>
    </article>
  )
}

export default function Projects() {
  const reduced = useReducedMotion() ?? false

  return (
    <MotionSection
      id="projects"
      ariaLabelledby="projects-heading"
      className="border-b border-[var(--color-border)] py-[var(--spacing-section)]"
    >
      <Container>
        <SectionHeader
          eyebrow="Work"
          title="Projects"
          titleId="projects-heading"
          description="Selected work across computer vision, NLP, and scientific tooling."
        />

        {reduced ? (
          <ul className="grid list-none gap-6 p-0 lg:grid-cols-3" role="list">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <motion.ul
            className="grid list-none gap-6 p-0 lg:grid-cols-3"
            variants={staggerContainer(false)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            role="list"
          >
            {projects.map((project) => (
              <motion.li key={project.id} variants={staggerItem(false)} className="h-full">
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </Container>
    </MotionSection>
  )
}
