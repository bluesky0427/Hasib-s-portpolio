"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImagePlaceholder({ 
  file, 
  folder, 
  aspectRatio = "16/9" 
}: { 
  file: string; 
  folder?: string;
  aspectRatio?: "16/9" | "3/4" | "2/3" | "1/1" | "4/3";
}) {
  const [imageError, setImageError] = useState(false);
  const label = folder ? `${folder}/${file}` : file;
  const imagePath = folder ? `/images/${folder}/${file}` : `/images/${file}`;
  
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "3/4": "aspect-[3/4]",
    "2/3": "aspect-[2/3]",
    "1/1": "aspect-square",
    "4/3": "aspect-[4/3]"
  }[aspectRatio];

  if (imageError) {
    return (
      <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl border border-dashed border-gray-300/70 dark:border-gray-600/60 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(26,166,255,0.25),_transparent_55%)]" />
        <span className="relative text-xs sm:text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-300">
          add image showing… {label}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl`}>
      <Image
        src={imagePath}
        alt={label}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        unoptimized
      />
    </div>
  );
}

