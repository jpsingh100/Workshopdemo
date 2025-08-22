import React from 'react';
import { Cloud } from 'lucide-react';
import { WeatherBackground } from './components/WeatherBackground';
import { WeatherForm } from './components/WeatherForm';
import { WeatherDisplay } from './components/WeatherDisplay';
import { WeatherQuote } from './components/WeatherQuote';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useWeather } from './hooks/useWeather';

function App() {
  const {
    weatherData,
    isLoading,
    error,
    temperatureUnit,
    setTemperatureUnit,
    fetchWeather,
  } = useWeather();

  return (
    <WeatherBackground weatherData={weatherData}>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 inline-block">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="w-12 h-12 text-blue-600 mr-3" />
                <h1 className="text-4xl font-bold text-gray-800">WeatherScope</h1>
              </div>
              <p className="text-gray-600 text-lg">
                Get detailed weather insights with interactive visual scales
              </p>
            </div>
          </div>

          {/* Weather Form */}
          <WeatherForm
            onSubmit={fetchWeather}
            isLoading={isLoading}
            error={error}
          />

          {/* Loading State */}
          {isLoading && <LoadingSpinner />}

          {/* AI-Generated Weather Quote */}
          {weatherData && !isLoading && (
            <WeatherQuote weatherData={weatherData} />
          )}

          {/* Weather Display */}
          {weatherData && !isLoading && (
            <WeatherDisplay
              weatherData={weatherData}
              temperatureUnit={temperatureUnit}
              onTemperatureUnitChange={setTemperatureUnit}
            />
          )}

          {/* Welcome Message */}
          {!weatherData && !isLoading && !error && (
            <div className="text-center py-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 inline-block">
                <Cloud className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Welcome to WeatherScope
                </h3>
                <p className="text-gray-600">
                  Enter a ZIP code above to view detailed weather information with interactive visual scales.
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="text-center mt-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 inline-block shadow-sm">
              <p className="text-gray-500 text-sm">
                Weather data provided by OpenWeatherMap • Built with React & Tailwind CSS
              </p>
            </div>
          </footer>
        </div>
      </div>
    </WeatherBackground>
  );
}

export default App;