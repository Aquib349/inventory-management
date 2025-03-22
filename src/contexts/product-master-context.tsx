import { getProducts, uploadFile } from "@/services/api/product.service";
import { Products } from "@/types";
import { createContext, ReactNode, useState } from "react";

interface ProductContextProps {
  allProducts: Products[] | null;
  uploadExcelFile: (data: any) => void;
  loading: boolean;
}
export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

interface ProductContextProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductContextProviderProps) => {
  const [allProducts, setAllProducts] = useState<Products[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // function to get all the products
  async function getAllProducts() {
    try {
      const response: Products[] = (await getProducts()) || [];
      if (response) {
        setLoading(false);
        setAllProducts(response);
      }
    } catch (error) {
      console.error("Error while fetching products", error);
    }
  }

  // function to upload the file
  async function uploadExcelFile(data: any) {
    const config = {
      headers: {
        "Content-Type": "application/vnd.ms-excel",
      },
    };
    setLoading(true);
    try {
      const response: Products[] = (await uploadFile(data, config)) || [];
      if (response) {
        getAllProducts();
      }
    } catch (error) {
      console.error("Error while uploading file", error);
    }
  }
  return (
    <ProductContext.Provider value={{ allProducts, uploadExcelFile, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
