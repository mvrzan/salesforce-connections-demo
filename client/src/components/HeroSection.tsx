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
    <div className="w-full relative">
      <img src={topLevelHero} alt="Hero Banner" className="w-full h-auto object-cover block m-0 p-0" />

      <div className="absolute left-1/3 top-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-start w-full max-w-2xl px-4 z-10 pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left drop-shadow-lg">Connect your world.</h1>
        <p className="text-xl md:text-2xl text-white mb-6 text-left drop-shadow-lg">
          Browse our devices, internet plans, and connected home services.
        </p>
        <button className="text-white py-3 px-6 rounded-3xl font-medium transition-colors mt-2 bg-[#278d90] pointer-events-auto">
          Let's Connect
        </button>
      </div>

      <img
        src={heroBannerBottom}
        alt="Hero Banner Bottom Overlay"
        className="w-full h-auto object-cover block m-0 p-0 -mt-96 relative z-[1]"
      />

      <div className="absolute left-1/2 top-[65%] w-full flex flex-col items-center z-20 transform -translate-x-1/2 -translate-y-full pointer-events-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center drop-shadow-lg">Let's find what you need</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full justify-items-center">
            {services.map((service) => (
              <a
                key={service.label}
                href={service.link}
                className="flex flex-col items-center justify-center text-center"
              >
                <img
                  src={service.icon}
                  alt={service.label}
                  className="w-28 h-28 mb-4 group-hover:scale-110 transition-transform mx-auto"
                />
                <span className="text-lg font-medium text-gray-800 group-hover:text-[#278d90] text-center block w-full">
                  {service.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
