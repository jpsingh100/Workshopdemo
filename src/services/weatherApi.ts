import { WeatherData, WeatherApiResponse } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export class WeatherApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'WeatherApiError';
  }
}

export const fetchWeatherData = async (zipcode: string): Promise<WeatherData> => {
  if (!API_KEY) {
    throw new WeatherApiError('Weather API key is not configured. Please check your environment variables.');
  }

  if (!zipcode || !/^\d{5}$/.test(zipcode.trim())) {
    throw new WeatherApiError('Please enter a valid 5-digit ZIP code.');
  }

  try {
    const response = await fetch(
      `${BASE_URL}/weather?zip=${zipcode.trim()}&appid=${API_KEY}&units=imperial`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new WeatherApiError('ZIP code not found. Please check and try again.');
      }
      if (response.status === 401) {
        throw new WeatherApiError('Invalid API key. Please check your configuration.');
      }
      throw new WeatherApiError(`Weather service error: ${response.status}`);
    }

    const data: WeatherApiResponse = await response.json();

    return {
      location: data.name,
      temperature: Math.round(data.main.temp),
      windSpeed: Math.round(data.wind.speed),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    if (error instanceof WeatherApiError) {
      throw error;
    }
    throw new WeatherApiError('Unable to fetch weather data. Please check your connection and try again.');
  }
};

export const convertTemperature = (temp: number, fromUnit: 'fahrenheit' | 'celsius', toUnit: 'fahrenheit' | 'celsius'): number => {
  if (fromUnit === toUnit) return temp;
  
  if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    return Math.round((temp - 32) * 5/9);
  }
  
  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    return Math.round(temp * 9/5 + 32);
  }
  
  return temp;
};