"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageItem {
  file: string;
  folder?: string;
}

export default function MasonryItem({
  img,
  index,
  onClick,
  heightClass,
}: {
  img: ImageItem;
  index: number;
  onClick: () => void;
  heightClass: string;
}) {
  const [imageError, setImageError] = useState(false);
  const imagePath = img.folder ? `/images/${img.folder}/${img.file}` : `/images/${img.file}`;

  return (
    <div
      className={`relative ${heightClass} overflow-hidden rounded-3xl cursor-pointer group break-inside-avoid mb-6 shadow-lg shadow-brand-900/5`}
      onClick={onClick}
    >
      {imageError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
          <span className="text-xs text-gray-500">Image not found</span>
        </div>
      ) : (
        <>
          <Image
            src={imagePath}
            alt={`Masonry image ${index + 1}`}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            onError={() => setImageError(true)}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
    </div>
  );
}


