import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Hammer, FlaskConical, FileText, Linkedin, Github, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { href: '#experience', label: 'Work', icon: Hammer },
  { href: '#projects', label: 'Projects', icon: FlaskConical },
  {
    href: 'https://www.linkedin.com/in/dilini-ranaweera-295418220/',
    label: 'LinkedIn',
    icon: Linkedin,
    external: true,
  },
  {
    href: 'https://github.com/dilini-ranaweera',
    label: 'GitHub',
    icon: Github,
    external: true,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
        <div className="container nav-inner">
          <a href="#top" className="nav-brand" aria-label="Dilini Ranaweera — home">
            Dilini Ranaweera
          </a>

          <div className="nav-links">
            {NAV_ITEMS.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                className="nav-link"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <Icon size={16} strokeWidth={2} aria-hidden />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer"
            role="menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {NAV_ITEMS.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                role="menuitem"
                className="nav-link"
                onClick={handleLinkClick}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <Icon size={18} strokeWidth={2} aria-hidden />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
