import { motion } from "framer-motion"
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

    const aboutCards = [
        {
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon book-icon"
                >
                    <path
                        d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Formation",
            description: (
                <>
                    <strong>2023 - 2025</strong>:
                    L3 Informatique à l&apos;Université Grenoble Alpes.
                    <br />
                    <strong>2021 - 2023</strong>:
                    Cycle préparatoire & 1ère année du cycle ingénieur en Informatique & Réseaux (MIAGE) à EMSI.
                </>
            ),
            emoji: "🎓",
        },
        {
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon location-icon"
                >
                    <path
                        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Localisation",
            description: "Grenoble, France",
            emoji: "📍",
        },
        {
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon globe-icon"
                >
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 12H22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Langues",
            description: "Français (natif), Arabe (natif), Anglais (C1)",
            emoji: "🌍",
        },
        {
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon heart-icon"
                >
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Intérêts",
            description: "Web Design, UI/UX, Volleyball",
            emoji: "❤️",
        },
    ]

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
                        Étudiant passionné d&apos;informatique, je suis à la recherche d&apos;une alternance à partir de septembre
                        2025 pour un Master en informatique.
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
                                Qui suis-je? <span className="emoji animate-bounce-subtle">🧙‍♂️</span>
                            </h3>
                            <p className="card-text">
                                Je suis Mohamed Amarcha, un étudiant en informatique passionné par le développement web et les nouvelles
                                technologies. Actuellement en troisième année à l&apos;Université Grenoble Alpes, je cherche constamment
                                à approfondir mes connaissances et à relever de nouveaux défis.
                            </p>
                            <p className="card-text">
                                Mon parcours m&apos;a permis d&apos;acquérir des compétences variées en programmation et en conception
                                de systèmes. Je suis particulièrement intéressé par le développement fullstack, l&apos;intelligence
                                artificielle et la conception d&apos;interfaces utilisateur.
                            </p>
                                {/* <img src={swimmingpenguin} alt="Swimming Penguin" className="swimming-penguin-gif" /> */}
                        </div>
                    </motion.div>

                    <div className="about-cards">
                        {aboutCards.map((card, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                className="about-card info-card"
                            >
                                <div className="card-content">
                                    <div className="card-icon-container">
                                        {card.icon}
                                        <motion.span
                                            className="card-emoji"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.5 }}
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
