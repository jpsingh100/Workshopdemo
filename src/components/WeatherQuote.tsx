import React, { useState, useEffect } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { WeatherData } from '../types/weather';
import { generateWeatherQuote, getTimeBasedGreeting, getRandomPrefix } from '../utils/weatherQuotes';

interface WeatherQuoteProps {
  weatherData: WeatherData;
}

export const WeatherQuote: React.FC<WeatherQuoteProps> = ({ weatherData }) => {
  const [currentQuote, setCurrentQuote] = useState<{quote: string; author?: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (weatherData) {
      // Add a slight delay for dramatic effect
      setTimeout(() => {
        const quote = generateWeatherQuote(weatherData);
        setCurrentQuote(quote);
        setIsVisible(true);
      }, 500);
    }
  }, [weatherData]);

  if (!currentQuote || !isVisible) {
    return null;
  }

  const greeting = getTimeBasedGreeting();
  const prefix = getRandomPrefix();

  return (
    <div className="mb-8 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 opacity-20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-2 left-2 opacity-10">
          <Sparkles className="w-6 h-6" />
        </div>
        
        <div className="relative z-10">
          {/* Greeting */}
          <div className="flex items-center mb-3">
            <Quote className="w-6 h-6 mr-2 text-blue-200" />
            <span className="text-blue-200 font-medium">{greeting}! {prefix}</span>
          </div>
          
          {/* Main Quote */}
          <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-3 italic">
            "{currentQuote.quote}"
          </blockquote>
          
          {/* Attribution */}
          {currentQuote.author && (
            <div className="text-right">
              <cite className="text-blue-200 text-sm">
                — {currentQuote.author}
              </cite>
            </div>
          )}
        </div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};