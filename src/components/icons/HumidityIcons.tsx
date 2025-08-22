import React from 'react';

interface IconProps {
  className?: string;
}

export const HumidityIcon1: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" opacity="0.3" />
  </svg>
);

export const HumidityIcon2: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" opacity="0.5" />
    <circle cx="9" cy="16" r="1" opacity="0.7" />
  </svg>
);

export const HumidityIcon3: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" opacity="0.7" />
    <circle cx="9" cy="16" r="1" />
    <circle cx="15" cy="14" r="0.8" />
  </svg>
);

export const HumidityIcon4: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" opacity="0.9" />
    <circle cx="9" cy="16" r="1" />
    <circle cx="15" cy="14" r="1" />
    <circle cx="12" cy="18" r="0.8" />
  </svg>
);

export const HumidityIcon5: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    <circle cx="9" cy="16" r="1.2" />
    <circle cx="15" cy="14" r="1.2" />
    <circle cx="12" cy="18" r="1" />
    <circle cx="7" cy="13" r="0.8" />
    <circle cx="17" cy="17" r="0.8" />
  </svg>
);