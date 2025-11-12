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

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns];

  if (images.length === 0) return null;

  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-lg shadow-brand-900/5"
          >
            <ImageGalleryItem
              img={img}
              index={index}
              onClick={() => openLightbox(index)}
            />
          </div>
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

