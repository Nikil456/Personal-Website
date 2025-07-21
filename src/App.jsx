import './App.css'
import Navbar from './common/Navbar';
import Hero from './sections/Hero/Hero';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects'

function App() {
  return <>
    <Navbar />
    <Hero/>
    <Experience/>
    <Projects/>
  </>;
}

export default App;
