import React, { useState, useRef, useEffect } from "react";
import "./MTMultiSelect.scss";

export interface MultiSelectOption {
  name: string;
  value: string;
  selected?: boolean;
}

export type MultiSelectProps = {
  label?: string;
  options: MultiSelectOption[];
  border?: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
  searchable?: boolean;
  expanded?: boolean;
  placeholder?: string;
  showSelected?: boolean;
  showValue?: boolean;
  showPlusIcon?: boolean;
  initialSelected?: MultiSelectOption[];
  showSelectAll?: boolean;
  onChange?: (selectedOptions: MultiSelectOption[]) => void;
  onFilterChange?: (filterTerm: string) => void;
  className?: string;
};

export const MTMultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  width = "10rem",
  height = "auto",
  disabled = false,
  searchable = false,
  expanded = false,
  placeholder = "",
  showSelected = true,
  showValue = false,
  showPlusIcon = false,
  initialSelected = [],
  showSelectAll = true,
  onChange,
  onFilterChange,
  className,
}) => {
  const [optionsArray, setOptionsArray] =
    useState<MultiSelectOption[]>(options);
  const [filteredOptionsArray, setFilteredOptionsArray] =
    useState<MultiSelectOption[]>(options);
  const [selectedValues, setSelectedValues] = useState<MultiSelectOption[]>(
    initialSelected.length > 0
      ? initialSelected
      : options.filter((o) => o.selected)
  );
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [filterTerm, setFilterTerm] = useState("");
  const [showSelectedNames, setShowSelectedNames] = useState(true);
  const [allSelected, setAllSelected] = useState(false);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedNames =
    showSelected && selectedValues.length > 1
      ? `${selectedValues.length} Selected`
      : showSelected && selectedValues.length === 1
      ? selectedValues[0].name
      : "";

  useEffect(() => {
    setOptionsArray(options);
    setFilteredOptionsArray(options);
    setSelectedValues(options.filter((o) => o.selected));
  }, [options]);

  useEffect(() => {
    const filtered = optionsArray.filter(
      (option) =>
        option.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
        (showValue &&
          option.value.toLowerCase().includes(filterTerm.toLowerCase()))
    );
    setFilteredOptionsArray(filtered);
    onFilterChange?.(filterTerm);
  }, [filterTerm, optionsArray, showValue, onFilterChange]);

  useEffect(() => {
    if (isExpanded) {
      setShowSelectedNames(false);
      setFilteredOptionsArray(optionsArray);
    } else {
      setShowSelectedNames(true);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }, [isExpanded, optionsArray]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isExpanded || expanded) return;

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
  }, [isExpanded, expanded]);

  const handleSelectAll = () => {
    setAllSelected(!allSelected);
    const allOptions = filteredOptionsArray.map((fo) => ({
      ...fo,
      selected: true,
    }));
    setSelectedValues(allOptions);
    onChange?.(allOptions);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setIsExpanded(false);
  };

  const handleToggleExpanded = () => {
    if (disabled) {
      setIsExpanded(false);
      return;
    }

    if (expanded) return;

    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setIsExpanded(!isExpanded);
  };

  const handleSelectChange = (option: MultiSelectOption) => {
    let newSelectedValues: MultiSelectOption[];
    const isSelected = selectedValues.find((sv) => sv.value === option.value);

    if (!isSelected) {
      newSelectedValues = [...selectedValues, { ...option, selected: true }];
    } else {
      newSelectedValues = selectedValues.filter(
        (sv) => sv.value !== option.value
      );
    }

    setSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);

    if (newSelectedValues.length === filteredOptionsArray.length) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }

    if (showPlusIcon) {
      setFilteredOptionsArray(
        filteredOptionsArray.filter((fo) => fo.value !== option.value)
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.target.value);
  };

  const selectStyle: React.CSSProperties = {
    width,
    height,
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

  const PlusIcon = () => (
    <svg
      className="logo mr-2"
      id="_Icon"
      data-name="💚 Icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        id="math-plus"
        d="M8,0A1,1,0,0,0,7,1V7H1A1,1,0,0,0,1,9H7v6a1,1,0,0,0,2,0V9h6a1,1,0,0,0,0-2H9V1A1,1,0,0,0,8,0Z"
        fill="#d6d6d6"
      />
    </svg>
  );

  return (
    <div
      id="MT-multi-select"
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
          title={selectedNames}
          onClick={handleToggleExpanded}
        >
          {showSelectedNames && (
            <span className="selected-name">
              {selectedNames || placeholder}
            </span>
          )}
          {searchable && (
            <input
              placeholder={showSelectedNames && selectedNames ? "" : "Search"}
              className="mt-select-input"
              ref={inputRef}
              disabled={disabled}
              type="text"
              onInput={handleInputChange}
            />
          )}
          <ChevronIcon />
        </div>

        {filteredOptionsArray.length > 0 && (
          <ul className={!isExpanded ? "ul-not-expanded" : "ul-expanded"}>
            {selectedValues.length > 0 && (
              <div className="mt-multi-select selected-values-container">
                {selectedValues.map((selectedValue) => (
                  <li
                    className={isExpanded ? "li-expanded selected-values" : ""}
                    key={selectedValue.value}
                    onClick={() => handleSelectChange(selectedValue)}
                  >
                    <span className="selected-values-name">
                      {selectedValue.name}
                    </span>
                    <span className="selected-values-icon"></span>
                  </li>
                ))}
              </div>
            )}
            {showSelectAll && (
              <li
                className={`mt-multi-select select-all ${
                  isExpanded ? "li-expanded" : ""
                }`}
                onClick={handleSelectAll}
              >
                <span className="checkbox-indicator">Select All</span>
              </li>
            )}
            {filteredOptionsArray.map((option) => {
              const isSelected = selectedValues.some(
                (sv) => sv.value === option.value
              );
              return (
                <li
                  className={`mt-multi-select ${
                    isExpanded ? "li-expanded" : ""
                  }`}
                  key={option.value}
                  onClick={() => handleSelectChange(option)}
                >
                  <label className="checkbox-container">
                    {showPlusIcon ? (
                      <div>
                        <PlusIcon />
                      </div>
                    ) : (
                      <input type="checkbox" readOnly checked={isSelected} />
                    )}
                  </label>
                  <span className="checkbox-indicator">
                    {option.name} {showValue ? `| ${option.value}` : ""}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
