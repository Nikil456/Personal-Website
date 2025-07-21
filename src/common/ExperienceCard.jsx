import React from 'react';
import styles from './ExperienceCard.module.css';

function ExperienceCard({ company, title, date, img, companyLink }) {
  return (
    <div className={styles.experienceCard}>
      {img && companyLink ? (
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={company + ' logo'} className={styles.experienceImg} />
        </a>
      ) : img ? (
        <img src={img} alt={company + ' logo'} className={styles.experienceImg} />
      ) : null}
      <h3>{company}</h3>
      <h4>{title}</h4>
      <p>{date}</p>
    </div>
  );
}

export default ExperienceCard; 