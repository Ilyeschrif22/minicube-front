import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Swiper from './components/swiper/swiper';
import Aboutme from './components/about-me/aboutme';
import ScrollReveal from './ScrollReveal';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollReveal delay={300}>
                <Hero />

                <Swiper />
              </ScrollReveal>

              <Aboutme />

              <ScrollReveal delay={300}>
                <Projects />
              </ScrollReveal>
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <ScrollReveal delay={200}>
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
