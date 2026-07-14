"use client";

import Container from "@/components/ui/Container";
import ReelPlayer from "./ReelPlayer";

export default function Experience() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}

          <div className="max-w-xl">

            <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-green-700">
              EXPERIENCE
            </span>

            <h2 className="mt-4 font-[family:var(--font-heading)] text-3xl font-medium text-gray-900 lg:text-5xl">
              Experience Green Bush Garden
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Discover the peaceful atmosphere of Green Bush Garden through
              our latest videos. From delicious dishes and premium coffee
              to unforgettable celebrations, every moment is crafted to
              create lasting memories.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="rounded-full bg-green-700 px-7 py-3 text-white transition hover:bg-green-800"
              >
                Reserve a Table
              </button>

              <a
                href="https://www.instagram.com/greenbushgarden/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-green-700 px-7 py-3 text-green-700 transition hover:bg-green-700 hover:text-white"
              >
                Follow Instagram
              </a>

            </div>

            {/* Statistics */}

            <div className="mt-12 grid grid-cols-3 gap-8">

              <div>
                <h3 className="text-3xl font-bold text-green-700">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Open Daily
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">
                  5★
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Guest Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">
                  100%
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Fresh Moments
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-green-300/30 blur-[90px]" />

              {/* Reel Player */}

              <div className="relative">
                <ReelPlayer />
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}