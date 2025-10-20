import { useWeather } from './hooks/useWeather';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import { useEffect, useState } from 'react';

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

  const [backgroundTheme, setBackgroundTheme] = useState('default');

  const handleHistoryClick = (historyCity) => {
    setCity(historyCity);
    getWeather(historyCity);
  };

  const handleRetry = () => {
    if (city.trim()) {
      getWeather();
    }
  };

  // Update background based on weather conditions
  useEffect(() => {
    if (weather) {
      const description = weather.description.toLowerCase();
      
      if (description.includes('clear')) {
        setBackgroundTheme('clear');
      } else if (description.includes('cloud')) {
        setBackgroundTheme('cloudy');
      } else if (description.includes('rain') || description.includes('drizzle')) {
        setBackgroundTheme('rainy');
      } else if (description.includes('snow')) {
        setBackgroundTheme('snowy');
      } else if (description.includes('thunder')) {
        setBackgroundTheme('stormy');
      } else if (description.includes('fog') || description.includes('mist')) {
        setBackgroundTheme('foggy');
      } else {
        setBackgroundTheme('default');
      }
    } else {
      setBackgroundTheme('default');
    }
  }, [weather]);

  // Background configurations for different weather conditions
  const backgroundConfigs = {
    default: {
      gradient: 'from-slate-900 via-blue-900 to-slate-900',
      circles: [
        { color: 'bg-purple-500', position: 'top-1/4 left-1/4', size: 'w-72 h-72' },
        { color: 'bg-blue-500', position: 'top-1/3 right-1/4', size: 'w-72 h-72' },
        { color: 'bg-cyan-500', position: 'bottom-1/4 left-1/2', size: 'w-72 h-72' }
      ]
    },
    clear: {
      gradient: 'from-amber-200 via-orange-300 to-yellow-200',
      circles: [
        { color: 'bg-yellow-400', position: 'top-10 left-1/4', size: 'w-96 h-96' },
        { color: 'bg-orange-400', position: 'top-20 right-20', size: 'w-64 h-64' },
        { color: 'bg-amber-300', position: 'bottom-20 left-20', size: 'w-80 h-80' }
      ]
    },
    cloudy: {
      gradient: 'from-slate-400 via-slate-500 to-slate-600',
      circles: [
        { color: 'bg-slate-300', position: 'top-1/4 left-1/4', size: 'w-80 h-80' },
        { color: 'bg-slate-400', position: 'top-1/2 right-1/3', size: 'w-96 h-96' },
        { color: 'bg-slate-500', position: 'bottom-1/4 left-1/2', size: 'w-72 h-72' }
      ]
    },
    rainy: {
      gradient: 'from-slate-600 via-blue-700 to-slate-800',
      circles: [
        { color: 'bg-blue-600', position: 'top-20 left-20', size: 'w-64 h-64' },
        { color: 'bg-slate-500', position: 'top-10 right-10', size: 'w-80 h-80' },
        { color: 'bg-blue-800', position: 'bottom-10 left-1/2', size: 'w-96 h-96' }
      ]
    },
    snowy: {
      gradient: 'from-cyan-100 via-blue-200 to-cyan-50',
      circles: [
        { color: 'bg-cyan-200', position: 'top-1/4 left-1/4', size: 'w-72 h-72' },
        { color: 'bg-blue-100', position: 'top-1/3 right-1/4', size: 'w-64 h-64' },
        { color: 'bg-cyan-50', position: 'bottom-1/4 left-1/2', size: 'w-80 h-80' }
      ]
    },
    stormy: {
      gradient: 'from-slate-800 via-purple-900 to-slate-900',
      circles: [
        { color: 'bg-purple-800', position: 'top-10 left-10', size: 'w-64 h-64' },
        { color: 'bg-slate-700', position: 'top-1/2 right-10', size: 'w-96 h-96' },
        { color: 'bg-blue-900', position: 'bottom-10 left-1/3', size: 'w-80 h-80' }
      ]
    },
    foggy: {
      gradient: 'from-slate-300 via-slate-400 to-slate-500',
      circles: [
        { color: 'bg-slate-200', position: 'top-1/4 left-1/4', size: 'w-96 h-96' },
        { color: 'bg-slate-300', position: 'top-1/2 right-1/4', size: 'w-80 h-80' },
        { color: 'bg-slate-400', position: 'bottom-1/4 left-1/2', size: 'w-64 h-64' }
      ]
    }
  };

  const currentBackground = backgroundConfigs[backgroundTheme];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentBackground.gradient} transition-all duration-1000 ease-in-out`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20 transition-all duration-1000">
          {currentBackground.circles.map((circle, index) => (
            <div
              key={index}
              className={`absolute ${circle.position} ${circle.size} ${circle.color} rounded-full mix-blend-multiply filter blur-xl animate-pulse`}
              style={{ animationDelay: `${index * 2000}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Weather-specific Particle Effects */}
      {weather && (
        <div className="fixed inset-0 pointer-events-none">
          {/* Rain Particles */}
          {backgroundTheme === 'rainy' && (
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-8 bg-blue-400/40 rounded-full animate-fall"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Snow Particles */}
          {backgroundTheme === 'snowy' && (
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/70 rounded-full animate-snowfall"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Lightning Flashes for Storms */}
          {backgroundTheme === 'stormy' && (
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-white/0 animate-lightning"></div>
            </div>
          )}
        </div>
      )}

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Section */}
            <div className="mb-8">
              <SearchBox
                city={city}
                setCity={setCity}
                loading={loading}
                getWeather={getWeather}
                searchHistory={searchHistory}
                onHistoryClick={handleHistoryClick}
              />
            </div>

            {/* Loading State */}
            {loading && (
              <div className="mb-8">
                <Loading />
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="mb-8">
                <Error 
                  message={error} 
                  onRetry={handleRetry}
                />
              </div>
            )}

            {/* Weather Card */}
            {weather && !loading && (
              <div className="mb-8 transform transition-all duration-300 hover:scale-[1.02]">
                <WeatherCard 
                  weather={weather} 
                  onClear={clearWeather}
                />
              </div>
            )}

            {/* Welcome State */}
            {!weather && !loading && !error && (
              <div className="text-center py-16">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                  <div className="text-6xl mb-6 animate-float">🌤️</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    Welcome to SkyCast Pro
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-md mx-auto leading-relaxed">
                    Get precise weather forecasts with our professional-grade meteorological platform
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="text-2xl mb-3">📡</div>
                      <h3 className="font-semibold text-white mb-2">Real-time Data</h3>
                      <p className="text-blue-100 text-sm">Live weather updates from trusted sources</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="text-2xl mb-3">🎨</div>
                      <h3 className="font-semibold text-white mb-2">Visual Analytics</h3>
                      <p className="text-blue-100 text-sm">Beautiful data visualizations</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="text-2xl mb-3">📊</div>
                      <h3 className="font-semibold text-white mb-2">Search History</h3>
                      <p className="text-blue-100 text-sm">Track your previous searches</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="text-2xl mb-3">📱</div>
                      <h3 className="font-semibold text-white mb-2">Responsive</h3>
                      <p className="text-blue-100 text-sm">Works perfectly on all devices</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;