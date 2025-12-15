import React, { useState } from "react";
import { MTSwitch } from "../components/MTSwitch/MTSwitch";

export const SwitchShowcase: React.FC = () => {
  const [mtPrimaryChecked, setMtPrimaryChecked] = useState(false);
  const [tcPrimaryChecked, setTcPrimaryChecked] = useState(true);
  const [disabledChecked, setDisabledChecked] = useState(true);
  const [disabledUnchecked, setDisabledUnchecked] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">MT Switch Component</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Sizes</h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <MTSwitch color="mt-primary" size="sm" checked={true} />
            <span className="text-sm">Small</span>
          </div>
          <div className="flex items-center gap-4">
            <MTSwitch color="mt-primary" size="lg" checked={true} />
            <span className="text-sm">Large</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">MT Primary Color</h2>
        <div className="flex items-center gap-4">
          <MTSwitch
            color="mt-primary"
            checked={mtPrimaryChecked}
            onToggle={setMtPrimaryChecked}
          />
          <span className="text-sm">
            {mtPrimaryChecked ? "Enabled" : "Disabled"}
          </span>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">TC Primary Color</h2>
        <div className="flex items-center gap-4">
          <MTSwitch
            color="tc-primary"
            checked={tcPrimaryChecked}
            onToggle={setTcPrimaryChecked}
          />
          <span className="text-sm">
            {tcPrimaryChecked ? "Enabled" : "Disabled"}
          </span>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Disabled States</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <MTSwitch
              color="mt-primary"
              checked={disabledChecked}
              disabled={true}
              onToggle={setDisabledChecked}
            />
            <span className="text-sm text-gray-500">Disabled (Checked)</span>
          </div>
          <div className="flex items-center gap-4">
            <MTSwitch
              color="mt-primary"
              checked={disabledUnchecked}
              disabled={true}
              onToggle={setDisabledUnchecked}
            />
            <span className="text-sm text-gray-500">Disabled (Unchecked)</span>
          </div>
        </div>
      </section>
    </div>
  );
};
