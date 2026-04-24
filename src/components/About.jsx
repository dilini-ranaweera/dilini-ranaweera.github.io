import Reveal from './Reveal.jsx'

const CHIPS = [
  'Computer Science',
  'Math + Stats Minor',
  'Discrete Math TA',
  'Chess · Caro-Kann',
  '90s Fashion',
  'BoJack Horseman',
  'Cloud Computing',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">A little bit about me</h2>
          <p className="section-sub">
            Math, software, teaching — and whatever I'm reading about fashion history that week.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1} className="about-photo">
            <img src="/me.jpg" alt="Portrait of Dilini Ranaweera" loading="lazy" />
          </Reveal>

          <Reveal delay={0.2} className="about-text">
            <p>
              I'm a <strong>third-year student at the University of Pennsylvania</strong>, and an
              alumna of Seneca Valley Senior High School. I'm studying Computer Science with minors
              in Mathematics and Statistics. I love almost every corner of CS — from front-end web
              development to machine learning to Web3 — and my goal is to learn as much of it as I can.
            </p>
            <p>
              Alongside CS I care deeply about mathematics and math education. That love led me to
              become a <strong>Teaching Assistant for CIS 1600 (Mathematical Foundations of CS)</strong>{' '}
              and to join the executive board of Penn's Bridge to Mathematics club.
            </p>
            <p>
              When I'm off the clock I play chess, read fashion-history essays, and watch cartoons.
              My favorite opening is the Caro-Kann, my favorite era of fashion is the '90s, and my
              favorite show is BoJack Horseman.
            </p>
            <p>
              After Penn I plan to work as a <strong>Software Development Engineer</strong>. I'm
              especially drawn to cloud computing and would love to join a team building developer
              tools for the cloud.
            </p>

            <div className="about-chips" aria-label="Interests and focus areas">
              {CHIPS.map((c) => (
                <span key={c} className="tag">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
