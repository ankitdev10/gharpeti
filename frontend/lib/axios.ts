import axios from "axios";
import { cookies } from "next/headers";
const { BACKEND_URL } = process.env;

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cookieStore = cookies();
    const token = cookieStore.get("auth-token");
    if (token) {
      console.log({ token });
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log("no token");
      throw new Error("Token Expired or doesnt exist");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
