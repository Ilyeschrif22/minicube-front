import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const SlidePanel = () => {
  const [panelActive, setPanelActive] = useState(false);

  const togglePanel = () => {
    setPanelActive(!panelActive);
  };

  const closePanel = () => {
    setPanelActive(false);
  };

  return (
    <>
      <img
        id="hamburger-icon"
        src="/icons/hamburger-icon.png"
        className="hamburger-icon"
        alt="hamburger menu"
        onClick={togglePanel}
      />

      <div id="slidePanel" className={panelActive ? "active" : ""}>
        <span id="closeBtn" className="closeBtn" onClick={closePanel}>
          &times;
        </span>

        <ul className="slidePanel-list">
          <div className="nav-list-item">
            <li>
              <Link to="/">Home</Link>
            </li>
            <img
              src="/icons/add-icon.svg"
              className="nav-
                  list-icon"
              alt="icon"
            />
          </div>
          <div className="nav-list-item">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <img
              src="/icons/add-icon.svg"
              className="nav-list-icon"
              alt="icon"
            />
          </div>
          <div className="nav-list-item">
            <li>About</li>
            <img
              src="/icons/add-icon.svg"
              className="nav-list-icon"
              alt="icon"
            />
          </div>
          <div className="nav-list-item">
            <li>Contact</li>
            <img
              src="/icons/add-icon.svg"
              className="nav-list-icon"
              alt="icon"
            />
          </div>
        </ul>

        <div className="contact-info">
          <ul>
            <li>
              <p>Email :</p>
              <a href="mailto:ilyes.chrif@esprit.tn">ilyes.chrif@esprit.tn</a>
            </li>
            <li>
              <p>Phone :</p>
              <a href="tel:+21654141968">+216 54141968</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SlidePanel;
