import React from 'react';

interface ToggleSwitchProps {
  leftLabel: string;
  rightLabel: string;
  isRightActive: boolean;
  onChange: (isRightActive: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  leftLabel,
  rightLabel,
  isRightActive,
  onChange
}) => {
  return (
    <div className="relative bg-white/20 rounded-full p-1 flex items-center">
      <button
        onClick={() => onChange(false)}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          !isRightActive 
            ? 'bg-white text-blue-600 shadow-sm' 
            : 'text-white hover:text-blue-100'
        }`}
      >
        {leftLabel}
      </button>
      <button
        onClick={() => onChange(true)}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          isRightActive 
            ? 'bg-white text-blue-600 shadow-sm' 
            : 'text-white hover:text-blue-100'
        }`}
      >
        {rightLabel}
      </button>
    </div>
  );
};