"use client";

import { login } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState<null | string>();
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ user });
      toast.success("Login in sucessfull");
      router.push("/");
    } catch (error: any) {
      console.log(error);

      toast.error(error.message as string);
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
        <Button type="submit" className="bg-primary hover:bg-primaryHover">
          Login
        </Button>

        <h5 className="text-sm">
          Don&apos;t have an account yet?{" "}
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
