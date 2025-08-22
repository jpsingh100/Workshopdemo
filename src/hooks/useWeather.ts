import { useState, useCallback } from 'react';
import { WeatherData, TemperatureUnit } from '../types/weather';
import { fetchWeatherData, WeatherApiError } from '../services/weatherApi';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('fahrenheit');

  const fetchWeather = useCallback(async (zipcode: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherData(zipcode);
      setWeatherData(data);
    } catch (err) {
      if (err instanceof WeatherApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    weatherData,
    isLoading,
    error,
    temperatureUnit,
    setTemperatureUnit,
    fetchWeather,
  };
};