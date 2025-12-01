import Navbar from "../navbar/navbar";
import "./styles.css";

const Header = ({ onAboutClick }) => {
  return (
    <header>
      <Navbar onAboutClick={onAboutClick} />
    </header>
  );
};

export default Header;
