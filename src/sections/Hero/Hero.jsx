import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import githubIconLight from '../../assets/github-light.svg';
import githubIconDark from '../../assets/github-dark.svg';
import {useTheme} from '../../common/themeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg}/>
                <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme}/>
            </div>
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
                </span>
                <p className={styles.description}>3rd Year CS student with threads in Artificial Intelligence and Information Internetworks</p>
                <a href='https://drive.google.com/file/d/1QIFbka4WDIavqDPtz8WUSGkY7kMHSrSS/view?usp=sharing' target='_blank'>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero
