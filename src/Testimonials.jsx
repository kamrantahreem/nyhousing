const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "HomeFinder made buying my first home simple and stress-free. The listings were accurate and the agents were extremely helpful.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Property Seller",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I listed my property and got serious buyers within days. The process was smooth and transparent from start to finish.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Tenant",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Finding a rental was never this easy. Great platform with verified properties and honest pricing.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our <span className="text-emerald-600">Clients Say</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thousands of happy clients trust HomeFinder for buying, selling,
            and renting properties.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                “{item.review}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
