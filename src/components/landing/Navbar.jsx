import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          BlessRide
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">
            How It Works
          </a>
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#download" className="hover:text-blue-600 transition">
            Download
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}