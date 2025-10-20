import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Azure Functions', icon: '☁️', color: '#0078d4' },
    { name: 'Vite', icon: '⚡', color: '#646cff' },
    { name: 'OpenWeather API', icon: '🌤️', color: '#f76707' }
  ];

  return (
    <div className="tech-stack">
      <h3>🛠️ Powered By</h3>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <div 
              className="tech-icon"
              style={{ backgroundColor: tech.color }}
            >
              {tech.icon}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;