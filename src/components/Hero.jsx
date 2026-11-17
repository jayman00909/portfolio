import profile from '../data/profile'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">{profile.role}</p>
          <h1 id="hero-title">I build clean, responsive websites.</h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--light" href="#projects">
              See my work
            </a>
            <a className="btn btn--outline-light" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <dl className="hero__facts">
          {profile.highlights.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
