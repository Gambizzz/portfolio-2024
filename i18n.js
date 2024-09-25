import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Projects: "Projects",

      About_title: "About me",
      section_01: "After a background in Art History and Archeology, I decided to retrain in web development, a field where creativity and logic harmoniously blend. Trained at The Hacking Project as a full-stack developer, I gained a solid mastery of backends with Ruby and Ruby on Rails, databases with SQL and PostgreSQL, and the creation of dynamic interfaces with React, JavaScript, and Vite.js. I also honed my design skills with Figma to create visually coherent projects.",
      section_02: "Gradually, my interest shifted towards front-end development, where I discovered a true passion for creating immersive and intuitive user experiences. Curious and passionate, I began self-teaching technologies like Next.js and exploring 3D creation and animations to enhance my skills and enrich my projects. I'm particularly motivated by the idea that every visual detail matters, whether it's the alignment of elements or color harmony, to deliver a smooth and engaging user experience.",
      section_03: "During collaborative projects, I took on leadership roles, coordinating teams to meet objectives while adapting to the demands and constraints of each project. I demonstrated great responsiveness to technical challenges and a keen eye for detail, allowing me to solve complex problems while ensuring the quality of the final result. My autonomy, coupled with strong motivation, enables me to quickly integrate into different environments and provide creative and efficient solutions.",
      section_04: "Driven by a constant desire to improve, I am determined to continue innovating in my projects, always seeking the perfect balance between design and performance. My versatility, team spirit, and thirst for learning are valuable assets to contribute meaningfully to a development team.",
      french_cv: "French CV",
      english_cv: "English CV",




      rights: "All rights reserved.",
      email: "Email me",
    },
  },
  fr: {
    translation: {
      Home: "Accueil",
      About: "À propos",
      Projects: "Projets",

      About_title: "A propos de moi",
      section_01: "Après un parcours en Histoire de l'art et Archéologie, j’ai choisi de me reconvertir dans le développement web, un domaine où se mêlent créativité et logique de manière harmonieuse. Formée chez The Hacking Project en tant que développeuse fullstack, j'ai acquis une solide maîtrise des backends avec Ruby et Ruby on Rails, des bases de données avec SQL et PostgreSQL, ainsi que la création d’interfaces dynamiques avec React, JavaScript et Vite.js. J’ai également affiné mes compétences en design avec Figma pour concevoir des projets visuellement cohérents.",
      section_02: "Progressivement, mon intérêt s'est orienté vers le front-end, où j’ai découvert une véritable passion pour la création d’expériences utilisateurs immersives et intuitives. Curieuse et passionnée, j’ai commencé à explorer de manière autodidacte des technologies comme Next.js et à m'initier à la création 3D et aux animations, pour perfectionner mes compétences afin d’enrichir mes créations. Je suis particulièrement motivée par l'idée que chaque détail visuel compte, qu'il s'agisse de l’alignement des éléments ou de l'harmonie des couleurs, pour offrir une expérience utilisateur fluide et engageante.",
      section_03: "Lors des projets collaboratifs, j’ai assumé des rôles de leader, coordonnant les équipes pour atteindre les objectifs tout en m'adaptant aux exigences et contraintes de chaque projet. J’ai démontré une grande réactivité face aux défis techniques et une attention particulière aux détails, ce qui me permet de résoudre des problématiques complexes tout en veillant à la qualité du rendu final. Mon autonomie, associée à une forte motivation, me permet de m'intégrer rapidement dans différents environnements et d’apporter des solutions créatives et efficaces.",
      section_04: "Animée par une volonté constante de progresser, je suis déterminée à continuer à innover dans mes projets, toujours à la recherche d'une combinaison parfaite entre design et performance. Ma polyvalence, mon esprit d’équipe et ma soif d'apprentissage constituent des atouts précieux pour contribuer de manière significative à une équipe de développement.",
      french_cv: "CV français",
      english_cv: "CV anglais",



      rights: "Tous droits réservés.",
      email: "Contact",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
