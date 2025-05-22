import homeTvImage from "../assets/images/entertainment_home_feature_wDots_radiusRight_2x.png";

const HomeTv = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <img src={homeTvImage} alt="Home TV" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/4 p-8 flex flex-col justify-center">
        <h2 className="text-l font-bold mb-4 text-[#278D90]">HOME TV FOR EVERYONE</h2>
        <h3 className="text-5xl mb-4">
          Stream your faves.
          <br />
          <span className="font-thin">Quadstar & chill.</span>
        </h3>
        <p className="mb-6">
          Grab some popcorn and your favorite blankets. Our streaming packages will make your couch the real star of the
          show.
        </p>
        <button className="bg-[#278D90] hover:bg-[#31B2B6] text-white font-bold py-2 px-4 rounded-4xl w-fit px-9">
          STREAM BIG
        </button>
      </div>
    </div>
  );
};

export default HomeTv;
