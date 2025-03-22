import { InventoryContext } from "@/contexts/inventory-master-context";
import { useContext } from "react";

export const useInventory = () => {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("Inventory context must be within the Inventory Provider");
  }

  return context;
};
