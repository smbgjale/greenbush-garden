"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[105vh] min-h-[650px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Green Bush Garden"
        fill
        priority
        className="object-cover scale-100"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-2xl"
        >

          <h1 className="mt-6 font-[family:var(--font-heading)] text-5xl font-bold leading-[1.05] text-white md:text-6xl">
             Welcome to 
            <br />
            Green Bush Garden!
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-9 text-gray-200">
            Beautiful garden ,Discover delicious meals, premium coffee,
            birthdays, weddings and unforgettable moments in the heart of Yeka
            Abado, Addis Ababa.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800">
              Reserve a Table
            </button>

            <form action="Gallery.tsx"><button   className="flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black">
              Explore Gallery
              <ArrowRight size={18} />
            </button></form>

          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-lg">

            <div>
              <h3 className="text-4xl font-bold text-white">
                 4.8★
              </h3>

              <p className="mt-1 text-gray-300">
                 Customer Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                100%
              </h3>

              <p className="mt-1 text-gray-300">
                Fresh Experience
              </p>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Bottom Fade */}
      {/* <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#FBF8F2] to-transparent" /> */}

    </section>
  );
}