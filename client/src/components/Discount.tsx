import SuperFastInternet from "./SuperFastInternet";

const Discount = () => {
  return (
    <div className="w-full relative overflow-hidden min-h-[60vh] md:min-h-[50vh]">
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white to-[#93B7C5] opacity-70" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[50vh] py-8 sm:py-12 md:py-16 px-4">
        <div className="w-full flex justify-center z-20 mb-4 sm:mb-6 md:mb-8">
          <SuperFastInternet />
        </div>
        <div className="bg-[#070735] rounded-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-5xl w-full flex flex-col items-center text-center text-white shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-xl font-bold mb-2 tracking-widest text-[#278D90]">
            BUNDLES DEALS
          </h2>
          <p className="text-base sm:text-lg md:text-3xl font-semibold mb-2">
            10% off our top unlimited network
            <br />
            plus a free device.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Sign up for an unlimited plan or extend your current one in the next 30 days and get 10% off your bill for
            the next 36 months and a free device.
          </p>
          <button className="mt-2 bg-transparent text-[#278D90] font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow transition-colors hover:bg-[#278D90] hover:text-white border-2 border-[#278D90]">
            GO UNLIMITED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
