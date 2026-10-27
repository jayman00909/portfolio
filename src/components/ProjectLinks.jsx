// A row of buttons that open external pages (live demo, code) in a new tab.
function ProjectLinks({ links }) {
  if (!links || links.length === 0) return null

  return (
    <div className="project__links">
      {links.map((link, index) => (
        <a
          key={link.href}
          className={`btn ${index === 0 ? 'btn--primary' : 'btn--secondary'}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default ProjectLinks
