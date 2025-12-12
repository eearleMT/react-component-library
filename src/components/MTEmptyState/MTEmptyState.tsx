import React from "react";
import "./MTEmptyState.scss";

export type EmptyStateProps = {
  message?: string;
  height?: string;
  width?: string;
};

const EmptyPageIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="12"
      width="60"
      height="56"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="30" cy="28" r="4" fill="currentColor" />
    <path
      d="M12 48L28 32L44 44L68 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MTEmptyState: React.FC<EmptyStateProps> = ({
  message = "No data to show",
  height = "100%",
  width = "100%",
}) => {
  return (
    <div className="mt-empty-state" style={{ height, width }}>
      <div className="mt-empty-state-icon">
        <EmptyPageIcon />
      </div>
      <span className="mt-empty-state-text">{message}</span>
    </div>
  );
};
