"use client";

import { useEffect, useRef } from "react";

const videos = [
  "/videos/reel1.mp4",
  "/videos/reel2.mp4",
  "/videos/reel3.mp4",
  "/videos/reel4.mp4",
  "/videos/reel5.mp4",
];

export default function ReelPlayer() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.75,
      }
    );

    refs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-[270px] overflow-hidden rounded-[28px] bg-black shadow-2xl ring-4 ring-black">
      <div className="h-[520px] snap-y snap-mandatory overflow-y-auto scrollbar-hide">
        {videos.map((video, index) => (
          <div
            key={video}
            className="relative h-[520px] snap-start"
          >
            <video
              ref={(el) => {
                refs.current[index] = el;
              }}
              src={video}
              muted
              loop
              playsInline
              controls
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-5 left-4 right-16 text-white">
              <p className="font-semibold">@greenbushgarden</p>

              <p className="mt-1 text-sm text-white/90">
                Beautiful moments at Green Bush Garden 🌿
              </p>
            </div>

            {/* Right Side Icons */}
            <div className="absolute bottom-6 right-3 flex flex-col items-center gap-5 text-white">
              <div className="text-center">
                ❤️
                <p className="text-xs">1.2K</p>
              </div>

              <div className="text-center">
                💬
                <p className="text-xs">185</p>
              </div>

              <div className="text-center">
                🔖
              </div>

              <div className="text-center">
                ↗
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}