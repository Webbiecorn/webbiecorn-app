import React, { useState } from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  dataAos?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, className = '', dataAos }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`[perspective:1000px] w-full h-full ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      data-aos={dataAos}
    >
      <div
        className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden] glassmorphism rounded-xl p-6 shadow-2xl flex flex-col justify-center items-center text-center">
          {frontContent}
        </div>
        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rotate-y-180 glassmorphism rounded-xl p-6 shadow-2xl flex flex-col justify-center items-center text-center">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;