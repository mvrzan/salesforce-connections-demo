import homeTvImage from "../assets/images/entertainment_home_feature_wDots_radiusRight_2x.png";

const HomeTv = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <img src={homeTvImage} alt="Home TV" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
        <h2 className="text-sm sm:text-base md:text-l font-bold mb-2 sm:mb-3 md:mb-4 text-[#278D90]">
          HOME TV FOR EVERYONE
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">
          Stream your faves.
          <br />
          <span className="font-thin">Quadstar & chill.</span>
        </h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">
          Grab some popcorn and your favorite blankets. Our streaming packages will make your couch the real star of the
          show.
        </p>
        <button className="bg-[#278D90] hover:bg-[#31B2B6] text-white font-bold py-2 px-6 sm:px-8 md:px-9 rounded-4xl w-fit text-sm sm:text-base">
          STREAM BIG
        </button>
      </div>
    </div>
  );
};

export default HomeTv;
