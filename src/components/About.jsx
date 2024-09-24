import React, { useEffect, useState } from 'react';
import styles from '../styles/components/About.module.scss';

const sections = [
  {
    number: '01',
    text: `Après un parcours en Histoire de l'art et Archéologie, j’ai choisi de me reconvertir dans le développement web, un domaine où se mêlent créativité et logique de manière harmonieuse. Formée chez The Hacking Project en tant que développeuse fullstack, j'ai acquis une solide maîtrise des backends avec Ruby et Ruby on Rails, des bases de données avec SQL et PostgreSQL, ainsi que la création d’interfaces dynamiques avec React, JavaScript et Vite.js. J’ai également affiné mes compétences en design avec Figma pour concevoir des projets visuellement cohérents.`,
  },
  {
    number: '02',
    text: `Progressivement, mon intérêt s'est orienté vers le front-end, où j’ai découvert une véritable passion pour la création d’expériences utilisateurs immersives et intuitives. Curieuse et passionnée, j’ai commencé à explorer de manière autodidacte des technologies comme Next.js et de m'initier à la création 3D et aux animations, pour perfectionner mes compétences afin d’enrichir mes créations. Je suis particulièrement motivée par l'idée que chaque détail visuel compte, qu'il s'agisse de l’alignement des éléments ou de l'harmonie des couleurs, pour offrir une expérience utilisateur fluide et engageante.`,
  },
  {
    number: '03',
    text: `Lors des projets collaboratifs, j’ai assumé des rôles de leader, coordonnant les équipes pour atteindre les objectifs tout en m'adaptant aux exigences et contraintes de chaque projet. J’ai démontré une grande réactivité face aux défis techniques et une attention particulière aux détails, ce qui me permet de résoudre des problématiques complexes tout en veillant à la qualité du rendu final. Mon autonomie, associée à une forte motivation, me permet de m'intégrer rapidement dans différents environnements et d’apporter des solutions créatives et efficaces.`,
  },
  {
    number: '04',
    text: `Animée par une volonté constante de progresser, je suis déterminée à continuer à innover dans mes projets, toujours à la recherche d'une combinaison parfaite entre design et performance. Ma polyvalence, mon esprit d’équipe et ma soif d'apprentissage constituent des atouts précieux pour contribuer de manière significative à une équipe de développement.`,
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleScroll = () => {
    const cardElements = document.querySelectorAll(`.${styles.card}`);
    const windowHeight = window.innerHeight;
    let indexToSet = null;

    cardElements.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top;
      const cardBottom = rect.bottom;

      // Vérifiez si la carte est au centre de la fenêtre
      if (cardTop < windowHeight / 2 && cardBottom > windowHeight / 2) {
        indexToSet = index;
      }
    });

    setActiveIndex(indexToSet);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check for the current card on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className={styles.about}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
        >
          <div className={styles.cardNumber}>{section.number}</div>
          <div className={styles.cardContent}>
            <p className={styles.cardText}>{section.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;





