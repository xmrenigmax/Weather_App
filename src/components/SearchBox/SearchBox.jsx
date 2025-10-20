const SearchBox = ({ city, setCity, loading, getWeather, searchHistory, onHistoryClick }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      getWeather();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      getWeather();
    }
  };

  return (
    <div className="w-full">
      {/* Main Search Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative group">
          {/* Input Container with Glass Effect */}
          <div className="relative">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            
            {/* Main Input */}
            <input
              type="text"
              placeholder="Enter city name (e.g., London, Tokyo, New York)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              className="relative w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-blue-100/60 font-light focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            
            {/* Search Button */}
            <button 
              type="submit"
              disabled={loading || !city.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/25 disabled:shadow-none transition-all duration-300 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-sm">Searching...</span>
                </>
              ) : (
                <>
                  <span className="text-lg">🔍</span>
                  <span className="text-sm">Search</span>
                </>
              )}
            </button>
          </div>
          
          {/* Subtle Hint Text */}
          <p className="text-blue-200/50 text-xs mt-3 ml-1 font-light">
            Press Enter or click Search to get weather data
          </p>
        </div>
      </form>

      {/* Search History */}
      {searchHistory.length > 0 && (
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-blue-100 font-medium text-sm uppercase tracking-wider">Recent Searches</span>
            </div>
            <span className="text-blue-200/40 text-xs">
              {searchHistory.length} {searchHistory.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((historyCity, index) => (
              <button
                key={index}
                onClick={() => onHistoryClick(historyCity)}
                className="group relative px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-xl text-blue-100 hover:text-white text-sm font-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-300/70 group-hover:text-cyan-300 transition-colors">📍</span>
                  <span>{historyCity}</span>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-3/4 transition-all duration-300"></div>
              </button>
            ))}
          </div>
          
          {/* Clear hint when many items */}
          {searchHistory.length >= 5 && (
            <p className="text-blue-200/30 text-xs mt-3 text-center font-light">
              Click on any city to quickly search again
            </p>
          )}
        </div>
      )}

      {/* Empty State for History */}
      {searchHistory.length === 0 && (
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center">
          <p className="text-blue-100/70 font-light mb-2">No search history yet</p>
          <p className="text-blue-200/40 text-sm">Your recent searches will appear here</p>
        </div>
      )}
    </div>
  );
};

export default SearchBox;