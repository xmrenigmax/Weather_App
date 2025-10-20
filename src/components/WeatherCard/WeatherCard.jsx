const WeatherCard = ({ weather, onClear }) => {
  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('drizzle')) return '🌦️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('thunder')) return '⛈️';
    if (desc.includes('fog') || desc.includes('mist')) return '🌫️';
    return '🌈';
  };

  const getWeatherGradient = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear')) return 'from-amber-400/20 to-orange-500/20';
    if (desc.includes('cloud')) return 'from-slate-400/20 to-blue-500/20';
    if (desc.includes('rain')) return 'from-blue-400/20 to-cyan-500/20';
    if (desc.includes('drizzle')) return 'from-sky-400/20 to-indigo-500/20';
    if (desc.includes('snow')) return 'from-cyan-200/20 to-blue-200/20';
    if (desc.includes('thunder')) return 'from-purple-400/20 to-blue-900/20';
    if (desc.includes('fog') || desc.includes('mist')) return 'from-slate-300/20 to-slate-500/20';
    return 'from-purple-400/20 to-pink-500/20';
  };

  const getWeatherColor = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear')) return 'text-amber-300';
    if (desc.includes('cloud')) return 'text-blue-200';
    if (desc.includes('rain')) return 'text-blue-300';
    if (desc.includes('drizzle')) return 'text-sky-300';
    if (desc.includes('snow')) return 'text-cyan-200';
    if (desc.includes('thunder')) return 'text-purple-300';
    return 'text-purple-300';
  };

  return (
    <div className={`relative bg-gradient-to-br ${getWeatherGradient(weather.description)} backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-300 rounded-full blur-2xl"></div>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClear}
        className="absolute top-6 right-6 z-20 w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90 group"
      >
        <span className="text-lg font-light leading-none">×</span>
      </button>

      {/* Header Section */}
      <div className="relative z-10 p-8 pb-6 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Location Info */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">📍</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                {weather.city}, {weather.country}
              </h2>
            </div>
            <p className="text-blue-100/80 font-light">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Weather Icon & Description */}
          <div className="flex items-center space-x-4">
            <div className="text-6xl lg:text-7xl filter drop-shadow-lg">
              {getWeatherIcon(weather.description)}
            </div>
            <div className="text-right">
              <p className={`text-xl lg:text-2xl font-semibold capitalize ${getWeatherColor(weather.description)}`}>
                {weather.description}
              </p>
              <p className="text-blue-100/70 text-sm font-light mt-1">
                Updated just now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Section */}
      <div className="relative z-10 p-8 py-6 border-b border-white/10">
        <div className="flex items-end justify-between">
          <div className="flex items-end space-x-2">
            <span className="text-6xl lg:text-7xl font-bold text-white">
              {Math.round(weather.temperature)}
            </span>
            <span className="text-2xl text-blue-100/70 font-light mb-2">°C</span>
          </div>
          <div className="text-right">
            <p className="text-blue-100/80 font-light">
              Feels like <span className="text-white font-medium">{Math.round(weather.feelsLike)}°C</span>
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-medium">LIVE DATA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Humidity */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <p className="text-blue-100/70 text-sm font-light mb-1">Humidity</p>
                <p className="text-2xl font-bold text-white">{weather.humidity}%</p>
              </div>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💨</span>
              </div>
              <div>
                <p className="text-blue-100/70 text-sm font-light mb-1">Wind Speed</p>
                <p className="text-2xl font-bold text-white">{weather.windSpeed} m/s</p>
              </div>
            </div>
          </div>

          {/* Real Feel */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌡️</span>
              </div>
              <div>
                <p className="text-blue-100/70 text-sm font-light mb-1">Real Feel</p>
                <p className="text-2xl font-bold text-white">{Math.round(weather.feelsLike)}°C</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="text-blue-100/70 text-sm font-light mb-1">Location</p>
                <p className="text-lg font-bold text-white truncate">{weather.city}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-center text-blue-100/50 text-sm font-light">
            Data provided by Azure Weather Services • Updated in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;