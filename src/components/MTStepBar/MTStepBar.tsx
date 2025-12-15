import React from "react";
import "./MTStepBar.scss";

export type StepBarProps = {
  steps: string[];
  currentIndex?: number;
  size?: number;
  width?: string;
  selectable?: boolean;
  showCompletedIcon?: boolean;
  transitionDisabled?: boolean;
  onStepChange?: (index: number) => void;
};

const CheckmarkIcon = () => (
  <svg
    className="step-checkmark"
    xmlns="http://www.w3.org/2000/svg"
    width="21.074"
    height="21.074"
    viewBox="0 0 21.074 21.074"
  >
    <g transform="translate(1 1)">
      <line
        y1="5.088"
        x2="5.088"
        transform="translate(8.478 6.487)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="2.811"
        y1="2.563"
        transform="translate(5.667 9.012)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export const MTStepBar: React.FC<StepBarProps> = ({
  steps,
  currentIndex = 0,
  size = 1,
  width = "100%",
  selectable = false,
  showCompletedIcon = false,
  transitionDisabled = false,
  onStepChange,
}) => {
  return (
    <div id="MT-stepbar" style={{ width, fontSize: `${size}rem` }}>
      <div className="steps-wrapper">
        {steps.map((label, index) => {
          const completed = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isFuture = index > currentIndex;
          const isProgressFilled = index > 0 && index <= currentIndex;

          let stepClassName = "step-circle";
          if (isCurrent) stepClassName += " current";
          if (completed) stepClassName += " completed";
          if (isFuture) stepClassName += " future";
          if (showCompletedIcon && completed) stepClassName += " icon";

          let labelClassName = "step-label";
          if (isCurrent) labelClassName += " current";
          if (isFuture) labelClassName += " future";

          const stepSize = size * 25;

          let progressLineClasses = `progress-line ${
            isProgressFilled ? "filled" : ""
          }`;
          if (!transitionDisabled)
            progressLineClasses += " transition-colors duration-500 ease-out";

          let stepContentClasses = "step-content";
          if (selectable) stepContentClasses += " cursor-pointer";
          else stepContentClasses += " cursor-default";

          let stepCircleClasses = stepClassName;
          if (!transitionDisabled)
            stepCircleClasses += " transition-colors duration-500 ease-out";

          return (
            <div key={`step-${index}`} className="step-item">
              {/* Progress line before step (except first) */}
              {index > 0 && <div className={progressLineClasses} />}

              {/* Step circle and label */}
              <div
                className={stepContentClasses}
                onClick={() => {
                  if (selectable && onStepChange) {
                    onStepChange(index);
                  }
                }}
              >
                <div
                  className={stepCircleClasses}
                  style={{
                    height: `${stepSize}px`,
                    width: `${stepSize}px`,
                    minHeight: `${stepSize}px`,
                    minWidth: `${stepSize}px`,
                  }}
                >
                  {showCompletedIcon && completed ? (
                    <CheckmarkIcon />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className={labelClassName}>{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
