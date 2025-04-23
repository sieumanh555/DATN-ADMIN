import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline"; // Button variant
  color?: "blue" | "red" | "green" | "gray" | "pink"; // Màu sắc
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
  type?: "button" | "submit" | "reset"; // Button type
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  color = "blue", // Mặc định màu xanh
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
  type = "button", // Default type is button
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Màu sắc cho button theo variant
  const colorClasses = {
    blue: {
      primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
      outline:
        "text-blue-500 ring-1 ring-blue-500 hover:bg-blue-50 disabled:text-blue-300 disabled:ring-blue-300",
    },
    red: {
      primary: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
      outline:
        "text-red-500 ring-1 ring-red-500 hover:bg-red-50 disabled:text-red-300 disabled:ring-red-300",
    },
    green: {
      primary:
        "bg-green-500 text-white hover:bg-green-600 disabled:bg-green-300",
      outline:
        "text-green-500 ring-1 ring-green-500 hover:bg-green-50 disabled:text-green-300 disabled:ring-green-300",
    },
    gray: {
      primary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
      outline:
        "text-gray-500 ring-1 ring-gray-500 hover:bg-gray-50 disabled:text-gray-300 disabled:ring-gray-300",
    },
    pink: {
      primary: "bg-pink-500 text-white hover:bg-pink-600 disabled:bg-pink-300",
      outline:
        "text-pink-500 ring-1 ring-pink-500 hover:bg-pink-50 disabled:text-pink-300 disabled:ring-pink-300",
    },
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition ${className} ${
        sizeClasses[size]
      } ${colorClasses[color][variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
