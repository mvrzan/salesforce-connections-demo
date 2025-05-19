import backgroundImage from "../assets/background/LineArt_lines_internet_bgTrim2.png";

const Discount = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow-md bg-gradient-to-b from-[#F9F9F9] to-[#9DBECB] flex items-center justify-center">
      <img
        src={backgroundImage}
        alt="Discount background art"
        className="w-full h-auto object-cover pointer-events-none select-none opacity-80 z-[1]"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
        {/* Add discount content here if needed */}
      </div>
    </div>
  );
};

export default Discount;
