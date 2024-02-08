"use server";

import { cookies } from "next/headers";
import { axiosInstance } from "./axios";
const cookieStore = cookies();

export const login = async (user: {
  user: {
    email: string;
    password: string;
  };
}) => {
  console.log(user);
  try {
    const res = await axiosInstance.post("/auth/login", {
      email: user.user.email,
      password: user.user.password,
    });
    if (res.status === 200) {
      const token = await res.headers.authorization;
      console.log({ token });
      if (token) {
        cookieStore.set("auth-token", token);
      }

      return res.data;
    }
  } catch (error: any) {
    console.log(error);
    throw new Error((error as Error).message);
  }
};
