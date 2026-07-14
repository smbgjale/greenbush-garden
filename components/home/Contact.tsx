"use client";

import { MapPin, Phone, Clock3, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FBF8F2] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-green-700">
            CONTACT US
          </span>

          <h2 className="mt-3 font-[family:var(--font-heading)] text-4xl font-medium text-gray-900">
            We'd Love to Welcome You
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Visit Green Bush Garden for delicious meals,
            relaxing outdoor seating and unforgettable moments.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6 rounded-3xl bg-white p-10 shadow-sm">

            <div className="flex gap-4">

              <div className="rounded-2xl bg-green-100 p-4">
                <MapPin className="text-green-700" size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Address
                </h3>

                <p className="mt-2 text-gray-600">
                  Addis Ababa, Ethiopia
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="rounded-2xl bg-green-100 p-4">
                <Phone className="text-green-700" size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Phone
                </h3>

                <p className="mt-2 text-gray-600">
                  +251 92 723 7777
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="rounded-2xl bg-green-100 p-4">
                <Clock3 className="text-green-700" size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Opening Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Open 24 Hours
                </p>
              </div>

            </div>

            <a
              href="https://maps.app.goo.gl/oAGgvYNMG1ntHuG68"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-3 font-medium text-white transition hover:bg-green-800"
            >
              Get Directions

              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-sm">

            <iframe
              src="https://www.google.com/maps?q=Green+Bush+Garden+Addis+Ababa&output=embed"
              className="h-[450px] w-full border-0"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>
    </section>
  );
}