import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Logo / About */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Home<span className="text-emerald-500">Finder</span>
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              HomeFinder is a trusted real-estate platform helping people buy,
              rent, and sell properties with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-500">Home</Link>
              </li>
              <li>
                <Link to="/buy" className="hover:text-emerald-500">Buy</Link>
              </li>
              <li>
                <Link to="/rent" className="hover:text-emerald-500">Rent</Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-emerald-500">
                  Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-emerald-500 cursor-pointer">
                Property Listing
              </li>
              <li className="hover:text-emerald-500 cursor-pointer">
                Property Valuation
              </li>
              <li className="hover:text-emerald-500 cursor-pointer">
                Home Loans
              </li>
              <li className="hover:text-emerald-500 cursor-pointer">
                Consulting
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 123 Main Street, NY</li>
              <li>📞 +1 234 567 890</li>
              <li>✉️ info@homefinder.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HomeFinder. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
