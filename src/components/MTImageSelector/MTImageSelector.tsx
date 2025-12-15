import React, { useRef, useState, useEffect } from "react";
import "./MTImageSelector.scss";

export interface MTImageSelectorProps {
  placeholder?: string;
  tagline?: string;
  aspectratio?: string;
  maxsize?: number;
  onImageRemove?: () => void;
  onImageChange?: (file: File) => void;
  onImageSizeError?: (error: {
    size: number;
    maxSize: number;
    message: string;
  }) => void;
}

const SelectImageIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 50 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.7781 36.6751H6.65685C6.05166 36.6751 5.47127 36.4347 5.04334 36.0068C4.61541 35.5788 4.375 34.9984 4.375 34.3932V7.15685C4.375 6.55166 4.61541 5.97127 5.04334 5.54334C5.47127 5.11541 6.05166 4.875 6.65685 4.875H33.8932C34.4984 4.875 35.0788 5.11541 35.5068 5.54334C35.9347 5.97127 36.1751 6.55166 36.1751 7.15685V22.3942"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.2504 27.4014L16.3002 19.4512L7.02532 28.726H4.37524"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.9512 22.1L28.226 12.8252L36.1763 20.7754"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.1184 16.7822C14.8659 16.7822 16.2825 15.3656 16.2825 13.6182C16.2825 11.8707 14.8659 10.4541 13.1184 10.4541C11.3709 10.4541 9.95435 11.8707 9.95435 13.6182C9.95435 15.3656 11.3709 16.7822 13.1184 16.7822Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.1317 46.1247C41.3746 46.1247 45.6247 41.8746 45.6247 36.6317C45.6247 31.3888 41.3746 27.1387 36.1317 27.1387C30.8888 27.1387 26.6387 31.3888 26.6387 36.6317C26.6387 41.8746 30.8888 46.1247 36.1317 46.1247Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.4192 32.8916V40.371"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.3918 36.9189H39.8712"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MTImageSelector: React.FC<MTImageSelectorProps> = ({
  placeholder,
  tagline,
  aspectratio,
  maxsize = 25 * 1024 * 1024,
  onImageRemove,
  onImageChange,
  onImageSizeError,
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const defaultTagline =
    "Click here to upload an image (jpg, png), up to 25 MB.";
  const [src, setSrc] = useState<string | null>(placeholder || null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setSrc(placeholder || null);
    setImageError(false);
  }, [placeholder]);

  const openFileBrowser = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const humanReadableSize = (bytes: number): string => {
    if (!bytes || bytes === 0) {
      return "0.00 B";
    }

    const e = Math.floor(Math.log(bytes) / Math.log(1024));
    return (
      (bytes / Math.pow(1024, e)).toFixed(2) + " " + " KMGTP".charAt(e) + "B"
    );
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (maxsize && file.size > maxsize) {
        if (inputFileRef.current) {
          inputFileRef.current.value = "";
        }

        const maxSizeReadable = humanReadableSize(maxsize);
        const errorMessage = `File size exceeds ${maxSizeReadable}. Please select a smaller image.`;

        if (onImageSizeError) {
          onImageSizeError({
            size: file.size,
            maxSize: maxsize,
            message: errorMessage,
          });
        }
        return;
      }

      setSrc(URL.createObjectURL(file));
      setImageError(false);

      if (onImageChange) {
        onImageChange(file);
      }
    }
  };

  const onImageErrorHandler = () => {
    setImageError(true);
  };

  const removeThumbnail = (ev: React.MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    setSrc(null);

    if (onImageRemove) {
      onImageRemove();
    }
  };

  return (
    <div
      id="MT-image-selector"
      className={src && !imageError ? "thumbnail custom" : "thumbnail"}
      onClick={openFileBrowser}
      style={aspectratio ? { aspectRatio: aspectratio } : undefined}
    >
      <input
        id="thumbnail-file"
        ref={inputFileRef}
        type="file"
        hidden
        onChange={onFileChange}
        accept=".png, .bmp, .jpeg, .jpg"
      />
      {src && !imageError && (
        <img src={src} onError={onImageErrorHandler} alt="Selected" />
      )}
      {(!src || imageError) && (
        <div className="overlay">
          <SelectImageIcon />
          <span>{tagline ?? defaultTagline}</span>
        </div>
      )}
      {src && !imageError && (
        <span className="remove" onClick={removeThumbnail}>
          x
        </span>
      )}
    </div>
  );
};
