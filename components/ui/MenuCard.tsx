interface MenuCardProps {
  name: string;
  price: string;
  description: string;
}

export default function MenuCard({
  name,
  price,
  description,
}: MenuCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-56 items-center justify-center bg-green-100">
        <span className="text-green-700 font-semibold">
          Food Image
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="font-bold text-green-700">
            {price}
          </span>
        </div>

        <p className="mt-4 text-gray-600">
          {description}
        </p>

        <button className="mt-6 rounded-lg bg-green-700 px-5 py-2 text-white transition hover:bg-green-800">
          View Details
        </button>
      </div>
    </div>
  );
}