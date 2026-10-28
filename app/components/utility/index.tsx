"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/app/libs/utils";

/**
 * reusable Zoomable Image component. Accepts custom container className
 * so it works seamlessly on both Work case studies and the About page.
 */
export default function ZoomableImage({
  src,
  alt,
  subtext,
  className,
}: {
  src: string;
  alt: string;
  subtext?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-2 group relative">
        <div
          className={cn(
            "relative overflow-hidden rounded-sm bg-gray-50 w-full",
            className || "aspect-video",
          )}
        >
          <Image src={src} alt={alt} fill className="object-cover" />

          {/* Bottom corner expand button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Expand image"
            className="absolute bottom-3 right-3 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-all duration-300 shadow-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
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
