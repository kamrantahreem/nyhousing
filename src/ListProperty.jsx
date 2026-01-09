import { useState } from "react";

const ListProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "Buy",
    location: "",
    price: "",
    beds: "",
    baths: "",
    description: "",
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({
      title: "",
      type: "Buy",
      location: "",
      price: "",
      beds: "",
      baths: "",
      description: "",
      image: null,
    });
  };

  return (
    <div className="pt-28 bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-emerald-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">List Your Property</h1>
        <p className="mt-2 text-lg sm:text-xl">
          Fill out the form below to add your property to our listings
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {submitted && (
          <p className="mb-4 text-green-600 font-medium text-center">
            Your property has been submitted successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 space-y-4">

          <div>
            <label className="block text-gray-700 font-medium mb-1">Property Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Beds</label>
              <input
                type="number"
                name="beds"
                value={formData.beds}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Baths</label>
              <input
                type="number"
                name="baths"
                value={formData.baths}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Submit Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListProperty;
