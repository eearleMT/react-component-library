import React, { useState } from "react";
import { MTStepBar } from "../components/MTStepBar/MTStepBar";

export const StepBarShowcase: React.FC = () => {
  const [basicStep, setBasicStep] = useState(1);
  const [iconStep, setIconStep] = useState(2);
  const [manyStep, setManyStep] = useState(0);

  const steps = ["Step 1", "Step 2", "Step 3"];
  const manySteps = [
    "Start",
    "Planning",
    "Design",
    "Development",
    "Testing",
    "Launch",
  ];

  return (
    <div className="flex gap-12 w-full">
      <div className="flex flex-col w-1/2 gap-20">
        <section>
          <h2 className="mb-6 text-xl font-medium">Basic Step Bar</h2>
          <div className="mb-8">
            <h3 className="mb-4 text-base opacity-80">3 Steps</h3>
            <MTStepBar steps={steps} currentIndex={basicStep} width="50%" />
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setBasicStep(Math.max(0, basicStep - 1))}
                className="px-4 py-2 bg-[var(--mt-primary-color)] text-white rounded hover:opacity-80"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setBasicStep(Math.min(steps.length - 1, basicStep + 1))
                }
                className="px-4 py-2 bg-[var(--mt-primary-color)] text-white rounded hover:opacity-80"
              >
                Next
              </button>
              <span className="self-center text-sm opacity-60">
                Current: Step {basicStep + 1}
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-medium">With Completed Icon</h2>
          <div className="mb-8">
            <h3 className="mb-4 text-base opacity-80">
              Shows checkmark for completed steps
            </h3>
            <MTStepBar
              steps={steps}
              currentIndex={iconStep}
              showCompletedIcon={true}
              width="50%"
            />
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setIconStep(Math.max(0, iconStep - 1))}
                className="px-4 py-2 bg-[var(--mt-primary-color)] text-white rounded hover:opacity-80"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setIconStep(Math.min(steps.length - 1, iconStep + 1))
                }
                className="px-4 py-2 bg-[var(--mt-primary-color)] text-white rounded hover:opacity-80"
              >
                Next
              </button>
              <span className="self-center text-sm opacity-60">
                Current: Step {iconStep + 1}
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-1/2 gap-20">
        <section className="w-full">
          <h2 className="mb-6 text-xl font-medium">Multiple Steps</h2>
          <div className="mb-8 w-full">
            <h3 className="mb-4 text-base opacity-80">
              6 Steps with size scaling
            </h3>
            <MTStepBar
              steps={manySteps}
              currentIndex={manyStep}
              showCompletedIcon={true}
              width="75%"
            />
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setManyStep(Math.max(0, manyStep - 1))}
                className="px-4 py-2 bg-[var(--mt-primary-color)] text-white rounded hover:opacity-80"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setManyStep(Math.min(manySteps.length - 1, manyStep + 1))
                }
                className="px-4 py-2 bg-[var(--mt-primary-color)] text-white rounded hover:opacity-80"
              >
                Next
              </button>
              <span className="self-center text-sm opacity-60">
                Current: Step {manyStep + 1}
              </span>
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="mb-6 text-xl font-medium">Different Widths</h2>
          <div className="mb-8">
            <h3 className="mb-4 text-base opacity-80">30% Width</h3>
            <MTStepBar steps={steps} currentIndex={basicStep} width="30%" />
          </div>
          <div className="mb-8">
            <h3 className="mb-4 text-base opacity-80">40% Width</h3>
            <MTStepBar steps={steps} currentIndex={basicStep} width="40%" />
          </div>
          <div className="mb-8">
            <h3 className="mb-4 text-base opacity-80">50% Width</h3>
            <MTStepBar steps={steps} currentIndex={basicStep} width="50%" />
          </div>
        </section>
      </div>
    </div>
  );
};
