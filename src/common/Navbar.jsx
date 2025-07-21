import styles from './NavbarStyles.module.css';
import { useTheme } from './themeContext';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.png';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

    // Custom smooth scroll
    function smoothScrollTo(targetY, duration = 500) {
        const startY = window.scrollY;
        const diff = targetY - startY;
        let start;
        function step(timestamp) {
            if (!start) start = timestamp;
            const time = timestamp - start;
            const percent = Math.min(time / duration, 1);
            window.scrollTo(0, startY + diff * easeInOutQuad(percent));
            if (percent < 1) {
                window.requestAnimationFrame(step);
            }
        }
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
        window.requestAnimationFrame(step);
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -70; // height of navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            smoothScrollTo(y, 500);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <span>nikil kandala</span>
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