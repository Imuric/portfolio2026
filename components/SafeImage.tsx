"use client";

import { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackText?: string;
}

export default function SafeImage({
  src,
  alt = "",
  fallbackSrc,
  fallbackText,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error && fallbackText) {
    return <span className="avatar-fallback">{fallbackText}</span>;
  }

  return (
    <img
      {...props}
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}

