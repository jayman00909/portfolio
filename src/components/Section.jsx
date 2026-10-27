import '../styles/Section.css'

// A reusable page section: a small label, a heading, and whatever is placed inside.
// `tone` picks the background: 'default' (light grey), 'alt' (white) or 'dark' (navy).
function Section({ id, eyebrow, title, tone = 'default', children }) {
  const toneClass = tone === 'default' ? '' : ` section--${tone}`

  return (
    <section
      className={`section${toneClass}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default Section
