import React, {useRef, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/NavBar';
import LandingPage from './components/LandingPage';
import WasteApp from './components/WasteApp';
import Footer from './components/Footer';
import {animate} from 'framer-motion';

const App = () => {
  const location = useLocation();
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
        const targetY = ref.current.offsetTop;
        animate(window.scrollY, targetY, {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            onUpdate: (value) => window.scrollTo(0, value),
        });
    }
};

useEffect(() => {
  if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        about: aboutRef,
        work: workRef,
        contact: contactRef,
    };

    if (section in sectionRefs) {
        scrollToSection(sectionRefs[section as keyof typeof sectionRefs]);
    }

      setTimeout(() => {
          scrollToSection(sectionRefs[section]);
      }, 400);
  }
}, [location]);

  return (
    <div>
      <Navbar 
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToWork={() => scrollToSection(workRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
              <LandingPage aboutRef={aboutRef} workRef={workRef} contactRef={contactRef}/>
            } 
            />
            <Route path="/projects/wasteapp" element={
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              >
              <WasteApp />
              </motion.div>
              } 
            />
        </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  )
}

const AppWrapper = () => (
  <Router>
    <App/>
  </Router>
)

export default AppWrapper;
