"use client";

import React, { ButtonHTMLAttributes, FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState<null | string>();
  const router = useRouter();
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/auth/login", user);
      if (res.status === 200) router.push("/");
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

        {error && <h4 className="text-red-500 text-sm font-medium">{error}</h4>}
      </div>
    </form>
  );
};

export default Login;
