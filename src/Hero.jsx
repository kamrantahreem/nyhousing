const Hero = () => {
  return (
    <section className="pt-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-emerald-600 bg-emerald-100 px-4 py-1 rounded-full">
              Trusted Real Estate Platform
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Find Your <span className="text-emerald-600">Dream Home</span>
              <br className="hidden sm:block" /> With Ease
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              Buy, rent, or sell properties with confidence. Discover the
              perfect place to live with expert listings and trusted agents.
            </p>

            {/* SEARCH BOX */}
            <div className="mt-8 bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="City or Location"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <select className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Buy</option>
                <option>Rent</option>
              </select>

              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="Modern house"
              className="rounded-2xl shadow-xl w-full h-[380px] sm:h-[450px] object-cover"
            />

            {/* STATS CARD */}
            <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4 hidden sm:block">
              <p className="text-sm text-gray-500">Trusted by</p>
              <h3 className="text-2xl font-bold text-emerald-600">10,000+</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
