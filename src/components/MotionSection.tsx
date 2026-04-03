import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { sectionMotion } from '../lib/motion'

type Props = {
  id?: string
  children: ReactNode
  className?: string
  ariaLabelledby?: string
}

export function MotionSection({ id, children, className = '', ariaLabelledby }: Props) {
  const reduced = useReducedMotion() ?? false
  const m = sectionMotion(reduced)

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      {...m}
    >
      {children}
    </motion.section>
  )
}
