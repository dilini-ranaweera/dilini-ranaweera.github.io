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
              I'm a <strong>recent grad of the University of Pennsylvania</strong>, and an
              alumna of Seneca Valley Senior High School. I studied Computer Science, with a focus on computer systems. 
              My favorite thing to learn about is compilers.
            </p>
            <p>
              I care deeply about mathematics and math education. That love led me to
              become a <strong>Teaching Assistant for CIS 1600 (Mathematical Foundations of CS)</strong>{' '}, 
              eventually becoming a <strong>Head Teaching Assistant</strong> for the 2024-2025 school year.
            </p>
            <p>
              Outisde of work, I read fashion-history essays, watch cartoons, occassionally play chess, and hike.
              My favorite opening is the Caro-Kann, my favorite era of fashion is the '90s, and my
              favorite show is Arcane (though BoJack Horseman is a close second).
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
