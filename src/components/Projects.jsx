import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Things I've built and led</h2>
          <p className="section-sub">Side projects, things I'm proud of, things that are still growing.</p>
        </Reveal>

        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`project ${i % 2 === 1 ? 'reverse' : ''}`}
          >
            <Reveal className="project-visual" y={18}>
              <img src={p.image} alt={p.imageAlt || ''} loading="lazy" />
            </Reveal>

            <Reveal delay={0.1} className="project-content" y={18}>
              <span className="project-role">{p.role}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <a
                className="btn btn-primary"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.cta}
                <ArrowUpRight size={18} strokeWidth={2.2} />
              </a>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
