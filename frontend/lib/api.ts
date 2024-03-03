"use server";

import { cookies } from "next/headers";
import { axiosInstance } from "./axios";

export const login = async (user: {
  user: {
    email: string;
    password: string;
  };
}) => {
  try {
    const cookieStore = cookies();
    const res = await axiosInstance.post("/auth/login", {
      email: user.user.email,
      password: user.user.password,
    });
    if (res.status === 200) {
      const token = await res.headers.authorization;
      if (token) {
        cookieStore.set("auth-token", token);
      }
    }
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data);
  }
};

export const activeCustomer = async () => {
  try {
    const res = await axiosInstance.get("/activeUser");
    return res.data;
  } catch (error: any) {
    console.log(error.response.data.error);
  }
};

export const addProperty = async (data: any) => {
  try {
    console.log({ data });
    const res = await axiosInstance.post("/property/create", data);
    return res.data;
  } catch (error: any) {
    console.log(error.response.data.error);
  }
};

export const logout = async () => {
  const cookieStore = cookies();
  const res = cookieStore.delete("auth-token");
};
