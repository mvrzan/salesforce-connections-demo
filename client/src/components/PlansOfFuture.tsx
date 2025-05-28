import futureImage from "../assets/images/mobile_home_feature_wDots_radiusLeft_x2.png";

const PlansOfFuture = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 md:pl-12 lg:pl-24 xl:pl-32 2xl:pl-48 flex flex-col justify-center">
        <h2 className="text-sm sm:text-base md:text-l font-bold mb-2 sm:mb-3 md:mb-4 text-[#E04172]">
          THE PLANS FOR THE FUTURE
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">
          BYOP & <span className="font-thin">get our best mobile plan yet.</span>
        </h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">
          Find the perfect phone plan for you and your lifestyle. Whether you need a family plan or unlimited data, we
          have something for everyone.
        </p>
        <button className="bg-[#E04172] hover:bg-black text-white font-bold py-2 px-6 sm:px-8 md:px-9 rounded-4xl w-fit text-sm sm:text-base">
          PERUSE OUR PLANS
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={futureImage} alt="Future Plans" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default PlansOfFuture;
