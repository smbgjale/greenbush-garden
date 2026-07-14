"use client";

import Image from "next/image";
import { X, Clock3, Flame } from "lucide-react";

type MenuItem = {
  name: string;
  price: string;
  image: string;
  description: string;
};

interface MenuModalProps {
  item: MenuItem | null;
  open: boolean;
  onClose: () => void;
}

export default function MenuModal({
  item,
  open,
  onClose,
}: MenuModalProps) {
  if (!open || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md p-5"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}

          <div className="relative h-72 md:h-full">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width:768px)100vw,50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-8">
            <span className="mb-3 w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700">
              Chef's Special
            </span>

            <h2 className="font-[family:var(--font-heading)] text-4xl text-gray-900">
              {item.name}
            </h2>

            <p className="mt-2 text-2xl font-bold text-green-700">
              {item.price}
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              {item.description}
            </p>

            <div className="mt-8 space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Clock3 className="text-green-700" size={18} />
                <span>Preparation Time: 20–25 Minutes</span>
              </div>

              <div className="flex items-center gap-3">
                <Flame className="text-green-700" size={18} />
                <span>Prepared Fresh Upon Order</span>
              </div>
            </div>

            <button className="mt-10 rounded-full bg-green-700 px-7 py-3 font-medium text-white transition hover:bg-green-800">
              Reserve This Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}