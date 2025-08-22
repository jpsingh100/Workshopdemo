import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface WeatherFormProps {
  onSubmit: (zipcode: string) => void;
  isLoading: boolean;
  error: string | null;
}

export const WeatherForm: React.FC<WeatherFormProps> = ({ onSubmit, isLoading, error }) => {
  const [zipcode, setZipcode] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedZipcode = zipcode.trim();
    
    if (!trimmedZipcode) {
      setInputError('Please enter a ZIP code');
      return;
    }
    
    if (!/^\d{5}$/.test(trimmedZipcode)) {
      setInputError('Please enter a valid 5-digit ZIP code');
      return;
    }
    
    setInputError('');
    onSubmit(trimmedZipcode);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setZipcode(value);
    
    if (inputError && (value.trim() === '' || /^\d{0,5}$/.test(value.trim()))) {
      setInputError('');
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <MapPin className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Get Weather by ZIP Code</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <input
              type="text"
              value={zipcode}
              onChange={handleInputChange}
              placeholder="Enter 5-digit ZIP code (e.g., 10001)"
              className={`w-full px-4 py-3 pr-12 border-2 rounded-lg text-lg transition-colors duration-200 ${
                inputError || error 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-gray-300 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              maxLength={5}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !zipcode.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg transition-all duration-200 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {(inputError || error) && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <span className="w-4 h-4 mr-1">⚠️</span>
              {inputError || error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};