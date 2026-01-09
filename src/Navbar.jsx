import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

        
          <Link
            to="/"
            className="text-2xl font-bold text-emerald-600"
          >
            Home<span className="text-gray-900">Finder</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <Link to="/buy" className="hover:text-emerald-600">Buy</Link>
            <Link to="/rent" className="hover:text-emerald-600">Rent</Link>
            <Link to="/properties" className="hover:text-emerald-600">Properties</Link>
            <Link to="/contact" className="hover:text-emerald-600">Contact</Link>

          <Link
  to="/list-property" className="ml-4 bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition"
>
  List Property
</Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden text-3xl text-gray-700 focus:outline-none"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white shadow-lg px-6 py-4 space-y-4 text-center font-medium text-gray-700">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-emerald-600">
            Home
          </Link>
          <Link to="/buy" onClick={() => setOpen(false)} className="block hover:text-emerald-600">
            Buy
          </Link>
          <Link to="/rent" onClick={() => setOpen(false)} className="block hover:text-emerald-600">
            Rent
          </Link>
          <Link to="/properties" onClick={() => setOpen(false)} className="block hover:text-emerald-600">
            Properties
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-emerald-600">
            Contact
          </Link>

          <Link
  to="/list-property" className="ml-4 bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition"
>
  List Property
</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
