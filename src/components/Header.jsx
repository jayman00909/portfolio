import { useState } from 'react'
import profile from '../data/profile'
import '../styles/Header.css'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  // `open` remembers whether the mobile menu is showing.
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">
          {profile.name}
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          id="site-nav"
          className={`header__nav${open ? ' header__nav--open' : ''}`}
          aria-label="Main"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
