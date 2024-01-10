import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <form>
      <h1 className="text-4xl">It is great to see you again</h1>
      <div className="mt-8 flex flex-col space-y-5 items-center">
        <Input className="w-4/5" placeholder="prachanda@gmail.com" />
        <Input className="w-4/5" placeholder="********" type="password" />
        <Button type="button" className="bg-primary hover:bg-primaryHover">
          Login
        </Button>

        <h5 className="text-sm">
          Don't have an account yet?{" "}
          <Link className="text-blue-600" href={"/user?q=signup"}>
            Register
          </Link>{" "}
        </h5>
      </div>
    </form>
  );
};

export default Login;
