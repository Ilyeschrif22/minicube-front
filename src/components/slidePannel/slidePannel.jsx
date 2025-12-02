import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const SlidePanel = ({ onAboutClick, onContactClick }) => {
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
              <Link to="/" onClick={closePanel}>
                Home
              </Link>
            </li>
            <img src="/icons/add-icon.svg" className="nav-list-icon" alt="icon" />
          </div>
          <div className="nav-list-item">
            <li>
              <Link to="/projects" onClick={closePanel}>
                Projects
              </Link>
            </li>
            <img src="/icons/add-icon.svg" className="nav-list-icon" alt="icon" />
          </div>
          <div className="nav-list-item">
            <li>
              <button
                onClick={() => {
                  onAboutClick();
                  closePanel();
                }}
                className="nav-button-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "inherit",
                  font: "inherit",
                  padding: 0,
                }}
              >
                About
              </button>
            </li>
            <img src="/icons/add-icon.svg" className="nav-list-icon" alt="icon" />
          </div>
          <div className="nav-list-item">
            <li>
              <button
                onClick={() => {
                  onContactClick();
                  closePanel();
                }}
                className="nav-button-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "inherit",
                  font: "inherit",
                  padding: 0,
                }}
              >
                Contact
              </button>
            </li>
            <img src="/icons/add-icon.svg" className="nav-list-icon" alt="icon" />
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
