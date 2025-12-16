import { useState } from "react";
import { ButtonShowcase } from "./showcases/ButtonShowcase";
import { AvatarShowcase } from "./showcases/AvatarShowcase";
import { EmptyStateShowcase } from "./showcases/EmptyStateShowcase";
import { StepBarShowcase } from "./showcases/StepBarShowcase";
import { BreadcrumbShowcase } from "./showcases/BreadcrumbShowcase";
import { ImageSelectorShowcase } from "./showcases/ImageSelectorShowcase";
import { SwitchShowcase } from "./showcases/SwitchShowcase";
import { SpinnerShowcase } from "./showcases/SpinnerShowcase";
import { RadioGroupShowcase } from "./showcases/RadioGroupShowcase";

function App() {
  const [selectedComponent, setSelectedComponent] = useState<string>("");

  return (
    <div className="p-8 bg-gray-800 min-h-screen text-[#d6d6d6] font-[Geologica,sans-serif]">
      <h1 className="mb-8 text-3xl">React Component Library</h1>

      <div className="mb-8">
        <label className="block mb-2 text-sm font-medium">
          Select Component
        </label>
        <select
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
          className="bg-[#2c3037] cursor-pointer border border-[#707070] text-[#d6d6d6] rounded-lg px-4 py-2 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-[#00db9a]"
        >
          <option value="">-- Choose a component --</option>
          <option value="avatar">MTAvatar</option>
          <option value="breadcrumb">MTBreadcrumb</option>
          <option value="button">MTButton</option>
          <option value="empty-state">MTEmptyState</option>
          <option value="image-selector">MTImageSelector</option>
          <option value="radio-group">MTRadioGroup</option>
          <option value="step-bar">MTStepBar</option>
          <option value="spinner">MTSpinner</option>
          <option value="switch">MTSwitch</option>
        </select>
      </div>

      {selectedComponent === "avatar" && <AvatarShowcase />}
      {selectedComponent === "breadcrumb" && <BreadcrumbShowcase />}
      {selectedComponent === "button" && <ButtonShowcase />}
      {selectedComponent === "empty-state" && <EmptyStateShowcase />}
      {selectedComponent === "image-selector" && <ImageSelectorShowcase />}
      {selectedComponent === "radio-group" && <RadioGroupShowcase />}
      {selectedComponent === "spinner" && <SpinnerShowcase />}
      {selectedComponent === "step-bar" && <StepBarShowcase />}
      {selectedComponent === "switch" && <SwitchShowcase />}

      {!selectedComponent && (
        <div className="text-center py-20 opacity-60">
          <p className="text-lg">
            Select a component from the dropdown above to view its showcase.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
