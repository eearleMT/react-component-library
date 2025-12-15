import React from "react";
import { MTBreadcrumb } from "../components/MTBreadcrumb/MTBreadcrumb";

export const BreadcrumbShowcase: React.FC = () => {
  const breadcrumbs = [
    { link: "/home", label: "Home" },
    { link: "/projects", label: "Projects" },
    { link: "/current", label: "Current Project" },
  ];

  return (
    <div>
      <div className="mb-4">
        <h3>Basic Breadcrumb</h3>
        <MTBreadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <div className="mb-4">
        <h3>Long Breadcrumb</h3>
        <MTBreadcrumb
          breadcrumbs={[
            { link: "/home", label: "Home" },
            { link: "/category", label: "Category" },
            { link: "/subcategory", label: "Subcategory" },
            { link: "/item", label: "Item" },
            { link: "/details", label: "Details" },
          ]}
        />
      </div>
      <div className="mb-4">
        <h3>Single Item</h3>
        <MTBreadcrumb
          breadcrumbs={[{ link: "/single", label: "Single Page" }]}
        />
      </div>
    </div>
  );
};
