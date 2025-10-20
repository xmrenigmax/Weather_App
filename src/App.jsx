import { useWeather } from './hooks/useWeather';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

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
                      <h3 className="font-semibold text-white mb-2">Real-time Data</h3>
                      <p className="text-blue-100 text-sm">Live weather updates from trusted sources</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <h3 className="font-semibold text-white mb-2">Visual Analytics</h3>
                      <p className="text-blue-100 text-sm">Beautiful data visualizations</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <h3 className="font-semibold text-white mb-2">Search History</h3>
                      <p className="text-blue-100 text-sm">Track your previous searches</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
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