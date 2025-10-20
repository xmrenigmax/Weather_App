import './SearchBox.css';

const SearchBox = ({ city, setCity, loading, getWeather, searchHistory, onHistoryClick }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <div className="search-box">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for a city... (e.g., London, Tokyo, New York)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <button 
          onClick={() => getWeather()} 
          disabled={loading}
          className="search-button"
        >
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <span className="search-icon">🔍</span>
          )}
        </button>
      </div>
      
      {searchHistory.length > 0 && (
        <div className="search-history">
          <span className="history-label">Recent searches:</span>
          {searchHistory.map((historyCity, index) => (
            <button
              key={index}
              onClick={() => onHistoryClick(historyCity)}
              className="history-chip"
            >
              {historyCity}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;