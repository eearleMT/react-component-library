import React from "react";
import { MTAvatar } from "../components/MTAvatar/MTAvatar";

export const AvatarShowcase: React.FC = () => (
  <div className="space-y-12">
    {/* Sizes Section */}
    <section>
      <h2 className="mb-6 text-xl font-medium">Sizes</h2>
      <div className="flex gap-8 items-end">
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar size="sm" imageTitle="John Doe" />
          <span className="text-xs opacity-70">Small</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar size="md" imageTitle="Jane Smith" />
          <span className="text-xs opacity-70">Medium</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar size="lg" imageTitle="Alex Johnson" />
          <span className="text-xs opacity-70">Large</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar size="xl" imageTitle="Bob Williams" />
          <span className="text-xs opacity-70">Extra Large</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar size="xxl" imageTitle="Carol Davis" />
          <span className="text-xs opacity-70">2X Large</span>
        </div>
      </div>
    </section>

    {/* Colors Section */}
    <section>
      <h2 className="mb-6 text-xl font-medium">Colors</h2>
      <div className="flex gap-8 items-center">
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar color="primary" imageTitle="Primary" size="lg" />
          <span className="text-xs opacity-70">Primary</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar color="secondary" imageTitle="Secondary" size="lg" />
          <span className="text-xs opacity-70">Secondary</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar color="yellow" imageTitle="Yellow" size="lg" />
          <span className="text-xs opacity-70">Yellow</span>
        </div>
      </div>
    </section>

    {/* Group Icon Section */}
    <section>
      <h2 className="mb-6 text-xl font-medium">Group Icon</h2>
      <div className="flex gap-8 items-center">
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar useGroupIcon size="md" />
          <span className="text-xs opacity-70">Medium</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar useGroupIcon size="lg" color="secondary" />
          <span className="text-xs opacity-70">Large Secondary</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar useGroupIcon size="xl" color="yellow" />
          <span className="text-xs opacity-70">XL Yellow</span>
        </div>
      </div>
    </section>

    {/* Different Initials */}
    <section>
      <h2 className="mb-6 text-xl font-medium">Initials Examples</h2>
      <div className="flex gap-8 items-center flex-wrap">
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar imageTitle="John" size="lg" />
          <span className="text-xs opacity-70">Single Initial</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar imageTitle="John Doe" size="lg" color="secondary" />
          <span className="text-xs opacity-70">Two Initials</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MTAvatar imageTitle="John Michael Doe" size="lg" color="yellow" />
          <span className="text-xs opacity-70">Multiple Words</span>
        </div>
      </div>
    </section>
  </div>
);
