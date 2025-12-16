import React, { useState, useRef, useEffect } from "react";
import "./MTSelect.scss";

export interface SelectOption {
  name: string;
  value: string;
}

export type SelectProps = {
  label?: string;
  value?: string;
  options: SelectOption[];
  width?: string;
  disabled?: boolean;
  searchable?: boolean;
  placeholder?: string;
  isFilter?: boolean;
  iconUrl?: string;
  onChange?: (value: string | null) => void;
  onFilterChange?: (filterTerm: string) => void;
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
};

export const MTSelect: React.FC<SelectProps> = ({
  label,
  value,
  options,
  width = "8rem",
  disabled = false,
  searchable = false,
  placeholder = "",
  isFilter = false,
  iconUrl,
  onChange,
  onFilterChange,
  onExpandedChange,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value || null
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");
  const [showSelectedName, setShowSelectedName] = useState(true);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === selectedValue);
  const selectedName = selectedOption?.name || "";

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  useEffect(() => {
    setSelectedValue(value || null);
  }, [value]);

  useEffect(() => {
    onFilterChange?.(filterTerm);
    setShowSelectedName(false);
  }, [filterTerm, onFilterChange]);

  useEffect(() => {
    onExpandedChange?.(isExpanded);
    if (isExpanded) {
      setShowSelectedName(false);
      setFilterTerm("");
    } else {
      setShowSelectedName(true);
    }
  }, [isExpanded, onExpandedChange]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isExpanded) return;

      const path = e.composedPath();
      const isClickOutside = !path.includes(
        selectWrapperRef.current as EventTarget
      );

      if (isClickOutside) {
        setIsExpanded(false);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [isExpanded]);

  const handleSelectChange = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    handleToggleExpanded();
  };

  const handleToggleExpanded = () => {
    if (disabled) {
      setIsExpanded(false);
      return;
    }
    if (inputRef.current) {
      inputRef.current.value = "";
      setFilterTerm("");
    }
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.target.value);
  };

  const handleClearSelectedValue = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValue(null);
    onChange?.(null);
  };

  const selectStyle: React.CSSProperties = {
    width,
  };

  const ChevronIcon = () => (
    <svg
      className="logo"
      xmlns="http://www.w3.org/2000/svg"
      width="11.6"
      height="6"
      viewBox="0 0 11.6 6"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="Shape"
            d="M5.8,4.189,1.414.22A.891.891,0,0,0,.243.22a.7.7,0,0,0,0,1.061l4.971,4.5a.891.891,0,0,0,1.172,0l4.971-4.5a.7.7,0,0,0,0-1.061.891.891,0,0,0-1.172,0Z"
            transform="translate(0)"
            fill="#d6d6d6"
          />
        </clipPath>
      </defs>
      <g id="More" transform="translate(-7.2 -10)">
        <g id="chevron-down" transform="translate(7.2 10)">
          <path
            id="Shape-2"
            data-name="Shape"
            d="M5.8,4.189,1.414.22A.891.891,0,0,0,.243.22a.7.7,0,0,0,0,1.061l4.971,4.5a.891.891,0,0,0,1.172,0l4.971-4.5a.7.7,0,0,0,0-1.061.891.891,0,0,0-1.172,0Z"
            transform="translate(0)"
            fill="#d6d6d6"
          />
        </g>
      </g>
    </svg>
  );

  return (
    <div
      id="MT-select"
      ref={selectWrapperRef}
      className={`${isExpanded ? "expanded" : ""} ${
        disabled ? "disabled" : ""
      } ${searchable ? "searchable" : ""} ${className || ""}`}
      style={selectStyle}
      tabIndex={0}
    >
      {label && (
        <label className="mr-3 mt-2 text-sm font-medium">{label}</label>
      )}
      <div className="select-container-wrapper">
        <div
          className="selected-name-container"
          title={selectedName}
          onClick={handleToggleExpanded}
        >
          {showSelectedName && (
            <span className="selected-name">{selectedName || placeholder}</span>
          )}
          {searchable && (
            <input
              className="mt-select-input"
              ref={inputRef}
              disabled={disabled}
              type="text"
              onInput={handleInputChange}
            />
          )}
          {iconUrl ? (
            <img
              className={isExpanded ? "expanded" : ""}
              src={iconUrl}
              alt="expand"
            />
          ) : (
            <ChevronIcon />
          )}
          {showSelectedName && selectedName && isFilter && (
            <span className="remove" onClick={handleClearSelectedValue}></span>
          )}
        </div>
        {filteredOptions.length > 0 && (
          <ul className={!isExpanded ? "ul-not-expanded" : "ul-expanded"}>
            {filteredOptions.map((option) => (
              <li
                className={isExpanded ? "li-expanded" : ""}
                key={option.value}
                onClick={() => handleSelectChange(option.value)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
