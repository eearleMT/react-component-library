import React, { useEffect, useState } from "react";
import "./MTSwitch.scss";

export type SwitchProps = {
  color?: "mt-primary" | "tc-primary";
  size?: "sm" | "lg";
  checked?: boolean;
  disabled?: boolean;
  onToggle?: (checked: boolean) => void;
};

export const MTSwitch: React.FC<SwitchProps> = ({
  color = "mt-primary",
  size = "sm",
  checked = false,
  disabled = false,
  onToggle,
}) => {
  const [enabled, setEnabled] = useState(checked);

  useEffect(() => {
    setEnabled(checked);
  }, [checked]);

  const toggleSwitch = () => {
    if (disabled) {
      return;
    }

    const newValue = !enabled;
    setEnabled(newValue);
    onToggle?.(newValue);
  };

  const buttonClass = enabled ? color : "not-enabled";
  const spanClass = `switch-knob ${enabled ? "enabled" : ""}`;

  return (
    <button
      id="MT-switch"
      type="button"
      className={`${buttonClass} ${size} ${disabled ? "disabled" : ""}`}
      role="switch"
      aria-checked={enabled}
      onClick={toggleSwitch}
      disabled={disabled}
    >
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className={spanClass}></span>
    </button>
  );
};
