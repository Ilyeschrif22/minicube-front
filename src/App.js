import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Swiper from './components/swiper/swiper';

import CreateProject from './pages/createProject/createproject';

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

        <Route path="/project/create" element={<CreateProject />} />

      </Routes>
    </Router>
  );
}

export default App;
