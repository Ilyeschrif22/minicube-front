import React from "react";
import "./styles.css";

const Aboutme = () => {
  return (
    <section className="about-me-section">
      <div className="aboutme-shell">
        <div className="text-content">
          <p className="aboutme-kicker">Profile</p>
          <h1 className="aboutme-title">About me</h1>

          <p className="intro-text">
            I&apos;m <span className="highlight">Ilyes Chrif</span>, software engineer at{" "}
            <span className="highlight">Esprit Tunis</span>, focused on building clean, scalable, and impactful
            digital solutions.
          </p>

          <p className="about-description">
            I design intuitive frontend experiences and reliable backend systems, with strong attention to performance,
            maintainability, and product quality. I enjoy solving complex problems, learning fast, and turning ideas
            into polished results that create measurable value.
          </p>
        </div>

        <aside className="aboutme-sidebar">
          <h2 className="skills-title">Core stack</h2>
          <div className="skills-tags">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">JavaScript</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Express.js</span>
            <span className="tag">Node.js</span>
            <span className="tag">MongoDB</span>
            <span className="tag">MySQL</span>
            <span className="tag">Java</span>
            <span className="tag">Python</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Aboutme;
