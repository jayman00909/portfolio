import { projects, practice } from '../data/projects'
import Section from './Section'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'

function Projects() {
  return (
    <Section id="projects" eyebrow="01" title="Projects">
      <FeaturedProject />

      <h3 className="projects__subtitle">More projects</h3>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h3 className="projects__subtitle">Practice builds</h3>
      <p className="projects__note">
        Pages recreated from existing designs to practise layout and responsive
        CSS.
      </p>
      <ul className="practice">
        {practice.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
