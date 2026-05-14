import Navbar from "../navbar/navbar";
import "./styles.css";

const Header = ({ onAboutClick, onContactClick }) => {
  return (
    <header>
      <Navbar onAboutClick={onAboutClick} onContactClick={onContactClick} />
    </header>
  );
};

export default Header;
