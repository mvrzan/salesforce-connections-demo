import topLevelHero from "../assets/hero/base_home_banner.png";
import heroBannerBottom from "../assets/hero/home_banner_bottom.png";
import internetPlansIcon from "../assets/images/Icon_Circle_internetPlans_x2.png";
import mobilePlansIcon from "../assets/images/Icon_Circle_mobilePlans_x2.png";
import homeEntertainmentIcon from "../assets/images/Icon_Circle_homeEntertainment_x2.png";
import phoneIcon from "../assets/images/Icon_Circle_phone_x2.png";
import supportIcon from "../assets/images/Icon_Circle_support_x2.png";

const services = [
  {
    icon: phoneIcon,
    label: "Upgrade Devices",
    link: "#upgrade-devices",
  },
  {
    icon: mobilePlansIcon,
    label: "Mobile Plans",
    link: "#mobile-plans",
  },
  {
    icon: internetPlansIcon,
    label: "Internet Plans",
    link: "#internet-plans",
  },
  {
    icon: homeEntertainmentIcon,
    label: "Home Entertainment",
    link: "#home-entertainment",
  },
  {
    icon: supportIcon,
    label: "Get Support",
    link: "#support",
  },
];

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full relative">
        <img src={topLevelHero} alt="Hero Banner" className="w-full h-auto object-cover block" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
              Connect your world.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
              Browse our devices, internet plans, and connected home services.
            </p>
            <button className="text-white py-2 px-5 sm:py-3 sm:px-6 rounded-3xl font-medium transition-colors bg-[#278d90] pointer-events-auto text-sm sm:text-base">
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-white">
        <img
          src={heroBannerBottom}
          alt="Hero Banner Bottom Overlay"
          className="w-full h-auto object-cover block -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 z-[1]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center z-[2] pointer-events-auto px-4 pt-8 sm:pt-6 md:pt-4 lg:pt-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center drop-shadow-lg">
              Let's find what you need
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 w-full justify-items-center">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.link}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <img
                    src={service.icon}
                    alt={service.label}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-1 sm:mb-2 group-hover:scale-110 transition-transform mx-auto"
                  />
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-800 group-hover:text-[#278d90] text-center block w-full">
                    {service.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
