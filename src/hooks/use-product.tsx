import { ProductContext } from "@/contexts/product-master-context";
import { useContext } from "react";

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Product context must be within the Product Provider");
  }

  return context;
};
