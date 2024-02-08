"use server";

import { axiosInstance } from "./axios";

export const login = async (user: {
  user: {
    email: string;
    password: string;
  };
}) => {
  try {
    const res = await axiosInstance.post("/auth/login", user);
    console.log(res.headers.getAuthorization);
    console.log(res);
    if (res.status === 200) {
      // @ts-ignore

      console.log(res?.headers?.get("Authorization"));
      console.log(res.headers.authorization);

      return res;
    }
  } catch (error: any) {
    throw new Error((error as Error).message);
  }
};
