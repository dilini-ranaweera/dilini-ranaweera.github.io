import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const containerV = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}
const itemV = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="container hero-inner"
        variants={containerV}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={itemV} className="hero-eyebrow">
          <span className="pulse" aria-hidden />
          Available for Summer 2026 SWE roles
        </motion.span>

        <motion.h1 variants={itemV} className="hero-title">
          Hi, I'm Dilini — <span className="accent">CS at Penn</span>, building a little bit of everything.
        </motion.h1>

        <motion.p variants={itemV} className="hero-sub">
          Junior at the University of Pennsylvania studying Computer Science, with minors in Math and Stats.
          I teach discrete math, build web apps and ML models, and care a lot about making software feel
          thoughtful. Thanks for clicking on my website.
        </motion.p>

        <motion.div variants={itemV} className="hero-actions">
          <a href="#about" className="btn btn-primary">
            Learn more about me
            <ArrowRight size={18} strokeWidth={2.2} />
          </a>
          <a href="#experience" className="btn btn-ghost">
            <Sparkles size={18} strokeWidth={2.2} />
            See my work
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
