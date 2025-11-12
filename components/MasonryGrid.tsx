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

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (images.length === 0) return null;

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
        {images.map((img, index) => (
          <MasonryItem
            key={index}
            img={img}
            index={index}
            onClick={() => openLightbox(index)}
            heightClass={getHeightClass(index)}
          />
        ))}
      </div>

      <Lightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

