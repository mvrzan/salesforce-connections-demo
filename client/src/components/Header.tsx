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
        <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Back</span>
      </div>
    </header>
  );
};

export default Header;
