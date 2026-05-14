import SlidePannel from "../slidePannel/slidePannel";
import { Link } from "react-router-dom";

import "./styles.css";

const NavBar = ({ onAboutClick, onContactClick }) => {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img src="/logo/minicube.png" className="logo-image" alt="Logo" />
      </div>

      <div className="nav-links">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link btn-swipe btn-swipe-white">Home</Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                onAboutClick();
              }}
              className="nav-button-link btn-swipe btn-swipe-white"
            >
              About
            </button>
          </li>
          <li>
            <Link to="/projects" className="nav-link btn-swipe btn-swipe-white">Projects</Link>
          </li>
          <li>Blog</li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
              className="nav-button-link btn-swipe btn-swipe-white"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <a 
          href="mailto:ilyes.chrif@esprit.tn"
          className="hire-me-button btn-swipe btn-swipe-white"
        >
          Hire me
          <img
            src="/icons/arrow-outward-icon.svg"
            alt="arrow outward icon"
            className="arrow-icon"
          />
        </a>

        <SlidePannel onAboutClick={onAboutClick} onContactClick={onContactClick} />
      </div>
    </div>
  );
};

export default NavBar;
