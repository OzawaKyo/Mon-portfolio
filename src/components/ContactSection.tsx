import { motion } from "framer-motion"
import Icon from "./Icon"
import ContactForm from "./ContactForm"
import { contactInfo } from "../data/contact"
import "./ContactSection.css"

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Me contacter</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Vous avez une question ou une opportunité? N&apos;hésitez pas à me contacter!
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-form-container"
          >
            <div className="contact-form-card">
              <h3 className="contact-form-title">
                Envoyez-moi un message
                <motion.span
                  className="contact-emoji"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  aria-hidden="true"
                >
                  ✉️
                </motion.span>
              </h3>
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-info-container"
          >
            <div>
              <h3 className="contact-info-title">Mes coordonnées</h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="contact-info-card">
                      <div className="contact-info-icon-container">
                        <Icon name={info.icon} className="contact-icon" />
                        <span className="contact-info-emoji" aria-hidden="true">
                          {info.emoji}
                        </span>
                      </div>
                      <div className="contact-info-content">
                        <h4 className="contact-info-label">{info.title}</h4>
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-info-value">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="job-card-container"
            >
              <div className="job-card">
                <h3 className="job-card-title">
                  <Icon name="sparkles" className="job-card-icon" />
                  Ouvert aux opportunités
                </h3>
                <p className="job-card-description">
                  En alternance chez Sirap, je reste ouvert aux projets freelance, collaborations et opportunités
                  intéressantes.
                </p>
                <a href="mailto:simoamarcha@icloud.com?subject=Opportunité de collaboration" className="job-card-button">
                  Me contacter pour une opportunité
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
