"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import MasonryItem from "./MasonryItem";

interface ImageItem {
  file: string;
  folder?: string;
}

export default function MasonryGrid({ images }: { images: ImageItem[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    // Map to valid index for lightbox
    const validImages = images.filter((_, i) => !failedImages.has(i));
    let validIdx = 0;
    for (let i = 0; i < index; i++) {
      if (!failedImages.has(i)) validIdx++;
    }
    setLightboxIndex(validIdx);
    setLightboxOpen(true);
  };

  // Filter out failed images
  const validImages = images.filter((_, index) => !failedImages.has(index));

  if (validImages.length === 0) return null;

  // Create varied heights for masonry effect
  const getHeightClass = (index: number) => {
    const heights = [
      "h-72",
      "h-84",
      "h-80",
      "h-[26rem]",
      "h-96",
    ];
    return heights[index % heights.length];
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 [column-fill:_balance]">
        {images.map((img, index) => {
          if (failedImages.has(index)) return null;
          return (
            <MasonryItem
              key={index}
              img={img}
              index={index}
              onClick={() => openLightbox(index)}
              heightClass={getHeightClass(index)}
              onError={() => handleImageError(index)}
            />
          );
        })}
      </div>

      <Lightbox
        images={validImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

