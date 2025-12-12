import React from "react";
import { MTEmptyState } from "../components/MTEmptyState/MTEmptyState";

export const EmptyStateShowcase: React.FC = () => (
  <div className="flex flex-col gap-8">
    <section>
      <h2 className="mb-6 text-xl font-medium">Default</h2>
      <div className="h-96 border border-[#707070] rounded-lg">
        <MTEmptyState />
      </div>
    </section>

    <section>
      <h2 className="mb-6 text-xl font-medium">Custom Message</h2>
      <div className="h-96 border border-[#707070] rounded-lg">
        <MTEmptyState message="No users found" />
      </div>
    </section>

    <section>
      <h2 className="mb-6 text-xl font-medium">Custom Dimensions</h2>
      <div className="flex gap-8">
        <div className="w-80 h-80 border border-[#707070] rounded-lg">
          <MTEmptyState message="Empty" height="300px" width="300px" />
        </div>
        <div
          className="w-full h-52 border border-[#707070] rounded-lg"
          style={{ maxWidth: "500px" }}
        >
          <MTEmptyState message="No results" height="200px" width="500px" />
        </div>
      </div>
    </section>
  </div>
);
