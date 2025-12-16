import React from "react";
import "./MTSpinner.scss";

export type SpinnerProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const MTSpinner: React.FC<SpinnerProps> = ({
  className,
  size = "md",
}) => {
  return (
    <div id="MT-spinner" className={`size-${size} ${className || ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
