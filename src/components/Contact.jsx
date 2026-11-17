import profile from '../data/profile'
import Section from './Section'
import '../styles/Contact.css'

function Contact() {
  return (
    <Section id="contact" eyebrow="04" title="Contact" tone="dark">
      <p className="contact__intro">
        Have a project in mind, or think I could be a good fit for your team?
        Send me an email or reach out through any of the links below. I'd be
        glad to hear from you.
      </p>

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
            View my LinkedIn profile
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
