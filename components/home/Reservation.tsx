"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowRight,
  X,
} from "lucide-react";
import Container from "@/components/ui/Container";

export default function Reservation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="reservation" className="bg-[#F8F5F0] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] bg-white shadow-xl"
          >
            <div className="grid lg:grid-cols-5">
              {/* Left Image */}

              <div className="relative h-[260px] lg:col-span-2 lg:h-[420px]">
                <Image
                  src="/images/reservation.jpg"
                  alt="Reservation"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-8 left-8 text-white">
                  <p className="uppercase tracking-[0.3em] text-green-200 text-sm">
                    Green Bush Garden
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Reserve Your
                    <br />
                    Experience
                  </h2>
                </div>
              </div>

              {/* Right */}

              <div className="flex flex-col justify-center p-8 lg:col-span-3">
                <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-green-800">
                  Reservation
                </span>

                <h3 className="mt-4 text-3xl font-bold text-gray-900">
                  Book Your Table
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-gray-600">
                  Reserve your table or event in just a few clicks and enjoy
                  delicious food in a beautiful garden atmosphere.
                </p>

                {/* Info */}

                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                  <div className="flex gap-3">
                    <Phone className="text-green-700" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-sm text-gray-500">
                        +251 9XX XXX XXX
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="text-green-700" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-sm text-gray-500">
                        Abado, Addis Ababa
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock3 className="text-green-700" />
                    <div>
                      <h4 className="font-semibold">Open</h4>
                      <p className="text-sm text-gray-500">
                        8 AM - 10 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => setOpen(true)}
                    className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-white transition hover:bg-[#BF9A2A]"
                  >
                    Reserve Here
                  </button>

                  <a
                    href="https://wa.me/251900000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                  <a
                    href="tel:+251900000000"
                    className="flex items-center gap-2 rounded-full border border-green-700 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                  >
                    Call Now
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Reservation Popup */}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5"
            >
              <X size={26} />
            </button>

            <h2 className="text-3xl font-bold text-gray-900">
              Reserve Your Table
            </h2>

            <p className="mt-2 text-gray-600">
              Fill in the details below and we'll contact you shortly.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4 focus:border-green-700 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border p-4 focus:border-green-700 focus:outline-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="rounded-xl border p-4"
                />

                <input
                  type="time"
                  className="rounded-xl border p-4"
                />
              </div>

              <select className="w-full rounded-xl border p-4">
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>8 Guests</option>
                <option>10+ Guests</option>
              </select>

              <textarea
                rows={4}
                placeholder="Special Request"
                className="w-full rounded-xl border p-4"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-green-700 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                Submit Reservation
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}