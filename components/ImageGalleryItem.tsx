"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageItem {
  file: string;
  folder?: string;
}

export default function ImageGalleryItem({
  img,
  index,
  onClick,
  onError,
}: {
  img: ImageItem;
  index: number;
  onClick: () => void;
  onError?: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  const imagePath = img.folder ? `/images/${img.folder}/${img.file}` : `/images/${img.file}`;

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  if (imageError) {
    return null; // Hide failed images completely
  }

  return (
    <div
      className="absolute inset-0 cursor-pointer group overflow-hidden rounded-3xl"
      onClick={onClick}
    >
      <Image
        src={imagePath}
        alt={`Gallery image ${index + 1}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        onError={handleError}
        unoptimized
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
          Click to view
        </div>
      </div>
    </div>
  );
}


