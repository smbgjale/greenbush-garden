"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";

import Container from "@/components/ui/Container";
import { galleryImages } from "@/data/gallery";

const filters = ["All", "Garden", "Food", "Cafe", "Events"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState(-1);

  const images = useMemo(() => {
    if (active === "All") return galleryImages;

    return galleryImages.filter((img) => img.category === active);
  }, [active]);

  return (
    <section
      id="gallery"
      className="bg-[#F8F5F0] py-24"
    >
      <Container>
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-800">
            Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Every Corner Tells A Story
          </h2>

          <p className="mx-auto mt-5 text-lg text-gray-600">
            Discover peaceful gardens, delicious meals, premium coffee,
            unforgettable events and beautiful memories.
          </p>

        </div>

        {/* Filters */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                active === filter
                  ? "bg-green-800 text-white shadow-lg"
                  : "border border-gray-300 bg-white hover:bg-green-50"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Gallery */}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, i) => (

            <div
              key={image.src}
              onClick={() => setIndex(i)}
              className="group relative h-[300px] cursor-pointer overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Category */}

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-green-800 backdrop-blur-md">
                {image.category}
              </div>

              {/* Bottom */}

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {image.title}
                  </h3>

                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white transition duration-300 group-hover:scale-110">
                  <Expand size={20} />
                </div>

              </div>

            </div>

          ))}

        </div>
      </Container>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({
          src: img.src,
        }))}
      />
    </section>
  );
}