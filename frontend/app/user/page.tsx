import Login from "@/components/user/Login";
import Register from "@/components/user/Register";
import React from "react";

const page = ({ params, searchParams }: any) => {
  console.log(searchParams);

  const { q } = searchParams;

  return (
    <div className="grid place-items-center min-h-screen ">
      <div className="border p-8">
        {q === "signup" ? <Register /> : <Login />}
      </div>
    </div>
  );
};

export default page;
