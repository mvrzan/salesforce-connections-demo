import useBearStore from "../hooks/useBearStore";
import useSalesforceInteractions from "../hooks/useSalesforceInteractions";
import type { ProductType } from "../utils/types";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const sectionEntranceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 1.0,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.7 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

const Recommendations = () => {
  const { viewProduct } = useSalesforceInteractions();
  const epRecommendedProducts = useBearStore((state) => state.epRecommendedProducts);
  const recommendationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (epRecommendedProducts.length > 0 && recommendationsRef.current) {
      recommendationsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [epRecommendedProducts]);

  return (
    <motion.div
      ref={recommendationsRef}
      variants={sectionEntranceVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto my-12 p-4 md:p-8 bg-transparent rounded-lg text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 drop-shadow-md">Recommended for You</h2>
      <AnimatePresence mode="wait">
        {epRecommendedProducts.length === 0 ? (
          <motion.div key="no-recommendations" variants={itemVariants} initial="hidden" animate="visible" exit="hidden">
            <p className="text-lg text-gray-600">
              There are no recommendations for that particular ask. Please try searching for internet options, mobile
              plans, streaming options, bundles, or devices.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="recommendations-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {epRecommendedProducts.slice(0, 3).map((item: ProductType) => (
              <motion.div
                key={item.ssot__Id__c}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() => viewProduct(+item.ssot__Id__c, item.ssot__Name__c, item.ssot__Description__c)}
              >
                <img
                  src={item.ImageURL__c}
                  alt={item.ssot__Name__c}
                  className="w-full h-48 sm:h-56 object-contain p-4 bg-gray-50"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">{item.ssot__Name__c}</h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 flex-grow">{item.ssot__Description__c}</p>
                  <p className="text-xl lg:text-2xl font-bold text-[#278d90] mb-5">${item.Product_Price__c}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Recommendations;
