import { featured } from '../data/projects'
import ProjectLinks from './ProjectLinks'

// The large flagship project card at the top of the Projects section.
function FeaturedProject() {
  const [main, ...others] = featured.images

  return (
    <article className="featured">
      <div className="featured__text">
        <p className="project__label">{featured.label}</p>
        <h3>{featured.title}</h3>
        <p className="featured__summary">{featured.summary}</p>

        <ul className="featured__points">
          {featured.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className="featured__role">
          <strong>My role:</strong> {featured.role}
        </p>

        <ul className="tags" aria-label="Technologies used">
          {featured.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <ProjectLinks links={featured.links} />
      </div>

      <div className="featured__gallery">
        <img
          src={main.src}
          alt={main.alt}
          width={main.width}
          height={main.height}
          className="featured__main"
        />
        <div className="featured__thumbs">
          {others.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </article>
  )
}

export default FeaturedProject
