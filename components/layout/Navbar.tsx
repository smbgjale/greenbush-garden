"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 transition-all duration-500 ${
            scrolled
              ? "h-16 bg-white/95 shadow-xl backdrop-blur-xl"
              : "h-16 bg-white/10 backdrop-blur-md"
          }`}
        >
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <Image
  src="/images/logo.png"
  alt="Green Bush Garden"
  width={280}
  height={100}
  priority
  className="h-20 w-auto object-contain"
/>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-gray-700 hover:text-green-700"
                    : "text-white hover:text-green-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full bg-green-700 px-5 py-2.5 font-medium text-white transition hover:bg-green-800 lg:block">
              Reserve
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed inset-x-4 top-24 z-40 rounded-3xl bg-white p-6 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-700"
              >
                {link.name}
              </Link>
            ))}

            <button className="mt-2 rounded-full bg-green-700 py-3 font-medium text-white">
              Reserve
            </button>
          </div>
        </div>
      )}
    </>
  );
}