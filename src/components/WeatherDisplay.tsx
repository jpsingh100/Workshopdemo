import React from 'react';
import { WeatherData, TemperatureUnit } from '../types/weather';
import { WeatherScaleComponent } from './WeatherScale';
import { ToggleSwitch } from './ToggleSwitch';
import { 
  TemperatureIcon1, TemperatureIcon2, TemperatureIcon3, TemperatureIcon4, TemperatureIcon5 
} from './icons/TemperatureIcons';
import { 
  WindIcon1, WindIcon2, WindIcon3, WindIcon4, WindIcon5 
} from './icons/WindIcons';
import { 
  HumidityIcon1, HumidityIcon2, HumidityIcon3, HumidityIcon4, HumidityIcon5 
} from './icons/HumidityIcons';
import { 
  temperatureScales, 
  temperatureScalesCelsius, 
  windSpeedScales, 
  humidityScales,
  getTemperatureLevel,
  getWindSpeedLevel,
  getHumidityLevel
} from '../utils/weatherScales';
import { convertTemperature } from '../services/weatherApi';
import { MapPin, Thermometer } from 'lucide-react';

interface WeatherDisplayProps {
  weatherData: WeatherData;
  temperatureUnit: TemperatureUnit;
  onTemperatureUnitChange: (unit: TemperatureUnit) => void;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  weatherData,
  temperatureUnit,
  onTemperatureUnitChange
}) => {
  const displayTemperature = temperatureUnit === 'fahrenheit' 
    ? weatherData.temperature 
    : convertTemperature(weatherData.temperature, 'fahrenheit', 'celsius');

  const tempScales = temperatureUnit === 'fahrenheit' ? temperatureScales : temperatureScalesCelsius;
  const tempUnit = temperatureUnit === 'fahrenheit' ? '°F' : '°C';

  const temperatureIcons = [TemperatureIcon1, TemperatureIcon2, TemperatureIcon3, TemperatureIcon4, TemperatureIcon5];
  const windIcons = [WindIcon1, WindIcon2, WindIcon3, WindIcon4, WindIcon5];
  const humidityIcons = [HumidityIcon1, HumidityIcon2, HumidityIcon3, HumidityIcon4, HumidityIcon5];

  return (
    <div className="space-y-8">
      {/* Location Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 mr-3" />
            <div>
              <h1 className="text-2xl font-bold">{weatherData.location}</h1>
              <p className="text-blue-200 capitalize">{weatherData.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Thermometer className="w-5 h-5" />
            <ToggleSwitch
              leftLabel="°F"
              rightLabel="°C"
              isRightActive={temperatureUnit === 'celsius'}
              onChange={(isCelsius) => onTemperatureUnitChange(isCelsius ? 'celsius' : 'fahrenheit')}
            />
          </div>
        </div>
      </div>

      {/* Weather Scales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WeatherScaleComponent
          title="Temperature"
          value={displayTemperature}
          unit={tempUnit}
          scales={tempScales}
          icons={temperatureIcons}
          getCurrentLevel={(temp) => getTemperatureLevel(temp, temperatureUnit)}
        />
        
        <WeatherScaleComponent
          title="Wind Speed"
          value={weatherData.windSpeed}
          unit="mph"
          scales={windSpeedScales}
          icons={windIcons}
          getCurrentLevel={getWindSpeedLevel}
        />
        
        <WeatherScaleComponent
          title="Humidity"
          value={weatherData.humidity}
          unit="%"
          scales={humidityScales}
          icons={humidityIcons}
          getCurrentLevel={getHumidityLevel}
        />
      </div>
    </div>
  );
};