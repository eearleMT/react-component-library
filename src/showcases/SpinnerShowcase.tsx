import React from "react";
import { MTSpinner } from "../components/MTSpinner/MTSpinner";

export const SpinnerShowcase: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">MT Spinner Component</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Sizes</h2>
        <div className="flex gap-8 items-center justify-center p-8 bg-gray-700 rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <MTSpinner size="sm" />
            <span className="text-sm">Small</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <MTSpinner size="md" />
            <span className="text-sm">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <MTSpinner size="lg" />
            <span className="text-sm">Large</span>
          </div>
        </div>
      </section>
    </div>
  );
};
