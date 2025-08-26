import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Link - Home */}
        <Link
          to="/"
          className="text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition"
        >
          JS
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-lg font-medium">
          <Link
            to="/react"
            className="text-gray-200 hover:text-blue-400 transition"
          >
            React
          </Link>
          <Link
            to="/js-question"
            className="text-gray-200 hover:text-green-400 transition"
          >
            JS Q's
          </Link>
          <Link
            to="/react-question"
            className="text-gray-200 hover:text-red-400 transition"
          >
            RJ Q's
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
