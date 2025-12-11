import React from "react";
import { MTButton, PlusIcon, TrashIcon } from "../components/MTButton/MTButton";

export const ButtonShowcase: React.FC = () => (
  <div className="flex gap-8">
    {/* Filled Variant Column */}
    <section>
      <h2 className="mb-6 text-xl font-medium">Variant: Filled</h2>

      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Color: Primary</h3>
        <div className="flex flex-col gap-4">
          <MTButton
            variant="filled"
            color="primary"
            size="sm"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="filled"
            color="primary"
            size="md"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="filled"
            color="primary"
            size="lg"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Color: Secondary</h3>
        <div className="flex flex-col gap-4 mb-4">
          <MTButton
            variant="filled"
            color="secondary"
            size="sm"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="filled"
            color="secondary"
            size="md"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="filled"
            color="secondary"
            size="lg"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Disabled</h3>
        <div className="flex flex-col gap-4">
          <MTButton
            variant="filled"
            color="primary"
            size="sm"
            icon={<PlusIcon />}
            disabled
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="filled"
            color="primary"
            size="md"
            icon={<PlusIcon />}
            disabled
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="filled"
            color="primary"
            size="lg"
            icon={<PlusIcon />}
            disabled
          >
            Product Manual
          </MTButton>
        </div>
      </div>
    </section>

    {/* Outline Variant Column */}
    <section>
      <h2 className="mb-6 text-xl font-medium">Variant: Outline</h2>

      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Color: Primary</h3>
        <div className="flex flex-col gap-4">
          <MTButton
            variant="outline"
            color="primary"
            size="sm"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="outline"
            color="primary"
            size="md"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="outline"
            color="primary"
            size="lg"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Color: Secondary</h3>
        <div className="flex flex-col gap-4">
          <MTButton
            variant="outline"
            color="secondary"
            size="sm"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="outline"
            color="secondary"
            size="md"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="outline"
            color="secondary"
            size="lg"
            icon={<PlusIcon />}
          >
            Product Manual
          </MTButton>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Disabled</h3>
        <div className="flex flex-col gap-4">
          <MTButton
            variant="outline"
            color="primary"
            size="sm"
            icon={<PlusIcon />}
            disabled
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="outline"
            color="primary"
            size="md"
            icon={<PlusIcon />}
            disabled
          >
            Product Manual
          </MTButton>
          <MTButton
            variant="outline"
            color="primary"
            size="lg"
            icon={<PlusIcon />}
            disabled
          >
            Product Manual
          </MTButton>
        </div>
      </div>
    </section>

    {/* Delete Variant Column */}
    <section>
      <h2 className="mb-6 text-xl font-medium">Variant: Delete</h2>
      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Delete</h3>
        <div className="flex flex-col gap-4">
          <MTButton variant="delete" size="sm" icon={<TrashIcon />}>
            Product Manual
          </MTButton>
          <MTButton variant="delete" size="md" icon={<TrashIcon />}>
            Product Manual
          </MTButton>
          <MTButton variant="delete" size="lg" icon={<TrashIcon />}>
            Product Manual
          </MTButton>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-base opacity-80">Disabled</h3>
        <div className="flex flex-col gap-4">
          <MTButton variant="delete" size="sm" icon={<TrashIcon />} disabled>
            Product Manual
          </MTButton>
          <MTButton variant="delete" size="md" icon={<TrashIcon />} disabled>
            Product Manual
          </MTButton>
          <MTButton variant="delete" size="lg" icon={<TrashIcon />} disabled>
            Product Manual
          </MTButton>
        </div>
      </div>
    </section>
  </div>
);
