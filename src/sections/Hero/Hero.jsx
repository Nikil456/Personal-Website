import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import githubIconLight from '../../assets/github-light.svg';
import githubIconDark from '../../assets/github-dark.svg';
import devpostIconLight from '../../assets/devpost-light.png';
import devpostIconDark from '../../assets/devpost-dark.png';
import {useTheme} from '../../common/themeContext';

function Hero() {
    const {theme} = useTheme();
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
    const devpostIcon = theme === 'light' ? devpostIconLight : devpostIconDark;
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.info}>
                <h1>Nikil <br /> Kandala</h1>
                <h2>Georgia Tech</h2>
                <span> 
                    <a href="https://www.linkedin.com/in/nikilkandala/" target="blank">
                        <img src={linkedinIcon}/>
                    </a>
                    <a href="https://www.github.com/Nikil456" target="blank">
                        <img src={githubIcon}/>
                    </a>
                    <a href="https://devpost.com/kandala-nikil?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="blank">
                        <img src={devpostIcon}/>
                    </a>
                </span>
                <p className={styles.description}>4th Year CS student with threads in Artificial Intelligence and Information Internetworks</p>
                <a href='https://drive.google.com/file/d/1QIFbka4WDIavqDPtz8WUSGkY7kMHSrSS/view?usp=sharing' target='_blank'>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero
