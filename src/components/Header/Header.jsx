import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">⛅</span>
          <h1>SkyCast</h1>
        </div>
        <p className="tagline">Real-time weather powered by Azure Cloud</p>
      </div>
    </header>
  );
};

export default Header;