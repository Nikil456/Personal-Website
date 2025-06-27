import styles from './ProjectsStyles.module.css'
import greenplate from '../../assets/greenplate.png'
import hobbystore from '../../assets/hobbystore.jpg'
import ProjectCard from '../../common/ProjectCard'
import pathvoice from '../../assets/pathvoice.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={greenplate} link ="https://github.com/Nikil456/CS_2340_Greenplate" 
            h3="GreenPlate" 
            p="Meal Tracking App"
            />
            <ProjectCard 
            src={hobbystore} link ="https://github.com/Nikil456/NodeJS-Side-Project" 
            h3="HobbyStore" 
            p="Hobby Web Store"
            />
            <ProjectCard 
            src={pathvoice} link ="https://github.com/ayushpai/pathvoice/tree/main" 
            h3="PathVoice" 
            p="AI Travel Guide"
            />
        </div>
    </section>
  )
}

export default Projects
