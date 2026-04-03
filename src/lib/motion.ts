import type { HTMLMotionProps, Variants } from 'framer-motion'

export function sectionMotion(reduced: boolean): Pick<
  HTMLMotionProps<'div'>,
  'initial' | 'whileInView' | 'viewport' | 'transition'
> {
  if (reduced) {
    return {}
  }
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px', amount: 0.2 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }
}

export function staggerContainer(reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: {},
      show: {},
    }
  }
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  }
}

export function staggerItem(reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: {},
      show: {},
    }
  }
  return {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  }
}
