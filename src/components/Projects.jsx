import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RxCross1 } from "react-icons/rx";
import { FaGithub, FaFigma } from 'react-icons/fa';
import styles from '../styles/components/Projects.module.scss';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('front-end');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const projects = {
    'front-end': [
      {
        id: 1,
        name: 'Omiage',
        image: '/images/projects/omiage.png',
        description: 'project_omiage',
        additionalImages: ['/images/projects/omiage1.png', '/images/projects/omiage2.png', '/images/projects/omiage3.png', '/images/projects/omiage4.png', '/images/projects/omiage5.png', '/images/projects/omiage6.png'],
        mockupImages: ['/images/projects/mu-omiage1.png', '/images/projects/mu-omiage2.png', '/images/projects/mu-omiage3.png'],
        video: '/videos/omiage.mp4',
        githubLink: 'https://github.com/stevenratton/stevenratton.github.io.git',
        figmaLink: 'https://www.figma.com/design/ajMMLux9thc4kSp1dmNqmH/omiage?node-id=0-1&t=vmu2J2BskmXUCoVF-1',
      },
      {
        id: 2,
        name: 'Ubstar',
        image: '/images/projects/ubstar.png',
        description: 'project_ubstar',
        additionalImages: ['/images/projects/ubstar1.png', '/images/projects/ubstar2.png', '/images/projects/ubstar3.png', '/images/projects/ubstar4.png'],
        mockupImages: ['/images/projects/mu-ubstar1.png', '/images/projects/mu-ubstar2.png', '/images/projects/mu-ubstar3.png'],
        video: '/videos/ubstar.mp4',
        githubLink: 'https://github.com/Gambizzz/ubstar_landing_page.git',
        figmaLink: null,
      },
      {
        id: 3,
        name: 'Landing Page - Portfolio',
        image: '/images/projects/portfolio.png',
        description: 'project_portfolio',
        additionalImages: ['/images/projects/portfolio1.png', '/images/projects/portfolio2.png', '/images/projects/portfolio3.png', '/images/projects/portfolio4.png'],
        video: '/videos/portfolio.mp4',
        githubLink: 'https://github.com/Gambizzz/portfolio_React_Strapi.git',
        figmaLink: null,
      },
      {
        id: 4,
        name: 'The Surfing Project',
        image: '/images/projects/surfing.png',
        description: 'project_surfing',
        additionalImages: ['/images/projects/surfing1.png', '/images/projects/surfing2.png', '/images/projects/surfing3.png', '/images/projects/surfing4.png'],
        mockupImages: ['/images/projects/mu-surfing1.png', '/images/projects/mu-surfing2.png', '/images/projects/mu-surfing3.png'],
        video: '/videos/surfing.mp4',
        githubLink: '',
        figmaLink: '',
      },
    ],
    'fullstack': [
      { 
        id: 5,
        name: 'Menu',
        image: '/images/projects/menu.png',
        description: 'project_menu',
        additionalImages: ['/images/projects/menu1.png', '/images/projects/menu2.png', '/images/projects/menu3.png', '/images/projects/menu4.png', '/images/projects/menu5.png'],
        mockupImages: ['/images/projects/mu-menu1.png', '/images/projects/mu-menu2.png', '/images/projects/mu-menu3.png'],
        video: ['/videos/menu.mp4', '/videos/menu1.mp4'],
        githubLink: ['https://github.com/Gambizzz/back_menu.git', 'https://github.com/Gambizzz/front_menu.git'],
        figmaLink: 'https://www.figma.com/design/X263wufvh7oE4MfqBedLyD/MENU?node-id=0-1&t=P2FZ1dJPU9TGyTKx-1',
      },
      {
        id: 6,
        name: 'Chapatte',
        image: '/images/projects/chapatte.png',
        description: 'project_chapatte',
        additionalImages: ['/images/projects/chapatte1.png', '/images/projects/chapatte2.png', '/images/projects/chapatte3.png', '/images/projects/chapatte4.png'],
        mockupImages: ['/images/projects/mu-chat1.png', '/images/projects/mu-chat2.png', '/images/projects/mu-chat3.png'],
        video: '/videos/chapatte.mp4',
        githubLink: 'https://github.com/Gambizzz/chapatte_project.git',
        figmaLink: 'https://www.figma.com/design/7T7TX2OVGblRWnOhNDL6LY/CHAPATTE?node-id=1-2&t=6C0lQ09Unl1U0C7t-1',
      },
      {
        id: 7,
        name: 'Drumkit',
        image: '/images/projects/drumkit.png',
        description: 'project_drumkit',
        additionalImages: ['/images/projects/drumkit1.png'],
        mockupImages: ['/images/projects/mu-drum1.png', '/images/projects/mu-drum2.png', '/images/projects/mu-drum3.png'],
        video: '/videos/drumkit.mp4',
        githubLink: '',
        figmaLink: '',
      },
      {
        id: 8,
        name: 'Film List',
        image: '/images/projects/filmlist.png',
        description: 'project_filmlist',
        additionalImages: ['/images/projects/filmlist1.png', '/images/projects/filmlist2.png', '/images/projects/filmlist3.png'],
        mockupImages: ['/images/projects/mu-film1.png', '/images/projects/mu-film2.png', '/images/projects/mu-film3.png'],
        video: '/videos/filmlist.mp4',
        githubLink: 'https://github.com/Gambizzz/films_list_JS.git',
        figmaLink: null,
      },
    ],
    'design': [
      {
        id: 9,
        name: 'Maxime Vincenti',
        image: '/images/projects/corde.png',
        description: 'project_maxime_vincenti',
        additionalImages: ['/images/projects/recto.png', '/images/projects/verso.png']
      },
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
  
  const hasMultipleProjects = filteredProjects.length > 1;

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
          <div className={`${styles.projectsRow} ${hasMultipleProjects ? styles.animate : ''}`}>
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
            <h1>{selectedProject.name}</h1>

            <h2>{t('projectDescript')}</h2>
            <p>{t(selectedProject.description)}</p>
            <ul className={styles.socialLinks}>
              {Array.isArray(selectedProject.githubLink) ? (
                selectedProject.githubLink.map((link, index) => (
                  <li
                    key={`github-link-${index}`}
                    onMouseEnter={() => setHoveredLink('github')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </li>
                ))
              ) : (
                selectedProject.githubLink && (
                  <li
                    onMouseEnter={() => setHoveredLink('github')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </li>
                )
              )}

              {selectedProject.figmaLink && (
                <li
                  onMouseEnter={() => setHoveredLink('figma')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a href={selectedProject.figmaLink} target="_blank" rel="noopener noreferrer">
                    <FaFigma />
                  </a>
                </li>
              )}
            </ul>

            <h2>{t('projectVisu')}</h2>
            <div className={styles.additionalImages}>
              {selectedProject.additionalImages.map((image, index) => (
                <div key={index} className={styles.additionalImageCard} style={{ backgroundImage: `url(${image})` }}>
                  <div className={styles.overlay}></div>
                </div>
              ))}
            </div>

            <h2>{t('projectMu')}</h2>
            <div className={styles.mockups}>
              {selectedProject.mockupImages && selectedProject.mockupImages.length > 0 ? (
                <>
                  <div className={styles.mockupRow}>
                    {selectedProject.mockupImages.slice(0, 2).map((mockup, index) => (
                      <div
                        key={index}
                        className={styles.mockupImage}
                        style={{ backgroundImage: `url(${mockup})` }}
                      ></div>
                    ))}
                  </div>
                  {selectedProject.mockupImages.length > 2 && (
                    <div className={styles.mockupCentered}>
                      <div
                        className={styles.mockupImage}
                        style={{ backgroundImage: `url(${selectedProject.mockupImages[2]})` }}
                      ></div>
                    </div>
                  )}
                </>
              ) : (
                <p>{t('noneMu')}</p>
              )}
            </div>

            <h2>{t('projectVid')}</h2>
            {selectedProject.video ? (
              typeof selectedProject.video === 'string' ? (
                <video className={styles.videoPlayer} controls>
                  <source src={selectedProject.video} type="video/mp4" />
                  {t('unsupportVid')}
                </video>
              ) : (
                selectedProject.video.map((videoSrc, index) => (
                  <video key={index} className={styles.videoPlayer} controls>
                    <source src={videoSrc} type="video/mp4" />
                    {t('unsupportVid')}
                  </video>
                ))
              )
            ) : (
              <p>{t('noneVid')}</p>
            )}

            <div className={styles.closePopup} onClick={closePopup}>
              <button>
                <RxCross1 />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;