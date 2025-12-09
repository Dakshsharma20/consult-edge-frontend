import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItem = "relative text-gray-700 font-medium hover:text-blue-600 transition";

  return (
    <header className="backdrop-blur-md bg-white/70 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-blue-600">
          Consult<span className="text-gray-800">Edge</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">

          {/* HOME */}
          <Link
            to="/"
            className={`${navItem} ${
              location.pathname === "/" ? "text-blue-600" : ""
            }`}
          >
            Home
          </Link>

          {/* ADMIN */}
          <Link
            to="/admin"
            className={`${navItem} ${
              location.pathname === "/admin" ? "text-blue-600" : ""
            }`}
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 text-2xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-white border-t shadow-sm">
        <div className="flex flex-col px-5 py-3 space-y-3">

          <Link
            to="/"
            className={`${navItem} ${
              location.pathname === "/" ? "text-blue-600" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/admin"
            className={`${navItem} ${
              location.pathname === "/admin" ? "text-blue-600" : ""
            }`}
          >
            Admin
          </Link>

        </div>
      </div>
    </header>
  );
}
