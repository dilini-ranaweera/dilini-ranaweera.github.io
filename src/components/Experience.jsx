import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { experiences } from '../data.js'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Work</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">
            The places that shaped how I build — from classrooms to clinics to agencies.
          </p>
        </Reveal>

        <div className="xp-grid">
          {experiences.map((xp, i) => (
            <Reveal key={xp.title} delay={i * 0.06} className="xp-card">
              <a
                className="xp-media"
                href={xp.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${xp.org}`}
              >
                <img src={xp.image} alt="" loading="lazy" />
              </a>
              <div className="xp-body">
                <div className="xp-meta">
                  <span>{xp.org}</span>
                  <span>{xp.period}</span>
                </div>
                <h3 className="xp-title">{xp.title}</h3>
                <p className="xp-desc">{xp.description}</p>
                {xp.tags?.length ? (
                  <div className="xp-tags">
                    {xp.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                <a
                  className="xp-link"
                  href={xp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
