"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  Leaf,
  UtensilsCrossed,
  PartyPopper,
  MapPin,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Beautiful Garden",
    description: "Relax in a peaceful outdoor environment.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh Food",
    description: "Prepared daily using fresh local ingredients.",
  },
  {
    icon: PartyPopper,
    title: "Private Events",
    description: "Birthdays, weddings and family celebrations.",
  },
  {
    icon: MapPin,
    title: "Easy to Reach",
    description: "Located in Abado, Addis Ababa.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FBF8F2] py-14 lg:py-10"
    >
      <Container>

       <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* LEFT IMAGES */}

          <div className="grid grid-cols-2 gap-4 lg:-mt-8">

            <div className="relative h-[480px] overflow-hidden rounded-[28px] shadow-xl">

              <Image
                src="/images/about1.jpg"
                alt="Garden"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="flex flex-col gap-4">

              <div className="relative h-[230px] overflow-hidden rounded-[28px] shadow-lg">

                <Image
                  src="/images/about2.jpg"
                  alt="Restaurant"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div className="relative h-[230px] overflow-hidden rounded-[28px] shadow-lg">

                <Image
                  src="/images/about3.jpg"
                  alt="Coffee"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <div className="inline-flex rounded-full bg-green-100 px-5 py-2">

              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-green-800">
                About Green Bush Garden
              </span>

            </div>

            <h2
              className="
              mt-1
              font-[family:var(--font-heading)]
              text-4xl
              leading-tight
              text-gray-900
              lg:text-2x3
            "
            >
              Where Nature,
              <br />
              Food & Memories
              <br />
              Meet.
            </h2>

            <div className="mt-5 flex items-center gap-3">

              <div className="h-px w-10 bg-green-300"></div>

              <Leaf
                size={18}
                className="text-green-700"
              />

              <div className="h-px w-10 bg-green-300"></div>

            </div>

            <p className="mt-5 max-w-lg text-base leading-8 text-gray-600">
              Green Bush Garden is more than just a restaurant. It is a peaceful
              destination where families and friends enjoy delicious meals,
              premium coffee, lush gardens and unforgettable memories.
            </p>

            {/* FEATURES */}

            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

              {features.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="
                    rounded-2xl
                    bg-white
                    p-4
                    shadow-md
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                  >

                    <Icon
                      size={26}
                      className="text-green-700"
                    />

                    <h3 className="mt-4 text-base font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}