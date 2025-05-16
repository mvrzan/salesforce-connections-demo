import topLevelHero from "../assets/hero/base_home_banner.png";
import heroBannerBottom from "../assets/hero/home_banner_bottom.png";

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <img src={topLevelHero} alt="Hero Banner" className="w-full h-auto object-cover block m-0 p-0" />

      {/* Text overlay */}
      <div
        className="absolute left-1/3 top-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-start w-full max-w-2xl px-4 z-10"
        style={{ pointerEvents: "none" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left drop-shadow-lg">Connect your world.</h1>
        <p className="text-xl md:text-2xl text-white mb-6 text-left drop-shadow-lg">
          Browse our devices, internet plans, and connected home services.
        </p>
        <button
          className="text-white py-3 px-6 rounded-3xl font-medium transition-colors mt-2"
          style={{ backgroundColor: "#278d90", pointerEvents: "auto" }}
        >
          Let's Connect
        </button>
      </div>

      <img
        src={heroBannerBottom}
        alt="Hero Banner Bottom Overlay"
        className="w-full h-auto object-cover block m-0 p-0 -mt-96"
        style={{ position: "relative", zIndex: 1 }}
      />
    </div>
  );
};

export default HeroSection;
