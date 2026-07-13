"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
}

export default function FoodCard({
  image,
  title,
  description,
  price,
  badge,
}: FoodCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur">
          <Heart
            size={18}
            className="text-green-700"
          />
        </button>

        {badge && (
          <div className="absolute left-4 top-4 rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-semibold text-white">
            {badge}
          </div>
        )}

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>

          <span className="font-bold text-green-700">
            {price}
          </span>

        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <button className="mt-6 w-full rounded-full bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
          Order Now
        </button>

      </div>

    </div>
  );
}