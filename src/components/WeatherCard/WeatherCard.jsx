import './WeatherCard.css';

const WeatherCard = ({ weather, onClear }) => {
  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('thunder')) return '⛈️';
    if (desc.includes('fog') || desc.includes('mist')) return '🌫️';
    return '🌈';
  };

  const getBackgroundGradient = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear')) return 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)';
    if (desc.includes('cloud')) return 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)';
    if (desc.includes('rain')) return 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)';
    if (desc.includes('snow')) return 'linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)';
    return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };

  return (
    <div 
      className="weather-card"
      style={{ background: getBackgroundGradient(weather.description) }}
    >
      <button className="close-button" onClick={onClear}>×</button>
      
      <div className="weather-header">
        <div className="location">
          <h2>{weather.city}, {weather.country}</h2>
          <p className="date">{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
        <div className="weather-icon">
          <span className="icon">{getWeatherIcon(weather.description)}</span>
          <p className="description">{weather.description}</p>
        </div>
      </div>

      <div className="temperature-section">
        <div className="main-temp">
          <span className="temp">{weather.temperature}</span>
          <span className="temp-unit">°C</span>
        </div>
        <p className="feels-like">Feels like {weather.feelsLike}°C</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <div className="detail-info">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{weather.humidity}%</span>
          </div>
        </div>
        
        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <div className="detail-info">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{weather.windSpeed} m/s</span>
          </div>
        </div>
        
        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <div className="detail-info">
            <span className="detail-label">Real Feel</span>
            <span className="detail-value">{weather.feelsLike}°C</span>
          </div>
        </div>
        
        <div className="detail-item">
          <span className="detail-icon">📍</span>
          <div className="detail-info">
            <span className="detail-label">Location</span>
            <span className="detail-value">{weather.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;