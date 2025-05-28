import { create } from "zustand";
import type { ProductType } from "../utils/types";

type BearStore = {
  bannerImage: string;
  setBannerImage: (image: string) => void;
  resetBannerImage: () => void;
  epRecommendedProducts: ProductType[];
  updateRecommendedProducts: (products: ProductType[]) => void;
};

const useBearStore = create<BearStore>((set) => ({
  // banner image
  bannerImage: "",
  setBannerImage: (image: string) => set({ bannerImage: image }),
  resetBannerImage: () => set({ bannerImage: "" }),

  // Salesforce Personalization
  epRecommendedProducts: [],
  updateRecommendedProducts: (products: ProductType[]) => set({ epRecommendedProducts: products }),
}));

export default useBearStore;
