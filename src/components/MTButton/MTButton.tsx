import React from "react";
import "./MTButton.scss";

export const PlusIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.333v9.334M3.333 8h9.334"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type ButtonProps = {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "delete";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const MTButton: React.FC<ButtonProps> = ({
  color = "primary",
  size = "md",
  variant = "filled",
  children,
  icon,
  onClick,
  disabled = false,
  type = "button",
}) => {
  const className = `mt-button size-${size} variant-${variant} color-${color} disabled-${disabled} type-${type}`;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};
