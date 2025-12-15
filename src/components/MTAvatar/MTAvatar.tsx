import React, { useMemo } from "react";
import "./MTAvatar.scss";

export type AvatarSize = "sm" | "md" | "lg" | "xl" | "xxl";
export type AvatarColor = "primary" | "secondary" | "yellow";

export interface AvatarProps {
  image?: string;
  useGroupIcon?: boolean;
  imageTitle?: string;
  size?: AvatarSize;
  color?: AvatarColor;
}

export const MTAvatar: React.FC<AvatarProps> = ({
  image,
  useGroupIcon = false,
  imageTitle = "",
  size = "md",
  color = "primary",
}) => {
  const getInitials = useMemo(() => {
    if (!imageTitle || imageTitle.trim() === "") {
      return "";
    }

    const trimmedTitle = imageTitle.trim();
    const initials = trimmedTitle
      .split(" ")
      .map((n) => n[0]?.toUpperCase())
      .filter(Boolean);

    if (initials.length === 1) {
      return initials[0];
    } else if (initials.length > 1) {
      const firstInitial = initials[0];
      const lastInitial = initials[initials.length - 1];
      return firstInitial + lastInitial;
    }

    return "";
  }, [imageTitle]);

  const className = `size-${size} color-${color}`;

  if (image) {
    return <img className={className} src={image} alt={imageTitle} />;
  } else if (useGroupIcon) {
    return (
      <div id="MT-avatar" className={className}>
        <img
          src="/group.svg"
          alt="Group Icon"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  } else {
    return (
      <div id="MT-avatar" className={className}>
        <div className="centered">{getInitials}</div>
      </div>
    );
  }
};
