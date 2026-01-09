import { useState } from "react";
import Footer from "./Footer";

// Sample properties (mix of Buy & Rent)
const properties = [
  {
    id: 1,
    type: "Buy",
    title: "Modern Family House",
    location: "Los Angeles, CA",
    price: "$450,000",
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 2,
    type: "Rent",
    title: "Cozy Apartment",
    location: "New York, NY",
    price: "$2,200 / month",
    beds: 2,
    baths: 1,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: 3,
    type: "Buy",
    title: "Luxury Condo",
    location: "Miami, FL",
    price: "$850,000",
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 4,
    type: "Rent",
    title: "Modern Studio",
    location: "Los Angeles, CA",
    price: "$1,800 / month",
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    id: 5,
    type: "Buy",
    title: "Cozy Suburban Home",
    location: "Austin, TX",
    price: "$320,000",
    beds: 4,
    baths: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    type: "Rent",
    title: "Suburban House",
    location: "Austin, TX",
    price: "$2,500 / month",
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
];

const Properties = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  // Filter properties by type & location
  const filteredProperties = properties.filter((prop) => {
    const matchType = typeFilter === "All" ? true : prop.type === typeFilter;
    const matchSearch = prop.location.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="pt-28 bg-gray-100 min-h-screen">

      {/* Page Hero */}
      <div className="bg-emerald-600 text-white py-12 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">All Properties</h1>
        <p className="mt-2 text-lg sm:text-xl">
          Browse all available properties for buying or renting
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-center flex-wrap">
          <input
            type="text"
            placeholder="Search by city or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="All">All</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl pb-28 mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No properties found.
          </p>
        ) : (
          filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 text-sm rounded-full">
                  {prop.type === "Buy" ? "For Sale" : "For Rent"}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{prop.title}</h3>
                <p className="text-gray-500 text-sm mt-1">📍 {prop.location}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-emerald-600 text-lg font-bold">{prop.price}</p>
                  <div className="text-sm text-gray-500">🛏 {prop.beds} | 🛁 {prop.baths}</div>
                </div>
                <button className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Properties;
