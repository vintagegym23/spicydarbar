import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'inline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300';

  const variants = {
    primary: 'bg-gold text-btn-dark font-sans font-semibold text-sm px-7 py-3 rounded-md hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gold',
    outline: 'border border-gold text-gold font-sans font-semibold text-sm px-7 py-3 rounded-md hover:bg-gold hover:text-btn-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gold',
    inline: 'text-gold-muted font-sans text-xs uppercase tracking-cta hover:text-gold disabled:opacity-50 disabled:cursor-not-allowed'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
