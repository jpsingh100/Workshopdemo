import { WeatherData } from '../types/weather';

interface WeatherQuote {
  quote: string;
  author?: string;
}

// Weather-specific positive quotes and messages
const weatherQuoteTemplates = {
  sunny: [
    "The sun is shining bright in {location} - what a perfect day to embrace new possibilities!",
    "With {temperature}°F of pure sunshine in {location}, today feels like nature's way of saying 'you've got this!'",
    "The clear skies over {location} are a beautiful reminder that every day is a fresh start.",
    "Sunshine and {temperature} degrees in {location} - the perfect recipe for a wonderful day ahead!",
    "The brilliant sun over {location} is lighting up not just the sky, but all the amazing opportunities today holds."
  ],
  cloudy: [
    "Even with clouds above {location}, your inner light shines brightest at {temperature}°F!",
    "The soft, cloudy skies in {location} create the perfect peaceful backdrop for a meaningful day.",
    "Sometimes the most beautiful days in {location} are the quietly cloudy ones that let us reflect and grow.",
    "The gentle clouds over {location} remind us that beauty comes in many forms, just like at {temperature} degrees today.",
    "Cloudy skies in {location} are nature's way of creating a cozy, thoughtful atmosphere for your day."
  ],
  rainy: [
    "The refreshing rain in {location} is washing away yesterday's worries - embrace this {temperature}°F renewal!",
    "Every raindrop in {location} is nature's way of nurturing growth and new beginnings.",
    "The sound of rain in {location} at {temperature} degrees creates the perfect ambiance for cozy moments and warm thoughts.",
    "Rain in {location} brings life and freshness - just like the positive energy you bring to every day!",
    "Let the gentle rain in {location} remind you that after every storm comes beautiful growth."
  ],
  stormy: [
    "Even storms in {location} eventually pass, leaving behind clearer skies and stronger spirits!",
    "The power of nature in {location} reminds us of our own inner strength at {temperature} degrees.",
    "Storms may rumble over {location}, but they also bring the most spectacular skies and fresh new air.",
    "The dramatic weather in {location} is a reminder that you're strong enough to weather any challenge.",
    "After every storm in {location} comes the most beautiful sunshine - your bright moment is coming!"
  ],
  snowy: [
    "The magical snowfall in {location} at {temperature}°F turns the world into a winter wonderland of possibilities!",
    "Each snowflake in {location} is unique and beautiful, just like every moment of your day ahead.",
    "The pristine snow in {location} creates a blank canvas for all the amazing things you'll accomplish today.",
    "Winter's beauty in {location} at {temperature} degrees reminds us that every season brings its own special gifts.",
    "The peaceful snow in {location} blankets the world in serenity and hope for wonderful days ahead."
  ],
  foggy: [
    "The mysterious fog in {location} at {temperature}°F adds an air of adventure to your day ahead!",
    "Sometimes the most beautiful discoveries in {location} happen when we can't see the whole path clearly.",
    "The soft fog in {location} creates a dreamy atmosphere perfect for imagination and creativity.",
    "Let the gentle mist in {location} remind you that clarity comes with each step forward.",
    "The ethereal fog in {location} at {temperature} degrees makes every moment feel like a scene from a beautiful story."
  ]
};

const motivationalQuotes = [
  { quote: "Every day is a new beginning. Take a deep breath, smile, and start again.", author: "Unknown" },
  { quote: "The weather may be unpredictable, but your ability to adapt and thrive is constant.", author: "Weather Wisdom" },
  { quote: "Like the weather, life has its seasons. Embrace them all.", author: "Nature's Lesson" },
  { quote: "Sunshine is a welcome thing. It brings a lot of brightness.", author: "Jimmie Davis" },
  { quote: "The best thing one can do when it's raining is to let it rain.", author: "Henry Wadsworth Longfellow" }
];

export const generateWeatherQuote = (weatherData: WeatherData): WeatherQuote => {
  const description = weatherData.description.toLowerCase();
  let category = 'sunny';
  
  // Determine weather category
  if (description.includes('thunderstorm') || description.includes('storm')) {
    category = 'stormy';
  } else if (description.includes('rain') || description.includes('drizzle') || description.includes('shower')) {
    category = 'rainy';
  } else if (description.includes('snow') || description.includes('sleet') || description.includes('blizzard')) {
    category = 'snowy';
  } else if (description.includes('mist') || description.includes('fog') || description.includes('haze')) {
    category = 'foggy';
  } else if (description.includes('cloud') || description.includes('overcast')) {
    category = 'cloudy';
  } else if (description.includes('clear') || description.includes('sunny')) {
    category = 'sunny';
  }
  
  // Get random quote template for the weather category
  const templates = weatherQuoteTemplates[category as keyof typeof weatherQuoteTemplates];
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  
  // Replace placeholders with actual data
  const personalizedQuote = randomTemplate
    .replace(/{location}/g, weatherData.location)
    .replace(/{temperature}/g, weatherData.temperature.toString())
    .replace(/{description}/g, weatherData.description);
  
  // Occasionally return a general motivational quote instead
  if (Math.random() < 0.2) {
    const randomMotivational = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    return {
      quote: `${personalizedQuote.split('.')[0]}. ${randomMotivational.quote}`,
      author: randomMotivational.author
    };
  }
  
  return {
    quote: personalizedQuote,
    author: "Weather Inspiration"
  };
};

// Generate time-based greetings
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 17) {
    return "Good afternoon";
  } else if (hour < 21) {
    return "Good evening";
  } else {
    return "Good night";
  }
};

// Generate random encouraging prefixes
const encouragingPrefixes = [
  "Here's some weather wisdom for you:",
  "Let the weather inspire you today:",
  "A positive thought for your day:",
  "Weather brings wisdom:",
  "Nature's message for you:"
];

export const getRandomPrefix = (): string => {
  return encouragingPrefixes[Math.floor(Math.random() * encouragingPrefixes.length)];
};