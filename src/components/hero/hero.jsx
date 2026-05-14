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
          <a 
            href="cv.pdf"
            className="cv-button btn-swipe btn-swipe-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check cv
          </a>
          <a 
            href="mailto:ilyes.chrif@esprit.tn"
            className="contact-button btn-swipe btn-swipe-white"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
