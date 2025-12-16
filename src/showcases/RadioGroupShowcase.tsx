import React, { useState } from "react";
import { MTRadioGroup } from "../components/MTRadioGroup/MTRadioGroup";

export const RadioGroupShowcase: React.FC = () => {
  const [selectedValue1, setSelectedValue1] = useState("option1");
  const [selectedValue2, setSelectedValue2] = useState("small");

  const basicItems = [
    { label: "Option 1", value: "option1", checked: true },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const sizeItems = [
    { label: "Small", value: "small", checked: true },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ];

  const columnItems = [
    { label: "First", value: "first", checked: true },
    { label: "Second", value: "second" },
    { label: "Third", value: "third" },
  ];

  return (
    <div className="flex gap-8 justify-between w-full p-8">
      <section className="w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Basic Row Layout</h2>
        <div className="p-8 bg-gray-700 rounded-lg">
          <MTRadioGroup
            name="basic"
            items={basicItems}
            onChange={(value) => setSelectedValue1(value)}
          />
        </div>
      </section>

      <section className="w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Column Layout</h2>
        <div className="p-8 bg-gray-700 rounded-lg">
          <MTRadioGroup
            name="column"
            direction="column"
            items={columnItems}
            onChange={(value) => console.log("Column selected:", value)}
          />
        </div>
      </section>

      <section className="w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Custom Sizes</h2>
        <div className="p-8 bg-gray-700 rounded-lg space-y-6">
          <div>
            <h3 className="text-sm mb-3 opacity-80">Small</h3>
            <MTRadioGroup
              name="size-small"
              items={sizeItems}
              radioSize={15}
              textSize={0.875}
              onChange={(value) => setSelectedValue2(value)}
            />
          </div>
          <div>
            <h3 className="text-sm mb-3 opacity-80">Medium</h3>
            <MTRadioGroup
              name="size-medium"
              items={sizeItems}
              radioSize={20}
              onChange={(value) => setSelectedValue2(value)}
            />
          </div>
          <div>
            <h3 className="text-sm mb-3 opacity-80">Large</h3>
            <MTRadioGroup
              name="size-large"
              items={sizeItems}
              radioSize={30}
              textSize={1.25}
              onChange={(value) => setSelectedValue2(value)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
