import topLevelHero from "../assets/hero/base_home_banner.png";
import heroBannerBottom from "../assets/hero/home_banner_bottom.png";

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <img src={topLevelHero} alt="Hero Banner" className="w-full h-auto object-cover block m-0 p-0" />
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
