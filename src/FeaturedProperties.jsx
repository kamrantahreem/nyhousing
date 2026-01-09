const properties = [
  {
    id: 1,
    title: "Modern Family House",
    location: "Los Angeles, CA",
    price: "$450,000",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    beds: 3,
    baths: 2,
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "New York, NY",
    price: "$850,000",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    beds: 2,
    baths: 2,
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    location: "Austin, TX",
    price: "$320,000",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    beds: 4,
    baths: 3,
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Featured <span className="text-emerald-600">Properties</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hand-picked properties just for you. Find the best homes at the
            best locations.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 text-sm rounded-full">
                  For Sale
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  📍 {property.location}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-emerald-600 text-lg font-bold">
                    {property.price}
                  </p>
                  <div className="text-sm text-gray-500">
                    🛏 {property.beds} | 🛁 {property.baths}
                  </div>
                </div>

                <button className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
