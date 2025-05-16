import quadstarLogo from "../assets/images/quadstar-logo.png";

const Header = () => {
  return (
    <header className="w-full grid grid-cols-3 items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={quadstarLogo} alt="Quadstar Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-gray-900">Quadstar Personalization</span>
      </div>
      <nav className="flex justify-center gap-8 text-gray-700 font-medium text-base">
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
      <div className="flex justify-end">
        <a
          href="https://www.quadstarcomms.com/default/home"
          className="flex items-center gap-1 text-[#278d90] font-semibold px-3 py-1 rounded hover:underline hover:bg-blue-50 transition-colors"
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
              className="w-5 h-5 mr-1 inline-block"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          Back
        </a>
      </div>
    </header>
  );
};

export default Header;
