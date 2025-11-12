"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import ImageGalleryItem from "./ImageGalleryItem";

interface ImageItem {
  file: string;
  folder?: string;
}

export default function AnimatedGallery({
  images,
  columns = 3,
}: {
  images: ImageItem[];
  columns?: 2 | 3 | 4;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const openLightbox = (validIndex: number) => {
    setLightboxIndex(validIndex);
    setLightboxOpen(true);
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns];

  // Filter out failed images
  const validImages = images.filter((_, index) => !failedImages.has(index));

  if (validImages.length === 0) return null;

  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {images.map((img, index) => {
          if (failedImages.has(index)) return null;
          return (
            <div
              key={index}
              className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-lg shadow-brand-900/5"
            >
              <ImageGalleryItem
                img={img}
                index={index}
                onClick={() => {
                  // Calculate valid index for lightbox
                  let validIdx = 0;
                  for (let i = 0; i < index; i++) {
                    if (!failedImages.has(i)) validIdx++;
                  }
                  openLightbox(validIdx);
                }}
                onError={() => handleImageError(index)}
              />
            </div>
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

