
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Container from "@/components/ui/Container";
import { galleryImages } from "@/data/gallery";

const filters = ["All", "Garden", "Food", "Cafe", "Events"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState(-1);

  const images = useMemo(
    () => active === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === active),
    [active]
  );

  return (
    <section id="gallery" className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-green-700">
            Gallery
          </span>

          <h2 className="mt-3 font-[family:var(--font-heading)] text-3xl md:text-4xl font-medium text-gray-900">
            Every Corner Tells A Story
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500">
            Discover our garden, food, café and memorable events.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2.5 text-sm transition ${active === filter
                  ? "bg-green-700 text-white"
                  : "bg-white border border-gray-200 hover:bg-green-700 hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, i) => (
            <div
              key={image.src}
              onClick={() => setIndex(i)}
              className="group relative h-[300px] cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width:768px)50vw,25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <span className="text-xs uppercase tracking-[0.3em] text-green-300">
                {image.category}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {image.title}
              </h3>
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700">
                {image.category}
              </div>

              <div className="absolute inset-x-0 bottom-0 translate-y-8 p-6 transition-all duration-500 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold text-white">
                  {image.title}
                </h3>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-white transition group-hover:rotate-12 group-hover:scale-110">
                  <Expand size={18} />
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
        slides={images.map(img => ({ src: img.src }))}
      />
    </section>
  );
}
