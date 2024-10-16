import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Projects.module.scss';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('front-end');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const projects = {
    'front-end': [
      { id: 1, name: 'Omiage', image: '/images/projects/omiage.png', description: 'project_omiage', additionalImages: ['/images/projects/omiage1.png', '/images/projects/omiage2.png'] },
      { id: 2, name: 'Ubstar', image: '/images/projects/ubstar.png', description: 'project_ubstar', additionalImages: ['/images/projects/ubstar1.png'] },
      { id: 3, name: 'Landing Page - Portfolio', image: '/images/projects/portfolio.png', description: 'project_portfolio', additionalImages: [] },
      { id: 4, name: 'The Surfing Project', image: '/images/projects/surfing.png', description: 'project_surfing', additionalImages: ['/images/projects/surfing1.png', '/images/projects/surfing2.png'] },
    ],
    'fullstack': [
      { id: 5, name: 'Menu', image: '/images/projects/menu.png', description: 'project_menu', additionalImages: ['/images/projects/menu1.png'] },
      { id: 6, name: 'Chapatte', image: '/images/projects/chapatte.png', description: 'project_chapatte', additionalImages: [] },
      { id: 7, name: 'Drumkit', image: '/images/projects/drumkit.png', description: 'project_drumkit', additionalImages: [] },
      { id: 8, name: 'Film List', image: '/images/projects/filmlist.png', description: 'project_filmlist', additionalImages: [] },
    ],
    'design': [
      { id: 9, name: 'Maxime Vincenti', image: '/images/projects/corde.png', description: 'project_maxime_vincenti', additionalImages: ['/images/projects/recto.png', '/images/projects/verso.png'] },
    ],
  };

  const filteredProjects = projects[selectedCategory];

  const handleButtonClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

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
              <div key={project.id} className={styles.bigCard}>
                <div
                  className={styles.littleCard}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className={styles.overlay}></div>
                  <button
                    className={styles.buttonSvg}
                    onClick={() => handleButtonClick(project)}
                    style={{ background: 'none', border: 'none', padding: 0 }}
                  >
                    <img
                      src="/images/btn.svg"
                      alt="Discover button"
                      className={styles.buttonSvg}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isPopupOpen && selectedProject && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h2>{selectedProject.name}</h2>
            <p>{t(selectedProject.description)}</p>
            
            {/* Section for additional images */}
            <div className={styles.additionalImages}>
              {selectedProject.additionalImages.map((image, index) => (
                <div key={index} className={styles.additionalImageCard} style={{ backgroundImage: `url(${image})` }}>
                  <div className={styles.overlay}></div>
                </div>
              ))}
            </div>
            
            <button onClick={closePopup} className={styles.closeButton}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;






