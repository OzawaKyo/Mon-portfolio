import books from "../assets/books.webp"
import quarto from "../assets/quarto.webp"
import coding from "../assets/coding.webp"
import shell from "../assets/shell.webp"

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  link?: string
  github?: string
  emoji?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Jeu de plateau Quarto",
    description: "Un clone du jeu Quarto développé en Java avec une IA",
    longDescription:
      "Conception et développement d’une version numérique du jeu de plateau Quarto – réalisé en équipe de 6 personnes, fidèle aux règles du jeu original. Modélisation complète de la logique du jeu (gestion du plateau, tour par tour, conditions de victoire). Création d’une interface utilisateur intuitive, assurant une prise en main rapide et une expérience agréable. Développement d’un algorithme d’ia avec plusieurs niveaux de difficulté, capable d’adapter ses choix stratégiques en fonction du niveau sélectionné. Mise en place d’un système de gestion des erreurs et d’un affichage pas-à-pas de l’exécution.",
    image: quarto,
    tags: ["Java", "Swing", "Programmation orientée objet", "Algorithmes", "MVC"],
    github: "https://github.com/OzawaKyo",
    emoji: "🎮",
  },
  {
    id: 2,
    title: "Gestionnaire de bibliothèque",
    description: "Une application web de gestion de bibliothèque avec React et Django",
    longDescription:
      "Développement d’une application web de bibliothèque en ligne – réalisé en équipe de 3 personnes. Application web permettant la gestion et la consultation d’un catalogue de livres en ligne. Conception de l’architecture client-serveur et définition des besoins fonctionnels. Implémentation du frontend avec React pour une interface dynamique et responsive. Développement du backend avec Django (Python) pour la gestion des utilisateurs, des ouvrages et des emprunts. Intégration de Firebase pour l’authentification et le stockage de données complémentaires.",
    image: books,
    tags: ["React", "Django", "Firebase", "Git"],
    github: "https://github.com/OzawaKyo",
    emoji: "📚",
  },
  {
    id: 3,
    title: "Simulateur de processeur ARMv5",
    description: "Un simulateur de processeur ARMv5 développé en C",
    longDescription:
      "Réalisation d’un simulateur ARMv5 en langage C – réalisé en équipe de 6 personnes. Étude approfondie de la documentation technique du processeur ARMv5 (jeu d’instructions, architecture, fonctionnement). Développement d’un simulateur capable d’exécuter des instructions assembleur ARMv5. Analyse du jeu d’instructions ARM et conception d’un interpréteur bas niveau. Implémentation en langage C de la gestion des registres, de la mémoire et du décodage d’instructions. Mise en place d’un système de gestion des erreurs et d’un affichage pas-à-pas de l’exécution. Organisation du projet avec Git, répartition des tâches et intégration progressive des modules. Tests de validation à l’aide de cas d’usage et de programmes ARM réels.",
    image: coding,
    tags: ["C", "Architecture", "Assembleur", "Simulation", "GCC", "Makefile"],
    github: "https://github.com/OzawaKyo",
    emoji: "⚙️",
  },
  {
    id: 4,
    title: "Mini Shell Unix",
    description: "Un mini shell Unix avec gestion des processus en C",
    longDescription:
      "Réalisation d’un mini-shell Unix – réalisé en équipe de 2 personnes. Conception et développement d’un mini-shell Unix permettant d’exécuter des processus en premier et arrière-plan. Gestion des jobs avec commandes intégrées et implémentation des signaux pour gérer l’interruption et la suspension des processus. Utilisation de setpgid pour gérer les groupes de processus et waitpid pour ramasser les processus zombies. Test Unitaire et Intégration continue avec GitLab.",
    image: shell,
    tags: ["C", "Unix", "Processus", "Shell", "SIGCHLD", "WAITPID"],
    github: "https://github.com/OzawaKyo",
    emoji: "💻",
  },
]
