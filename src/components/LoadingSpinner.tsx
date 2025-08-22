import React from 'react';
import { Cloud } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 inline-block">
        <div className="relative">
          <Cloud className="w-16 h-16 text-blue-400 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-600 animate-pulse text-center">Fetching weather data...</p>
      </div>
    </div>
  );
};