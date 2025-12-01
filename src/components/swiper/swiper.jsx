import "./styles.css";

const Swiper = () => {
  return (
    <div className="services-section">
      <ul className="services-list">
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>Web Hosting</li>
        <li>Digital Solutions</li>

        {/* Duplicate for seamless loop */}
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>Web Hosting</li>
        <li>Digital Solutions</li>
      </ul>
    </div>
  );
};

export default Swiper;
