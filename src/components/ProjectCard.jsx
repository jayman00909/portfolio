import ProjectLinks from './ProjectLinks'

// One smaller project: screenshot, label, description and technology tags.
function ProjectCard({ project }) {
  const { title, label, description, tags, image, links } = project

  return (
    <article className="card">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
      <div className="card__body">
        <p className="project__label">{label}</p>
        <h3>{title}</h3>
        <p className="card__description">{description}</p>
        <ul className="tags" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ProjectLinks links={links} />
      </div>
    </article>
  )
}

export default ProjectCard
