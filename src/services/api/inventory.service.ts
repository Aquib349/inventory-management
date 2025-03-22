import { Inventory } from "@/types";
import { get, post } from "../utils/apiHelper";

// method: "POST" => upload the file
export const uploadFile = async (data: any, config: any) => {
  try {
    const response = await post<Inventory[]>("/upload", data, config);
    return response;
  } catch (error) {
    console.error("Unable to upload file", error);
  }
};

// method: "GET" => get all the products
export const getInventory = async () => {
  try {
    const response = await get<Inventory[]>("/inventory");
    return response;
  } catch (error) {
    console.error("Unable to get the products", error);
  }
};
