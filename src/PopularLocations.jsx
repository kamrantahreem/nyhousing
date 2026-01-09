const locations = [
  {
    id: 1,
    name: "New York",
    properties: "120+ Properties",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: 2,
    name: "Los Angeles",
    properties: "98+ Properties",
    image:
      "https://images.unsplash.com/photo-1502920514313-52581002a659",
  },
  {
    id: 3,
    name: "Chicago",
    properties: "75+ Properties",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    id: 4,
    name: "Miami",
    properties: "60+ Properties",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

const PopularLocations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Popular <span className="text-emerald-600">Locations</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore properties in the most sought-after cities.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  {location.name}
                </h3>
                <p className="text-sm text-gray-200">
                  {location.properties}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularLocations;
