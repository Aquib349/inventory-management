import { getInventory, uploadFile } from "@/services/api/inventory.service";
import { Inventory } from "@/types";
import { createContext, ReactNode, useState } from "react";

interface InventoryContextProps {
  allInventoryProducts: Inventory[] | null;
  uploadExcelFile: (data: any) => void;
  loading: boolean;
}
export const InventoryContext = createContext<
  InventoryContextProps | undefined
>(undefined);

interface InventoryContextProviderProps {
  children: ReactNode;
}

export const InventoryProvider = ({
  children,
}: InventoryContextProviderProps) => {
  const [allInventoryProducts, setAllInventoryProducts] = useState<
    Inventory[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);

  // function to get all the products
  async function getAllInventoryProducts() {
    try {
      const response: Inventory[] = (await getInventory()) || [];
      if (response) {
        setLoading(false);
        setAllInventoryProducts(response);
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
      const response: Inventory[] = (await uploadFile(data, config)) || [];
      if (response) {
        getAllInventoryProducts();
      }
    } catch (error) {
      console.error("Error while uploading file", error);
    }
  }
  return (
    <InventoryContext.Provider
      value={{ allInventoryProducts, uploadExcelFile, loading }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
