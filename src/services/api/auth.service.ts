import { post } from "../utils/apiHelper";

// method : "POST" => login registered user
export const loginUser = async (data: any) => {
  try {
    const response = await post<{ status: string; message: string }>(
      "/user/login",
      data
    );
    return response;
  } catch (error) {
    console.error("Error while login user");
  }
};
