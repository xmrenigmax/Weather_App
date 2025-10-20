import { useState } from 'react';

const AZURE_FUNCTION_URL = import.meta.env.VITE_AZURE_FUNCTION_URL;

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const getWeather = async (searchCity = city) => {
    if (!searchCity.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      let url;
      if (AZURE_FUNCTION_URL.includes('?')) {
        url = `${AZURE_FUNCTION_URL}&city=${encodeURIComponent(searchCity)}`;
      } else {
        url = `${AZURE_FUNCTION_URL}?city=${encodeURIComponent(searchCity)}`;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setWeather(data);
      setSearchHistory(prev => [searchCity, ...prev.slice(0, 4)]);
      
    } catch (err) {
      setError('Failed to fetch weather data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearWeather = () => {
    setWeather(null);
    setError('');
  };

  return {
    city,
    setCity,
    weather,
    loading,
    error,
    searchHistory,
    getWeather,
    clearWeather
  };
};