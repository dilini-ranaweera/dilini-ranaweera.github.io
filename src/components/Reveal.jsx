import { motion } from 'framer-motion'

/**
 * Reveal — fades/slides its children in once when scrolled into view.
 * Replacement for the abandoned `react-reveal` package.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  amount = 0.2,
  as = 'div',
  className,
  style,
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
