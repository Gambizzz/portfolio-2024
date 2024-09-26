import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Projects: "Projects",

      about_title: "About me",
      about_line: "Get to know me better",
      section_01: "After a background in Art History and Archeology, I decided to retrain in web development, a field where <span style='color:rgb(255, 110, 66)'>creativity</span> and logic harmoniously blend. Trained at The Hacking Project as a <span style='color:rgb(255, 110, 66)'>full-stack developer</span>, I gained a solid mastery of <span style='color:rgb(255, 110, 66)'>backends</span> with Ruby and Ruby on Rails, databases with SQL and PostgreSQL, and the creation of <span style='color:rgb(255, 110, 66)'>dynamic interfaces</span> with React, JavaScript, and Vite.js. I also honed my design skills with Figma to create <span style='color:rgb(255, 110, 66)'>visually coherent projects</span>.",
      section_02: "Gradually, my interest shifted towards <span style='color:rgb(255, 110, 66)'>front-end development</span>, where I discovered a true passion for creating immersive and intuitive user experiences. Curious and passionate, I began <span style='color:rgb(255, 110, 66)'>self-teaching</span> technologies like Next.js and <span style='color:rgb(255, 110, 66)'>exploring</span> 3D creation and animations to <span style='color:rgb(255, 110, 66)'>enhance</span> my skills and <span style='color:rgb(255, 110, 66)'>enrich</span> my projects. I'm particularly motivated by the idea that every visual detail matters, whether it's the alignment of elements or color harmony, to deliver a <span style='color:rgb(255, 110, 66)'>smooth and engaging user experience</span>.",
      section_03: "During collaborative projects, I took on <span style='color:rgb(255, 110, 66)'>leadership</span> roles, coordinating teams to meet objectives while <span style='color:rgb(255, 110, 66)'>adapting</span> to the demands and constraints of each project. I demonstrated great <span style='color:rgb(255, 110, 66)'>responsiveness</span> to technical challenges and a keen eye for detail, allowing me to <span style='color:rgb(255, 110, 66)'>solve</span> complex problems while ensuring the <span style='color:rgb(255, 110, 66)'>quality</span> of the final result. My <span style='color:rgb(255, 110, 66)'>autonomy</span>, coupled with strong <span style='color:rgb(255, 110, 66)'>motivation</span>, enables me to quickly integrate into different environments and provide <span style='color:rgb(255, 110, 66)'>creative and efficient</span> solutions.",
      section_04: "Driven by a constant <span style='color:rgb(255, 110, 66)'>desire to improve</span>, I am determined to continue <span style='color:rgb(255, 110, 66)'>innovating</span> in my projects, always seeking the perfect balance between design and performance. My <span style='color:rgb(255, 110, 66)'>versatility</span>, <span style='color:rgb(255, 110, 66)'>team spirit</span>, and <span style='color:rgb(255, 110, 66)'>thirst for learning</span> are valuable <span style='color:rgb(255, 110, 66)'>assets</span> to contribute meaningfully to a development team.",
      french_cv: "French CV",
      english_cv: "English CV",

      project_title: "Seleted works",
      project_line: "Take a look at some of my projects",




      rights: "All rights reserved.",
      email: "Email me",
    },
  },
  fr: {
    translation: {
      Home: "Accueil",
      About: "À propos",
      Projects: "Projets",

      about_title: "A propos de moi",
      about_line: "Apprenez à me connaitre",
      section_01: "Après un parcours en Histoire de l'art et Archéologie, j’ai choisi de me reconvertir dans le développement web, un domaine où se mêlent <span style='color:rgb(255, 110, 66)'>créativité</span> et logique de manière harmonieuse. Formée chez The Hacking Project en tant que <span style='color:rgb(255, 110, 66)'>développeuse fullstack</span>, j'ai acquis une solide maîtrise des <span style='color:rgb(255, 110, 66)'>backends</span> avec Ruby et Ruby on Rails, des bases de données avec SQL et PostgreSQL, ainsi que la création d’<span style='color:rgb(255, 110, 66)'>interfaces dynamiques</span> avec React, JavaScript et Vite.js. J’ai également affiné mes compétences en design avec Figma pour concevoir des <span style='color:rgb(255, 110, 66)'>projets visuellement cohérents</span>.",
      section_02: "Progressivement, mon intérêt s'est orienté vers le <span style='color:rgb(255, 110, 66)'>front-end</span>, où j’ai découvert une véritable passion pour la création d’expériences utilisateurs immersives et intuitives. Curieuse et passionnée, j’ai commencé à explorer de manière <span style='color:rgb(255, 110, 66)'>autodidacte</span> des technologies comme Next.js et à m'<span style='color:rgb(255, 110, 66)'>initier</span> à la création 3D et aux animations, pour <span style='color:rgb(255, 110, 66)'>perfectionner</span> mes compétences afin d’<span style='color:rgb(255, 110, 66)'>enrichir</span> mes créations. Je suis particulièrement motivée par l'idée que chaque détail visuel compte, qu'il s'agisse de l’alignement des éléments ou de l'harmonie des couleurs, pour offrir une <span style='color:rgb(255, 110, 66)'>expérience utilisateur fluide et engageante</span>.",
      section_03: "Lors des projets collaboratifs, j’ai assumé des rôles de <span style='color:rgb(255, 110, 66)'>leader</span>, coordonnant les équipes pour atteindre les objectifs tout en m'<span style='color:rgb(255, 110, 66)'>adaptant</span> aux exigences et contraintes de chaque projet. J’ai démontré une grande <span style='color:rgb(255, 110, 66)'>réactivité</span> face aux défis techniques et une attention particulière aux détails, ce qui me permet de <span style='color:rgb(255, 110, 66)'>résoudre</span> des problématiques complexes tout en veillant à la <span style='color:rgb(255, 110, 66)'>qualité</span> du rendu final. Mon <span style='color:rgb(255, 110, 66)'>autonomie</span>, associée à une forte <span style='color:rgb(255, 110, 66)'>motivation</span>, me permet de m'intégrer rapidement dans différents environnements et d’apporter des solutions <span style='color:rgb(255, 110, 66)'>créatives et efficaces</span>.",
      section_04: "Animée par une <span style='color:rgb(255, 110, 66)'>volonté constante de progresser</span>, je suis déterminée à continuer à <span style='color:rgb(255, 110, 66)'>innover</span> dans mes projets, toujours à la recherche d'une combinaison parfaite entre design et performance. Ma <span style='color:rgb(255, 110, 66)'>polyvalence</span>, mon <span style='color:rgb(255, 110, 66)'>esprit d’équipe</span> et ma <span style='color:rgb(255, 110, 66)'>soif d'apprentissage</span> constituent des <span style='color:rgb(255, 110, 66)'>atouts</span> précieux pour contribuer de manière significative à une équipe de développement.",
      french_cv: "CV français",
      english_cv: "CV anglais",

      project_title: "Travaux choisis",
      project_line: "Découvrez certains de mes projets",



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
