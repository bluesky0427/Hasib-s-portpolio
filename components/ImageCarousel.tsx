"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Simple SVG icons
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

interface ImageItem {
  file: string;
  folder?: string;
}

export default function ImageCarousel({ images }: { images: ImageItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Filter out failed images for navigation
  const validImages = images.filter((_, index) => !imageErrors.has(index));
  const validIndices = images.map((_, index) => index).filter((index) => !imageErrors.has(index));

  const currentValidIndex = validIndices.includes(currentIndex) 
    ? validIndices.indexOf(currentIndex) 
    : validIndices.length > 0 ? 0 : -1;

  useEffect(() => {
    if (validImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const currentValid = validIndices.includes(prev) ? validIndices.indexOf(prev) : 0;
        const nextValid = (currentValid + 1) % validImages.length;
        return validIndices[nextValid];
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [validImages.length, validIndices.join(',')]);

  const goToPrevious = () => {
    if (validImages.length === 0) return;
    setCurrentIndex((prev) => {
      const currentValid = validIndices.includes(prev) ? validIndices.indexOf(prev) : 0;
      const prevValid = (currentValid - 1 + validImages.length) % validImages.length;
      return validIndices[prevValid];
    });
  };

  const goToNext = () => {
    if (validImages.length === 0) return;
    setCurrentIndex((prev) => {
      const currentValid = validIndices.includes(prev) ? validIndices.indexOf(prev) : 0;
      const nextValid = (currentValid + 1) % validImages.length;
      return validIndices[nextValid];
    });
  };

  const goToSlide = (index: number) => {
    if (validIndices[index] !== undefined) {
      setCurrentIndex(validIndices[index]);
    }
  };

  if (images.length === 0 || validImages.length === 0) return null;

  return (
    <div className="relative w-full group">
      {/* Main Carousel */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
        {images.map((img, index) => {
          const imagePath = img.folder ? `/images/${img.folder}/${img.file}` : `/images/${img.file}`;
          const isActive = index === currentIndex;
          const hasError = imageErrors.has(index);

          if (hasError) {
            return null; // Don't render failed images
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-full scale-105"
              }`}
            >
              <Image
                src={imagePath}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                onError={() => setImageErrors((prev) => new Set(prev).add(index))}
                unoptimized
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-800"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-gray-100" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-800"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-gray-100" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {validImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {validImages.map((_, validIdx) => {
            const originalIdx = validIndices[validIdx];
            return (
              <button
                key={originalIdx}
                onClick={() => goToSlide(validIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  originalIdx === currentIndex
                    ? "w-8 bg-white dark:bg-gray-100"
                    : "w-2 bg-white/50 dark:bg-gray-100/50 hover:bg-white/75 dark:hover:bg-gray-100/75"
                }`}
                aria-label={`Go to slide ${validIdx + 1}`}
              />
            );
          })}
        </div>
      )}

      {/* Slide Counter */}
      {validImages.length > 1 && (
        <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
          {currentValidIndex + 1} / {validImages.length}
        </div>
      )}
    </div>
  );
}

