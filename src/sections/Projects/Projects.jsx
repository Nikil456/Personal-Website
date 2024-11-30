import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={viberr} link ="https://github.com/Nikil456/CS_2340_Greenplate" 
            h3="Viberr" 
            p="Streaming App"
            />
            <ProjectCard 
            src={freshBurger} link ="https://github.com/Nikil456/NodeJS-Side-Project" 
            h3="FreshBurger" 
            p="Food App"
            />
        </div>
    </section>
  )
}

export default Projects
