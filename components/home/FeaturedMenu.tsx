"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const menu = [
  {
    name: "Fasting Beyaynet",
    price: "420 ETB",
    image: "/images/menu1.jpg",
  },
  {
    name: "Chicken arosto",
    price: "650 ETB",
    image: "/images/menu2.jpg",
  },
  {
    name: "Special Pizza",
    price: "550 ETB",
    image: "/images/menu3.jpg",
  },
  {
    name: "Fresh Mojito",
    price: "180 ETB",
    image: "/images/menu4.jpg",
  },
  {
    name: "Cappuccino",
    price: "160 ETB",
    image: "/images/menu5.jpg",
  },
  {
    name: "Chocolate Cake",
    price: "220 ETB",
    image: "/images/menu6.jpg",
  },
];

export default function FeaturedMenu() {
  return (
    <section
      id="menu"
      className="bg-[#FBF8F2] py-5"
    >
      <Container>

        {/* Heading */}

        <div className="mx-auto mb-12 max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">
            Our Menu
          </span>

          <h2 className="mt-4 font-[family:var(--font-heading)] text-4xl font-bold text-gray-900 lg:text-5xl">
            Crafted With Passion
          </h2>


        </div>

        {/* Categories */}

        <div className="mb-10 flex flex-wrap justify-center gap-3">

          {["All", "Food", "Drinks", "Coffee", "Desserts"].map((item, index) => (
            <button
              key={item}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                index === 0
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 hover:bg-green-700 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {menu.map((item) => (

            <div
              key={item.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <div className="mb-3 flex items-center justify-between">

                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <span className="font-bold text-green-700">
                    {item.price}
                  </span>

                </div>

                <p className="text-sm leading-7 text-gray-600">
                </p>

                <button className="mt-5 flex items-center gap-2 font-semibold text-green-700 transition group-hover:gap-3">
                  View Details
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}