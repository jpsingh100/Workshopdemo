import React, { useEffect, useState } from 'react';
import { WeatherData } from '../types/weather';
import { getWeatherBackground, preloadWeatherImages } from '../utils/weatherBackgrounds';

interface WeatherBackgroundProps {
  weatherData: WeatherData | null;
  children: React.ReactNode;
}

export const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ weatherData, children }) => {
  const [currentBackground, setCurrentBackground] = useState<string>('');
  const [overlayClass, setOverlayClass] = useState<string>('bg-black/10');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Preload all weather images on component mount
    preloadWeatherImages();
  }, []);

  useEffect(() => {
    if (weatherData) {
      setIsLoading(true);
      const background = getWeatherBackground(weatherData.description, weatherData.icon);
      
      // Preload the specific image before setting it
      const img = new Image();
      img.onload = () => {
        setCurrentBackground(background.url);
        setOverlayClass(background.overlay || 'bg-black/10');
        setIsLoading(false);
      };
      img.onerror = () => {
        // Fallback to default background if image fails to load
        const defaultBg = getWeatherBackground('clear', '01d');
        setCurrentBackground(defaultBg.url);
        setOverlayClass(defaultBg.overlay || 'bg-black/10');
        setIsLoading(false);
      };
      img.src = background.url;
    }
  }, [weatherData]);

  const backgroundStyle = currentBackground ? {
    backgroundImage: `url(${currentBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  } : {};

  return (
    <div 
      className={`min-h-screen transition-all duration-1000 ease-in-out ${
        currentBackground ? '' : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}
      style={backgroundStyle}
    >
      {/* Overlay for better text readability */}
      <div className={`min-h-screen transition-all duration-1000 ease-in-out ${overlayClass}`}>
        {/* Loading indicator for background transitions */}
        {isLoading && (
          <div className="fixed top-4 right-4 z-50">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-700">Updating atmosphere...</span>
              </div>
            </div>
          </div>
        )}
        
        {children}
      </div>
    </div>
  );
};