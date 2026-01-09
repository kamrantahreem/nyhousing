const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Want to Sell or Rent Your Property?
            </h2>
            <p className="mt-4 text-emerald-100 max-w-xl">
              List your property with HomeFinder and reach thousands of
              verified buyers and renters instantly.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              List Property
            </button>
            <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition">
              Contact Agent
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
