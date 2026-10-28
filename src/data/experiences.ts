export interface Experience {
  id: number
  type: "work" | "education"
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
  color: string
  emoji: string
}

export const experiences: Experience[] = [
  {
    id: 4,
    type: "work",
    title: "Développeur Fullstack (Alternance)",
    company: "Sirap",
    location: "Romans-sur-Isère, France",
    period: "Septembre 2025 - Aujourd'hui",
    description:
      "Alternance en développement fullstack dans le cadre du cursus MAALSI au CESI Lyon. Conception et développement de fonctionnalités web, maintenance et évolution des applications internes de l'entreprise.",
    skills: ["Angular", "NestJS", "PostgreSQL", "TypeScript", "Git"],
    color: "blue",
    emoji: "💼",
  },
  {
    id: 3,
    type: "education",
    title: "Cursus MAALSI",
    company: "CESI Lyon",
    location: "Lyon, France",
    period: "2024 - 2026",
    description:
      "Formation MAALSI (Manager en Architecture Appliquée aux Lignes et Systèmes d'Information), en alternance. Approfondissement du développement fullstack, de l'architecture logicielle et de la gestion de projet.",
    skills: ["Architecture SI", "Développement web", "Gestion de projet", "Agile"],
    color: "purple",
    emoji: "🎓",
  },
  {
    id: 1,
    type: "work",
    title: "Développeur Fullstack",
    company: "Orange Telecom",
    location: "Casablanca, Maroc",
    period: "Mai 2023 - Août 2023",
    description:
      "Stage de développement fullstack utilisant Spring Boot et Angular. Conception et développement d'une application web pour la gestion interne des ressources. Mise en place d'une API RESTful et intégration avec des services existants.",
    skills: ["Spring Boot", "Angular", "PostgreSQL", "Git", "Agile"],
    color: "orange",
    emoji: "📡",
  },
  {
    id: 2,
    type: "education",
    title: "Cycle préparatoire & 1ère année ingénieur Informatique & Réseaux (MIAGE)",
    company: "EMSI",
    location: "Maroc",
    period: "2021 - 2023",
    description:
      "Cycle préparatoire puis première année du cycle ingénieur en Informatique & Réseaux (MIAGE). Bases en algorithmique, programmation, réseaux et mathématiques appliquées.",
    skills: ["Algorithmique", "Programmation", "Réseaux", "Mathématiques"],
    color: "orange",
    emoji: "📘",
  },
]
