import { Trees, UtensilsCrossed, PartyPopper, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: Trees,
    title: "Beautiful Garden",
    description:
      "Relax in a peaceful natural environment surrounded by greenery.",
  },
  {
    icon: UtensilsCrossed,
    title: "Delicious Food",
    description:
      "Freshly prepared meals, drinks, and local specialties.",
  },
  {
    icon: PartyPopper,
    title: "Special Events",
    description:
      "Perfect for birthdays, family gatherings, and celebrations.",
  },
  {
    icon: MapPin,
    title: "Easy to Reach",
    description:
      "Conveniently located in Abado, Addis Ababa.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Green Bush Garden?
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need for a memorable dining experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-green-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="mx-auto h-12 w-12 text-green-700" />

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}