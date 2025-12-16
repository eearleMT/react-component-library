import React, { useState } from "react";
import { MTCheckbox } from "../components/MTCheckbox/MTCheckbox";

export const CheckboxShowcase: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  return (
    <div className="flex gap-8 p-8">
      <section className="w-1/3 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Basic Checkbox</h2>
        <div className="flex flex-col p-8 bg-gray-700 rounded-lg space-y-4">
          <MTCheckbox
            label="Unchecked"
            checked={checked1}
            onChange={setChecked1}
          />
          <MTCheckbox
            label="Checked"
            checked={checked2}
            onChange={setChecked2}
          />
        </div>
      </section>

      <section className="w-1/3 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Label Position</h2>
        <div className=" p-8 bg-gray-700 rounded-lg space-y-4">
          <div>
            <MTCheckbox
              label="Accept terms and conditions"
              labelPosition="left"
              checked={checked3}
              onChange={setChecked3}
            />
          </div>
          <div>
            <MTCheckbox
              label="Receive notifications"
              labelPosition="right"
              checked={checked4}
              onChange={setChecked4}
            />
          </div>
        </div>
      </section>

      <section className="w-1/3 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Custom Sizes</h2>
        <div className="p-8 bg-gray-700 rounded-lg space-y-6">
          <div>
            <h3 className="text-sm mb-3 opacity-80">Small</h3>
            <MTCheckbox
              label="Small checkbox"
              checkboxSize={0.9}
              textSize={0.875}
              checked={true}
            />
          </div>
          <div>
            <h3 className="text-sm mb-3 opacity-80">Medium</h3>
            <MTCheckbox
              label="Medium checkbox"
              checkboxSize={1.15}
              textSize={1}
              checked={true}
            />
          </div>
          <div>
            <h3 className="text-sm mb-3 opacity-80">Large</h3>
            <MTCheckbox
              label="Large checkbox"
              checkboxSize={1.5}
              textSize={1.25}
              checked={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
