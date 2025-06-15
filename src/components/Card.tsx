import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  dataAos?: string; // For AOS animations
  dataAosDelay?: string; // For AOS animation delay
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, dataAos, dataAosDelay }) => {
  return (
    <div
      className={`glassmorphism rounded-xl p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.5)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      {children}
    </div>
  );
};

export default Card;