import { Products } from "@/types";
import { get, post } from "../utils/apiHelper";

// method: "POST" => upload the file
export const uploadFile = async (data: any, config: any) => {
  try {
    const response = await post<Products[]>("/upload", data, config);
    return response;
  } catch (error) {
    console.error("Unable to upload file", error);
  }
};

// method: "GET" => get all the products
export const getProducts = async () => {
  try {
    const response = await get<Products[]>("/products");
    return response;
  } catch (error) {
    console.error("Unable to get the products", error);
  }
};
