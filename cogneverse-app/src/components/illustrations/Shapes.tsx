// Abstract gradient shapes inspired by coolshap.es
export const shapes = {
  // Blob 1 - Warm gradient
  blob1: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="blob1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFBD76" />
          <stop offset="100%" stopColor="#EDA398" />
        </linearGradient>
        <filter id="blob1Noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
      <path
        fill="url(#blob1Gradient)"
        d="M47.5,-61.5C59.8,-52.5,67.1,-36.4,71.3,-19.5C75.5,-2.7,76.6,14.9,70.3,29.8C64.1,44.7,50.5,57,35.1,63.8C19.7,70.5,2.5,71.8,-14.3,68.6C-31.1,65.4,-47.5,57.7,-58.2,45.2C-68.9,32.7,-74,15.4,-73.1,-1C-72.2,-17.4,-65.3,-32.8,-54.1,-42.7C-42.9,-52.7,-27.4,-57.2,-11.5,-59.8C4.4,-62.4,35.2,-70.5,47.5,-61.5Z"
        transform="translate(100 100)"
      />
    </svg>
  ),

  // Blob 2 - Oceanic gradient
  blob2: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="blob2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#003F47" />
          <stop offset="100%" stopColor="#193497" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blob2Gradient)"
        d="M39.5,-51.2C51.9,-42.8,63.1,-31.8,67.8,-18.2C72.5,-4.6,70.7,11.6,64.4,25.6C58.1,39.5,47.3,51.2,34,58.1C20.7,65,4.8,67.2,-10.3,65.1C-25.3,62.9,-39.6,56.5,-50.2,46.1C-60.9,35.8,-68,21.6,-70.7,5.9C-73.4,-9.8,-71.8,-27,-63.3,-38.8C-54.8,-50.5,-39.4,-56.9,-25,-63.1C-10.6,-69.3,-3,-75.4,5.5,-72.7C14,-70,27.1,-59.6,39.5,-51.2Z"
        transform="translate(100 100)"
      />
    </svg>
  ),

  // Circle with noise texture
  circleNoise: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="circleGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFBD76" />
          <stop offset="100%" stopColor="#EDA398" />
        </radialGradient>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.1" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" mode="overlay" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#circleGradient)" filter="url(#noiseFilter)" />
    </svg>
  ),

  // Star/burst shape
  star: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#193497" />
          <stop offset="100%" stopColor="#003F47" />
        </linearGradient>
      </defs>
      <path
        fill="url(#starGradient)"
        d="M100,10 L115,80 L185,85 L125,120 L145,190 L100,145 L55,190 L75,120 L15,85 L85,80 Z"
      />
    </svg>
  ),

  // Donut/ring
  ring: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#003F47" />
          <stop offset="100%" stopColor="#193497" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="none" stroke="url(#ringGradient)" strokeWidth="20" />
    </svg>
  ),

  // Wave pattern
  wave: (
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#003F47" />
          <stop offset="50%" stopColor="#193497" />
          <stop offset="100%" stopColor="#003F47" />
        </linearGradient>
      </defs>
      <path
        fill="url(#waveGradient)"
        fillOpacity="1"
        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  ),
};

// Abstract decorative component
export function AbstractBlob({
  variant = "blob1",
  className = "",
}: {
  variant?: keyof typeof shapes;
  className?: string;
}) {
  return <div className={`pointer-events-none ${className}`}>{shapes[variant]}</div>;
}

// Grid pattern background
export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// Geometric dots pattern
export function DotsPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

// Wave pattern for section transitions
export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 1440 120" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`w-full h-full ${className}`} 
      preserveAspectRatio="none"
    >
      <path
        fill="var(--color-paper)"
        d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
      />
    </svg>
  );
}

