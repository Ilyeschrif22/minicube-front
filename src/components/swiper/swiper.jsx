import "./styles.css";

const Swiper = () => {
  return (
    <div className="services-section">
      <ul className="services-list">
        <li>Développement web</li>
        <li>Design graphique</li>
        <li>Hébergement Web</li>
        <li>Solutions Digital</li>

        {/* Duplicate for seamless loop */}
        <li>Développement web</li>
        <li>Design graphique</li>
        <li>Hébergement Web</li>
        <li>Solutions Digital</li>
      </ul>
    </div>
  );
};

export default Swiper;
