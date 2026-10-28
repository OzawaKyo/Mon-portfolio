import Icon from "./Icon"
import { socialLinks } from "../data/social"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#hero" className="logo-text">
              <span className="logo-gradient">Mohamed.dev</span>
            </a>
            <p className="footer-tagline">Étudiant en informatique à l&apos;Université Grenoble Alpes</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.name}
                className="social-link"
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider">
          <p className="copyright">
            © {currentYear} Mohamed Amarcha. Tous droits réservés. Créé avec
            <Icon name="heart" size={16} className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
