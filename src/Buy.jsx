import { useState } from "react";
import Footer from "./Footer";

// Sample properties data
const properties = [
  {
    id: 1,
    title: "Modern Family House",
    location: "Los Angeles, CA",
    price: "$450,000",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    beds: 3,
    baths: 2,
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "New York, NY",
    price: "$850,000",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    beds: 2,
    baths: 2,
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    location: "Austin, TX",
    price: "$320,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    beds: 4,
    baths: 3,
  },
  {
    id: 4,
    title: "Modern Condo",
    location: "Miami, FL",
    price: "$550,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    beds: 2,
    baths: 1,
  },
];

const Buy = () => {
  const [search, setSearch] = useState("");

  // Filter properties based on search
  const filteredProperties = properties.filter((prop) =>
    prop.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-28 bg-gray-50 min-h-screen">

      {/* Page Hero */}
      <div className="bg-emerald-600 text-white py-12 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Buy Your Dream Home</h1>
        <p className="mt-2 text-lg sm:text-xl">
          Explore our listings and find the perfect property for you
        </p>
      </div>

      {/* Search Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search by city or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl pb-28 mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">📍 {property.location}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-emerald-600 text-lg font-bold">{property.price}</p>
                    <div className="text-sm text-gray-500">🛏 {property.beds} | 🛁 {property.baths}</div>
                  </div>
                  <button className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Buy;
