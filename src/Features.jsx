const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-emerald-600">HomeFinder</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We make buying and renting properties simple, secure, and stress-free.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Verified Properties
            </h3>
            <p className="text-gray-600 text-sm">
              Every listing is carefully verified to ensure trust and transparency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Prime Locations
            </h3>
            <p className="text-gray-600 text-sm">
              Find homes in the best neighborhoods and fastest-growing areas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Best Price Guarantee
            </h3>
            <p className="text-gray-600 text-sm">
              Competitive pricing with no hidden charges or surprises.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trusted Agents
            </h3>
            <p className="text-gray-600 text-sm">
              Work with experienced agents dedicated to finding your perfect home.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
