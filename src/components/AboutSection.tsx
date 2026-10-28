import { motion } from "framer-motion"
import Icon from "./Icon"
import { aboutCards } from "../data/about"
import "./AboutSection.css"

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">À propos de moi</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Étudiant passionné d&apos;informatique, en alternance chez Sirap en tant que développeur fullstack.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-card main-card"
          >
            <div className="card-content">
              <h3 className="card-title">
                Qui suis-je? <span className="emoji animate-bounce-subtle" aria-hidden="true">🧙‍♂️</span>
              </h3>
              <p className="card-text">
                Je suis Mohamed Amarcha, un étudiant en informatique passionné par le développement web et les nouvelles
                technologies. Actuellement en 2ème année MAALSI au CESI Lyon, je suis en alternance chez Sirap à
                Romans-sur-Isère en tant que développeur fullstack, où je continue d&apos;approfondir mes connaissances
                et de relever de nouveaux défis.
              </p>
              <p className="card-text">
                Mon parcours m&apos;a permis d&apos;acquérir des compétences variées en programmation et en conception
                de systèmes. Je suis particulièrement intéressé par le développement fullstack, l&apos;intelligence
                artificielle et la conception d&apos;interfaces utilisateur.
              </p>
            </div>
          </motion.div>

          <div className="about-cards">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="about-card info-card"
              >
                <div className="card-content">
                  <div className="card-icon-container">
                    <Icon name={card.icon} className="card-icon" />
                    <motion.span
                      className="card-emoji"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.5 }}
                      aria-hidden="true"
                    >
                      {card.emoji}
                    </motion.span>
                  </div>
                  <h3 className="card-subtitle">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
