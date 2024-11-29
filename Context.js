import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [place, setPlace] = useState('Vancouver');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      // Fetch weather data
    };

    fetchWeather();
  }, [place]);

  return (
    <WeatherContext.Provider value={{ place, setPlace, weather, forecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
