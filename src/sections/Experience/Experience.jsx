import styles from './ExperienceStyles.module.css';
import ExperienceCard from '../../common/ExperienceCard';
import frontline from '../../assets/frontline.svg';
import hologroup from '../../assets/hologroup.jpeg';

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceContainer}>
        <ExperienceCard 
          company="Frontline Insurance"
          title="Software Development Engineer in Test Intern"
          date="June 2024 - August 2024"
          img={frontline}
          companyLink="https://www.frontlineinsurance.com"
        />
        <ExperienceCard 
          company="Frontline Insurance"
          title="System Administrator Intern"
          date="June 2023 - August 2023"
          img={frontline}
          companyLink="https://www.frontlineinsurance.com"
        />
        <ExperienceCard 
          company="3D Hologroup"
          title="Software Engineer Intern"
          date="January 2021 - May 2022"
          img={hologroup}
          companyLink="https://www.linkedin.com/company/3dhologroup/posts/?feedView=all"
        />
      </div>
    </section>
  );
}

export default Experience; 