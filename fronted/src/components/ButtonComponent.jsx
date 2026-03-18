import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  onClick,
  className = "", // external classes
  disabled = false,
}) => {
  // Base styling for padding, font, border radius, text color
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300";

  // Default gradient + shadow (used only if className does not override)
  const defaultStyle =
    "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-blue-800 hover:to-purple-600 shadow-lg hover:shadow-xl";

  // Final classes: base + either className (if provided) or defaultStyle
  const finalClass = `${baseStyle} ${className ? className : defaultStyle} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  // Render Link if "to" is provided
  if (to) {
    return (
      <Link to={to} className={finalClass}>
        {children}
      </Link>
    );
  }

  // Render button otherwise
  return (
    <button onClick={onClick} disabled={disabled} className={finalClass}>
      {children}
    </button>
  );
};

export default Button;
