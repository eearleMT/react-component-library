import React, { useState } from "react";
import "./MTRadioGroup.scss";

export interface IRadioItem {
  label: string;
  value: string;
  checked?: boolean;
}

export type RadioGroupProps = {
  name: string;
  direction?: "row" | "column";
  items: IRadioItem[];
  radioSize?: number;
  radioSizeUnit?: string;
  textSize?: number;
  textSizeUnit?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const MTRadioGroup: React.FC<RadioGroupProps> = ({
  name,
  direction = "row",
  items,
  radioSize = 20,
  radioSizeUnit = "px",
  textSize = 1,
  textSizeUnit = "rem",
  onChange,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    items.find((item) => item.checked)?.value || ""
  );

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  const radioGroupStyle = {
    "--radio-flex-direction": direction,
  } as React.CSSProperties;

  const radioStyle = {
    "--radio-size": `${radioSize}${radioSizeUnit}`,
    "--radio-inner-size": `${radioSize - radioSize / 5}${radioSizeUnit}`,
    "--radio-label-margin": `${radioSize / 2}${radioSizeUnit}`,
  } as React.CSSProperties;

  const textStyle = {
    "--text-size": `${textSize}${textSizeUnit}`,
  } as React.CSSProperties;

  return (
    <fieldset
      id="MT-radio-group"
      className={`${name}-group ${className || ""}`}
      style={radioGroupStyle}
    >
      {items.map((item) => (
        <label key={item.value}>
          <input
            type="radio"
            name={name}
            checked={selectedValue === item.value}
            onChange={() => handleValueChange(item.value)}
          />
          <span className="circle" style={radioStyle}></span>
          {item.label && <span style={textStyle}>{item.label}</span>}
        </label>
      ))}
    </fieldset>
  );
};
