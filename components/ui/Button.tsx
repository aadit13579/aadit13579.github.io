import React from 'react';

// Update this interface to include target and rel
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string; // Add this
  rel?: string;    // Add this
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'solid', 
  children, 
  asAnchor, 
  href, 
  target, 
  rel, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-2.5 rounded-md font-semibold transition-all duration-200 text-sm md:text-base";
  const variants = {
    solid: "bg-[#008B8B] text-slate-100 hover:bg-[#000000] shadow-sm",
    outline: "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-50"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      // Pass target and rel to the anchor tag
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};