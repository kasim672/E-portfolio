import { Mail, Phone } from 'lucide-react'
import { contact } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from '../components/icons/SocialIcons'
import { Container } from '../components/Container'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'

export default function Contact() {
  return (
    <MotionSection
      id="contact"
      ariaLabelledby="contact-heading"
      className="py-[var(--spacing-section)]"
    >
      <Container>
        <SectionHeader
          eyebrow="Hello"
          title="Contact"
          titleId="contact-heading"
          description="Reach out for collaborations, research opportunities, or ML engineering roles."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-sm transition hover:border-[var(--color-accent)]/45 hover:shadow-md"
          >
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
              aria-hidden
            >
              <Mail className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Email
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent-hover)]">
                {contact.email}
              </p>
            </div>
          </a>

          <a
            href={contact.phoneHref}
            className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-sm transition hover:border-[var(--color-accent)]/45 hover:shadow-md"
          >
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
              aria-hidden
            >
              <Phone className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Phone
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent-hover)]">
                {contact.phone}
              </p>
            </div>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Kasim Ghanchi on GitHub (opens in a new tab)"
            className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-sm transition hover:border-[var(--color-accent)]/45 hover:shadow-md"
          >
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
              aria-hidden
            >
              <GitHubIcon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                GitHub
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent-hover)]">
                github.com/kasim672
              </p>
            </div>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Kasim Ghanchi on LinkedIn (opens in a new tab)"
            className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-sm transition hover:border-[var(--color-accent)]/45 hover:shadow-md"
          >
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
              aria-hidden
            >
              <LinkedInIcon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                LinkedIn
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent-hover)]">
                linkedin.com/in/kasimghanchi
              </p>
            </div>
          </a>
        </div>
      </Container>
    </MotionSection>
  )
}
