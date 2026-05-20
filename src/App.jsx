import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize EmailJS
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-bg-dark">
      {/* Background elements */}
      <div className="grid-background" />
      <div className="noise-overlay" />
      <ParticleBackground />

      {/* Custom cursor and progress */}
      <CustomCursor />
      <ScrollProgress />

      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: isLoading ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Achievements />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

// Import AnimatePresence for loading animation
import { AnimatePresence } from 'framer-motion';

export default App;
