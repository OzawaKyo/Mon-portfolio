import type { ReactNode } from "react"
import type { IconName } from "../components/Icon"

export interface AboutCard {
  icon: IconName
  title: string
  description: ReactNode
  emoji: string
}

export const aboutCards: AboutCard[] = [
  {
    icon: "book",
    title: "Formation",
    description:
      "2023 - 2025 : L3 Informatique à l'Université Grenoble Alpes. 2021 - 2023 : Cycle préparatoire & 1ère année du cycle ingénieur en Informatique & Réseaux (MIAGE) à EMSI.",
    emoji: "🎓",
  },
  {
    icon: "map-pin",
    title: "Localisation",
    description: "Grenoble, France",
    emoji: "📍",
  },
  {
    icon: "globe",
    title: "Langues",
    description: "Français (natif), Arabe (natif), Anglais (C1)",
    emoji: "🌍",
  },
  {
    icon: "heart",
    title: "Intérêts",
    description: "Web Design, UI/UX, Volleyball",
    emoji: "❤️",
  },
]
