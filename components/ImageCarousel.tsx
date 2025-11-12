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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full group">
      {/* Main Carousel */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
        {images.map((img, index) => {
          const imagePath = img.folder ? `/images/${img.folder}/${img.file}` : `/images/${img.file}`;
          const isActive = index === currentIndex;
          const hasError = imageErrors.has(index);

          if (hasError) {
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                } flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900`}
              >
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Image not found: {img.folder ? `${img.folder}/${img.file}` : img.file}
                </span>
              </div>
            );
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
      {images.length > 1 && (
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
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-white dark:bg-gray-100"
                  : "w-2 bg-white/50 dark:bg-gray-100/50 hover:bg-white/75 dark:hover:bg-gray-100/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

