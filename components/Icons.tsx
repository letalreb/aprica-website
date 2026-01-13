import React from 'react';

type IconProps = {
  className?: string;
  size?: number;
};

// Lavatrice & Lavastoviglie
export const IconWasher = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <circle cx="12" cy="13" r="5" />
    <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    <path d="M8 6h.01" />
    <path d="M11 6h2" />
  </svg>
);

// Wi-Fi Veloce
export const IconWifi = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <path d="M12 20h.01" />
    <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    <path d="M5 12.859a10 10 0 0 1 14 0" />
    <path d="M2 9.289a14 14 0 0 1 20 0" />
  </svg>
);

// Netflix & TV
export const IconTv = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
    <polyline points="17 2 12 7 7 2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
);

// Bagno Elegante
export const IconShower = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <path d="M9 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H9v-2Z" />
    <path d="M9 7h6" />
    <path d="M12 5v2" />
    <path d="M12 7v10" />
    <path d="M8 17v.5" />
    <path d="M16 17v.5" />
    <path d="M4 12v9" />
    <path d="M20 12v9" />
    <path d="M4 21h16" />
    <path d="M5 12h14" />
    <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

// Garage Privato (Car)
export const IconGarage = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <rect x="3" y="10" width="18" height="10" rx="2" />
    <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
    <path d="M7 15h2" />
    <path d="M15 15h2" />
  </svg>
);

// Ski Room (Snowflake)
export const IconSki = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <path d="m3 3 18 18" />
    <path d="m21 3-18 18" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
);

// Check-in (Key)
export const IconKey = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6" />
    <path d="m15.5 7.5 3 3L22 7l-3-3" />
  </svg>
);

// Checkmark
export const IconCheck = ({ className = "w-6 h-6", size = 24 }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    width={size}
    height={size}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
