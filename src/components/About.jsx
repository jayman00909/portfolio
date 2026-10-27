import profile from '../data/profile'
import Section from './Section'
import '../styles/About.css'

function About() {
  return (
    <Section id="about" eyebrow="02" title="About" tone="alt">
      <div className="about">
        <div className="about__text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about__skills">
          <h3>Skills</h3>
          {profile.skills.map((group) => (
            <div key={group.group} className="skills__group">
              <h4>{group.group}</h4>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
