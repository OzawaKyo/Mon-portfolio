import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Expérience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  // Fonction pour gérer le défilement fluide
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setIsOpen(false) // Fermer le menu mobile si ouvert
    }
  }

  return (
    <nav className={`navbar `}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className={`logo-text `} data-text="Mohamed.dev">
              <span className={`logo-gradient `}>Mohamed.dev</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`nav-item `}
              >
                {item.name}
              </a>
            ))}

            {/* Chaos Mode Button */}
            {/* <ChaosButton /> */}
          </div>

          {/* Mobile Navigation Button */}
          <div className="mobile-nav-toggle">
            {/* <ChaosButton /> */}
            <button onClick={toggleMenu} aria-label="Toggle menu" className="menu-button">
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className={`mobile-menu `}>
          <div className="mobile-menu-items">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`mobile-nav-item `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
