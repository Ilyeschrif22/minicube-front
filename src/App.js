import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Swiper from './components/swiper/swiper';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Swiper />
              <Projects />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }
        />


      </Routes>
    </Router>
  );
}

export default App;
