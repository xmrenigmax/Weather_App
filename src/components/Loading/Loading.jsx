import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="weather-loader">
        <div className="cloud"></div>
        <div className="rain">
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
        </div>
        <p className="loading-text">Fetching weather data...</p>
      </div>
    </div>
  );
};

export default Loading;