"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cake,
  Heart,
  Users,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

const events = [
  {
    title: "Birthday Parties",
    icon: Cake,
    text: "Celebrate unforgettable birthdays in our beautiful garden.",
  },
  {
    title: "Wedding Events",
    icon: Heart,
    text: "A romantic venue surrounded by nature and elegance.",
  },
  {
    title: "Corporate Meetings",
    icon: Users,
    text: "Professional gatherings in a peaceful atmosphere.",
  },
  {
    title: "Graduation Celebrations",
    icon: GraduationCap,
    text: "Celebrate your success with family and friends.",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="bg-[#F8F5F0] py-24"
    >
      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-800">
            EVENTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Celebrate Every
            <br />
            Special Moment
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From birthdays to weddings and corporate gatherings,
            Green Bush Garden provides the perfect setting
            for unforgettable celebrations.
          </p>
        </motion.div>

        {/* Featured Image */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mt-16 h-[420px] overflow-hidden rounded-[35px]"
        >
          <Image
            src="/images/events/event.jpg"
            alt="Events"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />

          <div className="absolute left-10 top-1/2 max-w-md -translate-y-1/2 text-white">
            <h3 className="text-4xl font-bold">
              Your Perfect
              <br />
              Celebration Starts Here
            </h3>

            <p className="mt-5 leading-8 text-gray-200">
              Elegant spaces, delicious food,
              beautiful gardens and unforgettable memories.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-full bg-green-700 px-7 py-4 font-semibold transition hover:bg-green-800">
              Book Your Event
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Event Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {events.map((event, index) => {

            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .1,
                }}
                className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Icon
                    size={30}
                    className="text-green-700"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {event.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {event.text}
                </p>

              </motion.div>
            );

          })}

        </div>

      </Container>
    </section>
  );
}