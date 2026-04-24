import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-inner">
          <div>
            <h2 className="footer-title">Let's get in touch.</h2>
            <p className="footer-sub">
              I love hearing about new projects, teaching ideas, and anyone who wants to talk about
              the Caro-Kann. Send a note — I'll reply.
            </p>
          </div>
          <div className="footer-actions">
            <a
              href="mailto:dilinir1@seas.upenn.edu"
              className="footer-btn primary"
            >
              <Mail size={16} strokeWidth={2.2} aria-hidden />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/dilini-ranaweera-295418220/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn"
            >
              <Linkedin size={16} strokeWidth={2.2} aria-hidden />
              LinkedIn
            </a>
            <a
              href="https://github.com/dilini-ranaweera"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn"
            >
              <Github size={16} strokeWidth={2.2} aria-hidden />
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-meta container">
          <span>© {year} Dilini Ranaweera. Built with React, Vite &amp; Framer Motion.</span>
          <a href="#top" className="to-top">
            Back to top <ArrowUp size={14} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </footer>
  )
}
