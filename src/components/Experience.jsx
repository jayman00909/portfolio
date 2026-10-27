import profile from '../data/profile'
import Section from './Section'
import '../styles/Experience.css'

function Experience() {
  const { experience, education, certifications } = profile

  return (
    <Section id="experience" eyebrow="03" title="Experience and education">
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.title} className="timeline__item">
            <h3>{item.title}</h3>
            <p className="timeline__meta">
              {item.place} <span aria-hidden="true">·</span> {item.note}
            </p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="credentials">
        <div className="credentials__block">
          <h3>Education</h3>
          <p className="credentials__strong">{education.degree}</p>
          <p className="credentials__meta">
            {education.place} <span aria-hidden="true">·</span> {education.note}
          </p>
        </div>

        <div className="credentials__block">
          <h3>Certifications</h3>
          <ul className="credentials__list">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <span className="credentials__strong">{cert.name}</span>
                <span className="credentials__meta">
                  {cert.issuer}, {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Experience
