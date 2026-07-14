"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  images: string[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryModal({
  images,
  currentIndex,
  open,
  onClose,
  onNext,
  onPrev,
}: GalleryModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-white p-2 shadow-lg"
        >
          <X size={22} />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-3 shadow-lg"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-3 shadow-lg"
        >
          <ChevronRight />
        </button>

        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image
            src={images[currentIndex]}
            alt="Gallery"
            fill
            sizes="90vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}