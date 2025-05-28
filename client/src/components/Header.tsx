import { useState } from "react";
import quadstarLogo from "../assets/images/quadstar-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center px-4 sm:px-8 py-4 bg-white shadow-md gap-x-4 relative">
      {/* Column 1: Logo & Title */}
      <div className="flex items-center gap-2">
        <img src={quadstarLogo} alt="Quadstar Logo" className="h-8 sm:h-10 w-auto" />
        <span className="hidden sm:inline text-xl font-bold text-gray-900">Quadstar Personalization</span>
      </div>

      {/* Column 2 (Desktop): Desktop Navigation. Hidden on mobile. */}
      <nav className="hidden md:flex justify-center gap-3 lg:gap-5 text-gray-700 font-medium text-xs sm:text-sm lg:text-base">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Devices
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Mobile
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Internet
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Entertainment
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Bundles
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Only on Quadstar
        </a>
      </nav>

      {/* Column 3 (Desktop) / Column 2 (Mobile): Controls */}
      <div className="flex items-center justify-end gap-2">
        <a
          href="https://www.quadstarcomms.com/default/home"
          className="flex items-center gap-1 text-[#278d90] font-semibold px-2 sm:px-3 py-1 rounded hover:underline hover:bg-blue-50 transition-colors text-sm sm:text-base"
          role="button"
          aria-label="Back to Quadstar Home"
        >
          <span className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 mr-0.5 sm:mr-1 inline-block"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          Back
        </a>
        {/* Mobile Menu Button (visible up to md breakpoint) */}
        <button
          className="md:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Open main menu"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu (conditionally rendered, spans full width below header on mobile) */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden col-span-2 absolute top-full left-0 right-0 bg-white shadow-md z-20"
          id="mobile-menu-content"
        >
          <nav className="flex flex-col space-y-1 px-2 pt-2 pb-3 border-t border-gray-200 mt-0">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Devices
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Mobile
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Internet
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Entertainment
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Bundles
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Only on Quadstar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
