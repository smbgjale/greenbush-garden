"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import MenuModal from "@/components/ui/MenuModal";


const menu = [
  {
    name: "Fasting Beyaynet",
    price: "420 ETB",
    image: "/images/menu1.jpg",
    description:
      "A traditional Ethiopian fasting platter served with fresh vegetables, lentils, shiro and injera.",
  },
  {
    name: "Chicken Arosto",
    price: "650 ETB",
    image: "/images/menu2.jpg",
    description:
      "Tender roasted chicken seasoned with herbs and served with delicious sides.",
  },
  {
    name: "Special Pizza",
    price: "550 ETB",
    image: "/images/menu3.jpg",
    description:
      "Freshly baked pizza topped with mozzarella, vegetables and premium ingredients.",
  },
  {
    name: "Fresh Mojito",
    price: "180 ETB",
    image: "/images/menu4.jpg",
    description:
      "Refreshing mint drink with lime and sparkling freshness.",
  },
  {
    name: "Cappuccino",
    price: "160 ETB",
    image: "/images/menu5.jpg",
    description:
      "Rich espresso topped with silky steamed milk foam.",
  },
  {
    name: "Chocolate Cake",
    price: "220 ETB",
    image: "/images/menu6.jpg",
    description:
      "Soft, moist chocolate cake finished with premium cocoa.",
  },
];

export default function FeaturedMenu() {
  const [selectedItem, setSelectedItem] = useState<(typeof menu)[0] | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <section id="menu" className="bg-[#FBF8F2] py-14">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-green-700">
            OUR MENU
          </span>

          <h2 className="mt-3 font-[family:var(--font-heading)] text-3xl font-medium text-gray-900 md:text-4xl">
            Crafted With Passion
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500">
            Fresh ingredients, unforgettable flavors and carefully prepared
            dishes for every occasion.
          </p>
        </div>

        {/* Categories */}

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {["All", "Food", "Drinks", "Coffee", "Desserts"].map(
            (item, index) => (
              <button
                key={item}
                className={`rounded-full px-4 py-2 text-sm transition ${index === 0
                    ? "bg-green-700 text-white"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-green-700 hover:bg-green-700 hover:text-white"
                  }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Menu Cards */}

        <div className="grid gap-5 lg:grid-cols-2">
          {menu.map((item) => (
            <div
              key={item.name}
              className="group flex gap-5 rounded-3xl border border-transparent bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-700 hover:shadow-xl"
            >
              {/* Image */}

              <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="144px"
                  className="object-cover transition duration-700 group-hover:scale-110
group-hover:rotate-12"
                />
              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>

                    <span className="text-base font-bold text-green-700 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedItem(item);
                    setOpen(true);
                  }}
                  className="mt-5 inline-flex items-center gap-2 font-medium text-green-700 transition-all group-hover:gap-3"
                >
                  View Details
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}

        <div className="mt-12 text-center">
          <button className="rounded-full border border-green-700 px-7 py-3 font-medium text-green-700 transition hover:bg-green-700 hover:text-white">
            View Full Menu
          </button>
        </div>
            </Container>

      <MenuModal
        item={selectedItem}
        open={open}
        onClose={() => setOpen(false)}
      />

    </section>
  );
}