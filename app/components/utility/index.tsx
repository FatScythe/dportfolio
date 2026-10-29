"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/app/libs/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  subtext?: string;
  className?: string;
}

/**
 * Reusable Zoomable Image component where clicking anywhere on the image opens the full-screen modal.
 */
export function ZoomableImage({
  src,
  alt,
  subtext,
  className,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-2">
        <div
          onClick={() => setIsOpen(true)}
          className={cn(
            "relative overflow-hidden rounded-sm bg-gray-50 w-full cursor-pointer group",
            className || "aspect-video",
          )}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {subtext && (
          <p className="text-xs text-gray-400 italic text-center">{subtext}</p>
        )}
      </div>

      {/* Full-screen Modal Viewer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
            className="absolute top-6 right-6 z-50 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-full max-w-7xl max-h-[90vh] aspect-video overflow-hidden rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
