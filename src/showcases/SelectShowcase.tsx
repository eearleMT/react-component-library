import React, { useState } from "react";
import { MTSelect } from "../components/MTSelect/MTSelect";

export const SelectShowcase: React.FC = () => {
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("2");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");

  const basicOptions = [
    { name: "Option 1", value: "1" },
    { name: "Option 2", value: "2" },
    { name: "Option 3", value: "3" },
    { name: "Option 4", value: "4" },
  ];

  const countryOptions = [
    { name: "United States", value: "us" },
    { name: "Canada", value: "ca" },
    { name: "United Kingdom", value: "uk" },
    { name: "Germany", value: "de" },
    { name: "France", value: "fr" },
    { name: "Spain", value: "es" },
    { name: "Italy", value: "it" },
    { name: "Japan", value: "jp" },
    { name: "Australia", value: "au" },
    { name: "Brazil", value: "br" },
  ];

  const fruitOptions = [
    { name: "Apple", value: "apple" },
    { name: "Banana", value: "banana" },
    { name: "Cherry", value: "cherry" },
    { name: "Date", value: "date" },
    { name: "Elderberry", value: "elderberry" },
  ];

  return (
    <div className="p-8">
      <div className="flex gap-8">
        <section className="w-1/5 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Basic Select</h2>
          <div className="p-8 bg-gray-700 rounded-lg space-y-4">
            <div>
              <h3 className="text-sm mb-3 opacity-80">Default</h3>
              <MTSelect
                placeholder="Select an option"
                options={basicOptions}
                value={selectedValue1}
                onChange={(value) => setSelectedValue1(value || "")}
              />
            </div>
            <div>
              <h3 className="text-sm mb-3 opacity-80">
                With Pre-selected Value
              </h3>
              <MTSelect
                options={basicOptions}
                value={selectedValue2}
                onChange={(value) => setSelectedValue2(value || "")}
              />
            </div>
          </div>
        </section>

        <section className="w-1/5 mb-12">
          <h2 className="text-2xl font-semibold mb-6">With Label</h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTSelect
              label="Choose a fruit"
              placeholder="Select fruit"
              options={fruitOptions}
              value={selectedValue3}
              onChange={(value) => setSelectedValue3(value || "")}
            />
          </div>
        </section>

        <section className="w-1/5 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Searchable Select</h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTSelect
              placeholder="Search countries..."
              options={countryOptions}
              searchable={true}
              value={selectedValue4}
              onChange={(value) => setSelectedValue4(value || "")}
              onFilterChange={(term) => console.log("Filter:", term)}
            />
          </div>
        </section>

        <section className="w-1/5 mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            With Filter (Clearable)
          </h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTSelect
              placeholder="Select with clear button"
              options={fruitOptions}
              isFilter={true}
              value={selectedValue3}
              onChange={(value) => {
                setSelectedValue3(value || "");
                console.log("Changed to:", value);
              }}
            />
          </div>
        </section>

        <section className="w-1/5 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Disabled State</h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTSelect
              placeholder="Disabled select"
              options={basicOptions}
              disabled={true}
            />
          </div>
        </section>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Custom Width</h2>
        <div className="p-8 bg-gray-700 rounded-lg space-y-4">
          <div>
            <h3 className="text-sm mb-3 opacity-80">Width: 200px</h3>
            <MTSelect
              placeholder="200px width"
              options={basicOptions}
              width="200px"
            />
          </div>
          <div>
            <h3 className="text-sm mb-3 opacity-80">Width: 100%</h3>
            <MTSelect
              placeholder="Full width"
              options={basicOptions}
              width="100%"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
