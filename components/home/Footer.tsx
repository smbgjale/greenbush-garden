"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#173D2A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <Image
              src="/images/logo.png"
              alt="Green Bush Garden"
              width={190}
              height={70}
              className="h-auto w-44"
            />

            <p className="mt-5 text-sm leading-7 text-green-100">
              Experience peaceful gardens, delicious meals,
              premium coffee and unforgettable celebrations
              in the heart of Addis Ababa.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="https://web.facebook.com/people/Green-Bush-Garden/61569041334022/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-green-600"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/greenbushgarden/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-green-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://wa.me/251927237777"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-green-600"
              >
                <MessageCircle size={18} />
              </a>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-green-100">

              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#menu">Menu</Link></li>
              <li><Link href="#gallery">Gallery</Link></li>
              <li><Link href="#events">Events</Link></li>
              <li><Link href="#contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin className="mt-1 text-green-400" size={18} />

                <p className="text-green-100">
                  Addis Ababa,
                  <br />
                  Ethiopia
                </p>

              </div>

              <div className="flex gap-3">

                <Phone className="text-green-400" size={18} />

                <p className="text-green-100">
                  +251 92 723 7777
                </p>

              </div>

              <div className="flex gap-3">

                <Clock3 className="text-green-400" size={18} />

                <p className="text-green-100">
                  Open 24 Hours
                </p>

              </div>

            </div>

          </div>

          {/* Visit */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Visit Us
            </h3>

            <p className="text-sm leading-7 text-green-100">
              Enjoy beautiful gardens, premium coffee and
              unforgettable dining experiences.
            </p>

            <a
              href="https://maps.app.goo.gl/oAGgvYNMG1ntHuG68"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-medium transition hover:bg-green-700"
            >
              Get Directions

              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-green-200 md:flex-row">

          <p>
            © {new Date().getFullYear()} Green Bush Garden.
            All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-white">
              Samuel Mengistu & Kinutibeb Abera
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}