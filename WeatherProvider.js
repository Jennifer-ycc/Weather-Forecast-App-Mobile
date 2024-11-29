import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const WeatherContext = createContext();

// Provide the context
export const WeatherProvider = ({ children }) => {
  const [place, setPlace] = useState('Vancouver'); // Default city
  const [weather, setWeather] = useState(null); // Weather data
  const [forecast, setForecast] = useState([]); // Forecast data

  useEffect(() => {
    const fetchWeather = async () => {
      if (!place) return; // If no place is set, skip fetching
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
        q: place,
       appid: '5ff1d84eec9490755344be081a337794',
        units: 'metric',
  },
});

        console.log("Weather API Response:", response.data); // Log weather data
        setWeather({
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          windspeed: response.data.wind.speed,
          condition: response.data.weather[0].description,
          icon: response.data.weather[0].icon, // Weather icon ID
        });
      } catch (error) {
        console.error('Error fetching weather:', error.message);
        alert('Failed to fetch weather data. Check your API key or city name.');
      }
    };

    const fetchForecast = async () => {
      if (!place) return; // If no place is set, skip fetching
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            q: place,
            appid: process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY, // API Key
            units: 'metric',
          },
        });
        console.log("Forecast API Response:", response.data); // Log forecast data
        const dailyForecast = response.data.list.filter(item =>
          item.dt_txt.includes('12:00:00')
        ); // Filter daily forecasts at noon
        const formattedForecast = dailyForecast.map(item => ({
          date: item.dt_txt,
          temp: item.main.temp,
          condition: item.weather[0].description,
          icon: item.weather[0].icon,
        }));
        setForecast(formattedForecast);
      } catch (error) {
        console.error('Error fetching forecast:', error.message);
        alert('Failed to fetch forecast data. Check your API key or city name.');
      }
    };

    fetchWeather();
    fetchForecast();
  }, [place]); // Re-fetch when the 'place' changes

  return (
    <WeatherContext.Provider value={{ place, setPlace, weather, forecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Consume the context
export const useWeatherContext = () => useContext(WeatherContext);
