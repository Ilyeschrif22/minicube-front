import "./styles.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <img
        className="classical-marble-statue"
        src="/images/3.png"
        alt="statue"
      />

      <div className="hero-content">
        <p className="hero-text">
          Hi, I'm <span className="highlight">Ilyes Chrif</span>
          <br />
          <span className="highlight">Software Engineer</span> from Esprit Tunis
        </p>

        <div className="sub-hero-text">
          Passionate about building <span className="highlight">efficient</span>{" "}
          and <span className="highlight">scalable web solutions</span>,<br />
          documenting my journey, and showcasing my projects.
        </div>

        <div className="contact-buttons">
          <div className="cv-button">Check cv</div>
          <div className="contact-button">Contact me</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
