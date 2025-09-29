import { axiosInstance } from "../config/axiosConfig";

export const signupApi = async (signupData) => {
  try {
    const response = await axiosInstance.post("/api/signup", signupData);
    return response.data;
  } catch (error) {
    console.log("Error in signupApi", error);
    throw error.data.message;
  }
};

export const loginApi = async (loginData) => {
  try {
    const response = await axiosInstance.post("/api/login", loginData);
    return response.data;
  } catch (error) {
    console.log("Error in loginApi", error);
    throw error.data.message;
  }
};

export const logoutApi = async () => {
  try {
    const response = await axiosInstance.post("/api/logout");
    return response.data;
  } catch (error) {
    console.log("Error in logoutApi", error);
    throw error.data.message;
  }
};
