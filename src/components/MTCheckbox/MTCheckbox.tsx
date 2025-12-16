import React from "react";
import "./MTCheckbox.scss";

export type CheckboxProps = {
  checked?: boolean;
  label?: string;
  labelPosition?: "left" | "right";
  checkboxSize?: number;
  checkboxSizeUnit?: string;
  textSize?: number;
  textSizeUnit?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
};

export const MTCheckbox: React.FC<CheckboxProps> = ({
  checked = false,
  label,
  labelPosition = "left",
  checkboxSize = 1.15,
  checkboxSizeUnit = "em",
  textSize = 1,
  textSizeUnit = "rem",
  onChange,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  const containerStyle = {
    "--label-position": labelPosition === "right" ? "row-reverse" : "row",
  } as React.CSSProperties;

  const labelStyle = {
    "--font-size": `${textSize}${textSizeUnit}`,
  } as React.CSSProperties;

  const checkboxStyle = {
    "--checkbox-size": `${checkboxSize}${checkboxSizeUnit}`,
  } as React.CSSProperties;

  return (
    <div
      id="MT-checkbox"
      className={`${className || ""}`}
      style={containerStyle}
    >
      <span style={labelStyle}>{label}</span>
      <input
        type="checkbox"
        style={checkboxStyle}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};
