import profile from '../data/profile'
import '../styles/Footer.css'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {year} {profile.name}
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
