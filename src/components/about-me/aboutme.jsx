import React from "react";
import "./styles.css";

const Aboutme = () => {
  return (
    <>
      <section className="about-me-section">
        <div className="container">
          <div className="text-content">
            <h1 className="aboutme-title">About me</h1>

            <p className="intro-text">
              I’m <span className="highlight">Ilyes Chrif</span>, software engineer at <span className="highlight">Esprit Tunis</span>,
              focused on building clean, scalable, and impactful digital solutions.
            </p>

            <p className="about-description">
              With a curious and problem-solving mindset, I create intuitive interfaces and robust backend systems,
              writing elegant, maintainable code built to last.<br /><br /> I continuously learn, experiment, and document my journey
              through challenging projects that deliver real value.
            </p>

            <div className="skills-tags">
              {/* Frontend */}
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">JavaScript</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>

              {/* Backend */}
              <span className="tag">Spring Boot</span>
              <span className="tag">Express.js</span>
              <span className="tag">Node.js</span>

              {/* Databases */}
              <span className="tag">MongoDB</span>
              <span className="tag">Mysql</span>

              {/* Languages */}
              <span className="tag">Java</span>
              <span className="tag">Python</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
