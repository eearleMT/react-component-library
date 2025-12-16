import { MTMultiSelect } from "../components/MTMultiSelect/MTMultiSelect";

export const MultiSelectShowcase = () => {
  const basicOptions = [
    { name: "Option 1", value: "1" },
    { name: "Option 2", value: "2" },
    { name: "Option 3", value: "3" },
    { name: "Option 4", value: "4" },
    { name: "Option 5", value: "5" },
  ];

  const fruitOptions = [
    { name: "Apple", value: "apple" },
    { name: "Banana", value: "banana" },
    { name: "Cherry", value: "cherry" },
    { name: "Date", value: "date" },
    { name: "Elderberry", value: "elderberry" },
    { name: "Fig", value: "fig" },
    { name: "Grape", value: "grape" },
  ];

  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-between gap-8">
        <section className="mb-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">Basic Multi Select</h2>
          <div className="p-8 bg-gray-700 rounded-lg space-y-4">
            <MTMultiSelect
              placeholder="Select options"
              options={basicOptions}
              onChange={(selected) => {
                console.log("Selected:", selected);
              }}
            />
          </div>
        </section>

        <section className="mb-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">With Label</h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTMultiSelect
              label="Choose fruits"
              options={fruitOptions}
              onChange={(selected) => console.log("Selected:", selected)}
            />
          </div>
        </section>

        <section className="mb-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">
            Searchable Multi Select
          </h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTMultiSelect
              options={fruitOptions}
              searchable={true}
              onChange={(selected) =>
                console.log("Searchable selected:", selected)
              }
              onFilterChange={(term) => console.log("Filter:", term)}
            />
          </div>
        </section>

        <section className="mb-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">Without Select All</h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTMultiSelect
              options={basicOptions}
              showSelectAll={false}
              onChange={(selected) => console.log("No select all:", selected)}
            />
          </div>
        </section>

        <section className="mb-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">With Values Shown</h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTMultiSelect
              options={fruitOptions}
              showValue={true}
              onChange={(selected) => console.log("With values:", selected)}
            />
          </div>
        </section>

        <section className="mb-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">Disabled State</h2>
          <div className="p-8 bg-gray-700 rounded-lg">
            <MTMultiSelect options={basicOptions} disabled={true} />
          </div>
        </section>
      </div>
      <section className="mb-12 w-full">
        <h2 className="text-2xl font-semibold mb-6">Custom Width</h2>
        <div className="p-8 bg-gray-700 rounded-lg space-y-4">
          <div>
            <h3 className="text-sm mb-3 opacity-80">Width: 300px</h3>
            <MTMultiSelect options={basicOptions} width="300px" />
          </div>
          <div>
            <h3 className="text-sm mb-3 opacity-80">Width: 100%</h3>
            <MTMultiSelect options={fruitOptions} width="100%" />
          </div>
        </div>
      </section>
    </div>
  );
};
