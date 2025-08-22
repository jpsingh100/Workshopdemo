import React from 'react';
import { WeatherScale } from '../types/weather';

interface WeatherScaleProps {
  title: string;
  value: number;
  unit: string;
  scales: WeatherScale[];
  icons: React.ComponentType<{ className?: string }>[];
  getCurrentLevel: (value: number) => number;
}

export const WeatherScaleComponent: React.FC<WeatherScaleProps> = ({
  title,
  value,
  unit,
  scales,
  icons,
  getCurrentLevel
}) => {
  const currentLevel = getCurrentLevel(value);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-blue-600">
          {value} {unit}
        </div>
      </div>
      
      <div className="flex justify-between items-center space-x-2">
        {scales.map((scale, index) => {
          const IconComponent = icons[index];
          const isActive = index + 1 === currentLevel;
          
          return (
            <div
              key={index}
              className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                isActive 
                  ? `${scale.color} shadow-lg transform scale-110` 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <IconComponent 
                className={`w-8 h-8 mb-2 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-500'
                }`} 
              />
              <div className={`text-xs font-medium text-center ${
                isActive ? 'text-white' : 'text-gray-600'
              }`}>
                <div>{scale.label}</div>
                <div className="mt-1 opacity-80">{scale.range}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};