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

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Header onAboutClick={scrollToAbout} />
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

              <ScrollReveal delay={300}>
                <Projects />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Swiper />

                <Contact />
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
