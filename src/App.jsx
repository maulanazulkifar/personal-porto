import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import NavbarMobile from "./components/NavbarMobile/index.jsx";
import Hero from "./components/Hero/index.jsx";
import Footer from "./components/Footer/index.jsx";
import WorkExperience from "./components/WorkExperience/index.jsx";
import WorkExperienceMobile from "./components/WorkExperienceMobile/index.jsx";
import Skills from "./components/Skills/index.jsx";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <div>
      {
        isMobile?<NavbarMobile/>:<Navbar/>
      }
      <Hero/>
      {
        isMobile?<WorkExperienceMobile/>:<WorkExperience/>
      }
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
