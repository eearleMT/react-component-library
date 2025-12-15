import React, { useState } from "react";
import { MTImageSelector } from "../components/MTImageSelector/MTImageSelector";

export const ImageSelectorShowcase: React.FC = () => {
  const [selectedImage1, setSelectedImage1] = useState<File | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="mb-6 text-xl font-medium">Default Image Selector</h2>
        <div className="p-6 border border-[#707070] rounded-lg bg-[#2c3037]">
          <div className="h-[300px]">
            <MTImageSelector
              onImageChange={(file) => {
                setSelectedImage1(file);
                console.log("Image selected:", file.name);
              }}
              onImageRemove={() => {
                setSelectedImage1(null);
                console.log("Image removed");
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
