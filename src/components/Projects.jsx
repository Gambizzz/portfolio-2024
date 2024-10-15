import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Projects.module.scss';


const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('front-end');

  const projects = {
    'front-end': [
      { id: 1, name: 'Omiage', image: '/images/project4.jpg' },
      { id: 2, name: 'Ubstar', image: '/images/projects/ubstar.png' },
      { id: 3, name: 'Landing Page - Portfolio', image: '/images/projects/portfolio.png' },
      { id: 4, name: 'The Surfing Project', image: '/images/projects/surfing-project.png' },
    ],
    'fullstack': [
      { id: 5, name: 'Menu', image: '/images/projects/menu.png' },
      { id: 6, name: 'Chapatte', image: '/images/projects/chapatte.png' },
      { id: 7, name: 'Drumkit', image: '/images/projects/drumkit.png' },
      { id: 8, name: 'Film List', image: '/images/project8.jpg' },
    ],
    'design': [
      { id: 9, name: 'Maxime Vincenti', image: '/images/projects/max.png' },
    ]
  };

  const filteredProjects = projects[selectedCategory];

  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h1 className={styles.projectTitle}>{t('project_title')}</h1>
        <p className={styles.projectLine}>{t('project_line')}</p>
      </div>

      <div className={styles.fullProjects}>
        <div className={styles.buttonsContainer}>
          <button
            className={selectedCategory === 'front-end' ? styles.active : ''}
            onClick={() => setSelectedCategory('front-end')}
          >
            Front-end
          </button>
          <button
            className={selectedCategory === 'fullstack' ? styles.active : ''}
            onClick={() => setSelectedCategory('fullstack')}
          >
            Fullstack
          </button>
          <button
            className={selectedCategory === 'design' ? styles.active : ''}
            onClick={() => setSelectedCategory('design')}
          >
            Design/Branding
          </button>
        </div>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsRow}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <img src={project.image} alt={project.name} />
                <div className={styles.projectTag}>{project.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
