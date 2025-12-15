import React from "react";
import "./MTBreadcrumb.scss";

export interface IBreadcrumb {
  link: string;
  label: string;
}

export interface MTBreadcrumbProps {
  breadcrumbs: IBreadcrumb[];
}

export const MTBreadcrumb: React.FC<MTBreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) =>
        index < breadcrumbs.length - 1 ? (
          <div key={breadcrumb.link} className="breadcrumb-item">
            <a href={breadcrumb.link} className="breadcrumb-label clickable">
              {breadcrumb.label}
            </a>
            <span className="breadcrumb-separator">/</span>
          </div>
        ) : (
          <span key={breadcrumb.link} className="breadcrumb-label">
            {breadcrumb.label}
          </span>
        )
      )}
    </div>
  );
};
