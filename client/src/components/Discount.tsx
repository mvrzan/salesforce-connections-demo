import backgroundImage from "../assets/background/LineArt_lines_internet_bgTrim2.png";

const Discount = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow-md flex items-center justify-center">
      <img
        src={backgroundImage}
        alt="Discount background art"
        className="w-full h-auto object-cover pointer-events-none select-none opacity-80 z-[1]"
      />
      <div className="absolute inset-0 flex items-end justify-center z-10 pb-80">
        <div className="bg-[#070735] rounded-2xl px-8 py-10 max-w-5xl w-full flex flex-col items-center text-center text-white shadow-lg">
          <h2 className="text-2xl md:text-xl font-bold mb-2 tracking-widest text-[#278D90]">BUNDLES DEALS</h2>
          <p className="text-lg md:text-3xl font-semibold mb-2">
            10% off our top unlimited network
            <br />
            plus a free device.
          </p>
          <p className="text-base md:text-lg mb-6">
            Sign up for an unlimited plan or extend your current one in the next 30 days and get 10% off your bill for
            the next 36 months and a free device.
          </p>
          <button className="mt-2 bg-transparent text-[#278D90] font-bold py-3 px-8 rounded-full shadow transition-colors hover:bg-[#278D90] hover:text-white border-2 border-[#278D90]">
            GO UNLIMITED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
