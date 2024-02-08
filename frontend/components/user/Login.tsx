"use client";

import { axiosInstance } from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState<null | string>();
  const router = useRouter();
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", user);
      console.log(res.headers.getAuthorization);
      console.log(res);
      if (res.status === 200) {
        // @ts-ignore

        console.log(res?.headers?.get("Authorization"));
        console.log(res.headers.authorization);
        router.push("/");
        toast.success("Logged in success");
      }
    } catch (error: any) {
      console.log("catch blockkkkkk");
      setError(error!.response!.data);
    }
  };

  return (
    <form>
      <h1 className="text-4xl">It is great to see you again</h1>
      <div className="mt-8 flex flex-col space-y-5 items-center">
        <Input
          className="w-4/5"
          type="email"
          placeholder="prachanda@gmail.com"
          required
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <Input
          className="w-4/5"
          placeholder="********"
          type="password"
          required
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <Button
          className="bg-primary hover:bg-primaryHover"
          onClick={handleLogin}
        >
          Login
        </Button>

        <h5 className="text-sm">
          Don't have an account yet?{" "}
          <Link className="text-blue-600" href={"/user?q=signup"}>
            Register
          </Link>{" "}
        </h5>

        {error && (
          <h4 className="text-red-500 text-sm font-medium capitalize">
            {error}
          </h4>
        )}
      </div>
    </form>
  );
};

export default Login;
