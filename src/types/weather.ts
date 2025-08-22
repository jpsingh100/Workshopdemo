export interface WeatherData {
  location: string;
  temperature: number;
  windSpeed: number;
  humidity: number;
  description: string;
  icon: string;
}

export interface WeatherApiResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

export type TemperatureUnit = 'fahrenheit' | 'celsius';

export interface WeatherScale {
  level: number;
  label: string;
  range: string;
  color: string;
}