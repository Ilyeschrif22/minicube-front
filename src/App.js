import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Swiper from "./components/swiper/swiper";
import Aboutme from "./components/about-me/aboutme";
import Contact from "./components/contact/Contact";
import ScrollReveal from "./ScrollReveal";
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      const yOffset = -120;
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      const yOffset = -80;
      const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  return (
    <Router>
      <Header onAboutClick={scrollToAbout} onContactClick={scrollToContact} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollReveal delay={320}>
                <Hero />
                <Swiper />
              </ScrollReveal>

              <div ref={aboutRef}>
                <Aboutme />
              </div>

              <ScrollReveal delay={200}>
                <Projects />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Swiper />
                <div ref={contactRef}>
                  <Contact />
                </div>
              </ScrollReveal>


            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <ScrollReveal delay={300}>
                <Projects />
              </ScrollReveal>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
