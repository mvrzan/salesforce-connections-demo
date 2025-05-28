import React from "react";
import internetPlansIcon from "../assets/images/Icon_Circle_internetPlans_x2.png";
import mobilePlansIcon from "../assets/images/Icon_Circle_mobilePlans_x2.png";
import homeEntertainmentIcon from "../assets/images/Icon_Circle_homeEntertainment_x2.png";
import useSalesforceInteractions from "../hooks/useSalesforceInteractions";

interface RecommendationItem {
  id: string;
  image: string; // Imported image variable
  title: string;
  description: string;
  offer: string;
  link: string;
}

type RecommendationType = "internet" | "mobile" | "tv" | "bundle";

interface RecommendationsProps {
  recommendationType: RecommendationType;
}

const mockRecommendationsData: Record<RecommendationType, RecommendationItem[]> = {
  internet: [
    {
      id: "int1",
      image: internetPlansIcon,
      title: "Blazing Fast Fiber",
      description: "Experience the internet like never before with our fiber optic plans.",
      offer: "$49.99/mo",
      link: "#fiber-offer",
    },
    {
      id: "int2",
      image: internetPlansIcon,
      title: "Reliable Broadband",
      description: "Stable and fast internet for all your home needs.",
      offer: "$39.99/mo",
      link: "#broadband-offer",
    },
    {
      id: "int3",
      image: internetPlansIcon,
      title: "Budget Internet",
      description: "Affordable internet that keeps you connected.",
      offer: "$29.99/mo",
      link: "#budget-offer",
    },
  ],
  mobile: [
    {
      id: "mob1",
      image: mobilePlansIcon,
      title: "Unlimited 5G Plan",
      description: "Unlimited data, talk, and text on our 5G network.",
      offer: "$60/mo",
      link: "#mobile-5g",
    },
    {
      id: "mob2",
      image: mobilePlansIcon,
      title: "Family Share Plan",
      description: "Connect the whole family with shared data.",
      offer: "$100/mo for 4 lines",
      link: "#mobile-family",
    },
    {
      id: "mob3",
      image: mobilePlansIcon,
      title: "Prepaid Mobile",
      description: "Flexible prepaid options with no contracts.",
      offer: "Starting at $25",
      link: "#mobile-prepaid",
    },
  ],
  tv: [
    {
      id: "tv1",
      image: homeEntertainmentIcon,
      title: "Premium TV Package",
      description: "All your favorite channels, movies, and shows.",
      offer: "$79.99/mo",
      link: "#tv-premium",
    },
    {
      id: "tv2",
      image: homeEntertainmentIcon,
      title: "Sports Fanatic Bundle",
      description: "Never miss a game with our sports package.",
      offer: "$89.99/mo",
      link: "#tv-sports",
    },
    {
      id: "tv3",
      image: homeEntertainmentIcon,
      title: "Basic Cable",
      description: "Essential channels for everyday entertainment.",
      offer: "$30/mo",
      link: "#tv-basic",
    },
  ],
  bundle: [
    {
      id: "bun1",
      image: homeEntertainmentIcon,
      title: "Triple Play Offer",
      description: "Get Internet, TV, and Phone for one low price.",
      offer: "$99.99/mo",
      link: "#bundle-triple",
    },
    {
      id: "bun2",
      image: internetPlansIcon,
      title: "Internet + Mobile Deal",
      description: "Combine fast internet with a flexible mobile plan.",
      offer: "$80/mo",
      link: "#bundle-intmob",
    },
    {
      id: "bun3",
      image: mobilePlansIcon,
      title: "Student Bundle",
      description: "Affordable internet and mobile for students.",
      offer: "$50/mo",
      link: "#bundle-student",
    },
  ],
};

const Recommendations: React.FC<RecommendationsProps> = ({ recommendationType }) => {
  const { viewProduct } = useSalesforceInteractions();
  const recommendedServices = mockRecommendationsData[recommendationType] || mockRecommendationsData.bundle; // Fallback

  return (
    <div className="w-full max-w-6xl mx-auto my-12 p-4 md:p-8 bg-transparent rounded-lg text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 drop-shadow-md">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {recommendedServices.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => viewProduct(+item.id, item.title, item.description)}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 sm:h-56 object-contain p-4 bg-gray-50" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4 flex-grow">{item.description}</p>
              <p className="text-xl lg:text-2xl font-bold text-[#278d90] mb-5">{item.offer}</p>
              <a
                href={item.link}
                className="mt-auto bg-[#278d90] text-white py-2.5 px-5 rounded-lg font-medium hover:bg-[#1e7072] transition-colors self-center text-md lg:text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
