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
}: {
  img: ImageItem;
  index: number;
  onClick: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  const imagePath = img.folder ? `/images/${img.folder}/${img.file}` : `/images/${img.file}`;

  if (imageError) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        <span className="text-xs text-gray-500">Image not found</span>
      </div>
    );
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
        onError={() => setImageError(true)}
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


