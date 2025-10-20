import { useWeather } from './hooks/useWeather';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import TechStack from './components/TechStack/TechStack';
import './App.css';

function App() {
  const {
    city,
    setCity,
    weather,
    loading,
    error,
    searchHistory,
    getWeather,
    clearWeather
  } = useWeather();

  const handleHistoryClick = (historyCity) => {
    setCity(historyCity);
    getWeather(historyCity);
  };

  const handleRetry = () => {
    if (city.trim()) {
      getWeather();
    }
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <SearchBox
            city={city}
            setCity={setCity}
            loading={loading}
            getWeather={getWeather}
            searchHistory={searchHistory}
            onHistoryClick={handleHistoryClick}
          />

          {loading && <Loading />}

          {error && (
            <Error 
              message={error} 
              onRetry={handleRetry}
            />
          )}

          {weather && !loading && (
            <WeatherCard 
              weather={weather} 
              onClear={clearWeather}
            />
          )}

          {!weather && !loading && !error && (
            <div className="welcome-message">
              <div className="welcome-icon">🌍</div>
              <h2>Welcome to SkyCast!</h2>
              <p>Enter a city name above to get current weather information</p>
              <div className="feature-list">
                <div className="feature">Real-time weather data</div>
                <div className="feature">Beautiful animations</div>
                <div className="feature">Search history</div>
                <div className="feature">Responsive design</div>
              </div>
            </div>
          )}

          <TechStack />
        </div>
      </main>
    </div>
  );
}

export default App;