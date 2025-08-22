export interface WeatherBackground {
  url: string;
  attribution: string;
  overlay?: string;
}

// High-quality weather background images from Pexels
export const weatherBackgrounds: Record<string, WeatherBackground> = {
  // Clear/Sunny conditions
  clear: {
    url: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    attribution: 'Photo by Pixabay on Pexels',
    overlay: 'bg-black/10'
  },
  
  // Cloudy/Overcast conditions
  clouds: {
    url: 'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    attribution: 'Photo by Pixabay on Pexels',
    overlay: 'bg-black/20'
  },
  
  // Rainy conditions
  rain: {
    url: 'https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    attribution: 'Photo by Pixabay on Pexels',
    overlay: 'bg-black/30'
  },
  
  // Thunderstorm conditions
  thunderstorm: {
    url: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    attribution: 'Photo by Johannes Plenio on Pexels',
    overlay: 'bg-black/40'
  },
  
  // Snowy conditions
  snow: {
    url: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    attribution: 'Photo by Pixabay on Pexels',
    overlay: 'bg-black/20'
  },
  
  // Misty/Foggy conditions
  mist: {
    url: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    attribution: 'Photo by Pixabay on Pexels',
    overlay: 'bg-black/25'
  },
  
  // Default fallback
  default: {
    url: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    attribution: 'Photo by Pixabay on Pexels',
    overlay: 'bg-black/10'
  }
};

// Map OpenWeatherMap weather conditions to background categories
export const getWeatherBackground = (weatherDescription: string, icon: string): WeatherBackground => {
  const description = weatherDescription.toLowerCase();
  
  // Check for specific weather conditions
  if (description.includes('thunderstorm') || description.includes('storm')) {
    return weatherBackgrounds.thunderstorm;
  }
  
  if (description.includes('rain') || description.includes('drizzle') || description.includes('shower')) {
    return weatherBackgrounds.rain;
  }
  
  if (description.includes('snow') || description.includes('sleet') || description.includes('blizzard')) {
    return weatherBackgrounds.snow;
  }
  
  if (description.includes('mist') || description.includes('fog') || description.includes('haze') || description.includes('smoke')) {
    return weatherBackgrounds.mist;
  }
  
  if (description.includes('cloud') || description.includes('overcast')) {
    return weatherBackgrounds.clouds;
  }
  
  if (description.includes('clear') || description.includes('sunny')) {
    return weatherBackgrounds.clear;
  }
  
  // Fallback to icon-based detection
  const iconCode = icon.substring(0, 2);
  switch (iconCode) {
    case '01': // clear sky
      return weatherBackgrounds.clear;
    case '02': // few clouds
    case '03': // scattered clouds
    case '04': // broken clouds
      return weatherBackgrounds.clouds;
    case '09': // shower rain
    case '10': // rain
      return weatherBackgrounds.rain;
    case '11': // thunderstorm
      return weatherBackgrounds.thunderstorm;
    case '13': // snow
      return weatherBackgrounds.snow;
    case '50': // mist
      return weatherBackgrounds.mist;
    default:
      return weatherBackgrounds.default;
  }
};

// Preload background images for smooth transitions
export const preloadWeatherImages = () => {
  Object.values(weatherBackgrounds).forEach(background => {
    const img = new Image();
    img.src = background.url;
  });
};