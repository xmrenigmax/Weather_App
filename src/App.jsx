import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // 👇 REPLACE THIS WITH YOUR ACTUAL AZURE FUNCTION URL
  const AZURE_FUNCTION_URL = 'https://weather-app-xmrenigmax-a7d3eqfed0cpbeez.uksouth-01.azurewebsites.net/api/GetWeather'

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const response = await fetch(`${AZURE_FUNCTION_URL}&city=${encodeURIComponent(city)}`)
      const data = await response.json()
      
      if (response.ok) {
        setWeather(data)
      } else {
        setError(data || 'City not found')
      }
    } catch (err) {
      setError('Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather()
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🌤️ Azure Weather App</h1>
        <p className="subtitle">Powered by Azure Functions & React</p>
        
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name (e.g., London, Tokyo, New York)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="city-input"
          />
          <button 
            onClick={getWeather} 
            disabled={loading}
            className="search-btn"
          >
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </div>

        {error && (
          <div className="error">
            ❌ {error}
          </div>
        )}

        {weather && (
          <div className="weather-card">
            <h2>{weather.city}, {weather.country}</h2>
            <div className="weather-grid">
              <div className="weather-item">
                <span className="label">Temperature</span>
                <span className="value">{weather.temperature}°C</span>
              </div>
              <div className="weather-item">
                <span className="label">Feels Like</span>
                <span className="value">{weather.feelsLike}°C</span>
              </div>
              <div className="weather-item">
                <span className="label">Conditions</span>
                <span className="value">{weather.description}</span>
              </div>
              <div className="weather-item">
                <span className="label">Humidity</span>
                <span className="value">{weather.humidity}%</span>
              </div>
              <div className="weather-item">
                <span className="label">Wind Speed</span>
                <span className="value">{weather.windSpeed} m/s</span>
              </div>
            </div>
          </div>
        )}

        <div className="tech-stack">
          <h3>🛠️ Tech Stack</h3>
          <ul>
            <li>Frontend: React + Vite</li>
            <li>Backend: Azure Functions</li>
            <li>API: OpenWeatherMap</li>
            <li>Hosting: Azure Cloud</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App