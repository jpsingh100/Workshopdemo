import React from 'react';

interface IconProps {
  className?: string;
}

export const WindIcon1: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 12h4" strokeWidth="2" stroke="currentColor" fill="none" />
    <circle cx="18" cy="12" r="1" />
  </svg>
);

export const WindIcon2: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 12h8" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="M6 8h6" strokeWidth="2" stroke="currentColor" fill="none" />
    <circle cx="18" cy="12" r="1.5" />
  </svg>
);

export const WindIcon3: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 12h12" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="M4 8h10" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="M4 16h8" strokeWidth="2" stroke="currentColor" fill="none" />
    <circle cx="20" cy="12" r="2" />
  </svg>
);

export const WindIcon4: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 12h14" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="M2 8h12" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="M2 16h10" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="M2 6h8" strokeWidth="2" stroke="currentColor" fill="none" />
    <circle cx="20" cy="12" r="2.5" />
  </svg>
);

export const WindIcon5: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1 12h16" strokeWidth="3" stroke="currentColor" fill="none" />
    <path d="M1 8h14" strokeWidth="3" stroke="currentColor" fill="none" />
    <path d="M1 16h12" strokeWidth="3" stroke="currentColor" fill="none" />
    <path d="M1 6h10" strokeWidth="3" stroke="currentColor" fill="none" />
    <path d="M1 18h8" strokeWidth="3" stroke="currentColor" fill="none" />
    <circle cx="21" cy="12" r="3" />
  </svg>
);