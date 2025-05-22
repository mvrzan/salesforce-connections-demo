import futureImage from "../assets/images/mobile_home_feature_wDots_radiusLeft_x2.png";

const PlansOfFuture = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 py-8 pl-96 pr-4 flex flex-col justify-center">
        <h2 className="text-l font-bold mb-4 text-[#E04172]">THE PLANS FOR THE FUTURE</h2>
        <h3 className="text-5xl mb-4">
          BYOP & <span className="font-thin">get our best mobile plan yet.</span>
        </h3>
        <p className="mb-6">
          Find the perfect phone plan for you and your lifestyle. Whether you need a family plan or unlimited data, we
          have something for everyone.
        </p>
        <button className="bg-[#E04172] hover:bg-black text-white font-bold py-2 px-9 rounded-4xl w-fit">
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
