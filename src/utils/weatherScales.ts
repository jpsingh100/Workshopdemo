import { WeatherScale } from '../types/weather';

export const temperatureScales: WeatherScale[] = [
  { level: 1, label: 'Freezing', range: '< 32°F', color: 'bg-blue-600' },
  { level: 2, label: 'Cold', range: '32-50°F', color: 'bg-blue-400' },
  { level: 3, label: 'Cool', range: '51-65°F', color: 'bg-green-400' },
  { level: 4, label: 'Warm', range: '66-80°F', color: 'bg-yellow-400' },
  { level: 5, label: 'Hot', range: '> 80°F', color: 'bg-red-500' },
];

export const temperatureScalesCelsius: WeatherScale[] = [
  { level: 1, label: 'Freezing', range: '< 0°C', color: 'bg-blue-600' },
  { level: 2, label: 'Cold', range: '0-10°C', color: 'bg-blue-400' },
  { level: 3, label: 'Cool', range: '11-18°C', color: 'bg-green-400' },
  { level: 4, label: 'Warm', range: '19-27°C', color: 'bg-yellow-400' },
  { level: 5, label: 'Hot', range: '> 27°C', color: 'bg-red-500' },
];

export const windSpeedScales: WeatherScale[] = [
  { level: 1, label: 'Calm', range: '0-3 mph', color: 'bg-gray-400' },
  { level: 2, label: 'Light', range: '4-7 mph', color: 'bg-blue-400' },
  { level: 3, label: 'Gentle', range: '8-12 mph', color: 'bg-green-400' },
  { level: 4, label: 'Moderate', range: '13-18 mph', color: 'bg-yellow-400' },
  { level: 5, label: 'Strong', range: '> 18 mph', color: 'bg-red-500' },
];

export const humidityScales: WeatherScale[] = [
  { level: 1, label: 'Very Dry', range: '0-30%', color: 'bg-yellow-600' },
  { level: 2, label: 'Dry', range: '31-40%', color: 'bg-yellow-400' },
  { level: 3, label: 'Comfortable', range: '41-60%', color: 'bg-green-400' },
  { level: 4, label: 'Humid', range: '61-80%', color: 'bg-blue-400' },
  { level: 5, label: 'Very Humid', range: '> 80%', color: 'bg-blue-600' },
];

export const getTemperatureLevel = (temp: number, unit: 'fahrenheit' | 'celsius'): number => {
  if (unit === 'fahrenheit') {
    if (temp < 32) return 1;
    if (temp <= 50) return 2;
    if (temp <= 65) return 3;
    if (temp <= 80) return 4;
    return 5;
  } else {
    if (temp < 0) return 1;
    if (temp <= 10) return 2;
    if (temp <= 18) return 3;
    if (temp <= 27) return 4;
    return 5;
  }
};

export const getWindSpeedLevel = (speed: number): number => {
  if (speed <= 3) return 1;
  if (speed <= 7) return 2;
  if (speed <= 12) return 3;
  if (speed <= 18) return 4;
  return 5;
};

export const getHumidityLevel = (humidity: number): number => {
  if (humidity <= 30) return 1;
  if (humidity <= 40) return 2;
  if (humidity <= 60) return 3;
  if (humidity <= 80) return 4;
  return 5;
};