import React from 'react';

interface IconProps {
  className?: string;
}

export const TemperatureIcon1: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L8 6h3v14l2-2V6h3l-4-4z" />
    <path d="M6 12l2-2v4l-2-2zm12 0l-2-2v4l2-2z" />
    <circle cx="12" cy="18" r="2" />
  </svg>
);

export const TemperatureIcon2: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-1.1 0-2 .9-2 2v10.5c-1.2.7-2 2-2 3.5 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.5-.8-2.8-2-3.5V4c0-1.1-.9-2-2-2z" />
    <circle cx="12" cy="18" r="1.5" />
  </svg>
);

export const TemperatureIcon3: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-1.1 0-2 .9-2 2v8.5c-1.2.7-2 2-2 3.5 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.5-.8-2.8-2-3.5V4c0-1.1-.9-2-2-2z" />
    <circle cx="12" cy="18" r="2" />
  </svg>
);

export const TemperatureIcon4: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

export const TemperatureIcon5: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    <path d="M8 12h8M10 8h4M10 16h4" />
  </svg>
);