import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[50] w-full relative mt-10">
      <nav className="bg-white">
        <div className="max-w-[600px] mx-auto px-4 md:px-8 text-left">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link
              to="/"
              className="text-md font-dancing-script text-gray-900"
            >
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5 text-[14px] mt-2 font-roboto">
              <Link
                to="/"
                className="text-black hover:text-gray-800 border-b-2 border-transparent pb-1 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-gray-800 border-b-2 border-transparent pb-1 transition"
              >
                About
              </Link>
              <Link
                to="/designs"
                className="text-black hover:text-gray-800 border-b-2 border-transparent pb-1 transition"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-gray-800 border-b-2 border-transparent pb-1 transition"
              >
                Contact
              </Link>
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Fade In */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-b z-[50] transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-black hover:text-gray-800 transition"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-black hover:text-gray-800 transition"
          >
            ABOUT ME
          </Link>
          <Link
            to="/designs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-black hover:text-gray-800 transition"
          >
            DESIGNS
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-black hover:text-gray-800 transition"
          >
            CONTACT
          </Link>
          <Link
            to="/guide"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-black hover:text-gray-800 transition"
          >
            GUIDE
          </Link>
        </div>
      </div>
    </div>
  );
}
