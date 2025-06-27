import styles from './NavbarStyles.module.css';
import { useTheme } from './themeContext';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <span>NK</span>
                </div>
                <div className={styles.navLinks}>
                    <button 
                        className={styles.navButton}
                        onClick={() => scrollToSection('hero')}
                    >
                        Home
                    </button>
                    <button 
                        className={styles.navButton}
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </button>
                    <button 
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                    >
                        <img src={themeIcon} alt="Toggle theme" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 