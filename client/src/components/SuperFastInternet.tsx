import greenOrbs from "../assets/background/LineArt_orbs_green.png";

const features = [
  {
    title: "Reliable",
    description: "Our uptime is industry-leading and award-winning.",
  },
  {
    title: "Simple",
    description: "Restriction free plans without mandatory bundles.",
  },
  {
    title: "Fast",
    description: "We offer the fastest internet available anywhere.",
  },
];

const Checkmark = () => (
  <svg
    className="mx-auto mb-2"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#E6F7FA" />
    <path
      d="M10 16.5L14 20.5L22 12.5"
      stroke="#AEE6E6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SuperFastInternet = () => {
  return (
    <section className="w-full pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24 text-center relative overflow-hidden">
      <img
        src={greenOrbs}
        alt="Green Orbs Background"
        className="absolute left-0 top-0 w-48 sm:w-64 md:w-80 lg:w-[400px] h-auto z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full px-4">
        <div className="text-xs font-bold tracking-widest text-[#d72660] mb-1 sm:mb-2 uppercase">
          SUPER FAST INTERNET
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
          Out-of-this-world speed.
        </h2>
        <div className="text-xl sm:text-2xl text-gray-500 mb-4 sm:mb-6">The best on Earth.</div>
        <button className="bg-[#0099b8] hover:bg-[#007a99] text-white font-semibold rounded-full px-6 py-2 sm:px-8 sm:py-3 mb-8 sm:mb-12 transition-colors duration-200">
          DIAL IN TODAY
        </button>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 sm:gap-12 w-full px-4">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className={
              `bg-white rounded-xl shadow-md p-6 sm:p-8 flex-1 max-w-xs w-full sm:w-auto mx-auto md:mx-0 flex flex-col items-center ` +
              (idx === 0 ? "md:relative md:-top-8 " : "") +
              (idx === features.length - 1 ? "md:relative md:top-8 " : "")
            }
          >
            <Checkmark />
            <div className="font-bold text-md sm:text-lg mb-2 text-gray-800">{feature.title}</div>
            <div className="text-gray-600 text-sm sm:text-base">{feature.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuperFastInternet;
