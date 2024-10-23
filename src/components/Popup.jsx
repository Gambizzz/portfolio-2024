import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaGithub, FaFigma } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Popup.module.scss';

const Popup = ({ project, closePopup, hoveredLink, setHoveredLink }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h1>{project.name}</h1>

        <h2>{t('projectDescript')}</h2>
        <p>{t(project.description)}</p>
        <ul className={styles.socialLinks}>
          {Array.isArray(project.githubLink) ? (
            project.githubLink.map((link, index) => (
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
            project.githubLink && (
              <li
                onMouseEnter={() => setHoveredLink('github')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
            )
          )}

          {project.figmaLink && (
            <li
              onMouseEnter={() => setHoveredLink('figma')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                <FaFigma />
              </a>
            </li>
          )}
        </ul>

        <h2>{t('projectVisu')}</h2>
        <div className={styles.additionalImages}>
          {project.additionalImages.map((image, index) => (
            <div key={index} className={styles.additionalImageCard} style={{ backgroundImage: `url(${image})` }}>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>

        <h2>{t('projectMu')}</h2>
        <div className={styles.mockups}>
          {project.mockupImages && project.mockupImages.length > 0 ? (
            <>
              <div className={styles.mockupRow}>
                {project.mockupImages.slice(0, 2).map((mockup, index) => (
                  <div
                    key={index}
                    className={styles.mockupImage}
                    style={{ backgroundImage: `url(${mockup})` }}
                  ></div>
                ))}
              </div>
              {project.mockupImages.length > 2 && (
                <div className={styles.mockupCentered}>
                  <div
                    className={styles.mockupImage}
                    style={{ backgroundImage: `url(${project.mockupImages[2]})` }}
                  ></div>
                </div>
              )}
            </>
          ) : (
            <p>{t('noneMu')}</p>
          )}
        </div>

        <h2>{t('projectVid')}</h2>
        {project.video ? (
          typeof project.video === 'string' ? (
            <video className={styles.videoPlayer} controls>
              <source src={project.video} type="video/mp4" />
              {t('unsupportVid')}
            </video>
          ) : (
            project.video.map((videoSrc, index) => (
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
  );
};

export default Popup;
