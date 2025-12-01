import SlidePannel from "../slidePannel/slidePannel";
import { Link } from "react-router-dom";

import "./styles.css";

const NavBar = ({ onAboutClick }) => {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img src="/logo/minicube.png" className="logo-image" alt="Logo" />
      </div>

      <div className="nav-links">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                onAboutClick();
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
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="hire-me-button">
          Hire me
          <img
            src="/icons/arrow-outward-icon.svg"
            alt="arrow outward icon"
            className="arrow-icon"
          />
        </div>

        <SlidePannel onAboutClick={onAboutClick} />
      </div>
    </div>
  );
};

export default NavBar;
