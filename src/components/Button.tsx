import React from 'react';
import { Link } from 'react-router-dom'; // Import Link at the top

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string; // for Link behavior
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  to,
  className = '',
  ...props
}) => {
  const baseStyle = "font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F052B]";
  
  let sizeStyle = '';
  switch (size) {
    case 'sm': sizeStyle = 'px-4 py-2 text-sm'; break;
    case 'md': sizeStyle = 'px-6 py-2.5 text-base'; break;
    case 'lg': sizeStyle = 'px-8 py-3 text-lg'; break;
  }

  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'text-white bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90 focus:ring-[#A78BFA]';
      break;
    case 'secondary':
      variantStyle = 'text-[#E0D9F7] bg-white/10 hover:bg-white/20 focus:ring-white/30 glassmorphism';
      break;
    case 'outline':
      variantStyle = 'text-[#E0D9F7] border-2 border-[#A78BFA] hover:bg-[#A78BFA] hover:text-[#0F052B] focus:ring-[#A78BFA]';
      break;
  }

  const combinedClassName = `${baseStyle} ${sizeStyle} ${variantStyle} ${className}`;

  if (asLink && to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;