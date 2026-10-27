import profile from '../data/profile'
import Section from './Section'
import '../styles/Contact.css'

function Contact() {
  return (
    <Section id="contact" eyebrow="04" title="Contact" tone="dark">
      <ul className="contact__list">
        <li>
          <span>Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span>Phone</span>
          <a href={`tel:${profile.phoneLink}`}>{profile.phone}</a>
        </li>
        <li>
          <span>LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            Oluwadamilare Samuel
          </a>
        </li>
        <li>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            jayman00909
          </a>
        </li>
      </ul>
    </Section>
  )
}

export default Contact
