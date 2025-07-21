import styles from './ProjectsStyles.module.css'
import greenplate from '../../assets/greenplate.png'
import hobbystore from '../../assets/hobbystore.jpg'
import ProjectCard from '../../common/ProjectCard'
import pathvoice from '../../assets/pathvoice.png'
import aiimageclassifier from '../../assets/image-classifier.jpg'

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
            src={aiimageclassifier} link ="https://github.com/Nikil456/AI-Image-Classifier" 
            h3="CatagorAI" 
            p="AI Image Classifier"
            />
            <ProjectCard 
            src={pathvoice} link ="https://devpost.com/software/pathvoice-ai-tour-guide" 
            h3="PathVoice" 
            p="AI Travel Guide"
            />
        </div>
    </section>
  )
}

export default Projects
