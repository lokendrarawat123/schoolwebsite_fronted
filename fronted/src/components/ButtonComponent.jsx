import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  onClick,
  className = "", // external classes
  disabled = false,
  size = "md", // xs, sm, md, lg, xl
  variant = "primary", // primary, secondary, outline
}) => {
  // Responsive base styling with touch-friendly sizing
  const baseStyle =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 touch-friendly focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Size variants with responsive scaling
  const sizeStyles = {
    xs: "px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded",
    sm: "px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md",
    md: "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg",
    xl: "px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-xl"
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-blue-800 hover:to-purple-600 text-white shadow-lg hover:shadow-xl focus:ring-purple-500",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl focus:ring-gray-500",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-500"
  };

  // Final classes: base + size + variant + custom className + disabled state
  const finalClass = `${baseStyle} ${sizeStyles[size]} ${className ? className : variantStyles[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"
  }`;

  // Render Link if "to" is provided
  if (to) {
    return (
      <Link 
        to={to} 
        className={finalClass}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  // Render button otherwise
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={finalClass}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
